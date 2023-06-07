(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/aos/dist/aos.js
  var require_aos = __commonJS({
    "node_modules/aos/dist/aos.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.AOS = t();
      }(exports, function() {
        "use strict";
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, t = "Expected a function", n = NaN, o = "[object Symbol]", i = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, r = /^0b[01]+$/i, c = /^0o[0-7]+$/i, s = parseInt, u = "object" == typeof e && e && e.Object === Object && e, d = "object" == typeof self && self && self.Object === Object && self, l = u || d || Function("return this")(), f = Object.prototype.toString, m = Math.max, p = Math.min, b = function() {
          return l.Date.now();
        };
        function v(e2, n2, o2) {
          var i2, a2, r2, c2, s2, u2, d2 = 0, l2 = false, f2 = false, v2 = true;
          if ("function" != typeof e2)
            throw new TypeError(t);
          function y2(t2) {
            var n3 = i2, o3 = a2;
            return i2 = a2 = void 0, d2 = t2, c2 = e2.apply(o3, n3);
          }
          function h2(e3) {
            var t2 = e3 - u2;
            return void 0 === u2 || t2 >= n2 || t2 < 0 || f2 && e3 - d2 >= r2;
          }
          function k2() {
            var e3 = b();
            if (h2(e3))
              return x2(e3);
            s2 = setTimeout(k2, function(e4) {
              var t2 = n2 - (e4 - u2);
              return f2 ? p(t2, r2 - (e4 - d2)) : t2;
            }(e3));
          }
          function x2(e3) {
            return s2 = void 0, v2 && i2 ? y2(e3) : (i2 = a2 = void 0, c2);
          }
          function O2() {
            var e3 = b(), t2 = h2(e3);
            if (i2 = arguments, a2 = this, u2 = e3, t2) {
              if (void 0 === s2)
                return function(e4) {
                  return d2 = e4, s2 = setTimeout(k2, n2), l2 ? y2(e4) : c2;
                }(u2);
              if (f2)
                return s2 = setTimeout(k2, n2), y2(u2);
            }
            return void 0 === s2 && (s2 = setTimeout(k2, n2)), c2;
          }
          return n2 = w(n2) || 0, g(o2) && (l2 = !!o2.leading, r2 = (f2 = "maxWait" in o2) ? m(w(o2.maxWait) || 0, n2) : r2, v2 = "trailing" in o2 ? !!o2.trailing : v2), O2.cancel = function() {
            void 0 !== s2 && clearTimeout(s2), d2 = 0, i2 = u2 = a2 = s2 = void 0;
          }, O2.flush = function() {
            return void 0 === s2 ? c2 : x2(b());
          }, O2;
        }
        function g(e2) {
          var t2 = typeof e2;
          return !!e2 && ("object" == t2 || "function" == t2);
        }
        function w(e2) {
          if ("number" == typeof e2)
            return e2;
          if (function(e3) {
            return "symbol" == typeof e3 || function(e4) {
              return !!e4 && "object" == typeof e4;
            }(e3) && f.call(e3) == o;
          }(e2))
            return n;
          if (g(e2)) {
            var t2 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
            e2 = g(t2) ? t2 + "" : t2;
          }
          if ("string" != typeof e2)
            return 0 === e2 ? e2 : +e2;
          e2 = e2.replace(i, "");
          var u2 = r.test(e2);
          return u2 || c.test(e2) ? s(e2.slice(2), u2 ? 2 : 8) : a.test(e2) ? n : +e2;
        }
        var y = function(e2, n2, o2) {
          var i2 = true, a2 = true;
          if ("function" != typeof e2)
            throw new TypeError(t);
          return g(o2) && (i2 = "leading" in o2 ? !!o2.leading : i2, a2 = "trailing" in o2 ? !!o2.trailing : a2), v(e2, n2, { leading: i2, maxWait: n2, trailing: a2 });
        }, h = "Expected a function", k = NaN, x = "[object Symbol]", O = /^\s+|\s+$/g, j = /^[-+]0x[0-9a-f]+$/i, E = /^0b[01]+$/i, N = /^0o[0-7]+$/i, z = parseInt, C = "object" == typeof e && e && e.Object === Object && e, A = "object" == typeof self && self && self.Object === Object && self, q = C || A || Function("return this")(), L = Object.prototype.toString, T = Math.max, M = Math.min, S = function() {
          return q.Date.now();
        };
        function D(e2) {
          var t2 = typeof e2;
          return !!e2 && ("object" == t2 || "function" == t2);
        }
        function H(e2) {
          if ("number" == typeof e2)
            return e2;
          if (function(e3) {
            return "symbol" == typeof e3 || function(e4) {
              return !!e4 && "object" == typeof e4;
            }(e3) && L.call(e3) == x;
          }(e2))
            return k;
          if (D(e2)) {
            var t2 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
            e2 = D(t2) ? t2 + "" : t2;
          }
          if ("string" != typeof e2)
            return 0 === e2 ? e2 : +e2;
          e2 = e2.replace(O, "");
          var n2 = E.test(e2);
          return n2 || N.test(e2) ? z(e2.slice(2), n2 ? 2 : 8) : j.test(e2) ? k : +e2;
        }
        var $ = function(e2, t2, n2) {
          var o2, i2, a2, r2, c2, s2, u2 = 0, d2 = false, l2 = false, f2 = true;
          if ("function" != typeof e2)
            throw new TypeError(h);
          function m2(t3) {
            var n3 = o2, a3 = i2;
            return o2 = i2 = void 0, u2 = t3, r2 = e2.apply(a3, n3);
          }
          function p2(e3) {
            var n3 = e3 - s2;
            return void 0 === s2 || n3 >= t2 || n3 < 0 || l2 && e3 - u2 >= a2;
          }
          function b2() {
            var e3 = S();
            if (p2(e3))
              return v2(e3);
            c2 = setTimeout(b2, function(e4) {
              var n3 = t2 - (e4 - s2);
              return l2 ? M(n3, a2 - (e4 - u2)) : n3;
            }(e3));
          }
          function v2(e3) {
            return c2 = void 0, f2 && o2 ? m2(e3) : (o2 = i2 = void 0, r2);
          }
          function g2() {
            var e3 = S(), n3 = p2(e3);
            if (o2 = arguments, i2 = this, s2 = e3, n3) {
              if (void 0 === c2)
                return function(e4) {
                  return u2 = e4, c2 = setTimeout(b2, t2), d2 ? m2(e4) : r2;
                }(s2);
              if (l2)
                return c2 = setTimeout(b2, t2), m2(s2);
            }
            return void 0 === c2 && (c2 = setTimeout(b2, t2)), r2;
          }
          return t2 = H(t2) || 0, D(n2) && (d2 = !!n2.leading, a2 = (l2 = "maxWait" in n2) ? T(H(n2.maxWait) || 0, t2) : a2, f2 = "trailing" in n2 ? !!n2.trailing : f2), g2.cancel = function() {
            void 0 !== c2 && clearTimeout(c2), u2 = 0, o2 = s2 = i2 = c2 = void 0;
          }, g2.flush = function() {
            return void 0 === c2 ? r2 : v2(S());
          }, g2;
        }, W = function() {
        };
        function P(e2) {
          e2 && e2.forEach(function(e3) {
            var t2 = Array.prototype.slice.call(e3.addedNodes), n2 = Array.prototype.slice.call(e3.removedNodes);
            if (function e4(t3) {
              var n3 = void 0, o2 = void 0;
              for (n3 = 0; n3 < t3.length; n3 += 1) {
                if ((o2 = t3[n3]).dataset && o2.dataset.aos)
                  return true;
                if (o2.children && e4(o2.children))
                  return true;
              }
              return false;
            }(t2.concat(n2)))
              return W();
          });
        }
        function Y() {
          return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        }
        var _ = { isSupported: function() {
          return !!Y();
        }, ready: function(e2, t2) {
          var n2 = window.document, o2 = new (Y())(P);
          W = t2, o2.observe(n2.documentElement, { childList: true, subtree: true, removedNodes: true });
        } }, B = function(e2, t2) {
          if (!(e2 instanceof t2))
            throw new TypeError("Cannot call a class as a function");
        }, F = function() {
          function e2(e3, t2) {
            for (var n2 = 0; n2 < t2.length; n2++) {
              var o2 = t2[n2];
              o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
            }
          }
          return function(t2, n2, o2) {
            return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
          };
        }(), I = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2 = arguments[t2];
            for (var o2 in n2)
              Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
          }
          return e2;
        }, K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
        function R() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        var U = new (function() {
          function e2() {
            B(this, e2);
          }
          return F(e2, [{ key: "phone", value: function() {
            var e3 = R();
            return !(!K.test(e3) && !G.test(e3.substr(0, 4)));
          } }, { key: "mobile", value: function() {
            var e3 = R();
            return !(!J.test(e3) && !Q.test(e3.substr(0, 4)));
          } }, { key: "tablet", value: function() {
            return this.mobile() && !this.phone();
          } }, { key: "ie11", value: function() {
            return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
          } }]), e2;
        }())(), V = function(e2, t2) {
          var n2 = void 0;
          return U.ie11() ? (n2 = document.createEvent("CustomEvent")).initCustomEvent(e2, true, true, { detail: t2 }) : n2 = new CustomEvent(e2, { detail: t2 }), document.dispatchEvent(n2);
        }, X = function(e2) {
          return e2.forEach(function(e3, t2) {
            return function(e4, t3) {
              var n2 = e4.options, o2 = e4.position, i2 = e4.node, a2 = (e4.data, function() {
                e4.animated && (function(e5, t4) {
                  t4 && t4.forEach(function(t5) {
                    return e5.classList.remove(t5);
                  });
                }(i2, n2.animatedClassNames), V("aos:out", i2), e4.options.id && V("aos:in:" + e4.options.id, i2), e4.animated = false);
              });
              n2.mirror && t3 >= o2.out && !n2.once ? a2() : t3 >= o2.in ? e4.animated || (function(e5, t4) {
                t4 && t4.forEach(function(t5) {
                  return e5.classList.add(t5);
                });
              }(i2, n2.animatedClassNames), V("aos:in", i2), e4.options.id && V("aos:in:" + e4.options.id, i2), e4.animated = true) : e4.animated && !n2.once && a2();
            }(e3, window.pageYOffset);
          });
        }, Z = function(e2) {
          for (var t2 = 0, n2 = 0; e2 && !isNaN(e2.offsetLeft) && !isNaN(e2.offsetTop); )
            t2 += e2.offsetLeft - ("BODY" != e2.tagName ? e2.scrollLeft : 0), n2 += e2.offsetTop - ("BODY" != e2.tagName ? e2.scrollTop : 0), e2 = e2.offsetParent;
          return { top: n2, left: t2 };
        }, ee = function(e2, t2, n2) {
          var o2 = e2.getAttribute("data-aos-" + t2);
          if (void 0 !== o2) {
            if ("true" === o2)
              return true;
            if ("false" === o2)
              return false;
          }
          return o2 || n2;
        }, te = function(e2, t2) {
          return e2.forEach(function(e3, n2) {
            var o2 = ee(e3.node, "mirror", t2.mirror), i2 = ee(e3.node, "once", t2.once), a2 = ee(e3.node, "id"), r2 = t2.useClassNames && e3.node.getAttribute("data-aos"), c2 = [t2.animatedClassName].concat(r2 ? r2.split(" ") : []).filter(function(e4) {
              return "string" == typeof e4;
            });
            t2.initClassName && e3.node.classList.add(t2.initClassName), e3.position = { in: function(e4, t3, n3) {
              var o3 = window.innerHeight, i3 = ee(e4, "anchor"), a3 = ee(e4, "anchor-placement"), r3 = Number(ee(e4, "offset", a3 ? 0 : t3)), c3 = a3 || n3, s2 = e4;
              i3 && document.querySelectorAll(i3) && (s2 = document.querySelectorAll(i3)[0]);
              var u2 = Z(s2).top - o3;
              switch (c3) {
                case "top-bottom":
                  break;
                case "center-bottom":
                  u2 += s2.offsetHeight / 2;
                  break;
                case "bottom-bottom":
                  u2 += s2.offsetHeight;
                  break;
                case "top-center":
                  u2 += o3 / 2;
                  break;
                case "center-center":
                  u2 += o3 / 2 + s2.offsetHeight / 2;
                  break;
                case "bottom-center":
                  u2 += o3 / 2 + s2.offsetHeight;
                  break;
                case "top-top":
                  u2 += o3;
                  break;
                case "bottom-top":
                  u2 += o3 + s2.offsetHeight;
                  break;
                case "center-top":
                  u2 += o3 + s2.offsetHeight / 2;
              }
              return u2 + r3;
            }(e3.node, t2.offset, t2.anchorPlacement), out: o2 && function(e4, t3) {
              window.innerHeight;
              var n3 = ee(e4, "anchor"), o3 = ee(e4, "offset", t3), i3 = e4;
              return n3 && document.querySelectorAll(n3) && (i3 = document.querySelectorAll(n3)[0]), Z(i3).top + i3.offsetHeight - o3;
            }(e3.node, t2.offset) }, e3.options = { once: i2, mirror: o2, animatedClassNames: c2, id: a2 };
          }), e2;
        }, ne = function() {
          var e2 = document.querySelectorAll("[data-aos]");
          return Array.prototype.map.call(e2, function(e3) {
            return { node: e3 };
          });
        }, oe = [], ie = false, ae = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: false, once: false, mirror: false, anchorPlacement: "top-bottom", startEvent: "DOMContentLoaded", animatedClassName: "aos-animate", initClassName: "aos-init", useClassNames: false, disableMutationObserver: false, throttleDelay: 99, debounceDelay: 50 }, re = function() {
          return document.all && !window.atob;
        }, ce = function() {
          arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ie = true), ie && (oe = te(oe, ae), X(oe), window.addEventListener("scroll", y(function() {
            X(oe, ae.once);
          }, ae.throttleDelay)));
        }, se = function() {
          if (oe = ne(), de(ae.disable) || re())
            return ue();
          ce();
        }, ue = function() {
          oe.forEach(function(e2, t2) {
            e2.node.removeAttribute("data-aos"), e2.node.removeAttribute("data-aos-easing"), e2.node.removeAttribute("data-aos-duration"), e2.node.removeAttribute("data-aos-delay"), ae.initClassName && e2.node.classList.remove(ae.initClassName), ae.animatedClassName && e2.node.classList.remove(ae.animatedClassName);
          });
        }, de = function(e2) {
          return true === e2 || "mobile" === e2 && U.mobile() || "phone" === e2 && U.phone() || "tablet" === e2 && U.tablet() || "function" == typeof e2 && true === e2();
        };
        return { init: function(e2) {
          return ae = I(ae, e2), oe = ne(), ae.disableMutationObserver || _.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), ae.disableMutationObserver = true), ae.disableMutationObserver || _.ready("[data-aos]", se), de(ae.disable) || re() ? ue() : (document.querySelector("body").setAttribute("data-aos-easing", ae.easing), document.querySelector("body").setAttribute("data-aos-duration", ae.duration), document.querySelector("body").setAttribute("data-aos-delay", ae.delay), -1 === ["DOMContentLoaded", "load"].indexOf(ae.startEvent) ? document.addEventListener(ae.startEvent, function() {
            ce(true);
          }) : window.addEventListener("load", function() {
            ce(true);
          }), "DOMContentLoaded" === ae.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && ce(true), window.addEventListener("resize", $(ce, ae.debounceDelay, true)), window.addEventListener("orientationchange", $(ce, ae.debounceDelay, true)), oe);
        }, refresh: ce, refreshHard: se };
      });
    }
  });

  // <stdin>
  var import_aos = __toESM(require_aos());
  import_aos.default.init();
})();
