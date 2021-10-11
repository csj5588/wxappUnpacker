/*v0.5vv_20190703_syb_scopedata*/
window.__wcc_version__ = 'v0.5vv_20190703_syb_scopedata';
window.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx = function(path, global) {
    if (typeof global === 'undefined') global = {};
    if (typeof __WXML_GLOBAL__ === 'undefined') {
        __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};

    function _(a, b) {
        if (typeof(b) != 'undefined') a.children.push(b);
    }

    function _v(k) {
        if (typeof(k) != 'undefined') return {
            tag: 'virtual',
            'wxKey': k,
            children: []
        };
        return {
            tag: 'virtual',
            children: []
        };
    }

    function _n(tag) {
        $gwxc++;
        if ($gwxc >= 16000) {
            throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'
        };
        return {
            tag: 'wx-' + tag,
            attr: {},
            children: [],
            n: [],
            raw: {},
            generics: {}
        }
    }

    function _p(a, b) {
        b && a.properities.push(b);
    }

    function _s(scope, env, key) {
        return typeof(scope[key]) != 'undefined' ? scope[key] : env[key]
    }

    function _wp(m) {
        console.warn("WXMLRT_$gwx:" + m)
    }

    function _wl(tname, prefix) {
        _wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')
    }
    $gwn = console.warn;
    $gwl = console.log;

    function $gwh() {
        function x() {}
        x.prototype = {
            hn: function(obj, all) {
                if (typeof(obj) == 'object') {
                    var cnt = 0;
                    var any1 = false,
                        any2 = false;
                    for (var x in obj) {
                        any1 = any1 | x === '__value__';
                        any2 = any2 | x === '__wxspec__';
                        cnt++;
                        if (cnt > 2) break;
                    }
                    return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? "h" : "n";
                }
                return "n";
            },
            nh: function(obj, special) {
                return {
                    __value__: obj,
                    __wxspec__: special ? special : true
                }
            },
            rv: function(obj) {
                return this.hn(obj, true) === 'n' ? obj : this.rv(obj.__value__);
            },
            hm: function(obj) {
                if (typeof(obj) == 'object') {
                    var cnt = 0;
                    var any1 = false,
                        any2 = false;
                    for (var x in obj) {
                        any1 = any1 | x === '__value__';
                        any2 = any2 | x === '__wxspec__';
                        cnt++;
                        if (cnt > 2) break;
                    }
                    return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
                }
                return false;
            }
        }
        return new x;
    }
    wh = $gwh();

    function $gstack(s) {
        var tmp = s.split('\n ' + ' ' + ' ' + ' ');
        for (var i = 0; i < tmp.length; ++i) {
            if (0 == i) continue;
            if (")" === tmp[i][tmp[i].length - 1])
                tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");
            else
                tmp[i] = "at anonymous function";
        }
        return tmp.join('\n ' + ' ' + ' ' + ' ');
    }

    function $gwrt(should_pass_type_info) {
        function ArithmeticEv(ops, e, s, g, o) {
            var _f = false;
            var rop = ops[0][1];
            var _a, _b, _c, _d, _aa, _bb;
            switch (rop) {
                case '?:':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h');
                    _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '&&':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h');
                    _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '||':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h');
                    _d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
                    _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                    return _d;
                    break;
                case '+':
                case '*':
                case '/':
                case '%':
                case '|':
                case '^':
                case '&':
                case '===':
                case '==':
                case '!=':
                case '!==':
                case '>=':
                case '<=':
                case '>':
                case '<':
                case '<<':
                case '>>':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _b = rev(ops[2], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                    switch (rop) {
                        case '+':
                            _d = wh.rv(_a) + wh.rv(_b);
                            break;
                        case '*':
                            _d = wh.rv(_a) * wh.rv(_b);
                            break;
                        case '/':
                            _d = wh.rv(_a) / wh.rv(_b);
                            break;
                        case '%':
                            _d = wh.rv(_a) % wh.rv(_b);
                            break;
                        case '|':
                            _d = wh.rv(_a) | wh.rv(_b);
                            break;
                        case '^':
                            _d = wh.rv(_a) ^ wh.rv(_b);
                            break;
                        case '&':
                            _d = wh.rv(_a) & wh.rv(_b);
                            break;
                        case '===':
                            _d = wh.rv(_a) === wh.rv(_b);
                            break;
                        case '==':
                            _d = wh.rv(_a) == wh.rv(_b);
                            break;
                        case '!=':
                            _d = wh.rv(_a) != wh.rv(_b);
                            break;
                        case '!==':
                            _d = wh.rv(_a) !== wh.rv(_b);
                            break;
                        case '>=':
                            _d = wh.rv(_a) >= wh.rv(_b);
                            break;
                        case '<=':
                            _d = wh.rv(_a) <= wh.rv(_b);
                            break;
                        case '>':
                            _d = wh.rv(_a) > wh.rv(_b);
                            break;
                        case '<':
                            _d = wh.rv(_a) < wh.rv(_b);
                            break;
                        case '<<':
                            _d = wh.rv(_a) << wh.rv(_b);
                            break;
                        case '>>':
                            _d = wh.rv(_a) >> wh.rv(_b);
                            break;
                        default:
                            break;
                    }
                    return _c ? wh.nh(_d, "c") : _d;
                    break;
                case '-':
                    _a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
                    _b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                    _d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
                    return _c ? wh.nh(_d, "c") : _d;
                    break;
                case '!':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) == 'h');
                    _d = !wh.rv(_a);
                    return _c ? wh.nh(_d, "c") : _d;
                case '~':
                    _a = rev(ops[1], e, s, g, o, _f);
                    _c = should_pass_type_info && (wh.hn(_a) == 'h');
                    _d = ~wh.rv(_a);
                    return _c ? wh.nh(_d, "c") : _d;
                default:
                    $gwn('unrecognized op' + rop);
            }
        }

        function rev(ops, e, s, g, o, newap) {
            var op = ops[0];
            var _f = false;
            if (typeof newap !== "undefined") o.ap = newap;
            if (typeof(op) === 'object') {
                var vop = op[0];
                var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
                switch (vop) {
                    case 2:
                        return ArithmeticEv(ops, e, s, g, o);
                        break;
                    case 4:
                        return rev(ops[1], e, s, g, o, _f);
                        break;
                    case 5:
                        switch (ops.length) {
                            case 2:
                                _a = rev(ops[1], e, s, g, o, _f);
                                return should_pass_type_info ? [_a] : [wh.rv(_a)];
                                return [_a];
                                break;
                            case 1:
                                return [];
                                break;
                            default:
                                _a = rev(ops[1], e, s, g, o, _f);
                                _b = rev(ops[2], e, s, g, o, _f);
                                _a.push(
                                    should_pass_type_info ?
                                    _b :
                                    wh.rv(_b)
                                );
                                return _a;
                                break;
                        }
                        break;
                    case 6:
                        _a = rev(ops[1], e, s, g, o);
                        var ap = o.ap;
                        _ta = wh.hn(_a) === 'h';
                        _aa = _ta ? wh.rv(_a) : _a;
                        o.is_affected |= _ta;
                        if (should_pass_type_info) {
                            if (_aa === null || typeof(_aa) === 'undefined') {
                                return _ta ? wh.nh(undefined, 'e') : undefined;
                            }
                            _b = rev(ops[2], e, s, g, o, _f);
                            _tb = wh.hn(_b) === 'h';
                            _bb = _tb ? wh.rv(_b) : _b;
                            o.ap = ap;
                            o.is_affected |= _tb;
                            if (_bb === null || typeof(_bb) === 'undefined' ||
                                _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
                            }
                            _d = _aa[_bb];
                            if (typeof _d === 'function' && !ap) _d = undefined;
                            _td = wh.hn(_d) === 'h';
                            o.is_affected |= _td;
                            return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
                        } else {
                            if (_aa === null || typeof(_aa) === 'undefined') {
                                return undefined;
                            }
                            _b = rev(ops[2], e, s, g, o, _f);
                            _tb = wh.hn(_b) === 'h';
                            _bb = _tb ? wh.rv(_b) : _b;
                            o.ap = ap;
                            o.is_affected |= _tb;
                            if (_bb === null || typeof(_bb) === 'undefined' ||
                                _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                return undefined;
                            }
                            _d = _aa[_bb];
                            if (typeof _d === 'function' && !ap) _d = undefined;
                            _td = wh.hn(_d) === 'h';
                            o.is_affected |= _td;
                            return _td ? wh.rv(_d) : _d;
                        }
                        case 7:
                            switch (ops[1][0]) {
                                case 11:
                                    o.is_affected |= wh.hn(g) === 'h';
                                    return g;
                                case 3:
                                    _s = wh.rv(s);
                                    _e = wh.rv(e);
                                    _b = ops[1][1];
                                    if (g && g.f && g.f.hasOwnProperty(_b)) {
                                        _a = g.f;
                                        o.ap = true;
                                    } else {
                                        _a = _s && _s.hasOwnProperty(_b) ?
                                            s : (_e && _e.hasOwnProperty(_b) ? e : undefined);
                                    }
                                    if (should_pass_type_info) {
                                        if (_a) {
                                            _ta = wh.hn(_a) === 'h';
                                            _aa = _ta ? wh.rv(_a) : _a;
                                            _d = _aa[_b];
                                            _td = wh.hn(_d) === 'h';
                                            o.is_affected |= _ta || _td;
                                            _d = _ta && !_td ? wh.nh(_d, 'e') : _d;
                                            return _d;
                                        }
                                    } else {
                                        if (_a) {
                                            _ta = wh.hn(_a) === 'h';
                                            _aa = _ta ? wh.rv(_a) : _a;
                                            _d = _aa[_b];
                                            _td = wh.hn(_d) === 'h';
                                            o.is_affected |= _ta || _td;
                                            return wh.rv(_d);
                                        }
                                    }
                                    return undefined;
                            }
                            break;
                        case 8:
                            _a = {};
                            _a[ops[1]] = rev(ops[2], e, s, g, o, _f);
                            return _a;
                            break;
                        case 9:
                            _a = rev(ops[1], e, s, g, o, _f);
                            _b = rev(ops[2], e, s, g, o, _f);

                            function merge(_a, _b, _ow) {
                                var ka, _bbk;
                                _ta = wh.hn(_a) === 'h';
                                _tb = wh.hn(_b) === 'h';
                                _aa = wh.rv(_a);
                                _bb = wh.rv(_b);
                                for (var k in _bb) {
                                    if (_ow || !_aa.hasOwnProperty(k)) {
                                        _aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k], 'e') : _bb[k]) : wh.rv(_bb[k]);
                                    }
                                }
                                return _a;
                            }
                            var _c = _a
                            var _ow = true
                            if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                                _a = _b
                                _b = _c
                                _ow = false
                            }
                            if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                                var _r = {}
                                return merge(merge(_r, _a, _ow), _b, _ow);
                            } else
                                return merge(_a, _b, _ow);
                            break;
                        case 10:
                            _a = rev(ops[1], e, s, g, o, _f);
                            _a = should_pass_type_info ? _a : wh.rv(_a);
                            return _a;
                            break;
                        case 12:
                            var _r;
                            _a = rev(ops[1], e, s, g, o);
                            if (!o.ap) {
                                return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
                            }
                            var ap = o.ap;
                            _b = rev(ops[2], e, s, g, o, _f);
                            o.ap = ap;
                            _ta = wh.hn(_a) === 'h';
                            _tb = _ca(_b);
                            _aa = wh.rv(_a);
                            _bb = wh.rv(_b);
                            snap_bb = $gdc(_bb, "nv_");
                            try {
                                _r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
                            } catch (e) {
                                e.message = e.message.replace(/nv_/g, "");
                                e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
                                e.stack = e.stack.replace(/\snv_/g, " ");
                                e.stack = $gstack(e.stack);
                                if (g.debugInfo) {
                                    e.stack += "\n " + " " + " " + " at " + g.debugInfo[0] + ":" + g.debugInfo[1] + ":" + g.debugInfo[2];
                                    console.error(e);
                                }
                                _r = undefined;
                            }
                            return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
                }
            } else {
                if (op === 3 || op === 1) return ops[1];
                else if (op === 11) {
                    var _a = '';
                    for (var i = 1; i < ops.length; i++) {
                        var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
                        _a += typeof(xp) === 'undefined' ? '' : xp;
                    }
                    return _a;
                }
            }
        }

        function wrapper(ops, e, s, g, o, newap) {
            if (ops[0] == '11182016') {
                g.debugInfo = ops[2];
                return rev(ops[1], e, s, g, o, newap);
            } else {
                g.debugInfo = null;
                return rev(ops, e, s, g, o, newap);
            }
        }
        return wrapper;
    }
    gra = $gwrt(true);
    grb = $gwrt(false);

    function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
        {
            var o = {
                is_affected: false
            };
            var a = gra(ops, e, s, g, o);
            if (JSON.stringify(a) != JSON.stringify(expect_a) ||
                o.is_affected != expect_affected) {
                console.warn("A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_a) + ", " + expect_affected + " is expected");
            }
        } {
            var o = {
                is_affected: false
            };
            var a = grb(ops, e, s, g, o);
            if (JSON.stringify(a) != JSON.stringify(expect_b) ||
                o.is_affected != expect_affected) {
                console.warn("B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_b) + ", " + expect_affected + " is expected");
            }
        }
    }

    function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
        var _n = wh.hn(to_iter) === 'n';
        var scope = wh.rv(_s);
        var has_old_item = scope.hasOwnProperty(itemname);
        var has_old_index = scope.hasOwnProperty(indexname);
        var old_item = scope[itemname];
        var old_index = scope[indexname];
        var full = Object.prototype.toString.call(wh.rv(to_iter));
        var type = full[8];
        if (type === 'N' && full[10] === 'l') type = 'X';
        var _y;
        if (_n) {
            if (type === 'A') {
                var r_iter_item;
                for (var i = 0; i < to_iter.length; i++) {
                    scope[itemname] = to_iter[i];
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    r_iter_item = wh.rv(to_iter[i]);
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'O') {
                var i = 0;
                var r_iter_item;
                for (var k in to_iter) {
                    scope[itemname] = to_iter[k];
                    scope[indexname] = _n ? k : wh.nh(k, 'h');
                    r_iter_item = wh.rv(to_iter[k]);
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                    i++;
                }
            } else if (type === 'S') {
                for (var i = 0; i < to_iter.length; i++) {
                    scope[itemname] = to_iter[i];
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(to_iter[i] + i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'N') {
                for (var i = 0; i < to_iter; i++) {
                    scope[itemname] = i;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else {}
        } else {
            var r_to_iter = wh.rv(to_iter);
            var r_iter_item, iter_item;
            if (type === 'A') {
                for (var i = 0; i < r_to_iter.length; i++) {
                    iter_item = r_to_iter[i];
                    iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                    r_iter_item = wh.rv(iter_item);
                    scope[itemname] = iter_item
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'O') {
                var i = 0;
                for (var k in r_to_iter) {
                    iter_item = r_to_iter[k];
                    iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                    r_iter_item = wh.rv(iter_item);
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? k : wh.nh(k, 'h');
                    var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                    _y = _v(key);
                    _(father, _y);
                    func(env, scope, _y, global);
                    i++
                }
            } else if (type === 'S') {
                for (var i = 0; i < r_to_iter.length; i++) {
                    iter_item = wh.nh(r_to_iter[i], 'h');
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(to_iter[i] + i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else if (type === 'N') {
                for (var i = 0; i < r_to_iter; i++) {
                    iter_item = wh.nh(i, 'h');
                    scope[itemname] = iter_item;
                    scope[indexname] = _n ? i : wh.nh(i, 'h');
                    _y = _v(i);
                    _(father, _y);
                    func(env, scope, _y, global);
                }
            } else {}
        }
        if (has_old_item) {
            scope[itemname] = old_item;
        } else {
            delete scope[itemname];
        }
        if (has_old_index) {
            scope[indexname] = old_index;
        } else {
            delete scope[indexname];
        }
    }

    function _ca(o) {
        if (wh.hn(o) == 'h') return true;
        if (typeof o !== "object") return false;
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                if (_ca(o[i])) return true;
            }
        }
        return false;
    }

    function _da(node, attrname, opindex, raw, o) {
        var isaffected = false;
        var value = $gdc(raw, "", 2);
        if (o.ap && value && value.constructor === Function) {
            attrname = "$wxs:" + attrname;
            node.attr["$gdc"] = $gdc;
        }
        if (o.is_affected || _ca(raw)) {
            node.n.push(attrname);
            node.raw[attrname] = raw;
        }
        node.attr[attrname] = value;
    }

    function _r(node, attrname, opindex, env, scope, global) {
        global.opindex = opindex;
        var o = {},
            _env;
        var a = grb(z[opindex], env, scope, global, o);
        _da(node, attrname, opindex, a, o);
    }

    function _rz(z, node, attrname, opindex, env, scope, global) {
        global.opindex = opindex;
        var o = {},
            _env;
        var a = grb(z[opindex], env, scope, global, o);
        _da(node, attrname, opindex, a, o);
    }

    function _o(opindex, env, scope, global) {
        global.opindex = opindex;
        var nothing = {};
        var r = grb(z[opindex], env, scope, global, nothing);
        return (r && r.constructor === Function) ? undefined : r;
    }

    function _oz(z, opindex, env, scope, global) {
        global.opindex = opindex;
        var nothing = {};
        var r = grb(z[opindex], env, scope, global, nothing);
        return (r && r.constructor === Function) ? undefined : r;
    }

    function _1(opindex, env, scope, global, o) {
        var o = o || {};
        global.opindex = opindex;
        return gra(z[opindex], env, scope, global, o);
    }

    function _1z(z, opindex, env, scope, global, o) {
        var o = o || {};
        global.opindex = opindex;
        return gra(z[opindex], env, scope, global, o);
    }

    function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
        var o = {};
        var to_iter = _1(opindex, env, scope, global);
        wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
    }

    function _2z(z, opindex, func, env, scope, global, father, itemname, indexname, keyname) {
        var o = {};
        var to_iter = _1z(z, opindex, env, scope, global);
        wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
    }


    function _m(tag, attrs, generics, env, scope, global) {
        var tmp = _n(tag);
        var base = 0;
        for (var i = 0; i < attrs.length; i += 2) {
            if (base + attrs[i + 1] < 0) {
                tmp.attr[attrs[i]] = true;
            } else {
                _r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                if (base === 0) base = attrs[i + 1];
            }
        }
        for (var i = 0; i < generics.length; i += 2) {
            if (base + generics[i + 1] < 0) {
                tmp.generics[generics[i]] = "";
            } else {
                var $t = grb(z[base + generics[i + 1]], env, scope, global);
                if ($t != "") $t = "wx-" + $t;
                tmp.generics[generics[i]] = $t;
                if (base === 0) base = generics[i + 1];
            }
        }
        return tmp;
    }

    function _mz(z, tag, attrs, generics, env, scope, global) {
        var tmp = _n(tag);
        var base = 0;
        for (var i = 0; i < attrs.length; i += 2) {
            if (base + attrs[i + 1] < 0) {
                tmp.attr[attrs[i]] = true;
            } else {
                _rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                if (base === 0) base = attrs[i + 1];
            }
        }
        for (var i = 0; i < generics.length; i += 2) {
            if (base + generics[i + 1] < 0) {
                tmp.generics[generics[i]] = "";
            } else {
                var $t = grb(z[base + generics[i + 1]], env, scope, global);
                if ($t != "") $t = "wx-" + $t;
                tmp.generics[generics[i]] = $t;
                if (base === 0) base = generics[i + 1];
            }
        }
        return tmp;
    }

    var nf_init = function() {
        if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
            nf_init_Object();
            nf_init_Function();
            nf_init_Array();
            nf_init_String();
            nf_init_Boolean();
            nf_init_Number();
            nf_init_Math();
            nf_init_Date();
            nf_init_RegExp();
        }
        if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true;
    };
    var nf_init_Object = function() {
        Object.defineProperty(Object.prototype, "nv_constructor", {
            writable: true,
            value: "Object"
        })
        Object.defineProperty(Object.prototype, "nv_toString", {
            writable: true,
            value: function() {
                return "[object Object]"
            }
        })
    }
    var nf_init_Function = function() {
        Object.defineProperty(Function.prototype, "nv_constructor", {
            writable: true,
            value: "Function"
        })
        Object.defineProperty(Function.prototype, "nv_length", {
            get: function() {
                return this.length;
            },
            set: function() {}
        });
        Object.defineProperty(Function.prototype, "nv_toString", {
            writable: true,
            value: function() {
                return "[function Function]"
            }
        })
    }
    var nf_init_Array = function() {
        Object.defineProperty(Array.prototype, "nv_toString", {
            writable: true,
            value: function() {
                return this.nv_join();
            }
        })
        Object.defineProperty(Array.prototype, "nv_join", {
            writable: true,
            value: function(s) {
                s = undefined == s ? ',' : s;
                var r = "";
                for (var i = 0; i < this.length; ++i) {
                    if (0 != i) r += s;
                    if (null == this[i] || undefined == this[i]) r += '';
                    else if (typeof this[i] == 'function') r += this[i].nv_toString();
                    else if (typeof this[i] == 'object' && this[i].nv_constructor === "Array") r += this[i].nv_join();
                    else r += this[i].toString();
                }
                return r;
            }
        })
        Object.defineProperty(Array.prototype, "nv_constructor", {
            writable: true,
            value: "Array"
        })
        Object.defineProperty(Array.prototype, "nv_concat", {
            writable: true,
            value: Array.prototype.concat
        })
        Object.defineProperty(Array.prototype, "nv_pop", {
            writable: true,
            value: Array.prototype.pop
        })
        Object.defineProperty(Array.prototype, "nv_push", {
            writable: true,
            value: Array.prototype.push
        })
        Object.defineProperty(Array.prototype, "nv_reverse", {
            writable: true,
            value: Array.prototype.reverse
        })
        Object.defineProperty(Array.prototype, "nv_shift", {
            writable: true,
            value: Array.prototype.shift
        })
        Object.defineProperty(Array.prototype, "nv_slice", {
            writable: true,
            value: Array.prototype.slice
        })
        Object.defineProperty(Array.prototype, "nv_sort", {
            writable: true,
            value: Array.prototype.sort
        })
        Object.defineProperty(Array.prototype, "nv_splice", {
            writable: true,
            value: Array.prototype.splice
        })
        Object.defineProperty(Array.prototype, "nv_unshift", {
            writable: true,
            value: Array.prototype.unshift
        })
        Object.defineProperty(Array.prototype, "nv_indexOf", {
            writable: true,
            value: Array.prototype.indexOf
        })
        Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
            writable: true,
            value: Array.prototype.lastIndexOf
        })
        Object.defineProperty(Array.prototype, "nv_every", {
            writable: true,
            value: Array.prototype.every
        })
        Object.defineProperty(Array.prototype, "nv_some", {
            writable: true,
            value: Array.prototype.some
        })
        Object.defineProperty(Array.prototype, "nv_forEach", {
            writable: true,
            value: Array.prototype.forEach
        })
        Object.defineProperty(Array.prototype, "nv_map", {
            writable: true,
            value: Array.prototype.map
        })
        Object.defineProperty(Array.prototype, "nv_filter", {
            writable: true,
            value: Array.prototype.filter
        })
        Object.defineProperty(Array.prototype, "nv_reduce", {
            writable: true,
            value: Array.prototype.reduce
        })
        Object.defineProperty(Array.prototype, "nv_reduceRight", {
            writable: true,
            value: Array.prototype.reduceRight
        })
        Object.defineProperty(Array.prototype, "nv_length", {
            get: function() {
                return this.length;
            },
            set: function(value) {
                this.length = value;
            }
        });
    }
    var nf_init_String = function() {
        Object.defineProperty(String.prototype, "nv_constructor", {
            writable: true,
            value: "String"
        })
        Object.defineProperty(String.prototype, "nv_toString", {
            writable: true,
            value: String.prototype.toString
        })
        Object.defineProperty(String.prototype, "nv_valueOf", {
            writable: true,
            value: String.prototype.valueOf
        })
        Object.defineProperty(String.prototype, "nv_charAt", {
            writable: true,
            value: String.prototype.charAt
        })
        Object.defineProperty(String.prototype, "nv_charCodeAt", {
            writable: true,
            value: String.prototype.charCodeAt
        })
        Object.defineProperty(String.prototype, "nv_concat", {
            writable: true,
            value: String.prototype.concat
        })
        Object.defineProperty(String.prototype, "nv_indexOf", {
            writable: true,
            value: String.prototype.indexOf
        })
        Object.defineProperty(String.prototype, "nv_lastIndexOf", {
            writable: true,
            value: String.prototype.lastIndexOf
        })
        Object.defineProperty(String.prototype, "nv_localeCompare", {
            writable: true,
            value: String.prototype.localeCompare
        })
        Object.defineProperty(String.prototype, "nv_match", {
            writable: true,
            value: String.prototype.match
        })
        Object.defineProperty(String.prototype, "nv_replace", {
            writable: true,
            value: String.prototype.replace
        })
        Object.defineProperty(String.prototype, "nv_search", {
            writable: true,
            value: String.prototype.search
        })
        Object.defineProperty(String.prototype, "nv_slice", {
            writable: true,
            value: String.prototype.slice
        })
        Object.defineProperty(String.prototype, "nv_split", {
            writable: true,
            value: String.prototype.split
        })
        Object.defineProperty(String.prototype, "nv_substring", {
            writable: true,
            value: String.prototype.substring
        })
        Object.defineProperty(String.prototype, "nv_toLowerCase", {
            writable: true,
            value: String.prototype.toLowerCase
        })
        Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
            writable: true,
            value: String.prototype.toLocaleLowerCase
        })
        Object.defineProperty(String.prototype, "nv_toUpperCase", {
            writable: true,
            value: String.prototype.toUpperCase
        })
        Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
            writable: true,
            value: String.prototype.toLocaleUpperCase
        })
        Object.defineProperty(String.prototype, "nv_trim", {
            writable: true,
            value: String.prototype.trim
        })
        Object.defineProperty(String.prototype, "nv_length", {
            get: function() {
                return this.length;
            },
            set: function(value) {
                this.length = value;
            }
        });
    }
    var nf_init_Boolean = function() {
        Object.defineProperty(Boolean.prototype, "nv_constructor", {
            writable: true,
            value: "Boolean"
        })
        Object.defineProperty(Boolean.prototype, "nv_toString", {
            writable: true,
            value: Boolean.prototype.toString
        })
        Object.defineProperty(Boolean.prototype, "nv_valueOf", {
            writable: true,
            value: Boolean.prototype.valueOf
        })
    }
    var nf_init_Number = function() {
        Object.defineProperty(Number, "nv_MAX_VALUE", {
            writable: false,
            value: Number.MAX_VALUE
        })
        Object.defineProperty(Number, "nv_MIN_VALUE", {
            writable: false,
            value: Number.MIN_VALUE
        })
        Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
            writable: false,
            value: Number.NEGATIVE_INFINITY
        })
        Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
            writable: false,
            value: Number.POSITIVE_INFINITY
        })
        Object.defineProperty(Number.prototype, "nv_constructor", {
            writable: true,
            value: "Number"
        })
        Object.defineProperty(Number.prototype, "nv_toString", {
            writable: true,
            value: Number.prototype.toString
        })
        Object.defineProperty(Number.prototype, "nv_toLocaleString", {
            writable: true,
            value: Number.prototype.toLocaleString
        })
        Object.defineProperty(Number.prototype, "nv_valueOf", {
            writable: true,
            value: Number.prototype.valueOf
        })
        Object.defineProperty(Number.prototype, "nv_toFixed", {
            writable: true,
            value: Number.prototype.toFixed
        })
        Object.defineProperty(Number.prototype, "nv_toExponential", {
            writable: true,
            value: Number.prototype.toExponential
        })
        Object.defineProperty(Number.prototype, "nv_toPrecision", {
            writable: true,
            value: Number.prototype.toPrecision
        })
    }
    var nf_init_Math = function() {
        Object.defineProperty(Math, "nv_E", {
            writable: false,
            value: Math.E
        })
        Object.defineProperty(Math, "nv_LN10", {
            writable: false,
            value: Math.LN10
        })
        Object.defineProperty(Math, "nv_LN2", {
            writable: false,
            value: Math.LN2
        })
        Object.defineProperty(Math, "nv_LOG2E", {
            writable: false,
            value: Math.LOG2E
        })
        Object.defineProperty(Math, "nv_LOG10E", {
            writable: false,
            value: Math.LOG10E
        })
        Object.defineProperty(Math, "nv_PI", {
            writable: false,
            value: Math.PI
        })
        Object.defineProperty(Math, "nv_SQRT1_2", {
            writable: false,
            value: Math.SQRT1_2
        })
        Object.defineProperty(Math, "nv_SQRT2", {
            writable: false,
            value: Math.SQRT2
        })
        Object.defineProperty(Math, "nv_abs", {
            writable: false,
            value: Math.abs
        })
        Object.defineProperty(Math, "nv_acos", {
            writable: false,
            value: Math.acos
        })
        Object.defineProperty(Math, "nv_asin", {
            writable: false,
            value: Math.asin
        })
        Object.defineProperty(Math, "nv_atan", {
            writable: false,
            value: Math.atan
        })
        Object.defineProperty(Math, "nv_atan2", {
            writable: false,
            value: Math.atan2
        })
        Object.defineProperty(Math, "nv_ceil", {
            writable: false,
            value: Math.ceil
        })
        Object.defineProperty(Math, "nv_cos", {
            writable: false,
            value: Math.cos
        })
        Object.defineProperty(Math, "nv_exp", {
            writable: false,
            value: Math.exp
        })
        Object.defineProperty(Math, "nv_floor", {
            writable: false,
            value: Math.floor
        })
        Object.defineProperty(Math, "nv_log", {
            writable: false,
            value: Math.log
        })
        Object.defineProperty(Math, "nv_max", {
            writable: false,
            value: Math.max
        })
        Object.defineProperty(Math, "nv_min", {
            writable: false,
            value: Math.min
        })
        Object.defineProperty(Math, "nv_pow", {
            writable: false,
            value: Math.pow
        })
        Object.defineProperty(Math, "nv_random", {
            writable: false,
            value: Math.random
        })
        Object.defineProperty(Math, "nv_round", {
            writable: false,
            value: Math.round
        })
        Object.defineProperty(Math, "nv_sin", {
            writable: false,
            value: Math.sin
        })
        Object.defineProperty(Math, "nv_sqrt", {
            writable: false,
            value: Math.sqrt
        })
        Object.defineProperty(Math, "nv_tan", {
            writable: false,
            value: Math.tan
        })
    }
    var nf_init_Date = function() {
        Object.defineProperty(Date.prototype, "nv_constructor", {
            writable: true,
            value: "Date"
        })
        Object.defineProperty(Date, "nv_parse", {
            writable: true,
            value: Date.parse
        })
        Object.defineProperty(Date, "nv_UTC", {
            writable: true,
            value: Date.UTC
        })
        Object.defineProperty(Date, "nv_now", {
            writable: true,
            value: Date.now
        })
        Object.defineProperty(Date.prototype, "nv_toString", {
            writable: true,
            value: Date.prototype.toString
        })
        Object.defineProperty(Date.prototype, "nv_toDateString", {
            writable: true,
            value: Date.prototype.toDateString
        })
        Object.defineProperty(Date.prototype, "nv_toTimeString", {
            writable: true,
            value: Date.prototype.toTimeString
        })
        Object.defineProperty(Date.prototype, "nv_toLocaleString", {
            writable: true,
            value: Date.prototype.toLocaleString
        })
        Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
            writable: true,
            value: Date.prototype.toLocaleDateString
        })
        Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
            writable: true,
            value: Date.prototype.toLocaleTimeString
        })
        Object.defineProperty(Date.prototype, "nv_valueOf", {
            writable: true,
            value: Date.prototype.valueOf
        })
        Object.defineProperty(Date.prototype, "nv_getTime", {
            writable: true,
            value: Date.prototype.getTime
        })
        Object.defineProperty(Date.prototype, "nv_getFullYear", {
            writable: true,
            value: Date.prototype.getFullYear
        })
        Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
            writable: true,
            value: Date.prototype.getUTCFullYear
        })
        Object.defineProperty(Date.prototype, "nv_getMonth", {
            writable: true,
            value: Date.prototype.getMonth
        })
        Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
            writable: true,
            value: Date.prototype.getUTCMonth
        })
        Object.defineProperty(Date.prototype, "nv_getDate", {
            writable: true,
            value: Date.prototype.getDate
        })
        Object.defineProperty(Date.prototype, "nv_getUTCDate", {
            writable: true,
            value: Date.prototype.getUTCDate
        })
        Object.defineProperty(Date.prototype, "nv_getDay", {
            writable: true,
            value: Date.prototype.getDay
        })
        Object.defineProperty(Date.prototype, "nv_getUTCDay", {
            writable: true,
            value: Date.prototype.getUTCDay
        })
        Object.defineProperty(Date.prototype, "nv_getHours", {
            writable: true,
            value: Date.prototype.getHours
        })
        Object.defineProperty(Date.prototype, "nv_getUTCHours", {
            writable: true,
            value: Date.prototype.getUTCHours
        })
        Object.defineProperty(Date.prototype, "nv_getMinutes", {
            writable: true,
            value: Date.prototype.getMinutes
        })
        Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
            writable: true,
            value: Date.prototype.getUTCMinutes
        })
        Object.defineProperty(Date.prototype, "nv_getSeconds", {
            writable: true,
            value: Date.prototype.getSeconds
        })
        Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
            writable: true,
            value: Date.prototype.getUTCSeconds
        })
        Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
            writable: true,
            value: Date.prototype.getMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
            writable: true,
            value: Date.prototype.getUTCMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
            writable: true,
            value: Date.prototype.getTimezoneOffset
        })
        Object.defineProperty(Date.prototype, "nv_setTime", {
            writable: true,
            value: Date.prototype.setTime
        })
        Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
            writable: true,
            value: Date.prototype.setMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
            writable: true,
            value: Date.prototype.setUTCMilliseconds
        })
        Object.defineProperty(Date.prototype, "nv_setSeconds", {
            writable: true,
            value: Date.prototype.setSeconds
        })
        Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
            writable: true,
            value: Date.prototype.setUTCSeconds
        })
        Object.defineProperty(Date.prototype, "nv_setMinutes", {
            writable: true,
            value: Date.prototype.setMinutes
        })
        Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
            writable: true,
            value: Date.prototype.setUTCMinutes
        })
        Object.defineProperty(Date.prototype, "nv_setHours", {
            writable: true,
            value: Date.prototype.setHours
        })
        Object.defineProperty(Date.prototype, "nv_setUTCHours", {
            writable: true,
            value: Date.prototype.setUTCHours
        })
        Object.defineProperty(Date.prototype, "nv_setDate", {
            writable: true,
            value: Date.prototype.setDate
        })
        Object.defineProperty(Date.prototype, "nv_setUTCDate", {
            writable: true,
            value: Date.prototype.setUTCDate
        })
        Object.defineProperty(Date.prototype, "nv_setMonth", {
            writable: true,
            value: Date.prototype.setMonth
        })
        Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
            writable: true,
            value: Date.prototype.setUTCMonth
        })
        Object.defineProperty(Date.prototype, "nv_setFullYear", {
            writable: true,
            value: Date.prototype.setFullYear
        })
        Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
            writable: true,
            value: Date.prototype.setUTCFullYear
        })
        Object.defineProperty(Date.prototype, "nv_toUTCString", {
            writable: true,
            value: Date.prototype.toUTCString
        })
        Object.defineProperty(Date.prototype, "nv_toISOString", {
            writable: true,
            value: Date.prototype.toISOString
        })
        Object.defineProperty(Date.prototype, "nv_toJSON", {
            writable: true,
            value: Date.prototype.toJSON
        })
    }
    var nf_init_RegExp = function() {
        Object.defineProperty(RegExp.prototype, "nv_constructor", {
            writable: true,
            value: "RegExp"
        })
        Object.defineProperty(RegExp.prototype, "nv_exec", {
            writable: true,
            value: RegExp.prototype.exec
        })
        Object.defineProperty(RegExp.prototype, "nv_test", {
            writable: true,
            value: RegExp.prototype.test
        })
        Object.defineProperty(RegExp.prototype, "nv_toString", {
            writable: true,
            value: RegExp.prototype.toString
        })
        Object.defineProperty(RegExp.prototype, "nv_source", {
            get: function() {
                return this.source;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_global", {
            get: function() {
                return this.global;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {
            get: function() {
                return this.ignoreCase;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_multiline", {
            get: function() {
                return this.multiline;
            },
            set: function() {}
        });
        Object.defineProperty(RegExp.prototype, "nv_lastIndex", {
            get: function() {
                return this.lastIndex;
            },
            set: function(v) {
                this.lastIndex = v;
            }
        });
    }
    nf_init();
    var nv_getDate = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(Date);
        return new(Function.prototype.bind.apply(Date, args));
    }
    var nv_getRegExp = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(RegExp);
        return new(Function.prototype.bind.apply(RegExp, args));
    }
    var nv_console = {}
    nv_console.nv_log = function() {
        var res = "WXSRT:";
        for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";
        console.log(res);
    }
    var nv_parseInt = parseInt,
        nv_parseFloat = parseFloat,
        nv_isNaN = isNaN,
        nv_isFinite = isFinite,
        nv_decodeURI = decodeURI,
        nv_decodeURIComponent = decodeURIComponent,
        nv_encodeURI = encodeURI,
        nv_encodeURIComponent = encodeURIComponent;

    function $gdc(o, p, r) {
        o = wh.rv(o);
        if (o === null || o === undefined) return o;
        if (o.constructor === String || o.constructor === Boolean || o.constructor === Number) return o;
        if (o.constructor === Object) {
            var copy = {};
            for (var k in o)
                if (o.hasOwnProperty(k))
                    if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
                    else copy[p + k] = $gdc(o[k], p, r);
            return copy;
        }
        if (o.constructor === Array) {
            var copy = [];
            for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
            return copy;
        }
        if (o.constructor === Date) {
            var copy = new Date();
            copy.setTime(o.getTime());
            return copy;
        }
        if (o.constructor === RegExp) {
            var f = "";
            if (o.global) f += "g";
            if (o.ignoreCase) f += "i";
            if (o.multiline) f += "m";
            return (new RegExp(o.source, f));
        }
        if (r && o.constructor === Function) {
            if (r == 1) return $gdc(o(), undefined, 2);
            if (r == 2) return o;
        }
        return null;
    }
    var nv_JSON = {}
    nv_JSON.nv_stringify = function(o) {
        JSON.stringify(o);
        return JSON.stringify($gdc(o));
    }
    nv_JSON.nv_parse = function(o) {
        if (o === undefined) return undefined;
        var t = JSON.parse(o);
        return $gdc(t, 'nv_');
    }

    function _af(p, a, r, c) {
        p.extraAttr = {
            "t_action": a,
            "t_rawid": r
        };
        if (typeof(c) != 'undefined') p.extraAttr.t_cid = c;
    }

    function _gv() {
        if (typeof(window.__webview_engine_version__) == 'undefined') return 0.0;
        return window.__webview_engine_version__;
    }

    function _ai(i, p, e, me, r, c) {
        var x = _grp(p, e, me);
        if (x) i.push(x);
        else {
            i.push('');
            _wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.')
        }
    }

    function _grp(p, e, me) {
        if (p[0] != '/') {
            var mepart = me.split('/');
            mepart.pop();
            var ppart = p.split('/');
            for (var i = 0; i < ppart.length; i++) {
                if (ppart[i] == '..') mepart.pop();
                else if (!ppart[i] || ppart[i] == '.') continue;
                else mepart.push(ppart[i]);
            }
            p = mepart.join('/');
        }
        if (me[0] == '.' && p[0] == '/') p = '.' + p;
        if (e[p]) return p;
        if (e[p + '.wxml']) return p + '.wxml';
    }

    function _gd(p, c, e, d) {
        if (!c) return;
        if (d[p][c]) return d[p][c];
        for (var x = e[p].i.length - 1; x >= 0; x--) {
            if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c]
        };
        for (var x = e[p].ti.length - 1; x >= 0; x--) {
            var q = _grp(e[p].ti[x], e, p);
            if (q && d[q][c]) return d[q][c]
        }
        var ii = _gapi(e, p);
        for (var x = 0; x < ii.length; x++) {
            if (ii[x] && d[ii[x]][c]) return d[ii[x]][c]
        }
        for (var k = e[p].j.length - 1; k >= 0; k--)
            if (e[p].j[k]) {
                for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
                    var pp = _grp(e[e[p].j[k]].ti[q], e, p);
                    if (pp && d[pp][c]) {
                        return d[pp][c]
                    }
                }
            }
    }

    function _gapi(e, p) {
        if (!p) return [];
        if ($gaic[p]) {
            return $gaic[p]
        };
        var ret = [],
            q = [],
            h = 0,
            t = 0,
            put = {},
            visited = {};
        q.push(p);
        visited[p] = true;
        t++;
        while (h < t) {
            var a = q[h++];
            for (var i = 0; i < e[a].ic.length; i++) {
                var nd = e[a].ic[i];
                var np = _grp(nd, e, a);
                if (np && !visited[np]) {
                    visited[np] = true;
                    q.push(np);
                    t++;
                }
            }
            for (var i = 0; a != p && i < e[a].ti.length; i++) {
                var ni = e[a].ti[i];
                var nm = _grp(ni, e, a);
                if (nm && !put[nm]) {
                    put[nm] = true;
                    ret.push(nm);
                }
            }
        }
        $gaic[p] = ret;
        return ret;
    }
    var $ixc = {};

    function _ic(p, ent, me, e, s, r, gg) {
        var x = _grp(p, ent, me);
        ent[me].j.push(x);
        if (x) {
            if ($ixc[x]) {
                _wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');
                return;
            }
            $ixc[x] = true;
            try {
                ent[x].f(e, s, r, gg)
            } catch (e) {}
            $ixc[x] = false;
        } else {
            _wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.')
        }
    }

    function _w(tn, f, line, c) {
        _wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
    }

    function _ev(dom) {
        var changed = false;
        delete dom.properities;
        delete dom.n;
        if (dom.children) {
            do {
                changed = false;
                var newch = [];
                for (var i = 0; i < dom.children.length; i++) {
                    var ch = dom.children[i];
                    if (ch.tag == 'virtual') {
                        changed = true;
                        for (var j = 0; ch.children && j < ch.children.length; j++) {
                            newch.push(ch.children[j]);
                        }
                    } else {
                        newch.push(ch);
                    }
                }
                dom.children = newch;
            } while (changed);
            for (var i = 0; i < dom.children.length; i++) {
                _ev(dom.children[i]);
            }
        }
        return dom;
    }

    function _tsd(root) {
        if (root.tag == "wx-wx-scope") {
            root.tag = "virtual";
            root.wxCkey = "11";
            root['wxScopeData'] = root.attr['wx:scope-data'];
            delete root.n;
            delete root.raw;
            delete root.generics;
            delete root.attr;
        }
        for (var i = 0; root.children && i < root.children.length; i++) {
            _tsd(root.children[i]);
        }
        return root;
    }

    var e_ = {}
    if (typeof(global.entrys) === 'undefined') global.entrys = {};
    e_ = global.entrys;
    var d_ = {}
    if (typeof(global.defines) === 'undefined') global.defines = {};
    d_ = global.defines;
    var f_ = {}
    if (typeof(global.modules) === 'undefined') global.modules = {};
    f_ = global.modules || {};
    var p_ = {}
    var cs
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx || [];
    __WXML_GLOBAL__.debuginfo_set = __WXML_GLOBAL__.debuginfo_set || {};
    var debugInfo = __WXML_GLOBAL__.debuginfo_set.$gwx || [];

    function gz$gwx_1() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_1) return __WXML_GLOBAL__.ops_cached.$gwx_1
        __WXML_GLOBAL__.ops_cached.$gwx_1 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/animation/animation.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'createAnimation']
            ], ['./page/API/animation/animation.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/animation/animation.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/animation/animation.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/animation/animation.wxml', 8, 17])
            Z([3, 'animation-element-wrapper'], ['./page/API/animation/animation.wxml', 9, 19])
            Z([
                [7],
                [3, 'animation']
            ], ['./page/API/animation/animation.wxml', 10, 51])
            Z([3, 'animation-element'], ['./page/API/animation/animation.wxml', 10, 21])
            Z([3, 'animation-buttons'], ['./page/API/animation/animation.wxml', 12, 19])
            Z([3, 'true'], ['./page/API/animation/animation.wxml', 12, 48])
            Z([3, 'rotate'], ['./page/API/animation/animation.wxml', 13, 50])
            Z([3, 'animation-button'], ['./page/API/animation/animation.wxml', 13, 23])
            Z([3, '旋转'], ['./page/API/animation/animation.wxml', 13, 59])
            Z([3, 'scale'], ['./page/API/animation/animation.wxml', 14, 50])
            Z(z[11][1], ['./page/API/animation/animation.wxml', 14, 23])
            Z([3, ' 缩放'], ['./page/API/animation/animation.wxml', 14, 58])
            Z([3, 'translate'], ['./page/API/animation/animation.wxml', 15, 50])
            Z(z[11][1], ['./page/API/animation/animation.wxml', 15, 23])
            Z([3, '移动'], ['./page/API/animation/animation.wxml', 15, 62])
            Z([3, 'skew'], ['./page/API/animation/animation.wxml', 16, 50])
            Z(z[11][1], ['./page/API/animation/animation.wxml', 16, 23])
            Z([3, '倾斜'], ['./page/API/animation/animation.wxml', 16, 57])
            Z([3, 'rotateAndScale'], ['./page/API/animation/animation.wxml', 17, 50])
            Z(z[11][1], ['./page/API/animation/animation.wxml', 17, 23])
            Z([3, '旋转并缩放'], ['./page/API/animation/animation.wxml', 17, 67])
            Z([3, 'rotateThenScale'], ['./page/API/animation/animation.wxml', 18, 50])
            Z(z[11][1], ['./page/API/animation/animation.wxml', 18, 23])
            Z([3, '旋转后缩放'], ['./page/API/animation/animation.wxml', 18, 68])
            Z([3, 'all'], ['./page/API/animation/animation.wxml', 19, 50])
            Z(z[11][1], ['./page/API/animation/animation.wxml', 19, 23])
            Z([3, '同时展示全部'], ['./page/API/animation/animation.wxml', 19, 56])
            Z([3, 'allInQueue'], ['./page/API/animation/animation.wxml', 20, 50])
            Z(z[11][1], ['./page/API/animation/animation.wxml', 20, 23])
            Z([3, '顺序展示全部'], ['./page/API/animation/animation.wxml', 20, 63])
            Z([3, 'reset'], ['./page/API/animation/animation.wxml', 21, 56])
            Z([3, 'animation-button-reset'], ['./page/API/animation/animation.wxml', 21, 23])
            Z([3, '还原'], ['./page/API/animation/animation.wxml', 21, 64])
            Z([3, 'footer'], ['./page/API/animation/animation.wxml', 26, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_1);
        return __WXML_GLOBAL__.ops_cached.$gwx_1
    }

    function gz$gwx_2() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_2) return __WXML_GLOBAL__.ops_cached.$gwx_2
        __WXML_GLOBAL__.ops_cached.$gwx_2 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/background-audio/background-audio.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'backgroundAudio']
            ], ['./page/API/background-audio/background-audio.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/background-audio/background-audio.wxml', 5, 16])
            Z([3, 'page-body-wrapper'], ['./page/API/background-audio/background-audio.wxml', 7, 15])
            Z([3, 'page-body-info'], ['./page/API/background-audio/background-audio.wxml', 8, 17])
            Z([3, 'time-big'], ['./page/API/background-audio/background-audio.wxml', 9, 19])
            Z([a, [
                [7],
                [3, 'formatedPlayTime']
            ]], ['./page/API/background-audio/background-audio.wxml', 9, 30])
            Z([3, 'seek'], ['./page/API/background-audio/background-audio.wxml', 10, 89])
            Z([3, 'slider'], ['./page/API/background-audio/background-audio.wxml', 10, 21])
            Z([3, '269'], ['./page/API/background-audio/background-audio.wxml', 10, 42])
            Z([3, '0'], ['./page/API/background-audio/background-audio.wxml', 10, 34])
            Z([3, '1'], ['./page/API/background-audio/background-audio.wxml', 10, 53])
            Z([
                [7],
                [3, 'playTime']
            ], ['./page/API/background-audio/background-audio.wxml', 10, 63])
            Z([3, 'play-time'], ['./page/API/background-audio/background-audio.wxml', 11, 19])
            Z([3, '00:00'], ['./page/API/background-audio/background-audio.wxml', 12, 15])
            Z([3, '04:29'], ['./page/API/background-audio/background-audio.wxml', 13, 15])
            Z([3, 'page-body-text'], ['./page/API/background-audio/background-audio.wxml', 16, 17])
            Z([3, '离开应用后音乐也可保持播放'], ['./page/API/background-audio/background-audio.wxml', 16, 34])
            Z([3, 'page-body-buttons'], ['./page/API/background-audio/background-audio.wxml', 17, 17])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'playing']
                ],
                [1, true]
            ], ['./page/API/background-audio/background-audio.wxml', 18, 20])
            Z([3, 'stop'], ['./page/API/background-audio/background-audio.wxml', 19, 48])
            Z([3, 'page-body-button'], ['./page/API/background-audio/background-audio.wxml', 19, 21])
            Z([3, '/image/stop.png'], ['./page/API/background-audio/background-audio.wxml', 20, 22])
            Z([3, 'pause'], ['./page/API/background-audio/background-audio.wxml', 22, 48])
            Z(z[21][1], ['./page/API/background-audio/background-audio.wxml', 22, 21])
            Z([3, '/image/pause.png'], ['./page/API/background-audio/background-audio.wxml', 23, 22])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'playing']
                ],
                [1, false]
            ], ['./page/API/background-audio/background-audio.wxml', 26, 20])
            Z(z[21][1], ['./page/API/background-audio/background-audio.wxml', 27, 21])
            Z([3, 'play'], ['./page/API/background-audio/background-audio.wxml', 28, 48])
            Z(z[21][1], ['./page/API/background-audio/background-audio.wxml', 28, 21])
            Z([3, '/image/play.png'], ['./page/API/background-audio/background-audio.wxml', 29, 22])
            Z(z[21][1], ['./page/API/background-audio/background-audio.wxml', 32, 19])
            Z([3, 'footer'], ['./page/API/background-audio/background-audio.wxml', 36, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_2);
        return __WXML_GLOBAL__.ops_cached.$gwx_2
    }

    function gz$gwx_3() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_3) return __WXML_GLOBAL__.ops_cached.$gwx_3
        __WXML_GLOBAL__.ops_cached.$gwx_3 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/canvas/canvas.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'createCanvas']
            ], ['./page/API/canvas/canvas.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/canvas/canvas.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/canvas/canvas.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/canvas/canvas.wxml', 8, 17])
            Z([3, 'canvas'], ['./page/API/canvas/canvas.wxml', 9, 25])
            Z(z[5][1], ['./page/API/canvas/canvas.wxml', 9, 40])
            Z([3, 'footer'], ['./page/API/canvas/canvas.wxml', 13, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_3);
        return __WXML_GLOBAL__.ops_cached.$gwx_3
    }

    function gz$gwx_4() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_4) return __WXML_GLOBAL__.ops_cached.$gwx_4
        __WXML_GLOBAL__.ops_cached.$gwx_4 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'footer'], ['./page/API/common/footer.wxml', 1, 15])
            Z([3, 'page-footer'], ['./page/API/common/footer.wxml', 2, 15])
            Z([3, '\n    微信接口功能\n  '], ['./page/API/common/footer.wxml', 2, 29])
        })(__WXML_GLOBAL__.ops_cached.$gwx_4);
        return __WXML_GLOBAL__.ops_cached.$gwx_4
    }

    function gz$gwx_5() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_5) return __WXML_GLOBAL__.ops_cached.$gwx_5
        __WXML_GLOBAL__.ops_cached.$gwx_5 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'header'], ['./page/API/common/header.wxml', 1, 15])
            Z([3, 'page-header'], ['./page/API/common/header.wxml', 2, 15])
            Z([3, 'page-header-text'], ['./page/API/common/header.wxml', 3, 17])
            Z([a, [
                [7],
                [3, 'title']
            ]], ['./page/API/common/header.wxml', 3, 36])
        })(__WXML_GLOBAL__.ops_cached.$gwx_5);
        return __WXML_GLOBAL__.ops_cached.$gwx_5
    }

    function gz$gwx_6() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_6) return __WXML_GLOBAL__.ops_cached.$gwx_6
        __WXML_GLOBAL__.ops_cached.$gwx_6 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/download-file/download-file.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'downloadFile']
            ], ['./page/API/download-file/download-file.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/download-file/download-file.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/download-file/download-file.wxml', 7, 15])
            Z([3, 'page-body-wording'], ['./page/API/download-file/download-file.wxml', 8, 17])
            Z([3, 'page-body-text'], ['./page/API/download-file/download-file.wxml', 9, 19])
            Z([3, '\n        搭建好自己的后台服务器后，可以将服务器上的图片视频等资源下载到手机上。\n      '], ['./page/API/download-file/download-file.wxml', 9, 36])
            Z([3, 'footer'], ['./page/API/download-file/download-file.wxml', 15, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_6);
        return __WXML_GLOBAL__.ops_cached.$gwx_6
    }

    function gz$gwx_7() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_7) return __WXML_GLOBAL__.ops_cached.$gwx_7
        __WXML_GLOBAL__.ops_cached.$gwx_7 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/file/file.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'saveFile']
            ], ['./page/API/file/file.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/file/file.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/file/file.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/file/file.wxml', 8, 17])
            Z([3, 'page-body-info'], ['./page/API/file/file.wxml', 9, 19])
            Z([3, 'page-body-text-small'], ['./page/API/file/file.wxml', 10, 21])
            Z([3, '请选择图片'], ['./page/API/file/file.wxml', 10, 44])
            Z([
                [2, '!='],
                [
                    [7],
                    [3, 'tempFilePath']
                ],
                [1, '']
            ], ['./page/API/file/file.wxml', 11, 22])
            Z([3, 'image'], ['./page/API/file/file.wxml', 12, 47])
            Z([
                [7],
                [3, 'tempFilePath']
            ], ['./page/API/file/file.wxml', 12, 22])
            Z([
                [2, '&&'],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'tempFilePath']
                    ],
                    [1, '']
                ],
                [
                    [2, '!='],
                    [
                        [7],
                        [3, 'savedFilePath']
                    ],
                    [1, '']
                ]
            ], ['./page/API/file/file.wxml', 14, 22])
            Z(z[9][1], ['./page/API/file/file.wxml', 15, 48])
            Z([
                [7],
                [3, 'savedFilePath']
            ], ['./page/API/file/file.wxml', 15, 22])
            Z([
                [2, '&&'],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'tempFilePath']
                    ],
                    [1, '']
                ],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'savedFilePath']
                    ],
                    [1, '']
                ]
            ], ['./page/API/file/file.wxml', 17, 22])
            Z([3, 'chooseImage'], ['./page/API/file/file.wxml', 18, 67])
            Z([3, 'image-plus'], ['./page/API/file/file.wxml', 18, 46])
            Z([3, '/image/plus.png'], ['./page/API/file/file.wxml', 18, 22])
            Z([3, 'page-body-buttons'], ['./page/API/file/file.wxml', 21, 19])
            Z([3, 'saveFile'], ['./page/API/file/file.wxml', 22, 65])
            Z([3, 'page-body-button'], ['./page/API/file/file.wxml', 22, 23])
            Z([3, 'primary'], ['./page/API/file/file.wxml', 22, 47])
            Z([3, '保存文件'], ['./page/API/file/file.wxml', 22, 76])
            Z([3, 'clear'], ['./page/API/file/file.wxml', 23, 50])
            Z(z[20][1], ['./page/API/file/file.wxml', 23, 23])
            Z([3, '删除文件'], ['./page/API/file/file.wxml', 23, 58])
            Z([3, 'confirm'], ['./page/API/file/file.wxml', 28, 84])
            Z([
                [6],
                [
                    [7],
                    [3, 'dialog']
                ],
                [3, 'hidden']
            ], ['./page/API/file/file.wxml', 28, 42])
            Z([
                [6],
                [
                    [7],
                    [3, 'dialog']
                ],
                [3, 'title']
            ], ['./page/API/file/file.wxml', 28, 16])
            Z([a, [
                [6],
                [
                    [7],
                    [3, 'dialog']
                ],
                [3, 'content']
            ]], ['./page/API/file/file.wxml', 28, 94])
            Z([3, 'footer'], ['./page/API/file/file.wxml', 30, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_7);
        return __WXML_GLOBAL__.ops_cached.$gwx_7
    }

    function gz$gwx_8() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_8) return __WXML_GLOBAL__.ops_cached.$gwx_8
        __WXML_GLOBAL__.ops_cached.$gwx_8 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/get-location/get-location.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'getLocation']
            ], ['./page/API/get-location/get-location.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/get-location/get-location.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/get-location/get-location.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/get-location/get-location.wxml', 8, 17])
            Z([3, 'page-body-info'], ['./page/API/get-location/get-location.wxml', 9, 19])
            Z([3, 'page-body-text-small'], ['./page/API/get-location/get-location.wxml', 10, 21])
            Z([3, '当前位置经纬度'], ['./page/API/get-location/get-location.wxml', 10, 44])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'hasLocation']
                ],
                [1, false]
            ], ['./page/API/get-location/get-location.wxml', 11, 22])
            Z([3, 'page-body-text'], ['./page/API/get-location/get-location.wxml', 12, 23])
            Z([3, '未获取'], ['./page/API/get-location/get-location.wxml', 12, 40])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'hasLocation']
                ],
                [1, true]
            ], ['./page/API/get-location/get-location.wxml', 14, 22])
            Z([3, 'page-body-text-location'], ['./page/API/get-location/get-location.wxml', 15, 23])
            Z([a, [3, 'E'],
                [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'location']
                        ],
                        [3, 'longitude']
                    ],
                    [1, 0]
                ],
                [3, '°'],
                [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'location']
                        ],
                        [3, 'longitude']
                    ],
                    [1, 1]
                ],
                [3, '′']
            ], ['./page/API/get-location/get-location.wxml', 16, 19])
            Z([a, [3, 'N'],
                [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'location']
                        ],
                        [3, 'latitude']
                    ],
                    [1, 0]
                ], z[13][1][3],
                [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'location']
                        ],
                        [3, 'latitude']
                    ],
                    [1, 1]
                ], z[13][1][5]
            ], ['./page/API/get-location/get-location.wxml', 17, 19])
            Z([3, 'page-body-buttons'], ['./page/API/get-location/get-location.wxml', 21, 19])
            Z([3, 'getLocation'], ['./page/API/get-location/get-location.wxml', 22, 65])
            Z([3, 'page-body-button'], ['./page/API/get-location/get-location.wxml', 22, 23])
            Z([3, 'primary'], ['./page/API/get-location/get-location.wxml', 22, 47])
            Z([3, '获取位置'], ['./page/API/get-location/get-location.wxml', 22, 79])
            Z([3, 'clear'], ['./page/API/get-location/get-location.wxml', 23, 50])
            Z(z[17][1], ['./page/API/get-location/get-location.wxml', 23, 23])
            Z([3, '清空'], ['./page/API/get-location/get-location.wxml', 23, 58])
            Z([3, 'footer'], ['./page/API/get-location/get-location.wxml', 28, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_8);
        return __WXML_GLOBAL__.ops_cached.$gwx_8
    }

    function gz$gwx_9() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_9) return __WXML_GLOBAL__.ops_cached.$gwx_9
        __WXML_GLOBAL__.ops_cached.$gwx_9 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/get-network-type/get-network-type.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'getNetworkType']
            ], ['./page/API/get-network-type/get-network-type.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/get-network-type/get-network-type.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/get-network-type/get-network-type.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/get-network-type/get-network-type.wxml', 8, 17])
            Z([3, 'page-body-info'], ['./page/API/get-network-type/get-network-type.wxml', 9, 19])
            Z([3, 'page-body-title'], ['./page/API/get-network-type/get-network-type.wxml', 10, 21])
            Z([3, '网络状态'], ['./page/API/get-network-type/get-network-type.wxml', 10, 39])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'hasNetworkType']
                ],
                [1, false]
            ], ['./page/API/get-network-type/get-network-type.wxml', 11, 22])
            Z([3, 'page-body-text'], ['./page/API/get-network-type/get-network-type.wxml', 12, 23])
            Z([3, '未获取'], ['./page/API/get-network-type/get-network-type.wxml', 12, 40])
            Z(z[9][1], ['./page/API/get-network-type/get-network-type.wxml', 13, 23])
            Z([3, '点击绿色按钮可获取网络状态'], ['./page/API/get-network-type/get-network-type.wxml', 13, 40])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'hasNetworkType']
                ],
                [1, true]
            ], ['./page/API/get-network-type/get-network-type.wxml', 15, 22])
            Z([3, 'page-body-text-network-type'], ['./page/API/get-network-type/get-network-type.wxml', 16, 23])
            Z([a, [
                [7],
                [3, 'networkType']
            ]], ['./page/API/get-network-type/get-network-type.wxml', 16, 53])
            Z([3, 'page-body-buttons'], ['./page/API/get-network-type/get-network-type.wxml', 19, 19])
            Z([3, 'getNetworkType'], ['./page/API/get-network-type/get-network-type.wxml', 20, 65])
            Z([3, 'page-body-button'], ['./page/API/get-network-type/get-network-type.wxml', 20, 23])
            Z([3, 'primary'], ['./page/API/get-network-type/get-network-type.wxml', 20, 47])
            Z([3, '获取手机网络状态'], ['./page/API/get-network-type/get-network-type.wxml', 20, 82])
            Z([3, 'clear'], ['./page/API/get-network-type/get-network-type.wxml', 21, 50])
            Z(z[18][1], ['./page/API/get-network-type/get-network-type.wxml', 21, 23])
            Z([3, '清空'], ['./page/API/get-network-type/get-network-type.wxml', 21, 58])
            Z([3, 'footer'], ['./page/API/get-network-type/get-network-type.wxml', 26, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_9);
        return __WXML_GLOBAL__.ops_cached.$gwx_9
    }

    function gz$gwx_10() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_10) return __WXML_GLOBAL__.ops_cached.$gwx_10
        __WXML_GLOBAL__.ops_cached.$gwx_10 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/get-system-info/get-system-info.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'getSystemInfo']
            ], ['./page/API/get-system-info/get-system-info.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/get-system-info/get-system-info.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/get-system-info/get-system-info.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/get-system-info/get-system-info.wxml', 8, 17])
            Z([3, 'page-body-form'], ['./page/API/get-system-info/get-system-info.wxml', 9, 19])
            Z([3, 'page-body-form-item'], ['./page/API/get-system-info/get-system-info.wxml', 10, 21])
            Z([3, 'page-body-form-key'], ['./page/API/get-system-info/get-system-info.wxml', 11, 23])
            Z([3, '手机型号'], ['./page/API/get-system-info/get-system-info.wxml', 11, 44])
            Z([3, 'page-body-form-value'], ['./page/API/get-system-info/get-system-info.wxml', 12, 24])
            Z([1, true], ['./page/API/get-system-info/get-system-info.wxml', 12, 68])
            Z([3, '未获取'], ['./page/API/get-system-info/get-system-info.wxml', 12, 91])
            Z([3, 'text'], ['./page/API/get-system-info/get-system-info.wxml', 12, 52])
            Z([
                [6],
                [
                    [7],
                    [3, 'systemInfo']
                ],
                [3, 'model']
            ], ['./page/API/get-system-info/get-system-info.wxml', 12, 109])
            Z(z[6][1], ['./page/API/get-system-info/get-system-info.wxml', 14, 21])
            Z(z[7][1], ['./page/API/get-system-info/get-system-info.wxml', 15, 23])
            Z([3, '微信语言'], ['./page/API/get-system-info/get-system-info.wxml', 15, 44])
            Z(z[9][1], ['./page/API/get-system-info/get-system-info.wxml', 16, 24])
            Z(z[10][1], ['./page/API/get-system-info/get-system-info.wxml', 16, 68])
            Z(z[11][1], ['./page/API/get-system-info/get-system-info.wxml', 16, 91])
            Z(z[12][1], ['./page/API/get-system-info/get-system-info.wxml', 16, 52])
            Z([
                [6],
                [
                    [7],
                    [3, 'systemInfo']
                ],
                [3, 'language']
            ], ['./page/API/get-system-info/get-system-info.wxml', 16, 109])
            Z(z[6][1], ['./page/API/get-system-info/get-system-info.wxml', 18, 21])
            Z(z[7][1], ['./page/API/get-system-info/get-system-info.wxml', 19, 23])
            Z([3, '微信版本'], ['./page/API/get-system-info/get-system-info.wxml', 19, 44])
            Z(z[9][1], ['./page/API/get-system-info/get-system-info.wxml', 20, 24])
            Z(z[10][1], ['./page/API/get-system-info/get-system-info.wxml', 20, 68])
            Z(z[11][1], ['./page/API/get-system-info/get-system-info.wxml', 20, 91])
            Z(z[12][1], ['./page/API/get-system-info/get-system-info.wxml', 20, 52])
            Z([
                [6],
                [
                    [7],
                    [3, 'systemInfo']
                ],
                [3, 'version']
            ], ['./page/API/get-system-info/get-system-info.wxml', 20, 109])
            Z(z[6][1], ['./page/API/get-system-info/get-system-info.wxml', 22, 21])
            Z(z[7][1], ['./page/API/get-system-info/get-system-info.wxml', 23, 23])
            Z([3, '屏幕宽度'], ['./page/API/get-system-info/get-system-info.wxml', 23, 44])
            Z(z[9][1], ['./page/API/get-system-info/get-system-info.wxml', 24, 24])
            Z(z[10][1], ['./page/API/get-system-info/get-system-info.wxml', 24, 68])
            Z(z[11][1], ['./page/API/get-system-info/get-system-info.wxml', 24, 91])
            Z(z[12][1], ['./page/API/get-system-info/get-system-info.wxml', 24, 52])
            Z([
                [6],
                [
                    [7],
                    [3, 'systemInfo']
                ],
                [3, 'windowWidth']
            ], ['./page/API/get-system-info/get-system-info.wxml', 24, 109])
            Z(z[6][1], ['./page/API/get-system-info/get-system-info.wxml', 26, 21])
            Z(z[7][1], ['./page/API/get-system-info/get-system-info.wxml', 27, 23])
            Z([3, '屏幕高度'], ['./page/API/get-system-info/get-system-info.wxml', 27, 44])
            Z(z[9][1], ['./page/API/get-system-info/get-system-info.wxml', 28, 24])
            Z(z[10][1], ['./page/API/get-system-info/get-system-info.wxml', 28, 68])
            Z(z[11][1], ['./page/API/get-system-info/get-system-info.wxml', 28, 91])
            Z(z[12][1], ['./page/API/get-system-info/get-system-info.wxml', 28, 52])
            Z([
                [6],
                [
                    [7],
                    [3, 'systemInfo']
                ],
                [3, 'windowHeight']
            ], ['./page/API/get-system-info/get-system-info.wxml', 28, 109])
            Z(z[6][1], ['./page/API/get-system-info/get-system-info.wxml', 30, 21])
            Z(z[7][1], ['./page/API/get-system-info/get-system-info.wxml', 31, 23])
            Z([3, 'DPI'], ['./page/API/get-system-info/get-system-info.wxml', 31, 44])
            Z(z[9][1], ['./page/API/get-system-info/get-system-info.wxml', 32, 24])
            Z(z[10][1], ['./page/API/get-system-info/get-system-info.wxml', 32, 68])
            Z(z[11][1], ['./page/API/get-system-info/get-system-info.wxml', 32, 91])
            Z(z[12][1], ['./page/API/get-system-info/get-system-info.wxml', 32, 52])
            Z([
                [6],
                [
                    [7],
                    [3, 'systemInfo']
                ],
                [3, 'pixelRatio']
            ], ['./page/API/get-system-info/get-system-info.wxml', 32, 109])
            Z([3, 'page-body-buttons'], ['./page/API/get-system-info/get-system-info.wxml', 35, 19])
            Z([3, 'getSystemInfo'], ['./page/API/get-system-info/get-system-info.wxml', 36, 65])
            Z([3, 'page-body-button'], ['./page/API/get-system-info/get-system-info.wxml', 36, 23])
            Z([3, 'primary'], ['./page/API/get-system-info/get-system-info.wxml', 36, 47])
            Z([3, '获取手机系统信息'], ['./page/API/get-system-info/get-system-info.wxml', 36, 81])
            Z([3, 'footer'], ['./page/API/get-system-info/get-system-info.wxml', 41, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_10);
        return __WXML_GLOBAL__.ops_cached.$gwx_10
    }

    function gz$gwx_11() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_11) return __WXML_GLOBAL__.ops_cached.$gwx_11
        __WXML_GLOBAL__.ops_cached.$gwx_11 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/get-user-info/get-user-info.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'getUserInfo']
            ], ['./page/API/get-user-info/get-user-info.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/get-user-info/get-user-info.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/get-user-info/get-user-info.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/get-user-info/get-user-info.wxml', 8, 17])
            Z([3, 'page-body-info'], ['./page/API/get-user-info/get-user-info.wxml', 9, 19])
            Z([3, 'page-body-title'], ['./page/API/get-user-info/get-user-info.wxml', 10, 21])
            Z([3, '用户信息'], ['./page/API/get-user-info/get-user-info.wxml', 10, 39])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'hasUserInfo']
                ],
                [1, false]
            ], ['./page/API/get-user-info/get-user-info.wxml', 11, 22])
            Z([3, 'page-body-text'], ['./page/API/get-user-info/get-user-info.wxml', 12, 23])
            Z([3, '未获取'], ['./page/API/get-user-info/get-user-info.wxml', 12, 40])
            Z(z[9][1], ['./page/API/get-user-info/get-user-info.wxml', 13, 23])
            Z([3, '点击绿色按钮可获取用户头像及昵称'], ['./page/API/get-user-info/get-user-info.wxml', 13, 40])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'hasUserInfo']
                ],
                [1, true]
            ], ['./page/API/get-user-info/get-user-info.wxml', 15, 22])
            Z([3, 'userinfo-avatar'], ['./page/API/get-user-info/get-user-info.wxml', 16, 24])
            Z([
                [6],
                [
                    [7],
                    [3, 'userInfo']
                ],
                [3, 'avatarUrl']
            ], ['./page/API/get-user-info/get-user-info.wxml', 16, 46])
            Z([3, 'userinfo-nickname'], ['./page/API/get-user-info/get-user-info.wxml', 17, 23])
            Z([a, [
                [6],
                [
                    [7],
                    [3, 'userInfo']
                ],
                [3, 'nickName']
            ]], ['./page/API/get-user-info/get-user-info.wxml', 17, 43])
            Z([3, 'page-body-buttons'], ['./page/API/get-user-info/get-user-info.wxml', 20, 19])
            Z([3, 'getUserInfo'], ['./page/API/get-user-info/get-user-info.wxml', 21, 65])
            Z([3, 'page-body-button'], ['./page/API/get-user-info/get-user-info.wxml', 21, 23])
            Z([3, 'primary'], ['./page/API/get-user-info/get-user-info.wxml', 21, 47])
            Z([3, '获取用户信息'], ['./page/API/get-user-info/get-user-info.wxml', 21, 79])
            Z([3, 'clear'], ['./page/API/get-user-info/get-user-info.wxml', 22, 50])
            Z(z[20][1], ['./page/API/get-user-info/get-user-info.wxml', 22, 23])
            Z([3, '清空'], ['./page/API/get-user-info/get-user-info.wxml', 22, 58])
            Z([3, 'footer'], ['./page/API/get-user-info/get-user-info.wxml', 27, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_11);
        return __WXML_GLOBAL__.ops_cached.$gwx_11
    }

    function gz$gwx_12() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_12) return __WXML_GLOBAL__.ops_cached.$gwx_12
        __WXML_GLOBAL__.ops_cached.$gwx_12 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/image/image.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'choose/previewImage']
            ], ['./page/API/image/image.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/image/image.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/image/image.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/image/image.wxml', 8, 17])
            Z([3, 'openLocation'], ['./page/API/image/image.wxml', 9, 24])
            Z([3, 'page-body-form'], ['./page/API/image/image.wxml', 10, 21])
            Z([3, 'sourceTypeChange'], ['./page/API/image/image.wxml', 11, 53])
            Z([
                [7],
                [3, 'sourceType']
            ], ['./page/API/image/image.wxml', 11, 25])
            Z([
                [7],
                [3, 'sourceTypeIndex']
            ], ['./page/API/image/image.wxml', 11, 78])
            Z([3, 'page-body-form-picker'], ['./page/API/image/image.wxml', 12, 25])
            Z([3, 'page-body-form-picker-key'], ['./page/API/image/image.wxml', 13, 27])
            Z([3, '图片来源'], ['./page/API/image/image.wxml', 13, 55])
            Z([3, 'page-body-form-picker-value'], ['./page/API/image/image.wxml', 14, 27])
            Z([a, [
                [6],
                [
                    [7],
                    [3, 'sourceType']
                ],
                [
                    [7],
                    [3, 'sourceTypeIndex']
                ]
            ]], ['./page/API/image/image.wxml', 14, 57])
            Z([3, 'sizeTypeChange'], ['./page/API/image/image.wxml', 17, 51])
            Z([
                [7],
                [3, 'sizeType']
            ], ['./page/API/image/image.wxml', 17, 25])
            Z([
                [7],
                [3, 'sizeTypeIndex']
            ], ['./page/API/image/image.wxml', 17, 74])
            Z(z[10][1], ['./page/API/image/image.wxml', 18, 25])
            Z(z[11][1], ['./page/API/image/image.wxml', 19, 27])
            Z([3, '图片质量'], ['./page/API/image/image.wxml', 19, 55])
            Z(z[13][1], ['./page/API/image/image.wxml', 20, 27])
            Z([a, [
                [6],
                [
                    [7],
                    [3, 'sizeType']
                ],
                [
                    [7],
                    [3, 'sizeTypeIndex']
                ]
            ]], ['./page/API/image/image.wxml', 20, 57])
            Z([3, 'countChange'], ['./page/API/image/image.wxml', 23, 48])
            Z([
                [7],
                [3, 'count']
            ], ['./page/API/image/image.wxml', 23, 25])
            Z([
                [7],
                [3, 'countIndex']
            ], ['./page/API/image/image.wxml', 23, 68])
            Z(z[10][1], ['./page/API/image/image.wxml', 24, 25])
            Z([3, 'border-bottom: none;'], ['./page/API/image/image.wxml', 24, 55])
            Z(z[11][1], ['./page/API/image/image.wxml', 25, 27])
            Z([3, '数量限制'], ['./page/API/image/image.wxml', 25, 55])
            Z(z[13][1], ['./page/API/image/image.wxml', 26, 27])
            Z([a, [
                [6],
                [
                    [7],
                    [3, 'count']
                ],
                [
                    [7],
                    [3, 'countIndex']
                ]
            ]], ['./page/API/image/image.wxml', 26, 57])
            Z([3, 'images-wrapper'], ['./page/API/image/image.wxml', 30, 21])
            Z([3, 'images-text'], ['./page/API/image/image.wxml', 31, 23])
            Z([3, '请选择图片'], ['./page/API/image/image.wxml', 31, 37])
            Z([3, 'images-list'], ['./page/API/image/image.wxml', 32, 23])
            Z([3, 'image'], ['./page/API/image/image.wxml', 33, 61])
            Z([
                [7],
                [3, 'imageList']
            ], ['./page/API/image/image.wxml', 33, 33])
            Z([3, 'previewImage'], ['./page/API/image/image.wxml', 34, 88])
            Z([3, 'images-image'], ['./page/API/image/image.wxml', 34, 44])
            Z([
                [7],
                [3, 'image']
            ], ['./page/API/image/image.wxml', 34, 68])
            Z(z[40][1], ['./page/API/image/image.wxml', 34, 26])
            Z([3, 'chooseImage'], ['./page/API/image/image.wxml', 36, 89])
            Z([3, 'images-image images-image-plus'], ['./page/API/image/image.wxml', 36, 48])
            Z([3, '/image/plus.png'], ['./page/API/image/image.wxml', 36, 24])
            Z([3, 'footer'], ['./page/API/image/image.wxml', 43, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_12);
        return __WXML_GLOBAL__.ops_cached.$gwx_12
    }

    function gz$gwx_13() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_13) return __WXML_GLOBAL__.ops_cached.$gwx_13
        __WXML_GLOBAL__.ops_cached.$gwx_13 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/index/index.wxml', 1, 12])
            Z([3, 'header'], ['./page/API/index/index.wxml', 2, 15])
            Z([3, 'title'], ['./page/API/index/index.wxml', 3, 19])
            Z([3, '小程序接口'], ['./page/API/index/index.wxml', 3, 27])
            Z([3, 'desc'], ['./page/API/index/index.wxml', 4, 19])
            Z([3, '为便于开发者直观了解小程序接口能力，该小程序就当前已支持的接口能力进行演示。'], ['./page/API/index/index.wxml', 4, 26])
            Z([3, 'menu-list'], ['./page/API/index/index.wxml', 7, 15])
            Z([3, 'menuItem'], ['./page/API/index/index.wxml', 8, 52])
            Z([
                [7],
                [3, 'menuList']
            ], ['./page/API/index/index.wxml', 8, 25])
            Z([3, 'menu-item'], ['./page/API/index/index.wxml', 9, 19])
            Z([3, 'tapMenuItem'], ['./page/API/index/index.wxml', 10, 61])
            Z([3, 'menu-item-main'], ['./page/API/index/index.wxml', 10, 21])
            Z([
                [7],
                [3, 'index']
            ], ['./page/API/index/index.wxml', 10, 41])
            Z([3, 'menu-item-name'], ['./page/API/index/index.wxml', 11, 23])
            Z([a, [
                [6],
                [
                    [7],
                    [3, 'menuItem']
                ],
                [3, 'name']
            ]], ['./page/API/index/index.wxml', 11, 40])
            Z([a, [3, 'menu-item-arrow '],
                [
                    [2, '?:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'menuItem']
                        ],
                        [3, 'opened']
                    ],
                    [1, 'open'],
                    [1, 'close']
                ],
                [3, ' '],
                [
                    [2, '?:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'menuItem']
                        ],
                        [3, 'url']
                    ],
                    [1, 'url'],
                    [1, '']
                ]
            ], ['./page/API/index/index.wxml', 13, 19])
            Z([3, '/image/arrowright.png'], ['./page/API/index/index.wxml', 14, 17])
            Z([a, [3, 'menu-item-api-list '], z[15][1][2]], ['./page/API/index/index.wxml', 17, 21])
            Z([3, 'APIItem'], ['./page/API/index/index.wxml', 18, 66])
            Z([
                [6],
                [
                    [7],
                    [3, 'menuItem']
                ],
                [3, 'APIList']
            ], ['./page/API/index/index.wxml', 18, 31])
            Z([
                [6],
                [
                    [7],
                    [3, 'APIItem']
                ],
                [3, 'url']
            ], ['./page/API/index/index.wxml', 19, 28])
            Z([3, 'menu-item-api-item'], ['./page/API/index/index.wxml', 20, 27])
            Z([
                [2, '?:'],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'index']
                    ],
                    [1, 0]
                ],
                [1, 'border-top:none;'],
                [1, '']
            ], ['./page/API/index/index.wxml', 20, 54])
            Z([3, 'menu-item-api-item-text'], ['./page/API/index/index.wxml', 21, 29])
            Z([3, 'menu-item-api-item-text-zhname'], ['./page/API/index/index.wxml', 22, 31])
            Z([a, [
                [6],
                [
                    [7],
                    [3, 'APIItem']
                ],
                [3, 'zhName']
            ]], ['./page/API/index/index.wxml', 22, 64])
            Z([3, 'menu-item-api-item-text-enname'], ['./page/API/index/index.wxml', 23, 31])
            Z([a, [
                [6],
                [
                    [7],
                    [3, 'APIItem']
                ],
                [3, 'enName']
            ]], ['./page/API/index/index.wxml', 23, 64])
            Z([3, 'menu-item-api-item-arrow'], ['./page/API/index/index.wxml', 25, 30])
            Z(z[16][1], ['./page/API/index/index.wxml', 25, 61])
        })(__WXML_GLOBAL__.ops_cached.$gwx_13);
        return __WXML_GLOBAL__.ops_cached.$gwx_13
    }

    function gz$gwx_14() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_14) return __WXML_GLOBAL__.ops_cached.$gwx_14
        __WXML_GLOBAL__.ops_cached.$gwx_14 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/login/login.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'Login']
            ], ['./page/API/login/login.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/login/login.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/login/login.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/login/login.wxml', 8, 17])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'hasLogin']
                ],
                [1, true]
            ], ['./page/API/login/login.wxml', 9, 20])
            Z([3, 'page-body-title'], ['./page/API/login/login.wxml', 10, 21])
            Z([3, '已登录'], ['./page/API/login/login.wxml', 10, 39])
            Z([3, 'page-body-text'], ['./page/API/login/login.wxml', 11, 21])
            Z([3, '每个微信号中仅需登录 1 次，后续每次进入页面即可根据微信 id 自动拉取用户信息'], ['./page/API/login/login.wxml', 11, 38])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'hasLogin']
                ],
                [1, false]
            ], ['./page/API/login/login.wxml', 13, 20])
            Z(z[8][1], ['./page/API/login/login.wxml', 14, 21])
            Z([3, '每个微信号中仅需登录一次'], ['./page/API/login/login.wxml', 14, 38])
            Z([3, 'login'], ['./page/API/login/login.wxml', 15, 65])
            Z([3, 'page-body-button'], ['./page/API/login/login.wxml', 15, 23])
            Z([3, 'primary'], ['./page/API/login/login.wxml', 15, 47])
            Z([3, '微信登录'], ['./page/API/login/login.wxml', 15, 73])
            Z([3, 'footer'], ['./page/API/login/login.wxml', 20, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_14);
        return __WXML_GLOBAL__.ops_cached.$gwx_14
    }

    function gz$gwx_15() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_15) return __WXML_GLOBAL__.ops_cached.$gwx_15
        __WXML_GLOBAL__.ops_cached.$gwx_15 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'navigationBarLoading']
            ], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 8, 17])
            Z([3, 'page-body-buttons'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 9, 19])
            Z([3, 'showNavigationBarLoading'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 10, 65])
            Z([3, 'page-body-button'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 10, 23])
            Z([3, 'primary'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 10, 47])
            Z([3, '显示加载动画'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 10, 92])
            Z([3, 'hideNavigationBarLoading'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 11, 50])
            Z(z[7][1], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 11, 23])
            Z([3, '隐藏加载动画'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 11, 77])
            Z([3, 'footer'], ['./page/API/navigation-bar-loading/navigation-bar-loading.wxml', 16, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_15);
        return __WXML_GLOBAL__.ops_cached.$gwx_15
    }

    function gz$gwx_16() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_16) return __WXML_GLOBAL__.ops_cached.$gwx_16
        __WXML_GLOBAL__.ops_cached.$gwx_16 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/navigator/navigator.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'navigateTo/Back, redirectTo']
            ], ['./page/API/navigator/navigator.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/navigator/navigator.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/navigator/navigator.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/navigator/navigator.wxml', 8, 17])
            Z([3, 'page-body-buttons'], ['./page/API/navigator/navigator.wxml', 9, 19])
            Z([3, 'navigateTo'], ['./page/API/navigator/navigator.wxml', 10, 50])
            Z([3, 'page-body-button'], ['./page/API/navigator/navigator.wxml', 10, 23])
            Z([3, '跳转新页面'], ['./page/API/navigator/navigator.wxml', 10, 63])
            Z([3, 'navigateBack'], ['./page/API/navigator/navigator.wxml', 11, 50])
            Z(z[7][1], ['./page/API/navigator/navigator.wxml', 11, 23])
            Z([3, '返回上一页'], ['./page/API/navigator/navigator.wxml', 11, 65])
            Z([3, 'redirectTo'], ['./page/API/navigator/navigator.wxml', 12, 50])
            Z(z[7][1], ['./page/API/navigator/navigator.wxml', 12, 23])
            Z([3, '在当前页面打开'], ['./page/API/navigator/navigator.wxml', 12, 63])
            Z([3, 'footer'], ['./page/API/navigator/navigator.wxml', 17, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_16);
        return __WXML_GLOBAL__.ops_cached.$gwx_16
    }

    function gz$gwx_17() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_17) return __WXML_GLOBAL__.ops_cached.$gwx_17
        __WXML_GLOBAL__.ops_cached.$gwx_17 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'onAccelerometerChange']
            ], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 8, 17])
            Z([3, 'page-body-text'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 9, 19])
            Z([3, '旋转手机即可移动以下小球'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 9, 36])
            Z([3, 'page-body-canvas'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 10, 19])
            Z([3, 'big-ball'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 11, 66])
            Z([3, 'page-body-ball'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 11, 23])
            Z([1, true], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 11, 45])
            Z([3, 'small-ball'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 12, 66])
            Z(z[9][1], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 12, 23])
            Z(z[10][1], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 12, 45])
            Z([3, 'page-body-xyz'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 14, 19])
            Z([3, 'page-body-title'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 15, 21])
            Z([a, [3, 'X: '],
                [
                    [7],
                    [3, 'x']
                ]
            ], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 15, 39])
            Z(z[15][1], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 16, 21])
            Z([a, [3, 'Y: '],
                [
                    [7],
                    [3, 'y']
                ]
            ], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 16, 39])
            Z(z[15][1], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 17, 21])
            Z([a, [3, 'Z: '],
                [
                    [7],
                    [3, 'z']
                ]
            ], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 17, 39])
            Z([3, 'footer'], ['./page/API/on-accelerometer-change/on-accelerometer-change.wxml', 22, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_17);
        return __WXML_GLOBAL__.ops_cached.$gwx_17
    }

    function gz$gwx_18() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_18) return __WXML_GLOBAL__.ops_cached.$gwx_18
        __WXML_GLOBAL__.ops_cached.$gwx_18 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/on-compass-change/on-compass-change.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'onCompassChange']
            ], ['./page/API/on-compass-change/on-compass-change.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/on-compass-change/on-compass-change.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/on-compass-change/on-compass-change.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/on-compass-change/on-compass-change.wxml', 8, 17])
            Z([3, 'page-body-text'], ['./page/API/on-compass-change/on-compass-change.wxml', 9, 19])
            Z([3, '选中手机即可获取方位信息'], ['./page/API/on-compass-change/on-compass-change.wxml', 9, 36])
            Z([3, 'direction'], ['./page/API/on-compass-change/on-compass-change.wxml', 10, 19])
            Z([3, 'direction-value'], ['./page/API/on-compass-change/on-compass-change.wxml', 11, 21])
            Z([a, [
                [7],
                [3, 'direction']
            ]], ['./page/API/on-compass-change/on-compass-change.wxml', 11, 39])
            Z([3, 'direction-degree'], ['./page/API/on-compass-change/on-compass-change.wxml', 12, 21])
            Z([3, 'o'], ['./page/API/on-compass-change/on-compass-change.wxml', 12, 40])
            Z([3, 'footer'], ['./page/API/on-compass-change/on-compass-change.wxml', 17, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_18);
        return __WXML_GLOBAL__.ops_cached.$gwx_18
    }

    function gz$gwx_19() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_19) return __WXML_GLOBAL__.ops_cached.$gwx_19
        __WXML_GLOBAL__.ops_cached.$gwx_19 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/open-location/open-location.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'openLocation']
            ], ['./page/API/open-location/open-location.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/open-location/open-location.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/open-location/open-location.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/open-location/open-location.wxml', 8, 17])
            Z([3, 'openLocation'], ['./page/API/open-location/open-location.wxml', 9, 24])
            Z([3, 'page-body-form'], ['./page/API/open-location/open-location.wxml', 10, 21])
            Z([3, 'page-body-form-item'], ['./page/API/open-location/open-location.wxml', 11, 23])
            Z([3, 'page-body-form-key'], ['./page/API/open-location/open-location.wxml', 12, 25])
            Z([3, '经度'], ['./page/API/open-location/open-location.wxml', 12, 46])
            Z([3, 'page-body-form-value'], ['./page/API/open-location/open-location.wxml', 13, 26])
            Z([1, true], ['./page/API/open-location/open-location.wxml', 13, 70])
            Z([3, 'longitude'], ['./page/API/open-location/open-location.wxml', 13, 106])
            Z([3, 'text'], ['./page/API/open-location/open-location.wxml', 13, 54])
            Z([3, '113.324520'], ['./page/API/open-location/open-location.wxml', 13, 88])
            Z(z[7][1], ['./page/API/open-location/open-location.wxml', 15, 23])
            Z(z[8][1], ['./page/API/open-location/open-location.wxml', 16, 25])
            Z([3, '纬度'], ['./page/API/open-location/open-location.wxml', 16, 46])
            Z(z[10][1], ['./page/API/open-location/open-location.wxml', 17, 26])
            Z(z[11][1], ['./page/API/open-location/open-location.wxml', 17, 70])
            Z([3, 'latitude'], ['./page/API/open-location/open-location.wxml', 17, 105])
            Z(z[13][1], ['./page/API/open-location/open-location.wxml', 17, 54])
            Z([3, '23.099994'], ['./page/API/open-location/open-location.wxml', 17, 88])
            Z(z[7][1], ['./page/API/open-location/open-location.wxml', 19, 23])
            Z(z[8][1], ['./page/API/open-location/open-location.wxml', 20, 25])
            Z([3, '位置名称'], ['./page/API/open-location/open-location.wxml', 20, 46])
            Z(z[10][1], ['./page/API/open-location/open-location.wxml', 21, 26])
            Z(z[11][1], ['./page/API/open-location/open-location.wxml', 21, 70])
            Z([3, 'name'], ['./page/API/open-location/open-location.wxml', 21, 111])
            Z(z[13][1], ['./page/API/open-location/open-location.wxml', 21, 54])
            Z([3, 'T.I.T 创意园'], ['./page/API/open-location/open-location.wxml', 21, 88])
            Z(z[7][1], ['./page/API/open-location/open-location.wxml', 23, 23])
            Z([3, 'border-bottom: none;'], ['./page/API/open-location/open-location.wxml', 23, 51])
            Z(z[8][1], ['./page/API/open-location/open-location.wxml', 24, 25])
            Z([3, '详细位置'], ['./page/API/open-location/open-location.wxml', 24, 46])
            Z(z[10][1], ['./page/API/open-location/open-location.wxml', 25, 26])
            Z(z[11][1], ['./page/API/open-location/open-location.wxml', 25, 70])
            Z([3, 'address'], ['./page/API/open-location/open-location.wxml', 25, 132])
            Z(z[13][1], ['./page/API/open-location/open-location.wxml', 25, 54])
            Z([3, '广州市海珠区新港中路397号'], ['./page/API/open-location/open-location.wxml', 25, 88])
            Z([3, 'page-body-buttons'], ['./page/API/open-location/open-location.wxml', 28, 21])
            Z([3, 'page-body-button'], ['./page/API/open-location/open-location.wxml', 29, 25])
            Z([3, 'submit'], ['./page/API/open-location/open-location.wxml', 29, 68])
            Z([3, 'primary'], ['./page/API/open-location/open-location.wxml', 29, 49])
            Z([3, '查看位置'], ['./page/API/open-location/open-location.wxml', 29, 77])
            Z([3, 'footer'], ['./page/API/open-location/open-location.wxml', 35, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_19);
        return __WXML_GLOBAL__.ops_cached.$gwx_19
    }

    function gz$gwx_20() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_20) return __WXML_GLOBAL__.ops_cached.$gwx_20
        __WXML_GLOBAL__.ops_cached.$gwx_20 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'on/stopPullDownRefresh']
            ], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 8, 17])
            Z([3, 'page-body-info'], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 9, 19])
            Z([3, 'page-body-text'], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 10, 21])
            Z([3, '下滑页面即可刷新'], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 10, 38])
            Z([3, 'page-body-buttons'], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 12, 19])
            Z([3, 'stopPullDownRefresh'], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 13, 25])
            Z([3, '停止刷新'], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 13, 47])
            Z([3, 'footer'], ['./page/API/pull-down-refresh/pull-down-refresh.wxml', 18, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_20);
        return __WXML_GLOBAL__.ops_cached.$gwx_20
    }

    function gz$gwx_21() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_21) return __WXML_GLOBAL__.ops_cached.$gwx_21
        __WXML_GLOBAL__.ops_cached.$gwx_21 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/request-payment/request-payment.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'requestPayment']
            ], ['./page/API/request-payment/request-payment.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/request-payment/request-payment.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/request-payment/request-payment.wxml', 7, 15])
            Z([3, 'page-body-wording'], ['./page/API/request-payment/request-payment.wxml', 8, 17])
            Z([3, 'page-body-text'], ['./page/API/request-payment/request-payment.wxml', 9, 19])
            Z([3, '\n        自主接入微信支付后，可以让用户在页面上快捷完成下单购买。\n      '], ['./page/API/request-payment/request-payment.wxml', 9, 36])
            Z([3, 'footer'], ['./page/API/request-payment/request-payment.wxml', 15, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_21);
        return __WXML_GLOBAL__.ops_cached.$gwx_21
    }

    function gz$gwx_22() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_22) return __WXML_GLOBAL__.ops_cached.$gwx_22
        __WXML_GLOBAL__.ops_cached.$gwx_22 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/request/request.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'request']
            ], ['./page/API/request/request.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/request/request.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/request/request.wxml', 7, 15])
            Z([3, 'page-body-wording'], ['./page/API/request/request.wxml', 8, 17])
            Z([3, 'page-body-text'], ['./page/API/request/request.wxml', 9, 19])
            Z([3, '\n        搭建好自己的后台服务器后，可以跟服务器互通数据，为用户提供个性化服务。\n      '], ['./page/API/request/request.wxml', 9, 36])
            Z([3, 'footer'], ['./page/API/request/request.wxml', 15, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_22);
        return __WXML_GLOBAL__.ops_cached.$gwx_22
    }

    function gz$gwx_23() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_23) return __WXML_GLOBAL__.ops_cached.$gwx_23
        __WXML_GLOBAL__.ops_cached.$gwx_23 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'setNaivgationBarTitle']
            ], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 8, 17])
            Z([3, 'setNaivgationBarTitle'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 9, 24])
            Z([3, 'page-body-form'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 10, 21])
            Z([3, 'page-body-form-item'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 11, 23])
            Z([3, 'border-bottom: none;'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 11, 51])
            Z([3, 'page-body-form-key'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 12, 25])
            Z([3, '页面标题'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 12, 46])
            Z([3, 'page-body-form-value'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 13, 26])
            Z([3, 'title'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 13, 123])
            Z([3, '请输入页面标题并点击设置即可'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 13, 73])
            Z([3, 'text'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 13, 54])
            Z([3, 'page-body-buttons'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 16, 21])
            Z([3, 'page-body-button'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 17, 25])
            Z([3, 'submit'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 17, 68])
            Z([3, 'primary'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 17, 49])
            Z([3, '设置'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 17, 77])
            Z([3, 'footer'], ['./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', 23, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_23);
        return __WXML_GLOBAL__.ops_cached.$gwx_23
    }

    function gz$gwx_24() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_24) return __WXML_GLOBAL__.ops_cached.$gwx_24
        __WXML_GLOBAL__.ops_cached.$gwx_24 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/storage/storage.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'get/set/clearStorage']
            ], ['./page/API/storage/storage.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/storage/storage.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/storage/storage.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/storage/storage.wxml', 8, 17])
            Z([3, 'submitForm'], ['./page/API/storage/storage.wxml', 9, 24])
            Z([3, '123'], ['./page/API/storage/storage.wxml', 9, 40])
            Z([3, 'page-body-form'], ['./page/API/storage/storage.wxml', 10, 21])
            Z([3, 'page-body-form-item'], ['./page/API/storage/storage.wxml', 11, 23])
            Z([3, 'border-bottom: none;'], ['./page/API/storage/storage.wxml', 11, 51])
            Z([3, 'page-body-form-key'], ['./page/API/storage/storage.wxml', 12, 26])
            Z([3, 'key'], ['./page/API/storage/storage.wxml', 12, 82])
            Z(z[11][1], ['./page/API/storage/storage.wxml', 12, 71])
            Z([3, 'text'], ['./page/API/storage/storage.wxml', 12, 52])
            Z([
                [7],
                [3, 'key']
            ], ['./page/API/storage/storage.wxml', 12, 94])
            Z([3, 'page-body-form-value'], ['./page/API/storage/storage.wxml', 13, 26])
            Z([3, 'data'], ['./page/API/storage/storage.wxml', 13, 85])
            Z(z[16][1], ['./page/API/storage/storage.wxml', 13, 73])
            Z(z[13][1], ['./page/API/storage/storage.wxml', 13, 54])
            Z([
                [7],
                [3, 'data']
            ], ['./page/API/storage/storage.wxml', 13, 98])
            Z([3, 'page-body-buttons'], ['./page/API/storage/storage.wxml', 16, 21])
            Z([3, 'page-body-button'], ['./page/API/storage/storage.wxml', 17, 25])
            Z([3, 'submit'], ['./page/API/storage/storage.wxml', 17, 77])
            Z([3, 'get'], ['./page/API/storage/storage.wxml', 17, 62])
            Z([3, 'primary'], ['./page/API/storage/storage.wxml', 17, 49])
            Z([3, '读取数据'], ['./page/API/storage/storage.wxml', 17, 86])
            Z(z[21][1], ['./page/API/storage/storage.wxml', 18, 25])
            Z(z[22][1], ['./page/API/storage/storage.wxml', 18, 62])
            Z([3, 'set'], ['./page/API/storage/storage.wxml', 18, 47])
            Z([3, '存储数据'], ['./page/API/storage/storage.wxml', 18, 71])
            Z(z[21][1], ['./page/API/storage/storage.wxml', 19, 25])
            Z(z[22][1], ['./page/API/storage/storage.wxml', 19, 64])
            Z([3, 'clear'], ['./page/API/storage/storage.wxml', 19, 47])
            Z([3, '清理数据'], ['./page/API/storage/storage.wxml', 19, 73])
            Z([3, 'toastChange'], ['./page/API/storage/storage.wxml', 25, 47])
            Z([
                [6],
                [
                    [7],
                    [3, 'toast']
                ],
                [3, 'hidden']
            ], ['./page/API/storage/storage.wxml', 25, 17])
            Z([a, [
                [6],
                [
                    [7],
                    [3, 'toast']
                ],
                [3, 'content']
            ]], ['./page/API/storage/storage.wxml', 25, 61])
            Z([3, 'footer'], ['./page/API/storage/storage.wxml', 27, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_24);
        return __WXML_GLOBAL__.ops_cached.$gwx_24
    }

    function gz$gwx_25() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_25) return __WXML_GLOBAL__.ops_cached.$gwx_25
        __WXML_GLOBAL__.ops_cached.$gwx_25 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/upload-file/upload-file.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'uploadFile']
            ], ['./page/API/upload-file/upload-file.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/upload-file/upload-file.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/upload-file/upload-file.wxml', 7, 15])
            Z([3, 'page-body-wording'], ['./page/API/upload-file/upload-file.wxml', 8, 17])
            Z([3, 'page-body-text'], ['./page/API/upload-file/upload-file.wxml', 9, 19])
            Z([3, '\n        搭建好自己的后台服务器后，可以将手机上的图片视频等资源上传到服务器上。\n      '], ['./page/API/upload-file/upload-file.wxml', 9, 36])
            Z([3, 'footer'], ['./page/API/upload-file/upload-file.wxml', 15, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_25);
        return __WXML_GLOBAL__.ops_cached.$gwx_25
    }

    function gz$gwx_26() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_26) return __WXML_GLOBAL__.ops_cached.$gwx_26
        __WXML_GLOBAL__.ops_cached.$gwx_26 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/voice/voice.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'start/stopRecord、play/pause/stopVoice']
            ], ['./page/API/voice/voice.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/voice/voice.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/voice/voice.wxml', 7, 15])
            Z([3, 'page-body-wrapper'], ['./page/API/voice/voice.wxml', 8, 17])
            Z([
                [2, '&&'],
                [
                    [2, '&&'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'recording']
                        ],
                        [1, false]
                    ],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'playing']
                        ],
                        [1, false]
                    ]
                ],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'hasRecord']
                    ],
                    [1, false]
                ]
            ], ['./page/API/voice/voice.wxml', 9, 20])
            Z([3, 'page-body-time'], ['./page/API/voice/voice.wxml', 10, 21])
            Z([3, 'time-big'], ['./page/API/voice/voice.wxml', 11, 23])
            Z([a, [
                [7],
                [3, 'formatedRecordTime']
            ]], ['./page/API/voice/voice.wxml', 11, 34])
            Z([3, 'page-body-buttons'], ['./page/API/voice/voice.wxml', 13, 21])
            Z([3, 'page-body-button'], ['./page/API/voice/voice.wxml', 14, 23])
            Z([3, 'startRecord'], ['./page/API/voice/voice.wxml', 15, 50])
            Z(z[10][1], ['./page/API/voice/voice.wxml', 15, 23])
            Z([3, '/image/record.png'], ['./page/API/voice/voice.wxml', 16, 24])
            Z(z[10][1], ['./page/API/voice/voice.wxml', 18, 23])
            Z([
                [2, '==='],
                [
                    [7],
                    [3, 'recording']
                ],
                [1, true]
            ], ['./page/API/voice/voice.wxml', 22, 20])
            Z(z[6][1], ['./page/API/voice/voice.wxml', 23, 21])
            Z(z[7][1], ['./page/API/voice/voice.wxml', 24, 23])
            Z([a, z[8][1][1]], ['./page/API/voice/voice.wxml', 24, 34])
            Z(z[9][1], ['./page/API/voice/voice.wxml', 26, 21])
            Z(z[10][1], ['./page/API/voice/voice.wxml', 27, 23])
            Z([3, 'stopRecord'], ['./page/API/voice/voice.wxml', 28, 50])
            Z(z[10][1], ['./page/API/voice/voice.wxml', 28, 23])
            Z([3, 'button-stop-record'], ['./page/API/voice/voice.wxml', 29, 25])
            Z(z[10][1], ['./page/API/voice/voice.wxml', 31, 23])
            Z([
                [2, '&&'],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'hasRecord']
                    ],
                    [1, true]
                ],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'playing']
                    ],
                    [1, false]
                ]
            ], ['./page/API/voice/voice.wxml', 35, 20])
            Z(z[6][1], ['./page/API/voice/voice.wxml', 36, 21])
            Z(z[7][1], ['./page/API/voice/voice.wxml', 37, 23])
            Z([a, [
                [7],
                [3, 'formatedPlayTime']
            ]], ['./page/API/voice/voice.wxml', 37, 34])
            Z([3, 'time-small'], ['./page/API/voice/voice.wxml', 38, 23])
            Z([a, z[8][1][1]], ['./page/API/voice/voice.wxml', 38, 36])
            Z(z[9][1], ['./page/API/voice/voice.wxml', 40, 21])
            Z(z[10][1], ['./page/API/voice/voice.wxml', 41, 23])
            Z([3, 'playVoice'], ['./page/API/voice/voice.wxml', 42, 50])
            Z(z[10][1], ['./page/API/voice/voice.wxml', 42, 23])
            Z([3, '/image/play.png'], ['./page/API/voice/voice.wxml', 43, 24])
            Z([3, 'clear'], ['./page/API/voice/voice.wxml', 45, 50])
            Z(z[10][1], ['./page/API/voice/voice.wxml', 45, 23])
            Z([3, '/image/trash.png'], ['./page/API/voice/voice.wxml', 46, 24])
            Z([
                [2, '&&'],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'hasRecord']
                    ],
                    [1, true]
                ],
                [
                    [2, '==='],
                    [
                        [7],
                        [3, 'playing']
                    ],
                    [1, true]
                ]
            ], ['./page/API/voice/voice.wxml', 51, 20])
            Z(z[6][1], ['./page/API/voice/voice.wxml', 52, 21])
            Z(z[7][1], ['./page/API/voice/voice.wxml', 53, 23])
            Z([a, z[28][1][1]], ['./page/API/voice/voice.wxml', 53, 34])
            Z(z[29][1], ['./page/API/voice/voice.wxml', 54, 23])
            Z([a, z[8][1][1]], ['./page/API/voice/voice.wxml', 54, 36])
            Z(z[9][1], ['./page/API/voice/voice.wxml', 56, 21])
            Z([3, 'stopVoice'], ['./page/API/voice/voice.wxml', 57, 50])
            Z(z[10][1], ['./page/API/voice/voice.wxml', 57, 23])
            Z([3, '/image/stop.png'], ['./page/API/voice/voice.wxml', 58, 24])
            Z([3, 'pauseVoice'], ['./page/API/voice/voice.wxml', 60, 50])
            Z(z[10][1], ['./page/API/voice/voice.wxml', 60, 23])
            Z([3, '/image/pause.png'], ['./page/API/voice/voice.wxml', 61, 24])
            Z(z[36][1], ['./page/API/voice/voice.wxml', 63, 50])
            Z(z[10][1], ['./page/API/voice/voice.wxml', 63, 23])
            Z(z[38][1], ['./page/API/voice/voice.wxml', 64, 24])
            Z([3, 'footer'], ['./page/API/voice/voice.wxml', 71, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_26);
        return __WXML_GLOBAL__.ops_cached.$gwx_26
    }

    function gz$gwx_27() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_27) return __WXML_GLOBAL__.ops_cached.$gwx_27
        __WXML_GLOBAL__.ops_cached.$gwx_27 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'container'], ['./page/API/web-socket/web-socket.wxml', 4, 13])
            Z([
                [8], 'title', [1, 'WebSocket']
            ], ['./page/API/web-socket/web-socket.wxml', 5, 30])
            Z([3, 'header'], ['./page/API/web-socket/web-socket.wxml', 5, 16])
            Z([3, 'page-body'], ['./page/API/web-socket/web-socket.wxml', 7, 15])
            Z([3, 'page-body-wording'], ['./page/API/web-socket/web-socket.wxml', 8, 17])
            Z([3, 'page-body-text'], ['./page/API/web-socket/web-socket.wxml', 9, 19])
            Z([3, '\n        搭建好自己的后台服务器后，可以跟服务器建立持久连接，实现即时聊天等功能。\n      '], ['./page/API/web-socket/web-socket.wxml', 9, 36])
            Z([3, 'footer'], ['./page/API/web-socket/web-socket.wxml', 15, 16])
        })(__WXML_GLOBAL__.ops_cached.$gwx_27);
        return __WXML_GLOBAL__.ops_cached.$gwx_27
    }

    function gz$gwx_28() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_28) return __WXML_GLOBAL__.ops_cached.$gwx_28
        __WXML_GLOBAL__.ops_cached.$gwx_28 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 3, 21])
            Z([3, 'action-sheet'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 4, 21])
            Z(z[3][1], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 7, 21])
            Z([3, 'actionSheetTap'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 8, 44])
            Z([3, 'default'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 8, 26])
            Z([3, '弹出action sheet'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 8, 61])
            Z([3, 'actionSheetChange'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 9, 69])
            Z([
                [7],
                [3, 'actionSheetHidden']
            ], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 9, 34])
            Z([
                [7],
                [3, 'actionSheetItems']
            ], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 10, 37])
            Z([a, [3, 'bind'],
                [
                    [7],
                    [3, 'item']
                ]
            ], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 11, 61])
            Z([3, 'item'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 11, 46])
            Z([a, [
                [7],
                [3, 'item']
            ]], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 11, 76])
            Z([3, 'cancel'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 13, 44])
            Z([3, '取消'], ['./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', 13, 53])
        })(__WXML_GLOBAL__.ops_cached.$gwx_28);
        return __WXML_GLOBAL__.ops_cached.$gwx_28
    }

    function gz$gwx_29() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_29) return __WXML_GLOBAL__.ops_cached.$gwx_29
        __WXML_GLOBAL__.ops_cached.$gwx_29 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-audio/wx-audio.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-audio/wx-audio.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-audio/wx-audio.wxml', 3, 21])
            Z([3, 'audio'], ['./page/component/component-pages/wx-audio/wx-audio.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-audio/wx-audio.wxml', 4, 21])
            Z([3, '音频'], ['./page/component/component-pages/wx-audio/wx-audio.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-audio/wx-audio.wxml', 6, 17])
            Z([3, 'section tc'], ['./page/component/component-pages/wx-audio/wx-audio.wxml', 7, 21])
            Z([
                [7],
                [3, 'audioAction']
            ], ['./page/component/component-pages/wx-audio/wx-audio.wxml', 8, 109])
            Z([3, 'audioPlayed'], ['./page/component/component-pages/wx-audio/wx-audio.wxml', 8, 136])
            Z([3, 'http://5.1015600.com/2014/ring/000/118/28b0e17cfab0136677648b39cb8b7fbc.mp3'], ['./page/component/component-pages/wx-audio/wx-audio.wxml', 8, 24])
        })(__WXML_GLOBAL__.ops_cached.$gwx_29);
        return __WXML_GLOBAL__.ops_cached.$gwx_29
    }

    function gz$gwx_30() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_30) return __WXML_GLOBAL__.ops_cached.$gwx_30
        __WXML_GLOBAL__.ops_cached.$gwx_30 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-button/wx-button.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-button/wx-button.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-button/wx-button.wxml', 3, 21])
            Z([3, 'button'], ['./page/component/component-pages/wx-button/wx-button.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-button/wx-button.wxml', 4, 21])
            Z([3, '按钮'], ['./page/component/component-pages/wx-button/wx-button.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-button/wx-button.wxml', 6, 17])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-button/wx-button.wxml', 7, 21])
            Z([3, 'buttonContainer'], ['./page/component/component-pages/wx-button/wx-button.wxml', 7, 35])
            Z([3, 'button-wrapper'], ['./page/component/component-pages/wx-button/wx-button.wxml', 8, 25])
            Z([3, 'default'], ['./page/component/component-pages/wx-button/wx-button.wxml', 10, 57])
            Z([
                [7],
                [3, 'disabled']
            ], ['./page/component/component-pages/wx-button/wx-button.wxml', 10, 34])
            Z([
                [7],
                [3, 'loading']
            ], ['./page/component/component-pages/wx-button/wx-button.wxml', 9, 71])
            Z([
                [7],
                [3, 'plain']
            ], ['./page/component/component-pages/wx-button/wx-button.wxml', 9, 91])
            Z([
                [7],
                [3, 'defaultSize']
            ], ['./page/component/component-pages/wx-button/wx-button.wxml', 9, 45])
            Z(z[10][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 9, 30])
            Z([3, ' default\n                '], ['./page/component/component-pages/wx-button/wx-button.wxml', 10, 67])
            Z(z[9][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 14, 25])
            Z([3, 'primary'], ['./page/component/component-pages/wx-button/wx-button.wxml', 16, 57])
            Z(z[11][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 16, 34])
            Z(z[12][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 15, 71])
            Z(z[13][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 15, 91])
            Z([
                [7],
                [3, 'primarySize']
            ], ['./page/component/component-pages/wx-button/wx-button.wxml', 15, 45])
            Z(z[18][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 15, 30])
            Z([3, ' primary\n                '], ['./page/component/component-pages/wx-button/wx-button.wxml', 16, 67])
            Z(z[9][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 19, 25])
            Z([3, 'warn'], ['./page/component/component-pages/wx-button/wx-button.wxml', 21, 33])
            Z(z[11][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 20, 106])
            Z(z[12][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 20, 65])
            Z(z[13][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 20, 85])
            Z([
                [7],
                [3, 'warnSize']
            ], ['./page/component/component-pages/wx-button/wx-button.wxml', 20, 42])
            Z(z[26][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 20, 30])
            Z([3, ' warn\n                '], ['./page/component/component-pages/wx-button/wx-button.wxml', 21, 40])
            Z(z[9][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 24, 25])
            Z([3, 'setDisabled'], ['./page/component/component-pages/wx-button/wx-button.wxml', 25, 33])
            Z([3, '点击设置以上按钮disabled属性'], ['./page/component/component-pages/wx-button/wx-button.wxml', 25, 47])
            Z(z[9][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 27, 25])
            Z([3, 'setPlain'], ['./page/component/component-pages/wx-button/wx-button.wxml', 28, 33])
            Z([3, '点击设置以上按钮plain属性'], ['./page/component/component-pages/wx-button/wx-button.wxml', 28, 44])
            Z(z[9][1], ['./page/component/component-pages/wx-button/wx-button.wxml', 30, 25])
            Z([3, 'setLoading'], ['./page/component/component-pages/wx-button/wx-button.wxml', 31, 33])
            Z([3, '点击设置以上按钮loading属性'], ['./page/component/component-pages/wx-button/wx-button.wxml', 31, 46])
        })(__WXML_GLOBAL__.ops_cached.$gwx_30);
        return __WXML_GLOBAL__.ops_cached.$gwx_30
    }

    function gz$gwx_31() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_31) return __WXML_GLOBAL__.ops_cached.$gwx_31
        __WXML_GLOBAL__.ops_cached.$gwx_31 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 3, 21])
            Z([3, 'checkbox'], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 4, 21])
            Z([3, '多选框'], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 7, 21])
            Z([3, 'checkboxChange'], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 8, 40])
            Z([
                [7],
                [3, 'items']
            ], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 9, 54])
            Z([3, 'checkbox'], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 9, 30])
            Z([
                [6],
                [
                    [7],
                    [3, 'item']
                ],
                [3, 'checked']
            ], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 10, 61])
            Z([
                [6],
                [
                    [7],
                    [3, 'item']
                ],
                [3, 'name']
            ], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 10, 37])
            Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'value']
                ],
                [3, '\n                ']
            ], ['./page/component/component-pages/wx-checkbox/wx-checkbox.wxml', 10, 81])
        })(__WXML_GLOBAL__.ops_cached.$gwx_31);
        return __WXML_GLOBAL__.ops_cached.$gwx_31
    }

    function gz$gwx_32() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_32) return __WXML_GLOBAL__.ops_cached.$gwx_32
        __WXML_GLOBAL__.ops_cached.$gwx_32 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-form/wx-form.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-form/wx-form.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-form/wx-form.wxml', 3, 21])
            Z([3, 'form'], ['./page/component/component-pages/wx-form/wx-form.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-form/wx-form.wxml', 4, 21])
            Z([3, '表单'], ['./page/component/component-pages/wx-form/wx-form.wxml', 4, 34])
            Z([3, 'formReset'], ['./page/component/component-pages/wx-form/wx-form.wxml', 6, 64])
            Z([3, 'formSubmit'], ['./page/component/component-pages/wx-form/wx-form.wxml', 6, 40])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-form/wx-form.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-form/wx-form.wxml', 7, 21])
            Z([3, 'section__title'], ['./page/component/component-pages/wx-form/wx-form.wxml', 8, 25])
            Z([3, 'switch'], ['./page/component/component-pages/wx-form/wx-form.wxml', 8, 42])
            Z([3, 'switch'], ['./page/component/component-pages/wx-form/wx-form.wxml', 9, 26])
            Z(z[9][1], ['./page/component/component-pages/wx-form/wx-form.wxml', 11, 21])
            Z(z[10][1], ['./page/component/component-pages/wx-form/wx-form.wxml', 12, 25])
            Z([3, 'slider'], ['./page/component/component-pages/wx-form/wx-form.wxml', 12, 42])
            Z([3, 'slider'], ['./page/component/component-pages/wx-form/wx-form.wxml', 13, 26])
            Z([3, 'section'], ['./page/component/component-pages/wx-form/wx-form.wxml', 16, 21])
            Z(z[10][1], ['./page/component/component-pages/wx-form/wx-form.wxml', 17, 25])
            Z([3, 'input'], ['./page/component/component-pages/wx-form/wx-form.wxml', 17, 42])
            Z([3, 'input'], ['./page/component/component-pages/wx-form/wx-form.wxml', 18, 25])
            Z([3, 'please input here'], ['./page/component/component-pages/wx-form/wx-form.wxml', 18, 45])
            Z(z[9][1], ['./page/component/component-pages/wx-form/wx-form.wxml', 20, 21])
            Z(z[10][1], ['./page/component/component-pages/wx-form/wx-form.wxml', 21, 25])
            Z([3, 'radio'], ['./page/component/component-pages/wx-form/wx-form.wxml', 21, 42])
            Z([3, 'radio-group'], ['./page/component/component-pages/wx-form/wx-form.wxml', 22, 31])
            Z([3, 'radio1'], ['./page/component/component-pages/wx-form/wx-form.wxml', 23, 37])
            Z([3, 'radio1'], ['./page/component/component-pages/wx-form/wx-form.wxml', 23, 47])
            Z([3, 'radio2'], ['./page/component/component-pages/wx-form/wx-form.wxml', 24, 37])
            Z([3, 'radio2'], ['./page/component/component-pages/wx-form/wx-form.wxml', 24, 47])
            Z(z[9][1], ['./page/component/component-pages/wx-form/wx-form.wxml', 27, 21])
            Z(z[10][1], ['./page/component/component-pages/wx-form/wx-form.wxml', 28, 25])
            Z([3, 'checkbox'], ['./page/component/component-pages/wx-form/wx-form.wxml', 28, 42])
            Z([3, 'checkbox'], ['./page/component/component-pages/wx-form/wx-form.wxml', 29, 34])
            Z([3, 'checkbox1'], ['./page/component/component-pages/wx-form/wx-form.wxml', 30, 40])
            Z([3, 'checkbox1'], ['./page/component/component-pages/wx-form/wx-form.wxml', 30, 53])
            Z([3, 'checkbox2'], ['./page/component/component-pages/wx-form/wx-form.wxml', 31, 40])
            Z([3, 'checkbox2'], ['./page/component/component-pages/wx-form/wx-form.wxml', 31, 53])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-form/wx-form.wxml', 34, 21])
            Z([3, 'submit'], ['./page/component/component-pages/wx-form/wx-form.wxml', 35, 30])
            Z([3, 'Submit'], ['./page/component/component-pages/wx-form/wx-form.wxml', 35, 39])
            Z([3, 'reset'], ['./page/component/component-pages/wx-form/wx-form.wxml', 36, 30])
            Z([3, 'Reset'], ['./page/component/component-pages/wx-form/wx-form.wxml', 36, 38])
        })(__WXML_GLOBAL__.ops_cached.$gwx_32);
        return __WXML_GLOBAL__.ops_cached.$gwx_32
    }

    function gz$gwx_33() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_33) return __WXML_GLOBAL__.ops_cached.$gwx_33
        __WXML_GLOBAL__.ops_cached.$gwx_33 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 3, 21])
            Z([3, 'icon'], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 4, 21])
            Z([3, 'icon图标'], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 7, 21])
            Z([3, 'group'], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 8, 25])
            Z([
                [7],
                [3, 'iconSize']
            ], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 9, 37])
            Z([
                [7],
                [3, 'item']
            ], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 10, 47])
            Z([3, 'success'], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 10, 32])
            Z(z[7][1], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 15, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 16, 25])
            Z([
                [7],
                [3, 'iconType']
            ], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 18, 41])
            Z([3, '45'], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 19, 52])
            Z(z[10][1], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 19, 36])
            Z(z[7][1], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 25, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 26, 25])
            Z([
                [7],
                [3, 'iconColor']
            ], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 27, 37])
            Z(z[10][1], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 28, 58])
            Z(z[15][1], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 28, 47])
            Z(z[11][1], ['./page/component/component-pages/wx-icon/wx-icon.wxml', 28, 32])
        })(__WXML_GLOBAL__.ops_cached.$gwx_33);
        return __WXML_GLOBAL__.ops_cached.$gwx_33
    }

    function gz$gwx_34() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_34) return __WXML_GLOBAL__.ops_cached.$gwx_34
        __WXML_GLOBAL__.ops_cached.$gwx_34 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-image/wx-image.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-image/wx-image.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-image/wx-image.wxml', 3, 21])
            Z([3, 'image'], ['./page/component/component-pages/wx-image/wx-image.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-image/wx-image.wxml', 4, 21])
            Z([3, '图片'], ['./page/component/component-pages/wx-image/wx-image.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-image/wx-image.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-image/wx-image.wxml', 7, 21])
            Z([3, 'section__title'], ['./page/component/component-pages/wx-image/wx-image.wxml', 8, 25])
            Z([3, ' local image'], ['./page/component/component-pages/wx-image/wx-image.wxml', 8, 42])
            Z([3, 'section__ctn'], ['./page/component/component-pages/wx-image/wx-image.wxml', 9, 25])
            Z([3, '../../resources/pic.jpg'], ['./page/component/component-pages/wx-image/wx-image.wxml', 10, 28])
            Z(z[7][1], ['./page/component/component-pages/wx-image/wx-image.wxml', 13, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-image/wx-image.wxml', 14, 25])
            Z([3, ' internet image'], ['./page/component/component-pages/wx-image/wx-image.wxml', 14, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-image/wx-image.wxml', 15, 25])
            Z([3, '130'], ['./page/component/component-pages/wx-image/wx-image.wxml', 17, 31])
            Z([3, 'http://img02.tooopen.com/images/20160603/tooopen_sy_164101489754.jpg'], ['./page/component/component-pages/wx-image/wx-image.wxml', 16, 28])
            Z([3, '200'], ['./page/component/component-pages/wx-image/wx-image.wxml', 16, 105])
            Z(z[7][1], ['./page/component/component-pages/wx-image/wx-image.wxml', 20, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-image/wx-image.wxml', 21, 25])
            Z([3, ' error image'], ['./page/component/component-pages/wx-image/wx-image.wxml', 21, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-image/wx-image.wxml', 22, 25])
            Z([3, 'imageError'], ['./page/component/component-pages/wx-image/wx-image.wxml', 23, 50])
            Z([3, 'error url'], ['./page/component/component-pages/wx-image/wx-image.wxml', 23, 28])
        })(__WXML_GLOBAL__.ops_cached.$gwx_34);
        return __WXML_GLOBAL__.ops_cached.$gwx_34
    }

    function gz$gwx_35() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_35) return __WXML_GLOBAL__.ops_cached.$gwx_35
        __WXML_GLOBAL__.ops_cached.$gwx_35 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-input/wx-input.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-input/wx-input.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-input/wx-input.wxml', 3, 21])
            Z([3, 'input'], ['./page/component/component-pages/wx-input/wx-input.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-input/wx-input.wxml', 4, 21])
            Z([3, '输入框'], ['./page/component/component-pages/wx-input/wx-input.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-input/wx-input.wxml', 6, 17])
            Z([3, 'section'], ['./page/component/component-pages/wx-input/wx-input.wxml', 7, 25])
            Z([3, '这是一个可以自动聚焦的input'], ['./page/component/component-pages/wx-input/wx-input.wxml', 8, 36])
            Z(z[7][1], ['./page/component/component-pages/wx-input/wx-input.wxml', 10, 25])
            Z([
                [7],
                [3, 'focus']
            ], ['./page/component/component-pages/wx-input/wx-input.wxml', 11, 90])
            Z([3, '这个只有在按钮点击的时候才聚焦'], ['./page/component/component-pages/wx-input/wx-input.wxml', 11, 36])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-input/wx-input.wxml', 12, 29])
            Z([3, 'bindButtonTap'], ['./page/component/component-pages/wx-input/wx-input.wxml', 13, 37])
            Z([3, '使得输入框获取焦点'], ['./page/component/component-pages/wx-input/wx-input.wxml', 13, 53])
            Z(z[7][1], ['./page/component/component-pages/wx-input/wx-input.wxml', 16, 25])
            Z([3, '10'], ['./page/component/component-pages/wx-input/wx-input.wxml', 17, 35])
            Z([3, '最大输入长度10'], ['./page/component/component-pages/wx-input/wx-input.wxml', 17, 52])
            Z(z[7][1], ['./page/component/component-pages/wx-input/wx-input.wxml', 19, 25])
            Z([3, 'section__title'], ['./page/component/component-pages/wx-input/wx-input.wxml', 20, 29])
            Z([a, [3, '你输入的是：'],
                [
                    [7],
                    [3, 'inputValue']
                ]
            ], ['./page/component/component-pages/wx-input/wx-input.wxml', 20, 46])
            Z([3, 'bindKeyInput'], ['./page/component/component-pages/wx-input/wx-input.wxml', 21, 35])
            Z([3, '输入同步到view中'], ['./page/component/component-pages/wx-input/wx-input.wxml', 21, 62])
            Z(z[7][1], ['./page/component/component-pages/wx-input/wx-input.wxml', 23, 25])
            Z([3, 'bindReplaceInput'], ['./page/component/component-pages/wx-input/wx-input.wxml', 24, 35])
            Z([3, '连续的两个1会变成2'], ['./page/component/component-pages/wx-input/wx-input.wxml', 24, 66])
            Z(z[7][1], ['./page/component/component-pages/wx-input/wx-input.wxml', 26, 25])
            Z([3, 'bindHideKeyboard'], ['./page/component/component-pages/wx-input/wx-input.wxml', 27, 35])
            Z([3, '输入123自动收起键盘'], ['./page/component/component-pages/wx-input/wx-input.wxml', 27, 66])
            Z(z[7][1], ['./page/component/component-pages/wx-input/wx-input.wxml', 29, 25])
            Z([3, '这是一个带有表情的输入框'], ['./page/component/component-pages/wx-input/wx-input.wxml', 30, 49])
            Z([3, 'emoji'], ['./page/component/component-pages/wx-input/wx-input.wxml', 30, 29])
            Z(z[7][1], ['./page/component/component-pages/wx-input/wx-input.wxml', 32, 25])
            Z([3, '这是一个数字输入框'], ['./page/component/component-pages/wx-input/wx-input.wxml', 33, 59])
            Z([3, 'number'], ['./page/component/component-pages/wx-input/wx-input.wxml', 33, 38])
            Z(z[7][1], ['./page/component/component-pages/wx-input/wx-input.wxml', 35, 25])
            Z([3, '这是一个文本输入框'], ['./page/component/component-pages/wx-input/wx-input.wxml', 36, 57])
            Z([3, 'text'], ['./page/component/component-pages/wx-input/wx-input.wxml', 36, 38])
            Z(z[7][1], ['./page/component/component-pages/wx-input/wx-input.wxml', 38, 25])
            Z([3, '带小数点的数字键盘'], ['./page/component/component-pages/wx-input/wx-input.wxml', 39, 49])
            Z([3, 'digit'], ['./page/component/component-pages/wx-input/wx-input.wxml', 39, 29])
            Z(z[7][1], ['./page/component/component-pages/wx-input/wx-input.wxml', 41, 25])
            Z([3, '身份证输入键盘'], ['./page/component/component-pages/wx-input/wx-input.wxml', 42, 50])
            Z([3, 'idcard'], ['./page/component/component-pages/wx-input/wx-input.wxml', 42, 29])
            Z(z[7][1], ['./page/component/component-pages/wx-input/wx-input.wxml', 44, 25])
            Z([3, '占位符字体是红色的'], ['./page/component/component-pages/wx-input/wx-input.wxml', 45, 66])
            Z([3, 'color:red'], ['./page/component/component-pages/wx-input/wx-input.wxml', 45, 42])
        })(__WXML_GLOBAL__.ops_cached.$gwx_35);
        return __WXML_GLOBAL__.ops_cached.$gwx_35
    }

    function gz$gwx_36() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_36) return __WXML_GLOBAL__.ops_cached.$gwx_36
        __WXML_GLOBAL__.ops_cached.$gwx_36 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-label/wx-label.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-label/wx-label.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-label/wx-label.wxml', 3, 21])
            Z([3, 'label'], ['./page/component/component-pages/wx-label/wx-label.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-label/wx-label.wxml', 4, 21])
            Z([3, '标签'], ['./page/component/component-pages/wx-label/wx-label.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-label/wx-label.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-label/wx-label.wxml', 7, 21])
            Z([3, 'section__title'], ['./page/component/component-pages/wx-label/wx-label.wxml', 8, 25])
            Z([3, '表单组件在label内'], ['./page/component/component-pages/wx-label/wx-label.wxml', 8, 42])
            Z([3, 'checkboxChange'], ['./page/component/component-pages/wx-label/wx-label.wxml', 9, 54])
            Z([3, 'group'], ['./page/component/component-pages/wx-label/wx-label.wxml', 9, 35])
            Z([
                [7],
                [3, 'checkboxItems']
            ], ['./page/component/component-pages/wx-label/wx-label.wxml', 10, 52])
            Z([3, 'label-1'], ['./page/component/component-pages/wx-label/wx-label.wxml', 10, 29])
            Z([
                [6],
                [
                    [7],
                    [3, 'item']
                ],
                [3, 'checked']
            ], ['./page/component/component-pages/wx-label/wx-label.wxml', 12, 65])
            Z([
                [6],
                [
                    [7],
                    [3, 'item']
                ],
                [3, 'name']
            ], ['./page/component/component-pages/wx-label/wx-label.wxml', 12, 41])
            Z([3, 'label-1__text'], ['./page/component/component-pages/wx-label/wx-label.wxml', 13, 37])
            Z([a, [
                [6],
                [
                    [7],
                    [3, 'item']
                ],
                [3, 'value']
            ]], ['./page/component/component-pages/wx-label/wx-label.wxml', 13, 53])
            Z(z[7][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 19, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 20, 25])
            Z([3, 'label用for标识表单组件'], ['./page/component/component-pages/wx-label/wx-label.wxml', 20, 42])
            Z([3, 'radioChange'], ['./page/component/component-pages/wx-label/wx-label.wxml', 21, 51])
            Z(z[11][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 21, 32])
            Z([
                [7],
                [3, 'radioItems']
            ], ['./page/component/component-pages/wx-label/wx-label.wxml', 22, 52])
            Z([3, 'label-2'], ['./page/component/component-pages/wx-label/wx-label.wxml', 22, 29])
            Z(z[14][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 23, 77])
            Z(z[15][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 23, 31])
            Z(z[15][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 23, 53])
            Z([3, 'label-2__text'], ['./page/component/component-pages/wx-label/wx-label.wxml', 24, 34])
            Z(z[15][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 24, 54])
            Z([a, [
                [6],
                [
                    [7],
                    [3, 'item']
                ],
                [3, 'name']
            ]], ['./page/component/component-pages/wx-label/wx-label.wxml', 24, 76])
            Z(z[7][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 30, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 31, 25])
            Z([3, '绑定button'], ['./page/component/component-pages/wx-label/wx-label.wxml', 31, 42])
            Z([3, 'label-3'], ['./page/component/component-pages/wx-label/wx-label.wxml', 32, 26])
            Z([3, '点击这段文字，button会被选中'], ['./page/component/component-pages/wx-label/wx-label.wxml', 33, 23])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-label/wx-label.wxml', 35, 25])
            Z([3, 'tapEvent'], ['./page/component/component-pages/wx-label/wx-label.wxml', 36, 57])
            Z([3, '1'], ['./page/component/component-pages/wx-label/wx-label.wxml', 36, 45])
            Z([3, 'default'], ['./page/component/component-pages/wx-label/wx-label.wxml', 36, 30])
            Z([3, '按钮'], ['./page/component/component-pages/wx-label/wx-label.wxml', 36, 68])
            Z(z[7][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 40, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 41, 25])
            Z([3, 'label内有多个时选中第一个'], ['./page/component/component-pages/wx-label/wx-label.wxml', 41, 42])
            Z([3, 'label-4'], ['./page/component/component-pages/wx-label/wx-label.wxml', 42, 26])
            Z([3, ' 选中我 '], ['./page/component/component-pages/wx-label/wx-label.wxml', 43, 27])
            Z([3, ' 选不中 '], ['./page/component/component-pages/wx-label/wx-label.wxml', 44, 27])
            Z(z[46][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 45, 27])
            Z(z[46][1], ['./page/component/component-pages/wx-label/wx-label.wxml', 46, 27])
            Z([3, 'label-4_text'], ['./page/component/component-pages/wx-label/wx-label.wxml', 47, 29])
            Z([3, '点我会选中第一个'], ['./page/component/component-pages/wx-label/wx-label.wxml', 47, 44])
        })(__WXML_GLOBAL__.ops_cached.$gwx_36);
        return __WXML_GLOBAL__.ops_cached.$gwx_36
    }

    function gz$gwx_37() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_37) return __WXML_GLOBAL__.ops_cached.$gwx_37
        __WXML_GLOBAL__.ops_cached.$gwx_37 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 3, 21])
            Z([3, 'mask'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 4, 21])
            Z([3, '遮罩'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 6, 17])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 7, 21])
            Z([3, 'body-view'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 8, 25])
            Z([3, 'mask1'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 9, 52])
            Z([
                [7],
                [3, 'hidden1']
            ], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 9, 30])
            Z([3, 'none'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 9, 72])
            Z([3, 'tap1'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 10, 48])
            Z([3, 'default'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 10, 30])
            Z([3, '点击弹出默认mask'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 10, 55])
            Z(z[8][1], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 13, 25])
            Z([3, 'mask2'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 14, 52])
            Z([
                [7],
                [3, 'hidden2']
            ], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 14, 30])
            Z(z[11][1], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 14, 119])
            Z([3, 'background-color: rgba(255,255,0,0.6);'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 14, 66])
            Z([3, 'tap2'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 15, 48])
            Z(z[13][1], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 15, 30])
            Z([3, '点击弹出半透明颜色的mask'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 15, 55])
            Z(z[8][1], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 18, 25])
            Z([3, 'mask3'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 19, 52])
            Z([
                [7],
                [3, 'hidden3']
            ], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 19, 30])
            Z(z[11][1], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 19, 112])
            Z([3, 'background-color: rgb(0,255,0);'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 19, 66])
            Z([3, 'tap3'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 20, 48])
            Z(z[13][1], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 20, 30])
            Z([3, '点击弹出纯色mask'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 20, 55])
            Z(z[8][1], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 23, 25])
            Z([3, 'mask4'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 24, 52])
            Z([
                [7],
                [3, 'hidden4']
            ], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 24, 30])
            Z(z[11][1], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 24, 95])
            Z([3, 'z-index: -100;'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 24, 66])
            Z([3, 'tap4'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 25, 48])
            Z(z[13][1], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 25, 30])
            Z([3, '点击弹出设置z-index的mask'], ['./page/component/component-pages/wx-mask/wx-mask.wxml', 25, 55])
        })(__WXML_GLOBAL__.ops_cached.$gwx_37);
        return __WXML_GLOBAL__.ops_cached.$gwx_37
    }

    function gz$gwx_38() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_38) return __WXML_GLOBAL__.ops_cached.$gwx_38
        __WXML_GLOBAL__.ops_cached.$gwx_38 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 3, 21])
            Z([3, 'modal'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 4, 21])
            Z([3, '模式对话框'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 6, 17])
            Z([3, 'modalChange'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 7, 142])
            Z(z[7][1], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 7, 117])
            Z([3, 'cancel'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 7, 66])
            Z([3, 'confirm'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 7, 44])
            Z([
                [7],
                [3, 'modalHidden']
            ], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 7, 82])
            Z([3, '标题'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 7, 22])
            Z([3, '\n            这是对话框的内容。\n        '], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 7, 156])
            Z([3, 'modalChange2'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 11, 104])
            Z(z[14][1], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 11, 78])
            Z([3, 'modal'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 11, 22])
            Z([
                [7],
                [3, 'modalHidden2']
            ], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 11, 37])
            Z([3, ' 没有标题没有取消的对话框 '], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 12, 19])
            Z([3, ' 内容可以插入节点 '], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 13, 19])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 16, 21])
            Z([3, 'modalTap'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 17, 44])
            Z([3, 'default'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 17, 26])
            Z([3, '点击弹出modal'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 17, 55])
            Z([3, 'modalTap2'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 18, 44])
            Z(z[22][1], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 18, 26])
            Z([3, '点击弹出modal2'], ['./page/component/component-pages/wx-modal/wx-modal.wxml', 18, 56])
        })(__WXML_GLOBAL__.ops_cached.$gwx_38);
        return __WXML_GLOBAL__.ops_cached.$gwx_38
    }

    function gz$gwx_39() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_39) return __WXML_GLOBAL__.ops_cached.$gwx_39
        __WXML_GLOBAL__.ops_cached.$gwx_39 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-navigator/navigate.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-navigator/navigate.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-navigator/navigate.wxml', 3, 21])
            Z([a, [
                [7],
                [3, 'title']
            ]], ['./page/component/component-pages/wx-navigator/navigate.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-navigator/navigate.wxml', 4, 21])
            Z([3, '这是新建的页面，点击左上角返回回到之前页面'], ['./page/component/component-pages/wx-navigator/navigate.wxml', 4, 34])
        })(__WXML_GLOBAL__.ops_cached.$gwx_39);
        return __WXML_GLOBAL__.ops_cached.$gwx_39
    }

    function gz$gwx_40() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_40) return __WXML_GLOBAL__.ops_cached.$gwx_40
        __WXML_GLOBAL__.ops_cached.$gwx_40 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-navigator/redirect.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-navigator/redirect.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-navigator/redirect.wxml', 3, 21])
            Z([a, [
                [7],
                [3, 'title']
            ]], ['./page/component/component-pages/wx-navigator/redirect.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-navigator/redirect.wxml', 4, 21])
            Z([3, '这是当前页，点击左上角返回回到上级菜单'], ['./page/component/component-pages/wx-navigator/redirect.wxml', 4, 34])
        })(__WXML_GLOBAL__.ops_cached.$gwx_40);
        return __WXML_GLOBAL__.ops_cached.$gwx_40
    }

    function gz$gwx_41() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_41) return __WXML_GLOBAL__.ops_cached.$gwx_41
        __WXML_GLOBAL__.ops_cached.$gwx_41 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 3, 21])
            Z([3, 'navigator'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 4, 21])
            Z([3, '导航栏'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 6, 17])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 7, 21])
            Z([3, 'navigator-hover'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 8, 66])
            Z([3, 'navigate?title\x3dnavigate'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 8, 28])
            Z([3, 'default'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 9, 30])
            Z([3, '跳转到新页面'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 9, 40])
            Z([3, 'other-navigator-hover'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 11, 75])
            Z([3, 'redirect?title\x3dredirect'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 11, 28])
            Z(z[10][1], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 12, 30])
            Z([3, '在当前页打开'], ['./page/component/component-pages/wx-navigator/wx-navigator.wxml', 12, 40])
        })(__WXML_GLOBAL__.ops_cached.$gwx_41);
        return __WXML_GLOBAL__.ops_cached.$gwx_41
    }

    function gz$gwx_42() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_42) return __WXML_GLOBAL__.ops_cached.$gwx_42
        __WXML_GLOBAL__.ops_cached.$gwx_42 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 3, 21])
            Z([3, 'picker'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 4, 21])
            Z([3, '选择器'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 6, 17])
            Z([3, 'section'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 7, 21])
            Z([3, 'section__title'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 8, 25])
            Z([3, '地区选择器'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 8, 42])
            Z([3, 'bindPickerChange'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 9, 32])
            Z([
                [7],
                [3, 'array']
            ], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 9, 75])
            Z([
                [7],
                [3, 'index']
            ], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 9, 57])
            Z([3, 'picker'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 10, 29])
            Z([a, [3, '\r\n                    当前选择：'],
                [
                    [6],
                    [
                        [7],
                        [3, 'array']
                    ],
                    [
                        [7],
                        [3, 'index']
                    ]
                ],
                [3, '\r\n                ']
            ], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 10, 38])
            Z(z[7][1], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 15, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 16, 25])
            Z([3, '时间选择器'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 16, 42])
            Z([3, 'bindTimeChange'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 17, 87])
            Z([3, '21:01'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 17, 68])
            Z([3, 'time'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 17, 26])
            Z([3, '09:01'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 17, 56])
            Z([
                [7],
                [3, 'time']
            ], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 17, 39])
            Z(z[13][1], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 18, 29])
            Z([a, [3, '\r\n                    当前选择: '],
                [
                    [7],
                    [3, 'time']
                ], z[14][1][3]
            ], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 18, 38])
            Z(z[7][1], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 24, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 25, 25])
            Z([3, '日期选择器'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 25, 42])
            Z([3, 'bindDateChange'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 26, 97])
            Z([3, '2017-09-01'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 26, 73])
            Z([3, 'date'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 26, 26])
            Z([3, '2015-09-01'], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 26, 56])
            Z([
                [7],
                [3, 'date']
            ], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 26, 39])
            Z(z[13][1], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 27, 29])
            Z([a, z[24][1][1],
                [
                    [7],
                    [3, 'date']
                ], z[14][1][3]
            ], ['./page/component/component-pages/wx-picker/wx-picker.wxml', 27, 38])
        })(__WXML_GLOBAL__.ops_cached.$gwx_42);
        return __WXML_GLOBAL__.ops_cached.$gwx_42
    }

    function gz$gwx_43() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_43) return __WXML_GLOBAL__.ops_cached.$gwx_43
        __WXML_GLOBAL__.ops_cached.$gwx_43 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 3, 21])
            Z([3, 'progress'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 4, 21])
            Z([3, '进度条'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 7, 21])
            Z([3, '20'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 8, 31])
            Z([3, '40'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 9, 31])
            Z([3, '60'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 10, 31])
            Z([3, '10'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 10, 49])
            Z([3, '#10AEFF'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 11, 42])
            Z([3, '80'], ['./page/component/component-pages/wx-progress/wx-progress.wxml', 11, 31])
        })(__WXML_GLOBAL__.ops_cached.$gwx_43);
        return __WXML_GLOBAL__.ops_cached.$gwx_43
    }

    function gz$gwx_44() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_44) return __WXML_GLOBAL__.ops_cached.$gwx_44
        __WXML_GLOBAL__.ops_cached.$gwx_44 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 3, 21])
            Z([3, 'radio'], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 4, 21])
            Z([3, '单选框'], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 7, 21])
            Z([3, 'radioChange'], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 8, 57])
            Z([3, 'radio-group'], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 8, 32])
            Z([
                [7],
                [3, 'items']
            ], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 9, 51])
            Z([3, 'radio'], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 9, 30])
            Z([
                [6],
                [
                    [7],
                    [3, 'item']
                ],
                [3, 'checked']
            ], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 10, 58])
            Z([
                [6],
                [
                    [7],
                    [3, 'item']
                ],
                [3, 'name']
            ], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 10, 34])
            Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'value']
                ],
                [3, '\n                ']
            ], ['./page/component/component-pages/wx-radio/wx-radio.wxml', 10, 78])
        })(__WXML_GLOBAL__.ops_cached.$gwx_44);
        return __WXML_GLOBAL__.ops_cached.$gwx_44
    }

    function gz$gwx_45() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_45) return __WXML_GLOBAL__.ops_cached.$gwx_45
        __WXML_GLOBAL__.ops_cached.$gwx_45 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 3, 21])
            Z([3, 'scroll-view'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 4, 21])
            Z([3, '可滚动视图区域。'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 6, 17])
            Z([3, 'section'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 7, 21])
            Z([3, 'section__title'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 8, 25])
            Z([3, 'vertical scroll'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 8, 42])
            Z([3, 'scroll'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 9, 128])
            Z([3, 'lower'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 9, 109])
            Z([3, 'upper'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 9, 83])
            Z([
                [7],
                [3, 'toView']
            ], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 9, 154])
            Z([
                [7],
                [3, 'scrollTop']
            ], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 9, 178])
            Z([3, 'true'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 9, 35])
            Z([3, 'height: 200px;'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 9, 48])
            Z([3, 'scroll-view-item bc_green'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 10, 40])
            Z([3, 'green'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 10, 26])
            Z([3, 'scroll-view-item bc_red'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 11, 39])
            Z([3, 'red'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 11, 26])
            Z([3, 'scroll-view-item bc_yellow'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 12, 41])
            Z([3, 'yellow'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 12, 26])
            Z([3, 'scroll-view-item bc_blue'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 13, 39])
            Z([3, 'blue'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 13, 26])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 16, 25])
            Z([3, 'tap'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 17, 45])
            Z([3, 'mini'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 17, 30])
            Z([3, 'click me to scroll into view '], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 17, 51])
            Z([3, 'tapMove'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 18, 45])
            Z(z[27][1], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 18, 30])
            Z([3, 'click me to scroll'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 18, 55])
            Z([3, 'scrollToTop'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 19, 45])
            Z(z[27][1], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 19, 30])
            Z([3, 'click me to top'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 19, 59])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 22, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 23, 25])
            Z([3, 'horizontal scroll'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 23, 42])
            Z([3, 'scroll-view_H'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 24, 32])
            Z(z[15][1], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 24, 57])
            Z([3, 'width: 100%'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 24, 70])
            Z([3, 'scroll-view-item_H bc_green'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 25, 40])
            Z(z[18][1], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 25, 26])
            Z([3, 'scroll-view-item_H bc_red'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 26, 39])
            Z(z[20][1], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 26, 26])
            Z([3, 'scroll-view-item_H bc_yellow'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 27, 41])
            Z(z[22][1], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 27, 26])
            Z([3, 'scroll-view-item_H bc_blue'], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 28, 39])
            Z(z[24][1], ['./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', 28, 26])
        })(__WXML_GLOBAL__.ops_cached.$gwx_45);
        return __WXML_GLOBAL__.ops_cached.$gwx_45
    }

    function gz$gwx_46() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_46) return __WXML_GLOBAL__.ops_cached.$gwx_46
        __WXML_GLOBAL__.ops_cached.$gwx_46 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 3, 21])
            Z([3, 'slide-tab'], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 4, 21])
            Z(z[3][1], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 7, 21])
            Z([3, 'tabchange'], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 8, 47])
            Z([3, '300'], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 8, 30])
            Z([3, 'height: 300px; color: #fff'], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 8, 65])
            Z([
                [7],
                [3, 'texts']
            ], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 9, 37])
            Z([a, [3, 'background-color: #'],
                [
                    [7],
                    [3, 'index']
                ],
                [
                    [7],
                    [3, 'index']
                ],
                [
                    [7],
                    [3, 'index']
                ]
            ], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 10, 40])
            Z([a, [
                [7],
                [3, 'item']
            ]], ['./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', 12, 35])
        })(__WXML_GLOBAL__.ops_cached.$gwx_46);
        return __WXML_GLOBAL__.ops_cached.$gwx_46
    }

    function gz$gwx_47() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_47) return __WXML_GLOBAL__.ops_cached.$gwx_47
        __WXML_GLOBAL__.ops_cached.$gwx_47 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 3, 21])
            Z([3, 'slider'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 4, 21])
            Z([3, '滑块'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 7, 21])
            Z([3, 'section__title'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 8, 25])
            Z([3, '设置step'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 8, 42])
            Z([3, 'body-view'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 9, 25])
            Z([3, 'slider2change'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 10, 47])
            Z([3, '5'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 10, 68])
            Z([3, '60'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 10, 31])
            Z(z[7][1], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 14, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 15, 25])
            Z([3, '显示当前value'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 15, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 16, 25])
            Z([3, 'slider3change'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 17, 47])
            Z([3, '50'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 17, 31])
            Z(z[7][1], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 21, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 22, 25])
            Z([3, '设置最小/最大值'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 22, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 23, 25])
            Z([3, 'slider4change'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 24, 48])
            Z([3, '200'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 24, 77])
            Z(z[19][1], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 24, 68])
            Z([3, '100'], ['./page/component/component-pages/wx-slider/wx-slider.wxml', 24, 31])
        })(__WXML_GLOBAL__.ops_cached.$gwx_47);
        return __WXML_GLOBAL__.ops_cached.$gwx_47
    }

    function gz$gwx_48() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_48) return __WXML_GLOBAL__.ops_cached.$gwx_48
        __WXML_GLOBAL__.ops_cached.$gwx_48 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 3, 21])
            Z([3, 'swiper'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 4, 21])
            Z(z[3][1], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 6, 17])
            Z([3, 'section section_gap swiper'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 7, 21])
            Z([
                [7],
                [3, 'autoplay']
            ], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 9, 30])
            Z([
                [7],
                [3, 'duration']
            ], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 9, 78])
            Z([
                [7],
                [3, 'indicatorDots']
            ], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 8, 36])
            Z([
                [7],
                [3, 'interval']
            ], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 9, 54])
            Z([
                [7],
                [3, 'vertical']
            ], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 8, 65])
            Z([
                [7],
                [3, 'background']
            ], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 10, 37])
            Z([a, [3, 'swiper-item bc_'],
                [
                    [7],
                    [3, 'item']
                ]
            ], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 12, 37])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 17, 21])
            Z([3, 'changeIndicatorDots'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 18, 44])
            Z([3, 'default'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 18, 26])
            Z([3, 'indicator-dots'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 18, 66])
            Z([3, 'changeVertical'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 19, 44])
            Z(z[17][1], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 19, 26])
            Z([a, [
                [2, '?:'],
                [
                    [7],
                    [3, 'vertical']
                ],
                [1, 'horizontal'],
                [1, 'vertical']
            ]], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 19, 61])
            Z([3, 'changeAutoplay'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 20, 44])
            Z(z[17][1], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 20, 26])
            Z([3, 'autoplay'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 20, 61])
            Z([3, 'durationChange'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 22, 28])
            Z([3, '2000'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 22, 91])
            Z([3, '500'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 22, 81])
            Z(z[9][1], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 22, 51])
            Z([3, 'section__title'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 23, 21])
            Z([3, 'duration'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 23, 38])
            Z([3, 'intervalChange'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 24, 28])
            Z([3, '10000'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 24, 92])
            Z(z[26][1], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 24, 81])
            Z(z[11][1], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 24, 51])
            Z(z[29][1], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 25, 21])
            Z([3, 'interval'], ['./page/component/component-pages/wx-swiper/wx-swiper.wxml', 25, 38])
        })(__WXML_GLOBAL__.ops_cached.$gwx_48);
        return __WXML_GLOBAL__.ops_cached.$gwx_48
    }

    function gz$gwx_49() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_49) return __WXML_GLOBAL__.ops_cached.$gwx_49
        __WXML_GLOBAL__.ops_cached.$gwx_49 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-switch/wx-switch.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-switch/wx-switch.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-switch/wx-switch.wxml', 3, 21])
            Z([3, 'switch'], ['./page/component/component-pages/wx-switch/wx-switch.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-switch/wx-switch.wxml', 4, 21])
            Z([3, '开关'], ['./page/component/component-pages/wx-switch/wx-switch.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-switch/wx-switch.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-switch/wx-switch.wxml', 7, 21])
            Z([3, 'body-view'], ['./page/component/component-pages/wx-switch/wx-switch.wxml', 8, 25])
            Z([3, 'switch1Change'], ['./page/component/component-pages/wx-switch/wx-switch.wxml', 9, 65])
            Z([
                [7],
                [3, 'switch1Checked']
            ], ['./page/component/component-pages/wx-switch/wx-switch.wxml', 9, 33])
        })(__WXML_GLOBAL__.ops_cached.$gwx_49);
        return __WXML_GLOBAL__.ops_cached.$gwx_49
    }

    function gz$gwx_50() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_50) return __WXML_GLOBAL__.ops_cached.$gwx_50
        __WXML_GLOBAL__.ops_cached.$gwx_50 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-text/wx-text.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-text/wx-text.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-text/wx-text.wxml', 3, 21])
            Z([3, 'text'], ['./page/component/component-pages/wx-text/wx-text.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-text/wx-text.wxml', 4, 21])
            Z([3, '文字标签'], ['./page/component/component-pages/wx-text/wx-text.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-text/wx-text.wxml', 6, 17])
            Z([3, 'section section_gap'], ['./page/component/component-pages/wx-text/wx-text.wxml', 7, 21])
            Z([a, [
                [7],
                [3, 'text']
            ]], ['./page/component/component-pages/wx-text/wx-text.wxml', 8, 19])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-text/wx-text.wxml', 9, 25])
            Z([3, 'add'], ['./page/component/component-pages/wx-text/wx-text.wxml', 10, 33])
            Z([3, 'add line'], ['./page/component/component-pages/wx-text/wx-text.wxml', 10, 39])
            Z([3, 'remove'], ['./page/component/component-pages/wx-text/wx-text.wxml', 11, 33])
            Z([3, 'remove line'], ['./page/component/component-pages/wx-text/wx-text.wxml', 11, 42])
        })(__WXML_GLOBAL__.ops_cached.$gwx_50);
        return __WXML_GLOBAL__.ops_cached.$gwx_50
    }

    function gz$gwx_51() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_51) return __WXML_GLOBAL__.ops_cached.$gwx_51
        __WXML_GLOBAL__.ops_cached.$gwx_51 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 3, 21])
            Z([3, 'toast'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 4, 21])
            Z([3, 'toast提示'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 6, 17])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 7, 21])
            Z([3, 'body-view'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 8, 25])
            Z([3, 'toast1Change'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 9, 61])
            Z([
                [7],
                [3, 'toast1Hidden']
            ], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 9, 31])
            Z([3, '\n                    默认\n                '], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 9, 76])
            Z([3, 'toast1Tap'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 12, 48])
            Z([3, 'default'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 12, 30])
            Z([3, '点击弹出默认toast'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 12, 60])
            Z(z[8][1], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 14, 25])
            Z([3, 'toast2Change'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 15, 73])
            Z([
                [7],
                [3, 'toast2Hidden']
            ], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 15, 31])
            Z([3, 'warn'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 15, 55])
            Z([3, '\n                    设置icon\n                '], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 15, 88])
            Z([3, 'toast2Tap'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 18, 48])
            Z(z[13][1], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 18, 30])
            Z([3, '点击弹出设置icon的toast'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 18, 60])
            Z(z[8][1], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 20, 25])
            Z([3, 'toast3Change'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 21, 77])
            Z([3, '3000'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 21, 59])
            Z([
                [7],
                [3, 'toast3Hidden']
            ], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 21, 31])
            Z([3, '\n                    设置duration\n                '], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 21, 92])
            Z([3, 'toast3Tap'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 24, 48])
            Z(z[13][1], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 24, 30])
            Z([3, '点击弹出设置duration的toast'], ['./page/component/component-pages/wx-toast/wx-toast.wxml', 24, 60])
        })(__WXML_GLOBAL__.ops_cached.$gwx_51);
        return __WXML_GLOBAL__.ops_cached.$gwx_51
    }

    function gz$gwx_52() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_52) return __WXML_GLOBAL__.ops_cached.$gwx_52
        __WXML_GLOBAL__.ops_cached.$gwx_52 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-video/wx-video.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-video/wx-video.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-video/wx-video.wxml', 3, 21])
            Z([3, 'video'], ['./page/component/component-pages/wx-video/wx-video.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-video/wx-video.wxml', 4, 21])
            Z([3, '视频'], ['./page/component/component-pages/wx-video/wx-video.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-video/wx-video.wxml', 6, 17])
            Z([3, 'section tc'], ['./page/component/component-pages/wx-video/wx-video.wxml', 7, 21])
            Z([3, 'videoErrorCallback'], ['./page/component/component-pages/wx-video/wx-video.wxml', 8, 114])
            Z([3, 'http://flv.bn.netease.com/videolib3/1605/22/auDfZ8781/HD/auDfZ8781-mobile.mp4'], ['./page/component/component-pages/wx-video/wx-video.wxml', 8, 24])
            Z(z[7][1], ['./page/component/component-pages/wx-video/wx-video.wxml', 10, 21])
            Z([
                [7],
                [3, 'src']
            ], ['./page/component/component-pages/wx-video/wx-video.wxml', 11, 24])
            Z([3, 'btn-area'], ['./page/component/component-pages/wx-video/wx-video.wxml', 12, 25])
            Z([3, 'bindButtonTap'], ['./page/component/component-pages/wx-video/wx-video.wxml', 13, 33])
            Z([3, '获取视频'], ['./page/component/component-pages/wx-video/wx-video.wxml', 13, 49])
        })(__WXML_GLOBAL__.ops_cached.$gwx_52);
        return __WXML_GLOBAL__.ops_cached.$gwx_52
    }

    function gz$gwx_53() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_53) return __WXML_GLOBAL__.ops_cached.$gwx_53
        __WXML_GLOBAL__.ops_cached.$gwx_53 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'page'], ['./page/component/component-pages/wx-view/wx-view.wxml', 1, 12])
            Z([3, 'page__hd'], ['./page/component/component-pages/wx-view/wx-view.wxml', 2, 17])
            Z([3, 'page__title'], ['./page/component/component-pages/wx-view/wx-view.wxml', 3, 21])
            Z([3, 'view'], ['./page/component/component-pages/wx-view/wx-view.wxml', 3, 35])
            Z([3, 'page__desc'], ['./page/component/component-pages/wx-view/wx-view.wxml', 4, 21])
            Z([3, '弹性框模型分为弹性容器以及弹性项目。当组件的display为flex或inline-flex时，该组件则为弹性容器，弹性容器的子组件为弹性项目。'], ['./page/component/component-pages/wx-view/wx-view.wxml', 4, 34])
            Z([3, 'page__bd'], ['./page/component/component-pages/wx-view/wx-view.wxml', 6, 17])
            Z([3, 'section'], ['./page/component/component-pages/wx-view/wx-view.wxml', 7, 21])
            Z([3, 'section__title'], ['./page/component/component-pages/wx-view/wx-view.wxml', 8, 25])
            Z([3, 'flex-direction: row'], ['./page/component/component-pages/wx-view/wx-view.wxml', 8, 42])
            Z([3, 'flex-wrp'], ['./page/component/component-pages/wx-view/wx-view.wxml', 9, 25])
            Z([3, 'flex-direction:row;'], ['./page/component/component-pages/wx-view/wx-view.wxml', 9, 42])
            Z([3, 'flex-item bc_green'], ['./page/component/component-pages/wx-view/wx-view.wxml', 10, 29])
            Z([3, 'flex-item bc_red'], ['./page/component/component-pages/wx-view/wx-view.wxml', 11, 29])
            Z([3, 'flex-item bc_blue'], ['./page/component/component-pages/wx-view/wx-view.wxml', 12, 29])
            Z(z[7][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 15, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 16, 25])
            Z([3, 'flex-direction: column'], ['./page/component/component-pages/wx-view/wx-view.wxml', 16, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 17, 25])
            Z([3, 'height: 300px;flex-direction:column;'], ['./page/component/component-pages/wx-view/wx-view.wxml', 17, 42])
            Z(z[12][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 18, 29])
            Z(z[13][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 19, 29])
            Z(z[14][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 20, 29])
            Z(z[7][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 23, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 24, 25])
            Z([3, 'justify-content: flex-start'], ['./page/component/component-pages/wx-view/wx-view.wxml', 24, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 25, 25])
            Z([3, 'flex-direction:row;justify-content: flex-start;'], ['./page/component/component-pages/wx-view/wx-view.wxml', 25, 42])
            Z(z[12][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 26, 29])
            Z(z[13][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 27, 29])
            Z(z[14][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 28, 29])
            Z(z[7][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 31, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 32, 25])
            Z([3, 'justify-content: flex-end'], ['./page/component/component-pages/wx-view/wx-view.wxml', 32, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 33, 25])
            Z([3, 'flex-direction:row;justify-content: flex-end;'], ['./page/component/component-pages/wx-view/wx-view.wxml', 33, 42])
            Z(z[12][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 34, 29])
            Z(z[13][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 35, 29])
            Z(z[14][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 36, 29])
            Z(z[7][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 39, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 40, 25])
            Z([3, 'justify-content: center'], ['./page/component/component-pages/wx-view/wx-view.wxml', 40, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 41, 25])
            Z([3, 'flex-direction:row;justify-content: center;'], ['./page/component/component-pages/wx-view/wx-view.wxml', 41, 42])
            Z(z[12][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 42, 29])
            Z(z[13][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 43, 29])
            Z(z[14][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 44, 29])
            Z(z[7][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 47, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 48, 25])
            Z([3, 'justify-content: space-between'], ['./page/component/component-pages/wx-view/wx-view.wxml', 48, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 49, 25])
            Z([3, 'flex-direction:row;justify-content: space-between;'], ['./page/component/component-pages/wx-view/wx-view.wxml', 49, 42])
            Z(z[12][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 50, 29])
            Z(z[13][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 51, 29])
            Z(z[14][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 52, 29])
            Z(z[7][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 55, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 56, 25])
            Z([3, 'justify-content: space-around'], ['./page/component/component-pages/wx-view/wx-view.wxml', 56, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 57, 25])
            Z([3, 'flex-direction:row;justify-content: space-around;'], ['./page/component/component-pages/wx-view/wx-view.wxml', 57, 42])
            Z(z[12][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 58, 29])
            Z(z[13][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 59, 29])
            Z(z[14][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 60, 29])
            Z(z[7][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 63, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 64, 25])
            Z([3, 'align-items: flex-end'], ['./page/component/component-pages/wx-view/wx-view.wxml', 64, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 65, 25])
            Z([3, 'height: 200px;flex-direction:row;justify-content: center;align-items: flex-end'], ['./page/component/component-pages/wx-view/wx-view.wxml', 65, 42])
            Z(z[12][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 66, 29])
            Z(z[13][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 67, 29])
            Z(z[14][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 68, 29])
            Z(z[7][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 71, 21])
            Z(z[8][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 72, 25])
            Z([3, 'align-items: center'], ['./page/component/component-pages/wx-view/wx-view.wxml', 72, 42])
            Z(z[10][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 73, 25])
            Z([3, 'height: 200px;flex-direction:row;justify-content: center;align-items: center'], ['./page/component/component-pages/wx-view/wx-view.wxml', 73, 42])
            Z(z[12][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 74, 29])
            Z(z[13][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 75, 29])
            Z(z[14][1], ['./page/component/component-pages/wx-view/wx-view.wxml', 76, 29])
        })(__WXML_GLOBAL__.ops_cached.$gwx_53);
        return __WXML_GLOBAL__.ops_cached.$gwx_53
    }

    function gz$gwx_54() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_54) return __WXML_GLOBAL__.ops_cached.$gwx_54
        __WXML_GLOBAL__.ops_cached.$gwx_54 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'index'], ['./page/component/index.wxml', 1, 12])
            Z([3, 'head'], ['./page/component/index.wxml', 2, 17])
            Z([3, 'title'], ['./page/component/index.wxml', 3, 21])
            Z([3, '小程序组件'], ['./page/component/index.wxml', 3, 29])
            Z([3, 'desc'], ['./page/component/index.wxml', 4, 21])
            Z([3, '这是展示小程序组件的DEMO。'], ['./page/component/index.wxml', 4, 28])
            Z([3, 'body'], ['./page/component/index.wxml', 7, 17])
            Z([3, 'widgets'], ['./page/component/index.wxml', 8, 21])
            Z([3, 'widgets__item'], ['./page/component/index.wxml', 9, 25])
            Z([3, 'widgetsToggle'], ['./page/component/index.wxml', 10, 104])
            Z([a, [3, 'widgets__info '],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'viewShow']
                    ],
                    [1, 'widgets__info_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 10, 39])
            Z([3, 'view'], ['./page/component/index.wxml', 10, 26])
            Z([3, 'widgets__info-name'], ['./page/component/index.wxml', 11, 33])
            Z([3, '内容分区'], ['./page/component/index.wxml', 11, 54])
            Z([3, 'cover'], ['./page/component/index.wxml', 12, 100])
            Z([3, 'widgets__info-img'], ['./page/component/index.wxml', 12, 34])
            Z([3, 'resources/kind/view.png'], ['./page/component/index.wxml', 12, 58])
            Z([a, [3, 'widgets__list '],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'viewShow']
                    ],
                    [1, 'widgets__list_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 14, 29])
            Z([3, 'widget'], ['./page/component/index.wxml', 15, 76])
            Z([3, 'component-pages/wx-view/wx-view'], ['./page/component/index.wxml', 15, 36])
            Z([3, 'widget__name'], ['./page/component/index.wxml', 16, 37])
            Z([3, 'view'], ['./page/component/index.wxml', 16, 52])
            Z(z[14][1], ['./page/component/index.wxml', 17, 96])
            Z([3, 'widget__arrow'], ['./page/component/index.wxml', 17, 38])
            Z([3, 'resources/arrow.png'], ['./page/component/index.wxml', 17, 58])
            Z([3, 'widget__line'], ['./page/component/index.wxml', 18, 37])
            Z(z[18][1], ['./page/component/index.wxml', 20, 90])
            Z([3, 'component-pages/wx-scroll-view/wx-scroll-view'], ['./page/component/index.wxml', 20, 36])
            Z(z[20][1], ['./page/component/index.wxml', 21, 37])
            Z([3, 'scroll-view'], ['./page/component/index.wxml', 21, 52])
            Z(z[14][1], ['./page/component/index.wxml', 22, 96])
            Z(z[23][1], ['./page/component/index.wxml', 22, 38])
            Z(z[24][1], ['./page/component/index.wxml', 22, 58])
            Z(z[25][1], ['./page/component/index.wxml', 23, 37])
            Z(z[18][1], ['./page/component/index.wxml', 25, 80])
            Z([3, 'component-pages/wx-swiper/wx-swiper'], ['./page/component/index.wxml', 25, 36])
            Z(z[20][1], ['./page/component/index.wxml', 26, 37])
            Z([3, 'swiper'], ['./page/component/index.wxml', 26, 52])
            Z(z[14][1], ['./page/component/index.wxml', 27, 96])
            Z(z[23][1], ['./page/component/index.wxml', 27, 38])
            Z(z[24][1], ['./page/component/index.wxml', 27, 58])
            Z(z[8][1], ['./page/component/index.wxml', 31, 25])
            Z(z[9][1], ['./page/component/index.wxml', 32, 110])
            Z([a, z[10][1][1],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'contentShow']
                    ],
                    [1, 'widgets__info_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 32, 42])
            Z([3, 'content'], ['./page/component/index.wxml', 32, 26])
            Z(z[12][1], ['./page/component/index.wxml', 33, 33])
            Z([3, '内容'], ['./page/component/index.wxml', 33, 54])
            Z(z[14][1], ['./page/component/index.wxml', 34, 103])
            Z(z[15][1], ['./page/component/index.wxml', 34, 34])
            Z([3, 'resources/kind/content.png'], ['./page/component/index.wxml', 34, 58])
            Z([a, z[17][1][1],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'contentShow']
                    ],
                    [1, 'widgets__list_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 36, 29])
            Z(z[18][1], ['./page/component/index.wxml', 37, 76])
            Z([3, 'component-pages/wx-text/wx-text'], ['./page/component/index.wxml', 37, 36])
            Z(z[20][1], ['./page/component/index.wxml', 38, 37])
            Z([3, 'text'], ['./page/component/index.wxml', 38, 52])
            Z(z[14][1], ['./page/component/index.wxml', 39, 96])
            Z(z[23][1], ['./page/component/index.wxml', 39, 38])
            Z(z[24][1], ['./page/component/index.wxml', 39, 58])
            Z(z[25][1], ['./page/component/index.wxml', 40, 37])
            Z(z[18][1], ['./page/component/index.wxml', 42, 76])
            Z([3, 'component-pages/wx-icon/wx-icon'], ['./page/component/index.wxml', 42, 36])
            Z(z[20][1], ['./page/component/index.wxml', 43, 37])
            Z([3, 'icon'], ['./page/component/index.wxml', 43, 52])
            Z(z[14][1], ['./page/component/index.wxml', 44, 96])
            Z(z[23][1], ['./page/component/index.wxml', 44, 38])
            Z(z[24][1], ['./page/component/index.wxml', 44, 58])
            Z(z[25][1], ['./page/component/index.wxml', 45, 37])
            Z(z[18][1], ['./page/component/index.wxml', 47, 76])
            Z([3, 'component-pages/wx-mask/wx-mask'], ['./page/component/index.wxml', 47, 36])
            Z(z[20][1], ['./page/component/index.wxml', 48, 37])
            Z([3, 'mask'], ['./page/component/index.wxml', 48, 52])
            Z(z[14][1], ['./page/component/index.wxml', 49, 96])
            Z(z[23][1], ['./page/component/index.wxml', 49, 38])
            Z(z[24][1], ['./page/component/index.wxml', 49, 58])
            Z(z[25][1], ['./page/component/index.wxml', 50, 37])
            Z(z[18][1], ['./page/component/index.wxml', 52, 78])
            Z([3, 'component-pages/wx-toast/wx-toast'], ['./page/component/index.wxml', 52, 36])
            Z(z[20][1], ['./page/component/index.wxml', 53, 37])
            Z([3, 'toast'], ['./page/component/index.wxml', 53, 52])
            Z(z[14][1], ['./page/component/index.wxml', 54, 96])
            Z(z[23][1], ['./page/component/index.wxml', 54, 38])
            Z(z[24][1], ['./page/component/index.wxml', 54, 58])
            Z(z[25][1], ['./page/component/index.wxml', 55, 37])
            Z(z[18][1], ['./page/component/index.wxml', 57, 84])
            Z([3, 'component-pages/wx-progress/wx-progress'], ['./page/component/index.wxml', 57, 36])
            Z(z[20][1], ['./page/component/index.wxml', 58, 37])
            Z([3, 'progress'], ['./page/component/index.wxml', 58, 52])
            Z(z[14][1], ['./page/component/index.wxml', 59, 96])
            Z(z[23][1], ['./page/component/index.wxml', 59, 38])
            Z(z[24][1], ['./page/component/index.wxml', 59, 58])
            Z(z[8][1], ['./page/component/index.wxml', 63, 25])
            Z(z[9][1], ['./page/component/index.wxml', 64, 104])
            Z([a, z[10][1][1],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'formShow']
                    ],
                    [1, 'widgets__info_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 64, 39])
            Z([3, 'form'], ['./page/component/index.wxml', 64, 26])
            Z(z[12][1], ['./page/component/index.wxml', 65, 33])
            Z([3, '表单组件'], ['./page/component/index.wxml', 65, 54])
            Z(z[14][1], ['./page/component/index.wxml', 66, 100])
            Z(z[15][1], ['./page/component/index.wxml', 66, 34])
            Z([3, 'resources/kind/form.png'], ['./page/component/index.wxml', 66, 58])
            Z([a, z[17][1][1],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'formShow']
                    ],
                    [1, 'widgets__list_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 68, 29])
            Z(z[18][1], ['./page/component/index.wxml', 69, 80])
            Z([3, 'component-pages/wx-button/wx-button'], ['./page/component/index.wxml', 69, 36])
            Z(z[20][1], ['./page/component/index.wxml', 70, 37])
            Z([3, 'button'], ['./page/component/index.wxml', 70, 52])
            Z(z[14][1], ['./page/component/index.wxml', 71, 96])
            Z(z[23][1], ['./page/component/index.wxml', 71, 38])
            Z(z[24][1], ['./page/component/index.wxml', 71, 58])
            Z(z[25][1], ['./page/component/index.wxml', 72, 37])
            Z(z[18][1], ['./page/component/index.wxml', 74, 84])
            Z([3, 'component-pages/wx-checkbox/wx-checkbox'], ['./page/component/index.wxml', 74, 36])
            Z(z[20][1], ['./page/component/index.wxml', 75, 37])
            Z([3, 'checkbox'], ['./page/component/index.wxml', 75, 52])
            Z(z[14][1], ['./page/component/index.wxml', 76, 96])
            Z(z[23][1], ['./page/component/index.wxml', 76, 38])
            Z(z[24][1], ['./page/component/index.wxml', 76, 58])
            Z(z[25][1], ['./page/component/index.wxml', 77, 37])
            Z(z[18][1], ['./page/component/index.wxml', 79, 76])
            Z([3, 'component-pages/wx-form/wx-form'], ['./page/component/index.wxml', 79, 36])
            Z(z[20][1], ['./page/component/index.wxml', 80, 37])
            Z([3, 'form'], ['./page/component/index.wxml', 80, 52])
            Z(z[14][1], ['./page/component/index.wxml', 81, 96])
            Z(z[23][1], ['./page/component/index.wxml', 81, 38])
            Z(z[24][1], ['./page/component/index.wxml', 81, 58])
            Z(z[25][1], ['./page/component/index.wxml', 82, 37])
            Z(z[18][1], ['./page/component/index.wxml', 84, 78])
            Z([3, 'component-pages/wx-input/wx-input'], ['./page/component/index.wxml', 84, 36])
            Z(z[20][1], ['./page/component/index.wxml', 85, 37])
            Z([3, 'input'], ['./page/component/index.wxml', 85, 52])
            Z(z[14][1], ['./page/component/index.wxml', 86, 96])
            Z(z[23][1], ['./page/component/index.wxml', 86, 38])
            Z(z[24][1], ['./page/component/index.wxml', 86, 58])
            Z(z[25][1], ['./page/component/index.wxml', 87, 37])
            Z(z[18][1], ['./page/component/index.wxml', 89, 78])
            Z([3, 'component-pages/wx-label/wx-label'], ['./page/component/index.wxml', 89, 36])
            Z(z[20][1], ['./page/component/index.wxml', 90, 37])
            Z([3, 'label'], ['./page/component/index.wxml', 90, 52])
            Z(z[14][1], ['./page/component/index.wxml', 91, 96])
            Z(z[23][1], ['./page/component/index.wxml', 91, 38])
            Z(z[24][1], ['./page/component/index.wxml', 91, 58])
            Z(z[25][1], ['./page/component/index.wxml', 92, 37])
            Z(z[18][1], ['./page/component/index.wxml', 94, 80])
            Z([3, 'component-pages/wx-picker/wx-picker'], ['./page/component/index.wxml', 94, 36])
            Z(z[20][1], ['./page/component/index.wxml', 95, 37])
            Z([3, 'picker'], ['./page/component/index.wxml', 95, 52])
            Z(z[14][1], ['./page/component/index.wxml', 96, 96])
            Z(z[23][1], ['./page/component/index.wxml', 96, 38])
            Z(z[24][1], ['./page/component/index.wxml', 96, 58])
            Z(z[25][1], ['./page/component/index.wxml', 97, 37])
            Z(z[18][1], ['./page/component/index.wxml', 99, 78])
            Z([3, 'component-pages/wx-radio/wx-radio'], ['./page/component/index.wxml', 99, 36])
            Z(z[20][1], ['./page/component/index.wxml', 100, 37])
            Z([3, 'radio'], ['./page/component/index.wxml', 100, 52])
            Z(z[14][1], ['./page/component/index.wxml', 101, 96])
            Z(z[23][1], ['./page/component/index.wxml', 101, 38])
            Z(z[24][1], ['./page/component/index.wxml', 101, 58])
            Z(z[25][1], ['./page/component/index.wxml', 102, 37])
            Z(z[18][1], ['./page/component/index.wxml', 104, 80])
            Z([3, 'component-pages/wx-slider/wx-slider'], ['./page/component/index.wxml', 104, 36])
            Z(z[20][1], ['./page/component/index.wxml', 105, 37])
            Z([3, 'slider'], ['./page/component/index.wxml', 105, 52])
            Z(z[14][1], ['./page/component/index.wxml', 106, 96])
            Z(z[23][1], ['./page/component/index.wxml', 106, 38])
            Z(z[24][1], ['./page/component/index.wxml', 106, 58])
            Z(z[25][1], ['./page/component/index.wxml', 107, 37])
            Z(z[18][1], ['./page/component/index.wxml', 109, 80])
            Z([3, 'component-pages/wx-switch/wx-switch'], ['./page/component/index.wxml', 109, 36])
            Z(z[20][1], ['./page/component/index.wxml', 110, 37])
            Z([3, 'switch'], ['./page/component/index.wxml', 110, 52])
            Z(z[14][1], ['./page/component/index.wxml', 111, 96])
            Z(z[23][1], ['./page/component/index.wxml', 111, 38])
            Z(z[24][1], ['./page/component/index.wxml', 111, 58])
            Z(z[8][1], ['./page/component/index.wxml', 115, 25])
            Z(z[9][1], ['./page/component/index.wxml', 116, 112])
            Z([a, z[10][1][1],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'interactShow']
                    ],
                    [1, 'widgets__info_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 116, 43])
            Z([3, 'interact'], ['./page/component/index.wxml', 116, 26])
            Z(z[12][1], ['./page/component/index.wxml', 117, 33])
            Z([3, '交互组件'], ['./page/component/index.wxml', 117, 54])
            Z(z[14][1], ['./page/component/index.wxml', 118, 104])
            Z(z[15][1], ['./page/component/index.wxml', 118, 34])
            Z([3, 'resources/kind/interact.png'], ['./page/component/index.wxml', 118, 58])
            Z([a, z[17][1][1],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'interactShow']
                    ],
                    [1, 'widgets__list_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 120, 29])
            Z(z[18][1], ['./page/component/index.wxml', 121, 92])
            Z([3, 'component-pages/wx-action-sheet/wx-action-sheet'], ['./page/component/index.wxml', 121, 36])
            Z(z[20][1], ['./page/component/index.wxml', 122, 37])
            Z([3, 'action-sheet'], ['./page/component/index.wxml', 122, 52])
            Z(z[14][1], ['./page/component/index.wxml', 123, 96])
            Z(z[23][1], ['./page/component/index.wxml', 123, 38])
            Z(z[24][1], ['./page/component/index.wxml', 123, 58])
            Z(z[25][1], ['./page/component/index.wxml', 124, 37])
            Z(z[18][1], ['./page/component/index.wxml', 126, 78])
            Z([3, 'component-pages/wx-modal/wx-modal'], ['./page/component/index.wxml', 126, 36])
            Z(z[20][1], ['./page/component/index.wxml', 127, 37])
            Z([3, 'modal'], ['./page/component/index.wxml', 127, 52])
            Z(z[14][1], ['./page/component/index.wxml', 128, 96])
            Z(z[23][1], ['./page/component/index.wxml', 128, 38])
            Z(z[24][1], ['./page/component/index.wxml', 128, 58])
            Z(z[8][1], ['./page/component/index.wxml', 133, 25])
            Z(z[9][1], ['./page/component/index.wxml', 134, 102])
            Z([a, z[10][1][1],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'navShow']
                    ],
                    [1, 'widgets__info_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 134, 38])
            Z([3, 'nav'], ['./page/component/index.wxml', 134, 26])
            Z(z[12][1], ['./page/component/index.wxml', 135, 33])
            Z([3, '导航'], ['./page/component/index.wxml', 135, 54])
            Z(z[14][1], ['./page/component/index.wxml', 136, 99])
            Z(z[15][1], ['./page/component/index.wxml', 136, 34])
            Z([3, 'resources/kind/nav.png'], ['./page/component/index.wxml', 136, 58])
            Z([a, z[17][1][1],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'navShow']
                    ],
                    [1, 'widgets__list_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 138, 29])
            Z(z[18][1], ['./page/component/index.wxml', 139, 86])
            Z([3, 'component-pages/wx-navigator/wx-navigator'], ['./page/component/index.wxml', 139, 36])
            Z(z[20][1], ['./page/component/index.wxml', 140, 37])
            Z([3, 'navigator'], ['./page/component/index.wxml', 140, 52])
            Z(z[14][1], ['./page/component/index.wxml', 141, 96])
            Z(z[23][1], ['./page/component/index.wxml', 141, 38])
            Z(z[24][1], ['./page/component/index.wxml', 141, 58])
            Z(z[8][1], ['./page/component/index.wxml', 145, 25])
            Z(z[9][1], ['./page/component/index.wxml', 146, 106])
            Z([a, z[10][1][1],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'mediaShow']
                    ],
                    [1, 'widgets__info_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 146, 40])
            Z([3, 'media'], ['./page/component/index.wxml', 146, 26])
            Z(z[12][1], ['./page/component/index.wxml', 147, 33])
            Z([3, '媒体'], ['./page/component/index.wxml', 147, 54])
            Z(z[14][1], ['./page/component/index.wxml', 148, 101])
            Z(z[15][1], ['./page/component/index.wxml', 148, 34])
            Z([3, 'resources/kind/media.png'], ['./page/component/index.wxml', 148, 58])
            Z([a, z[17][1][1],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'mediaShow']
                    ],
                    [1, 'widgets__list_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 150, 29])
            Z([a, [3, 'widgets__list-inner '],
                [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'mediaShow']
                    ],
                    [1, 'widgets__list-inner_show'],
                    [1, '']
                ]
            ], ['./page/component/index.wxml', 151, 33])
            Z(z[18][1], ['./page/component/index.wxml', 152, 82])
            Z([3, 'component-pages/wx-image/wx-image'], ['./page/component/index.wxml', 152, 40])
            Z(z[20][1], ['./page/component/index.wxml', 153, 41])
            Z([3, 'image'], ['./page/component/index.wxml', 153, 56])
            Z(z[14][1], ['./page/component/index.wxml', 154, 100])
            Z(z[23][1], ['./page/component/index.wxml', 154, 42])
            Z(z[24][1], ['./page/component/index.wxml', 154, 62])
            Z(z[25][1], ['./page/component/index.wxml', 155, 41])
            Z(z[18][1], ['./page/component/index.wxml', 157, 82])
            Z([3, 'component-pages/wx-audio/wx-audio'], ['./page/component/index.wxml', 157, 40])
            Z(z[20][1], ['./page/component/index.wxml', 158, 41])
            Z([3, 'audio'], ['./page/component/index.wxml', 158, 56])
            Z(z[14][1], ['./page/component/index.wxml', 159, 100])
            Z(z[23][1], ['./page/component/index.wxml', 159, 42])
            Z(z[24][1], ['./page/component/index.wxml', 159, 62])
            Z(z[25][1], ['./page/component/index.wxml', 160, 41])
            Z(z[18][1], ['./page/component/index.wxml', 162, 82])
            Z([3, 'component-pages/wx-video/wx-video'], ['./page/component/index.wxml', 162, 40])
            Z(z[20][1], ['./page/component/index.wxml', 163, 41])
            Z([3, 'video'], ['./page/component/index.wxml', 163, 56])
            Z(z[14][1], ['./page/component/index.wxml', 164, 100])
            Z(z[23][1], ['./page/component/index.wxml', 164, 42])
            Z(z[24][1], ['./page/component/index.wxml', 164, 62])
        })(__WXML_GLOBAL__.ops_cached.$gwx_54);
        return __WXML_GLOBAL__.ops_cached.$gwx_54
    }

    function gz$gwx_55() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_55) return __WXML_GLOBAL__.ops_cached.$gwx_55
        __WXML_GLOBAL__.ops_cached.$gwx_55 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'div-view'], ['./page/component/navigation-pages/controller/controller.wxml', 1, 12])
            Z([3, 'action-sheet'], ['./page/component/navigation-pages/controller/controller.wxml', 2, 36])
            Z([3, 'index-button'], ['./page/component/navigation-pages/controller/controller.wxml', 2, 57])
            Z([3, 'default'], ['./page/component/navigation-pages/controller/controller.wxml', 2, 18])
            Z([3, 'action-sheet'], ['./page/component/navigation-pages/controller/controller.wxml', 2, 72])
            Z([3, 'button'], ['./page/component/navigation-pages/controller/controller.wxml', 3, 36])
            Z(z[2][1], ['./page/component/navigation-pages/controller/controller.wxml', 3, 51])
            Z(z[3][1], ['./page/component/navigation-pages/controller/controller.wxml', 3, 18])
            Z([3, 'button'], ['./page/component/navigation-pages/controller/controller.wxml', 3, 66])
            Z([3, 'modal'], ['./page/component/navigation-pages/controller/controller.wxml', 4, 36])
            Z(z[2][1], ['./page/component/navigation-pages/controller/controller.wxml', 4, 50])
            Z(z[3][1], ['./page/component/navigation-pages/controller/controller.wxml', 4, 18])
            Z([3, 'modal'], ['./page/component/navigation-pages/controller/controller.wxml', 4, 65])
            Z([3, 'navigator'], ['./page/component/navigation-pages/controller/controller.wxml', 5, 36])
            Z(z[2][1], ['./page/component/navigation-pages/controller/controller.wxml', 5, 54])
            Z(z[3][1], ['./page/component/navigation-pages/controller/controller.wxml', 5, 18])
            Z([3, 'navigator'], ['./page/component/navigation-pages/controller/controller.wxml', 5, 69])
        })(__WXML_GLOBAL__.ops_cached.$gwx_55);
        return __WXML_GLOBAL__.ops_cached.$gwx_55
    }

    function gz$gwx_56() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_56) return __WXML_GLOBAL__.ops_cached.$gwx_56
        __WXML_GLOBAL__.ops_cached.$gwx_56 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'div-view'], ['./page/component/navigation-pages/form/form.wxml', 1, 12])
            Z([3, 'checkbox'], ['./page/component/navigation-pages/form/form.wxml', 2, 36])
            Z([3, 'index-button'], ['./page/component/navigation-pages/form/form.wxml', 2, 53])
            Z([3, 'default'], ['./page/component/navigation-pages/form/form.wxml', 2, 18])
            Z([3, 'checkbox'], ['./page/component/navigation-pages/form/form.wxml', 2, 68])
            Z([3, 'radio'], ['./page/component/navigation-pages/form/form.wxml', 3, 36])
            Z(z[2][1], ['./page/component/navigation-pages/form/form.wxml', 3, 50])
            Z(z[3][1], ['./page/component/navigation-pages/form/form.wxml', 3, 18])
            Z([3, 'radio'], ['./page/component/navigation-pages/form/form.wxml', 3, 65])
            Z([3, 'form'], ['./page/component/navigation-pages/form/form.wxml', 4, 36])
            Z(z[2][1], ['./page/component/navigation-pages/form/form.wxml', 4, 49])
            Z(z[3][1], ['./page/component/navigation-pages/form/form.wxml', 4, 18])
            Z([3, 'form'], ['./page/component/navigation-pages/form/form.wxml', 4, 64])
            Z([3, 'switch'], ['./page/component/navigation-pages/form/form.wxml', 5, 36])
            Z(z[2][1], ['./page/component/navigation-pages/form/form.wxml', 5, 51])
            Z(z[3][1], ['./page/component/navigation-pages/form/form.wxml', 5, 18])
            Z([3, 'switch'], ['./page/component/navigation-pages/form/form.wxml', 5, 66])
            Z([3, 'slider'], ['./page/component/navigation-pages/form/form.wxml', 6, 36])
            Z(z[2][1], ['./page/component/navigation-pages/form/form.wxml', 6, 51])
            Z(z[3][1], ['./page/component/navigation-pages/form/form.wxml', 6, 18])
            Z([3, 'slider'], ['./page/component/navigation-pages/form/form.wxml', 6, 66])
            Z([3, 'input'], ['./page/component/navigation-pages/form/form.wxml', 7, 36])
            Z(z[2][1], ['./page/component/navigation-pages/form/form.wxml', 7, 50])
            Z(z[3][1], ['./page/component/navigation-pages/form/form.wxml', 7, 18])
            Z([3, 'input'], ['./page/component/navigation-pages/form/form.wxml', 7, 65])
            Z([3, 'label'], ['./page/component/navigation-pages/form/form.wxml', 8, 36])
            Z(z[2][1], ['./page/component/navigation-pages/form/form.wxml', 8, 50])
            Z(z[3][1], ['./page/component/navigation-pages/form/form.wxml', 8, 18])
            Z([3, 'label'], ['./page/component/navigation-pages/form/form.wxml', 8, 65])
            Z([3, 'picker'], ['./page/component/navigation-pages/form/form.wxml', 9, 36])
            Z(z[2][1], ['./page/component/navigation-pages/form/form.wxml', 9, 51])
            Z(z[3][1], ['./page/component/navigation-pages/form/form.wxml', 9, 18])
            Z([3, 'picker'], ['./page/component/navigation-pages/form/form.wxml', 9, 66])
        })(__WXML_GLOBAL__.ops_cached.$gwx_56);
        return __WXML_GLOBAL__.ops_cached.$gwx_56
    }

    function gz$gwx_57() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_57) return __WXML_GLOBAL__.ops_cached.$gwx_57
        __WXML_GLOBAL__.ops_cached.$gwx_57 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'div-view'], ['./page/component/navigation-pages/media/media.wxml', 1, 12])
            Z([3, 'image'], ['./page/component/navigation-pages/media/media.wxml', 2, 36])
            Z([3, 'index-button'], ['./page/component/navigation-pages/media/media.wxml', 2, 50])
            Z([3, 'default'], ['./page/component/navigation-pages/media/media.wxml', 2, 18])
            Z([3, 'image'], ['./page/component/navigation-pages/media/media.wxml', 2, 65])
            Z([3, 'audio'], ['./page/component/navigation-pages/media/media.wxml', 3, 36])
            Z(z[2][1], ['./page/component/navigation-pages/media/media.wxml', 3, 50])
            Z(z[3][1], ['./page/component/navigation-pages/media/media.wxml', 3, 18])
            Z([3, 'audio'], ['./page/component/navigation-pages/media/media.wxml', 3, 65])
            Z([3, 'video'], ['./page/component/navigation-pages/media/media.wxml', 4, 36])
            Z(z[2][1], ['./page/component/navigation-pages/media/media.wxml', 4, 50])
            Z(z[3][1], ['./page/component/navigation-pages/media/media.wxml', 4, 18])
            Z([3, 'video'], ['./page/component/navigation-pages/media/media.wxml', 4, 65])
        })(__WXML_GLOBAL__.ops_cached.$gwx_57);
        return __WXML_GLOBAL__.ops_cached.$gwx_57
    }

    function gz$gwx_58() {
        if (__WXML_GLOBAL__.ops_cached.$gwx_58) return __WXML_GLOBAL__.ops_cached.$gwx_58
        __WXML_GLOBAL__.ops_cached.$gwx_58 = [];
        (function(z) {
            var a = 11;

            function Z(ops, debugLine) {
                z.push(['11182016', ops, debugLine])
            }
            Z([3, 'div-view'], ['./page/component/navigation-pages/view/view.wxml', 1, 12])
            Z([3, 'text'], ['./page/component/navigation-pages/view/view.wxml', 2, 36])
            Z([3, 'index-button'], ['./page/component/navigation-pages/view/view.wxml', 2, 49])
            Z([3, 'default'], ['./page/component/navigation-pages/view/view.wxml', 2, 18])
            Z([3, 'text'], ['./page/component/navigation-pages/view/view.wxml', 2, 64])
            Z([3, 'view'], ['./page/component/navigation-pages/view/view.wxml', 3, 36])
            Z(z[2][1], ['./page/component/navigation-pages/view/view.wxml', 3, 49])
            Z(z[3][1], ['./page/component/navigation-pages/view/view.wxml', 3, 18])
            Z([3, 'view'], ['./page/component/navigation-pages/view/view.wxml', 3, 64])
            Z([3, 'icon'], ['./page/component/navigation-pages/view/view.wxml', 4, 36])
            Z(z[2][1], ['./page/component/navigation-pages/view/view.wxml', 4, 49])
            Z(z[3][1], ['./page/component/navigation-pages/view/view.wxml', 4, 18])
            Z([3, 'icon'], ['./page/component/navigation-pages/view/view.wxml', 4, 64])
            Z([3, 'toast'], ['./page/component/navigation-pages/view/view.wxml', 5, 36])
            Z(z[2][1], ['./page/component/navigation-pages/view/view.wxml', 5, 50])
            Z(z[3][1], ['./page/component/navigation-pages/view/view.wxml', 5, 18])
            Z([3, 'toast'], ['./page/component/navigation-pages/view/view.wxml', 5, 65])
            Z([3, 'progress'], ['./page/component/navigation-pages/view/view.wxml', 6, 36])
            Z(z[2][1], ['./page/component/navigation-pages/view/view.wxml', 6, 53])
            Z(z[3][1], ['./page/component/navigation-pages/view/view.wxml', 6, 18])
            Z([3, 'progress'], ['./page/component/navigation-pages/view/view.wxml', 6, 68])
            Z([3, 'scroll-view'], ['./page/component/navigation-pages/view/view.wxml', 7, 36])
            Z(z[2][1], ['./page/component/navigation-pages/view/view.wxml', 7, 56])
            Z(z[3][1], ['./page/component/navigation-pages/view/view.wxml', 7, 18])
            Z([3, 'scroll-view'], ['./page/component/navigation-pages/view/view.wxml', 7, 71])
            Z([3, 'swiper'], ['./page/component/navigation-pages/view/view.wxml', 8, 36])
            Z(z[2][1], ['./page/component/navigation-pages/view/view.wxml', 8, 51])
            Z(z[3][1], ['./page/component/navigation-pages/view/view.wxml', 8, 18])
            Z([3, 'swiper'], ['./page/component/navigation-pages/view/view.wxml', 8, 66])
            Z([3, 'slide-tab'], ['./page/component/navigation-pages/view/view.wxml', 9, 36])
            Z(z[2][1], ['./page/component/navigation-pages/view/view.wxml', 9, 54])
            Z(z[3][1], ['./page/component/navigation-pages/view/view.wxml', 9, 18])
            Z([3, 'swiper + scroll-view'], ['./page/component/navigation-pages/view/view.wxml', 9, 69])
        })(__WXML_GLOBAL__.ops_cached.$gwx_58);
        return __WXML_GLOBAL__.ops_cached.$gwx_58
    }
    __WXML_GLOBAL__.ops_set.$gwx = z;
    __WXML_GLOBAL__.ops_init.$gwx = true;
    __WXML_GLOBAL__.debuginfo_set.$gwx = debugInfo;
    var nv_require = function() {
        var nnm = {};
        var nom = {};
        return function(n) {
            return function() {
                if (!nnm[n]) return undefined;
                try {
                    if (!nom[n]) nom[n] = nnm[n]();
                    return nom[n];
                } catch (e) {
                    e.message = e.message.replace(/nv_/g, '');
                    var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                    e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                    e.stack = e.stack.replace(/\snv_/g, ' ');
                    e.stack = $gstack(e.stack);
                    e.stack += '\n    at ' + n.substring(2);
                    console.error(e);
                }
            }
        }
    }()
    var x = ['./page/API/animation/animation.wxml', '../common/header.wxml', '../common/footer.wxml', './page/API/background-audio/background-audio.wxml', './page/API/canvas/canvas.wxml', './page/API/common/footer.wxml', './page/API/common/header.wxml', './page/API/download-file/download-file.wxml', './page/API/file/file.wxml', './page/API/get-location/get-location.wxml', './page/API/get-network-type/get-network-type.wxml', './page/API/get-system-info/get-system-info.wxml', './page/API/get-user-info/get-user-info.wxml', './page/API/image/image.wxml', './page/API/index/index.wxml', './page/API/login/login.wxml', './page/API/navigation-bar-loading/navigation-bar-loading.wxml', './page/API/navigator/navigator.wxml', './page/API/on-accelerometer-change/on-accelerometer-change.wxml', './page/API/on-compass-change/on-compass-change.wxml', './page/API/open-location/open-location.wxml', './page/API/pull-down-refresh/pull-down-refresh.wxml', './page/API/request-payment/request-payment.wxml', './page/API/request/request.wxml', './page/API/set-navigation-bar-title/set-navigation-bar-title.wxml', './page/API/storage/storage.wxml', './page/API/upload-file/upload-file.wxml', './page/API/voice/voice.wxml', './page/API/web-socket/web-socket.wxml', './page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml', './page/component/component-pages/wx-audio/wx-audio.wxml', './page/component/component-pages/wx-button/wx-button.wxml', './page/component/component-pages/wx-checkbox/wx-checkbox.wxml', './page/component/component-pages/wx-form/wx-form.wxml', './page/component/component-pages/wx-icon/wx-icon.wxml', './page/component/component-pages/wx-image/wx-image.wxml', './page/component/component-pages/wx-input/wx-input.wxml', './page/component/component-pages/wx-label/wx-label.wxml', './page/component/component-pages/wx-mask/wx-mask.wxml', './page/component/component-pages/wx-modal/wx-modal.wxml', './page/component/component-pages/wx-navigator/navigate.wxml', './page/component/component-pages/wx-navigator/redirect.wxml', './page/component/component-pages/wx-navigator/wx-navigator.wxml', './page/component/component-pages/wx-picker/wx-picker.wxml', './page/component/component-pages/wx-progress/wx-progress.wxml', './page/component/component-pages/wx-radio/wx-radio.wxml', './page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml', './page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml', './page/component/component-pages/wx-slider/wx-slider.wxml', './page/component/component-pages/wx-swiper/wx-swiper.wxml', './page/component/component-pages/wx-switch/wx-switch.wxml', './page/component/component-pages/wx-text/wx-text.wxml', './page/component/component-pages/wx-toast/wx-toast.wxml', './page/component/component-pages/wx-video/wx-video.wxml', './page/component/component-pages/wx-view/wx-view.wxml', './page/component/index.wxml', './page/component/navigation-pages/controller/controller.wxml', './page/component/navigation-pages/form/form.wxml', './page/component/navigation-pages/media/media.wxml', './page/component/navigation-pages/view/view.wxml'];
    d_[x[0]] = {}
    var m0 = function(e, s, r, gg) {
        var z = gz$gwx_1()
        var oB = e_[x[0]].i
        _ai(oB, x[1], e_, x[0], 1, 1)
        _ai(oB, x[2], e_, x[0], 2, 2)
        cs.push("./page/API/animation/animation.wxml:view:4:2")
        var xC = _n('view')
        _rz(z, xC, 'class', 0, e, s, gg)
        var oD = _v()
        _(xC, oD)
        cs.push("./page/API/animation/animation.wxml:template:5:4")
        var fE = _oz(z, 2, e, s, gg)
        var cF = _gd(x[0], fE, e_, d_)
        if (cF) {
            var hG = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            oD.wxXCkey = 3
            cF(hG, hG, oD, gg)
            gg.f = cur_globalf
        } else _w(fE, x[0], 5, 16)
        cs.pop()
        cs.push("./page/API/animation/animation.wxml:view:7:4")
        var oH = _n('view')
        _rz(z, oH, 'class', 3, e, s, gg)
        cs.push("./page/API/animation/animation.wxml:view:8:6")
        var cI = _n('view')
        _rz(z, cI, 'class', 4, e, s, gg)
        cs.push("./page/API/animation/animation.wxml:view:9:8")
        var oJ = _n('view')
        _rz(z, oJ, 'class', 5, e, s, gg)
        cs.push("./page/API/animation/animation.wxml:view:10:10")
        var lK = _mz(z, 'view', ['animation', 6, 'class', 1], [], e, s, gg)
        cs.pop()
        _(oJ, lK)
        cs.pop()
        _(cI, oJ)
        cs.push("./page/API/animation/animation.wxml:view:12:8")
        var aL = _mz(z, 'view', ['class', 8, 'scrollY', 1], [], e, s, gg)
        cs.push("./page/API/animation/animation.wxml:button:13:10")
        var tM = _mz(z, 'button', ['bindtap', 10, 'class', 1], [], e, s, gg)
        var eN = _oz(z, 12, e, s, gg)
        _(tM, eN)
        cs.pop()
        _(aL, tM)
        cs.push("./page/API/animation/animation.wxml:button:14:10")
        var bO = _mz(z, 'button', ['bindtap', 13, 'class', 1], [], e, s, gg)
        var oP = _oz(z, 15, e, s, gg)
        _(bO, oP)
        cs.pop()
        _(aL, bO)
        cs.push("./page/API/animation/animation.wxml:button:15:10")
        var xQ = _mz(z, 'button', ['bindtap', 16, 'class', 1], [], e, s, gg)
        var oR = _oz(z, 18, e, s, gg)
        _(xQ, oR)
        cs.pop()
        _(aL, xQ)
        cs.push("./page/API/animation/animation.wxml:button:16:10")
        var fS = _mz(z, 'button', ['bindtap', 19, 'class', 1], [], e, s, gg)
        var cT = _oz(z, 21, e, s, gg)
        _(fS, cT)
        cs.pop()
        _(aL, fS)
        cs.push("./page/API/animation/animation.wxml:button:17:10")
        var hU = _mz(z, 'button', ['bindtap', 22, 'class', 1], [], e, s, gg)
        var oV = _oz(z, 24, e, s, gg)
        _(hU, oV)
        cs.pop()
        _(aL, hU)
        cs.push("./page/API/animation/animation.wxml:button:18:10")
        var cW = _mz(z, 'button', ['bindtap', 25, 'class', 1], [], e, s, gg)
        var oX = _oz(z, 27, e, s, gg)
        _(cW, oX)
        cs.pop()
        _(aL, cW)
        cs.push("./page/API/animation/animation.wxml:button:19:10")
        var lY = _mz(z, 'button', ['bindtap', 28, 'class', 1], [], e, s, gg)
        var aZ = _oz(z, 30, e, s, gg)
        _(lY, aZ)
        cs.pop()
        _(aL, lY)
        cs.push("./page/API/animation/animation.wxml:button:20:10")
        var t1 = _mz(z, 'button', ['bindtap', 31, 'class', 1], [], e, s, gg)
        var e2 = _oz(z, 33, e, s, gg)
        _(t1, e2)
        cs.pop()
        _(aL, t1)
        cs.push("./page/API/animation/animation.wxml:button:21:10")
        var b3 = _mz(z, 'button', ['bindtap', 34, 'class', 1], [], e, s, gg)
        var o4 = _oz(z, 36, e, s, gg)
        _(b3, o4)
        cs.pop()
        _(aL, b3)
        cs.pop()
        _(cI, aL)
        cs.pop()
        _(oH, cI)
        cs.pop()
        _(xC, oH)
        var x5 = _v()
        _(xC, x5)
        cs.push("./page/API/animation/animation.wxml:template:26:4")
        var o6 = _oz(z, 37, e, s, gg)
        var f7 = _gd(x[0], o6, e_, d_)
        if (f7) {
            var c8 = {}
            var cur_globalf = gg.f
            x5.wxXCkey = 3
            f7(c8, c8, x5, gg)
            gg.f = cur_globalf
        } else _w(o6, x[0], 26, 16)
        cs.pop()
        cs.pop()
        _(r, xC)
        oB.pop()
        oB.pop()
        return r
    }
    e_[x[0]] = {
        f: m0,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[3]] = {}
    var m1 = function(e, s, r, gg) {
        var z = gz$gwx_2()
        var o0 = e_[x[3]].i
        _ai(o0, x[1], e_, x[3], 1, 1)
        _ai(o0, x[2], e_, x[3], 2, 2)
        cs.push("./page/API/background-audio/background-audio.wxml:view:4:2")
        var cAB = _n('view')
        _rz(z, cAB, 'class', 0, e, s, gg)
        var oBB = _v()
        _(cAB, oBB)
        cs.push("./page/API/background-audio/background-audio.wxml:template:5:4")
        var lCB = _oz(z, 2, e, s, gg)
        var aDB = _gd(x[3], lCB, e_, d_)
        if (aDB) {
            var tEB = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            oBB.wxXCkey = 3
            aDB(tEB, tEB, oBB, gg)
            gg.f = cur_globalf
        } else _w(lCB, x[3], 5, 16)
        cs.pop()
        cs.push("./page/API/background-audio/background-audio.wxml:view:7:4")
        var eFB = _n('view')
        _rz(z, eFB, 'class', 3, e, s, gg)
        cs.push("./page/API/background-audio/background-audio.wxml:view:8:6")
        var bGB = _n('view')
        _rz(z, bGB, 'class', 4, e, s, gg)
        cs.push("./page/API/background-audio/background-audio.wxml:text:9:8")
        var oHB = _n('text')
        _rz(z, oHB, 'class', 5, e, s, gg)
        var xIB = _oz(z, 6, e, s, gg)
        _(oHB, xIB)
        cs.pop()
        _(bGB, oHB)
        cs.push("./page/API/background-audio/background-audio.wxml:slider:10:8")
        var oJB = _mz(z, 'slider', ['bindchange', 7, 'class', 1, 'max', 2, 'min', 3, 'step', 4, 'value', 5], [], e, s, gg)
        cs.pop()
        _(bGB, oJB)
        cs.push("./page/API/background-audio/background-audio.wxml:view:11:8")
        var fKB = _n('view')
        _rz(z, fKB, 'class', 13, e, s, gg)
        cs.push("./page/API/background-audio/background-audio.wxml:text:12:10")
        var cLB = _n('text')
        var hMB = _oz(z, 14, e, s, gg)
        _(cLB, hMB)
        cs.pop()
        _(fKB, cLB)
        cs.push("./page/API/background-audio/background-audio.wxml:text:13:10")
        var oNB = _n('text')
        var cOB = _oz(z, 15, e, s, gg)
        _(oNB, cOB)
        cs.pop()
        _(fKB, oNB)
        cs.pop()
        _(bGB, fKB)
        cs.pop()
        _(eFB, bGB)
        cs.push("./page/API/background-audio/background-audio.wxml:text:16:6")
        var oPB = _n('text')
        _rz(z, oPB, 'class', 16, e, s, gg)
        var lQB = _oz(z, 17, e, s, gg)
        _(oPB, lQB)
        cs.pop()
        _(eFB, oPB)
        cs.push("./page/API/background-audio/background-audio.wxml:view:17:6")
        var aRB = _n('view')
        _rz(z, aRB, 'class', 18, e, s, gg)
        var tSB = _v()
        _(aRB, tSB)
        if (_oz(z, 19, e, s, gg)) {
            tSB.wxVkey = 1
            cs.push("./page/API/background-audio/background-audio.wxml:block:18:8")
            cs.push("./page/API/background-audio/background-audio.wxml:view:19:10")
            var bUB = _mz(z, 'view', ['bindtap', 20, 'class', 1], [], e, s, gg)
            cs.push("./page/API/background-audio/background-audio.wxml:image:20:12")
            var oVB = _n('image')
            _rz(z, oVB, 'src', 22, e, s, gg)
            cs.pop()
            _(bUB, oVB)
            cs.pop()
            _(tSB, bUB)
            cs.push("./page/API/background-audio/background-audio.wxml:view:22:10")
            var xWB = _mz(z, 'view', ['bindtap', 23, 'class', 1], [], e, s, gg)
            cs.push("./page/API/background-audio/background-audio.wxml:image:23:12")
            var oXB = _n('image')
            _rz(z, oXB, 'src', 25, e, s, gg)
            cs.pop()
            _(xWB, oXB)
            cs.pop()
            _(tSB, xWB)
            cs.pop()
        }
        var eTB = _v()
        _(aRB, eTB)
        if (_oz(z, 26, e, s, gg)) {
            eTB.wxVkey = 1
            cs.push("./page/API/background-audio/background-audio.wxml:block:26:8")
            cs.push("./page/API/background-audio/background-audio.wxml:view:27:10")
            var fYB = _n('view')
            _rz(z, fYB, 'class', 27, e, s, gg)
            cs.pop()
            _(eTB, fYB)
            cs.push("./page/API/background-audio/background-audio.wxml:view:28:10")
            var cZB = _mz(z, 'view', ['bindtap', 28, 'class', 1], [], e, s, gg)
            cs.push("./page/API/background-audio/background-audio.wxml:image:29:12")
            var h1B = _n('image')
            _rz(z, h1B, 'src', 30, e, s, gg)
            cs.pop()
            _(cZB, h1B)
            cs.pop()
            _(eTB, cZB)
            cs.pop()
        }
        cs.push("./page/API/background-audio/background-audio.wxml:view:32:8")
        var o2B = _n('view')
        _rz(z, o2B, 'class', 31, e, s, gg)
        cs.pop()
        _(aRB, o2B)
        tSB.wxXCkey = 1
        eTB.wxXCkey = 1
        cs.pop()
        _(eFB, aRB)
        cs.pop()
        _(cAB, eFB)
        var c3B = _v()
        _(cAB, c3B)
        cs.push("./page/API/background-audio/background-audio.wxml:template:36:4")
        var o4B = _oz(z, 32, e, s, gg)
        var l5B = _gd(x[3], o4B, e_, d_)
        if (l5B) {
            var a6B = {}
            var cur_globalf = gg.f
            c3B.wxXCkey = 3
            l5B(a6B, a6B, c3B, gg)
            gg.f = cur_globalf
        } else _w(o4B, x[3], 36, 16)
        cs.pop()
        cs.pop()
        _(r, cAB)
        o0.pop()
        o0.pop()
        return r
    }
    e_[x[3]] = {
        f: m1,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[4]] = {}
    var m2 = function(e, s, r, gg) {
        var z = gz$gwx_3()
        var e8B = e_[x[4]].i
        _ai(e8B, x[1], e_, x[4], 1, 1)
        _ai(e8B, x[2], e_, x[4], 2, 2)
        cs.push("./page/API/canvas/canvas.wxml:view:4:2")
        var b9B = _n('view')
        _rz(z, b9B, 'class', 0, e, s, gg)
        var o0B = _v()
        _(b9B, o0B)
        cs.push("./page/API/canvas/canvas.wxml:template:5:4")
        var xAC = _oz(z, 2, e, s, gg)
        var oBC = _gd(x[4], xAC, e_, d_)
        if (oBC) {
            var fCC = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            o0B.wxXCkey = 3
            oBC(fCC, fCC, o0B, gg)
            gg.f = cur_globalf
        } else _w(xAC, x[4], 5, 16)
        cs.pop()
        cs.push("./page/API/canvas/canvas.wxml:view:7:4")
        var cDC = _n('view')
        _rz(z, cDC, 'class', 3, e, s, gg)
        cs.push("./page/API/canvas/canvas.wxml:view:8:6")
        var hEC = _n('view')
        _rz(z, hEC, 'class', 4, e, s, gg)
        cs.push("./page/API/canvas/canvas.wxml:canvas:9:8")
        var oFC = _mz(z, 'canvas', ['canvasId', 5, 'class', 1], [], e, s, gg)
        cs.pop()
        _(hEC, oFC)
        cs.pop()
        _(cDC, hEC)
        cs.pop()
        _(b9B, cDC)
        var cGC = _v()
        _(b9B, cGC)
        cs.push("./page/API/canvas/canvas.wxml:template:13:4")
        var oHC = _oz(z, 7, e, s, gg)
        var lIC = _gd(x[4], oHC, e_, d_)
        if (lIC) {
            var aJC = {}
            var cur_globalf = gg.f
            cGC.wxXCkey = 3
            lIC(aJC, aJC, cGC, gg)
            gg.f = cur_globalf
        } else _w(oHC, x[4], 13, 16)
        cs.pop()
        cs.pop()
        _(r, b9B)
        e8B.pop()
        e8B.pop()
        return r
    }
    e_[x[4]] = {
        f: m2,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[5]] = {}
    d_[x[5]]["footer"] = function(e, s, r, gg) {
        var z = gz$gwx_4()
        var b = x[5] + ':footer'
        r.wxVkey = b
        gg.f = $gdc(f_["./page/API/common/footer.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[5]);
            return
        }
        p_[b] = true
        try {
            cs.push("./page/API/common/footer.wxml:view:2:4")
            var oB = _n('view')
            _rz(z, oB, 'class', 1, e, s, gg)
            var xC = _oz(z, 2, e, s, gg)
            _(oB, xC)
            cs.pop()
            _(r, oB)
        } catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m3 = function(e, s, r, gg) {
        var z = gz$gwx_4()
        return r
    }
    e_[x[5]] = {
        f: m3,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[6]] = {}
    d_[x[6]]["header"] = function(e, s, r, gg) {
        var z = gz$gwx_5()
        var b = x[6] + ':header'
        r.wxVkey = b
        gg.f = $gdc(f_["./page/API/common/header.wxml"], "", 1)
        if (p_[b]) {
            _wl(b, x[6]);
            return
        }
        p_[b] = true
        try {
            cs.push("./page/API/common/header.wxml:view:2:4")
            var oB = _n('view')
            _rz(z, oB, 'class', 1, e, s, gg)
            cs.push("./page/API/common/header.wxml:text:3:6")
            var xC = _n('text')
            _rz(z, xC, 'class', 2, e, s, gg)
            var oD = _oz(z, 3, e, s, gg)
            _(xC, oD)
            cs.pop()
            _(oB, xC)
            cs.pop()
            _(r, oB)
        } catch (err) {
            p_[b] = false
            throw err
        }
        p_[b] = false
        return r
    }
    var m4 = function(e, s, r, gg) {
        var z = gz$gwx_5()
        return r
    }
    e_[x[6]] = {
        f: m4,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[7]] = {}
    var m5 = function(e, s, r, gg) {
        var z = gz$gwx_6()
        var oNC = e_[x[7]].i
        _ai(oNC, x[1], e_, x[7], 1, 1)
        _ai(oNC, x[2], e_, x[7], 2, 2)
        cs.push("./page/API/download-file/download-file.wxml:view:4:2")
        var xOC = _n('view')
        _rz(z, xOC, 'class', 0, e, s, gg)
        var oPC = _v()
        _(xOC, oPC)
        cs.push("./page/API/download-file/download-file.wxml:template:5:4")
        var fQC = _oz(z, 2, e, s, gg)
        var cRC = _gd(x[7], fQC, e_, d_)
        if (cRC) {
            var hSC = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            oPC.wxXCkey = 3
            cRC(hSC, hSC, oPC, gg)
            gg.f = cur_globalf
        } else _w(fQC, x[7], 5, 16)
        cs.pop()
        cs.push("./page/API/download-file/download-file.wxml:view:7:4")
        var oTC = _n('view')
        _rz(z, oTC, 'class', 3, e, s, gg)
        cs.push("./page/API/download-file/download-file.wxml:view:8:6")
        var cUC = _n('view')
        _rz(z, cUC, 'class', 4, e, s, gg)
        cs.push("./page/API/download-file/download-file.wxml:text:9:8")
        var oVC = _n('text')
        _rz(z, oVC, 'class', 5, e, s, gg)
        var lWC = _oz(z, 6, e, s, gg)
        _(oVC, lWC)
        cs.pop()
        _(cUC, oVC)
        cs.pop()
        _(oTC, cUC)
        cs.pop()
        _(xOC, oTC)
        var aXC = _v()
        _(xOC, aXC)
        cs.push("./page/API/download-file/download-file.wxml:template:15:4")
        var tYC = _oz(z, 7, e, s, gg)
        var eZC = _gd(x[7], tYC, e_, d_)
        if (eZC) {
            var b1C = {}
            var cur_globalf = gg.f
            aXC.wxXCkey = 3
            eZC(b1C, b1C, aXC, gg)
            gg.f = cur_globalf
        } else _w(tYC, x[7], 15, 16)
        cs.pop()
        cs.pop()
        _(r, xOC)
        oNC.pop()
        oNC.pop()
        return r
    }
    e_[x[7]] = {
        f: m5,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[8]] = {}
    var m6 = function(e, s, r, gg) {
        var z = gz$gwx_7()
        var x3C = e_[x[8]].i
        _ai(x3C, x[1], e_, x[8], 1, 1)
        _ai(x3C, x[2], e_, x[8], 2, 2)
        cs.push("./page/API/file/file.wxml:view:4:2")
        var o4C = _n('view')
        _rz(z, o4C, 'class', 0, e, s, gg)
        var f5C = _v()
        _(o4C, f5C)
        cs.push("./page/API/file/file.wxml:template:5:4")
        var c6C = _oz(z, 2, e, s, gg)
        var h7C = _gd(x[8], c6C, e_, d_)
        if (h7C) {
            var o8C = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            f5C.wxXCkey = 3
            h7C(o8C, o8C, f5C, gg)
            gg.f = cur_globalf
        } else _w(c6C, x[8], 5, 16)
        cs.pop()
        cs.push("./page/API/file/file.wxml:view:7:4")
        var c9C = _n('view')
        _rz(z, c9C, 'class', 3, e, s, gg)
        cs.push("./page/API/file/file.wxml:view:8:6")
        var o0C = _n('view')
        _rz(z, o0C, 'class', 4, e, s, gg)
        cs.push("./page/API/file/file.wxml:view:9:8")
        var lAD = _n('view')
        _rz(z, lAD, 'class', 5, e, s, gg)
        cs.push("./page/API/file/file.wxml:text:10:10")
        var bED = _n('text')
        _rz(z, bED, 'class', 6, e, s, gg)
        var oFD = _oz(z, 7, e, s, gg)
        _(bED, oFD)
        cs.pop()
        _(lAD, bED)
        var aBD = _v()
        _(lAD, aBD)
        if (_oz(z, 8, e, s, gg)) {
            aBD.wxVkey = 1
            cs.push("./page/API/file/file.wxml:block:11:10")
            cs.push("./page/API/file/file.wxml:image:12:12")
            var xGD = _mz(z, 'image', ['class', 9, 'src', 1], [], e, s, gg)
            cs.pop()
            _(aBD, xGD)
            cs.pop()
        }
        var tCD = _v()
        _(lAD, tCD)
        if (_oz(z, 11, e, s, gg)) {
            tCD.wxVkey = 1
            cs.push("./page/API/file/file.wxml:block:14:10")
            cs.push("./page/API/file/file.wxml:image:15:12")
            var oHD = _mz(z, 'image', ['class', 12, 'src', 1], [], e, s, gg)
            cs.pop()
            _(tCD, oHD)
            cs.pop()
        }
        var eDD = _v()
        _(lAD, eDD)
        if (_oz(z, 14, e, s, gg)) {
            eDD.wxVkey = 1
            cs.push("./page/API/file/file.wxml:block:17:10")
            cs.push("./page/API/file/file.wxml:image:18:12")
            var fID = _mz(z, 'image', ['bindtap', 15, 'class', 1, 'src', 2], [], e, s, gg)
            cs.pop()
            _(eDD, fID)
            cs.pop()
        }
        aBD.wxXCkey = 1
        tCD.wxXCkey = 1
        eDD.wxXCkey = 1
        cs.pop()
        _(o0C, lAD)
        cs.push("./page/API/file/file.wxml:view:21:8")
        var cJD = _n('view')
        _rz(z, cJD, 'class', 18, e, s, gg)
        cs.push("./page/API/file/file.wxml:button:22:10")
        var hKD = _mz(z, 'button', ['bindtap', 19, 'class', 1, 'type', 2], [], e, s, gg)
        var oLD = _oz(z, 22, e, s, gg)
        _(hKD, oLD)
        cs.pop()
        _(cJD, hKD)
        cs.push("./page/API/file/file.wxml:button:23:10")
        var cMD = _mz(z, 'button', ['bindtap', 23, 'class', 1], [], e, s, gg)
        var oND = _oz(z, 25, e, s, gg)
        _(cMD, oND)
        cs.pop()
        _(cJD, cMD)
        cs.pop()
        _(o0C, cJD)
        cs.pop()
        _(c9C, o0C)
        cs.pop()
        _(o4C, c9C)
        cs.push("./page/API/file/file.wxml:modal:28:4")
        var lOD = _mz(z, 'modal', ['noCancel', -1, 'bindconfirm', 26, 'hidden', 1, 'title', 2], [], e, s, gg)
        var aPD = _oz(z, 29, e, s, gg)
        _(lOD, aPD)
        cs.pop()
        _(o4C, lOD)
        var tQD = _v()
        _(o4C, tQD)
        cs.push("./page/API/file/file.wxml:template:30:4")
        var eRD = _oz(z, 30, e, s, gg)
        var bSD = _gd(x[8], eRD, e_, d_)
        if (bSD) {
            var oTD = {}
            var cur_globalf = gg.f
            tQD.wxXCkey = 3
            bSD(oTD, oTD, tQD, gg)
            gg.f = cur_globalf
        } else _w(eRD, x[8], 30, 16)
        cs.pop()
        cs.pop()
        _(r, o4C)
        x3C.pop()
        x3C.pop()
        return r
    }
    e_[x[8]] = {
        f: m6,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[9]] = {}
    var m7 = function(e, s, r, gg) {
        var z = gz$gwx_8()
        var oVD = e_[x[9]].i
        _ai(oVD, x[1], e_, x[9], 1, 1)
        _ai(oVD, x[2], e_, x[9], 2, 2)
        cs.push("./page/API/get-location/get-location.wxml:view:4:2")
        var fWD = _n('view')
        _rz(z, fWD, 'class', 0, e, s, gg)
        var cXD = _v()
        _(fWD, cXD)
        cs.push("./page/API/get-location/get-location.wxml:template:5:4")
        var hYD = _oz(z, 2, e, s, gg)
        var oZD = _gd(x[9], hYD, e_, d_)
        if (oZD) {
            var c1D = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            cXD.wxXCkey = 3
            oZD(c1D, c1D, cXD, gg)
            gg.f = cur_globalf
        } else _w(hYD, x[9], 5, 16)
        cs.pop()
        cs.push("./page/API/get-location/get-location.wxml:view:7:4")
        var o2D = _n('view')
        _rz(z, o2D, 'class', 3, e, s, gg)
        cs.push("./page/API/get-location/get-location.wxml:view:8:6")
        var l3D = _n('view')
        _rz(z, l3D, 'class', 4, e, s, gg)
        cs.push("./page/API/get-location/get-location.wxml:view:9:8")
        var a4D = _n('view')
        _rz(z, a4D, 'class', 5, e, s, gg)
        cs.push("./page/API/get-location/get-location.wxml:text:10:10")
        var b7D = _n('text')
        _rz(z, b7D, 'class', 6, e, s, gg)
        var o8D = _oz(z, 7, e, s, gg)
        _(b7D, o8D)
        cs.pop()
        _(a4D, b7D)
        var t5D = _v()
        _(a4D, t5D)
        if (_oz(z, 8, e, s, gg)) {
            t5D.wxVkey = 1
            cs.push("./page/API/get-location/get-location.wxml:block:11:10")
            cs.push("./page/API/get-location/get-location.wxml:text:12:12")
            var x9D = _n('text')
            _rz(z, x9D, 'class', 9, e, s, gg)
            var o0D = _oz(z, 10, e, s, gg)
            _(x9D, o0D)
            cs.pop()
            _(t5D, x9D)
            cs.pop()
        }
        var e6D = _v()
        _(a4D, e6D)
        if (_oz(z, 11, e, s, gg)) {
            e6D.wxVkey = 1
            cs.push("./page/API/get-location/get-location.wxml:block:14:10")
            cs.push("./page/API/get-location/get-location.wxml:view:15:12")
            var fAE = _n('view')
            _rz(z, fAE, 'class', 12, e, s, gg)
            cs.push("./page/API/get-location/get-location.wxml:text:16:14")
            var cBE = _n('text')
            var hCE = _oz(z, 13, e, s, gg)
            _(cBE, hCE)
            cs.pop()
            _(fAE, cBE)
            cs.push("./page/API/get-location/get-location.wxml:text:17:14")
            var oDE = _n('text')
            var cEE = _oz(z, 14, e, s, gg)
            _(oDE, cEE)
            cs.pop()
            _(fAE, oDE)
            cs.pop()
            _(e6D, fAE)
            cs.pop()
        }
        t5D.wxXCkey = 1
        e6D.wxXCkey = 1
        cs.pop()
        _(l3D, a4D)
        cs.push("./page/API/get-location/get-location.wxml:view:21:8")
        var oFE = _n('view')
        _rz(z, oFE, 'class', 15, e, s, gg)
        cs.push("./page/API/get-location/get-location.wxml:button:22:10")
        var lGE = _mz(z, 'button', ['bindtap', 16, 'class', 1, 'type', 2], [], e, s, gg)
        var aHE = _oz(z, 19, e, s, gg)
        _(lGE, aHE)
        cs.pop()
        _(oFE, lGE)
        cs.push("./page/API/get-location/get-location.wxml:button:23:10")
        var tIE = _mz(z, 'button', ['bindtap', 20, 'class', 1], [], e, s, gg)
        var eJE = _oz(z, 22, e, s, gg)
        _(tIE, eJE)
        cs.pop()
        _(oFE, tIE)
        cs.pop()
        _(l3D, oFE)
        cs.pop()
        _(o2D, l3D)
        cs.pop()
        _(fWD, o2D)
        var bKE = _v()
        _(fWD, bKE)
        cs.push("./page/API/get-location/get-location.wxml:template:28:4")
        var oLE = _oz(z, 23, e, s, gg)
        var xME = _gd(x[9], oLE, e_, d_)
        if (xME) {
            var oNE = {}
            var cur_globalf = gg.f
            bKE.wxXCkey = 3
            xME(oNE, oNE, bKE, gg)
            gg.f = cur_globalf
        } else _w(oLE, x[9], 28, 16)
        cs.pop()
        cs.pop()
        _(r, fWD)
        oVD.pop()
        oVD.pop()
        return r
    }
    e_[x[9]] = {
        f: m7,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[10]] = {}
    var m8 = function(e, s, r, gg) {
        var z = gz$gwx_9()
        var cPE = e_[x[10]].i
        _ai(cPE, x[1], e_, x[10], 1, 1)
        _ai(cPE, x[2], e_, x[10], 2, 2)
        cs.push("./page/API/get-network-type/get-network-type.wxml:view:4:2")
        var hQE = _n('view')
        _rz(z, hQE, 'class', 0, e, s, gg)
        var oRE = _v()
        _(hQE, oRE)
        cs.push("./page/API/get-network-type/get-network-type.wxml:template:5:4")
        var cSE = _oz(z, 2, e, s, gg)
        var oTE = _gd(x[10], cSE, e_, d_)
        if (oTE) {
            var lUE = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            oRE.wxXCkey = 3
            oTE(lUE, lUE, oRE, gg)
            gg.f = cur_globalf
        } else _w(cSE, x[10], 5, 16)
        cs.pop()
        cs.push("./page/API/get-network-type/get-network-type.wxml:view:7:4")
        var aVE = _n('view')
        _rz(z, aVE, 'class', 3, e, s, gg)
        cs.push("./page/API/get-network-type/get-network-type.wxml:view:8:6")
        var tWE = _n('view')
        _rz(z, tWE, 'class', 4, e, s, gg)
        cs.push("./page/API/get-network-type/get-network-type.wxml:view:9:8")
        var eXE = _n('view')
        _rz(z, eXE, 'class', 5, e, s, gg)
        cs.push("./page/API/get-network-type/get-network-type.wxml:view:10:10")
        var x1E = _n('view')
        _rz(z, x1E, 'class', 6, e, s, gg)
        var o2E = _oz(z, 7, e, s, gg)
        _(x1E, o2E)
        cs.pop()
        _(eXE, x1E)
        var bYE = _v()
        _(eXE, bYE)
        if (_oz(z, 8, e, s, gg)) {
            bYE.wxVkey = 1
            cs.push("./page/API/get-network-type/get-network-type.wxml:block:11:10")
            cs.push("./page/API/get-network-type/get-network-type.wxml:text:12:12")
            var f3E = _n('text')
            _rz(z, f3E, 'class', 9, e, s, gg)
            var c4E = _oz(z, 10, e, s, gg)
            _(f3E, c4E)
            cs.pop()
            _(bYE, f3E)
            cs.push("./page/API/get-network-type/get-network-type.wxml:text:13:12")
            var h5E = _n('text')
            _rz(z, h5E, 'class', 11, e, s, gg)
            var o6E = _oz(z, 12, e, s, gg)
            _(h5E, o6E)
            cs.pop()
            _(bYE, h5E)
            cs.pop()
        }
        var oZE = _v()
        _(eXE, oZE)
        if (_oz(z, 13, e, s, gg)) {
            oZE.wxVkey = 1
            cs.push("./page/API/get-network-type/get-network-type.wxml:block:15:10")
            cs.push("./page/API/get-network-type/get-network-type.wxml:text:16:12")
            var c7E = _n('text')
            _rz(z, c7E, 'class', 14, e, s, gg)
            var o8E = _oz(z, 15, e, s, gg)
            _(c7E, o8E)
            cs.pop()
            _(oZE, c7E)
            cs.pop()
        }
        bYE.wxXCkey = 1
        oZE.wxXCkey = 1
        cs.pop()
        _(tWE, eXE)
        cs.push("./page/API/get-network-type/get-network-type.wxml:view:19:8")
        var l9E = _n('view')
        _rz(z, l9E, 'class', 16, e, s, gg)
        cs.push("./page/API/get-network-type/get-network-type.wxml:button:20:10")
        var a0E = _mz(z, 'button', ['bindtap', 17, 'class', 1, 'type', 2], [], e, s, gg)
        var tAF = _oz(z, 20, e, s, gg)
        _(a0E, tAF)
        cs.pop()
        _(l9E, a0E)
        cs.push("./page/API/get-network-type/get-network-type.wxml:button:21:10")
        var eBF = _mz(z, 'button', ['bindtap', 21, 'class', 1], [], e, s, gg)
        var bCF = _oz(z, 23, e, s, gg)
        _(eBF, bCF)
        cs.pop()
        _(l9E, eBF)
        cs.pop()
        _(tWE, l9E)
        cs.pop()
        _(aVE, tWE)
        cs.pop()
        _(hQE, aVE)
        var oDF = _v()
        _(hQE, oDF)
        cs.push("./page/API/get-network-type/get-network-type.wxml:template:26:4")
        var xEF = _oz(z, 24, e, s, gg)
        var oFF = _gd(x[10], xEF, e_, d_)
        if (oFF) {
            var fGF = {}
            var cur_globalf = gg.f
            oDF.wxXCkey = 3
            oFF(fGF, fGF, oDF, gg)
            gg.f = cur_globalf
        } else _w(xEF, x[10], 26, 16)
        cs.pop()
        cs.pop()
        _(r, hQE)
        cPE.pop()
        cPE.pop()
        return r
    }
    e_[x[10]] = {
        f: m8,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[11]] = {}
    var m9 = function(e, s, r, gg) {
        var z = gz$gwx_10()
        var hIF = e_[x[11]].i
        _ai(hIF, x[1], e_, x[11], 1, 1)
        _ai(hIF, x[2], e_, x[11], 2, 2)
        cs.push("./page/API/get-system-info/get-system-info.wxml:view:4:2")
        var oJF = _n('view')
        _rz(z, oJF, 'class', 0, e, s, gg)
        var cKF = _v()
        _(oJF, cKF)
        cs.push("./page/API/get-system-info/get-system-info.wxml:template:5:4")
        var oLF = _oz(z, 2, e, s, gg)
        var lMF = _gd(x[11], oLF, e_, d_)
        if (lMF) {
            var aNF = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            cKF.wxXCkey = 3
            lMF(aNF, aNF, cKF, gg)
            gg.f = cur_globalf
        } else _w(oLF, x[11], 5, 16)
        cs.pop()
        cs.push("./page/API/get-system-info/get-system-info.wxml:view:7:4")
        var tOF = _n('view')
        _rz(z, tOF, 'class', 3, e, s, gg)
        cs.push("./page/API/get-system-info/get-system-info.wxml:view:8:6")
        var ePF = _n('view')
        _rz(z, ePF, 'class', 4, e, s, gg)
        cs.push("./page/API/get-system-info/get-system-info.wxml:view:9:8")
        var bQF = _n('view')
        _rz(z, bQF, 'class', 5, e, s, gg)
        cs.push("./page/API/get-system-info/get-system-info.wxml:view:10:10")
        var oRF = _n('view')
        _rz(z, oRF, 'class', 6, e, s, gg)
        cs.push("./page/API/get-system-info/get-system-info.wxml:text:11:12")
        var xSF = _n('text')
        _rz(z, xSF, 'class', 7, e, s, gg)
        var oTF = _oz(z, 8, e, s, gg)
        _(xSF, oTF)
        cs.pop()
        _(oRF, xSF)
        cs.push("./page/API/get-system-info/get-system-info.wxml:input:12:12")
        var fUF = _mz(z, 'input', ['class', 9, 'disabled', 1, 'placeholder', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(oRF, fUF)
        cs.pop()
        _(bQF, oRF)
        cs.push("./page/API/get-system-info/get-system-info.wxml:view:14:10")
        var cVF = _n('view')
        _rz(z, cVF, 'class', 14, e, s, gg)
        cs.push("./page/API/get-system-info/get-system-info.wxml:text:15:12")
        var hWF = _n('text')
        _rz(z, hWF, 'class', 15, e, s, gg)
        var oXF = _oz(z, 16, e, s, gg)
        _(hWF, oXF)
        cs.pop()
        _(cVF, hWF)
        cs.push("./page/API/get-system-info/get-system-info.wxml:input:16:12")
        var cYF = _mz(z, 'input', ['class', 17, 'disabled', 1, 'placeholder', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(cVF, cYF)
        cs.pop()
        _(bQF, cVF)
        cs.push("./page/API/get-system-info/get-system-info.wxml:view:18:10")
        var oZF = _n('view')
        _rz(z, oZF, 'class', 22, e, s, gg)
        cs.push("./page/API/get-system-info/get-system-info.wxml:text:19:12")
        var l1F = _n('text')
        _rz(z, l1F, 'class', 23, e, s, gg)
        var a2F = _oz(z, 24, e, s, gg)
        _(l1F, a2F)
        cs.pop()
        _(oZF, l1F)
        cs.push("./page/API/get-system-info/get-system-info.wxml:input:20:12")
        var t3F = _mz(z, 'input', ['class', 25, 'disabled', 1, 'placeholder', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(oZF, t3F)
        cs.pop()
        _(bQF, oZF)
        cs.push("./page/API/get-system-info/get-system-info.wxml:view:22:10")
        var e4F = _n('view')
        _rz(z, e4F, 'class', 30, e, s, gg)
        cs.push("./page/API/get-system-info/get-system-info.wxml:text:23:12")
        var b5F = _n('text')
        _rz(z, b5F, 'class', 31, e, s, gg)
        var o6F = _oz(z, 32, e, s, gg)
        _(b5F, o6F)
        cs.pop()
        _(e4F, b5F)
        cs.push("./page/API/get-system-info/get-system-info.wxml:input:24:12")
        var x7F = _mz(z, 'input', ['class', 33, 'disabled', 1, 'placeholder', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(e4F, x7F)
        cs.pop()
        _(bQF, e4F)
        cs.push("./page/API/get-system-info/get-system-info.wxml:view:26:10")
        var o8F = _n('view')
        _rz(z, o8F, 'class', 38, e, s, gg)
        cs.push("./page/API/get-system-info/get-system-info.wxml:text:27:12")
        var f9F = _n('text')
        _rz(z, f9F, 'class', 39, e, s, gg)
        var c0F = _oz(z, 40, e, s, gg)
        _(f9F, c0F)
        cs.pop()
        _(o8F, f9F)
        cs.push("./page/API/get-system-info/get-system-info.wxml:input:28:12")
        var hAG = _mz(z, 'input', ['class', 41, 'disabled', 1, 'placeholder', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(o8F, hAG)
        cs.pop()
        _(bQF, o8F)
        cs.push("./page/API/get-system-info/get-system-info.wxml:view:30:10")
        var oBG = _n('view')
        _rz(z, oBG, 'class', 46, e, s, gg)
        cs.push("./page/API/get-system-info/get-system-info.wxml:text:31:12")
        var cCG = _n('text')
        _rz(z, cCG, 'class', 47, e, s, gg)
        var oDG = _oz(z, 48, e, s, gg)
        _(cCG, oDG)
        cs.pop()
        _(oBG, cCG)
        cs.push("./page/API/get-system-info/get-system-info.wxml:input:32:12")
        var lEG = _mz(z, 'input', ['class', 49, 'disabled', 1, 'placeholder', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(oBG, lEG)
        cs.pop()
        _(bQF, oBG)
        cs.pop()
        _(ePF, bQF)
        cs.push("./page/API/get-system-info/get-system-info.wxml:view:35:8")
        var aFG = _n('view')
        _rz(z, aFG, 'class', 54, e, s, gg)
        cs.push("./page/API/get-system-info/get-system-info.wxml:button:36:10")
        var tGG = _mz(z, 'button', ['bindtap', 55, 'class', 1, 'type', 2], [], e, s, gg)
        var eHG = _oz(z, 58, e, s, gg)
        _(tGG, eHG)
        cs.pop()
        _(aFG, tGG)
        cs.pop()
        _(ePF, aFG)
        cs.pop()
        _(tOF, ePF)
        cs.pop()
        _(oJF, tOF)
        var bIG = _v()
        _(oJF, bIG)
        cs.push("./page/API/get-system-info/get-system-info.wxml:template:41:4")
        var oJG = _oz(z, 59, e, s, gg)
        var xKG = _gd(x[11], oJG, e_, d_)
        if (xKG) {
            var oLG = {}
            var cur_globalf = gg.f
            bIG.wxXCkey = 3
            xKG(oLG, oLG, bIG, gg)
            gg.f = cur_globalf
        } else _w(oJG, x[11], 41, 16)
        cs.pop()
        cs.pop()
        _(r, oJF)
        hIF.pop()
        hIF.pop()
        return r
    }
    e_[x[11]] = {
        f: m9,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[12]] = {}
    var m10 = function(e, s, r, gg) {
        var z = gz$gwx_11()
        var cNG = e_[x[12]].i
        _ai(cNG, x[1], e_, x[12], 1, 1)
        _ai(cNG, x[2], e_, x[12], 2, 2)
        cs.push("./page/API/get-user-info/get-user-info.wxml:view:4:2")
        var hOG = _n('view')
        _rz(z, hOG, 'class', 0, e, s, gg)
        var oPG = _v()
        _(hOG, oPG)
        cs.push("./page/API/get-user-info/get-user-info.wxml:template:5:4")
        var cQG = _oz(z, 2, e, s, gg)
        var oRG = _gd(x[12], cQG, e_, d_)
        if (oRG) {
            var lSG = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            oPG.wxXCkey = 3
            oRG(lSG, lSG, oPG, gg)
            gg.f = cur_globalf
        } else _w(cQG, x[12], 5, 16)
        cs.pop()
        cs.push("./page/API/get-user-info/get-user-info.wxml:view:7:4")
        var aTG = _n('view')
        _rz(z, aTG, 'class', 3, e, s, gg)
        cs.push("./page/API/get-user-info/get-user-info.wxml:view:8:6")
        var tUG = _n('view')
        _rz(z, tUG, 'class', 4, e, s, gg)
        cs.push("./page/API/get-user-info/get-user-info.wxml:view:9:8")
        var eVG = _n('view')
        _rz(z, eVG, 'class', 5, e, s, gg)
        cs.push("./page/API/get-user-info/get-user-info.wxml:view:10:10")
        var xYG = _n('view')
        _rz(z, xYG, 'class', 6, e, s, gg)
        var oZG = _oz(z, 7, e, s, gg)
        _(xYG, oZG)
        cs.pop()
        _(eVG, xYG)
        var bWG = _v()
        _(eVG, bWG)
        if (_oz(z, 8, e, s, gg)) {
            bWG.wxVkey = 1
            cs.push("./page/API/get-user-info/get-user-info.wxml:block:11:10")
            cs.push("./page/API/get-user-info/get-user-info.wxml:text:12:12")
            var f1G = _n('text')
            _rz(z, f1G, 'class', 9, e, s, gg)
            var c2G = _oz(z, 10, e, s, gg)
            _(f1G, c2G)
            cs.pop()
            _(bWG, f1G)
            cs.push("./page/API/get-user-info/get-user-info.wxml:text:13:12")
            var h3G = _n('text')
            _rz(z, h3G, 'class', 11, e, s, gg)
            var o4G = _oz(z, 12, e, s, gg)
            _(h3G, o4G)
            cs.pop()
            _(bWG, h3G)
            cs.pop()
        }
        var oXG = _v()
        _(eVG, oXG)
        if (_oz(z, 13, e, s, gg)) {
            oXG.wxVkey = 1
            cs.push("./page/API/get-user-info/get-user-info.wxml:block:15:10")
            cs.push("./page/API/get-user-info/get-user-info.wxml:image:16:12")
            var c5G = _mz(z, 'image', ['class', 14, 'src', 1], [], e, s, gg)
            cs.pop()
            _(oXG, c5G)
            cs.push("./page/API/get-user-info/get-user-info.wxml:text:17:12")
            var o6G = _n('text')
            _rz(z, o6G, 'class', 16, e, s, gg)
            var l7G = _oz(z, 17, e, s, gg)
            _(o6G, l7G)
            cs.pop()
            _(oXG, o6G)
            cs.pop()
        }
        bWG.wxXCkey = 1
        oXG.wxXCkey = 1
        cs.pop()
        _(tUG, eVG)
        cs.push("./page/API/get-user-info/get-user-info.wxml:view:20:8")
        var a8G = _n('view')
        _rz(z, a8G, 'class', 18, e, s, gg)
        cs.push("./page/API/get-user-info/get-user-info.wxml:button:21:10")
        var t9G = _mz(z, 'button', ['bindtap', 19, 'class', 1, 'type', 2], [], e, s, gg)
        var e0G = _oz(z, 22, e, s, gg)
        _(t9G, e0G)
        cs.pop()
        _(a8G, t9G)
        cs.push("./page/API/get-user-info/get-user-info.wxml:button:22:10")
        var bAH = _mz(z, 'button', ['bindtap', 23, 'class', 1], [], e, s, gg)
        var oBH = _oz(z, 25, e, s, gg)
        _(bAH, oBH)
        cs.pop()
        _(a8G, bAH)
        cs.pop()
        _(tUG, a8G)
        cs.pop()
        _(aTG, tUG)
        cs.pop()
        _(hOG, aTG)
        var xCH = _v()
        _(hOG, xCH)
        cs.push("./page/API/get-user-info/get-user-info.wxml:template:27:4")
        var oDH = _oz(z, 26, e, s, gg)
        var fEH = _gd(x[12], oDH, e_, d_)
        if (fEH) {
            var cFH = {}
            var cur_globalf = gg.f
            xCH.wxXCkey = 3
            fEH(cFH, cFH, xCH, gg)
            gg.f = cur_globalf
        } else _w(oDH, x[12], 27, 16)
        cs.pop()
        cs.pop()
        _(r, hOG)
        cNG.pop()
        cNG.pop()
        return r
    }
    e_[x[12]] = {
        f: m10,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[13]] = {}
    var m11 = function(e, s, r, gg) {
        var z = gz$gwx_12()
        var oHH = e_[x[13]].i
        _ai(oHH, x[1], e_, x[13], 1, 1)
        _ai(oHH, x[2], e_, x[13], 2, 2)
        cs.push("./page/API/image/image.wxml:view:4:2")
        var cIH = _n('view')
        _rz(z, cIH, 'class', 0, e, s, gg)
        var oJH = _v()
        _(cIH, oJH)
        cs.push("./page/API/image/image.wxml:template:5:4")
        var lKH = _oz(z, 2, e, s, gg)
        var aLH = _gd(x[13], lKH, e_, d_)
        if (aLH) {
            var tMH = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            oJH.wxXCkey = 3
            aLH(tMH, tMH, oJH, gg)
            gg.f = cur_globalf
        } else _w(lKH, x[13], 5, 16)
        cs.pop()
        cs.push("./page/API/image/image.wxml:view:7:4")
        var eNH = _n('view')
        _rz(z, eNH, 'class', 3, e, s, gg)
        cs.push("./page/API/image/image.wxml:view:8:6")
        var bOH = _n('view')
        _rz(z, bOH, 'class', 4, e, s, gg)
        cs.push("./page/API/image/image.wxml:form:9:8")
        var oPH = _n('form')
        _rz(z, oPH, 'bindsubmit', 5, e, s, gg)
        cs.push("./page/API/image/image.wxml:view:10:10")
        var xQH = _n('view')
        _rz(z, xQH, 'class', 6, e, s, gg)
        cs.push("./page/API/image/image.wxml:picker:11:12")
        var oRH = _mz(z, 'picker', ['bindchange', 7, 'range', 1, 'value', 2], [], e, s, gg)
        cs.push("./page/API/image/image.wxml:view:12:14")
        var fSH = _n('view')
        _rz(z, fSH, 'class', 10, e, s, gg)
        cs.push("./page/API/image/image.wxml:view:13:16")
        var cTH = _n('view')
        _rz(z, cTH, 'class', 11, e, s, gg)
        var hUH = _oz(z, 12, e, s, gg)
        _(cTH, hUH)
        cs.pop()
        _(fSH, cTH)
        cs.push("./page/API/image/image.wxml:view:14:16")
        var oVH = _n('view')
        _rz(z, oVH, 'class', 13, e, s, gg)
        var cWH = _oz(z, 14, e, s, gg)
        _(oVH, cWH)
        cs.pop()
        _(fSH, oVH)
        cs.pop()
        _(oRH, fSH)
        cs.pop()
        _(xQH, oRH)
        cs.push("./page/API/image/image.wxml:picker:17:12")
        var oXH = _mz(z, 'picker', ['bindchange', 15, 'range', 1, 'value', 2], [], e, s, gg)
        cs.push("./page/API/image/image.wxml:view:18:14")
        var lYH = _n('view')
        _rz(z, lYH, 'class', 18, e, s, gg)
        cs.push("./page/API/image/image.wxml:view:19:16")
        var aZH = _n('view')
        _rz(z, aZH, 'class', 19, e, s, gg)
        var t1H = _oz(z, 20, e, s, gg)
        _(aZH, t1H)
        cs.pop()
        _(lYH, aZH)
        cs.push("./page/API/image/image.wxml:view:20:16")
        var e2H = _n('view')
        _rz(z, e2H, 'class', 21, e, s, gg)
        var b3H = _oz(z, 22, e, s, gg)
        _(e2H, b3H)
        cs.pop()
        _(lYH, e2H)
        cs.pop()
        _(oXH, lYH)
        cs.pop()
        _(xQH, oXH)
        cs.push("./page/API/image/image.wxml:picker:23:12")
        var o4H = _mz(z, 'picker', ['bindchange', 23, 'range', 1, 'value', 2], [], e, s, gg)
        cs.push("./page/API/image/image.wxml:view:24:14")
        var x5H = _mz(z, 'view', ['class', 26, 'style', 1], [], e, s, gg)
        cs.push("./page/API/image/image.wxml:view:25:16")
        var o6H = _n('view')
        _rz(z, o6H, 'class', 28, e, s, gg)
        var f7H = _oz(z, 29, e, s, gg)
        _(o6H, f7H)
        cs.pop()
        _(x5H, o6H)
        cs.push("./page/API/image/image.wxml:view:26:16")
        var c8H = _n('view')
        _rz(z, c8H, 'class', 30, e, s, gg)
        var h9H = _oz(z, 31, e, s, gg)
        _(c8H, h9H)
        cs.pop()
        _(x5H, c8H)
        cs.pop()
        _(o4H, x5H)
        cs.pop()
        _(xQH, o4H)
        cs.pop()
        _(oPH, xQH)
        cs.push("./page/API/image/image.wxml:view:30:10")
        var o0H = _n('view')
        _rz(z, o0H, 'class', 32, e, s, gg)
        cs.push("./page/API/image/image.wxml:text:31:12")
        var cAI = _n('text')
        _rz(z, cAI, 'class', 33, e, s, gg)
        var oBI = _oz(z, 34, e, s, gg)
        _(cAI, oBI)
        cs.pop()
        _(o0H, cAI)
        cs.push("./page/API/image/image.wxml:view:32:12")
        var lCI = _n('view')
        _rz(z, lCI, 'class', 35, e, s, gg)
        var aDI = _v()
        _(lCI, aDI)
        cs.push("./page/API/image/image.wxml:block:33:14")
        var tEI = function(bGI, eFI, oHI, gg) {
            cs.push("./page/API/image/image.wxml:block:33:14")
            cs.push("./page/API/image/image.wxml:image:34:16")
            var oJI = _mz(z, 'image', ['bindtap', 38, 'class', 1, 'data-src', 2, 'src', 3], [], bGI, eFI, gg)
            cs.pop()
            _(oHI, oJI)
            cs.pop()
            return oHI
        }
        _wp('./page/API/image/image.wxml:block:33:14: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        aDI.wxXCkey = 2
        _2z(z, 37, tEI, e, s, gg, aDI, 'image', 'index', '')
        cs.pop()
        cs.push("./page/API/image/image.wxml:image:36:14")
        var fKI = _mz(z, 'image', ['bindtap', 42, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(lCI, fKI)
        cs.pop()
        _(o0H, lCI)
        cs.pop()
        _(oPH, o0H)
        cs.pop()
        _(bOH, oPH)
        cs.pop()
        _(eNH, bOH)
        cs.pop()
        _(cIH, eNH)
        var cLI = _v()
        _(cIH, cLI)
        cs.push("./page/API/image/image.wxml:template:43:4")
        var hMI = _oz(z, 45, e, s, gg)
        var oNI = _gd(x[13], hMI, e_, d_)
        if (oNI) {
            var cOI = {}
            var cur_globalf = gg.f
            cLI.wxXCkey = 3
            oNI(cOI, cOI, cLI, gg)
            gg.f = cur_globalf
        } else _w(hMI, x[13], 43, 16)
        cs.pop()
        cs.pop()
        _(r, cIH)
        oHH.pop()
        oHH.pop()
        return r
    }
    e_[x[13]] = {
        f: m11,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[14]] = {}
    var m12 = function(e, s, r, gg) {
        var z = gz$gwx_13()
        cs.push("./page/API/index/index.wxml:view:1:1")
        var lQI = _n('view')
        _rz(z, lQI, 'class', 0, e, s, gg)
        cs.push("./page/API/index/index.wxml:view:2:4")
        var aRI = _n('view')
        _rz(z, aRI, 'class', 1, e, s, gg)
        cs.push("./page/API/index/index.wxml:view:3:8")
        var tSI = _n('view')
        _rz(z, tSI, 'class', 2, e, s, gg)
        var eTI = _oz(z, 3, e, s, gg)
        _(tSI, eTI)
        cs.pop()
        _(aRI, tSI)
        cs.push("./page/API/index/index.wxml:view:4:8")
        var bUI = _n('view')
        _rz(z, bUI, 'class', 4, e, s, gg)
        var oVI = _oz(z, 5, e, s, gg)
        _(bUI, oVI)
        cs.pop()
        _(aRI, bUI)
        cs.pop()
        _(lQI, aRI)
        cs.push("./page/API/index/index.wxml:view:7:4")
        var xWI = _n('view')
        _rz(z, xWI, 'class', 6, e, s, gg)
        var oXI = _v()
        _(xWI, oXI)
        cs.push("./page/API/index/index.wxml:block:8:6")
        var fYI = function(h1I, cZI, o2I, gg) {
            cs.push("./page/API/index/index.wxml:block:8:6")
            cs.push("./page/API/index/index.wxml:view:9:8")
            var o4I = _n('view')
            _rz(z, o4I, 'class', 9, h1I, cZI, gg)
            cs.push("./page/API/index/index.wxml:view:10:10")
            var l5I = _mz(z, 'view', ['bindtap', 10, 'class', 1, 'id', 2], [], h1I, cZI, gg)
            cs.push("./page/API/index/index.wxml:text:11:12")
            var a6I = _n('text')
            _rz(z, a6I, 'class', 13, h1I, cZI, gg)
            var t7I = _oz(z, 14, h1I, cZI, gg)
            _(a6I, t7I)
            cs.pop()
            _(l5I, a6I)
            cs.push("./page/API/index/index.wxml:image:12:12")
            var e8I = _mz(z, 'image', ['class', 15, 'src', 1], [], h1I, cZI, gg)
            cs.pop()
            _(l5I, e8I)
            cs.pop()
            _(o4I, l5I)
            cs.push("./page/API/index/index.wxml:view:17:10")
            var b9I = _n('view')
            _rz(z, b9I, 'class', 17, h1I, cZI, gg)
            var o0I = _v()
            _(b9I, o0I)
            cs.push("./page/API/index/index.wxml:block:18:12")
            var xAJ = function(fCJ, oBJ, cDJ, gg) {
                cs.push("./page/API/index/index.wxml:block:18:12")
                cs.push("./page/API/index/index.wxml:navigator:19:14")
                var oFJ = _n('navigator')
                _rz(z, oFJ, 'url', 20, fCJ, oBJ, gg)
                cs.push("./page/API/index/index.wxml:view:20:16")
                var cGJ = _mz(z, 'view', ['class', 21, 'style', 1], [], fCJ, oBJ, gg)
                cs.push("./page/API/index/index.wxml:view:21:18")
                var oHJ = _n('view')
                _rz(z, oHJ, 'class', 23, fCJ, oBJ, gg)
                cs.push("./page/API/index/index.wxml:text:22:20")
                var lIJ = _n('text')
                _rz(z, lIJ, 'class', 24, fCJ, oBJ, gg)
                var aJJ = _oz(z, 25, fCJ, oBJ, gg)
                _(lIJ, aJJ)
                cs.pop()
                _(oHJ, lIJ)
                cs.push("./page/API/index/index.wxml:text:23:20")
                var tKJ = _n('text')
                _rz(z, tKJ, 'class', 26, fCJ, oBJ, gg)
                var eLJ = _oz(z, 27, fCJ, oBJ, gg)
                _(tKJ, eLJ)
                cs.pop()
                _(oHJ, tKJ)
                cs.pop()
                _(cGJ, oHJ)
                cs.push("./page/API/index/index.wxml:image:25:18")
                var bMJ = _mz(z, 'image', ['class', 28, 'src', 1], [], fCJ, oBJ, gg)
                cs.pop()
                _(cGJ, bMJ)
                cs.pop()
                _(oFJ, cGJ)
                cs.pop()
                _(cDJ, oFJ)
                cs.pop()
                return cDJ
            }
            _wp('./page/API/index/index.wxml:block:18:12: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
            o0I.wxXCkey = 2
            _2z(z, 19, xAJ, h1I, cZI, gg, o0I, 'APIItem', 'index', '')
            cs.pop()
            cs.pop()
            _(o4I, b9I)
            cs.pop()
            _(o2I, o4I)
            cs.pop()
            return o2I
        }
        _wp('./page/API/index/index.wxml:block:8:6: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        oXI.wxXCkey = 2
        _2z(z, 8, fYI, e, s, gg, oXI, 'menuItem', 'index', '')
        cs.pop()
        cs.pop()
        _(lQI, xWI)
        cs.pop()
        _(r, lQI)
        return r
    }
    e_[x[14]] = {
        f: m12,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[15]] = {}
    var m13 = function(e, s, r, gg) {
        var z = gz$gwx_14()
        var xOJ = e_[x[15]].i
        _ai(xOJ, x[1], e_, x[15], 1, 1)
        _ai(xOJ, x[2], e_, x[15], 2, 2)
        cs.push("./page/API/login/login.wxml:view:4:2")
        var oPJ = _n('view')
        _rz(z, oPJ, 'class', 0, e, s, gg)
        var fQJ = _v()
        _(oPJ, fQJ)
        cs.push("./page/API/login/login.wxml:template:5:4")
        var cRJ = _oz(z, 2, e, s, gg)
        var hSJ = _gd(x[15], cRJ, e_, d_)
        if (hSJ) {
            var oTJ = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            fQJ.wxXCkey = 3
            hSJ(oTJ, oTJ, fQJ, gg)
            gg.f = cur_globalf
        } else _w(cRJ, x[15], 5, 16)
        cs.pop()
        cs.push("./page/API/login/login.wxml:view:7:4")
        var cUJ = _n('view')
        _rz(z, cUJ, 'class', 3, e, s, gg)
        cs.push("./page/API/login/login.wxml:view:8:6")
        var oVJ = _n('view')
        _rz(z, oVJ, 'class', 4, e, s, gg)
        var lWJ = _v()
        _(oVJ, lWJ)
        if (_oz(z, 5, e, s, gg)) {
            lWJ.wxVkey = 1
            cs.push("./page/API/login/login.wxml:block:9:8")
            cs.push("./page/API/login/login.wxml:text:10:10")
            var tYJ = _n('text')
            _rz(z, tYJ, 'class', 6, e, s, gg)
            var eZJ = _oz(z, 7, e, s, gg)
            _(tYJ, eZJ)
            cs.pop()
            _(lWJ, tYJ)
            cs.push("./page/API/login/login.wxml:text:11:10")
            var b1J = _n('text')
            _rz(z, b1J, 'class', 8, e, s, gg)
            var o2J = _oz(z, 9, e, s, gg)
            _(b1J, o2J)
            cs.pop()
            _(lWJ, b1J)
            cs.pop()
        }
        var aXJ = _v()
        _(oVJ, aXJ)
        if (_oz(z, 10, e, s, gg)) {
            aXJ.wxVkey = 1
            cs.push("./page/API/login/login.wxml:block:13:8")
            cs.push("./page/API/login/login.wxml:text:14:10")
            var x3J = _n('text')
            _rz(z, x3J, 'class', 11, e, s, gg)
            var o4J = _oz(z, 12, e, s, gg)
            _(x3J, o4J)
            cs.pop()
            _(aXJ, x3J)
            cs.push("./page/API/login/login.wxml:button:15:10")
            var f5J = _mz(z, 'button', ['bindtap', 13, 'class', 1, 'type', 2], [], e, s, gg)
            var c6J = _oz(z, 16, e, s, gg)
            _(f5J, c6J)
            cs.pop()
            _(aXJ, f5J)
            cs.pop()
        }
        lWJ.wxXCkey = 1
        aXJ.wxXCkey = 1
        cs.pop()
        _(cUJ, oVJ)
        cs.pop()
        _(oPJ, cUJ)
        var h7J = _v()
        _(oPJ, h7J)
        cs.push("./page/API/login/login.wxml:template:20:4")
        var o8J = _oz(z, 17, e, s, gg)
        var c9J = _gd(x[15], o8J, e_, d_)
        if (c9J) {
            var o0J = {}
            var cur_globalf = gg.f
            h7J.wxXCkey = 3
            c9J(o0J, o0J, h7J, gg)
            gg.f = cur_globalf
        } else _w(o8J, x[15], 20, 16)
        cs.pop()
        cs.pop()
        _(r, oPJ)
        xOJ.pop()
        xOJ.pop()
        return r
    }
    e_[x[15]] = {
        f: m13,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[16]] = {}
    var m14 = function(e, s, r, gg) {
        var z = gz$gwx_15()
        var aBK = e_[x[16]].i
        _ai(aBK, x[1], e_, x[16], 1, 1)
        _ai(aBK, x[2], e_, x[16], 2, 2)
        cs.push("./page/API/navigation-bar-loading/navigation-bar-loading.wxml:view:4:2")
        var tCK = _n('view')
        _rz(z, tCK, 'class', 0, e, s, gg)
        var eDK = _v()
        _(tCK, eDK)
        cs.push("./page/API/navigation-bar-loading/navigation-bar-loading.wxml:template:5:4")
        var bEK = _oz(z, 2, e, s, gg)
        var oFK = _gd(x[16], bEK, e_, d_)
        if (oFK) {
            var xGK = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            eDK.wxXCkey = 3
            oFK(xGK, xGK, eDK, gg)
            gg.f = cur_globalf
        } else _w(bEK, x[16], 5, 16)
        cs.pop()
        cs.push("./page/API/navigation-bar-loading/navigation-bar-loading.wxml:view:7:4")
        var oHK = _n('view')
        _rz(z, oHK, 'class', 3, e, s, gg)
        cs.push("./page/API/navigation-bar-loading/navigation-bar-loading.wxml:view:8:6")
        var fIK = _n('view')
        _rz(z, fIK, 'class', 4, e, s, gg)
        cs.push("./page/API/navigation-bar-loading/navigation-bar-loading.wxml:view:9:8")
        var cJK = _n('view')
        _rz(z, cJK, 'class', 5, e, s, gg)
        cs.push("./page/API/navigation-bar-loading/navigation-bar-loading.wxml:button:10:10")
        var hKK = _mz(z, 'button', ['bindtap', 6, 'class', 1, 'type', 2], [], e, s, gg)
        var oLK = _oz(z, 9, e, s, gg)
        _(hKK, oLK)
        cs.pop()
        _(cJK, hKK)
        cs.push("./page/API/navigation-bar-loading/navigation-bar-loading.wxml:button:11:10")
        var cMK = _mz(z, 'button', ['bindtap', 10, 'class', 1], [], e, s, gg)
        var oNK = _oz(z, 12, e, s, gg)
        _(cMK, oNK)
        cs.pop()
        _(cJK, cMK)
        cs.pop()
        _(fIK, cJK)
        cs.pop()
        _(oHK, fIK)
        cs.pop()
        _(tCK, oHK)
        var lOK = _v()
        _(tCK, lOK)
        cs.push("./page/API/navigation-bar-loading/navigation-bar-loading.wxml:template:16:4")
        var aPK = _oz(z, 13, e, s, gg)
        var tQK = _gd(x[16], aPK, e_, d_)
        if (tQK) {
            var eRK = {}
            var cur_globalf = gg.f
            lOK.wxXCkey = 3
            tQK(eRK, eRK, lOK, gg)
            gg.f = cur_globalf
        } else _w(aPK, x[16], 16, 16)
        cs.pop()
        cs.pop()
        _(r, tCK)
        aBK.pop()
        aBK.pop()
        return r
    }
    e_[x[16]] = {
        f: m14,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[17]] = {}
    var m15 = function(e, s, r, gg) {
        var z = gz$gwx_16()
        var oTK = e_[x[17]].i
        _ai(oTK, x[1], e_, x[17], 1, 1)
        _ai(oTK, x[2], e_, x[17], 2, 2)
        cs.push("./page/API/navigator/navigator.wxml:view:4:2")
        var xUK = _n('view')
        _rz(z, xUK, 'class', 0, e, s, gg)
        var oVK = _v()
        _(xUK, oVK)
        cs.push("./page/API/navigator/navigator.wxml:template:5:4")
        var fWK = _oz(z, 2, e, s, gg)
        var cXK = _gd(x[17], fWK, e_, d_)
        if (cXK) {
            var hYK = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            oVK.wxXCkey = 3
            cXK(hYK, hYK, oVK, gg)
            gg.f = cur_globalf
        } else _w(fWK, x[17], 5, 16)
        cs.pop()
        cs.push("./page/API/navigator/navigator.wxml:view:7:4")
        var oZK = _n('view')
        _rz(z, oZK, 'class', 3, e, s, gg)
        cs.push("./page/API/navigator/navigator.wxml:view:8:6")
        var c1K = _n('view')
        _rz(z, c1K, 'class', 4, e, s, gg)
        cs.push("./page/API/navigator/navigator.wxml:view:9:8")
        var o2K = _n('view')
        _rz(z, o2K, 'class', 5, e, s, gg)
        cs.push("./page/API/navigator/navigator.wxml:button:10:10")
        var l3K = _mz(z, 'button', ['bindtap', 6, 'class', 1], [], e, s, gg)
        var a4K = _oz(z, 8, e, s, gg)
        _(l3K, a4K)
        cs.pop()
        _(o2K, l3K)
        cs.push("./page/API/navigator/navigator.wxml:button:11:10")
        var t5K = _mz(z, 'button', ['bindtap', 9, 'class', 1], [], e, s, gg)
        var e6K = _oz(z, 11, e, s, gg)
        _(t5K, e6K)
        cs.pop()
        _(o2K, t5K)
        cs.push("./page/API/navigator/navigator.wxml:button:12:10")
        var b7K = _mz(z, 'button', ['bindtap', 12, 'class', 1], [], e, s, gg)
        var o8K = _oz(z, 14, e, s, gg)
        _(b7K, o8K)
        cs.pop()
        _(o2K, b7K)
        cs.pop()
        _(c1K, o2K)
        cs.pop()
        _(oZK, c1K)
        cs.pop()
        _(xUK, oZK)
        var x9K = _v()
        _(xUK, x9K)
        cs.push("./page/API/navigator/navigator.wxml:template:17:4")
        var o0K = _oz(z, 15, e, s, gg)
        var fAL = _gd(x[17], o0K, e_, d_)
        if (fAL) {
            var cBL = {}
            var cur_globalf = gg.f
            x9K.wxXCkey = 3
            fAL(cBL, cBL, x9K, gg)
            gg.f = cur_globalf
        } else _w(o0K, x[17], 17, 16)
        cs.pop()
        cs.pop()
        _(r, xUK)
        oTK.pop()
        oTK.pop()
        return r
    }
    e_[x[17]] = {
        f: m15,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[18]] = {}
    var m16 = function(e, s, r, gg) {
        var z = gz$gwx_17()
        var oDL = e_[x[18]].i
        _ai(oDL, x[1], e_, x[18], 1, 1)
        _ai(oDL, x[2], e_, x[18], 2, 2)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:view:4:2")
        var cEL = _n('view')
        _rz(z, cEL, 'class', 0, e, s, gg)
        var oFL = _v()
        _(cEL, oFL)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:template:5:4")
        var lGL = _oz(z, 2, e, s, gg)
        var aHL = _gd(x[18], lGL, e_, d_)
        if (aHL) {
            var tIL = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            oFL.wxXCkey = 3
            aHL(tIL, tIL, oFL, gg)
            gg.f = cur_globalf
        } else _w(lGL, x[18], 5, 16)
        cs.pop()
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:view:7:4")
        var eJL = _n('view')
        _rz(z, eJL, 'class', 3, e, s, gg)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:view:8:6")
        var bKL = _n('view')
        _rz(z, bKL, 'class', 4, e, s, gg)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:text:9:8")
        var oLL = _n('text')
        _rz(z, oLL, 'class', 5, e, s, gg)
        var xML = _oz(z, 6, e, s, gg)
        _(oLL, xML)
        cs.pop()
        _(bKL, oLL)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:view:10:8")
        var oNL = _n('view')
        _rz(z, oNL, 'class', 7, e, s, gg)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:canvas:11:10")
        var fOL = _mz(z, 'canvas', ['canvasId', 8, 'class', 1, 'show', 2], [], e, s, gg)
        cs.pop()
        _(oNL, fOL)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:canvas:12:10")
        var cPL = _mz(z, 'canvas', ['canvasId', 11, 'class', 1, 'show', 2], [], e, s, gg)
        cs.pop()
        _(oNL, cPL)
        cs.pop()
        _(bKL, oNL)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:view:14:8")
        var hQL = _n('view')
        _rz(z, hQL, 'class', 14, e, s, gg)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:text:15:10")
        var oRL = _n('text')
        _rz(z, oRL, 'class', 15, e, s, gg)
        var cSL = _oz(z, 16, e, s, gg)
        _(oRL, cSL)
        cs.pop()
        _(hQL, oRL)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:text:16:10")
        var oTL = _n('text')
        _rz(z, oTL, 'class', 17, e, s, gg)
        var lUL = _oz(z, 18, e, s, gg)
        _(oTL, lUL)
        cs.pop()
        _(hQL, oTL)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:text:17:10")
        var aVL = _n('text')
        _rz(z, aVL, 'class', 19, e, s, gg)
        var tWL = _oz(z, 20, e, s, gg)
        _(aVL, tWL)
        cs.pop()
        _(hQL, aVL)
        cs.pop()
        _(bKL, hQL)
        cs.pop()
        _(eJL, bKL)
        cs.pop()
        _(cEL, eJL)
        var eXL = _v()
        _(cEL, eXL)
        cs.push("./page/API/on-accelerometer-change/on-accelerometer-change.wxml:template:22:4")
        var bYL = _oz(z, 21, e, s, gg)
        var oZL = _gd(x[18], bYL, e_, d_)
        if (oZL) {
            var x1L = {}
            var cur_globalf = gg.f
            eXL.wxXCkey = 3
            oZL(x1L, x1L, eXL, gg)
            gg.f = cur_globalf
        } else _w(bYL, x[18], 22, 16)
        cs.pop()
        cs.pop()
        _(r, cEL)
        oDL.pop()
        oDL.pop()
        return r
    }
    e_[x[18]] = {
        f: m16,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[19]] = {}
    var m17 = function(e, s, r, gg) {
        var z = gz$gwx_18()
        var f3L = e_[x[19]].i
        _ai(f3L, x[1], e_, x[19], 1, 1)
        _ai(f3L, x[2], e_, x[19], 2, 2)
        cs.push("./page/API/on-compass-change/on-compass-change.wxml:view:4:2")
        var c4L = _n('view')
        _rz(z, c4L, 'class', 0, e, s, gg)
        var h5L = _v()
        _(c4L, h5L)
        cs.push("./page/API/on-compass-change/on-compass-change.wxml:template:5:4")
        var o6L = _oz(z, 2, e, s, gg)
        var c7L = _gd(x[19], o6L, e_, d_)
        if (c7L) {
            var o8L = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            h5L.wxXCkey = 3
            c7L(o8L, o8L, h5L, gg)
            gg.f = cur_globalf
        } else _w(o6L, x[19], 5, 16)
        cs.pop()
        cs.push("./page/API/on-compass-change/on-compass-change.wxml:view:7:4")
        var l9L = _n('view')
        _rz(z, l9L, 'class', 3, e, s, gg)
        cs.push("./page/API/on-compass-change/on-compass-change.wxml:view:8:6")
        var a0L = _n('view')
        _rz(z, a0L, 'class', 4, e, s, gg)
        cs.push("./page/API/on-compass-change/on-compass-change.wxml:text:9:8")
        var tAM = _n('text')
        _rz(z, tAM, 'class', 5, e, s, gg)
        var eBM = _oz(z, 6, e, s, gg)
        _(tAM, eBM)
        cs.pop()
        _(a0L, tAM)
        cs.push("./page/API/on-compass-change/on-compass-change.wxml:view:10:8")
        var bCM = _n('view')
        _rz(z, bCM, 'class', 7, e, s, gg)
        cs.push("./page/API/on-compass-change/on-compass-change.wxml:text:11:10")
        var oDM = _n('text')
        _rz(z, oDM, 'class', 8, e, s, gg)
        var xEM = _oz(z, 9, e, s, gg)
        _(oDM, xEM)
        cs.pop()
        _(bCM, oDM)
        cs.push("./page/API/on-compass-change/on-compass-change.wxml:text:12:10")
        var oFM = _n('text')
        _rz(z, oFM, 'class', 10, e, s, gg)
        var fGM = _oz(z, 11, e, s, gg)
        _(oFM, fGM)
        cs.pop()
        _(bCM, oFM)
        cs.pop()
        _(a0L, bCM)
        cs.pop()
        _(l9L, a0L)
        cs.pop()
        _(c4L, l9L)
        var cHM = _v()
        _(c4L, cHM)
        cs.push("./page/API/on-compass-change/on-compass-change.wxml:template:17:4")
        var hIM = _oz(z, 12, e, s, gg)
        var oJM = _gd(x[19], hIM, e_, d_)
        if (oJM) {
            var cKM = {}
            var cur_globalf = gg.f
            cHM.wxXCkey = 3
            oJM(cKM, cKM, cHM, gg)
            gg.f = cur_globalf
        } else _w(hIM, x[19], 17, 16)
        cs.pop()
        cs.pop()
        _(r, c4L)
        f3L.pop()
        f3L.pop()
        return r
    }
    e_[x[19]] = {
        f: m17,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[20]] = {}
    var m18 = function(e, s, r, gg) {
        var z = gz$gwx_19()
        var lMM = e_[x[20]].i
        _ai(lMM, x[1], e_, x[20], 1, 1)
        _ai(lMM, x[2], e_, x[20], 2, 2)
        cs.push("./page/API/open-location/open-location.wxml:view:4:2")
        var aNM = _n('view')
        _rz(z, aNM, 'class', 0, e, s, gg)
        var tOM = _v()
        _(aNM, tOM)
        cs.push("./page/API/open-location/open-location.wxml:template:5:4")
        var ePM = _oz(z, 2, e, s, gg)
        var bQM = _gd(x[20], ePM, e_, d_)
        if (bQM) {
            var oRM = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            tOM.wxXCkey = 3
            bQM(oRM, oRM, tOM, gg)
            gg.f = cur_globalf
        } else _w(ePM, x[20], 5, 16)
        cs.pop()
        cs.push("./page/API/open-location/open-location.wxml:view:7:4")
        var xSM = _n('view')
        _rz(z, xSM, 'class', 3, e, s, gg)
        cs.push("./page/API/open-location/open-location.wxml:view:8:6")
        var oTM = _n('view')
        _rz(z, oTM, 'class', 4, e, s, gg)
        cs.push("./page/API/open-location/open-location.wxml:form:9:8")
        var fUM = _n('form')
        _rz(z, fUM, 'bindsubmit', 5, e, s, gg)
        cs.push("./page/API/open-location/open-location.wxml:view:10:10")
        var cVM = _n('view')
        _rz(z, cVM, 'class', 6, e, s, gg)
        cs.push("./page/API/open-location/open-location.wxml:view:11:12")
        var hWM = _n('view')
        _rz(z, hWM, 'class', 7, e, s, gg)
        cs.push("./page/API/open-location/open-location.wxml:text:12:14")
        var oXM = _n('text')
        _rz(z, oXM, 'class', 8, e, s, gg)
        var cYM = _oz(z, 9, e, s, gg)
        _(oXM, cYM)
        cs.pop()
        _(hWM, oXM)
        cs.push("./page/API/open-location/open-location.wxml:input:13:14")
        var oZM = _mz(z, 'input', ['class', 10, 'disabled', 1, 'name', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(hWM, oZM)
        cs.pop()
        _(cVM, hWM)
        cs.push("./page/API/open-location/open-location.wxml:view:15:12")
        var l1M = _n('view')
        _rz(z, l1M, 'class', 15, e, s, gg)
        cs.push("./page/API/open-location/open-location.wxml:text:16:14")
        var a2M = _n('text')
        _rz(z, a2M, 'class', 16, e, s, gg)
        var t3M = _oz(z, 17, e, s, gg)
        _(a2M, t3M)
        cs.pop()
        _(l1M, a2M)
        cs.push("./page/API/open-location/open-location.wxml:input:17:14")
        var e4M = _mz(z, 'input', ['class', 18, 'disabled', 1, 'name', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(l1M, e4M)
        cs.pop()
        _(cVM, l1M)
        cs.push("./page/API/open-location/open-location.wxml:view:19:12")
        var b5M = _n('view')
        _rz(z, b5M, 'class', 23, e, s, gg)
        cs.push("./page/API/open-location/open-location.wxml:text:20:14")
        var o6M = _n('text')
        _rz(z, o6M, 'class', 24, e, s, gg)
        var x7M = _oz(z, 25, e, s, gg)
        _(o6M, x7M)
        cs.pop()
        _(b5M, o6M)
        cs.push("./page/API/open-location/open-location.wxml:input:21:14")
        var o8M = _mz(z, 'input', ['class', 26, 'disabled', 1, 'name', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(b5M, o8M)
        cs.pop()
        _(cVM, b5M)
        cs.push("./page/API/open-location/open-location.wxml:view:23:12")
        var f9M = _mz(z, 'view', ['class', 31, 'style', 1], [], e, s, gg)
        cs.push("./page/API/open-location/open-location.wxml:text:24:14")
        var c0M = _n('text')
        _rz(z, c0M, 'class', 33, e, s, gg)
        var hAN = _oz(z, 34, e, s, gg)
        _(c0M, hAN)
        cs.pop()
        _(f9M, c0M)
        cs.push("./page/API/open-location/open-location.wxml:input:25:14")
        var oBN = _mz(z, 'input', ['class', 35, 'disabled', 1, 'name', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(f9M, oBN)
        cs.pop()
        _(cVM, f9M)
        cs.pop()
        _(fUM, cVM)
        cs.push("./page/API/open-location/open-location.wxml:view:28:10")
        var cCN = _n('view')
        _rz(z, cCN, 'class', 40, e, s, gg)
        cs.push("./page/API/open-location/open-location.wxml:button:29:12")
        var oDN = _mz(z, 'button', ['class', 41, 'formType', 1, 'type', 2], [], e, s, gg)
        var lEN = _oz(z, 44, e, s, gg)
        _(oDN, lEN)
        cs.pop()
        _(cCN, oDN)
        cs.pop()
        _(fUM, cCN)
        cs.pop()
        _(oTM, fUM)
        cs.pop()
        _(xSM, oTM)
        cs.pop()
        _(aNM, xSM)
        var aFN = _v()
        _(aNM, aFN)
        cs.push("./page/API/open-location/open-location.wxml:template:35:4")
        var tGN = _oz(z, 45, e, s, gg)
        var eHN = _gd(x[20], tGN, e_, d_)
        if (eHN) {
            var bIN = {}
            var cur_globalf = gg.f
            aFN.wxXCkey = 3
            eHN(bIN, bIN, aFN, gg)
            gg.f = cur_globalf
        } else _w(tGN, x[20], 35, 16)
        cs.pop()
        cs.pop()
        _(r, aNM)
        lMM.pop()
        lMM.pop()
        return r
    }
    e_[x[20]] = {
        f: m18,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[21]] = {}
    var m19 = function(e, s, r, gg) {
        var z = gz$gwx_20()
        var xKN = e_[x[21]].i
        _ai(xKN, x[1], e_, x[21], 1, 1)
        _ai(xKN, x[2], e_, x[21], 2, 2)
        cs.push("./page/API/pull-down-refresh/pull-down-refresh.wxml:view:4:2")
        var oLN = _n('view')
        _rz(z, oLN, 'class', 0, e, s, gg)
        var fMN = _v()
        _(oLN, fMN)
        cs.push("./page/API/pull-down-refresh/pull-down-refresh.wxml:template:5:4")
        var cNN = _oz(z, 2, e, s, gg)
        var hON = _gd(x[21], cNN, e_, d_)
        if (hON) {
            var oPN = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            fMN.wxXCkey = 3
            hON(oPN, oPN, fMN, gg)
            gg.f = cur_globalf
        } else _w(cNN, x[21], 5, 16)
        cs.pop()
        cs.push("./page/API/pull-down-refresh/pull-down-refresh.wxml:view:7:4")
        var cQN = _n('view')
        _rz(z, cQN, 'class', 3, e, s, gg)
        cs.push("./page/API/pull-down-refresh/pull-down-refresh.wxml:view:8:6")
        var oRN = _n('view')
        _rz(z, oRN, 'class', 4, e, s, gg)
        cs.push("./page/API/pull-down-refresh/pull-down-refresh.wxml:view:9:8")
        var lSN = _n('view')
        _rz(z, lSN, 'class', 5, e, s, gg)
        cs.push("./page/API/pull-down-refresh/pull-down-refresh.wxml:text:10:10")
        var aTN = _n('text')
        _rz(z, aTN, 'class', 6, e, s, gg)
        var tUN = _oz(z, 7, e, s, gg)
        _(aTN, tUN)
        cs.pop()
        _(lSN, aTN)
        cs.pop()
        _(oRN, lSN)
        cs.push("./page/API/pull-down-refresh/pull-down-refresh.wxml:view:12:8")
        var eVN = _n('view')
        _rz(z, eVN, 'class', 8, e, s, gg)
        cs.push("./page/API/pull-down-refresh/pull-down-refresh.wxml:button:13:10")
        var bWN = _n('button')
        _rz(z, bWN, 'bindtap', 9, e, s, gg)
        var oXN = _oz(z, 10, e, s, gg)
        _(bWN, oXN)
        cs.pop()
        _(eVN, bWN)
        cs.pop()
        _(oRN, eVN)
        cs.pop()
        _(cQN, oRN)
        cs.pop()
        _(oLN, cQN)
        var xYN = _v()
        _(oLN, xYN)
        cs.push("./page/API/pull-down-refresh/pull-down-refresh.wxml:template:18:4")
        var oZN = _oz(z, 11, e, s, gg)
        var f1N = _gd(x[21], oZN, e_, d_)
        if (f1N) {
            var c2N = {}
            var cur_globalf = gg.f
            xYN.wxXCkey = 3
            f1N(c2N, c2N, xYN, gg)
            gg.f = cur_globalf
        } else _w(oZN, x[21], 18, 16)
        cs.pop()
        cs.pop()
        _(r, oLN)
        xKN.pop()
        xKN.pop()
        return r
    }
    e_[x[21]] = {
        f: m19,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[22]] = {}
    var m20 = function(e, s, r, gg) {
        var z = gz$gwx_21()
        var o4N = e_[x[22]].i
        _ai(o4N, x[1], e_, x[22], 1, 1)
        _ai(o4N, x[2], e_, x[22], 2, 2)
        cs.push("./page/API/request-payment/request-payment.wxml:view:4:2")
        var c5N = _n('view')
        _rz(z, c5N, 'class', 0, e, s, gg)
        var o6N = _v()
        _(c5N, o6N)
        cs.push("./page/API/request-payment/request-payment.wxml:template:5:4")
        var l7N = _oz(z, 2, e, s, gg)
        var a8N = _gd(x[22], l7N, e_, d_)
        if (a8N) {
            var t9N = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            o6N.wxXCkey = 3
            a8N(t9N, t9N, o6N, gg)
            gg.f = cur_globalf
        } else _w(l7N, x[22], 5, 16)
        cs.pop()
        cs.push("./page/API/request-payment/request-payment.wxml:view:7:4")
        var e0N = _n('view')
        _rz(z, e0N, 'class', 3, e, s, gg)
        cs.push("./page/API/request-payment/request-payment.wxml:view:8:6")
        var bAO = _n('view')
        _rz(z, bAO, 'class', 4, e, s, gg)
        cs.push("./page/API/request-payment/request-payment.wxml:text:9:8")
        var oBO = _n('text')
        _rz(z, oBO, 'class', 5, e, s, gg)
        var xCO = _oz(z, 6, e, s, gg)
        _(oBO, xCO)
        cs.pop()
        _(bAO, oBO)
        cs.pop()
        _(e0N, bAO)
        cs.pop()
        _(c5N, e0N)
        var oDO = _v()
        _(c5N, oDO)
        cs.push("./page/API/request-payment/request-payment.wxml:template:15:4")
        var fEO = _oz(z, 7, e, s, gg)
        var cFO = _gd(x[22], fEO, e_, d_)
        if (cFO) {
            var hGO = {}
            var cur_globalf = gg.f
            oDO.wxXCkey = 3
            cFO(hGO, hGO, oDO, gg)
            gg.f = cur_globalf
        } else _w(fEO, x[22], 15, 16)
        cs.pop()
        cs.pop()
        _(r, c5N)
        o4N.pop()
        o4N.pop()
        return r
    }
    e_[x[22]] = {
        f: m20,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[23]] = {}
    var m21 = function(e, s, r, gg) {
        var z = gz$gwx_22()
        var cIO = e_[x[23]].i
        _ai(cIO, x[1], e_, x[23], 1, 1)
        _ai(cIO, x[2], e_, x[23], 2, 2)
        cs.push("./page/API/request/request.wxml:view:4:2")
        var oJO = _n('view')
        _rz(z, oJO, 'class', 0, e, s, gg)
        var lKO = _v()
        _(oJO, lKO)
        cs.push("./page/API/request/request.wxml:template:5:4")
        var aLO = _oz(z, 2, e, s, gg)
        var tMO = _gd(x[23], aLO, e_, d_)
        if (tMO) {
            var eNO = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            lKO.wxXCkey = 3
            tMO(eNO, eNO, lKO, gg)
            gg.f = cur_globalf
        } else _w(aLO, x[23], 5, 16)
        cs.pop()
        cs.push("./page/API/request/request.wxml:view:7:4")
        var bOO = _n('view')
        _rz(z, bOO, 'class', 3, e, s, gg)
        cs.push("./page/API/request/request.wxml:view:8:6")
        var oPO = _n('view')
        _rz(z, oPO, 'class', 4, e, s, gg)
        cs.push("./page/API/request/request.wxml:text:9:8")
        var xQO = _n('text')
        _rz(z, xQO, 'class', 5, e, s, gg)
        var oRO = _oz(z, 6, e, s, gg)
        _(xQO, oRO)
        cs.pop()
        _(oPO, xQO)
        cs.pop()
        _(bOO, oPO)
        cs.pop()
        _(oJO, bOO)
        var fSO = _v()
        _(oJO, fSO)
        cs.push("./page/API/request/request.wxml:template:15:4")
        var cTO = _oz(z, 7, e, s, gg)
        var hUO = _gd(x[23], cTO, e_, d_)
        if (hUO) {
            var oVO = {}
            var cur_globalf = gg.f
            fSO.wxXCkey = 3
            hUO(oVO, oVO, fSO, gg)
            gg.f = cur_globalf
        } else _w(cTO, x[23], 15, 16)
        cs.pop()
        cs.pop()
        _(r, oJO)
        cIO.pop()
        cIO.pop()
        return r
    }
    e_[x[23]] = {
        f: m21,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[24]] = {}
    var m22 = function(e, s, r, gg) {
        var z = gz$gwx_23()
        var oXO = e_[x[24]].i
        _ai(oXO, x[1], e_, x[24], 1, 1)
        _ai(oXO, x[2], e_, x[24], 2, 2)
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:view:4:2")
        var lYO = _n('view')
        _rz(z, lYO, 'class', 0, e, s, gg)
        var aZO = _v()
        _(lYO, aZO)
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:template:5:4")
        var t1O = _oz(z, 2, e, s, gg)
        var e2O = _gd(x[24], t1O, e_, d_)
        if (e2O) {
            var b3O = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            aZO.wxXCkey = 3
            e2O(b3O, b3O, aZO, gg)
            gg.f = cur_globalf
        } else _w(t1O, x[24], 5, 16)
        cs.pop()
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:view:7:4")
        var o4O = _n('view')
        _rz(z, o4O, 'class', 3, e, s, gg)
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:view:8:6")
        var x5O = _n('view')
        _rz(z, x5O, 'class', 4, e, s, gg)
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:form:9:8")
        var o6O = _n('form')
        _rz(z, o6O, 'bindsubmit', 5, e, s, gg)
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:view:10:10")
        var f7O = _n('view')
        _rz(z, f7O, 'class', 6, e, s, gg)
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:view:11:12")
        var c8O = _mz(z, 'view', ['class', 7, 'style', 1], [], e, s, gg)
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:text:12:14")
        var h9O = _n('text')
        _rz(z, h9O, 'class', 9, e, s, gg)
        var o0O = _oz(z, 10, e, s, gg)
        _(h9O, o0O)
        cs.pop()
        _(c8O, h9O)
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:input:13:14")
        var cAP = _mz(z, 'input', ['class', 11, 'name', 1, 'placeholder', 2, 'type', 3], [], e, s, gg)
        cs.pop()
        _(c8O, cAP)
        cs.pop()
        _(f7O, c8O)
        cs.pop()
        _(o6O, f7O)
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:view:16:10")
        var oBP = _n('view')
        _rz(z, oBP, 'class', 15, e, s, gg)
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:button:17:12")
        var lCP = _mz(z, 'button', ['class', 16, 'formType', 1, 'type', 2], [], e, s, gg)
        var aDP = _oz(z, 19, e, s, gg)
        _(lCP, aDP)
        cs.pop()
        _(oBP, lCP)
        cs.pop()
        _(o6O, oBP)
        cs.pop()
        _(x5O, o6O)
        cs.pop()
        _(o4O, x5O)
        cs.pop()
        _(lYO, o4O)
        var tEP = _v()
        _(lYO, tEP)
        cs.push("./page/API/set-navigation-bar-title/set-navigation-bar-title.wxml:template:23:4")
        var eFP = _oz(z, 20, e, s, gg)
        var bGP = _gd(x[24], eFP, e_, d_)
        if (bGP) {
            var oHP = {}
            var cur_globalf = gg.f
            tEP.wxXCkey = 3
            bGP(oHP, oHP, tEP, gg)
            gg.f = cur_globalf
        } else _w(eFP, x[24], 23, 16)
        cs.pop()
        cs.pop()
        _(r, lYO)
        oXO.pop()
        oXO.pop()
        return r
    }
    e_[x[24]] = {
        f: m22,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[25]] = {}
    var m23 = function(e, s, r, gg) {
        var z = gz$gwx_24()
        var oJP = e_[x[25]].i
        _ai(oJP, x[1], e_, x[25], 1, 1)
        _ai(oJP, x[2], e_, x[25], 2, 2)
        cs.push("./page/API/storage/storage.wxml:view:4:2")
        var fKP = _n('view')
        _rz(z, fKP, 'class', 0, e, s, gg)
        var cLP = _v()
        _(fKP, cLP)
        cs.push("./page/API/storage/storage.wxml:template:5:4")
        var hMP = _oz(z, 2, e, s, gg)
        var oNP = _gd(x[25], hMP, e_, d_)
        if (oNP) {
            var cOP = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            cLP.wxXCkey = 3
            oNP(cOP, cOP, cLP, gg)
            gg.f = cur_globalf
        } else _w(hMP, x[25], 5, 16)
        cs.pop()
        cs.push("./page/API/storage/storage.wxml:view:7:4")
        var oPP = _n('view')
        _rz(z, oPP, 'class', 3, e, s, gg)
        cs.push("./page/API/storage/storage.wxml:view:8:6")
        var lQP = _n('view')
        _rz(z, lQP, 'class', 4, e, s, gg)
        cs.push("./page/API/storage/storage.wxml:form:9:8")
        var aRP = _mz(z, 'form', ['bindsubmit', 5, 'id', 1], [], e, s, gg)
        cs.push("./page/API/storage/storage.wxml:view:10:10")
        var tSP = _n('view')
        _rz(z, tSP, 'class', 7, e, s, gg)
        cs.push("./page/API/storage/storage.wxml:view:11:12")
        var eTP = _mz(z, 'view', ['class', 8, 'style', 1], [], e, s, gg)
        cs.push("./page/API/storage/storage.wxml:input:12:14")
        var bUP = _mz(z, 'input', ['class', 10, 'name', 1, 'placeholder', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(eTP, bUP)
        cs.push("./page/API/storage/storage.wxml:input:13:14")
        var oVP = _mz(z, 'input', ['class', 15, 'name', 1, 'placeholder', 2, 'type', 3, 'value', 4], [], e, s, gg)
        cs.pop()
        _(eTP, oVP)
        cs.pop()
        _(tSP, eTP)
        cs.pop()
        _(aRP, tSP)
        cs.push("./page/API/storage/storage.wxml:view:16:10")
        var xWP = _n('view')
        _rz(z, xWP, 'class', 20, e, s, gg)
        cs.push("./page/API/storage/storage.wxml:button:17:12")
        var oXP = _mz(z, 'button', ['class', 21, 'formType', 1, 'id', 2, 'type', 3], [], e, s, gg)
        var fYP = _oz(z, 25, e, s, gg)
        _(oXP, fYP)
        cs.pop()
        _(xWP, oXP)
        cs.push("./page/API/storage/storage.wxml:button:18:12")
        var cZP = _mz(z, 'button', ['class', 26, 'formType', 1, 'id', 2], [], e, s, gg)
        var h1P = _oz(z, 29, e, s, gg)
        _(cZP, h1P)
        cs.pop()
        _(xWP, cZP)
        cs.push("./page/API/storage/storage.wxml:button:19:12")
        var o2P = _mz(z, 'button', ['class', 30, 'formType', 1, 'id', 2], [], e, s, gg)
        var c3P = _oz(z, 33, e, s, gg)
        _(o2P, c3P)
        cs.pop()
        _(xWP, o2P)
        cs.pop()
        _(aRP, xWP)
        cs.pop()
        _(lQP, aRP)
        cs.pop()
        _(oPP, lQP)
        cs.pop()
        _(fKP, oPP)
        cs.push("./page/API/storage/storage.wxml:toast:25:4")
        var o4P = _mz(z, 'toast', ['bindchange', 34, 'hidden', 1], [], e, s, gg)
        var l5P = _oz(z, 36, e, s, gg)
        _(o4P, l5P)
        cs.pop()
        _(fKP, o4P)
        var a6P = _v()
        _(fKP, a6P)
        cs.push("./page/API/storage/storage.wxml:template:27:4")
        var t7P = _oz(z, 37, e, s, gg)
        var e8P = _gd(x[25], t7P, e_, d_)
        if (e8P) {
            var b9P = {}
            var cur_globalf = gg.f
            a6P.wxXCkey = 3
            e8P(b9P, b9P, a6P, gg)
            gg.f = cur_globalf
        } else _w(t7P, x[25], 27, 16)
        cs.pop()
        cs.pop()
        _(r, fKP)
        oJP.pop()
        oJP.pop()
        return r
    }
    e_[x[25]] = {
        f: m23,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[26]] = {}
    var m24 = function(e, s, r, gg) {
        var z = gz$gwx_25()
        var xAQ = e_[x[26]].i
        _ai(xAQ, x[1], e_, x[26], 1, 1)
        _ai(xAQ, x[2], e_, x[26], 2, 2)
        cs.push("./page/API/upload-file/upload-file.wxml:view:4:2")
        var oBQ = _n('view')
        _rz(z, oBQ, 'class', 0, e, s, gg)
        var fCQ = _v()
        _(oBQ, fCQ)
        cs.push("./page/API/upload-file/upload-file.wxml:template:5:4")
        var cDQ = _oz(z, 2, e, s, gg)
        var hEQ = _gd(x[26], cDQ, e_, d_)
        if (hEQ) {
            var oFQ = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            fCQ.wxXCkey = 3
            hEQ(oFQ, oFQ, fCQ, gg)
            gg.f = cur_globalf
        } else _w(cDQ, x[26], 5, 16)
        cs.pop()
        cs.push("./page/API/upload-file/upload-file.wxml:view:7:4")
        var cGQ = _n('view')
        _rz(z, cGQ, 'class', 3, e, s, gg)
        cs.push("./page/API/upload-file/upload-file.wxml:view:8:6")
        var oHQ = _n('view')
        _rz(z, oHQ, 'class', 4, e, s, gg)
        cs.push("./page/API/upload-file/upload-file.wxml:text:9:8")
        var lIQ = _n('text')
        _rz(z, lIQ, 'class', 5, e, s, gg)
        var aJQ = _oz(z, 6, e, s, gg)
        _(lIQ, aJQ)
        cs.pop()
        _(oHQ, lIQ)
        cs.pop()
        _(cGQ, oHQ)
        cs.pop()
        _(oBQ, cGQ)
        var tKQ = _v()
        _(oBQ, tKQ)
        cs.push("./page/API/upload-file/upload-file.wxml:template:15:4")
        var eLQ = _oz(z, 7, e, s, gg)
        var bMQ = _gd(x[26], eLQ, e_, d_)
        if (bMQ) {
            var oNQ = {}
            var cur_globalf = gg.f
            tKQ.wxXCkey = 3
            bMQ(oNQ, oNQ, tKQ, gg)
            gg.f = cur_globalf
        } else _w(eLQ, x[26], 15, 16)
        cs.pop()
        cs.pop()
        _(r, oBQ)
        xAQ.pop()
        xAQ.pop()
        return r
    }
    e_[x[26]] = {
        f: m24,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[27]] = {}
    var m25 = function(e, s, r, gg) {
        var z = gz$gwx_26()
        var oPQ = e_[x[27]].i
        _ai(oPQ, x[1], e_, x[27], 1, 1)
        _ai(oPQ, x[2], e_, x[27], 2, 2)
        cs.push("./page/API/voice/voice.wxml:view:4:2")
        var fQQ = _n('view')
        _rz(z, fQQ, 'class', 0, e, s, gg)
        var cRQ = _v()
        _(fQQ, cRQ)
        cs.push("./page/API/voice/voice.wxml:template:5:4")
        var hSQ = _oz(z, 2, e, s, gg)
        var oTQ = _gd(x[27], hSQ, e_, d_)
        if (oTQ) {
            var cUQ = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            cRQ.wxXCkey = 3
            oTQ(cUQ, cUQ, cRQ, gg)
            gg.f = cur_globalf
        } else _w(hSQ, x[27], 5, 16)
        cs.pop()
        cs.push("./page/API/voice/voice.wxml:view:7:4")
        var oVQ = _n('view')
        _rz(z, oVQ, 'class', 3, e, s, gg)
        cs.push("./page/API/voice/voice.wxml:view:8:6")
        var lWQ = _n('view')
        _rz(z, lWQ, 'class', 4, e, s, gg)
        var aXQ = _v()
        _(lWQ, aXQ)
        if (_oz(z, 5, e, s, gg)) {
            aXQ.wxVkey = 1
            cs.push("./page/API/voice/voice.wxml:block:9:8")
            cs.push("./page/API/voice/voice.wxml:view:10:10")
            var o2Q = _n('view')
            _rz(z, o2Q, 'class', 6, e, s, gg)
            cs.push("./page/API/voice/voice.wxml:text:11:12")
            var x3Q = _n('text')
            _rz(z, x3Q, 'class', 7, e, s, gg)
            var o4Q = _oz(z, 8, e, s, gg)
            _(x3Q, o4Q)
            cs.pop()
            _(o2Q, x3Q)
            cs.pop()
            _(aXQ, o2Q)
            cs.push("./page/API/voice/voice.wxml:view:13:10")
            var f5Q = _n('view')
            _rz(z, f5Q, 'class', 9, e, s, gg)
            cs.push("./page/API/voice/voice.wxml:view:14:12")
            var c6Q = _n('view')
            _rz(z, c6Q, 'class', 10, e, s, gg)
            cs.pop()
            _(f5Q, c6Q)
            cs.push("./page/API/voice/voice.wxml:view:15:12")
            var h7Q = _mz(z, 'view', ['bindtap', 11, 'class', 1], [], e, s, gg)
            cs.push("./page/API/voice/voice.wxml:image:16:14")
            var o8Q = _n('image')
            _rz(z, o8Q, 'src', 13, e, s, gg)
            cs.pop()
            _(h7Q, o8Q)
            cs.pop()
            _(f5Q, h7Q)
            cs.push("./page/API/voice/voice.wxml:view:18:12")
            var c9Q = _n('view')
            _rz(z, c9Q, 'class', 14, e, s, gg)
            cs.pop()
            _(f5Q, c9Q)
            cs.pop()
            _(aXQ, f5Q)
            cs.pop()
        }
        var tYQ = _v()
        _(lWQ, tYQ)
        if (_oz(z, 15, e, s, gg)) {
            tYQ.wxVkey = 1
            cs.push("./page/API/voice/voice.wxml:block:22:8")
            cs.push("./page/API/voice/voice.wxml:view:23:10")
            var o0Q = _n('view')
            _rz(z, o0Q, 'class', 16, e, s, gg)
            cs.push("./page/API/voice/voice.wxml:text:24:12")
            var lAR = _n('text')
            _rz(z, lAR, 'class', 17, e, s, gg)
            var aBR = _oz(z, 18, e, s, gg)
            _(lAR, aBR)
            cs.pop()
            _(o0Q, lAR)
            cs.pop()
            _(tYQ, o0Q)
            cs.push("./page/API/voice/voice.wxml:view:26:10")
            var tCR = _n('view')
            _rz(z, tCR, 'class', 19, e, s, gg)
            cs.push("./page/API/voice/voice.wxml:view:27:12")
            var eDR = _n('view')
            _rz(z, eDR, 'class', 20, e, s, gg)
            cs.pop()
            _(tCR, eDR)
            cs.push("./page/API/voice/voice.wxml:view:28:12")
            var bER = _mz(z, 'view', ['bindtap', 21, 'class', 1], [], e, s, gg)
            cs.push("./page/API/voice/voice.wxml:view:29:14")
            var oFR = _n('view')
            _rz(z, oFR, 'class', 23, e, s, gg)
            cs.pop()
            _(bER, oFR)
            cs.pop()
            _(tCR, bER)
            cs.push("./page/API/voice/voice.wxml:view:31:12")
            var xGR = _n('view')
            _rz(z, xGR, 'class', 24, e, s, gg)
            cs.pop()
            _(tCR, xGR)
            cs.pop()
            _(tYQ, tCR)
            cs.pop()
        }
        var eZQ = _v()
        _(lWQ, eZQ)
        if (_oz(z, 25, e, s, gg)) {
            eZQ.wxVkey = 1
            cs.push("./page/API/voice/voice.wxml:block:35:8")
            cs.push("./page/API/voice/voice.wxml:view:36:10")
            var oHR = _n('view')
            _rz(z, oHR, 'class', 26, e, s, gg)
            cs.push("./page/API/voice/voice.wxml:text:37:12")
            var fIR = _n('text')
            _rz(z, fIR, 'class', 27, e, s, gg)
            var cJR = _oz(z, 28, e, s, gg)
            _(fIR, cJR)
            cs.pop()
            _(oHR, fIR)
            cs.push("./page/API/voice/voice.wxml:text:38:12")
            var hKR = _n('text')
            _rz(z, hKR, 'class', 29, e, s, gg)
            var oLR = _oz(z, 30, e, s, gg)
            _(hKR, oLR)
            cs.pop()
            _(oHR, hKR)
            cs.pop()
            _(eZQ, oHR)
            cs.push("./page/API/voice/voice.wxml:view:40:10")
            var cMR = _n('view')
            _rz(z, cMR, 'class', 31, e, s, gg)
            cs.push("./page/API/voice/voice.wxml:view:41:12")
            var oNR = _n('view')
            _rz(z, oNR, 'class', 32, e, s, gg)
            cs.pop()
            _(cMR, oNR)
            cs.push("./page/API/voice/voice.wxml:view:42:12")
            var lOR = _mz(z, 'view', ['bindtap', 33, 'class', 1], [], e, s, gg)
            cs.push("./page/API/voice/voice.wxml:image:43:14")
            var aPR = _n('image')
            _rz(z, aPR, 'src', 35, e, s, gg)
            cs.pop()
            _(lOR, aPR)
            cs.pop()
            _(cMR, lOR)
            cs.push("./page/API/voice/voice.wxml:view:45:12")
            var tQR = _mz(z, 'view', ['bindtap', 36, 'class', 1], [], e, s, gg)
            cs.push("./page/API/voice/voice.wxml:image:46:14")
            var eRR = _n('image')
            _rz(z, eRR, 'src', 38, e, s, gg)
            cs.pop()
            _(tQR, eRR)
            cs.pop()
            _(cMR, tQR)
            cs.pop()
            _(eZQ, cMR)
            cs.pop()
        }
        var b1Q = _v()
        _(lWQ, b1Q)
        if (_oz(z, 39, e, s, gg)) {
            b1Q.wxVkey = 1
            cs.push("./page/API/voice/voice.wxml:block:51:8")
            cs.push("./page/API/voice/voice.wxml:view:52:10")
            var bSR = _n('view')
            _rz(z, bSR, 'class', 40, e, s, gg)
            cs.push("./page/API/voice/voice.wxml:text:53:12")
            var oTR = _n('text')
            _rz(z, oTR, 'class', 41, e, s, gg)
            var xUR = _oz(z, 42, e, s, gg)
            _(oTR, xUR)
            cs.pop()
            _(bSR, oTR)
            cs.push("./page/API/voice/voice.wxml:text:54:12")
            var oVR = _n('text')
            _rz(z, oVR, 'class', 43, e, s, gg)
            var fWR = _oz(z, 44, e, s, gg)
            _(oVR, fWR)
            cs.pop()
            _(bSR, oVR)
            cs.pop()
            _(b1Q, bSR)
            cs.push("./page/API/voice/voice.wxml:view:56:10")
            var cXR = _n('view')
            _rz(z, cXR, 'class', 45, e, s, gg)
            cs.push("./page/API/voice/voice.wxml:view:57:12")
            var hYR = _mz(z, 'view', ['bindtap', 46, 'class', 1], [], e, s, gg)
            cs.push("./page/API/voice/voice.wxml:image:58:14")
            var oZR = _n('image')
            _rz(z, oZR, 'src', 48, e, s, gg)
            cs.pop()
            _(hYR, oZR)
            cs.pop()
            _(cXR, hYR)
            cs.push("./page/API/voice/voice.wxml:view:60:12")
            var c1R = _mz(z, 'view', ['bindtap', 49, 'class', 1], [], e, s, gg)
            cs.push("./page/API/voice/voice.wxml:image:61:14")
            var o2R = _n('image')
            _rz(z, o2R, 'src', 51, e, s, gg)
            cs.pop()
            _(c1R, o2R)
            cs.pop()
            _(cXR, c1R)
            cs.push("./page/API/voice/voice.wxml:view:63:12")
            var l3R = _mz(z, 'view', ['bindtap', 52, 'class', 1], [], e, s, gg)
            cs.push("./page/API/voice/voice.wxml:image:64:14")
            var a4R = _n('image')
            _rz(z, a4R, 'src', 54, e, s, gg)
            cs.pop()
            _(l3R, a4R)
            cs.pop()
            _(cXR, l3R)
            cs.pop()
            _(b1Q, cXR)
            cs.pop()
        }
        aXQ.wxXCkey = 1
        tYQ.wxXCkey = 1
        eZQ.wxXCkey = 1
        b1Q.wxXCkey = 1
        cs.pop()
        _(oVQ, lWQ)
        cs.pop()
        _(fQQ, oVQ)
        var t5R = _v()
        _(fQQ, t5R)
        cs.push("./page/API/voice/voice.wxml:template:71:4")
        var e6R = _oz(z, 55, e, s, gg)
        var b7R = _gd(x[27], e6R, e_, d_)
        if (b7R) {
            var o8R = {}
            var cur_globalf = gg.f
            t5R.wxXCkey = 3
            b7R(o8R, o8R, t5R, gg)
            gg.f = cur_globalf
        } else _w(e6R, x[27], 71, 16)
        cs.pop()
        cs.pop()
        _(r, fQQ)
        oPQ.pop()
        oPQ.pop()
        return r
    }
    e_[x[27]] = {
        f: m25,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[28]] = {}
    var m26 = function(e, s, r, gg) {
        var z = gz$gwx_27()
        var o0R = e_[x[28]].i
        _ai(o0R, x[1], e_, x[28], 1, 1)
        _ai(o0R, x[2], e_, x[28], 2, 2)
        cs.push("./page/API/web-socket/web-socket.wxml:view:4:2")
        var fAS = _n('view')
        _rz(z, fAS, 'class', 0, e, s, gg)
        var cBS = _v()
        _(fAS, cBS)
        cs.push("./page/API/web-socket/web-socket.wxml:template:5:4")
        var hCS = _oz(z, 2, e, s, gg)
        var oDS = _gd(x[28], hCS, e_, d_)
        if (oDS) {
            var cES = _1z(z, 1, e, s, gg) || {}
            var cur_globalf = gg.f
            cBS.wxXCkey = 3
            oDS(cES, cES, cBS, gg)
            gg.f = cur_globalf
        } else _w(hCS, x[28], 5, 16)
        cs.pop()
        cs.push("./page/API/web-socket/web-socket.wxml:view:7:4")
        var oFS = _n('view')
        _rz(z, oFS, 'class', 3, e, s, gg)
        cs.push("./page/API/web-socket/web-socket.wxml:view:8:6")
        var lGS = _n('view')
        _rz(z, lGS, 'class', 4, e, s, gg)
        cs.push("./page/API/web-socket/web-socket.wxml:text:9:8")
        var aHS = _n('text')
        _rz(z, aHS, 'class', 5, e, s, gg)
        var tIS = _oz(z, 6, e, s, gg)
        _(aHS, tIS)
        cs.pop()
        _(lGS, aHS)
        cs.pop()
        _(oFS, lGS)
        cs.pop()
        _(fAS, oFS)
        var eJS = _v()
        _(fAS, eJS)
        cs.push("./page/API/web-socket/web-socket.wxml:template:15:4")
        var bKS = _oz(z, 7, e, s, gg)
        var oLS = _gd(x[28], bKS, e_, d_)
        if (oLS) {
            var xMS = {}
            var cur_globalf = gg.f
            eJS.wxXCkey = 3
            oLS(xMS, xMS, eJS, gg)
            gg.f = cur_globalf
        } else _w(bKS, x[28], 15, 16)
        cs.pop()
        cs.pop()
        _(r, fAS)
        o0R.pop()
        o0R.pop()
        return r
    }
    e_[x[28]] = {
        f: m26,
        j: [],
        i: [],
        ti: [x[1], x[2]],
        ic: []
    }
    d_[x[29]] = {}
    var m27 = function(e, s, r, gg) {
        var z = gz$gwx_28()
        cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:view:1:1")
        var fOS = _n('view')
        _rz(z, fOS, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:view:2:6")
        var cPS = _n('view')
        _rz(z, cPS, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:text:3:10")
        var hQS = _n('text')
        _rz(z, hQS, 'class', 2, e, s, gg)
        var oRS = _oz(z, 3, e, s, gg)
        _(hQS, oRS)
        cs.pop()
        _(cPS, hQS)
        cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:text:4:10")
        var cSS = _n('text')
        _rz(z, cSS, 'class', 4, e, s, gg)
        var oTS = _oz(z, 5, e, s, gg)
        _(cSS, oTS)
        cs.pop()
        _(cPS, cSS)
        cs.pop()
        _(fOS, cPS)
        cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:view:6:6")
        var lUS = _n('view')
        _rz(z, lUS, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:view:7:10")
        var aVS = _n('view')
        _rz(z, aVS, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:button:8:14")
        var tWS = _mz(z, 'button', ['bindtap', 8, 'type', 1], [], e, s, gg)
        var eXS = _oz(z, 10, e, s, gg)
        _(tWS, eXS)
        cs.pop()
        _(aVS, tWS)
        cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:action-sheet:9:14")
        var bYS = _mz(z, 'action-sheet', ['bindchange', 11, 'hidden', 1], [], e, s, gg)
        var oZS = _v()
        _(bYS, oZS)
        cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:block:10:18")
        var x1S = function(f3S, o2S, c4S, gg) {
            cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:block:10:18")
            cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:action-sheet-item:11:22")
            var o6S = _mz(z, 'action-sheet-item', ['bindtap', 14, 'class', 1], [], f3S, o2S, gg)
            var c7S = _oz(z, 16, f3S, o2S, gg)
            _(o6S, c7S)
            cs.pop()
            _(c4S, o6S)
            cs.pop()
            return c4S
        }
        _wp('./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:block:10:18: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        oZS.wxXCkey = 2
        _2z(z, 13, x1S, e, s, gg, oZS, 'item', 'index', '')
        cs.pop()
        cs.push("./page/component/component-pages/wx-action-sheet/wx-action-sheet.wxml:action-sheet-cancel:13:18")
        var o8S = _n('action-sheet-cancel')
        _rz(z, o8S, 'class', 17, e, s, gg)
        var l9S = _oz(z, 18, e, s, gg)
        _(o8S, l9S)
        cs.pop()
        _(bYS, o8S)
        cs.pop()
        _(aVS, bYS)
        cs.pop()
        _(lUS, aVS)
        cs.pop()
        _(fOS, lUS)
        cs.pop()
        _(r, fOS)
        return r
    }
    e_[x[29]] = {
        f: m27,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[30]] = {}
    var m28 = function(e, s, r, gg) {
        var z = gz$gwx_29()
        cs.push("./page/component/component-pages/wx-audio/wx-audio.wxml:view:1:1")
        var tAT = _n('view')
        _rz(z, tAT, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-audio/wx-audio.wxml:view:2:6")
        var eBT = _n('view')
        _rz(z, eBT, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-audio/wx-audio.wxml:text:3:10")
        var bCT = _n('text')
        _rz(z, bCT, 'class', 2, e, s, gg)
        var oDT = _oz(z, 3, e, s, gg)
        _(bCT, oDT)
        cs.pop()
        _(eBT, bCT)
        cs.push("./page/component/component-pages/wx-audio/wx-audio.wxml:text:4:10")
        var xET = _n('text')
        _rz(z, xET, 'class', 4, e, s, gg)
        var oFT = _oz(z, 5, e, s, gg)
        _(xET, oFT)
        cs.pop()
        _(eBT, xET)
        cs.pop()
        _(tAT, eBT)
        cs.push("./page/component/component-pages/wx-audio/wx-audio.wxml:view:6:6")
        var fGT = _n('view')
        _rz(z, fGT, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-audio/wx-audio.wxml:view:7:10")
        var cHT = _n('view')
        _rz(z, cHT, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-audio/wx-audio.wxml:audio:8:14")
        var hIT = _mz(z, 'audio', ['controls', -1, 'action', 8, 'bindplay', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(cHT, hIT)
        cs.pop()
        _(fGT, cHT)
        cs.pop()
        _(tAT, fGT)
        cs.pop()
        _(r, tAT)
        return r
    }
    e_[x[30]] = {
        f: m28,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[31]] = {}
    var m29 = function(e, s, r, gg) {
        var z = gz$gwx_30()
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:view:1:1")
        var cKT = _n('view')
        _rz(z, cKT, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:view:2:6")
        var oLT = _n('view')
        _rz(z, oLT, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:text:3:10")
        var lMT = _n('text')
        _rz(z, lMT, 'class', 2, e, s, gg)
        var aNT = _oz(z, 3, e, s, gg)
        _(lMT, aNT)
        cs.pop()
        _(oLT, lMT)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:text:4:10")
        var tOT = _n('text')
        _rz(z, tOT, 'class', 4, e, s, gg)
        var ePT = _oz(z, 5, e, s, gg)
        _(tOT, ePT)
        cs.pop()
        _(oLT, tOT)
        cs.pop()
        _(cKT, oLT)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:view:6:6")
        var bQT = _n('view')
        _rz(z, bQT, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:view:7:10")
        var oRT = _mz(z, 'view', ['class', 7, 'id', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:view:8:14")
        var xST = _n('view')
        _rz(z, xST, 'class', 9, e, s, gg)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:button:9:18")
        var oTT = _mz(z, 'button', ['bindtap', 10, 'disabled', 1, 'loading', 2, 'plain', 3, 'size', 4, 'type', 5], [], e, s, gg)
        var fUT = _oz(z, 16, e, s, gg)
        _(oTT, fUT)
        cs.pop()
        _(xST, oTT)
        cs.pop()
        _(oRT, xST)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:view:14:14")
        var cVT = _n('view')
        _rz(z, cVT, 'class', 17, e, s, gg)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:button:15:18")
        var hWT = _mz(z, 'button', ['bindtap', 18, 'disabled', 1, 'loading', 2, 'plain', 3, 'size', 4, 'type', 5], [], e, s, gg)
        var oXT = _oz(z, 24, e, s, gg)
        _(hWT, oXT)
        cs.pop()
        _(cVT, hWT)
        cs.pop()
        _(oRT, cVT)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:view:19:14")
        var cYT = _n('view')
        _rz(z, cYT, 'class', 25, e, s, gg)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:button:20:18")
        var oZT = _mz(z, 'button', ['bindtap', 26, 'disabled', 1, 'loading', 2, 'plain', 3, 'size', 4, 'type', 5], [], e, s, gg)
        var l1T = _oz(z, 32, e, s, gg)
        _(oZT, l1T)
        cs.pop()
        _(cYT, oZT)
        cs.pop()
        _(oRT, cYT)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:view:24:14")
        var a2T = _n('view')
        _rz(z, a2T, 'class', 33, e, s, gg)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:button:25:18")
        var t3T = _n('button')
        _rz(z, t3T, 'bindtap', 34, e, s, gg)
        var e4T = _oz(z, 35, e, s, gg)
        _(t3T, e4T)
        cs.pop()
        _(a2T, t3T)
        cs.pop()
        _(oRT, a2T)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:view:27:14")
        var b5T = _n('view')
        _rz(z, b5T, 'class', 36, e, s, gg)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:button:28:18")
        var o6T = _n('button')
        _rz(z, o6T, 'bindtap', 37, e, s, gg)
        var x7T = _oz(z, 38, e, s, gg)
        _(o6T, x7T)
        cs.pop()
        _(b5T, o6T)
        cs.pop()
        _(oRT, b5T)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:view:30:14")
        var o8T = _n('view')
        _rz(z, o8T, 'class', 39, e, s, gg)
        cs.push("./page/component/component-pages/wx-button/wx-button.wxml:button:31:18")
        var f9T = _n('button')
        _rz(z, f9T, 'bindtap', 40, e, s, gg)
        var c0T = _oz(z, 41, e, s, gg)
        _(f9T, c0T)
        cs.pop()
        _(o8T, f9T)
        cs.pop()
        _(oRT, o8T)
        cs.pop()
        _(bQT, oRT)
        cs.pop()
        _(cKT, bQT)
        cs.pop()
        _(r, cKT)
        return r
    }
    e_[x[31]] = {
        f: m29,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[32]] = {}
    var m30 = function(e, s, r, gg) {
        var z = gz$gwx_31()
        cs.push("./page/component/component-pages/wx-checkbox/wx-checkbox.wxml:view:1:1")
        var oBU = _n('view')
        _rz(z, oBU, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-checkbox/wx-checkbox.wxml:view:2:6")
        var cCU = _n('view')
        _rz(z, cCU, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-checkbox/wx-checkbox.wxml:text:3:10")
        var oDU = _n('text')
        _rz(z, oDU, 'class', 2, e, s, gg)
        var lEU = _oz(z, 3, e, s, gg)
        _(oDU, lEU)
        cs.pop()
        _(cCU, oDU)
        cs.push("./page/component/component-pages/wx-checkbox/wx-checkbox.wxml:text:4:10")
        var aFU = _n('text')
        _rz(z, aFU, 'class', 4, e, s, gg)
        var tGU = _oz(z, 5, e, s, gg)
        _(aFU, tGU)
        cs.pop()
        _(cCU, aFU)
        cs.pop()
        _(oBU, cCU)
        cs.push("./page/component/component-pages/wx-checkbox/wx-checkbox.wxml:view:6:6")
        var eHU = _n('view')
        _rz(z, eHU, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-checkbox/wx-checkbox.wxml:view:7:10")
        var bIU = _n('view')
        _rz(z, bIU, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-checkbox/wx-checkbox.wxml:checkbox-group:8:14")
        var oJU = _n('checkbox-group')
        _rz(z, oJU, 'bindchange', 8, e, s, gg)
        var xKU = _v()
        _(oJU, xKU)
        cs.push("./page/component/component-pages/wx-checkbox/wx-checkbox.wxml:label:9:18")
        var oLU = function(cNU, fMU, hOU, gg) {
            cs.push("./page/component/component-pages/wx-checkbox/wx-checkbox.wxml:label:9:18")
            var cQU = _n('label')
            _rz(z, cQU, 'class', 10, cNU, fMU, gg)
            cs.push("./page/component/component-pages/wx-checkbox/wx-checkbox.wxml:checkbox:10:22")
            var oRU = _mz(z, 'checkbox', ['checked', 11, 'value', 1], [], cNU, fMU, gg)
            cs.pop()
            _(cQU, oRU)
            var lSU = _oz(z, 13, cNU, fMU, gg)
            _(cQU, lSU)
            cs.pop()
            _(hOU, cQU)
            return hOU
        }
        _wp('./page/component/component-pages/wx-checkbox/wx-checkbox.wxml:label:9:18: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        xKU.wxXCkey = 2
        _2z(z, 9, oLU, e, s, gg, xKU, 'item', 'index', '')
        cs.pop()
        cs.pop()
        _(bIU, oJU)
        cs.pop()
        _(eHU, bIU)
        cs.pop()
        _(oBU, eHU)
        cs.pop()
        _(r, oBU)
        return r
    }
    e_[x[32]] = {
        f: m30,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[33]] = {}
    var m31 = function(e, s, r, gg) {
        var z = gz$gwx_32()
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:1:1")
        var tUU = _n('view')
        _rz(z, tUU, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:2:6")
        var eVU = _n('view')
        _rz(z, eVU, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:text:3:10")
        var bWU = _n('text')
        _rz(z, bWU, 'class', 2, e, s, gg)
        var oXU = _oz(z, 3, e, s, gg)
        _(bWU, oXU)
        cs.pop()
        _(eVU, bWU)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:text:4:10")
        var xYU = _n('text')
        _rz(z, xYU, 'class', 4, e, s, gg)
        var oZU = _oz(z, 5, e, s, gg)
        _(xYU, oZU)
        cs.pop()
        _(eVU, xYU)
        cs.pop()
        _(tUU, eVU)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:form:6:6")
        var f1U = _mz(z, 'form', ['catchreset', 6, 'catchsubmit', 1, 'class', 2], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:7:10")
        var c2U = _n('view')
        _rz(z, c2U, 'class', 9, e, s, gg)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:8:14")
        var h3U = _n('view')
        _rz(z, h3U, 'class', 10, e, s, gg)
        var o4U = _oz(z, 11, e, s, gg)
        _(h3U, o4U)
        cs.pop()
        _(c2U, h3U)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:switch:9:14")
        var c5U = _n('switch')
        _rz(z, c5U, 'name', 12, e, s, gg)
        cs.pop()
        _(c2U, c5U)
        cs.pop()
        _(f1U, c2U)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:11:10")
        var o6U = _n('view')
        _rz(z, o6U, 'class', 13, e, s, gg)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:12:14")
        var l7U = _n('view')
        _rz(z, l7U, 'class', 14, e, s, gg)
        var a8U = _oz(z, 15, e, s, gg)
        _(l7U, a8U)
        cs.pop()
        _(o6U, l7U)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:slider:13:14")
        var t9U = _mz(z, 'slider', ['showValue', -1, 'name', 16], [], e, s, gg)
        cs.pop()
        _(o6U, t9U)
        cs.pop()
        _(f1U, o6U)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:16:10")
        var e0U = _n('view')
        _rz(z, e0U, 'class', 17, e, s, gg)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:17:14")
        var bAV = _n('view')
        _rz(z, bAV, 'class', 18, e, s, gg)
        var oBV = _oz(z, 19, e, s, gg)
        _(bAV, oBV)
        cs.pop()
        _(e0U, bAV)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:input:18:14")
        var xCV = _mz(z, 'input', ['name', 20, 'placeholder', 1], [], e, s, gg)
        cs.pop()
        _(e0U, xCV)
        cs.pop()
        _(f1U, e0U)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:20:10")
        var oDV = _n('view')
        _rz(z, oDV, 'class', 22, e, s, gg)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:21:14")
        var fEV = _n('view')
        _rz(z, fEV, 'class', 23, e, s, gg)
        var cFV = _oz(z, 24, e, s, gg)
        _(fEV, cFV)
        cs.pop()
        _(oDV, fEV)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:radio-group:22:14")
        var hGV = _n('radio-group')
        _rz(z, hGV, 'name', 25, e, s, gg)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:label:23:18")
        var oHV = _n('label')
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:radio:23:25")
        var cIV = _n('radio')
        _rz(z, cIV, 'value', 26, e, s, gg)
        cs.pop()
        _(oHV, cIV)
        var oJV = _oz(z, 27, e, s, gg)
        _(oHV, oJV)
        cs.pop()
        _(hGV, oHV)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:label:24:18")
        var lKV = _n('label')
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:radio:24:25")
        var aLV = _n('radio')
        _rz(z, aLV, 'value', 28, e, s, gg)
        cs.pop()
        _(lKV, aLV)
        var tMV = _oz(z, 29, e, s, gg)
        _(lKV, tMV)
        cs.pop()
        _(hGV, lKV)
        cs.pop()
        _(oDV, hGV)
        cs.pop()
        _(f1U, oDV)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:27:10")
        var eNV = _n('view')
        _rz(z, eNV, 'class', 30, e, s, gg)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:28:14")
        var bOV = _n('view')
        _rz(z, bOV, 'class', 31, e, s, gg)
        var oPV = _oz(z, 32, e, s, gg)
        _(bOV, oPV)
        cs.pop()
        _(eNV, bOV)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:checkbox-group:29:14")
        var xQV = _n('checkbox-group')
        _rz(z, xQV, 'name', 33, e, s, gg)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:label:30:18")
        var oRV = _n('label')
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:checkbox:30:25")
        var fSV = _n('checkbox')
        _rz(z, fSV, 'value', 34, e, s, gg)
        cs.pop()
        _(oRV, fSV)
        var cTV = _oz(z, 35, e, s, gg)
        _(oRV, cTV)
        cs.pop()
        _(xQV, oRV)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:label:31:18")
        var hUV = _n('label')
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:checkbox:31:25")
        var oVV = _n('checkbox')
        _rz(z, oVV, 'value', 36, e, s, gg)
        cs.pop()
        _(hUV, oVV)
        var cWV = _oz(z, 37, e, s, gg)
        _(hUV, cWV)
        cs.pop()
        _(xQV, hUV)
        cs.pop()
        _(eNV, xQV)
        cs.pop()
        _(f1U, eNV)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:view:34:10")
        var oXV = _n('view')
        _rz(z, oXV, 'class', 38, e, s, gg)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:button:35:14")
        var lYV = _n('button')
        _rz(z, lYV, 'formType', 39, e, s, gg)
        var aZV = _oz(z, 40, e, s, gg)
        _(lYV, aZV)
        cs.pop()
        _(oXV, lYV)
        cs.push("./page/component/component-pages/wx-form/wx-form.wxml:button:36:14")
        var t1V = _n('button')
        _rz(z, t1V, 'formType', 41, e, s, gg)
        var e2V = _oz(z, 42, e, s, gg)
        _(t1V, e2V)
        cs.pop()
        _(oXV, t1V)
        cs.pop()
        _(f1U, oXV)
        cs.pop()
        _(tUU, f1U)
        cs.pop()
        _(r, tUU)
        return r
    }
    e_[x[33]] = {
        f: m31,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[34]] = {}
    var m32 = function(e, s, r, gg) {
        var z = gz$gwx_33()
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:view:1:1")
        var o4V = _n('view')
        _rz(z, o4V, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:view:2:6")
        var x5V = _n('view')
        _rz(z, x5V, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:text:3:10")
        var o6V = _n('text')
        _rz(z, o6V, 'class', 2, e, s, gg)
        var f7V = _oz(z, 3, e, s, gg)
        _(o6V, f7V)
        cs.pop()
        _(x5V, o6V)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:text:4:10")
        var c8V = _n('text')
        _rz(z, c8V, 'class', 4, e, s, gg)
        var h9V = _oz(z, 5, e, s, gg)
        _(c8V, h9V)
        cs.pop()
        _(x5V, c8V)
        cs.pop()
        _(o4V, x5V)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:view:6:6")
        var o0V = _n('view')
        _rz(z, o0V, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:view:7:10")
        var cAW = _n('view')
        _rz(z, cAW, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:view:8:14")
        var oBW = _n('view')
        _rz(z, oBW, 'class', 8, e, s, gg)
        var lCW = _v()
        _(oBW, lCW)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:block:9:18")
        var aDW = function(eFW, tEW, bGW, gg) {
            cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:block:9:18")
            cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:icon:10:22")
            var xIW = _mz(z, 'icon', ['size', 10, 'type', 1], [], eFW, tEW, gg)
            cs.pop()
            _(bGW, xIW)
            cs.pop()
            return bGW
        }
        _wp('./page/component/component-pages/wx-icon/wx-icon.wxml:block:9:18: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        lCW.wxXCkey = 2
        _2z(z, 9, aDW, e, s, gg, lCW, 'item', 'index', '')
        cs.pop()
        cs.pop()
        _(cAW, oBW)
        cs.pop()
        _(o0V, cAW)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:view:15:10")
        var oJW = _n('view')
        _rz(z, oJW, 'class', 12, e, s, gg)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:view:16:14")
        var fKW = _n('view')
        _rz(z, fKW, 'class', 13, e, s, gg)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:scroll-view:17:18")
        var cLW = _n('scroll-view')
        cLW.attr['scrollX'] = true
        var hMW = _v()
        _(cLW, hMW)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:block:18:22")
        var oNW = function(oPW, cOW, lQW, gg) {
            cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:block:18:22")
            cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:icon:19:26")
            var tSW = _mz(z, 'icon', ['size', 15, 'type', 1], [], oPW, cOW, gg)
            cs.pop()
            _(lQW, tSW)
            cs.pop()
            return lQW
        }
        _wp('./page/component/component-pages/wx-icon/wx-icon.wxml:block:18:22: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        hMW.wxXCkey = 2
        _2z(z, 14, oNW, e, s, gg, hMW, 'item', 'index', '')
        cs.pop()
        cs.pop()
        _(fKW, cLW)
        cs.pop()
        _(oJW, fKW)
        cs.pop()
        _(o0V, oJW)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:view:25:10")
        var eTW = _n('view')
        _rz(z, eTW, 'class', 17, e, s, gg)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:view:26:14")
        var bUW = _n('view')
        _rz(z, bUW, 'class', 18, e, s, gg)
        var oVW = _v()
        _(bUW, oVW)
        cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:block:27:18")
        var xWW = function(fYW, oXW, cZW, gg) {
            cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:block:27:18")
            cs.push("./page/component/component-pages/wx-icon/wx-icon.wxml:icon:28:22")
            var o2W = _mz(z, 'icon', ['color', 20, 'size', 1, 'type', 2], [], fYW, oXW, gg)
            cs.pop()
            _(cZW, o2W)
            cs.pop()
            return cZW
        }
        _wp('./page/component/component-pages/wx-icon/wx-icon.wxml:block:27:18: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        oVW.wxXCkey = 2
        _2z(z, 19, xWW, e, s, gg, oVW, 'item', 'index', '')
        cs.pop()
        cs.pop()
        _(eTW, bUW)
        cs.pop()
        _(o0V, eTW)
        cs.pop()
        _(o4V, o0V)
        cs.pop()
        _(r, o4V)
        return r
    }
    e_[x[34]] = {
        f: m32,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[35]] = {}
    var m33 = function(e, s, r, gg) {
        var z = gz$gwx_34()
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:1:1")
        var o4W = _n('view')
        _rz(z, o4W, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:2:6")
        var l5W = _n('view')
        _rz(z, l5W, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:text:3:10")
        var a6W = _n('text')
        _rz(z, a6W, 'class', 2, e, s, gg)
        var t7W = _oz(z, 3, e, s, gg)
        _(a6W, t7W)
        cs.pop()
        _(l5W, a6W)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:text:4:10")
        var e8W = _n('text')
        _rz(z, e8W, 'class', 4, e, s, gg)
        var b9W = _oz(z, 5, e, s, gg)
        _(e8W, b9W)
        cs.pop()
        _(l5W, e8W)
        cs.pop()
        _(o4W, l5W)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:6:6")
        var o0W = _n('view')
        _rz(z, o0W, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:7:10")
        var xAX = _n('view')
        _rz(z, xAX, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:8:14")
        var oBX = _n('view')
        _rz(z, oBX, 'class', 8, e, s, gg)
        var fCX = _oz(z, 9, e, s, gg)
        _(oBX, fCX)
        cs.pop()
        _(xAX, oBX)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:9:14")
        var cDX = _n('view')
        _rz(z, cDX, 'class', 10, e, s, gg)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:image:10:18")
        var hEX = _n('image')
        _rz(z, hEX, 'src', 11, e, s, gg)
        cs.pop()
        _(cDX, hEX)
        cs.pop()
        _(xAX, cDX)
        cs.pop()
        _(o0W, xAX)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:13:10")
        var oFX = _n('view')
        _rz(z, oFX, 'class', 12, e, s, gg)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:14:14")
        var cGX = _n('view')
        _rz(z, cGX, 'class', 13, e, s, gg)
        var oHX = _oz(z, 14, e, s, gg)
        _(cGX, oHX)
        cs.pop()
        _(oFX, cGX)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:15:14")
        var lIX = _n('view')
        _rz(z, lIX, 'class', 15, e, s, gg)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:image:16:18")
        var aJX = _mz(z, 'image', ['height', 16, 'src', 1, 'width', 2], [], e, s, gg)
        cs.pop()
        _(lIX, aJX)
        cs.pop()
        _(oFX, lIX)
        cs.pop()
        _(o0W, oFX)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:20:10")
        var tKX = _n('view')
        _rz(z, tKX, 'class', 19, e, s, gg)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:21:14")
        var eLX = _n('view')
        _rz(z, eLX, 'class', 20, e, s, gg)
        var bMX = _oz(z, 21, e, s, gg)
        _(eLX, bMX)
        cs.pop()
        _(tKX, eLX)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:view:22:14")
        var oNX = _n('view')
        _rz(z, oNX, 'class', 22, e, s, gg)
        cs.push("./page/component/component-pages/wx-image/wx-image.wxml:image:23:18")
        var xOX = _mz(z, 'image', ['binderror', 23, 'src', 1], [], e, s, gg)
        cs.pop()
        _(oNX, xOX)
        cs.pop()
        _(tKX, oNX)
        cs.pop()
        _(o0W, tKX)
        cs.pop()
        _(o4W, o0W)
        cs.pop()
        _(r, o4W)
        return r
    }
    e_[x[35]] = {
        f: m33,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[36]] = {}
    var m34 = function(e, s, r, gg) {
        var z = gz$gwx_35()
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:1:1")
        var fQX = _n('view')
        _rz(z, fQX, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:2:6")
        var cRX = _n('view')
        _rz(z, cRX, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:text:3:10")
        var hSX = _n('text')
        _rz(z, hSX, 'class', 2, e, s, gg)
        var oTX = _oz(z, 3, e, s, gg)
        _(hSX, oTX)
        cs.pop()
        _(cRX, hSX)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:text:4:10")
        var cUX = _n('text')
        _rz(z, cUX, 'class', 4, e, s, gg)
        var oVX = _oz(z, 5, e, s, gg)
        _(cUX, oVX)
        cs.pop()
        _(cRX, cUX)
        cs.pop()
        _(fQX, cRX)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:6:6")
        var lWX = _n('view')
        _rz(z, lWX, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:7:14")
        var aXX = _n('view')
        _rz(z, aXX, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:8:18")
        var tYX = _mz(z, 'input', ['autoFocus', -1, 'placeholder', 8], [], e, s, gg)
        cs.pop()
        _(aXX, tYX)
        cs.pop()
        _(lWX, aXX)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:10:14")
        var eZX = _n('view')
        _rz(z, eZX, 'class', 9, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:11:18")
        var b1X = _mz(z, 'input', ['focus', 10, 'placeholder', 1], [], e, s, gg)
        cs.pop()
        _(eZX, b1X)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:12:18")
        var o2X = _n('view')
        _rz(z, o2X, 'class', 12, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:button:13:22")
        var x3X = _n('button')
        _rz(z, x3X, 'bindtap', 13, e, s, gg)
        var o4X = _oz(z, 14, e, s, gg)
        _(x3X, o4X)
        cs.pop()
        _(o2X, x3X)
        cs.pop()
        _(eZX, o2X)
        cs.pop()
        _(lWX, eZX)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:16:14")
        var f5X = _n('view')
        _rz(z, f5X, 'class', 15, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:17:18")
        var c6X = _mz(z, 'input', ['maxlength', 16, 'placeholder', 1], [], e, s, gg)
        cs.pop()
        _(f5X, c6X)
        cs.pop()
        _(lWX, f5X)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:19:14")
        var h7X = _n('view')
        _rz(z, h7X, 'class', 18, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:20:18")
        var o8X = _n('view')
        _rz(z, o8X, 'class', 19, e, s, gg)
        var c9X = _oz(z, 20, e, s, gg)
        _(o8X, c9X)
        cs.pop()
        _(h7X, o8X)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:21:18")
        var o0X = _mz(z, 'input', ['bindinput', 21, 'placeholder', 1], [], e, s, gg)
        cs.pop()
        _(h7X, o0X)
        cs.pop()
        _(lWX, h7X)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:23:14")
        var lAY = _n('view')
        _rz(z, lAY, 'class', 23, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:24:18")
        var aBY = _mz(z, 'input', ['bindinput', 24, 'placeholder', 1], [], e, s, gg)
        cs.pop()
        _(lAY, aBY)
        cs.pop()
        _(lWX, lAY)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:26:14")
        var tCY = _n('view')
        _rz(z, tCY, 'class', 26, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:27:18")
        var eDY = _mz(z, 'input', ['bindinput', 27, 'placeholder', 1], [], e, s, gg)
        cs.pop()
        _(tCY, eDY)
        cs.pop()
        _(lWX, tCY)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:29:14")
        var bEY = _n('view')
        _rz(z, bEY, 'class', 29, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:30:18")
        var oFY = _mz(z, 'input', ['placeholder', 30, 'type', 1], [], e, s, gg)
        cs.pop()
        _(bEY, oFY)
        cs.pop()
        _(lWX, bEY)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:32:14")
        var xGY = _n('view')
        _rz(z, xGY, 'class', 32, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:33:18")
        var oHY = _mz(z, 'input', ['password', -1, 'placeholder', 33, 'type', 1], [], e, s, gg)
        cs.pop()
        _(xGY, oHY)
        cs.pop()
        _(lWX, xGY)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:35:14")
        var fIY = _n('view')
        _rz(z, fIY, 'class', 35, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:36:18")
        var cJY = _mz(z, 'input', ['password', -1, 'placeholder', 36, 'type', 1], [], e, s, gg)
        cs.pop()
        _(fIY, cJY)
        cs.pop()
        _(lWX, fIY)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:38:14")
        var hKY = _n('view')
        _rz(z, hKY, 'class', 38, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:39:18")
        var oLY = _mz(z, 'input', ['placeholder', 39, 'type', 1], [], e, s, gg)
        cs.pop()
        _(hKY, oLY)
        cs.pop()
        _(lWX, hKY)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:41:14")
        var cMY = _n('view')
        _rz(z, cMY, 'class', 41, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:42:18")
        var oNY = _mz(z, 'input', ['placeholder', 42, 'type', 1], [], e, s, gg)
        cs.pop()
        _(cMY, oNY)
        cs.pop()
        _(lWX, cMY)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:view:44:14")
        var lOY = _n('view')
        _rz(z, lOY, 'class', 44, e, s, gg)
        cs.push("./page/component/component-pages/wx-input/wx-input.wxml:input:45:18")
        var aPY = _mz(z, 'input', ['placeholder', 45, 'placeholderStyle', 1], [], e, s, gg)
        cs.pop()
        _(lOY, aPY)
        cs.pop()
        _(lWX, lOY)
        cs.pop()
        _(fQX, lWX)
        cs.pop()
        _(r, fQX)
        return r
    }
    e_[x[36]] = {
        f: m34,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[37]] = {}
    var m35 = function(e, s, r, gg) {
        var z = gz$gwx_36()
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:1:1")
        var eRY = _n('view')
        _rz(z, eRY, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:2:6")
        var bSY = _n('view')
        _rz(z, bSY, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:text:3:10")
        var oTY = _n('text')
        _rz(z, oTY, 'class', 2, e, s, gg)
        var xUY = _oz(z, 3, e, s, gg)
        _(oTY, xUY)
        cs.pop()
        _(bSY, oTY)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:text:4:10")
        var oVY = _n('text')
        _rz(z, oVY, 'class', 4, e, s, gg)
        var fWY = _oz(z, 5, e, s, gg)
        _(oVY, fWY)
        cs.pop()
        _(bSY, oVY)
        cs.pop()
        _(eRY, bSY)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:6:6")
        var cXY = _n('view')
        _rz(z, cXY, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:7:10")
        var hYY = _n('view')
        _rz(z, hYY, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:8:14")
        var oZY = _n('view')
        _rz(z, oZY, 'class', 8, e, s, gg)
        var c1Y = _oz(z, 9, e, s, gg)
        _(oZY, c1Y)
        cs.pop()
        _(hYY, oZY)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:checkbox-group:9:14")
        var o2Y = _mz(z, 'checkbox-group', ['bindchange', 10, 'class', 1], [], e, s, gg)
        var l3Y = _v()
        _(o2Y, l3Y)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:10:18")
        var a4Y = function(e6Y, t5Y, b7Y, gg) {
            cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:10:18")
            var x9Y = _n('view')
            _rz(z, x9Y, 'class', 13, e6Y, t5Y, gg)
            cs.push("./page/component/component-pages/wx-label/wx-label.wxml:label:11:22")
            var o0Y = _n('label')
            cs.push("./page/component/component-pages/wx-label/wx-label.wxml:checkbox:12:26")
            var fAZ = _mz(z, 'checkbox', ['checked', 14, 'value', 1], [], e6Y, t5Y, gg)
            cs.pop()
            _(o0Y, fAZ)
            cs.push("./page/component/component-pages/wx-label/wx-label.wxml:text:13:26")
            var cBZ = _n('text')
            _rz(z, cBZ, 'class', 16, e6Y, t5Y, gg)
            var hCZ = _oz(z, 17, e6Y, t5Y, gg)
            _(cBZ, hCZ)
            cs.pop()
            _(o0Y, cBZ)
            cs.pop()
            _(x9Y, o0Y)
            cs.pop()
            _(b7Y, x9Y)
            return b7Y
        }
        _wp('./page/component/component-pages/wx-label/wx-label.wxml:view:10:18: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        l3Y.wxXCkey = 2
        _2z(z, 12, a4Y, e, s, gg, l3Y, 'item', 'index', '')
        cs.pop()
        cs.pop()
        _(hYY, o2Y)
        cs.pop()
        _(cXY, hYY)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:19:10")
        var oDZ = _n('view')
        _rz(z, oDZ, 'class', 18, e, s, gg)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:20:14")
        var cEZ = _n('view')
        _rz(z, cEZ, 'class', 19, e, s, gg)
        var oFZ = _oz(z, 20, e, s, gg)
        _(cEZ, oFZ)
        cs.pop()
        _(oDZ, cEZ)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:radio-group:21:14")
        var lGZ = _mz(z, 'radio-group', ['bindchange', 21, 'class', 1], [], e, s, gg)
        var aHZ = _v()
        _(lGZ, aHZ)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:22:18")
        var tIZ = function(bKZ, eJZ, oLZ, gg) {
            cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:22:18")
            var oNZ = _n('view')
            _rz(z, oNZ, 'class', 24, bKZ, eJZ, gg)
            cs.push("./page/component/component-pages/wx-label/wx-label.wxml:radio:23:22")
            var fOZ = _mz(z, 'radio', ['checked', 25, 'id', 1, 'value', 2], [], bKZ, eJZ, gg)
            cs.pop()
            _(oNZ, fOZ)
            cs.push("./page/component/component-pages/wx-label/wx-label.wxml:label:24:22")
            var cPZ = _mz(z, 'label', ['class', 28, 'for', 1], [], bKZ, eJZ, gg)
            cs.push("./page/component/component-pages/wx-label/wx-label.wxml:text:24:71")
            var hQZ = _n('text')
            var oRZ = _oz(z, 30, bKZ, eJZ, gg)
            _(hQZ, oRZ)
            cs.pop()
            _(cPZ, hQZ)
            cs.pop()
            _(oNZ, cPZ)
            cs.pop()
            _(oLZ, oNZ)
            return oLZ
        }
        _wp('./page/component/component-pages/wx-label/wx-label.wxml:view:22:18: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        aHZ.wxXCkey = 2
        _2z(z, 23, tIZ, e, s, gg, aHZ, 'item', 'index', '')
        cs.pop()
        cs.pop()
        _(oDZ, lGZ)
        cs.pop()
        _(cXY, oDZ)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:30:10")
        var cSZ = _n('view')
        _rz(z, cSZ, 'class', 31, e, s, gg)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:31:14")
        var oTZ = _n('view')
        _rz(z, oTZ, 'class', 32, e, s, gg)
        var lUZ = _oz(z, 33, e, s, gg)
        _(oTZ, lUZ)
        cs.pop()
        _(cSZ, oTZ)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:label:32:14")
        var aVZ = _n('label')
        _rz(z, aVZ, 'class', 34, e, s, gg)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:text:33:18")
        var tWZ = _n('text')
        var eXZ = _oz(z, 35, e, s, gg)
        _(tWZ, eXZ)
        cs.pop()
        _(aVZ, tWZ)
        cs.pop()
        _(cSZ, aVZ)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:35:14")
        var bYZ = _n('view')
        _rz(z, bYZ, 'class', 36, e, s, gg)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:button:36:18")
        var oZZ = _mz(z, 'button', ['bindtap', 37, 'name', 1, 'type', 2], [], e, s, gg)
        var x1Z = _oz(z, 40, e, s, gg)
        _(oZZ, x1Z)
        cs.pop()
        _(bYZ, oZZ)
        cs.pop()
        _(cSZ, bYZ)
        cs.pop()
        _(cXY, cSZ)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:40:10")
        var o2Z = _n('view')
        _rz(z, o2Z, 'class', 41, e, s, gg)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:41:14")
        var f3Z = _n('view')
        _rz(z, f3Z, 'class', 42, e, s, gg)
        var c4Z = _oz(z, 43, e, s, gg)
        _(f3Z, c4Z)
        cs.pop()
        _(o2Z, f3Z)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:label:42:14")
        var h5Z = _n('label')
        _rz(z, h5Z, 'class', 44, e, s, gg)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:checkbox:43:18")
        var o6Z = _n('checkbox')
        var c7Z = _oz(z, 45, e, s, gg)
        _(o6Z, c7Z)
        cs.pop()
        _(h5Z, o6Z)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:checkbox:44:18")
        var o8Z = _n('checkbox')
        var l9Z = _oz(z, 46, e, s, gg)
        _(o8Z, l9Z)
        cs.pop()
        _(h5Z, o8Z)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:checkbox:45:18")
        var a0Z = _n('checkbox')
        var tA1 = _oz(z, 47, e, s, gg)
        _(a0Z, tA1)
        cs.pop()
        _(h5Z, a0Z)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:checkbox:46:18")
        var eB1 = _n('checkbox')
        var bC1 = _oz(z, 48, e, s, gg)
        _(eB1, bC1)
        cs.pop()
        _(h5Z, eB1)
        cs.push("./page/component/component-pages/wx-label/wx-label.wxml:view:47:18")
        var oD1 = _n('view')
        _rz(z, oD1, 'class', 49, e, s, gg)
        var xE1 = _oz(z, 50, e, s, gg)
        _(oD1, xE1)
        cs.pop()
        _(h5Z, oD1)
        cs.pop()
        _(o2Z, h5Z)
        cs.pop()
        _(cXY, o2Z)
        cs.pop()
        _(eRY, cXY)
        cs.pop()
        _(r, eRY)
        return r
    }
    e_[x[37]] = {
        f: m35,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[38]] = {}
    var m36 = function(e, s, r, gg) {
        var z = gz$gwx_37()
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:view:1:1")
        var fG1 = _n('view')
        _rz(z, fG1, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:view:2:6")
        var cH1 = _n('view')
        _rz(z, cH1, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:text:3:10")
        var hI1 = _n('text')
        _rz(z, hI1, 'class', 2, e, s, gg)
        var oJ1 = _oz(z, 3, e, s, gg)
        _(hI1, oJ1)
        cs.pop()
        _(cH1, hI1)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:text:4:10")
        var cK1 = _n('text')
        _rz(z, cK1, 'class', 4, e, s, gg)
        var oL1 = _oz(z, 5, e, s, gg)
        _(cK1, oL1)
        cs.pop()
        _(cH1, cK1)
        cs.pop()
        _(fG1, cH1)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:view:6:6")
        var lM1 = _n('view')
        _rz(z, lM1, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:view:7:10")
        var aN1 = _n('view')
        _rz(z, aN1, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:view:8:14")
        var tO1 = _n('view')
        _rz(z, tO1, 'class', 8, e, s, gg)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:mask:9:18")
        var eP1 = _mz(z, 'mask', ['bindtap', 9, 'hidden', 1, 'hoverStyle', 2], [], e, s, gg)
        cs.pop()
        _(tO1, eP1)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:button:10:18")
        var bQ1 = _mz(z, 'button', ['bindtap', 12, 'type', 1], [], e, s, gg)
        var oR1 = _oz(z, 14, e, s, gg)
        _(bQ1, oR1)
        cs.pop()
        _(tO1, bQ1)
        cs.pop()
        _(aN1, tO1)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:view:13:14")
        var xS1 = _n('view')
        _rz(z, xS1, 'class', 15, e, s, gg)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:mask:14:18")
        var oT1 = _mz(z, 'mask', ['bindtap', 16, 'hidden', 1, 'hoverStyle', 2, 'style', 3], [], e, s, gg)
        cs.pop()
        _(xS1, oT1)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:button:15:18")
        var fU1 = _mz(z, 'button', ['bindtap', 20, 'type', 1], [], e, s, gg)
        var cV1 = _oz(z, 22, e, s, gg)
        _(fU1, cV1)
        cs.pop()
        _(xS1, fU1)
        cs.pop()
        _(aN1, xS1)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:view:18:14")
        var hW1 = _n('view')
        _rz(z, hW1, 'class', 23, e, s, gg)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:mask:19:18")
        var oX1 = _mz(z, 'mask', ['bindtap', 24, 'hidden', 1, 'hoverStyle', 2, 'style', 3], [], e, s, gg)
        cs.pop()
        _(hW1, oX1)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:button:20:18")
        var cY1 = _mz(z, 'button', ['bindtap', 28, 'type', 1], [], e, s, gg)
        var oZ1 = _oz(z, 30, e, s, gg)
        _(cY1, oZ1)
        cs.pop()
        _(hW1, cY1)
        cs.pop()
        _(aN1, hW1)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:view:23:14")
        var l11 = _n('view')
        _rz(z, l11, 'class', 31, e, s, gg)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:mask:24:18")
        var a21 = _mz(z, 'mask', ['bindtap', 32, 'hidden', 1, 'hoverStyle', 2, 'style', 3], [], e, s, gg)
        cs.pop()
        _(l11, a21)
        cs.push("./page/component/component-pages/wx-mask/wx-mask.wxml:button:25:18")
        var t31 = _mz(z, 'button', ['bindtap', 36, 'type', 1], [], e, s, gg)
        var e41 = _oz(z, 38, e, s, gg)
        _(t31, e41)
        cs.pop()
        _(l11, t31)
        cs.pop()
        _(aN1, l11)
        cs.pop()
        _(lM1, aN1)
        cs.pop()
        _(fG1, lM1)
        cs.pop()
        _(r, fG1)
        return r
    }
    e_[x[38]] = {
        f: m36,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[39]] = {}
    var m37 = function(e, s, r, gg) {
        var z = gz$gwx_38()
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:view:1:1")
        var o61 = _n('view')
        _rz(z, o61, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:view:2:6")
        var x71 = _n('view')
        _rz(z, x71, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:text:3:10")
        var o81 = _n('text')
        _rz(z, o81, 'class', 2, e, s, gg)
        var f91 = _oz(z, 3, e, s, gg)
        _(o81, f91)
        cs.pop()
        _(x71, o81)
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:text:4:10")
        var c01 = _n('text')
        _rz(z, c01, 'class', 4, e, s, gg)
        var hA2 = _oz(z, 5, e, s, gg)
        _(c01, hA2)
        cs.pop()
        _(x71, c01)
        cs.pop()
        _(o61, x71)
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:view:6:6")
        var oB2 = _n('view')
        _rz(z, oB2, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:modal:7:10")
        var cC2 = _mz(z, 'modal', ['mask', -1, 'bindcancel', 7, 'bindconfirm', 1, 'cancelText', 2, 'confirmText', 3, 'hidden', 4, 'title', 5], [], e, s, gg)
        var oD2 = _oz(z, 13, e, s, gg)
        _(cC2, oD2)
        cs.pop()
        _(oB2, cC2)
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:modal:11:10")
        var lE2 = _mz(z, 'modal', ['noCancel', -1, 'bindcancel', 14, 'bindconfirm', 1, 'class', 2, 'hidden', 3], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:view:12:14")
        var aF2 = _n('view')
        var tG2 = _oz(z, 18, e, s, gg)
        _(aF2, tG2)
        cs.pop()
        _(lE2, aF2)
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:view:13:14")
        var eH2 = _n('view')
        var bI2 = _oz(z, 19, e, s, gg)
        _(eH2, bI2)
        cs.pop()
        _(lE2, eH2)
        cs.pop()
        _(oB2, lE2)
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:view:16:10")
        var oJ2 = _n('view')
        _rz(z, oJ2, 'class', 20, e, s, gg)
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:button:17:14")
        var xK2 = _mz(z, 'button', ['bindtap', 21, 'type', 1], [], e, s, gg)
        var oL2 = _oz(z, 23, e, s, gg)
        _(xK2, oL2)
        cs.pop()
        _(oJ2, xK2)
        cs.push("./page/component/component-pages/wx-modal/wx-modal.wxml:button:18:14")
        var fM2 = _mz(z, 'button', ['bindtap', 24, 'type', 1], [], e, s, gg)
        var cN2 = _oz(z, 26, e, s, gg)
        _(fM2, cN2)
        cs.pop()
        _(oJ2, fM2)
        cs.pop()
        _(oB2, oJ2)
        cs.pop()
        _(o61, oB2)
        cs.pop()
        _(r, o61)
        return r
    }
    e_[x[39]] = {
        f: m37,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[40]] = {}
    var m38 = function(e, s, r, gg) {
        var z = gz$gwx_39()
        cs.push("./page/component/component-pages/wx-navigator/navigate.wxml:view:1:1")
        var oP2 = _n('view')
        _rz(z, oP2, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-navigator/navigate.wxml:view:2:6")
        var cQ2 = _n('view')
        _rz(z, cQ2, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-navigator/navigate.wxml:text:3:10")
        var oR2 = _n('text')
        _rz(z, oR2, 'class', 2, e, s, gg)
        var lS2 = _oz(z, 3, e, s, gg)
        _(oR2, lS2)
        cs.pop()
        _(cQ2, oR2)
        cs.push("./page/component/component-pages/wx-navigator/navigate.wxml:text:4:10")
        var aT2 = _n('text')
        _rz(z, aT2, 'class', 4, e, s, gg)
        var tU2 = _oz(z, 5, e, s, gg)
        _(aT2, tU2)
        cs.pop()
        _(cQ2, aT2)
        cs.pop()
        _(oP2, cQ2)
        cs.pop()
        _(r, oP2)
        return r
    }
    e_[x[40]] = {
        f: m38,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[41]] = {}
    var m39 = function(e, s, r, gg) {
        var z = gz$gwx_40()
        cs.push("./page/component/component-pages/wx-navigator/redirect.wxml:view:1:1")
        var bW2 = _n('view')
        _rz(z, bW2, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-navigator/redirect.wxml:view:2:6")
        var oX2 = _n('view')
        _rz(z, oX2, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-navigator/redirect.wxml:text:3:10")
        var xY2 = _n('text')
        _rz(z, xY2, 'class', 2, e, s, gg)
        var oZ2 = _oz(z, 3, e, s, gg)
        _(xY2, oZ2)
        cs.pop()
        _(oX2, xY2)
        cs.push("./page/component/component-pages/wx-navigator/redirect.wxml:text:4:10")
        var f12 = _n('text')
        _rz(z, f12, 'class', 4, e, s, gg)
        var c22 = _oz(z, 5, e, s, gg)
        _(f12, c22)
        cs.pop()
        _(oX2, f12)
        cs.pop()
        _(bW2, oX2)
        cs.pop()
        _(r, bW2)
        return r
    }
    e_[x[41]] = {
        f: m39,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[42]] = {}
    var m40 = function(e, s, r, gg) {
        var z = gz$gwx_41()
        cs.push("./page/component/component-pages/wx-navigator/wx-navigator.wxml:view:1:1")
        var o42 = _n('view')
        _rz(z, o42, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-navigator/wx-navigator.wxml:view:2:6")
        var c52 = _n('view')
        _rz(z, c52, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-navigator/wx-navigator.wxml:text:3:10")
        var o62 = _n('text')
        _rz(z, o62, 'class', 2, e, s, gg)
        var l72 = _oz(z, 3, e, s, gg)
        _(o62, l72)
        cs.pop()
        _(c52, o62)
        cs.push("./page/component/component-pages/wx-navigator/wx-navigator.wxml:text:4:10")
        var a82 = _n('text')
        _rz(z, a82, 'class', 4, e, s, gg)
        var t92 = _oz(z, 5, e, s, gg)
        _(a82, t92)
        cs.pop()
        _(c52, a82)
        cs.pop()
        _(o42, c52)
        cs.push("./page/component/component-pages/wx-navigator/wx-navigator.wxml:view:6:6")
        var e02 = _n('view')
        _rz(z, e02, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-navigator/wx-navigator.wxml:view:7:10")
        var bA3 = _n('view')
        _rz(z, bA3, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-navigator/wx-navigator.wxml:navigator:8:14")
        var oB3 = _mz(z, 'navigator', ['hoverClass', 8, 'url', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-navigator/wx-navigator.wxml:button:9:18")
        var xC3 = _n('button')
        _rz(z, xC3, 'type', 10, e, s, gg)
        var oD3 = _oz(z, 11, e, s, gg)
        _(xC3, oD3)
        cs.pop()
        _(oB3, xC3)
        cs.pop()
        _(bA3, oB3)
        cs.push("./page/component/component-pages/wx-navigator/wx-navigator.wxml:navigator:11:14")
        var fE3 = _mz(z, 'navigator', ['redirect', -1, 'hoverClass', 12, 'url', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-navigator/wx-navigator.wxml:button:12:18")
        var cF3 = _n('button')
        _rz(z, cF3, 'type', 14, e, s, gg)
        var hG3 = _oz(z, 15, e, s, gg)
        _(cF3, hG3)
        cs.pop()
        _(fE3, cF3)
        cs.pop()
        _(bA3, fE3)
        cs.pop()
        _(e02, bA3)
        cs.pop()
        _(o42, e02)
        cs.pop()
        _(r, o42)
        return r
    }
    e_[x[42]] = {
        f: m40,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[43]] = {}
    var m41 = function(e, s, r, gg) {
        var z = gz$gwx_42()
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:1:1")
        var cI3 = _n('view')
        _rz(z, cI3, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:2:6")
        var oJ3 = _n('view')
        _rz(z, oJ3, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:text:3:10")
        var lK3 = _n('text')
        _rz(z, lK3, 'class', 2, e, s, gg)
        var aL3 = _oz(z, 3, e, s, gg)
        _(lK3, aL3)
        cs.pop()
        _(oJ3, lK3)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:text:4:10")
        var tM3 = _n('text')
        _rz(z, tM3, 'class', 4, e, s, gg)
        var eN3 = _oz(z, 5, e, s, gg)
        _(tM3, eN3)
        cs.pop()
        _(oJ3, tM3)
        cs.pop()
        _(cI3, oJ3)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:6:6")
        var bO3 = _n('view')
        _rz(z, bO3, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:7:10")
        var oP3 = _n('view')
        _rz(z, oP3, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:8:14")
        var xQ3 = _n('view')
        _rz(z, xQ3, 'class', 8, e, s, gg)
        var oR3 = _oz(z, 9, e, s, gg)
        _(xQ3, oR3)
        cs.pop()
        _(oP3, xQ3)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:picker:9:14")
        var fS3 = _mz(z, 'picker', ['bindchange', 10, 'range', 1, 'value', 2], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:10:18")
        var cT3 = _n('view')
        _rz(z, cT3, 'class', 13, e, s, gg)
        var hU3 = _oz(z, 14, e, s, gg)
        _(cT3, hU3)
        cs.pop()
        _(fS3, cT3)
        cs.pop()
        _(oP3, fS3)
        cs.pop()
        _(bO3, oP3)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:15:10")
        var oV3 = _n('view')
        _rz(z, oV3, 'class', 15, e, s, gg)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:16:14")
        var cW3 = _n('view')
        _rz(z, cW3, 'class', 16, e, s, gg)
        var oX3 = _oz(z, 17, e, s, gg)
        _(cW3, oX3)
        cs.pop()
        _(oV3, cW3)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:picker:17:14")
        var lY3 = _mz(z, 'picker', ['bindchange', 18, 'end', 1, 'mode', 2, 'start', 3, 'value', 4], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:18:18")
        var aZ3 = _n('view')
        _rz(z, aZ3, 'class', 23, e, s, gg)
        var t13 = _oz(z, 24, e, s, gg)
        _(aZ3, t13)
        cs.pop()
        _(lY3, aZ3)
        cs.pop()
        _(oV3, lY3)
        cs.pop()
        _(bO3, oV3)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:24:10")
        var e23 = _n('view')
        _rz(z, e23, 'class', 25, e, s, gg)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:25:14")
        var b33 = _n('view')
        _rz(z, b33, 'class', 26, e, s, gg)
        var o43 = _oz(z, 27, e, s, gg)
        _(b33, o43)
        cs.pop()
        _(e23, b33)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:picker:26:14")
        var x53 = _mz(z, 'picker', ['bindchange', 28, 'end', 1, 'mode', 2, 'start', 3, 'value', 4], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-picker/wx-picker.wxml:view:27:18")
        var o63 = _n('view')
        _rz(z, o63, 'class', 33, e, s, gg)
        var f73 = _oz(z, 34, e, s, gg)
        _(o63, f73)
        cs.pop()
        _(x53, o63)
        cs.pop()
        _(e23, x53)
        cs.pop()
        _(bO3, e23)
        cs.pop()
        _(cI3, bO3)
        cs.pop()
        _(r, cI3)
        return r
    }
    e_[x[43]] = {
        f: m41,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[44]] = {}
    var m42 = function(e, s, r, gg) {
        var z = gz$gwx_43()
        cs.push("./page/component/component-pages/wx-progress/wx-progress.wxml:view:1:1")
        var h93 = _n('view')
        _rz(z, h93, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-progress/wx-progress.wxml:view:2:6")
        var o03 = _n('view')
        _rz(z, o03, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-progress/wx-progress.wxml:text:3:10")
        var cA4 = _n('text')
        _rz(z, cA4, 'class', 2, e, s, gg)
        var oB4 = _oz(z, 3, e, s, gg)
        _(cA4, oB4)
        cs.pop()
        _(o03, cA4)
        cs.push("./page/component/component-pages/wx-progress/wx-progress.wxml:text:4:10")
        var lC4 = _n('text')
        _rz(z, lC4, 'class', 4, e, s, gg)
        var aD4 = _oz(z, 5, e, s, gg)
        _(lC4, aD4)
        cs.pop()
        _(o03, lC4)
        cs.pop()
        _(h93, o03)
        cs.push("./page/component/component-pages/wx-progress/wx-progress.wxml:view:6:6")
        var tE4 = _n('view')
        _rz(z, tE4, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-progress/wx-progress.wxml:view:7:10")
        var eF4 = _n('view')
        _rz(z, eF4, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-progress/wx-progress.wxml:progress:8:14")
        var bG4 = _mz(z, 'progress', ['showInfo', -1, 'percent', 8], [], e, s, gg)
        cs.pop()
        _(eF4, bG4)
        cs.push("./page/component/component-pages/wx-progress/wx-progress.wxml:progress:9:14")
        var oH4 = _mz(z, 'progress', ['active', -1, 'percent', 9], [], e, s, gg)
        cs.pop()
        _(eF4, oH4)
        cs.push("./page/component/component-pages/wx-progress/wx-progress.wxml:progress:10:14")
        var xI4 = _mz(z, 'progress', ['percent', 10, 'strokeWidth', 1], [], e, s, gg)
        cs.pop()
        _(eF4, xI4)
        cs.push("./page/component/component-pages/wx-progress/wx-progress.wxml:progress:11:14")
        var oJ4 = _mz(z, 'progress', ['color', 12, 'percent', 1], [], e, s, gg)
        cs.pop()
        _(eF4, oJ4)
        cs.pop()
        _(tE4, eF4)
        cs.pop()
        _(h93, tE4)
        cs.pop()
        _(r, h93)
        return r
    }
    e_[x[44]] = {
        f: m42,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[45]] = {}
    var m43 = function(e, s, r, gg) {
        var z = gz$gwx_44()
        cs.push("./page/component/component-pages/wx-radio/wx-radio.wxml:view:1:1")
        var cL4 = _n('view')
        _rz(z, cL4, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-radio/wx-radio.wxml:view:2:6")
        var hM4 = _n('view')
        _rz(z, hM4, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-radio/wx-radio.wxml:text:3:10")
        var oN4 = _n('text')
        _rz(z, oN4, 'class', 2, e, s, gg)
        var cO4 = _oz(z, 3, e, s, gg)
        _(oN4, cO4)
        cs.pop()
        _(hM4, oN4)
        cs.push("./page/component/component-pages/wx-radio/wx-radio.wxml:text:4:10")
        var oP4 = _n('text')
        _rz(z, oP4, 'class', 4, e, s, gg)
        var lQ4 = _oz(z, 5, e, s, gg)
        _(oP4, lQ4)
        cs.pop()
        _(hM4, oP4)
        cs.pop()
        _(cL4, hM4)
        cs.push("./page/component/component-pages/wx-radio/wx-radio.wxml:view:6:6")
        var aR4 = _n('view')
        _rz(z, aR4, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-radio/wx-radio.wxml:view:7:10")
        var tS4 = _n('view')
        _rz(z, tS4, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-radio/wx-radio.wxml:radio-group:8:14")
        var eT4 = _mz(z, 'radio-group', ['bindchange', 8, 'class', 1], [], e, s, gg)
        var bU4 = _v()
        _(eT4, bU4)
        cs.push("./page/component/component-pages/wx-radio/wx-radio.wxml:label:9:18")
        var oV4 = function(oX4, xW4, fY4, gg) {
            cs.push("./page/component/component-pages/wx-radio/wx-radio.wxml:label:9:18")
            var h14 = _n('label')
            _rz(z, h14, 'class', 11, oX4, xW4, gg)
            cs.push("./page/component/component-pages/wx-radio/wx-radio.wxml:radio:10:22")
            var o24 = _mz(z, 'radio', ['checked', 12, 'value', 1], [], oX4, xW4, gg)
            cs.pop()
            _(h14, o24)
            var c34 = _oz(z, 14, oX4, xW4, gg)
            _(h14, c34)
            cs.pop()
            _(fY4, h14)
            return fY4
        }
        _wp('./page/component/component-pages/wx-radio/wx-radio.wxml:label:9:18: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        bU4.wxXCkey = 2
        _2z(z, 10, oV4, e, s, gg, bU4, 'item', 'index', '')
        cs.pop()
        cs.pop()
        _(tS4, eT4)
        cs.pop()
        _(aR4, tS4)
        cs.pop()
        _(cL4, aR4)
        cs.pop()
        _(r, cL4)
        return r
    }
    e_[x[45]] = {
        f: m43,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[46]] = {}
    var m44 = function(e, s, r, gg) {
        var z = gz$gwx_45()
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:1:1")
        var l54 = _n('view')
        _rz(z, l54, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:2:6")
        var a64 = _n('view')
        _rz(z, a64, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:text:3:10")
        var t74 = _n('text')
        _rz(z, t74, 'class', 2, e, s, gg)
        var e84 = _oz(z, 3, e, s, gg)
        _(t74, e84)
        cs.pop()
        _(a64, t74)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:text:4:10")
        var b94 = _n('text')
        _rz(z, b94, 'class', 4, e, s, gg)
        var o04 = _oz(z, 5, e, s, gg)
        _(b94, o04)
        cs.pop()
        _(a64, b94)
        cs.pop()
        _(l54, a64)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:6:6")
        var xA5 = _n('view')
        _rz(z, xA5, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:7:10")
        var oB5 = _n('view')
        _rz(z, oB5, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:8:14")
        var fC5 = _n('view')
        _rz(z, fC5, 'class', 8, e, s, gg)
        var cD5 = _oz(z, 9, e, s, gg)
        _(fC5, cD5)
        cs.pop()
        _(oB5, fC5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:scroll-view:9:14")
        var hE5 = _mz(z, 'scroll-view', ['bindscroll', 10, 'bindscrolltolower', 1, 'bindscrolltoupper', 2, 'scrollIntoView', 3, 'scrollTop', 4, 'scrollY', 5, 'style', 6], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:10:18")
        var oF5 = _mz(z, 'view', ['class', 17, 'id', 1], [], e, s, gg)
        cs.pop()
        _(hE5, oF5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:11:18")
        var cG5 = _mz(z, 'view', ['class', 19, 'id', 1], [], e, s, gg)
        cs.pop()
        _(hE5, cG5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:12:18")
        var oH5 = _mz(z, 'view', ['class', 21, 'id', 1], [], e, s, gg)
        cs.pop()
        _(hE5, oH5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:13:18")
        var lI5 = _mz(z, 'view', ['class', 23, 'id', 1], [], e, s, gg)
        cs.pop()
        _(hE5, lI5)
        cs.pop()
        _(oB5, hE5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:16:14")
        var aJ5 = _n('view')
        _rz(z, aJ5, 'class', 25, e, s, gg)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:button:17:18")
        var tK5 = _mz(z, 'button', ['bindtap', 26, 'size', 1], [], e, s, gg)
        var eL5 = _oz(z, 28, e, s, gg)
        _(tK5, eL5)
        cs.pop()
        _(aJ5, tK5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:button:18:18")
        var bM5 = _mz(z, 'button', ['bindtap', 29, 'size', 1], [], e, s, gg)
        var oN5 = _oz(z, 31, e, s, gg)
        _(bM5, oN5)
        cs.pop()
        _(aJ5, bM5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:button:19:18")
        var xO5 = _mz(z, 'button', ['bindtap', 32, 'size', 1], [], e, s, gg)
        var oP5 = _oz(z, 34, e, s, gg)
        _(xO5, oP5)
        cs.pop()
        _(aJ5, xO5)
        cs.pop()
        _(oB5, aJ5)
        cs.pop()
        _(xA5, oB5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:22:10")
        var fQ5 = _n('view')
        _rz(z, fQ5, 'class', 35, e, s, gg)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:23:14")
        var cR5 = _n('view')
        _rz(z, cR5, 'class', 36, e, s, gg)
        var hS5 = _oz(z, 37, e, s, gg)
        _(cR5, hS5)
        cs.pop()
        _(fQ5, cR5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:scroll-view:24:14")
        var oT5 = _mz(z, 'scroll-view', ['class', 38, 'scrollX', 1, 'style', 2], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:25:18")
        var cU5 = _mz(z, 'view', ['class', 41, 'id', 1], [], e, s, gg)
        cs.pop()
        _(oT5, cU5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:26:18")
        var oV5 = _mz(z, 'view', ['class', 43, 'id', 1], [], e, s, gg)
        cs.pop()
        _(oT5, oV5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:27:18")
        var lW5 = _mz(z, 'view', ['class', 45, 'id', 1], [], e, s, gg)
        cs.pop()
        _(oT5, lW5)
        cs.push("./page/component/component-pages/wx-scroll-view/wx-scroll-view.wxml:view:28:18")
        var aX5 = _mz(z, 'view', ['class', 47, 'id', 1], [], e, s, gg)
        cs.pop()
        _(oT5, aX5)
        cs.pop()
        _(fQ5, oT5)
        cs.pop()
        _(xA5, fQ5)
        cs.pop()
        _(l54, xA5)
        cs.pop()
        _(r, l54)
        return r
    }
    e_[x[46]] = {
        f: m44,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[47]] = {}
    var m45 = function(e, s, r, gg) {
        var z = gz$gwx_46()
        cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:view:1:1")
        var eZ5 = _n('view')
        _rz(z, eZ5, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:view:2:6")
        var b15 = _n('view')
        _rz(z, b15, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:text:3:10")
        var o25 = _n('text')
        _rz(z, o25, 'class', 2, e, s, gg)
        var x35 = _oz(z, 3, e, s, gg)
        _(o25, x35)
        cs.pop()
        _(b15, o25)
        cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:text:4:10")
        var o45 = _n('text')
        _rz(z, o45, 'class', 4, e, s, gg)
        var f55 = _oz(z, 5, e, s, gg)
        _(o45, f55)
        cs.pop()
        _(b15, o45)
        cs.pop()
        _(eZ5, b15)
        cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:view:6:6")
        var c65 = _n('view')
        _rz(z, c65, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:view:7:10")
        var h75 = _n('view')
        _rz(z, h75, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:swiper:8:14")
        var o85 = _mz(z, 'swiper', ['bindchange', 8, 'duration', 1, 'style', 2], [], e, s, gg)
        var c95 = _v()
        _(o85, c95)
        cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:block:9:18")
        var o05 = function(aB6, lA6, tC6, gg) {
            cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:block:9:18")
            cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:swiper-item:10:22")
            var bE6 = _n('swiper-item')
            _rz(z, bE6, 'style', 12, aB6, lA6, gg)
            cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:scroll-view:11:26")
            var oF6 = _n('scroll-view')
            oF6.attr['scrollY'] = true
            cs.push("./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:text:12:30")
            var xG6 = _n('text')
            var oH6 = _oz(z, 13, aB6, lA6, gg)
            _(xG6, oH6)
            cs.pop()
            _(oF6, xG6)
            cs.pop()
            _(bE6, oF6)
            cs.pop()
            _(tC6, bE6)
            cs.pop()
            return tC6
        }
        _wp('./page/component/component-pages/wx-slide-tab/wx-slide-tab.wxml:block:9:18: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        c95.wxXCkey = 2
        _2z(z, 11, o05, e, s, gg, c95, 'item', 'index', '')
        cs.pop()
        cs.pop()
        _(h75, o85)
        cs.pop()
        _(c65, h75)
        cs.pop()
        _(eZ5, c65)
        cs.pop()
        _(r, eZ5)
        return r
    }
    e_[x[47]] = {
        f: m45,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[48]] = {}
    var m46 = function(e, s, r, gg) {
        var z = gz$gwx_47()
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:view:1:1")
        var cJ6 = _n('view')
        _rz(z, cJ6, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:view:2:6")
        var hK6 = _n('view')
        _rz(z, hK6, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:text:3:10")
        var oL6 = _n('text')
        _rz(z, oL6, 'class', 2, e, s, gg)
        var cM6 = _oz(z, 3, e, s, gg)
        _(oL6, cM6)
        cs.pop()
        _(hK6, oL6)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:text:4:10")
        var oN6 = _n('text')
        _rz(z, oN6, 'class', 4, e, s, gg)
        var lO6 = _oz(z, 5, e, s, gg)
        _(oN6, lO6)
        cs.pop()
        _(hK6, oN6)
        cs.pop()
        _(cJ6, hK6)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:view:6:6")
        var aP6 = _n('view')
        _rz(z, aP6, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:view:7:10")
        var tQ6 = _n('view')
        _rz(z, tQ6, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:text:8:14")
        var eR6 = _n('text')
        _rz(z, eR6, 'class', 8, e, s, gg)
        var bS6 = _oz(z, 9, e, s, gg)
        _(eR6, bS6)
        cs.pop()
        _(tQ6, eR6)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:view:9:14")
        var oT6 = _n('view')
        _rz(z, oT6, 'class', 10, e, s, gg)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:slider:10:18")
        var xU6 = _mz(z, 'slider', ['bindchange', 11, 'step', 1, 'value', 2], [], e, s, gg)
        cs.pop()
        _(oT6, xU6)
        cs.pop()
        _(tQ6, oT6)
        cs.pop()
        _(aP6, tQ6)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:view:14:10")
        var oV6 = _n('view')
        _rz(z, oV6, 'class', 14, e, s, gg)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:text:15:14")
        var fW6 = _n('text')
        _rz(z, fW6, 'class', 15, e, s, gg)
        var cX6 = _oz(z, 16, e, s, gg)
        _(fW6, cX6)
        cs.pop()
        _(oV6, fW6)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:view:16:14")
        var hY6 = _n('view')
        _rz(z, hY6, 'class', 17, e, s, gg)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:slider:17:18")
        var oZ6 = _mz(z, 'slider', ['showValue', -1, 'bindchange', 18, 'value', 1], [], e, s, gg)
        cs.pop()
        _(hY6, oZ6)
        cs.pop()
        _(oV6, hY6)
        cs.pop()
        _(aP6, oV6)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:view:21:10")
        var c16 = _n('view')
        _rz(z, c16, 'class', 20, e, s, gg)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:text:22:14")
        var o26 = _n('text')
        _rz(z, o26, 'class', 21, e, s, gg)
        var l36 = _oz(z, 22, e, s, gg)
        _(o26, l36)
        cs.pop()
        _(c16, o26)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:view:23:14")
        var a46 = _n('view')
        _rz(z, a46, 'class', 23, e, s, gg)
        cs.push("./page/component/component-pages/wx-slider/wx-slider.wxml:slider:24:18")
        var t56 = _mz(z, 'slider', ['showValue', -1, 'bindchange', 24, 'max', 1, 'min', 2, 'value', 3], [], e, s, gg)
        cs.pop()
        _(a46, t56)
        cs.pop()
        _(c16, a46)
        cs.pop()
        _(aP6, c16)
        cs.pop()
        _(cJ6, aP6)
        cs.pop()
        _(r, cJ6)
        return r
    }
    e_[x[48]] = {
        f: m46,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[49]] = {}
    var m47 = function(e, s, r, gg) {
        var z = gz$gwx_48()
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:view:1:1")
        var b76 = _n('view')
        _rz(z, b76, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:view:2:6")
        var o86 = _n('view')
        _rz(z, o86, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:text:3:10")
        var x96 = _n('text')
        _rz(z, x96, 'class', 2, e, s, gg)
        var o06 = _oz(z, 3, e, s, gg)
        _(x96, o06)
        cs.pop()
        _(o86, x96)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:text:4:10")
        var fA7 = _n('text')
        _rz(z, fA7, 'class', 4, e, s, gg)
        var cB7 = _oz(z, 5, e, s, gg)
        _(fA7, cB7)
        cs.pop()
        _(o86, fA7)
        cs.pop()
        _(b76, o86)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:view:6:6")
        var hC7 = _n('view')
        _rz(z, hC7, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:view:7:10")
        var oD7 = _n('view')
        _rz(z, oD7, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:swiper:8:14")
        var cE7 = _mz(z, 'swiper', ['autoplay', 8, 'duration', 1, 'indicatorDots', 2, 'interval', 3, 'vertical', 4], [], e, s, gg)
        var oF7 = _v()
        _(cE7, oF7)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:block:10:18")
        var lG7 = function(tI7, aH7, eJ7, gg) {
            cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:block:10:18")
            cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:swiper-item:11:22")
            var oL7 = _n('swiper-item')
            cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:view:12:26")
            var xM7 = _n('view')
            _rz(z, xM7, 'class', 14, tI7, aH7, gg)
            cs.pop()
            _(oL7, xM7)
            cs.pop()
            _(eJ7, oL7)
            cs.pop()
            return eJ7
        }
        _wp('./page/component/component-pages/wx-swiper/wx-swiper.wxml:block:10:18: Now you can provide attr `wx:key` for a `wx:for` to improve performance.')
        oF7.wxXCkey = 2
        _2z(z, 13, lG7, e, s, gg, oF7, 'item', 'index', '')
        cs.pop()
        cs.pop()
        _(oD7, cE7)
        cs.pop()
        _(hC7, oD7)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:view:17:10")
        var oN7 = _n('view')
        _rz(z, oN7, 'class', 15, e, s, gg)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:button:18:14")
        var fO7 = _mz(z, 'button', ['bindtap', 16, 'type', 1], [], e, s, gg)
        var cP7 = _oz(z, 18, e, s, gg)
        _(fO7, cP7)
        cs.pop()
        _(oN7, fO7)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:button:19:14")
        var hQ7 = _mz(z, 'button', ['bindtap', 19, 'type', 1], [], e, s, gg)
        var oR7 = _oz(z, 21, e, s, gg)
        _(hQ7, oR7)
        cs.pop()
        _(oN7, hQ7)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:button:20:14")
        var cS7 = _mz(z, 'button', ['bindtap', 22, 'type', 1], [], e, s, gg)
        var oT7 = _oz(z, 24, e, s, gg)
        _(cS7, oT7)
        cs.pop()
        _(oN7, cS7)
        cs.pop()
        _(hC7, oN7)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:slider:22:10")
        var lU7 = _mz(z, 'slider', ['showValue', -1, 'bindchange', 25, 'max', 1, 'min', 2, 'value', 3], [], e, s, gg)
        cs.pop()
        _(hC7, lU7)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:view:23:10")
        var aV7 = _n('view')
        _rz(z, aV7, 'class', 29, e, s, gg)
        var tW7 = _oz(z, 30, e, s, gg)
        _(aV7, tW7)
        cs.pop()
        _(hC7, aV7)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:slider:24:10")
        var eX7 = _mz(z, 'slider', ['showValue', -1, 'bindchange', 31, 'max', 1, 'min', 2, 'value', 3], [], e, s, gg)
        cs.pop()
        _(hC7, eX7)
        cs.push("./page/component/component-pages/wx-swiper/wx-swiper.wxml:view:25:10")
        var bY7 = _n('view')
        _rz(z, bY7, 'class', 35, e, s, gg)
        var oZ7 = _oz(z, 36, e, s, gg)
        _(bY7, oZ7)
        cs.pop()
        _(hC7, bY7)
        cs.pop()
        _(b76, hC7)
        cs.pop()
        _(r, b76)
        return r
    }
    e_[x[49]] = {
        f: m47,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[50]] = {}
    var m48 = function(e, s, r, gg) {
        var z = gz$gwx_49()
        cs.push("./page/component/component-pages/wx-switch/wx-switch.wxml:view:1:1")
        var o27 = _n('view')
        _rz(z, o27, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-switch/wx-switch.wxml:view:2:6")
        var f37 = _n('view')
        _rz(z, f37, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-switch/wx-switch.wxml:text:3:10")
        var c47 = _n('text')
        _rz(z, c47, 'class', 2, e, s, gg)
        var h57 = _oz(z, 3, e, s, gg)
        _(c47, h57)
        cs.pop()
        _(f37, c47)
        cs.push("./page/component/component-pages/wx-switch/wx-switch.wxml:text:4:10")
        var o67 = _n('text')
        _rz(z, o67, 'class', 4, e, s, gg)
        var c77 = _oz(z, 5, e, s, gg)
        _(o67, c77)
        cs.pop()
        _(f37, o67)
        cs.pop()
        _(o27, f37)
        cs.push("./page/component/component-pages/wx-switch/wx-switch.wxml:view:6:6")
        var o87 = _n('view')
        _rz(z, o87, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-switch/wx-switch.wxml:view:7:10")
        var l97 = _n('view')
        _rz(z, l97, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-switch/wx-switch.wxml:view:8:14")
        var a07 = _n('view')
        _rz(z, a07, 'class', 8, e, s, gg)
        cs.push("./page/component/component-pages/wx-switch/wx-switch.wxml:switch:9:18")
        var tA8 = _mz(z, 'switch', ['bindchange', 9, 'checked', 1], [], e, s, gg)
        cs.pop()
        _(a07, tA8)
        cs.pop()
        _(l97, a07)
        cs.pop()
        _(o87, l97)
        cs.pop()
        _(o27, o87)
        cs.pop()
        _(r, o27)
        return r
    }
    e_[x[50]] = {
        f: m48,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[51]] = {}
    var m49 = function(e, s, r, gg) {
        var z = gz$gwx_50()
        cs.push("./page/component/component-pages/wx-text/wx-text.wxml:view:1:1")
        var bC8 = _n('view')
        _rz(z, bC8, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-text/wx-text.wxml:view:2:6")
        var oD8 = _n('view')
        _rz(z, oD8, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-text/wx-text.wxml:text:3:10")
        var xE8 = _n('text')
        _rz(z, xE8, 'class', 2, e, s, gg)
        var oF8 = _oz(z, 3, e, s, gg)
        _(xE8, oF8)
        cs.pop()
        _(oD8, xE8)
        cs.push("./page/component/component-pages/wx-text/wx-text.wxml:text:4:10")
        var fG8 = _n('text')
        _rz(z, fG8, 'class', 4, e, s, gg)
        var cH8 = _oz(z, 5, e, s, gg)
        _(fG8, cH8)
        cs.pop()
        _(oD8, fG8)
        cs.pop()
        _(bC8, oD8)
        cs.push("./page/component/component-pages/wx-text/wx-text.wxml:view:6:6")
        var hI8 = _n('view')
        _rz(z, hI8, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-text/wx-text.wxml:view:7:10")
        var oJ8 = _n('view')
        _rz(z, oJ8, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-text/wx-text.wxml:text:8:14")
        var cK8 = _n('text')
        var oL8 = _oz(z, 8, e, s, gg)
        _(cK8, oL8)
        cs.pop()
        _(oJ8, cK8)
        cs.push("./page/component/component-pages/wx-text/wx-text.wxml:view:9:14")
        var lM8 = _n('view')
        _rz(z, lM8, 'class', 9, e, s, gg)
        cs.push("./page/component/component-pages/wx-text/wx-text.wxml:button:10:18")
        var aN8 = _n('button')
        _rz(z, aN8, 'bindtap', 10, e, s, gg)
        var tO8 = _oz(z, 11, e, s, gg)
        _(aN8, tO8)
        cs.pop()
        _(lM8, aN8)
        cs.push("./page/component/component-pages/wx-text/wx-text.wxml:button:11:18")
        var eP8 = _n('button')
        _rz(z, eP8, 'bindtap', 12, e, s, gg)
        var bQ8 = _oz(z, 13, e, s, gg)
        _(eP8, bQ8)
        cs.pop()
        _(lM8, eP8)
        cs.pop()
        _(oJ8, lM8)
        cs.pop()
        _(hI8, oJ8)
        cs.pop()
        _(bC8, hI8)
        cs.pop()
        _(r, bC8)
        return r
    }
    e_[x[51]] = {
        f: m49,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[52]] = {}
    var m50 = function(e, s, r, gg) {
        var z = gz$gwx_51()
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:view:1:1")
        var xS8 = _n('view')
        _rz(z, xS8, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:view:2:6")
        var oT8 = _n('view')
        _rz(z, oT8, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:text:3:10")
        var fU8 = _n('text')
        _rz(z, fU8, 'class', 2, e, s, gg)
        var cV8 = _oz(z, 3, e, s, gg)
        _(fU8, cV8)
        cs.pop()
        _(oT8, fU8)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:text:4:10")
        var hW8 = _n('text')
        _rz(z, hW8, 'class', 4, e, s, gg)
        var oX8 = _oz(z, 5, e, s, gg)
        _(hW8, oX8)
        cs.pop()
        _(oT8, hW8)
        cs.pop()
        _(xS8, oT8)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:view:6:6")
        var cY8 = _n('view')
        _rz(z, cY8, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:view:7:10")
        var oZ8 = _n('view')
        _rz(z, oZ8, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:view:8:14")
        var l18 = _n('view')
        _rz(z, l18, 'class', 8, e, s, gg)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:toast:9:18")
        var a28 = _mz(z, 'toast', ['bindchange', 9, 'hidden', 1], [], e, s, gg)
        var t38 = _oz(z, 11, e, s, gg)
        _(a28, t38)
        cs.pop()
        _(l18, a28)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:button:12:18")
        var e48 = _mz(z, 'button', ['bindtap', 12, 'type', 1], [], e, s, gg)
        var b58 = _oz(z, 14, e, s, gg)
        _(e48, b58)
        cs.pop()
        _(l18, e48)
        cs.pop()
        _(oZ8, l18)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:view:14:14")
        var o68 = _n('view')
        _rz(z, o68, 'class', 15, e, s, gg)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:toast:15:18")
        var x78 = _mz(z, 'toast', ['bindchange', 16, 'hidden', 1, 'icon', 2], [], e, s, gg)
        var o88 = _oz(z, 19, e, s, gg)
        _(x78, o88)
        cs.pop()
        _(o68, x78)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:button:18:18")
        var f98 = _mz(z, 'button', ['bindtap', 20, 'type', 1], [], e, s, gg)
        var c08 = _oz(z, 22, e, s, gg)
        _(f98, c08)
        cs.pop()
        _(o68, f98)
        cs.pop()
        _(oZ8, o68)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:view:20:14")
        var hA9 = _n('view')
        _rz(z, hA9, 'class', 23, e, s, gg)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:toast:21:18")
        var oB9 = _mz(z, 'toast', ['bindchange', 24, 'duration', 1, 'hidden', 2], [], e, s, gg)
        var cC9 = _oz(z, 27, e, s, gg)
        _(oB9, cC9)
        cs.pop()
        _(hA9, oB9)
        cs.push("./page/component/component-pages/wx-toast/wx-toast.wxml:button:24:18")
        var oD9 = _mz(z, 'button', ['bindtap', 28, 'type', 1], [], e, s, gg)
        var lE9 = _oz(z, 30, e, s, gg)
        _(oD9, lE9)
        cs.pop()
        _(hA9, oD9)
        cs.pop()
        _(oZ8, hA9)
        cs.pop()
        _(cY8, oZ8)
        cs.pop()
        _(xS8, cY8)
        cs.pop()
        _(r, xS8)
        return r
    }
    e_[x[52]] = {
        f: m50,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[53]] = {}
    var m51 = function(e, s, r, gg) {
        var z = gz$gwx_52()
        cs.push("./page/component/component-pages/wx-video/wx-video.wxml:view:1:1")
        var tG9 = _n('view')
        _rz(z, tG9, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-video/wx-video.wxml:view:2:6")
        var eH9 = _n('view')
        _rz(z, eH9, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-video/wx-video.wxml:text:3:10")
        var bI9 = _n('text')
        _rz(z, bI9, 'class', 2, e, s, gg)
        var oJ9 = _oz(z, 3, e, s, gg)
        _(bI9, oJ9)
        cs.pop()
        _(eH9, bI9)
        cs.push("./page/component/component-pages/wx-video/wx-video.wxml:text:4:10")
        var xK9 = _n('text')
        _rz(z, xK9, 'class', 4, e, s, gg)
        var oL9 = _oz(z, 5, e, s, gg)
        _(xK9, oL9)
        cs.pop()
        _(eH9, xK9)
        cs.pop()
        _(tG9, eH9)
        cs.push("./page/component/component-pages/wx-video/wx-video.wxml:view:6:6")
        var fM9 = _n('view')
        _rz(z, fM9, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-video/wx-video.wxml:view:7:10")
        var cN9 = _n('view')
        _rz(z, cN9, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-video/wx-video.wxml:video:8:14")
        var hO9 = _mz(z, 'video', ['binderror', 8, 'src', 1], [], e, s, gg)
        cs.pop()
        _(cN9, hO9)
        cs.pop()
        _(fM9, cN9)
        cs.push("./page/component/component-pages/wx-video/wx-video.wxml:view:10:10")
        var oP9 = _n('view')
        _rz(z, oP9, 'class', 10, e, s, gg)
        cs.push("./page/component/component-pages/wx-video/wx-video.wxml:video:11:14")
        var cQ9 = _n('video')
        _rz(z, cQ9, 'src', 11, e, s, gg)
        cs.pop()
        _(oP9, cQ9)
        cs.push("./page/component/component-pages/wx-video/wx-video.wxml:view:12:14")
        var oR9 = _n('view')
        _rz(z, oR9, 'class', 12, e, s, gg)
        cs.push("./page/component/component-pages/wx-video/wx-video.wxml:button:13:18")
        var lS9 = _n('button')
        _rz(z, lS9, 'bindtap', 13, e, s, gg)
        var aT9 = _oz(z, 14, e, s, gg)
        _(lS9, aT9)
        cs.pop()
        _(oR9, lS9)
        cs.pop()
        _(oP9, oR9)
        cs.pop()
        _(fM9, oP9)
        cs.pop()
        _(tG9, fM9)
        cs.pop()
        _(r, tG9)
        return r
    }
    e_[x[53]] = {
        f: m51,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[54]] = {}
    var m52 = function(e, s, r, gg) {
        var z = gz$gwx_53()
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:1:1")
        var eV9 = _n('view')
        _rz(z, eV9, 'class', 0, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:2:6")
        var bW9 = _n('view')
        _rz(z, bW9, 'class', 1, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:text:3:10")
        var oX9 = _n('text')
        _rz(z, oX9, 'class', 2, e, s, gg)
        var xY9 = _oz(z, 3, e, s, gg)
        _(oX9, xY9)
        cs.pop()
        _(bW9, oX9)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:text:4:10")
        var oZ9 = _n('text')
        _rz(z, oZ9, 'class', 4, e, s, gg)
        var f19 = _oz(z, 5, e, s, gg)
        _(oZ9, f19)
        cs.pop()
        _(bW9, oZ9)
        cs.pop()
        _(eV9, bW9)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:6:6")
        var c29 = _n('view')
        _rz(z, c29, 'class', 6, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:7:10")
        var h39 = _n('view')
        _rz(z, h39, 'class', 7, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:8:14")
        var o49 = _n('view')
        _rz(z, o49, 'class', 8, e, s, gg)
        var c59 = _oz(z, 9, e, s, gg)
        _(o49, c59)
        cs.pop()
        _(h39, o49)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:9:14")
        var o69 = _mz(z, 'view', ['class', 10, 'style', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:10:18")
        var l79 = _n('view')
        _rz(z, l79, 'class', 12, e, s, gg)
        cs.pop()
        _(o69, l79)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:11:18")
        var a89 = _n('view')
        _rz(z, a89, 'class', 13, e, s, gg)
        cs.pop()
        _(o69, a89)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:12:18")
        var t99 = _n('view')
        _rz(z, t99, 'class', 14, e, s, gg)
        cs.pop()
        _(o69, t99)
        cs.pop()
        _(h39, o69)
        cs.pop()
        _(c29, h39)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:15:10")
        var e09 = _n('view')
        _rz(z, e09, 'class', 15, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:16:14")
        var bA0 = _n('view')
        _rz(z, bA0, 'class', 16, e, s, gg)
        var oB0 = _oz(z, 17, e, s, gg)
        _(bA0, oB0)
        cs.pop()
        _(e09, bA0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:17:14")
        var xC0 = _mz(z, 'view', ['class', 18, 'style', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:18:18")
        var oD0 = _n('view')
        _rz(z, oD0, 'class', 20, e, s, gg)
        cs.pop()
        _(xC0, oD0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:19:18")
        var fE0 = _n('view')
        _rz(z, fE0, 'class', 21, e, s, gg)
        cs.pop()
        _(xC0, fE0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:20:18")
        var cF0 = _n('view')
        _rz(z, cF0, 'class', 22, e, s, gg)
        cs.pop()
        _(xC0, cF0)
        cs.pop()
        _(e09, xC0)
        cs.pop()
        _(c29, e09)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:23:10")
        var hG0 = _n('view')
        _rz(z, hG0, 'class', 23, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:24:14")
        var oH0 = _n('view')
        _rz(z, oH0, 'class', 24, e, s, gg)
        var cI0 = _oz(z, 25, e, s, gg)
        _(oH0, cI0)
        cs.pop()
        _(hG0, oH0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:25:14")
        var oJ0 = _mz(z, 'view', ['class', 26, 'style', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:26:18")
        var lK0 = _n('view')
        _rz(z, lK0, 'class', 28, e, s, gg)
        cs.pop()
        _(oJ0, lK0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:27:18")
        var aL0 = _n('view')
        _rz(z, aL0, 'class', 29, e, s, gg)
        cs.pop()
        _(oJ0, aL0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:28:18")
        var tM0 = _n('view')
        _rz(z, tM0, 'class', 30, e, s, gg)
        cs.pop()
        _(oJ0, tM0)
        cs.pop()
        _(hG0, oJ0)
        cs.pop()
        _(c29, hG0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:31:10")
        var eN0 = _n('view')
        _rz(z, eN0, 'class', 31, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:32:14")
        var bO0 = _n('view')
        _rz(z, bO0, 'class', 32, e, s, gg)
        var oP0 = _oz(z, 33, e, s, gg)
        _(bO0, oP0)
        cs.pop()
        _(eN0, bO0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:33:14")
        var xQ0 = _mz(z, 'view', ['class', 34, 'style', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:34:18")
        var oR0 = _n('view')
        _rz(z, oR0, 'class', 36, e, s, gg)
        cs.pop()
        _(xQ0, oR0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:35:18")
        var fS0 = _n('view')
        _rz(z, fS0, 'class', 37, e, s, gg)
        cs.pop()
        _(xQ0, fS0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:36:18")
        var cT0 = _n('view')
        _rz(z, cT0, 'class', 38, e, s, gg)
        cs.pop()
        _(xQ0, cT0)
        cs.pop()
        _(eN0, xQ0)
        cs.pop()
        _(c29, eN0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:39:10")
        var hU0 = _n('view')
        _rz(z, hU0, 'class', 39, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:40:14")
        var oV0 = _n('view')
        _rz(z, oV0, 'class', 40, e, s, gg)
        var cW0 = _oz(z, 41, e, s, gg)
        _(oV0, cW0)
        cs.pop()
        _(hU0, oV0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:41:14")
        var oX0 = _mz(z, 'view', ['class', 42, 'style', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:42:18")
        var lY0 = _n('view')
        _rz(z, lY0, 'class', 44, e, s, gg)
        cs.pop()
        _(oX0, lY0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:43:18")
        var aZ0 = _n('view')
        _rz(z, aZ0, 'class', 45, e, s, gg)
        cs.pop()
        _(oX0, aZ0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:44:18")
        var t10 = _n('view')
        _rz(z, t10, 'class', 46, e, s, gg)
        cs.pop()
        _(oX0, t10)
        cs.pop()
        _(hU0, oX0)
        cs.pop()
        _(c29, hU0)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:47:10")
        var e20 = _n('view')
        _rz(z, e20, 'class', 47, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:48:14")
        var b30 = _n('view')
        _rz(z, b30, 'class', 48, e, s, gg)
        var o40 = _oz(z, 49, e, s, gg)
        _(b30, o40)
        cs.pop()
        _(e20, b30)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:49:14")
        var x50 = _mz(z, 'view', ['class', 50, 'style', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:50:18")
        var o60 = _n('view')
        _rz(z, o60, 'class', 52, e, s, gg)
        cs.pop()
        _(x50, o60)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:51:18")
        var f70 = _n('view')
        _rz(z, f70, 'class', 53, e, s, gg)
        cs.pop()
        _(x50, f70)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:52:18")
        var c80 = _n('view')
        _rz(z, c80, 'class', 54, e, s, gg)
        cs.pop()
        _(x50, c80)
        cs.pop()
        _(e20, x50)
        cs.pop()
        _(c29, e20)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:55:10")
        var h90 = _n('view')
        _rz(z, h90, 'class', 55, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:56:14")
        var o00 = _n('view')
        _rz(z, o00, 'class', 56, e, s, gg)
        var cAAB = _oz(z, 57, e, s, gg)
        _(o00, cAAB)
        cs.pop()
        _(h90, o00)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:57:14")
        var oBAB = _mz(z, 'view', ['class', 58, 'style', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:58:18")
        var lCAB = _n('view')
        _rz(z, lCAB, 'class', 60, e, s, gg)
        cs.pop()
        _(oBAB, lCAB)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:59:18")
        var aDAB = _n('view')
        _rz(z, aDAB, 'class', 61, e, s, gg)
        cs.pop()
        _(oBAB, aDAB)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:60:18")
        var tEAB = _n('view')
        _rz(z, tEAB, 'class', 62, e, s, gg)
        cs.pop()
        _(oBAB, tEAB)
        cs.pop()
        _(h90, oBAB)
        cs.pop()
        _(c29, h90)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:63:10")
        var eFAB = _n('view')
        _rz(z, eFAB, 'class', 63, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:64:14")
        var bGAB = _n('view')
        _rz(z, bGAB, 'class', 64, e, s, gg)
        var oHAB = _oz(z, 65, e, s, gg)
        _(bGAB, oHAB)
        cs.pop()
        _(eFAB, bGAB)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:65:14")
        var xIAB = _mz(z, 'view', ['class', 66, 'style', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:66:18")
        var oJAB = _n('view')
        _rz(z, oJAB, 'class', 68, e, s, gg)
        cs.pop()
        _(xIAB, oJAB)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:67:18")
        var fKAB = _n('view')
        _rz(z, fKAB, 'class', 69, e, s, gg)
        cs.pop()
        _(xIAB, fKAB)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:68:18")
        var cLAB = _n('view')
        _rz(z, cLAB, 'class', 70, e, s, gg)
        cs.pop()
        _(xIAB, cLAB)
        cs.pop()
        _(eFAB, xIAB)
        cs.pop()
        _(c29, eFAB)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:71:10")
        var hMAB = _n('view')
        _rz(z, hMAB, 'class', 71, e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:72:14")
        var oNAB = _n('view')
        _rz(z, oNAB, 'class', 72, e, s, gg)
        var cOAB = _oz(z, 73, e, s, gg)
        _(oNAB, cOAB)
        cs.pop()
        _(hMAB, oNAB)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:73:14")
        var oPAB = _mz(z, 'view', ['class', 74, 'style', 1], [], e, s, gg)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:74:18")
        var lQAB = _n('view')
        _rz(z, lQAB, 'class', 76, e, s, gg)
        cs.pop()
        _(oPAB, lQAB)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:75:18")
        var aRAB = _n('view')
        _rz(z, aRAB, 'class', 77, e, s, gg)
        cs.pop()
        _(oPAB, aRAB)
        cs.push("./page/component/component-pages/wx-view/wx-view.wxml:view:76:18")
        var tSAB = _n('view')
        _rz(z, tSAB, 'class', 78, e, s, gg)
        cs.pop()
        _(oPAB, tSAB)
        cs.pop()
        _(hMAB, oPAB)
        cs.pop()
        _(c29, hMAB)
        cs.pop()
        _(eV9, c29)
        cs.pop()
        _(r, eV9)
        return r
    }
    e_[x[54]] = {
        f: m52,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[55]] = {}
    var m53 = function(e, s, r, gg) {
        var z = gz$gwx_54()
        cs.push("./page/component/index.wxml:view:1:1")
        var bUAB = _n('view')
        _rz(z, bUAB, 'class', 0, e, s, gg)
        cs.push("./page/component/index.wxml:view:2:6")
        var oVAB = _n('view')
        _rz(z, oVAB, 'class', 1, e, s, gg)
        cs.push("./page/component/index.wxml:view:3:10")
        var xWAB = _n('view')
        _rz(z, xWAB, 'class', 2, e, s, gg)
        var oXAB = _oz(z, 3, e, s, gg)
        _(xWAB, oXAB)
        cs.pop()
        _(oVAB, xWAB)
        cs.push("./page/component/index.wxml:view:4:10")
        var fYAB = _n('view')
        _rz(z, fYAB, 'class', 4, e, s, gg)
        var cZAB = _oz(z, 5, e, s, gg)
        _(fYAB, cZAB)
        cs.pop()
        _(oVAB, fYAB)
        cs.pop()
        _(bUAB, oVAB)
        cs.push("./page/component/index.wxml:view:7:6")
        var h1AB = _n('view')
        _rz(z, h1AB, 'class', 6, e, s, gg)
        cs.push("./page/component/index.wxml:view:8:10")
        var o2AB = _n('view')
        _rz(z, o2AB, 'class', 7, e, s, gg)
        cs.push("./page/component/index.wxml:view:9:14")
        var c3AB = _n('view')
        _rz(z, c3AB, 'class', 8, e, s, gg)
        cs.push("./page/component/index.wxml:view:10:18")
        var o4AB = _mz(z, 'view', ['bindtap', 9, 'class', 1, 'id', 2], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:11:22")
        var l5AB = _n('text')
        _rz(z, l5AB, 'class', 12, e, s, gg)
        var a6AB = _oz(z, 13, e, s, gg)
        _(l5AB, a6AB)
        cs.pop()
        _(o4AB, l5AB)
        cs.push("./page/component/index.wxml:image:12:22")
        var t7AB = _mz(z, 'image', ['backgroundSize', 14, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(o4AB, t7AB)
        cs.pop()
        _(c3AB, o4AB)
        cs.push("./page/component/index.wxml:view:14:18")
        var e8AB = _n('view')
        _rz(z, e8AB, 'class', 17, e, s, gg)
        cs.push("./page/component/index.wxml:navigator:15:22")
        var b9AB = _mz(z, 'navigator', ['class', 18, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:16:26")
        var o0AB = _n('text')
        _rz(z, o0AB, 'class', 20, e, s, gg)
        var xABB = _oz(z, 21, e, s, gg)
        _(o0AB, xABB)
        cs.pop()
        _(b9AB, o0AB)
        cs.push("./page/component/index.wxml:image:17:26")
        var oBBB = _mz(z, 'image', ['backgroundSize', 22, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(b9AB, oBBB)
        cs.push("./page/component/index.wxml:view:18:26")
        var fCBB = _n('view')
        _rz(z, fCBB, 'class', 25, e, s, gg)
        cs.pop()
        _(b9AB, fCBB)
        cs.pop()
        _(e8AB, b9AB)
        cs.push("./page/component/index.wxml:navigator:20:22")
        var cDBB = _mz(z, 'navigator', ['class', 26, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:21:26")
        var hEBB = _n('text')
        _rz(z, hEBB, 'class', 28, e, s, gg)
        var oFBB = _oz(z, 29, e, s, gg)
        _(hEBB, oFBB)
        cs.pop()
        _(cDBB, hEBB)
        cs.push("./page/component/index.wxml:image:22:26")
        var cGBB = _mz(z, 'image', ['backgroundSize', 30, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(cDBB, cGBB)
        cs.push("./page/component/index.wxml:view:23:26")
        var oHBB = _n('view')
        _rz(z, oHBB, 'class', 33, e, s, gg)
        cs.pop()
        _(cDBB, oHBB)
        cs.pop()
        _(e8AB, cDBB)
        cs.push("./page/component/index.wxml:navigator:25:22")
        var lIBB = _mz(z, 'navigator', ['class', 34, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:26:26")
        var aJBB = _n('text')
        _rz(z, aJBB, 'class', 36, e, s, gg)
        var tKBB = _oz(z, 37, e, s, gg)
        _(aJBB, tKBB)
        cs.pop()
        _(lIBB, aJBB)
        cs.push("./page/component/index.wxml:image:27:26")
        var eLBB = _mz(z, 'image', ['backgroundSize', 38, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(lIBB, eLBB)
        cs.pop()
        _(e8AB, lIBB)
        cs.pop()
        _(c3AB, e8AB)
        cs.pop()
        _(o2AB, c3AB)
        cs.push("./page/component/index.wxml:view:31:14")
        var bMBB = _n('view')
        _rz(z, bMBB, 'class', 41, e, s, gg)
        cs.push("./page/component/index.wxml:view:32:18")
        var oNBB = _mz(z, 'view', ['bindtap', 42, 'class', 1, 'id', 2], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:33:22")
        var xOBB = _n('text')
        _rz(z, xOBB, 'class', 45, e, s, gg)
        var oPBB = _oz(z, 46, e, s, gg)
        _(xOBB, oPBB)
        cs.pop()
        _(oNBB, xOBB)
        cs.push("./page/component/index.wxml:image:34:22")
        var fQBB = _mz(z, 'image', ['backgroundSize', 47, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(oNBB, fQBB)
        cs.pop()
        _(bMBB, oNBB)
        cs.push("./page/component/index.wxml:view:36:18")
        var cRBB = _n('view')
        _rz(z, cRBB, 'class', 50, e, s, gg)
        cs.push("./page/component/index.wxml:navigator:37:22")
        var hSBB = _mz(z, 'navigator', ['class', 51, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:38:26")
        var oTBB = _n('text')
        _rz(z, oTBB, 'class', 53, e, s, gg)
        var cUBB = _oz(z, 54, e, s, gg)
        _(oTBB, cUBB)
        cs.pop()
        _(hSBB, oTBB)
        cs.push("./page/component/index.wxml:image:39:26")
        var oVBB = _mz(z, 'image', ['backgroundSize', 55, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(hSBB, oVBB)
        cs.push("./page/component/index.wxml:view:40:26")
        var lWBB = _n('view')
        _rz(z, lWBB, 'class', 58, e, s, gg)
        cs.pop()
        _(hSBB, lWBB)
        cs.pop()
        _(cRBB, hSBB)
        cs.push("./page/component/index.wxml:navigator:42:22")
        var aXBB = _mz(z, 'navigator', ['class', 59, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:43:26")
        var tYBB = _n('text')
        _rz(z, tYBB, 'class', 61, e, s, gg)
        var eZBB = _oz(z, 62, e, s, gg)
        _(tYBB, eZBB)
        cs.pop()
        _(aXBB, tYBB)
        cs.push("./page/component/index.wxml:image:44:26")
        var b1BB = _mz(z, 'image', ['backgroundSize', 63, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(aXBB, b1BB)
        cs.push("./page/component/index.wxml:view:45:26")
        var o2BB = _n('view')
        _rz(z, o2BB, 'class', 66, e, s, gg)
        cs.pop()
        _(aXBB, o2BB)
        cs.pop()
        _(cRBB, aXBB)
        cs.push("./page/component/index.wxml:navigator:47:22")
        var x3BB = _mz(z, 'navigator', ['class', 67, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:48:26")
        var o4BB = _n('text')
        _rz(z, o4BB, 'class', 69, e, s, gg)
        var f5BB = _oz(z, 70, e, s, gg)
        _(o4BB, f5BB)
        cs.pop()
        _(x3BB, o4BB)
        cs.push("./page/component/index.wxml:image:49:26")
        var c6BB = _mz(z, 'image', ['backgroundSize', 71, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(x3BB, c6BB)
        cs.push("./page/component/index.wxml:view:50:26")
        var h7BB = _n('view')
        _rz(z, h7BB, 'class', 74, e, s, gg)
        cs.pop()
        _(x3BB, h7BB)
        cs.pop()
        _(cRBB, x3BB)
        cs.push("./page/component/index.wxml:navigator:52:22")
        var o8BB = _mz(z, 'navigator', ['class', 75, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:53:26")
        var c9BB = _n('text')
        _rz(z, c9BB, 'class', 77, e, s, gg)
        var o0BB = _oz(z, 78, e, s, gg)
        _(c9BB, o0BB)
        cs.pop()
        _(o8BB, c9BB)
        cs.push("./page/component/index.wxml:image:54:26")
        var lACB = _mz(z, 'image', ['backgroundSize', 79, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(o8BB, lACB)
        cs.push("./page/component/index.wxml:view:55:26")
        var aBCB = _n('view')
        _rz(z, aBCB, 'class', 82, e, s, gg)
        cs.pop()
        _(o8BB, aBCB)
        cs.pop()
        _(cRBB, o8BB)
        cs.push("./page/component/index.wxml:navigator:57:22")
        var tCCB = _mz(z, 'navigator', ['class', 83, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:58:26")
        var eDCB = _n('text')
        _rz(z, eDCB, 'class', 85, e, s, gg)
        var bECB = _oz(z, 86, e, s, gg)
        _(eDCB, bECB)
        cs.pop()
        _(tCCB, eDCB)
        cs.push("./page/component/index.wxml:image:59:26")
        var oFCB = _mz(z, 'image', ['backgroundSize', 87, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(tCCB, oFCB)
        cs.pop()
        _(cRBB, tCCB)
        cs.pop()
        _(bMBB, cRBB)
        cs.pop()
        _(o2AB, bMBB)
        cs.push("./page/component/index.wxml:view:63:14")
        var xGCB = _n('view')
        _rz(z, xGCB, 'class', 90, e, s, gg)
        cs.push("./page/component/index.wxml:view:64:18")
        var oHCB = _mz(z, 'view', ['bindtap', 91, 'class', 1, 'id', 2], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:65:22")
        var fICB = _n('text')
        _rz(z, fICB, 'class', 94, e, s, gg)
        var cJCB = _oz(z, 95, e, s, gg)
        _(fICB, cJCB)
        cs.pop()
        _(oHCB, fICB)
        cs.push("./page/component/index.wxml:image:66:22")
        var hKCB = _mz(z, 'image', ['backgroundSize', 96, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(oHCB, hKCB)
        cs.pop()
        _(xGCB, oHCB)
        cs.push("./page/component/index.wxml:view:68:18")
        var oLCB = _n('view')
        _rz(z, oLCB, 'class', 99, e, s, gg)
        cs.push("./page/component/index.wxml:navigator:69:22")
        var cMCB = _mz(z, 'navigator', ['class', 100, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:70:26")
        var oNCB = _n('text')
        _rz(z, oNCB, 'class', 102, e, s, gg)
        var lOCB = _oz(z, 103, e, s, gg)
        _(oNCB, lOCB)
        cs.pop()
        _(cMCB, oNCB)
        cs.push("./page/component/index.wxml:image:71:26")
        var aPCB = _mz(z, 'image', ['backgroundSize', 104, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(cMCB, aPCB)
        cs.push("./page/component/index.wxml:view:72:26")
        var tQCB = _n('view')
        _rz(z, tQCB, 'class', 107, e, s, gg)
        cs.pop()
        _(cMCB, tQCB)
        cs.pop()
        _(oLCB, cMCB)
        cs.push("./page/component/index.wxml:navigator:74:22")
        var eRCB = _mz(z, 'navigator', ['class', 108, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:75:26")
        var bSCB = _n('text')
        _rz(z, bSCB, 'class', 110, e, s, gg)
        var oTCB = _oz(z, 111, e, s, gg)
        _(bSCB, oTCB)
        cs.pop()
        _(eRCB, bSCB)
        cs.push("./page/component/index.wxml:image:76:26")
        var xUCB = _mz(z, 'image', ['backgroundSize', 112, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(eRCB, xUCB)
        cs.push("./page/component/index.wxml:view:77:26")
        var oVCB = _n('view')
        _rz(z, oVCB, 'class', 115, e, s, gg)
        cs.pop()
        _(eRCB, oVCB)
        cs.pop()
        _(oLCB, eRCB)
        cs.push("./page/component/index.wxml:navigator:79:22")
        var fWCB = _mz(z, 'navigator', ['class', 116, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:80:26")
        var cXCB = _n('text')
        _rz(z, cXCB, 'class', 118, e, s, gg)
        var hYCB = _oz(z, 119, e, s, gg)
        _(cXCB, hYCB)
        cs.pop()
        _(fWCB, cXCB)
        cs.push("./page/component/index.wxml:image:81:26")
        var oZCB = _mz(z, 'image', ['backgroundSize', 120, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(fWCB, oZCB)
        cs.push("./page/component/index.wxml:view:82:26")
        var c1CB = _n('view')
        _rz(z, c1CB, 'class', 123, e, s, gg)
        cs.pop()
        _(fWCB, c1CB)
        cs.pop()
        _(oLCB, fWCB)
        cs.push("./page/component/index.wxml:navigator:84:22")
        var o2CB = _mz(z, 'navigator', ['class', 124, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:85:26")
        var l3CB = _n('text')
        _rz(z, l3CB, 'class', 126, e, s, gg)
        var a4CB = _oz(z, 127, e, s, gg)
        _(l3CB, a4CB)
        cs.pop()
        _(o2CB, l3CB)
        cs.push("./page/component/index.wxml:image:86:26")
        var t5CB = _mz(z, 'image', ['backgroundSize', 128, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(o2CB, t5CB)
        cs.push("./page/component/index.wxml:view:87:26")
        var e6CB = _n('view')
        _rz(z, e6CB, 'class', 131, e, s, gg)
        cs.pop()
        _(o2CB, e6CB)
        cs.pop()
        _(oLCB, o2CB)
        cs.push("./page/component/index.wxml:navigator:89:22")
        var b7CB = _mz(z, 'navigator', ['class', 132, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:90:26")
        var o8CB = _n('text')
        _rz(z, o8CB, 'class', 134, e, s, gg)
        var x9CB = _oz(z, 135, e, s, gg)
        _(o8CB, x9CB)
        cs.pop()
        _(b7CB, o8CB)
        cs.push("./page/component/index.wxml:image:91:26")
        var o0CB = _mz(z, 'image', ['backgroundSize', 136, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(b7CB, o0CB)
        cs.push("./page/component/index.wxml:view:92:26")
        var fADB = _n('view')
        _rz(z, fADB, 'class', 139, e, s, gg)
        cs.pop()
        _(b7CB, fADB)
        cs.pop()
        _(oLCB, b7CB)
        cs.push("./page/component/index.wxml:navigator:94:22")
        var cBDB = _mz(z, 'navigator', ['class', 140, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:95:26")
        var hCDB = _n('text')
        _rz(z, hCDB, 'class', 142, e, s, gg)
        var oDDB = _oz(z, 143, e, s, gg)
        _(hCDB, oDDB)
        cs.pop()
        _(cBDB, hCDB)
        cs.push("./page/component/index.wxml:image:96:26")
        var cEDB = _mz(z, 'image', ['backgroundSize', 144, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(cBDB, cEDB)
        cs.push("./page/component/index.wxml:view:97:26")
        var oFDB = _n('view')
        _rz(z, oFDB, 'class', 147, e, s, gg)
        cs.pop()
        _(cBDB, oFDB)
        cs.pop()
        _(oLCB, cBDB)
        cs.push("./page/component/index.wxml:navigator:99:22")
        var lGDB = _mz(z, 'navigator', ['class', 148, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:100:26")
        var aHDB = _n('text')
        _rz(z, aHDB, 'class', 150, e, s, gg)
        var tIDB = _oz(z, 151, e, s, gg)
        _(aHDB, tIDB)
        cs.pop()
        _(lGDB, aHDB)
        cs.push("./page/component/index.wxml:image:101:26")
        var eJDB = _mz(z, 'image', ['backgroundSize', 152, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(lGDB, eJDB)
        cs.push("./page/component/index.wxml:view:102:26")
        var bKDB = _n('view')
        _rz(z, bKDB, 'class', 155, e, s, gg)
        cs.pop()
        _(lGDB, bKDB)
        cs.pop()
        _(oLCB, lGDB)
        cs.push("./page/component/index.wxml:navigator:104:22")
        var oLDB = _mz(z, 'navigator', ['class', 156, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:105:26")
        var xMDB = _n('text')
        _rz(z, xMDB, 'class', 158, e, s, gg)
        var oNDB = _oz(z, 159, e, s, gg)
        _(xMDB, oNDB)
        cs.pop()
        _(oLDB, xMDB)
        cs.push("./page/component/index.wxml:image:106:26")
        var fODB = _mz(z, 'image', ['backgroundSize', 160, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(oLDB, fODB)
        cs.push("./page/component/index.wxml:view:107:26")
        var cPDB = _n('view')
        _rz(z, cPDB, 'class', 163, e, s, gg)
        cs.pop()
        _(oLDB, cPDB)
        cs.pop()
        _(oLCB, oLDB)
        cs.push("./page/component/index.wxml:navigator:109:22")
        var hQDB = _mz(z, 'navigator', ['class', 164, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:110:26")
        var oRDB = _n('text')
        _rz(z, oRDB, 'class', 166, e, s, gg)
        var cSDB = _oz(z, 167, e, s, gg)
        _(oRDB, cSDB)
        cs.pop()
        _(hQDB, oRDB)
        cs.push("./page/component/index.wxml:image:111:26")
        var oTDB = _mz(z, 'image', ['backgroundSize', 168, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(hQDB, oTDB)
        cs.pop()
        _(oLCB, hQDB)
        cs.pop()
        _(xGCB, oLCB)
        cs.pop()
        _(o2AB, xGCB)
        cs.push("./page/component/index.wxml:view:115:14")
        var lUDB = _n('view')
        _rz(z, lUDB, 'class', 171, e, s, gg)
        cs.push("./page/component/index.wxml:view:116:18")
        var aVDB = _mz(z, 'view', ['bindtap', 172, 'class', 1, 'id', 2], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:117:22")
        var tWDB = _n('text')
        _rz(z, tWDB, 'class', 175, e, s, gg)
        var eXDB = _oz(z, 176, e, s, gg)
        _(tWDB, eXDB)
        cs.pop()
        _(aVDB, tWDB)
        cs.push("./page/component/index.wxml:image:118:22")
        var bYDB = _mz(z, 'image', ['backgroundSize', 177, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(aVDB, bYDB)
        cs.pop()
        _(lUDB, aVDB)
        cs.push("./page/component/index.wxml:view:120:18")
        var oZDB = _n('view')
        _rz(z, oZDB, 'class', 180, e, s, gg)
        cs.push("./page/component/index.wxml:navigator:121:22")
        var x1DB = _mz(z, 'navigator', ['class', 181, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:122:26")
        var o2DB = _n('text')
        _rz(z, o2DB, 'class', 183, e, s, gg)
        var f3DB = _oz(z, 184, e, s, gg)
        _(o2DB, f3DB)
        cs.pop()
        _(x1DB, o2DB)
        cs.push("./page/component/index.wxml:image:123:26")
        var c4DB = _mz(z, 'image', ['backgroundSize', 185, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(x1DB, c4DB)
        cs.push("./page/component/index.wxml:view:124:26")
        var h5DB = _n('view')
        _rz(z, h5DB, 'class', 188, e, s, gg)
        cs.pop()
        _(x1DB, h5DB)
        cs.pop()
        _(oZDB, x1DB)
        cs.push("./page/component/index.wxml:navigator:126:22")
        var o6DB = _mz(z, 'navigator', ['class', 189, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:127:26")
        var c7DB = _n('text')
        _rz(z, c7DB, 'class', 191, e, s, gg)
        var o8DB = _oz(z, 192, e, s, gg)
        _(c7DB, o8DB)
        cs.pop()
        _(o6DB, c7DB)
        cs.push("./page/component/index.wxml:image:128:26")
        var l9DB = _mz(z, 'image', ['backgroundSize', 193, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(o6DB, l9DB)
        cs.pop()
        _(oZDB, o6DB)
        cs.pop()
        _(lUDB, oZDB)
        cs.pop()
        _(o2AB, lUDB)
        cs.push("./page/component/index.wxml:view:133:14")
        var a0DB = _n('view')
        _rz(z, a0DB, 'class', 196, e, s, gg)
        cs.push("./page/component/index.wxml:view:134:18")
        var tAEB = _mz(z, 'view', ['bindtap', 197, 'class', 1, 'id', 2], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:135:22")
        var eBEB = _n('text')
        _rz(z, eBEB, 'class', 200, e, s, gg)
        var bCEB = _oz(z, 201, e, s, gg)
        _(eBEB, bCEB)
        cs.pop()
        _(tAEB, eBEB)
        cs.push("./page/component/index.wxml:image:136:22")
        var oDEB = _mz(z, 'image', ['backgroundSize', 202, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(tAEB, oDEB)
        cs.pop()
        _(a0DB, tAEB)
        cs.push("./page/component/index.wxml:view:138:18")
        var xEEB = _n('view')
        _rz(z, xEEB, 'class', 205, e, s, gg)
        cs.push("./page/component/index.wxml:navigator:139:22")
        var oFEB = _mz(z, 'navigator', ['class', 206, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:140:26")
        var fGEB = _n('text')
        _rz(z, fGEB, 'class', 208, e, s, gg)
        var cHEB = _oz(z, 209, e, s, gg)
        _(fGEB, cHEB)
        cs.pop()
        _(oFEB, fGEB)
        cs.push("./page/component/index.wxml:image:141:26")
        var hIEB = _mz(z, 'image', ['backgroundSize', 210, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(oFEB, hIEB)
        cs.pop()
        _(xEEB, oFEB)
        cs.pop()
        _(a0DB, xEEB)
        cs.pop()
        _(o2AB, a0DB)
        cs.push("./page/component/index.wxml:view:145:14")
        var oJEB = _n('view')
        _rz(z, oJEB, 'class', 213, e, s, gg)
        cs.push("./page/component/index.wxml:view:146:18")
        var cKEB = _mz(z, 'view', ['bindtap', 214, 'class', 1, 'id', 2], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:147:22")
        var oLEB = _n('text')
        _rz(z, oLEB, 'class', 217, e, s, gg)
        var lMEB = _oz(z, 218, e, s, gg)
        _(oLEB, lMEB)
        cs.pop()
        _(cKEB, oLEB)
        cs.push("./page/component/index.wxml:image:148:22")
        var aNEB = _mz(z, 'image', ['backgroundSize', 219, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(cKEB, aNEB)
        cs.pop()
        _(oJEB, cKEB)
        cs.push("./page/component/index.wxml:view:150:18")
        var tOEB = _n('view')
        _rz(z, tOEB, 'class', 222, e, s, gg)
        cs.push("./page/component/index.wxml:view:151:22")
        var ePEB = _n('view')
        _rz(z, ePEB, 'class', 223, e, s, gg)
        cs.push("./page/component/index.wxml:navigator:152:26")
        var bQEB = _mz(z, 'navigator', ['class', 224, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:153:30")
        var oREB = _n('text')
        _rz(z, oREB, 'class', 226, e, s, gg)
        var xSEB = _oz(z, 227, e, s, gg)
        _(oREB, xSEB)
        cs.pop()
        _(bQEB, oREB)
        cs.push("./page/component/index.wxml:image:154:30")
        var oTEB = _mz(z, 'image', ['backgroundSize', 228, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(bQEB, oTEB)
        cs.push("./page/component/index.wxml:view:155:30")
        var fUEB = _n('view')
        _rz(z, fUEB, 'class', 231, e, s, gg)
        cs.pop()
        _(bQEB, fUEB)
        cs.pop()
        _(ePEB, bQEB)
        cs.push("./page/component/index.wxml:navigator:157:26")
        var cVEB = _mz(z, 'navigator', ['class', 232, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:158:30")
        var hWEB = _n('text')
        _rz(z, hWEB, 'class', 234, e, s, gg)
        var oXEB = _oz(z, 235, e, s, gg)
        _(hWEB, oXEB)
        cs.pop()
        _(cVEB, hWEB)
        cs.push("./page/component/index.wxml:image:159:30")
        var cYEB = _mz(z, 'image', ['backgroundSize', 236, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(cVEB, cYEB)
        cs.push("./page/component/index.wxml:view:160:30")
        var oZEB = _n('view')
        _rz(z, oZEB, 'class', 239, e, s, gg)
        cs.pop()
        _(cVEB, oZEB)
        cs.pop()
        _(ePEB, cVEB)
        cs.push("./page/component/index.wxml:navigator:162:26")
        var l1EB = _mz(z, 'navigator', ['class', 240, 'url', 1], [], e, s, gg)
        cs.push("./page/component/index.wxml:text:163:30")
        var a2EB = _n('text')
        _rz(z, a2EB, 'class', 242, e, s, gg)
        var t3EB = _oz(z, 243, e, s, gg)
        _(a2EB, t3EB)
        cs.pop()
        _(l1EB, a2EB)
        cs.push("./page/component/index.wxml:image:164:30")
        var e4EB = _mz(z, 'image', ['backgroundSize', 244, 'class', 1, 'src', 2], [], e, s, gg)
        cs.pop()
        _(l1EB, e4EB)
        cs.pop()
        _(ePEB, l1EB)
        cs.pop()
        _(tOEB, ePEB)
        cs.pop()
        _(oJEB, tOEB)
        cs.pop()
        _(o2AB, oJEB)
        cs.pop()
        _(h1AB, o2AB)
        cs.pop()
        _(bUAB, h1AB)
        cs.pop()
        _(r, bUAB)
        return r
    }
    e_[x[55]] = {
        f: m53,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[56]] = {}
    var m54 = function(e, s, r, gg) {
        var z = gz$gwx_55()
        cs.push("./page/component/navigation-pages/controller/controller.wxml:view:1:1")
        var o6EB = _n('view')
        _rz(z, o6EB, 'class', 0, e, s, gg)
        cs.push("./page/component/navigation-pages/controller/controller.wxml:button:2:6")
        var x7EB = _mz(z, 'button', ['bindtap', 1, 'class', 1, 'type', 2], [], e, s, gg)
        var o8EB = _oz(z, 4, e, s, gg)
        _(x7EB, o8EB)
        cs.pop()
        _(o6EB, x7EB)
        cs.push("./page/component/navigation-pages/controller/controller.wxml:button:3:6")
        var f9EB = _mz(z, 'button', ['bindtap', 5, 'class', 1, 'type', 2], [], e, s, gg)
        var c0EB = _oz(z, 8, e, s, gg)
        _(f9EB, c0EB)
        cs.pop()
        _(o6EB, f9EB)
        cs.push("./page/component/navigation-pages/controller/controller.wxml:button:4:6")
        var hAFB = _mz(z, 'button', ['bindtap', 9, 'class', 1, 'type', 2], [], e, s, gg)
        var oBFB = _oz(z, 12, e, s, gg)
        _(hAFB, oBFB)
        cs.pop()
        _(o6EB, hAFB)
        cs.push("./page/component/navigation-pages/controller/controller.wxml:button:5:6")
        var cCFB = _mz(z, 'button', ['bindtap', 13, 'class', 1, 'type', 2], [], e, s, gg)
        var oDFB = _oz(z, 16, e, s, gg)
        _(cCFB, oDFB)
        cs.pop()
        _(o6EB, cCFB)
        cs.pop()
        _(r, o6EB)
        return r
    }
    e_[x[56]] = {
        f: m54,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[57]] = {}
    var m55 = function(e, s, r, gg) {
        var z = gz$gwx_56()
        cs.push("./page/component/navigation-pages/form/form.wxml:view:1:1")
        var aFFB = _n('view')
        _rz(z, aFFB, 'class', 0, e, s, gg)
        cs.push("./page/component/navigation-pages/form/form.wxml:button:2:6")
        var tGFB = _mz(z, 'button', ['bindtap', 1, 'class', 1, 'type', 2], [], e, s, gg)
        var eHFB = _oz(z, 4, e, s, gg)
        _(tGFB, eHFB)
        cs.pop()
        _(aFFB, tGFB)
        cs.push("./page/component/navigation-pages/form/form.wxml:button:3:6")
        var bIFB = _mz(z, 'button', ['bindtap', 5, 'class', 1, 'type', 2], [], e, s, gg)
        var oJFB = _oz(z, 8, e, s, gg)
        _(bIFB, oJFB)
        cs.pop()
        _(aFFB, bIFB)
        cs.push("./page/component/navigation-pages/form/form.wxml:button:4:6")
        var xKFB = _mz(z, 'button', ['bindtap', 9, 'class', 1, 'type', 2], [], e, s, gg)
        var oLFB = _oz(z, 12, e, s, gg)
        _(xKFB, oLFB)
        cs.pop()
        _(aFFB, xKFB)
        cs.push("./page/component/navigation-pages/form/form.wxml:button:5:6")
        var fMFB = _mz(z, 'button', ['bindtap', 13, 'class', 1, 'type', 2], [], e, s, gg)
        var cNFB = _oz(z, 16, e, s, gg)
        _(fMFB, cNFB)
        cs.pop()
        _(aFFB, fMFB)
        cs.push("./page/component/navigation-pages/form/form.wxml:button:6:6")
        var hOFB = _mz(z, 'button', ['bindtap', 17, 'class', 1, 'type', 2], [], e, s, gg)
        var oPFB = _oz(z, 20, e, s, gg)
        _(hOFB, oPFB)
        cs.pop()
        _(aFFB, hOFB)
        cs.push("./page/component/navigation-pages/form/form.wxml:button:7:6")
        var cQFB = _mz(z, 'button', ['bindtap', 21, 'class', 1, 'type', 2], [], e, s, gg)
        var oRFB = _oz(z, 24, e, s, gg)
        _(cQFB, oRFB)
        cs.pop()
        _(aFFB, cQFB)
        cs.push("./page/component/navigation-pages/form/form.wxml:button:8:6")
        var lSFB = _mz(z, 'button', ['bindtap', 25, 'class', 1, 'type', 2], [], e, s, gg)
        var aTFB = _oz(z, 28, e, s, gg)
        _(lSFB, aTFB)
        cs.pop()
        _(aFFB, lSFB)
        cs.push("./page/component/navigation-pages/form/form.wxml:button:9:6")
        var tUFB = _mz(z, 'button', ['bindtap', 29, 'class', 1, 'type', 2], [], e, s, gg)
        var eVFB = _oz(z, 32, e, s, gg)
        _(tUFB, eVFB)
        cs.pop()
        _(aFFB, tUFB)
        cs.pop()
        _(r, aFFB)
        return r
    }
    e_[x[57]] = {
        f: m55,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[58]] = {}
    var m56 = function(e, s, r, gg) {
        var z = gz$gwx_57()
        cs.push("./page/component/navigation-pages/media/media.wxml:view:1:1")
        var oXFB = _n('view')
        _rz(z, oXFB, 'class', 0, e, s, gg)
        cs.push("./page/component/navigation-pages/media/media.wxml:button:2:6")
        var xYFB = _mz(z, 'button', ['bindtap', 1, 'class', 1, 'type', 2], [], e, s, gg)
        var oZFB = _oz(z, 4, e, s, gg)
        _(xYFB, oZFB)
        cs.pop()
        _(oXFB, xYFB)
        cs.push("./page/component/navigation-pages/media/media.wxml:button:3:6")
        var f1FB = _mz(z, 'button', ['bindtap', 5, 'class', 1, 'type', 2], [], e, s, gg)
        var c2FB = _oz(z, 8, e, s, gg)
        _(f1FB, c2FB)
        cs.pop()
        _(oXFB, f1FB)
        cs.push("./page/component/navigation-pages/media/media.wxml:button:4:6")
        var h3FB = _mz(z, 'button', ['bindtap', 9, 'class', 1, 'type', 2], [], e, s, gg)
        var o4FB = _oz(z, 12, e, s, gg)
        _(h3FB, o4FB)
        cs.pop()
        _(oXFB, h3FB)
        cs.pop()
        _(r, oXFB)
        return r
    }
    e_[x[58]] = {
        f: m56,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    d_[x[59]] = {}
    var m57 = function(e, s, r, gg) {
        var z = gz$gwx_58()
        cs.push("./page/component/navigation-pages/view/view.wxml:view:1:1")
        var o6FB = _n('view')
        _rz(z, o6FB, 'class', 0, e, s, gg)
        cs.push("./page/component/navigation-pages/view/view.wxml:button:2:6")
        var l7FB = _mz(z, 'button', ['bindtap', 1, 'class', 1, 'type', 2], [], e, s, gg)
        var a8FB = _oz(z, 4, e, s, gg)
        _(l7FB, a8FB)
        cs.pop()
        _(o6FB, l7FB)
        cs.push("./page/component/navigation-pages/view/view.wxml:button:3:6")
        var t9FB = _mz(z, 'button', ['bindtap', 5, 'class', 1, 'type', 2], [], e, s, gg)
        var e0FB = _oz(z, 8, e, s, gg)
        _(t9FB, e0FB)
        cs.pop()
        _(o6FB, t9FB)
        cs.push("./page/component/navigation-pages/view/view.wxml:button:4:6")
        var bAGB = _mz(z, 'button', ['bindtap', 9, 'class', 1, 'type', 2], [], e, s, gg)
        var oBGB = _oz(z, 12, e, s, gg)
        _(bAGB, oBGB)
        cs.pop()
        _(o6FB, bAGB)
        cs.push("./page/component/navigation-pages/view/view.wxml:button:5:6")
        var xCGB = _mz(z, 'button', ['bindtap', 13, 'class', 1, 'type', 2], [], e, s, gg)
        var oDGB = _oz(z, 16, e, s, gg)
        _(xCGB, oDGB)
        cs.pop()
        _(o6FB, xCGB)
        cs.push("./page/component/navigation-pages/view/view.wxml:button:6:6")
        var fEGB = _mz(z, 'button', ['bindtap', 17, 'class', 1, 'type', 2], [], e, s, gg)
        var cFGB = _oz(z, 20, e, s, gg)
        _(fEGB, cFGB)
        cs.pop()
        _(o6FB, fEGB)
        cs.push("./page/component/navigation-pages/view/view.wxml:button:7:6")
        var hGGB = _mz(z, 'button', ['bindtap', 21, 'class', 1, 'type', 2], [], e, s, gg)
        var oHGB = _oz(z, 24, e, s, gg)
        _(hGGB, oHGB)
        cs.pop()
        _(o6FB, hGGB)
        cs.push("./page/component/navigation-pages/view/view.wxml:button:8:6")
        var cIGB = _mz(z, 'button', ['bindtap', 25, 'class', 1, 'type', 2], [], e, s, gg)
        var oJGB = _oz(z, 28, e, s, gg)
        _(cIGB, oJGB)
        cs.pop()
        _(o6FB, cIGB)
        cs.push("./page/component/navigation-pages/view/view.wxml:button:9:6")
        var lKGB = _mz(z, 'button', ['bindtap', 29, 'class', 1, 'type', 2], [], e, s, gg)
        var aLGB = _oz(z, 32, e, s, gg)
        _(lKGB, aLGB)
        cs.pop()
        _(o6FB, lKGB)
        cs.pop()
        _(r, o6FB)
        return r
    }
    e_[x[59]] = {
        f: m57,
        j: [],
        i: [],
        ti: [],
        ic: []
    }
    if (path && e_[path]) {
        window.__wxml_comp_version__ = 0.02
        return function(env, dd, global) {
            $gwxc = 0;
            var root = {
                "tag": "wx-page"
            };
            root.children = []
            var main = e_[path].f
            cs = []
            if (typeof global === "undefined") global = {};
            global.f = $gdc(f_[path], "", 1);
            if (typeof(window.__webview_engine_version__) != 'undefined' && window.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && window.__mergeData__) {
                env = window.__mergeData__(env, dd);
            }
            try {
                main(env, {}, root, global);
                _tsd(root)
                if (typeof(window.__webview_engine_version__) == 'undefined' || window.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                    return _ev(root);
                }
            } catch (err) {
                console.log(cs, env);
                console.log(err)
                throw err
            }
            return root;
        }
    }
}