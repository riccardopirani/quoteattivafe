(window["webpackJsonpstar-admin-pro-react"] =
  window["webpackJsonpstar-admin-pro-react"] || []).push([
  [0],
  Array(121).concat([
    function (t, e, n) {
      var r = n(158),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = r || i || Function("return this")();
      t.exports = a;
    },
    function (t, e) {
      var n = Array.isArray;
      t.exports = n;
    },
    function (t, e, n) {
      var r = n(207),
        i = n(212);
      t.exports = function (t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0;
      };
    },
    function (t, e, n) {
      var r = n(131),
        i = n(208),
        a = n(209),
        o = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : o && o in Object(t)
            ? i(t)
            : a(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return null != t && "object" == typeof t;
      };
    },
    ,
    ,
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e, n) {
      var r = n(197),
        i = n(198),
        a = n(199),
        o = n(200),
        s = n(201);
      function l(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = i),
        (l.prototype.get = a),
        (l.prototype.has = o),
        (l.prototype.set = s),
        (t.exports = l);
    },
    function (t, e, n) {
      var r = n(156);
      t.exports = function (t, e) {
        for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
        return -1;
      };
    },
    function (t, e, n) {
      var r = n(121).Symbol;
      t.exports = r;
    },
    function (t, e, n) {
      var r = n(123)(Object, "create");
      t.exports = r;
    },
    function (t, e, n) {
      var r = n(221);
      t.exports = function (t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
      };
    },
    function (t, e, n) {
      var r = n(145);
      t.exports = function (t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
      };
    },
    ,
    ,
    ,
    function (t, e, n) {
      var r = n(196),
        i = n(125);
      t.exports = function t(e, n, a, o, s) {
        return (
          e === n ||
          (null == e || null == n || (!i(e) && !i(n))
            ? e !== e && n !== n
            : r(e, n, a, o, t, s))
        );
      };
    },
    function (t, e, n) {
      var r = n(123)(n(121), "Map");
      t.exports = r;
    },
    function (t, e) {
      t.exports = function (t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      };
    },
    function (t, e, n) {
      var r = n(213),
        i = n(220),
        a = n(222),
        o = n(223),
        s = n(224);
      function l(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = i),
        (l.prototype.get = a),
        (l.prototype.has = o),
        (l.prototype.set = s),
        (t.exports = l);
    },
    function (t, e, n) {
      var r = n(241),
        i = n(248),
        a = n(165);
      t.exports = function (t) {
        return a(t) ? r(t) : i(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        );
      };
    },
    function (t, e, n) {
      var r = n(122),
        i = n(145),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
      t.exports = function (t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != t &&
            !i(t)
          ) ||
          o.test(t) ||
          !a.test(t) ||
          (null != e && t in Object(e))
        );
      };
    },
    function (t, e, n) {
      var r = n(124),
        i = n(125);
      t.exports = function (t) {
        return "symbol" == typeof t || (i(t) && "[object Symbol]" == r(t));
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "b", function () {
          return x;
        }),
          n.d(e, "d", function () {
            return _;
          }),
          n.d(e, "c", function () {
            return w;
          }),
          n.d(e, "a", function () {
            return k;
          }),
          n.d(e, "e", function () {
            return M;
          }),
          n.d(e, "f", function () {
            return S;
          });
        var r = n(0),
          i = n.n(r),
          a = n(5),
          o = n.n(a),
          s = n(154),
          l = n.n(s),
          u = n(195),
          c = n.n(u),
          h = n(257),
          d = n.n(h),
          f =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            };
        function p(t, e) {
          var n = {};
          for (var r in t)
            e.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
          return n;
        }
        function g(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function m(t, e) {
          if (!t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !e || ("object" !== typeof e && "function" !== typeof e)
            ? t
            : e;
        }
        function v(t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof e,
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            e &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(t, e)
                : (t.__proto__ = e));
        }
        var y =
            "undefined" !== typeof t &&
            Object({
              NODE_ENV: "production",
              PUBLIC_URL: "/demo/star-admin-free/react/template/demo_1/preview",
            }) &&
            "production",
          b = (function (t) {
            function e() {
              g(this, e);
              var n = m(this, t.call(this));
              return (
                (n.handleOnClick = function (t) {
                  var e = n.chartInstance,
                    r = n.props,
                    i = r.getDatasetAtEvent,
                    a = r.getElementAtEvent,
                    o = r.getElementsAtEvent,
                    s = r.onElementsClick;
                  i && i(e.getDatasetAtEvent(t), t),
                    a && a(e.getElementAtEvent(t), t),
                    o && o(e.getElementsAtEvent(t), t),
                    s && s(e.getElementsAtEvent(t), t);
                }),
                (n.ref = function (t) {
                  n.element = t;
                }),
                (n.chartInstance = void 0),
                n
              );
            }
            return (
              v(e, t),
              (e.prototype.componentDidMount = function () {
                this.renderChart();
              }),
              (e.prototype.componentDidUpdate = function () {
                if (this.props.redraw)
                  return this.destroyChart(), void this.renderChart();
                this.updateChart();
              }),
              (e.prototype.shouldComponentUpdate = function (t) {
                var e = this.props,
                  n = (e.redraw, e.type),
                  r = e.options,
                  i = e.plugins,
                  a = e.legend,
                  o = e.height,
                  s = e.width;
                if (!0 === t.redraw) return !0;
                if (o !== t.height || s !== t.width) return !0;
                if (n !== t.type) return !0;
                if (!c()(a, t.legend)) return !0;
                if (!c()(r, t.options)) return !0;
                var l = this.transformDataProp(t);
                return !c()(this.shadowDataProp, l) || !c()(i, t.plugins);
              }),
              (e.prototype.componentWillUnmount = function () {
                this.destroyChart();
              }),
              (e.prototype.transformDataProp = function (t) {
                var e = t.data;
                return "function" == typeof e ? e(this.element) : e;
              }),
              (e.prototype.memoizeDataProps = function () {
                if (this.props.data) {
                  var t = this.transformDataProp(this.props);
                  return (
                    (this.shadowDataProp = f({}, t, {
                      datasets:
                        t.datasets &&
                        t.datasets.map(function (t) {
                          return f({}, t);
                        }),
                    })),
                    this.saveCurrentDatasets(),
                    t
                  );
                }
              }),
              (e.prototype.checkDatasets = function (t) {
                var n = "production" !== y && "prod" !== y,
                  r = this.props.datasetKeyProvider !== e.getLabelAsKey,
                  i = t.length > 1;
                if (n && i && !r) {
                  var a = !1;
                  t.forEach(function (t) {
                    t.label || (a = !0);
                  }),
                    a &&
                      console.error(
                        '[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.',
                      );
                }
              }),
              (e.prototype.getCurrentDatasets = function () {
                return (
                  (this.chartInstance &&
                    this.chartInstance.config.data &&
                    this.chartInstance.config.data.datasets) ||
                  []
                );
              }),
              (e.prototype.saveCurrentDatasets = function () {
                var t = this;
                (this.datasets = this.datasets || {}),
                  this.getCurrentDatasets().forEach(function (e) {
                    t.datasets[t.props.datasetKeyProvider(e)] = e;
                  });
              }),
              (e.prototype.updateChart = function () {
                var t = this,
                  e = this.props.options,
                  n = this.memoizeDataProps(this.props);
                if (this.chartInstance) {
                  e &&
                    (this.chartInstance.options = l.a.helpers.configMerge(
                      this.chartInstance.options,
                      e,
                    ));
                  var r = this.getCurrentDatasets(),
                    i = n.datasets || [];
                  this.checkDatasets(r);
                  var a = d()(r, this.props.datasetKeyProvider);
                  this.chartInstance.config.data.datasets = i.map(function (e) {
                    var n = a[t.props.datasetKeyProvider(e)];
                    if (n && n.type === e.type && e.data) {
                      n.data.splice(e.data.length),
                        e.data.forEach(function (t, r) {
                          n.data[r] = e.data[r];
                        });
                      e.data;
                      var r = p(e, ["data"]);
                      return f({}, n, r);
                    }
                    return e;
                  });
                  n.datasets;
                  var o = p(n, ["datasets"]);
                  (this.chartInstance.config.data = f(
                    {},
                    this.chartInstance.config.data,
                    o,
                  )),
                    this.chartInstance.update();
                }
              }),
              (e.prototype.renderChart = function () {
                var t = this.props,
                  n = t.options,
                  r = t.legend,
                  i = t.type,
                  a = t.plugins,
                  o = this.element,
                  s = this.memoizeDataProps();
                "undefined" === typeof r ||
                  c()(e.defaultProps.legend, r) ||
                  (n.legend = r),
                  (this.chartInstance = new l.a(o, {
                    type: i,
                    data: s,
                    options: n,
                    plugins: a,
                  }));
              }),
              (e.prototype.destroyChart = function () {
                if (this.chartInstance) {
                  this.saveCurrentDatasets();
                  var t = Object.values(this.datasets);
                  (this.chartInstance.config.data.datasets = t),
                    this.chartInstance.destroy();
                }
              }),
              (e.prototype.render = function () {
                var t = this.props,
                  e = t.height,
                  n = t.width,
                  r = t.id;
                return i.a.createElement("canvas", {
                  ref: this.ref,
                  height: e,
                  width: n,
                  id: r,
                  onClick: this.handleOnClick,
                });
              }),
              e
            );
          })(i.a.Component);
        (b.getLabelAsKey = function (t) {
          return t.label;
        }),
          (b.propTypes = {
            data: o.a.oneOfType([o.a.object, o.a.func]).isRequired,
            getDatasetAtEvent: o.a.func,
            getElementAtEvent: o.a.func,
            getElementsAtEvent: o.a.func,
            height: o.a.number,
            legend: o.a.object,
            onElementsClick: o.a.func,
            options: o.a.object,
            plugins: o.a.arrayOf(o.a.object),
            redraw: o.a.bool,
            type: function (t, e, n) {
              if (!l.a.controllers[t[e]])
                return new Error(
                  "Invalid chart type `" + t[e] + "` supplied to `" + n + "`.",
                );
            },
            width: o.a.number,
            datasetKeyProvider: o.a.func,
          }),
          (b.defaultProps = {
            legend: { display: !0, position: "bottom" },
            type: "doughnut",
            height: 150,
            width: 300,
            redraw: !1,
            options: {},
            datasetKeyProvider: b.getLabelAsKey,
          });
        var x = (function (t) {
            function e() {
              return g(this, e), m(this, t.apply(this, arguments));
            }
            return (
              v(e, t),
              (e.prototype.render = function () {
                var t = this;
                return i.a.createElement(
                  b,
                  f({}, this.props, {
                    ref: function (e) {
                      return (t.chartInstance = e && e.chartInstance);
                    },
                    type: "doughnut",
                  }),
                );
              }),
              e
            );
          })(i.a.Component),
          _ = (function (t) {
            function e() {
              return g(this, e), m(this, t.apply(this, arguments));
            }
            return (
              v(e, t),
              (e.prototype.render = function () {
                var t = this;
                return i.a.createElement(
                  b,
                  f({}, this.props, {
                    ref: function (e) {
                      return (t.chartInstance = e && e.chartInstance);
                    },
                    type: "pie",
                  }),
                );
              }),
              e
            );
          })(i.a.Component),
          w = (function (t) {
            function e() {
              return g(this, e), m(this, t.apply(this, arguments));
            }
            return (
              v(e, t),
              (e.prototype.render = function () {
                var t = this;
                return i.a.createElement(
                  b,
                  f({}, this.props, {
                    ref: function (e) {
                      return (t.chartInstance = e && e.chartInstance);
                    },
                    type: "line",
                  }),
                );
              }),
              e
            );
          })(i.a.Component),
          k = (function (t) {
            function e() {
              return g(this, e), m(this, t.apply(this, arguments));
            }
            return (
              v(e, t),
              (e.prototype.render = function () {
                var t = this;
                return i.a.createElement(
                  b,
                  f({}, this.props, {
                    ref: function (e) {
                      return (t.chartInstance = e && e.chartInstance);
                    },
                    type: "bar",
                  }),
                );
              }),
              e
            );
          })(i.a.Component),
          M =
            ((function (t) {
              function e() {
                return g(this, e), m(this, t.apply(this, arguments));
              }
              v(e, t),
                (e.prototype.render = function () {
                  var t = this;
                  return i.a.createElement(
                    b,
                    f({}, this.props, {
                      ref: function (e) {
                        return (t.chartInstance = e && e.chartInstance);
                      },
                      type: "horizontalBar",
                    }),
                  );
                });
            })(i.a.Component),
            (function (t) {
              function e() {
                return g(this, e), m(this, t.apply(this, arguments));
              }
              return (
                v(e, t),
                (e.prototype.render = function () {
                  var t = this;
                  return i.a.createElement(
                    b,
                    f({}, this.props, {
                      ref: function (e) {
                        return (t.chartInstance = e && e.chartInstance);
                      },
                      type: "radar",
                    }),
                  );
                }),
                e
              );
            })(i.a.Component)),
          S =
            ((function (t) {
              function e() {
                return g(this, e), m(this, t.apply(this, arguments));
              }
              v(e, t),
                (e.prototype.render = function () {
                  var t = this;
                  return i.a.createElement(
                    b,
                    f({}, this.props, {
                      ref: function (e) {
                        return (t.chartInstance = e && e.chartInstance);
                      },
                      type: "polarArea",
                    }),
                  );
                });
            })(i.a.Component),
            (function (t) {
              function e() {
                return g(this, e), m(this, t.apply(this, arguments));
              }
              v(e, t),
                (e.prototype.render = function () {
                  var t = this;
                  return i.a.createElement(
                    b,
                    f({}, this.props, {
                      ref: function (e) {
                        return (t.chartInstance = e && e.chartInstance);
                      },
                      type: "bubble",
                    }),
                  );
                });
            })(i.a.Component),
            (function (t) {
              function e() {
                return g(this, e), m(this, t.apply(this, arguments));
              }
              return (
                v(e, t),
                (e.prototype.render = function () {
                  var t = this;
                  return i.a.createElement(
                    b,
                    f({}, this.props, {
                      ref: function (e) {
                        return (t.chartInstance = e && e.chartInstance);
                      },
                      type: "scatter",
                    }),
                  );
                }),
                e
              );
            })(i.a.Component));
        l.a.defaults;
      }).call(this, n(193));
    },
    function (t, e, n) {
      t.exports = (function (t) {
        "use strict";
        t = t && t.hasOwnProperty("default") ? t.default : t;
        var e = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          n = (function (t, e) {
            return t((e = { exports: {} }), e.exports), e.exports;
          })(function (t) {
            var n = {};
            for (var r in e) e.hasOwnProperty(r) && (n[e[r]] = r);
            var i = (t.exports = {
              rgb: { channels: 3, labels: "rgb" },
              hsl: { channels: 3, labels: "hsl" },
              hsv: { channels: 3, labels: "hsv" },
              hwb: { channels: 3, labels: "hwb" },
              cmyk: { channels: 4, labels: "cmyk" },
              xyz: { channels: 3, labels: "xyz" },
              lab: { channels: 3, labels: "lab" },
              lch: { channels: 3, labels: "lch" },
              hex: { channels: 1, labels: ["hex"] },
              keyword: { channels: 1, labels: ["keyword"] },
              ansi16: { channels: 1, labels: ["ansi16"] },
              ansi256: { channels: 1, labels: ["ansi256"] },
              hcg: { channels: 3, labels: ["h", "c", "g"] },
              apple: { channels: 3, labels: ["r16", "g16", "b16"] },
              gray: { channels: 1, labels: ["gray"] },
            });
            for (var a in i)
              if (i.hasOwnProperty(a)) {
                if (!("channels" in i[a]))
                  throw new Error("missing channels property: " + a);
                if (!("labels" in i[a]))
                  throw new Error("missing channel labels property: " + a);
                if (i[a].labels.length !== i[a].channels)
                  throw new Error("channel and label counts mismatch: " + a);
                var o = i[a].channels,
                  s = i[a].labels;
                delete i[a].channels,
                  delete i[a].labels,
                  Object.defineProperty(i[a], "channels", { value: o }),
                  Object.defineProperty(i[a], "labels", { value: s });
              }
            (i.rgb.hsl = function (t) {
              var e,
                n,
                r = t[0] / 255,
                i = t[1] / 255,
                a = t[2] / 255,
                o = Math.min(r, i, a),
                s = Math.max(r, i, a),
                l = s - o;
              return (
                s === o
                  ? (e = 0)
                  : r === s
                    ? (e = (i - a) / l)
                    : i === s
                      ? (e = 2 + (a - r) / l)
                      : a === s && (e = 4 + (r - i) / l),
                (e = Math.min(60 * e, 360)) < 0 && (e += 360),
                (n = (o + s) / 2),
                [
                  e,
                  100 *
                    (s === o ? 0 : n <= 0.5 ? l / (s + o) : l / (2 - s - o)),
                  100 * n,
                ]
              );
            }),
              (i.rgb.hsv = function (t) {
                var e,
                  n,
                  r,
                  i,
                  a,
                  o = t[0] / 255,
                  s = t[1] / 255,
                  l = t[2] / 255,
                  u = Math.max(o, s, l),
                  c = u - Math.min(o, s, l),
                  h = function (t) {
                    return (u - t) / 6 / c + 0.5;
                  };
                return (
                  0 === c
                    ? (i = a = 0)
                    : ((a = c / u),
                      (e = h(o)),
                      (n = h(s)),
                      (r = h(l)),
                      o === u
                        ? (i = r - n)
                        : s === u
                          ? (i = 1 / 3 + e - r)
                          : l === u && (i = 2 / 3 + n - e),
                      i < 0 ? (i += 1) : i > 1 && (i -= 1)),
                  [360 * i, 100 * a, 100 * u]
                );
              }),
              (i.rgb.hwb = function (t) {
                var e = t[0],
                  n = t[1],
                  r = t[2];
                return [
                  i.rgb.hsl(t)[0],
                  (1 / 255) * Math.min(e, Math.min(n, r)) * 100,
                  100 * (r = 1 - (1 / 255) * Math.max(e, Math.max(n, r))),
                ];
              }),
              (i.rgb.cmyk = function (t) {
                var e,
                  n = t[0] / 255,
                  r = t[1] / 255,
                  i = t[2] / 255;
                return [
                  100 *
                    ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - i))) / (1 - e) ||
                      0),
                  100 * ((1 - r - e) / (1 - e) || 0),
                  100 * ((1 - i - e) / (1 - e) || 0),
                  100 * e,
                ];
              }),
              (i.rgb.keyword = function (t) {
                var r = n[t];
                if (r) return r;
                var i,
                  a,
                  o,
                  s = 1 / 0;
                for (var l in e)
                  if (e.hasOwnProperty(l)) {
                    var u = e[l],
                      c =
                        ((a = t),
                        (o = u),
                        Math.pow(a[0] - o[0], 2) +
                          Math.pow(a[1] - o[1], 2) +
                          Math.pow(a[2] - o[2], 2));
                    c < s && ((s = c), (i = l));
                  }
                return i;
              }),
              (i.keyword.rgb = function (t) {
                return e[t];
              }),
              (i.rgb.xyz = function (t) {
                var e = t[0] / 255,
                  n = t[1] / 255,
                  r = t[2] / 255;
                return [
                  100 *
                    (0.4124 *
                      (e =
                        e > 0.04045
                          ? Math.pow((e + 0.055) / 1.055, 2.4)
                          : e / 12.92) +
                      0.3576 *
                        (n =
                          n > 0.04045
                            ? Math.pow((n + 0.055) / 1.055, 2.4)
                            : n / 12.92) +
                      0.1805 *
                        (r =
                          r > 0.04045
                            ? Math.pow((r + 0.055) / 1.055, 2.4)
                            : r / 12.92)),
                  100 * (0.2126 * e + 0.7152 * n + 0.0722 * r),
                  100 * (0.0193 * e + 0.1192 * n + 0.9505 * r),
                ];
              }),
              (i.rgb.lab = function (t) {
                var e = i.rgb.xyz(t),
                  n = e[0],
                  r = e[1],
                  a = e[2];
                return (
                  (r /= 100),
                  (a /= 108.883),
                  (n =
                    (n /= 95.047) > 0.008856
                      ? Math.pow(n, 1 / 3)
                      : 7.787 * n + 16 / 116),
                  [
                    116 *
                      (r =
                        r > 0.008856
                          ? Math.pow(r, 1 / 3)
                          : 7.787 * r + 16 / 116) -
                      16,
                    500 * (n - r),
                    200 *
                      (r -
                        (a =
                          a > 0.008856
                            ? Math.pow(a, 1 / 3)
                            : 7.787 * a + 16 / 116)),
                  ]
                );
              }),
              (i.hsl.rgb = function (t) {
                var e,
                  n,
                  r,
                  i,
                  a,
                  o = t[0] / 360,
                  s = t[1] / 100,
                  l = t[2] / 100;
                if (0 === s) return [(a = 255 * l), a, a];
                (e = 2 * l - (n = l < 0.5 ? l * (1 + s) : l + s - l * s)),
                  (i = [0, 0, 0]);
                for (var u = 0; u < 3; u++)
                  (r = o + (1 / 3) * -(u - 1)) < 0 && r++,
                    r > 1 && r--,
                    (a =
                      6 * r < 1
                        ? e + 6 * (n - e) * r
                        : 2 * r < 1
                          ? n
                          : 3 * r < 2
                            ? e + (n - e) * (2 / 3 - r) * 6
                            : e),
                    (i[u] = 255 * a);
                return i;
              }),
              (i.hsl.hsv = function (t) {
                var e = t[0],
                  n = t[1] / 100,
                  r = t[2] / 100,
                  i = n,
                  a = Math.max(r, 0.01);
                return (
                  (n *= (r *= 2) <= 1 ? r : 2 - r),
                  (i *= a <= 1 ? a : 2 - a),
                  [
                    e,
                    100 * (0 === r ? (2 * i) / (a + i) : (2 * n) / (r + n)),
                    ((r + n) / 2) * 100,
                  ]
                );
              }),
              (i.hsv.rgb = function (t) {
                var e = t[0] / 60,
                  n = t[1] / 100,
                  r = t[2] / 100,
                  i = Math.floor(e) % 6,
                  a = e - Math.floor(e),
                  o = 255 * r * (1 - n),
                  s = 255 * r * (1 - n * a),
                  l = 255 * r * (1 - n * (1 - a));
                switch (((r *= 255), i)) {
                  case 0:
                    return [r, l, o];
                  case 1:
                    return [s, r, o];
                  case 2:
                    return [o, r, l];
                  case 3:
                    return [o, s, r];
                  case 4:
                    return [l, o, r];
                  case 5:
                    return [r, o, s];
                }
              }),
              (i.hsv.hsl = function (t) {
                var e,
                  n,
                  r,
                  i = t[0],
                  a = t[1] / 100,
                  o = t[2] / 100,
                  s = Math.max(o, 0.01);
                return (
                  (r = (2 - a) * o),
                  (n = a * s),
                  [
                    i,
                    100 * (n = (n /= (e = (2 - a) * s) <= 1 ? e : 2 - e) || 0),
                    100 * (r /= 2),
                  ]
                );
              }),
              (i.hwb.rgb = function (t) {
                var e,
                  n,
                  r,
                  i,
                  a,
                  o,
                  s,
                  l = t[0] / 360,
                  u = t[1] / 100,
                  c = t[2] / 100,
                  h = u + c;
                switch (
                  (h > 1 && ((u /= h), (c /= h)),
                  (r = 6 * l - (e = Math.floor(6 * l))),
                  0 !== (1 & e) && (r = 1 - r),
                  (i = u + r * ((n = 1 - c) - u)),
                  e)
                ) {
                  default:
                  case 6:
                  case 0:
                    (a = n), (o = i), (s = u);
                    break;
                  case 1:
                    (a = i), (o = n), (s = u);
                    break;
                  case 2:
                    (a = u), (o = n), (s = i);
                    break;
                  case 3:
                    (a = u), (o = i), (s = n);
                    break;
                  case 4:
                    (a = i), (o = u), (s = n);
                    break;
                  case 5:
                    (a = n), (o = u), (s = i);
                }
                return [255 * a, 255 * o, 255 * s];
              }),
              (i.cmyk.rgb = function (t) {
                var e = t[0] / 100,
                  n = t[1] / 100,
                  r = t[2] / 100,
                  i = t[3] / 100;
                return [
                  255 * (1 - Math.min(1, e * (1 - i) + i)),
                  255 * (1 - Math.min(1, n * (1 - i) + i)),
                  255 * (1 - Math.min(1, r * (1 - i) + i)),
                ];
              }),
              (i.xyz.rgb = function (t) {
                var e,
                  n,
                  r,
                  i = t[0] / 100,
                  a = t[1] / 100,
                  o = t[2] / 100;
                return (
                  (n = -0.9689 * i + 1.8758 * a + 0.0415 * o),
                  (r = 0.0557 * i + -0.204 * a + 1.057 * o),
                  (e =
                    (e = 3.2406 * i + -1.5372 * a + -0.4986 * o) > 0.0031308
                      ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                      : 12.92 * e),
                  (n =
                    n > 0.0031308
                      ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
                      : 12.92 * n),
                  (r =
                    r > 0.0031308
                      ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055
                      : 12.92 * r),
                  [
                    255 * (e = Math.min(Math.max(0, e), 1)),
                    255 * (n = Math.min(Math.max(0, n), 1)),
                    255 * (r = Math.min(Math.max(0, r), 1)),
                  ]
                );
              }),
              (i.xyz.lab = function (t) {
                var e = t[0],
                  n = t[1],
                  r = t[2];
                return (
                  (n /= 100),
                  (r /= 108.883),
                  (e =
                    (e /= 95.047) > 0.008856
                      ? Math.pow(e, 1 / 3)
                      : 7.787 * e + 16 / 116),
                  [
                    116 *
                      (n =
                        n > 0.008856
                          ? Math.pow(n, 1 / 3)
                          : 7.787 * n + 16 / 116) -
                      16,
                    500 * (e - n),
                    200 *
                      (n -
                        (r =
                          r > 0.008856
                            ? Math.pow(r, 1 / 3)
                            : 7.787 * r + 16 / 116)),
                  ]
                );
              }),
              (i.lab.xyz = function (t) {
                var e,
                  n,
                  r,
                  i = t[0];
                (e = t[1] / 500 + (n = (i + 16) / 116)), (r = n - t[2] / 200);
                var a = Math.pow(n, 3),
                  o = Math.pow(e, 3),
                  s = Math.pow(r, 3);
                return (
                  (n = a > 0.008856 ? a : (n - 16 / 116) / 7.787),
                  (e = o > 0.008856 ? o : (e - 16 / 116) / 7.787),
                  (r = s > 0.008856 ? s : (r - 16 / 116) / 7.787),
                  [(e *= 95.047), (n *= 100), (r *= 108.883)]
                );
              }),
              (i.lab.lch = function (t) {
                var e,
                  n = t[0],
                  r = t[1],
                  i = t[2];
                return (
                  (e = (360 * Math.atan2(i, r)) / 2 / Math.PI) < 0 &&
                    (e += 360),
                  [n, Math.sqrt(r * r + i * i), e]
                );
              }),
              (i.lch.lab = function (t) {
                var e,
                  n = t[0],
                  r = t[1];
                return (
                  (e = (t[2] / 360) * 2 * Math.PI),
                  [n, r * Math.cos(e), r * Math.sin(e)]
                );
              }),
              (i.rgb.ansi16 = function (t) {
                var e = t[0],
                  n = t[1],
                  r = t[2],
                  a = 1 in arguments ? arguments[1] : i.rgb.hsv(t)[2];
                if (0 === (a = Math.round(a / 50))) return 30;
                var o =
                  30 +
                  ((Math.round(r / 255) << 2) |
                    (Math.round(n / 255) << 1) |
                    Math.round(e / 255));
                return 2 === a && (o += 60), o;
              }),
              (i.hsv.ansi16 = function (t) {
                return i.rgb.ansi16(i.hsv.rgb(t), t[2]);
              }),
              (i.rgb.ansi256 = function (t) {
                var e = t[0],
                  n = t[1],
                  r = t[2];
                return e === n && n === r
                  ? e < 8
                    ? 16
                    : e > 248
                      ? 231
                      : Math.round(((e - 8) / 247) * 24) + 232
                  : 16 +
                      36 * Math.round((e / 255) * 5) +
                      6 * Math.round((n / 255) * 5) +
                      Math.round((r / 255) * 5);
              }),
              (i.ansi16.rgb = function (t) {
                var e = t % 10;
                if (0 === e || 7 === e)
                  return t > 50 && (e += 3.5), [(e = (e / 10.5) * 255), e, e];
                var n = 0.5 * (1 + ~~(t > 50));
                return [
                  (1 & e) * n * 255,
                  ((e >> 1) & 1) * n * 255,
                  ((e >> 2) & 1) * n * 255,
                ];
              }),
              (i.ansi256.rgb = function (t) {
                if (t >= 232) {
                  var e = 10 * (t - 232) + 8;
                  return [e, e, e];
                }
                var n;
                return (
                  (t -= 16),
                  [
                    (Math.floor(t / 36) / 5) * 255,
                    (Math.floor((n = t % 36) / 6) / 5) * 255,
                    ((n % 6) / 5) * 255,
                  ]
                );
              }),
              (i.rgb.hex = function (t) {
                var e = (
                  ((255 & Math.round(t[0])) << 16) +
                  ((255 & Math.round(t[1])) << 8) +
                  (255 & Math.round(t[2]))
                )
                  .toString(16)
                  .toUpperCase();
                return "000000".substring(e.length) + e;
              }),
              (i.hex.rgb = function (t) {
                var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!e) return [0, 0, 0];
                var n = e[0];
                3 === e[0].length &&
                  (n = n
                    .split("")
                    .map(function (t) {
                      return t + t;
                    })
                    .join(""));
                var r = parseInt(n, 16);
                return [(r >> 16) & 255, (r >> 8) & 255, 255 & r];
              }),
              (i.rgb.hcg = function (t) {
                var e,
                  n = t[0] / 255,
                  r = t[1] / 255,
                  i = t[2] / 255,
                  a = Math.max(Math.max(n, r), i),
                  o = Math.min(Math.min(n, r), i),
                  s = a - o;
                return (
                  (e =
                    s <= 0
                      ? 0
                      : a === n
                        ? ((r - i) / s) % 6
                        : a === r
                          ? 2 + (i - n) / s
                          : 4 + (n - r) / s + 4),
                  (e /= 6),
                  [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
                );
              }),
              (i.hsl.hcg = function (t) {
                var e = t[1] / 100,
                  n = t[2] / 100,
                  r = 1,
                  i = 0;
                return (
                  (r = n < 0.5 ? 2 * e * n : 2 * e * (1 - n)) < 1 &&
                    (i = (n - 0.5 * r) / (1 - r)),
                  [t[0], 100 * r, 100 * i]
                );
              }),
              (i.hsv.hcg = function (t) {
                var e = t[1] / 100,
                  n = t[2] / 100,
                  r = e * n,
                  i = 0;
                return (
                  r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i]
                );
              }),
              (i.hcg.rgb = function (t) {
                var e = t[0] / 360,
                  n = t[1] / 100,
                  r = t[2] / 100;
                if (0 === n) return [255 * r, 255 * r, 255 * r];
                var i,
                  a = [0, 0, 0],
                  o = (e % 1) * 6,
                  s = o % 1,
                  l = 1 - s;
                switch (Math.floor(o)) {
                  case 0:
                    (a[0] = 1), (a[1] = s), (a[2] = 0);
                    break;
                  case 1:
                    (a[0] = l), (a[1] = 1), (a[2] = 0);
                    break;
                  case 2:
                    (a[0] = 0), (a[1] = 1), (a[2] = s);
                    break;
                  case 3:
                    (a[0] = 0), (a[1] = l), (a[2] = 1);
                    break;
                  case 4:
                    (a[0] = s), (a[1] = 0), (a[2] = 1);
                    break;
                  default:
                    (a[0] = 1), (a[1] = 0), (a[2] = l);
                }
                return (
                  (i = (1 - n) * r),
                  [
                    255 * (n * a[0] + i),
                    255 * (n * a[1] + i),
                    255 * (n * a[2] + i),
                  ]
                );
              }),
              (i.hcg.hsv = function (t) {
                var e = t[1] / 100,
                  n = e + (t[2] / 100) * (1 - e),
                  r = 0;
                return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n];
              }),
              (i.hcg.hsl = function (t) {
                var e = t[1] / 100,
                  n = (t[2] / 100) * (1 - e) + 0.5 * e,
                  r = 0;
                return (
                  n > 0 && n < 0.5
                    ? (r = e / (2 * n))
                    : n >= 0.5 && n < 1 && (r = e / (2 * (1 - n))),
                  [t[0], 100 * r, 100 * n]
                );
              }),
              (i.hcg.hwb = function (t) {
                var e = t[1] / 100,
                  n = e + (t[2] / 100) * (1 - e);
                return [t[0], 100 * (n - e), 100 * (1 - n)];
              }),
              (i.hwb.hcg = function (t) {
                var e = t[1] / 100,
                  n = 1 - t[2] / 100,
                  r = n - e,
                  i = 0;
                return (
                  r < 1 && (i = (n - r) / (1 - r)), [t[0], 100 * r, 100 * i]
                );
              }),
              (i.apple.rgb = function (t) {
                return [
                  (t[0] / 65535) * 255,
                  (t[1] / 65535) * 255,
                  (t[2] / 65535) * 255,
                ];
              }),
              (i.rgb.apple = function (t) {
                return [
                  (t[0] / 255) * 65535,
                  (t[1] / 255) * 65535,
                  (t[2] / 255) * 65535,
                ];
              }),
              (i.gray.rgb = function (t) {
                return [
                  (t[0] / 100) * 255,
                  (t[0] / 100) * 255,
                  (t[0] / 100) * 255,
                ];
              }),
              (i.gray.hsl = i.gray.hsv =
                function (t) {
                  return [0, 0, t[0]];
                }),
              (i.gray.hwb = function (t) {
                return [0, 100, t[0]];
              }),
              (i.gray.cmyk = function (t) {
                return [0, 0, 0, t[0]];
              }),
              (i.gray.lab = function (t) {
                return [t[0], 0, 0];
              }),
              (i.gray.hex = function (t) {
                var e = 255 & Math.round((t[0] / 100) * 255),
                  n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
                return "000000".substring(n.length) + n;
              }),
              (i.rgb.gray = function (t) {
                return [((t[0] + t[1] + t[2]) / 3 / 255) * 100];
              });
          });
        function r(t) {
          var e = (function () {
              for (
                var t = {}, e = Object.keys(n), r = e.length, i = 0;
                i < r;
                i++
              )
                t[e[i]] = { distance: -1, parent: null };
              return t;
            })(),
            r = [t];
          for (e[t].distance = 0; r.length; )
            for (
              var i = r.pop(), a = Object.keys(n[i]), o = a.length, s = 0;
              s < o;
              s++
            ) {
              var l = a[s],
                u = e[l];
              -1 === u.distance &&
                ((u.distance = e[i].distance + 1),
                (u.parent = i),
                r.unshift(l));
            }
          return e;
        }
        function i(t, e) {
          return function (n) {
            return e(t(n));
          };
        }
        function a(t, e) {
          for (
            var r = [e[t].parent, t], a = n[e[t].parent][t], o = e[t].parent;
            e[o].parent;

          )
            r.unshift(e[o].parent),
              (a = i(n[e[o].parent][o], a)),
              (o = e[o].parent);
          return (a.conversion = r), a;
        }
        n.rgb,
          n.hsl,
          n.hsv,
          n.hwb,
          n.cmyk,
          n.xyz,
          n.lab,
          n.lch,
          n.hex,
          n.keyword,
          n.ansi16,
          n.ansi256,
          n.hcg,
          n.apple,
          n.gray;
        var o = {};
        Object.keys(n).forEach(function (t) {
          (o[t] = {}),
            Object.defineProperty(o[t], "channels", { value: n[t].channels }),
            Object.defineProperty(o[t], "labels", { value: n[t].labels });
          var e = (function (t) {
            for (
              var e = r(t), n = {}, i = Object.keys(e), o = i.length, s = 0;
              s < o;
              s++
            ) {
              var l = i[s];
              null !== e[l].parent && (n[l] = a(l, e));
            }
            return n;
          })(t);
          Object.keys(e).forEach(function (n) {
            var r = e[n];
            (o[t][n] = (function (t) {
              var e = function (e) {
                if (void 0 === e || null === e) return e;
                arguments.length > 1 &&
                  (e = Array.prototype.slice.call(arguments));
                var n = t(e);
                if ("object" === typeof n)
                  for (var r = n.length, i = 0; i < r; i++)
                    n[i] = Math.round(n[i]);
                return n;
              };
              return "conversion" in t && (e.conversion = t.conversion), e;
            })(r)),
              (o[t][n].raw = (function (t) {
                var e = function (e) {
                  return void 0 === e || null === e
                    ? e
                    : (arguments.length > 1 &&
                        (e = Array.prototype.slice.call(arguments)),
                      t(e));
                };
                return "conversion" in t && (e.conversion = t.conversion), e;
              })(r));
          });
        });
        var s = o,
          l = {
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            grey: [128, 128, 128],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            rebeccapurple: [102, 51, 153],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          u = {
            getRgba: c,
            getHsla: h,
            getRgb: function (t) {
              var e = c(t);
              return e && e.slice(0, 3);
            },
            getHsl: function (t) {
              var e = h(t);
              return e && e.slice(0, 3);
            },
            getHwb: d,
            getAlpha: function (t) {
              var e = c(t);
              return e || (e = h(t)) || (e = d(t)) ? e[3] : void 0;
            },
            hexString: function (t, e) {
              return (
                (e = void 0 !== e && 3 === t.length ? e : t[3]),
                "#" +
                  v(t[0]) +
                  v(t[1]) +
                  v(t[2]) +
                  (e >= 0 && e < 1 ? v(Math.round(255 * e)) : "")
              );
            },
            rgbString: function (t, e) {
              return e < 1 || (t[3] && t[3] < 1)
                ? f(t, e)
                : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
            },
            rgbaString: f,
            percentString: function (t, e) {
              if (e < 1 || (t[3] && t[3] < 1)) return p(t, e);
              var n = Math.round((t[0] / 255) * 100),
                r = Math.round((t[1] / 255) * 100),
                i = Math.round((t[2] / 255) * 100);
              return "rgb(" + n + "%, " + r + "%, " + i + "%)";
            },
            percentaString: p,
            hslString: function (t, e) {
              return e < 1 || (t[3] && t[3] < 1)
                ? g(t, e)
                : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
            },
            hslaString: g,
            hwbString: function (t, e) {
              return (
                void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "hwb(" +
                  t[0] +
                  ", " +
                  t[1] +
                  "%, " +
                  t[2] +
                  "%" +
                  (void 0 !== e && 1 !== e ? ", " + e : "") +
                  ")"
              );
            },
            keyword: function (t) {
              return y[t.slice(0, 3)];
            },
          };
        function c(t) {
          if (t) {
            var e = [0, 0, 0],
              n = 1,
              r = t.match(/^#([a-fA-F0-9]{3,4})$/i),
              i = "";
            if (r) {
              i = (r = r[1])[3];
              for (var a = 0; a < e.length; a++)
                e[a] = parseInt(r[a] + r[a], 16);
              i && (n = Math.round((parseInt(i + i, 16) / 255) * 100) / 100);
            } else if ((r = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i))) {
              for (i = r[2], r = r[1], a = 0; a < e.length; a++)
                e[a] = parseInt(r.slice(2 * a, 2 * a + 2), 16);
              i && (n = Math.round((parseInt(i, 16) / 255) * 100) / 100);
            } else if (
              (r = t.match(
                /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
              ))
            ) {
              for (a = 0; a < e.length; a++) e[a] = parseInt(r[a + 1]);
              n = parseFloat(r[4]);
            } else if (
              (r = t.match(
                /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
              ))
            ) {
              for (a = 0; a < e.length; a++)
                e[a] = Math.round(2.55 * parseFloat(r[a + 1]));
              n = parseFloat(r[4]);
            } else if ((r = t.match(/(\w+)/))) {
              if ("transparent" == r[1]) return [0, 0, 0, 0];
              if (!(e = l[r[1]])) return;
            }
            for (a = 0; a < e.length; a++) e[a] = m(e[a], 0, 255);
            return (n = n || 0 == n ? m(n, 0, 1) : 1), (e[3] = n), e;
          }
        }
        function h(t) {
          if (t) {
            var e = t.match(
              /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
            );
            if (e) {
              var n = parseFloat(e[4]);
              return [
                m(parseInt(e[1]), 0, 360),
                m(parseFloat(e[2]), 0, 100),
                m(parseFloat(e[3]), 0, 100),
                m(isNaN(n) ? 1 : n, 0, 1),
              ];
            }
          }
        }
        function d(t) {
          if (t) {
            var e = t.match(
              /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,
            );
            if (e) {
              var n = parseFloat(e[4]);
              return [
                m(parseInt(e[1]), 0, 360),
                m(parseFloat(e[2]), 0, 100),
                m(parseFloat(e[3]), 0, 100),
                m(isNaN(n) ? 1 : n, 0, 1),
              ];
            }
          }
        }
        function f(t, e) {
          return (
            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
            "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
          );
        }
        function p(t, e) {
          return (
            "rgba(" +
            Math.round((t[0] / 255) * 100) +
            "%, " +
            Math.round((t[1] / 255) * 100) +
            "%, " +
            Math.round((t[2] / 255) * 100) +
            "%, " +
            (e || t[3] || 1) +
            ")"
          );
        }
        function g(t, e) {
          return (
            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
            "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
          );
        }
        function m(t, e, n) {
          return Math.min(Math.max(e, t), n);
        }
        function v(t) {
          var e = t.toString(16).toUpperCase();
          return e.length < 2 ? "0" + e : e;
        }
        var y = {};
        for (var b in l) y[l[b]] = b;
        var x = function t(e) {
          return e instanceof t
            ? e
            : this instanceof t
              ? ((this.valid = !1),
                (this.values = {
                  rgb: [0, 0, 0],
                  hsl: [0, 0, 0],
                  hsv: [0, 0, 0],
                  hwb: [0, 0, 0],
                  cmyk: [0, 0, 0, 0],
                  alpha: 1,
                }),
                void ("string" === typeof e
                  ? (n = u.getRgba(e))
                    ? this.setValues("rgb", n)
                    : (n = u.getHsla(e))
                      ? this.setValues("hsl", n)
                      : (n = u.getHwb(e)) && this.setValues("hwb", n)
                  : "object" === typeof e &&
                    (void 0 !== (n = e).r || void 0 !== n.red
                      ? this.setValues("rgb", n)
                      : void 0 !== n.l || void 0 !== n.lightness
                        ? this.setValues("hsl", n)
                        : void 0 !== n.v || void 0 !== n.value
                          ? this.setValues("hsv", n)
                          : void 0 !== n.w || void 0 !== n.whiteness
                            ? this.setValues("hwb", n)
                            : (void 0 === n.c && void 0 === n.cyan) ||
                              this.setValues("cmyk", n))))
              : new t(e);
          var n;
        };
        ((x.prototype = {
          isValid: function () {
            return this.valid;
          },
          rgb: function () {
            return this.setSpace("rgb", arguments);
          },
          hsl: function () {
            return this.setSpace("hsl", arguments);
          },
          hsv: function () {
            return this.setSpace("hsv", arguments);
          },
          hwb: function () {
            return this.setSpace("hwb", arguments);
          },
          cmyk: function () {
            return this.setSpace("cmyk", arguments);
          },
          rgbArray: function () {
            return this.values.rgb;
          },
          hslArray: function () {
            return this.values.hsl;
          },
          hsvArray: function () {
            return this.values.hsv;
          },
          hwbArray: function () {
            var t = this.values;
            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
          },
          cmykArray: function () {
            return this.values.cmyk;
          },
          rgbaArray: function () {
            var t = this.values;
            return t.rgb.concat([t.alpha]);
          },
          hslaArray: function () {
            var t = this.values;
            return t.hsl.concat([t.alpha]);
          },
          alpha: function (t) {
            return void 0 === t
              ? this.values.alpha
              : (this.setValues("alpha", t), this);
          },
          red: function (t) {
            return this.setChannel("rgb", 0, t);
          },
          green: function (t) {
            return this.setChannel("rgb", 1, t);
          },
          blue: function (t) {
            return this.setChannel("rgb", 2, t);
          },
          hue: function (t) {
            return (
              t && (t = (t %= 360) < 0 ? 360 + t : t),
              this.setChannel("hsl", 0, t)
            );
          },
          saturation: function (t) {
            return this.setChannel("hsl", 1, t);
          },
          lightness: function (t) {
            return this.setChannel("hsl", 2, t);
          },
          saturationv: function (t) {
            return this.setChannel("hsv", 1, t);
          },
          whiteness: function (t) {
            return this.setChannel("hwb", 1, t);
          },
          blackness: function (t) {
            return this.setChannel("hwb", 2, t);
          },
          value: function (t) {
            return this.setChannel("hsv", 2, t);
          },
          cyan: function (t) {
            return this.setChannel("cmyk", 0, t);
          },
          magenta: function (t) {
            return this.setChannel("cmyk", 1, t);
          },
          yellow: function (t) {
            return this.setChannel("cmyk", 2, t);
          },
          black: function (t) {
            return this.setChannel("cmyk", 3, t);
          },
          hexString: function () {
            return u.hexString(this.values.rgb);
          },
          rgbString: function () {
            return u.rgbString(this.values.rgb, this.values.alpha);
          },
          rgbaString: function () {
            return u.rgbaString(this.values.rgb, this.values.alpha);
          },
          percentString: function () {
            return u.percentString(this.values.rgb, this.values.alpha);
          },
          hslString: function () {
            return u.hslString(this.values.hsl, this.values.alpha);
          },
          hslaString: function () {
            return u.hslaString(this.values.hsl, this.values.alpha);
          },
          hwbString: function () {
            return u.hwbString(this.values.hwb, this.values.alpha);
          },
          keyword: function () {
            return u.keyword(this.values.rgb, this.values.alpha);
          },
          rgbNumber: function () {
            var t = this.values.rgb;
            return (t[0] << 16) | (t[1] << 8) | t[2];
          },
          luminosity: function () {
            for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
              var r = t[n] / 255;
              e[n] =
                r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
          },
          contrast: function (t) {
            var e = this.luminosity(),
              n = t.luminosity();
            return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
          },
          level: function (t) {
            var e = this.contrast(t);
            return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
          },
          dark: function () {
            var t = this.values.rgb;
            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
          },
          light: function () {
            return !this.dark();
          },
          negate: function () {
            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
            return this.setValues("rgb", t), this;
          },
          lighten: function (t) {
            var e = this.values.hsl;
            return (e[2] += e[2] * t), this.setValues("hsl", e), this;
          },
          darken: function (t) {
            var e = this.values.hsl;
            return (e[2] -= e[2] * t), this.setValues("hsl", e), this;
          },
          saturate: function (t) {
            var e = this.values.hsl;
            return (e[1] += e[1] * t), this.setValues("hsl", e), this;
          },
          desaturate: function (t) {
            var e = this.values.hsl;
            return (e[1] -= e[1] * t), this.setValues("hsl", e), this;
          },
          whiten: function (t) {
            var e = this.values.hwb;
            return (e[1] += e[1] * t), this.setValues("hwb", e), this;
          },
          blacken: function (t) {
            var e = this.values.hwb;
            return (e[2] += e[2] * t), this.setValues("hwb", e), this;
          },
          greyscale: function () {
            var t = this.values.rgb,
              e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
            return this.setValues("rgb", [e, e, e]), this;
          },
          clearer: function (t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e - e * t), this;
          },
          opaquer: function (t) {
            var e = this.values.alpha;
            return this.setValues("alpha", e + e * t), this;
          },
          rotate: function (t) {
            var e = this.values.hsl,
              n = (e[0] + t) % 360;
            return (e[0] = n < 0 ? 360 + n : n), this.setValues("hsl", e), this;
          },
          mix: function (t, e) {
            var n = t,
              r = void 0 === e ? 0.5 : e,
              i = 2 * r - 1,
              a = this.alpha() - n.alpha(),
              o = ((i * a === -1 ? i : (i + a) / (1 + i * a)) + 1) / 2,
              s = 1 - o;
            return this.rgb(
              o * this.red() + s * n.red(),
              o * this.green() + s * n.green(),
              o * this.blue() + s * n.blue(),
            ).alpha(this.alpha() * r + n.alpha() * (1 - r));
          },
          toJSON: function () {
            return this.rgb();
          },
          clone: function () {
            var t,
              e,
              n = new x(),
              r = this.values,
              i = n.values;
            for (var a in r)
              r.hasOwnProperty(a) &&
                ((t = r[a]),
                "[object Array]" === (e = {}.toString.call(t))
                  ? (i[a] = t.slice(0))
                  : "[object Number]" === e
                    ? (i[a] = t)
                    : console.error("unexpected color value:", t));
            return n;
          },
        }).spaces = {
          rgb: ["red", "green", "blue"],
          hsl: ["hue", "saturation", "lightness"],
          hsv: ["hue", "saturation", "value"],
          hwb: ["hue", "whiteness", "blackness"],
          cmyk: ["cyan", "magenta", "yellow", "black"],
        }),
          (x.prototype.maxes = {
            rgb: [255, 255, 255],
            hsl: [360, 100, 100],
            hsv: [360, 100, 100],
            hwb: [360, 100, 100],
            cmyk: [100, 100, 100, 100],
          }),
          (x.prototype.getValues = function (t) {
            for (var e = this.values, n = {}, r = 0; r < t.length; r++)
              n[t.charAt(r)] = e[t][r];
            return 1 !== e.alpha && (n.a = e.alpha), n;
          }),
          (x.prototype.setValues = function (t, e) {
            var n,
              r,
              i = this.values,
              a = this.spaces,
              o = this.maxes,
              l = 1;
            if (((this.valid = !0), "alpha" === t)) l = e;
            else if (e.length) (i[t] = e.slice(0, t.length)), (l = e[t.length]);
            else if (void 0 !== e[t.charAt(0)]) {
              for (n = 0; n < t.length; n++) i[t][n] = e[t.charAt(n)];
              l = e.a;
            } else if (void 0 !== e[a[t][0]]) {
              var u = a[t];
              for (n = 0; n < t.length; n++) i[t][n] = e[u[n]];
              l = e.alpha;
            }
            if (
              ((i.alpha = Math.max(0, Math.min(1, void 0 === l ? i.alpha : l))),
              "alpha" === t)
            )
              return !1;
            for (n = 0; n < t.length; n++)
              (r = Math.max(0, Math.min(o[t][n], i[t][n]))),
                (i[t][n] = Math.round(r));
            for (var c in a) c !== t && (i[c] = s[t][c](i[t]));
            return !0;
          }),
          (x.prototype.setSpace = function (t, e) {
            var n = e[0];
            return void 0 === n
              ? this.getValues(t)
              : ("number" === typeof n && (n = Array.prototype.slice.call(e)),
                this.setValues(t, n),
                this);
          }),
          (x.prototype.setChannel = function (t, e, n) {
            var r = this.values[t];
            return void 0 === n
              ? r[e]
              : (n === r[e] || ((r[e] = n), this.setValues(t, r)), this);
          }),
          "undefined" !== typeof window && (window.Color = x);
        var _ = x,
          w = {
            noop: function () {},
            uid: (function () {
              var t = 0;
              return function () {
                return t++;
              };
            })(),
            isNullOrUndef: function (t) {
              return null === t || "undefined" === typeof t;
            },
            isArray: function (t) {
              if (Array.isArray && Array.isArray(t)) return !0;
              var e = Object.prototype.toString.call(t);
              return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
            },
            isObject: function (t) {
              return (
                null !== t &&
                "[object Object]" === Object.prototype.toString.call(t)
              );
            },
            isFinite: (function (t) {
              function e(e) {
                return t.apply(this, arguments);
              }
              return (
                (e.toString = function () {
                  return t.toString();
                }),
                e
              );
            })(function (t) {
              return (
                ("number" === typeof t || t instanceof Number) && isFinite(t)
              );
            }),
            valueOrDefault: function (t, e) {
              return "undefined" === typeof t ? e : t;
            },
            valueAtIndexOrDefault: function (t, e, n) {
              return w.valueOrDefault(w.isArray(t) ? t[e] : t, n);
            },
            callback: function (t, e, n) {
              if (t && "function" === typeof t.call) return t.apply(n, e);
            },
            each: function (t, e, n, r) {
              var i, a, o;
              if (w.isArray(t))
                if (((a = t.length), r))
                  for (i = a - 1; i >= 0; i--) e.call(n, t[i], i);
                else for (i = 0; i < a; i++) e.call(n, t[i], i);
              else if (w.isObject(t))
                for (a = (o = Object.keys(t)).length, i = 0; i < a; i++)
                  e.call(n, t[o[i]], o[i]);
            },
            arrayEquals: function (t, e) {
              var n, r, i, a;
              if (!t || !e || t.length !== e.length) return !1;
              for (n = 0, r = t.length; n < r; ++n)
                if (
                  ((i = t[n]),
                  (a = e[n]),
                  i instanceof Array && a instanceof Array)
                ) {
                  if (!w.arrayEquals(i, a)) return !1;
                } else if (i !== a) return !1;
              return !0;
            },
            clone: function (t) {
              if (w.isArray(t)) return t.map(w.clone);
              if (w.isObject(t)) {
                for (
                  var e = {}, n = Object.keys(t), r = n.length, i = 0;
                  i < r;
                  ++i
                )
                  e[n[i]] = w.clone(t[n[i]]);
                return e;
              }
              return t;
            },
            _merger: function (t, e, n, r) {
              var i = e[t],
                a = n[t];
              w.isObject(i) && w.isObject(a)
                ? w.merge(i, a, r)
                : (e[t] = w.clone(a));
            },
            _mergerIf: function (t, e, n) {
              var r = e[t],
                i = n[t];
              w.isObject(r) && w.isObject(i)
                ? w.mergeIf(r, i)
                : e.hasOwnProperty(t) || (e[t] = w.clone(i));
            },
            merge: function (t, e, n) {
              var r,
                i,
                a,
                o,
                s,
                l = w.isArray(e) ? e : [e],
                u = l.length;
              if (!w.isObject(t)) return t;
              for (r = (n = n || {}).merger || w._merger, i = 0; i < u; ++i)
                if (((e = l[i]), w.isObject(e)))
                  for (s = 0, o = (a = Object.keys(e)).length; s < o; ++s)
                    r(a[s], t, e, n);
              return t;
            },
            mergeIf: function (t, e) {
              return w.merge(t, e, { merger: w._mergerIf });
            },
            extend:
              Object.assign ||
              function (t) {
                return w.merge(t, [].slice.call(arguments, 1), {
                  merger: function (t, e, n) {
                    e[t] = n[t];
                  },
                });
              },
            inherits: function (t) {
              var e = this,
                n =
                  t && t.hasOwnProperty("constructor")
                    ? t.constructor
                    : function () {
                        return e.apply(this, arguments);
                      },
                r = function () {
                  this.constructor = n;
                };
              return (
                (r.prototype = e.prototype),
                (n.prototype = new r()),
                (n.extend = w.inherits),
                t && w.extend(n.prototype, t),
                (n.__super__ = e.prototype),
                n
              );
            },
            _deprecated: function (t, e, n, r) {
              void 0 !== e &&
                console.warn(
                  t +
                    ': "' +
                    n +
                    '" is deprecated. Please use "' +
                    r +
                    '" instead',
                );
            },
          },
          k = w;
        (w.callCallback = w.callback),
          (w.indexOf = function (t, e, n) {
            return Array.prototype.indexOf.call(t, e, n);
          }),
          (w.getValueOrDefault = w.valueOrDefault),
          (w.getValueAtIndexOrDefault = w.valueAtIndexOrDefault);
        var M = {
            linear: function (t) {
              return t;
            },
            easeInQuad: function (t) {
              return t * t;
            },
            easeOutQuad: function (t) {
              return -t * (t - 2);
            },
            easeInOutQuad: function (t) {
              return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
            },
            easeInCubic: function (t) {
              return t * t * t;
            },
            easeOutCubic: function (t) {
              return (t -= 1) * t * t + 1;
            },
            easeInOutCubic: function (t) {
              return (t /= 0.5) < 1
                ? 0.5 * t * t * t
                : 0.5 * ((t -= 2) * t * t + 2);
            },
            easeInQuart: function (t) {
              return t * t * t * t;
            },
            easeOutQuart: function (t) {
              return -((t -= 1) * t * t * t - 1);
            },
            easeInOutQuart: function (t) {
              return (t /= 0.5) < 1
                ? 0.5 * t * t * t * t
                : -0.5 * ((t -= 2) * t * t * t - 2);
            },
            easeInQuint: function (t) {
              return t * t * t * t * t;
            },
            easeOutQuint: function (t) {
              return (t -= 1) * t * t * t * t + 1;
            },
            easeInOutQuint: function (t) {
              return (t /= 0.5) < 1
                ? 0.5 * t * t * t * t * t
                : 0.5 * ((t -= 2) * t * t * t * t + 2);
            },
            easeInSine: function (t) {
              return 1 - Math.cos(t * (Math.PI / 2));
            },
            easeOutSine: function (t) {
              return Math.sin(t * (Math.PI / 2));
            },
            easeInOutSine: function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            },
            easeInExpo: function (t) {
              return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
            },
            easeOutExpo: function (t) {
              return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            },
            easeInOutExpo: function (t) {
              return 0 === t
                ? 0
                : 1 === t
                  ? 1
                  : (t /= 0.5) < 1
                    ? 0.5 * Math.pow(2, 10 * (t - 1))
                    : 0.5 * (2 - Math.pow(2, -10 * --t));
            },
            easeInCirc: function (t) {
              return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
            },
            easeOutCirc: function (t) {
              return Math.sqrt(1 - (t -= 1) * t);
            },
            easeInOutCirc: function (t) {
              return (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            },
            easeInElastic: function (t) {
              var e = 1.70158,
                n = 0,
                r = 1;
              return 0 === t
                ? 0
                : 1 === t
                  ? 1
                  : (n || (n = 0.3),
                    r < 1
                      ? ((r = 1), (e = n / 4))
                      : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                    -r *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin(((t - e) * (2 * Math.PI)) / n));
            },
            easeOutElastic: function (t) {
              var e = 1.70158,
                n = 0,
                r = 1;
              return 0 === t
                ? 0
                : 1 === t
                  ? 1
                  : (n || (n = 0.3),
                    r < 1
                      ? ((r = 1), (e = n / 4))
                      : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                    r *
                      Math.pow(2, -10 * t) *
                      Math.sin(((t - e) * (2 * Math.PI)) / n) +
                      1);
            },
            easeInOutElastic: function (t) {
              var e = 1.70158,
                n = 0,
                r = 1;
              return 0 === t
                ? 0
                : 2 === (t /= 0.5)
                  ? 1
                  : (n || (n = 0.45),
                    r < 1
                      ? ((r = 1), (e = n / 4))
                      : (e = (n / (2 * Math.PI)) * Math.asin(1 / r)),
                    t < 1
                      ? r *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin(((t - e) * (2 * Math.PI)) / n) *
                        -0.5
                      : r *
                          Math.pow(2, -10 * (t -= 1)) *
                          Math.sin(((t - e) * (2 * Math.PI)) / n) *
                          0.5 +
                        1);
            },
            easeInBack: function (t) {
              var e = 1.70158;
              return t * t * ((e + 1) * t - e);
            },
            easeOutBack: function (t) {
              var e = 1.70158;
              return (t -= 1) * t * ((e + 1) * t + e) + 1;
            },
            easeInOutBack: function (t) {
              var e = 1.70158;
              return (t /= 0.5) < 1
                ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            },
            easeInBounce: function (t) {
              return 1 - M.easeOutBounce(1 - t);
            },
            easeOutBounce: function (t) {
              return t < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            },
            easeInOutBounce: function (t) {
              return t < 0.5
                ? 0.5 * M.easeInBounce(2 * t)
                : 0.5 * M.easeOutBounce(2 * t - 1) + 0.5;
            },
          },
          S = { effects: M };
        k.easingEffects = M;
        var D = Math.PI,
          C = D / 180,
          P = 2 * D,
          T = D / 2,
          O = D / 4,
          A = (2 * D) / 3,
          I = {
            clear: function (t) {
              t.ctx.clearRect(0, 0, t.width, t.height);
            },
            roundedRect: function (t, e, n, r, i, a) {
              if (a) {
                var o = Math.min(a, i / 2, r / 2),
                  s = e + o,
                  l = n + o,
                  u = e + r - o,
                  c = n + i - o;
                t.moveTo(e, l),
                  s < u && l < c
                    ? (t.arc(s, l, o, -D, -T),
                      t.arc(u, l, o, -T, 0),
                      t.arc(u, c, o, 0, T),
                      t.arc(s, c, o, T, D))
                    : s < u
                      ? (t.moveTo(s, n),
                        t.arc(u, l, o, -T, T),
                        t.arc(s, l, o, T, D + T))
                      : l < c
                        ? (t.arc(s, l, o, -D, 0), t.arc(s, c, o, 0, D))
                        : t.arc(s, l, o, -D, D),
                  t.closePath(),
                  t.moveTo(e, n);
              } else t.rect(e, n, r, i);
            },
            drawPoint: function (t, e, n, r, i, a) {
              var o,
                s,
                l,
                u,
                c,
                h = (a || 0) * C;
              if (
                e &&
                "object" === typeof e &&
                ("[object HTMLImageElement]" === (o = e.toString()) ||
                  "[object HTMLCanvasElement]" === o)
              )
                return (
                  t.save(),
                  t.translate(r, i),
                  t.rotate(h),
                  t.drawImage(
                    e,
                    -e.width / 2,
                    -e.height / 2,
                    e.width,
                    e.height,
                  ),
                  void t.restore()
                );
              if (!(isNaN(n) || n <= 0)) {
                switch ((t.beginPath(), e)) {
                  default:
                    t.arc(r, i, n, 0, P), t.closePath();
                    break;
                  case "triangle":
                    t.moveTo(r + Math.sin(h) * n, i - Math.cos(h) * n),
                      (h += A),
                      t.lineTo(r + Math.sin(h) * n, i - Math.cos(h) * n),
                      (h += A),
                      t.lineTo(r + Math.sin(h) * n, i - Math.cos(h) * n),
                      t.closePath();
                    break;
                  case "rectRounded":
                    (u = n - (c = 0.516 * n)),
                      (s = Math.cos(h + O) * u),
                      (l = Math.sin(h + O) * u),
                      t.arc(r - s, i - l, c, h - D, h - T),
                      t.arc(r + l, i - s, c, h - T, h),
                      t.arc(r + s, i + l, c, h, h + T),
                      t.arc(r - l, i + s, c, h + T, h + D),
                      t.closePath();
                    break;
                  case "rect":
                    if (!a) {
                      (u = Math.SQRT1_2 * n),
                        t.rect(r - u, i - u, 2 * u, 2 * u);
                      break;
                    }
                    h += O;
                  case "rectRot":
                    (s = Math.cos(h) * n),
                      (l = Math.sin(h) * n),
                      t.moveTo(r - s, i - l),
                      t.lineTo(r + l, i - s),
                      t.lineTo(r + s, i + l),
                      t.lineTo(r - l, i + s),
                      t.closePath();
                    break;
                  case "crossRot":
                    h += O;
                  case "cross":
                    (s = Math.cos(h) * n),
                      (l = Math.sin(h) * n),
                      t.moveTo(r - s, i - l),
                      t.lineTo(r + s, i + l),
                      t.moveTo(r + l, i - s),
                      t.lineTo(r - l, i + s);
                    break;
                  case "star":
                    (s = Math.cos(h) * n),
                      (l = Math.sin(h) * n),
                      t.moveTo(r - s, i - l),
                      t.lineTo(r + s, i + l),
                      t.moveTo(r + l, i - s),
                      t.lineTo(r - l, i + s),
                      (h += O),
                      (s = Math.cos(h) * n),
                      (l = Math.sin(h) * n),
                      t.moveTo(r - s, i - l),
                      t.lineTo(r + s, i + l),
                      t.moveTo(r + l, i - s),
                      t.lineTo(r - l, i + s);
                    break;
                  case "line":
                    (s = Math.cos(h) * n),
                      (l = Math.sin(h) * n),
                      t.moveTo(r - s, i - l),
                      t.lineTo(r + s, i + l);
                    break;
                  case "dash":
                    t.moveTo(r, i),
                      t.lineTo(r + Math.cos(h) * n, i + Math.sin(h) * n);
                }
                t.fill(), t.stroke();
              }
            },
            _isPointInArea: function (t, e) {
              return (
                t.x > e.left - 1e-6 &&
                t.x < e.right + 1e-6 &&
                t.y > e.top - 1e-6 &&
                t.y < e.bottom + 1e-6
              );
            },
            clipArea: function (t, e) {
              t.save(),
                t.beginPath(),
                t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
                t.clip();
            },
            unclipArea: function (t) {
              t.restore();
            },
            lineTo: function (t, e, n, r) {
              var i = n.steppedLine;
              if (i) {
                if ("middle" === i) {
                  var a = (e.x + n.x) / 2;
                  t.lineTo(a, r ? n.y : e.y), t.lineTo(a, r ? e.y : n.y);
                } else
                  ("after" === i && !r) || ("after" !== i && r)
                    ? t.lineTo(e.x, n.y)
                    : t.lineTo(n.x, e.y);
                t.lineTo(n.x, n.y);
              } else
                n.tension
                  ? t.bezierCurveTo(
                      r ? e.controlPointPreviousX : e.controlPointNextX,
                      r ? e.controlPointPreviousY : e.controlPointNextY,
                      r ? n.controlPointNextX : n.controlPointPreviousX,
                      r ? n.controlPointNextY : n.controlPointPreviousY,
                      n.x,
                      n.y,
                    )
                  : t.lineTo(n.x, n.y);
            },
          },
          F = I;
        (k.clear = I.clear),
          (k.drawRoundedRectangle = function (t) {
            t.beginPath(), I.roundedRect.apply(I, arguments);
          });
        var L = {
          _set: function (t, e) {
            return k.merge(this[t] || (this[t] = {}), e);
          },
        };
        L._set("global", {
          defaultColor: "rgba(0,0,0,0.1)",
          defaultFontColor: "#666",
          defaultFontFamily:
            "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          defaultFontSize: 12,
          defaultFontStyle: "normal",
          defaultLineHeight: 1.2,
          showLines: !0,
        });
        var R = L,
          E = k.valueOrDefault,
          N = {
            toLineHeight: function (t, e) {
              var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
              if (!n || "normal" === n[1]) return 1.2 * e;
              switch (((t = +n[2]), n[3])) {
                case "px":
                  return t;
                case "%":
                  t /= 100;
              }
              return e * t;
            },
            toPadding: function (t) {
              var e, n, r, i;
              return (
                k.isObject(t)
                  ? ((e = +t.top || 0),
                    (n = +t.right || 0),
                    (r = +t.bottom || 0),
                    (i = +t.left || 0))
                  : (e = n = r = i = +t || 0),
                {
                  top: e,
                  right: n,
                  bottom: r,
                  left: i,
                  height: e + r,
                  width: i + n,
                }
              );
            },
            _parseFont: function (t) {
              var e = R.global,
                n = E(t.fontSize, e.defaultFontSize),
                r = {
                  family: E(t.fontFamily, e.defaultFontFamily),
                  lineHeight: k.options.toLineHeight(
                    E(t.lineHeight, e.defaultLineHeight),
                    n,
                  ),
                  size: n,
                  style: E(t.fontStyle, e.defaultFontStyle),
                  weight: null,
                  string: "",
                };
              return (
                (r.string = (function (t) {
                  return !t ||
                    k.isNullOrUndef(t.size) ||
                    k.isNullOrUndef(t.family)
                    ? null
                    : (t.style ? t.style + " " : "") +
                        (t.weight ? t.weight + " " : "") +
                        t.size +
                        "px " +
                        t.family;
                })(r)),
                r
              );
            },
            resolve: function (t, e, n, r) {
              var i,
                a,
                o,
                s = !0;
              for (i = 0, a = t.length; i < a; ++i)
                if (
                  void 0 !== (o = t[i]) &&
                  (void 0 !== e &&
                    "function" === typeof o &&
                    ((o = o(e)), (s = !1)),
                  void 0 !== n && k.isArray(o) && ((o = o[n]), (s = !1)),
                  void 0 !== o)
                )
                  return r && !s && (r.cacheable = !1), o;
            },
          },
          W = {
            _factorize: function (t) {
              var e,
                n = [],
                r = Math.sqrt(t);
              for (e = 1; e < r; e++) t % e === 0 && (n.push(e), n.push(t / e));
              return (
                r === (0 | r) && n.push(r),
                n
                  .sort(function (t, e) {
                    return t - e;
                  })
                  .pop(),
                n
              );
            },
            log10:
              Math.log10 ||
              function (t) {
                var e = Math.log(t) * Math.LOG10E,
                  n = Math.round(e);
                return t === Math.pow(10, n) ? n : e;
              },
          },
          z = W;
        k.log10 = W.log10;
        var j = k,
          Y = S,
          V = F,
          B = N,
          H = z,
          U = {
            getRtlAdapter: function (t, e, n) {
              return t
                ? (function (t, e) {
                    return {
                      x: function (n) {
                        return t + t + e - n;
                      },
                      setWidth: function (t) {
                        e = t;
                      },
                      textAlign: function (t) {
                        return "center" === t
                          ? t
                          : "right" === t
                            ? "left"
                            : "right";
                      },
                      xPlus: function (t, e) {
                        return t - e;
                      },
                      leftForLtr: function (t, e) {
                        return t - e;
                      },
                    };
                  })(e, n)
                : {
                    x: function (t) {
                      return t;
                    },
                    setWidth: function (t) {},
                    textAlign: function (t) {
                      return t;
                    },
                    xPlus: function (t, e) {
                      return t + e;
                    },
                    leftForLtr: function (t, e) {
                      return t;
                    },
                  };
            },
            overrideTextDirection: function (t, e) {
              var n, r;
              ("ltr" !== e && "rtl" !== e) ||
                ((r = [
                  (n = t.canvas.style).getPropertyValue("direction"),
                  n.getPropertyPriority("direction"),
                ]),
                n.setProperty("direction", e, "important"),
                (t.prevTextDirection = r));
            },
            restoreTextDirection: function (t) {
              var e = t.prevTextDirection;
              void 0 !== e &&
                (delete t.prevTextDirection,
                t.canvas.style.setProperty("direction", e[0], e[1]));
            },
          };
        (j.easing = Y),
          (j.canvas = V),
          (j.options = B),
          (j.math = H),
          (j.rtl = U);
        var G = function (t) {
          j.extend(this, t), this.initialize.apply(this, arguments);
        };
        j.extend(G.prototype, {
          _type: void 0,
          initialize: function () {
            this.hidden = !1;
          },
          pivot: function () {
            var t = this;
            return (
              t._view || (t._view = j.extend({}, t._model)), (t._start = {}), t
            );
          },
          transition: function (t) {
            var e = this,
              n = e._model,
              r = e._start,
              i = e._view;
            return n && 1 !== t
              ? (i || (i = e._view = {}),
                r || (r = e._start = {}),
                (function (t, e, n, r) {
                  var i,
                    a,
                    o,
                    s,
                    l,
                    u,
                    c,
                    h,
                    d,
                    f = Object.keys(n);
                  for (i = 0, a = f.length; i < a; ++i)
                    if (
                      ((u = n[(o = f[i])]),
                      e.hasOwnProperty(o) || (e[o] = u),
                      (s = e[o]) !== u && "_" !== o[0])
                    ) {
                      if (
                        (t.hasOwnProperty(o) || (t[o] = s),
                        (c = typeof u) === typeof (l = t[o]))
                      )
                        if ("string" === c) {
                          if ((h = _(l)).valid && (d = _(u)).valid) {
                            e[o] = d.mix(h, r).rgbString();
                            continue;
                          }
                        } else if (j.isFinite(l) && j.isFinite(u)) {
                          e[o] = l + (u - l) * r;
                          continue;
                        }
                      e[o] = u;
                    }
                })(r, i, n, t),
                e)
              : ((e._view = j.extend({}, n)), (e._start = null), e);
          },
          tooltipPosition: function () {
            return { x: this._model.x, y: this._model.y };
          },
          hasValue: function () {
            return j.isNumber(this._model.x) && j.isNumber(this._model.y);
          },
        }),
          (G.extend = j.inherits);
        var q = G,
          $ = q.extend({
            chart: null,
            currentStep: 0,
            numSteps: 60,
            easing: "",
            render: null,
            onAnimationProgress: null,
            onAnimationComplete: null,
          }),
          Z = $;
        Object.defineProperty($.prototype, "animationObject", {
          get: function () {
            return this;
          },
        }),
          Object.defineProperty($.prototype, "chartInstance", {
            get: function () {
              return this.chart;
            },
            set: function (t) {
              this.chart = t;
            },
          }),
          R._set("global", {
            animation: {
              duration: 1e3,
              easing: "easeOutQuart",
              onProgress: j.noop,
              onComplete: j.noop,
            },
          });
        var K = {
            animations: [],
            request: null,
            addAnimation: function (t, e, n, r) {
              var i,
                a,
                o = this.animations;
              for (
                e.chart = t,
                  e.startTime = Date.now(),
                  e.duration = n,
                  r || (t.animating = !0),
                  i = 0,
                  a = o.length;
                i < a;
                ++i
              )
                if (o[i].chart === t) return void (o[i] = e);
              o.push(e), 1 === o.length && this.requestAnimationFrame();
            },
            cancelAnimation: function (t) {
              var e = j.findIndex(this.animations, function (e) {
                return e.chart === t;
              });
              -1 !== e && (this.animations.splice(e, 1), (t.animating = !1));
            },
            requestAnimationFrame: function () {
              var t = this;
              null === t.request &&
                (t.request = j.requestAnimFrame.call(window, function () {
                  (t.request = null), t.startDigest();
                }));
            },
            startDigest: function () {
              this.advance(),
                this.animations.length > 0 && this.requestAnimationFrame();
            },
            advance: function () {
              for (var t, e, n, r, i = this.animations, a = 0; a < i.length; )
                (e = (t = i[a]).chart),
                  (n = t.numSteps),
                  (r =
                    Math.floor(((Date.now() - t.startTime) / t.duration) * n) +
                    1),
                  (t.currentStep = Math.min(r, n)),
                  j.callback(t.render, [e, t], e),
                  j.callback(t.onAnimationProgress, [t], e),
                  t.currentStep >= n
                    ? (j.callback(t.onAnimationComplete, [t], e),
                      (e.animating = !1),
                      i.splice(a, 1))
                    : ++a;
            },
          },
          X = j.options.resolve,
          J = ["push", "pop", "shift", "splice", "unshift"];
        function Q(t, e) {
          var n = t._chartjs;
          if (n) {
            var r = n.listeners,
              i = r.indexOf(e);
            -1 !== i && r.splice(i, 1),
              r.length > 0 ||
                (J.forEach(function (e) {
                  delete t[e];
                }),
                delete t._chartjs);
          }
        }
        var tt = function (t, e) {
          this.initialize(t, e);
        };
        j.extend(tt.prototype, {
          datasetElementType: null,
          dataElementType: null,
          _datasetElementOptions: [
            "backgroundColor",
            "borderCapStyle",
            "borderColor",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "borderWidth",
          ],
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "pointStyle",
          ],
          initialize: function (t, e) {
            var n = this;
            (n.chart = t),
              (n.index = e),
              n.linkScales(),
              n.addElements(),
              (n._type = n.getMeta().type);
          },
          updateIndex: function (t) {
            this.index = t;
          },
          linkScales: function () {
            var t = this.getMeta(),
              e = this.chart,
              n = e.scales,
              r = this.getDataset(),
              i = e.options.scales;
            (null !== t.xAxisID && t.xAxisID in n && !r.xAxisID) ||
              (t.xAxisID = r.xAxisID || i.xAxes[0].id),
              (null !== t.yAxisID && t.yAxisID in n && !r.yAxisID) ||
                (t.yAxisID = r.yAxisID || i.yAxes[0].id);
          },
          getDataset: function () {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function () {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function (t) {
            return this.chart.scales[t];
          },
          _getValueScaleId: function () {
            return this.getMeta().yAxisID;
          },
          _getIndexScaleId: function () {
            return this.getMeta().xAxisID;
          },
          _getValueScale: function () {
            return this.getScaleForId(this._getValueScaleId());
          },
          _getIndexScale: function () {
            return this.getScaleForId(this._getIndexScaleId());
          },
          reset: function () {
            this._update(!0);
          },
          destroy: function () {
            this._data && Q(this._data, this);
          },
          createMetaDataset: function () {
            var t = this.datasetElementType;
            return (
              t && new t({ _chart: this.chart, _datasetIndex: this.index })
            );
          },
          createMetaData: function (t) {
            var e = this.dataElementType;
            return (
              e &&
              new e({
                _chart: this.chart,
                _datasetIndex: this.index,
                _index: t,
              })
            );
          },
          addElements: function () {
            var t,
              e,
              n = this.getMeta(),
              r = this.getDataset().data || [],
              i = n.data;
            for (t = 0, e = r.length; t < e; ++t)
              i[t] = i[t] || this.createMetaData(t);
            n.dataset = n.dataset || this.createMetaDataset();
          },
          addElementAndReset: function (t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          },
          buildOrUpdateElements: function () {
            var t,
              e,
              n = this,
              r = n.getDataset(),
              i = r.data || (r.data = []);
            n._data !== i &&
              (n._data && Q(n._data, n),
              i &&
                Object.isExtensible(i) &&
                ((e = n),
                (t = i)._chartjs
                  ? t._chartjs.listeners.push(e)
                  : (Object.defineProperty(t, "_chartjs", {
                      configurable: !0,
                      enumerable: !1,
                      value: { listeners: [e] },
                    }),
                    J.forEach(function (e) {
                      var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                        r = t[e];
                      Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: function () {
                          var e = Array.prototype.slice.call(arguments),
                            i = r.apply(this, e);
                          return (
                            j.each(t._chartjs.listeners, function (t) {
                              "function" === typeof t[n] && t[n].apply(t, e);
                            }),
                            i
                          );
                        },
                      });
                    }))),
              (n._data = i)),
              n.resyncElements();
          },
          _configure: function () {
            this._config = j.merge(
              {},
              [this.chart.options.datasets[this._type], this.getDataset()],
              {
                merger: function (t, e, n) {
                  "_meta" !== t && "data" !== t && j._merger(t, e, n);
                },
              },
            );
          },
          _update: function (t) {
            this._configure(), (this._cachedDataOpts = null), this.update(t);
          },
          update: j.noop,
          transition: function (t) {
            for (
              var e = this.getMeta(), n = e.data || [], r = n.length, i = 0;
              i < r;
              ++i
            )
              n[i].transition(t);
            e.dataset && e.dataset.transition(t);
          },
          draw: function () {
            var t = this.getMeta(),
              e = t.data || [],
              n = e.length,
              r = 0;
            for (t.dataset && t.dataset.draw(); r < n; ++r) e[r].draw();
          },
          getStyle: function (t) {
            var e,
              n = this.getMeta(),
              r = n.dataset;
            return (
              this._configure(),
              r && void 0 === t
                ? (e = this._resolveDatasetElementOptions(r || {}))
                : ((t = t || 0),
                  (e = this._resolveDataElementOptions(n.data[t] || {}, t))),
              (!1 !== e.fill && null !== e.fill) ||
                (e.backgroundColor = e.borderColor),
              e
            );
          },
          _resolveDatasetElementOptions: function (t, e) {
            var n,
              r,
              i,
              a,
              o = this,
              s = o.chart,
              l = o._config,
              u = t.custom || {},
              c =
                s.options.elements[o.datasetElementType.prototype._type] || {},
              h = o._datasetElementOptions,
              d = {},
              f = {
                chart: s,
                dataset: o.getDataset(),
                datasetIndex: o.index,
                hover: e,
              };
            for (n = 0, r = h.length; n < r; ++n)
              (i = h[n]),
                (a = e ? "hover" + i.charAt(0).toUpperCase() + i.slice(1) : i),
                (d[i] = X([u[a], l[a], c[a]], f));
            return d;
          },
          _resolveDataElementOptions: function (t, e) {
            var n = this,
              r = t && t.custom,
              i = n._cachedDataOpts;
            if (i && !r) return i;
            var a,
              o,
              s,
              l,
              u = n.chart,
              c = n._config,
              h = u.options.elements[n.dataElementType.prototype._type] || {},
              d = n._dataElementOptions,
              f = {},
              p = {
                chart: u,
                dataIndex: e,
                dataset: n.getDataset(),
                datasetIndex: n.index,
              },
              g = { cacheable: !r };
            if (((r = r || {}), j.isArray(d)))
              for (o = 0, s = d.length; o < s; ++o)
                f[(l = d[o])] = X([r[l], c[l], h[l]], p, e, g);
            else
              for (o = 0, s = (a = Object.keys(d)).length; o < s; ++o)
                f[(l = a[o])] = X([r[l], c[d[l]], c[l], h[l]], p, e, g);
            return g.cacheable && (n._cachedDataOpts = Object.freeze(f)), f;
          },
          removeHoverStyle: function (t) {
            j.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
          },
          setHoverStyle: function (t) {
            var e = this.chart.data.datasets[t._datasetIndex],
              n = t._index,
              r = t.custom || {},
              i = t._model,
              a = j.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: i.backgroundColor,
              borderColor: i.borderColor,
              borderWidth: i.borderWidth,
            }),
              (i.backgroundColor = X(
                [
                  r.hoverBackgroundColor,
                  e.hoverBackgroundColor,
                  a(i.backgroundColor),
                ],
                void 0,
                n,
              )),
              (i.borderColor = X(
                [r.hoverBorderColor, e.hoverBorderColor, a(i.borderColor)],
                void 0,
                n,
              )),
              (i.borderWidth = X(
                [r.hoverBorderWidth, e.hoverBorderWidth, i.borderWidth],
                void 0,
                n,
              ));
          },
          _removeDatasetHoverStyle: function () {
            var t = this.getMeta().dataset;
            t && this.removeHoverStyle(t);
          },
          _setDatasetHoverStyle: function () {
            var t,
              e,
              n,
              r,
              i,
              a,
              o = this.getMeta().dataset,
              s = {};
            if (o) {
              for (
                a = o._model,
                  i = this._resolveDatasetElementOptions(o, !0),
                  t = 0,
                  e = (r = Object.keys(i)).length;
                t < e;
                ++t
              )
                (s[(n = r[t])] = a[n]), (a[n] = i[n]);
              o.$previousStyle = s;
            }
          },
          resyncElements: function () {
            var t = this.getMeta(),
              e = this.getDataset().data,
              n = t.data.length,
              r = e.length;
            r < n
              ? t.data.splice(r, n - r)
              : r > n && this.insertElements(n, r - n);
          },
          insertElements: function (t, e) {
            for (var n = 0; n < e; ++n) this.addElementAndReset(t + n);
          },
          onDataPush: function () {
            var t = arguments.length;
            this.insertElements(this.getDataset().data.length - t, t);
          },
          onDataPop: function () {
            this.getMeta().data.pop();
          },
          onDataShift: function () {
            this.getMeta().data.shift();
          },
          onDataSplice: function (t, e) {
            this.getMeta().data.splice(t, e),
              this.insertElements(t, arguments.length - 2);
          },
          onDataUnshift: function () {
            this.insertElements(0, arguments.length);
          },
        }),
          (tt.extend = j.inherits);
        var et = tt,
          nt = 2 * Math.PI;
        function rt(t, e) {
          var n = e.startAngle,
            r = e.endAngle,
            i = e.pixelMargin,
            a = i / e.outerRadius,
            o = e.x,
            s = e.y;
          t.beginPath(),
            t.arc(o, s, e.outerRadius, n - a, r + a),
            e.innerRadius > i
              ? ((a = i / e.innerRadius),
                t.arc(o, s, e.innerRadius - i, r + a, n - a, !0))
              : t.arc(o, s, i, r + Math.PI / 2, n - Math.PI / 2),
            t.closePath(),
            t.clip();
        }
        function it(t, e, n) {
          var r = "inner" === e.borderAlign;
          r
            ? ((t.lineWidth = 2 * e.borderWidth), (t.lineJoin = "round"))
            : ((t.lineWidth = e.borderWidth), (t.lineJoin = "bevel")),
            n.fullCircles &&
              (function (t, e, n, r) {
                var i,
                  a = n.endAngle;
                for (
                  r &&
                    ((n.endAngle = n.startAngle + nt),
                    rt(t, n),
                    (n.endAngle = a),
                    n.endAngle === n.startAngle &&
                      n.fullCircles &&
                      ((n.endAngle += nt), n.fullCircles--)),
                    t.beginPath(),
                    t.arc(
                      n.x,
                      n.y,
                      n.innerRadius,
                      n.startAngle + nt,
                      n.startAngle,
                      !0,
                    ),
                    i = 0;
                  i < n.fullCircles;
                  ++i
                )
                  t.stroke();
                for (
                  t.beginPath(),
                    t.arc(
                      n.x,
                      n.y,
                      e.outerRadius,
                      n.startAngle,
                      n.startAngle + nt,
                    ),
                    i = 0;
                  i < n.fullCircles;
                  ++i
                )
                  t.stroke();
              })(t, e, n, r),
            r && rt(t, n),
            t.beginPath(),
            t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle),
            t.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0),
            t.closePath(),
            t.stroke();
        }
        R._set("global", {
          elements: {
            arc: {
              backgroundColor: R.global.defaultColor,
              borderColor: "#fff",
              borderWidth: 2,
              borderAlign: "center",
            },
          },
        });
        var at = q.extend({
            _type: "arc",
            inLabelRange: function (t) {
              var e = this._view;
              return (
                !!e &&
                Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
              );
            },
            inRange: function (t, e) {
              var n = this._view;
              if (n) {
                for (
                  var r = j.getAngleFromPoint(n, { x: t, y: e }),
                    i = r.angle,
                    a = r.distance,
                    o = n.startAngle,
                    s = n.endAngle;
                  s < o;

                )
                  s += nt;
                for (; i > s; ) i -= nt;
                for (; i < o; ) i += nt;
                var l = i >= o && i <= s,
                  u = a >= n.innerRadius && a <= n.outerRadius;
                return l && u;
              }
              return !1;
            },
            getCenterPoint: function () {
              var t = this._view,
                e = (t.startAngle + t.endAngle) / 2,
                n = (t.innerRadius + t.outerRadius) / 2;
              return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
            },
            getArea: function () {
              var t = this._view;
              return (
                Math.PI *
                ((t.endAngle - t.startAngle) / (2 * Math.PI)) *
                (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
              );
            },
            tooltipPosition: function () {
              var t = this._view,
                e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
              return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
            },
            draw: function () {
              var t,
                e = this._chart.ctx,
                n = this._view,
                r = "inner" === n.borderAlign ? 0.33 : 0,
                i = {
                  x: n.x,
                  y: n.y,
                  innerRadius: n.innerRadius,
                  outerRadius: Math.max(n.outerRadius - r, 0),
                  pixelMargin: r,
                  startAngle: n.startAngle,
                  endAngle: n.endAngle,
                  fullCircles: Math.floor(n.circumference / nt),
                };
              if (
                (e.save(),
                (e.fillStyle = n.backgroundColor),
                (e.strokeStyle = n.borderColor),
                i.fullCircles)
              ) {
                for (
                  i.endAngle = i.startAngle + nt,
                    e.beginPath(),
                    e.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                    e.arc(
                      i.x,
                      i.y,
                      i.innerRadius,
                      i.endAngle,
                      i.startAngle,
                      !0,
                    ),
                    e.closePath(),
                    t = 0;
                  t < i.fullCircles;
                  ++t
                )
                  e.fill();
                i.endAngle = i.startAngle + (n.circumference % nt);
              }
              e.beginPath(),
                e.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle),
                e.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0),
                e.closePath(),
                e.fill(),
                n.borderWidth && it(e, n, i),
                e.restore();
            },
          }),
          ot = j.valueOrDefault,
          st = R.global.defaultColor;
        R._set("global", {
          elements: {
            line: {
              tension: 0.4,
              backgroundColor: st,
              borderWidth: 3,
              borderColor: st,
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              capBezierPoints: !0,
              fill: !0,
            },
          },
        });
        var lt = q.extend({
            _type: "line",
            draw: function () {
              var t,
                e,
                n,
                r = this,
                i = r._view,
                a = r._chart.ctx,
                o = i.spanGaps,
                s = r._children.slice(),
                l = R.global,
                u = l.elements.line,
                c = -1,
                h = r._loop;
              if (s.length) {
                if (r._loop) {
                  for (t = 0; t < s.length; ++t)
                    if (
                      ((e = j.previousItem(s, t)),
                      !s[t]._view.skip && e._view.skip)
                    ) {
                      (s = s.slice(t).concat(s.slice(0, t))), (h = o);
                      break;
                    }
                  h && s.push(s[0]);
                }
                for (
                  a.save(),
                    a.lineCap = i.borderCapStyle || u.borderCapStyle,
                    a.setLineDash &&
                      a.setLineDash(i.borderDash || u.borderDash),
                    a.lineDashOffset = ot(
                      i.borderDashOffset,
                      u.borderDashOffset,
                    ),
                    a.lineJoin = i.borderJoinStyle || u.borderJoinStyle,
                    a.lineWidth = ot(i.borderWidth, u.borderWidth),
                    a.strokeStyle = i.borderColor || l.defaultColor,
                    a.beginPath(),
                    (n = s[0]._view).skip || (a.moveTo(n.x, n.y), (c = 0)),
                    t = 1;
                  t < s.length;
                  ++t
                )
                  (n = s[t]._view),
                    (e = -1 === c ? j.previousItem(s, t) : s[c]),
                    n.skip ||
                      ((c !== t - 1 && !o) || -1 === c
                        ? a.moveTo(n.x, n.y)
                        : j.canvas.lineTo(a, e._view, n),
                      (c = t));
                h && a.closePath(), a.stroke(), a.restore();
              }
            },
          }),
          ut = j.valueOrDefault,
          ct = R.global.defaultColor;
        function ht(t) {
          var e = this._view;
          return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
        }
        R._set("global", {
          elements: {
            point: {
              radius: 3,
              pointStyle: "circle",
              backgroundColor: ct,
              borderColor: ct,
              borderWidth: 1,
              hitRadius: 1,
              hoverRadius: 4,
              hoverBorderWidth: 1,
            },
          },
        });
        var dt = q.extend({
            _type: "point",
            inRange: function (t, e) {
              var n = this._view;
              return (
                !!n &&
                Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) <
                  Math.pow(n.hitRadius + n.radius, 2)
              );
            },
            inLabelRange: ht,
            inXRange: ht,
            inYRange: function (t) {
              var e = this._view;
              return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
            },
            getCenterPoint: function () {
              var t = this._view;
              return { x: t.x, y: t.y };
            },
            getArea: function () {
              return Math.PI * Math.pow(this._view.radius, 2);
            },
            tooltipPosition: function () {
              var t = this._view;
              return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
            },
            draw: function (t) {
              var e = this._view,
                n = this._chart.ctx,
                r = e.pointStyle,
                i = e.rotation,
                a = e.radius,
                o = e.x,
                s = e.y,
                l = R.global,
                u = l.defaultColor;
              e.skip ||
                ((void 0 === t || j.canvas._isPointInArea(e, t)) &&
                  ((n.strokeStyle = e.borderColor || u),
                  (n.lineWidth = ut(
                    e.borderWidth,
                    l.elements.point.borderWidth,
                  )),
                  (n.fillStyle = e.backgroundColor || u),
                  j.canvas.drawPoint(n, r, a, o, s, i)));
            },
          }),
          ft = R.global.defaultColor;
        function pt(t) {
          return t && void 0 !== t.width;
        }
        function gt(t) {
          var e, n, r, i, a;
          return (
            pt(t)
              ? ((a = t.width / 2),
                (e = t.x - a),
                (n = t.x + a),
                (r = Math.min(t.y, t.base)),
                (i = Math.max(t.y, t.base)))
              : ((a = t.height / 2),
                (e = Math.min(t.x, t.base)),
                (n = Math.max(t.x, t.base)),
                (r = t.y - a),
                (i = t.y + a)),
            { left: e, top: r, right: n, bottom: i }
          );
        }
        function mt(t, e, n) {
          return t === e ? n : t === n ? e : t;
        }
        function vt(t, e, n) {
          var r,
            i,
            a,
            o,
            s = t.borderWidth,
            l = (function (t) {
              var e = t.borderSkipped,
                n = {};
              return e
                ? (t.horizontal
                    ? t.base > t.x && (e = mt(e, "left", "right"))
                    : t.base < t.y && (e = mt(e, "bottom", "top")),
                  (n[e] = !0),
                  n)
                : n;
            })(t);
          return (
            j.isObject(s)
              ? ((r = +s.top || 0),
                (i = +s.right || 0),
                (a = +s.bottom || 0),
                (o = +s.left || 0))
              : (r = i = a = o = +s || 0),
            {
              t: l.top || r < 0 ? 0 : r > n ? n : r,
              r: l.right || i < 0 ? 0 : i > e ? e : i,
              b: l.bottom || a < 0 ? 0 : a > n ? n : a,
              l: l.left || o < 0 ? 0 : o > e ? e : o,
            }
          );
        }
        function yt(t, e, n) {
          var r = null === e,
            i = null === n,
            a = !(!t || (r && i)) && gt(t);
          return (
            a &&
            (r || (e >= a.left && e <= a.right)) &&
            (i || (n >= a.top && n <= a.bottom))
          );
        }
        R._set("global", {
          elements: {
            rectangle: {
              backgroundColor: ft,
              borderColor: ft,
              borderSkipped: "bottom",
              borderWidth: 0,
            },
          },
        });
        var bt = q.extend({
            _type: "rectangle",
            draw: function () {
              var t = this._chart.ctx,
                e = this._view,
                n = (function (t) {
                  var e = gt(t),
                    n = e.right - e.left,
                    r = e.bottom - e.top,
                    i = vt(t, n / 2, r / 2);
                  return {
                    outer: { x: e.left, y: e.top, w: n, h: r },
                    inner: {
                      x: e.left + i.l,
                      y: e.top + i.t,
                      w: n - i.l - i.r,
                      h: r - i.t - i.b,
                    },
                  };
                })(e),
                r = n.outer,
                i = n.inner;
              (t.fillStyle = e.backgroundColor),
                t.fillRect(r.x, r.y, r.w, r.h),
                (r.w === i.w && r.h === i.h) ||
                  (t.save(),
                  t.beginPath(),
                  t.rect(r.x, r.y, r.w, r.h),
                  t.clip(),
                  (t.fillStyle = e.borderColor),
                  t.rect(i.x, i.y, i.w, i.h),
                  t.fill("evenodd"),
                  t.restore());
            },
            height: function () {
              var t = this._view;
              return t.base - t.y;
            },
            inRange: function (t, e) {
              return yt(this._view, t, e);
            },
            inLabelRange: function (t, e) {
              var n = this._view;
              return pt(n) ? yt(n, t, null) : yt(n, null, e);
            },
            inXRange: function (t) {
              return yt(this._view, t, null);
            },
            inYRange: function (t) {
              return yt(this._view, null, t);
            },
            getCenterPoint: function () {
              var t,
                e,
                n = this._view;
              return (
                pt(n)
                  ? ((t = n.x), (e = (n.y + n.base) / 2))
                  : ((t = (n.x + n.base) / 2), (e = n.y)),
                { x: t, y: e }
              );
            },
            getArea: function () {
              var t = this._view;
              return pt(t)
                ? t.width * Math.abs(t.y - t.base)
                : t.height * Math.abs(t.x - t.base);
            },
            tooltipPosition: function () {
              var t = this._view;
              return { x: t.x, y: t.y };
            },
          }),
          xt = {},
          _t = at,
          wt = lt,
          kt = dt,
          Mt = bt;
        (xt.Arc = _t), (xt.Line = wt), (xt.Point = kt), (xt.Rectangle = Mt);
        var St = j._deprecated,
          Dt = j.valueOrDefault;
        function Ct(t, e, n) {
          var r,
            i,
            a = n.barThickness,
            o = e.stackCount,
            s = e.pixels[t],
            l = j.isNullOrUndef(a)
              ? (function (t, e) {
                  var n,
                    r,
                    i,
                    a,
                    o = t._length;
                  for (i = 1, a = e.length; i < a; ++i)
                    o = Math.min(o, Math.abs(e[i] - e[i - 1]));
                  for (i = 0, a = t.getTicks().length; i < a; ++i)
                    (r = t.getPixelForTick(i)),
                      (o = i > 0 ? Math.min(o, Math.abs(r - n)) : o),
                      (n = r);
                  return o;
                })(e.scale, e.pixels)
              : -1;
          return (
            j.isNullOrUndef(a)
              ? ((r = l * n.categoryPercentage), (i = n.barPercentage))
              : ((r = a * o), (i = 1)),
            { chunk: r / o, ratio: i, start: s - r / 2 }
          );
        }
        R._set("bar", {
          hover: { mode: "label" },
          scales: {
            xAxes: [
              {
                type: "category",
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
            yAxes: [{ type: "linear" }],
          },
        }),
          R._set("global", {
            datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } },
          });
        var Pt = et.extend({
            dataElementType: xt.Rectangle,
            _dataElementOptions: [
              "backgroundColor",
              "borderColor",
              "borderSkipped",
              "borderWidth",
              "barPercentage",
              "barThickness",
              "categoryPercentage",
              "maxBarThickness",
              "minBarLength",
            ],
            initialize: function () {
              var t,
                e,
                n = this;
              et.prototype.initialize.apply(n, arguments),
                ((t = n.getMeta()).stack = n.getDataset().stack),
                (t.bar = !0),
                (e = n._getIndexScale().options),
                St(
                  "bar chart",
                  e.barPercentage,
                  "scales.[x/y]Axes.barPercentage",
                  "dataset.barPercentage",
                ),
                St(
                  "bar chart",
                  e.barThickness,
                  "scales.[x/y]Axes.barThickness",
                  "dataset.barThickness",
                ),
                St(
                  "bar chart",
                  e.categoryPercentage,
                  "scales.[x/y]Axes.categoryPercentage",
                  "dataset.categoryPercentage",
                ),
                St(
                  "bar chart",
                  n._getValueScale().options.minBarLength,
                  "scales.[x/y]Axes.minBarLength",
                  "dataset.minBarLength",
                ),
                St(
                  "bar chart",
                  e.maxBarThickness,
                  "scales.[x/y]Axes.maxBarThickness",
                  "dataset.maxBarThickness",
                );
            },
            update: function (t) {
              var e,
                n,
                r = this.getMeta().data;
              for (
                this._ruler = this.getRuler(), e = 0, n = r.length;
                e < n;
                ++e
              )
                this.updateElement(r[e], e, t);
            },
            updateElement: function (t, e, n) {
              var r = this,
                i = r.getMeta(),
                a = r.getDataset(),
                o = r._resolveDataElementOptions(t, e);
              (t._xScale = r.getScaleForId(i.xAxisID)),
                (t._yScale = r.getScaleForId(i.yAxisID)),
                (t._datasetIndex = r.index),
                (t._index = e),
                (t._model = {
                  backgroundColor: o.backgroundColor,
                  borderColor: o.borderColor,
                  borderSkipped: o.borderSkipped,
                  borderWidth: o.borderWidth,
                  datasetLabel: a.label,
                  label: r.chart.data.labels[e],
                }),
                j.isArray(a.data[e]) && (t._model.borderSkipped = null),
                r._updateElementGeometry(t, e, n, o),
                t.pivot();
            },
            _updateElementGeometry: function (t, e, n, r) {
              var i = this,
                a = t._model,
                o = i._getValueScale(),
                s = o.getBasePixel(),
                l = o.isHorizontal(),
                u = i._ruler || i.getRuler(),
                c = i.calculateBarValuePixels(i.index, e, r),
                h = i.calculateBarIndexPixels(i.index, e, u, r);
              (a.horizontal = l),
                (a.base = n ? s : c.base),
                (a.x = l ? (n ? s : c.head) : h.center),
                (a.y = l ? h.center : n ? s : c.head),
                (a.height = l ? h.size : void 0),
                (a.width = l ? void 0 : h.size);
            },
            _getStacks: function (t) {
              var e,
                n,
                r = this._getIndexScale(),
                i = r._getMatchingVisibleMetas(this._type),
                a = r.options.stacked,
                o = i.length,
                s = [];
              for (
                e = 0;
                e < o &&
                ((n = i[e]),
                (!1 === a ||
                  -1 === s.indexOf(n.stack) ||
                  (void 0 === a && void 0 === n.stack)) &&
                  s.push(n.stack),
                n.index !== t);
                ++e
              );
              return s;
            },
            getStackCount: function () {
              return this._getStacks().length;
            },
            getStackIndex: function (t, e) {
              var n = this._getStacks(t),
                r = void 0 !== e ? n.indexOf(e) : -1;
              return -1 === r ? n.length - 1 : r;
            },
            getRuler: function () {
              var t,
                e,
                n = this._getIndexScale(),
                r = [];
              for (t = 0, e = this.getMeta().data.length; t < e; ++t)
                r.push(n.getPixelForValue(null, t, this.index));
              return {
                pixels: r,
                start: n._startPixel,
                end: n._endPixel,
                stackCount: this.getStackCount(),
                scale: n,
              };
            },
            calculateBarValuePixels: function (t, e, n) {
              var r,
                i,
                a,
                o,
                s,
                l,
                u,
                c = this.chart,
                h = this._getValueScale(),
                d = h.isHorizontal(),
                f = c.data.datasets,
                p = h._getMatchingVisibleMetas(this._type),
                g = h._parseValue(f[t].data[e]),
                m = n.minBarLength,
                v = h.options.stacked,
                y = this.getMeta().stack,
                b =
                  void 0 === g.start
                    ? 0
                    : g.max >= 0 && g.min >= 0
                      ? g.min
                      : g.max,
                x =
                  void 0 === g.start
                    ? g.end
                    : g.max >= 0 && g.min >= 0
                      ? g.max - g.min
                      : g.min - g.max,
                _ = p.length;
              if (v || (void 0 === v && void 0 !== y))
                for (r = 0; r < _ && (i = p[r]).index !== t; ++r)
                  i.stack === y &&
                    ((a =
                      void 0 === (u = h._parseValue(f[i.index].data[e])).start
                        ? u.end
                        : u.min >= 0 && u.max >= 0
                          ? u.max
                          : u.min),
                    ((g.min < 0 && a < 0) || (g.max >= 0 && a > 0)) &&
                      (b += a));
              return (
                (o = h.getPixelForValue(b)),
                (l = (s = h.getPixelForValue(b + x)) - o),
                void 0 !== m &&
                  Math.abs(l) < m &&
                  ((l = m),
                  (s = (x >= 0 && !d) || (x < 0 && d) ? o - m : o + m)),
                { size: l, base: o, head: s, center: s + l / 2 }
              );
            },
            calculateBarIndexPixels: function (t, e, n, r) {
              var i =
                  "flex" === r.barThickness
                    ? (function (t, e, n) {
                        var r,
                          i = e.pixels,
                          a = i[t],
                          o = t > 0 ? i[t - 1] : null,
                          s = t < i.length - 1 ? i[t + 1] : null,
                          l = n.categoryPercentage;
                        return (
                          null === o &&
                            (o = a - (null === s ? e.end - e.start : s - a)),
                          null === s && (s = a + a - o),
                          (r = a - ((a - Math.min(o, s)) / 2) * l),
                          {
                            chunk: ((Math.abs(s - o) / 2) * l) / e.stackCount,
                            ratio: n.barPercentage,
                            start: r,
                          }
                        );
                      })(e, n, r)
                    : Ct(e, n, r),
                a = this.getStackIndex(t, this.getMeta().stack),
                o = i.start + i.chunk * a + i.chunk / 2,
                s = Math.min(Dt(r.maxBarThickness, 1 / 0), i.chunk * i.ratio);
              return { base: o - s / 2, head: o + s / 2, center: o, size: s };
            },
            draw: function () {
              var t = this.chart,
                e = this._getValueScale(),
                n = this.getMeta().data,
                r = this.getDataset(),
                i = n.length,
                a = 0;
              for (j.canvas.clipArea(t.ctx, t.chartArea); a < i; ++a) {
                var o = e._parseValue(r.data[a]);
                isNaN(o.min) || isNaN(o.max) || n[a].draw();
              }
              j.canvas.unclipArea(t.ctx);
            },
            _resolveDataElementOptions: function () {
              var t = this,
                e = j.extend(
                  {},
                  et.prototype._resolveDataElementOptions.apply(t, arguments),
                ),
                n = t._getIndexScale().options,
                r = t._getValueScale().options;
              return (
                (e.barPercentage = Dt(n.barPercentage, e.barPercentage)),
                (e.barThickness = Dt(n.barThickness, e.barThickness)),
                (e.categoryPercentage = Dt(
                  n.categoryPercentage,
                  e.categoryPercentage,
                )),
                (e.maxBarThickness = Dt(n.maxBarThickness, e.maxBarThickness)),
                (e.minBarLength = Dt(r.minBarLength, e.minBarLength)),
                e
              );
            },
          }),
          Tt = j.valueOrDefault,
          Ot = j.options.resolve;
        R._set("bubble", {
          hover: { mode: "single" },
          scales: {
            xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
            yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }],
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (t, e) {
                var n = e.datasets[t.datasetIndex].label || "",
                  r = e.datasets[t.datasetIndex].data[t.index];
                return (
                  n + ": (" + t.xLabel + ", " + t.yLabel + ", " + r.r + ")"
                );
              },
            },
          },
        });
        var At = et.extend({
            dataElementType: xt.Point,
            _dataElementOptions: [
              "backgroundColor",
              "borderColor",
              "borderWidth",
              "hoverBackgroundColor",
              "hoverBorderColor",
              "hoverBorderWidth",
              "hoverRadius",
              "hitRadius",
              "pointStyle",
              "rotation",
            ],
            update: function (t) {
              var e = this,
                n = e.getMeta().data;
              j.each(n, function (n, r) {
                e.updateElement(n, r, t);
              });
            },
            updateElement: function (t, e, n) {
              var r = this,
                i = r.getMeta(),
                a = t.custom || {},
                o = r.getScaleForId(i.xAxisID),
                s = r.getScaleForId(i.yAxisID),
                l = r._resolveDataElementOptions(t, e),
                u = r.getDataset().data[e],
                c = r.index,
                h = n
                  ? o.getPixelForDecimal(0.5)
                  : o.getPixelForValue("object" === typeof u ? u : NaN, e, c),
                d = n ? s.getBasePixel() : s.getPixelForValue(u, e, c);
              (t._xScale = o),
                (t._yScale = s),
                (t._options = l),
                (t._datasetIndex = c),
                (t._index = e),
                (t._model = {
                  backgroundColor: l.backgroundColor,
                  borderColor: l.borderColor,
                  borderWidth: l.borderWidth,
                  hitRadius: l.hitRadius,
                  pointStyle: l.pointStyle,
                  rotation: l.rotation,
                  radius: n ? 0 : l.radius,
                  skip: a.skip || isNaN(h) || isNaN(d),
                  x: h,
                  y: d,
                }),
                t.pivot();
            },
            setHoverStyle: function (t) {
              var e = t._model,
                n = t._options,
                r = j.getHoverColor;
              (t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius,
              }),
                (e.backgroundColor = Tt(
                  n.hoverBackgroundColor,
                  r(n.backgroundColor),
                )),
                (e.borderColor = Tt(n.hoverBorderColor, r(n.borderColor))),
                (e.borderWidth = Tt(n.hoverBorderWidth, n.borderWidth)),
                (e.radius = n.radius + n.hoverRadius);
            },
            _resolveDataElementOptions: function (t, e) {
              var n = this,
                r = n.chart,
                i = n.getDataset(),
                a = t.custom || {},
                o = i.data[e] || {},
                s = et.prototype._resolveDataElementOptions.apply(n, arguments),
                l = {
                  chart: r,
                  dataIndex: e,
                  dataset: i,
                  datasetIndex: n.index,
                };
              return (
                n._cachedDataOpts === s && (s = j.extend({}, s)),
                (s.radius = Ot(
                  [
                    a.radius,
                    o.r,
                    n._config.radius,
                    r.options.elements.point.radius,
                  ],
                  l,
                  e,
                )),
                s
              );
            },
          }),
          It = j.valueOrDefault,
          Ft = Math.PI,
          Lt = 2 * Ft,
          Rt = Ft / 2;
        R._set("doughnut", {
          animation: { animateRotate: !0, animateScale: !1 },
          hover: { mode: "single" },
          legendCallback: function (t) {
            var e,
              n,
              r,
              i = document.createElement("ul"),
              a = t.data,
              o = a.datasets,
              s = a.labels;
            if ((i.setAttribute("class", t.id + "-legend"), o.length))
              for (e = 0, n = o[0].data.length; e < n; ++e)
                ((r = i.appendChild(document.createElement("li"))).appendChild(
                  document.createElement("span"),
                ).style.backgroundColor = o[0].backgroundColor[e]),
                  s[e] && r.appendChild(document.createTextNode(s[e]));
            return i.outerHTML;
          },
          legend: {
            labels: {
              generateLabels: function (t) {
                var e = t.data;
                return e.labels.length && e.datasets.length
                  ? e.labels.map(function (n, r) {
                      var i = t.getDatasetMeta(0),
                        a = i.controller.getStyle(r);
                      return {
                        text: n,
                        fillStyle: a.backgroundColor,
                        strokeStyle: a.borderColor,
                        lineWidth: a.borderWidth,
                        hidden:
                          isNaN(e.datasets[0].data[r]) || i.data[r].hidden,
                        index: r,
                      };
                    })
                  : [];
              },
            },
            onClick: function (t, e) {
              var n,
                r,
                i,
                a = e.index,
                o = this.chart;
              for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
                (i = o.getDatasetMeta(n)).data[a] &&
                  (i.data[a].hidden = !i.data[a].hidden);
              o.update();
            },
          },
          cutoutPercentage: 50,
          rotation: -Rt,
          circumference: Lt,
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (t, e) {
                var n = e.labels[t.index],
                  r = ": " + e.datasets[t.datasetIndex].data[t.index];
                return j.isArray(n) ? ((n = n.slice())[0] += r) : (n += r), n;
              },
            },
          },
        });
        var Et = et.extend({
          dataElementType: xt.Arc,
          linkScales: j.noop,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
          ],
          getRingIndex: function (t) {
            for (var e = 0, n = 0; n < t; ++n)
              this.chart.isDatasetVisible(n) && ++e;
            return e;
          },
          update: function (t) {
            var e,
              n,
              r,
              i,
              a = this,
              o = a.chart,
              s = o.chartArea,
              l = o.options,
              u = 1,
              c = 1,
              h = 0,
              d = 0,
              f = a.getMeta(),
              p = f.data,
              g = l.cutoutPercentage / 100 || 0,
              m = l.circumference,
              v = a._getRingWeight(a.index);
            if (m < Lt) {
              var y = l.rotation % Lt,
                b = (y += y >= Ft ? -Lt : y < -Ft ? Lt : 0) + m,
                x = Math.cos(y),
                _ = Math.sin(y),
                w = Math.cos(b),
                k = Math.sin(b),
                M = (y <= 0 && b >= 0) || b >= Lt,
                S = (y <= Rt && b >= Rt) || b >= Lt + Rt,
                D = (y <= -Rt && b >= -Rt) || b >= Ft + Rt,
                C = y === -Ft || b >= Ft ? -1 : Math.min(x, x * g, w, w * g),
                P = D ? -1 : Math.min(_, _ * g, k, k * g),
                T = M ? 1 : Math.max(x, x * g, w, w * g),
                O = S ? 1 : Math.max(_, _ * g, k, k * g);
              (u = (T - C) / 2),
                (c = (O - P) / 2),
                (h = -(T + C) / 2),
                (d = -(O + P) / 2);
            }
            for (r = 0, i = p.length; r < i; ++r)
              p[r]._options = a._resolveDataElementOptions(p[r], r);
            for (
              o.borderWidth = a.getMaxBorderWidth(),
                e = (s.right - s.left - o.borderWidth) / u,
                n = (s.bottom - s.top - o.borderWidth) / c,
                o.outerRadius = Math.max(Math.min(e, n) / 2, 0),
                o.innerRadius = Math.max(o.outerRadius * g, 0),
                o.radiusLength =
                  (o.outerRadius - o.innerRadius) /
                  (a._getVisibleDatasetWeightTotal() || 1),
                o.offsetX = h * o.outerRadius,
                o.offsetY = d * o.outerRadius,
                f.total = a.calculateTotal(),
                a.outerRadius =
                  o.outerRadius -
                  o.radiusLength * a._getRingWeightOffset(a.index),
                a.innerRadius = Math.max(a.outerRadius - o.radiusLength * v, 0),
                r = 0,
                i = p.length;
              r < i;
              ++r
            )
              a.updateElement(p[r], r, t);
          },
          updateElement: function (t, e, n) {
            var r = this,
              i = r.chart,
              a = i.chartArea,
              o = i.options,
              s = o.animation,
              l = (a.left + a.right) / 2,
              u = (a.top + a.bottom) / 2,
              c = o.rotation,
              h = o.rotation,
              d = r.getDataset(),
              f =
                (n && s.animateRotate) || t.hidden
                  ? 0
                  : r.calculateCircumference(d.data[e]) *
                    (o.circumference / Lt),
              p = n && s.animateScale ? 0 : r.innerRadius,
              g = n && s.animateScale ? 0 : r.outerRadius,
              m = t._options || {};
            j.extend(t, {
              _datasetIndex: r.index,
              _index: e,
              _model: {
                backgroundColor: m.backgroundColor,
                borderColor: m.borderColor,
                borderWidth: m.borderWidth,
                borderAlign: m.borderAlign,
                x: l + i.offsetX,
                y: u + i.offsetY,
                startAngle: c,
                endAngle: h,
                circumference: f,
                outerRadius: g,
                innerRadius: p,
                label: j.valueAtIndexOrDefault(d.label, e, i.data.labels[e]),
              },
            });
            var v = t._model;
            (n && s.animateRotate) ||
              ((v.startAngle =
                0 === e ? o.rotation : r.getMeta().data[e - 1]._model.endAngle),
              (v.endAngle = v.startAngle + v.circumference)),
              t.pivot();
          },
          calculateTotal: function () {
            var t,
              e = this.getDataset(),
              n = this.getMeta(),
              r = 0;
            return (
              j.each(n.data, function (n, i) {
                (t = e.data[i]), isNaN(t) || n.hidden || (r += Math.abs(t));
              }),
              r
            );
          },
          calculateCircumference: function (t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? Lt * (Math.abs(t) / e) : 0;
          },
          getMaxBorderWidth: function (t) {
            var e,
              n,
              r,
              i,
              a,
              o,
              s,
              l,
              u = 0,
              c = this.chart;
            if (!t)
              for (e = 0, n = c.data.datasets.length; e < n; ++e)
                if (c.isDatasetVisible(e)) {
                  (t = (r = c.getDatasetMeta(e)).data),
                    e !== this.index && (a = r.controller);
                  break;
                }
            if (!t) return 0;
            for (e = 0, n = t.length; e < n; ++e)
              (i = t[e]),
                a
                  ? (a._configure(), (o = a._resolveDataElementOptions(i, e)))
                  : (o = i._options),
                "inner" !== o.borderAlign &&
                  ((s = o.borderWidth),
                  (u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u));
            return u;
          },
          setHoverStyle: function (t) {
            var e = t._model,
              n = t._options,
              r = j.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
            }),
              (e.backgroundColor = It(
                n.hoverBackgroundColor,
                r(n.backgroundColor),
              )),
              (e.borderColor = It(n.hoverBorderColor, r(n.borderColor))),
              (e.borderWidth = It(n.hoverBorderWidth, n.borderWidth));
          },
          _getRingWeightOffset: function (t) {
            for (var e = 0, n = 0; n < t; ++n)
              this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
            return e;
          },
          _getRingWeight: function (t) {
            return Math.max(It(this.chart.data.datasets[t].weight, 1), 0);
          },
          _getVisibleDatasetWeightTotal: function () {
            return this._getRingWeightOffset(this.chart.data.datasets.length);
          },
        });
        R._set("horizontalBar", {
          hover: { mode: "index", axis: "y" },
          scales: {
            xAxes: [{ type: "linear", position: "bottom" }],
            yAxes: [
              {
                type: "category",
                position: "left",
                offset: !0,
                gridLines: { offsetGridLines: !0 },
              },
            ],
          },
          elements: { rectangle: { borderSkipped: "left" } },
          tooltips: { mode: "index", axis: "y" },
        }),
          R._set("global", {
            datasets: {
              horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 },
            },
          });
        var Nt = Pt.extend({
            _getValueScaleId: function () {
              return this.getMeta().xAxisID;
            },
            _getIndexScaleId: function () {
              return this.getMeta().yAxisID;
            },
          }),
          Wt = j.valueOrDefault,
          zt = j.options.resolve,
          jt = j.canvas._isPointInArea;
        function Yt(t, e) {
          var n = (t && t.options.ticks) || {},
            r = n.reverse,
            i = void 0 === n.min ? e : 0,
            a = void 0 === n.max ? e : 0;
          return { start: r ? a : i, end: r ? i : a };
        }
        function Vt(t, e, n) {
          var r = n / 2,
            i = Yt(t, r),
            a = Yt(e, r);
          return { top: a.end, right: i.end, bottom: a.start, left: i.start };
        }
        function Bt(t) {
          var e, n, r, i;
          return (
            j.isObject(t)
              ? ((e = t.top), (n = t.right), (r = t.bottom), (i = t.left))
              : (e = n = r = i = t),
            { top: e, right: n, bottom: r, left: i }
          );
        }
        R._set("line", {
          showLines: !0,
          spanGaps: !1,
          hover: { mode: "label" },
          scales: {
            xAxes: [{ type: "category", id: "x-axis-0" }],
            yAxes: [{ type: "linear", id: "y-axis-0" }],
          },
        });
        var Ht = et.extend({
            datasetElementType: xt.Line,
            dataElementType: xt.Point,
            _datasetElementOptions: [
              "backgroundColor",
              "borderCapStyle",
              "borderColor",
              "borderDash",
              "borderDashOffset",
              "borderJoinStyle",
              "borderWidth",
              "cubicInterpolationMode",
              "fill",
            ],
            _dataElementOptions: {
              backgroundColor: "pointBackgroundColor",
              borderColor: "pointBorderColor",
              borderWidth: "pointBorderWidth",
              hitRadius: "pointHitRadius",
              hoverBackgroundColor: "pointHoverBackgroundColor",
              hoverBorderColor: "pointHoverBorderColor",
              hoverBorderWidth: "pointHoverBorderWidth",
              hoverRadius: "pointHoverRadius",
              pointStyle: "pointStyle",
              radius: "pointRadius",
              rotation: "pointRotation",
            },
            update: function (t) {
              var e,
                n,
                r = this,
                i = r.getMeta(),
                a = i.dataset,
                o = i.data || [],
                s = r.chart.options,
                l = r._config,
                u = (r._showLine = Wt(l.showLine, s.showLines));
              for (
                r._xScale = r.getScaleForId(i.xAxisID),
                  r._yScale = r.getScaleForId(i.yAxisID),
                  u &&
                    (void 0 !== l.tension &&
                      void 0 === l.lineTension &&
                      (l.lineTension = l.tension),
                    (a._scale = r._yScale),
                    (a._datasetIndex = r.index),
                    (a._children = o),
                    (a._model = r._resolveDatasetElementOptions(a)),
                    a.pivot()),
                  e = 0,
                  n = o.length;
                e < n;
                ++e
              )
                r.updateElement(o[e], e, t);
              for (
                u && 0 !== a._model.tension && r.updateBezierControlPoints(),
                  e = 0,
                  n = o.length;
                e < n;
                ++e
              )
                o[e].pivot();
            },
            updateElement: function (t, e, n) {
              var r,
                i,
                a = this,
                o = a.getMeta(),
                s = t.custom || {},
                l = a.getDataset(),
                u = a.index,
                c = l.data[e],
                h = a._xScale,
                d = a._yScale,
                f = o.dataset._model,
                p = a._resolveDataElementOptions(t, e);
              (r = h.getPixelForValue("object" === typeof c ? c : NaN, e, u)),
                (i = n ? d.getBasePixel() : a.calculatePointY(c, e, u)),
                (t._xScale = h),
                (t._yScale = d),
                (t._options = p),
                (t._datasetIndex = u),
                (t._index = e),
                (t._model = {
                  x: r,
                  y: i,
                  skip: s.skip || isNaN(r) || isNaN(i),
                  radius: p.radius,
                  pointStyle: p.pointStyle,
                  rotation: p.rotation,
                  backgroundColor: p.backgroundColor,
                  borderColor: p.borderColor,
                  borderWidth: p.borderWidth,
                  tension: Wt(s.tension, f ? f.tension : 0),
                  steppedLine: !!f && f.steppedLine,
                  hitRadius: p.hitRadius,
                });
            },
            _resolveDatasetElementOptions: function (t) {
              var e = this,
                n = e._config,
                r = t.custom || {},
                i = e.chart.options,
                a = i.elements.line,
                o = et.prototype._resolveDatasetElementOptions.apply(
                  e,
                  arguments,
                );
              return (
                (o.spanGaps = Wt(n.spanGaps, i.spanGaps)),
                (o.tension = Wt(n.lineTension, a.tension)),
                (o.steppedLine = zt([r.steppedLine, n.steppedLine, a.stepped])),
                (o.clip = Bt(
                  Wt(n.clip, Vt(e._xScale, e._yScale, o.borderWidth)),
                )),
                o
              );
            },
            calculatePointY: function (t, e, n) {
              var r,
                i,
                a,
                o,
                s,
                l,
                u,
                c = this.chart,
                h = this._yScale,
                d = 0,
                f = 0;
              if (h.options.stacked) {
                for (
                  s = +h.getRightValue(t),
                    u = (l = c._getSortedVisibleDatasetMetas()).length,
                    r = 0;
                  r < u && (a = l[r]).index !== n;
                  ++r
                )
                  (i = c.data.datasets[a.index]),
                    "line" === a.type &&
                      a.yAxisID === h.id &&
                      ((o = +h.getRightValue(i.data[e])) < 0
                        ? (f += o || 0)
                        : (d += o || 0));
                return s < 0
                  ? h.getPixelForValue(f + s)
                  : h.getPixelForValue(d + s);
              }
              return h.getPixelForValue(t);
            },
            updateBezierControlPoints: function () {
              var t,
                e,
                n,
                r,
                i = this.chart,
                a = this.getMeta(),
                o = a.dataset._model,
                s = i.chartArea,
                l = a.data || [];
              function u(t, e, n) {
                return Math.max(Math.min(t, n), e);
              }
              if (
                (o.spanGaps &&
                  (l = l.filter(function (t) {
                    return !t._model.skip;
                  })),
                "monotone" === o.cubicInterpolationMode)
              )
                j.splineCurveMonotone(l);
              else
                for (t = 0, e = l.length; t < e; ++t)
                  (n = l[t]._model),
                    (r = j.splineCurve(
                      j.previousItem(l, t)._model,
                      n,
                      j.nextItem(l, t)._model,
                      o.tension,
                    )),
                    (n.controlPointPreviousX = r.previous.x),
                    (n.controlPointPreviousY = r.previous.y),
                    (n.controlPointNextX = r.next.x),
                    (n.controlPointNextY = r.next.y);
              if (i.options.elements.line.capBezierPoints)
                for (t = 0, e = l.length; t < e; ++t)
                  (n = l[t]._model),
                    jt(n, s) &&
                      (t > 0 &&
                        jt(l[t - 1]._model, s) &&
                        ((n.controlPointPreviousX = u(
                          n.controlPointPreviousX,
                          s.left,
                          s.right,
                        )),
                        (n.controlPointPreviousY = u(
                          n.controlPointPreviousY,
                          s.top,
                          s.bottom,
                        ))),
                      t < l.length - 1 &&
                        jt(l[t + 1]._model, s) &&
                        ((n.controlPointNextX = u(
                          n.controlPointNextX,
                          s.left,
                          s.right,
                        )),
                        (n.controlPointNextY = u(
                          n.controlPointNextY,
                          s.top,
                          s.bottom,
                        ))));
            },
            draw: function () {
              var t,
                e = this.chart,
                n = this.getMeta(),
                r = n.data || [],
                i = e.chartArea,
                a = e.canvas,
                o = 0,
                s = r.length;
              for (
                this._showLine &&
                ((t = n.dataset._model.clip),
                j.canvas.clipArea(e.ctx, {
                  left: !1 === t.left ? 0 : i.left - t.left,
                  right: !1 === t.right ? a.width : i.right + t.right,
                  top: !1 === t.top ? 0 : i.top - t.top,
                  bottom: !1 === t.bottom ? a.height : i.bottom + t.bottom,
                }),
                n.dataset.draw(),
                j.canvas.unclipArea(e.ctx));
                o < s;
                ++o
              )
                r[o].draw(i);
            },
            setHoverStyle: function (t) {
              var e = t._model,
                n = t._options,
                r = j.getHoverColor;
              (t.$previousStyle = {
                backgroundColor: e.backgroundColor,
                borderColor: e.borderColor,
                borderWidth: e.borderWidth,
                radius: e.radius,
              }),
                (e.backgroundColor = Wt(
                  n.hoverBackgroundColor,
                  r(n.backgroundColor),
                )),
                (e.borderColor = Wt(n.hoverBorderColor, r(n.borderColor))),
                (e.borderWidth = Wt(n.hoverBorderWidth, n.borderWidth)),
                (e.radius = Wt(n.hoverRadius, n.radius));
            },
          }),
          Ut = j.options.resolve;
        R._set("polarArea", {
          scale: {
            type: "radialLinear",
            angleLines: { display: !1 },
            gridLines: { circular: !0 },
            pointLabels: { display: !1 },
            ticks: { beginAtZero: !0 },
          },
          animation: { animateRotate: !0, animateScale: !0 },
          startAngle: -0.5 * Math.PI,
          legendCallback: function (t) {
            var e,
              n,
              r,
              i = document.createElement("ul"),
              a = t.data,
              o = a.datasets,
              s = a.labels;
            if ((i.setAttribute("class", t.id + "-legend"), o.length))
              for (e = 0, n = o[0].data.length; e < n; ++e)
                ((r = i.appendChild(document.createElement("li"))).appendChild(
                  document.createElement("span"),
                ).style.backgroundColor = o[0].backgroundColor[e]),
                  s[e] && r.appendChild(document.createTextNode(s[e]));
            return i.outerHTML;
          },
          legend: {
            labels: {
              generateLabels: function (t) {
                var e = t.data;
                return e.labels.length && e.datasets.length
                  ? e.labels.map(function (n, r) {
                      var i = t.getDatasetMeta(0),
                        a = i.controller.getStyle(r);
                      return {
                        text: n,
                        fillStyle: a.backgroundColor,
                        strokeStyle: a.borderColor,
                        lineWidth: a.borderWidth,
                        hidden:
                          isNaN(e.datasets[0].data[r]) || i.data[r].hidden,
                        index: r,
                      };
                    })
                  : [];
              },
            },
            onClick: function (t, e) {
              var n,
                r,
                i,
                a = e.index,
                o = this.chart;
              for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)
                (i = o.getDatasetMeta(n)).data[a].hidden = !i.data[a].hidden;
              o.update();
            },
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (t, e) {
                return e.labels[t.index] + ": " + t.yLabel;
              },
            },
          },
        });
        var Gt = et.extend({
          dataElementType: xt.Arc,
          linkScales: j.noop,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
          ],
          _getIndexScaleId: function () {
            return this.chart.scale.id;
          },
          _getValueScaleId: function () {
            return this.chart.scale.id;
          },
          update: function (t) {
            var e,
              n,
              r,
              i = this,
              a = i.getDataset(),
              o = i.getMeta(),
              s = i.chart.options.startAngle || 0,
              l = (i._starts = []),
              u = (i._angles = []),
              c = o.data;
            for (
              i._updateRadius(),
                o.count = i.countVisibleElements(),
                e = 0,
                n = a.data.length;
              e < n;
              e++
            )
              (l[e] = s), (r = i._computeAngle(e)), (u[e] = r), (s += r);
            for (e = 0, n = c.length; e < n; ++e)
              (c[e]._options = i._resolveDataElementOptions(c[e], e)),
                i.updateElement(c[e], e, t);
          },
          _updateRadius: function () {
            var t = this,
              e = t.chart,
              n = e.chartArea,
              r = e.options,
              i = Math.min(n.right - n.left, n.bottom - n.top);
            (e.outerRadius = Math.max(i / 2, 0)),
              (e.innerRadius = Math.max(
                r.cutoutPercentage
                  ? (e.outerRadius / 100) * r.cutoutPercentage
                  : 1,
                0,
              )),
              (e.radiusLength =
                (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
              (t.outerRadius = e.outerRadius - e.radiusLength * t.index),
              (t.innerRadius = t.outerRadius - e.radiusLength);
          },
          updateElement: function (t, e, n) {
            var r = this,
              i = r.chart,
              a = r.getDataset(),
              o = i.options,
              s = o.animation,
              l = i.scale,
              u = i.data.labels,
              c = l.xCenter,
              h = l.yCenter,
              d = o.startAngle,
              f = t.hidden ? 0 : l.getDistanceFromCenterForValue(a.data[e]),
              p = r._starts[e],
              g = p + (t.hidden ? 0 : r._angles[e]),
              m = s.animateScale
                ? 0
                : l.getDistanceFromCenterForValue(a.data[e]),
              v = t._options || {};
            j.extend(t, {
              _datasetIndex: r.index,
              _index: e,
              _scale: l,
              _model: {
                backgroundColor: v.backgroundColor,
                borderColor: v.borderColor,
                borderWidth: v.borderWidth,
                borderAlign: v.borderAlign,
                x: c,
                y: h,
                innerRadius: 0,
                outerRadius: n ? m : f,
                startAngle: n && s.animateRotate ? d : p,
                endAngle: n && s.animateRotate ? d : g,
                label: j.valueAtIndexOrDefault(u, e, u[e]),
              },
            }),
              t.pivot();
          },
          countVisibleElements: function () {
            var t = this.getDataset(),
              e = this.getMeta(),
              n = 0;
            return (
              j.each(e.data, function (e, r) {
                isNaN(t.data[r]) || e.hidden || n++;
              }),
              n
            );
          },
          setHoverStyle: function (t) {
            var e = t._model,
              n = t._options,
              r = j.getHoverColor,
              i = j.valueOrDefault;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
            }),
              (e.backgroundColor = i(
                n.hoverBackgroundColor,
                r(n.backgroundColor),
              )),
              (e.borderColor = i(n.hoverBorderColor, r(n.borderColor))),
              (e.borderWidth = i(n.hoverBorderWidth, n.borderWidth));
          },
          _computeAngle: function (t) {
            var e = this,
              n = this.getMeta().count,
              r = e.getDataset(),
              i = e.getMeta();
            if (isNaN(r.data[t]) || i.data[t].hidden) return 0;
            var a = {
              chart: e.chart,
              dataIndex: t,
              dataset: r,
              datasetIndex: e.index,
            };
            return Ut(
              [e.chart.options.elements.arc.angle, (2 * Math.PI) / n],
              a,
              t,
            );
          },
        });
        R._set("pie", j.clone(R.doughnut)),
          R._set("pie", { cutoutPercentage: 0 });
        var qt = Et,
          $t = j.valueOrDefault;
        R._set("radar", {
          spanGaps: !1,
          scale: { type: "radialLinear" },
          elements: { line: { fill: "start", tension: 0 } },
        });
        var Zt = et.extend({
          datasetElementType: xt.Line,
          dataElementType: xt.Point,
          linkScales: j.noop,
          _datasetElementOptions: [
            "backgroundColor",
            "borderWidth",
            "borderColor",
            "borderCapStyle",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "fill",
          ],
          _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation",
          },
          _getIndexScaleId: function () {
            return this.chart.scale.id;
          },
          _getValueScaleId: function () {
            return this.chart.scale.id;
          },
          update: function (t) {
            var e,
              n,
              r = this,
              i = r.getMeta(),
              a = i.dataset,
              o = i.data || [],
              s = r.chart.scale,
              l = r._config;
            for (
              void 0 !== l.tension &&
                void 0 === l.lineTension &&
                (l.lineTension = l.tension),
                a._scale = s,
                a._datasetIndex = r.index,
                a._children = o,
                a._loop = !0,
                a._model = r._resolveDatasetElementOptions(a),
                a.pivot(),
                e = 0,
                n = o.length;
              e < n;
              ++e
            )
              r.updateElement(o[e], e, t);
            for (r.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e)
              o[e].pivot();
          },
          updateElement: function (t, e, n) {
            var r = this,
              i = t.custom || {},
              a = r.getDataset(),
              o = r.chart.scale,
              s = o.getPointPositionForValue(e, a.data[e]),
              l = r._resolveDataElementOptions(t, e),
              u = r.getMeta().dataset._model,
              c = n ? o.xCenter : s.x,
              h = n ? o.yCenter : s.y;
            (t._scale = o),
              (t._options = l),
              (t._datasetIndex = r.index),
              (t._index = e),
              (t._model = {
                x: c,
                y: h,
                skip: i.skip || isNaN(c) || isNaN(h),
                radius: l.radius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                tension: $t(i.tension, u ? u.tension : 0),
                hitRadius: l.hitRadius,
              });
          },
          _resolveDatasetElementOptions: function () {
            var t = this,
              e = t._config,
              n = t.chart.options,
              r = et.prototype._resolveDatasetElementOptions.apply(
                t,
                arguments,
              );
            return (
              (r.spanGaps = $t(e.spanGaps, n.spanGaps)),
              (r.tension = $t(e.lineTension, n.elements.line.tension)),
              r
            );
          },
          updateBezierControlPoints: function () {
            var t,
              e,
              n,
              r,
              i = this.getMeta(),
              a = this.chart.chartArea,
              o = i.data || [];
            function s(t, e, n) {
              return Math.max(Math.min(t, n), e);
            }
            for (
              i.dataset._model.spanGaps &&
                (o = o.filter(function (t) {
                  return !t._model.skip;
                })),
                t = 0,
                e = o.length;
              t < e;
              ++t
            )
              (n = o[t]._model),
                (r = j.splineCurve(
                  j.previousItem(o, t, !0)._model,
                  n,
                  j.nextItem(o, t, !0)._model,
                  n.tension,
                )),
                (n.controlPointPreviousX = s(r.previous.x, a.left, a.right)),
                (n.controlPointPreviousY = s(r.previous.y, a.top, a.bottom)),
                (n.controlPointNextX = s(r.next.x, a.left, a.right)),
                (n.controlPointNextY = s(r.next.y, a.top, a.bottom));
          },
          setHoverStyle: function (t) {
            var e = t._model,
              n = t._options,
              r = j.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
              radius: e.radius,
            }),
              (e.backgroundColor = $t(
                n.hoverBackgroundColor,
                r(n.backgroundColor),
              )),
              (e.borderColor = $t(n.hoverBorderColor, r(n.borderColor))),
              (e.borderWidth = $t(n.hoverBorderWidth, n.borderWidth)),
              (e.radius = $t(n.hoverRadius, n.radius));
          },
        });
        R._set("scatter", {
          hover: { mode: "single" },
          scales: {
            xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
            yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }],
          },
          tooltips: {
            callbacks: {
              title: function () {
                return "";
              },
              label: function (t) {
                return "(" + t.xLabel + ", " + t.yLabel + ")";
              },
            },
          },
        }),
          R._set("global", { datasets: { scatter: { showLine: !1 } } });
        var Kt = {
          bar: Pt,
          bubble: At,
          doughnut: Et,
          horizontalBar: Nt,
          line: Ht,
          polarArea: Gt,
          pie: qt,
          radar: Zt,
          scatter: Ht,
        };
        function Xt(t, e) {
          return t.native ? { x: t.x, y: t.y } : j.getRelativePosition(t, e);
        }
        function Jt(t, e) {
          var n,
            r,
            i,
            a,
            o,
            s,
            l = t._getSortedVisibleDatasetMetas();
          for (r = 0, a = l.length; r < a; ++r)
            for (i = 0, o = (n = l[r].data).length; i < o; ++i)
              (s = n[i])._view.skip || e(s);
        }
        function Qt(t, e) {
          var n = [];
          return (
            Jt(t, function (t) {
              t.inRange(e.x, e.y) && n.push(t);
            }),
            n
          );
        }
        function te(t, e, n, r) {
          var i = Number.POSITIVE_INFINITY,
            a = [];
          return (
            Jt(t, function (t) {
              if (!n || t.inRange(e.x, e.y)) {
                var o = t.getCenterPoint(),
                  s = r(e, o);
                s < i ? ((a = [t]), (i = s)) : s === i && a.push(t);
              }
            }),
            a
          );
        }
        function ee(t) {
          var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
          return function (t, r) {
            var i = e ? Math.abs(t.x - r.x) : 0,
              a = n ? Math.abs(t.y - r.y) : 0;
            return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2));
          };
        }
        function ne(t, e, n) {
          var r = Xt(e, t);
          n.axis = n.axis || "x";
          var i = ee(n.axis),
            a = n.intersect ? Qt(t, r) : te(t, r, !1, i),
            o = [];
          return a.length
            ? (t._getSortedVisibleDatasetMetas().forEach(function (t) {
                var e = t.data[a[0]._index];
                e && !e._view.skip && o.push(e);
              }),
              o)
            : [];
        }
        var re = {
            modes: {
              single: function (t, e) {
                var n = Xt(e, t),
                  r = [];
                return (
                  Jt(t, function (t) {
                    if (t.inRange(n.x, n.y)) return r.push(t), r;
                  }),
                  r.slice(0, 1)
                );
              },
              label: ne,
              index: ne,
              dataset: function (t, e, n) {
                var r = Xt(e, t);
                n.axis = n.axis || "xy";
                var i = ee(n.axis),
                  a = n.intersect ? Qt(t, r) : te(t, r, !1, i);
                return (
                  a.length > 0 &&
                    (a = t.getDatasetMeta(a[0]._datasetIndex).data),
                  a
                );
              },
              "x-axis": function (t, e) {
                return ne(t, e, { intersect: !1 });
              },
              point: function (t, e) {
                return Qt(t, Xt(e, t));
              },
              nearest: function (t, e, n) {
                var r = Xt(e, t);
                n.axis = n.axis || "xy";
                var i = ee(n.axis);
                return te(t, r, n.intersect, i);
              },
              x: function (t, e, n) {
                var r = Xt(e, t),
                  i = [],
                  a = !1;
                return (
                  Jt(t, function (t) {
                    t.inXRange(r.x) && i.push(t),
                      t.inRange(r.x, r.y) && (a = !0);
                  }),
                  n.intersect && !a && (i = []),
                  i
                );
              },
              y: function (t, e, n) {
                var r = Xt(e, t),
                  i = [],
                  a = !1;
                return (
                  Jt(t, function (t) {
                    t.inYRange(r.y) && i.push(t),
                      t.inRange(r.x, r.y) && (a = !0);
                  }),
                  n.intersect && !a && (i = []),
                  i
                );
              },
            },
          },
          ie = j.extend;
        function ae(t, e) {
          return j.where(t, function (t) {
            return t.pos === e;
          });
        }
        function oe(t, e) {
          return t.sort(function (t, n) {
            var r = e ? n : t,
              i = e ? t : n;
            return r.weight === i.weight
              ? r.index - i.index
              : r.weight - i.weight;
          });
        }
        function se(t, e, n, r) {
          return Math.max(t[n], e[n]) + Math.max(t[r], e[r]);
        }
        function le(t, e, n) {
          var r,
            i,
            a = n.box,
            o = t.maxPadding;
          if (
            (n.size && (t[n.pos] -= n.size),
            (n.size = n.horizontal ? a.height : a.width),
            (t[n.pos] += n.size),
            a.getPadding)
          ) {
            var s = a.getPadding();
            (o.top = Math.max(o.top, s.top)),
              (o.left = Math.max(o.left, s.left)),
              (o.bottom = Math.max(o.bottom, s.bottom)),
              (o.right = Math.max(o.right, s.right));
          }
          if (
            ((r = e.outerWidth - se(o, t, "left", "right")),
            (i = e.outerHeight - se(o, t, "top", "bottom")),
            r !== t.w || i !== t.h)
          )
            return (t.w = r), (t.h = i), n.horizontal ? r !== t.w : i !== t.h;
        }
        function ue(t, e) {
          var n = e.maxPadding;
          function r(t) {
            var r = { left: 0, top: 0, right: 0, bottom: 0 };
            return (
              t.forEach(function (t) {
                r[t] = Math.max(e[t], n[t]);
              }),
              r
            );
          }
          return r(t ? ["left", "right"] : ["top", "bottom"]);
        }
        function ce(t, e, n) {
          var r,
            i,
            a,
            o,
            s,
            l,
            u = [];
          for (r = 0, i = t.length; r < i; ++r)
            (o = (a = t[r]).box).update(
              a.width || e.w,
              a.height || e.h,
              ue(a.horizontal, e),
            ),
              le(e, n, a) && ((l = !0), u.length && (s = !0)),
              o.fullWidth || u.push(a);
          return (s && ce(u, e, n)) || l;
        }
        function he(t, e, n) {
          var r,
            i,
            a,
            o,
            s = n.padding,
            l = e.x,
            u = e.y;
          for (r = 0, i = t.length; r < i; ++r)
            (o = (a = t[r]).box),
              a.horizontal
                ? ((o.left = o.fullWidth ? s.left : e.left),
                  (o.right = o.fullWidth
                    ? n.outerWidth - s.right
                    : e.left + e.w),
                  (o.top = u),
                  (o.bottom = u + o.height),
                  (o.width = o.right - o.left),
                  (u = o.bottom))
                : ((o.left = l),
                  (o.right = l + o.width),
                  (o.top = e.top),
                  (o.bottom = e.top + e.h),
                  (o.height = o.bottom - o.top),
                  (l = o.right));
          (e.x = l), (e.y = u);
        }
        R._set("global", {
          layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
        });
        var de,
          fe = {
            defaults: {},
            addBox: function (t, e) {
              t.boxes || (t.boxes = []),
                (e.fullWidth = e.fullWidth || !1),
                (e.position = e.position || "top"),
                (e.weight = e.weight || 0),
                (e._layers =
                  e._layers ||
                  function () {
                    return [
                      {
                        z: 0,
                        draw: function () {
                          e.draw.apply(e, arguments);
                        },
                      },
                    ];
                  }),
                t.boxes.push(e);
            },
            removeBox: function (t, e) {
              var n = t.boxes ? t.boxes.indexOf(e) : -1;
              -1 !== n && t.boxes.splice(n, 1);
            },
            configure: function (t, e, n) {
              for (
                var r,
                  i = ["fullWidth", "position", "weight"],
                  a = i.length,
                  o = 0;
                o < a;
                ++o
              )
                (r = i[o]), n.hasOwnProperty(r) && (e[r] = n[r]);
            },
            update: function (t, e, n) {
              if (t) {
                var r = t.options.layout || {},
                  i = j.options.toPadding(r.padding),
                  a = e - i.width,
                  o = n - i.height,
                  s = (function (t) {
                    var e = (function (t) {
                        var e,
                          n,
                          r,
                          i = [];
                        for (e = 0, n = (t || []).length; e < n; ++e)
                          (r = t[e]),
                            i.push({
                              index: e,
                              box: r,
                              pos: r.position,
                              horizontal: r.isHorizontal(),
                              weight: r.weight,
                            });
                        return i;
                      })(t),
                      n = oe(ae(e, "left"), !0),
                      r = oe(ae(e, "right")),
                      i = oe(ae(e, "top"), !0),
                      a = oe(ae(e, "bottom"));
                    return {
                      leftAndTop: n.concat(i),
                      rightAndBottom: r.concat(a),
                      chartArea: ae(e, "chartArea"),
                      vertical: n.concat(r),
                      horizontal: i.concat(a),
                    };
                  })(t.boxes),
                  l = s.vertical,
                  u = s.horizontal,
                  c = Object.freeze({
                    outerWidth: e,
                    outerHeight: n,
                    padding: i,
                    availableWidth: a,
                    vBoxMaxWidth: a / 2 / l.length,
                    hBoxMaxHeight: o / 2,
                  }),
                  h = ie(
                    { maxPadding: ie({}, i), w: a, h: o, x: i.left, y: i.top },
                    i,
                  );
                !(function (t, e) {
                  var n, r, i;
                  for (n = 0, r = t.length; n < r; ++n)
                    ((i = t[n]).width = i.horizontal
                      ? i.box.fullWidth && e.availableWidth
                      : e.vBoxMaxWidth),
                      (i.height = i.horizontal && e.hBoxMaxHeight);
                })(l.concat(u), c),
                  ce(l, h, c),
                  ce(u, h, c) && ce(l, h, c),
                  (function (t) {
                    var e = t.maxPadding;
                    function n(n) {
                      var r = Math.max(e[n] - t[n], 0);
                      return (t[n] += r), r;
                    }
                    (t.y += n("top")),
                      (t.x += n("left")),
                      n("right"),
                      n("bottom");
                  })(h),
                  he(s.leftAndTop, h, c),
                  (h.x += h.w),
                  (h.y += h.h),
                  he(s.rightAndBottom, h, c),
                  (t.chartArea = {
                    left: h.left,
                    top: h.top,
                    right: h.left + h.w,
                    bottom: h.top + h.h,
                  }),
                  j.each(s.chartArea, function (e) {
                    var n = e.box;
                    ie(n, t.chartArea), n.update(h.w, h.h);
                  });
              }
            },
          },
          pe =
            ((de = Object.freeze({
              __proto__: null,
              default:
                "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n",
            })) &&
              de.default) ||
            de,
          ge = ["animationstart", "webkitAnimationStart"],
          me = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout",
          };
        function ve(t, e) {
          var n = j.getStyle(t, e),
            r = n && n.match(/^(\d+)(\.\d+)?px$/);
          return r ? Number(r[1]) : void 0;
        }
        var ye = !!(function () {
          var t = !1;
          try {
            var e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
            window.addEventListener("e", null, e);
          } catch (n) {}
          return t;
        })() && { passive: !0 };
        function be(t, e, n) {
          t.addEventListener(e, n, ye);
        }
        function xe(t, e, n) {
          t.removeEventListener(e, n, ye);
        }
        function _e(t, e, n, r, i) {
          return {
            type: t,
            chart: e,
            native: i || null,
            x: void 0 !== n ? n : null,
            y: void 0 !== r ? r : null,
          };
        }
        function we(t) {
          var e = document.createElement("div");
          return (e.className = t || ""), e;
        }
        function ke(t, e, n) {
          var r = t.$chartjs || (t.$chartjs = {}),
            i = (r.resizer = (function (t) {
              var e = we("chartjs-size-monitor"),
                n = we("chartjs-size-monitor-expand"),
                r = we("chartjs-size-monitor-shrink");
              n.appendChild(we()),
                r.appendChild(we()),
                e.appendChild(n),
                e.appendChild(r),
                (e._reset = function () {
                  (n.scrollLeft = 1e6),
                    (n.scrollTop = 1e6),
                    (r.scrollLeft = 1e6),
                    (r.scrollTop = 1e6);
                });
              var i = function () {
                e._reset(), t();
              };
              return (
                be(n, "scroll", i.bind(n, "expand")),
                be(r, "scroll", i.bind(r, "shrink")),
                e
              );
            })(
              (function (t, e) {
                var n = !1,
                  r = [];
                return function () {
                  (r = Array.prototype.slice.call(arguments)),
                    (e = e || this),
                    n ||
                      ((n = !0),
                      j.requestAnimFrame.call(window, function () {
                        (n = !1), t.apply(e, r);
                      }));
                };
              })(function () {
                if (r.resizer) {
                  var i = n.options.maintainAspectRatio && t.parentNode,
                    a = i ? i.clientWidth : 0;
                  e(_e("resize", n)),
                    i && i.clientWidth < a && n.canvas && e(_e("resize", n));
                }
              }),
            ));
          !(function (t, e) {
            var n = t.$chartjs || (t.$chartjs = {}),
              r = (n.renderProxy = function (t) {
                "chartjs-render-animation" === t.animationName && e();
              });
            j.each(ge, function (e) {
              be(t, e, r);
            }),
              (n.reflow = !!t.offsetParent),
              t.classList.add("chartjs-render-monitor");
          })(t, function () {
            if (r.resizer) {
              var e = t.parentNode;
              e && e !== i.parentNode && e.insertBefore(i, e.firstChild),
                i._reset();
            }
          });
        }
        function Me(t) {
          var e = t.$chartjs || {},
            n = e.resizer;
          delete e.resizer,
            (function (t) {
              var e = t.$chartjs || {},
                n = e.renderProxy;
              n &&
                (j.each(ge, function (e) {
                  xe(t, e, n);
                }),
                delete e.renderProxy),
                t.classList.remove("chartjs-render-monitor");
            })(t),
            n && n.parentNode && n.parentNode.removeChild(n);
        }
        var Se = {
          disableCSSInjection: !1,
          _enabled:
            "undefined" !== typeof window && "undefined" !== typeof document,
          _ensureLoaded: function (t) {
            if (!this.disableCSSInjection) {
              var e = t.getRootNode ? t.getRootNode() : document;
              !(function (t, e) {
                var n = t.$chartjs || (t.$chartjs = {});
                if (!n.containsStyles) {
                  (n.containsStyles = !0), (e = "/* Chart.js */\n" + e);
                  var r = document.createElement("style");
                  r.setAttribute("type", "text/css"),
                    r.appendChild(document.createTextNode(e)),
                    t.appendChild(r);
                }
              })(e.host ? e : document.head, pe);
            }
          },
          acquireContext: function (t, e) {
            "string" === typeof t
              ? (t = document.getElementById(t))
              : t.length && (t = t[0]),
              t && t.canvas && (t = t.canvas);
            var n = t && t.getContext && t.getContext("2d");
            return n && n.canvas === t
              ? (this._ensureLoaded(t),
                (function (t, e) {
                  var n = t.style,
                    r = t.getAttribute("height"),
                    i = t.getAttribute("width");
                  if (
                    ((t.$chartjs = {
                      initial: {
                        height: r,
                        width: i,
                        style: {
                          display: n.display,
                          height: n.height,
                          width: n.width,
                        },
                      },
                    }),
                    (n.display = n.display || "block"),
                    null === i || "" === i)
                  ) {
                    var a = ve(t, "width");
                    void 0 !== a && (t.width = a);
                  }
                  if (null === r || "" === r)
                    if ("" === t.style.height)
                      t.height = t.width / (e.options.aspectRatio || 2);
                    else {
                      var o = ve(t, "height");
                      void 0 !== a && (t.height = o);
                    }
                })(t, e),
                n)
              : null;
          },
          releaseContext: function (t) {
            var e = t.canvas;
            if (e.$chartjs) {
              var n = e.$chartjs.initial;
              ["height", "width"].forEach(function (t) {
                var r = n[t];
                j.isNullOrUndef(r)
                  ? e.removeAttribute(t)
                  : e.setAttribute(t, r);
              }),
                j.each(n.style || {}, function (t, n) {
                  e.style[n] = t;
                }),
                (e.width = e.width),
                delete e.$chartjs;
            }
          },
          addEventListener: function (t, e, n) {
            var r = t.canvas;
            if ("resize" !== e) {
              var i = n.$chartjs || (n.$chartjs = {});
              be(
                r,
                e,
                ((i.proxies || (i.proxies = {}))[t.id + "_" + e] = function (
                  e,
                ) {
                  n(
                    (function (t, e) {
                      var n = me[t.type] || t.type,
                        r = j.getRelativePosition(t, e);
                      return _e(n, e, r.x, r.y, t);
                    })(e, t),
                  );
                }),
              );
            } else ke(r, n, t);
          },
          removeEventListener: function (t, e, n) {
            var r = t.canvas;
            if ("resize" !== e) {
              var i = ((n.$chartjs || {}).proxies || {})[t.id + "_" + e];
              i && xe(r, e, i);
            } else Me(r);
          },
        };
        (j.addEvent = be), (j.removeEvent = xe);
        var De = Se._enabled
            ? Se
            : {
                acquireContext: function (t) {
                  return (
                    t && t.canvas && (t = t.canvas),
                    (t && t.getContext("2d")) || null
                  );
                },
              },
          Ce = j.extend(
            {
              initialize: function () {},
              acquireContext: function () {},
              releaseContext: function () {},
              addEventListener: function () {},
              removeEventListener: function () {},
            },
            De,
          );
        R._set("global", { plugins: {} });
        var Pe = {
            _plugins: [],
            _cacheId: 0,
            register: function (t) {
              var e = this._plugins;
              [].concat(t).forEach(function (t) {
                -1 === e.indexOf(t) && e.push(t);
              }),
                this._cacheId++;
            },
            unregister: function (t) {
              var e = this._plugins;
              [].concat(t).forEach(function (t) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }),
                this._cacheId++;
            },
            clear: function () {
              (this._plugins = []), this._cacheId++;
            },
            count: function () {
              return this._plugins.length;
            },
            getAll: function () {
              return this._plugins;
            },
            notify: function (t, e, n) {
              var r,
                i,
                a,
                o,
                s,
                l = this.descriptors(t),
                u = l.length;
              for (r = 0; r < u; ++r)
                if (
                  "function" === typeof (s = (a = (i = l[r]).plugin)[e]) &&
                  ((o = [t].concat(n || [])).push(i.options),
                  !1 === s.apply(a, o))
                )
                  return !1;
              return !0;
            },
            descriptors: function (t) {
              var e = t.$plugins || (t.$plugins = {});
              if (e.id === this._cacheId) return e.descriptors;
              var n = [],
                r = [],
                i = (t && t.config) || {},
                a = (i.options && i.options.plugins) || {};
              return (
                this._plugins.concat(i.plugins || []).forEach(function (t) {
                  if (-1 === n.indexOf(t)) {
                    var e = t.id,
                      i = a[e];
                    !1 !== i &&
                      (!0 === i && (i = j.clone(R.global.plugins[e])),
                      n.push(t),
                      r.push({ plugin: t, options: i || {} }));
                  }
                }),
                (e.descriptors = r),
                (e.id = this._cacheId),
                r
              );
            },
            _invalidate: function (t) {
              delete t.$plugins;
            },
          },
          Te = {
            constructors: {},
            defaults: {},
            registerScaleType: function (t, e, n) {
              (this.constructors[t] = e), (this.defaults[t] = j.clone(n));
            },
            getScaleConstructor: function (t) {
              return this.constructors.hasOwnProperty(t)
                ? this.constructors[t]
                : void 0;
            },
            getScaleDefaults: function (t) {
              return this.defaults.hasOwnProperty(t)
                ? j.merge({}, [R.scale, this.defaults[t]])
                : {};
            },
            updateScaleDefaults: function (t, e) {
              this.defaults.hasOwnProperty(t) &&
                (this.defaults[t] = j.extend(this.defaults[t], e));
            },
            addScalesToLayout: function (t) {
              j.each(t.scales, function (e) {
                (e.fullWidth = e.options.fullWidth),
                  (e.position = e.options.position),
                  (e.weight = e.options.weight),
                  fe.addBox(t, e);
              });
            },
          },
          Oe = j.valueOrDefault,
          Ae = j.rtl.getRtlAdapter;
        R._set("global", {
          tooltips: {
            enabled: !0,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: !0,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: !0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
              beforeTitle: j.noop,
              title: function (t, e) {
                var n = "",
                  r = e.labels,
                  i = r ? r.length : 0;
                if (t.length > 0) {
                  var a = t[0];
                  a.label
                    ? (n = a.label)
                    : a.xLabel
                      ? (n = a.xLabel)
                      : i > 0 && a.index < i && (n = r[a.index]);
                }
                return n;
              },
              afterTitle: j.noop,
              beforeBody: j.noop,
              beforeLabel: j.noop,
              label: function (t, e) {
                var n = e.datasets[t.datasetIndex].label || "";
                return (
                  n && (n += ": "),
                  j.isNullOrUndef(t.value) ? (n += t.yLabel) : (n += t.value),
                  n
                );
              },
              labelColor: function (t, e) {
                var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                return {
                  borderColor: n.borderColor,
                  backgroundColor: n.backgroundColor,
                };
              },
              labelTextColor: function () {
                return this._options.bodyFontColor;
              },
              afterLabel: j.noop,
              afterBody: j.noop,
              beforeFooter: j.noop,
              footer: j.noop,
              afterFooter: j.noop,
            },
          },
        });
        var Ie = {
          average: function (t) {
            if (!t.length) return !1;
            var e,
              n,
              r = 0,
              i = 0,
              a = 0;
            for (e = 0, n = t.length; e < n; ++e) {
              var o = t[e];
              if (o && o.hasValue()) {
                var s = o.tooltipPosition();
                (r += s.x), (i += s.y), ++a;
              }
            }
            return { x: r / a, y: i / a };
          },
          nearest: function (t, e) {
            var n,
              r,
              i,
              a = e.x,
              o = e.y,
              s = Number.POSITIVE_INFINITY;
            for (n = 0, r = t.length; n < r; ++n) {
              var l = t[n];
              if (l && l.hasValue()) {
                var u = l.getCenterPoint(),
                  c = j.distanceBetweenPoints(e, u);
                c < s && ((s = c), (i = l));
              }
            }
            if (i) {
              var h = i.tooltipPosition();
              (a = h.x), (o = h.y);
            }
            return { x: a, y: o };
          },
        };
        function Fe(t, e) {
          return (
            e && (j.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
            t
          );
        }
        function Le(t) {
          return ("string" === typeof t || t instanceof String) &&
            t.indexOf("\n") > -1
            ? t.split("\n")
            : t;
        }
        function Re(t) {
          var e = t._xScale,
            n = t._yScale || t._scale,
            r = t._index,
            i = t._datasetIndex,
            a = t._chart.getDatasetMeta(i).controller,
            o = a._getIndexScale(),
            s = a._getValueScale();
          return {
            xLabel: e ? e.getLabelForIndex(r, i) : "",
            yLabel: n ? n.getLabelForIndex(r, i) : "",
            label: o ? "" + o.getLabelForIndex(r, i) : "",
            value: s ? "" + s.getLabelForIndex(r, i) : "",
            index: r,
            datasetIndex: i,
            x: t._model.x,
            y: t._model.y,
          };
        }
        function Ee(t) {
          var e = R.global;
          return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            rtl: t.rtl,
            textDirection: t.textDirection,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: Oe(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: Oe(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: Oe(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: Oe(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: Oe(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: Oe(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: Oe(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: Oe(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: Oe(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth,
          };
        }
        function Ne(t, e) {
          return "center" === e
            ? t.x + t.width / 2
            : "right" === e
              ? t.x + t.width - t.xPadding
              : t.x + t.xPadding;
        }
        function We(t) {
          return Fe([], Le(t));
        }
        var ze = q.extend({
            initialize: function () {
              (this._model = Ee(this._options)), (this._lastActive = []);
            },
            getTitle: function () {
              var t = this,
                e = t._options,
                n = e.callbacks,
                r = n.beforeTitle.apply(t, arguments),
                i = n.title.apply(t, arguments),
                a = n.afterTitle.apply(t, arguments),
                o = [];
              return (o = Fe(o, Le(r))), (o = Fe(o, Le(i))), (o = Fe(o, Le(a)));
            },
            getBeforeBody: function () {
              return We(
                this._options.callbacks.beforeBody.apply(this, arguments),
              );
            },
            getBody: function (t, e) {
              var n = this,
                r = n._options.callbacks,
                i = [];
              return (
                j.each(t, function (t) {
                  var a = { before: [], lines: [], after: [] };
                  Fe(a.before, Le(r.beforeLabel.call(n, t, e))),
                    Fe(a.lines, r.label.call(n, t, e)),
                    Fe(a.after, Le(r.afterLabel.call(n, t, e))),
                    i.push(a);
                }),
                i
              );
            },
            getAfterBody: function () {
              return We(
                this._options.callbacks.afterBody.apply(this, arguments),
              );
            },
            getFooter: function () {
              var t = this,
                e = t._options.callbacks,
                n = e.beforeFooter.apply(t, arguments),
                r = e.footer.apply(t, arguments),
                i = e.afterFooter.apply(t, arguments),
                a = [];
              return (a = Fe(a, Le(n))), (a = Fe(a, Le(r))), (a = Fe(a, Le(i)));
            },
            update: function (t) {
              var e,
                n,
                r = this,
                i = r._options,
                a = r._model,
                o = (r._model = Ee(i)),
                s = r._active,
                l = r._data,
                u = { xAlign: a.xAlign, yAlign: a.yAlign },
                c = { x: a.x, y: a.y },
                h = { width: a.width, height: a.height },
                d = { x: a.caretX, y: a.caretY };
              if (s.length) {
                o.opacity = 1;
                var f = [],
                  p = [];
                d = Ie[i.position].call(r, s, r._eventPosition);
                var g = [];
                for (e = 0, n = s.length; e < n; ++e) g.push(Re(s[e]));
                i.filter &&
                  (g = g.filter(function (t) {
                    return i.filter(t, l);
                  })),
                  i.itemSort &&
                    (g = g.sort(function (t, e) {
                      return i.itemSort(t, e, l);
                    })),
                  j.each(g, function (t) {
                    f.push(i.callbacks.labelColor.call(r, t, r._chart)),
                      p.push(i.callbacks.labelTextColor.call(r, t, r._chart));
                  }),
                  (o.title = r.getTitle(g, l)),
                  (o.beforeBody = r.getBeforeBody(g, l)),
                  (o.body = r.getBody(g, l)),
                  (o.afterBody = r.getAfterBody(g, l)),
                  (o.footer = r.getFooter(g, l)),
                  (o.x = d.x),
                  (o.y = d.y),
                  (o.caretPadding = i.caretPadding),
                  (o.labelColors = f),
                  (o.labelTextColors = p),
                  (o.dataPoints = g),
                  (h = (function (t, e) {
                    var n = t._chart.ctx,
                      r = 2 * e.yPadding,
                      i = 0,
                      a = e.body,
                      o = a.reduce(function (t, e) {
                        return (
                          t + e.before.length + e.lines.length + e.after.length
                        );
                      }, 0);
                    o += e.beforeBody.length + e.afterBody.length;
                    var s = e.title.length,
                      l = e.footer.length,
                      u = e.titleFontSize,
                      c = e.bodyFontSize,
                      h = e.footerFontSize;
                    (r += s * u),
                      (r += s ? (s - 1) * e.titleSpacing : 0),
                      (r += s ? e.titleMarginBottom : 0),
                      (r += o * c),
                      (r += o ? (o - 1) * e.bodySpacing : 0),
                      (r += l ? e.footerMarginTop : 0),
                      (r += l * h),
                      (r += l ? (l - 1) * e.footerSpacing : 0);
                    var d = 0,
                      f = function (t) {
                        i = Math.max(i, n.measureText(t).width + d);
                      };
                    return (
                      (n.font = j.fontString(
                        u,
                        e._titleFontStyle,
                        e._titleFontFamily,
                      )),
                      j.each(e.title, f),
                      (n.font = j.fontString(
                        c,
                        e._bodyFontStyle,
                        e._bodyFontFamily,
                      )),
                      j.each(e.beforeBody.concat(e.afterBody), f),
                      (d = e.displayColors ? c + 2 : 0),
                      j.each(a, function (t) {
                        j.each(t.before, f),
                          j.each(t.lines, f),
                          j.each(t.after, f);
                      }),
                      (d = 0),
                      (n.font = j.fontString(
                        h,
                        e._footerFontStyle,
                        e._footerFontFamily,
                      )),
                      j.each(e.footer, f),
                      { width: (i += 2 * e.xPadding), height: r }
                    );
                  })(this, o)),
                  (c = (function (t, e, n, r) {
                    var i = t.x,
                      a = t.y,
                      o = t.caretSize,
                      s = t.caretPadding,
                      l = t.cornerRadius,
                      u = n.xAlign,
                      c = n.yAlign,
                      h = o + s,
                      d = l + s;
                    return (
                      "right" === u
                        ? (i -= e.width)
                        : "center" === u &&
                          ((i -= e.width / 2) + e.width > r.width &&
                            (i = r.width - e.width),
                          i < 0 && (i = 0)),
                      "top" === c
                        ? (a += h)
                        : (a -= "bottom" === c ? e.height + h : e.height / 2),
                      "center" === c
                        ? "left" === u
                          ? (i += h)
                          : "right" === u && (i -= h)
                        : "left" === u
                          ? (i -= d)
                          : "right" === u && (i += d),
                      { x: i, y: a }
                    );
                  })(
                    o,
                    h,
                    (u = (function (t, e) {
                      var n,
                        r,
                        i,
                        a,
                        o,
                        s = t._model,
                        l = t._chart,
                        u = t._chart.chartArea,
                        c = "center",
                        h = "center";
                      s.y < e.height
                        ? (h = "top")
                        : s.y > l.height - e.height && (h = "bottom");
                      var d = (u.left + u.right) / 2,
                        f = (u.top + u.bottom) / 2;
                      "center" === h
                        ? ((n = function (t) {
                            return t <= d;
                          }),
                          (r = function (t) {
                            return t > d;
                          }))
                        : ((n = function (t) {
                            return t <= e.width / 2;
                          }),
                          (r = function (t) {
                            return t >= l.width - e.width / 2;
                          })),
                        (i = function (t) {
                          return (
                            t + e.width + s.caretSize + s.caretPadding > l.width
                          );
                        }),
                        (a = function (t) {
                          return t - e.width - s.caretSize - s.caretPadding < 0;
                        }),
                        (o = function (t) {
                          return t <= f ? "top" : "bottom";
                        }),
                        n(s.x)
                          ? ((c = "left"),
                            i(s.x) && ((c = "center"), (h = o(s.y))))
                          : r(s.x) &&
                            ((c = "right"),
                            a(s.x) && ((c = "center"), (h = o(s.y))));
                      var p = t._options;
                      return {
                        xAlign: p.xAlign ? p.xAlign : c,
                        yAlign: p.yAlign ? p.yAlign : h,
                      };
                    })(this, h)),
                    r._chart,
                  ));
              } else o.opacity = 0;
              return (
                (o.xAlign = u.xAlign),
                (o.yAlign = u.yAlign),
                (o.x = c.x),
                (o.y = c.y),
                (o.width = h.width),
                (o.height = h.height),
                (o.caretX = d.x),
                (o.caretY = d.y),
                (r._model = o),
                t && i.custom && i.custom.call(r, o),
                r
              );
            },
            drawCaret: function (t, e) {
              var n = this._chart.ctx,
                r = this._view,
                i = this.getCaretPosition(t, e, r);
              n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3);
            },
            getCaretPosition: function (t, e, n) {
              var r,
                i,
                a,
                o,
                s,
                l,
                u = n.caretSize,
                c = n.cornerRadius,
                h = n.xAlign,
                d = n.yAlign,
                f = t.x,
                p = t.y,
                g = e.width,
                m = e.height;
              if ("center" === d)
                (s = p + m / 2),
                  "left" === h
                    ? ((i = (r = f) - u), (a = r), (o = s + u), (l = s - u))
                    : ((i = (r = f + g) + u),
                      (a = r),
                      (o = s - u),
                      (l = s + u));
              else if (
                ("left" === h
                  ? ((r = (i = f + c + u) - u), (a = i + u))
                  : "right" === h
                    ? ((r = (i = f + g - c - u) - u), (a = i + u))
                    : ((r = (i = n.caretX) - u), (a = i + u)),
                "top" === d)
              )
                (s = (o = p) - u), (l = o);
              else {
                (s = (o = p + m) + u), (l = o);
                var v = a;
                (a = r), (r = v);
              }
              return { x1: r, x2: i, x3: a, y1: o, y2: s, y3: l };
            },
            drawTitle: function (t, e, n) {
              var r,
                i,
                a,
                o = e.title,
                s = o.length;
              if (s) {
                var l = Ae(e.rtl, e.x, e.width);
                for (
                  t.x = Ne(e, e._titleAlign),
                    n.textAlign = l.textAlign(e._titleAlign),
                    n.textBaseline = "middle",
                    r = e.titleFontSize,
                    i = e.titleSpacing,
                    n.fillStyle = e.titleFontColor,
                    n.font = j.fontString(
                      r,
                      e._titleFontStyle,
                      e._titleFontFamily,
                    ),
                    a = 0;
                  a < s;
                  ++a
                )
                  n.fillText(o[a], l.x(t.x), t.y + r / 2),
                    (t.y += r + i),
                    a + 1 === s && (t.y += e.titleMarginBottom - i);
              }
            },
            drawBody: function (t, e, n) {
              var r,
                i,
                a,
                o,
                s,
                l,
                u,
                c,
                h = e.bodyFontSize,
                d = e.bodySpacing,
                f = e._bodyAlign,
                p = e.body,
                g = e.displayColors,
                m = 0,
                v = g ? Ne(e, "left") : 0,
                y = Ae(e.rtl, e.x, e.width),
                b = function (e) {
                  n.fillText(e, y.x(t.x + m), t.y + h / 2), (t.y += h + d);
                },
                x = y.textAlign(f);
              for (
                n.textAlign = f,
                  n.textBaseline = "middle",
                  n.font = j.fontString(h, e._bodyFontStyle, e._bodyFontFamily),
                  t.x = Ne(e, x),
                  n.fillStyle = e.bodyFontColor,
                  j.each(e.beforeBody, b),
                  m =
                    g && "right" !== x
                      ? "center" === f
                        ? h / 2 + 1
                        : h + 2
                      : 0,
                  s = 0,
                  u = p.length;
                s < u;
                ++s
              ) {
                for (
                  r = p[s],
                    i = e.labelTextColors[s],
                    a = e.labelColors[s],
                    n.fillStyle = i,
                    j.each(r.before, b),
                    l = 0,
                    c = (o = r.lines).length;
                  l < c;
                  ++l
                ) {
                  if (g) {
                    var _ = y.x(v);
                    (n.fillStyle = e.legendColorBackground),
                      n.fillRect(y.leftForLtr(_, h), t.y, h, h),
                      (n.lineWidth = 1),
                      (n.strokeStyle = a.borderColor),
                      n.strokeRect(y.leftForLtr(_, h), t.y, h, h),
                      (n.fillStyle = a.backgroundColor),
                      n.fillRect(
                        y.leftForLtr(y.xPlus(_, 1), h - 2),
                        t.y + 1,
                        h - 2,
                        h - 2,
                      ),
                      (n.fillStyle = i);
                  }
                  b(o[l]);
                }
                j.each(r.after, b);
              }
              (m = 0), j.each(e.afterBody, b), (t.y -= d);
            },
            drawFooter: function (t, e, n) {
              var r,
                i,
                a = e.footer,
                o = a.length;
              if (o) {
                var s = Ae(e.rtl, e.x, e.width);
                for (
                  t.x = Ne(e, e._footerAlign),
                    t.y += e.footerMarginTop,
                    n.textAlign = s.textAlign(e._footerAlign),
                    n.textBaseline = "middle",
                    r = e.footerFontSize,
                    n.fillStyle = e.footerFontColor,
                    n.font = j.fontString(
                      r,
                      e._footerFontStyle,
                      e._footerFontFamily,
                    ),
                    i = 0;
                  i < o;
                  ++i
                )
                  n.fillText(a[i], s.x(t.x), t.y + r / 2),
                    (t.y += r + e.footerSpacing);
              }
            },
            drawBackground: function (t, e, n, r) {
              (n.fillStyle = e.backgroundColor),
                (n.strokeStyle = e.borderColor),
                (n.lineWidth = e.borderWidth);
              var i = e.xAlign,
                a = e.yAlign,
                o = t.x,
                s = t.y,
                l = r.width,
                u = r.height,
                c = e.cornerRadius;
              n.beginPath(),
                n.moveTo(o + c, s),
                "top" === a && this.drawCaret(t, r),
                n.lineTo(o + l - c, s),
                n.quadraticCurveTo(o + l, s, o + l, s + c),
                "center" === a && "right" === i && this.drawCaret(t, r),
                n.lineTo(o + l, s + u - c),
                n.quadraticCurveTo(o + l, s + u, o + l - c, s + u),
                "bottom" === a && this.drawCaret(t, r),
                n.lineTo(o + c, s + u),
                n.quadraticCurveTo(o, s + u, o, s + u - c),
                "center" === a && "left" === i && this.drawCaret(t, r),
                n.lineTo(o, s + c),
                n.quadraticCurveTo(o, s, o + c, s),
                n.closePath(),
                n.fill(),
                e.borderWidth > 0 && n.stroke();
            },
            draw: function () {
              var t = this._chart.ctx,
                e = this._view;
              if (0 !== e.opacity) {
                var n = { width: e.width, height: e.height },
                  r = { x: e.x, y: e.y },
                  i = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
                  a =
                    e.title.length ||
                    e.beforeBody.length ||
                    e.body.length ||
                    e.afterBody.length ||
                    e.footer.length;
                this._options.enabled &&
                  a &&
                  (t.save(),
                  (t.globalAlpha = i),
                  this.drawBackground(r, e, t, n),
                  (r.y += e.yPadding),
                  j.rtl.overrideTextDirection(t, e.textDirection),
                  this.drawTitle(r, e, t),
                  this.drawBody(r, e, t),
                  this.drawFooter(r, e, t),
                  j.rtl.restoreTextDirection(t, e.textDirection),
                  t.restore());
              }
            },
            handleEvent: function (t) {
              var e,
                n = this,
                r = n._options;
              return (
                (n._lastActive = n._lastActive || []),
                "mouseout" === t.type
                  ? (n._active = [])
                  : ((n._active = n._chart.getElementsAtEventForMode(
                      t,
                      r.mode,
                      r,
                    )),
                    r.reverse && n._active.reverse()),
                (e = !j.arrayEquals(n._active, n._lastActive)) &&
                  ((n._lastActive = n._active),
                  (r.enabled || r.custom) &&
                    ((n._eventPosition = { x: t.x, y: t.y }),
                    n.update(!0),
                    n.pivot())),
                e
              );
            },
          }),
          je = Ie,
          Ye = ze;
        Ye.positioners = je;
        var Ve = j.valueOrDefault;
        function Be() {
          return j.merge({}, [].slice.call(arguments), {
            merger: function (t, e, n, r) {
              if ("xAxes" === t || "yAxes" === t) {
                var i,
                  a,
                  o,
                  s = n[t].length;
                for (e[t] || (e[t] = []), i = 0; i < s; ++i)
                  (o = n[t][i]),
                    (a = Ve(o.type, "xAxes" === t ? "category" : "linear")),
                    i >= e[t].length && e[t].push({}),
                    !e[t][i].type || (o.type && o.type !== e[t][i].type)
                      ? j.merge(e[t][i], [Te.getScaleDefaults(a), o])
                      : j.merge(e[t][i], o);
              } else j._merger(t, e, n, r);
            },
          });
        }
        function He() {
          return j.merge({}, [].slice.call(arguments), {
            merger: function (t, e, n, r) {
              var i = e[t] || {},
                a = n[t];
              "scales" === t
                ? (e[t] = Be(i, a))
                : "scale" === t
                  ? (e[t] = j.merge(i, [Te.getScaleDefaults(a.type), a]))
                  : j._merger(t, e, n, r);
            },
          });
        }
        function Ue(t) {
          var e = t.options;
          j.each(t.scales, function (e) {
            fe.removeBox(t, e);
          }),
            (e = He(R.global, R[t.config.type], e)),
            (t.options = t.config.options = e),
            t.ensureScalesHaveIDs(),
            t.buildOrUpdateScales(),
            (t.tooltip._options = e.tooltips),
            t.tooltip.initialize();
        }
        function Ge(t, e, n) {
          var r,
            i = function (t) {
              return t.id === r;
            };
          do {
            r = e + n++;
          } while (j.findIndex(t, i) >= 0);
          return r;
        }
        function qe(t) {
          return "top" === t || "bottom" === t;
        }
        function $e(t, e) {
          return function (n, r) {
            return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t];
          };
        }
        R._set("global", {
          elements: {},
          events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
          hover: {
            onHover: null,
            mode: "nearest",
            intersect: !0,
            animationDuration: 400,
          },
          onClick: null,
          maintainAspectRatio: !0,
          responsive: !0,
          responsiveAnimationDuration: 0,
        });
        var Ze = function (t, e) {
          return this.construct(t, e), this;
        };
        j.extend(Ze.prototype, {
          construct: function (t, e) {
            var n = this;
            e = (function (t) {
              var e = ((t = t || {}).data = t.data || {});
              return (
                (e.datasets = e.datasets || []),
                (e.labels = e.labels || []),
                (t.options = He(R.global, R[t.type], t.options || {})),
                t
              );
            })(e);
            var r = Ce.acquireContext(t, e),
              i = r && r.canvas,
              a = i && i.height,
              o = i && i.width;
            (n.id = j.uid()),
              (n.ctx = r),
              (n.canvas = i),
              (n.config = e),
              (n.width = o),
              (n.height = a),
              (n.aspectRatio = a ? o / a : null),
              (n.options = e.options),
              (n._bufferedRender = !1),
              (n._layers = []),
              (n.chart = n),
              (n.controller = n),
              (Ze.instances[n.id] = n),
              Object.defineProperty(n, "data", {
                get: function () {
                  return n.config.data;
                },
                set: function (t) {
                  n.config.data = t;
                },
              }),
              r && i
                ? (n.initialize(), n.update())
                : console.error(
                    "Failed to create chart: can't acquire context from the given item",
                  );
          },
          initialize: function () {
            var t = this;
            return (
              Pe.notify(t, "beforeInit"),
              j.retinaScale(t, t.options.devicePixelRatio),
              t.bindEvents(),
              t.options.responsive && t.resize(!0),
              t.initToolTip(),
              Pe.notify(t, "afterInit"),
              t
            );
          },
          clear: function () {
            return j.canvas.clear(this), this;
          },
          stop: function () {
            return K.cancelAnimation(this), this;
          },
          resize: function (t) {
            var e = this,
              n = e.options,
              r = e.canvas,
              i = (n.maintainAspectRatio && e.aspectRatio) || null,
              a = Math.max(0, Math.floor(j.getMaximumWidth(r))),
              o = Math.max(0, Math.floor(i ? a / i : j.getMaximumHeight(r)));
            if (
              (e.width !== a || e.height !== o) &&
              ((r.width = e.width = a),
              (r.height = e.height = o),
              (r.style.width = a + "px"),
              (r.style.height = o + "px"),
              j.retinaScale(e, n.devicePixelRatio),
              !t)
            ) {
              var s = { width: a, height: o };
              Pe.notify(e, "resize", [s]),
                n.onResize && n.onResize(e, s),
                e.stop(),
                e.update({ duration: n.responsiveAnimationDuration });
            }
          },
          ensureScalesHaveIDs: function () {
            var t = this.options,
              e = t.scales || {},
              n = t.scale;
            j.each(e.xAxes, function (t, n) {
              t.id || (t.id = Ge(e.xAxes, "x-axis-", n));
            }),
              j.each(e.yAxes, function (t, n) {
                t.id || (t.id = Ge(e.yAxes, "y-axis-", n));
              }),
              n && (n.id = n.id || "scale");
          },
          buildOrUpdateScales: function () {
            var t = this,
              e = t.options,
              n = t.scales || {},
              r = [],
              i = Object.keys(n).reduce(function (t, e) {
                return (t[e] = !1), t;
              }, {});
            e.scales &&
              (r = r.concat(
                (e.scales.xAxes || []).map(function (t) {
                  return { options: t, dtype: "category", dposition: "bottom" };
                }),
                (e.scales.yAxes || []).map(function (t) {
                  return { options: t, dtype: "linear", dposition: "left" };
                }),
              )),
              e.scale &&
                r.push({
                  options: e.scale,
                  dtype: "radialLinear",
                  isDefault: !0,
                  dposition: "chartArea",
                }),
              j.each(r, function (e) {
                var r = e.options,
                  a = r.id,
                  o = Ve(r.type, e.dtype);
                qe(r.position) !== qe(e.dposition) &&
                  (r.position = e.dposition),
                  (i[a] = !0);
                var s = null;
                if (a in n && n[a].type === o)
                  ((s = n[a]).options = r), (s.ctx = t.ctx), (s.chart = t);
                else {
                  var l = Te.getScaleConstructor(o);
                  if (!l) return;
                  (s = new l({
                    id: a,
                    type: o,
                    options: r,
                    ctx: t.ctx,
                    chart: t,
                  })),
                    (n[s.id] = s);
                }
                s.mergeTicksOptions(), e.isDefault && (t.scale = s);
              }),
              j.each(i, function (t, e) {
                t || delete n[e];
              }),
              (t.scales = n),
              Te.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function () {
            var t,
              e,
              n = this,
              r = [],
              i = n.data.datasets;
            for (t = 0, e = i.length; t < e; t++) {
              var a = i[t],
                o = n.getDatasetMeta(t),
                s = a.type || n.config.type;
              if (
                (o.type &&
                  o.type !== s &&
                  (n.destroyDatasetMeta(t), (o = n.getDatasetMeta(t))),
                (o.type = s),
                (o.order = a.order || 0),
                (o.index = t),
                o.controller)
              )
                o.controller.updateIndex(t), o.controller.linkScales();
              else {
                var l = Kt[o.type];
                if (void 0 === l)
                  throw new Error('"' + o.type + '" is not a chart type.');
                (o.controller = new l(n, t)), r.push(o.controller);
              }
            }
            return r;
          },
          resetElements: function () {
            var t = this;
            j.each(
              t.data.datasets,
              function (e, n) {
                t.getDatasetMeta(n).controller.reset();
              },
              t,
            );
          },
          reset: function () {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function (t) {
            var e,
              n,
              r = this;
            if (
              ((t && "object" === typeof t) ||
                (t = { duration: t, lazy: arguments[1] }),
              Ue(r),
              Pe._invalidate(r),
              !1 !== Pe.notify(r, "beforeUpdate"))
            ) {
              r.tooltip._data = r.data;
              var i = r.buildOrUpdateControllers();
              for (e = 0, n = r.data.datasets.length; e < n; e++)
                r.getDatasetMeta(e).controller.buildOrUpdateElements();
              r.updateLayout(),
                r.options.animation &&
                  r.options.animation.duration &&
                  j.each(i, function (t) {
                    t.reset();
                  }),
                r.updateDatasets(),
                r.tooltip.initialize(),
                (r.lastActive = []),
                Pe.notify(r, "afterUpdate"),
                r._layers.sort($e("z", "_idx")),
                r._bufferedRender
                  ? (r._bufferedRequest = {
                      duration: t.duration,
                      easing: t.easing,
                      lazy: t.lazy,
                    })
                  : r.render(t);
            }
          },
          updateLayout: function () {
            var t = this;
            !1 !== Pe.notify(t, "beforeLayout") &&
              (fe.update(this, this.width, this.height),
              (t._layers = []),
              j.each(
                t.boxes,
                function (e) {
                  e._configure && e._configure(),
                    t._layers.push.apply(t._layers, e._layers());
                },
                t,
              ),
              t._layers.forEach(function (t, e) {
                t._idx = e;
              }),
              Pe.notify(t, "afterScaleUpdate"),
              Pe.notify(t, "afterLayout"));
          },
          updateDatasets: function () {
            if (!1 !== Pe.notify(this, "beforeDatasetsUpdate")) {
              for (var t = 0, e = this.data.datasets.length; t < e; ++t)
                this.updateDataset(t);
              Pe.notify(this, "afterDatasetsUpdate");
            }
          },
          updateDataset: function (t) {
            var e = this.getDatasetMeta(t),
              n = { meta: e, index: t };
            !1 !== Pe.notify(this, "beforeDatasetUpdate", [n]) &&
              (e.controller._update(),
              Pe.notify(this, "afterDatasetUpdate", [n]));
          },
          render: function (t) {
            var e = this;
            (t && "object" === typeof t) ||
              (t = { duration: t, lazy: arguments[1] });
            var n = e.options.animation,
              r = Ve(t.duration, n && n.duration),
              i = t.lazy;
            if (!1 !== Pe.notify(e, "beforeRender")) {
              var a = function (t) {
                Pe.notify(e, "afterRender"),
                  j.callback(n && n.onComplete, [t], e);
              };
              if (n && r) {
                var o = new Z({
                  numSteps: r / 16.66,
                  easing: t.easing || n.easing,
                  render: function (t, e) {
                    var n = j.easing.effects[e.easing],
                      r = e.currentStep,
                      i = r / e.numSteps;
                    t.draw(n(i), i, r);
                  },
                  onAnimationProgress: n.onProgress,
                  onAnimationComplete: a,
                });
                K.addAnimation(e, o, r, i);
              } else e.draw(), a(new Z({ numSteps: 0, chart: e }));
              return e;
            }
          },
          draw: function (t) {
            var e,
              n,
              r = this;
            if (
              (r.clear(),
              j.isNullOrUndef(t) && (t = 1),
              r.transition(t),
              !(r.width <= 0 || r.height <= 0) &&
                !1 !== Pe.notify(r, "beforeDraw", [t]))
            ) {
              for (n = r._layers, e = 0; e < n.length && n[e].z <= 0; ++e)
                n[e].draw(r.chartArea);
              for (r.drawDatasets(t); e < n.length; ++e) n[e].draw(r.chartArea);
              r._drawTooltip(t), Pe.notify(r, "afterDraw", [t]);
            }
          },
          transition: function (t) {
            for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e)
              this.isDatasetVisible(e) &&
                this.getDatasetMeta(e).controller.transition(t);
            this.tooltip.transition(t);
          },
          _getSortedDatasetMetas: function (t) {
            var e,
              n,
              r = [];
            for (e = 0, n = (this.data.datasets || []).length; e < n; ++e)
              (t && !this.isDatasetVisible(e)) ||
                r.push(this.getDatasetMeta(e));
            return r.sort($e("order", "index")), r;
          },
          _getSortedVisibleDatasetMetas: function () {
            return this._getSortedDatasetMetas(!0);
          },
          drawDatasets: function (t) {
            var e, n;
            if (!1 !== Pe.notify(this, "beforeDatasetsDraw", [t])) {
              for (
                n = (e = this._getSortedVisibleDatasetMetas()).length - 1;
                n >= 0;
                --n
              )
                this.drawDataset(e[n], t);
              Pe.notify(this, "afterDatasetsDraw", [t]);
            }
          },
          drawDataset: function (t, e) {
            var n = { meta: t, index: t.index, easingValue: e };
            !1 !== Pe.notify(this, "beforeDatasetDraw", [n]) &&
              (t.controller.draw(e), Pe.notify(this, "afterDatasetDraw", [n]));
          },
          _drawTooltip: function (t) {
            var e = this.tooltip,
              n = { tooltip: e, easingValue: t };
            !1 !== Pe.notify(this, "beforeTooltipDraw", [n]) &&
              (e.draw(), Pe.notify(this, "afterTooltipDraw", [n]));
          },
          getElementAtEvent: function (t) {
            return re.modes.single(this, t);
          },
          getElementsAtEvent: function (t) {
            return re.modes.label(this, t, { intersect: !0 });
          },
          getElementsAtXAxis: function (t) {
            return re.modes["x-axis"](this, t, { intersect: !0 });
          },
          getElementsAtEventForMode: function (t, e, n) {
            var r = re.modes[e];
            return "function" === typeof r ? r(this, t, n) : [];
          },
          getDatasetAtEvent: function (t) {
            return re.modes.dataset(this, t, { intersect: !0 });
          },
          getDatasetMeta: function (t) {
            var e = this.data.datasets[t];
            e._meta || (e._meta = {});
            var n = e._meta[this.id];
            return (
              n ||
                (n = e._meta[this.id] =
                  {
                    type: null,
                    data: [],
                    dataset: null,
                    controller: null,
                    hidden: null,
                    xAxisID: null,
                    yAxisID: null,
                    order: e.order || 0,
                    index: t,
                  }),
              n
            );
          },
          getVisibleDatasetCount: function () {
            for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
              this.isDatasetVisible(e) && t++;
            return t;
          },
          isDatasetVisible: function (t) {
            var e = this.getDatasetMeta(t);
            return "boolean" === typeof e.hidden
              ? !e.hidden
              : !this.data.datasets[t].hidden;
          },
          generateLegend: function () {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function (t) {
            var e = this.id,
              n = this.data.datasets[t],
              r = n._meta && n._meta[e];
            r && (r.controller.destroy(), delete n._meta[e]);
          },
          destroy: function () {
            var t,
              e,
              n = this,
              r = n.canvas;
            for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t)
              n.destroyDatasetMeta(t);
            r &&
              (n.unbindEvents(),
              j.canvas.clear(n),
              Ce.releaseContext(n.ctx),
              (n.canvas = null),
              (n.ctx = null)),
              Pe.notify(n, "destroy"),
              delete Ze.instances[n.id];
          },
          toBase64Image: function () {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function () {
            var t = this;
            t.tooltip = new Ye(
              {
                _chart: t,
                _chartInstance: t,
                _data: t.data,
                _options: t.options.tooltips,
              },
              t,
            );
          },
          bindEvents: function () {
            var t = this,
              e = (t._listeners = {}),
              n = function () {
                t.eventHandler.apply(t, arguments);
              };
            j.each(t.options.events, function (r) {
              Ce.addEventListener(t, r, n), (e[r] = n);
            }),
              t.options.responsive &&
                ((n = function () {
                  t.resize();
                }),
                Ce.addEventListener(t, "resize", n),
                (e.resize = n));
          },
          unbindEvents: function () {
            var t = this,
              e = t._listeners;
            e &&
              (delete t._listeners,
              j.each(e, function (e, n) {
                Ce.removeEventListener(t, n, e);
              }));
          },
          updateHoverStyle: function (t, e, n) {
            var r,
              i,
              a,
              o = n ? "set" : "remove";
            for (i = 0, a = t.length; i < a; ++i)
              (r = t[i]) &&
                this.getDatasetMeta(r._datasetIndex).controller[
                  o + "HoverStyle"
                ](r);
            "dataset" === e &&
              this.getDatasetMeta(t[0]._datasetIndex).controller[
                "_" + o + "DatasetHoverStyle"
              ]();
          },
          eventHandler: function (t) {
            var e = this,
              n = e.tooltip;
            if (!1 !== Pe.notify(e, "beforeEvent", [t])) {
              (e._bufferedRender = !0), (e._bufferedRequest = null);
              var r = e.handleEvent(t);
              n && (r = n._start ? n.handleEvent(t) : r | n.handleEvent(t)),
                Pe.notify(e, "afterEvent", [t]);
              var i = e._bufferedRequest;
              return (
                i
                  ? e.render(i)
                  : r &&
                    !e.animating &&
                    (e.stop(),
                    e.render({
                      duration: e.options.hover.animationDuration,
                      lazy: !0,
                    })),
                (e._bufferedRender = !1),
                (e._bufferedRequest = null),
                e
              );
            }
          },
          handleEvent: function (t) {
            var e,
              n = this,
              r = n.options || {},
              i = r.hover;
            return (
              (n.lastActive = n.lastActive || []),
              "mouseout" === t.type
                ? (n.active = [])
                : (n.active = n.getElementsAtEventForMode(t, i.mode, i)),
              j.callback(r.onHover || r.hover.onHover, [t.native, n.active], n),
              ("mouseup" !== t.type && "click" !== t.type) ||
                (r.onClick && r.onClick.call(n, t.native, n.active)),
              n.lastActive.length &&
                n.updateHoverStyle(n.lastActive, i.mode, !1),
              n.active.length &&
                i.mode &&
                n.updateHoverStyle(n.active, i.mode, !0),
              (e = !j.arrayEquals(n.active, n.lastActive)),
              (n.lastActive = n.active),
              e
            );
          },
        }),
          (Ze.instances = {});
        var Ke = Ze;
        function Xe() {
          throw new Error(
            "This method is not implemented: either no adapter can be found or an incomplete integration was provided.",
          );
        }
        function Je(t) {
          this.options = t || {};
        }
        (Ze.Controller = Ze),
          (Ze.types = {}),
          (j.configMerge = He),
          (j.scaleMerge = Be),
          j.extend(Je.prototype, {
            formats: Xe,
            parse: Xe,
            format: Xe,
            add: Xe,
            diff: Xe,
            startOf: Xe,
            endOf: Xe,
            _create: function (t) {
              return t;
            },
          }),
          (Je.override = function (t) {
            j.extend(Je.prototype, t);
          });
        var Qe = { _date: Je },
          tn = {
            formatters: {
              values: function (t) {
                return j.isArray(t) ? t : "" + t;
              },
              linear: function (t, e, n) {
                var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
                Math.abs(r) > 1 &&
                  t !== Math.floor(t) &&
                  (r = t - Math.floor(t));
                var i = j.log10(Math.abs(r)),
                  a = "";
                if (0 !== t)
                  if (
                    Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4
                  ) {
                    var o = j.log10(Math.abs(t)),
                      s = Math.floor(o) - Math.floor(i);
                    (s = Math.max(Math.min(s, 20), 0)),
                      (a = t.toExponential(s));
                  } else {
                    var l = -1 * Math.floor(i);
                    (l = Math.max(Math.min(l, 20), 0)), (a = t.toFixed(l));
                  }
                else a = "0";
                return a;
              },
              logarithmic: function (t, e, n) {
                var r = t / Math.pow(10, Math.floor(j.log10(t)));
                return 0 === t
                  ? "0"
                  : 1 === r ||
                      2 === r ||
                      5 === r ||
                      0 === e ||
                      e === n.length - 1
                    ? t.toExponential()
                    : "";
              },
            },
          },
          en = j.isArray,
          nn = j.isNullOrUndef,
          rn = j.valueOrDefault,
          an = j.valueAtIndexOrDefault;
        function on(t, e, n) {
          var r,
            i = t.getTicks().length,
            a = Math.min(e, i - 1),
            o = t.getPixelForTick(a),
            s = t._startPixel,
            l = t._endPixel;
          if (
            !(
              n &&
              ((r =
                1 === i
                  ? Math.max(o - s, l - o)
                  : 0 === e
                    ? (t.getPixelForTick(1) - o) / 2
                    : (o - t.getPixelForTick(a - 1)) / 2),
              (o += a < e ? r : -r) < s - 1e-6 || o > l + 1e-6)
            )
          )
            return o;
        }
        function sn(t, e, n, r) {
          var i,
            a,
            o,
            s,
            l,
            u,
            c,
            h,
            d,
            f,
            p,
            g,
            m,
            v = n.length,
            y = [],
            b = [],
            x = [];
          for (i = 0; i < v; ++i) {
            if (
              ((s = n[i].label),
              (l = n[i].major ? e.major : e.minor),
              (t.font = u = l.string),
              (c = r[u] = r[u] || { data: {}, gc: [] }),
              (h = l.lineHeight),
              (d = f = 0),
              nn(s) || en(s))
            ) {
              if (en(s))
                for (a = 0, o = s.length; a < o; ++a)
                  (p = s[a]),
                    nn(p) ||
                      en(p) ||
                      ((d = j.measureText(t, c.data, c.gc, d, p)), (f += h));
            } else (d = j.measureText(t, c.data, c.gc, d, s)), (f = h);
            y.push(d), b.push(f), x.push(h / 2);
          }
          function _(t) {
            return { width: y[t] || 0, height: b[t] || 0, offset: x[t] || 0 };
          }
          return (
            (function (t, e) {
              j.each(t, function (t) {
                var n,
                  r = t.gc,
                  i = r.length / 2;
                if (i > e) {
                  for (n = 0; n < i; ++n) delete t.data[r[n]];
                  r.splice(0, i);
                }
              });
            })(r, v),
            (g = y.indexOf(Math.max.apply(null, y))),
            (m = b.indexOf(Math.max.apply(null, b))),
            { first: _(0), last: _(v - 1), widest: _(g), highest: _(m) }
          );
        }
        function ln(t) {
          return t.drawTicks ? t.tickMarkLength : 0;
        }
        function un(t) {
          var e, n;
          return t.display
            ? ((e = j.options._parseFont(t)),
              (n = j.options.toPadding(t.padding)),
              e.lineHeight + n.height)
            : 0;
        }
        function cn(t, e) {
          return j.extend(
            j.options._parseFont({
              fontFamily: rn(e.fontFamily, t.fontFamily),
              fontSize: rn(e.fontSize, t.fontSize),
              fontStyle: rn(e.fontStyle, t.fontStyle),
              lineHeight: rn(e.lineHeight, t.lineHeight),
            }),
            {
              color: j.options.resolve([
                e.fontColor,
                t.fontColor,
                R.global.defaultFontColor,
              ]),
            },
          );
        }
        function hn(t) {
          var e = cn(t, t.minor);
          return { minor: e, major: t.major.enabled ? cn(t, t.major) : e };
        }
        function dn(t) {
          var e,
            n,
            r,
            i = [];
          for (n = 0, r = t.length; n < r; ++n)
            "undefined" !== typeof (e = t[n])._index && i.push(e);
          return i;
        }
        function fn(t, e, n, r) {
          var i,
            a,
            o,
            s,
            l = rn(n, 0),
            u = Math.min(rn(r, t.length), t.length),
            c = 0;
          for (
            e = Math.ceil(e), r && (e = (i = r - n) / Math.floor(i / e)), s = l;
            s < 0;

          )
            c++, (s = Math.round(l + c * e));
          for (a = Math.max(l, 0); a < u; a++)
            (o = t[a]),
              a === s
                ? ((o._index = a), c++, (s = Math.round(l + c * e)))
                : delete o.label;
        }
        R._set("scale", {
          display: !0,
          position: "left",
          offset: !1,
          gridLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: !1,
            borderDash: [],
            borderDashOffset: 0,
          },
          scaleLabel: {
            display: !1,
            labelString: "",
            padding: { top: 4, bottom: 4 },
          },
          ticks: {
            beginAtZero: !1,
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            padding: 0,
            reverse: !1,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: tn.formatters.values,
            minor: {},
            major: {},
          },
        });
        var pn = q.extend({
          zeroLineIndex: 0,
          getPadding: function () {
            return {
              left: this.paddingLeft || 0,
              top: this.paddingTop || 0,
              right: this.paddingRight || 0,
              bottom: this.paddingBottom || 0,
            };
          },
          getTicks: function () {
            return this._ticks;
          },
          _getLabels: function () {
            var t = this.chart.data;
            return (
              this.options.labels ||
              (this.isHorizontal() ? t.xLabels : t.yLabels) ||
              t.labels ||
              []
            );
          },
          mergeTicksOptions: function () {},
          beforeUpdate: function () {
            j.callback(this.options.beforeUpdate, [this]);
          },
          update: function (t, e, n) {
            var r,
              i,
              a,
              o,
              s,
              l = this,
              u = l.options.ticks,
              c = u.sampleSize;
            if (
              (l.beforeUpdate(),
              (l.maxWidth = t),
              (l.maxHeight = e),
              (l.margins = j.extend(
                { left: 0, right: 0, top: 0, bottom: 0 },
                n,
              )),
              (l._ticks = null),
              (l.ticks = null),
              (l._labelSizes = null),
              (l._maxLabelLines = 0),
              (l.longestLabelWidth = 0),
              (l.longestTextCache = l.longestTextCache || {}),
              (l._gridLineItems = null),
              (l._labelItems = null),
              l.beforeSetDimensions(),
              l.setDimensions(),
              l.afterSetDimensions(),
              l.beforeDataLimits(),
              l.determineDataLimits(),
              l.afterDataLimits(),
              l.beforeBuildTicks(),
              (o = l.buildTicks() || []),
              (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
            )
              for (o = [], r = 0, i = l.ticks.length; r < i; ++r)
                o.push({ value: l.ticks[r], major: !1 });
            return (
              (l._ticks = o),
              (s = c < o.length),
              (a = l._convertTicksToLabels(
                s
                  ? (function (t, e) {
                      for (
                        var n = [], r = t.length / e, i = 0, a = t.length;
                        i < a;
                        i += r
                      )
                        n.push(t[Math.floor(i)]);
                      return n;
                    })(o, c)
                  : o,
              )),
              l._configure(),
              l.beforeCalculateTickRotation(),
              l.calculateTickRotation(),
              l.afterCalculateTickRotation(),
              l.beforeFit(),
              l.fit(),
              l.afterFit(),
              (l._ticksToDraw =
                u.display && (u.autoSkip || "auto" === u.source)
                  ? l._autoSkip(o)
                  : o),
              s && (a = l._convertTicksToLabels(l._ticksToDraw)),
              (l.ticks = a),
              l.afterUpdate(),
              l.minSize
            );
          },
          _configure: function () {
            var t,
              e,
              n = this,
              r = n.options.ticks.reverse;
            n.isHorizontal()
              ? ((t = n.left), (e = n.right))
              : ((t = n.top), (e = n.bottom), (r = !r)),
              (n._startPixel = t),
              (n._endPixel = e),
              (n._reversePixels = r),
              (n._length = e - t);
          },
          afterUpdate: function () {
            j.callback(this.options.afterUpdate, [this]);
          },
          beforeSetDimensions: function () {
            j.callback(this.options.beforeSetDimensions, [this]);
          },
          setDimensions: function () {
            var t = this;
            t.isHorizontal()
              ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
              : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
              (t.paddingLeft = 0),
              (t.paddingTop = 0),
              (t.paddingRight = 0),
              (t.paddingBottom = 0);
          },
          afterSetDimensions: function () {
            j.callback(this.options.afterSetDimensions, [this]);
          },
          beforeDataLimits: function () {
            j.callback(this.options.beforeDataLimits, [this]);
          },
          determineDataLimits: j.noop,
          afterDataLimits: function () {
            j.callback(this.options.afterDataLimits, [this]);
          },
          beforeBuildTicks: function () {
            j.callback(this.options.beforeBuildTicks, [this]);
          },
          buildTicks: j.noop,
          afterBuildTicks: function (t) {
            var e = this;
            return en(t) && t.length
              ? j.callback(e.options.afterBuildTicks, [e, t])
              : ((e.ticks =
                  j.callback(e.options.afterBuildTicks, [e, e.ticks]) ||
                  e.ticks),
                t);
          },
          beforeTickToLabelConversion: function () {
            j.callback(this.options.beforeTickToLabelConversion, [this]);
          },
          convertTicksToLabels: function () {
            var t = this.options.ticks;
            this.ticks = this.ticks.map(t.userCallback || t.callback, this);
          },
          afterTickToLabelConversion: function () {
            j.callback(this.options.afterTickToLabelConversion, [this]);
          },
          beforeCalculateTickRotation: function () {
            j.callback(this.options.beforeCalculateTickRotation, [this]);
          },
          calculateTickRotation: function () {
            var t,
              e,
              n,
              r,
              i,
              a,
              o,
              s = this,
              l = s.options,
              u = l.ticks,
              c = s.getTicks().length,
              h = u.minRotation || 0,
              d = u.maxRotation,
              f = h;
            !s._isVisible() ||
            !u.display ||
            h >= d ||
            c <= 1 ||
            !s.isHorizontal()
              ? (s.labelRotation = h)
              : ((e = (t = s._getLabelSizes()).widest.width),
                (n = t.highest.height - t.highest.offset),
                (r = Math.min(s.maxWidth, s.chart.width - e)),
                e + 6 > (i = l.offset ? s.maxWidth / c : r / (c - 1)) &&
                  ((i = r / (c - (l.offset ? 0.5 : 1))),
                  (a =
                    s.maxHeight -
                    ln(l.gridLines) -
                    u.padding -
                    un(l.scaleLabel)),
                  (o = Math.sqrt(e * e + n * n)),
                  (f = j.toDegrees(
                    Math.min(
                      Math.asin(Math.min((t.highest.height + 6) / i, 1)),
                      Math.asin(Math.min(a / o, 1)) - Math.asin(n / o),
                    ),
                  )),
                  (f = Math.max(h, Math.min(d, f)))),
                (s.labelRotation = f));
          },
          afterCalculateTickRotation: function () {
            j.callback(this.options.afterCalculateTickRotation, [this]);
          },
          beforeFit: function () {
            j.callback(this.options.beforeFit, [this]);
          },
          fit: function () {
            var t = this,
              e = (t.minSize = { width: 0, height: 0 }),
              n = t.chart,
              r = t.options,
              i = r.ticks,
              a = r.scaleLabel,
              o = r.gridLines,
              s = t._isVisible(),
              l = "bottom" === r.position,
              u = t.isHorizontal();
            if (
              (u ? (e.width = t.maxWidth) : s && (e.width = ln(o) + un(a)),
              u ? s && (e.height = ln(o) + un(a)) : (e.height = t.maxHeight),
              i.display && s)
            ) {
              var c = hn(i),
                h = t._getLabelSizes(),
                d = h.first,
                f = h.last,
                p = h.widest,
                g = h.highest,
                m = 0.4 * c.minor.lineHeight,
                v = i.padding;
              if (u) {
                var y = 0 !== t.labelRotation,
                  b = j.toRadians(t.labelRotation),
                  x = Math.cos(b),
                  _ = Math.sin(b),
                  w =
                    _ * p.width +
                    x * (g.height - (y ? g.offset : 0)) +
                    (y ? 0 : m);
                e.height = Math.min(t.maxHeight, e.height + w + v);
                var k,
                  M,
                  S = t.getPixelForTick(0) - t.left,
                  D = t.right - t.getPixelForTick(t.getTicks().length - 1);
                y
                  ? ((k = l
                      ? x * d.width + _ * d.offset
                      : _ * (d.height - d.offset)),
                    (M = l
                      ? _ * (f.height - f.offset)
                      : x * f.width + _ * f.offset))
                  : ((k = d.width / 2), (M = f.width / 2)),
                  (t.paddingLeft =
                    Math.max(((k - S) * t.width) / (t.width - S), 0) + 3),
                  (t.paddingRight =
                    Math.max(((M - D) * t.width) / (t.width - D), 0) + 3);
              } else {
                var C = i.mirror ? 0 : p.width + v + m;
                (e.width = Math.min(t.maxWidth, e.width + C)),
                  (t.paddingTop = d.height / 2),
                  (t.paddingBottom = f.height / 2);
              }
            }
            t.handleMargins(),
              u
                ? ((t.width = t._length =
                    n.width - t.margins.left - t.margins.right),
                  (t.height = e.height))
                : ((t.width = e.width),
                  (t.height = t._length =
                    n.height - t.margins.top - t.margins.bottom));
          },
          handleMargins: function () {
            var t = this;
            t.margins &&
              ((t.margins.left = Math.max(t.paddingLeft, t.margins.left)),
              (t.margins.top = Math.max(t.paddingTop, t.margins.top)),
              (t.margins.right = Math.max(t.paddingRight, t.margins.right)),
              (t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom)));
          },
          afterFit: function () {
            j.callback(this.options.afterFit, [this]);
          },
          isHorizontal: function () {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
          },
          isFullWidth: function () {
            return this.options.fullWidth;
          },
          getRightValue: function (t) {
            if (nn(t)) return NaN;
            if (("number" === typeof t || t instanceof Number) && !isFinite(t))
              return NaN;
            if (t)
              if (this.isHorizontal()) {
                if (void 0 !== t.x) return this.getRightValue(t.x);
              } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t;
          },
          _convertTicksToLabels: function (t) {
            var e,
              n,
              r,
              i = this;
            for (
              i.ticks = t.map(function (t) {
                return t.value;
              }),
                i.beforeTickToLabelConversion(),
                e = i.convertTicksToLabels(t) || i.ticks,
                i.afterTickToLabelConversion(),
                n = 0,
                r = t.length;
              n < r;
              ++n
            )
              t[n].label = e[n];
            return e;
          },
          _getLabelSizes: function () {
            var t = this,
              e = t._labelSizes;
            return (
              e ||
                ((t._labelSizes = e =
                  sn(
                    t.ctx,
                    hn(t.options.ticks),
                    t.getTicks(),
                    t.longestTextCache,
                  )),
                (t.longestLabelWidth = e.widest.width)),
              e
            );
          },
          _parseValue: function (t) {
            var e, n, r, i;
            return (
              en(t)
                ? ((e = +this.getRightValue(t[0])),
                  (n = +this.getRightValue(t[1])),
                  (r = Math.min(e, n)),
                  (i = Math.max(e, n)))
                : ((e = void 0),
                  (n = t = +this.getRightValue(t)),
                  (r = t),
                  (i = t)),
              { min: r, max: i, start: e, end: n }
            );
          },
          _getScaleLabel: function (t) {
            var e = this._parseValue(t);
            return void 0 !== e.start
              ? "[" + e.start + ", " + e.end + "]"
              : +this.getRightValue(t);
          },
          getLabelForIndex: j.noop,
          getPixelForValue: j.noop,
          getValueForPixel: j.noop,
          getPixelForTick: function (t) {
            var e = this.options.offset,
              n = this._ticks.length,
              r = 1 / Math.max(n - (e ? 0 : 1), 1);
            return t < 0 || t > n - 1
              ? null
              : this.getPixelForDecimal(t * r + (e ? r / 2 : 0));
          },
          getPixelForDecimal: function (t) {
            return (
              this._reversePixels && (t = 1 - t),
              this._startPixel + t * this._length
            );
          },
          getDecimalForPixel: function (t) {
            var e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e;
          },
          getBasePixel: function () {
            return this.getPixelForValue(this.getBaseValue());
          },
          getBaseValue: function () {
            var t = this.min,
              e = this.max;
            return this.beginAtZero
              ? 0
              : t < 0 && e < 0
                ? e
                : t > 0 && e > 0
                  ? t
                  : 0;
          },
          _autoSkip: function (t) {
            var e,
              n,
              r,
              i,
              a = this.options.ticks,
              o = this._length,
              s = a.maxTicksLimit || o / this._tickSize() + 1,
              l = a.major.enabled
                ? (function (t) {
                    var e,
                      n,
                      r = [];
                    for (e = 0, n = t.length; e < n; e++)
                      t[e].major && r.push(e);
                    return r;
                  })(t)
                : [],
              u = l.length,
              c = l[0],
              h = l[u - 1];
            if (u > s)
              return (
                (function (t, e, n) {
                  var r,
                    i,
                    a = 0,
                    o = e[0];
                  for (n = Math.ceil(n), r = 0; r < t.length; r++)
                    (i = t[r]),
                      r === o
                        ? ((i._index = r), (o = e[++a * n]))
                        : delete i.label;
                })(t, l, u / s),
                dn(t)
              );
            if (
              ((r = (function (t, e, n, r) {
                var i,
                  a,
                  o,
                  s,
                  l = (function (t) {
                    var e,
                      n,
                      r = t.length;
                    if (r < 2) return !1;
                    for (n = t[0], e = 1; e < r; ++e)
                      if (t[e] - t[e - 1] !== n) return !1;
                    return n;
                  })(t),
                  u = (e.length - 1) / r;
                if (!l) return Math.max(u, 1);
                for (
                  o = 0, s = (i = j.math._factorize(l)).length - 1;
                  o < s;
                  o++
                )
                  if ((a = i[o]) > u) return a;
                return Math.max(u, 1);
              })(l, t, 0, s)),
              u > 0)
            ) {
              for (e = 0, n = u - 1; e < n; e++) fn(t, r, l[e], l[e + 1]);
              return (
                (i = u > 1 ? (h - c) / (u - 1) : null),
                fn(t, r, j.isNullOrUndef(i) ? 0 : c - i, c),
                fn(t, r, h, j.isNullOrUndef(i) ? t.length : h + i),
                dn(t)
              );
            }
            return fn(t, r), dn(t);
          },
          _tickSize: function () {
            var t = this.options.ticks,
              e = j.toRadians(this.labelRotation),
              n = Math.abs(Math.cos(e)),
              r = Math.abs(Math.sin(e)),
              i = this._getLabelSizes(),
              a = t.autoSkipPadding || 0,
              o = i ? i.widest.width + a : 0,
              s = i ? i.highest.height + a : 0;
            return this.isHorizontal()
              ? s * n > o * r
                ? o / n
                : s / r
              : s * r < o * n
                ? s / n
                : o / r;
          },
          _isVisible: function () {
            var t,
              e,
              n,
              r = this.chart,
              i = this.options.display;
            if ("auto" !== i) return !!i;
            for (t = 0, e = r.data.datasets.length; t < e; ++t)
              if (
                r.isDatasetVisible(t) &&
                ((n = r.getDatasetMeta(t)).xAxisID === this.id ||
                  n.yAxisID === this.id)
              )
                return !0;
            return !1;
          },
          _computeGridLineItems: function (t) {
            var e,
              n,
              r,
              i,
              a,
              o,
              s,
              l,
              u,
              c,
              h,
              d,
              f,
              p,
              g,
              m,
              v,
              y = this,
              b = y.chart,
              x = y.options,
              _ = x.gridLines,
              w = x.position,
              k = _.offsetGridLines,
              M = y.isHorizontal(),
              S = y._ticksToDraw,
              D = S.length + (k ? 1 : 0),
              C = ln(_),
              P = [],
              T = _.drawBorder ? an(_.lineWidth, 0, 0) : 0,
              O = T / 2,
              A = j._alignPixel,
              I = function (t) {
                return A(b, t, T);
              };
            for (
              "top" === w
                ? ((e = I(y.bottom)),
                  (s = y.bottom - C),
                  (u = e - O),
                  (h = I(t.top) + O),
                  (f = t.bottom))
                : "bottom" === w
                  ? ((e = I(y.top)),
                    (h = t.top),
                    (f = I(t.bottom) - O),
                    (s = e + O),
                    (u = y.top + C))
                  : "left" === w
                    ? ((e = I(y.right)),
                      (o = y.right - C),
                      (l = e - O),
                      (c = I(t.left) + O),
                      (d = t.right))
                    : ((e = I(y.left)),
                      (c = t.left),
                      (d = I(t.right) - O),
                      (o = e + O),
                      (l = y.left + C)),
                n = 0;
              n < D;
              ++n
            )
              (r = S[n] || {}),
                (nn(r.label) && n < S.length) ||
                  (n === y.zeroLineIndex && x.offset === k
                    ? ((p = _.zeroLineWidth),
                      (g = _.zeroLineColor),
                      (m = _.zeroLineBorderDash || []),
                      (v = _.zeroLineBorderDashOffset || 0))
                    : ((p = an(_.lineWidth, n, 1)),
                      (g = an(_.color, n, "rgba(0,0,0,0.1)")),
                      (m = _.borderDash || []),
                      (v = _.borderDashOffset || 0)),
                  void 0 !== (i = on(y, r._index || n, k)) &&
                    ((a = A(b, i, p)),
                    M ? (o = l = c = d = a) : (s = u = h = f = a),
                    P.push({
                      tx1: o,
                      ty1: s,
                      tx2: l,
                      ty2: u,
                      x1: c,
                      y1: h,
                      x2: d,
                      y2: f,
                      width: p,
                      color: g,
                      borderDash: m,
                      borderDashOffset: v,
                    })));
            return (P.ticksLength = D), (P.borderValue = e), P;
          },
          _computeLabelItems: function () {
            var t,
              e,
              n,
              r,
              i,
              a,
              o,
              s,
              l,
              u,
              c,
              h,
              d = this,
              f = d.options,
              p = f.ticks,
              g = f.position,
              m = p.mirror,
              v = d.isHorizontal(),
              y = d._ticksToDraw,
              b = hn(p),
              x = p.padding,
              _ = ln(f.gridLines),
              w = -j.toRadians(d.labelRotation),
              k = [];
            for (
              "top" === g
                ? ((a = d.bottom - _ - x), (o = w ? "left" : "center"))
                : "bottom" === g
                  ? ((a = d.top + _ + x), (o = w ? "right" : "center"))
                  : "left" === g
                    ? ((i = d.right - (m ? 0 : _) - x),
                      (o = m ? "left" : "right"))
                    : ((i = d.left + (m ? 0 : _) + x),
                      (o = m ? "right" : "left")),
                t = 0,
                e = y.length;
              t < e;
              ++t
            )
              (r = (n = y[t]).label),
                nn(r) ||
                  ((s = d.getPixelForTick(n._index || t) + p.labelOffset),
                  (u = (l = n.major ? b.major : b.minor).lineHeight),
                  (c = en(r) ? r.length : 1),
                  v
                    ? ((i = s),
                      (h =
                        "top" === g
                          ? ((w ? 1 : 0.5) - c) * u
                          : (w ? 0 : 0.5) * u))
                    : ((a = s), (h = ((1 - c) * u) / 2)),
                  k.push({
                    x: i,
                    y: a,
                    rotation: w,
                    label: r,
                    font: l,
                    textOffset: h,
                    textAlign: o,
                  }));
            return k;
          },
          _drawGrid: function (t) {
            var e = this,
              n = e.options.gridLines;
            if (n.display) {
              var r,
                i,
                a,
                o,
                s,
                l = e.ctx,
                u = e.chart,
                c = j._alignPixel,
                h = n.drawBorder ? an(n.lineWidth, 0, 0) : 0,
                d =
                  e._gridLineItems ||
                  (e._gridLineItems = e._computeGridLineItems(t));
              for (a = 0, o = d.length; a < o; ++a)
                (r = (s = d[a]).width),
                  (i = s.color),
                  r &&
                    i &&
                    (l.save(),
                    (l.lineWidth = r),
                    (l.strokeStyle = i),
                    l.setLineDash &&
                      (l.setLineDash(s.borderDash),
                      (l.lineDashOffset = s.borderDashOffset)),
                    l.beginPath(),
                    n.drawTicks &&
                      (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)),
                    n.drawOnChartArea &&
                      (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)),
                    l.stroke(),
                    l.restore());
              if (h) {
                var f,
                  p,
                  g,
                  m,
                  v = h,
                  y = an(n.lineWidth, d.ticksLength - 1, 1),
                  b = d.borderValue;
                e.isHorizontal()
                  ? ((f = c(u, e.left, v) - v / 2),
                    (p = c(u, e.right, y) + y / 2),
                    (g = m = b))
                  : ((g = c(u, e.top, v) - v / 2),
                    (m = c(u, e.bottom, y) + y / 2),
                    (f = p = b)),
                  (l.lineWidth = h),
                  (l.strokeStyle = an(n.color, 0)),
                  l.beginPath(),
                  l.moveTo(f, g),
                  l.lineTo(p, m),
                  l.stroke();
              }
            }
          },
          _drawLabels: function () {
            var t = this;
            if (t.options.ticks.display) {
              var e,
                n,
                r,
                i,
                a,
                o,
                s,
                l,
                u = t.ctx,
                c = t._labelItems || (t._labelItems = t._computeLabelItems());
              for (e = 0, r = c.length; e < r; ++e) {
                if (
                  ((o = (a = c[e]).font),
                  u.save(),
                  u.translate(a.x, a.y),
                  u.rotate(a.rotation),
                  (u.font = o.string),
                  (u.fillStyle = o.color),
                  (u.textBaseline = "middle"),
                  (u.textAlign = a.textAlign),
                  (s = a.label),
                  (l = a.textOffset),
                  en(s))
                )
                  for (n = 0, i = s.length; n < i; ++n)
                    u.fillText("" + s[n], 0, l), (l += o.lineHeight);
                else u.fillText(s, 0, l);
                u.restore();
              }
            }
          },
          _drawTitle: function () {
            var t = this,
              e = t.ctx,
              n = t.options,
              r = n.scaleLabel;
            if (r.display) {
              var i,
                a,
                o = rn(r.fontColor, R.global.defaultFontColor),
                s = j.options._parseFont(r),
                l = j.options.toPadding(r.padding),
                u = s.lineHeight / 2,
                c = n.position,
                h = 0;
              if (t.isHorizontal())
                (i = t.left + t.width / 2),
                  (a =
                    "bottom" === c
                      ? t.bottom - u - l.bottom
                      : t.top + u + l.top);
              else {
                var d = "left" === c;
                (i = d ? t.left + u + l.top : t.right - u - l.top),
                  (a = t.top + t.height / 2),
                  (h = d ? -0.5 * Math.PI : 0.5 * Math.PI);
              }
              e.save(),
                e.translate(i, a),
                e.rotate(h),
                (e.textAlign = "center"),
                (e.textBaseline = "middle"),
                (e.fillStyle = o),
                (e.font = s.string),
                e.fillText(r.labelString, 0, 0),
                e.restore();
            }
          },
          draw: function (t) {
            this._isVisible() &&
              (this._drawGrid(t), this._drawTitle(), this._drawLabels());
          },
          _layers: function () {
            var t = this,
              e = t.options,
              n = (e.ticks && e.ticks.z) || 0,
              r = (e.gridLines && e.gridLines.z) || 0;
            return t._isVisible() && n !== r && t.draw === t._draw
              ? [
                  {
                    z: r,
                    draw: function () {
                      t._drawGrid.apply(t, arguments),
                        t._drawTitle.apply(t, arguments);
                    },
                  },
                  {
                    z: n,
                    draw: function () {
                      t._drawLabels.apply(t, arguments);
                    },
                  },
                ]
              : [
                  {
                    z: n,
                    draw: function () {
                      t.draw.apply(t, arguments);
                    },
                  },
                ];
          },
          _getMatchingVisibleMetas: function (t) {
            var e = this,
              n = e.isHorizontal();
            return e.chart._getSortedVisibleDatasetMetas().filter(function (r) {
              return (
                (!t || r.type === t) &&
                (n ? r.xAxisID === e.id : r.yAxisID === e.id)
              );
            });
          },
        });
        pn.prototype._draw = pn.prototype.draw;
        var gn = pn,
          mn = j.isNullOrUndef,
          vn = gn.extend({
            determineDataLimits: function () {
              var t,
                e = this,
                n = e._getLabels(),
                r = e.options.ticks,
                i = r.min,
                a = r.max,
                o = 0,
                s = n.length - 1;
              void 0 !== i && (t = n.indexOf(i)) >= 0 && (o = t),
                void 0 !== a && (t = n.indexOf(a)) >= 0 && (s = t),
                (e.minIndex = o),
                (e.maxIndex = s),
                (e.min = n[o]),
                (e.max = n[s]);
            },
            buildTicks: function () {
              var t = this._getLabels(),
                e = this.minIndex,
                n = this.maxIndex;
              this.ticks =
                0 === e && n === t.length - 1 ? t : t.slice(e, n + 1);
            },
            getLabelForIndex: function (t, e) {
              var n = this.chart;
              return n.getDatasetMeta(e).controller._getValueScaleId() ===
                this.id
                ? this.getRightValue(n.data.datasets[e].data[t])
                : this._getLabels()[t];
            },
            _configure: function () {
              var t = this,
                e = t.options.offset,
                n = t.ticks;
              gn.prototype._configure.call(t),
                t.isHorizontal() || (t._reversePixels = !t._reversePixels),
                n &&
                  ((t._startValue = t.minIndex - (e ? 0.5 : 0)),
                  (t._valueRange = Math.max(n.length - (e ? 0 : 1), 1)));
            },
            getPixelForValue: function (t, e, n) {
              var r,
                i,
                a,
                o = this;
              return (
                mn(e) || mn(n) || (t = o.chart.data.datasets[n].data[e]),
                mn(t) || (r = o.isHorizontal() ? t.x : t.y),
                (void 0 !== r || (void 0 !== t && isNaN(e))) &&
                  ((i = o._getLabels()),
                  (t = j.valueOrDefault(r, t)),
                  (e = -1 !== (a = i.indexOf(t)) ? a : e),
                  isNaN(e) && (e = t)),
                o.getPixelForDecimal((e - o._startValue) / o._valueRange)
              );
            },
            getPixelForTick: function (t) {
              var e = this.ticks;
              return t < 0 || t > e.length - 1
                ? null
                : this.getPixelForValue(e[t], t + this.minIndex);
            },
            getValueForPixel: function (t) {
              var e = Math.round(
                this._startValue +
                  this.getDecimalForPixel(t) * this._valueRange,
              );
              return Math.min(Math.max(e, 0), this.ticks.length - 1);
            },
            getBasePixel: function () {
              return this.bottom;
            },
          }),
          yn = { position: "bottom" };
        vn._defaults = yn;
        var bn = j.noop,
          xn = j.isNullOrUndef,
          _n = gn.extend({
            getRightValue: function (t) {
              return "string" === typeof t
                ? +t
                : gn.prototype.getRightValue.call(this, t);
            },
            handleTickRangeOptions: function () {
              var t = this,
                e = t.options.ticks;
              if (e.beginAtZero) {
                var n = j.sign(t.min),
                  r = j.sign(t.max);
                n < 0 && r < 0 ? (t.max = 0) : n > 0 && r > 0 && (t.min = 0);
              }
              var i = void 0 !== e.min || void 0 !== e.suggestedMin,
                a = void 0 !== e.max || void 0 !== e.suggestedMax;
              void 0 !== e.min
                ? (t.min = e.min)
                : void 0 !== e.suggestedMin &&
                  (null === t.min
                    ? (t.min = e.suggestedMin)
                    : (t.min = Math.min(t.min, e.suggestedMin))),
                void 0 !== e.max
                  ? (t.max = e.max)
                  : void 0 !== e.suggestedMax &&
                    (null === t.max
                      ? (t.max = e.suggestedMax)
                      : (t.max = Math.max(t.max, e.suggestedMax))),
                i !== a &&
                  t.min >= t.max &&
                  (i ? (t.max = t.min + 1) : (t.min = t.max - 1)),
                t.min === t.max && (t.max++, e.beginAtZero || t.min--);
            },
            getTickLimit: function () {
              var t,
                e = this.options.ticks,
                n = e.stepSize,
                r = e.maxTicksLimit;
              return (
                n
                  ? (t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1)
                  : ((t = this._computeTickLimit()), (r = r || 11)),
                r && (t = Math.min(r, t)),
                t
              );
            },
            _computeTickLimit: function () {
              return Number.POSITIVE_INFINITY;
            },
            handleDirectionalChanges: bn,
            buildTicks: function () {
              var t = this,
                e = t.options.ticks,
                n = t.getTickLimit(),
                r = {
                  maxTicks: (n = Math.max(2, n)),
                  min: e.min,
                  max: e.max,
                  precision: e.precision,
                  stepSize: j.valueOrDefault(e.fixedStepSize, e.stepSize),
                },
                i = (t.ticks = (function (t, e) {
                  var n,
                    r,
                    i,
                    a,
                    o = [],
                    s = t.stepSize,
                    l = s || 1,
                    u = t.maxTicks - 1,
                    c = t.min,
                    h = t.max,
                    d = t.precision,
                    f = e.min,
                    p = e.max,
                    g = j.niceNum((p - f) / u / l) * l;
                  if (g < 1e-14 && xn(c) && xn(h)) return [f, p];
                  (a = Math.ceil(p / g) - Math.floor(f / g)) > u &&
                    (g = j.niceNum((a * g) / u / l) * l),
                    s || xn(d)
                      ? (n = Math.pow(10, j._decimalPlaces(g)))
                      : ((n = Math.pow(10, d)), (g = Math.ceil(g * n) / n)),
                    (r = Math.floor(f / g) * g),
                    (i = Math.ceil(p / g) * g),
                    s &&
                      (!xn(c) && j.almostWhole(c / g, g / 1e3) && (r = c),
                      !xn(h) && j.almostWhole(h / g, g / 1e3) && (i = h)),
                    (a = (i - r) / g),
                    (a = j.almostEquals(a, Math.round(a), g / 1e3)
                      ? Math.round(a)
                      : Math.ceil(a)),
                    (r = Math.round(r * n) / n),
                    (i = Math.round(i * n) / n),
                    o.push(xn(c) ? r : c);
                  for (var m = 1; m < a; ++m)
                    o.push(Math.round((r + m * g) * n) / n);
                  return o.push(xn(h) ? i : h), o;
                })(r, t));
              t.handleDirectionalChanges(),
                (t.max = j.max(i)),
                (t.min = j.min(i)),
                e.reverse
                  ? (i.reverse(), (t.start = t.max), (t.end = t.min))
                  : ((t.start = t.min), (t.end = t.max));
            },
            convertTicksToLabels: function () {
              var t = this;
              (t.ticksAsNumbers = t.ticks.slice()),
                (t.zeroLineIndex = t.ticks.indexOf(0)),
                gn.prototype.convertTicksToLabels.call(t);
            },
            _configure: function () {
              var t,
                e = this,
                n = e.getTicks(),
                r = e.min,
                i = e.max;
              gn.prototype._configure.call(e),
                e.options.offset &&
                  n.length &&
                  ((r -= t = (i - r) / Math.max(n.length - 1, 1) / 2),
                  (i += t)),
                (e._startValue = r),
                (e._endValue = i),
                (e._valueRange = i - r);
            },
          }),
          wn = { position: "left", ticks: { callback: tn.formatters.linear } };
        function kn(t, e, n, r) {
          var i,
            a,
            o = t.options,
            s = (function (t, e, n) {
              var r = [
                n.type,
                void 0 === e && void 0 === n.stack ? n.index : "",
                n.stack,
              ].join(".");
              return void 0 === t[r] && (t[r] = { pos: [], neg: [] }), t[r];
            })(e, o.stacked, n),
            l = s.pos,
            u = s.neg,
            c = r.length;
          for (i = 0; i < c; ++i)
            (a = t._parseValue(r[i])),
              isNaN(a.min) ||
                isNaN(a.max) ||
                n.data[i].hidden ||
                ((l[i] = l[i] || 0),
                (u[i] = u[i] || 0),
                o.relativePoints
                  ? (l[i] = 100)
                  : a.min < 0 || a.max < 0
                    ? (u[i] += a.min)
                    : (l[i] += a.max));
        }
        function Mn(t, e, n) {
          var r,
            i,
            a = n.length;
          for (r = 0; r < a; ++r)
            (i = t._parseValue(n[r])),
              isNaN(i.min) ||
                isNaN(i.max) ||
                e.data[r].hidden ||
                ((t.min = Math.min(t.min, i.min)),
                (t.max = Math.max(t.max, i.max)));
        }
        var Sn = _n.extend({
            determineDataLimits: function () {
              var t,
                e,
                n,
                r,
                i = this,
                a = i.options,
                o = i.chart.data.datasets,
                s = i._getMatchingVisibleMetas(),
                l = a.stacked,
                u = {},
                c = s.length;
              if (
                ((i.min = Number.POSITIVE_INFINITY),
                (i.max = Number.NEGATIVE_INFINITY),
                void 0 === l)
              )
                for (t = 0; !l && t < c; ++t) l = void 0 !== (e = s[t]).stack;
              for (t = 0; t < c; ++t)
                (n = o[(e = s[t]).index].data),
                  l ? kn(i, u, e, n) : Mn(i, e, n);
              j.each(u, function (t) {
                (r = t.pos.concat(t.neg)),
                  (i.min = Math.min(i.min, j.min(r))),
                  (i.max = Math.max(i.max, j.max(r)));
              }),
                (i.min = j.isFinite(i.min) && !isNaN(i.min) ? i.min : 0),
                (i.max = j.isFinite(i.max) && !isNaN(i.max) ? i.max : 1),
                i.handleTickRangeOptions();
            },
            _computeTickLimit: function () {
              var t;
              return this.isHorizontal()
                ? Math.ceil(this.width / 40)
                : ((t = j.options._parseFont(this.options.ticks)),
                  Math.ceil(this.height / t.lineHeight));
            },
            handleDirectionalChanges: function () {
              this.isHorizontal() || this.ticks.reverse();
            },
            getLabelForIndex: function (t, e) {
              return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
            },
            getPixelForValue: function (t) {
              return this.getPixelForDecimal(
                (+this.getRightValue(t) - this._startValue) / this._valueRange,
              );
            },
            getValueForPixel: function (t) {
              return (
                this._startValue + this.getDecimalForPixel(t) * this._valueRange
              );
            },
            getPixelForTick: function (t) {
              var e = this.ticksAsNumbers;
              return t < 0 || t > e.length - 1
                ? null
                : this.getPixelForValue(e[t]);
            },
          }),
          Dn = wn;
        Sn._defaults = Dn;
        var Cn = j.valueOrDefault,
          Pn = j.math.log10,
          Tn = {
            position: "left",
            ticks: { callback: tn.formatters.logarithmic },
          };
        function On(t, e) {
          return j.isFinite(t) && t >= 0 ? t : e;
        }
        var An = gn.extend({
            determineDataLimits: function () {
              var t,
                e,
                n,
                r,
                i,
                a,
                o = this,
                s = o.options,
                l = o.chart,
                u = l.data.datasets,
                c = o.isHorizontal();
              function h(t) {
                return c ? t.xAxisID === o.id : t.yAxisID === o.id;
              }
              (o.min = Number.POSITIVE_INFINITY),
                (o.max = Number.NEGATIVE_INFINITY),
                (o.minNotZero = Number.POSITIVE_INFINITY);
              var d = s.stacked;
              if (void 0 === d)
                for (t = 0; t < u.length; t++)
                  if (
                    ((e = l.getDatasetMeta(t)),
                    l.isDatasetVisible(t) && h(e) && void 0 !== e.stack)
                  ) {
                    d = !0;
                    break;
                  }
              if (s.stacked || d) {
                var f = {};
                for (t = 0; t < u.length; t++) {
                  var p = [
                    (e = l.getDatasetMeta(t)).type,
                    void 0 === s.stacked && void 0 === e.stack ? t : "",
                    e.stack,
                  ].join(".");
                  if (l.isDatasetVisible(t) && h(e))
                    for (
                      void 0 === f[p] && (f[p] = []),
                        i = 0,
                        a = (r = u[t].data).length;
                      i < a;
                      i++
                    ) {
                      var g = f[p];
                      (n = o._parseValue(r[i])),
                        isNaN(n.min) ||
                          isNaN(n.max) ||
                          e.data[i].hidden ||
                          n.min < 0 ||
                          n.max < 0 ||
                          ((g[i] = g[i] || 0), (g[i] += n.max));
                    }
                }
                j.each(f, function (t) {
                  if (t.length > 0) {
                    var e = j.min(t),
                      n = j.max(t);
                    (o.min = Math.min(o.min, e)), (o.max = Math.max(o.max, n));
                  }
                });
              } else
                for (t = 0; t < u.length; t++)
                  if (
                    ((e = l.getDatasetMeta(t)), l.isDatasetVisible(t) && h(e))
                  )
                    for (i = 0, a = (r = u[t].data).length; i < a; i++)
                      (n = o._parseValue(r[i])),
                        isNaN(n.min) ||
                          isNaN(n.max) ||
                          e.data[i].hidden ||
                          n.min < 0 ||
                          n.max < 0 ||
                          ((o.min = Math.min(n.min, o.min)),
                          (o.max = Math.max(n.max, o.max)),
                          0 !== n.min &&
                            (o.minNotZero = Math.min(n.min, o.minNotZero)));
              (o.min = j.isFinite(o.min) ? o.min : null),
                (o.max = j.isFinite(o.max) ? o.max : null),
                (o.minNotZero = j.isFinite(o.minNotZero) ? o.minNotZero : null),
                this.handleTickRangeOptions();
            },
            handleTickRangeOptions: function () {
              var t = this,
                e = t.options.ticks;
              (t.min = On(e.min, t.min)),
                (t.max = On(e.max, t.max)),
                t.min === t.max &&
                  (0 !== t.min && null !== t.min
                    ? ((t.min = Math.pow(10, Math.floor(Pn(t.min)) - 1)),
                      (t.max = Math.pow(10, Math.floor(Pn(t.max)) + 1)))
                    : ((t.min = 1), (t.max = 10))),
                null === t.min &&
                  (t.min = Math.pow(10, Math.floor(Pn(t.max)) - 1)),
                null === t.max &&
                  (t.max =
                    0 !== t.min ? Math.pow(10, Math.floor(Pn(t.min)) + 1) : 10),
                null === t.minNotZero &&
                  (t.min > 0
                    ? (t.minNotZero = t.min)
                    : t.max < 1
                      ? (t.minNotZero = Math.pow(10, Math.floor(Pn(t.max))))
                      : (t.minNotZero = 1));
            },
            buildTicks: function () {
              var t = this,
                e = t.options.ticks,
                n = !t.isHorizontal(),
                r = { min: On(e.min), max: On(e.max) },
                i = (t.ticks = (function (t, e) {
                  var n,
                    r,
                    i = [],
                    a = Cn(t.min, Math.pow(10, Math.floor(Pn(e.min)))),
                    o = Math.floor(Pn(e.max)),
                    s = Math.ceil(e.max / Math.pow(10, o));
                  0 === a
                    ? ((n = Math.floor(Pn(e.minNotZero))),
                      (r = Math.floor(e.minNotZero / Math.pow(10, n))),
                      i.push(a),
                      (a = r * Math.pow(10, n)))
                    : ((n = Math.floor(Pn(a))),
                      (r = Math.floor(a / Math.pow(10, n))));
                  var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                  do {
                    i.push(a),
                      10 === ++r && ((r = 1), (l = ++n >= 0 ? 1 : l)),
                      (a = Math.round(r * Math.pow(10, n) * l) / l);
                  } while (n < o || (n === o && r < s));
                  var u = Cn(t.max, a);
                  return i.push(u), i;
                })(r, t));
              (t.max = j.max(i)),
                (t.min = j.min(i)),
                e.reverse
                  ? ((n = !n), (t.start = t.max), (t.end = t.min))
                  : ((t.start = t.min), (t.end = t.max)),
                n && i.reverse();
            },
            convertTicksToLabels: function () {
              (this.tickValues = this.ticks.slice()),
                gn.prototype.convertTicksToLabels.call(this);
            },
            getLabelForIndex: function (t, e) {
              return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
            },
            getPixelForTick: function (t) {
              var e = this.tickValues;
              return t < 0 || t > e.length - 1
                ? null
                : this.getPixelForValue(e[t]);
            },
            _getFirstTickValue: function (t) {
              var e = Math.floor(Pn(t));
              return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
            },
            _configure: function () {
              var t = this,
                e = t.min,
                n = 0;
              gn.prototype._configure.call(t),
                0 === e &&
                  ((e = t._getFirstTickValue(t.minNotZero)),
                  (n =
                    Cn(t.options.ticks.fontSize, R.global.defaultFontSize) /
                    t._length)),
                (t._startValue = Pn(e)),
                (t._valueOffset = n),
                (t._valueRange = (Pn(t.max) - Pn(e)) / (1 - n));
            },
            getPixelForValue: function (t) {
              var e = this,
                n = 0;
              return (
                (t = +e.getRightValue(t)) > e.min &&
                  t > 0 &&
                  (n =
                    (Pn(t) - e._startValue) / e._valueRange + e._valueOffset),
                e.getPixelForDecimal(n)
              );
            },
            getValueForPixel: function (t) {
              var e = this,
                n = e.getDecimalForPixel(t);
              return 0 === n && 0 === e.min
                ? 0
                : Math.pow(
                    10,
                    e._startValue + (n - e._valueOffset) * e._valueRange,
                  );
            },
          }),
          In = Tn;
        An._defaults = In;
        var Fn = j.valueOrDefault,
          Ln = j.valueAtIndexOrDefault,
          Rn = j.options.resolve,
          En = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
              display: !0,
              color: "rgba(0,0,0,0.1)",
              lineWidth: 1,
              borderDash: [],
              borderDashOffset: 0,
            },
            gridLines: { circular: !1 },
            ticks: {
              showLabelBackdrop: !0,
              backdropColor: "rgba(255,255,255,0.75)",
              backdropPaddingY: 2,
              backdropPaddingX: 2,
              callback: tn.formatters.linear,
            },
            pointLabels: {
              display: !0,
              fontSize: 10,
              callback: function (t) {
                return t;
              },
            },
          };
        function Nn(t) {
          var e = t.ticks;
          return e.display && t.display
            ? Fn(e.fontSize, R.global.defaultFontSize) + 2 * e.backdropPaddingY
            : 0;
        }
        function Wn(t, e, n, r, i) {
          return t === r || t === i
            ? { start: e - n / 2, end: e + n / 2 }
            : t < r || t > i
              ? { start: e - n, end: e }
              : { start: e, end: e + n };
        }
        function zn(t) {
          return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
        }
        function jn(t, e, n, r) {
          var i,
            a,
            o = n.y + r / 2;
          if (j.isArray(e))
            for (i = 0, a = e.length; i < a; ++i)
              t.fillText(e[i], n.x, o), (o += r);
          else t.fillText(e, n.x, o);
        }
        function Yn(t, e, n) {
          90 === t || 270 === t
            ? (n.y -= e.h / 2)
            : (t > 270 || t < 90) && (n.y -= e.h);
        }
        function Vn(t) {
          return j.isNumber(t) ? t : 0;
        }
        var Bn = _n.extend({
            setDimensions: function () {
              var t = this;
              (t.width = t.maxWidth),
                (t.height = t.maxHeight),
                (t.paddingTop = Nn(t.options) / 2),
                (t.xCenter = Math.floor(t.width / 2)),
                (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
                (t.drawingArea =
                  Math.min(t.height - t.paddingTop, t.width) / 2);
            },
            determineDataLimits: function () {
              var t = this,
                e = t.chart,
                n = Number.POSITIVE_INFINITY,
                r = Number.NEGATIVE_INFINITY;
              j.each(e.data.datasets, function (i, a) {
                if (e.isDatasetVisible(a)) {
                  var o = e.getDatasetMeta(a);
                  j.each(i.data, function (e, i) {
                    var a = +t.getRightValue(e);
                    isNaN(a) ||
                      o.data[i].hidden ||
                      ((n = Math.min(a, n)), (r = Math.max(a, r)));
                  });
                }
              }),
                (t.min = n === Number.POSITIVE_INFINITY ? 0 : n),
                (t.max = r === Number.NEGATIVE_INFINITY ? 0 : r),
                t.handleTickRangeOptions();
            },
            _computeTickLimit: function () {
              return Math.ceil(this.drawingArea / Nn(this.options));
            },
            convertTicksToLabels: function () {
              var t = this;
              _n.prototype.convertTicksToLabels.call(t),
                (t.pointLabels = t.chart.data.labels.map(function () {
                  var e = j.callback(
                    t.options.pointLabels.callback,
                    arguments,
                    t,
                  );
                  return e || 0 === e ? e : "";
                }));
            },
            getLabelForIndex: function (t, e) {
              return +this.getRightValue(this.chart.data.datasets[e].data[t]);
            },
            fit: function () {
              var t = this.options;
              t.display && t.pointLabels.display
                ? (function (t) {
                    var e,
                      n,
                      r,
                      i = j.options._parseFont(t.options.pointLabels),
                      a = {
                        l: 0,
                        r: t.width,
                        t: 0,
                        b: t.height - t.paddingTop,
                      },
                      o = {};
                    (t.ctx.font = i.string), (t._pointLabelSizes = []);
                    var s,
                      l,
                      u,
                      c = t.chart.data.labels.length;
                    for (e = 0; e < c; e++) {
                      (r = t.getPointPosition(e, t.drawingArea + 5)),
                        (s = t.ctx),
                        (l = i.lineHeight),
                        (u = t.pointLabels[e]),
                        (n = j.isArray(u)
                          ? { w: j.longestText(s, s.font, u), h: u.length * l }
                          : { w: s.measureText(u).width, h: l }),
                        (t._pointLabelSizes[e] = n);
                      var h = t.getIndexAngle(e),
                        d = j.toDegrees(h) % 360,
                        f = Wn(d, r.x, n.w, 0, 180),
                        p = Wn(d, r.y, n.h, 90, 270);
                      f.start < a.l && ((a.l = f.start), (o.l = h)),
                        f.end > a.r && ((a.r = f.end), (o.r = h)),
                        p.start < a.t && ((a.t = p.start), (o.t = h)),
                        p.end > a.b && ((a.b = p.end), (o.b = h));
                    }
                    t.setReductions(t.drawingArea, a, o);
                  })(this)
                : this.setCenterPoint(0, 0, 0, 0);
            },
            setReductions: function (t, e, n) {
              var r = this,
                i = e.l / Math.sin(n.l),
                a = Math.max(e.r - r.width, 0) / Math.sin(n.r),
                o = -e.t / Math.cos(n.t),
                s =
                  -Math.max(e.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
              (i = Vn(i)),
                (a = Vn(a)),
                (o = Vn(o)),
                (s = Vn(s)),
                (r.drawingArea = Math.min(
                  Math.floor(t - (i + a) / 2),
                  Math.floor(t - (o + s) / 2),
                )),
                r.setCenterPoint(i, a, o, s);
            },
            setCenterPoint: function (t, e, n, r) {
              var i = this,
                a = i.width - e - i.drawingArea,
                o = t + i.drawingArea,
                s = n + i.drawingArea,
                l = i.height - i.paddingTop - r - i.drawingArea;
              (i.xCenter = Math.floor((o + a) / 2 + i.left)),
                (i.yCenter = Math.floor((s + l) / 2 + i.top + i.paddingTop));
            },
            getIndexAngle: function (t) {
              var e = this.chart,
                n =
                  (t * (360 / e.data.labels.length) +
                    ((e.options || {}).startAngle || 0)) %
                  360;
              return ((n < 0 ? n + 360 : n) * Math.PI * 2) / 360;
            },
            getDistanceFromCenterForValue: function (t) {
              var e = this;
              if (j.isNullOrUndef(t)) return NaN;
              var n = e.drawingArea / (e.max - e.min);
              return e.options.ticks.reverse
                ? (e.max - t) * n
                : (t - e.min) * n;
            },
            getPointPosition: function (t, e) {
              var n = this.getIndexAngle(t) - Math.PI / 2;
              return {
                x: Math.cos(n) * e + this.xCenter,
                y: Math.sin(n) * e + this.yCenter,
              };
            },
            getPointPositionForValue: function (t, e) {
              return this.getPointPosition(
                t,
                this.getDistanceFromCenterForValue(e),
              );
            },
            getBasePosition: function (t) {
              var e = this.min,
                n = this.max;
              return this.getPointPositionForValue(
                t || 0,
                this.beginAtZero
                  ? 0
                  : e < 0 && n < 0
                    ? n
                    : e > 0 && n > 0
                      ? e
                      : 0,
              );
            },
            _drawGrid: function () {
              var t,
                e,
                n,
                r = this,
                i = r.ctx,
                a = r.options,
                o = a.gridLines,
                s = a.angleLines,
                l = Fn(s.lineWidth, o.lineWidth),
                u = Fn(s.color, o.color);
              if (
                (a.pointLabels.display &&
                  (function (t) {
                    var e = t.ctx,
                      n = t.options,
                      r = n.pointLabels,
                      i = Nn(n),
                      a = t.getDistanceFromCenterForValue(
                        n.ticks.reverse ? t.min : t.max,
                      ),
                      o = j.options._parseFont(r);
                    e.save(), (e.font = o.string), (e.textBaseline = "middle");
                    for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
                      var l = 0 === s ? i / 2 : 0,
                        u = t.getPointPosition(s, a + l + 5),
                        c = Ln(r.fontColor, s, R.global.defaultFontColor);
                      e.fillStyle = c;
                      var h = t.getIndexAngle(s),
                        d = j.toDegrees(h);
                      (e.textAlign = zn(d)),
                        Yn(d, t._pointLabelSizes[s], u),
                        jn(e, t.pointLabels[s], u, o.lineHeight);
                    }
                    e.restore();
                  })(r),
                o.display &&
                  j.each(r.ticks, function (t, n) {
                    0 !== n &&
                      ((e = r.getDistanceFromCenterForValue(
                        r.ticksAsNumbers[n],
                      )),
                      (function (t, e, n, r) {
                        var i,
                          a = t.ctx,
                          o = e.circular,
                          s = t.chart.data.labels.length,
                          l = Ln(e.color, r - 1),
                          u = Ln(e.lineWidth, r - 1);
                        if ((o || s) && l && u) {
                          if (
                            (a.save(),
                            (a.strokeStyle = l),
                            (a.lineWidth = u),
                            a.setLineDash &&
                              (a.setLineDash(e.borderDash || []),
                              (a.lineDashOffset = e.borderDashOffset || 0)),
                            a.beginPath(),
                            o)
                          )
                            a.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                          else {
                            (i = t.getPointPosition(0, n)), a.moveTo(i.x, i.y);
                            for (var c = 1; c < s; c++)
                              (i = t.getPointPosition(c, n)),
                                a.lineTo(i.x, i.y);
                          }
                          a.closePath(), a.stroke(), a.restore();
                        }
                      })(r, o, e, n));
                  }),
                s.display && l && u)
              ) {
                for (
                  i.save(),
                    i.lineWidth = l,
                    i.strokeStyle = u,
                    i.setLineDash &&
                      (i.setLineDash(Rn([s.borderDash, o.borderDash, []])),
                      (i.lineDashOffset = Rn([
                        s.borderDashOffset,
                        o.borderDashOffset,
                        0,
                      ]))),
                    t = r.chart.data.labels.length - 1;
                  t >= 0;
                  t--
                )
                  (e = r.getDistanceFromCenterForValue(
                    a.ticks.reverse ? r.min : r.max,
                  )),
                    (n = r.getPointPosition(t, e)),
                    i.beginPath(),
                    i.moveTo(r.xCenter, r.yCenter),
                    i.lineTo(n.x, n.y),
                    i.stroke();
                i.restore();
              }
            },
            _drawLabels: function () {
              var t = this,
                e = t.ctx,
                n = t.options.ticks;
              if (n.display) {
                var r,
                  i,
                  a = t.getIndexAngle(0),
                  o = j.options._parseFont(n),
                  s = Fn(n.fontColor, R.global.defaultFontColor);
                e.save(),
                  (e.font = o.string),
                  e.translate(t.xCenter, t.yCenter),
                  e.rotate(a),
                  (e.textAlign = "center"),
                  (e.textBaseline = "middle"),
                  j.each(t.ticks, function (a, l) {
                    (0 !== l || n.reverse) &&
                      ((r = t.getDistanceFromCenterForValue(
                        t.ticksAsNumbers[l],
                      )),
                      n.showLabelBackdrop &&
                        ((i = e.measureText(a).width),
                        (e.fillStyle = n.backdropColor),
                        e.fillRect(
                          -i / 2 - n.backdropPaddingX,
                          -r - o.size / 2 - n.backdropPaddingY,
                          i + 2 * n.backdropPaddingX,
                          o.size + 2 * n.backdropPaddingY,
                        )),
                      (e.fillStyle = s),
                      e.fillText(a, 0, -r));
                  }),
                  e.restore();
              }
            },
            _drawTitle: j.noop,
          }),
          Hn = En;
        Bn._defaults = Hn;
        var Un = j._deprecated,
          Gn = j.options.resolve,
          qn = j.valueOrDefault,
          $n = Number.MIN_SAFE_INTEGER || -9007199254740991,
          Zn = Number.MAX_SAFE_INTEGER || 9007199254740991,
          Kn = {
            millisecond: { common: !0, size: 1, steps: 1e3 },
            second: { common: !0, size: 1e3, steps: 60 },
            minute: { common: !0, size: 6e4, steps: 60 },
            hour: { common: !0, size: 36e5, steps: 24 },
            day: { common: !0, size: 864e5, steps: 30 },
            week: { common: !1, size: 6048e5, steps: 4 },
            month: { common: !0, size: 2628e6, steps: 12 },
            quarter: { common: !1, size: 7884e6, steps: 4 },
            year: { common: !0, size: 3154e7 },
          },
          Xn = Object.keys(Kn);
        function Jn(t, e) {
          return t - e;
        }
        function Qn(t) {
          return j.valueOrDefault(t.time.min, t.ticks.min);
        }
        function tr(t) {
          return j.valueOrDefault(t.time.max, t.ticks.max);
        }
        function er(t, e, n, r) {
          var i = (function (t, e, n) {
              for (var r, i, a, o = 0, s = t.length - 1; o >= 0 && o <= s; ) {
                if (((i = t[(r = (o + s) >> 1) - 1] || null), (a = t[r]), !i))
                  return { lo: null, hi: a };
                if (a[e] < n) o = r + 1;
                else {
                  if (!(i[e] > n)) return { lo: i, hi: a };
                  s = r - 1;
                }
              }
              return { lo: a, hi: null };
            })(t, e, n),
            a = i.lo ? (i.hi ? i.lo : t[t.length - 2]) : t[0],
            o = i.lo ? (i.hi ? i.hi : t[t.length - 1]) : t[1],
            s = o[e] - a[e],
            l = s ? (n - a[e]) / s : 0,
            u = (o[r] - a[r]) * l;
          return a[r] + u;
        }
        function nr(t, e) {
          var n = t._adapter,
            r = t.options.time,
            i = r.parser,
            a = i || r.format,
            o = e;
          return (
            "function" === typeof i && (o = i(o)),
            j.isFinite(o) ||
              (o = "string" === typeof a ? n.parse(o, a) : n.parse(o)),
            null !== o
              ? +o
              : (i ||
                  "function" !== typeof a ||
                  ((o = a(e)), j.isFinite(o) || (o = n.parse(o))),
                o)
          );
        }
        function rr(t, e) {
          if (j.isNullOrUndef(e)) return null;
          var n = t.options.time,
            r = nr(t, t.getRightValue(e));
          return (
            null === r || (n.round && (r = +t._adapter.startOf(r, n.round))), r
          );
        }
        function ir(t, e, n, r) {
          var i,
            a,
            o,
            s = Xn.length;
          for (i = Xn.indexOf(t); i < s - 1; ++i)
            if (
              ((o = (a = Kn[Xn[i]]).steps ? a.steps : Zn),
              a.common && Math.ceil((n - e) / (o * a.size)) <= r)
            )
              return Xn[i];
          return Xn[s - 1];
        }
        function ar(t, e, n) {
          var r,
            i,
            a = [],
            o = {},
            s = e.length;
          for (r = 0; r < s; ++r)
            (o[(i = e[r])] = r), a.push({ value: i, major: !1 });
          return 0 !== s && n
            ? (function (t, e, n, r) {
                var i,
                  a,
                  o = t._adapter,
                  s = +o.startOf(e[0].value, r),
                  l = e[e.length - 1].value;
                for (i = s; i <= l; i = +o.add(i, 1, r))
                  (a = n[i]) >= 0 && (e[a].major = !0);
                return e;
              })(t, a, o, n)
            : a;
        }
        var or = gn.extend({
            initialize: function () {
              this.mergeTicksOptions(), gn.prototype.initialize.call(this);
            },
            update: function () {
              var t = this,
                e = t.options,
                n = e.time || (e.time = {}),
                r = (t._adapter = new Qe._date(e.adapters.date));
              return (
                Un("time scale", n.format, "time.format", "time.parser"),
                Un("time scale", n.min, "time.min", "ticks.min"),
                Un("time scale", n.max, "time.max", "ticks.max"),
                j.mergeIf(n.displayFormats, r.formats()),
                gn.prototype.update.apply(t, arguments)
              );
            },
            getRightValue: function (t) {
              return (
                t && void 0 !== t.t && (t = t.t),
                gn.prototype.getRightValue.call(this, t)
              );
            },
            determineDataLimits: function () {
              var t,
                e,
                n,
                r,
                i,
                a,
                o,
                s = this,
                l = s.chart,
                u = s._adapter,
                c = s.options,
                h = c.time.unit || "day",
                d = Zn,
                f = $n,
                p = [],
                g = [],
                m = [],
                v = s._getLabels();
              for (t = 0, n = v.length; t < n; ++t) m.push(rr(s, v[t]));
              for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
                if (l.isDatasetVisible(t))
                  if (((i = l.data.datasets[t].data), j.isObject(i[0])))
                    for (g[t] = [], e = 0, r = i.length; e < r; ++e)
                      (a = rr(s, i[e])), p.push(a), (g[t][e] = a);
                  else (g[t] = m.slice(0)), o || ((p = p.concat(m)), (o = !0));
                else g[t] = [];
              m.length &&
                ((d = Math.min(d, m[0])), (f = Math.max(f, m[m.length - 1]))),
                p.length &&
                  ((p =
                    n > 1
                      ? (function (t) {
                          var e,
                            n,
                            r,
                            i = {},
                            a = [];
                          for (e = 0, n = t.length; e < n; ++e)
                            i[(r = t[e])] || ((i[r] = !0), a.push(r));
                          return a;
                        })(p).sort(Jn)
                      : p.sort(Jn)),
                  (d = Math.min(d, p[0])),
                  (f = Math.max(f, p[p.length - 1]))),
                (d = rr(s, Qn(c)) || d),
                (f = rr(s, tr(c)) || f),
                (d = d === Zn ? +u.startOf(Date.now(), h) : d),
                (f = f === $n ? +u.endOf(Date.now(), h) + 1 : f),
                (s.min = Math.min(d, f)),
                (s.max = Math.max(d + 1, f)),
                (s._table = []),
                (s._timestamps = { data: p, datasets: g, labels: m });
            },
            buildTicks: function () {
              var t,
                e,
                n,
                r = this,
                i = r.min,
                a = r.max,
                o = r.options,
                s = o.ticks,
                l = o.time,
                u = r._timestamps,
                c = [],
                h = r.getLabelCapacity(i),
                d = s.source,
                f = o.distribution;
              for (
                u =
                  "data" === d || ("auto" === d && "series" === f)
                    ? u.data
                    : "labels" === d
                      ? u.labels
                      : (function (t, e, n, r) {
                          var i,
                            a = t._adapter,
                            o = t.options,
                            s = o.time,
                            l = s.unit || ir(s.minUnit, e, n, r),
                            u = Gn([s.stepSize, s.unitStepSize, 1]),
                            c = "week" === l && s.isoWeekday,
                            h = e,
                            d = [];
                          if (
                            (c && (h = +a.startOf(h, "isoWeek", c)),
                            (h = +a.startOf(h, c ? "day" : l)),
                            a.diff(n, e, l) > 1e5 * u)
                          )
                            throw (
                              e +
                              " and " +
                              n +
                              " are too far apart with stepSize of " +
                              u +
                              " " +
                              l
                            );
                          for (i = h; i < n; i = +a.add(i, u, l)) d.push(i);
                          return (
                            (i !== n && "ticks" !== o.bounds) || d.push(i), d
                          );
                        })(r, i, a, h),
                  "ticks" === o.bounds &&
                    u.length &&
                    ((i = u[0]), (a = u[u.length - 1])),
                  i = rr(r, Qn(o)) || i,
                  a = rr(r, tr(o)) || a,
                  t = 0,
                  e = u.length;
                t < e;
                ++t
              )
                (n = u[t]) >= i && n <= a && c.push(n);
              return (
                (r.min = i),
                (r.max = a),
                (r._unit =
                  l.unit ||
                  (s.autoSkip
                    ? ir(l.minUnit, r.min, r.max, h)
                    : (function (t, e, n, r, i) {
                        var a, o;
                        for (a = Xn.length - 1; a >= Xn.indexOf(n); a--)
                          if (
                            ((o = Xn[a]),
                            Kn[o].common && t._adapter.diff(i, r, o) >= e - 1)
                          )
                            return o;
                        return Xn[n ? Xn.indexOf(n) : 0];
                      })(r, c.length, l.minUnit, r.min, r.max))),
                (r._majorUnit =
                  s.major.enabled && "year" !== r._unit
                    ? (function (t) {
                        for (
                          var e = Xn.indexOf(t) + 1, n = Xn.length;
                          e < n;
                          ++e
                        )
                          if (Kn[Xn[e]].common) return Xn[e];
                      })(r._unit)
                    : void 0),
                (r._table = (function (t, e, n, r) {
                  if ("linear" === r || !t.length)
                    return [
                      { time: e, pos: 0 },
                      { time: n, pos: 1 },
                    ];
                  var i,
                    a,
                    o,
                    s,
                    l,
                    u = [],
                    c = [e];
                  for (i = 0, a = t.length; i < a; ++i)
                    (s = t[i]) > e && s < n && c.push(s);
                  for (c.push(n), i = 0, a = c.length; i < a; ++i)
                    (l = c[i + 1]),
                      (o = c[i - 1]),
                      (s = c[i]),
                      (void 0 !== o &&
                        void 0 !== l &&
                        Math.round((l + o) / 2) === s) ||
                        u.push({ time: s, pos: i / (a - 1) });
                  return u;
                })(r._timestamps.data, i, a, f)),
                (r._offsets = (function (t, e, n, r, i) {
                  var a,
                    o,
                    s = 0,
                    l = 0;
                  return (
                    i.offset &&
                      e.length &&
                      ((a = er(t, "time", e[0], "pos")),
                      (s =
                        1 === e.length
                          ? 1 - a
                          : (er(t, "time", e[1], "pos") - a) / 2),
                      (o = er(t, "time", e[e.length - 1], "pos")),
                      (l =
                        1 === e.length
                          ? o
                          : (o - er(t, "time", e[e.length - 2], "pos")) / 2)),
                    { start: s, end: l, factor: 1 / (s + 1 + l) }
                  );
                })(r._table, c, 0, 0, o)),
                s.reverse && c.reverse(),
                ar(r, c, r._majorUnit)
              );
            },
            getLabelForIndex: function (t, e) {
              var n = this,
                r = n._adapter,
                i = n.chart.data,
                a = n.options.time,
                o = i.labels && t < i.labels.length ? i.labels[t] : "",
                s = i.datasets[e].data[t];
              return (
                j.isObject(s) && (o = n.getRightValue(s)),
                a.tooltipFormat
                  ? r.format(nr(n, o), a.tooltipFormat)
                  : "string" === typeof o
                    ? o
                    : r.format(nr(n, o), a.displayFormats.datetime)
              );
            },
            tickFormatFunction: function (t, e, n, r) {
              var i = this._adapter,
                a = this.options,
                o = a.time.displayFormats,
                s = o[this._unit],
                l = this._majorUnit,
                u = o[l],
                c = n[e],
                h = a.ticks,
                d = l && u && c && c.major,
                f = i.format(t, r || (d ? u : s)),
                p = d ? h.major : h.minor,
                g = Gn([
                  p.callback,
                  p.userCallback,
                  h.callback,
                  h.userCallback,
                ]);
              return g ? g(f, e, n) : f;
            },
            convertTicksToLabels: function (t) {
              var e,
                n,
                r = [];
              for (e = 0, n = t.length; e < n; ++e)
                r.push(this.tickFormatFunction(t[e].value, e, t));
              return r;
            },
            getPixelForOffset: function (t) {
              var e = this._offsets,
                n = er(this._table, "time", t, "pos");
              return this.getPixelForDecimal((e.start + n) * e.factor);
            },
            getPixelForValue: function (t, e, n) {
              var r = null;
              if (
                (void 0 !== e &&
                  void 0 !== n &&
                  (r = this._timestamps.datasets[n][e]),
                null === r && (r = rr(this, t)),
                null !== r)
              )
                return this.getPixelForOffset(r);
            },
            getPixelForTick: function (t) {
              var e = this.getTicks();
              return t >= 0 && t < e.length
                ? this.getPixelForOffset(e[t].value)
                : null;
            },
            getValueForPixel: function (t) {
              var e = this._offsets,
                n = this.getDecimalForPixel(t) / e.factor - e.end,
                r = er(this._table, "pos", n, "time");
              return this._adapter._create(r);
            },
            _getLabelSize: function (t) {
              var e = this.options.ticks,
                n = this.ctx.measureText(t).width,
                r = j.toRadians(
                  this.isHorizontal() ? e.maxRotation : e.minRotation,
                ),
                i = Math.cos(r),
                a = Math.sin(r),
                o = qn(e.fontSize, R.global.defaultFontSize);
              return { w: n * i + o * a, h: n * a + o * i };
            },
            getLabelWidth: function (t) {
              return this._getLabelSize(t).w;
            },
            getLabelCapacity: function (t) {
              var e = this,
                n = e.options.time,
                r = n.displayFormats,
                i = r[n.unit] || r.millisecond,
                a = e.tickFormatFunction(t, 0, ar(e, [t], e._majorUnit), i),
                o = e._getLabelSize(a),
                s = Math.floor(
                  e.isHorizontal() ? e.width / o.w : e.height / o.h,
                );
              return e.options.offset && s--, s > 0 ? s : 1;
            },
          }),
          sr = {
            position: "bottom",
            distribution: "linear",
            bounds: "data",
            adapters: {},
            time: {
              parser: !1,
              unit: !1,
              round: !1,
              displayFormat: !1,
              isoWeekday: !1,
              minUnit: "millisecond",
              displayFormats: {},
            },
            ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } },
          };
        or._defaults = sr;
        var lr = {
            category: vn,
            linear: Sn,
            logarithmic: An,
            radialLinear: Bn,
            time: or,
          },
          ur = {
            datetime: "MMM D, YYYY, h:mm:ss a",
            millisecond: "h:mm:ss.SSS a",
            second: "h:mm:ss a",
            minute: "h:mm a",
            hour: "hA",
            day: "MMM D",
            week: "ll",
            month: "MMM YYYY",
            quarter: "[Q]Q - YYYY",
            year: "YYYY",
          };
        Qe._date.override(
          "function" === typeof t
            ? {
                _id: "moment",
                formats: function () {
                  return ur;
                },
                parse: function (e, n) {
                  return (
                    "string" === typeof e && "string" === typeof n
                      ? (e = t(e, n))
                      : e instanceof t || (e = t(e)),
                    e.isValid() ? e.valueOf() : null
                  );
                },
                format: function (e, n) {
                  return t(e).format(n);
                },
                add: function (e, n, r) {
                  return t(e).add(n, r).valueOf();
                },
                diff: function (e, n, r) {
                  return t(e).diff(t(n), r);
                },
                startOf: function (e, n, r) {
                  return (
                    (e = t(e)),
                    "isoWeek" === n
                      ? e.isoWeekday(r).valueOf()
                      : e.startOf(n).valueOf()
                  );
                },
                endOf: function (e, n) {
                  return t(e).endOf(n).valueOf();
                },
                _create: function (e) {
                  return t(e);
                },
              }
            : {},
        ),
          R._set("global", { plugins: { filler: { propagate: !0 } } });
        var cr = {
          dataset: function (t) {
            var e = t.fill,
              n = t.chart,
              r = n.getDatasetMeta(e),
              i = (r && n.isDatasetVisible(e) && r.dataset._children) || [],
              a = i.length || 0;
            return a
              ? function (t, e) {
                  return (e < a && i[e]._view) || null;
                }
              : null;
          },
          boundary: function (t) {
            var e = t.boundary,
              n = e ? e.x : null,
              r = e ? e.y : null;
            return j.isArray(e)
              ? function (t, n) {
                  return e[n];
                }
              : function (t) {
                  return { x: null === n ? t.x : n, y: null === r ? t.y : r };
                };
          },
        };
        function hr(t, e, n) {
          var r,
            i = t._model || {},
            a = i.fill;
          if (
            (void 0 === a && (a = !!i.backgroundColor), !1 === a || null === a)
          )
            return !1;
          if (!0 === a) return "origin";
          if (((r = parseFloat(a, 10)), isFinite(r) && Math.floor(r) === r))
            return (
              ("-" !== a[0] && "+" !== a[0]) || (r = e + r),
              !(r === e || r < 0 || r >= n) && r
            );
          switch (a) {
            case "bottom":
              return "start";
            case "top":
              return "end";
            case "zero":
              return "origin";
            case "origin":
            case "start":
            case "end":
              return a;
            default:
              return !1;
          }
        }
        function dr(t) {
          return (t.el._scale || {}).getPointPositionForValue
            ? (function (t) {
                var e,
                  n,
                  r,
                  i,
                  a,
                  o = t.el._scale,
                  s = o.options,
                  l = o.chart.data.labels.length,
                  u = t.fill,
                  c = [];
                if (!l) return null;
                for (
                  e = s.ticks.reverse ? o.max : o.min,
                    n = s.ticks.reverse ? o.min : o.max,
                    r = o.getPointPositionForValue(0, e),
                    i = 0;
                  i < l;
                  ++i
                )
                  (a =
                    "start" === u || "end" === u
                      ? o.getPointPositionForValue(i, "start" === u ? e : n)
                      : o.getBasePosition(i)),
                    s.gridLines.circular &&
                      ((a.cx = r.x),
                      (a.cy = r.y),
                      (a.angle = o.getIndexAngle(i) - Math.PI / 2)),
                    c.push(a);
                return c;
              })(t)
            : (function (t) {
                var e,
                  n = t.el._model || {},
                  r = t.el._scale || {},
                  i = t.fill,
                  a = null;
                if (isFinite(i)) return null;
                if (
                  ("start" === i
                    ? (a = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom)
                    : "end" === i
                      ? (a = void 0 === n.scaleTop ? r.top : n.scaleTop)
                      : void 0 !== n.scaleZero
                        ? (a = n.scaleZero)
                        : r.getBasePixel && (a = r.getBasePixel()),
                  void 0 !== a && null !== a)
                ) {
                  if (void 0 !== a.x && void 0 !== a.y) return a;
                  if (j.isFinite(a))
                    return {
                      x: (e = r.isHorizontal()) ? a : null,
                      y: e ? null : a,
                    };
                }
                return null;
              })(t);
        }
        function fr(t, e, n) {
          var r,
            i = t[e].fill,
            a = [e];
          if (!n) return i;
          for (; !1 !== i && -1 === a.indexOf(i); ) {
            if (!isFinite(i)) return i;
            if (!(r = t[i])) return !1;
            if (r.visible) return i;
            a.push(i), (i = r.fill);
          }
          return !1;
        }
        function pr(t) {
          var e = t.fill,
            n = "dataset";
          return !1 === e ? null : (isFinite(e) || (n = "boundary"), cr[n](t));
        }
        function gr(t) {
          return t && !t.skip;
        }
        function mr(t, e, n, r, i) {
          var a, o, s, l;
          if (r && i) {
            for (t.moveTo(e[0].x, e[0].y), a = 1; a < r; ++a)
              j.canvas.lineTo(t, e[a - 1], e[a]);
            if (void 0 === n[0].angle)
              for (t.lineTo(n[i - 1].x, n[i - 1].y), a = i - 1; a > 0; --a)
                j.canvas.lineTo(t, n[a], n[a - 1], !0);
            else
              for (
                o = n[0].cx,
                  s = n[0].cy,
                  l = Math.sqrt(
                    Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2),
                  ),
                  a = i - 1;
                a > 0;
                --a
              )
                t.arc(o, s, l, n[a].angle, n[a - 1].angle, !0);
          }
        }
        function vr(t, e, n, r, i, a) {
          var o,
            s,
            l,
            u,
            c,
            h,
            d,
            f,
            p = e.length,
            g = r.spanGaps,
            m = [],
            v = [],
            y = 0,
            b = 0;
          for (t.beginPath(), o = 0, s = p; o < s; ++o)
            (c = n((u = e[(l = o % p)]._view), l, r)),
              (h = gr(u)),
              (d = gr(c)),
              a && void 0 === f && h && (s = p + (f = o + 1)),
              h && d
                ? ((y = m.push(u)), (b = v.push(c)))
                : y &&
                  b &&
                  (g
                    ? (h && m.push(u), d && v.push(c))
                    : (mr(t, m, v, y, b), (y = b = 0), (m = []), (v = [])));
          mr(t, m, v, y, b), t.closePath(), (t.fillStyle = i), t.fill();
        }
        var yr = {
            id: "filler",
            afterDatasetsUpdate: function (t, e) {
              var n,
                r,
                i,
                a,
                o = (t.data.datasets || []).length,
                s = e.propagate,
                l = [];
              for (r = 0; r < o; ++r)
                (a = null),
                  (i = (n = t.getDatasetMeta(r)).dataset) &&
                    i._model &&
                    i instanceof xt.Line &&
                    (a = {
                      visible: t.isDatasetVisible(r),
                      fill: hr(i, r, o),
                      chart: t,
                      el: i,
                    }),
                  (n.$filler = a),
                  l.push(a);
              for (r = 0; r < o; ++r)
                (a = l[r]) &&
                  ((a.fill = fr(l, r, s)),
                  (a.boundary = dr(a)),
                  (a.mapper = pr(a)));
            },
            beforeDatasetsDraw: function (t) {
              var e,
                n,
                r,
                i,
                a,
                o,
                s,
                l = t._getSortedVisibleDatasetMetas(),
                u = t.ctx;
              for (n = l.length - 1; n >= 0; --n)
                (e = l[n].$filler) &&
                  e.visible &&
                  ((i = (r = e.el)._view),
                  (a = r._children || []),
                  (o = e.mapper),
                  (s = i.backgroundColor || R.global.defaultColor),
                  o &&
                    s &&
                    a.length &&
                    (j.canvas.clipArea(u, t.chartArea),
                    vr(u, a, o, i, s, r._loop),
                    j.canvas.unclipArea(u)));
            },
          },
          br = j.rtl.getRtlAdapter,
          xr = j.noop,
          _r = j.valueOrDefault;
        function wr(t, e) {
          return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
        }
        R._set("global", {
          legend: {
            display: !0,
            position: "top",
            align: "center",
            fullWidth: !0,
            reverse: !1,
            weight: 1e3,
            onClick: function (t, e) {
              var n = e.datasetIndex,
                r = this.chart,
                i = r.getDatasetMeta(n);
              (i.hidden =
                null === i.hidden ? !r.data.datasets[n].hidden : null),
                r.update();
            },
            onHover: null,
            onLeave: null,
            labels: {
              boxWidth: 40,
              padding: 10,
              generateLabels: function (t) {
                var e = t.data.datasets,
                  n = t.options.legend || {},
                  r = n.labels && n.labels.usePointStyle;
                return t._getSortedDatasetMetas().map(function (n) {
                  var i = n.controller.getStyle(r ? 0 : void 0);
                  return {
                    text: e[n.index].label,
                    fillStyle: i.backgroundColor,
                    hidden: !t.isDatasetVisible(n.index),
                    lineCap: i.borderCapStyle,
                    lineDash: i.borderDash,
                    lineDashOffset: i.borderDashOffset,
                    lineJoin: i.borderJoinStyle,
                    lineWidth: i.borderWidth,
                    strokeStyle: i.borderColor,
                    pointStyle: i.pointStyle,
                    rotation: i.rotation,
                    datasetIndex: n.index,
                  };
                }, this);
              },
            },
          },
          legendCallback: function (t) {
            var e,
              n,
              r,
              i = document.createElement("ul"),
              a = t.data.datasets;
            for (
              i.setAttribute("class", t.id + "-legend"), e = 0, n = a.length;
              e < n;
              e++
            )
              ((r = i.appendChild(document.createElement("li"))).appendChild(
                document.createElement("span"),
              ).style.backgroundColor = a[e].backgroundColor),
                a[e].label &&
                  r.appendChild(document.createTextNode(a[e].label));
            return i.outerHTML;
          },
        });
        var kr = q.extend({
          initialize: function (t) {
            j.extend(this, t),
              (this.legendHitBoxes = []),
              (this._hoveredItem = null),
              (this.doughnutMode = !1);
          },
          beforeUpdate: xr,
          update: function (t, e, n) {
            var r = this;
            return (
              r.beforeUpdate(),
              (r.maxWidth = t),
              (r.maxHeight = e),
              (r.margins = n),
              r.beforeSetDimensions(),
              r.setDimensions(),
              r.afterSetDimensions(),
              r.beforeBuildLabels(),
              r.buildLabels(),
              r.afterBuildLabels(),
              r.beforeFit(),
              r.fit(),
              r.afterFit(),
              r.afterUpdate(),
              r.minSize
            );
          },
          afterUpdate: xr,
          beforeSetDimensions: xr,
          setDimensions: function () {
            var t = this;
            t.isHorizontal()
              ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
              : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
              (t.paddingLeft = 0),
              (t.paddingTop = 0),
              (t.paddingRight = 0),
              (t.paddingBottom = 0),
              (t.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: xr,
          beforeBuildLabels: xr,
          buildLabels: function () {
            var t = this,
              e = t.options.labels || {},
              n = j.callback(e.generateLabels, [t.chart], t) || [];
            e.filter &&
              (n = n.filter(function (n) {
                return e.filter(n, t.chart.data);
              })),
              t.options.reverse && n.reverse(),
              (t.legendItems = n);
          },
          afterBuildLabels: xr,
          beforeFit: xr,
          fit: function () {
            var t = this,
              e = t.options,
              n = e.labels,
              r = e.display,
              i = t.ctx,
              a = j.options._parseFont(n),
              o = a.size,
              s = (t.legendHitBoxes = []),
              l = t.minSize,
              u = t.isHorizontal();
            if (
              (u
                ? ((l.width = t.maxWidth), (l.height = r ? 10 : 0))
                : ((l.width = r ? 10 : 0), (l.height = t.maxHeight)),
              r)
            ) {
              if (((i.font = a.string), u)) {
                var c = (t.lineWidths = [0]),
                  h = 0;
                (i.textAlign = "left"),
                  (i.textBaseline = "middle"),
                  j.each(t.legendItems, function (t, e) {
                    var r = wr(n, o) + o / 2 + i.measureText(t.text).width;
                    (0 === e ||
                      c[c.length - 1] + r + 2 * n.padding > l.width) &&
                      ((h += o + n.padding),
                      (c[c.length - (e > 0 ? 0 : 1)] = 0)),
                      (s[e] = { left: 0, top: 0, width: r, height: o }),
                      (c[c.length - 1] += r + n.padding);
                  }),
                  (l.height += h);
              } else {
                var d = n.padding,
                  f = (t.columnWidths = []),
                  p = (t.columnHeights = []),
                  g = n.padding,
                  m = 0,
                  v = 0;
                j.each(t.legendItems, function (t, e) {
                  var r = wr(n, o) + o / 2 + i.measureText(t.text).width;
                  e > 0 &&
                    v + o + 2 * d > l.height &&
                    ((g += m + n.padding),
                    f.push(m),
                    p.push(v),
                    (m = 0),
                    (v = 0)),
                    (m = Math.max(m, r)),
                    (v += o + d),
                    (s[e] = { left: 0, top: 0, width: r, height: o });
                }),
                  (g += m),
                  f.push(m),
                  p.push(v),
                  (l.width += g);
              }
              (t.width = l.width), (t.height = l.height);
            } else t.width = l.width = t.height = l.height = 0;
          },
          afterFit: xr,
          isHorizontal: function () {
            return (
              "top" === this.options.position ||
              "bottom" === this.options.position
            );
          },
          draw: function () {
            var t = this,
              e = t.options,
              n = e.labels,
              r = R.global,
              i = r.defaultColor,
              a = r.elements.line,
              o = t.height,
              s = t.columnHeights,
              l = t.width,
              u = t.lineWidths;
            if (e.display) {
              var c,
                h = br(e.rtl, t.left, t.minSize.width),
                d = t.ctx,
                f = _r(n.fontColor, r.defaultFontColor),
                p = j.options._parseFont(n),
                g = p.size;
              (d.textAlign = h.textAlign("left")),
                (d.textBaseline = "middle"),
                (d.lineWidth = 0.5),
                (d.strokeStyle = f),
                (d.fillStyle = f),
                (d.font = p.string);
              var m = wr(n, g),
                v = t.legendHitBoxes,
                y = function (t, r) {
                  switch (e.align) {
                    case "start":
                      return n.padding;
                    case "end":
                      return t - r;
                    default:
                      return (t - r + n.padding) / 2;
                  }
                },
                b = t.isHorizontal();
              (c = b
                ? { x: t.left + y(l, u[0]), y: t.top + n.padding, line: 0 }
                : { x: t.left + n.padding, y: t.top + y(o, s[0]), line: 0 }),
                j.rtl.overrideTextDirection(t.ctx, e.textDirection);
              var x = g + n.padding;
              j.each(t.legendItems, function (e, r) {
                var f = d.measureText(e.text).width,
                  p = m + g / 2 + f,
                  _ = c.x,
                  w = c.y;
                h.setWidth(t.minSize.width),
                  b
                    ? r > 0 &&
                      _ + p + n.padding > t.left + t.minSize.width &&
                      ((w = c.y += x),
                      c.line++,
                      (_ = c.x = t.left + y(l, u[c.line])))
                    : r > 0 &&
                      w + x > t.top + t.minSize.height &&
                      ((_ = c.x = _ + t.columnWidths[c.line] + n.padding),
                      c.line++,
                      (w = c.y = t.top + y(o, s[c.line])));
                var k = h.x(_);
                !(function (t, e, r) {
                  if (!(isNaN(m) || m <= 0)) {
                    d.save();
                    var o = _r(r.lineWidth, a.borderWidth);
                    if (
                      ((d.fillStyle = _r(r.fillStyle, i)),
                      (d.lineCap = _r(r.lineCap, a.borderCapStyle)),
                      (d.lineDashOffset = _r(
                        r.lineDashOffset,
                        a.borderDashOffset,
                      )),
                      (d.lineJoin = _r(r.lineJoin, a.borderJoinStyle)),
                      (d.lineWidth = o),
                      (d.strokeStyle = _r(r.strokeStyle, i)),
                      d.setLineDash &&
                        d.setLineDash(_r(r.lineDash, a.borderDash)),
                      n && n.usePointStyle)
                    ) {
                      var s = (m * Math.SQRT2) / 2,
                        l = h.xPlus(t, m / 2),
                        u = e + g / 2;
                      j.canvas.drawPoint(d, r.pointStyle, s, l, u, r.rotation);
                    } else
                      d.fillRect(h.leftForLtr(t, m), e, m, g),
                        0 !== o && d.strokeRect(h.leftForLtr(t, m), e, m, g);
                    d.restore();
                  }
                })(k, w, e),
                  (v[r].left = h.leftForLtr(k, v[r].width)),
                  (v[r].top = w),
                  (function (t, e, n, r) {
                    var i = g / 2,
                      a = h.xPlus(t, m + i),
                      o = e + i;
                    d.fillText(n.text, a, o),
                      n.hidden &&
                        (d.beginPath(),
                        (d.lineWidth = 2),
                        d.moveTo(a, o),
                        d.lineTo(h.xPlus(a, r), o),
                        d.stroke());
                  })(k, w, e, f),
                  b ? (c.x += p + n.padding) : (c.y += x);
              }),
                j.rtl.restoreTextDirection(t.ctx, e.textDirection);
            }
          },
          _getLegendItemAt: function (t, e) {
            var n,
              r,
              i,
              a = this;
            if (t >= a.left && t <= a.right && e >= a.top && e <= a.bottom)
              for (i = a.legendHitBoxes, n = 0; n < i.length; ++n)
                if (
                  t >= (r = i[n]).left &&
                  t <= r.left + r.width &&
                  e >= r.top &&
                  e <= r.top + r.height
                )
                  return a.legendItems[n];
            return null;
          },
          handleEvent: function (t) {
            var e,
              n = this,
              r = n.options,
              i = "mouseup" === t.type ? "click" : t.type;
            if ("mousemove" === i) {
              if (!r.onHover && !r.onLeave) return;
            } else {
              if ("click" !== i) return;
              if (!r.onClick) return;
            }
            (e = n._getLegendItemAt(t.x, t.y)),
              "click" === i
                ? e && r.onClick && r.onClick.call(n, t.native, e)
                : (r.onLeave &&
                    e !== n._hoveredItem &&
                    (n._hoveredItem &&
                      r.onLeave.call(n, t.native, n._hoveredItem),
                    (n._hoveredItem = e)),
                  r.onHover && e && r.onHover.call(n, t.native, e));
          },
        });
        function Mr(t, e) {
          var n = new kr({ ctx: t.ctx, options: e, chart: t });
          fe.configure(t, n, e), fe.addBox(t, n), (t.legend = n);
        }
        var Sr = {
            id: "legend",
            _element: kr,
            beforeInit: function (t) {
              var e = t.options.legend;
              e && Mr(t, e);
            },
            beforeUpdate: function (t) {
              var e = t.options.legend,
                n = t.legend;
              e
                ? (j.mergeIf(e, R.global.legend),
                  n ? (fe.configure(t, n, e), (n.options = e)) : Mr(t, e))
                : n && (fe.removeBox(t, n), delete t.legend);
            },
            afterEvent: function (t, e) {
              var n = t.legend;
              n && n.handleEvent(e);
            },
          },
          Dr = j.noop;
        R._set("global", {
          title: {
            display: !1,
            fontStyle: "bold",
            fullWidth: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3,
          },
        });
        var Cr = q.extend({
          initialize: function (t) {
            j.extend(this, t), (this.legendHitBoxes = []);
          },
          beforeUpdate: Dr,
          update: function (t, e, n) {
            var r = this;
            return (
              r.beforeUpdate(),
              (r.maxWidth = t),
              (r.maxHeight = e),
              (r.margins = n),
              r.beforeSetDimensions(),
              r.setDimensions(),
              r.afterSetDimensions(),
              r.beforeBuildLabels(),
              r.buildLabels(),
              r.afterBuildLabels(),
              r.beforeFit(),
              r.fit(),
              r.afterFit(),
              r.afterUpdate(),
              r.minSize
            );
          },
          afterUpdate: Dr,
          beforeSetDimensions: Dr,
          setDimensions: function () {
            var t = this;
            t.isHorizontal()
              ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
              : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
              (t.paddingLeft = 0),
              (t.paddingTop = 0),
              (t.paddingRight = 0),
              (t.paddingBottom = 0),
              (t.minSize = { width: 0, height: 0 });
          },
          afterSetDimensions: Dr,
          beforeBuildLabels: Dr,
          buildLabels: Dr,
          afterBuildLabels: Dr,
          beforeFit: Dr,
          fit: function () {
            var t,
              e = this,
              n = e.options,
              r = (e.minSize = {}),
              i = e.isHorizontal();
            n.display
              ? ((t =
                  (j.isArray(n.text) ? n.text.length : 1) *
                    j.options._parseFont(n).lineHeight +
                  2 * n.padding),
                (e.width = r.width = i ? e.maxWidth : t),
                (e.height = r.height = i ? t : e.maxHeight))
              : (e.width = r.width = e.height = r.height = 0);
          },
          afterFit: Dr,
          isHorizontal: function () {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
          },
          draw: function () {
            var t = this,
              e = t.ctx,
              n = t.options;
            if (n.display) {
              var r,
                i,
                a,
                o = j.options._parseFont(n),
                s = o.lineHeight,
                l = s / 2 + n.padding,
                u = 0,
                c = t.top,
                h = t.left,
                d = t.bottom,
                f = t.right;
              (e.fillStyle = j.valueOrDefault(
                n.fontColor,
                R.global.defaultFontColor,
              )),
                (e.font = o.string),
                t.isHorizontal()
                  ? ((i = h + (f - h) / 2), (a = c + l), (r = f - h))
                  : ((i = "left" === n.position ? h + l : f - l),
                    (a = c + (d - c) / 2),
                    (r = d - c),
                    (u = Math.PI * ("left" === n.position ? -0.5 : 0.5))),
                e.save(),
                e.translate(i, a),
                e.rotate(u),
                (e.textAlign = "center"),
                (e.textBaseline = "middle");
              var p = n.text;
              if (j.isArray(p))
                for (var g = 0, m = 0; m < p.length; ++m)
                  e.fillText(p[m], 0, g, r), (g += s);
              else e.fillText(p, 0, 0, r);
              e.restore();
            }
          },
        });
        function Pr(t, e) {
          var n = new Cr({ ctx: t.ctx, options: e, chart: t });
          fe.configure(t, n, e), fe.addBox(t, n), (t.titleBlock = n);
        }
        var Tr = {},
          Or = yr,
          Ar = Sr,
          Ir = {
            id: "title",
            _element: Cr,
            beforeInit: function (t) {
              var e = t.options.title;
              e && Pr(t, e);
            },
            beforeUpdate: function (t) {
              var e = t.options.title,
                n = t.titleBlock;
              e
                ? (j.mergeIf(e, R.global.title),
                  n ? (fe.configure(t, n, e), (n.options = e)) : Pr(t, e))
                : n && (fe.removeBox(t, n), delete t.titleBlock);
            },
          };
        for (var Fr in ((Tr.filler = Or),
        (Tr.legend = Ar),
        (Tr.title = Ir),
        (Ke.helpers = j),
        (function () {
          function t(t, e, n) {
            var r;
            return (
              "string" === typeof t
                ? ((r = parseInt(t, 10)),
                  -1 !== t.indexOf("%") && (r = (r / 100) * e.parentNode[n]))
                : (r = t),
              r
            );
          }
          function e(t) {
            return void 0 !== t && null !== t && "none" !== t;
          }
          function n(n, r, i) {
            var a = document.defaultView,
              o = j._getParentNode(n),
              s = a.getComputedStyle(n)[r],
              l = a.getComputedStyle(o)[r],
              u = e(s),
              c = e(l),
              h = Number.POSITIVE_INFINITY;
            return u || c
              ? Math.min(u ? t(s, n, i) : h, c ? t(l, o, i) : h)
              : "none";
          }
          (j.where = function (t, e) {
            if (j.isArray(t) && Array.prototype.filter) return t.filter(e);
            var n = [];
            return (
              j.each(t, function (t) {
                e(t) && n.push(t);
              }),
              n
            );
          }),
            (j.findIndex = Array.prototype.findIndex
              ? function (t, e, n) {
                  return t.findIndex(e, n);
                }
              : function (t, e, n) {
                  n = void 0 === n ? t : n;
                  for (var r = 0, i = t.length; r < i; ++r)
                    if (e.call(n, t[r], r, t)) return r;
                  return -1;
                }),
            (j.findNextWhere = function (t, e, n) {
              j.isNullOrUndef(n) && (n = -1);
              for (var r = n + 1; r < t.length; r++) {
                var i = t[r];
                if (e(i)) return i;
              }
            }),
            (j.findPreviousWhere = function (t, e, n) {
              j.isNullOrUndef(n) && (n = t.length);
              for (var r = n - 1; r >= 0; r--) {
                var i = t[r];
                if (e(i)) return i;
              }
            }),
            (j.isNumber = function (t) {
              return !isNaN(parseFloat(t)) && isFinite(t);
            }),
            (j.almostEquals = function (t, e, n) {
              return Math.abs(t - e) < n;
            }),
            (j.almostWhole = function (t, e) {
              var n = Math.round(t);
              return n - e <= t && n + e >= t;
            }),
            (j.max = function (t) {
              return t.reduce(function (t, e) {
                return isNaN(e) ? t : Math.max(t, e);
              }, Number.NEGATIVE_INFINITY);
            }),
            (j.min = function (t) {
              return t.reduce(function (t, e) {
                return isNaN(e) ? t : Math.min(t, e);
              }, Number.POSITIVE_INFINITY);
            }),
            (j.sign = Math.sign
              ? function (t) {
                  return Math.sign(t);
                }
              : function (t) {
                  return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
                }),
            (j.toRadians = function (t) {
              return t * (Math.PI / 180);
            }),
            (j.toDegrees = function (t) {
              return t * (180 / Math.PI);
            }),
            (j._decimalPlaces = function (t) {
              if (j.isFinite(t)) {
                for (var e = 1, n = 0; Math.round(t * e) / e !== t; )
                  (e *= 10), n++;
                return n;
              }
            }),
            (j.getAngleFromPoint = function (t, e) {
              var n = e.x - t.x,
                r = e.y - t.y,
                i = Math.sqrt(n * n + r * r),
                a = Math.atan2(r, n);
              return (
                a < -0.5 * Math.PI && (a += 2 * Math.PI),
                { angle: a, distance: i }
              );
            }),
            (j.distanceBetweenPoints = function (t, e) {
              return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
            }),
            (j.aliasPixel = function (t) {
              return t % 2 === 0 ? 0 : 0.5;
            }),
            (j._alignPixel = function (t, e, n) {
              var r = t.currentDevicePixelRatio,
                i = n / 2;
              return Math.round((e - i) * r) / r + i;
            }),
            (j.splineCurve = function (t, e, n, r) {
              var i = t.skip ? e : t,
                a = e,
                o = n.skip ? e : n,
                s = Math.sqrt(Math.pow(a.x - i.x, 2) + Math.pow(a.y - i.y, 2)),
                l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                u = s / (s + l),
                c = l / (s + l),
                h = r * (u = isNaN(u) ? 0 : u),
                d = r * (c = isNaN(c) ? 0 : c);
              return {
                previous: {
                  x: a.x - h * (o.x - i.x),
                  y: a.y - h * (o.y - i.y),
                },
                next: { x: a.x + d * (o.x - i.x), y: a.y + d * (o.y - i.y) },
              };
            }),
            (j.EPSILON = Number.EPSILON || 1e-14),
            (j.splineCurveMonotone = function (t) {
              var e,
                n,
                r,
                i,
                a,
                o,
                s,
                l,
                u,
                c = (t || []).map(function (t) {
                  return { model: t._model, deltaK: 0, mK: 0 };
                }),
                h = c.length;
              for (e = 0; e < h; ++e)
                if (!(r = c[e]).model.skip) {
                  if (
                    ((n = e > 0 ? c[e - 1] : null),
                    (i = e < h - 1 ? c[e + 1] : null) && !i.model.skip)
                  ) {
                    var d = i.model.x - r.model.x;
                    r.deltaK = 0 !== d ? (i.model.y - r.model.y) / d : 0;
                  }
                  !n || n.model.skip
                    ? (r.mK = r.deltaK)
                    : !i || i.model.skip
                      ? (r.mK = n.deltaK)
                      : this.sign(n.deltaK) !== this.sign(r.deltaK)
                        ? (r.mK = 0)
                        : (r.mK = (n.deltaK + r.deltaK) / 2);
                }
              for (e = 0; e < h - 1; ++e)
                (r = c[e]),
                  (i = c[e + 1]),
                  r.model.skip ||
                    i.model.skip ||
                    (j.almostEquals(r.deltaK, 0, this.EPSILON)
                      ? (r.mK = i.mK = 0)
                      : ((a = r.mK / r.deltaK),
                        (o = i.mK / r.deltaK),
                        (l = Math.pow(a, 2) + Math.pow(o, 2)) <= 9 ||
                          ((s = 3 / Math.sqrt(l)),
                          (r.mK = a * s * r.deltaK),
                          (i.mK = o * s * r.deltaK))));
              for (e = 0; e < h; ++e)
                (r = c[e]).model.skip ||
                  ((n = e > 0 ? c[e - 1] : null),
                  (i = e < h - 1 ? c[e + 1] : null),
                  n &&
                    !n.model.skip &&
                    ((u = (r.model.x - n.model.x) / 3),
                    (r.model.controlPointPreviousX = r.model.x - u),
                    (r.model.controlPointPreviousY = r.model.y - u * r.mK)),
                  i &&
                    !i.model.skip &&
                    ((u = (i.model.x - r.model.x) / 3),
                    (r.model.controlPointNextX = r.model.x + u),
                    (r.model.controlPointNextY = r.model.y + u * r.mK)));
            }),
            (j.nextItem = function (t, e, n) {
              return n
                ? e >= t.length - 1
                  ? t[0]
                  : t[e + 1]
                : e >= t.length - 1
                  ? t[t.length - 1]
                  : t[e + 1];
            }),
            (j.previousItem = function (t, e, n) {
              return n
                ? e <= 0
                  ? t[t.length - 1]
                  : t[e - 1]
                : e <= 0
                  ? t[0]
                  : t[e - 1];
            }),
            (j.niceNum = function (t, e) {
              var n = Math.floor(j.log10(t)),
                r = t / Math.pow(10, n);
              return (
                (e
                  ? r < 1.5
                    ? 1
                    : r < 3
                      ? 2
                      : r < 7
                        ? 5
                        : 10
                  : r <= 1
                    ? 1
                    : r <= 2
                      ? 2
                      : r <= 5
                        ? 5
                        : 10) * Math.pow(10, n)
              );
            }),
            (j.requestAnimFrame =
              "undefined" === typeof window
                ? function (t) {
                    t();
                  }
                : window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function (t) {
                    return window.setTimeout(t, 1e3 / 60);
                  }),
            (j.getRelativePosition = function (t, e) {
              var n,
                r,
                i = t.originalEvent || t,
                a = t.target || t.srcElement,
                o = a.getBoundingClientRect(),
                s = i.touches;
              s && s.length > 0
                ? ((n = s[0].clientX), (r = s[0].clientY))
                : ((n = i.clientX), (r = i.clientY));
              var l = parseFloat(j.getStyle(a, "padding-left")),
                u = parseFloat(j.getStyle(a, "padding-top")),
                c = parseFloat(j.getStyle(a, "padding-right")),
                h = parseFloat(j.getStyle(a, "padding-bottom")),
                d = o.right - o.left - l - c,
                f = o.bottom - o.top - u - h;
              return {
                x: (n = Math.round(
                  (((n - o.left - l) / d) * a.width) /
                    e.currentDevicePixelRatio,
                )),
                y: (r = Math.round(
                  (((r - o.top - u) / f) * a.height) /
                    e.currentDevicePixelRatio,
                )),
              };
            }),
            (j.getConstraintWidth = function (t) {
              return n(t, "max-width", "clientWidth");
            }),
            (j.getConstraintHeight = function (t) {
              return n(t, "max-height", "clientHeight");
            }),
            (j._calculatePadding = function (t, e, n) {
              return (e = j.getStyle(t, e)).indexOf("%") > -1
                ? (n * parseInt(e, 10)) / 100
                : parseInt(e, 10);
            }),
            (j._getParentNode = function (t) {
              var e = t.parentNode;
              return (
                e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
              );
            }),
            (j.getMaximumWidth = function (t) {
              var e = j._getParentNode(t);
              if (!e) return t.clientWidth;
              var n = e.clientWidth,
                r =
                  n -
                  j._calculatePadding(e, "padding-left", n) -
                  j._calculatePadding(e, "padding-right", n),
                i = j.getConstraintWidth(t);
              return isNaN(i) ? r : Math.min(r, i);
            }),
            (j.getMaximumHeight = function (t) {
              var e = j._getParentNode(t);
              if (!e) return t.clientHeight;
              var n = e.clientHeight,
                r =
                  n -
                  j._calculatePadding(e, "padding-top", n) -
                  j._calculatePadding(e, "padding-bottom", n),
                i = j.getConstraintHeight(t);
              return isNaN(i) ? r : Math.min(r, i);
            }),
            (j.getStyle = function (t, e) {
              return t.currentStyle
                ? t.currentStyle[e]
                : document.defaultView
                    .getComputedStyle(t, null)
                    .getPropertyValue(e);
            }),
            (j.retinaScale = function (t, e) {
              var n = (t.currentDevicePixelRatio =
                e ||
                ("undefined" !== typeof window && window.devicePixelRatio) ||
                1);
              if (1 !== n) {
                var r = t.canvas,
                  i = t.height,
                  a = t.width;
                (r.height = i * n),
                  (r.width = a * n),
                  t.ctx.scale(n, n),
                  r.style.height ||
                    r.style.width ||
                    ((r.style.height = i + "px"), (r.style.width = a + "px"));
              }
            }),
            (j.fontString = function (t, e, n) {
              return e + " " + t + "px " + n;
            }),
            (j.longestText = function (t, e, n, r) {
              var i = ((r = r || {}).data = r.data || {}),
                a = (r.garbageCollect = r.garbageCollect || []);
              r.font !== e &&
                ((i = r.data = {}), (a = r.garbageCollect = []), (r.font = e)),
                (t.font = e);
              var o,
                s,
                l,
                u,
                c,
                h = 0,
                d = n.length;
              for (o = 0; o < d; o++)
                if (void 0 !== (u = n[o]) && null !== u && !0 !== j.isArray(u))
                  h = j.measureText(t, i, a, h, u);
                else if (j.isArray(u))
                  for (s = 0, l = u.length; s < l; s++)
                    void 0 === (c = u[s]) ||
                      null === c ||
                      j.isArray(c) ||
                      (h = j.measureText(t, i, a, h, c));
              var f = a.length / 2;
              if (f > n.length) {
                for (o = 0; o < f; o++) delete i[a[o]];
                a.splice(0, f);
              }
              return h;
            }),
            (j.measureText = function (t, e, n, r, i) {
              var a = e[i];
              return (
                a || ((a = e[i] = t.measureText(i).width), n.push(i)),
                a > r && (r = a),
                r
              );
            }),
            (j.numberOfLabelLines = function (t) {
              var e = 1;
              return (
                j.each(t, function (t) {
                  j.isArray(t) && t.length > e && (e = t.length);
                }),
                e
              );
            }),
            (j.color = _
              ? function (t) {
                  return (
                    t instanceof CanvasGradient && (t = R.global.defaultColor),
                    _(t)
                  );
                }
              : function (t) {
                  return console.error("Color.js not found!"), t;
                }),
            (j.getHoverColor = function (t) {
              return t instanceof CanvasPattern || t instanceof CanvasGradient
                ? t
                : j.color(t).saturate(0.5).darken(0.1).rgbString();
            });
        })(),
        (Ke._adapters = Qe),
        (Ke.Animation = Z),
        (Ke.animationService = K),
        (Ke.controllers = Kt),
        (Ke.DatasetController = et),
        (Ke.defaults = R),
        (Ke.Element = q),
        (Ke.elements = xt),
        (Ke.Interaction = re),
        (Ke.layouts = fe),
        (Ke.platform = Ce),
        (Ke.plugins = Pe),
        (Ke.Scale = gn),
        (Ke.scaleService = Te),
        (Ke.Ticks = tn),
        (Ke.Tooltip = Ye),
        Ke.helpers.each(lr, function (t, e) {
          Ke.scaleService.registerScaleType(e, t, t._defaults);
        }),
        Tr))
          Tr.hasOwnProperty(Fr) && Ke.plugins.register(Tr[Fr]);
        Ke.platform.initialize();
        var Lr = Ke;
        return (
          "undefined" !== typeof window && (window.Chart = Ke),
          (Ke.Chart = Ke),
          (Ke.Legend = Tr.legend._element),
          (Ke.Title = Tr.title._element),
          (Ke.pluginService = Ke.plugins),
          (Ke.PluginBase = Ke.Element.extend({})),
          (Ke.canvasHelpers = Ke.helpers.canvas),
          (Ke.layoutService = Ke.layouts),
          (Ke.LinearScaleBase = _n),
          Ke.helpers.each(
            [
              "Bar",
              "Bubble",
              "Doughnut",
              "Line",
              "PolarArea",
              "Radar",
              "Scatter",
            ],
            function (t) {
              Ke[t] = function (e, n) {
                return new Ke(
                  e,
                  Ke.helpers.merge(n || {}, {
                    type: t.charAt(0).toLowerCase() + t.slice(1),
                  }),
                );
              };
            },
          ),
          Lr
        );
      })(
        (function () {
          try {
            return n(194);
          } catch (t) {}
        })(),
      );
    },
    function (t, e, n) {
      var r = n(129),
        i = n(202),
        a = n(203),
        o = n(204),
        s = n(205),
        l = n(206);
      function u(t) {
        var e = (this.__data__ = new r(t));
        this.size = e.size;
      }
      (u.prototype.clear = i),
        (u.prototype.delete = a),
        (u.prototype.get = o),
        (u.prototype.has = s),
        (u.prototype.set = l),
        (t.exports = u);
    },
    function (t, e) {
      t.exports = function (t, e) {
        return t === e || (t !== t && e !== e);
      };
    },
    function (t, e, n) {
      var r = n(124),
        i = n(140);
      t.exports = function (t) {
        if (!i(t)) return !1;
        var e = r(t);
        return (
          "[object Function]" == e ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      };
    },
    function (t, e, n) {
      (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n;
      }).call(this, n(79));
    },
    function (t, e) {
      var n = Function.prototype.toString;
      t.exports = function (t) {
        if (null != t) {
          try {
            return n.call(t);
          } catch (e) {}
          try {
            return t + "";
          } catch (e) {}
        }
        return "";
      };
    },
    function (t, e, n) {
      var r = n(225),
        i = n(228),
        a = n(229);
      t.exports = function (t, e, n, o, s, l) {
        var u = 1 & n,
          c = t.length,
          h = e.length;
        if (c != h && !(u && h > c)) return !1;
        var d = l.get(t);
        if (d && l.get(e)) return d == e;
        var f = -1,
          p = !0,
          g = 2 & n ? new r() : void 0;
        for (l.set(t, e), l.set(e, t); ++f < c; ) {
          var m = t[f],
            v = e[f];
          if (o) var y = u ? o(v, m, f, e, t, l) : o(m, v, f, t, e, l);
          if (void 0 !== y) {
            if (y) continue;
            p = !1;
            break;
          }
          if (g) {
            if (
              !i(e, function (t, e) {
                if (!a(g, e) && (m === t || s(m, t, n, o, l))) return g.push(e);
              })
            ) {
              p = !1;
              break;
            }
          } else if (m !== v && !s(m, v, n, o, l)) {
            p = !1;
            break;
          }
        }
        return l.delete(t), l.delete(e), p;
      };
    },
    function (t, e, n) {
      var r = n(243),
        i = n(125),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        l = r(
          (function () {
            return arguments;
          })(),
        )
          ? r
          : function (t) {
              return i(t) && o.call(t, "callee") && !s.call(t, "callee");
            };
      t.exports = l;
    },
    function (t, e, n) {
      (function (t) {
        var r = n(121),
          i = n(244),
          a = e && !e.nodeType && e,
          o = a && "object" == typeof t && t && !t.nodeType && t,
          s = o && o.exports === a ? r.Buffer : void 0,
          l = (s ? s.isBuffer : void 0) || i;
        t.exports = l;
      }).call(this, n(128)(t));
    },
    function (t, e) {
      var n = /^(?:0|[1-9]\d*)$/;
      t.exports = function (t, e) {
        var r = typeof t;
        return (
          !!(e = null == e ? 9007199254740991 : e) &&
          ("number" == r || ("symbol" != r && n.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      };
    },
    function (t, e, n) {
      var r = n(245),
        i = n(246),
        a = n(247),
        o = a && a.isTypedArray,
        s = o ? i(o) : r;
      t.exports = s;
    },
    function (t, e, n) {
      var r = n(157),
        i = n(143);
      t.exports = function (t) {
        return null != t && i(t.length) && !r(t);
      };
    },
    function (t, e, n) {
      var r = n(140);
      t.exports = function (t) {
        return t === t && !r(t);
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return function (n) {
          return null != n && n[t] === e && (void 0 !== e || t in Object(n));
        };
      };
    },
    function (t, e, n) {
      var r = n(169),
        i = n(134);
      t.exports = function (t, e) {
        for (var n = 0, a = (e = r(e, t)).length; null != t && n < a; )
          t = t[i(e[n++])];
        return n && n == a ? t : void 0;
      };
    },
    function (t, e, n) {
      var r = n(122),
        i = n(144),
        a = n(274),
        o = n(277);
      t.exports = function (t, e) {
        return r(t) ? t : i(t, e) ? [t] : a(o(t));
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e) {
      var n,
        r,
        i = (t.exports = {});
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === a || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" === typeof setTimeout ? setTimeout : a;
        } catch (t) {
          n = a;
        }
        try {
          r = "function" === typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          r = o;
        }
      })();
      var l,
        u = [],
        c = !1,
        h = -1;
      function d() {
        c &&
          l &&
          ((c = !1), l.length ? (u = l.concat(u)) : (h = -1), u.length && f());
      }
      function f() {
        if (!c) {
          var t = s(d);
          c = !0;
          for (var e = u.length; e; ) {
            for (l = u, u = []; ++h < e; ) l && l[h].run();
            (h = -1), (e = u.length);
          }
          (l = null),
            (c = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === o || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function g() {}
      (i.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new p(t, e)), 1 !== u.length || c || s(f);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = g),
        (i.addListener = g),
        (i.once = g),
        (i.off = g),
        (i.removeListener = g),
        (i.removeAllListeners = g),
        (i.emit = g),
        (i.prependListener = g),
        (i.prependOnceListener = g),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (t, e, n) {
      (function (t) {
        t.exports = (function () {
          "use strict";
          var e, n;
          function r() {
            return e.apply(null, arguments);
          }
          function i(t) {
            return (
              t instanceof Array ||
              "[object Array]" === Object.prototype.toString.call(t)
            );
          }
          function a(t) {
            return (
              null != t &&
              "[object Object]" === Object.prototype.toString.call(t)
            );
          }
          function o(t) {
            return void 0 === t;
          }
          function s(t) {
            return (
              "number" === typeof t ||
              "[object Number]" === Object.prototype.toString.call(t)
            );
          }
          function l(t) {
            return (
              t instanceof Date ||
              "[object Date]" === Object.prototype.toString.call(t)
            );
          }
          function u(t, e) {
            var n,
              r = [];
            for (n = 0; n < t.length; ++n) r.push(e(t[n], n));
            return r;
          }
          function c(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          function h(t, e) {
            for (var n in e) c(e, n) && (t[n] = e[n]);
            return (
              c(e, "toString") && (t.toString = e.toString),
              c(e, "valueOf") && (t.valueOf = e.valueOf),
              t
            );
          }
          function d(t, e, n, r) {
            return ke(t, e, n, r, !0).utc();
          }
          function f(t) {
            return (
              null == t._pf &&
                (t._pf = {
                  empty: !1,
                  unusedTokens: [],
                  unusedInput: [],
                  overflow: -2,
                  charsLeftOver: 0,
                  nullInput: !1,
                  invalidMonth: null,
                  invalidFormat: !1,
                  userInvalidated: !1,
                  iso: !1,
                  parsedDateParts: [],
                  meridiem: null,
                  rfc2822: !1,
                  weekdayMismatch: !1,
                }),
              t._pf
            );
          }
          function p(t) {
            if (null == t._isValid) {
              var e = f(t),
                r = n.call(e.parsedDateParts, function (t) {
                  return null != t;
                }),
                i =
                  !isNaN(t._d.getTime()) &&
                  e.overflow < 0 &&
                  !e.empty &&
                  !e.invalidMonth &&
                  !e.invalidWeekday &&
                  !e.weekdayMismatch &&
                  !e.nullInput &&
                  !e.invalidFormat &&
                  !e.userInvalidated &&
                  (!e.meridiem || (e.meridiem && r));
              if (
                (t._strict &&
                  (i =
                    i &&
                    0 === e.charsLeftOver &&
                    0 === e.unusedTokens.length &&
                    void 0 === e.bigHour),
                null != Object.isFrozen && Object.isFrozen(t))
              )
                return i;
              t._isValid = i;
            }
            return t._isValid;
          }
          function g(t) {
            var e = d(NaN);
            return null != t ? h(f(e), t) : (f(e).userInvalidated = !0), e;
          }
          n = Array.prototype.some
            ? Array.prototype.some
            : function (t) {
                for (
                  var e = Object(this), n = e.length >>> 0, r = 0;
                  r < n;
                  r++
                )
                  if (r in e && t.call(this, e[r], r, e)) return !0;
                return !1;
              };
          var m = (r.momentProperties = []);
          function v(t, e) {
            var n, r, i;
            if (
              (o(e._isAMomentObject) ||
                (t._isAMomentObject = e._isAMomentObject),
              o(e._i) || (t._i = e._i),
              o(e._f) || (t._f = e._f),
              o(e._l) || (t._l = e._l),
              o(e._strict) || (t._strict = e._strict),
              o(e._tzm) || (t._tzm = e._tzm),
              o(e._isUTC) || (t._isUTC = e._isUTC),
              o(e._offset) || (t._offset = e._offset),
              o(e._pf) || (t._pf = f(e)),
              o(e._locale) || (t._locale = e._locale),
              m.length > 0)
            )
              for (n = 0; n < m.length; n++)
                o((i = e[(r = m[n])])) || (t[r] = i);
            return t;
          }
          var y = !1;
          function b(t) {
            v(this, t),
              (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === y && ((y = !0), r.updateOffset(this), (y = !1));
          }
          function x(t) {
            return t instanceof b || (null != t && null != t._isAMomentObject);
          }
          function _(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
          }
          function w(t) {
            var e = +t,
              n = 0;
            return 0 !== e && isFinite(e) && (n = _(e)), n;
          }
          function k(t, e, n) {
            var r,
              i = Math.min(t.length, e.length),
              a = Math.abs(t.length - e.length),
              o = 0;
            for (r = 0; r < i; r++)
              ((n && t[r] !== e[r]) || (!n && w(t[r]) !== w(e[r]))) && o++;
            return o + a;
          }
          function M(t) {
            !1 === r.suppressDeprecationWarnings &&
              "undefined" !== typeof console &&
              console.warn &&
              console.warn("Deprecation warning: " + t);
          }
          function S(t, e) {
            var n = !0;
            return h(function () {
              if (
                (null != r.deprecationHandler && r.deprecationHandler(null, t),
                n)
              ) {
                for (var i, a = [], o = 0; o < arguments.length; o++) {
                  if (((i = ""), "object" === typeof arguments[o])) {
                    for (var s in ((i += "\n[" + o + "] "), arguments[0]))
                      i += s + ": " + arguments[0][s] + ", ";
                    i = i.slice(0, -2);
                  } else i = arguments[o];
                  a.push(i);
                }
                M(
                  t +
                    "\nArguments: " +
                    Array.prototype.slice.call(a).join("") +
                    "\n" +
                    new Error().stack,
                ),
                  (n = !1);
              }
              return e.apply(this, arguments);
            }, e);
          }
          var D,
            C = {};
          function P(t, e) {
            null != r.deprecationHandler && r.deprecationHandler(t, e),
              C[t] || (M(e), (C[t] = !0));
          }
          function T(t) {
            return (
              t instanceof Function ||
              "[object Function]" === Object.prototype.toString.call(t)
            );
          }
          function O(t, e) {
            var n,
              r = h({}, t);
            for (n in e)
              c(e, n) &&
                (a(t[n]) && a(e[n])
                  ? ((r[n] = {}), h(r[n], t[n]), h(r[n], e[n]))
                  : null != e[n]
                    ? (r[n] = e[n])
                    : delete r[n]);
            for (n in t) c(t, n) && !c(e, n) && a(t[n]) && (r[n] = h({}, r[n]));
            return r;
          }
          function A(t) {
            null != t && this.set(t);
          }
          (r.suppressDeprecationWarnings = !1),
            (r.deprecationHandler = null),
            (D = Object.keys
              ? Object.keys
              : function (t) {
                  var e,
                    n = [];
                  for (e in t) c(t, e) && n.push(e);
                  return n;
                });
          var I = {};
          function F(t, e) {
            var n = t.toLowerCase();
            I[n] = I[n + "s"] = I[e] = t;
          }
          function L(t) {
            return "string" === typeof t ? I[t] || I[t.toLowerCase()] : void 0;
          }
          function R(t) {
            var e,
              n,
              r = {};
            for (n in t) c(t, n) && (e = L(n)) && (r[e] = t[n]);
            return r;
          }
          var E = {};
          function N(t, e) {
            E[t] = e;
          }
          function W(t, e, n) {
            var r = "" + Math.abs(t),
              i = e - r.length;
            return (
              (t >= 0 ? (n ? "+" : "") : "-") +
              Math.pow(10, Math.max(0, i)).toString().substr(1) +
              r
            );
          }
          var z =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            j = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Y = {},
            V = {};
          function B(t, e, n, r) {
            var i = r;
            "string" === typeof r &&
              (i = function () {
                return this[r]();
              }),
              t && (V[t] = i),
              e &&
                (V[e[0]] = function () {
                  return W(i.apply(this, arguments), e[1], e[2]);
                }),
              n &&
                (V[n] = function () {
                  return this.localeData().ordinal(i.apply(this, arguments), t);
                });
          }
          function H(t, e) {
            return t.isValid()
              ? ((e = U(e, t.localeData())),
                (Y[e] =
                  Y[e] ||
                  (function (t) {
                    var e,
                      n,
                      r,
                      i = t.match(z);
                    for (e = 0, n = i.length; e < n; e++)
                      V[i[e]]
                        ? (i[e] = V[i[e]])
                        : (i[e] = (r = i[e]).match(/\[[\s\S]/)
                            ? r.replace(/^\[|\]$/g, "")
                            : r.replace(/\\/g, ""));
                    return function (e) {
                      var r,
                        a = "";
                      for (r = 0; r < n; r++)
                        a += T(i[r]) ? i[r].call(e, t) : i[r];
                      return a;
                    };
                  })(e)),
                Y[e](t))
              : t.localeData().invalidDate();
          }
          function U(t, e) {
            var n = 5;
            function r(t) {
              return e.longDateFormat(t) || t;
            }
            for (j.lastIndex = 0; n >= 0 && j.test(t); )
              (t = t.replace(j, r)), (j.lastIndex = 0), (n -= 1);
            return t;
          }
          var G = /\d/,
            q = /\d\d/,
            $ = /\d{3}/,
            Z = /\d{4}/,
            K = /[+-]?\d{6}/,
            X = /\d\d?/,
            J = /\d\d\d\d?/,
            Q = /\d\d\d\d\d\d?/,
            tt = /\d{1,3}/,
            et = /\d{1,4}/,
            nt = /[+-]?\d{1,6}/,
            rt = /\d+/,
            it = /[+-]?\d+/,
            at = /Z|[+-]\d\d:?\d\d/gi,
            ot = /Z|[+-]\d\d(?::?\d\d)?/gi,
            st =
              /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            lt = {};
          function ut(t, e, n) {
            lt[t] = T(e)
              ? e
              : function (t, r) {
                  return t && n ? n : e;
                };
          }
          function ct(t, e) {
            return c(lt, t)
              ? lt[t](e._strict, e._locale)
              : new RegExp(
                  ht(
                    t
                      .replace("\\", "")
                      .replace(
                        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                        function (t, e, n, r, i) {
                          return e || n || r || i;
                        },
                      ),
                  ),
                );
          }
          function ht(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          var dt = {};
          function ft(t, e) {
            var n,
              r = e;
            for (
              "string" === typeof t && (t = [t]),
                s(e) &&
                  (r = function (t, n) {
                    n[e] = w(t);
                  }),
                n = 0;
              n < t.length;
              n++
            )
              dt[t[n]] = r;
          }
          function pt(t, e) {
            ft(t, function (t, n, r, i) {
              (r._w = r._w || {}), e(t, r._w, r, i);
            });
          }
          function gt(t, e, n) {
            null != e && c(dt, t) && dt[t](e, n._a, n, t);
          }
          function mt(t) {
            return vt(t) ? 366 : 365;
          }
          function vt(t) {
            return (t % 4 === 0 && t % 100 !== 0) || t % 400 === 0;
          }
          B("Y", 0, 0, function () {
            var t = this.year();
            return t <= 9999 ? "" + t : "+" + t;
          }),
            B(0, ["YY", 2], 0, function () {
              return this.year() % 100;
            }),
            B(0, ["YYYY", 4], 0, "year"),
            B(0, ["YYYYY", 5], 0, "year"),
            B(0, ["YYYYYY", 6, !0], 0, "year"),
            F("year", "y"),
            N("year", 1),
            ut("Y", it),
            ut("YY", X, q),
            ut("YYYY", et, Z),
            ut("YYYYY", nt, K),
            ut("YYYYYY", nt, K),
            ft(["YYYYY", "YYYYYY"], 0),
            ft("YYYY", function (t, e) {
              e[0] = 2 === t.length ? r.parseTwoDigitYear(t) : w(t);
            }),
            ft("YY", function (t, e) {
              e[0] = r.parseTwoDigitYear(t);
            }),
            ft("Y", function (t, e) {
              e[0] = parseInt(t, 10);
            }),
            (r.parseTwoDigitYear = function (t) {
              return w(t) + (w(t) > 68 ? 1900 : 2e3);
            });
          var yt,
            bt = xt("FullYear", !0);
          function xt(t, e) {
            return function (n) {
              return null != n
                ? (wt(this, t, n), r.updateOffset(this, e), this)
                : _t(this, t);
            };
          }
          function _t(t, e) {
            return t.isValid()
              ? t._d["get" + (t._isUTC ? "UTC" : "") + e]()
              : NaN;
          }
          function wt(t, e, n) {
            t.isValid() &&
              !isNaN(n) &&
              ("FullYear" === e &&
              vt(t.year()) &&
              1 === t.month() &&
              29 === t.date()
                ? t._d["set" + (t._isUTC ? "UTC" : "") + e](
                    n,
                    t.month(),
                    kt(n, t.month()),
                  )
                : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
          }
          function kt(t, e) {
            if (isNaN(t) || isNaN(e)) return NaN;
            var n,
              r = ((e % (n = 12)) + n) % n;
            return (
              (t += (e - r) / 12),
              1 === r ? (vt(t) ? 29 : 28) : 31 - ((r % 7) % 2)
            );
          }
          (yt = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function (t) {
                var e;
                for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
                return -1;
              }),
            B("M", ["MM", 2], "Mo", function () {
              return this.month() + 1;
            }),
            B("MMM", 0, 0, function (t) {
              return this.localeData().monthsShort(this, t);
            }),
            B("MMMM", 0, 0, function (t) {
              return this.localeData().months(this, t);
            }),
            F("month", "M"),
            N("month", 8),
            ut("M", X),
            ut("MM", X, q),
            ut("MMM", function (t, e) {
              return e.monthsShortRegex(t);
            }),
            ut("MMMM", function (t, e) {
              return e.monthsRegex(t);
            }),
            ft(["M", "MM"], function (t, e) {
              e[1] = w(t) - 1;
            }),
            ft(["MMM", "MMMM"], function (t, e, n, r) {
              var i = n._locale.monthsParse(t, r, n._strict);
              null != i ? (e[1] = i) : (f(n).invalidMonth = t);
            });
          var Mt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            St =
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_",
              ),
            Dt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
          function Ct(t, e, n) {
            var r,
              i,
              a,
              o = t.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  r = 0;
                r < 12;
                ++r
              )
                (a = d([2e3, r])),
                  (this._shortMonthsParse[r] = this.monthsShort(
                    a,
                    "",
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[r] = this.months(
                    a,
                    "",
                  ).toLocaleLowerCase());
            return n
              ? "MMM" === e
                ? -1 !== (i = yt.call(this._shortMonthsParse, o))
                  ? i
                  : null
                : -1 !== (i = yt.call(this._longMonthsParse, o))
                  ? i
                  : null
              : "MMM" === e
                ? -1 !== (i = yt.call(this._shortMonthsParse, o)) ||
                  -1 !== (i = yt.call(this._longMonthsParse, o))
                  ? i
                  : null
                : -1 !== (i = yt.call(this._longMonthsParse, o)) ||
                    -1 !== (i = yt.call(this._shortMonthsParse, o))
                  ? i
                  : null;
          }
          function Pt(t, e) {
            var n;
            if (!t.isValid()) return t;
            if ("string" === typeof e)
              if (/^\d+$/.test(e)) e = w(e);
              else if (!s((e = t.localeData().monthsParse(e)))) return t;
            return (
              (n = Math.min(t.date(), kt(t.year(), e))),
              t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
              t
            );
          }
          function Tt(t) {
            return null != t
              ? (Pt(this, t), r.updateOffset(this, !0), this)
              : _t(this, "Month");
          }
          var Ot = st,
            At = st;
          function It() {
            function t(t, e) {
              return e.length - t.length;
            }
            var e,
              n,
              r = [],
              i = [],
              a = [];
            for (e = 0; e < 12; e++)
              (n = d([2e3, e])),
                r.push(this.monthsShort(n, "")),
                i.push(this.months(n, "")),
                a.push(this.months(n, "")),
                a.push(this.monthsShort(n, ""));
            for (r.sort(t), i.sort(t), a.sort(t), e = 0; e < 12; e++)
              (r[e] = ht(r[e])), (i[e] = ht(i[e]));
            for (e = 0; e < 24; e++) a[e] = ht(a[e]);
            (this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i",
              )),
              (this._monthsShortStrictRegex = new RegExp(
                "^(" + r.join("|") + ")",
                "i",
              ));
          }
          function Ft(t, e, n, r, i, a, o) {
            var s;
            return (
              t < 100 && t >= 0
                ? ((s = new Date(t + 400, e, n, r, i, a, o)),
                  isFinite(s.getFullYear()) && s.setFullYear(t))
                : (s = new Date(t, e, n, r, i, a, o)),
              s
            );
          }
          function Lt(t) {
            var e;
            if (t < 100 && t >= 0) {
              var n = Array.prototype.slice.call(arguments);
              (n[0] = t + 400),
                (e = new Date(Date.UTC.apply(null, n))),
                isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t);
            } else e = new Date(Date.UTC.apply(null, arguments));
            return e;
          }
          function Rt(t, e, n) {
            var r = 7 + e - n;
            return (-(7 + Lt(t, 0, r).getUTCDay() - e) % 7) + r - 1;
          }
          function Et(t, e, n, r, i) {
            var a,
              o,
              s = 1 + 7 * (e - 1) + ((7 + n - r) % 7) + Rt(t, r, i);
            return (
              s <= 0
                ? (o = mt((a = t - 1)) + s)
                : s > mt(t)
                  ? ((a = t + 1), (o = s - mt(t)))
                  : ((a = t), (o = s)),
              { year: a, dayOfYear: o }
            );
          }
          function Nt(t, e, n) {
            var r,
              i,
              a = Rt(t.year(), e, n),
              o = Math.floor((t.dayOfYear() - a - 1) / 7) + 1;
            return (
              o < 1
                ? (r = o + Wt((i = t.year() - 1), e, n))
                : o > Wt(t.year(), e, n)
                  ? ((r = o - Wt(t.year(), e, n)), (i = t.year() + 1))
                  : ((i = t.year()), (r = o)),
              { week: r, year: i }
            );
          }
          function Wt(t, e, n) {
            var r = Rt(t, e, n),
              i = Rt(t + 1, e, n);
            return (mt(t) - r + i) / 7;
          }
          function zt(t, e) {
            return t.slice(e, 7).concat(t.slice(0, e));
          }
          B("w", ["ww", 2], "wo", "week"),
            B("W", ["WW", 2], "Wo", "isoWeek"),
            F("week", "w"),
            F("isoWeek", "W"),
            N("week", 5),
            N("isoWeek", 5),
            ut("w", X),
            ut("ww", X, q),
            ut("W", X),
            ut("WW", X, q),
            pt(["w", "ww", "W", "WW"], function (t, e, n, r) {
              e[r.substr(0, 1)] = w(t);
            }),
            B("d", 0, "do", "day"),
            B("dd", 0, 0, function (t) {
              return this.localeData().weekdaysMin(this, t);
            }),
            B("ddd", 0, 0, function (t) {
              return this.localeData().weekdaysShort(this, t);
            }),
            B("dddd", 0, 0, function (t) {
              return this.localeData().weekdays(this, t);
            }),
            B("e", 0, 0, "weekday"),
            B("E", 0, 0, "isoWeekday"),
            F("day", "d"),
            F("weekday", "e"),
            F("isoWeekday", "E"),
            N("day", 11),
            N("weekday", 11),
            N("isoWeekday", 11),
            ut("d", X),
            ut("e", X),
            ut("E", X),
            ut("dd", function (t, e) {
              return e.weekdaysMinRegex(t);
            }),
            ut("ddd", function (t, e) {
              return e.weekdaysShortRegex(t);
            }),
            ut("dddd", function (t, e) {
              return e.weekdaysRegex(t);
            }),
            pt(["dd", "ddd", "dddd"], function (t, e, n, r) {
              var i = n._locale.weekdaysParse(t, r, n._strict);
              null != i ? (e.d = i) : (f(n).invalidWeekday = t);
            }),
            pt(["d", "e", "E"], function (t, e, n, r) {
              e[r] = w(t);
            });
          var jt =
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_",
              ),
            Yt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Vt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
          function Bt(t, e, n) {
            var r,
              i,
              a,
              o = t.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  r = 0;
                r < 7;
                ++r
              )
                (a = d([2e3, 1]).day(r)),
                  (this._minWeekdaysParse[r] = this.weekdaysMin(
                    a,
                    "",
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[r] = this.weekdaysShort(
                    a,
                    "",
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[r] = this.weekdays(
                    a,
                    "",
                  ).toLocaleLowerCase());
            return n
              ? "dddd" === e
                ? -1 !== (i = yt.call(this._weekdaysParse, o))
                  ? i
                  : null
                : "ddd" === e
                  ? -1 !== (i = yt.call(this._shortWeekdaysParse, o))
                    ? i
                    : null
                  : -1 !== (i = yt.call(this._minWeekdaysParse, o))
                    ? i
                    : null
              : "dddd" === e
                ? -1 !== (i = yt.call(this._weekdaysParse, o)) ||
                  -1 !== (i = yt.call(this._shortWeekdaysParse, o)) ||
                  -1 !== (i = yt.call(this._minWeekdaysParse, o))
                  ? i
                  : null
                : "ddd" === e
                  ? -1 !== (i = yt.call(this._shortWeekdaysParse, o)) ||
                    -1 !== (i = yt.call(this._weekdaysParse, o)) ||
                    -1 !== (i = yt.call(this._minWeekdaysParse, o))
                    ? i
                    : null
                  : -1 !== (i = yt.call(this._minWeekdaysParse, o)) ||
                      -1 !== (i = yt.call(this._weekdaysParse, o)) ||
                      -1 !== (i = yt.call(this._shortWeekdaysParse, o))
                    ? i
                    : null;
          }
          var Ht = st,
            Ut = st,
            Gt = st;
          function qt() {
            function t(t, e) {
              return e.length - t.length;
            }
            var e,
              n,
              r,
              i,
              a,
              o = [],
              s = [],
              l = [],
              u = [];
            for (e = 0; e < 7; e++)
              (n = d([2e3, 1]).day(e)),
                (r = this.weekdaysMin(n, "")),
                (i = this.weekdaysShort(n, "")),
                (a = this.weekdays(n, "")),
                o.push(r),
                s.push(i),
                l.push(a),
                u.push(r),
                u.push(i),
                u.push(a);
            for (o.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++)
              (s[e] = ht(s[e])), (l[e] = ht(l[e])), (u[e] = ht(u[e]));
            (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp(
                "^(" + l.join("|") + ")",
                "i",
              )),
              (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + s.join("|") + ")",
                "i",
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i",
              ));
          }
          function $t() {
            return this.hours() % 12 || 12;
          }
          function Zt(t, e) {
            B(t, 0, 0, function () {
              return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                e,
              );
            });
          }
          function Kt(t, e) {
            return e._meridiemParse;
          }
          B("H", ["HH", 2], 0, "hour"),
            B("h", ["hh", 2], 0, $t),
            B("k", ["kk", 2], 0, function () {
              return this.hours() || 24;
            }),
            B("hmm", 0, 0, function () {
              return "" + $t.apply(this) + W(this.minutes(), 2);
            }),
            B("hmmss", 0, 0, function () {
              return (
                "" +
                $t.apply(this) +
                W(this.minutes(), 2) +
                W(this.seconds(), 2)
              );
            }),
            B("Hmm", 0, 0, function () {
              return "" + this.hours() + W(this.minutes(), 2);
            }),
            B("Hmmss", 0, 0, function () {
              return (
                "" + this.hours() + W(this.minutes(), 2) + W(this.seconds(), 2)
              );
            }),
            Zt("a", !0),
            Zt("A", !1),
            F("hour", "h"),
            N("hour", 13),
            ut("a", Kt),
            ut("A", Kt),
            ut("H", X),
            ut("h", X),
            ut("k", X),
            ut("HH", X, q),
            ut("hh", X, q),
            ut("kk", X, q),
            ut("hmm", J),
            ut("hmmss", Q),
            ut("Hmm", J),
            ut("Hmmss", Q),
            ft(["H", "HH"], 3),
            ft(["k", "kk"], function (t, e, n) {
              var r = w(t);
              e[3] = 24 === r ? 0 : r;
            }),
            ft(["a", "A"], function (t, e, n) {
              (n._isPm = n._locale.isPM(t)), (n._meridiem = t);
            }),
            ft(["h", "hh"], function (t, e, n) {
              (e[3] = w(t)), (f(n).bigHour = !0);
            }),
            ft("hmm", function (t, e, n) {
              var r = t.length - 2;
              (e[3] = w(t.substr(0, r))),
                (e[4] = w(t.substr(r))),
                (f(n).bigHour = !0);
            }),
            ft("hmmss", function (t, e, n) {
              var r = t.length - 4,
                i = t.length - 2;
              (e[3] = w(t.substr(0, r))),
                (e[4] = w(t.substr(r, 2))),
                (e[5] = w(t.substr(i))),
                (f(n).bigHour = !0);
            }),
            ft("Hmm", function (t, e, n) {
              var r = t.length - 2;
              (e[3] = w(t.substr(0, r))), (e[4] = w(t.substr(r)));
            }),
            ft("Hmmss", function (t, e, n) {
              var r = t.length - 4,
                i = t.length - 2;
              (e[3] = w(t.substr(0, r))),
                (e[4] = w(t.substr(r, 2))),
                (e[5] = w(t.substr(i)));
            });
          var Xt,
            Jt = xt("Hours", !0),
            Qt = {
              calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L",
              },
              longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A",
              },
              invalidDate: "Invalid date",
              ordinal: "%d",
              dayOfMonthOrdinalParse: /\d{1,2}/,
              relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years",
              },
              months: St,
              monthsShort: Dt,
              week: { dow: 0, doy: 6 },
              weekdays: jt,
              weekdaysMin: Vt,
              weekdaysShort: Yt,
              meridiemParse: /[ap]\.?m?\.?/i,
            },
            te = {},
            ee = {};
          function ne(t) {
            return t ? t.toLowerCase().replace("_", "-") : t;
          }
          function re(e) {
            var n = null;
            if (!te[e] && "undefined" !== typeof t && t && t.exports)
              try {
                (n = Xt._abbr),
                  !(function () {
                    var t = new Error("Cannot find module 'undefined'");
                    throw ((t.code = "MODULE_NOT_FOUND"), t);
                  })(),
                  ie(n);
              } catch (r) {}
            return te[e];
          }
          function ie(t, e) {
            var n;
            return (
              t &&
                ((n = o(e) ? oe(t) : ae(t, e))
                  ? (Xt = n)
                  : "undefined" !== typeof console &&
                    console.warn &&
                    console.warn(
                      "Locale " + t + " not found. Did you forget to load it?",
                    )),
              Xt._abbr
            );
          }
          function ae(t, e) {
            if (null !== e) {
              var n,
                r = Qt;
              if (((e.abbr = t), null != te[t]))
                P(
                  "defineLocaleOverride",
                  "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.",
                ),
                  (r = te[t]._config);
              else if (null != e.parentLocale)
                if (null != te[e.parentLocale]) r = te[e.parentLocale]._config;
                else {
                  if (null == (n = re(e.parentLocale)))
                    return (
                      ee[e.parentLocale] || (ee[e.parentLocale] = []),
                      ee[e.parentLocale].push({ name: t, config: e }),
                      null
                    );
                  r = n._config;
                }
              return (
                (te[t] = new A(O(r, e))),
                ee[t] &&
                  ee[t].forEach(function (t) {
                    ae(t.name, t.config);
                  }),
                ie(t),
                te[t]
              );
            }
            return delete te[t], null;
          }
          function oe(t) {
            var e;
            if (
              (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t)
            )
              return Xt;
            if (!i(t)) {
              if ((e = re(t))) return e;
              t = [t];
            }
            return (function (t) {
              for (var e, n, r, i, a = 0; a < t.length; ) {
                for (
                  e = (i = ne(t[a]).split("-")).length,
                    n = (n = ne(t[a + 1])) ? n.split("-") : null;
                  e > 0;

                ) {
                  if ((r = re(i.slice(0, e).join("-")))) return r;
                  if (n && n.length >= e && k(i, n, !0) >= e - 1) break;
                  e--;
                }
                a++;
              }
              return Xt;
            })(t);
          }
          function se(t) {
            var e,
              n = t._a;
            return (
              n &&
                -2 === f(t).overflow &&
                ((e =
                  n[1] < 0 || n[1] > 11
                    ? 1
                    : n[2] < 1 || n[2] > kt(n[0], n[1])
                      ? 2
                      : n[3] < 0 ||
                          n[3] > 24 ||
                          (24 === n[3] &&
                            (0 !== n[4] || 0 !== n[5] || 0 !== n[6]))
                        ? 3
                        : n[4] < 0 || n[4] > 59
                          ? 4
                          : n[5] < 0 || n[5] > 59
                            ? 5
                            : n[6] < 0 || n[6] > 999
                              ? 6
                              : -1),
                f(t)._overflowDayOfYear && (e < 0 || e > 2) && (e = 2),
                f(t)._overflowWeeks && -1 === e && (e = 7),
                f(t)._overflowWeekday && -1 === e && (e = 8),
                (f(t).overflow = e)),
              t
            );
          }
          function le(t, e, n) {
            return null != t ? t : null != e ? e : n;
          }
          function ue(t) {
            var e,
              n,
              i,
              a,
              o,
              s = [];
            if (!t._d) {
              for (
                i = (function (t) {
                  var e = new Date(r.now());
                  return t._useUTC
                    ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]
                    : [e.getFullYear(), e.getMonth(), e.getDate()];
                })(t),
                  t._w &&
                    null == t._a[2] &&
                    null == t._a[1] &&
                    (function (t) {
                      var e, n, r, i, a, o, s, l;
                      if (null != (e = t._w).GG || null != e.W || null != e.E)
                        (a = 1),
                          (o = 4),
                          (n = le(e.GG, t._a[0], Nt(Me(), 1, 4).year)),
                          (r = le(e.W, 1)),
                          ((i = le(e.E, 1)) < 1 || i > 7) && (l = !0);
                      else {
                        (a = t._locale._week.dow), (o = t._locale._week.doy);
                        var u = Nt(Me(), a, o);
                        (n = le(e.gg, t._a[0], u.year)),
                          (r = le(e.w, u.week)),
                          null != e.d
                            ? ((i = e.d) < 0 || i > 6) && (l = !0)
                            : null != e.e
                              ? ((i = e.e + a),
                                (e.e < 0 || e.e > 6) && (l = !0))
                              : (i = a);
                      }
                      r < 1 || r > Wt(n, a, o)
                        ? (f(t)._overflowWeeks = !0)
                        : null != l
                          ? (f(t)._overflowWeekday = !0)
                          : ((s = Et(n, r, i, a, o)),
                            (t._a[0] = s.year),
                            (t._dayOfYear = s.dayOfYear));
                    })(t),
                  null != t._dayOfYear &&
                    ((o = le(t._a[0], i[0])),
                    (t._dayOfYear > mt(o) || 0 === t._dayOfYear) &&
                      (f(t)._overflowDayOfYear = !0),
                    (n = Lt(o, 0, t._dayOfYear)),
                    (t._a[1] = n.getUTCMonth()),
                    (t._a[2] = n.getUTCDate())),
                  e = 0;
                e < 3 && null == t._a[e];
                ++e
              )
                t._a[e] = s[e] = i[e];
              for (; e < 7; e++)
                t._a[e] = s[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
              24 === t._a[3] &&
                0 === t._a[4] &&
                0 === t._a[5] &&
                0 === t._a[6] &&
                ((t._nextDay = !0), (t._a[3] = 0)),
                (t._d = (t._useUTC ? Lt : Ft).apply(null, s)),
                (a = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
                null != t._tzm &&
                  t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                t._nextDay && (t._a[3] = 24),
                t._w &&
                  "undefined" !== typeof t._w.d &&
                  t._w.d !== a &&
                  (f(t).weekdayMismatch = !0);
            }
          }
          var ce =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            he =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            de = /Z|[+-]\d\d(?::?\d\d)?/,
            fe = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/],
            ],
            pe = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/],
            ],
            ge = /^\/?Date\((\-?\d+)/i;
          function me(t) {
            var e,
              n,
              r,
              i,
              a,
              o,
              s = t._i,
              l = ce.exec(s) || he.exec(s);
            if (l) {
              for (f(t).iso = !0, e = 0, n = fe.length; e < n; e++)
                if (fe[e][1].exec(l[1])) {
                  (i = fe[e][0]), (r = !1 !== fe[e][2]);
                  break;
                }
              if (null == i) return void (t._isValid = !1);
              if (l[3]) {
                for (e = 0, n = pe.length; e < n; e++)
                  if (pe[e][1].exec(l[3])) {
                    a = (l[2] || " ") + pe[e][0];
                    break;
                  }
                if (null == a) return void (t._isValid = !1);
              }
              if (!r && null != a) return void (t._isValid = !1);
              if (l[4]) {
                if (!de.exec(l[4])) return void (t._isValid = !1);
                o = "Z";
              }
              (t._f = i + (a || "") + (o || "")), _e(t);
            } else t._isValid = !1;
          }
          var ve =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
          function ye(t) {
            var e = parseInt(t, 10);
            return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
          }
          var be = {
            UT: 0,
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480,
          };
          function xe(t) {
            var e = ve.exec(
              t._i
                .replace(/\([^)]*\)|[\n\t]/g, " ")
                .replace(/(\s\s+)/g, " ")
                .replace(/^\s\s*/, "")
                .replace(/\s\s*$/, ""),
            );
            if (e) {
              var n = (function (t, e, n, r, i, a) {
                var o = [
                  ye(t),
                  Dt.indexOf(e),
                  parseInt(n, 10),
                  parseInt(r, 10),
                  parseInt(i, 10),
                ];
                return a && o.push(parseInt(a, 10)), o;
              })(e[4], e[3], e[2], e[5], e[6], e[7]);
              if (
                !(function (t, e, n) {
                  return (
                    !t ||
                    Yt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() ||
                    ((f(n).weekdayMismatch = !0), (n._isValid = !1), !1)
                  );
                })(e[1], n, t)
              )
                return;
              (t._a = n),
                (t._tzm = (function (t, e, n) {
                  if (t) return be[t];
                  if (e) return 0;
                  var r = parseInt(n, 10),
                    i = r % 100;
                  return ((r - i) / 100) * 60 + i;
                })(e[8], e[9], e[10])),
                (t._d = Lt.apply(null, t._a)),
                t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                (f(t).rfc2822 = !0);
            } else t._isValid = !1;
          }
          function _e(t) {
            if (t._f !== r.ISO_8601)
              if (t._f !== r.RFC_2822) {
                (t._a = []), (f(t).empty = !0);
                var e,
                  n,
                  i,
                  a,
                  o,
                  s = "" + t._i,
                  l = s.length,
                  u = 0;
                for (
                  i = U(t._f, t._locale).match(z) || [], e = 0;
                  e < i.length;
                  e++
                )
                  (a = i[e]),
                    (n = (s.match(ct(a, t)) || [])[0]) &&
                      ((o = s.substr(0, s.indexOf(n))).length > 0 &&
                        f(t).unusedInput.push(o),
                      (s = s.slice(s.indexOf(n) + n.length)),
                      (u += n.length)),
                    V[a]
                      ? (n ? (f(t).empty = !1) : f(t).unusedTokens.push(a),
                        gt(a, n, t))
                      : t._strict && !n && f(t).unusedTokens.push(a);
                (f(t).charsLeftOver = l - u),
                  s.length > 0 && f(t).unusedInput.push(s),
                  t._a[3] <= 12 &&
                    !0 === f(t).bigHour &&
                    t._a[3] > 0 &&
                    (f(t).bigHour = void 0),
                  (f(t).parsedDateParts = t._a.slice(0)),
                  (f(t).meridiem = t._meridiem),
                  (t._a[3] = (function (t, e, n) {
                    var r;
                    return null == n
                      ? e
                      : null != t.meridiemHour
                        ? t.meridiemHour(e, n)
                        : null != t.isPM
                          ? ((r = t.isPM(n)) && e < 12 && (e += 12),
                            r || 12 !== e || (e = 0),
                            e)
                          : e;
                  })(t._locale, t._a[3], t._meridiem)),
                  ue(t),
                  se(t);
              } else xe(t);
            else me(t);
          }
          function we(t) {
            var e = t._i,
              n = t._f;
            return (
              (t._locale = t._locale || oe(t._l)),
              null === e || (void 0 === n && "" === e)
                ? g({ nullInput: !0 })
                : ("string" === typeof e && (t._i = e = t._locale.preparse(e)),
                  x(e)
                    ? new b(se(e))
                    : (l(e)
                        ? (t._d = e)
                        : i(n)
                          ? (function (t) {
                              var e, n, r, i, a;
                              if (0 === t._f.length)
                                return (
                                  (f(t).invalidFormat = !0),
                                  void (t._d = new Date(NaN))
                                );
                              for (i = 0; i < t._f.length; i++)
                                (a = 0),
                                  (e = v({}, t)),
                                  null != t._useUTC && (e._useUTC = t._useUTC),
                                  (e._f = t._f[i]),
                                  _e(e),
                                  p(e) &&
                                    ((a += f(e).charsLeftOver),
                                    (a += 10 * f(e).unusedTokens.length),
                                    (f(e).score = a),
                                    (null == r || a < r) && ((r = a), (n = e)));
                              h(t, n || e);
                            })(t)
                          : n
                            ? _e(t)
                            : (function (t) {
                                var e = t._i;
                                o(e)
                                  ? (t._d = new Date(r.now()))
                                  : l(e)
                                    ? (t._d = new Date(e.valueOf()))
                                    : "string" === typeof e
                                      ? (function (t) {
                                          var e = ge.exec(t._i);
                                          null === e
                                            ? (me(t),
                                              !1 === t._isValid &&
                                                (delete t._isValid,
                                                xe(t),
                                                !1 === t._isValid &&
                                                  (delete t._isValid,
                                                  r.createFromInputFallback(
                                                    t,
                                                  ))))
                                            : (t._d = new Date(+e[1]));
                                        })(t)
                                      : i(e)
                                        ? ((t._a = u(e.slice(0), function (t) {
                                            return parseInt(t, 10);
                                          })),
                                          ue(t))
                                        : a(e)
                                          ? (function (t) {
                                              if (!t._d) {
                                                var e = R(t._i);
                                                (t._a = u(
                                                  [
                                                    e.year,
                                                    e.month,
                                                    e.day || e.date,
                                                    e.hour,
                                                    e.minute,
                                                    e.second,
                                                    e.millisecond,
                                                  ],
                                                  function (t) {
                                                    return t && parseInt(t, 10);
                                                  },
                                                )),
                                                  ue(t);
                                              }
                                            })(t)
                                          : s(e)
                                            ? (t._d = new Date(e))
                                            : r.createFromInputFallback(t);
                              })(t),
                      p(t) || (t._d = null),
                      t))
            );
          }
          function ke(t, e, n, r, o) {
            var s = {};
            return (
              (!0 !== n && !1 !== n) || ((r = n), (n = void 0)),
              ((a(t) &&
                (function (t) {
                  if (Object.getOwnPropertyNames)
                    return 0 === Object.getOwnPropertyNames(t).length;
                  var e;
                  for (e in t) if (t.hasOwnProperty(e)) return !1;
                  return !0;
                })(t)) ||
                (i(t) && 0 === t.length)) &&
                (t = void 0),
              (s._isAMomentObject = !0),
              (s._useUTC = s._isUTC = o),
              (s._l = n),
              (s._i = t),
              (s._f = e),
              (s._strict = r),
              (function (t) {
                var e = new b(se(we(t)));
                return e._nextDay && (e.add(1, "d"), (e._nextDay = void 0)), e;
              })(s)
            );
          }
          function Me(t, e, n, r) {
            return ke(t, e, n, r, !1);
          }
          (r.createFromInputFallback = S(
            "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
            function (t) {
              t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
            },
          )),
            (r.ISO_8601 = function () {}),
            (r.RFC_2822 = function () {});
          var Se = S(
              "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var t = Me.apply(null, arguments);
                return this.isValid() && t.isValid()
                  ? t < this
                    ? this
                    : t
                  : g();
              },
            ),
            De = S(
              "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var t = Me.apply(null, arguments);
                return this.isValid() && t.isValid()
                  ? t > this
                    ? this
                    : t
                  : g();
              },
            );
          function Ce(t, e) {
            var n, r;
            if ((1 === e.length && i(e[0]) && (e = e[0]), !e.length))
              return Me();
            for (n = e[0], r = 1; r < e.length; ++r)
              (e[r].isValid() && !e[r][t](n)) || (n = e[r]);
            return n;
          }
          var Pe = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
          function Te(t) {
            var e = R(t),
              n = e.year || 0,
              r = e.quarter || 0,
              i = e.month || 0,
              a = e.week || e.isoWeek || 0,
              o = e.day || 0,
              s = e.hour || 0,
              l = e.minute || 0,
              u = e.second || 0,
              c = e.millisecond || 0;
            (this._isValid = (function (t) {
              for (var e in t)
                if (-1 === yt.call(Pe, e) || (null != t[e] && isNaN(t[e])))
                  return !1;
              for (var n = !1, r = 0; r < Pe.length; ++r)
                if (t[Pe[r]]) {
                  if (n) return !1;
                  parseFloat(t[Pe[r]]) !== w(t[Pe[r]]) && (n = !0);
                }
              return !0;
            })(e)),
              (this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60),
              (this._days = +o + 7 * a),
              (this._months = +i + 3 * r + 12 * n),
              (this._data = {}),
              (this._locale = oe()),
              this._bubble();
          }
          function Oe(t) {
            return t instanceof Te;
          }
          function Ae(t) {
            return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
          }
          function Ie(t, e) {
            B(t, 0, 0, function () {
              var t = this.utcOffset(),
                n = "+";
              return (
                t < 0 && ((t = -t), (n = "-")),
                n + W(~~(t / 60), 2) + e + W(~~t % 60, 2)
              );
            });
          }
          Ie("Z", ":"),
            Ie("ZZ", ""),
            ut("Z", ot),
            ut("ZZ", ot),
            ft(["Z", "ZZ"], function (t, e, n) {
              (n._useUTC = !0), (n._tzm = Le(ot, t));
            });
          var Fe = /([\+\-]|\d\d)/gi;
          function Le(t, e) {
            var n = (e || "").match(t);
            if (null === n) return null;
            var r = ((n[n.length - 1] || []) + "").match(Fe) || ["-", 0, 0],
              i = 60 * r[1] + w(r[2]);
            return 0 === i ? 0 : "+" === r[0] ? i : -i;
          }
          function Re(t, e) {
            var n, i;
            return e._isUTC
              ? ((n = e.clone()),
                (i =
                  (x(t) || l(t) ? t.valueOf() : Me(t).valueOf()) - n.valueOf()),
                n._d.setTime(n._d.valueOf() + i),
                r.updateOffset(n, !1),
                n)
              : Me(t).local();
          }
          function Ee(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
          }
          function Ne() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          r.updateOffset = function () {};
          var We = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            ze =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function je(t, e) {
            var n,
              r,
              i,
              a = t,
              o = null;
            return (
              Oe(t)
                ? (a = { ms: t._milliseconds, d: t._days, M: t._months })
                : s(t)
                  ? ((a = {}), e ? (a[e] = t) : (a.milliseconds = t))
                  : (o = We.exec(t))
                    ? ((n = "-" === o[1] ? -1 : 1),
                      (a = {
                        y: 0,
                        d: w(o[2]) * n,
                        h: w(o[3]) * n,
                        m: w(o[4]) * n,
                        s: w(o[5]) * n,
                        ms: w(Ae(1e3 * o[6])) * n,
                      }))
                    : (o = ze.exec(t))
                      ? ((n = "-" === o[1] ? -1 : 1),
                        (a = {
                          y: Ye(o[2], n),
                          M: Ye(o[3], n),
                          w: Ye(o[4], n),
                          d: Ye(o[5], n),
                          h: Ye(o[6], n),
                          m: Ye(o[7], n),
                          s: Ye(o[8], n),
                        }))
                      : null == a
                        ? (a = {})
                        : "object" === typeof a &&
                          ("from" in a || "to" in a) &&
                          ((i = (function (t, e) {
                            var n;
                            return t.isValid() && e.isValid()
                              ? ((e = Re(e, t)),
                                t.isBefore(e)
                                  ? (n = Ve(t, e))
                                  : (((n = Ve(e, t)).milliseconds =
                                      -n.milliseconds),
                                    (n.months = -n.months)),
                                n)
                              : { milliseconds: 0, months: 0 };
                          })(Me(a.from), Me(a.to))),
                          ((a = {}).ms = i.milliseconds),
                          (a.M = i.months)),
              (r = new Te(a)),
              Oe(t) && c(t, "_locale") && (r._locale = t._locale),
              r
            );
          }
          function Ye(t, e) {
            var n = t && parseFloat(t.replace(",", "."));
            return (isNaN(n) ? 0 : n) * e;
          }
          function Ve(t, e) {
            var n = {};
            return (
              (n.months = e.month() - t.month() + 12 * (e.year() - t.year())),
              t.clone().add(n.months, "M").isAfter(e) && --n.months,
              (n.milliseconds = +e - +t.clone().add(n.months, "M")),
              n
            );
          }
          function Be(t, e) {
            return function (n, r) {
              var i;
              return (
                null === r ||
                  isNaN(+r) ||
                  (P(
                    e,
                    "moment()." +
                      e +
                      "(period, number) is deprecated. Please use moment()." +
                      e +
                      "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.",
                  ),
                  (i = n),
                  (n = r),
                  (r = i)),
                He(this, je((n = "string" === typeof n ? +n : n), r), t),
                this
              );
            };
          }
          function He(t, e, n, i) {
            var a = e._milliseconds,
              o = Ae(e._days),
              s = Ae(e._months);
            t.isValid() &&
              ((i = null == i || i),
              s && Pt(t, _t(t, "Month") + s * n),
              o && wt(t, "Date", _t(t, "Date") + o * n),
              a && t._d.setTime(t._d.valueOf() + a * n),
              i && r.updateOffset(t, o || s));
          }
          (je.fn = Te.prototype),
            (je.invalid = function () {
              return je(NaN);
            });
          var Ue = Be(1, "add"),
            Ge = Be(-1, "subtract");
          function qe(t, e) {
            var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
              r = t.clone().add(n, "months");
            return (
              -(
                n +
                (e - r < 0
                  ? (e - r) / (r - t.clone().add(n - 1, "months"))
                  : (e - r) / (t.clone().add(n + 1, "months") - r))
              ) || 0
            );
          }
          function $e(t) {
            var e;
            return void 0 === t
              ? this._locale._abbr
              : (null != (e = oe(t)) && (this._locale = e), this);
          }
          (r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
            (r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
          var Ze = S(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (t) {
              return void 0 === t ? this.localeData() : this.locale(t);
            },
          );
          function Ke() {
            return this._locale;
          }
          function Xe(t, e) {
            return ((t % e) + e) % e;
          }
          function Je(t, e, n) {
            return t < 100 && t >= 0
              ? new Date(t + 400, e, n) - 126227808e5
              : new Date(t, e, n).valueOf();
          }
          function Qe(t, e, n) {
            return t < 100 && t >= 0
              ? Date.UTC(t + 400, e, n) - 126227808e5
              : Date.UTC(t, e, n);
          }
          function tn(t, e) {
            B(0, [t, t.length], 0, e);
          }
          function en(t, e, n, r, i) {
            var a;
            return null == t
              ? Nt(this, r, i).year
              : (e > (a = Wt(t, r, i)) && (e = a),
                nn.call(this, t, e, n, r, i));
          }
          function nn(t, e, n, r, i) {
            var a = Et(t, e, n, r, i),
              o = Lt(a.year, 0, a.dayOfYear);
            return (
              this.year(o.getUTCFullYear()),
              this.month(o.getUTCMonth()),
              this.date(o.getUTCDate()),
              this
            );
          }
          B(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
            B(0, ["GG", 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            tn("gggg", "weekYear"),
            tn("ggggg", "weekYear"),
            tn("GGGG", "isoWeekYear"),
            tn("GGGGG", "isoWeekYear"),
            F("weekYear", "gg"),
            F("isoWeekYear", "GG"),
            N("weekYear", 1),
            N("isoWeekYear", 1),
            ut("G", it),
            ut("g", it),
            ut("GG", X, q),
            ut("gg", X, q),
            ut("GGGG", et, Z),
            ut("gggg", et, Z),
            ut("GGGGG", nt, K),
            ut("ggggg", nt, K),
            pt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, r) {
              e[r.substr(0, 2)] = w(t);
            }),
            pt(["gg", "GG"], function (t, e, n, i) {
              e[i] = r.parseTwoDigitYear(t);
            }),
            B("Q", 0, "Qo", "quarter"),
            F("quarter", "Q"),
            N("quarter", 7),
            ut("Q", G),
            ft("Q", function (t, e) {
              e[1] = 3 * (w(t) - 1);
            }),
            B("D", ["DD", 2], "Do", "date"),
            F("date", "D"),
            N("date", 9),
            ut("D", X),
            ut("DD", X, q),
            ut("Do", function (t, e) {
              return t
                ? e._dayOfMonthOrdinalParse || e._ordinalParse
                : e._dayOfMonthOrdinalParseLenient;
            }),
            ft(["D", "DD"], 2),
            ft("Do", function (t, e) {
              e[2] = w(t.match(X)[0]);
            });
          var rn = xt("Date", !0);
          B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            F("dayOfYear", "DDD"),
            N("dayOfYear", 4),
            ut("DDD", tt),
            ut("DDDD", $),
            ft(["DDD", "DDDD"], function (t, e, n) {
              n._dayOfYear = w(t);
            }),
            B("m", ["mm", 2], 0, "minute"),
            F("minute", "m"),
            N("minute", 14),
            ut("m", X),
            ut("mm", X, q),
            ft(["m", "mm"], 4);
          var an = xt("Minutes", !1);
          B("s", ["ss", 2], 0, "second"),
            F("second", "s"),
            N("second", 15),
            ut("s", X),
            ut("ss", X, q),
            ft(["s", "ss"], 5);
          var on,
            sn = xt("Seconds", !1);
          for (
            B("S", 0, 0, function () {
              return ~~(this.millisecond() / 100);
            }),
              B(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10);
              }),
              B(0, ["SSS", 3], 0, "millisecond"),
              B(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond();
              }),
              B(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond();
              }),
              B(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond();
              }),
              B(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond();
              }),
              B(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond();
              }),
              B(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond();
              }),
              F("millisecond", "ms"),
              N("millisecond", 16),
              ut("S", tt, G),
              ut("SS", tt, q),
              ut("SSS", tt, $),
              on = "SSSS";
            on.length <= 9;
            on += "S"
          )
            ut(on, rt);
          function ln(t, e) {
            e[6] = w(1e3 * ("0." + t));
          }
          for (on = "S"; on.length <= 9; on += "S") ft(on, ln);
          var un = xt("Milliseconds", !1);
          B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
          var cn = b.prototype;
          function hn(t) {
            return t;
          }
          (cn.add = Ue),
            (cn.calendar = function (t, e) {
              var n = t || Me(),
                i = Re(n, this).startOf("day"),
                a = r.calendarFormat(this, i) || "sameElse",
                o = e && (T(e[a]) ? e[a].call(this, n) : e[a]);
              return this.format(
                o || this.localeData().calendar(a, this, Me(n)),
              );
            }),
            (cn.clone = function () {
              return new b(this);
            }),
            (cn.diff = function (t, e, n) {
              var r, i, a;
              if (!this.isValid()) return NaN;
              if (!(r = Re(t, this)).isValid()) return NaN;
              switch (
                ((i = 6e4 * (r.utcOffset() - this.utcOffset())), (e = L(e)))
              ) {
                case "year":
                  a = qe(this, r) / 12;
                  break;
                case "month":
                  a = qe(this, r);
                  break;
                case "quarter":
                  a = qe(this, r) / 3;
                  break;
                case "second":
                  a = (this - r) / 1e3;
                  break;
                case "minute":
                  a = (this - r) / 6e4;
                  break;
                case "hour":
                  a = (this - r) / 36e5;
                  break;
                case "day":
                  a = (this - r - i) / 864e5;
                  break;
                case "week":
                  a = (this - r - i) / 6048e5;
                  break;
                default:
                  a = this - r;
              }
              return n ? a : _(a);
            }),
            (cn.endOf = function (t) {
              var e;
              if (
                void 0 === (t = L(t)) ||
                "millisecond" === t ||
                !this.isValid()
              )
                return this;
              var n = this._isUTC ? Qe : Je;
              switch (t) {
                case "year":
                  e = n(this.year() + 1, 0, 1) - 1;
                  break;
                case "quarter":
                  e =
                    n(this.year(), this.month() - (this.month() % 3) + 3, 1) -
                    1;
                  break;
                case "month":
                  e = n(this.year(), this.month() + 1, 1) - 1;
                  break;
                case "week":
                  e =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - this.weekday() + 7,
                    ) - 1;
                  break;
                case "isoWeek":
                  e =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - (this.isoWeekday() - 1) + 7,
                    ) - 1;
                  break;
                case "day":
                case "date":
                  e = n(this.year(), this.month(), this.date() + 1) - 1;
                  break;
                case "hour":
                  (e = this._d.valueOf()),
                    (e +=
                      36e5 -
                      Xe(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) -
                      1);
                  break;
                case "minute":
                  (e = this._d.valueOf()), (e += 6e4 - Xe(e, 6e4) - 1);
                  break;
                case "second":
                  (e = this._d.valueOf()), (e += 1e3 - Xe(e, 1e3) - 1);
              }
              return this._d.setTime(e), r.updateOffset(this, !0), this;
            }),
            (cn.format = function (t) {
              t || (t = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
              var e = H(this, t);
              return this.localeData().postformat(e);
            }),
            (cn.from = function (t, e) {
              return this.isValid() &&
                ((x(t) && t.isValid()) || Me(t).isValid())
                ? je({ to: this, from: t }).locale(this.locale()).humanize(!e)
                : this.localeData().invalidDate();
            }),
            (cn.fromNow = function (t) {
              return this.from(Me(), t);
            }),
            (cn.to = function (t, e) {
              return this.isValid() &&
                ((x(t) && t.isValid()) || Me(t).isValid())
                ? je({ from: this, to: t }).locale(this.locale()).humanize(!e)
                : this.localeData().invalidDate();
            }),
            (cn.toNow = function (t) {
              return this.to(Me(), t);
            }),
            (cn.get = function (t) {
              return T(this[(t = L(t))]) ? this[t]() : this;
            }),
            (cn.invalidAt = function () {
              return f(this).overflow;
            }),
            (cn.isAfter = function (t, e) {
              var n = x(t) ? t : Me(t);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (e = L(e) || "millisecond")
                  ? this.valueOf() > n.valueOf()
                  : n.valueOf() < this.clone().startOf(e).valueOf())
              );
            }),
            (cn.isBefore = function (t, e) {
              var n = x(t) ? t : Me(t);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (e = L(e) || "millisecond")
                  ? this.valueOf() < n.valueOf()
                  : this.clone().endOf(e).valueOf() < n.valueOf())
              );
            }),
            (cn.isBetween = function (t, e, n, r) {
              var i = x(t) ? t : Me(t),
                a = x(e) ? e : Me(e);
              return (
                !!(this.isValid() && i.isValid() && a.isValid()) &&
                ("(" === (r = r || "()")[0]
                  ? this.isAfter(i, n)
                  : !this.isBefore(i, n)) &&
                (")" === r[1] ? this.isBefore(a, n) : !this.isAfter(a, n))
              );
            }),
            (cn.isSame = function (t, e) {
              var n,
                r = x(t) ? t : Me(t);
              return (
                !(!this.isValid() || !r.isValid()) &&
                ("millisecond" === (e = L(e) || "millisecond")
                  ? this.valueOf() === r.valueOf()
                  : ((n = r.valueOf()),
                    this.clone().startOf(e).valueOf() <= n &&
                      n <= this.clone().endOf(e).valueOf()))
              );
            }),
            (cn.isSameOrAfter = function (t, e) {
              return this.isSame(t, e) || this.isAfter(t, e);
            }),
            (cn.isSameOrBefore = function (t, e) {
              return this.isSame(t, e) || this.isBefore(t, e);
            }),
            (cn.isValid = function () {
              return p(this);
            }),
            (cn.lang = Ze),
            (cn.locale = $e),
            (cn.localeData = Ke),
            (cn.max = De),
            (cn.min = Se),
            (cn.parsingFlags = function () {
              return h({}, f(this));
            }),
            (cn.set = function (t, e) {
              if ("object" === typeof t)
                for (
                  var n = (function (t) {
                      var e = [];
                      for (var n in t) e.push({ unit: n, priority: E[n] });
                      return (
                        e.sort(function (t, e) {
                          return t.priority - e.priority;
                        }),
                        e
                      );
                    })((t = R(t))),
                    r = 0;
                  r < n.length;
                  r++
                )
                  this[n[r].unit](t[n[r].unit]);
              else if (T(this[(t = L(t))])) return this[t](e);
              return this;
            }),
            (cn.startOf = function (t) {
              var e;
              if (
                void 0 === (t = L(t)) ||
                "millisecond" === t ||
                !this.isValid()
              )
                return this;
              var n = this._isUTC ? Qe : Je;
              switch (t) {
                case "year":
                  e = n(this.year(), 0, 1);
                  break;
                case "quarter":
                  e = n(this.year(), this.month() - (this.month() % 3), 1);
                  break;
                case "month":
                  e = n(this.year(), this.month(), 1);
                  break;
                case "week":
                  e = n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday(),
                  );
                  break;
                case "isoWeek":
                  e = n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1),
                  );
                  break;
                case "day":
                case "date":
                  e = n(this.year(), this.month(), this.date());
                  break;
                case "hour":
                  (e = this._d.valueOf()),
                    (e -= Xe(
                      e + (this._isUTC ? 0 : 6e4 * this.utcOffset()),
                      36e5,
                    ));
                  break;
                case "minute":
                  (e = this._d.valueOf()), (e -= Xe(e, 6e4));
                  break;
                case "second":
                  (e = this._d.valueOf()), (e -= Xe(e, 1e3));
              }
              return this._d.setTime(e), r.updateOffset(this, !0), this;
            }),
            (cn.subtract = Ge),
            (cn.toArray = function () {
              var t = this;
              return [
                t.year(),
                t.month(),
                t.date(),
                t.hour(),
                t.minute(),
                t.second(),
                t.millisecond(),
              ];
            }),
            (cn.toObject = function () {
              var t = this;
              return {
                years: t.year(),
                months: t.month(),
                date: t.date(),
                hours: t.hours(),
                minutes: t.minutes(),
                seconds: t.seconds(),
                milliseconds: t.milliseconds(),
              };
            }),
            (cn.toDate = function () {
              return new Date(this.valueOf());
            }),
            (cn.toISOString = function (t) {
              if (!this.isValid()) return null;
              var e = !0 !== t,
                n = e ? this.clone().utc() : this;
              return n.year() < 0 || n.year() > 9999
                ? H(
                    n,
                    e
                      ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                      : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ",
                  )
                : T(Date.prototype.toISOString)
                  ? e
                    ? this.toDate().toISOString()
                    : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                        .toISOString()
                        .replace("Z", H(n, "Z"))
                  : H(
                      n,
                      e
                        ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                        : "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
                    );
            }),
            (cn.inspect = function () {
              if (!this.isValid())
                return "moment.invalid(/* " + this._i + " */)";
              var t = "moment",
                e = "";
              this.isLocal() ||
                ((t =
                  0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                (e = "Z"));
              var n = "[" + t + '("]',
                r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                i = e + '[")]';
              return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i);
            }),
            (cn.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (cn.toString = function () {
              return this.clone()
                .locale("en")
                .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
            }),
            (cn.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (cn.valueOf = function () {
              return this._d.valueOf() - 6e4 * (this._offset || 0);
            }),
            (cn.creationData = function () {
              return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict,
              };
            }),
            (cn.year = bt),
            (cn.isLeapYear = function () {
              return vt(this.year());
            }),
            (cn.weekYear = function (t) {
              return en.call(
                this,
                t,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy,
              );
            }),
            (cn.isoWeekYear = function (t) {
              return en.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
            }),
            (cn.quarter = cn.quarters =
              function (t) {
                return null == t
                  ? Math.ceil((this.month() + 1) / 3)
                  : this.month(3 * (t - 1) + (this.month() % 3));
              }),
            (cn.month = Tt),
            (cn.daysInMonth = function () {
              return kt(this.year(), this.month());
            }),
            (cn.week = cn.weeks =
              function (t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d");
              }),
            (cn.isoWeek = cn.isoWeeks =
              function (t) {
                var e = Nt(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d");
              }),
            (cn.weeksInYear = function () {
              var t = this.localeData()._week;
              return Wt(this.year(), t.dow, t.doy);
            }),
            (cn.isoWeeksInYear = function () {
              return Wt(this.year(), 1, 4);
            }),
            (cn.date = rn),
            (cn.day = cn.days =
              function (t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t
                  ? ((t = (function (t, e) {
                      return "string" !== typeof t
                        ? t
                        : isNaN(t)
                          ? "number" === typeof (t = e.weekdaysParse(t))
                            ? t
                            : null
                          : parseInt(t, 10);
                    })(t, this.localeData())),
                    this.add(t - e, "d"))
                  : e;
              }),
            (cn.weekday = function (t) {
              if (!this.isValid()) return null != t ? this : NaN;
              var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
              return null == t ? e : this.add(t - e, "d");
            }),
            (cn.isoWeekday = function (t) {
              if (!this.isValid()) return null != t ? this : NaN;
              if (null != t) {
                var e = (function (t, e) {
                  return "string" === typeof t
                    ? e.weekdaysParse(t) % 7 || 7
                    : isNaN(t)
                      ? null
                      : t;
                })(t, this.localeData());
                return this.day(this.day() % 7 ? e : e - 7);
              }
              return this.day() || 7;
            }),
            (cn.dayOfYear = function (t) {
              var e =
                Math.round(
                  (this.clone().startOf("day") - this.clone().startOf("year")) /
                    864e5,
                ) + 1;
              return null == t ? e : this.add(t - e, "d");
            }),
            (cn.hour = cn.hours = Jt),
            (cn.minute = cn.minutes = an),
            (cn.second = cn.seconds = sn),
            (cn.millisecond = cn.milliseconds = un),
            (cn.utcOffset = function (t, e, n) {
              var i,
                a = this._offset || 0;
              if (!this.isValid()) return null != t ? this : NaN;
              if (null != t) {
                if ("string" === typeof t) {
                  if (null === (t = Le(ot, t))) return this;
                } else Math.abs(t) < 16 && !n && (t *= 60);
                return (
                  !this._isUTC && e && (i = Ee(this)),
                  (this._offset = t),
                  (this._isUTC = !0),
                  null != i && this.add(i, "m"),
                  a !== t &&
                    (!e || this._changeInProgress
                      ? He(this, je(t - a, "m"), 1, !1)
                      : this._changeInProgress ||
                        ((this._changeInProgress = !0),
                        r.updateOffset(this, !0),
                        (this._changeInProgress = null))),
                  this
                );
              }
              return this._isUTC ? a : Ee(this);
            }),
            (cn.utc = function (t) {
              return this.utcOffset(0, t);
            }),
            (cn.local = function (t) {
              return (
                this._isUTC &&
                  (this.utcOffset(0, t),
                  (this._isUTC = !1),
                  t && this.subtract(Ee(this), "m")),
                this
              );
            }),
            (cn.parseZone = function () {
              if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
              else if ("string" === typeof this._i) {
                var t = Le(at, this._i);
                null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
              }
              return this;
            }),
            (cn.hasAlignedHourOffset = function (t) {
              return (
                !!this.isValid() &&
                ((t = t ? Me(t).utcOffset() : 0),
                (this.utcOffset() - t) % 60 === 0)
              );
            }),
            (cn.isDST = function () {
              return (
                this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset()
              );
            }),
            (cn.isLocal = function () {
              return !!this.isValid() && !this._isUTC;
            }),
            (cn.isUtcOffset = function () {
              return !!this.isValid() && this._isUTC;
            }),
            (cn.isUtc = Ne),
            (cn.isUTC = Ne),
            (cn.zoneAbbr = function () {
              return this._isUTC ? "UTC" : "";
            }),
            (cn.zoneName = function () {
              return this._isUTC ? "Coordinated Universal Time" : "";
            }),
            (cn.dates = S(
              "dates accessor is deprecated. Use date instead.",
              rn,
            )),
            (cn.months = S(
              "months accessor is deprecated. Use month instead",
              Tt,
            )),
            (cn.years = S(
              "years accessor is deprecated. Use year instead",
              bt,
            )),
            (cn.zone = S(
              "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
              function (t, e) {
                return null != t
                  ? ("string" !== typeof t && (t = -t),
                    this.utcOffset(t, e),
                    this)
                  : -this.utcOffset();
              },
            )),
            (cn.isDSTShifted = S(
              "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
              function () {
                if (!o(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if ((v(t, this), (t = we(t))._a)) {
                  var e = t._isUTC ? d(t._a) : Me(t._a);
                  this._isDSTShifted =
                    this.isValid() && k(t._a, e.toArray()) > 0;
                } else this._isDSTShifted = !1;
                return this._isDSTShifted;
              },
            ));
          var dn = A.prototype;
          function fn(t, e, n, r) {
            var i = oe(),
              a = d().set(r, e);
            return i[n](a, t);
          }
          function pn(t, e, n) {
            if ((s(t) && ((e = t), (t = void 0)), (t = t || ""), null != e))
              return fn(t, e, n, "month");
            var r,
              i = [];
            for (r = 0; r < 12; r++) i[r] = fn(t, r, n, "month");
            return i;
          }
          function gn(t, e, n, r) {
            "boolean" === typeof t
              ? (s(e) && ((n = e), (e = void 0)), (e = e || ""))
              : ((n = e = t),
                (t = !1),
                s(e) && ((n = e), (e = void 0)),
                (e = e || ""));
            var i,
              a = oe(),
              o = t ? a._week.dow : 0;
            if (null != n) return fn(e, (n + o) % 7, r, "day");
            var l = [];
            for (i = 0; i < 7; i++) l[i] = fn(e, (i + o) % 7, r, "day");
            return l;
          }
          (dn.calendar = function (t, e, n) {
            var r = this._calendar[t] || this._calendar.sameElse;
            return T(r) ? r.call(e, n) : r;
          }),
            (dn.longDateFormat = function (t) {
              var e = this._longDateFormat[t],
                n = this._longDateFormat[t.toUpperCase()];
              return e || !n
                ? e
                : ((this._longDateFormat[t] = n.replace(
                    /MMMM|MM|DD|dddd/g,
                    function (t) {
                      return t.slice(1);
                    },
                  )),
                  this._longDateFormat[t]);
            }),
            (dn.invalidDate = function () {
              return this._invalidDate;
            }),
            (dn.ordinal = function (t) {
              return this._ordinal.replace("%d", t);
            }),
            (dn.preparse = hn),
            (dn.postformat = hn),
            (dn.relativeTime = function (t, e, n, r) {
              var i = this._relativeTime[n];
              return T(i) ? i(t, e, n, r) : i.replace(/%d/i, t);
            }),
            (dn.pastFuture = function (t, e) {
              var n = this._relativeTime[t > 0 ? "future" : "past"];
              return T(n) ? n(e) : n.replace(/%s/i, e);
            }),
            (dn.set = function (t) {
              var e, n;
              for (n in t) T((e = t[n])) ? (this[n] = e) : (this["_" + n] = e);
              (this._config = t),
                (this._dayOfMonthOrdinalParseLenient = new RegExp(
                  (this._dayOfMonthOrdinalParse.source ||
                    this._ordinalParse.source) +
                    "|" +
                    /\d{1,2}/.source,
                ));
            }),
            (dn.months = function (t, e) {
              return t
                ? i(this._months)
                  ? this._months[t.month()]
                  : this._months[
                      (this._months.isFormat || Mt).test(e)
                        ? "format"
                        : "standalone"
                    ][t.month()]
                : i(this._months)
                  ? this._months
                  : this._months.standalone;
            }),
            (dn.monthsShort = function (t, e) {
              return t
                ? i(this._monthsShort)
                  ? this._monthsShort[t.month()]
                  : this._monthsShort[Mt.test(e) ? "format" : "standalone"][
                      t.month()
                    ]
                : i(this._monthsShort)
                  ? this._monthsShort
                  : this._monthsShort.standalone;
            }),
            (dn.monthsParse = function (t, e, n) {
              var r, i, a;
              if (this._monthsParseExact) return Ct.call(this, t, e, n);
              for (
                this._monthsParse ||
                  ((this._monthsParse = []),
                  (this._longMonthsParse = []),
                  (this._shortMonthsParse = [])),
                  r = 0;
                r < 12;
                r++
              ) {
                if (
                  ((i = d([2e3, r])),
                  n &&
                    !this._longMonthsParse[r] &&
                    ((this._longMonthsParse[r] = new RegExp(
                      "^" + this.months(i, "").replace(".", "") + "$",
                      "i",
                    )),
                    (this._shortMonthsParse[r] = new RegExp(
                      "^" + this.monthsShort(i, "").replace(".", "") + "$",
                      "i",
                    ))),
                  n ||
                    this._monthsParse[r] ||
                    ((a =
                      "^" +
                      this.months(i, "") +
                      "|^" +
                      this.monthsShort(i, "")),
                    (this._monthsParse[r] = new RegExp(
                      a.replace(".", ""),
                      "i",
                    ))),
                  n && "MMMM" === e && this._longMonthsParse[r].test(t))
                )
                  return r;
                if (n && "MMM" === e && this._shortMonthsParse[r].test(t))
                  return r;
                if (!n && this._monthsParse[r].test(t)) return r;
              }
            }),
            (dn.monthsRegex = function (t) {
              return this._monthsParseExact
                ? (c(this, "_monthsRegex") || It.call(this),
                  t ? this._monthsStrictRegex : this._monthsRegex)
                : (c(this, "_monthsRegex") || (this._monthsRegex = At),
                  this._monthsStrictRegex && t
                    ? this._monthsStrictRegex
                    : this._monthsRegex);
            }),
            (dn.monthsShortRegex = function (t) {
              return this._monthsParseExact
                ? (c(this, "_monthsRegex") || It.call(this),
                  t ? this._monthsShortStrictRegex : this._monthsShortRegex)
                : (c(this, "_monthsShortRegex") ||
                    (this._monthsShortRegex = Ot),
                  this._monthsShortStrictRegex && t
                    ? this._monthsShortStrictRegex
                    : this._monthsShortRegex);
            }),
            (dn.week = function (t) {
              return Nt(t, this._week.dow, this._week.doy).week;
            }),
            (dn.firstDayOfYear = function () {
              return this._week.doy;
            }),
            (dn.firstDayOfWeek = function () {
              return this._week.dow;
            }),
            (dn.weekdays = function (t, e) {
              var n = i(this._weekdays)
                ? this._weekdays
                : this._weekdays[
                    t && !0 !== t && this._weekdays.isFormat.test(e)
                      ? "format"
                      : "standalone"
                  ];
              return !0 === t ? zt(n, this._week.dow) : t ? n[t.day()] : n;
            }),
            (dn.weekdaysMin = function (t) {
              return !0 === t
                ? zt(this._weekdaysMin, this._week.dow)
                : t
                  ? this._weekdaysMin[t.day()]
                  : this._weekdaysMin;
            }),
            (dn.weekdaysShort = function (t) {
              return !0 === t
                ? zt(this._weekdaysShort, this._week.dow)
                : t
                  ? this._weekdaysShort[t.day()]
                  : this._weekdaysShort;
            }),
            (dn.weekdaysParse = function (t, e, n) {
              var r, i, a;
              if (this._weekdaysParseExact) return Bt.call(this, t, e, n);
              for (
                this._weekdaysParse ||
                  ((this._weekdaysParse = []),
                  (this._minWeekdaysParse = []),
                  (this._shortWeekdaysParse = []),
                  (this._fullWeekdaysParse = [])),
                  r = 0;
                r < 7;
                r++
              ) {
                if (
                  ((i = d([2e3, 1]).day(r)),
                  n &&
                    !this._fullWeekdaysParse[r] &&
                    ((this._fullWeekdaysParse[r] = new RegExp(
                      "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
                      "i",
                    )),
                    (this._shortWeekdaysParse[r] = new RegExp(
                      "^" +
                        this.weekdaysShort(i, "").replace(".", "\\.?") +
                        "$",
                      "i",
                    )),
                    (this._minWeekdaysParse[r] = new RegExp(
                      "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
                      "i",
                    ))),
                  this._weekdaysParse[r] ||
                    ((a =
                      "^" +
                      this.weekdays(i, "") +
                      "|^" +
                      this.weekdaysShort(i, "") +
                      "|^" +
                      this.weekdaysMin(i, "")),
                    (this._weekdaysParse[r] = new RegExp(
                      a.replace(".", ""),
                      "i",
                    ))),
                  n && "dddd" === e && this._fullWeekdaysParse[r].test(t))
                )
                  return r;
                if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t))
                  return r;
                if (n && "dd" === e && this._minWeekdaysParse[r].test(t))
                  return r;
                if (!n && this._weekdaysParse[r].test(t)) return r;
              }
            }),
            (dn.weekdaysRegex = function (t) {
              return this._weekdaysParseExact
                ? (c(this, "_weekdaysRegex") || qt.call(this),
                  t ? this._weekdaysStrictRegex : this._weekdaysRegex)
                : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ht),
                  this._weekdaysStrictRegex && t
                    ? this._weekdaysStrictRegex
                    : this._weekdaysRegex);
            }),
            (dn.weekdaysShortRegex = function (t) {
              return this._weekdaysParseExact
                ? (c(this, "_weekdaysRegex") || qt.call(this),
                  t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                : (c(this, "_weekdaysShortRegex") ||
                    (this._weekdaysShortRegex = Ut),
                  this._weekdaysShortStrictRegex && t
                    ? this._weekdaysShortStrictRegex
                    : this._weekdaysShortRegex);
            }),
            (dn.weekdaysMinRegex = function (t) {
              return this._weekdaysParseExact
                ? (c(this, "_weekdaysRegex") || qt.call(this),
                  t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                : (c(this, "_weekdaysMinRegex") ||
                    (this._weekdaysMinRegex = Gt),
                  this._weekdaysMinStrictRegex && t
                    ? this._weekdaysMinStrictRegex
                    : this._weekdaysMinRegex);
            }),
            (dn.isPM = function (t) {
              return "p" === (t + "").toLowerCase().charAt(0);
            }),
            (dn.meridiem = function (t, e, n) {
              return t > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
            }),
            ie("en", {
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (t) {
                var e = t % 10;
                return (
                  t +
                  (1 === w((t % 100) / 10)
                    ? "th"
                    : 1 === e
                      ? "st"
                      : 2 === e
                        ? "nd"
                        : 3 === e
                          ? "rd"
                          : "th")
                );
              },
            }),
            (r.lang = S(
              "moment.lang is deprecated. Use moment.locale instead.",
              ie,
            )),
            (r.langData = S(
              "moment.langData is deprecated. Use moment.localeData instead.",
              oe,
            ));
          var mn = Math.abs;
          function vn(t, e, n, r) {
            var i = je(e, n);
            return (
              (t._milliseconds += r * i._milliseconds),
              (t._days += r * i._days),
              (t._months += r * i._months),
              t._bubble()
            );
          }
          function yn(t) {
            return t < 0 ? Math.floor(t) : Math.ceil(t);
          }
          function bn(t) {
            return (4800 * t) / 146097;
          }
          function xn(t) {
            return (146097 * t) / 4800;
          }
          function _n(t) {
            return function () {
              return this.as(t);
            };
          }
          var wn = _n("ms"),
            kn = _n("s"),
            Mn = _n("m"),
            Sn = _n("h"),
            Dn = _n("d"),
            Cn = _n("w"),
            Pn = _n("M"),
            Tn = _n("Q"),
            On = _n("y");
          function An(t) {
            return function () {
              return this.isValid() ? this._data[t] : NaN;
            };
          }
          var In = An("milliseconds"),
            Fn = An("seconds"),
            Ln = An("minutes"),
            Rn = An("hours"),
            En = An("days"),
            Nn = An("months"),
            Wn = An("years"),
            zn = Math.round,
            jn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 };
          function Yn(t, e, n, r, i) {
            return i.relativeTime(e || 1, !!n, t, r);
          }
          var Vn = Math.abs;
          function Bn(t) {
            return (t > 0) - (t < 0) || +t;
          }
          function Hn() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t,
              e,
              n = Vn(this._milliseconds) / 1e3,
              r = Vn(this._days),
              i = Vn(this._months);
            (t = _(n / 60)), (e = _(t / 60)), (n %= 60), (t %= 60);
            var a = _(i / 12),
              o = (i %= 12),
              s = r,
              l = e,
              u = t,
              c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
              h = this.asSeconds();
            if (!h) return "P0D";
            var d = h < 0 ? "-" : "",
              f = Bn(this._months) !== Bn(h) ? "-" : "",
              p = Bn(this._days) !== Bn(h) ? "-" : "",
              g = Bn(this._milliseconds) !== Bn(h) ? "-" : "";
            return (
              d +
              "P" +
              (a ? f + a + "Y" : "") +
              (o ? f + o + "M" : "") +
              (s ? p + s + "D" : "") +
              (l || u || c ? "T" : "") +
              (l ? g + l + "H" : "") +
              (u ? g + u + "M" : "") +
              (c ? g + c + "S" : "")
            );
          }
          var Un = Te.prototype;
          return (
            (Un.isValid = function () {
              return this._isValid;
            }),
            (Un.abs = function () {
              var t = this._data;
              return (
                (this._milliseconds = mn(this._milliseconds)),
                (this._days = mn(this._days)),
                (this._months = mn(this._months)),
                (t.milliseconds = mn(t.milliseconds)),
                (t.seconds = mn(t.seconds)),
                (t.minutes = mn(t.minutes)),
                (t.hours = mn(t.hours)),
                (t.months = mn(t.months)),
                (t.years = mn(t.years)),
                this
              );
            }),
            (Un.add = function (t, e) {
              return vn(this, t, e, 1);
            }),
            (Un.subtract = function (t, e) {
              return vn(this, t, e, -1);
            }),
            (Un.as = function (t) {
              if (!this.isValid()) return NaN;
              var e,
                n,
                r = this._milliseconds;
              if ("month" === (t = L(t)) || "quarter" === t || "year" === t)
                switch (
                  ((e = this._days + r / 864e5), (n = this._months + bn(e)), t)
                ) {
                  case "month":
                    return n;
                  case "quarter":
                    return n / 3;
                  case "year":
                    return n / 12;
                }
              else
                switch (((e = this._days + Math.round(xn(this._months))), t)) {
                  case "week":
                    return e / 7 + r / 6048e5;
                  case "day":
                    return e + r / 864e5;
                  case "hour":
                    return 24 * e + r / 36e5;
                  case "minute":
                    return 1440 * e + r / 6e4;
                  case "second":
                    return 86400 * e + r / 1e3;
                  case "millisecond":
                    return Math.floor(864e5 * e) + r;
                  default:
                    throw new Error("Unknown unit " + t);
                }
            }),
            (Un.asMilliseconds = wn),
            (Un.asSeconds = kn),
            (Un.asMinutes = Mn),
            (Un.asHours = Sn),
            (Un.asDays = Dn),
            (Un.asWeeks = Cn),
            (Un.asMonths = Pn),
            (Un.asQuarters = Tn),
            (Un.asYears = On),
            (Un.valueOf = function () {
              return this.isValid()
                ? this._milliseconds +
                    864e5 * this._days +
                    (this._months % 12) * 2592e6 +
                    31536e6 * w(this._months / 12)
                : NaN;
            }),
            (Un._bubble = function () {
              var t,
                e,
                n,
                r,
                i,
                a = this._milliseconds,
                o = this._days,
                s = this._months,
                l = this._data;
              return (
                (a >= 0 && o >= 0 && s >= 0) ||
                  (a <= 0 && o <= 0 && s <= 0) ||
                  ((a += 864e5 * yn(xn(s) + o)), (o = 0), (s = 0)),
                (l.milliseconds = a % 1e3),
                (t = _(a / 1e3)),
                (l.seconds = t % 60),
                (e = _(t / 60)),
                (l.minutes = e % 60),
                (n = _(e / 60)),
                (l.hours = n % 24),
                (o += _(n / 24)),
                (i = _(bn(o))),
                (s += i),
                (o -= yn(xn(i))),
                (r = _(s / 12)),
                (s %= 12),
                (l.days = o),
                (l.months = s),
                (l.years = r),
                this
              );
            }),
            (Un.clone = function () {
              return je(this);
            }),
            (Un.get = function (t) {
              return (t = L(t)), this.isValid() ? this[t + "s"]() : NaN;
            }),
            (Un.milliseconds = In),
            (Un.seconds = Fn),
            (Un.minutes = Ln),
            (Un.hours = Rn),
            (Un.days = En),
            (Un.weeks = function () {
              return _(this.days() / 7);
            }),
            (Un.months = Nn),
            (Un.years = Wn),
            (Un.humanize = function (t) {
              if (!this.isValid()) return this.localeData().invalidDate();
              var e = this.localeData(),
                n = (function (t, e, n) {
                  var r = je(t).abs(),
                    i = zn(r.as("s")),
                    a = zn(r.as("m")),
                    o = zn(r.as("h")),
                    s = zn(r.as("d")),
                    l = zn(r.as("M")),
                    u = zn(r.as("y")),
                    c = (i <= jn.ss && ["s", i]) ||
                      (i < jn.s && ["ss", i]) ||
                      (a <= 1 && ["m"]) ||
                      (a < jn.m && ["mm", a]) ||
                      (o <= 1 && ["h"]) ||
                      (o < jn.h && ["hh", o]) ||
                      (s <= 1 && ["d"]) ||
                      (s < jn.d && ["dd", s]) ||
                      (l <= 1 && ["M"]) ||
                      (l < jn.M && ["MM", l]) ||
                      (u <= 1 && ["y"]) || ["yy", u];
                  return (
                    (c[2] = e), (c[3] = +t > 0), (c[4] = n), Yn.apply(null, c)
                  );
                })(this, !t, e);
              return t && (n = e.pastFuture(+this, n)), e.postformat(n);
            }),
            (Un.toISOString = Hn),
            (Un.toString = Hn),
            (Un.toJSON = Hn),
            (Un.locale = $e),
            (Un.localeData = Ke),
            (Un.toIsoString = S(
              "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
              Hn,
            )),
            (Un.lang = Ze),
            B("X", 0, 0, "unix"),
            B("x", 0, 0, "valueOf"),
            ut("x", it),
            ut("X", /[+-]?\d+(\.\d{1,3})?/),
            ft("X", function (t, e, n) {
              n._d = new Date(1e3 * parseFloat(t, 10));
            }),
            ft("x", function (t, e, n) {
              n._d = new Date(w(t));
            }),
            (r.version = "2.24.0"),
            (e = Me),
            (r.fn = cn),
            (r.min = function () {
              var t = [].slice.call(arguments, 0);
              return Ce("isBefore", t);
            }),
            (r.max = function () {
              var t = [].slice.call(arguments, 0);
              return Ce("isAfter", t);
            }),
            (r.now = function () {
              return Date.now ? Date.now() : +new Date();
            }),
            (r.utc = d),
            (r.unix = function (t) {
              return Me(1e3 * t);
            }),
            (r.months = function (t, e) {
              return pn(t, e, "months");
            }),
            (r.isDate = l),
            (r.locale = ie),
            (r.invalid = g),
            (r.duration = je),
            (r.isMoment = x),
            (r.weekdays = function (t, e, n) {
              return gn(t, e, n, "weekdays");
            }),
            (r.parseZone = function () {
              return Me.apply(null, arguments).parseZone();
            }),
            (r.localeData = oe),
            (r.isDuration = Oe),
            (r.monthsShort = function (t, e) {
              return pn(t, e, "monthsShort");
            }),
            (r.weekdaysMin = function (t, e, n) {
              return gn(t, e, n, "weekdaysMin");
            }),
            (r.defineLocale = ae),
            (r.updateLocale = function (t, e) {
              if (null != e) {
                var n,
                  r,
                  i = Qt;
                null != (r = re(t)) && (i = r._config),
                  (e = O(i, e)),
                  ((n = new A(e)).parentLocale = te[t]),
                  (te[t] = n),
                  ie(t);
              } else
                null != te[t] &&
                  (null != te[t].parentLocale
                    ? (te[t] = te[t].parentLocale)
                    : null != te[t] && delete te[t]);
              return te[t];
            }),
            (r.locales = function () {
              return D(te);
            }),
            (r.weekdaysShort = function (t, e, n) {
              return gn(t, e, n, "weekdaysShort");
            }),
            (r.normalizeUnits = L),
            (r.relativeTimeRounding = function (t) {
              return void 0 === t
                ? zn
                : "function" === typeof t && ((zn = t), !0);
            }),
            (r.relativeTimeThreshold = function (t, e) {
              return (
                void 0 !== jn[t] &&
                (void 0 === e
                  ? jn[t]
                  : ((jn[t] = e), "s" === t && (jn.ss = e - 1), !0))
              );
            }),
            (r.calendarFormat = function (t, e) {
              var n = t.diff(e, "days", !0);
              return n < -6
                ? "sameElse"
                : n < -1
                  ? "lastWeek"
                  : n < 0
                    ? "lastDay"
                    : n < 1
                      ? "sameDay"
                      : n < 2
                        ? "nextDay"
                        : n < 7
                          ? "nextWeek"
                          : "sameElse";
            }),
            (r.prototype = cn),
            (r.HTML5_FMT = {
              DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
              DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
              DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
              DATE: "YYYY-MM-DD",
              TIME: "HH:mm",
              TIME_SECONDS: "HH:mm:ss",
              TIME_MS: "HH:mm:ss.SSS",
              WEEK: "GGGG-[W]WW",
              MONTH: "YYYY-MM",
            }),
            r
          );
        })();
      }).call(this, n(128)(t));
    },
    function (t, e, n) {
      var r = n(138);
      t.exports = function (t, e) {
        return r(t, e);
      };
    },
    function (t, e, n) {
      var r = n(155),
        i = n(160),
        a = n(230),
        o = n(234),
        s = n(252),
        l = n(122),
        u = n(162),
        c = n(164),
        h = "[object Object]",
        d = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n, f, p, g) {
        var m = l(t),
          v = l(e),
          y = m ? "[object Array]" : s(t),
          b = v ? "[object Array]" : s(e),
          x = (y = "[object Arguments]" == y ? h : y) == h,
          _ = (b = "[object Arguments]" == b ? h : b) == h,
          w = y == b;
        if (w && u(t)) {
          if (!u(e)) return !1;
          (m = !0), (x = !1);
        }
        if (w && !x)
          return (
            g || (g = new r()),
            m || c(t) ? i(t, e, n, f, p, g) : a(t, e, y, n, f, p, g)
          );
        if (!(1 & n)) {
          var k = x && d.call(t, "__wrapped__"),
            M = _ && d.call(e, "__wrapped__");
          if (k || M) {
            var S = k ? t.value() : t,
              D = M ? e.value() : e;
            return g || (g = new r()), p(S, D, n, f, g);
          }
        }
        return !!w && (g || (g = new r()), o(t, e, n, f, p, g));
      };
    },
    function (t, e) {
      t.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function (t, e, n) {
      var r = n(130),
        i = Array.prototype.splice;
      t.exports = function (t) {
        var e = this.__data__,
          n = r(e, t);
        return (
          !(n < 0) &&
          (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, !0)
        );
      };
    },
    function (t, e, n) {
      var r = n(130);
      t.exports = function (t) {
        var e = this.__data__,
          n = r(e, t);
        return n < 0 ? void 0 : e[n][1];
      };
    },
    function (t, e, n) {
      var r = n(130);
      t.exports = function (t) {
        return r(this.__data__, t) > -1;
      };
    },
    function (t, e, n) {
      var r = n(130);
      t.exports = function (t, e) {
        var n = this.__data__,
          i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
      };
    },
    function (t, e, n) {
      var r = n(129);
      t.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = this.__data__,
          n = e.delete(t);
        return (this.size = e.size), n;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.get(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    function (t, e, n) {
      var r = n(129),
        i = n(139),
        a = n(141);
      t.exports = function (t, e) {
        var n = this.__data__;
        if (n instanceof r) {
          var o = n.__data__;
          if (!i || o.length < 199)
            return o.push([t, e]), (this.size = ++n.size), this;
          n = this.__data__ = new a(o);
        }
        return n.set(t, e), (this.size = n.size), this;
      };
    },
    function (t, e, n) {
      var r = n(157),
        i = n(210),
        a = n(140),
        o = n(159),
        s = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        u = Object.prototype,
        c = l.toString,
        h = u.hasOwnProperty,
        d = RegExp(
          "^" +
            c
              .call(h)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ) +
            "$",
        );
      t.exports = function (t) {
        return !(!a(t) || i(t)) && (r(t) ? d : s).test(o(t));
      };
    },
    function (t, e, n) {
      var r = n(131),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = r ? r.toStringTag : void 0;
      t.exports = function (t) {
        var e = a.call(t, s),
          n = t[s];
        try {
          t[s] = void 0;
          var r = !0;
        } catch (l) {}
        var i = o.call(t);
        return r && (e ? (t[s] = n) : delete t[s]), i;
      };
    },
    function (t, e) {
      var n = Object.prototype.toString;
      t.exports = function (t) {
        return n.call(t);
      };
    },
    function (t, e, n) {
      var r = n(211),
        i = (function () {
          var t = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || "");
          return t ? "Symbol(src)_1." + t : "";
        })();
      t.exports = function (t) {
        return !!i && i in t;
      };
    },
    function (t, e, n) {
      var r = n(121)["__core-js_shared__"];
      t.exports = r;
    },
    function (t, e) {
      t.exports = function (t, e) {
        return null == t ? void 0 : t[e];
      };
    },
    function (t, e, n) {
      var r = n(214),
        i = n(129),
        a = n(139);
      t.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (a || i)(),
            string: new r(),
          });
      };
    },
    function (t, e, n) {
      var r = n(215),
        i = n(216),
        a = n(217),
        o = n(218),
        s = n(219);
      function l(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n; ) {
          var r = t[e];
          this.set(r[0], r[1]);
        }
      }
      (l.prototype.clear = r),
        (l.prototype.delete = i),
        (l.prototype.get = a),
        (l.prototype.has = o),
        (l.prototype.set = s),
        (t.exports = l);
    },
    function (t, e, n) {
      var r = n(132);
      t.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = this.has(t) && delete this.__data__[t];
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function (t, e, n) {
      var r = n(132),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        if (r) {
          var n = e[t];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return i.call(e, t) ? e[t] : void 0;
      };
    },
    function (t, e, n) {
      var r = n(132),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t);
      };
    },
    function (t, e, n) {
      var r = n(132);
      t.exports = function (t, e) {
        var n = this.__data__;
        return (
          (this.size += this.has(t) ? 0 : 1),
          (n[t] = r && void 0 === e ? "__lodash_hash_undefined__" : e),
          this
        );
      };
    },
    function (t, e, n) {
      var r = n(133);
      t.exports = function (t) {
        var e = r(this, t).delete(t);
        return (this.size -= e ? 1 : 0), e;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e
          ? "__proto__" !== t
          : null === t;
      };
    },
    function (t, e, n) {
      var r = n(133);
      t.exports = function (t) {
        return r(this, t).get(t);
      };
    },
    function (t, e, n) {
      var r = n(133);
      t.exports = function (t) {
        return r(this, t).has(t);
      };
    },
    function (t, e, n) {
      var r = n(133);
      t.exports = function (t, e) {
        var n = r(this, t),
          i = n.size;
        return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
      };
    },
    function (t, e, n) {
      var r = n(141),
        i = n(226),
        a = n(227);
      function o(t) {
        var e = -1,
          n = null == t ? 0 : t.length;
        for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
      }
      (o.prototype.add = o.prototype.push = i),
        (o.prototype.has = a),
        (t.exports = o);
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.set(t, "__lodash_hash_undefined__"), this;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return this.__data__.has(t);
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (e(t[n], n, t)) return !0;
        return !1;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return t.has(e);
      };
    },
    function (t, e, n) {
      var r = n(131),
        i = n(231),
        a = n(156),
        o = n(160),
        s = n(232),
        l = n(233),
        u = r ? r.prototype : void 0,
        c = u ? u.valueOf : void 0;
      t.exports = function (t, e, n, r, u, h, d) {
        switch (n) {
          case "[object DataView]":
            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
              return !1;
            (t = t.buffer), (e = e.buffer);
          case "[object ArrayBuffer]":
            return !(t.byteLength != e.byteLength || !h(new i(t), new i(e)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return a(+t, +e);
          case "[object Error]":
            return t.name == e.name && t.message == e.message;
          case "[object RegExp]":
          case "[object String]":
            return t == e + "";
          case "[object Map]":
            var f = s;
          case "[object Set]":
            var p = 1 & r;
            if ((f || (f = l), t.size != e.size && !p)) return !1;
            var g = d.get(t);
            if (g) return g == e;
            (r |= 2), d.set(t, e);
            var m = o(f(t), f(e), r, u, h, d);
            return d.delete(t), m;
          case "[object Symbol]":
            if (c) return c.call(t) == c.call(e);
        }
        return !1;
      };
    },
    function (t, e, n) {
      var r = n(121).Uint8Array;
      t.exports = r;
    },
    function (t, e) {
      t.exports = function (t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t, r) {
            n[++e] = [r, t];
          }),
          n
        );
      };
    },
    function (t, e) {
      t.exports = function (t) {
        var e = -1,
          n = Array(t.size);
        return (
          t.forEach(function (t) {
            n[++e] = t;
          }),
          n
        );
      };
    },
    function (t, e, n) {
      var r = n(235),
        i = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n, a, o, s) {
        var l = 1 & n,
          u = r(t),
          c = u.length;
        if (c != r(e).length && !l) return !1;
        for (var h = c; h--; ) {
          var d = u[h];
          if (!(l ? d in e : i.call(e, d))) return !1;
        }
        var f = s.get(t);
        if (f && s.get(e)) return f == e;
        var p = !0;
        s.set(t, e), s.set(e, t);
        for (var g = l; ++h < c; ) {
          var m = t[(d = u[h])],
            v = e[d];
          if (a) var y = l ? a(v, m, d, e, t, s) : a(m, v, d, t, e, s);
          if (!(void 0 === y ? m === v || o(m, v, n, a, s) : y)) {
            p = !1;
            break;
          }
          g || (g = "constructor" == d);
        }
        if (p && !g) {
          var b = t.constructor,
            x = e.constructor;
          b == x ||
            !("constructor" in t) ||
            !("constructor" in e) ||
            ("function" == typeof b &&
              b instanceof b &&
              "function" == typeof x &&
              x instanceof x) ||
            (p = !1);
        }
        return s.delete(t), s.delete(e), p;
      };
    },
    function (t, e, n) {
      var r = n(236),
        i = n(238),
        a = n(142);
      t.exports = function (t) {
        return r(t, a, i);
      };
    },
    function (t, e, n) {
      var r = n(237),
        i = n(122);
      t.exports = function (t, e, n) {
        var a = e(t);
        return i(t) ? a : r(a, n(t));
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
        return t;
      };
    },
    function (t, e, n) {
      var r = n(239),
        i = n(240),
        a = Object.prototype.propertyIsEnumerable,
        o = Object.getOwnPropertySymbols,
        s = o
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  r(o(t), function (e) {
                    return a.call(t, e);
                  }));
            }
          : i;
      t.exports = s;
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (
          var n = -1, r = null == t ? 0 : t.length, i = 0, a = [];
          ++n < r;

        ) {
          var o = t[n];
          e(o, n, t) && (a[i++] = o);
        }
        return a;
      };
    },
    function (t, e) {
      t.exports = function () {
        return [];
      };
    },
    function (t, e, n) {
      var r = n(242),
        i = n(161),
        a = n(122),
        o = n(162),
        s = n(163),
        l = n(164),
        u = Object.prototype.hasOwnProperty;
      t.exports = function (t, e) {
        var n = a(t),
          c = !n && i(t),
          h = !n && !c && o(t),
          d = !n && !c && !h && l(t),
          f = n || c || h || d,
          p = f ? r(t.length, String) : [],
          g = p.length;
        for (var m in t)
          (!e && !u.call(t, m)) ||
            (f &&
              ("length" == m ||
                (h && ("offset" == m || "parent" == m)) ||
                (d &&
                  ("buffer" == m || "byteLength" == m || "byteOffset" == m)) ||
                s(m, g))) ||
            p.push(m);
        return p;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
        return r;
      };
    },
    function (t, e, n) {
      var r = n(124),
        i = n(125);
      t.exports = function (t) {
        return i(t) && "[object Arguments]" == r(t);
      };
    },
    function (t, e) {
      t.exports = function () {
        return !1;
      };
    },
    function (t, e, n) {
      var r = n(124),
        i = n(143),
        a = n(125),
        o = {};
      (o["[object Float32Array]"] =
        o["[object Float64Array]"] =
        o["[object Int8Array]"] =
        o["[object Int16Array]"] =
        o["[object Int32Array]"] =
        o["[object Uint8Array]"] =
        o["[object Uint8ClampedArray]"] =
        o["[object Uint16Array]"] =
        o["[object Uint32Array]"] =
          !0),
        (o["[object Arguments]"] =
          o["[object Array]"] =
          o["[object ArrayBuffer]"] =
          o["[object Boolean]"] =
          o["[object DataView]"] =
          o["[object Date]"] =
          o["[object Error]"] =
          o["[object Function]"] =
          o["[object Map]"] =
          o["[object Number]"] =
          o["[object Object]"] =
          o["[object RegExp]"] =
          o["[object Set]"] =
          o["[object String]"] =
          o["[object WeakMap]"] =
            !1),
        (t.exports = function (t) {
          return a(t) && i(t.length) && !!o[r(t)];
        });
    },
    function (t, e) {
      t.exports = function (t) {
        return function (e) {
          return t(e);
        };
      };
    },
    function (t, e, n) {
      (function (t) {
        var r = n(158),
          i = e && !e.nodeType && e,
          a = i && "object" == typeof t && t && !t.nodeType && t,
          o = a && a.exports === i && r.process,
          s = (function () {
            try {
              var t = a && a.require && a.require("util").types;
              return t || (o && o.binding && o.binding("util"));
            } catch (e) {}
          })();
        t.exports = s;
      }).call(this, n(128)(t));
    },
    function (t, e, n) {
      var r = n(249),
        i = n(250),
        a = Object.prototype.hasOwnProperty;
      t.exports = function (t) {
        if (!r(t)) return i(t);
        var e = [];
        for (var n in Object(t))
          a.call(t, n) && "constructor" != n && e.push(n);
        return e;
      };
    },
    function (t, e) {
      var n = Object.prototype;
      t.exports = function (t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || n);
      };
    },
    function (t, e, n) {
      var r = n(251)(Object.keys, Object);
      t.exports = r;
    },
    function (t, e) {
      t.exports = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      };
    },
    function (t, e, n) {
      var r = n(253),
        i = n(139),
        a = n(254),
        o = n(255),
        s = n(256),
        l = n(124),
        u = n(159),
        c = u(r),
        h = u(i),
        d = u(a),
        f = u(o),
        p = u(s),
        g = l;
      ((r && "[object DataView]" != g(new r(new ArrayBuffer(1)))) ||
        (i && "[object Map]" != g(new i())) ||
        (a && "[object Promise]" != g(a.resolve())) ||
        (o && "[object Set]" != g(new o())) ||
        (s && "[object WeakMap]" != g(new s()))) &&
        (g = function (t) {
          var e = l(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? u(n) : "";
          if (r)
            switch (r) {
              case c:
                return "[object DataView]";
              case h:
                return "[object Map]";
              case d:
                return "[object Promise]";
              case f:
                return "[object Set]";
              case p:
                return "[object WeakMap]";
            }
          return e;
        }),
        (t.exports = g);
    },
    function (t, e, n) {
      var r = n(123)(n(121), "DataView");
      t.exports = r;
    },
    function (t, e, n) {
      var r = n(123)(n(121), "Promise");
      t.exports = r;
    },
    function (t, e, n) {
      var r = n(123)(n(121), "Set");
      t.exports = r;
    },
    function (t, e, n) {
      var r = n(123)(n(121), "WeakMap");
      t.exports = r;
    },
    function (t, e, n) {
      var r = n(258),
        i = n(260)(function (t, e, n) {
          r(t, n, e);
        });
      t.exports = i;
    },
    function (t, e, n) {
      var r = n(259);
      t.exports = function (t, e, n) {
        "__proto__" == e && r
          ? r(t, e, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (t[e] = n);
      };
    },
    function (t, e, n) {
      var r = n(123),
        i = (function () {
          try {
            var t = r(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (e) {}
        })();
      t.exports = i;
    },
    function (t, e, n) {
      var r = n(261),
        i = n(262),
        a = n(268),
        o = n(122);
      t.exports = function (t, e) {
        return function (n, s) {
          var l = o(n) ? r : i,
            u = e ? e() : {};
          return l(n, t, a(s, 2), u);
        };
      };
    },
    function (t, e) {
      t.exports = function (t, e, n, r) {
        for (var i = -1, a = null == t ? 0 : t.length; ++i < a; ) {
          var o = t[i];
          e(r, o, n(o), t);
        }
        return r;
      };
    },
    function (t, e, n) {
      var r = n(263);
      t.exports = function (t, e, n, i) {
        return (
          r(t, function (t, r, a) {
            e(i, t, n(t), a);
          }),
          i
        );
      };
    },
    function (t, e, n) {
      var r = n(264),
        i = n(267)(r);
      t.exports = i;
    },
    function (t, e, n) {
      var r = n(265),
        i = n(142);
      t.exports = function (t, e) {
        return t && r(t, e, i);
      };
    },
    function (t, e, n) {
      var r = n(266)();
      t.exports = r;
    },
    function (t, e) {
      t.exports = function (t) {
        return function (e, n, r) {
          for (var i = -1, a = Object(e), o = r(e), s = o.length; s--; ) {
            var l = o[t ? s : ++i];
            if (!1 === n(a[l], l, a)) break;
          }
          return e;
        };
      };
    },
    function (t, e, n) {
      var r = n(165);
      t.exports = function (t, e) {
        return function (n, i) {
          if (null == n) return n;
          if (!r(n)) return t(n, i);
          for (
            var a = n.length, o = e ? a : -1, s = Object(n);
            (e ? o-- : ++o < a) && !1 !== i(s[o], o, s);

          );
          return n;
        };
      };
    },
    function (t, e, n) {
      var r = n(269),
        i = n(272),
        a = n(283),
        o = n(122),
        s = n(284);
      t.exports = function (t) {
        return "function" == typeof t
          ? t
          : null == t
            ? a
            : "object" == typeof t
              ? o(t)
                ? i(t[0], t[1])
                : r(t)
              : s(t);
      };
    },
    function (t, e, n) {
      var r = n(270),
        i = n(271),
        a = n(167);
      t.exports = function (t) {
        var e = i(t);
        return 1 == e.length && e[0][2]
          ? a(e[0][0], e[0][1])
          : function (n) {
              return n === t || r(n, t, e);
            };
      };
    },
    function (t, e, n) {
      var r = n(155),
        i = n(138);
      t.exports = function (t, e, n, a) {
        var o = n.length,
          s = o,
          l = !a;
        if (null == t) return !s;
        for (t = Object(t); o--; ) {
          var u = n[o];
          if (l && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
        }
        for (; ++o < s; ) {
          var c = (u = n[o])[0],
            h = t[c],
            d = u[1];
          if (l && u[2]) {
            if (void 0 === h && !(c in t)) return !1;
          } else {
            var f = new r();
            if (a) var p = a(h, d, c, t, e, f);
            if (!(void 0 === p ? i(d, h, 3, a, f) : p)) return !1;
          }
        }
        return !0;
      };
    },
    function (t, e, n) {
      var r = n(166),
        i = n(142);
      t.exports = function (t) {
        for (var e = i(t), n = e.length; n--; ) {
          var a = e[n],
            o = t[a];
          e[n] = [a, o, r(o)];
        }
        return e;
      };
    },
    function (t, e, n) {
      var r = n(138),
        i = n(273),
        a = n(280),
        o = n(144),
        s = n(166),
        l = n(167),
        u = n(134);
      t.exports = function (t, e) {
        return o(t) && s(e)
          ? l(u(t), e)
          : function (n) {
              var o = i(n, t);
              return void 0 === o && o === e ? a(n, t) : r(e, o, 3);
            };
      };
    },
    function (t, e, n) {
      var r = n(168);
      t.exports = function (t, e, n) {
        var i = null == t ? void 0 : r(t, e);
        return void 0 === i ? n : i;
      };
    },
    function (t, e, n) {
      var r = n(275),
        i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        o = r(function (t) {
          var e = [];
          return (
            46 === t.charCodeAt(0) && e.push(""),
            t.replace(i, function (t, n, r, i) {
              e.push(r ? i.replace(a, "$1") : n || t);
            }),
            e
          );
        });
      t.exports = o;
    },
    function (t, e, n) {
      var r = n(276);
      t.exports = function (t) {
        var e = r(t, function (t) {
            return 500 === n.size && n.clear(), t;
          }),
          n = e.cache;
        return e;
      };
    },
    function (t, e, n) {
      var r = n(141);
      function i(t, e) {
        if ("function" != typeof t || (null != e && "function" != typeof e))
          throw new TypeError("Expected a function");
        var n = function n() {
          var r = arguments,
            i = e ? e.apply(this, r) : r[0],
            a = n.cache;
          if (a.has(i)) return a.get(i);
          var o = t.apply(this, r);
          return (n.cache = a.set(i, o) || a), o;
        };
        return (n.cache = new (i.Cache || r)()), n;
      }
      (i.Cache = r), (t.exports = i);
    },
    function (t, e, n) {
      var r = n(278);
      t.exports = function (t) {
        return null == t ? "" : r(t);
      };
    },
    function (t, e, n) {
      var r = n(131),
        i = n(279),
        a = n(122),
        o = n(145),
        s = r ? r.prototype : void 0,
        l = s ? s.toString : void 0;
      t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (a(e)) return i(e, t) + "";
        if (o(e)) return l ? l.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -1 / 0 ? "-0" : n;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
          i[n] = e(t[n], n, t);
        return i;
      };
    },
    function (t, e, n) {
      var r = n(281),
        i = n(282);
      t.exports = function (t, e) {
        return null != t && i(t, e, r);
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return null != t && e in Object(t);
      };
    },
    function (t, e, n) {
      var r = n(169),
        i = n(161),
        a = n(122),
        o = n(163),
        s = n(143),
        l = n(134);
      t.exports = function (t, e, n) {
        for (var u = -1, c = (e = r(e, t)).length, h = !1; ++u < c; ) {
          var d = l(e[u]);
          if (!(h = null != t && n(t, d))) break;
          t = t[d];
        }
        return h || ++u != c
          ? h
          : !!(c = null == t ? 0 : t.length) &&
              s(c) &&
              o(d, c) &&
              (a(t) || i(t));
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return t;
      };
    },
    function (t, e, n) {
      var r = n(285),
        i = n(286),
        a = n(144),
        o = n(134);
      t.exports = function (t) {
        return a(t) ? r(o(t)) : i(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return function (e) {
          return null == e ? void 0 : e[t];
        };
      };
    },
    function (t, e, n) {
      var r = n(168);
      t.exports = function (t) {
        return function (e) {
          return r(e, t);
        };
      };
    },
  ]),
]);
//# sourceMappingURL=0.b7133d75.chunk.js.map
