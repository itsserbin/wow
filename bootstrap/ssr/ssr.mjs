import { createStore } from "vuex";
import { createI18n } from "vue-i18n";
import { createSSRApp, h as h$1 } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
let store = createStore({
  debug: true,
  state: {
    list: [],
    totalCount: 0,
    totalPrice: 0,
    promo_code: null,
    price_without_discount: 0
  },
  mutations: {
    async loadCart(state) {
      await axios.get("/api/v1/cart/list").then(function({ data }) {
        state.list = data.result.list;
        state.totalCount = data.result.totalCount;
        state.totalPrice = data.result.totalPrice;
        state.promo_code = data.result.promo_code;
        state.price_without_discount = data.result.price_without_discount;
      }).catch(function(response) {
        if (this.debug) {
          console.log(response);
        }
      });
    }
  }
});
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, e2.key, e2);
  }
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i() {
  if ("undefined" == typeof Reflect || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if ("function" == typeof Proxy)
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (t4) {
    return false;
  }
}
function u(t4, r2, n2) {
  return u = i() ? Reflect.construct.bind() : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, u.apply(null, arguments);
}
function f(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return f = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return u(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, f(t4);
}
var a = String.prototype.replace, c = /%20/g, l = { default: "RFC3986", formatters: { RFC1738: function(t4) {
  return a.call(t4, c, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: "RFC3986" }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          void 0 !== n3[o3] && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (0 === t4.length)
    return t4;
  var i2 = t4;
  if ("symbol" == typeof t4 ? i2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (i2 = String(t4)), "iso-8859-1" === n2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, m = Array.isArray, g = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, m(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && m(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var O2 = g.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === e2 && m(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (m(f2))
    k2 = f2;
  else {
    var C2 = Object.keys(h2);
    k2 = a2 ? C2.sort(a2) : C2;
  }
  for (var N2 = 0; N2 < k2.length; ++N2) {
    var T2 = k2[N2], F2 = "object" == typeof T2 && void 0 !== T2.value ? T2.value : h2[T2];
    if (!i2 || null !== F2) {
      var D2 = m(h2) ? "function" == typeof e2 ? e2(n2, T2) : n2 : n2 + (c2 ? "." + T2 : "[" + T2 + "]");
      w(x2, t3(F2, D2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, C = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, T = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, F = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : T(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, D = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return C;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? C.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : C.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : C.arrayLimit, charset: void 0 === t5.charset ? C.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : C.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : C.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : C.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : C.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : C.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : C.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : C.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : C.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : C.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof t4 ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, C.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), C.decoder, u3, "key"), a3 = d.maybeMap(T(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, C.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = F(f2, e2[f2], n2, "string" == typeof t4);
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, $ = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (o2 = r2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = r2.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(o2);
    return !!u2 && { params: u2.groups, query: D(i2) };
  }, n2.compile = function(t5) {
    var r2 = this, n3 = this.parameterSegments;
    return n3.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(e2, o2, i2) {
      var u2, f2, a2;
      if (!i2 && [null, void 0].includes(t5[o2]))
        throw new Error("Ziggy error: '" + o2 + "' parameter is required for route '" + r2.name + "'.");
      if (n3[n3.length - 1].name === o2 && ".*" === r2.wheres[o2])
        return encodeURIComponent(null != (a2 = t5[o2]) ? a2 : "").replace(/%2F/g, "/");
      if (r2.wheres[o2] && !new RegExp("^" + (i2 ? "(" + r2.wheres[o2] + ")?" : r2.wheres[o2]) + "$").test(null != (u2 = t5[o2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + o2 + "' parameter does not match required format '" + r2.wheres[o2] + "' for route '" + r2.name + "'.");
      return encodeURIComponent(null != (f2 = t5[o2]) ? f2 : "");
    }).replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "");
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), A = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (void 0 === o2 && (o2 = true), (u3 = t4.call(this) || this).t = null != i3 ? i3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new $(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return ("function" == typeof t7.filter || m(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof o2.filter ? e3 = (0, o2.filter)("", e3) : m(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && null === e3[a2] || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = true === o2.addQueryPrefix ? "?" : "";
      return o2.charsetSentinel && (s2 += "iso-8859-1" === o2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new $(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new $(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o2 = null == (i3 = this.t.location) ? void 0 : i3.search) ? o2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), null != t5 || (t5 = {}), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === o2.length && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.m(r2), this.g(t5, r2));
  }, f2.m = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.g = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ f(String)), I = { install: function(t4, r2) {
  var n2 = function(t5, n3, e2, o2) {
    return void 0 === o2 && (o2 = r2), function(t6, r3, n4, e3) {
      var o3 = new A(t6, r3, n4, e3);
      return t6 ? o3.toString() : o3;
    }(t5, n3, e2, o2);
  };
  t4.mixin({ methods: { route: n2 } }), parseInt(t4.version) > 2 && t4.provide("route", n2);
} };
const i18n = createI18n({});
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    // resolve: (name) => resolve(name),
    resolve: (name) => resolvePageComponent(`./${name}.vue`, /* @__PURE__ */ Object.assign({ "./Admin/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-f1bb8814.mjs"), "./Admin/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-558aac6c.mjs"), "./Admin/Auth/Login.vue": () => import("./assets/Login-624d2827.mjs"), "./Admin/Auth/Register.vue": () => import("./assets/Register-6fd9627f.mjs"), "./Admin/Auth/ResetPassword.vue": () => import("./assets/ResetPassword-07f8da5a.mjs"), "./Admin/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-277e64c2.mjs"), "./Admin/Content/Categories/Form.vue": () => import("./assets/Form-5b0fff83.mjs").then((n2) => n2.F), "./Admin/Content/Categories/Index.vue": () => import("./assets/Index-a28f3659.mjs"), "./Admin/Content/Categories/Modal.vue": () => import("./assets/Modal-45277b3a.mjs"), "./Admin/Content/Categories/Table.vue": () => import("./assets/Table-4468863f.mjs"), "./Admin/Content/ContentLayout.vue": () => import("./assets/ContentLayout-150d801d.mjs"), "./Admin/Content/Images/Form.vue": () => import("./assets/Form-254e0a8f.mjs"), "./Admin/Content/Images/Index.vue": () => import("./assets/Index-fc102dd9.mjs"), "./Admin/Content/Images/List.vue": () => import("./assets/List-497e9c0c.mjs"), "./Admin/Content/Images/Modal.vue": () => import("./assets/Modal-440e6b5f.mjs"), "./Admin/Content/Index.vue": () => import("./assets/Index-57c25562.mjs"), "./Admin/Content/Pages/Form.vue": () => import("./assets/Form-bfd4d2cd.mjs"), "./Admin/Content/Pages/Index.vue": () => import("./assets/Index-34aa0cd2.mjs"), "./Admin/Content/Pages/Modal.vue": () => import("./assets/Modal-c3e0bbbf.mjs"), "./Admin/Content/Pages/Table.vue": () => import("./assets/Table-bb46129a.mjs"), "./Admin/Content/Products/Form.vue": () => import("./assets/Form-3d9a0f2b.mjs"), "./Admin/Content/Products/Images.vue": () => import("./assets/Images-189fe58b.mjs"), "./Admin/Content/Products/Index.vue": () => import("./assets/Index-20645138.mjs"), "./Admin/Content/Products/Modal.vue": () => import("./assets/Modal-14fa672f.mjs"), "./Admin/Content/Products/Table.vue": () => import("./assets/Table-c8ee88dd.mjs"), "./Admin/Content/Reviews/Products/Form.vue": () => import("./assets/Form-f08dc11c.mjs"), "./Admin/Content/Reviews/Products/Index.vue": () => import("./assets/Index-1933e7ca.mjs"), "./Admin/Content/Reviews/Products/Modal.vue": () => import("./assets/Modal-e6f19919.mjs"), "./Admin/Content/Reviews/Products/Table.vue": () => import("./assets/Table-2d4d3ee8.mjs"), "./Admin/Content/Reviews/ReviewsLayout.vue": () => import("./assets/ReviewsLayout-c3fe9722.mjs"), "./Admin/Content/Reviews/Socials/Form.vue": () => import("./assets/Form-50982968.mjs"), "./Admin/Content/Reviews/Socials/Index.vue": () => import("./assets/Index-702a4be0.mjs"), "./Admin/Content/Reviews/Socials/Modal.vue": () => import("./assets/Modal-5102f1bc.mjs"), "./Admin/Content/Reviews/Socials/Table.vue": () => import("./assets/Table-5d241616.mjs"), "./Admin/Crm/Callbacks/Form.vue": () => import("./assets/Form-59e82398.mjs"), "./Admin/Crm/Callbacks/Index.vue": () => import("./assets/Index-26b1ea95.mjs"), "./Admin/Crm/Callbacks/Modal.vue": () => import("./assets/Modal-fb10b9b3.mjs"), "./Admin/Crm/Callbacks/Table.vue": () => import("./assets/Table-8d3c64b9.mjs"), "./Admin/Crm/Clients/Form.vue": () => import("./assets/Form-b5a022fd.mjs"), "./Admin/Crm/Clients/Index.vue": () => import("./assets/Index-68a0f634.mjs"), "./Admin/Crm/Clients/Indicators.vue": () => import("./assets/Indicators-245fb40a.mjs"), "./Admin/Crm/Clients/ItemsTable.vue": () => import("./assets/ItemsTable-9667c9ad.mjs"), "./Admin/Crm/Clients/Modal.vue": () => import("./assets/Modal-d71af9de.mjs"), "./Admin/Crm/Clients/Table.vue": () => import("./assets/Table-e282a416.mjs"), "./Admin/Crm/CrmLayout.vue": () => import("./assets/CrmLayout-444cb236.mjs"), "./Admin/Crm/Index.vue": () => import("./assets/Index-1b1a1b6f.mjs"), "./Admin/Crm/Invoices/Form.vue": () => import("./assets/Form-89d71185.mjs"), "./Admin/Crm/Invoices/Index.vue": () => import("./assets/Index-1f01a10f.mjs"), "./Admin/Crm/Invoices/Modal.vue": () => import("./assets/Modal-e66db442.mjs"), "./Admin/Crm/Invoices/Table.vue": () => import("./assets/Table-5286d7ce.mjs"), "./Admin/Crm/Orders/ClientOrders.vue": () => import("./assets/ClientOrders-023cb563.mjs"), "./Admin/Crm/Orders/Form.vue": () => import("./assets/Form-9e69bc69.mjs"), "./Admin/Crm/Orders/Index.vue": () => import("./assets/Index-91ffba1c.mjs"), "./Admin/Crm/Orders/InvoicesTable.vue": () => import("./assets/InvoicesTable-c24ec2f0.mjs"), "./Admin/Crm/Orders/Items/Form.vue": () => import("./assets/Form-edf31129.mjs"), "./Admin/Crm/Orders/Items/Modal.vue": () => import("./assets/Modal-7465b934.mjs"), "./Admin/Crm/Orders/Items/Table.vue": () => import("./assets/Table-da77c91a.mjs"), "./Admin/Crm/Orders/Modal.vue": () => import("./assets/Modal-ee4aa39e.mjs"), "./Admin/Crm/Orders/Table.vue": () => import("./assets/Table-33fe3590.mjs"), "./Admin/Crm/Supports/Form.vue": () => import("./assets/Form-5996f07a.mjs"), "./Admin/Crm/Supports/Index.vue": () => import("./assets/Index-7542fa72.mjs"), "./Admin/Crm/Supports/Modal.vue": () => import("./assets/Modal-0d404859.mjs"), "./Admin/Crm/Supports/Table.vue": () => import("./assets/Table-a960dd5f.mjs"), "./Admin/Dashboard.vue": () => import("./assets/Dashboard-9f28b5d4.mjs"), "./Admin/Options/Advantages/Form.vue": () => import("./assets/Form-1cd7eb71.mjs"), "./Admin/Options/Advantages/Index.vue": () => import("./assets/Index-59203889.mjs"), "./Admin/Options/Advantages/Modal.vue": () => import("./assets/Modal-098e45a5.mjs"), "./Admin/Options/Advantages/Table.vue": () => import("./assets/Table-4143e92e.mjs"), "./Admin/Options/Banners/Form.vue": () => import("./assets/Form-a4f87ed8.mjs"), "./Admin/Options/Banners/Index.vue": () => import("./assets/Index-affbe21f.mjs"), "./Admin/Options/Banners/Modal.vue": () => import("./assets/Modal-ec513cfd.mjs"), "./Admin/Options/Banners/Table.vue": () => import("./assets/Table-d54ee589.mjs"), "./Admin/Options/Banners/UploadBannersInput.vue": () => import("./assets/UploadBannersInput-ca5ecf32.mjs"), "./Admin/Options/Characteristics/Form.vue": () => import("./assets/Form-0b329b30.mjs"), "./Admin/Options/Characteristics/Index.vue": () => import("./assets/Index-88e6add4.mjs"), "./Admin/Options/Characteristics/Modal.vue": () => import("./assets/Modal-38fcd651.mjs"), "./Admin/Options/Characteristics/Table.vue": () => import("./assets/Table-072c924c.mjs"), "./Admin/Options/Colors/Form.vue": () => import("./assets/Form-8528d0af.mjs"), "./Admin/Options/Colors/Index.vue": () => import("./assets/Index-793bf951.mjs"), "./Admin/Options/Colors/Modal.vue": () => import("./assets/Modal-3845ea03.mjs"), "./Admin/Options/Colors/Table.vue": () => import("./assets/Table-3cb23235.mjs"), "./Admin/Options/Faqs/Form.vue": () => import("./assets/Form-74078b3e.mjs"), "./Admin/Options/Faqs/Index.vue": () => import("./assets/Index-3e2c1c44.mjs"), "./Admin/Options/Faqs/Modal.vue": () => import("./assets/Modal-43729964.mjs"), "./Admin/Options/Faqs/Table.vue": () => import("./assets/Table-68ef34e2.mjs"), "./Admin/Options/Index.vue": () => import("./assets/Index-c957b264.mjs"), "./Admin/Options/Main/Form.vue": () => import("./assets/Form-29f228a4.mjs"), "./Admin/Options/Main/Index.vue": () => import("./assets/Index-ed85a589.mjs"), "./Admin/Options/Main/Logo.vue": () => import("./assets/Logo-34b9a54b.mjs"), "./Admin/Options/OptionsLayout.vue": () => import("./assets/OptionsLayout-e8479f7a.mjs"), "./Admin/Options/Permissions/Form.vue": () => import("./assets/Form-871cb6ff.mjs"), "./Admin/Options/Permissions/Index.vue": () => import("./assets/Index-64691f52.mjs"), "./Admin/Options/Permissions/Modal.vue": () => import("./assets/Modal-c91b8df1.mjs"), "./Admin/Options/Permissions/Table.vue": () => import("./assets/Table-3b6f0d93.mjs"), "./Admin/Options/PromoCodes/Form.vue": () => import("./assets/Form-aa8c1d9d.mjs"), "./Admin/Options/PromoCodes/Index.vue": () => import("./assets/Index-b68ec0c7.mjs"), "./Admin/Options/PromoCodes/Modal.vue": () => import("./assets/Modal-844ca25c.mjs"), "./Admin/Options/PromoCodes/Table.vue": () => import("./assets/Table-5bbd7670.mjs"), "./Admin/Options/Providers/Form.vue": () => import("./assets/Form-d52cbc38.mjs"), "./Admin/Options/Providers/Index.vue": () => import("./assets/Index-6a31fe8f.mjs"), "./Admin/Options/Providers/Modal.vue": () => import("./assets/Modal-fd1c278a.mjs"), "./Admin/Options/Providers/Table.vue": () => import("./assets/Table-3e79bedb.mjs"), "./Admin/Options/Roles/Form.vue": () => import("./assets/Form-c79d8725.mjs"), "./Admin/Options/Roles/Index.vue": () => import("./assets/Index-a0c866d9.mjs"), "./Admin/Options/Roles/Modal.vue": () => import("./assets/Modal-de3371a1.mjs"), "./Admin/Options/Roles/Table.vue": () => import("./assets/Table-40e17a96.mjs"), "./Admin/Options/Scripts/Form.vue": () => import("./assets/Form-225be07e.mjs"), "./Admin/Options/Scripts/Index.vue": () => import("./assets/Index-d3235066.mjs"), "./Admin/Options/Sizes/Form.vue": () => import("./assets/Form-c69040c4.mjs"), "./Admin/Options/Sizes/Index.vue": () => import("./assets/Index-8324bc38.mjs"), "./Admin/Options/Sizes/Modal.vue": () => import("./assets/Modal-e4fda682.mjs"), "./Admin/Options/Sizes/Table.vue": () => import("./assets/Table-9b2363c8.mjs"), "./Admin/Options/Translations/Form.vue": () => import("./assets/Form-7c9daec6.mjs"), "./Admin/Options/Translations/Index.vue": () => import("./assets/Index-08aafaa8.mjs"), "./Admin/Options/Translations/Modal.vue": () => import("./assets/Modal-9b40b74b.mjs"), "./Admin/Options/Translations/Table.vue": () => import("./assets/Table-ed9ab9f4.mjs"), "./Admin/Options/Users/Form.vue": () => import("./assets/Form-60359d24.mjs"), "./Admin/Options/Users/Index.vue": () => import("./assets/Index-4cad81a9.mjs"), "./Admin/Options/Users/Modal.vue": () => import("./assets/Modal-c45c5bdd.mjs"), "./Admin/Options/Users/Table.vue": () => import("./assets/Table-fe6781a6.mjs"), "./Admin/Options/Xmls/Form.vue": () => import("./assets/Form-20eb8b07.mjs"), "./Admin/Options/Xmls/Index.vue": () => import("./assets/Index-d32b7d1b.mjs"), "./Admin/Options/Xmls/Modal.vue": () => import("./assets/Modal-58d6daab.mjs"), "./Admin/Options/Xmls/Table.vue": () => import("./assets/Table-58f2bc84.mjs"), "./Admin/Statistics/CostCategories/Form.vue": () => import("./assets/Form-2d287ddc.mjs"), "./Admin/Statistics/CostCategories/Index.vue": () => import("./assets/Index-1f29b572.mjs"), "./Admin/Statistics/CostCategories/Modal.vue": () => import("./assets/Modal-ad5b5200.mjs"), "./Admin/Statistics/Costs/Chart.vue": () => import("./assets/Chart-c22bddfe.mjs"), "./Admin/Statistics/Costs/Form.vue": () => import("./assets/Form-a35395ba.mjs"), "./Admin/Statistics/Costs/Index.vue": () => import("./assets/Index-32878fd3.mjs"), "./Admin/Statistics/Costs/Modal.vue": () => import("./assets/Modal-1e69ee26.mjs"), "./Admin/Statistics/Costs/Table.vue": () => import("./assets/Table-da488173.mjs"), "./Admin/Statistics/Datepicker.vue": () => import("./assets/Datepicker-df3f8ff5.mjs"), "./Admin/Statistics/Index.vue": () => import("./assets/Index-55a50ba6.mjs"), "./Admin/Statistics/Managers/Chart.vue": () => import("./assets/Chart-b2bd9376.mjs"), "./Admin/Statistics/Managers/Index.vue": () => import("./assets/Index-bd551dd2.mjs"), "./Admin/Statistics/Managers/Table.vue": () => import("./assets/Table-4912c959.mjs"), "./Admin/Statistics/Marketing/Chart.vue": () => import("./assets/Chart-56f131d7.mjs"), "./Admin/Statistics/Marketing/Index.vue": () => import("./assets/Index-f72ac993.mjs"), "./Admin/Statistics/Marketing/Table.vue": () => import("./assets/Table-695bb1fb.mjs"), "./Admin/Statistics/Orders/Chart.vue": () => import("./assets/Chart-6df2e7c5.mjs"), "./Admin/Statistics/Orders/Index.vue": () => import("./assets/Index-68f4b7d6.mjs"), "./Admin/Statistics/Orders/Indicators.vue": () => import("./assets/Indicators-5ad8d75b.mjs"), "./Admin/Statistics/Orders/Table.vue": () => import("./assets/Table-a7f0c8b1.mjs"), "./Admin/Statistics/Products/Chart.vue": () => import("./assets/Chart-65ae0cc6.mjs"), "./Admin/Statistics/Products/Index.vue": () => import("./assets/Index-1b97ac53.mjs"), "./Admin/Statistics/Products/Table.vue": () => import("./assets/Table-0fc75259.mjs"), "./Admin/Statistics/Profits/Chart.vue": () => import("./assets/Chart-15832aba.mjs"), "./Admin/Statistics/Profits/Index.vue": () => import("./assets/Index-e62bfe3c.mjs"), "./Admin/Statistics/Profits/Table.vue": () => import("./assets/Table-4932e7fc.mjs"), "./Admin/Statistics/Refunds/Index.vue": () => import("./assets/Index-89c1f0c4.mjs"), "./Admin/Statistics/Refunds/Table.vue": () => import("./assets/Table-285a04cc.mjs"), "./Admin/Statistics/StatisticLayout.vue": () => import("./assets/StatisticLayout-bb4b69cb.mjs"), "./Public/Cart/AdditionalProductCard.vue": () => import("./assets/AdditionalProductCard-e60c3cdf.mjs"), "./Public/Cart/AdditionalProducts.vue": () => import("./assets/AdditionalProducts-d50cbce0.mjs"), "./Public/Cart/CartItem.vue": () => import("./assets/CartItem-93649321.mjs"), "./Public/Cart/CartTotal.vue": () => import("./assets/CartTotal-3bd2b491.mjs"), "./Public/Cart/Index.vue": () => import("./assets/Index-59033af6.mjs"), "./Public/Cart/PromoCode.vue": () => import("./assets/PromoCode-c9ed4022.mjs"), "./Public/Category/Breadcrumbs.vue": () => import("./assets/Breadcrumbs-cdffc20d.mjs"), "./Public/Category/Filter.vue": () => import("./assets/Filter-9e5de628.mjs"), "./Public/Category/Head.vue": () => import("./assets/Head-741d8025.mjs"), "./Public/Category/Index.vue": () => import("./assets/Index-7618d058.mjs"), "./Public/Category/Products.vue": () => import("./assets/Products-3c16c256.mjs"), "./Public/Category/Sort.vue": () => import("./assets/Sort-ac8c3e3b.mjs"), "./Public/Checkout/CheckoutTotal.vue": () => import("./assets/CheckoutTotal-5385c985.mjs"), "./Public/Checkout/Comment.vue": () => import("./assets/Comment-efef970a.mjs"), "./Public/Checkout/Delivery.vue": () => import("./assets/Delivery-1e02e30f.mjs"), "./Public/Checkout/Index.vue": () => import("./assets/Index-98dbc3f2.mjs"), "./Public/Checkout/OrderItem.vue": () => import("./assets/OrderItem-3bc300b7.mjs"), "./Public/Checkout/Payment.vue": () => import("./assets/Payment-fb9cb3cb.mjs"), "./Public/Checkout/PersonalData.vue": () => import("./assets/PersonalData-daf18046.mjs"), "./Public/Components/Accordion/Accordion.vue": () => import("./assets/Accordion-1215fa5b.mjs"), "./Public/Components/Accordion/AccordionItem.vue": () => import("./assets/AccordionItem-d1739108.mjs"), "./Public/Components/Advantages.vue": () => import("./assets/Advantages-874447b2.mjs"), "./Public/Components/AllReviewsCarousel.vue": () => import("./assets/AllReviewsCarousel-94463242.mjs"), "./Public/Components/Banners.vue": () => import("./assets/Banners-9843c8a4.mjs"), "./Public/Components/Breadcrumbs.vue": () => import("./assets/Breadcrumbs-adc4c20b.mjs"), "./Public/Components/Button.vue": () => import("./assets/Button-e6d9c4d7.mjs"), "./Public/Components/Callback.vue": () => import("./assets/Callback-7bb39586.mjs"), "./Public/Components/CartIcon.vue": () => import("./assets/CartIcon-4c8884b3.mjs"), "./Public/Components/Categories.vue": () => import("./assets/Categories-c513e054.mjs"), "./Public/Components/Consultation.vue": () => import("./assets/Consultation-060c786d.mjs"), "./Public/Components/Content.vue": () => import("./assets/Content-68ff5788.mjs"), "./Public/Components/FaqComponent.vue": () => import("./assets/FaqComponent-8a06e7db.mjs"), "./Public/Components/FixedBanner.vue": () => import("./assets/FixedBanner-285b457f.mjs"), "./Public/Components/Footer.vue": () => import("./assets/Footer-e23e0d72.mjs"), "./Public/Components/Head.vue": () => import("./assets/Head-671d76dc.mjs"), "./Public/Components/Header/Burger.vue": () => import("./assets/Burger-8efec45c.mjs"), "./Public/Components/Header/BurgerMenu.vue": () => import("./assets/BurgerMenu-c2779c7a.mjs"), "./Public/Components/Header/BurgerMenuLink.vue": () => import("./assets/BurgerMenuLink-c0a1b6cc.mjs"), "./Public/Components/Header/Header.vue": () => import("./assets/Header-1206aee3.mjs"), "./Public/Components/Header/HeaderCategories.vue": () => import("./assets/HeaderCategories-743d6249.mjs"), "./Public/Components/Header/Langs.vue": () => import("./assets/Langs-57d30b91.mjs"), "./Public/Components/Header/Logo.vue": () => import("./assets/Logo-8552d818.mjs"), "./Public/Components/Heading.vue": () => import("./assets/Heading-7025d0e4.mjs"), "./Public/Components/Input.vue": () => import("./assets/Input-4d6b8e1d.mjs"), "./Public/Components/Label.vue": () => import("./assets/Label-45b40ea1.mjs"), "./Public/Components/LoadMore.vue": () => import("./assets/LoadMore-1357765f.mjs"), "./Public/Components/Loader.vue": () => import("./assets/Loader-f0774e51.mjs"), "./Public/Components/Modal.vue": () => import("./assets/Modal-e357bd17.mjs"), "./Public/Components/ProductCard.vue": () => import("./assets/ProductCard-fa239778.mjs"), "./Public/Components/ProductCards.vue": () => import("./assets/ProductCards-045bf0e7.mjs"), "./Public/Components/ScrollToTop.vue": () => import("./assets/ScrollToTop-99a883e6.mjs"), "./Public/Components/Support.vue": () => import("./assets/Support-1702dec6.mjs"), "./Public/Components/Textarea.vue": () => import("./assets/Textarea-411bf5c9.mjs"), "./Public/Home/Index.vue": () => import("./assets/Index-f6751dda.mjs"), "./Public/Home/ProductsList.vue": () => import("./assets/ProductsList-5cbae032.mjs"), "./Public/Page/Breadcrumbs.vue": () => import("./assets/Breadcrumbs-17828511.mjs"), "./Public/Page/Index.vue": () => import("./assets/Index-e61125f8.mjs"), "./Public/Product/AddToCart.vue": () => import("./assets/AddToCart-1bae9f03.mjs"), "./Public/Product/BestSellingProducts.vue": () => import("./assets/BestSellingProducts-73f12680.mjs"), "./Public/Product/Breadcrumbs.vue": () => import("./assets/Breadcrumbs-c1f9c05b.mjs"), "./Public/Product/BuyIn1ClickModal.vue": () => import("./assets/BuyIn1ClickModal-da3284d6.mjs"), "./Public/Product/Characteristics.vue": () => import("./assets/Characteristics-920f1b64.mjs"), "./Public/Product/Content.vue": () => import("./assets/Content-384ffe99.mjs"), "./Public/Product/DeliveryAndPayment.vue": () => import("./assets/DeliveryAndPayment-88c7545e.mjs"), "./Public/Product/Head.vue": () => import("./assets/Head-2dac87cc.mjs"), "./Public/Product/ImagesSlider.vue": () => import("./assets/ImagesSlider-057b4379.mjs"), "./Public/Product/Index.vue": () => import("./assets/Index-b0d5341c.mjs"), "./Public/Product/NewProducts.vue": () => import("./assets/NewProducts-9339a85d.mjs"), "./Public/Product/RelativeProducts.vue": () => import("./assets/RelativeProducts-779c4c27.mjs"), "./Public/Product/ReviewForm.vue": () => import("./assets/ReviewForm-dc15d57d.mjs"), "./Public/Product/Reviews.vue": () => import("./assets/Reviews-1ce975be.mjs"), "./Public/Product/SizesTable.vue": () => import("./assets/SizesTable-cb6f271e.mjs"), "./Public/Reviews/Breadcrumbs.vue": () => import("./assets/Breadcrumbs-ab126d7f.mjs"), "./Public/Reviews/Card.vue": () => import("./assets/Card-53485125.mjs"), "./Public/Reviews/Index.vue": () => import("./assets/Index-a49d84d4.mjs"), "./Public/Status/Breadcrumbs.vue": () => import("./assets/Breadcrumbs-f4dc6d94.mjs"), "./Public/Status/Form.vue": () => import("./assets/Form-0c9142fa.mjs"), "./Public/Status/Index.vue": () => import("./assets/Index-dd711c8b.mjs"), "./Public/Status/OrderItem.vue": () => import("./assets/OrderItem-7624c01e.mjs"), "./Public/Status/Status.vue": () => import("./assets/Status-8cef1d0a.mjs"), "./Public/Support/Breadcrumbs.vue": () => import("./assets/Breadcrumbs-e67269f5.mjs"), "./Public/Support/Form.vue": () => import("./assets/Form-9631357e.mjs"), "./Public/Support/Index.vue": () => import("./assets/Index-45d4ffea.mjs"), "./Public/Thanks/Index.vue": () => import("./assets/Index-a1c31ba7.mjs"), "./Public/Thanks/ProductCard.vue": () => import("./assets/ProductCard-96fa0c88.mjs"), "./Public/Thanks/Timer.vue": () => import("./assets/Timer-5e794b24.mjs") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h$1(App, props) }).use(plugin).use(I, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      }).use(i18n).provide("$defaultLang", "ua").use(store);
    }
  })
);
