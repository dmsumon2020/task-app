var iv = (i) => {
  throw TypeError(i);
};
var Uf = (i, t, r) => t.has(i) || iv("Cannot " + r);
var E = (i, t, r) => (
    Uf(i, t, "read from private field"), r ? r.call(i) : t.get(i)
  ),
  J = (i, t, r) =>
    t.has(i)
      ? iv("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(i)
      : t.set(i, r),
  F = (i, t, r, s) => (
    Uf(i, t, "write to private field"), s ? s.call(i, r) : t.set(i, r), r
  ),
  de = (i, t, r) => (Uf(i, t, "access private method"), r);
var Mo = (i, t, r, s) => ({
  set _(o) {
    F(i, t, o, r);
  },
  get _() {
    return E(i, t, s);
  },
});
function ST(i, t) {
  for (var r = 0; r < t.length; r++) {
    const s = t[r];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const o in s)
        if (o !== "default" && !(o in i)) {
          const c = Object.getOwnPropertyDescriptor(s, o);
          c &&
            Object.defineProperty(
              i,
              o,
              c.get ? c : { enumerable: !0, get: () => s[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(i, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const c of o)
      if (c.type === "childList")
        for (const d of c.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const c = {};
    return (
      o.integrity && (c.integrity = o.integrity),
      o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const c = r(o);
    fetch(o.href, c);
  }
})();
function Vy(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var If = { exports: {} },
  Ps = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rv;
function ET() {
  if (rv) return Ps;
  rv = 1;
  var i = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.fragment");
  function r(s, o, c) {
    var d = null;
    if (
      (c !== void 0 && (d = "" + c),
      o.key !== void 0 && (d = "" + o.key),
      "key" in o)
    ) {
      c = {};
      for (var h in o) h !== "key" && (c[h] = o[h]);
    } else c = o;
    return (
      (o = c.ref),
      { $$typeof: i, type: s, key: d, ref: o !== void 0 ? o : null, props: c }
    );
  }
  return (Ps.Fragment = t), (Ps.jsx = r), (Ps.jsxs = r), Ps;
}
var av;
function TT() {
  return av || ((av = 1), (If.exports = ET())), If.exports;
}
var Q = TT(),
  Lf = { exports: {} },
  ce = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sv;
function _T() {
  if (sv) return ce;
  sv = 1;
  var i = Symbol.for("react.transitional.element"),
    t = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    c = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    b = Symbol.iterator;
  function w(T) {
    return T === null || typeof T != "object"
      ? null
      : ((T = (b && T[b]) || T["@@iterator"]),
        typeof T == "function" ? T : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    N = {};
  function R(T, B, ne) {
    (this.props = T),
      (this.context = B),
      (this.refs = N),
      (this.updater = ne || A);
  }
  (R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (T, B) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, T, B, "setState");
    }),
    (R.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate");
    });
  function k() {}
  k.prototype = R.prototype;
  function P(T, B, ne) {
    (this.props = T),
      (this.context = B),
      (this.refs = N),
      (this.updater = ne || A);
  }
  var q = (P.prototype = new k());
  (q.constructor = P), U(q, R.prototype), (q.isPureReactComponent = !0);
  var W = Array.isArray,
    Y = { H: null, A: null, T: null, S: null },
    se = Object.prototype.hasOwnProperty;
  function ye(T, B, ne, ee, X, Ee) {
    return (
      (ne = Ee.ref),
      {
        $$typeof: i,
        type: T,
        key: B,
        ref: ne !== void 0 ? ne : null,
        props: Ee,
      }
    );
  }
  function me(T, B) {
    return ye(T.type, B, void 0, void 0, void 0, T.props);
  }
  function V(T) {
    return typeof T == "object" && T !== null && T.$$typeof === i;
  }
  function fe(T) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      T.replace(/[=:]/g, function (ne) {
        return B[ne];
      })
    );
  }
  var Ke = /\/+/g;
  function vt(T, B) {
    return typeof T == "object" && T !== null && T.key != null
      ? fe("" + T.key)
      : B.toString(36);
  }
  function an() {}
  function En(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (
          (typeof T.status == "string"
            ? T.then(an, an)
            : ((T.status = "pending"),
              T.then(
                function (B) {
                  T.status === "pending" &&
                    ((T.status = "fulfilled"), (T.value = B));
                },
                function (B) {
                  T.status === "pending" &&
                    ((T.status = "rejected"), (T.reason = B));
                }
              )),
          T.status)
        ) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function yt(T, B, ne, ee, X) {
    var Ee = typeof T;
    (Ee === "undefined" || Ee === "boolean") && (T = null);
    var he = !1;
    if (T === null) he = !0;
    else
      switch (Ee) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case i:
            case t:
              he = !0;
              break;
            case y:
              return (he = T._init), yt(he(T._payload), B, ne, ee, X);
          }
      }
    if (he)
      return (
        (X = X(T)),
        (he = ee === "" ? "." + vt(T, 0) : ee),
        W(X)
          ? ((ne = ""),
            he != null && (ne = he.replace(Ke, "$&/") + "/"),
            yt(X, B, ne, "", function (Qe) {
              return Qe;
            }))
          : X != null &&
            (V(X) &&
              (X = me(
                X,
                ne +
                  (X.key == null || (T && T.key === X.key)
                    ? ""
                    : ("" + X.key).replace(Ke, "$&/") + "/") +
                  he
              )),
            B.push(X)),
        1
      );
    he = 0;
    var ft = ee === "" ? "." : ee + ":";
    if (W(T))
      for (var De = 0; De < T.length; De++)
        (ee = T[De]), (Ee = ft + vt(ee, De)), (he += yt(ee, B, ne, Ee, X));
    else if (((De = w(T)), typeof De == "function"))
      for (T = De.call(T), De = 0; !(ee = T.next()).done; )
        (ee = ee.value), (Ee = ft + vt(ee, De++)), (he += yt(ee, B, ne, Ee, X));
    else if (Ee === "object") {
      if (typeof T.then == "function") return yt(En(T), B, ne, ee, X);
      throw (
        ((B = String(T)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(T).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return he;
  }
  function G(T, B, ne) {
    if (T == null) return T;
    var ee = [],
      X = 0;
    return (
      yt(T, ee, "", "", function (Ee) {
        return B.call(ne, Ee, X++);
      }),
      ee
    );
  }
  function le(T) {
    if (T._status === -1) {
      var B = T._result;
      (B = B()),
        B.then(
          function (ne) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 1), (T._result = ne));
          },
          function (ne) {
            (T._status === 0 || T._status === -1) &&
              ((T._status = 2), (T._result = ne));
          }
        ),
        T._status === -1 && ((T._status = 0), (T._result = B));
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var ie =
    typeof reportError == "function"
      ? reportError
      : function (T) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var B = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof T == "object" &&
                T !== null &&
                typeof T.message == "string"
                  ? String(T.message)
                  : String(T),
              error: T,
            });
            if (!window.dispatchEvent(B)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", T);
            return;
          }
          console.error(T);
        };
  function Me() {}
  return (
    (ce.Children = {
      map: G,
      forEach: function (T, B, ne) {
        G(
          T,
          function () {
            B.apply(this, arguments);
          },
          ne
        );
      },
      count: function (T) {
        var B = 0;
        return (
          G(T, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (T) {
        return (
          G(T, function (B) {
            return B;
          }) || []
        );
      },
      only: function (T) {
        if (!V(T))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return T;
      },
    }),
    (ce.Component = R),
    (ce.Fragment = r),
    (ce.Profiler = o),
    (ce.PureComponent = P),
    (ce.StrictMode = s),
    (ce.Suspense = g),
    (ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Y),
    (ce.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (ce.cache = function (T) {
      return function () {
        return T.apply(null, arguments);
      };
    }),
    (ce.cloneElement = function (T, B, ne) {
      if (T == null)
        throw Error(
          "The argument must be a React element, but you passed " + T + "."
        );
      var ee = U({}, T.props),
        X = T.key,
        Ee = void 0;
      if (B != null)
        for (he in (B.ref !== void 0 && (Ee = void 0),
        B.key !== void 0 && (X = "" + B.key),
        B))
          !se.call(B, he) ||
            he === "key" ||
            he === "__self" ||
            he === "__source" ||
            (he === "ref" && B.ref === void 0) ||
            (ee[he] = B[he]);
      var he = arguments.length - 2;
      if (he === 1) ee.children = ne;
      else if (1 < he) {
        for (var ft = Array(he), De = 0; De < he; De++)
          ft[De] = arguments[De + 2];
        ee.children = ft;
      }
      return ye(T.type, X, void 0, void 0, Ee, ee);
    }),
    (ce.createContext = function (T) {
      return (
        (T = {
          $$typeof: d,
          _currentValue: T,
          _currentValue2: T,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (T.Provider = T),
        (T.Consumer = { $$typeof: c, _context: T }),
        T
      );
    }),
    (ce.createElement = function (T, B, ne) {
      var ee,
        X = {},
        Ee = null;
      if (B != null)
        for (ee in (B.key !== void 0 && (Ee = "" + B.key), B))
          se.call(B, ee) &&
            ee !== "key" &&
            ee !== "__self" &&
            ee !== "__source" &&
            (X[ee] = B[ee]);
      var he = arguments.length - 2;
      if (he === 1) X.children = ne;
      else if (1 < he) {
        for (var ft = Array(he), De = 0; De < he; De++)
          ft[De] = arguments[De + 2];
        X.children = ft;
      }
      if (T && T.defaultProps)
        for (ee in ((he = T.defaultProps), he))
          X[ee] === void 0 && (X[ee] = he[ee]);
      return ye(T, Ee, void 0, void 0, null, X);
    }),
    (ce.createRef = function () {
      return { current: null };
    }),
    (ce.forwardRef = function (T) {
      return { $$typeof: h, render: T };
    }),
    (ce.isValidElement = V),
    (ce.lazy = function (T) {
      return { $$typeof: y, _payload: { _status: -1, _result: T }, _init: le };
    }),
    (ce.memo = function (T, B) {
      return { $$typeof: m, type: T, compare: B === void 0 ? null : B };
    }),
    (ce.startTransition = function (T) {
      var B = Y.T,
        ne = {};
      Y.T = ne;
      try {
        var ee = T(),
          X = Y.S;
        X !== null && X(ne, ee),
          typeof ee == "object" &&
            ee !== null &&
            typeof ee.then == "function" &&
            ee.then(Me, ie);
      } catch (Ee) {
        ie(Ee);
      } finally {
        Y.T = B;
      }
    }),
    (ce.unstable_useCacheRefresh = function () {
      return Y.H.useCacheRefresh();
    }),
    (ce.use = function (T) {
      return Y.H.use(T);
    }),
    (ce.useActionState = function (T, B, ne) {
      return Y.H.useActionState(T, B, ne);
    }),
    (ce.useCallback = function (T, B) {
      return Y.H.useCallback(T, B);
    }),
    (ce.useContext = function (T) {
      return Y.H.useContext(T);
    }),
    (ce.useDebugValue = function () {}),
    (ce.useDeferredValue = function (T, B) {
      return Y.H.useDeferredValue(T, B);
    }),
    (ce.useEffect = function (T, B) {
      return Y.H.useEffect(T, B);
    }),
    (ce.useId = function () {
      return Y.H.useId();
    }),
    (ce.useImperativeHandle = function (T, B, ne) {
      return Y.H.useImperativeHandle(T, B, ne);
    }),
    (ce.useInsertionEffect = function (T, B) {
      return Y.H.useInsertionEffect(T, B);
    }),
    (ce.useLayoutEffect = function (T, B) {
      return Y.H.useLayoutEffect(T, B);
    }),
    (ce.useMemo = function (T, B) {
      return Y.H.useMemo(T, B);
    }),
    (ce.useOptimistic = function (T, B) {
      return Y.H.useOptimistic(T, B);
    }),
    (ce.useReducer = function (T, B, ne) {
      return Y.H.useReducer(T, B, ne);
    }),
    (ce.useRef = function (T) {
      return Y.H.useRef(T);
    }),
    (ce.useState = function (T) {
      return Y.H.useState(T);
    }),
    (ce.useSyncExternalStore = function (T, B, ne) {
      return Y.H.useSyncExternalStore(T, B, ne);
    }),
    (ce.useTransition = function () {
      return Y.H.useTransition();
    }),
    (ce.version = "19.0.0"),
    ce
  );
}
var lv;
function Vd() {
  return lv || ((lv = 1), (Lf.exports = _T())), Lf.exports;
}
var x = Vd();
const OT = Vy(x),
  DT = ST({ __proto__: null, default: OT }, [x]);
var zf = { exports: {} },
  qs = {},
  Hf = { exports: {} },
  jf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ov;
function wT() {
  return (
    ov ||
      ((ov = 1),
      (function (i) {
        function t(G, le) {
          var ie = G.length;
          G.push(le);
          e: for (; 0 < ie; ) {
            var Me = (ie - 1) >>> 1,
              T = G[Me];
            if (0 < o(T, le)) (G[Me] = le), (G[ie] = T), (ie = Me);
            else break e;
          }
        }
        function r(G) {
          return G.length === 0 ? null : G[0];
        }
        function s(G) {
          if (G.length === 0) return null;
          var le = G[0],
            ie = G.pop();
          if (ie !== le) {
            G[0] = ie;
            e: for (var Me = 0, T = G.length, B = T >>> 1; Me < B; ) {
              var ne = 2 * (Me + 1) - 1,
                ee = G[ne],
                X = ne + 1,
                Ee = G[X];
              if (0 > o(ee, ie))
                X < T && 0 > o(Ee, ee)
                  ? ((G[Me] = Ee), (G[X] = ie), (Me = X))
                  : ((G[Me] = ee), (G[ne] = ie), (Me = ne));
              else if (X < T && 0 > o(Ee, ie))
                (G[Me] = Ee), (G[X] = ie), (Me = X);
              else break e;
            }
          }
          return le;
        }
        function o(G, le) {
          var ie = G.sortIndex - le.sortIndex;
          return ie !== 0 ? ie : G.id - le.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var c = performance;
          i.unstable_now = function () {
            return c.now();
          };
        } else {
          var d = Date,
            h = d.now();
          i.unstable_now = function () {
            return d.now() - h;
          };
        }
        var g = [],
          m = [],
          y = 1,
          b = null,
          w = 3,
          A = !1,
          U = !1,
          N = !1,
          R = typeof setTimeout == "function" ? setTimeout : null,
          k = typeof clearTimeout == "function" ? clearTimeout : null,
          P = typeof setImmediate < "u" ? setImmediate : null;
        function q(G) {
          for (var le = r(m); le !== null; ) {
            if (le.callback === null) s(m);
            else if (le.startTime <= G)
              s(m), (le.sortIndex = le.expirationTime), t(g, le);
            else break;
            le = r(m);
          }
        }
        function W(G) {
          if (((N = !1), q(G), !U))
            if (r(g) !== null) (U = !0), En();
            else {
              var le = r(m);
              le !== null && yt(W, le.startTime - G);
            }
        }
        var Y = !1,
          se = -1,
          ye = 5,
          me = -1;
        function V() {
          return !(i.unstable_now() - me < ye);
        }
        function fe() {
          if (Y) {
            var G = i.unstable_now();
            me = G;
            var le = !0;
            try {
              e: {
                (U = !1), N && ((N = !1), k(se), (se = -1)), (A = !0);
                var ie = w;
                try {
                  t: {
                    for (
                      q(G), b = r(g);
                      b !== null && !(b.expirationTime > G && V());

                    ) {
                      var Me = b.callback;
                      if (typeof Me == "function") {
                        (b.callback = null), (w = b.priorityLevel);
                        var T = Me(b.expirationTime <= G);
                        if (((G = i.unstable_now()), typeof T == "function")) {
                          (b.callback = T), q(G), (le = !0);
                          break t;
                        }
                        b === r(g) && s(g), q(G);
                      } else s(g);
                      b = r(g);
                    }
                    if (b !== null) le = !0;
                    else {
                      var B = r(m);
                      B !== null && yt(W, B.startTime - G), (le = !1);
                    }
                  }
                  break e;
                } finally {
                  (b = null), (w = ie), (A = !1);
                }
                le = void 0;
              }
            } finally {
              le ? Ke() : (Y = !1);
            }
          }
        }
        var Ke;
        if (typeof P == "function")
          Ke = function () {
            P(fe);
          };
        else if (typeof MessageChannel < "u") {
          var vt = new MessageChannel(),
            an = vt.port2;
          (vt.port1.onmessage = fe),
            (Ke = function () {
              an.postMessage(null);
            });
        } else
          Ke = function () {
            R(fe, 0);
          };
        function En() {
          Y || ((Y = !0), Ke());
        }
        function yt(G, le) {
          se = R(function () {
            G(i.unstable_now());
          }, le);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (G) {
            G.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            U || A || ((U = !0), En());
          }),
          (i.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (ye = 0 < G ? Math.floor(1e3 / G) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return r(g);
          }),
          (i.unstable_next = function (G) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var le = 3;
                break;
              default:
                le = w;
            }
            var ie = w;
            w = le;
            try {
              return G();
            } finally {
              w = ie;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (G, le) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                G = 3;
            }
            var ie = w;
            w = G;
            try {
              return le();
            } finally {
              w = ie;
            }
          }),
          (i.unstable_scheduleCallback = function (G, le, ie) {
            var Me = i.unstable_now();
            switch (
              (typeof ie == "object" && ie !== null
                ? ((ie = ie.delay),
                  (ie = typeof ie == "number" && 0 < ie ? Me + ie : Me))
                : (ie = Me),
              G)
            ) {
              case 1:
                var T = -1;
                break;
              case 2:
                T = 250;
                break;
              case 5:
                T = 1073741823;
                break;
              case 4:
                T = 1e4;
                break;
              default:
                T = 5e3;
            }
            return (
              (T = ie + T),
              (G = {
                id: y++,
                callback: le,
                priorityLevel: G,
                startTime: ie,
                expirationTime: T,
                sortIndex: -1,
              }),
              ie > Me
                ? ((G.sortIndex = ie),
                  t(m, G),
                  r(g) === null &&
                    G === r(m) &&
                    (N ? (k(se), (se = -1)) : (N = !0), yt(W, ie - Me)))
                : ((G.sortIndex = T), t(g, G), U || A || ((U = !0), En())),
              G
            );
          }),
          (i.unstable_shouldYield = V),
          (i.unstable_wrapCallback = function (G) {
            var le = w;
            return function () {
              var ie = w;
              w = le;
              try {
                return G.apply(this, arguments);
              } finally {
                w = ie;
              }
            };
          });
      })(jf)),
    jf
  );
}
var uv;
function RT() {
  return uv || ((uv = 1), (Hf.exports = wT())), Hf.exports;
}
var kf = { exports: {} },
  ot = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cv;
function CT() {
  if (cv) return ot;
  cv = 1;
  var i = Vd();
  function t(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var s = {
      d: {
        f: r,
        r: function () {
          throw Error(t(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function c(g, m, y) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : "" + b,
      children: g,
      containerInfo: m,
      implementation: y,
    };
  }
  var d = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (ot.createPortal = function (g, m) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(t(299));
      return c(g, m, null, y);
    }),
    (ot.flushSync = function (g) {
      var m = d.T,
        y = s.p;
      try {
        if (((d.T = null), (s.p = 2), g)) return g();
      } finally {
        (d.T = m), (s.p = y), s.d.f();
      }
    }),
    (ot.preconnect = function (g, m) {
      typeof g == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        s.d.C(g, m));
    }),
    (ot.prefetchDNS = function (g) {
      typeof g == "string" && s.d.D(g);
    }),
    (ot.preinit = function (g, m) {
      if (typeof g == "string" && m && typeof m.as == "string") {
        var y = m.as,
          b = h(y, m.crossOrigin),
          w = typeof m.integrity == "string" ? m.integrity : void 0,
          A = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        y === "style"
          ? s.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: b,
              integrity: w,
              fetchPriority: A,
            })
          : y === "script" &&
            s.d.X(g, {
              crossOrigin: b,
              integrity: w,
              fetchPriority: A,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (ot.preinitModule = function (g, m) {
      if (typeof g == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var y = h(m.as, m.crossOrigin);
            s.d.M(g, {
              crossOrigin: y,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && s.d.M(g);
    }),
    (ot.preload = function (g, m) {
      if (
        typeof g == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var y = m.as,
          b = h(y, m.crossOrigin);
        s.d.L(g, y, {
          crossOrigin: b,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (ot.preloadModule = function (g, m) {
      if (typeof g == "string")
        if (m) {
          var y = h(m.as, m.crossOrigin);
          s.d.m(g, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else s.d.m(g);
    }),
    (ot.requestFormReset = function (g) {
      s.d.r(g);
    }),
    (ot.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (ot.useFormState = function (g, m, y) {
      return d.H.useFormState(g, m, y);
    }),
    (ot.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (ot.version = "19.0.0"),
    ot
  );
}
var fv;
function Gy() {
  if (fv) return kf.exports;
  fv = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (t) {
        console.error(t);
      }
  }
  return i(), (kf.exports = CT()), kf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dv;
function AT() {
  if (dv) return qs;
  dv = 1;
  var i = RT(),
    t = Vd(),
    r = Gy();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var c = Symbol.for("react.element"),
    d = Symbol.for("react.transitional.element"),
    h = Symbol.for("react.portal"),
    g = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    y = Symbol.for("react.profiler"),
    b = Symbol.for("react.provider"),
    w = Symbol.for("react.consumer"),
    A = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    N = Symbol.for("react.suspense"),
    R = Symbol.for("react.suspense_list"),
    k = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    q = Symbol.for("react.offscreen"),
    W = Symbol.for("react.memo_cache_sentinel"),
    Y = Symbol.iterator;
  function se(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Y && e[Y]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ye = Symbol.for("react.client.reference");
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ye ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case g:
        return "Fragment";
      case h:
        return "Portal";
      case y:
        return "Profiler";
      case m:
        return "StrictMode";
      case N:
        return "Suspense";
      case R:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return (e.displayName || "Context") + ".Provider";
        case w:
          return (e._context.displayName || "Context") + ".Consumer";
        case U:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case k:
          return (
            (n = e.displayName || null), n !== null ? n : me(e.type) || "Memo"
          );
        case P:
          (n = e._payload), (e = e._init);
          try {
            return me(e(n));
          } catch {}
      }
    return null;
  }
  var V = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    fe = Object.assign,
    Ke,
    vt;
  function an(e) {
    if (Ke === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        (Ke = (n && n[1]) || ""),
          (vt =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Ke +
      e +
      vt
    );
  }
  var En = !1;
  function yt(e, n) {
    if (!e || En) return "";
    En = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var j = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(j.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(j, []);
                } catch (L) {
                  var M = L;
                }
                Reflect.construct(e, [], j);
              } else {
                try {
                  j.call();
                } catch (L) {
                  M = L;
                }
                e.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (L) {
                M = L;
              }
              (j = e()) &&
                typeof j.catch == "function" &&
                j.catch(function () {});
            }
          } catch (L) {
            if (L && M && typeof L.stack == "string") return [L.stack, M.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var f = l.DetermineComponentFrameRoot(),
        p = f[0],
        v = f[1];
      if (p && v) {
        var S = p.split(`
`),
          O = v.split(`
`);
        for (
          u = l = 0;
          l < S.length && !S[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; u < O.length && !O[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (l === S.length || u === O.length)
          for (
            l = S.length - 1, u = O.length - 1;
            1 <= l && 0 <= u && S[l] !== O[u];

          )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (S[l] !== O[u]) {
            if (l !== 1 || u !== 1)
              do
                if ((l--, u--, 0 > u || S[l] !== O[u])) {
                  var z =
                    `
` + S[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", e.displayName)),
                    z
                  );
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      (En = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : "") ? an(a) : "";
  }
  function G(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return an(e.type);
      case 16:
        return an("Lazy");
      case 13:
        return an("Suspense");
      case 19:
        return an("SuspenseList");
      case 0:
      case 15:
        return (e = yt(e.type, !1)), e;
      case 11:
        return (e = yt(e.type.render, !1)), e;
      case 1:
        return (e = yt(e.type, !0)), e;
      default:
        return "";
    }
  }
  function le(e) {
    try {
      var n = "";
      do (n += G(e)), (e = e.return);
      while (e);
      return n;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function ie(e) {
    var n = e,
      a = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), (n.flags & 4098) !== 0 && (a = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? a : null;
  }
  function Me(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function T(e) {
    if (ie(e) !== e) throw Error(s(188));
  }
  function B(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = ie(e)), n === null)) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var a = e, l = n; ; ) {
      var u = a.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (((l = u.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === a) return T(u), e;
          if (f === l) return T(u), n;
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== l.return) (a = u), (l = f);
      else {
        for (var p = !1, v = u.child; v; ) {
          if (v === a) {
            (p = !0), (a = u), (l = f);
            break;
          }
          if (v === l) {
            (p = !0), (l = u), (a = f);
            break;
          }
          v = v.sibling;
        }
        if (!p) {
          for (v = f.child; v; ) {
            if (v === a) {
              (p = !0), (a = f), (l = u);
              break;
            }
            if (v === l) {
              (p = !0), (l = f), (a = u);
              break;
            }
            v = v.sibling;
          }
          if (!p) throw Error(s(189));
        }
      }
      if (a.alternate !== l) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : n;
  }
  function ne(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = ne(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var ee = Array.isArray,
    X = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Ee = { pending: !1, data: null, method: null, action: null },
    he = [],
    ft = -1;
  function De(e) {
    return { current: e };
  }
  function Qe(e) {
    0 > ft || ((e.current = he[ft]), (he[ft] = null), ft--);
  }
  function Le(e, n) {
    ft++, (he[ft] = e.current), (e.current = n);
  }
  var sn = De(null),
    Ga = De(null),
    $n = De(null),
    ml = De(null);
  function vl(e, n) {
    switch ((Le($n, n), Le(Ga, e), Le(sn, null), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) && (n = n.namespaceURI) ? xm(n) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? n.parentNode : n),
          (n = e.tagName),
          (e = e.namespaceURI))
        )
          (e = xm(e)), (n = Um(e, n));
        else
          switch (n) {
            case "svg":
              n = 1;
              break;
            case "math":
              n = 2;
              break;
            default:
              n = 0;
          }
    }
    Qe(sn), Le(sn, n);
  }
  function Ur() {
    Qe(sn), Qe(Ga), Qe($n);
  }
  function _u(e) {
    e.memoizedState !== null && Le(ml, e);
    var n = sn.current,
      a = Um(n, e.type);
    n !== a && (Le(Ga, e), Le(sn, a));
  }
  function yl(e) {
    Ga.current === e && (Qe(sn), Qe(Ga)),
      ml.current === e && (Qe(ml), (zs._currentValue = Ee));
  }
  var Ou = Object.prototype.hasOwnProperty,
    Du = i.unstable_scheduleCallback,
    wu = i.unstable_cancelCallback,
    Jb = i.unstable_shouldYield,
    Wb = i.unstable_requestPaint,
    ln = i.unstable_now,
    eS = i.unstable_getCurrentPriorityLevel,
    Eh = i.unstable_ImmediatePriority,
    Th = i.unstable_UserBlockingPriority,
    bl = i.unstable_NormalPriority,
    tS = i.unstable_LowPriority,
    _h = i.unstable_IdlePriority,
    nS = i.log,
    iS = i.unstable_setDisableYieldValue,
    Qa = null,
    Dt = null;
  function rS(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
      try {
        Dt.onCommitFiberRoot(Qa, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function Jn(e) {
    if (
      (typeof nS == "function" && iS(e),
      Dt && typeof Dt.setStrictMode == "function")
    )
      try {
        Dt.setStrictMode(Qa, e);
      } catch {}
  }
  var wt = Math.clz32 ? Math.clz32 : lS,
    aS = Math.log,
    sS = Math.LN2;
  function lS(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((aS(e) / sS) | 0)) | 0;
  }
  var Sl = 128,
    El = 4194304;
  function Qi(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Tl(e, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      u = e.suspendedLanes,
      f = e.pingedLanes,
      p = e.warmLanes;
    e = e.finishedLanes !== 0;
    var v = a & 134217727;
    return (
      v !== 0
        ? ((a = v & ~u),
          a !== 0
            ? (l = Qi(a))
            : ((f &= v),
              f !== 0
                ? (l = Qi(f))
                : e || ((p = v & ~p), p !== 0 && (l = Qi(p)))))
        : ((v = a & ~u),
          v !== 0
            ? (l = Qi(v))
            : f !== 0
            ? (l = Qi(f))
            : e || ((p = a & ~p), p !== 0 && (l = Qi(p)))),
      l === 0
        ? 0
        : n !== 0 &&
          n !== l &&
          (n & u) === 0 &&
          ((u = l & -l),
          (p = n & -n),
          u >= p || (u === 32 && (p & 4194176) !== 0))
        ? n
        : l
    );
  }
  function Ya(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function oS(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return n + 250;
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Oh() {
    var e = Sl;
    return (Sl <<= 1), (Sl & 4194176) === 0 && (Sl = 128), e;
  }
  function Dh() {
    var e = El;
    return (El <<= 1), (El & 62914560) === 0 && (El = 4194304), e;
  }
  function Ru(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Fa(e, n) {
    (e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function uS(e, n, a, l, u, f) {
    var p = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var v = e.entanglements,
      S = e.expirationTimes,
      O = e.hiddenUpdates;
    for (a = p & ~a; 0 < a; ) {
      var z = 31 - wt(a),
        j = 1 << z;
      (v[z] = 0), (S[z] = -1);
      var M = O[z];
      if (M !== null)
        for (O[z] = null, z = 0; z < M.length; z++) {
          var L = M[z];
          L !== null && (L.lane &= -536870913);
        }
      a &= ~j;
    }
    l !== 0 && wh(e, l, 0),
      f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(p & ~n));
  }
  function wh(e, n, a) {
    (e.pendingLanes |= n), (e.suspendedLanes &= ~n);
    var l = 31 - wt(n);
    (e.entangledLanes |= n),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 4194218));
  }
  function Rh(e, n) {
    var a = (e.entangledLanes |= n);
    for (e = e.entanglements; a; ) {
      var l = 31 - wt(a),
        u = 1 << l;
      (u & n) | (e[l] & n) && (e[l] |= n), (a &= ~u);
    }
  }
  function Ch(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ah() {
    var e = X.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : $m(e.type));
  }
  function cS(e, n) {
    var a = X.p;
    try {
      return (X.p = e), n();
    } finally {
      X.p = a;
    }
  }
  var Wn = Math.random().toString(36).slice(2),
    st = "__reactFiber$" + Wn,
    bt = "__reactProps$" + Wn,
    Ir = "__reactContainer$" + Wn,
    Cu = "__reactEvents$" + Wn,
    fS = "__reactListeners$" + Wn,
    dS = "__reactHandles$" + Wn,
    Nh = "__reactResources$" + Wn,
    Xa = "__reactMarker$" + Wn;
  function Au(e) {
    delete e[st], delete e[bt], delete e[Cu], delete e[fS], delete e[dS];
  }
  function Yi(e) {
    var n = e[st];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if ((n = a[Ir] || a[st])) {
        if (
          ((a = n.alternate),
          n.child !== null || (a !== null && a.child !== null))
        )
          for (e = zm(e); e !== null; ) {
            if ((a = e[st])) return a;
            e = zm(e);
          }
        return n;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function Lr(e) {
    if ((e = e[st] || e[Ir])) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Ka(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function zr(e) {
    var n = e[Nh];
    return (
      n ||
        (n = e[Nh] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function We(e) {
    e[Xa] = !0;
  }
  var Mh = new Set(),
    xh = {};
  function Fi(e, n) {
    Hr(e, n), Hr(e + "Capture", n);
  }
  function Hr(e, n) {
    for (xh[e] = n, e = 0; e < n.length; e++) Mh.add(n[e]);
  }
  var Tn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    hS = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Uh = {},
    Ih = {};
  function pS(e) {
    return Ou.call(Ih, e)
      ? !0
      : Ou.call(Uh, e)
      ? !1
      : hS.test(e)
      ? (Ih[e] = !0)
      : ((Uh[e] = !0), !1);
  }
  function _l(e, n, a) {
    if (pS(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + a);
      }
  }
  function Ol(e, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + a);
    }
  }
  function _n(e, n, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + l);
    }
  }
  function Ut(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Lh(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function gS(e) {
    var n = Lh(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      l = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        f = a.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (p) {
            (l = "" + p), f.call(this, p);
          },
        }),
        Object.defineProperty(e, n, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (p) {
            l = "" + p;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function Dl(e) {
    e._valueTracker || (e._valueTracker = gS(e));
  }
  function zh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      l = "";
    return (
      e && (l = Lh(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== a ? (n.setValue(e), !0) : !1
    );
  }
  function wl(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var mS = /[\n"\\]/g;
  function It(e) {
    return e.replace(mS, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function Nu(e, n, a, l, u, f, p, v) {
    (e.name = ""),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.type = p)
        : e.removeAttribute("type"),
      n != null
        ? p === "number"
          ? ((n === 0 && e.value === "") || e.value != n) &&
            (e.value = "" + Ut(n))
          : e.value !== "" + Ut(n) && (e.value = "" + Ut(n))
        : (p !== "submit" && p !== "reset") || e.removeAttribute("value"),
      n != null
        ? Mu(e, p, Ut(n))
        : a != null
        ? Mu(e, p, Ut(a))
        : l != null && e.removeAttribute("value"),
      u == null && f != null && (e.defaultChecked = !!f),
      u != null &&
        (e.checked = u && typeof u != "function" && typeof u != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.name = "" + Ut(v))
        : e.removeAttribute("name");
  }
  function Hh(e, n, a, l, u, f, p, v) {
    if (
      (f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.type = f),
      n != null || a != null)
    ) {
      if (!((f !== "submit" && f !== "reset") || n != null)) return;
      (a = a != null ? "" + Ut(a) : ""),
        (n = n != null ? "" + Ut(n) : a),
        v || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (l = l ?? u),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = v ? e.checked : !!l),
      (e.defaultChecked = !!l),
      p != null &&
        typeof p != "function" &&
        typeof p != "symbol" &&
        typeof p != "boolean" &&
        (e.name = p);
  }
  function Mu(e, n, a) {
    (n === "number" && wl(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function jr(e, n, a, l) {
    if (((e = e.options), n)) {
      n = {};
      for (var u = 0; u < a.length; u++) n["$" + a[u]] = !0;
      for (a = 0; a < e.length; a++)
        (u = n.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== u && (e[a].selected = u),
          u && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Ut(a), n = null, u = 0; u < e.length; u++) {
        if (e[u].value === a) {
          (e[u].selected = !0), l && (e[u].defaultSelected = !0);
          return;
        }
        n !== null || e[u].disabled || (n = e[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function jh(e, n, a) {
    if (
      n != null &&
      ((n = "" + Ut(n)), n !== e.value && (e.value = n), a == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + Ut(a) : "";
  }
  function kh(e, n, a, l) {
    if (n == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (ee(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), (n = a);
    }
    (a = Ut(n)),
      (e.defaultValue = a),
      (l = e.textContent),
      l === a && l !== "" && l !== null && (e.value = l);
  }
  function kr(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var vS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Bh(e, n, a) {
    var l = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? e.setProperty(n, "")
        : n === "float"
        ? (e.cssFloat = "")
        : (e[n] = "")
      : l
      ? e.setProperty(n, a)
      : typeof a != "number" || a === 0 || vS.has(n)
      ? n === "float"
        ? (e.cssFloat = a)
        : (e[n] = ("" + a).trim())
      : (e[n] = a + "px");
  }
  function Ph(e, n, a) {
    if (n != null && typeof n != "object") throw Error(s(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (n != null && n.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var u in n)
        (l = n[u]), n.hasOwnProperty(u) && a[u] !== l && Bh(e, u, l);
    } else for (var f in n) n.hasOwnProperty(f) && Bh(e, f, n[f]);
  }
  function xu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var yS = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    bS =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Rl(e) {
    return bS.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Uu = null;
  function Iu(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Br = null,
    Pr = null;
  function qh(e) {
    var n = Lr(e);
    if (n && (e = n.stateNode)) {
      var a = e[bt] || null;
      e: switch (((e = n.stateNode), n.type)) {
        case "input":
          if (
            (Nu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (n = a.name),
            a.type === "radio" && n != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + It("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < a.length;
              n++
            ) {
              var l = a[n];
              if (l !== e && l.form === e.form) {
                var u = l[bt] || null;
                if (!u) throw Error(s(90));
                Nu(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (n = 0; n < a.length; n++)
              (l = a[n]), l.form === e.form && zh(l);
          }
          break e;
        case "textarea":
          jh(e, a.value, a.defaultValue);
          break e;
        case "select":
          (n = a.value), n != null && jr(e, !!a.multiple, n, !1);
      }
    }
  }
  var Lu = !1;
  function Vh(e, n, a) {
    if (Lu) return e(n, a);
    Lu = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (
        ((Lu = !1),
        (Br !== null || Pr !== null) &&
          (co(), Br && ((n = Br), (e = Pr), (Pr = Br = null), qh(n), e)))
      )
        for (n = 0; n < e.length; n++) qh(e[n]);
    }
  }
  function Za(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[bt] || null;
    if (l === null) return null;
    a = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(s(231, n, typeof a));
    return a;
  }
  var zu = !1;
  if (Tn)
    try {
      var $a = {};
      Object.defineProperty($a, "passive", {
        get: function () {
          zu = !0;
        },
      }),
        window.addEventListener("test", $a, $a),
        window.removeEventListener("test", $a, $a);
    } catch {
      zu = !1;
    }
  var ei = null,
    Hu = null,
    Cl = null;
  function Gh() {
    if (Cl) return Cl;
    var e,
      n = Hu,
      a = n.length,
      l,
      u = "value" in ei ? ei.value : ei.textContent,
      f = u.length;
    for (e = 0; e < a && n[e] === u[e]; e++);
    var p = a - e;
    for (l = 1; l <= p && n[a - l] === u[f - l]; l++);
    return (Cl = u.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Al(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Nl() {
    return !0;
  }
  function Qh() {
    return !1;
  }
  function St(e) {
    function n(a, l, u, f, p) {
      (this._reactName = a),
        (this._targetInst = u),
        (this.type = l),
        (this.nativeEvent = f),
        (this.target = p),
        (this.currentTarget = null);
      for (var v in e)
        e.hasOwnProperty(v) && ((a = e[v]), (this[v] = a ? a(f) : f[v]));
      return (
        (this.isDefaultPrevented = (
          f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
        )
          ? Nl
          : Qh),
        (this.isPropagationStopped = Qh),
        this
      );
    }
    return (
      fe(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Nl));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Nl));
        },
        persist: function () {},
        isPersistent: Nl,
      }),
      n
    );
  }
  var Xi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ml = St(Xi),
    Ja = fe({}, Xi, { view: 0, detail: 0 }),
    SS = St(Ja),
    ju,
    ku,
    Wa,
    xl = fe({}, Ja, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Pu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Wa &&
              (Wa && e.type === "mousemove"
                ? ((ju = e.screenX - Wa.screenX), (ku = e.screenY - Wa.screenY))
                : (ku = ju = 0),
              (Wa = e)),
            ju);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ku;
      },
    }),
    Yh = St(xl),
    ES = fe({}, xl, { dataTransfer: 0 }),
    TS = St(ES),
    _S = fe({}, Ja, { relatedTarget: 0 }),
    Bu = St(_S),
    OS = fe({}, Xi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    DS = St(OS),
    wS = fe({}, Xi, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    RS = St(wS),
    CS = fe({}, Xi, { data: 0 }),
    Fh = St(CS),
    AS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    NS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    MS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function xS(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = MS[e])
      ? !!n[e]
      : !1;
  }
  function Pu() {
    return xS;
  }
  var US = fe({}, Ja, {
      key: function (e) {
        if (e.key) {
          var n = AS[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Al(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? NS[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Pu,
      charCode: function (e) {
        return e.type === "keypress" ? Al(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Al(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    IS = St(US),
    LS = fe({}, xl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Xh = St(LS),
    zS = fe({}, Ja, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Pu,
    }),
    HS = St(zS),
    jS = fe({}, Xi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kS = St(jS),
    BS = fe({}, xl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    PS = St(BS),
    qS = fe({}, Xi, { newState: 0, oldState: 0 }),
    VS = St(qS),
    GS = [9, 13, 27, 32],
    qu = Tn && "CompositionEvent" in window,
    es = null;
  Tn && "documentMode" in document && (es = document.documentMode);
  var QS = Tn && "TextEvent" in window && !es,
    Kh = Tn && (!qu || (es && 8 < es && 11 >= es)),
    Zh = " ",
    $h = !1;
  function Jh(e, n) {
    switch (e) {
      case "keyup":
        return GS.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wh(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var qr = !1;
  function YS(e, n) {
    switch (e) {
      case "compositionend":
        return Wh(n);
      case "keypress":
        return n.which !== 32 ? null : (($h = !0), Zh);
      case "textInput":
        return (e = n.data), e === Zh && $h ? null : e;
      default:
        return null;
    }
  }
  function FS(e, n) {
    if (qr)
      return e === "compositionend" || (!qu && Jh(e, n))
        ? ((e = Gh()), (Cl = Hu = ei = null), (qr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Kh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var XS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ep(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!XS[e.type] : n === "textarea";
  }
  function tp(e, n, a, l) {
    Br ? (Pr ? Pr.push(l) : (Pr = [l])) : (Br = l),
      (n = mo(n, "onChange")),
      0 < n.length &&
        ((a = new Ml("onChange", "change", null, a, l)),
        e.push({ event: a, listeners: n }));
  }
  var ts = null,
    ns = null;
  function KS(e) {
    Rm(e, 0);
  }
  function Ul(e) {
    var n = Ka(e);
    if (zh(n)) return e;
  }
  function np(e, n) {
    if (e === "change") return n;
  }
  var ip = !1;
  if (Tn) {
    var Vu;
    if (Tn) {
      var Gu = "oninput" in document;
      if (!Gu) {
        var rp = document.createElement("div");
        rp.setAttribute("oninput", "return;"),
          (Gu = typeof rp.oninput == "function");
      }
      Vu = Gu;
    } else Vu = !1;
    ip = Vu && (!document.documentMode || 9 < document.documentMode);
  }
  function ap() {
    ts && (ts.detachEvent("onpropertychange", sp), (ns = ts = null));
  }
  function sp(e) {
    if (e.propertyName === "value" && Ul(ns)) {
      var n = [];
      tp(n, ns, e, Iu(e)), Vh(KS, n);
    }
  }
  function ZS(e, n, a) {
    e === "focusin"
      ? (ap(), (ts = n), (ns = a), ts.attachEvent("onpropertychange", sp))
      : e === "focusout" && ap();
  }
  function $S(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ul(ns);
  }
  function JS(e, n) {
    if (e === "click") return Ul(n);
  }
  function WS(e, n) {
    if (e === "input" || e === "change") return Ul(n);
  }
  function eE(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Rt = typeof Object.is == "function" ? Object.is : eE;
  function is(e, n) {
    if (Rt(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var a = Object.keys(e),
      l = Object.keys(n);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var u = a[l];
      if (!Ou.call(n, u) || !Rt(e[u], n[u])) return !1;
    }
    return !0;
  }
  function lp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function op(e, n) {
    var a = lp(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= n && l >= n))
          return { node: a, offset: n - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = lp(a);
    }
  }
  function up(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? up(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function cp(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = wl(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = wl(e.document);
    }
    return n;
  }
  function Qu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function tE(e, n) {
    var a = cp(n);
    n = e.focusedElem;
    var l = e.selectionRange;
    if (
      a !== n &&
      n &&
      n.ownerDocument &&
      up(n.ownerDocument.documentElement, n)
    ) {
      if (l !== null && Qu(n)) {
        if (
          ((e = l.start),
          (a = l.end),
          a === void 0 && (a = e),
          "selectionStart" in n)
        )
          (n.selectionStart = e),
            (n.selectionEnd = Math.min(a, n.value.length));
        else if (
          ((a = ((e = n.ownerDocument || document) && e.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var u = n.textContent.length,
            f = Math.min(l.start, u);
          (l = l.end === void 0 ? f : Math.min(l.end, u)),
            !a.extend && f > l && ((u = l), (l = f), (f = u)),
            (u = op(n, f));
          var p = op(n, l);
          u &&
            p &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== u.node ||
              a.anchorOffset !== u.offset ||
              a.focusNode !== p.node ||
              a.focusOffset !== p.offset) &&
            ((e = e.createRange()),
            e.setStart(u.node, u.offset),
            a.removeAllRanges(),
            f > l
              ? (a.addRange(e), a.extend(p.node, p.offset))
              : (e.setEnd(p.node, p.offset), a.addRange(e)));
        }
      }
      for (e = [], a = n; (a = a.parentNode); )
        a.nodeType === 1 &&
          e.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
        (a = e[n]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var nE = Tn && "documentMode" in document && 11 >= document.documentMode,
    Vr = null,
    Yu = null,
    rs = null,
    Fu = !1;
  function fp(e, n, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Fu ||
      Vr == null ||
      Vr !== wl(l) ||
      ((l = Vr),
      "selectionStart" in l && Qu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (rs && is(rs, l)) ||
        ((rs = l),
        (l = mo(Yu, "onSelect")),
        0 < l.length &&
          ((n = new Ml("onSelect", "select", null, n, a)),
          e.push({ event: n, listeners: l }),
          (n.target = Vr))));
  }
  function Ki(e, n) {
    var a = {};
    return (
      (a[e.toLowerCase()] = n.toLowerCase()),
      (a["Webkit" + e] = "webkit" + n),
      (a["Moz" + e] = "moz" + n),
      a
    );
  }
  var Gr = {
      animationend: Ki("Animation", "AnimationEnd"),
      animationiteration: Ki("Animation", "AnimationIteration"),
      animationstart: Ki("Animation", "AnimationStart"),
      transitionrun: Ki("Transition", "TransitionRun"),
      transitionstart: Ki("Transition", "TransitionStart"),
      transitioncancel: Ki("Transition", "TransitionCancel"),
      transitionend: Ki("Transition", "TransitionEnd"),
    },
    Xu = {},
    dp = {};
  Tn &&
    ((dp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Gr.animationend.animation,
      delete Gr.animationiteration.animation,
      delete Gr.animationstart.animation),
    "TransitionEvent" in window || delete Gr.transitionend.transition);
  function Zi(e) {
    if (Xu[e]) return Xu[e];
    if (!Gr[e]) return e;
    var n = Gr[e],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in dp) return (Xu[e] = n[a]);
    return e;
  }
  var hp = Zi("animationend"),
    pp = Zi("animationiteration"),
    gp = Zi("animationstart"),
    iE = Zi("transitionrun"),
    rE = Zi("transitionstart"),
    aE = Zi("transitioncancel"),
    mp = Zi("transitionend"),
    vp = new Map(),
    yp =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function Kt(e, n) {
    vp.set(e, n), Fi(n, [e]);
  }
  var Lt = [],
    Qr = 0,
    Ku = 0;
  function Il() {
    for (var e = Qr, n = (Ku = Qr = 0); n < e; ) {
      var a = Lt[n];
      Lt[n++] = null;
      var l = Lt[n];
      Lt[n++] = null;
      var u = Lt[n];
      Lt[n++] = null;
      var f = Lt[n];
      if (((Lt[n++] = null), l !== null && u !== null)) {
        var p = l.pending;
        p === null ? (u.next = u) : ((u.next = p.next), (p.next = u)),
          (l.pending = u);
      }
      f !== 0 && bp(a, u, f);
    }
  }
  function Ll(e, n, a, l) {
    (Lt[Qr++] = e),
      (Lt[Qr++] = n),
      (Lt[Qr++] = a),
      (Lt[Qr++] = l),
      (Ku |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function Zu(e, n, a, l) {
    return Ll(e, n, a, l), zl(e);
  }
  function ti(e, n) {
    return Ll(e, null, null, n), zl(e);
  }
  function bp(e, n, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var u = !1, f = e.return; f !== null; )
      (f.childLanes |= a),
        (l = f.alternate),
        l !== null && (l.childLanes |= a),
        f.tag === 22 &&
          ((e = f.stateNode), e === null || e._visibility & 1 || (u = !0)),
        (e = f),
        (f = f.return);
    u &&
      n !== null &&
      e.tag === 3 &&
      ((f = e.stateNode),
      (u = 31 - wt(a)),
      (f = f.hiddenUpdates),
      (e = f[u]),
      e === null ? (f[u] = [n]) : e.push(n),
      (n.lane = a | 536870912));
  }
  function zl(e) {
    if (50 < As) throw ((As = 0), (nf = null), Error(s(185)));
    for (var n = e.return; n !== null; ) (e = n), (n = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var Yr = {},
    Sp = new WeakMap();
  function zt(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = Sp.get(e);
      return a !== void 0
        ? a
        : ((n = { value: e, source: n, stack: le(n) }), Sp.set(e, n), n);
    }
    return { value: e, source: n, stack: le(n) };
  }
  var Fr = [],
    Xr = 0,
    Hl = null,
    jl = 0,
    Ht = [],
    jt = 0,
    $i = null,
    On = 1,
    Dn = "";
  function Ji(e, n) {
    (Fr[Xr++] = jl), (Fr[Xr++] = Hl), (Hl = e), (jl = n);
  }
  function Ep(e, n, a) {
    (Ht[jt++] = On), (Ht[jt++] = Dn), (Ht[jt++] = $i), ($i = e);
    var l = On;
    e = Dn;
    var u = 32 - wt(l) - 1;
    (l &= ~(1 << u)), (a += 1);
    var f = 32 - wt(n) + u;
    if (30 < f) {
      var p = u - (u % 5);
      (f = (l & ((1 << p) - 1)).toString(32)),
        (l >>= p),
        (u -= p),
        (On = (1 << (32 - wt(n) + u)) | (a << u) | l),
        (Dn = f + e);
    } else (On = (1 << f) | (a << u) | l), (Dn = e);
  }
  function $u(e) {
    e.return !== null && (Ji(e, 1), Ep(e, 1, 0));
  }
  function Ju(e) {
    for (; e === Hl; )
      (Hl = Fr[--Xr]), (Fr[Xr] = null), (jl = Fr[--Xr]), (Fr[Xr] = null);
    for (; e === $i; )
      ($i = Ht[--jt]),
        (Ht[jt] = null),
        (Dn = Ht[--jt]),
        (Ht[jt] = null),
        (On = Ht[--jt]),
        (Ht[jt] = null);
  }
  var dt = null,
    it = null,
    _e = !1,
    Zt = null,
    on = !1,
    Wu = Error(s(519));
  function Wi(e) {
    var n = Error(s(418, ""));
    throw (ls(zt(n, e)), Wu);
  }
  function Tp(e) {
    var n = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((n[st] = e), (n[bt] = l), a)) {
      case "dialog":
        be("cancel", n), be("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        be("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ms.length; a++) be(Ms[a], n);
        break;
      case "source":
        be("error", n);
        break;
      case "img":
      case "image":
      case "link":
        be("error", n), be("load", n);
        break;
      case "details":
        be("toggle", n);
        break;
      case "input":
        be("invalid", n),
          Hh(
            n,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          Dl(n);
        break;
      case "select":
        be("invalid", n);
        break;
      case "textarea":
        be("invalid", n), kh(n, l.value, l.defaultValue, l.children), Dl(n);
    }
    (a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      n.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      Mm(n.textContent, a)
        ? (l.popover != null && (be("beforetoggle", n), be("toggle", n)),
          l.onScroll != null && be("scroll", n),
          l.onScrollEnd != null && be("scrollend", n),
          l.onClick != null && (n.onclick = vo),
          (n = !0))
        : (n = !1),
      n || Wi(e);
  }
  function _p(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
        case 3:
        case 27:
          on = !0;
          return;
        case 5:
        case 13:
          on = !1;
          return;
        default:
          dt = dt.return;
      }
  }
  function as(e) {
    if (e !== dt) return !1;
    if (!_e) return _p(e), (_e = !0), !1;
    var n = !1,
      a;
    if (
      ((a = e.tag !== 3 && e.tag !== 27) &&
        ((a = e.tag === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || Sf(e.type, e.memoizedProps))),
        (a = !a)),
      a && (n = !0),
      n && it && Wi(e),
      _p(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (n === 0) {
                it = Jt(e.nextSibling);
                break e;
              }
              n--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || n++;
          e = e.nextSibling;
        }
        it = null;
      }
    } else it = dt ? Jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ss() {
    (it = dt = null), (_e = !1);
  }
  function ls(e) {
    Zt === null ? (Zt = [e]) : Zt.push(e);
  }
  var os = Error(s(460)),
    Op = Error(s(474)),
    ec = { then: function () {} };
  function Dp(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function kl() {}
  function wp(e, n, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(n) : a !== n && (n.then(kl, kl), (n = a)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((e = n.reason), e === os ? Error(s(483)) : e);
      default:
        if (typeof n.status == "string") n.then(kl, kl);
        else {
          if (((e = xe), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = n),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (n.status === "pending") {
                  var u = n;
                  (u.status = "fulfilled"), (u.value = l);
                }
              },
              function (l) {
                if (n.status === "pending") {
                  var u = n;
                  (u.status = "rejected"), (u.reason = l);
                }
              }
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((e = n.reason), e === os ? Error(s(483)) : e);
        }
        throw ((us = n), os);
    }
  }
  var us = null;
  function Rp() {
    if (us === null) throw Error(s(459));
    var e = us;
    return (us = null), e;
  }
  var Kr = null,
    cs = 0;
  function Bl(e) {
    var n = cs;
    return (cs += 1), Kr === null && (Kr = []), wp(Kr, e, n);
  }
  function fs(e, n) {
    (n = n.props.ref), (e.ref = n !== void 0 ? n : null);
  }
  function Pl(e, n) {
    throw n.$$typeof === c
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e
          )
        ));
  }
  function Cp(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Ap(e) {
    function n(D, _) {
      if (e) {
        var C = D.deletions;
        C === null ? ((D.deletions = [_]), (D.flags |= 16)) : C.push(_);
      }
    }
    function a(D, _) {
      if (!e) return null;
      for (; _ !== null; ) n(D, _), (_ = _.sibling);
      return null;
    }
    function l(D) {
      for (var _ = new Map(); D !== null; )
        D.key !== null ? _.set(D.key, D) : _.set(D.index, D), (D = D.sibling);
      return _;
    }
    function u(D, _) {
      return (D = hi(D, _)), (D.index = 0), (D.sibling = null), D;
    }
    function f(D, _, C) {
      return (
        (D.index = C),
        e
          ? ((C = D.alternate),
            C !== null
              ? ((C = C.index), C < _ ? ((D.flags |= 33554434), _) : C)
              : ((D.flags |= 33554434), _))
          : ((D.flags |= 1048576), _)
      );
    }
    function p(D) {
      return e && D.alternate === null && (D.flags |= 33554434), D;
    }
    function v(D, _, C, H) {
      return _ === null || _.tag !== 6
        ? ((_ = Xc(C, D.mode, H)), (_.return = D), _)
        : ((_ = u(_, C)), (_.return = D), _);
    }
    function S(D, _, C, H) {
      var K = C.type;
      return K === g
        ? z(D, _, C.props.children, H, C.key)
        : _ !== null &&
          (_.elementType === K ||
            (typeof K == "object" &&
              K !== null &&
              K.$$typeof === P &&
              Cp(K) === _.type))
        ? ((_ = u(_, C.props)), fs(_, C), (_.return = D), _)
        : ((_ = ao(C.type, C.key, C.props, null, D.mode, H)),
          fs(_, C),
          (_.return = D),
          _);
    }
    function O(D, _, C, H) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== C.containerInfo ||
        _.stateNode.implementation !== C.implementation
        ? ((_ = Kc(C, D.mode, H)), (_.return = D), _)
        : ((_ = u(_, C.children || [])), (_.return = D), _);
    }
    function z(D, _, C, H, K) {
      return _ === null || _.tag !== 7
        ? ((_ = ur(C, D.mode, H, K)), (_.return = D), _)
        : ((_ = u(_, C)), (_.return = D), _);
    }
    function j(D, _, C) {
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return (_ = Xc("" + _, D.mode, C)), (_.return = D), _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case d:
            return (
              (C = ao(_.type, _.key, _.props, null, D.mode, C)),
              fs(C, _),
              (C.return = D),
              C
            );
          case h:
            return (_ = Kc(_, D.mode, C)), (_.return = D), _;
          case P:
            var H = _._init;
            return (_ = H(_._payload)), j(D, _, C);
        }
        if (ee(_) || se(_))
          return (_ = ur(_, D.mode, C, null)), (_.return = D), _;
        if (typeof _.then == "function") return j(D, Bl(_), C);
        if (_.$$typeof === A) return j(D, no(D, _), C);
        Pl(D, _);
      }
      return null;
    }
    function M(D, _, C, H) {
      var K = _ !== null ? _.key : null;
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return K !== null ? null : v(D, _, "" + C, H);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case d:
            return C.key === K ? S(D, _, C, H) : null;
          case h:
            return C.key === K ? O(D, _, C, H) : null;
          case P:
            return (K = C._init), (C = K(C._payload)), M(D, _, C, H);
        }
        if (ee(C) || se(C)) return K !== null ? null : z(D, _, C, H, null);
        if (typeof C.then == "function") return M(D, _, Bl(C), H);
        if (C.$$typeof === A) return M(D, _, no(D, C), H);
        Pl(D, C);
      }
      return null;
    }
    function L(D, _, C, H, K) {
      if (
        (typeof H == "string" && H !== "") ||
        typeof H == "number" ||
        typeof H == "bigint"
      )
        return (D = D.get(C) || null), v(_, D, "" + H, K);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case d:
            return (
              (D = D.get(H.key === null ? C : H.key) || null), S(_, D, H, K)
            );
          case h:
            return (
              (D = D.get(H.key === null ? C : H.key) || null), O(_, D, H, K)
            );
          case P:
            var ge = H._init;
            return (H = ge(H._payload)), L(D, _, C, H, K);
        }
        if (ee(H) || se(H)) return (D = D.get(C) || null), z(_, D, H, K, null);
        if (typeof H.then == "function") return L(D, _, C, Bl(H), K);
        if (H.$$typeof === A) return L(D, _, C, no(_, H), K);
        Pl(_, H);
      }
      return null;
    }
    function Z(D, _, C, H) {
      for (
        var K = null, ge = null, $ = _, te = (_ = 0), nt = null;
        $ !== null && te < C.length;
        te++
      ) {
        $.index > te ? ((nt = $), ($ = null)) : (nt = $.sibling);
        var Oe = M(D, $, C[te], H);
        if (Oe === null) {
          $ === null && ($ = nt);
          break;
        }
        e && $ && Oe.alternate === null && n(D, $),
          (_ = f(Oe, _, te)),
          ge === null ? (K = Oe) : (ge.sibling = Oe),
          (ge = Oe),
          ($ = nt);
      }
      if (te === C.length) return a(D, $), _e && Ji(D, te), K;
      if ($ === null) {
        for (; te < C.length; te++)
          ($ = j(D, C[te], H)),
            $ !== null &&
              ((_ = f($, _, te)),
              ge === null ? (K = $) : (ge.sibling = $),
              (ge = $));
        return _e && Ji(D, te), K;
      }
      for ($ = l($); te < C.length; te++)
        (nt = L($, D, te, C[te], H)),
          nt !== null &&
            (e &&
              nt.alternate !== null &&
              $.delete(nt.key === null ? te : nt.key),
            (_ = f(nt, _, te)),
            ge === null ? (K = nt) : (ge.sibling = nt),
            (ge = nt));
      return (
        e &&
          $.forEach(function (Si) {
            return n(D, Si);
          }),
        _e && Ji(D, te),
        K
      );
    }
    function ae(D, _, C, H) {
      if (C == null) throw Error(s(151));
      for (
        var K = null, ge = null, $ = _, te = (_ = 0), nt = null, Oe = C.next();
        $ !== null && !Oe.done;
        te++, Oe = C.next()
      ) {
        $.index > te ? ((nt = $), ($ = null)) : (nt = $.sibling);
        var Si = M(D, $, Oe.value, H);
        if (Si === null) {
          $ === null && ($ = nt);
          break;
        }
        e && $ && Si.alternate === null && n(D, $),
          (_ = f(Si, _, te)),
          ge === null ? (K = Si) : (ge.sibling = Si),
          (ge = Si),
          ($ = nt);
      }
      if (Oe.done) return a(D, $), _e && Ji(D, te), K;
      if ($ === null) {
        for (; !Oe.done; te++, Oe = C.next())
          (Oe = j(D, Oe.value, H)),
            Oe !== null &&
              ((_ = f(Oe, _, te)),
              ge === null ? (K = Oe) : (ge.sibling = Oe),
              (ge = Oe));
        return _e && Ji(D, te), K;
      }
      for ($ = l($); !Oe.done; te++, Oe = C.next())
        (Oe = L($, D, te, Oe.value, H)),
          Oe !== null &&
            (e &&
              Oe.alternate !== null &&
              $.delete(Oe.key === null ? te : Oe.key),
            (_ = f(Oe, _, te)),
            ge === null ? (K = Oe) : (ge.sibling = Oe),
            (ge = Oe));
      return (
        e &&
          $.forEach(function (bT) {
            return n(D, bT);
          }),
        _e && Ji(D, te),
        K
      );
    }
    function Pe(D, _, C, H) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === g &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case d:
            e: {
              for (var K = C.key; _ !== null; ) {
                if (_.key === K) {
                  if (((K = C.type), K === g)) {
                    if (_.tag === 7) {
                      a(D, _.sibling),
                        (H = u(_, C.props.children)),
                        (H.return = D),
                        (D = H);
                      break e;
                    }
                  } else if (
                    _.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === P &&
                      Cp(K) === _.type)
                  ) {
                    a(D, _.sibling),
                      (H = u(_, C.props)),
                      fs(H, C),
                      (H.return = D),
                      (D = H);
                    break e;
                  }
                  a(D, _);
                  break;
                } else n(D, _);
                _ = _.sibling;
              }
              C.type === g
                ? ((H = ur(C.props.children, D.mode, H, C.key)),
                  (H.return = D),
                  (D = H))
                : ((H = ao(C.type, C.key, C.props, null, D.mode, H)),
                  fs(H, C),
                  (H.return = D),
                  (D = H));
            }
            return p(D);
          case h:
            e: {
              for (K = C.key; _ !== null; ) {
                if (_.key === K)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === C.containerInfo &&
                    _.stateNode.implementation === C.implementation
                  ) {
                    a(D, _.sibling),
                      (H = u(_, C.children || [])),
                      (H.return = D),
                      (D = H);
                    break e;
                  } else {
                    a(D, _);
                    break;
                  }
                else n(D, _);
                _ = _.sibling;
              }
              (H = Kc(C, D.mode, H)), (H.return = D), (D = H);
            }
            return p(D);
          case P:
            return (K = C._init), (C = K(C._payload)), Pe(D, _, C, H);
        }
        if (ee(C)) return Z(D, _, C, H);
        if (se(C)) {
          if (((K = se(C)), typeof K != "function")) throw Error(s(150));
          return (C = K.call(C)), ae(D, _, C, H);
        }
        if (typeof C.then == "function") return Pe(D, _, Bl(C), H);
        if (C.$$typeof === A) return Pe(D, _, no(D, C), H);
        Pl(D, C);
      }
      return (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
        ? ((C = "" + C),
          _ !== null && _.tag === 6
            ? (a(D, _.sibling), (H = u(_, C)), (H.return = D), (D = H))
            : (a(D, _), (H = Xc(C, D.mode, H)), (H.return = D), (D = H)),
          p(D))
        : a(D, _);
    }
    return function (D, _, C, H) {
      try {
        cs = 0;
        var K = Pe(D, _, C, H);
        return (Kr = null), K;
      } catch ($) {
        if ($ === os) throw $;
        var ge = qt(29, $, null, D.mode);
        return (ge.lanes = H), (ge.return = D), ge;
      } finally {
      }
    };
  }
  var er = Ap(!0),
    Np = Ap(!1),
    Zr = De(null),
    ql = De(0);
  function Mp(e, n) {
    (e = zn), Le(ql, e), Le(Zr, n), (zn = e | n.baseLanes);
  }
  function tc() {
    Le(ql, zn), Le(Zr, Zr.current);
  }
  function nc() {
    (zn = ql.current), Qe(Zr), Qe(ql);
  }
  var kt = De(null),
    un = null;
  function ni(e) {
    var n = e.alternate;
    Le(Ze, Ze.current & 1),
      Le(kt, e),
      un === null &&
        (n === null || Zr.current !== null || n.memoizedState !== null) &&
        (un = e);
  }
  function xp(e) {
    if (e.tag === 22) {
      if ((Le(Ze, Ze.current), Le(kt, e), un === null)) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (un = e);
      }
    } else ii();
  }
  function ii() {
    Le(Ze, Ze.current), Le(kt, kt.current);
  }
  function wn(e) {
    Qe(kt), un === e && (un = null), Qe(Ze);
  }
  var Ze = De(0);
  function Vl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var sE =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    lE = i.unstable_scheduleCallback,
    oE = i.unstable_NormalPriority,
    $e = {
      $$typeof: A,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ic() {
    return { controller: new sE(), data: new Map(), refCount: 0 };
  }
  function ds(e) {
    e.refCount--,
      e.refCount === 0 &&
        lE(oE, function () {
          e.controller.abort();
        });
  }
  var hs = null,
    rc = 0,
    $r = 0,
    Jr = null;
  function uE(e, n) {
    if (hs === null) {
      var a = (hs = []);
      (rc = 0),
        ($r = ff()),
        (Jr = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        });
    }
    return rc++, n.then(Up, Up), n;
  }
  function Up() {
    if (--rc === 0 && hs !== null) {
      Jr !== null && (Jr.status = "fulfilled");
      var e = hs;
      (hs = null), ($r = 0), (Jr = null);
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function cE(e, n) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = n);
          for (var u = 0; u < a.length; u++) (0, a[u])(n);
        },
        function (u) {
          for (l.status = "rejected", l.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        }
      ),
      l
    );
  }
  var Ip = V.S;
  V.S = function (e, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      uE(e, n),
      Ip !== null && Ip(e, n);
  };
  var tr = De(null);
  function ac() {
    var e = tr.current;
    return e !== null ? e : xe.pooledCache;
  }
  function Gl(e, n) {
    n === null ? Le(tr, tr.current) : Le(tr, n.pool);
  }
  function Lp() {
    var e = ac();
    return e === null ? null : { parent: $e._currentValue, pool: e };
  }
  var ri = 0,
    pe = null,
    Re = null,
    Ye = null,
    Ql = !1,
    Wr = !1,
    nr = !1,
    Yl = 0,
    ps = 0,
    ea = null,
    fE = 0;
  function Ve() {
    throw Error(s(321));
  }
  function sc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!Rt(e[a], n[a])) return !1;
    return !0;
  }
  function lc(e, n, a, l, u, f) {
    return (
      (ri = f),
      (pe = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (V.H = e === null || e.memoizedState === null ? ir : ai),
      (nr = !1),
      (f = a(l, u)),
      (nr = !1),
      Wr && (f = Hp(n, a, l, u)),
      zp(e),
      f
    );
  }
  function zp(e) {
    V.H = cn;
    var n = Re !== null && Re.next !== null;
    if (((ri = 0), (Ye = Re = pe = null), (Ql = !1), (ps = 0), (ea = null), n))
      throw Error(s(300));
    e === null ||
      et ||
      ((e = e.dependencies), e !== null && to(e) && (et = !0));
  }
  function Hp(e, n, a, l) {
    pe = e;
    var u = 0;
    do {
      if ((Wr && (ea = null), (ps = 0), (Wr = !1), 25 <= u))
        throw Error(s(301));
      if (((u += 1), (Ye = Re = null), e.updateQueue != null)) {
        var f = e.updateQueue;
        (f.lastEffect = null),
          (f.events = null),
          (f.stores = null),
          f.memoCache != null && (f.memoCache.index = 0);
      }
      (V.H = rr), (f = n(a, l));
    } while (Wr);
    return f;
  }
  function dE() {
    var e = V.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == "function" ? gs(n) : n),
      (e = e.useState()[0]),
      (Re !== null ? Re.memoizedState : null) !== e && (pe.flags |= 1024),
      n
    );
  }
  function oc() {
    var e = Yl !== 0;
    return (Yl = 0), e;
  }
  function uc(e, n, a) {
    (n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~a);
  }
  function cc(e) {
    if (Ql) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), (e = e.next);
      }
      Ql = !1;
    }
    (ri = 0), (Ye = Re = pe = null), (Wr = !1), (ps = Yl = 0), (ea = null);
  }
  function Et() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ye === null ? (pe.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye;
  }
  function Fe() {
    if (Re === null) {
      var e = pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var n = Ye === null ? pe.memoizedState : Ye.next;
    if (n !== null) (Ye = n), (Re = e);
    else {
      if (e === null)
        throw pe.alternate === null ? Error(s(467)) : Error(s(310));
      (Re = e),
        (e = {
          memoizedState: Re.memoizedState,
          baseState: Re.baseState,
          baseQueue: Re.baseQueue,
          queue: Re.queue,
          next: null,
        }),
        Ye === null ? (pe.memoizedState = Ye = e) : (Ye = Ye.next = e);
    }
    return Ye;
  }
  var Fl;
  Fl = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function gs(e) {
    var n = ps;
    return (
      (ps += 1),
      ea === null && (ea = []),
      (e = wp(ea, e, n)),
      (n = pe),
      (Ye === null ? n.memoizedState : Ye.next) === null &&
        ((n = n.alternate),
        (V.H = n === null || n.memoizedState === null ? ir : ai)),
      e
    );
  }
  function Xl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return gs(e);
      if (e.$$typeof === A) return lt(e);
    }
    throw Error(s(438, String(e)));
  }
  function fc(e) {
    var n = null,
      a = pe.updateQueue;
    if ((a !== null && (n = a.memoCache), n == null)) {
      var l = pe.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (n = {
              data: l.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      a === null && ((a = Fl()), (pe.updateQueue = a)),
      (a.memoCache = n),
      (a = n.data[n.index]),
      a === void 0)
    )
      for (a = n.data[n.index] = Array(e), l = 0; l < e; l++) a[l] = W;
    return n.index++, a;
  }
  function Rn(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Kl(e) {
    var n = Fe();
    return dc(n, Re, e);
  }
  function dc(e, n, a) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var u = e.baseQueue,
      f = l.pending;
    if (f !== null) {
      if (u !== null) {
        var p = u.next;
        (u.next = f.next), (f.next = p);
      }
      (n.baseQueue = u = f), (l.pending = null);
    }
    if (((f = e.baseState), u === null)) e.memoizedState = f;
    else {
      n = u.next;
      var v = (p = null),
        S = null,
        O = n,
        z = !1;
      do {
        var j = O.lane & -536870913;
        if (j !== O.lane ? (Te & j) === j : (ri & j) === j) {
          var M = O.revertLane;
          if (M === 0)
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: O.action,
                  hasEagerState: O.hasEagerState,
                  eagerState: O.eagerState,
                  next: null,
                }),
              j === $r && (z = !0);
          else if ((ri & M) === M) {
            (O = O.next), M === $r && (z = !0);
            continue;
          } else
            (j = {
              lane: 0,
              revertLane: O.revertLane,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null,
            }),
              S === null ? ((v = S = j), (p = f)) : (S = S.next = j),
              (pe.lanes |= M),
              (pi |= M);
          (j = O.action),
            nr && a(f, j),
            (f = O.hasEagerState ? O.eagerState : a(f, j));
        } else
          (M = {
            lane: j,
            revertLane: O.revertLane,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null,
          }),
            S === null ? ((v = S = M), (p = f)) : (S = S.next = M),
            (pe.lanes |= j),
            (pi |= j);
        O = O.next;
      } while (O !== null && O !== n);
      if (
        (S === null ? (p = f) : (S.next = v),
        !Rt(f, e.memoizedState) && ((et = !0), z && ((a = Jr), a !== null)))
      )
        throw a;
      (e.memoizedState = f),
        (e.baseState = p),
        (e.baseQueue = S),
        (l.lastRenderedState = f);
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function hc(e) {
    var n = Fe(),
      a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      u = a.pending,
      f = n.memoizedState;
    if (u !== null) {
      a.pending = null;
      var p = (u = u.next);
      do (f = e(f, p.action)), (p = p.next);
      while (p !== u);
      Rt(f, n.memoizedState) || (et = !0),
        (n.memoizedState = f),
        n.baseQueue === null && (n.baseState = f),
        (a.lastRenderedState = f);
    }
    return [f, l];
  }
  function jp(e, n, a) {
    var l = pe,
      u = Fe(),
      f = _e;
    if (f) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var p = !Rt((Re || u).memoizedState, a);
    if (
      (p && ((u.memoizedState = a), (et = !0)),
      (u = u.queue),
      mc(Pp.bind(null, l, u, e), [e]),
      u.getSnapshot !== n || p || (Ye !== null && Ye.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ta(9, Bp.bind(null, l, u, a, n), { destroy: void 0 }, null),
        xe === null)
      )
        throw Error(s(349));
      f || (ri & 60) !== 0 || kp(l, n, a);
    }
    return a;
  }
  function kp(e, n, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: a }),
      (n = pe.updateQueue),
      n === null
        ? ((n = Fl()), (pe.updateQueue = n), (n.stores = [e]))
        : ((a = n.stores), a === null ? (n.stores = [e]) : a.push(e));
  }
  function Bp(e, n, a, l) {
    (n.value = a), (n.getSnapshot = l), qp(n) && Vp(e);
  }
  function Pp(e, n, a) {
    return a(function () {
      qp(n) && Vp(e);
    });
  }
  function qp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !Rt(e, a);
    } catch {
      return !0;
    }
  }
  function Vp(e) {
    var n = ti(e, 2);
    n !== null && ht(n, e, 2);
  }
  function pc(e) {
    var n = Et();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), nr)) {
        Jn(!0);
        try {
          a();
        } finally {
          Jn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rn,
        lastRenderedState: e,
      }),
      n
    );
  }
  function Gp(e, n, a, l) {
    return (e.baseState = a), dc(e, Re, typeof l == "function" ? l : Rn);
  }
  function hE(e, n, a, l, u) {
    if (Jl(e)) throw Error(s(485));
    if (((e = n.action), e !== null)) {
      var f = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (p) {
          f.listeners.push(p);
        },
      };
      V.T !== null ? a(!0) : (f.isTransition = !1),
        l(f),
        (a = n.pending),
        a === null
          ? ((f.next = n.pending = f), Qp(n, f))
          : ((f.next = a.next), (n.pending = a.next = f));
    }
  }
  function Qp(e, n) {
    var a = n.action,
      l = n.payload,
      u = e.state;
    if (n.isTransition) {
      var f = V.T,
        p = {};
      V.T = p;
      try {
        var v = a(u, l),
          S = V.S;
        S !== null && S(p, v), Yp(e, n, v);
      } catch (O) {
        gc(e, n, O);
      } finally {
        V.T = f;
      }
    } else
      try {
        (f = a(u, l)), Yp(e, n, f);
      } catch (O) {
        gc(e, n, O);
      }
  }
  function Yp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            Fp(e, n, l);
          },
          function (l) {
            return gc(e, n, l);
          }
        )
      : Fp(e, n, a);
  }
  function Fp(e, n, a) {
    (n.status = "fulfilled"),
      (n.value = a),
      Xp(n),
      (e.state = a),
      (n = e.pending),
      n !== null &&
        ((a = n.next),
        a === n ? (e.pending = null) : ((a = a.next), (n.next = a), Qp(e, a)));
  }
  function gc(e, n, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (n.status = "rejected"), (n.reason = a), Xp(n), (n = n.next);
      while (n !== l);
    }
    e.action = null;
  }
  function Xp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Kp(e, n) {
    return n;
  }
  function Zp(e, n) {
    if (_e) {
      var a = xe.formState;
      if (a !== null) {
        e: {
          var l = pe;
          if (_e) {
            if (it) {
              t: {
                for (var u = it, f = on; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (((u = Jt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (f = u.data), (u = f === "F!" || f === "F" ? u : null);
              }
              if (u) {
                (it = Jt(u.nextSibling)), (l = u.data === "F!");
                break e;
              }
            }
            Wi(l);
          }
          l = !1;
        }
        l && (n = a[0]);
      }
    }
    return (
      (a = Et()),
      (a.memoizedState = a.baseState = n),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kp,
        lastRenderedState: n,
      }),
      (a.queue = l),
      (a = pg.bind(null, pe, l)),
      (l.dispatch = a),
      (l = pc(!1)),
      (f = Ec.bind(null, pe, !1, l.queue)),
      (l = Et()),
      (u = { state: n, dispatch: null, action: e, pending: null }),
      (l.queue = u),
      (a = hE.bind(null, pe, u, f, a)),
      (u.dispatch = a),
      (l.memoizedState = e),
      [n, a, !1]
    );
  }
  function $p(e) {
    var n = Fe();
    return Jp(n, Re, e);
  }
  function Jp(e, n, a) {
    (n = dc(e, n, Kp)[0]),
      (e = Kl(Rn)[0]),
      (n =
        typeof n == "object" && n !== null && typeof n.then == "function"
          ? gs(n)
          : n);
    var l = Fe(),
      u = l.queue,
      f = u.dispatch;
    return (
      a !== l.memoizedState &&
        ((pe.flags |= 2048),
        ta(9, pE.bind(null, u, a), { destroy: void 0 }, null)),
      [n, f, e]
    );
  }
  function pE(e, n) {
    e.action = n;
  }
  function Wp(e) {
    var n = Fe(),
      a = Re;
    if (a !== null) return Jp(n, a, e);
    Fe(), (n = n.memoizedState), (a = Fe());
    var l = a.queue.dispatch;
    return (a.memoizedState = e), [n, l, !1];
  }
  function ta(e, n, a, l) {
    return (
      (e = { tag: e, create: n, inst: a, deps: l, next: null }),
      (n = pe.updateQueue),
      n === null && ((n = Fl()), (pe.updateQueue = n)),
      (a = n.lastEffect),
      a === null
        ? (n.lastEffect = e.next = e)
        : ((l = a.next), (a.next = e), (e.next = l), (n.lastEffect = e)),
      e
    );
  }
  function eg() {
    return Fe().memoizedState;
  }
  function Zl(e, n, a, l) {
    var u = Et();
    (pe.flags |= e),
      (u.memoizedState = ta(
        1 | n,
        a,
        { destroy: void 0 },
        l === void 0 ? null : l
      ));
  }
  function $l(e, n, a, l) {
    var u = Fe();
    l = l === void 0 ? null : l;
    var f = u.memoizedState.inst;
    Re !== null && l !== null && sc(l, Re.memoizedState.deps)
      ? (u.memoizedState = ta(n, a, f, l))
      : ((pe.flags |= e), (u.memoizedState = ta(1 | n, a, f, l)));
  }
  function tg(e, n) {
    Zl(8390656, 8, e, n);
  }
  function mc(e, n) {
    $l(2048, 8, e, n);
  }
  function ng(e, n) {
    return $l(4, 2, e, n);
  }
  function ig(e, n) {
    return $l(4, 4, e, n);
  }
  function rg(e, n) {
    if (typeof n == "function") {
      e = e();
      var a = n(e);
      return function () {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function ag(e, n, a) {
    (a = a != null ? a.concat([e]) : null), $l(4, 4, rg.bind(null, n, e), a);
  }
  function vc() {}
  function sg(e, n) {
    var a = Fe();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    return n !== null && sc(n, l[1]) ? l[0] : ((a.memoizedState = [e, n]), e);
  }
  function lg(e, n) {
    var a = Fe();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    if (n !== null && sc(n, l[1])) return l[0];
    if (((l = e()), nr)) {
      Jn(!0);
      try {
        e();
      } finally {
        Jn(!1);
      }
    }
    return (a.memoizedState = [l, n]), l;
  }
  function yc(e, n, a) {
    return a === void 0 || (ri & 1073741824) !== 0
      ? (e.memoizedState = n)
      : ((e.memoizedState = a), (e = um()), (pe.lanes |= e), (pi |= e), a);
  }
  function og(e, n, a, l) {
    return Rt(a, n)
      ? a
      : Zr.current !== null
      ? ((e = yc(e, a, l)), Rt(e, n) || (et = !0), e)
      : (ri & 42) === 0
      ? ((et = !0), (e.memoizedState = a))
      : ((e = um()), (pe.lanes |= e), (pi |= e), n);
  }
  function ug(e, n, a, l, u) {
    var f = X.p;
    X.p = f !== 0 && 8 > f ? f : 8;
    var p = V.T,
      v = {};
    (V.T = v), Ec(e, !1, n, a);
    try {
      var S = u(),
        O = V.S;
      if (
        (O !== null && O(v, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var z = cE(S, l);
        ms(e, n, z, Mt(e));
      } else ms(e, n, l, Mt(e));
    } catch (j) {
      ms(e, n, { then: function () {}, status: "rejected", reason: j }, Mt());
    } finally {
      (X.p = f), (V.T = p);
    }
  }
  function gE() {}
  function bc(e, n, a, l) {
    if (e.tag !== 5) throw Error(s(476));
    var u = cg(e).queue;
    ug(
      e,
      u,
      n,
      Ee,
      a === null
        ? gE
        : function () {
            return fg(e), a(l);
          }
    );
  }
  function cg(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: Ee,
      baseState: Ee,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rn,
        lastRenderedState: Ee,
      },
      next: null,
    };
    var a = {};
    return (
      (n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Rn,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function fg(e) {
    var n = cg(e).next.queue;
    ms(e, n, {}, Mt());
  }
  function Sc() {
    return lt(zs);
  }
  function dg() {
    return Fe().memoizedState;
  }
  function hg() {
    return Fe().memoizedState;
  }
  function mE(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = Mt();
          e = oi(a);
          var l = ui(n, e, a);
          l !== null && (ht(l, n, a), bs(l, n, a)),
            (n = { cache: ic() }),
            (e.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function vE(e, n, a) {
    var l = Mt();
    (a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Jl(e)
        ? gg(n, a)
        : ((a = Zu(e, n, a, l)), a !== null && (ht(a, e, l), mg(a, n, l)));
  }
  function pg(e, n, a) {
    var l = Mt();
    ms(e, n, a, l);
  }
  function ms(e, n, a, l) {
    var u = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Jl(e)) gg(n, u);
    else {
      var f = e.alternate;
      if (
        e.lanes === 0 &&
        (f === null || f.lanes === 0) &&
        ((f = n.lastRenderedReducer), f !== null)
      )
        try {
          var p = n.lastRenderedState,
            v = f(p, a);
          if (((u.hasEagerState = !0), (u.eagerState = v), Rt(v, p)))
            return Ll(e, n, u, 0), xe === null && Il(), !1;
        } catch {
        } finally {
        }
      if (((a = Zu(e, n, u, l)), a !== null))
        return ht(a, e, l), mg(a, n, l), !0;
    }
    return !1;
  }
  function Ec(e, n, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: ff(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Jl(e))
    ) {
      if (n) throw Error(s(479));
    } else (n = Zu(e, a, l, 2)), n !== null && ht(n, e, 2);
  }
  function Jl(e) {
    var n = e.alternate;
    return e === pe || (n !== null && n === pe);
  }
  function gg(e, n) {
    Wr = Ql = !0;
    var a = e.pending;
    a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (e.pending = n);
  }
  function mg(e, n, a) {
    if ((a & 4194176) !== 0) {
      var l = n.lanes;
      (l &= e.pendingLanes), (a |= l), (n.lanes = a), Rh(e, a);
    }
  }
  var cn = {
    readContext: lt,
    use: Xl,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useLayoutEffect: Ve,
    useInsertionEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
  };
  (cn.useCacheRefresh = Ve),
    (cn.useMemoCache = Ve),
    (cn.useHostTransitionStatus = Ve),
    (cn.useFormState = Ve),
    (cn.useActionState = Ve),
    (cn.useOptimistic = Ve);
  var ir = {
    readContext: lt,
    use: Xl,
    useCallback: function (e, n) {
      return (Et().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: lt,
    useEffect: tg,
    useImperativeHandle: function (e, n, a) {
      (a = a != null ? a.concat([e]) : null),
        Zl(4194308, 4, rg.bind(null, n, e), a);
    },
    useLayoutEffect: function (e, n) {
      return Zl(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      Zl(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var a = Et();
      n = n === void 0 ? null : n;
      var l = e();
      if (nr) {
        Jn(!0);
        try {
          e();
        } finally {
          Jn(!1);
        }
      }
      return (a.memoizedState = [l, n]), l;
    },
    useReducer: function (e, n, a) {
      var l = Et();
      if (a !== void 0) {
        var u = a(n);
        if (nr) {
          Jn(!0);
          try {
            a(n);
          } finally {
            Jn(!1);
          }
        }
      } else u = n;
      return (
        (l.memoizedState = l.baseState = u),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: u,
        }),
        (l.queue = e),
        (e = e.dispatch = vE.bind(null, pe, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = Et();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: function (e) {
      e = pc(e);
      var n = e.queue,
        a = pg.bind(null, pe, n);
      return (n.dispatch = a), [e.memoizedState, a];
    },
    useDebugValue: vc,
    useDeferredValue: function (e, n) {
      var a = Et();
      return yc(a, e, n);
    },
    useTransition: function () {
      var e = pc(!1);
      return (
        (e = ug.bind(null, pe, e.queue, !0, !1)),
        (Et().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, n, a) {
      var l = pe,
        u = Et();
      if (_e) {
        if (a === void 0) throw Error(s(407));
        a = a();
      } else {
        if (((a = n()), xe === null)) throw Error(s(349));
        (Te & 60) !== 0 || kp(l, n, a);
      }
      u.memoizedState = a;
      var f = { value: a, getSnapshot: n };
      return (
        (u.queue = f),
        tg(Pp.bind(null, l, f, e), [e]),
        (l.flags |= 2048),
        ta(9, Bp.bind(null, l, f, a, n), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var e = Et(),
        n = xe.identifierPrefix;
      if (_e) {
        var a = Dn,
          l = On;
        (a = (l & ~(1 << (32 - wt(l) - 1))).toString(32) + a),
          (n = ":" + n + "R" + a),
          (a = Yl++),
          0 < a && (n += "H" + a.toString(32)),
          (n += ":");
      } else (a = fE++), (n = ":" + n + "r" + a.toString(32) + ":");
      return (e.memoizedState = n);
    },
    useCacheRefresh: function () {
      return (Et().memoizedState = mE.bind(null, pe));
    },
  };
  (ir.useMemoCache = fc),
    (ir.useHostTransitionStatus = Sc),
    (ir.useFormState = Zp),
    (ir.useActionState = Zp),
    (ir.useOptimistic = function (e) {
      var n = Et();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (n.queue = a), (n = Ec.bind(null, pe, !0, a)), (a.dispatch = n), [e, n]
      );
    });
  var ai = {
    readContext: lt,
    use: Xl,
    useCallback: sg,
    useContext: lt,
    useEffect: mc,
    useImperativeHandle: ag,
    useInsertionEffect: ng,
    useLayoutEffect: ig,
    useMemo: lg,
    useReducer: Kl,
    useRef: eg,
    useState: function () {
      return Kl(Rn);
    },
    useDebugValue: vc,
    useDeferredValue: function (e, n) {
      var a = Fe();
      return og(a, Re.memoizedState, e, n);
    },
    useTransition: function () {
      var e = Kl(Rn)[0],
        n = Fe().memoizedState;
      return [typeof e == "boolean" ? e : gs(e), n];
    },
    useSyncExternalStore: jp,
    useId: dg,
  };
  (ai.useCacheRefresh = hg),
    (ai.useMemoCache = fc),
    (ai.useHostTransitionStatus = Sc),
    (ai.useFormState = $p),
    (ai.useActionState = $p),
    (ai.useOptimistic = function (e, n) {
      var a = Fe();
      return Gp(a, Re, e, n);
    });
  var rr = {
    readContext: lt,
    use: Xl,
    useCallback: sg,
    useContext: lt,
    useEffect: mc,
    useImperativeHandle: ag,
    useInsertionEffect: ng,
    useLayoutEffect: ig,
    useMemo: lg,
    useReducer: hc,
    useRef: eg,
    useState: function () {
      return hc(Rn);
    },
    useDebugValue: vc,
    useDeferredValue: function (e, n) {
      var a = Fe();
      return Re === null ? yc(a, e, n) : og(a, Re.memoizedState, e, n);
    },
    useTransition: function () {
      var e = hc(Rn)[0],
        n = Fe().memoizedState;
      return [typeof e == "boolean" ? e : gs(e), n];
    },
    useSyncExternalStore: jp,
    useId: dg,
  };
  (rr.useCacheRefresh = hg),
    (rr.useMemoCache = fc),
    (rr.useHostTransitionStatus = Sc),
    (rr.useFormState = Wp),
    (rr.useActionState = Wp),
    (rr.useOptimistic = function (e, n) {
      var a = Fe();
      return Re !== null
        ? Gp(a, Re, e, n)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    });
  function Tc(e, n, a, l) {
    (n = e.memoizedState),
      (a = a(l, n)),
      (a = a == null ? n : fe({}, n, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var _c = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ie(e) === e : !1;
    },
    enqueueSetState: function (e, n, a) {
      e = e._reactInternals;
      var l = Mt(),
        u = oi(l);
      (u.payload = n),
        a != null && (u.callback = a),
        (n = ui(e, u, l)),
        n !== null && (ht(n, e, l), bs(n, e, l));
    },
    enqueueReplaceState: function (e, n, a) {
      e = e._reactInternals;
      var l = Mt(),
        u = oi(l);
      (u.tag = 1),
        (u.payload = n),
        a != null && (u.callback = a),
        (n = ui(e, u, l)),
        n !== null && (ht(n, e, l), bs(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var a = Mt(),
        l = oi(a);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = ui(e, l, a)),
        n !== null && (ht(n, e, a), bs(n, e, a));
    },
  };
  function vg(e, n, a, l, u, f, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, f, p)
        : n.prototype && n.prototype.isPureReactComponent
        ? !is(a, l) || !is(u, f)
        : !0
    );
  }
  function yg(e, n, a, l) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(a, l),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(a, l),
      n.state !== e && _c.enqueueReplaceState(n, n.state, null);
  }
  function ar(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var l in n) l !== "ref" && (a[l] = n[l]);
    }
    if ((e = e.defaultProps)) {
      a === n && (a = fe({}, a));
      for (var u in e) a[u] === void 0 && (a[u] = e[u]);
    }
    return a;
  }
  var Wl =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function bg(e) {
    Wl(e);
  }
  function Sg(e) {
    console.error(e);
  }
  function Eg(e) {
    Wl(e);
  }
  function eo(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Tg(e, n, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function Oc(e, n, a) {
    return (
      (a = oi(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        eo(e, n);
      }),
      a
    );
  }
  function _g(e) {
    return (e = oi(e)), (e.tag = 3), e;
  }
  function Og(e, n, a, l) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = l.value;
      (e.payload = function () {
        return u(f);
      }),
        (e.callback = function () {
          Tg(n, a, l);
        });
    }
    var p = a.stateNode;
    p !== null &&
      typeof p.componentDidCatch == "function" &&
      (e.callback = function () {
        Tg(n, a, l),
          typeof u != "function" &&
            (gi === null ? (gi = new Set([this])) : gi.add(this));
        var v = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function yE(e, n, a, l, u) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((n = a.alternate),
        n !== null && ys(n, a, u, !0),
        (a = kt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              un === null ? sf() : a.alternate === null && Be === 0 && (Be = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              l === ec
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null ? (a.updateQueue = new Set([l])) : n.add(l),
                  of(e, l, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === ec
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = n))
                    : ((a = n.retryQueue),
                      a === null ? (n.retryQueue = new Set([l])) : a.add(l)),
                  of(e, l, u)),
              !1
            );
        }
        throw Error(s(435, a.tag));
      }
      return of(e, l, u), sf(), !1;
    }
    if (_e)
      return (
        (n = kt.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = u),
            l !== Wu && ((e = Error(s(422), { cause: l })), ls(zt(e, a))))
          : (l !== Wu && ((n = Error(s(423), { cause: l })), ls(zt(n, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (l = zt(l, a)),
            (u = Oc(e.stateNode, l, u)),
            kc(e, u),
            Be !== 4 && (Be = 2)),
        !1
      );
    var f = Error(s(520), { cause: l });
    if (
      ((f = zt(f, a)),
      Rs === null ? (Rs = [f]) : Rs.push(f),
      Be !== 4 && (Be = 2),
      n === null)
    )
      return !0;
    (l = zt(l, a)), (a = n);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = u & -u),
            (a.lanes |= e),
            (e = Oc(a.stateNode, l, e)),
            kc(a, e),
            !1
          );
        case 1:
          if (
            ((n = a.type),
            (f = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (f !== null &&
                  typeof f.componentDidCatch == "function" &&
                  (gi === null || !gi.has(f)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = _g(u)),
              Og(u, e, a, l),
              kc(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Dg = Error(s(461)),
    et = !1;
  function rt(e, n, a, l) {
    n.child = e === null ? Np(n, null, a, l) : er(n, e.child, a, l);
  }
  function wg(e, n, a, l, u) {
    a = a.render;
    var f = n.ref;
    if ("ref" in l) {
      var p = {};
      for (var v in l) v !== "ref" && (p[v] = l[v]);
    } else p = l;
    return (
      lr(n),
      (l = lc(e, n, a, p, f, u)),
      (v = oc()),
      e !== null && !et
        ? (uc(e, n, u), Cn(e, n, u))
        : (_e && v && $u(n), (n.flags |= 1), rt(e, n, l, u), n.child)
    );
  }
  function Rg(e, n, a, l, u) {
    if (e === null) {
      var f = a.type;
      return typeof f == "function" &&
        !Fc(f) &&
        f.defaultProps === void 0 &&
        a.compare === null
        ? ((n.tag = 15), (n.type = f), Cg(e, n, f, l, u))
        : ((e = ao(a.type, null, l, n, n.mode, u)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((f = e.child), !Uc(e, u))) {
      var p = f.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : is), a(p, l) && e.ref === n.ref)
      )
        return Cn(e, n, u);
    }
    return (
      (n.flags |= 1),
      (e = hi(f, l)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Cg(e, n, a, l, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (is(f, l) && e.ref === n.ref)
        if (((et = !1), (n.pendingProps = l = f), Uc(e, u)))
          (e.flags & 131072) !== 0 && (et = !0);
        else return (n.lanes = e.lanes), Cn(e, n, u);
    }
    return Dc(e, n, a, l, u);
  }
  function Ag(e, n, a) {
    var l = n.pendingProps,
      u = l.children,
      f = (n.stateNode._pendingVisibility & 2) !== 0,
      p = e !== null ? e.memoizedState : null;
    if ((vs(e, n), l.mode === "hidden" || f)) {
      if ((n.flags & 128) !== 0) {
        if (((l = p !== null ? p.baseLanes | a : a), e !== null)) {
          for (u = n.child = e.child, f = 0; u !== null; )
            (f = f | u.lanes | u.childLanes), (u = u.sibling);
          n.childLanes = f & ~l;
        } else (n.childLanes = 0), (n.child = null);
        return Ng(e, n, l, a);
      }
      if ((a & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Gl(n, p !== null ? p.cachePool : null),
          p !== null ? Mp(n, p) : tc(),
          xp(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          Ng(e, n, p !== null ? p.baseLanes | a : a, a)
        );
    } else
      p !== null
        ? (Gl(n, p.cachePool), Mp(n, p), ii(), (n.memoizedState = null))
        : (e !== null && Gl(n, null), tc(), ii());
    return rt(e, n, u, a), n.child;
  }
  function Ng(e, n, a, l) {
    var u = ac();
    return (
      (u = u === null ? null : { parent: $e._currentValue, pool: u }),
      (n.memoizedState = { baseLanes: a, cachePool: u }),
      e !== null && Gl(n, null),
      tc(),
      xp(n),
      e !== null && ys(e, n, l, !0),
      null
    );
  }
  function vs(e, n) {
    var a = n.ref;
    if (a === null) e !== null && e.ref !== null && (n.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 2097664);
    }
  }
  function Dc(e, n, a, l, u) {
    return (
      lr(n),
      (a = lc(e, n, a, l, void 0, u)),
      (l = oc()),
      e !== null && !et
        ? (uc(e, n, u), Cn(e, n, u))
        : (_e && l && $u(n), (n.flags |= 1), rt(e, n, a, u), n.child)
    );
  }
  function Mg(e, n, a, l, u, f) {
    return (
      lr(n),
      (n.updateQueue = null),
      (a = Hp(n, l, a, u)),
      zp(e),
      (l = oc()),
      e !== null && !et
        ? (uc(e, n, f), Cn(e, n, f))
        : (_e && l && $u(n), (n.flags |= 1), rt(e, n, a, f), n.child)
    );
  }
  function xg(e, n, a, l, u) {
    if ((lr(n), n.stateNode === null)) {
      var f = Yr,
        p = a.contextType;
      typeof p == "object" && p !== null && (f = lt(p)),
        (f = new a(l, f)),
        (n.memoizedState =
          f.state !== null && f.state !== void 0 ? f.state : null),
        (f.updater = _c),
        (n.stateNode = f),
        (f._reactInternals = n),
        (f = n.stateNode),
        (f.props = l),
        (f.state = n.memoizedState),
        (f.refs = {}),
        Hc(n),
        (p = a.contextType),
        (f.context = typeof p == "object" && p !== null ? lt(p) : Yr),
        (f.state = n.memoizedState),
        (p = a.getDerivedStateFromProps),
        typeof p == "function" && (Tc(n, a, p, l), (f.state = n.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function" ||
          (typeof f.UNSAFE_componentWillMount != "function" &&
            typeof f.componentWillMount != "function") ||
          ((p = f.state),
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" &&
            f.UNSAFE_componentWillMount(),
          p !== f.state && _c.enqueueReplaceState(f, f.state, null),
          Es(n, l, f, u),
          Ss(),
          (f.state = n.memoizedState)),
        typeof f.componentDidMount == "function" && (n.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      f = n.stateNode;
      var v = n.memoizedProps,
        S = ar(a, v);
      f.props = S;
      var O = f.context,
        z = a.contextType;
      (p = Yr), typeof z == "object" && z !== null && (p = lt(z));
      var j = a.getDerivedStateFromProps;
      (z =
        typeof j == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function"),
        (v = n.pendingProps !== v),
        z ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((v || O !== p) && yg(n, f, l, p)),
        (li = !1);
      var M = n.memoizedState;
      (f.state = M),
        Es(n, l, f, u),
        Ss(),
        (O = n.memoizedState),
        v || M !== O || li
          ? (typeof j == "function" && (Tc(n, a, j, l), (O = n.memoizedState)),
            (S = li || vg(n, a, S, l, M, O, p))
              ? (z ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = l),
                (n.memoizedState = O)),
            (f.props = l),
            (f.state = O),
            (f.context = p),
            (l = S))
          : (typeof f.componentDidMount == "function" && (n.flags |= 4194308),
            (l = !1));
    } else {
      (f = n.stateNode),
        jc(e, n),
        (p = n.memoizedProps),
        (z = ar(a, p)),
        (f.props = z),
        (j = n.pendingProps),
        (M = f.context),
        (O = a.contextType),
        (S = Yr),
        typeof O == "object" && O !== null && (S = lt(O)),
        (v = a.getDerivedStateFromProps),
        (O =
          typeof v == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function") ||
          (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
            typeof f.componentWillReceiveProps != "function") ||
          ((p !== j || M !== S) && yg(n, f, l, S)),
        (li = !1),
        (M = n.memoizedState),
        (f.state = M),
        Es(n, l, f, u),
        Ss();
      var L = n.memoizedState;
      p !== j ||
      M !== L ||
      li ||
      (e !== null && e.dependencies !== null && to(e.dependencies))
        ? (typeof v == "function" && (Tc(n, a, v, l), (L = n.memoizedState)),
          (z =
            li ||
            vg(n, a, z, l, M, L, S) ||
            (e !== null && e.dependencies !== null && to(e.dependencies)))
            ? (O ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(l, L, S),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(l, L, S)),
              typeof f.componentDidUpdate == "function" && (n.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (p === e.memoizedProps && M === e.memoizedState) ||
                (n.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && M === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = l),
              (n.memoizedState = L)),
          (f.props = l),
          (f.state = L),
          (f.context = S),
          (l = z))
        : (typeof f.componentDidUpdate != "function" ||
            (p === e.memoizedProps && M === e.memoizedState) ||
            (n.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && M === e.memoizedState) ||
            (n.flags |= 1024),
          (l = !1));
    }
    return (
      (f = l),
      vs(e, n),
      (l = (n.flags & 128) !== 0),
      f || l
        ? ((f = n.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : f.render()),
          (n.flags |= 1),
          e !== null && l
            ? ((n.child = er(n, e.child, null, u)),
              (n.child = er(n, null, a, u)))
            : rt(e, n, a, u),
          (n.memoizedState = f.state),
          (e = n.child))
        : (e = Cn(e, n, u)),
      e
    );
  }
  function Ug(e, n, a, l) {
    return ss(), (n.flags |= 256), rt(e, n, a, l), n.child;
  }
  var wc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Rc(e) {
    return { baseLanes: e, cachePool: Lp() };
  }
  function Cc(e, n, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), n && (e |= Vt), e;
  }
  function Ig(e, n, a) {
    var l = n.pendingProps,
      u = !1,
      f = (n.flags & 128) !== 0,
      p;
    if (
      ((p = f) ||
        (p =
          e !== null && e.memoizedState === null ? !1 : (Ze.current & 2) !== 0),
      p && ((u = !0), (n.flags &= -129)),
      (p = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (_e) {
        if ((u ? ni(n) : ii(), _e)) {
          var v = it,
            S;
          if ((S = v)) {
            e: {
              for (S = v, v = on; S.nodeType !== 8; ) {
                if (!v) {
                  v = null;
                  break e;
                }
                if (((S = Jt(S.nextSibling)), S === null)) {
                  v = null;
                  break e;
                }
              }
              v = S;
            }
            v !== null
              ? ((n.memoizedState = {
                  dehydrated: v,
                  treeContext: $i !== null ? { id: On, overflow: Dn } : null,
                  retryLane: 536870912,
                }),
                (S = qt(18, null, null, 0)),
                (S.stateNode = v),
                (S.return = n),
                (n.child = S),
                (dt = n),
                (it = null),
                (S = !0))
              : (S = !1);
          }
          S || Wi(n);
        }
        if (
          ((v = n.memoizedState),
          v !== null && ((v = v.dehydrated), v !== null))
        )
          return v.data === "$!" ? (n.lanes = 16) : (n.lanes = 536870912), null;
        wn(n);
      }
      return (
        (v = l.children),
        (l = l.fallback),
        u
          ? (ii(),
            (u = n.mode),
            (v = Nc({ mode: "hidden", children: v }, u)),
            (l = ur(l, u, a, null)),
            (v.return = n),
            (l.return = n),
            (v.sibling = l),
            (n.child = v),
            (u = n.child),
            (u.memoizedState = Rc(a)),
            (u.childLanes = Cc(e, p, a)),
            (n.memoizedState = wc),
            l)
          : (ni(n), Ac(n, v))
      );
    }
    if (
      ((S = e.memoizedState), S !== null && ((v = S.dehydrated), v !== null))
    ) {
      if (f)
        n.flags & 256
          ? (ni(n), (n.flags &= -257), (n = Mc(e, n, a)))
          : n.memoizedState !== null
          ? (ii(), (n.child = e.child), (n.flags |= 128), (n = null))
          : (ii(),
            (u = l.fallback),
            (v = n.mode),
            (l = Nc({ mode: "visible", children: l.children }, v)),
            (u = ur(u, v, a, null)),
            (u.flags |= 2),
            (l.return = n),
            (u.return = n),
            (l.sibling = u),
            (n.child = l),
            er(n, e.child, null, a),
            (l = n.child),
            (l.memoizedState = Rc(a)),
            (l.childLanes = Cc(e, p, a)),
            (n.memoizedState = wc),
            (n = u));
      else if ((ni(n), v.data === "$!")) {
        if (((p = v.nextSibling && v.nextSibling.dataset), p)) var O = p.dgst;
        (p = O),
          (l = Error(s(419))),
          (l.stack = ""),
          (l.digest = p),
          ls({ value: l, source: null, stack: null }),
          (n = Mc(e, n, a));
      } else if (
        (et || ys(e, n, a, !1), (p = (a & e.childLanes) !== 0), et || p)
      ) {
        if (((p = xe), p !== null)) {
          if (((l = a & -a), (l & 42) !== 0)) l = 1;
          else
            switch (l) {
              case 2:
                l = 1;
                break;
              case 8:
                l = 4;
                break;
              case 32:
                l = 16;
                break;
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                l = 64;
                break;
              case 268435456:
                l = 134217728;
                break;
              default:
                l = 0;
            }
          if (
            ((l = (l & (p.suspendedLanes | a)) !== 0 ? 0 : l),
            l !== 0 && l !== S.retryLane)
          )
            throw ((S.retryLane = l), ti(e, l), ht(p, e, l), Dg);
        }
        v.data === "$?" || sf(), (n = Mc(e, n, a));
      } else
        v.data === "$?"
          ? ((n.flags |= 128),
            (n.child = e.child),
            (n = UE.bind(null, e)),
            (v._reactRetry = n),
            (n = null))
          : ((e = S.treeContext),
            (it = Jt(v.nextSibling)),
            (dt = n),
            (_e = !0),
            (Zt = null),
            (on = !1),
            e !== null &&
              ((Ht[jt++] = On),
              (Ht[jt++] = Dn),
              (Ht[jt++] = $i),
              (On = e.id),
              (Dn = e.overflow),
              ($i = n)),
            (n = Ac(n, l.children)),
            (n.flags |= 4096));
      return n;
    }
    return u
      ? (ii(),
        (u = l.fallback),
        (v = n.mode),
        (S = e.child),
        (O = S.sibling),
        (l = hi(S, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = S.subtreeFlags & 31457280),
        O !== null ? (u = hi(O, u)) : ((u = ur(u, v, a, null)), (u.flags |= 2)),
        (u.return = n),
        (l.return = n),
        (l.sibling = u),
        (n.child = l),
        (l = u),
        (u = n.child),
        (v = e.child.memoizedState),
        v === null
          ? (v = Rc(a))
          : ((S = v.cachePool),
            S !== null
              ? ((O = $e._currentValue),
                (S = S.parent !== O ? { parent: O, pool: O } : S))
              : (S = Lp()),
            (v = { baseLanes: v.baseLanes | a, cachePool: S })),
        (u.memoizedState = v),
        (u.childLanes = Cc(e, p, a)),
        (n.memoizedState = wc),
        l)
      : (ni(n),
        (a = e.child),
        (e = a.sibling),
        (a = hi(a, { mode: "visible", children: l.children })),
        (a.return = n),
        (a.sibling = null),
        e !== null &&
          ((p = n.deletions),
          p === null ? ((n.deletions = [e]), (n.flags |= 16)) : p.push(e)),
        (n.child = a),
        (n.memoizedState = null),
        a);
  }
  function Ac(e, n) {
    return (
      (n = Nc({ mode: "visible", children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function Nc(e, n) {
    return sm(e, n, 0, null);
  }
  function Mc(e, n, a) {
    return (
      er(n, e.child, null, a),
      (e = Ac(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function Lg(e, n, a) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), Lc(e.return, n, a);
  }
  function xc(e, n, a, l, u) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: u,
        })
      : ((f.isBackwards = n),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = a),
        (f.tailMode = u));
  }
  function zg(e, n, a) {
    var l = n.pendingProps,
      u = l.revealOrder,
      f = l.tail;
    if ((rt(e, n, l.children, a), (l = Ze.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Lg(e, a, n);
          else if (e.tag === 19) Lg(e, a, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    switch ((Le(Ze, l), u)) {
      case "forwards":
        for (a = n.child, u = null; a !== null; )
          (e = a.alternate),
            e !== null && Vl(e) === null && (u = a),
            (a = a.sibling);
        (a = u),
          a === null
            ? ((u = n.child), (n.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          xc(n, !1, u, a, f);
        break;
      case "backwards":
        for (a = null, u = n.child, n.child = null; u !== null; ) {
          if (((e = u.alternate), e !== null && Vl(e) === null)) {
            n.child = u;
            break;
          }
          (e = u.sibling), (u.sibling = a), (a = u), (u = e);
        }
        xc(n, !0, a, null, f);
        break;
      case "together":
        xc(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Cn(e, n, a) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (pi |= n.lanes),
      (a & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((ys(e, n, a, !1), (a & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(s(153));
    if (n.child !== null) {
      for (
        e = n.child, a = hi(e, e.pendingProps), n.child = a, a.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = hi(e, e.pendingProps)),
          (a.return = n);
      a.sibling = null;
    }
    return n.child;
  }
  function Uc(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && to(e)));
  }
  function bE(e, n, a) {
    switch (n.tag) {
      case 3:
        vl(n, n.stateNode.containerInfo),
          si(n, $e, e.memoizedState.cache),
          ss();
        break;
      case 27:
      case 5:
        _u(n);
        break;
      case 4:
        vl(n, n.stateNode.containerInfo);
        break;
      case 10:
        si(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (ni(n), (n.flags |= 128), null)
            : (a & n.child.childLanes) !== 0
            ? Ig(e, n, a)
            : (ni(n), (e = Cn(e, n, a)), e !== null ? e.sibling : null);
        ni(n);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (
          ((l = (a & n.childLanes) !== 0),
          l || (ys(e, n, a, !1), (l = (a & n.childLanes) !== 0)),
          u)
        ) {
          if (l) return zg(e, n, a);
          n.flags |= 128;
        }
        if (
          ((u = n.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Le(Ze, Ze.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Ag(e, n, a);
      case 24:
        si(n, $e, e.memoizedState.cache);
    }
    return Cn(e, n, a);
  }
  function Hg(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) et = !0;
      else {
        if (!Uc(e, a) && (n.flags & 128) === 0) return (et = !1), bE(e, n, a);
        et = (e.flags & 131072) !== 0;
      }
    else (et = !1), _e && (n.flags & 1048576) !== 0 && Ep(n, jl, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          e = n.pendingProps;
          var l = n.elementType,
            u = l._init;
          if (((l = u(l._payload)), (n.type = l), typeof l == "function"))
            Fc(l)
              ? ((e = ar(l, e)), (n.tag = 1), (n = xg(null, n, l, e, a)))
              : ((n.tag = 0), (n = Dc(null, n, l, e, a)));
          else {
            if (l != null) {
              if (((u = l.$$typeof), u === U)) {
                (n.tag = 11), (n = wg(null, n, l, e, a));
                break e;
              } else if (u === k) {
                (n.tag = 14), (n = Rg(null, n, l, e, a));
                break e;
              }
            }
            throw ((n = me(l) || l), Error(s(306, n, "")));
          }
        }
        return n;
      case 0:
        return Dc(e, n, n.type, n.pendingProps, a);
      case 1:
        return (l = n.type), (u = ar(l, n.pendingProps)), xg(e, n, l, u, a);
      case 3:
        e: {
          if ((vl(n, n.stateNode.containerInfo), e === null))
            throw Error(s(387));
          var f = n.pendingProps;
          (u = n.memoizedState), (l = u.element), jc(e, n), Es(n, f, null, a);
          var p = n.memoizedState;
          if (
            ((f = p.cache),
            si(n, $e, f),
            f !== u.cache && zc(n, [$e], a, !0),
            Ss(),
            (f = p.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: f, isDehydrated: !1, cache: p.cache }),
              (n.updateQueue.baseState = u),
              (n.memoizedState = u),
              n.flags & 256)
            ) {
              n = Ug(e, n, f, a);
              break e;
            } else if (f !== l) {
              (l = zt(Error(s(424)), n)), ls(l), (n = Ug(e, n, f, a));
              break e;
            } else
              for (
                it = Jt(n.stateNode.containerInfo.firstChild),
                  dt = n,
                  _e = !0,
                  Zt = null,
                  on = !0,
                  a = Np(n, null, f, a),
                  n.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((ss(), f === l)) {
              n = Cn(e, n, a);
              break e;
            }
            rt(e, n, f, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          vs(e, n),
          e === null
            ? (a = Bm(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = a)
              : _e ||
                ((a = n.type),
                (e = n.pendingProps),
                (l = yo($n.current).createElement(a)),
                (l[st] = n),
                (l[bt] = e),
                at(l, a, e),
                We(l),
                (n.stateNode = l))
            : (n.memoizedState = Bm(
                n.type,
                e.memoizedProps,
                n.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          _u(n),
          e === null &&
            _e &&
            ((l = n.stateNode = Hm(n.type, n.pendingProps, $n.current)),
            (dt = n),
            (on = !0),
            (it = Jt(l.firstChild))),
          (l = n.pendingProps.children),
          e !== null || _e ? rt(e, n, l, a) : (n.child = er(n, null, l, a)),
          vs(e, n),
          n.child
        );
      case 5:
        return (
          e === null &&
            _e &&
            ((u = l = it) &&
              ((l = KE(l, n.type, n.pendingProps, on)),
              l !== null
                ? ((n.stateNode = l),
                  (dt = n),
                  (it = Jt(l.firstChild)),
                  (on = !1),
                  (u = !0))
                : (u = !1)),
            u || Wi(n)),
          _u(n),
          (u = n.type),
          (f = n.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (l = f.children),
          Sf(u, f) ? (l = null) : p !== null && Sf(u, p) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((u = lc(e, n, dE, null, null, a)), (zs._currentValue = u)),
          vs(e, n),
          rt(e, n, l, a),
          n.child
        );
      case 6:
        return (
          e === null &&
            _e &&
            ((e = a = it) &&
              ((a = ZE(a, n.pendingProps, on)),
              a !== null
                ? ((n.stateNode = a), (dt = n), (it = null), (e = !0))
                : (e = !1)),
            e || Wi(n)),
          null
        );
      case 13:
        return Ig(e, n, a);
      case 4:
        return (
          vl(n, n.stateNode.containerInfo),
          (l = n.pendingProps),
          e === null ? (n.child = er(n, null, l, a)) : rt(e, n, l, a),
          n.child
        );
      case 11:
        return wg(e, n, n.type, n.pendingProps, a);
      case 7:
        return rt(e, n, n.pendingProps, a), n.child;
      case 8:
        return rt(e, n, n.pendingProps.children, a), n.child;
      case 12:
        return rt(e, n, n.pendingProps.children, a), n.child;
      case 10:
        return (
          (l = n.pendingProps),
          si(n, n.type, l.value),
          rt(e, n, l.children, a),
          n.child
        );
      case 9:
        return (
          (u = n.type._context),
          (l = n.pendingProps.children),
          lr(n),
          (u = lt(u)),
          (l = l(u)),
          (n.flags |= 1),
          rt(e, n, l, a),
          n.child
        );
      case 14:
        return Rg(e, n, n.type, n.pendingProps, a);
      case 15:
        return Cg(e, n, n.type, n.pendingProps, a);
      case 19:
        return zg(e, n, a);
      case 22:
        return Ag(e, n, a);
      case 24:
        return (
          lr(n),
          (l = lt($e)),
          e === null
            ? ((u = ac()),
              u === null &&
                ((u = xe),
                (f = ic()),
                (u.pooledCache = f),
                f.refCount++,
                f !== null && (u.pooledCacheLanes |= a),
                (u = f)),
              (n.memoizedState = { parent: l, cache: u }),
              Hc(n),
              si(n, $e, u))
            : ((e.lanes & a) !== 0 && (jc(e, n), Es(n, null, null, a), Ss()),
              (u = e.memoizedState),
              (f = n.memoizedState),
              u.parent !== l
                ? ((u = { parent: l, cache: l }),
                  (n.memoizedState = u),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = u),
                  si(n, $e, l))
                : ((l = f.cache),
                  si(n, $e, l),
                  l !== u.cache && zc(n, [$e], a, !0))),
          rt(e, n, n.pendingProps.children, a),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(s(156, n.tag));
  }
  var Ic = De(null),
    sr = null,
    An = null;
  function si(e, n, a) {
    Le(Ic, n._currentValue), (n._currentValue = a);
  }
  function Nn(e) {
    (e._currentValue = Ic.current), Qe(Ic);
  }
  function Lc(e, n, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), l !== null && (l.childLanes |= n))
          : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function zc(e, n, a, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var p = u.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var v = f;
          f = u;
          for (var S = 0; S < n.length; S++)
            if (v.context === n[S]) {
              (f.lanes |= a),
                (v = f.alternate),
                v !== null && (v.lanes |= a),
                Lc(f.return, a, e),
                l || (p = null);
              break e;
            }
          f = v.next;
        }
      } else if (u.tag === 18) {
        if (((p = u.return), p === null)) throw Error(s(341));
        (p.lanes |= a),
          (f = p.alternate),
          f !== null && (f.lanes |= a),
          Lc(p, a, e),
          (p = null);
      } else p = u.child;
      if (p !== null) p.return = u;
      else
        for (p = u; p !== null; ) {
          if (p === e) {
            p = null;
            break;
          }
          if (((u = p.sibling), u !== null)) {
            (u.return = p.return), (p = u);
            break;
          }
          p = p.return;
        }
      u = p;
    }
  }
  function ys(e, n, a, l) {
    e = null;
    for (var u = n, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var p = u.alternate;
        if (p === null) throw Error(s(387));
        if (((p = p.memoizedProps), p !== null)) {
          var v = u.type;
          Rt(u.pendingProps.value, p.value) ||
            (e !== null ? e.push(v) : (e = [v]));
        }
      } else if (u === ml.current) {
        if (((p = u.alternate), p === null)) throw Error(s(387));
        p.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (e !== null ? e.push(zs) : (e = [zs]));
      }
      u = u.return;
    }
    e !== null && zc(n, e, a, l), (n.flags |= 262144);
  }
  function to(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Rt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function lr(e) {
    (sr = e),
      (An = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function lt(e) {
    return jg(sr, e);
  }
  function no(e, n) {
    return sr === null && lr(e), jg(e, n);
  }
  function jg(e, n) {
    var a = n._currentValue;
    if (((n = { context: n, memoizedValue: a, next: null }), An === null)) {
      if (e === null) throw Error(s(308));
      (An = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288);
    } else An = An.next = n;
    return a;
  }
  var li = !1;
  function Hc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function jc(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function oi(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ui(e, n, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (He & 2) !== 0)) {
      var u = l.pending;
      return (
        u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
        (l.pending = n),
        (n = zl(e)),
        bp(e, null, a),
        n
      );
    }
    return Ll(e, l, n, a), zl(e);
  }
  function bs(e, n, a) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194176) !== 0))
    ) {
      var l = n.lanes;
      (l &= e.pendingLanes), (a |= l), (n.lanes = a), Rh(e, a);
    }
  }
  function kc(e, n) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var u = null,
        f = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var p = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          f === null ? (u = f = p) : (f = f.next = p), (a = a.next);
        } while (a !== null);
        f === null ? (u = f = n) : (f = f.next = n);
      } else u = f = n;
      (a = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = n) : (e.next = n),
      (a.lastBaseUpdate = n);
  }
  var Bc = !1;
  function Ss() {
    if (Bc) {
      var e = Jr;
      if (e !== null) throw e;
    }
  }
  function Es(e, n, a, l) {
    Bc = !1;
    var u = e.updateQueue;
    li = !1;
    var f = u.firstBaseUpdate,
      p = u.lastBaseUpdate,
      v = u.shared.pending;
    if (v !== null) {
      u.shared.pending = null;
      var S = v,
        O = S.next;
      (S.next = null), p === null ? (f = O) : (p.next = O), (p = S);
      var z = e.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (v = z.lastBaseUpdate),
        v !== p &&
          (v === null ? (z.firstBaseUpdate = O) : (v.next = O),
          (z.lastBaseUpdate = S)));
    }
    if (f !== null) {
      var j = u.baseState;
      (p = 0), (z = O = S = null), (v = f);
      do {
        var M = v.lane & -536870913,
          L = M !== v.lane;
        if (L ? (Te & M) === M : (l & M) === M) {
          M !== 0 && M === $r && (Bc = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var Z = e,
              ae = v;
            M = n;
            var Pe = a;
            switch (ae.tag) {
              case 1:
                if (((Z = ae.payload), typeof Z == "function")) {
                  j = Z.call(Pe, j, M);
                  break e;
                }
                j = Z;
                break e;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = ae.payload),
                  (M = typeof Z == "function" ? Z.call(Pe, j, M) : Z),
                  M == null)
                )
                  break e;
                j = fe({}, j, M);
                break e;
              case 2:
                li = !0;
            }
          }
          (M = v.callback),
            M !== null &&
              ((e.flags |= 64),
              L && (e.flags |= 8192),
              (L = u.callbacks),
              L === null ? (u.callbacks = [M]) : L.push(M));
        } else
          (L = {
            lane: M,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            z === null ? ((O = z = L), (S = j)) : (z = z.next = L),
            (p |= M);
        if (((v = v.next), v === null)) {
          if (((v = u.shared.pending), v === null)) break;
          (L = v),
            (v = L.next),
            (L.next = null),
            (u.lastBaseUpdate = L),
            (u.shared.pending = null);
        }
      } while (!0);
      z === null && (S = j),
        (u.baseState = S),
        (u.firstBaseUpdate = O),
        (u.lastBaseUpdate = z),
        f === null && (u.shared.lanes = 0),
        (pi |= p),
        (e.lanes = p),
        (e.memoizedState = j);
    }
  }
  function kg(e, n) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(n);
  }
  function Bg(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) kg(a[e], n);
  }
  function Ts(e, n) {
    try {
      var a = n.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var f = a.create,
              p = a.inst;
            (l = f()), (p.destroy = l);
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (v) {
      Ae(n, n.return, v);
    }
  }
  function ci(e, n, a) {
    try {
      var l = n.updateQueue,
        u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var p = l.inst,
              v = p.destroy;
            if (v !== void 0) {
              (p.destroy = void 0), (u = n);
              var S = a;
              try {
                v();
              } catch (O) {
                Ae(u, S, O);
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (O) {
      Ae(n, n.return, O);
    }
  }
  function Pg(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        Bg(n, a);
      } catch (l) {
        Ae(e, e.return, l);
      }
    }
  }
  function qg(e, n, a) {
    (a.props = ar(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (l) {
      Ae(e, n, l);
    }
  }
  function or(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
        var l = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var u = l;
            break;
          default:
            u = l;
        }
        typeof a == "function" ? (e.refCleanup = a(u)) : (a.current = u);
      }
    } catch (f) {
      Ae(e, n, f);
    }
  }
  function Ct(e, n) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          Ae(e, n, u);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          Ae(e, n, u);
        }
      else a.current = null;
  }
  function Vg(e) {
    var n = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (u) {
      Ae(e, e.return, u);
    }
  }
  function Gg(e, n, a) {
    try {
      var l = e.stateNode;
      GE(l, e.type, a, n), (l[bt] = n);
    } catch (u) {
      Ae(e, e.return, u);
    }
  }
  function Qg(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function Pc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qg(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function qc(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        n
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(e, n)
            : a.insertBefore(e, n)
          : (a.nodeType === 8
              ? ((n = a.parentNode), n.insertBefore(e, a))
              : ((n = a), n.appendChild(e)),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = vo));
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (qc(e, n, a), e = e.sibling; e !== null; )
        qc(e, n, a), (e = e.sibling);
  }
  function io(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (io(e, n, a), e = e.sibling; e !== null; )
        io(e, n, a), (e = e.sibling);
  }
  var Mn = !1,
    ke = !1,
    Vc = !1,
    Yg = typeof WeakSet == "function" ? WeakSet : Set,
    tt = null,
    Fg = !1;
  function SE(e, n) {
    if (((e = e.containerInfo), (yf = Oo), (e = cp(e)), Qu(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var u = l.anchorOffset,
              f = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break e;
            }
            var p = 0,
              v = -1,
              S = -1,
              O = 0,
              z = 0,
              j = e,
              M = null;
            t: for (;;) {
              for (
                var L;
                j !== a || (u !== 0 && j.nodeType !== 3) || (v = p + u),
                  j !== f || (l !== 0 && j.nodeType !== 3) || (S = p + l),
                  j.nodeType === 3 && (p += j.nodeValue.length),
                  (L = j.firstChild) !== null;

              )
                (M = j), (j = L);
              for (;;) {
                if (j === e) break t;
                if (
                  (M === a && ++O === u && (v = p),
                  M === f && ++z === l && (S = p),
                  (L = j.nextSibling) !== null)
                )
                  break;
                (j = M), (M = j.parentNode);
              }
              j = L;
            }
            a = v === -1 || S === -1 ? null : { start: v, end: S };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      bf = { focusedElem: e, selectionRange: a }, Oo = !1, tt = n;
      tt !== null;

    )
      if (
        ((n = tt), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = n), (tt = e);
      else
        for (; tt !== null; ) {
          switch (((n = tt), (f = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                (e = void 0),
                  (a = n),
                  (u = f.memoizedProps),
                  (f = f.memoizedState),
                  (l = a.stateNode);
                try {
                  var Z = ar(a.type, u, a.elementType === a.type);
                  (e = l.getSnapshotBeforeUpdate(Z, f)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (ae) {
                  Ae(a, a.return, ae);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  _f(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      _f(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (tt = e);
            break;
          }
          tt = n.return;
        }
    return (Z = Fg), (Fg = !1), Z;
  }
  function Xg(e, n, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Un(e, a), l & 4 && Ts(5, a);
        break;
      case 1:
        if ((Un(e, a), l & 4))
          if (((e = a.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (v) {
              Ae(a, a.return, v);
            }
          else {
            var u = ar(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(u, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              Ae(a, a.return, v);
            }
          }
        l & 64 && Pg(a), l & 512 && or(a, a.return);
        break;
      case 3:
        if ((Un(e, a), l & 64 && ((l = a.updateQueue), l !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            Bg(l, e);
          } catch (v) {
            Ae(a, a.return, v);
          }
        }
        break;
      case 26:
        Un(e, a), l & 512 && or(a, a.return);
        break;
      case 27:
      case 5:
        Un(e, a), n === null && l & 4 && Vg(a), l & 512 && or(a, a.return);
        break;
      case 12:
        Un(e, a);
        break;
      case 13:
        Un(e, a), l & 4 && $g(e, a);
        break;
      case 22:
        if (((u = a.memoizedState !== null || Mn), !u)) {
          n = (n !== null && n.memoizedState !== null) || ke;
          var f = Mn,
            p = ke;
          (Mn = u),
            (ke = n) && !p ? fi(e, a, (a.subtreeFlags & 8772) !== 0) : Un(e, a),
            (Mn = f),
            (ke = p);
        }
        l & 512 &&
          (a.memoizedProps.mode === "manual"
            ? or(a, a.return)
            : Ct(a, a.return));
        break;
      default:
        Un(e, a);
    }
  }
  function Kg(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), Kg(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && Au(n)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Xe = null,
    At = !1;
  function xn(e, n, a) {
    for (a = a.child; a !== null; ) Zg(e, n, a), (a = a.sibling);
  }
  function Zg(e, n, a) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(Qa, a);
      } catch {}
    switch (a.tag) {
      case 26:
        ke || Ct(a, n),
          xn(e, n, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        ke || Ct(a, n);
        var l = Xe,
          u = At;
        for (
          Xe = a.stateNode, xn(e, n, a), a = a.stateNode, n = a.attributes;
          n.length;

        )
          a.removeAttributeNode(n[0]);
        Au(a), (Xe = l), (At = u);
        break;
      case 5:
        ke || Ct(a, n);
      case 6:
        u = Xe;
        var f = At;
        if (((Xe = null), xn(e, n, a), (Xe = u), (At = f), Xe !== null))
          if (At)
            try {
              (e = Xe),
                (l = a.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(l)
                  : e.removeChild(l);
            } catch (p) {
              Ae(a, n, p);
            }
          else
            try {
              Xe.removeChild(a.stateNode);
            } catch (p) {
              Ae(a, n, p);
            }
        break;
      case 18:
        Xe !== null &&
          (At
            ? ((n = Xe),
              (a = a.stateNode),
              n.nodeType === 8
                ? Tf(n.parentNode, a)
                : n.nodeType === 1 && Tf(n, a),
              Bs(n))
            : Tf(Xe, a.stateNode));
        break;
      case 4:
        (l = Xe),
          (u = At),
          (Xe = a.stateNode.containerInfo),
          (At = !0),
          xn(e, n, a),
          (Xe = l),
          (At = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ke || ci(2, a, n), ke || ci(4, a, n), xn(e, n, a);
        break;
      case 1:
        ke ||
          (Ct(a, n),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && qg(a, n, l)),
          xn(e, n, a);
        break;
      case 21:
        xn(e, n, a);
        break;
      case 22:
        ke || Ct(a, n),
          (ke = (l = ke) || a.memoizedState !== null),
          xn(e, n, a),
          (ke = l);
        break;
      default:
        xn(e, n, a);
    }
  }
  function $g(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Bs(e);
      } catch (a) {
        Ae(n, n.return, a);
      }
  }
  function EE(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Yg()), n;
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new Yg()),
          n
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Gc(e, n) {
    var a = EE(e);
    n.forEach(function (l) {
      var u = IE.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(u, u));
    });
  }
  function Bt(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l],
          f = e,
          p = n,
          v = p;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
            case 5:
              (Xe = v.stateNode), (At = !1);
              break e;
            case 3:
              (Xe = v.stateNode.containerInfo), (At = !0);
              break e;
            case 4:
              (Xe = v.stateNode.containerInfo), (At = !0);
              break e;
          }
          v = v.return;
        }
        if (Xe === null) throw Error(s(160));
        Zg(f, p, u),
          (Xe = null),
          (At = !1),
          (f = u.alternate),
          f !== null && (f.return = null),
          (u.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) Jg(n, e), (n = n.sibling);
  }
  var $t = null;
  function Jg(e, n) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Bt(n, e),
          Pt(e),
          l & 4 && (ci(3, e, e.return), Ts(3, e), ci(5, e, e.return));
        break;
      case 1:
        Bt(n, e),
          Pt(e),
          l & 512 && (ke || a === null || Ct(a, a.return)),
          l & 64 &&
            Mn &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? l : a.concat(l)))));
        break;
      case 26:
        var u = $t;
        if (
          (Bt(n, e),
          Pt(e),
          l & 512 && (ke || a === null || Ct(a, a.return)),
          l & 4)
        ) {
          var f = a !== null ? a.memoizedState : null;
          if (((l = e.memoizedState), a === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (a = e.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (l) {
                    case "title":
                      (f = u.getElementsByTagName("title")[0]),
                        (!f ||
                          f[Xa] ||
                          f[st] ||
                          f.namespaceURI === "http://www.w3.org/2000/svg" ||
                          f.hasAttribute("itemprop")) &&
                          ((f = u.createElement(l)),
                          u.head.insertBefore(
                            f,
                            u.querySelector("head > title")
                          )),
                        at(f, l, a),
                        (f[st] = e),
                        We(f),
                        (l = f);
                      break e;
                    case "link":
                      var p = Vm("link", "href", u).get(l + (a.href || ""));
                      if (p) {
                        for (var v = 0; v < p.length; v++)
                          if (
                            ((f = p[v]),
                            f.getAttribute("href") ===
                              (a.href == null ? null : a.href) &&
                              f.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              f.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              f.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            p.splice(v, 1);
                            break t;
                          }
                      }
                      (f = u.createElement(l)),
                        at(f, l, a),
                        u.head.appendChild(f);
                      break;
                    case "meta":
                      if (
                        (p = Vm("meta", "content", u).get(
                          l + (a.content || "")
                        ))
                      ) {
                        for (v = 0; v < p.length; v++)
                          if (
                            ((f = p[v]),
                            f.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              f.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              f.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              f.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              f.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            p.splice(v, 1);
                            break t;
                          }
                      }
                      (f = u.createElement(l)),
                        at(f, l, a),
                        u.head.appendChild(f);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  (f[st] = e), We(f), (l = f);
                }
                e.stateNode = l;
              } else Gm(u, e.type, e.stateNode);
            else e.stateNode = qm(u, l, e.memoizedProps);
          else
            f !== l
              ? (f === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : f.count--,
                l === null
                  ? Gm(u, e.type, e.stateNode)
                  : qm(u, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                Gg(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && e.alternate === null) {
          (u = e.stateNode), (f = e.memoizedProps);
          try {
            for (var S = u.firstChild; S; ) {
              var O = S.nextSibling,
                z = S.nodeName;
              S[Xa] ||
                z === "HEAD" ||
                z === "BODY" ||
                z === "SCRIPT" ||
                z === "STYLE" ||
                (z === "LINK" && S.rel.toLowerCase() === "stylesheet") ||
                u.removeChild(S),
                (S = O);
            }
            for (var j = e.type, M = u.attributes; M.length; )
              u.removeAttributeNode(M[0]);
            at(u, j, f), (u[st] = e), (u[bt] = f);
          } catch (Z) {
            Ae(e, e.return, Z);
          }
        }
      case 5:
        if (
          (Bt(n, e),
          Pt(e),
          l & 512 && (ke || a === null || Ct(a, a.return)),
          e.flags & 32)
        ) {
          u = e.stateNode;
          try {
            kr(u, "");
          } catch (Z) {
            Ae(e, e.return, Z);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), Gg(e, u, a !== null ? a.memoizedProps : u)),
          l & 1024 && (Vc = !0);
        break;
      case 6:
        if ((Bt(n, e), Pt(e), l & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (l = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = l;
          } catch (Z) {
            Ae(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (
          ((Eo = null),
          (u = $t),
          ($t = bo(n.containerInfo)),
          Bt(n, e),
          ($t = u),
          Pt(e),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Bs(n.containerInfo);
          } catch (Z) {
            Ae(e, e.return, Z);
          }
        Vc && ((Vc = !1), Wg(e));
        break;
      case 4:
        (l = $t),
          ($t = bo(e.stateNode.containerInfo)),
          Bt(n, e),
          Pt(e),
          ($t = l);
        break;
      case 12:
        Bt(n, e), Pt(e);
        break;
      case 13:
        Bt(n, e),
          Pt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Wc = ln()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Gc(e, l)));
        break;
      case 22:
        if (
          (l & 512 && (ke || a === null || Ct(a, a.return)),
          (S = e.memoizedState !== null),
          (O = a !== null && a.memoizedState !== null),
          (z = Mn),
          (j = ke),
          (Mn = z || S),
          (ke = j || O),
          Bt(n, e),
          (ke = j),
          (Mn = z),
          Pt(e),
          (n = e.stateNode),
          (n._current = e),
          (n._visibility &= -3),
          (n._visibility |= n._pendingVisibility & 2),
          l & 8192 &&
            ((n._visibility = S ? n._visibility & -2 : n._visibility | 1),
            S && ((n = Mn || ke), a === null || O || n || na(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26 || n.tag === 27) {
              if (a === null) {
                O = a = n;
                try {
                  if (((u = O.stateNode), S))
                    (f = u.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    (p = O.stateNode), (v = O.memoizedProps.style);
                    var L =
                      v != null && v.hasOwnProperty("display")
                        ? v.display
                        : null;
                    p.style.display =
                      L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (Z) {
                  Ae(O, O.return, Z);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                O = n;
                try {
                  O.stateNode.nodeValue = S ? "" : O.memoizedProps;
                } catch (Z) {
                  Ae(O, O.return, Z);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === e) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              a === n && (a = null), (n = n.return);
            }
            a === n && (a = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), Gc(e, a))));
        break;
      case 19:
        Bt(n, e),
          Pt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Gc(e, l)));
        break;
      case 21:
        break;
      default:
        Bt(n, e), Pt(e);
    }
  }
  function Pt(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var a = e.return; a !== null; ) {
              if (Qg(a)) {
                var l = a;
                break e;
              }
              a = a.return;
            }
            throw Error(s(160));
          }
          switch (l.tag) {
            case 27:
              var u = l.stateNode,
                f = Pc(e);
              io(e, f, u);
              break;
            case 5:
              var p = l.stateNode;
              l.flags & 32 && (kr(p, ""), (l.flags &= -33));
              var v = Pc(e);
              io(e, v, p);
              break;
            case 3:
            case 4:
              var S = l.stateNode.containerInfo,
                O = Pc(e);
              qc(e, O, S);
              break;
            default:
              throw Error(s(161));
          }
        }
      } catch (z) {
        Ae(e, e.return, z);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Wg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Wg(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function Un(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) Xg(e, n.alternate, n), (n = n.sibling);
  }
  function na(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ci(4, n, n.return), na(n);
          break;
        case 1:
          Ct(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && qg(n, n.return, a),
            na(n);
          break;
        case 26:
        case 27:
        case 5:
          Ct(n, n.return), na(n);
          break;
        case 22:
          Ct(n, n.return), n.memoizedState === null && na(n);
          break;
        default:
          na(n);
      }
      e = e.sibling;
    }
  }
  function fi(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var l = n.alternate,
        u = e,
        f = n,
        p = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          fi(u, f, a), Ts(4, f);
          break;
        case 1:
          if (
            (fi(u, f, a),
            (l = f),
            (u = l.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (O) {
              Ae(l, l.return, O);
            }
          if (((l = f), (u = l.updateQueue), u !== null)) {
            var v = l.stateNode;
            try {
              var S = u.shared.hiddenCallbacks;
              if (S !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < S.length; u++)
                  kg(S[u], v);
            } catch (O) {
              Ae(l, l.return, O);
            }
          }
          a && p & 64 && Pg(f), or(f, f.return);
          break;
        case 26:
        case 27:
        case 5:
          fi(u, f, a), a && l === null && p & 4 && Vg(f), or(f, f.return);
          break;
        case 12:
          fi(u, f, a);
          break;
        case 13:
          fi(u, f, a), a && p & 4 && $g(u, f);
          break;
        case 22:
          f.memoizedState === null && fi(u, f, a), or(f, f.return);
          break;
        default:
          fi(u, f, a);
      }
      n = n.sibling;
    }
  }
  function Qc(e, n) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && ds(a));
  }
  function Yc(e, n) {
    (e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && ds(e));
  }
  function di(e, n, a, l) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) em(e, n, a, l), (n = n.sibling);
  }
  function em(e, n, a, l) {
    var u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        di(e, n, a, l), u & 2048 && Ts(9, n);
        break;
      case 3:
        di(e, n, a, l),
          u & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && ds(e)));
        break;
      case 12:
        if (u & 2048) {
          di(e, n, a, l), (e = n.stateNode);
          try {
            var f = n.memoizedProps,
              p = f.id,
              v = f.onPostCommit;
            typeof v == "function" &&
              v(
                p,
                n.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (S) {
            Ae(n, n.return, S);
          }
        } else di(e, n, a, l);
        break;
      case 23:
        break;
      case 22:
        (f = n.stateNode),
          n.memoizedState !== null
            ? f._visibility & 4
              ? di(e, n, a, l)
              : _s(e, n)
            : f._visibility & 4
            ? di(e, n, a, l)
            : ((f._visibility |= 4),
              ia(e, n, a, l, (n.subtreeFlags & 10256) !== 0)),
          u & 2048 && Qc(n.alternate, n);
        break;
      case 24:
        di(e, n, a, l), u & 2048 && Yc(n.alternate, n);
        break;
      default:
        di(e, n, a, l);
    }
  }
  function ia(e, n, a, l, u) {
    for (u = u && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var f = e,
        p = n,
        v = a,
        S = l,
        O = p.flags;
      switch (p.tag) {
        case 0:
        case 11:
        case 15:
          ia(f, p, v, S, u), Ts(8, p);
          break;
        case 23:
          break;
        case 22:
          var z = p.stateNode;
          p.memoizedState !== null
            ? z._visibility & 4
              ? ia(f, p, v, S, u)
              : _s(f, p)
            : ((z._visibility |= 4), ia(f, p, v, S, u)),
            u && O & 2048 && Qc(p.alternate, p);
          break;
        case 24:
          ia(f, p, v, S, u), u && O & 2048 && Yc(p.alternate, p);
          break;
        default:
          ia(f, p, v, S, u);
      }
      n = n.sibling;
    }
  }
  function _s(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e,
          l = n,
          u = l.flags;
        switch (l.tag) {
          case 22:
            _s(a, l), u & 2048 && Qc(l.alternate, l);
            break;
          case 24:
            _s(a, l), u & 2048 && Yc(l.alternate, l);
            break;
          default:
            _s(a, l);
        }
        n = n.sibling;
      }
  }
  var Os = 8192;
  function ra(e) {
    if (e.subtreeFlags & Os)
      for (e = e.child; e !== null; ) tm(e), (e = e.sibling);
  }
  function tm(e) {
    switch (e.tag) {
      case 26:
        ra(e),
          e.flags & Os &&
            e.memoizedState !== null &&
            uT($t, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        ra(e);
        break;
      case 3:
      case 4:
        var n = $t;
        ($t = bo(e.stateNode.containerInfo)), ra(e), ($t = n);
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Os), (Os = 16777216), ra(e), (Os = n))
            : ra(e));
        break;
      default:
        ra(e);
    }
  }
  function nm(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do (n = e.sibling), (e.sibling = null), (e = n);
      while (e !== null);
    }
  }
  function Ds(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a];
          (tt = l), rm(l, e);
        }
      nm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) im(e), (e = e.sibling);
  }
  function im(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ds(e), e.flags & 2048 && ci(9, e, e.return);
        break;
      case 3:
        Ds(e);
        break;
      case 12:
        Ds(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -5), ro(e))
          : Ds(e);
        break;
      default:
        Ds(e);
    }
  }
  function ro(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a];
          (tt = l), rm(l, e);
        }
      nm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          ci(8, n, n.return), ro(n);
          break;
        case 22:
          (a = n.stateNode),
            a._visibility & 4 && ((a._visibility &= -5), ro(n));
          break;
        default:
          ro(n);
      }
      e = e.sibling;
    }
  }
  function rm(e, n) {
    for (; tt !== null; ) {
      var a = tt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ci(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ds(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) (l.return = a), (tt = l);
      else
        e: for (a = e; tt !== null; ) {
          l = tt;
          var u = l.sibling,
            f = l.return;
          if ((Kg(l), l === a)) {
            tt = null;
            break e;
          }
          if (u !== null) {
            (u.return = f), (tt = u);
            break e;
          }
          tt = f;
        }
    }
  }
  function TE(e, n, a, l) {
    (this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function qt(e, n, a, l) {
    return new TE(e, n, a, l);
  }
  function Fc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function hi(e, n) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = qt(e.tag, n, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = n),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 31457280),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (a.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function am(e, n) {
    e.flags &= 31457282;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (n = a.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function ao(e, n, a, l, u, f) {
    var p = 0;
    if (((l = e), typeof e == "function")) Fc(e) && (p = 1);
    else if (typeof e == "string")
      p = lT(e, a, sn.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case g:
          return ur(a.children, u, f, n);
        case m:
          (p = 8), (u |= 24);
          break;
        case y:
          return (
            (e = qt(12, a, n, u | 2)), (e.elementType = y), (e.lanes = f), e
          );
        case N:
          return (e = qt(13, a, n, u)), (e.elementType = N), (e.lanes = f), e;
        case R:
          return (e = qt(19, a, n, u)), (e.elementType = R), (e.lanes = f), e;
        case q:
          return sm(a, u, f, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case b:
              case A:
                p = 10;
                break e;
              case w:
                p = 9;
                break e;
              case U:
                p = 11;
                break e;
              case k:
                p = 14;
                break e;
              case P:
                (p = 16), (l = null);
                break e;
            }
          (p = 29),
            (a = Error(s(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (n = qt(p, a, n, u)), (n.elementType = e), (n.type = l), (n.lanes = f), n
    );
  }
  function ur(e, n, a, l) {
    return (e = qt(7, e, l, n)), (e.lanes = a), e;
  }
  function sm(e, n, a, l) {
    (e = qt(22, e, l, n)), (e.elementType = q), (e.lanes = a);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var f = u._current;
        if (f === null) throw Error(s(456));
        if ((u._pendingVisibility & 2) === 0) {
          var p = ti(f, 2);
          p !== null && ((u._pendingVisibility |= 2), ht(p, f, 2));
        }
      },
      attach: function () {
        var f = u._current;
        if (f === null) throw Error(s(456));
        if ((u._pendingVisibility & 2) !== 0) {
          var p = ti(f, 2);
          p !== null && ((u._pendingVisibility &= -3), ht(p, f, 2));
        }
      },
    };
    return (e.stateNode = u), e;
  }
  function Xc(e, n, a) {
    return (e = qt(6, e, null, n)), (e.lanes = a), e;
  }
  function Kc(e, n, a) {
    return (
      (n = qt(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function In(e) {
    e.flags |= 4;
  }
  function lm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Qm(n))) {
      if (
        ((n = kt.current),
        n !== null &&
          ((Te & 4194176) === Te
            ? un !== null
            : ((Te & 62914560) !== Te && (Te & 536870912) === 0) || n !== un))
      )
        throw ((us = ec), Op);
      e.flags |= 8192;
    }
  }
  function so(e, n) {
    n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? Dh() : 536870912), (e.lanes |= n), (sa |= n));
  }
  function ws(e, n) {
    if (!_e)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), (a = a.sibling);
          l === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function ze(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (n)
      for (var u = e.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags & 31457280),
          (l |= u.flags & 31457280),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (l |= u.subtreeFlags),
          (l |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = a), n;
  }
  function _E(e, n, a) {
    var l = n.pendingProps;
    switch ((Ju(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ze(n), null;
      case 1:
        return ze(n), null;
      case 3:
        return (
          (a = n.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          n.memoizedState.cache !== l && (n.flags |= 2048),
          Nn($e),
          Ur(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (as(n)
              ? In(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Zt !== null && (rf(Zt), (Zt = null)))),
          ze(n),
          null
        );
      case 26:
        return (
          (a = n.memoizedState),
          e === null
            ? (In(n),
              a !== null ? (ze(n), lm(n, a)) : (ze(n), (n.flags &= -16777217)))
            : a
            ? a !== e.memoizedState
              ? (In(n), ze(n), lm(n, a))
              : (ze(n), (n.flags &= -16777217))
            : (e.memoizedProps !== l && In(n), ze(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        yl(n), (a = $n.current);
        var u = n.type;
        if (e !== null && n.stateNode != null) e.memoizedProps !== l && In(n);
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(s(166));
            return ze(n), null;
          }
          (e = sn.current),
            as(n) ? Tp(n) : ((e = Hm(u, l, a)), (n.stateNode = e), In(n));
        }
        return ze(n), null;
      case 5:
        if ((yl(n), (a = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== l && In(n);
        else {
          if (!l) {
            if (n.stateNode === null) throw Error(s(166));
            return ze(n), null;
          }
          if (((e = sn.current), as(n))) Tp(n);
          else {
            switch (((u = yo($n.current)), e)) {
              case 1:
                e = u.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = u.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (e = u.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? u.createElement("select", { is: l.is })
                        : u.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? u.createElement(a, { is: l.is })
                        : u.createElement(a);
                }
            }
            (e[st] = n), (e[bt] = l);
            e: for (u = n.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) e.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === n) break e;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === n) break e;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            n.stateNode = e;
            e: switch ((at(e, a, l), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && In(n);
          }
        }
        return ze(n), (n.flags &= -16777217), null;
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== l && In(n);
        else {
          if (typeof l != "string" && n.stateNode === null) throw Error(s(166));
          if (((e = $n.current), as(n))) {
            if (
              ((e = n.stateNode),
              (a = n.memoizedProps),
              (l = null),
              (u = dt),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            (e[st] = n),
              (e = !!(
                e.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                Mm(e.nodeValue, a)
              )),
              e || Wi(n);
          } else (e = yo(e).createTextNode(l)), (e[st] = n), (n.stateNode = e);
        }
        return ze(n), null;
      case 13:
        if (
          ((l = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((u = as(n)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(s(317));
              u[st] = n;
            } else
              ss(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            ze(n), (u = !1);
          } else Zt !== null && (rf(Zt), (Zt = null)), (u = !0);
          if (!u) return n.flags & 256 ? (wn(n), n) : (wn(n), null);
        }
        if ((wn(n), (n.flags & 128) !== 0)) return (n.lanes = a), n;
        if (
          ((a = l !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          (l = n.child),
            (u = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (u = l.alternate.memoizedState.cachePool.pool);
          var f = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (f = l.memoizedState.cachePool.pool),
            f !== u && (l.flags |= 2048);
        }
        return (
          a !== e && a && (n.child.flags |= 8192),
          so(n, n.updateQueue),
          ze(n),
          null
        );
      case 4:
        return Ur(), e === null && gf(n.stateNode.containerInfo), ze(n), null;
      case 10:
        return Nn(n.type), ze(n), null;
      case 19:
        if ((Qe(Ze), (u = n.memoizedState), u === null)) return ze(n), null;
        if (((l = (n.flags & 128) !== 0), (f = u.rendering), f === null))
          if (l) ws(u, !1);
          else {
            if (Be !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((f = Vl(e)), f !== null)) {
                  for (
                    n.flags |= 128,
                      ws(u, !1),
                      e = f.updateQueue,
                      n.updateQueue = e,
                      so(n, e),
                      n.subtreeFlags = 0,
                      e = a,
                      a = n.child;
                    a !== null;

                  )
                    am(a, e), (a = a.sibling);
                  return Le(Ze, (Ze.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              ln() > lo &&
              ((n.flags |= 128), (l = !0), ws(u, !1), (n.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Vl(f)), e !== null)) {
              if (
                ((n.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                so(n, e),
                ws(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !f.alternate &&
                  !_e)
              )
                return ze(n), null;
            } else
              2 * ln() - u.renderingStartTime > lo &&
                a !== 536870912 &&
                ((n.flags |= 128), (l = !0), ws(u, !1), (n.lanes = 4194304));
          u.isBackwards
            ? ((f.sibling = n.child), (n.child = f))
            : ((e = u.last),
              e !== null ? (e.sibling = f) : (n.child = f),
              (u.last = f));
        }
        return u.tail !== null
          ? ((n = u.tail),
            (u.rendering = n),
            (u.tail = n.sibling),
            (u.renderingStartTime = ln()),
            (n.sibling = null),
            (e = Ze.current),
            Le(Ze, l ? (e & 1) | 2 : e & 1),
            n)
          : (ze(n), null);
      case 22:
      case 23:
        return (
          wn(n),
          nc(),
          (l = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (n.flags |= 8192)
            : l && (n.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (ze(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : ze(n),
          (a = n.updateQueue),
          a !== null && so(n, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (l = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (l = n.memoizedState.cachePool.pool),
          l !== a && (n.flags |= 2048),
          e !== null && Qe(tr),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          Nn($e),
          ze(n),
          null
        );
      case 25:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function OE(e, n) {
    switch ((Ju(n), n.tag)) {
      case 1:
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Nn($e),
          Ur(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return yl(n), null;
      case 13:
        if (
          (wn(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(s(340));
          ss();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return Qe(Ze), null;
      case 4:
        return Ur(), null;
      case 10:
        return Nn(n.type), null;
      case 22:
      case 23:
        return (
          wn(n),
          nc(),
          e !== null && Qe(tr),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return Nn($e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function om(e, n) {
    switch ((Ju(n), n.tag)) {
      case 3:
        Nn($e), Ur();
        break;
      case 26:
      case 27:
      case 5:
        yl(n);
        break;
      case 4:
        Ur();
        break;
      case 13:
        wn(n);
        break;
      case 19:
        Qe(Ze);
        break;
      case 10:
        Nn(n.type);
        break;
      case 22:
      case 23:
        wn(n), nc(), e !== null && Qe(tr);
        break;
      case 24:
        Nn($e);
    }
  }
  var DE = {
      getCacheForType: function (e) {
        var n = lt($e),
          a = n.data.get(e);
        return a === void 0 && ((a = e()), n.data.set(e, a)), a;
      },
    },
    wE = typeof WeakMap == "function" ? WeakMap : Map,
    He = 0,
    xe = null,
    ve = null,
    Te = 0,
    Ue = 0,
    Nt = null,
    Ln = !1,
    aa = !1,
    Zc = !1,
    zn = 0,
    Be = 0,
    pi = 0,
    cr = 0,
    $c = 0,
    Vt = 0,
    sa = 0,
    Rs = null,
    fn = null,
    Jc = !1,
    Wc = 0,
    lo = 1 / 0,
    oo = null,
    gi = null,
    uo = !1,
    fr = null,
    Cs = 0,
    ef = 0,
    tf = null,
    As = 0,
    nf = null;
  function Mt() {
    if ((He & 2) !== 0 && Te !== 0) return Te & -Te;
    if (V.T !== null) {
      var e = $r;
      return e !== 0 ? e : ff();
    }
    return Ah();
  }
  function um() {
    Vt === 0 && (Vt = (Te & 536870912) === 0 || _e ? Oh() : 536870912);
    var e = kt.current;
    return e !== null && (e.flags |= 32), Vt;
  }
  function ht(e, n, a) {
    ((e === xe && Ue === 2) || e.cancelPendingCommit !== null) &&
      (la(e, 0), Hn(e, Te, Vt, !1)),
      Fa(e, a),
      ((He & 2) === 0 || e !== xe) &&
        (e === xe &&
          ((He & 2) === 0 && (cr |= a), Be === 4 && Hn(e, Te, Vt, !1)),
        dn(e));
  }
  function cm(e, n, a) {
    if ((He & 6) !== 0) throw Error(s(327));
    var l = (!a && (n & 60) === 0 && (n & e.expiredLanes) === 0) || Ya(e, n),
      u = l ? AE(e, n) : lf(e, n, !0),
      f = l;
    do {
      if (u === 0) {
        aa && !l && Hn(e, n, 0, !1);
        break;
      } else if (u === 6) Hn(e, n, 0, !Ln);
      else {
        if (((a = e.current.alternate), f && !RE(a))) {
          (u = lf(e, n, !1)), (f = !1);
          continue;
        }
        if (u === 2) {
          if (((f = n), e.errorRecoveryDisabledLanes & f)) var p = 0;
          else
            (p = e.pendingLanes & -536870913),
              (p = p !== 0 ? p : p & 536870912 ? 536870912 : 0);
          if (p !== 0) {
            n = p;
            e: {
              var v = e;
              u = Rs;
              var S = v.current.memoizedState.isDehydrated;
              if ((S && (la(v, p).flags |= 256), (p = lf(v, p, !1)), p !== 2)) {
                if (Zc && !S) {
                  (v.errorRecoveryDisabledLanes |= f), (cr |= f), (u = 4);
                  break e;
                }
                (f = fn), (fn = u), f !== null && rf(f);
              }
              u = p;
            }
            if (((f = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          la(e, 0), Hn(e, n, 0, !0);
          break;
        }
        e: {
          switch (((l = e), u)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194176) === n) {
                Hn(l, n, Vt, !Ln);
                break e;
              }
              break;
            case 2:
              fn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if (
            ((l.finishedWork = a),
            (l.finishedLanes = n),
            (n & 62914560) === n && ((f = Wc + 300 - ln()), 10 < f))
          ) {
            if ((Hn(l, n, Vt, !Ln), Tl(l, 0) !== 0)) break e;
            l.timeoutHandle = Im(
              fm.bind(null, l, a, fn, oo, Jc, n, Vt, cr, sa, Ln, 2, -0, 0),
              f
            );
            break e;
          }
          fm(l, a, fn, oo, Jc, n, Vt, cr, sa, Ln, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    dn(e);
  }
  function rf(e) {
    fn === null ? (fn = e) : fn.push.apply(fn, e);
  }
  function fm(e, n, a, l, u, f, p, v, S, O, z, j, M) {
    var L = n.subtreeFlags;
    if (
      (L & 8192 || (L & 16785408) === 16785408) &&
      ((Ls = { stylesheets: null, count: 0, unsuspend: oT }),
      tm(n),
      (n = cT()),
      n !== null)
    ) {
      (e.cancelPendingCommit = n(ym.bind(null, e, a, l, u, p, v, S, 1, j, M))),
        Hn(e, f, p, !O);
      return;
    }
    ym(e, a, l, u, p, v, S, z, j, M);
  }
  function RE(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        n.flags & 16384 &&
        ((a = n.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var u = a[l],
            f = u.getSnapshot;
          u = u.value;
          try {
            if (!Rt(f(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null))
        (a.return = n), (n = a);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Hn(e, n, a, l) {
    (n &= ~$c),
      (n &= ~cr),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      l && (e.warmLanes |= n),
      (l = e.expirationTimes);
    for (var u = n; 0 < u; ) {
      var f = 31 - wt(u),
        p = 1 << f;
      (l[f] = -1), (u &= ~p);
    }
    a !== 0 && wh(e, a, n);
  }
  function co() {
    return (He & 6) === 0 ? (Ns(0), !1) : !0;
  }
  function af() {
    if (ve !== null) {
      if (Ue === 0) var e = ve.return;
      else (e = ve), (An = sr = null), cc(e), (Kr = null), (cs = 0), (e = ve);
      for (; e !== null; ) om(e.alternate, e), (e = e.return);
      ve = null;
    }
  }
  function la(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), YE(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      af(),
      (xe = e),
      (ve = a = hi(e.current, null)),
      (Te = n),
      (Ue = 0),
      (Nt = null),
      (Ln = !1),
      (aa = Ya(e, n)),
      (Zc = !1),
      (sa = Vt = $c = cr = pi = Be = 0),
      (fn = Rs = null),
      (Jc = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var u = 31 - wt(l),
          f = 1 << u;
        (n |= e[u]), (l &= ~f);
      }
    return (zn = n), Il(), a;
  }
  function dm(e, n) {
    (pe = null),
      (V.H = cn),
      n === os
        ? ((n = Rp()), (Ue = 3))
        : n === Op
        ? ((n = Rp()), (Ue = 4))
        : (Ue =
            n === Dg
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (Nt = n),
      ve === null && ((Be = 1), eo(e, zt(n, e.current)));
  }
  function hm() {
    var e = V.H;
    return (V.H = cn), e === null ? cn : e;
  }
  function pm() {
    var e = V.A;
    return (V.A = DE), e;
  }
  function sf() {
    (Be = 4),
      Ln || ((Te & 4194176) !== Te && kt.current !== null) || (aa = !0),
      ((pi & 134217727) === 0 && (cr & 134217727) === 0) ||
        xe === null ||
        Hn(xe, Te, Vt, !1);
  }
  function lf(e, n, a) {
    var l = He;
    He |= 2;
    var u = hm(),
      f = pm();
    (xe !== e || Te !== n) && ((oo = null), la(e, n)), (n = !1);
    var p = Be;
    e: do
      try {
        if (Ue !== 0 && ve !== null) {
          var v = ve,
            S = Nt;
          switch (Ue) {
            case 8:
              af(), (p = 6);
              break e;
            case 3:
            case 2:
            case 6:
              kt.current === null && (n = !0);
              var O = Ue;
              if (((Ue = 0), (Nt = null), oa(e, v, S, O), a && aa)) {
                p = 0;
                break e;
              }
              break;
            default:
              (O = Ue), (Ue = 0), (Nt = null), oa(e, v, S, O);
          }
        }
        CE(), (p = Be);
        break;
      } catch (z) {
        dm(e, z);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (An = sr = null),
      (He = l),
      (V.H = u),
      (V.A = f),
      ve === null && ((xe = null), (Te = 0), Il()),
      p
    );
  }
  function CE() {
    for (; ve !== null; ) gm(ve);
  }
  function AE(e, n) {
    var a = He;
    He |= 2;
    var l = hm(),
      u = pm();
    xe !== e || Te !== n
      ? ((oo = null), (lo = ln() + 500), la(e, n))
      : (aa = Ya(e, n));
    e: do
      try {
        if (Ue !== 0 && ve !== null) {
          n = ve;
          var f = Nt;
          t: switch (Ue) {
            case 1:
              (Ue = 0), (Nt = null), oa(e, n, f, 1);
              break;
            case 2:
              if (Dp(f)) {
                (Ue = 0), (Nt = null), mm(n);
                break;
              }
              (n = function () {
                Ue === 2 && xe === e && (Ue = 7), dn(e);
              }),
                f.then(n, n);
              break e;
            case 3:
              Ue = 7;
              break e;
            case 4:
              Ue = 5;
              break e;
            case 7:
              Dp(f)
                ? ((Ue = 0), (Nt = null), mm(n))
                : ((Ue = 0), (Nt = null), oa(e, n, f, 7));
              break;
            case 5:
              var p = null;
              switch (ve.tag) {
                case 26:
                  p = ve.memoizedState;
                case 5:
                case 27:
                  var v = ve;
                  if (!p || Qm(p)) {
                    (Ue = 0), (Nt = null);
                    var S = v.sibling;
                    if (S !== null) ve = S;
                    else {
                      var O = v.return;
                      O !== null ? ((ve = O), fo(O)) : (ve = null);
                    }
                    break t;
                  }
              }
              (Ue = 0), (Nt = null), oa(e, n, f, 5);
              break;
            case 6:
              (Ue = 0), (Nt = null), oa(e, n, f, 6);
              break;
            case 8:
              af(), (Be = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        NE();
        break;
      } catch (z) {
        dm(e, z);
      }
    while (!0);
    return (
      (An = sr = null),
      (V.H = l),
      (V.A = u),
      (He = a),
      ve !== null ? 0 : ((xe = null), (Te = 0), Il(), Be)
    );
  }
  function NE() {
    for (; ve !== null && !Jb(); ) gm(ve);
  }
  function gm(e) {
    var n = Hg(e.alternate, e, zn);
    (e.memoizedProps = e.pendingProps), n === null ? fo(e) : (ve = n);
  }
  function mm(e) {
    var n = e,
      a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Mg(a, n, n.pendingProps, n.type, void 0, Te);
        break;
      case 11:
        n = Mg(a, n, n.pendingProps, n.type.render, n.ref, Te);
        break;
      case 5:
        cc(n);
      default:
        om(a, n), (n = ve = am(n, zn)), (n = Hg(a, n, zn));
    }
    (e.memoizedProps = e.pendingProps), n === null ? fo(e) : (ve = n);
  }
  function oa(e, n, a, l) {
    (An = sr = null), cc(n), (Kr = null), (cs = 0);
    var u = n.return;
    try {
      if (yE(e, u, n, a, Te)) {
        (Be = 1), eo(e, zt(a, e.current)), (ve = null);
        return;
      }
    } catch (f) {
      if (u !== null) throw ((ve = u), f);
      (Be = 1), eo(e, zt(a, e.current)), (ve = null);
      return;
    }
    n.flags & 32768
      ? (_e || l === 1
          ? (e = !0)
          : aa || (Te & 536870912) !== 0
          ? (e = !1)
          : ((Ln = e = !0),
            (l === 2 || l === 3 || l === 6) &&
              ((l = kt.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        vm(n, e))
      : fo(n);
  }
  function fo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        vm(n, Ln);
        return;
      }
      e = n.return;
      var a = _E(n.alternate, n, zn);
      if (a !== null) {
        ve = a;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        ve = n;
        return;
      }
      ve = n = e;
    } while (n !== null);
    Be === 0 && (Be = 5);
  }
  function vm(e, n) {
    do {
      var a = OE(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (ve = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        ve = e;
        return;
      }
      ve = e = a;
    } while (e !== null);
    (Be = 6), (ve = null);
  }
  function ym(e, n, a, l, u, f, p, v, S, O) {
    var z = V.T,
      j = X.p;
    try {
      (X.p = 2), (V.T = null), ME(e, n, a, l, j, u, f, p, v, S, O);
    } finally {
      (V.T = z), (X.p = j);
    }
  }
  function ME(e, n, a, l, u, f, p, v) {
    do ua();
    while (fr !== null);
    if ((He & 6) !== 0) throw Error(s(327));
    var S = e.finishedWork;
    if (((l = e.finishedLanes), S === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), S === e.current))
      throw Error(s(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var O = S.lanes | S.childLanes;
    if (
      ((O |= Ku),
      uS(e, l, O, f, p, v),
      e === xe && ((ve = xe = null), (Te = 0)),
      ((S.subtreeFlags & 10256) === 0 && (S.flags & 10256) === 0) ||
        uo ||
        ((uo = !0),
        (ef = O),
        (tf = a),
        LE(bl, function () {
          return ua(), null;
        })),
      (a = (S.flags & 15990) !== 0),
      (S.subtreeFlags & 15990) !== 0 || a
        ? ((a = V.T),
          (V.T = null),
          (f = X.p),
          (X.p = 2),
          (p = He),
          (He |= 4),
          SE(e, S),
          Jg(S, e),
          tE(bf, e.containerInfo),
          (Oo = !!yf),
          (bf = yf = null),
          (e.current = S),
          Xg(e, S.alternate, S),
          Wb(),
          (He = p),
          (X.p = f),
          (V.T = a))
        : (e.current = S),
      uo ? ((uo = !1), (fr = e), (Cs = l)) : bm(e, O),
      (O = e.pendingLanes),
      O === 0 && (gi = null),
      rS(S.stateNode),
      dn(e),
      n !== null)
    )
      for (u = e.onRecoverableError, S = 0; S < n.length; S++)
        (O = n[S]), u(O.value, { componentStack: O.stack });
    return (
      (Cs & 3) !== 0 && ua(),
      (O = e.pendingLanes),
      (l & 4194218) !== 0 && (O & 42) !== 0
        ? e === nf
          ? As++
          : ((As = 0), (nf = e))
        : (As = 0),
      Ns(0),
      null
    );
  }
  function bm(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), ds(n)));
  }
  function ua() {
    if (fr !== null) {
      var e = fr,
        n = ef;
      ef = 0;
      var a = Ch(Cs),
        l = V.T,
        u = X.p;
      try {
        if (((X.p = 32 > a ? 32 : a), (V.T = null), fr === null)) var f = !1;
        else {
          (a = tf), (tf = null);
          var p = fr,
            v = Cs;
          if (((fr = null), (Cs = 0), (He & 6) !== 0)) throw Error(s(331));
          var S = He;
          if (
            ((He |= 4),
            im(p.current),
            em(p, p.current, v, a),
            (He = S),
            Ns(0, !1),
            Dt && typeof Dt.onPostCommitFiberRoot == "function")
          )
            try {
              Dt.onPostCommitFiberRoot(Qa, p);
            } catch {}
          f = !0;
        }
        return f;
      } finally {
        (X.p = u), (V.T = l), bm(e, n);
      }
    }
    return !1;
  }
  function Sm(e, n, a) {
    (n = zt(a, n)),
      (n = Oc(e.stateNode, n, 2)),
      (e = ui(e, n, 2)),
      e !== null && (Fa(e, 2), dn(e));
  }
  function Ae(e, n, a) {
    if (e.tag === 3) Sm(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Sm(n, e, a);
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (gi === null || !gi.has(l)))
          ) {
            (e = zt(a, e)),
              (a = _g(2)),
              (l = ui(n, a, 2)),
              l !== null && (Og(a, l, n, e), Fa(l, 2), dn(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function of(e, n, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new wE();
      var u = new Set();
      l.set(n, u);
    } else (u = l.get(n)), u === void 0 && ((u = new Set()), l.set(n, u));
    u.has(a) ||
      ((Zc = !0), u.add(a), (e = xE.bind(null, e, n, a)), n.then(e, e));
  }
  function xE(e, n, a) {
    var l = e.pingCache;
    l !== null && l.delete(n),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      xe === e &&
        (Te & a) === a &&
        (Be === 4 || (Be === 3 && (Te & 62914560) === Te && 300 > ln() - Wc)
          ? (He & 2) === 0 && la(e, 0)
          : ($c |= a),
        sa === Te && (sa = 0)),
      dn(e);
  }
  function Em(e, n) {
    n === 0 && (n = Dh()), (e = ti(e, n)), e !== null && (Fa(e, n), dn(e));
  }
  function UE(e) {
    var n = e.memoizedState,
      a = 0;
    n !== null && (a = n.retryLane), Em(e, a);
  }
  function IE(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          u = e.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(n), Em(e, a);
  }
  function LE(e, n) {
    return Du(e, n);
  }
  var ho = null,
    ca = null,
    uf = !1,
    po = !1,
    cf = !1,
    dr = 0;
  function dn(e) {
    e !== ca &&
      e.next === null &&
      (ca === null ? (ho = ca = e) : (ca = ca.next = e)),
      (po = !0),
      uf || ((uf = !0), HE(zE));
  }
  function Ns(e, n) {
    if (!cf && po) {
      cf = !0;
      do
        for (var a = !1, l = ho; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var p = l.suspendedLanes,
                v = l.pingedLanes;
              (f = (1 << (31 - wt(42 | e) + 1)) - 1),
                (f &= u & ~(p & ~v)),
                (f = f & 201326677 ? (f & 201326677) | 1 : f ? f | 2 : 0);
            }
            f !== 0 && ((a = !0), Om(l, f));
          } else
            (f = Te),
              (f = Tl(l, l === xe ? f : 0)),
              (f & 3) === 0 || Ya(l, f) || ((a = !0), Om(l, f));
          l = l.next;
        }
      while (a);
      cf = !1;
    }
  }
  function zE() {
    po = uf = !1;
    var e = 0;
    dr !== 0 && (QE() && (e = dr), (dr = 0));
    for (var n = ln(), a = null, l = ho; l !== null; ) {
      var u = l.next,
        f = Tm(l, n);
      f === 0
        ? ((l.next = null),
          a === null ? (ho = u) : (a.next = u),
          u === null && (ca = a))
        : ((a = l), (e !== 0 || (f & 3) !== 0) && (po = !0)),
        (l = u);
    }
    Ns(e);
  }
  function Tm(e, n) {
    for (
      var a = e.suspendedLanes,
        l = e.pingedLanes,
        u = e.expirationTimes,
        f = e.pendingLanes & -62914561;
      0 < f;

    ) {
      var p = 31 - wt(f),
        v = 1 << p,
        S = u[p];
      S === -1
        ? ((v & a) === 0 || (v & l) !== 0) && (u[p] = oS(v, n))
        : S <= n && (e.expiredLanes |= v),
        (f &= ~v);
    }
    if (
      ((n = xe),
      (a = Te),
      (a = Tl(e, e === n ? a : 0)),
      (l = e.callbackNode),
      a === 0 || (e === n && Ue === 2) || e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && wu(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Ya(e, a)) {
      if (((n = a & -a), n === e.callbackPriority)) return n;
      switch ((l !== null && wu(l), Ch(a))) {
        case 2:
        case 8:
          a = Th;
          break;
        case 32:
          a = bl;
          break;
        case 268435456:
          a = _h;
          break;
        default:
          a = bl;
      }
      return (
        (l = _m.bind(null, e)),
        (a = Du(a, l)),
        (e.callbackPriority = n),
        (e.callbackNode = a),
        n
      );
    }
    return (
      l !== null && l !== null && wu(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function _m(e, n) {
    var a = e.callbackNode;
    if (ua() && e.callbackNode !== a) return null;
    var l = Te;
    return (
      (l = Tl(e, e === xe ? l : 0)),
      l === 0
        ? null
        : (cm(e, l, n),
          Tm(e, ln()),
          e.callbackNode != null && e.callbackNode === a
            ? _m.bind(null, e)
            : null)
    );
  }
  function Om(e, n) {
    if (ua()) return null;
    cm(e, n, !0);
  }
  function HE(e) {
    FE(function () {
      (He & 6) !== 0 ? Du(Eh, e) : e();
    });
  }
  function ff() {
    return dr === 0 && (dr = Oh()), dr;
  }
  function Dm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : Rl("" + e);
  }
  function wm(e, n) {
    var a = n.ownerDocument.createElement("input");
    return (
      (a.name = n.name),
      (a.value = n.value),
      e.id && a.setAttribute("form", e.id),
      n.parentNode.insertBefore(a, n),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function jE(e, n, a, l, u) {
    if (n === "submit" && a && a.stateNode === u) {
      var f = Dm((u[bt] || null).action),
        p = l.submitter;
      p &&
        ((n = (n = p[bt] || null)
          ? Dm(n.formAction)
          : p.getAttribute("formAction")),
        n !== null && ((f = n), (p = null)));
      var v = new Ml("action", "action", null, l, u);
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (dr !== 0) {
                  var S = p ? wm(u, p) : new FormData(u);
                  bc(
                    a,
                    { pending: !0, data: S, method: u.method, action: f },
                    null,
                    S
                  );
                }
              } else
                typeof f == "function" &&
                  (v.preventDefault(),
                  (S = p ? wm(u, p) : new FormData(u)),
                  bc(
                    a,
                    { pending: !0, data: S, method: u.method, action: f },
                    f,
                    S
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var df = 0; df < yp.length; df++) {
    var hf = yp[df],
      kE = hf.toLowerCase(),
      BE = hf[0].toUpperCase() + hf.slice(1);
    Kt(kE, "on" + BE);
  }
  Kt(hp, "onAnimationEnd"),
    Kt(pp, "onAnimationIteration"),
    Kt(gp, "onAnimationStart"),
    Kt("dblclick", "onDoubleClick"),
    Kt("focusin", "onFocus"),
    Kt("focusout", "onBlur"),
    Kt(iE, "onTransitionRun"),
    Kt(rE, "onTransitionStart"),
    Kt(aE, "onTransitionCancel"),
    Kt(mp, "onTransitionEnd"),
    Hr("onMouseEnter", ["mouseout", "mouseover"]),
    Hr("onMouseLeave", ["mouseout", "mouseover"]),
    Hr("onPointerEnter", ["pointerout", "pointerover"]),
    Hr("onPointerLeave", ["pointerout", "pointerover"]),
    Fi(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Fi(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Fi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Fi(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Fi(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Fi(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ms =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    PE = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Ms)
    );
  function Rm(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        u = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (n)
          for (var p = l.length - 1; 0 <= p; p--) {
            var v = l[p],
              S = v.instance,
              O = v.currentTarget;
            if (((v = v.listener), S !== f && u.isPropagationStopped()))
              break e;
            (f = v), (u.currentTarget = O);
            try {
              f(u);
            } catch (z) {
              Wl(z);
            }
            (u.currentTarget = null), (f = S);
          }
        else
          for (p = 0; p < l.length; p++) {
            if (
              ((v = l[p]),
              (S = v.instance),
              (O = v.currentTarget),
              (v = v.listener),
              S !== f && u.isPropagationStopped())
            )
              break e;
            (f = v), (u.currentTarget = O);
            try {
              f(u);
            } catch (z) {
              Wl(z);
            }
            (u.currentTarget = null), (f = S);
          }
      }
    }
  }
  function be(e, n) {
    var a = n[Cu];
    a === void 0 && (a = n[Cu] = new Set());
    var l = e + "__bubble";
    a.has(l) || (Cm(n, e, 2, !1), a.add(l));
  }
  function pf(e, n, a) {
    var l = 0;
    n && (l |= 4), Cm(a, e, l, n);
  }
  var go = "_reactListening" + Math.random().toString(36).slice(2);
  function gf(e) {
    if (!e[go]) {
      (e[go] = !0),
        Mh.forEach(function (a) {
          a !== "selectionchange" && (PE.has(a) || pf(a, !1, e), pf(a, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[go] || ((n[go] = !0), pf("selectionchange", !1, n));
    }
  }
  function Cm(e, n, a, l) {
    switch ($m(n)) {
      case 2:
        var u = hT;
        break;
      case 8:
        u = pT;
        break;
      default:
        u = Cf;
    }
    (a = u.bind(null, n, a, e)),
      (u = void 0),
      !zu ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (u = !0),
      l
        ? u !== void 0
          ? e.addEventListener(n, a, { capture: !0, passive: u })
          : e.addEventListener(n, a, !0)
        : u !== void 0
        ? e.addEventListener(n, a, { passive: u })
        : e.addEventListener(n, a, !1);
  }
  function mf(e, n, a, l, u) {
    var f = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var p = l.tag;
        if (p === 3 || p === 4) {
          var v = l.stateNode.containerInfo;
          if (v === u || (v.nodeType === 8 && v.parentNode === u)) break;
          if (p === 4)
            for (p = l.return; p !== null; ) {
              var S = p.tag;
              if (
                (S === 3 || S === 4) &&
                ((S = p.stateNode.containerInfo),
                S === u || (S.nodeType === 8 && S.parentNode === u))
              )
                return;
              p = p.return;
            }
          for (; v !== null; ) {
            if (((p = Yi(v)), p === null)) return;
            if (((S = p.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              l = f = p;
              continue e;
            }
            v = v.parentNode;
          }
        }
        l = l.return;
      }
    Vh(function () {
      var O = f,
        z = Iu(a),
        j = [];
      e: {
        var M = vp.get(e);
        if (M !== void 0) {
          var L = Ml,
            Z = e;
          switch (e) {
            case "keypress":
              if (Al(a) === 0) break e;
            case "keydown":
            case "keyup":
              L = IS;
              break;
            case "focusin":
              (Z = "focus"), (L = Bu);
              break;
            case "focusout":
              (Z = "blur"), (L = Bu);
              break;
            case "beforeblur":
            case "afterblur":
              L = Bu;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              L = Yh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              L = TS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              L = HS;
              break;
            case hp:
            case pp:
            case gp:
              L = DS;
              break;
            case mp:
              L = kS;
              break;
            case "scroll":
            case "scrollend":
              L = SS;
              break;
            case "wheel":
              L = PS;
              break;
            case "copy":
            case "cut":
            case "paste":
              L = RS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              L = Xh;
              break;
            case "toggle":
            case "beforetoggle":
              L = VS;
          }
          var ae = (n & 4) !== 0,
            Pe = !ae && (e === "scroll" || e === "scrollend"),
            D = ae ? (M !== null ? M + "Capture" : null) : M;
          ae = [];
          for (var _ = O, C; _ !== null; ) {
            var H = _;
            if (
              ((C = H.stateNode),
              (H = H.tag),
              (H !== 5 && H !== 26 && H !== 27) ||
                C === null ||
                D === null ||
                ((H = Za(_, D)), H != null && ae.push(xs(_, H, C))),
              Pe)
            )
              break;
            _ = _.return;
          }
          0 < ae.length &&
            ((M = new L(M, Z, null, a, z)),
            j.push({ event: M, listeners: ae }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((M = e === "mouseover" || e === "pointerover"),
            (L = e === "mouseout" || e === "pointerout"),
            M &&
              a !== Uu &&
              (Z = a.relatedTarget || a.fromElement) &&
              (Yi(Z) || Z[Ir]))
          )
            break e;
          if (
            (L || M) &&
            ((M =
              z.window === z
                ? z
                : (M = z.ownerDocument)
                ? M.defaultView || M.parentWindow
                : window),
            L
              ? ((Z = a.relatedTarget || a.toElement),
                (L = O),
                (Z = Z ? Yi(Z) : null),
                Z !== null &&
                  ((Pe = ie(Z)),
                  (ae = Z.tag),
                  Z !== Pe || (ae !== 5 && ae !== 27 && ae !== 6)) &&
                  (Z = null))
              : ((L = null), (Z = O)),
            L !== Z)
          ) {
            if (
              ((ae = Yh),
              (H = "onMouseLeave"),
              (D = "onMouseEnter"),
              (_ = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ae = Xh),
                (H = "onPointerLeave"),
                (D = "onPointerEnter"),
                (_ = "pointer")),
              (Pe = L == null ? M : Ka(L)),
              (C = Z == null ? M : Ka(Z)),
              (M = new ae(H, _ + "leave", L, a, z)),
              (M.target = Pe),
              (M.relatedTarget = C),
              (H = null),
              Yi(z) === O &&
                ((ae = new ae(D, _ + "enter", Z, a, z)),
                (ae.target = C),
                (ae.relatedTarget = Pe),
                (H = ae)),
              (Pe = H),
              L && Z)
            )
              t: {
                for (ae = L, D = Z, _ = 0, C = ae; C; C = fa(C)) _++;
                for (C = 0, H = D; H; H = fa(H)) C++;
                for (; 0 < _ - C; ) (ae = fa(ae)), _--;
                for (; 0 < C - _; ) (D = fa(D)), C--;
                for (; _--; ) {
                  if (ae === D || (D !== null && ae === D.alternate)) break t;
                  (ae = fa(ae)), (D = fa(D));
                }
                ae = null;
              }
            else ae = null;
            L !== null && Am(j, M, L, ae, !1),
              Z !== null && Pe !== null && Am(j, Pe, Z, ae, !0);
          }
        }
        e: {
          if (
            ((M = O ? Ka(O) : window),
            (L = M.nodeName && M.nodeName.toLowerCase()),
            L === "select" || (L === "input" && M.type === "file"))
          )
            var K = np;
          else if (ep(M))
            if (ip) K = WS;
            else {
              K = $S;
              var ge = ZS;
            }
          else
            (L = M.nodeName),
              !L ||
              L.toLowerCase() !== "input" ||
              (M.type !== "checkbox" && M.type !== "radio")
                ? O && xu(O.elementType) && (K = np)
                : (K = JS);
          if (K && (K = K(e, O))) {
            tp(j, K, a, z);
            break e;
          }
          ge && ge(e, M, O),
            e === "focusout" &&
              O &&
              M.type === "number" &&
              O.memoizedProps.value != null &&
              Mu(M, "number", M.value);
        }
        switch (((ge = O ? Ka(O) : window), e)) {
          case "focusin":
            (ep(ge) || ge.contentEditable === "true") &&
              ((Vr = ge), (Yu = O), (rs = null));
            break;
          case "focusout":
            rs = Yu = Vr = null;
            break;
          case "mousedown":
            Fu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Fu = !1), fp(j, a, z);
            break;
          case "selectionchange":
            if (nE) break;
          case "keydown":
          case "keyup":
            fp(j, a, z);
        }
        var $;
        if (qu)
          e: {
            switch (e) {
              case "compositionstart":
                var te = "onCompositionStart";
                break e;
              case "compositionend":
                te = "onCompositionEnd";
                break e;
              case "compositionupdate":
                te = "onCompositionUpdate";
                break e;
            }
            te = void 0;
          }
        else
          qr
            ? Jh(e, a) && (te = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (te = "onCompositionStart");
        te &&
          (Kh &&
            a.locale !== "ko" &&
            (qr || te !== "onCompositionStart"
              ? te === "onCompositionEnd" && qr && ($ = Gh())
              : ((ei = z),
                (Hu = "value" in ei ? ei.value : ei.textContent),
                (qr = !0))),
          (ge = mo(O, te)),
          0 < ge.length &&
            ((te = new Fh(te, e, null, a, z)),
            j.push({ event: te, listeners: ge }),
            $ ? (te.data = $) : (($ = Wh(a)), $ !== null && (te.data = $)))),
          ($ = QS ? YS(e, a) : FS(e, a)) &&
            ((te = mo(O, "onBeforeInput")),
            0 < te.length &&
              ((ge = new Fh("onBeforeInput", "beforeinput", null, a, z)),
              j.push({ event: ge, listeners: te }),
              (ge.data = $))),
          jE(j, e, O, a, z);
      }
      Rm(j, n);
    });
  }
  function xs(e, n, a) {
    return { instance: e, listener: n, currentTarget: a };
  }
  function mo(e, n) {
    for (var a = n + "Capture", l = []; e !== null; ) {
      var u = e,
        f = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          f === null ||
          ((u = Za(e, a)),
          u != null && l.unshift(xs(e, u, f)),
          (u = Za(e, n)),
          u != null && l.push(xs(e, u, f))),
        (e = e.return);
    }
    return l;
  }
  function fa(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Am(e, n, a, l, u) {
    for (var f = n._reactName, p = []; a !== null && a !== l; ) {
      var v = a,
        S = v.alternate,
        O = v.stateNode;
      if (((v = v.tag), S !== null && S === l)) break;
      (v !== 5 && v !== 26 && v !== 27) ||
        O === null ||
        ((S = O),
        u
          ? ((O = Za(a, f)), O != null && p.unshift(xs(a, O, S)))
          : u || ((O = Za(a, f)), O != null && p.push(xs(a, O, S)))),
        (a = a.return);
    }
    p.length !== 0 && e.push({ event: n, listeners: p });
  }
  var qE = /\r\n?/g,
    VE = /\u0000|\uFFFD/g;
  function Nm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        qE,
        `
`
      )
      .replace(VE, "");
  }
  function Mm(e, n) {
    return (n = Nm(n)), Nm(e) === n;
  }
  function vo() {}
  function Ce(e, n, a, l, u, f) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? n === "body" || (n === "textarea" && l === "") || kr(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            n !== "body" &&
            kr(e, "" + l);
        break;
      case "className":
        Ol(e, "class", l);
        break;
      case "tabIndex":
        Ol(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ol(e, a, l);
        break;
      case "style":
        Ph(e, l, f);
        break;
      case "data":
        if (n !== "object") {
          Ol(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        (l = Rl("" + l)), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" &&
            (a === "formAction"
              ? (n !== "input" && Ce(e, n, "name", u.name, u, null),
                Ce(e, n, "formEncType", u.formEncType, u, null),
                Ce(e, n, "formMethod", u.formMethod, u, null),
                Ce(e, n, "formTarget", u.formTarget, u, null))
              : (Ce(e, n, "encType", u.encType, u, null),
                Ce(e, n, "method", u.method, u, null),
                Ce(e, n, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        (l = Rl("" + l)), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = vo);
        break;
      case "onScroll":
        l != null && be("scroll", e);
        break;
      case "onScrollEnd":
        l != null && be("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((a = l.__html), a != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (a = Rl("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "" + l)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(a, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(a)
          : e.setAttribute(a, l);
        break;
      case "popover":
        be("beforetoggle", e), be("toggle", e), _l(e, "popover", l);
        break;
      case "xlinkActuate":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        _n(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        _n(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        _n(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        _n(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        _l(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = yS.get(a) || a), _l(e, a, l));
    }
  }
  function vf(e, n, a, l, u, f) {
    switch (a) {
      case "style":
        Ph(e, l, f);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(s(61));
          if (((a = l.__html), a != null)) {
            if (u.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? kr(e, l)
          : (typeof l == "number" || typeof l == "bigint") && kr(e, "" + l);
        break;
      case "onScroll":
        l != null && be("scroll", e);
        break;
      case "onScrollEnd":
        l != null && be("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = vo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!xh.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (n = a.slice(2, u ? a.length - 7 : void 0)),
              (f = e[bt] || null),
              (f = f != null ? f[a] : null),
              typeof f == "function" && e.removeEventListener(n, f, u),
              typeof l == "function")
            ) {
              typeof f != "function" &&
                f !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(n, l, u);
              break e;
            }
            a in e
              ? (e[a] = l)
              : l === !0
              ? e.setAttribute(a, "")
              : _l(e, a, l);
          }
    }
  }
  function at(e, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        be("error", e), be("load", e);
        var l = !1,
          u = !1,
          f;
        for (f in a)
          if (a.hasOwnProperty(f)) {
            var p = a[f];
            if (p != null)
              switch (f) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, n));
                default:
                  Ce(e, n, f, p, a, null);
              }
          }
        u && Ce(e, n, "srcSet", a.srcSet, a, null),
          l && Ce(e, n, "src", a.src, a, null);
        return;
      case "input":
        be("invalid", e);
        var v = (f = p = u = null),
          S = null,
          O = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var z = a[l];
            if (z != null)
              switch (l) {
                case "name":
                  u = z;
                  break;
                case "type":
                  p = z;
                  break;
                case "checked":
                  S = z;
                  break;
                case "defaultChecked":
                  O = z;
                  break;
                case "value":
                  f = z;
                  break;
                case "defaultValue":
                  v = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(s(137, n));
                  break;
                default:
                  Ce(e, n, l, z, a, null);
              }
          }
        Hh(e, f, v, S, O, p, u, !1), Dl(e);
        return;
      case "select":
        be("invalid", e), (l = p = f = null);
        for (u in a)
          if (a.hasOwnProperty(u) && ((v = a[u]), v != null))
            switch (u) {
              case "value":
                f = v;
                break;
              case "defaultValue":
                p = v;
                break;
              case "multiple":
                l = v;
              default:
                Ce(e, n, u, v, a, null);
            }
        (n = f),
          (a = p),
          (e.multiple = !!l),
          n != null ? jr(e, !!l, n, !1) : a != null && jr(e, !!l, a, !0);
        return;
      case "textarea":
        be("invalid", e), (f = u = l = null);
        for (p in a)
          if (a.hasOwnProperty(p) && ((v = a[p]), v != null))
            switch (p) {
              case "value":
                l = v;
                break;
              case "defaultValue":
                u = v;
                break;
              case "children":
                f = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(s(91));
                break;
              default:
                Ce(e, n, p, v, a, null);
            }
        kh(e, l, u, f), Dl(e);
        return;
      case "option":
        for (S in a)
          if (a.hasOwnProperty(S) && ((l = a[S]), l != null))
            switch (S) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ce(e, n, S, l, a, null);
            }
        return;
      case "dialog":
        be("cancel", e), be("close", e);
        break;
      case "iframe":
      case "object":
        be("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ms.length; l++) be(Ms[l], e);
        break;
      case "image":
        be("error", e), be("load", e);
        break;
      case "details":
        be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        be("error", e), be("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in a)
          if (a.hasOwnProperty(O) && ((l = a[O]), l != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                Ce(e, n, O, l, a, null);
            }
        return;
      default:
        if (xu(n)) {
          for (z in a)
            a.hasOwnProperty(z) &&
              ((l = a[z]), l !== void 0 && vf(e, n, z, l, a, void 0));
          return;
        }
    }
    for (v in a)
      a.hasOwnProperty(v) && ((l = a[v]), l != null && Ce(e, n, v, l, a, null));
  }
  function GE(e, n, a, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          f = null,
          p = null,
          v = null,
          S = null,
          O = null,
          z = null;
        for (L in a) {
          var j = a[L];
          if (a.hasOwnProperty(L) && j != null)
            switch (L) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = j;
              default:
                l.hasOwnProperty(L) || Ce(e, n, L, null, l, j);
            }
        }
        for (var M in l) {
          var L = l[M];
          if (((j = a[M]), l.hasOwnProperty(M) && (L != null || j != null)))
            switch (M) {
              case "type":
                f = L;
                break;
              case "name":
                u = L;
                break;
              case "checked":
                O = L;
                break;
              case "defaultChecked":
                z = L;
                break;
              case "value":
                p = L;
                break;
              case "defaultValue":
                v = L;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(s(137, n));
                break;
              default:
                L !== j && Ce(e, n, M, L, l, j);
            }
        }
        Nu(e, p, v, S, O, z, f, u);
        return;
      case "select":
        L = p = v = M = null;
        for (f in a)
          if (((S = a[f]), a.hasOwnProperty(f) && S != null))
            switch (f) {
              case "value":
                break;
              case "multiple":
                L = S;
              default:
                l.hasOwnProperty(f) || Ce(e, n, f, null, l, S);
            }
        for (u in l)
          if (
            ((f = l[u]),
            (S = a[u]),
            l.hasOwnProperty(u) && (f != null || S != null))
          )
            switch (u) {
              case "value":
                M = f;
                break;
              case "defaultValue":
                v = f;
                break;
              case "multiple":
                p = f;
              default:
                f !== S && Ce(e, n, u, f, l, S);
            }
        (n = v),
          (a = p),
          (l = L),
          M != null
            ? jr(e, !!a, M, !1)
            : !!l != !!a &&
              (n != null ? jr(e, !!a, n, !0) : jr(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        L = M = null;
        for (v in a)
          if (
            ((u = a[v]),
            a.hasOwnProperty(v) && u != null && !l.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ce(e, n, v, null, l, u);
            }
        for (p in l)
          if (
            ((u = l[p]),
            (f = a[p]),
            l.hasOwnProperty(p) && (u != null || f != null))
          )
            switch (p) {
              case "value":
                M = u;
                break;
              case "defaultValue":
                L = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(s(91));
                break;
              default:
                u !== f && Ce(e, n, p, u, l, f);
            }
        jh(e, M, L);
        return;
      case "option":
        for (var Z in a)
          if (
            ((M = a[Z]),
            a.hasOwnProperty(Z) && M != null && !l.hasOwnProperty(Z))
          )
            switch (Z) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ce(e, n, Z, null, l, M);
            }
        for (S in l)
          if (
            ((M = l[S]),
            (L = a[S]),
            l.hasOwnProperty(S) && M !== L && (M != null || L != null))
          )
            switch (S) {
              case "selected":
                e.selected =
                  M && typeof M != "function" && typeof M != "symbol";
                break;
              default:
                Ce(e, n, S, M, l, L);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ae in a)
          (M = a[ae]),
            a.hasOwnProperty(ae) &&
              M != null &&
              !l.hasOwnProperty(ae) &&
              Ce(e, n, ae, null, l, M);
        for (O in l)
          if (
            ((M = l[O]),
            (L = a[O]),
            l.hasOwnProperty(O) && M !== L && (M != null || L != null))
          )
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null) throw Error(s(137, n));
                break;
              default:
                Ce(e, n, O, M, l, L);
            }
        return;
      default:
        if (xu(n)) {
          for (var Pe in a)
            (M = a[Pe]),
              a.hasOwnProperty(Pe) &&
                M !== void 0 &&
                !l.hasOwnProperty(Pe) &&
                vf(e, n, Pe, void 0, l, M);
          for (z in l)
            (M = l[z]),
              (L = a[z]),
              !l.hasOwnProperty(z) ||
                M === L ||
                (M === void 0 && L === void 0) ||
                vf(e, n, z, M, l, L);
          return;
        }
    }
    for (var D in a)
      (M = a[D]),
        a.hasOwnProperty(D) &&
          M != null &&
          !l.hasOwnProperty(D) &&
          Ce(e, n, D, null, l, M);
    for (j in l)
      (M = l[j]),
        (L = a[j]),
        !l.hasOwnProperty(j) ||
          M === L ||
          (M == null && L == null) ||
          Ce(e, n, j, M, l, L);
  }
  var yf = null,
    bf = null;
  function yo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function xm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Um(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Sf(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ef = null;
  function QE() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Ef
        ? !1
        : ((Ef = e), !0)
      : ((Ef = null), !1);
  }
  var Im = typeof setTimeout == "function" ? setTimeout : void 0,
    YE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Lm = typeof Promise == "function" ? Promise : void 0,
    FE =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Lm < "u"
        ? function (e) {
            return Lm.resolve(null).then(e).catch(XE);
          }
        : Im;
  function XE(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Tf(e, n) {
    var a = n,
      l = 0;
    do {
      var u = a.nextSibling;
      if ((e.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$")) {
          if (l === 0) {
            e.removeChild(u), Bs(n);
            return;
          }
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || l++;
      a = u;
    } while (a);
    Bs(n);
  }
  function _f(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (((n = n.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          _f(a), Au(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function KE(e, n, a, l) {
    for (; e.nodeType === 1; ) {
      var u = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Xa])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((f = e.getAttribute("rel")),
                f === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                f !== u.rel ||
                e.getAttribute("href") !== (u.href == null ? null : u.href) ||
                e.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                e.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((f = e.getAttribute("src")),
                (f !== (u.src == null ? null : u.src) ||
                  e.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  e.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  f &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var f = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (((e = Jt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function ZE(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Jt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Jt(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = e.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function zm(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return e;
          n--;
        } else a === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Hm(e, n, a) {
    switch (((n = yo(a)), e)) {
      case "html":
        if (((e = n.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = n.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = n.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  var Gt = new Map(),
    jm = new Set();
  function bo(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var jn = X.d;
  X.d = { f: $E, r: JE, D: WE, C: eT, L: tT, m: nT, X: rT, S: iT, M: aT };
  function $E() {
    var e = jn.f(),
      n = co();
    return e || n;
  }
  function JE(e) {
    var n = Lr(e);
    n !== null && n.tag === 5 && n.type === "form" ? fg(n) : jn.r(e);
  }
  var da = typeof document > "u" ? null : document;
  function km(e, n, a) {
    var l = da;
    if (l && typeof n == "string" && n) {
      var u = It(n);
      (u = 'link[rel="' + e + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        jm.has(u) ||
          (jm.add(u),
          (e = { rel: e, crossOrigin: a, href: n }),
          l.querySelector(u) === null &&
            ((n = l.createElement("link")),
            at(n, "link", e),
            We(n),
            l.head.appendChild(n)));
    }
  }
  function WE(e) {
    jn.D(e), km("dns-prefetch", e, null);
  }
  function eT(e, n) {
    jn.C(e, n), km("preconnect", e, n);
  }
  function tT(e, n, a) {
    jn.L(e, n, a);
    var l = da;
    if (l && e && n) {
      var u = 'link[rel="preload"][as="' + It(n) + '"]';
      n === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + It(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + It(a.imageSizes) + '"]'))
        : (u += '[href="' + It(e) + '"]');
      var f = u;
      switch (n) {
        case "style":
          f = ha(e);
          break;
        case "script":
          f = pa(e);
      }
      Gt.has(f) ||
        ((e = fe(
          {
            rel: "preload",
            href: n === "image" && a && a.imageSrcSet ? void 0 : e,
            as: n,
          },
          a
        )),
        Gt.set(f, e),
        l.querySelector(u) !== null ||
          (n === "style" && l.querySelector(Us(f))) ||
          (n === "script" && l.querySelector(Is(f))) ||
          ((n = l.createElement("link")),
          at(n, "link", e),
          We(n),
          l.head.appendChild(n)));
    }
  }
  function nT(e, n) {
    jn.m(e, n);
    var a = da;
    if (a && e) {
      var l = n && typeof n.as == "string" ? n.as : "script",
        u =
          'link[rel="modulepreload"][as="' + It(l) + '"][href="' + It(e) + '"]',
        f = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = pa(e);
      }
      if (
        !Gt.has(f) &&
        ((e = fe({ rel: "modulepreload", href: e }, n)),
        Gt.set(f, e),
        a.querySelector(u) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Is(f))) return;
        }
        (l = a.createElement("link")),
          at(l, "link", e),
          We(l),
          a.head.appendChild(l);
      }
    }
  }
  function iT(e, n, a) {
    jn.S(e, n, a);
    var l = da;
    if (l && e) {
      var u = zr(l).hoistableStyles,
        f = ha(e);
      n = n || "default";
      var p = u.get(f);
      if (!p) {
        var v = { loading: 0, preload: null };
        if ((p = l.querySelector(Us(f)))) v.loading = 5;
        else {
          (e = fe({ rel: "stylesheet", href: e, "data-precedence": n }, a)),
            (a = Gt.get(f)) && Of(e, a);
          var S = (p = l.createElement("link"));
          We(S),
            at(S, "link", e),
            (S._p = new Promise(function (O, z) {
              (S.onload = O), (S.onerror = z);
            })),
            S.addEventListener("load", function () {
              v.loading |= 1;
            }),
            S.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            So(p, n, l);
        }
        (p = { type: "stylesheet", instance: p, count: 1, state: v }),
          u.set(f, p);
      }
    }
  }
  function rT(e, n) {
    jn.X(e, n);
    var a = da;
    if (a && e) {
      var l = zr(a).hoistableScripts,
        u = pa(e),
        f = l.get(u);
      f ||
        ((f = a.querySelector(Is(u))),
        f ||
          ((e = fe({ src: e, async: !0 }, n)),
          (n = Gt.get(u)) && Df(e, n),
          (f = a.createElement("script")),
          We(f),
          at(f, "link", e),
          a.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(u, f));
    }
  }
  function aT(e, n) {
    jn.M(e, n);
    var a = da;
    if (a && e) {
      var l = zr(a).hoistableScripts,
        u = pa(e),
        f = l.get(u);
      f ||
        ((f = a.querySelector(Is(u))),
        f ||
          ((e = fe({ src: e, async: !0, type: "module" }, n)),
          (n = Gt.get(u)) && Df(e, n),
          (f = a.createElement("script")),
          We(f),
          at(f, "link", e),
          a.head.appendChild(f)),
        (f = { type: "script", instance: f, count: 1, state: null }),
        l.set(u, f));
    }
  }
  function Bm(e, n, a, l) {
    var u = (u = $n.current) ? bo(u) : null;
    if (!u) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((n = ha(a.href)),
            (a = zr(u).hoistableStyles),
            (l = a.get(n)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(n, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = ha(a.href);
          var f = zr(u).hoistableStyles,
            p = f.get(e);
          if (
            (p ||
              ((u = u.ownerDocument || u),
              (p = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              f.set(e, p),
              (f = u.querySelector(Us(e))) &&
                !f._p &&
                ((p.instance = f), (p.state.loading = 5)),
              Gt.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Gt.set(e, a),
                f || sT(u, e, a, p.state))),
            n && l === null)
          )
            throw Error(s(528, ""));
          return p;
        }
        if (n && l !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (n = a.async),
          (a = a.src),
          typeof a == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = pa(a)),
              (a = zr(u).hoistableScripts),
              (l = a.get(n)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(n, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function ha(e) {
    return 'href="' + It(e) + '"';
  }
  function Us(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Pm(e) {
    return fe({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function sT(e, n, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (l.loading = 1)
      : ((n = e.createElement("link")),
        (l.preload = n),
        n.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        at(n, "link", a),
        We(n),
        e.head.appendChild(n));
  }
  function pa(e) {
    return '[src="' + It(e) + '"]';
  }
  function Is(e) {
    return "script[async]" + e;
  }
  function qm(e, n, a) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + It(a.href) + '"]');
          if (l) return (n.instance = l), We(l), l;
          var u = fe({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            We(l),
            at(l, "style", u),
            So(l, a.precedence, e),
            (n.instance = l)
          );
        case "stylesheet":
          u = ha(a.href);
          var f = e.querySelector(Us(u));
          if (f) return (n.state.loading |= 4), (n.instance = f), We(f), f;
          (l = Pm(a)),
            (u = Gt.get(u)) && Of(l, u),
            (f = (e.ownerDocument || e).createElement("link")),
            We(f);
          var p = f;
          return (
            (p._p = new Promise(function (v, S) {
              (p.onload = v), (p.onerror = S);
            })),
            at(f, "link", l),
            (n.state.loading |= 4),
            So(f, a.precedence, e),
            (n.instance = f)
          );
        case "script":
          return (
            (f = pa(a.src)),
            (u = e.querySelector(Is(f)))
              ? ((n.instance = u), We(u), u)
              : ((l = a),
                (u = Gt.get(f)) && ((l = fe({}, a)), Df(l, u)),
                (e = e.ownerDocument || e),
                (u = e.createElement("script")),
                We(u),
                at(u, "link", l),
                e.head.appendChild(u),
                (n.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((l = n.instance), (n.state.loading |= 4), So(l, a.precedence, e));
    return n.instance;
  }
  function So(e, n, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = l.length ? l[l.length - 1] : null,
        f = u,
        p = 0;
      p < l.length;
      p++
    ) {
      var v = l[p];
      if (v.dataset.precedence === n) f = v;
      else if (f !== u) break;
    }
    f
      ? f.parentNode.insertBefore(e, f.nextSibling)
      : ((n = a.nodeType === 9 ? a.head : a), n.insertBefore(e, n.firstChild));
  }
  function Of(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title);
  }
  function Df(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity);
  }
  var Eo = null;
  function Vm(e, n, a) {
    if (Eo === null) {
      var l = new Map(),
        u = (Eo = new Map());
      u.set(a, l);
    } else (u = Eo), (l = u.get(a)), l || ((l = new Map()), u.set(a, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), a = a.getElementsByTagName(e), u = 0;
      u < a.length;
      u++
    ) {
      var f = a[u];
      if (
        !(
          f[Xa] ||
          f[st] ||
          (e === "link" && f.getAttribute("rel") === "stylesheet")
        ) &&
        f.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var p = f.getAttribute(n) || "";
        p = e + p;
        var v = l.get(p);
        v ? v.push(f) : l.set(p, [f]);
      }
    }
    return l;
  }
  function Gm(e, n, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        n === "title" ? e.querySelector("head > title") : null
      );
  }
  function lT(e, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (e = n.disabled), typeof n.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Qm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ls = null;
  function oT() {}
  function uT(e, n, a) {
    if (Ls === null) throw Error(s(475));
    var l = Ls;
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var u = ha(a.href),
          f = e.querySelector(Us(u));
        if (f) {
          (e = f._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = To.bind(l)), e.then(l, l)),
            (n.state.loading |= 4),
            (n.instance = f),
            We(f);
          return;
        }
        (f = e.ownerDocument || e),
          (a = Pm(a)),
          (u = Gt.get(u)) && Of(a, u),
          (f = f.createElement("link")),
          We(f);
        var p = f;
        (p._p = new Promise(function (v, S) {
          (p.onload = v), (p.onerror = S);
        })),
          at(f, "link", a),
          (n.instance = f);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (l.count++,
          (n = To.bind(l)),
          e.addEventListener("load", n),
          e.addEventListener("error", n));
    }
  }
  function cT() {
    if (Ls === null) throw Error(s(475));
    var e = Ls;
    return (
      e.stylesheets && e.count === 0 && wf(e, e.stylesheets),
      0 < e.count
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && wf(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = n),
              function () {
                (e.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function To() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) wf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var _o = null;
  function wf(e, n) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (_o = new Map()),
        n.forEach(fT, e),
        (_o = null),
        To.call(e));
  }
  function fT(e, n) {
    if (!(n.state.loading & 4)) {
      var a = _o.get(e);
      if (a) var l = a.get(null);
      else {
        (a = new Map()), _o.set(e, a);
        for (
          var u = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            f = 0;
          f < u.length;
          f++
        ) {
          var p = u[f];
          (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") &&
            (a.set(p.dataset.precedence, p), (l = p));
        }
        l && a.set(null, l);
      }
      (u = n.instance),
        (p = u.getAttribute("data-precedence")),
        (f = a.get(p) || l),
        f === l && a.set(null, u),
        a.set(p, u),
        this.count++,
        (l = To.bind(this)),
        u.addEventListener("load", l),
        u.addEventListener("error", l),
        f
          ? f.parentNode.insertBefore(u, f.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(u, e.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var zs = {
    $$typeof: A,
    Provider: null,
    Consumer: null,
    _currentValue: Ee,
    _currentValue2: Ee,
    _threadCount: 0,
  };
  function dT(e, n, a, l, u, f, p, v) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ru(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ru(0)),
      (this.hiddenUpdates = Ru(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = u),
      (this.onCaughtError = f),
      (this.onRecoverableError = p),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = v),
      (this.incompleteTransitions = new Map());
  }
  function Ym(e, n, a, l, u, f, p, v, S, O, z, j) {
    return (
      (e = new dT(e, n, a, p, v, S, O, j)),
      (n = 1),
      f === !0 && (n |= 24),
      (f = qt(3, null, null, n)),
      (e.current = f),
      (f.stateNode = e),
      (n = ic()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (f.memoizedState = { element: l, isDehydrated: a, cache: n }),
      Hc(f),
      e
    );
  }
  function Fm(e) {
    return e ? ((e = Yr), e) : Yr;
  }
  function Xm(e, n, a, l, u, f) {
    (u = Fm(u)),
      l.context === null ? (l.context = u) : (l.pendingContext = u),
      (l = oi(n)),
      (l.payload = { element: a }),
      (f = f === void 0 ? null : f),
      f !== null && (l.callback = f),
      (a = ui(e, l, n)),
      a !== null && (ht(a, e, n), bs(a, e, n));
  }
  function Km(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Rf(e, n) {
    Km(e, n), (e = e.alternate) && Km(e, n);
  }
  function Zm(e) {
    if (e.tag === 13) {
      var n = ti(e, 67108864);
      n !== null && ht(n, e, 67108864), Rf(e, 67108864);
    }
  }
  var Oo = !0;
  function hT(e, n, a, l) {
    var u = V.T;
    V.T = null;
    var f = X.p;
    try {
      (X.p = 2), Cf(e, n, a, l);
    } finally {
      (X.p = f), (V.T = u);
    }
  }
  function pT(e, n, a, l) {
    var u = V.T;
    V.T = null;
    var f = X.p;
    try {
      (X.p = 8), Cf(e, n, a, l);
    } finally {
      (X.p = f), (V.T = u);
    }
  }
  function Cf(e, n, a, l) {
    if (Oo) {
      var u = Af(l);
      if (u === null) mf(e, n, l, Do, a), Jm(e, l);
      else if (mT(u, e, n, a, l)) l.stopPropagation();
      else if ((Jm(e, l), n & 4 && -1 < gT.indexOf(e))) {
        for (; u !== null; ) {
          var f = Lr(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
                  var p = Qi(f.pendingLanes);
                  if (p !== 0) {
                    var v = f;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; p; ) {
                      var S = 1 << (31 - wt(p));
                      (v.entanglements[1] |= S), (p &= ~S);
                    }
                    dn(f), (He & 6) === 0 && ((lo = ln() + 500), Ns(0));
                  }
                }
                break;
              case 13:
                (v = ti(f, 2)), v !== null && ht(v, f, 2), co(), Rf(f, 2);
            }
          if (((f = Af(l)), f === null && mf(e, n, l, Do, a), f === u)) break;
          u = f;
        }
        u !== null && l.stopPropagation();
      } else mf(e, n, l, null, a);
    }
  }
  function Af(e) {
    return (e = Iu(e)), Nf(e);
  }
  var Do = null;
  function Nf(e) {
    if (((Do = null), (e = Yi(e)), e !== null)) {
      var n = ie(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (((e = Me(n)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return (Do = e), null;
  }
  function $m(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (eS()) {
          case Eh:
            return 2;
          case Th:
            return 8;
          case bl:
          case tS:
            return 32;
          case _h:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mf = !1,
    mi = null,
    vi = null,
    yi = null,
    Hs = new Map(),
    js = new Map(),
    bi = [],
    gT =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Jm(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        mi = null;
        break;
      case "dragenter":
      case "dragleave":
        vi = null;
        break;
      case "mouseover":
      case "mouseout":
        yi = null;
        break;
      case "pointerover":
      case "pointerout":
        Hs.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        js.delete(n.pointerId);
    }
  }
  function ks(e, n, a, l, u, f) {
    return e === null || e.nativeEvent !== f
      ? ((e = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: f,
          targetContainers: [u],
        }),
        n !== null && ((n = Lr(n)), n !== null && Zm(n)),
        e)
      : ((e.eventSystemFlags |= l),
        (n = e.targetContainers),
        u !== null && n.indexOf(u) === -1 && n.push(u),
        e);
  }
  function mT(e, n, a, l, u) {
    switch (n) {
      case "focusin":
        return (mi = ks(mi, e, n, a, l, u)), !0;
      case "dragenter":
        return (vi = ks(vi, e, n, a, l, u)), !0;
      case "mouseover":
        return (yi = ks(yi, e, n, a, l, u)), !0;
      case "pointerover":
        var f = u.pointerId;
        return Hs.set(f, ks(Hs.get(f) || null, e, n, a, l, u)), !0;
      case "gotpointercapture":
        return (
          (f = u.pointerId), js.set(f, ks(js.get(f) || null, e, n, a, l, u)), !0
        );
    }
    return !1;
  }
  function Wm(e) {
    var n = Yi(e.target);
    if (n !== null) {
      var a = ie(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = Me(a)), n !== null)) {
            (e.blockedOn = n),
              cS(e.priority, function () {
                if (a.tag === 13) {
                  var l = Mt(),
                    u = ti(a, l);
                  u !== null && ht(u, a, l), Rf(a, l);
                }
              });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function wo(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = Af(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        (Uu = l), a.target.dispatchEvent(l), (Uu = null);
      } else return (n = Lr(a)), n !== null && Zm(n), (e.blockedOn = a), !1;
      n.shift();
    }
    return !0;
  }
  function ev(e, n, a) {
    wo(e) && a.delete(n);
  }
  function vT() {
    (Mf = !1),
      mi !== null && wo(mi) && (mi = null),
      vi !== null && wo(vi) && (vi = null),
      yi !== null && wo(yi) && (yi = null),
      Hs.forEach(ev),
      js.forEach(ev);
  }
  function Ro(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Mf ||
        ((Mf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, vT)));
  }
  var Co = null;
  function tv(e) {
    Co !== e &&
      ((Co = e),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Co === e && (Co = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n],
            l = e[n + 1],
            u = e[n + 2];
          if (typeof l != "function") {
            if (Nf(l || a) === null) continue;
            break;
          }
          var f = Lr(a);
          f !== null &&
            (e.splice(n, 3),
            (n -= 3),
            bc(f, { pending: !0, data: u, method: a.method, action: l }, l, u));
        }
      }));
  }
  function Bs(e) {
    function n(S) {
      return Ro(S, e);
    }
    mi !== null && Ro(mi, e),
      vi !== null && Ro(vi, e),
      yi !== null && Ro(yi, e),
      Hs.forEach(n),
      js.forEach(n);
    for (var a = 0; a < bi.length; a++) {
      var l = bi[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < bi.length && ((a = bi[0]), a.blockedOn === null); )
      Wm(a), a.blockedOn === null && bi.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var u = a[l],
          f = a[l + 1],
          p = u[bt] || null;
        if (typeof f == "function") p || tv(a);
        else if (p) {
          var v = null;
          if (f && f.hasAttribute("formAction")) {
            if (((u = f), (p = f[bt] || null))) v = p.formAction;
            else if (Nf(u) !== null) continue;
          } else v = p.action;
          typeof v == "function" ? (a[l + 1] = v) : (a.splice(l, 3), (l -= 3)),
            tv(a);
        }
      }
  }
  function xf(e) {
    this._internalRoot = e;
  }
  (Ao.prototype.render = xf.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(s(409));
      var a = n.current,
        l = Mt();
      Xm(a, l, e, n, null, null);
    }),
    (Ao.prototype.unmount = xf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          e.tag === 0 && ua(),
            Xm(e.current, 2, null, e, null, null),
            co(),
            (n[Ir] = null);
        }
      });
  function Ao(e) {
    this._internalRoot = e;
  }
  Ao.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = Ah();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < bi.length && n !== 0 && n < bi[a].priority; a++);
      bi.splice(a, 0, e), a === 0 && Wm(e);
    }
  };
  var nv = t.version;
  if (nv !== "19.0.0") throw Error(s(527, nv, "19.0.0"));
  X.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = B(n)),
      (e = e !== null ? ne(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var yT = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: V,
    findFiberByHostInstance: Yi,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var No = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!No.isDisabled && No.supportsFiber)
      try {
        (Qa = No.inject(yT)), (Dt = No);
      } catch {}
  }
  return (
    (qs.createRoot = function (e, n) {
      if (!o(e)) throw Error(s(299));
      var a = !1,
        l = "",
        u = bg,
        f = Sg,
        p = Eg,
        v = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (f = n.onCaughtError),
          n.onRecoverableError !== void 0 && (p = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (v = n.unstable_transitionCallbacks)),
        (n = Ym(e, 1, !1, null, null, a, l, u, f, p, v, null)),
        (e[Ir] = n.current),
        gf(e.nodeType === 8 ? e.parentNode : e),
        new xf(n)
      );
    }),
    (qs.hydrateRoot = function (e, n, a) {
      if (!o(e)) throw Error(s(299));
      var l = !1,
        u = "",
        f = bg,
        p = Sg,
        v = Eg,
        S = null,
        O = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (f = a.onUncaughtError),
          a.onCaughtError !== void 0 && (p = a.onCaughtError),
          a.onRecoverableError !== void 0 && (v = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (S = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (O = a.formState)),
        (n = Ym(e, 1, !0, n, a ?? null, l, u, f, p, v, S, O)),
        (n.context = Fm(null)),
        (a = n.current),
        (l = Mt()),
        (u = oi(l)),
        (u.callback = null),
        ui(a, u, l),
        (n.current.lanes = l),
        Fa(n, l),
        dn(n),
        (e[Ir] = n.current),
        gf(e),
        new Ao(n)
      );
    }),
    (qs.version = "19.0.0"),
    qs
  );
}
var hv;
function NT() {
  if (hv) return zf.exports;
  hv = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (t) {
        console.error(t);
      }
  }
  return i(), (zf.exports = AT()), zf.exports;
}
var MT = NT();
Gy();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xs() {
  return (
    (Xs = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (i[s] = r[s]);
          }
          return i;
        }),
    Xs.apply(this, arguments)
  );
}
var zi;
(function (i) {
  (i.Pop = "POP"), (i.Push = "PUSH"), (i.Replace = "REPLACE");
})(zi || (zi = {}));
const pv = "popstate";
function xT(i) {
  i === void 0 && (i = {});
  function t(s, o) {
    let { pathname: c, search: d, hash: h } = s.location;
    return ad(
      "",
      { pathname: c, search: d, hash: h },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function r(s, o) {
    return typeof o == "string" ? o : Fo(o);
  }
  return IT(t, r, null, i);
}
function Ge(i, t) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(t);
}
function Qy(i, t) {
  if (!i) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function UT() {
  return Math.random().toString(36).substr(2, 8);
}
function gv(i, t) {
  return { usr: i.state, key: i.key, idx: t };
}
function ad(i, t, r, s) {
  return (
    r === void 0 && (r = null),
    Xs(
      { pathname: typeof i == "string" ? i : i.pathname, search: "", hash: "" },
      typeof t == "string" ? za(t) : t,
      { state: r, key: (t && t.key) || s || UT() }
    )
  );
}
function Fo(i) {
  let { pathname: t = "/", search: r = "", hash: s = "" } = i;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    s && s !== "#" && (t += s.charAt(0) === "#" ? s : "#" + s),
    t
  );
}
function za(i) {
  let t = {};
  if (i) {
    let r = i.indexOf("#");
    r >= 0 && ((t.hash = i.substr(r)), (i = i.substr(0, r)));
    let s = i.indexOf("?");
    s >= 0 && ((t.search = i.substr(s)), (i = i.substr(0, s))),
      i && (t.pathname = i);
  }
  return t;
}
function IT(i, t, r, s) {
  s === void 0 && (s = {});
  let { window: o = document.defaultView, v5Compat: c = !1 } = s,
    d = o.history,
    h = zi.Pop,
    g = null,
    m = y();
  m == null && ((m = 0), d.replaceState(Xs({}, d.state, { idx: m }), ""));
  function y() {
    return (d.state || { idx: null }).idx;
  }
  function b() {
    h = zi.Pop;
    let R = y(),
      k = R == null ? null : R - m;
    (m = R), g && g({ action: h, location: N.location, delta: k });
  }
  function w(R, k) {
    h = zi.Push;
    let P = ad(N.location, R, k);
    m = y() + 1;
    let q = gv(P, m),
      W = N.createHref(P);
    try {
      d.pushState(q, "", W);
    } catch (Y) {
      if (Y instanceof DOMException && Y.name === "DataCloneError") throw Y;
      o.location.assign(W);
    }
    c && g && g({ action: h, location: N.location, delta: 1 });
  }
  function A(R, k) {
    h = zi.Replace;
    let P = ad(N.location, R, k);
    m = y();
    let q = gv(P, m),
      W = N.createHref(P);
    d.replaceState(q, "", W),
      c && g && g({ action: h, location: N.location, delta: 0 });
  }
  function U(R) {
    let k = o.location.origin !== "null" ? o.location.origin : o.location.href,
      P = typeof R == "string" ? R : Fo(R);
    return (
      (P = P.replace(/ $/, "%20")),
      Ge(
        k,
        "No window.location.(origin|href) available to create URL for href: " +
          P
      ),
      new URL(P, k)
    );
  }
  let N = {
    get action() {
      return h;
    },
    get location() {
      return i(o, d);
    },
    listen(R) {
      if (g) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(pv, b),
        (g = R),
        () => {
          o.removeEventListener(pv, b), (g = null);
        }
      );
    },
    createHref(R) {
      return t(o, R);
    },
    createURL: U,
    encodeLocation(R) {
      let k = U(R);
      return { pathname: k.pathname, search: k.search, hash: k.hash };
    },
    push: w,
    replace: A,
    go(R) {
      return d.go(R);
    },
  };
  return N;
}
var mv;
(function (i) {
  (i.data = "data"),
    (i.deferred = "deferred"),
    (i.redirect = "redirect"),
    (i.error = "error");
})(mv || (mv = {}));
function LT(i, t, r) {
  return r === void 0 && (r = "/"), zT(i, t, r);
}
function zT(i, t, r, s) {
  let o = typeof t == "string" ? za(t) : t,
    c = Gd(o.pathname || "/", r);
  if (c == null) return null;
  let d = Yy(i);
  HT(d);
  let h = null;
  for (let g = 0; h == null && g < d.length; ++g) {
    let m = KT(c);
    h = YT(d[g], m);
  }
  return h;
}
function Yy(i, t, r, s) {
  t === void 0 && (t = []), r === void 0 && (r = []), s === void 0 && (s = "");
  let o = (c, d, h) => {
    let g = {
      relativePath: h === void 0 ? c.path || "" : h,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: d,
      route: c,
    };
    g.relativePath.startsWith("/") &&
      (Ge(
        g.relativePath.startsWith(s),
        'Absolute route path "' +
          g.relativePath +
          '" nested under path ' +
          ('"' + s + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (g.relativePath = g.relativePath.slice(s.length)));
    let m = Hi([s, g.relativePath]),
      y = r.concat(g);
    c.children &&
      c.children.length > 0 &&
      (Ge(
        c.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + m + '".')
      ),
      Yy(c.children, t, y, m)),
      !(c.path == null && !c.index) &&
        t.push({ path: m, score: GT(m, c.index), routesMeta: y });
  };
  return (
    i.forEach((c, d) => {
      var h;
      if (c.path === "" || !((h = c.path) != null && h.includes("?"))) o(c, d);
      else for (let g of Fy(c.path)) o(c, d, g);
    }),
    t
  );
}
function Fy(i) {
  let t = i.split("/");
  if (t.length === 0) return [];
  let [r, ...s] = t,
    o = r.endsWith("?"),
    c = r.replace(/\?$/, "");
  if (s.length === 0) return o ? [c, ""] : [c];
  let d = Fy(s.join("/")),
    h = [];
  return (
    h.push(...d.map((g) => (g === "" ? c : [c, g].join("/")))),
    o && h.push(...d),
    h.map((g) => (i.startsWith("/") && g === "" ? "/" : g))
  );
}
function HT(i) {
  i.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : QT(
          t.routesMeta.map((s) => s.childrenIndex),
          r.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
const jT = /^:[\w-]+$/,
  kT = 3,
  BT = 2,
  PT = 1,
  qT = 10,
  VT = -2,
  vv = (i) => i === "*";
function GT(i, t) {
  let r = i.split("/"),
    s = r.length;
  return (
    r.some(vv) && (s += VT),
    t && (s += BT),
    r
      .filter((o) => !vv(o))
      .reduce((o, c) => o + (jT.test(c) ? kT : c === "" ? PT : qT), s)
  );
}
function QT(i, t) {
  return i.length === t.length && i.slice(0, -1).every((s, o) => s === t[o])
    ? i[i.length - 1] - t[t.length - 1]
    : 0;
}
function YT(i, t, r) {
  let { routesMeta: s } = i,
    o = {},
    c = "/",
    d = [];
  for (let h = 0; h < s.length; ++h) {
    let g = s[h],
      m = h === s.length - 1,
      y = c === "/" ? t : t.slice(c.length) || "/",
      b = FT(
        { path: g.relativePath, caseSensitive: g.caseSensitive, end: m },
        y
      ),
      w = g.route;
    if (!b) return null;
    Object.assign(o, b.params),
      d.push({
        params: o,
        pathname: Hi([c, b.pathname]),
        pathnameBase: WT(Hi([c, b.pathnameBase])),
        route: w,
      }),
      b.pathnameBase !== "/" && (c = Hi([c, b.pathnameBase]));
  }
  return d;
}
function FT(i, t) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [r, s] = XT(i.path, i.caseSensitive, i.end),
    o = t.match(r);
  if (!o) return null;
  let c = o[0],
    d = c.replace(/(.)\/+$/, "$1"),
    h = o.slice(1);
  return {
    params: s.reduce((m, y, b) => {
      let { paramName: w, isOptional: A } = y;
      if (w === "*") {
        let N = h[b] || "";
        d = c.slice(0, c.length - N.length).replace(/(.)\/+$/, "$1");
      }
      const U = h[b];
      return (
        A && !U ? (m[w] = void 0) : (m[w] = (U || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: c,
    pathnameBase: d,
    pattern: i,
  };
}
function XT(i, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Qy(
      i === "*" || !i.endsWith("*") || i.endsWith("/*"),
      'Route path "' +
        i +
        '" will be treated as if it were ' +
        ('"' + i.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + i.replace(/\*$/, "/*") + '".')
    );
  let s = [],
    o =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, h, g) => (
            s.push({ paramName: h, isOptional: g != null }),
            g ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    i.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (o += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (o += "\\/*$")
      : i !== "" && i !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), s]
  );
}
function KT(i) {
  try {
    return i
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Qy(
        !1,
        'The URL path "' +
          i +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      i
    );
  }
}
function Gd(i, t) {
  if (t === "/") return i;
  if (!i.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    s = i.charAt(r);
  return s && s !== "/" ? null : i.slice(r) || "/";
}
function ZT(i, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: s = "",
    hash: o = "",
  } = typeof i == "string" ? za(i) : i;
  return {
    pathname: r ? (r.startsWith("/") ? r : $T(r, t)) : t,
    search: e_(s),
    hash: t_(o),
  };
}
function $T(i, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((o) => {
      o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Bf(i, t, r, s) {
  return (
    "Cannot include a '" +
    i +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(s) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function JT(i) {
  return i.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Qd(i, t) {
  let r = JT(i);
  return t
    ? r.map((s, o) => (o === r.length - 1 ? s.pathname : s.pathnameBase))
    : r.map((s) => s.pathnameBase);
}
function Yd(i, t, r, s) {
  s === void 0 && (s = !1);
  let o;
  typeof i == "string"
    ? (o = za(i))
    : ((o = Xs({}, i)),
      Ge(
        !o.pathname || !o.pathname.includes("?"),
        Bf("?", "pathname", "search", o)
      ),
      Ge(
        !o.pathname || !o.pathname.includes("#"),
        Bf("#", "pathname", "hash", o)
      ),
      Ge(!o.search || !o.search.includes("#"), Bf("#", "search", "hash", o)));
  let c = i === "" || o.pathname === "",
    d = c ? "/" : o.pathname,
    h;
  if (d == null) h = r;
  else {
    let b = t.length - 1;
    if (!s && d.startsWith("..")) {
      let w = d.split("/");
      for (; w[0] === ".."; ) w.shift(), (b -= 1);
      o.pathname = w.join("/");
    }
    h = b >= 0 ? t[b] : "/";
  }
  let g = ZT(o, h),
    m = d && d !== "/" && d.endsWith("/"),
    y = (c || d === ".") && r.endsWith("/");
  return !g.pathname.endsWith("/") && (m || y) && (g.pathname += "/"), g;
}
const Hi = (i) => i.join("/").replace(/\/\/+/g, "/"),
  WT = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  e_ = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  t_ = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function n_(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
const Xy = ["post", "put", "patch", "delete"];
new Set(Xy);
const i_ = ["get", ...Xy];
new Set(i_);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ks() {
  return (
    (Ks = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (i[s] = r[s]);
          }
          return i;
        }),
    Ks.apply(this, arguments)
  );
}
const Fd = x.createContext(null),
  r_ = x.createContext(null),
  Bi = x.createContext(null),
  lu = x.createContext(null),
  Pi = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ky = x.createContext(null);
function a_(i, t) {
  let { relative: r } = t === void 0 ? {} : t;
  Ha() || Ge(!1);
  let { basename: s, navigator: o } = x.useContext(Bi),
    { hash: c, pathname: d, search: h } = $y(i, { relative: r }),
    g = d;
  return (
    s !== "/" && (g = d === "/" ? s : Hi([s, d])),
    o.createHref({ pathname: g, search: h, hash: c })
  );
}
function Ha() {
  return x.useContext(lu) != null;
}
function al() {
  return Ha() || Ge(!1), x.useContext(lu).location;
}
function Zy(i) {
  x.useContext(Bi).static || x.useLayoutEffect(i);
}
function Xd() {
  let { isDataRoute: i } = x.useContext(Pi);
  return i ? y_() : s_();
}
function s_() {
  Ha() || Ge(!1);
  let i = x.useContext(Fd),
    { basename: t, future: r, navigator: s } = x.useContext(Bi),
    { matches: o } = x.useContext(Pi),
    { pathname: c } = al(),
    d = JSON.stringify(Qd(o, r.v7_relativeSplatPath)),
    h = x.useRef(!1);
  return (
    Zy(() => {
      h.current = !0;
    }),
    x.useCallback(
      function (m, y) {
        if ((y === void 0 && (y = {}), !h.current)) return;
        if (typeof m == "number") {
          s.go(m);
          return;
        }
        let b = Yd(m, JSON.parse(d), c, y.relative === "path");
        i == null &&
          t !== "/" &&
          (b.pathname = b.pathname === "/" ? t : Hi([t, b.pathname])),
          (y.replace ? s.replace : s.push)(b, y.state, y);
      },
      [t, s, d, c, i]
    )
  );
}
function $y(i, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: s } = x.useContext(Bi),
    { matches: o } = x.useContext(Pi),
    { pathname: c } = al(),
    d = JSON.stringify(Qd(o, s.v7_relativeSplatPath));
  return x.useMemo(() => Yd(i, JSON.parse(d), c, r === "path"), [i, d, c, r]);
}
function l_(i, t) {
  return o_(i, t);
}
function o_(i, t, r, s) {
  Ha() || Ge(!1);
  let { navigator: o, static: c } = x.useContext(Bi),
    { matches: d } = x.useContext(Pi),
    h = d[d.length - 1],
    g = h ? h.params : {};
  h && h.pathname;
  let m = h ? h.pathnameBase : "/";
  h && h.route;
  let y = al(),
    b;
  if (t) {
    var w;
    let k = typeof t == "string" ? za(t) : t;
    m === "/" || ((w = k.pathname) != null && w.startsWith(m)) || Ge(!1),
      (b = k);
  } else b = y;
  let A = b.pathname || "/",
    U = A;
  if (m !== "/") {
    let k = m.replace(/^\//, "").split("/");
    U = "/" + A.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let N = LT(i, { pathname: U }),
    R = h_(
      N &&
        N.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, g, k.params),
            pathname: Hi([
              m,
              o.encodeLocation
                ? o.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? m
                : Hi([
                    m,
                    o.encodeLocation
                      ? o.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      d,
      r,
      s
    );
  return t && R
    ? x.createElement(
        lu.Provider,
        {
          value: {
            location: Ks(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              b
            ),
            navigationType: zi.Pop,
          },
        },
        R
      )
    : R;
}
function u_() {
  let i = v_(),
    t = n_(i)
      ? i.status + " " + i.statusText
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    r = i instanceof Error ? i.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? x.createElement("pre", { style: o }, r) : null,
    null
  );
}
const c_ = x.createElement(u_, null);
class f_ extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      "React Router caught the following error during render",
      t,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          Pi.Provider,
          { value: this.props.routeContext },
          x.createElement(Ky.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function d_(i) {
  let { routeContext: t, match: r, children: s } = i,
    o = x.useContext(Fd);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    x.createElement(Pi.Provider, { value: t }, s)
  );
}
function h_(i, t, r, s) {
  var o;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    s === void 0 && (s = null),
    i == null)
  ) {
    var c;
    if (!r) return null;
    if (r.errors) i = r.matches;
    else if (
      (c = s) != null &&
      c.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      i = r.matches;
    else return null;
  }
  let d = i,
    h = (o = r) == null ? void 0 : o.errors;
  if (h != null) {
    let y = d.findIndex(
      (b) => b.route.id && (h == null ? void 0 : h[b.route.id]) !== void 0
    );
    y >= 0 || Ge(!1), (d = d.slice(0, Math.min(d.length, y + 1)));
  }
  let g = !1,
    m = -1;
  if (r && s && s.v7_partialHydration)
    for (let y = 0; y < d.length; y++) {
      let b = d[y];
      if (
        ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (m = y),
        b.route.id)
      ) {
        let { loaderData: w, errors: A } = r,
          U =
            b.route.loader &&
            w[b.route.id] === void 0 &&
            (!A || A[b.route.id] === void 0);
        if (b.route.lazy || U) {
          (g = !0), m >= 0 ? (d = d.slice(0, m + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((y, b, w) => {
    let A,
      U = !1,
      N = null,
      R = null;
    r &&
      ((A = h && b.route.id ? h[b.route.id] : void 0),
      (N = b.route.errorElement || c_),
      g &&
        (m < 0 && w === 0
          ? (b_("route-fallback"), (U = !0), (R = null))
          : m === w &&
            ((U = !0), (R = b.route.hydrateFallbackElement || null))));
    let k = t.concat(d.slice(0, w + 1)),
      P = () => {
        let q;
        return (
          A
            ? (q = N)
            : U
            ? (q = R)
            : b.route.Component
            ? (q = x.createElement(b.route.Component, null))
            : b.route.element
            ? (q = b.route.element)
            : (q = y),
          x.createElement(d_, {
            match: b,
            routeContext: { outlet: y, matches: k, isDataRoute: r != null },
            children: q,
          })
        );
      };
    return r && (b.route.ErrorBoundary || b.route.errorElement || w === 0)
      ? x.createElement(f_, {
          location: r.location,
          revalidation: r.revalidation,
          component: N,
          error: A,
          children: P(),
          routeContext: { outlet: null, matches: k, isDataRoute: !0 },
        })
      : P();
  }, null);
}
var Jy = (function (i) {
    return (
      (i.UseBlocker = "useBlocker"),
      (i.UseRevalidator = "useRevalidator"),
      (i.UseNavigateStable = "useNavigate"),
      i
    );
  })(Jy || {}),
  Wy = (function (i) {
    return (
      (i.UseBlocker = "useBlocker"),
      (i.UseLoaderData = "useLoaderData"),
      (i.UseActionData = "useActionData"),
      (i.UseRouteError = "useRouteError"),
      (i.UseNavigation = "useNavigation"),
      (i.UseRouteLoaderData = "useRouteLoaderData"),
      (i.UseMatches = "useMatches"),
      (i.UseRevalidator = "useRevalidator"),
      (i.UseNavigateStable = "useNavigate"),
      (i.UseRouteId = "useRouteId"),
      i
    );
  })(Wy || {});
function p_(i) {
  let t = x.useContext(Fd);
  return t || Ge(!1), t;
}
function g_(i) {
  let t = x.useContext(r_);
  return t || Ge(!1), t;
}
function m_(i) {
  let t = x.useContext(Pi);
  return t || Ge(!1), t;
}
function e0(i) {
  let t = m_(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || Ge(!1), r.route.id;
}
function v_() {
  var i;
  let t = x.useContext(Ky),
    r = g_(),
    s = e0();
  return t !== void 0 ? t : (i = r.errors) == null ? void 0 : i[s];
}
function y_() {
  let { router: i } = p_(Jy.UseNavigateStable),
    t = e0(Wy.UseNavigateStable),
    r = x.useRef(!1);
  return (
    Zy(() => {
      r.current = !0;
    }),
    x.useCallback(
      function (o, c) {
        c === void 0 && (c = {}),
          r.current &&
            (typeof o == "number"
              ? i.navigate(o)
              : i.navigate(o, Ks({ fromRouteId: t }, c)));
      },
      [i, t]
    )
  );
}
const yv = {};
function b_(i, t, r) {
  yv[i] || (yv[i] = !0);
}
function S_(i, t) {
  i == null || i.v7_startTransition, i == null || i.v7_relativeSplatPath;
}
function E_(i) {
  let { to: t, replace: r, state: s, relative: o } = i;
  Ha() || Ge(!1);
  let { future: c, static: d } = x.useContext(Bi),
    { matches: h } = x.useContext(Pi),
    { pathname: g } = al(),
    m = Xd(),
    y = Yd(t, Qd(h, c.v7_relativeSplatPath), g, o === "path"),
    b = JSON.stringify(y);
  return (
    x.useEffect(
      () => m(JSON.parse(b), { replace: r, state: s, relative: o }),
      [m, b, o, r, s]
    ),
    null
  );
}
function zo(i) {
  Ge(!1);
}
function T_(i) {
  let {
    basename: t = "/",
    children: r = null,
    location: s,
    navigationType: o = zi.Pop,
    navigator: c,
    static: d = !1,
    future: h,
  } = i;
  Ha() && Ge(!1);
  let g = t.replace(/^\/*/, "/"),
    m = x.useMemo(
      () => ({
        basename: g,
        navigator: c,
        static: d,
        future: Ks({ v7_relativeSplatPath: !1 }, h),
      }),
      [g, h, c, d]
    );
  typeof s == "string" && (s = za(s));
  let {
      pathname: y = "/",
      search: b = "",
      hash: w = "",
      state: A = null,
      key: U = "default",
    } = s,
    N = x.useMemo(() => {
      let R = Gd(y, g);
      return R == null
        ? null
        : {
            location: { pathname: R, search: b, hash: w, state: A, key: U },
            navigationType: o,
          };
    }, [g, y, b, w, A, U, o]);
  return N == null
    ? null
    : x.createElement(
        Bi.Provider,
        { value: m },
        x.createElement(lu.Provider, { children: r, value: N })
      );
}
function __(i) {
  let { children: t, location: r } = i;
  return l_(sd(t), r);
}
new Promise(() => {});
function sd(i, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    x.Children.forEach(i, (s, o) => {
      if (!x.isValidElement(s)) return;
      let c = [...t, o];
      if (s.type === x.Fragment) {
        r.push.apply(r, sd(s.props.children, c));
        return;
      }
      s.type !== zo && Ge(!1), !s.props.index || !s.props.children || Ge(!1);
      let d = {
        id: s.props.id || c.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.ErrorBoundary != null || s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (d.children = sd(s.props.children, c)), r.push(d);
    }),
    r
  );
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ld() {
  return (
    (ld = Object.assign
      ? Object.assign.bind()
      : function (i) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (i[s] = r[s]);
          }
          return i;
        }),
    ld.apply(this, arguments)
  );
}
function O_(i, t) {
  if (i == null) return {};
  var r = {},
    s = Object.keys(i),
    o,
    c;
  for (c = 0; c < s.length; c++)
    (o = s[c]), !(t.indexOf(o) >= 0) && (r[o] = i[o]);
  return r;
}
function D_(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function w_(i, t) {
  return i.button === 0 && (!t || t === "_self") && !D_(i);
}
const R_ = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  C_ = "6";
try {
  window.__reactRouterVersion = C_;
} catch {}
const A_ = "startTransition",
  bv = DT[A_];
function N_(i) {
  let { basename: t, children: r, future: s, window: o } = i,
    c = x.useRef();
  c.current == null && (c.current = xT({ window: o, v5Compat: !0 }));
  let d = c.current,
    [h, g] = x.useState({ action: d.action, location: d.location }),
    { v7_startTransition: m } = s || {},
    y = x.useCallback(
      (b) => {
        m && bv ? bv(() => g(b)) : g(b);
      },
      [g, m]
    );
  return (
    x.useLayoutEffect(() => d.listen(y), [d, y]),
    x.useEffect(() => S_(s), [s]),
    x.createElement(T_, {
      basename: t,
      children: r,
      location: h.location,
      navigationType: h.action,
      navigator: d,
      future: s,
    })
  );
}
const M_ =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  x_ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Sv = x.forwardRef(function (t, r) {
    let {
        onClick: s,
        relative: o,
        reloadDocument: c,
        replace: d,
        state: h,
        target: g,
        to: m,
        preventScrollReset: y,
        viewTransition: b,
      } = t,
      w = O_(t, R_),
      { basename: A } = x.useContext(Bi),
      U,
      N = !1;
    if (typeof m == "string" && x_.test(m) && ((U = m), M_))
      try {
        let q = new URL(window.location.href),
          W = m.startsWith("//") ? new URL(q.protocol + m) : new URL(m),
          Y = Gd(W.pathname, A);
        W.origin === q.origin && Y != null
          ? (m = Y + W.search + W.hash)
          : (N = !0);
      } catch {}
    let R = a_(m, { relative: o }),
      k = U_(m, {
        replace: d,
        state: h,
        target: g,
        preventScrollReset: y,
        relative: o,
        viewTransition: b,
      });
    function P(q) {
      s && s(q), q.defaultPrevented || k(q);
    }
    return x.createElement(
      "a",
      ld({}, w, { href: U || R, onClick: N || c ? s : P, ref: r, target: g })
    );
  });
var Ev;
(function (i) {
  (i.UseScrollRestoration = "useScrollRestoration"),
    (i.UseSubmit = "useSubmit"),
    (i.UseSubmitFetcher = "useSubmitFetcher"),
    (i.UseFetcher = "useFetcher"),
    (i.useViewTransitionState = "useViewTransitionState");
})(Ev || (Ev = {}));
var Tv;
(function (i) {
  (i.UseFetcher = "useFetcher"),
    (i.UseFetchers = "useFetchers"),
    (i.UseScrollRestoration = "useScrollRestoration");
})(Tv || (Tv = {}));
function U_(i, t) {
  let {
      target: r,
      replace: s,
      state: o,
      preventScrollReset: c,
      relative: d,
      viewTransition: h,
    } = t === void 0 ? {} : t,
    g = Xd(),
    m = al(),
    y = $y(i, { relative: d });
  return x.useCallback(
    (b) => {
      if (w_(b, r)) {
        b.preventDefault();
        let w = s !== void 0 ? s : Fo(m) === Fo(y);
        g(i, {
          replace: w,
          state: o,
          preventScrollReset: c,
          relative: d,
          viewTransition: h,
        });
      }
    },
    [m, g, y, s, o, r, i, c, d, h]
  );
}
var ja = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(i) {
      return (
        this.listeners.add(i),
        this.onSubscribe(),
        () => {
          this.listeners.delete(i), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Rr = typeof window > "u" || "Deno" in globalThis;
function Ft() {}
function I_(i, t) {
  return typeof i == "function" ? i(t) : i;
}
function od(i) {
  return typeof i == "number" && i >= 0 && i !== 1 / 0;
}
function t0(i, t) {
  return Math.max(i + (t || 0) - Date.now(), 0);
}
function ma(i, t) {
  return typeof i == "function" ? i(t) : i;
}
function tn(i, t) {
  return typeof i == "function" ? i(t) : i;
}
function _v(i, t) {
  const {
    type: r = "all",
    exact: s,
    fetchStatus: o,
    predicate: c,
    queryKey: d,
    stale: h,
  } = i;
  if (d) {
    if (s) {
      if (t.queryHash !== Kd(d, t.options)) return !1;
    } else if (!Zs(t.queryKey, d)) return !1;
  }
  if (r !== "all") {
    const g = t.isActive();
    if ((r === "active" && !g) || (r === "inactive" && g)) return !1;
  }
  return !(
    (typeof h == "boolean" && t.isStale() !== h) ||
    (o && o !== t.state.fetchStatus) ||
    (c && !c(t))
  );
}
function Ov(i, t) {
  const { exact: r, status: s, predicate: o, mutationKey: c } = i;
  if (c) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (Cr(t.options.mutationKey) !== Cr(c)) return !1;
    } else if (!Zs(t.options.mutationKey, c)) return !1;
  }
  return !((s && t.state.status !== s) || (o && !o(t)));
}
function Kd(i, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Cr)(i);
}
function Cr(i) {
  return JSON.stringify(i, (t, r) =>
    ud(r)
      ? Object.keys(r)
          .sort()
          .reduce((s, o) => ((s[o] = r[o]), s), {})
      : r
  );
}
function Zs(i, t) {
  return i === t
    ? !0
    : typeof i != typeof t
    ? !1
    : i && t && typeof i == "object" && typeof t == "object"
    ? !Object.keys(t).some((r) => !Zs(i[r], t[r]))
    : !1;
}
function n0(i, t) {
  if (i === t) return i;
  const r = Dv(i) && Dv(t);
  if (r || (ud(i) && ud(t))) {
    const s = r ? i : Object.keys(i),
      o = s.length,
      c = r ? t : Object.keys(t),
      d = c.length,
      h = r ? [] : {};
    let g = 0;
    for (let m = 0; m < d; m++) {
      const y = r ? m : c[m];
      ((!r && s.includes(y)) || r) && i[y] === void 0 && t[y] === void 0
        ? ((h[y] = void 0), g++)
        : ((h[y] = n0(i[y], t[y])), h[y] === i[y] && i[y] !== void 0 && g++);
    }
    return o === d && g === o ? i : h;
  }
  return t;
}
function Xo(i, t) {
  if (!t || Object.keys(i).length !== Object.keys(t).length) return !1;
  for (const r in i) if (i[r] !== t[r]) return !1;
  return !0;
}
function Dv(i) {
  return Array.isArray(i) && i.length === Object.keys(i).length;
}
function ud(i) {
  if (!wv(i)) return !1;
  const t = i.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !wv(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(i) !== Object.prototype
  );
}
function wv(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function L_(i) {
  return new Promise((t) => {
    setTimeout(t, i);
  });
}
function cd(i, t, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(i, t)
    : r.structuralSharing !== !1
    ? n0(i, t)
    : t;
}
function z_(i, t, r = 0) {
  const s = [...i, t];
  return r && s.length > r ? s.slice(1) : s;
}
function H_(i, t, r = 0) {
  const s = [t, ...i];
  return r && s.length > r ? s.slice(0, -1) : s;
}
var Zd = Symbol();
function i0(i, t) {
  return !i.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !i.queryFn || i.queryFn === Zd
    ? () => Promise.reject(new Error(`Missing queryFn: '${i.queryHash}'`))
    : i.queryFn;
}
var vr,
  Ri,
  Ea,
  Uy,
  j_ =
    ((Uy = class extends ja {
      constructor() {
        super();
        J(this, vr);
        J(this, Ri);
        J(this, Ea);
        F(this, Ea, (t) => {
          if (!Rr && window.addEventListener) {
            const r = () => t();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        E(this, Ri) || this.setEventListener(E(this, Ea));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, Ri)) == null || t.call(this), F(this, Ri, void 0));
      }
      setEventListener(t) {
        var r;
        F(this, Ea, t),
          (r = E(this, Ri)) == null || r.call(this),
          F(
            this,
            Ri,
            t((s) => {
              typeof s == "boolean" ? this.setFocused(s) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        E(this, vr) !== t && (F(this, vr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((r) => {
          r(t);
        });
      }
      isFocused() {
        var t;
        return typeof E(this, vr) == "boolean"
          ? E(this, vr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (vr = new WeakMap()),
    (Ri = new WeakMap()),
    (Ea = new WeakMap()),
    Uy),
  $d = new j_(),
  Ta,
  Ci,
  _a,
  Iy,
  k_ =
    ((Iy = class extends ja {
      constructor() {
        super();
        J(this, Ta, !0);
        J(this, Ci);
        J(this, _a);
        F(this, _a, (t) => {
          if (!Rr && window.addEventListener) {
            const r = () => t(!0),
              s = () => t(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", r),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
      }
      onSubscribe() {
        E(this, Ci) || this.setEventListener(E(this, _a));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = E(this, Ci)) == null || t.call(this), F(this, Ci, void 0));
      }
      setEventListener(t) {
        var r;
        F(this, _a, t),
          (r = E(this, Ci)) == null || r.call(this),
          F(this, Ci, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        E(this, Ta) !== t &&
          (F(this, Ta, t),
          this.listeners.forEach((s) => {
            s(t);
          }));
      }
      isOnline() {
        return E(this, Ta);
      }
    }),
    (Ta = new WeakMap()),
    (Ci = new WeakMap()),
    (_a = new WeakMap()),
    Iy),
  Ko = new k_();
function fd() {
  let i, t;
  const r = new Promise((o, c) => {
    (i = o), (t = c);
  });
  (r.status = "pending"), r.catch(() => {});
  function s(o) {
    Object.assign(r, o), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (o) => {
      s({ status: "fulfilled", value: o }), i(o);
    }),
    (r.reject = (o) => {
      s({ status: "rejected", reason: o }), t(o);
    }),
    r
  );
}
function B_(i) {
  return Math.min(1e3 * 2 ** i, 3e4);
}
function r0(i) {
  return (i ?? "online") === "online" ? Ko.isOnline() : !0;
}
var a0 = class extends Error {
  constructor(i) {
    super("CancelledError"),
      (this.revert = i == null ? void 0 : i.revert),
      (this.silent = i == null ? void 0 : i.silent);
  }
};
function Pf(i) {
  return i instanceof a0;
}
function s0(i) {
  let t = !1,
    r = 0,
    s = !1,
    o;
  const c = fd(),
    d = (N) => {
      var R;
      s || (w(new a0(N)), (R = i.abort) == null || R.call(i));
    },
    h = () => {
      t = !0;
    },
    g = () => {
      t = !1;
    },
    m = () =>
      $d.isFocused() &&
      (i.networkMode === "always" || Ko.isOnline()) &&
      i.canRun(),
    y = () => r0(i.networkMode) && i.canRun(),
    b = (N) => {
      var R;
      s ||
        ((s = !0),
        (R = i.onSuccess) == null || R.call(i, N),
        o == null || o(),
        c.resolve(N));
    },
    w = (N) => {
      var R;
      s ||
        ((s = !0),
        (R = i.onError) == null || R.call(i, N),
        o == null || o(),
        c.reject(N));
    },
    A = () =>
      new Promise((N) => {
        var R;
        (o = (k) => {
          (s || m()) && N(k);
        }),
          (R = i.onPause) == null || R.call(i);
      }).then(() => {
        var N;
        (o = void 0), s || (N = i.onContinue) == null || N.call(i);
      }),
    U = () => {
      if (s) return;
      let N;
      const R = r === 0 ? i.initialPromise : void 0;
      try {
        N = R ?? i.fn();
      } catch (k) {
        N = Promise.reject(k);
      }
      Promise.resolve(N)
        .then(b)
        .catch((k) => {
          var se;
          if (s) return;
          const P = i.retry ?? (Rr ? 0 : 3),
            q = i.retryDelay ?? B_,
            W = typeof q == "function" ? q(r, k) : q,
            Y =
              P === !0 ||
              (typeof P == "number" && r < P) ||
              (typeof P == "function" && P(r, k));
          if (t || !Y) {
            w(k);
            return;
          }
          r++,
            (se = i.onFail) == null || se.call(i, r, k),
            L_(W)
              .then(() => (m() ? void 0 : A()))
              .then(() => {
                t ? w(k) : U();
              });
        });
    };
  return {
    promise: c,
    cancel: d,
    continue: () => (o == null || o(), c),
    cancelRetry: h,
    continueRetry: g,
    canStart: y,
    start: () => (y() ? U() : A().then(U), c),
  };
}
function P_() {
  let i = [],
    t = 0,
    r = (h) => {
      h();
    },
    s = (h) => {
      h();
    },
    o = (h) => setTimeout(h, 0);
  const c = (h) => {
      t
        ? i.push(h)
        : o(() => {
            r(h);
          });
    },
    d = () => {
      const h = i;
      (i = []),
        h.length &&
          o(() => {
            s(() => {
              h.forEach((g) => {
                r(g);
              });
            });
          });
    };
  return {
    batch: (h) => {
      let g;
      t++;
      try {
        g = h();
      } finally {
        t--, t || d();
      }
      return g;
    },
    batchCalls:
      (h) =>
      (...g) => {
        c(() => {
          h(...g);
        });
      },
    schedule: c,
    setNotifyFunction: (h) => {
      r = h;
    },
    setBatchNotifyFunction: (h) => {
      s = h;
    },
    setScheduler: (h) => {
      o = h;
    },
  };
}
var Je = P_(),
  yr,
  Ly,
  l0 =
    ((Ly = class {
      constructor() {
        J(this, yr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          od(this.gcTime) &&
            F(
              this,
              yr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(i) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          i ?? (Rr ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        E(this, yr) && (clearTimeout(E(this, yr)), F(this, yr, void 0));
      }
    }),
    (yr = new WeakMap()),
    Ly),
  Oa,
  Da,
  Yt,
  br,
  ut,
  tl,
  Sr,
  Wt,
  Bn,
  zy,
  q_ =
    ((zy = class extends l0 {
      constructor(t) {
        super();
        J(this, Wt);
        J(this, Oa);
        J(this, Da);
        J(this, Yt);
        J(this, br);
        J(this, ut);
        J(this, tl);
        J(this, Sr);
        F(this, Sr, !1),
          F(this, tl, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          F(this, br, t.client),
          F(this, Yt, E(this, br).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          F(this, Oa, V_(this.options)),
          (this.state = t.state ?? E(this, Oa)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = E(this, ut)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...E(this, tl), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          E(this, Yt).remove(this);
      }
      setData(t, r) {
        const s = cd(this.state.data, t, this.options);
        return (
          de(this, Wt, Bn).call(this, {
            data: s,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          s
        );
      }
      setState(t, r) {
        de(this, Wt, Bn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: r,
        });
      }
      cancel(t) {
        var s, o;
        const r = (s = E(this, ut)) == null ? void 0 : s.promise;
        return (
          (o = E(this, ut)) == null || o.cancel(t),
          r ? r.then(Ft).catch(Ft) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(E(this, Oa));
      }
      isActive() {
        return this.observers.some((t) => tn(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === Zd ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !t0(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var r;
        const t = this.observers.find((s) => s.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = E(this, ut)) == null || r.continue();
      }
      onOnline() {
        var r;
        const t = this.observers.find((s) => s.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (r = E(this, ut)) == null || r.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          E(this, Yt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((r) => r !== t)),
          this.observers.length ||
            (E(this, ut) &&
              (E(this, Sr)
                ? E(this, ut).cancel({ revert: !0 })
                : E(this, ut).cancelRetry()),
            this.scheduleGc()),
          E(this, Yt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          de(this, Wt, Bn).call(this, { type: "invalidate" });
      }
      fetch(t, r) {
        var g, m, y;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (E(this, ut))
            return E(this, ut).continueRetry(), E(this, ut).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const b = this.observers.find((w) => w.options.queryFn);
          b && this.setOptions(b.options);
        }
        const s = new AbortController(),
          o = (b) => {
            Object.defineProperty(b, "signal", {
              enumerable: !0,
              get: () => (F(this, Sr, !0), s.signal),
            });
          },
          c = () => {
            const b = i0(this.options, r),
              w = {
                client: E(this, br),
                queryKey: this.queryKey,
                meta: this.meta,
              };
            return (
              o(w),
              F(this, Sr, !1),
              this.options.persister ? this.options.persister(b, w, this) : b(w)
            );
          },
          d = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            client: E(this, br),
            state: this.state,
            fetchFn: c,
          };
        o(d),
          (g = this.options.behavior) == null || g.onFetch(d, this),
          F(this, Da, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((m = d.fetchOptions) == null ? void 0 : m.meta)) &&
            de(this, Wt, Bn).call(this, {
              type: "fetch",
              meta: (y = d.fetchOptions) == null ? void 0 : y.meta,
            });
        const h = (b) => {
          var w, A, U, N;
          (Pf(b) && b.silent) ||
            de(this, Wt, Bn).call(this, { type: "error", error: b }),
            Pf(b) ||
              ((A = (w = E(this, Yt).config).onError) == null ||
                A.call(w, b, this),
              (N = (U = E(this, Yt).config).onSettled) == null ||
                N.call(U, this.state.data, b, this)),
            this.scheduleGc();
        };
        return (
          F(
            this,
            ut,
            s0({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: d.fetchFn,
              abort: s.abort.bind(s),
              onSuccess: (b) => {
                var w, A, U, N;
                if (b === void 0) {
                  h(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(b);
                } catch (R) {
                  h(R);
                  return;
                }
                (A = (w = E(this, Yt).config).onSuccess) == null ||
                  A.call(w, b, this),
                  (N = (U = E(this, Yt).config).onSettled) == null ||
                    N.call(U, b, this.state.error, this),
                  this.scheduleGc();
              },
              onError: h,
              onFail: (b, w) => {
                de(this, Wt, Bn).call(this, {
                  type: "failed",
                  failureCount: b,
                  error: w,
                });
              },
              onPause: () => {
                de(this, Wt, Bn).call(this, { type: "pause" });
              },
              onContinue: () => {
                de(this, Wt, Bn).call(this, { type: "continue" });
              },
              retry: d.options.retry,
              retryDelay: d.options.retryDelay,
              networkMode: d.options.networkMode,
              canRun: () => !0,
            })
          ),
          E(this, ut).start()
        );
      }
    }),
    (Oa = new WeakMap()),
    (Da = new WeakMap()),
    (Yt = new WeakMap()),
    (br = new WeakMap()),
    (ut = new WeakMap()),
    (tl = new WeakMap()),
    (Sr = new WeakMap()),
    (Wt = new WeakSet()),
    (Bn = function (t) {
      const r = (s) => {
        switch (t.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...o0(s.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...s,
              data: t.data,
              dataUpdateCount: s.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = t.error;
            return Pf(o) && o.revert && E(this, Da)
              ? { ...E(this, Da), fetchStatus: "idle" }
              : {
                  ...s,
                  error: o,
                  errorUpdateCount: s.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: s.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...t.state };
        }
      };
      (this.state = r(this.state)),
        Je.batch(() => {
          this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            E(this, Yt).notify({ query: this, type: "updated", action: t });
        });
    }),
    zy);
function o0(i, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: r0(t.networkMode) ? "fetching" : "paused",
    ...(i === void 0 && { error: null, status: "pending" }),
  };
}
function V_(i) {
  const t =
      typeof i.initialData == "function" ? i.initialData() : i.initialData,
    r = t !== void 0,
    s = r
      ? typeof i.initialDataUpdatedAt == "function"
        ? i.initialDataUpdatedAt()
        : i.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? s ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var pn,
  Hy,
  G_ =
    ((Hy = class extends ja {
      constructor(t = {}) {
        super();
        J(this, pn);
        (this.config = t), F(this, pn, new Map());
      }
      build(t, r, s) {
        const o = r.queryKey,
          c = r.queryHash ?? Kd(o, r);
        let d = this.get(c);
        return (
          d ||
            ((d = new q_({
              client: t,
              queryKey: o,
              queryHash: c,
              options: t.defaultQueryOptions(r),
              state: s,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(d)),
          d
        );
      }
      add(t) {
        E(this, pn).has(t.queryHash) ||
          (E(this, pn).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const r = E(this, pn).get(t.queryHash);
        r &&
          (t.destroy(),
          r === t && E(this, pn).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Je.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return E(this, pn).get(t);
      }
      getAll() {
        return [...E(this, pn).values()];
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((s) => _v(r, s));
      }
      findAll(t = {}) {
        const r = this.getAll();
        return Object.keys(t).length > 0 ? r.filter((s) => _v(t, s)) : r;
      }
      notify(t) {
        Je.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      onFocus() {
        Je.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Je.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (pn = new WeakMap()),
    Hy),
  gn,
  pt,
  Er,
  mn,
  Ti,
  jy,
  Q_ =
    ((jy = class extends l0 {
      constructor(t) {
        super();
        J(this, mn);
        J(this, gn);
        J(this, pt);
        J(this, Er);
        (this.mutationId = t.mutationId),
          F(this, pt, t.mutationCache),
          F(this, gn, []),
          (this.state = t.state || u0()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        E(this, gn).includes(t) ||
          (E(this, gn).push(t),
          this.clearGcTimeout(),
          E(this, pt).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        F(
          this,
          gn,
          E(this, gn).filter((r) => r !== t)
        ),
          this.scheduleGc(),
          E(this, pt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        E(this, gn).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : E(this, pt).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = E(this, Er)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, c, d, h, g, m, y, b, w, A, U, N, R, k, P, q, W, Y, se, ye;
        F(
          this,
          Er,
          s0({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (me, V) => {
              de(this, mn, Ti).call(this, {
                type: "failed",
                failureCount: me,
                error: V,
              });
            },
            onPause: () => {
              de(this, mn, Ti).call(this, { type: "pause" });
            },
            onContinue: () => {
              de(this, mn, Ti).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => E(this, pt).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          s = !E(this, Er).canStart();
        try {
          if (!r) {
            de(this, mn, Ti).call(this, {
              type: "pending",
              variables: t,
              isPaused: s,
            }),
              await ((c = (o = E(this, pt).config).onMutate) == null
                ? void 0
                : c.call(o, t, this));
            const V = await ((h = (d = this.options).onMutate) == null
              ? void 0
              : h.call(d, t));
            V !== this.state.context &&
              de(this, mn, Ti).call(this, {
                type: "pending",
                context: V,
                variables: t,
                isPaused: s,
              });
          }
          const me = await E(this, Er).start();
          return (
            await ((m = (g = E(this, pt).config).onSuccess) == null
              ? void 0
              : m.call(g, me, t, this.state.context, this)),
            await ((b = (y = this.options).onSuccess) == null
              ? void 0
              : b.call(y, me, t, this.state.context)),
            await ((A = (w = E(this, pt).config).onSettled) == null
              ? void 0
              : A.call(
                  w,
                  me,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((N = (U = this.options).onSettled) == null
              ? void 0
              : N.call(U, me, null, t, this.state.context)),
            de(this, mn, Ti).call(this, { type: "success", data: me }),
            me
          );
        } catch (me) {
          try {
            throw (
              (await ((k = (R = E(this, pt).config).onError) == null
                ? void 0
                : k.call(R, me, t, this.state.context, this)),
              await ((q = (P = this.options).onError) == null
                ? void 0
                : q.call(P, me, t, this.state.context)),
              await ((Y = (W = E(this, pt).config).onSettled) == null
                ? void 0
                : Y.call(
                    W,
                    void 0,
                    me,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((ye = (se = this.options).onSettled) == null
                ? void 0
                : ye.call(se, void 0, me, t, this.state.context)),
              me)
            );
          } finally {
            de(this, mn, Ti).call(this, { type: "error", error: me });
          }
        } finally {
          E(this, pt).runNext(this);
        }
      }
    }),
    (gn = new WeakMap()),
    (pt = new WeakMap()),
    (Er = new WeakMap()),
    (mn = new WeakSet()),
    (Ti = function (t) {
      const r = (s) => {
        switch (t.type) {
          case "failed":
            return {
              ...s,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...s, isPaused: !0 };
          case "continue":
            return { ...s, isPaused: !1 };
          case "pending":
            return {
              ...s,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...s,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...s,
              data: void 0,
              error: t.error,
              failureCount: s.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = r(this.state)),
        Je.batch(() => {
          E(this, gn).forEach((s) => {
            s.onMutationUpdate(t);
          }),
            E(this, pt).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    jy);
function u0() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Pn,
  en,
  nl,
  ky,
  Y_ =
    ((ky = class extends ja {
      constructor(t = {}) {
        super();
        J(this, Pn);
        J(this, en);
        J(this, nl);
        (this.config = t),
          F(this, Pn, new Set()),
          F(this, en, new Map()),
          F(this, nl, 0);
      }
      build(t, r, s) {
        const o = new Q_({
          mutationCache: this,
          mutationId: ++Mo(this, nl)._,
          options: t.defaultMutationOptions(r),
          state: s,
        });
        return this.add(o), o;
      }
      add(t) {
        E(this, Pn).add(t);
        const r = xo(t);
        if (typeof r == "string") {
          const s = E(this, en).get(r);
          s ? s.push(t) : E(this, en).set(r, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (E(this, Pn).delete(t)) {
          const r = xo(t);
          if (typeof r == "string") {
            const s = E(this, en).get(r);
            if (s)
              if (s.length > 1) {
                const o = s.indexOf(t);
                o !== -1 && s.splice(o, 1);
              } else s[0] === t && E(this, en).delete(r);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const r = xo(t);
        if (typeof r == "string") {
          const s = E(this, en).get(r),
            o =
              s == null ? void 0 : s.find((c) => c.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var s;
        const r = xo(t);
        if (typeof r == "string") {
          const o =
            (s = E(this, en).get(r)) == null
              ? void 0
              : s.find((c) => c !== t && c.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Je.batch(() => {
          E(this, Pn).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            E(this, Pn).clear(),
            E(this, en).clear();
        });
      }
      getAll() {
        return Array.from(E(this, Pn));
      }
      find(t) {
        const r = { exact: !0, ...t };
        return this.getAll().find((s) => Ov(r, s));
      }
      findAll(t = {}) {
        return this.getAll().filter((r) => Ov(t, r));
      }
      notify(t) {
        Je.batch(() => {
          this.listeners.forEach((r) => {
            r(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((r) => r.state.isPaused);
        return Je.batch(() =>
          Promise.all(t.map((r) => r.continue().catch(Ft)))
        );
      }
    }),
    (Pn = new WeakMap()),
    (en = new WeakMap()),
    (nl = new WeakMap()),
    ky);
function xo(i) {
  var t;
  return (t = i.options.scope) == null ? void 0 : t.id;
}
function Rv(i) {
  return {
    onFetch: (t, r) => {
      var y, b, w, A, U;
      const s = t.options,
        o =
          (w =
            (b = (y = t.fetchOptions) == null ? void 0 : y.meta) == null
              ? void 0
              : b.fetchMore) == null
            ? void 0
            : w.direction,
        c = ((A = t.state.data) == null ? void 0 : A.pages) || [],
        d = ((U = t.state.data) == null ? void 0 : U.pageParams) || [];
      let h = { pages: [], pageParams: [] },
        g = 0;
      const m = async () => {
        let N = !1;
        const R = (q) => {
            Object.defineProperty(q, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (N = !0)
                  : t.signal.addEventListener("abort", () => {
                      N = !0;
                    }),
                t.signal
              ),
            });
          },
          k = i0(t.options, t.fetchOptions),
          P = async (q, W, Y) => {
            if (N) return Promise.reject();
            if (W == null && q.pages.length) return Promise.resolve(q);
            const se = {
              client: t.client,
              queryKey: t.queryKey,
              pageParam: W,
              direction: Y ? "backward" : "forward",
              meta: t.options.meta,
            };
            R(se);
            const ye = await k(se),
              { maxPages: me } = t.options,
              V = Y ? H_ : z_;
            return {
              pages: V(q.pages, ye, me),
              pageParams: V(q.pageParams, W, me),
            };
          };
        if (o && c.length) {
          const q = o === "backward",
            W = q ? F_ : Cv,
            Y = { pages: c, pageParams: d },
            se = W(s, Y);
          h = await P(Y, se, q);
        } else {
          const q = i ?? c.length;
          do {
            const W = g === 0 ? d[0] ?? s.initialPageParam : Cv(s, h);
            if (g > 0 && W == null) break;
            (h = await P(h, W)), g++;
          } while (g < q);
        }
        return h;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var N, R;
            return (R = (N = t.options).persister) == null
              ? void 0
              : R.call(
                  N,
                  m,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  r
                );
          })
        : (t.fetchFn = m);
    },
  };
}
function Cv(i, { pages: t, pageParams: r }) {
  const s = t.length - 1;
  return t.length > 0 ? i.getNextPageParam(t[s], t, r[s], r) : void 0;
}
function F_(i, { pages: t, pageParams: r }) {
  var s;
  return t.length > 0
    ? (s = i.getPreviousPageParam) == null
      ? void 0
      : s.call(i, t[0], t, r[0], r)
    : void 0;
}
var qe,
  Ai,
  Ni,
  wa,
  Ra,
  Mi,
  Ca,
  Aa,
  By,
  X_ =
    ((By = class {
      constructor(i = {}) {
        J(this, qe);
        J(this, Ai);
        J(this, Ni);
        J(this, wa);
        J(this, Ra);
        J(this, Mi);
        J(this, Ca);
        J(this, Aa);
        F(this, qe, i.queryCache || new G_()),
          F(this, Ai, i.mutationCache || new Y_()),
          F(this, Ni, i.defaultOptions || {}),
          F(this, wa, new Map()),
          F(this, Ra, new Map()),
          F(this, Mi, 0);
      }
      mount() {
        Mo(this, Mi)._++,
          E(this, Mi) === 1 &&
            (F(
              this,
              Ca,
              $d.subscribe(async (i) => {
                i &&
                  (await this.resumePausedMutations(), E(this, qe).onFocus());
              })
            ),
            F(
              this,
              Aa,
              Ko.subscribe(async (i) => {
                i &&
                  (await this.resumePausedMutations(), E(this, qe).onOnline());
              })
            ));
      }
      unmount() {
        var i, t;
        Mo(this, Mi)._--,
          E(this, Mi) === 0 &&
            ((i = E(this, Ca)) == null || i.call(this),
            F(this, Ca, void 0),
            (t = E(this, Aa)) == null || t.call(this),
            F(this, Aa, void 0));
      }
      isFetching(i) {
        return E(this, qe).findAll({ ...i, fetchStatus: "fetching" }).length;
      }
      isMutating(i) {
        return E(this, Ai).findAll({ ...i, status: "pending" }).length;
      }
      getQueryData(i) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: i });
        return (r = E(this, qe).get(t.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(i) {
        const t = this.defaultQueryOptions(i),
          r = E(this, qe).build(this, t),
          s = r.state.data;
        return s === void 0
          ? this.fetchQuery(i)
          : (i.revalidateIfStale &&
              r.isStaleByTime(ma(t.staleTime, r)) &&
              this.prefetchQuery(t),
            Promise.resolve(s));
      }
      getQueriesData(i) {
        return E(this, qe)
          .findAll(i)
          .map(({ queryKey: t, state: r }) => {
            const s = r.data;
            return [t, s];
          });
      }
      setQueryData(i, t, r) {
        const s = this.defaultQueryOptions({ queryKey: i }),
          o = E(this, qe).get(s.queryHash),
          c = o == null ? void 0 : o.state.data,
          d = I_(t, c);
        if (d !== void 0)
          return E(this, qe)
            .build(this, s)
            .setData(d, { ...r, manual: !0 });
      }
      setQueriesData(i, t, r) {
        return Je.batch(() =>
          E(this, qe)
            .findAll(i)
            .map(({ queryKey: s }) => [s, this.setQueryData(s, t, r)])
        );
      }
      getQueryState(i) {
        var r;
        const t = this.defaultQueryOptions({ queryKey: i });
        return (r = E(this, qe).get(t.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(i) {
        const t = E(this, qe);
        Je.batch(() => {
          t.findAll(i).forEach((r) => {
            t.remove(r);
          });
        });
      }
      resetQueries(i, t) {
        const r = E(this, qe),
          s = { type: "active", ...i };
        return Je.batch(
          () => (
            r.findAll(i).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(s, t)
          )
        );
      }
      cancelQueries(i, t = {}) {
        const r = { revert: !0, ...t },
          s = Je.batch(() =>
            E(this, qe)
              .findAll(i)
              .map((o) => o.cancel(r))
          );
        return Promise.all(s).then(Ft).catch(Ft);
      }
      invalidateQueries(i, t = {}) {
        return Je.batch(() => {
          if (
            (E(this, qe)
              .findAll(i)
              .forEach((s) => {
                s.invalidate();
              }),
            (i == null ? void 0 : i.refetchType) === "none")
          )
            return Promise.resolve();
          const r = {
            ...i,
            type:
              (i == null ? void 0 : i.refetchType) ??
              (i == null ? void 0 : i.type) ??
              "active",
          };
          return this.refetchQueries(r, t);
        });
      }
      refetchQueries(i, t = {}) {
        const r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          s = Je.batch(() =>
            E(this, qe)
              .findAll(i)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let c = o.fetch(void 0, r);
                return (
                  r.throwOnError || (c = c.catch(Ft)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : c
                );
              })
          );
        return Promise.all(s).then(Ft);
      }
      fetchQuery(i) {
        const t = this.defaultQueryOptions(i);
        t.retry === void 0 && (t.retry = !1);
        const r = E(this, qe).build(this, t);
        return r.isStaleByTime(ma(t.staleTime, r))
          ? r.fetch(t)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(i) {
        return this.fetchQuery(i).then(Ft).catch(Ft);
      }
      fetchInfiniteQuery(i) {
        return (i.behavior = Rv(i.pages)), this.fetchQuery(i);
      }
      prefetchInfiniteQuery(i) {
        return this.fetchInfiniteQuery(i).then(Ft).catch(Ft);
      }
      ensureInfiniteQueryData(i) {
        return (i.behavior = Rv(i.pages)), this.ensureQueryData(i);
      }
      resumePausedMutations() {
        return Ko.isOnline()
          ? E(this, Ai).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return E(this, qe);
      }
      getMutationCache() {
        return E(this, Ai);
      }
      getDefaultOptions() {
        return E(this, Ni);
      }
      setDefaultOptions(i) {
        F(this, Ni, i);
      }
      setQueryDefaults(i, t) {
        E(this, wa).set(Cr(i), { queryKey: i, defaultOptions: t });
      }
      getQueryDefaults(i) {
        const t = [...E(this, wa).values()],
          r = {};
        return (
          t.forEach((s) => {
            Zs(i, s.queryKey) && Object.assign(r, s.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(i, t) {
        E(this, Ra).set(Cr(i), { mutationKey: i, defaultOptions: t });
      }
      getMutationDefaults(i) {
        const t = [...E(this, Ra).values()];
        let r = {};
        return (
          t.forEach((s) => {
            Zs(i, s.mutationKey) && (r = { ...r, ...s.defaultOptions });
          }),
          r
        );
      }
      defaultQueryOptions(i) {
        if (i._defaulted) return i;
        const t = {
          ...E(this, Ni).queries,
          ...this.getQueryDefaults(i.queryKey),
          ...i,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = Kd(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === Zd && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(i) {
        return i != null && i._defaulted
          ? i
          : {
              ...E(this, Ni).mutations,
              ...((i == null ? void 0 : i.mutationKey) &&
                this.getMutationDefaults(i.mutationKey)),
              ...i,
              _defaulted: !0,
            };
      }
      clear() {
        E(this, qe).clear(), E(this, Ai).clear();
      }
    }),
    (qe = new WeakMap()),
    (Ai = new WeakMap()),
    (Ni = new WeakMap()),
    (wa = new WeakMap()),
    (Ra = new WeakMap()),
    (Mi = new WeakMap()),
    (Ca = new WeakMap()),
    (Aa = new WeakMap()),
    By),
  Tt,
  Se,
  il,
  gt,
  Tr,
  Na,
  xi,
  vn,
  rl,
  Ma,
  xa,
  _r,
  Or,
  Ui,
  Ua,
  we,
  Gs,
  dd,
  hd,
  pd,
  gd,
  md,
  vd,
  yd,
  c0,
  Py,
  K_ =
    ((Py = class extends ja {
      constructor(t, r) {
        super();
        J(this, we);
        J(this, Tt);
        J(this, Se);
        J(this, il);
        J(this, gt);
        J(this, Tr);
        J(this, Na);
        J(this, xi);
        J(this, vn);
        J(this, rl);
        J(this, Ma);
        J(this, xa);
        J(this, _r);
        J(this, Or);
        J(this, Ui);
        J(this, Ua, new Set());
        (this.options = r),
          F(this, Tt, t),
          F(this, vn, null),
          F(this, xi, fd()),
          this.options.experimental_prefetchInRender ||
            E(this, xi).reject(
              new Error(
                "experimental_prefetchInRender feature flag is not enabled"
              )
            ),
          this.bindMethods(),
          this.setOptions(r);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (E(this, Se).addObserver(this),
          Av(E(this, Se), this.options)
            ? de(this, we, Gs).call(this)
            : this.updateResult(),
          de(this, we, gd).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return bd(E(this, Se), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return bd(E(this, Se), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          de(this, we, md).call(this),
          de(this, we, vd).call(this),
          E(this, Se).removeObserver(this);
      }
      setOptions(t, r) {
        const s = this.options,
          o = E(this, Se);
        if (
          ((this.options = E(this, Tt).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != "boolean" &&
            typeof this.options.enabled != "function" &&
            typeof tn(this.options.enabled, E(this, Se)) != "boolean")
        )
          throw new Error(
            "Expected enabled to be a boolean or a callback that returns a boolean"
          );
        de(this, we, yd).call(this),
          E(this, Se).setOptions(this.options),
          s._defaulted &&
            !Xo(this.options, s) &&
            E(this, Tt)
              .getQueryCache()
              .notify({
                type: "observerOptionsUpdated",
                query: E(this, Se),
                observer: this,
              });
        const c = this.hasListeners();
        c && Nv(E(this, Se), o, this.options, s) && de(this, we, Gs).call(this),
          this.updateResult(r),
          c &&
            (E(this, Se) !== o ||
              tn(this.options.enabled, E(this, Se)) !==
                tn(s.enabled, E(this, Se)) ||
              ma(this.options.staleTime, E(this, Se)) !==
                ma(s.staleTime, E(this, Se))) &&
            de(this, we, dd).call(this);
        const d = de(this, we, hd).call(this);
        c &&
          (E(this, Se) !== o ||
            tn(this.options.enabled, E(this, Se)) !==
              tn(s.enabled, E(this, Se)) ||
            d !== E(this, Ui)) &&
          de(this, we, pd).call(this, d);
      }
      getOptimisticResult(t) {
        const r = E(this, Tt).getQueryCache().build(E(this, Tt), t),
          s = this.createResult(r, t);
        return (
          $_(this, s) &&
            (F(this, gt, s),
            F(this, Na, this.options),
            F(this, Tr, E(this, Se).state)),
          s
        );
      }
      getCurrentResult() {
        return E(this, gt);
      }
      trackResult(t, r) {
        const s = {};
        return (
          Object.keys(t).forEach((o) => {
            Object.defineProperty(s, o, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(o), r == null || r(o), t[o]),
            });
          }),
          s
        );
      }
      trackProp(t) {
        E(this, Ua).add(t);
      }
      getCurrentQuery() {
        return E(this, Se);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const r = E(this, Tt).defaultQueryOptions(t),
          s = E(this, Tt).getQueryCache().build(E(this, Tt), r);
        return s.fetch().then(() => this.createResult(s, r));
      }
      fetch(t) {
        return de(this, we, Gs)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), E(this, gt)));
      }
      createResult(t, r) {
        var me;
        const s = E(this, Se),
          o = this.options,
          c = E(this, gt),
          d = E(this, Tr),
          h = E(this, Na),
          m = t !== s ? t.state : E(this, il),
          { state: y } = t;
        let b = { ...y },
          w = !1,
          A;
        if (r._optimisticResults) {
          const V = this.hasListeners(),
            fe = !V && Av(t, r),
            Ke = V && Nv(t, s, r, o);
          (fe || Ke) && (b = { ...b, ...o0(y.data, t.options) }),
            r._optimisticResults === "isRestoring" && (b.fetchStatus = "idle");
        }
        let { error: U, errorUpdatedAt: N, status: R } = b;
        if (r.select && b.data !== void 0)
          if (
            c &&
            b.data === (d == null ? void 0 : d.data) &&
            r.select === E(this, rl)
          )
            A = E(this, Ma);
          else
            try {
              F(this, rl, r.select),
                (A = r.select(b.data)),
                (A = cd(c == null ? void 0 : c.data, A, r)),
                F(this, Ma, A),
                F(this, vn, null);
            } catch (V) {
              F(this, vn, V);
            }
        else A = b.data;
        if (r.placeholderData !== void 0 && A === void 0 && R === "pending") {
          let V;
          if (
            c != null &&
            c.isPlaceholderData &&
            r.placeholderData === (h == null ? void 0 : h.placeholderData)
          )
            V = c.data;
          else if (
            ((V =
              typeof r.placeholderData == "function"
                ? r.placeholderData(
                    (me = E(this, xa)) == null ? void 0 : me.state.data,
                    E(this, xa)
                  )
                : r.placeholderData),
            r.select && V !== void 0)
          )
            try {
              (V = r.select(V)), F(this, vn, null);
            } catch (fe) {
              F(this, vn, fe);
            }
          V !== void 0 &&
            ((R = "success"),
            (A = cd(c == null ? void 0 : c.data, V, r)),
            (w = !0));
        }
        E(this, vn) &&
          ((U = E(this, vn)),
          (A = E(this, Ma)),
          (N = Date.now()),
          (R = "error"));
        const k = b.fetchStatus === "fetching",
          P = R === "pending",
          q = R === "error",
          W = P && k,
          Y = A !== void 0,
          ye = {
            status: R,
            fetchStatus: b.fetchStatus,
            isPending: P,
            isSuccess: R === "success",
            isError: q,
            isInitialLoading: W,
            isLoading: W,
            data: A,
            dataUpdatedAt: b.dataUpdatedAt,
            error: U,
            errorUpdatedAt: N,
            failureCount: b.fetchFailureCount,
            failureReason: b.fetchFailureReason,
            errorUpdateCount: b.errorUpdateCount,
            isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0,
            isFetchedAfterMount:
              b.dataUpdateCount > m.dataUpdateCount ||
              b.errorUpdateCount > m.errorUpdateCount,
            isFetching: k,
            isRefetching: k && !P,
            isLoadingError: q && !Y,
            isPaused: b.fetchStatus === "paused",
            isPlaceholderData: w,
            isRefetchError: q && Y,
            isStale: Jd(t, r),
            refetch: this.refetch,
            promise: E(this, xi),
          };
        if (this.options.experimental_prefetchInRender) {
          const V = (vt) => {
              ye.status === "error"
                ? vt.reject(ye.error)
                : ye.data !== void 0 && vt.resolve(ye.data);
            },
            fe = () => {
              const vt = F(this, xi, (ye.promise = fd()));
              V(vt);
            },
            Ke = E(this, xi);
          switch (Ke.status) {
            case "pending":
              t.queryHash === s.queryHash && V(Ke);
              break;
            case "fulfilled":
              (ye.status === "error" || ye.data !== Ke.value) && fe();
              break;
            case "rejected":
              (ye.status !== "error" || ye.error !== Ke.reason) && fe();
              break;
          }
        }
        return ye;
      }
      updateResult(t) {
        const r = E(this, gt),
          s = this.createResult(E(this, Se), this.options);
        if (
          (F(this, Tr, E(this, Se).state),
          F(this, Na, this.options),
          E(this, Tr).data !== void 0 && F(this, xa, E(this, Se)),
          Xo(s, r))
        )
          return;
        F(this, gt, s);
        const o = {},
          c = () => {
            if (!r) return !0;
            const { notifyOnChangeProps: d } = this.options,
              h = typeof d == "function" ? d() : d;
            if (h === "all" || (!h && !E(this, Ua).size)) return !0;
            const g = new Set(h ?? E(this, Ua));
            return (
              this.options.throwOnError && g.add("error"),
              Object.keys(E(this, gt)).some((m) => {
                const y = m;
                return E(this, gt)[y] !== r[y] && g.has(y);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && c() && (o.listeners = !0),
          de(this, we, c0).call(this, { ...o, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && de(this, we, gd).call(this);
      }
    }),
    (Tt = new WeakMap()),
    (Se = new WeakMap()),
    (il = new WeakMap()),
    (gt = new WeakMap()),
    (Tr = new WeakMap()),
    (Na = new WeakMap()),
    (xi = new WeakMap()),
    (vn = new WeakMap()),
    (rl = new WeakMap()),
    (Ma = new WeakMap()),
    (xa = new WeakMap()),
    (_r = new WeakMap()),
    (Or = new WeakMap()),
    (Ui = new WeakMap()),
    (Ua = new WeakMap()),
    (we = new WeakSet()),
    (Gs = function (t) {
      de(this, we, yd).call(this);
      let r = E(this, Se).fetch(this.options, t);
      return (t != null && t.throwOnError) || (r = r.catch(Ft)), r;
    }),
    (dd = function () {
      de(this, we, md).call(this);
      const t = ma(this.options.staleTime, E(this, Se));
      if (Rr || E(this, gt).isStale || !od(t)) return;
      const s = t0(E(this, gt).dataUpdatedAt, t) + 1;
      F(
        this,
        _r,
        setTimeout(() => {
          E(this, gt).isStale || this.updateResult();
        }, s)
      );
    }),
    (hd = function () {
      return (
        (typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(E(this, Se))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (pd = function (t) {
      de(this, we, vd).call(this),
        F(this, Ui, t),
        !(
          Rr ||
          tn(this.options.enabled, E(this, Se)) === !1 ||
          !od(E(this, Ui)) ||
          E(this, Ui) === 0
        ) &&
          F(
            this,
            Or,
            setInterval(() => {
              (this.options.refetchIntervalInBackground || $d.isFocused()) &&
                de(this, we, Gs).call(this);
            }, E(this, Ui))
          );
    }),
    (gd = function () {
      de(this, we, dd).call(this),
        de(this, we, pd).call(this, de(this, we, hd).call(this));
    }),
    (md = function () {
      E(this, _r) && (clearTimeout(E(this, _r)), F(this, _r, void 0));
    }),
    (vd = function () {
      E(this, Or) && (clearInterval(E(this, Or)), F(this, Or, void 0));
    }),
    (yd = function () {
      const t = E(this, Tt).getQueryCache().build(E(this, Tt), this.options);
      if (t === E(this, Se)) return;
      const r = E(this, Se);
      F(this, Se, t),
        F(this, il, t.state),
        this.hasListeners() &&
          (r == null || r.removeObserver(this), t.addObserver(this));
    }),
    (c0 = function (t) {
      Je.batch(() => {
        t.listeners &&
          this.listeners.forEach((r) => {
            r(E(this, gt));
          }),
          E(this, Tt)
            .getQueryCache()
            .notify({ query: E(this, Se), type: "observerResultsUpdated" });
      });
    }),
    Py);
function Z_(i, t) {
  return (
    tn(t.enabled, i) !== !1 &&
    i.state.data === void 0 &&
    !(i.state.status === "error" && t.retryOnMount === !1)
  );
}
function Av(i, t) {
  return Z_(i, t) || (i.state.data !== void 0 && bd(i, t, t.refetchOnMount));
}
function bd(i, t, r) {
  if (tn(t.enabled, i) !== !1) {
    const s = typeof r == "function" ? r(i) : r;
    return s === "always" || (s !== !1 && Jd(i, t));
  }
  return !1;
}
function Nv(i, t, r, s) {
  return (
    (i !== t || tn(s.enabled, i) === !1) &&
    (!r.suspense || i.state.status !== "error") &&
    Jd(i, r)
  );
}
function Jd(i, t) {
  return tn(t.enabled, i) !== !1 && i.isStaleByTime(ma(t.staleTime, i));
}
function $_(i, t) {
  return !Xo(i.getCurrentResult(), t);
}
var Ii,
  Li,
  _t,
  qn,
  Fn,
  Ho,
  Sd,
  qy,
  J_ =
    ((qy = class extends ja {
      constructor(r, s) {
        super();
        J(this, Fn);
        J(this, Ii);
        J(this, Li);
        J(this, _t);
        J(this, qn);
        F(this, Ii, r),
          this.setOptions(s),
          this.bindMethods(),
          de(this, Fn, Ho).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(r) {
        var o;
        const s = this.options;
        (this.options = E(this, Ii).defaultMutationOptions(r)),
          Xo(this.options, s) ||
            E(this, Ii)
              .getMutationCache()
              .notify({
                type: "observerOptionsUpdated",
                mutation: E(this, _t),
                observer: this,
              }),
          s != null &&
          s.mutationKey &&
          this.options.mutationKey &&
          Cr(s.mutationKey) !== Cr(this.options.mutationKey)
            ? this.reset()
            : ((o = E(this, _t)) == null ? void 0 : o.state.status) ===
                "pending" && E(this, _t).setOptions(this.options);
      }
      onUnsubscribe() {
        var r;
        this.hasListeners() ||
          (r = E(this, _t)) == null ||
          r.removeObserver(this);
      }
      onMutationUpdate(r) {
        de(this, Fn, Ho).call(this), de(this, Fn, Sd).call(this, r);
      }
      getCurrentResult() {
        return E(this, Li);
      }
      reset() {
        var r;
        (r = E(this, _t)) == null || r.removeObserver(this),
          F(this, _t, void 0),
          de(this, Fn, Ho).call(this),
          de(this, Fn, Sd).call(this);
      }
      mutate(r, s) {
        var o;
        return (
          F(this, qn, s),
          (o = E(this, _t)) == null || o.removeObserver(this),
          F(
            this,
            _t,
            E(this, Ii).getMutationCache().build(E(this, Ii), this.options)
          ),
          E(this, _t).addObserver(this),
          E(this, _t).execute(r)
        );
      }
    }),
    (Ii = new WeakMap()),
    (Li = new WeakMap()),
    (_t = new WeakMap()),
    (qn = new WeakMap()),
    (Fn = new WeakSet()),
    (Ho = function () {
      var s;
      const r = ((s = E(this, _t)) == null ? void 0 : s.state) ?? u0();
      F(this, Li, {
        ...r,
        isPending: r.status === "pending",
        isSuccess: r.status === "success",
        isError: r.status === "error",
        isIdle: r.status === "idle",
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (Sd = function (r) {
      Je.batch(() => {
        var s, o, c, d, h, g, m, y;
        if (E(this, qn) && this.hasListeners()) {
          const b = E(this, Li).variables,
            w = E(this, Li).context;
          (r == null ? void 0 : r.type) === "success"
            ? ((o = (s = E(this, qn)).onSuccess) == null ||
                o.call(s, r.data, b, w),
              (d = (c = E(this, qn)).onSettled) == null ||
                d.call(c, r.data, null, b, w))
            : (r == null ? void 0 : r.type) === "error" &&
              ((g = (h = E(this, qn)).onError) == null ||
                g.call(h, r.error, b, w),
              (y = (m = E(this, qn)).onSettled) == null ||
                y.call(m, void 0, r.error, b, w));
        }
        this.listeners.forEach((b) => {
          b(E(this, Li));
        });
      });
    }),
    qy),
  f0 = x.createContext(void 0),
  sl = (i) => {
    const t = x.useContext(f0);
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  W_ = ({ client: i, children: t }) => (
    x.useEffect(
      () => (
        i.mount(),
        () => {
          i.unmount();
        }
      ),
      [i]
    ),
    Q.jsx(f0.Provider, { value: i, children: t })
  ),
  d0 = x.createContext(!1),
  eO = () => x.useContext(d0);
d0.Provider;
function tO() {
  let i = !1;
  return {
    clearReset: () => {
      i = !1;
    },
    reset: () => {
      i = !0;
    },
    isReset: () => i,
  };
}
var nO = x.createContext(tO()),
  iO = () => x.useContext(nO);
function h0(i, t) {
  return typeof i == "function" ? i(...t) : !!i;
}
function Ed() {}
var rO = (i, t) => {
    (i.suspense || i.throwOnError || i.experimental_prefetchInRender) &&
      (t.isReset() || (i.retryOnMount = !1));
  },
  aO = (i) => {
    x.useEffect(() => {
      i.clearReset();
    }, [i]);
  },
  sO = ({
    result: i,
    errorResetBoundary: t,
    throwOnError: r,
    query: s,
    suspense: o,
  }) =>
    i.isError &&
    !t.isReset() &&
    !i.isFetching &&
    s &&
    ((o && i.data === void 0) || h0(r, [i.error, s])),
  lO = (i) => {
    const t = i.staleTime;
    i.suspense &&
      ((i.staleTime =
        typeof t == "function"
          ? (...r) => Math.max(t(...r), 1e3)
          : Math.max(t ?? 1e3, 1e3)),
      typeof i.gcTime == "number" && (i.gcTime = Math.max(i.gcTime, 1e3)));
  },
  oO = (i, t) => i.isLoading && i.isFetching && !t,
  uO = (i, t) => (i == null ? void 0 : i.suspense) && t.isPending,
  Mv = (i, t, r) =>
    t.fetchOptimistic(i).catch(() => {
      r.clearReset();
    });
function cO(i, t, r) {
  var b, w, A, U, N;
  const s = sl(),
    o = eO(),
    c = iO(),
    d = s.defaultQueryOptions(i);
  (w =
    (b = s.getDefaultOptions().queries) == null
      ? void 0
      : b._experimental_beforeQuery) == null || w.call(b, d),
    (d._optimisticResults = o ? "isRestoring" : "optimistic"),
    lO(d),
    rO(d, c),
    aO(c);
  const h = !s.getQueryCache().get(d.queryHash),
    [g] = x.useState(() => new t(s, d)),
    m = g.getOptimisticResult(d),
    y = !o && i.subscribed !== !1;
  if (
    (x.useSyncExternalStore(
      x.useCallback(
        (R) => {
          const k = y ? g.subscribe(Je.batchCalls(R)) : Ed;
          return g.updateResult(), k;
        },
        [g, y]
      ),
      () => g.getCurrentResult(),
      () => g.getCurrentResult()
    ),
    x.useEffect(() => {
      g.setOptions(d, { listeners: !1 });
    }, [d, g]),
    uO(d, m))
  )
    throw Mv(d, g, c);
  if (
    sO({
      result: m,
      errorResetBoundary: c,
      throwOnError: d.throwOnError,
      query: s.getQueryCache().get(d.queryHash),
      suspense: d.suspense,
    })
  )
    throw m.error;
  if (
    ((U =
      (A = s.getDefaultOptions().queries) == null
        ? void 0
        : A._experimental_afterQuery) == null || U.call(A, d, m),
    d.experimental_prefetchInRender && !Rr && oO(m, o))
  ) {
    const R = h
      ? Mv(d, g, c)
      : (N = s.getQueryCache().get(d.queryHash)) == null
      ? void 0
      : N.promise;
    R == null ||
      R.catch(Ed).finally(() => {
        g.updateResult();
      });
  }
  return d.notifyOnChangeProps ? m : g.trackResult(m);
}
function fO(i, t) {
  return cO(i, K_);
}
function Zo(i, t) {
  const r = sl(),
    [s] = x.useState(() => new J_(r, i));
  x.useEffect(() => {
    s.setOptions(i);
  }, [s, i]);
  const o = x.useSyncExternalStore(
      x.useCallback((d) => s.subscribe(Je.batchCalls(d)), [s]),
      () => s.getCurrentResult(),
      () => s.getCurrentResult()
    ),
    c = x.useCallback(
      (d, h) => {
        s.mutate(d, h).catch(Ed);
      },
      [s]
    );
  if (o.error && h0(s.options.throwOnError, [o.error])) throw o.error;
  return { ...o, mutate: c, mutateAsync: o.mutate };
}
let dO = { data: "" },
  hO = (i) =>
    typeof window == "object"
      ? (
          (i ? i.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (i || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : i || dO,
  pO = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  gO = /\/\*[^]*?\*\/|  +/g,
  xv = /\n+/g,
  _i = (i, t) => {
    let r = "",
      s = "",
      o = "";
    for (let c in i) {
      let d = i[c];
      c[0] == "@"
        ? c[1] == "i"
          ? (r = c + " " + d + ";")
          : (s +=
              c[1] == "f"
                ? _i(d, c)
                : c + "{" + _i(d, c[1] == "k" ? "" : t) + "}")
        : typeof d == "object"
        ? (s += _i(
            d,
            t
              ? t.replace(/([^,])+/g, (h) =>
                  c.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (g) =>
                    /&/.test(g) ? g.replace(/&/g, h) : h ? h + " " + g : g
                  )
                )
              : c
          ))
        : d != null &&
          ((c = /^--/.test(c) ? c : c.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (o += _i.p ? _i.p(c, d) : c + ":" + d + ";"));
    }
    return r + (t && o ? t + "{" + o + "}" : o) + s;
  },
  kn = {},
  p0 = (i) => {
    if (typeof i == "object") {
      let t = "";
      for (let r in i) t += r + p0(i[r]);
      return t;
    }
    return i;
  },
  mO = (i, t, r, s, o) => {
    let c = p0(i),
      d =
        kn[c] ||
        (kn[c] = ((g) => {
          let m = 0,
            y = 11;
          for (; m < g.length; ) y = (101 * y + g.charCodeAt(m++)) >>> 0;
          return "go" + y;
        })(c));
    if (!kn[d]) {
      let g =
        c !== i
          ? i
          : ((m) => {
              let y,
                b,
                w = [{}];
              for (; (y = pO.exec(m.replace(gO, ""))); )
                y[4]
                  ? w.shift()
                  : y[3]
                  ? ((b = y[3].replace(xv, " ").trim()),
                    w.unshift((w[0][b] = w[0][b] || {})))
                  : (w[0][y[1]] = y[2].replace(xv, " ").trim());
              return w[0];
            })(i);
      kn[d] = _i(o ? { ["@keyframes " + d]: g } : g, r ? "" : "." + d);
    }
    let h = r && kn.g ? kn.g : null;
    return (
      r && (kn.g = kn[d]),
      ((g, m, y, b) => {
        b
          ? (m.data = m.data.replace(b, g))
          : m.data.indexOf(g) === -1 && (m.data = y ? g + m.data : m.data + g);
      })(kn[d], t, s, h),
      d
    );
  },
  vO = (i, t, r) =>
    i.reduce((s, o, c) => {
      let d = t[c];
      if (d && d.call) {
        let h = d(r),
          g = (h && h.props && h.props.className) || (/^go/.test(h) && h);
        d = g
          ? "." + g
          : h && typeof h == "object"
          ? h.props
            ? ""
            : _i(h, "")
          : h === !1
          ? ""
          : h;
      }
      return s + o + (d ?? "");
    }, "");
function ou(i) {
  let t = this || {},
    r = i.call ? i(t.p) : i;
  return mO(
    r.unshift
      ? r.raw
        ? vO(r, [].slice.call(arguments, 1), t.p)
        : r.reduce((s, o) => Object.assign(s, o && o.call ? o(t.p) : o), {})
      : r,
    hO(t.target),
    t.g,
    t.o,
    t.k
  );
}
let g0, Td, _d;
ou.bind({ g: 1 });
let Xn = ou.bind({ k: 1 });
function yO(i, t, r, s) {
  (_i.p = t), (g0 = i), (Td = r), (_d = s);
}
function qi(i, t) {
  let r = this || {};
  return function () {
    let s = arguments;
    function o(c, d) {
      let h = Object.assign({}, c),
        g = h.className || o.className;
      (r.p = Object.assign({ theme: Td && Td() }, h)),
        (r.o = / *go\d+/.test(g)),
        (h.className = ou.apply(r, s) + (g ? " " + g : ""));
      let m = i;
      return (
        i[0] && ((m = h.as || i), delete h.as), _d && m[0] && _d(h), g0(m, h)
      );
    }
    return o;
  };
}
var bO = (i) => typeof i == "function",
  $o = (i, t) => (bO(i) ? i(t) : i),
  SO = (() => {
    let i = 0;
    return () => (++i).toString();
  })(),
  m0 = (() => {
    let i;
    return () => {
      if (i === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        i = !t || t.matches;
      }
      return i;
    };
  })(),
  EO = 20,
  v0 = (i, t) => {
    switch (t.type) {
      case 0:
        return { ...i, toasts: [t.toast, ...i.toasts].slice(0, EO) };
      case 1:
        return {
          ...i,
          toasts: i.toasts.map((c) =>
            c.id === t.toast.id ? { ...c, ...t.toast } : c
          ),
        };
      case 2:
        let { toast: r } = t;
        return v0(i, {
          type: i.toasts.find((c) => c.id === r.id) ? 1 : 0,
          toast: r,
        });
      case 3:
        let { toastId: s } = t;
        return {
          ...i,
          toasts: i.toasts.map((c) =>
            c.id === s || s === void 0
              ? { ...c, dismissed: !0, visible: !1 }
              : c
          ),
        };
      case 4:
        return t.toastId === void 0
          ? { ...i, toasts: [] }
          : { ...i, toasts: i.toasts.filter((c) => c.id !== t.toastId) };
      case 5:
        return { ...i, pausedAt: t.time };
      case 6:
        let o = t.time - (i.pausedAt || 0);
        return {
          ...i,
          pausedAt: void 0,
          toasts: i.toasts.map((c) => ({
            ...c,
            pauseDuration: c.pauseDuration + o,
          })),
        };
    }
  },
  jo = [],
  pr = { toasts: [], pausedAt: void 0 },
  xr = (i) => {
    (pr = v0(pr, i)),
      jo.forEach((t) => {
        t(pr);
      });
  },
  TO = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  _O = (i = {}) => {
    let [t, r] = x.useState(pr),
      s = x.useRef(pr);
    x.useEffect(
      () => (
        s.current !== pr && r(pr),
        jo.push(r),
        () => {
          let c = jo.indexOf(r);
          c > -1 && jo.splice(c, 1);
        }
      ),
      []
    );
    let o = t.toasts.map((c) => {
      var d, h, g;
      return {
        ...i,
        ...i[c.type],
        ...c,
        removeDelay:
          c.removeDelay ||
          ((d = i[c.type]) == null ? void 0 : d.removeDelay) ||
          (i == null ? void 0 : i.removeDelay),
        duration:
          c.duration ||
          ((h = i[c.type]) == null ? void 0 : h.duration) ||
          (i == null ? void 0 : i.duration) ||
          TO[c.type],
        style: {
          ...i.style,
          ...((g = i[c.type]) == null ? void 0 : g.style),
          ...c.style,
        },
      };
    });
    return { ...t, toasts: o };
  },
  OO = (i, t = "blank", r) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: i,
    pauseDuration: 0,
    ...r,
    id: (r == null ? void 0 : r.id) || SO(),
  }),
  ll = (i) => (t, r) => {
    let s = OO(t, i, r);
    return xr({ type: 2, toast: s }), s.id;
  },
  je = (i, t) => ll("blank")(i, t);
je.error = ll("error");
je.success = ll("success");
je.loading = ll("loading");
je.custom = ll("custom");
je.dismiss = (i) => {
  xr({ type: 3, toastId: i });
};
je.remove = (i) => xr({ type: 4, toastId: i });
je.promise = (i, t, r) => {
  let s = je.loading(t.loading, { ...r, ...(r == null ? void 0 : r.loading) });
  return (
    typeof i == "function" && (i = i()),
    i
      .then((o) => {
        let c = t.success ? $o(t.success, o) : void 0;
        return (
          c
            ? je.success(c, {
                id: s,
                ...r,
                ...(r == null ? void 0 : r.success),
              })
            : je.dismiss(s),
          o
        );
      })
      .catch((o) => {
        let c = t.error ? $o(t.error, o) : void 0;
        c
          ? je.error(c, { id: s, ...r, ...(r == null ? void 0 : r.error) })
          : je.dismiss(s);
      }),
    i
  );
};
var DO = (i, t) => {
    xr({ type: 1, toast: { id: i, height: t } });
  },
  wO = () => {
    xr({ type: 5, time: Date.now() });
  },
  Qs = new Map(),
  RO = 1e3,
  CO = (i, t = RO) => {
    if (Qs.has(i)) return;
    let r = setTimeout(() => {
      Qs.delete(i), xr({ type: 4, toastId: i });
    }, t);
    Qs.set(i, r);
  },
  AO = (i) => {
    let { toasts: t, pausedAt: r } = _O(i);
    x.useEffect(() => {
      if (r) return;
      let c = Date.now(),
        d = t.map((h) => {
          if (h.duration === 1 / 0) return;
          let g = (h.duration || 0) + h.pauseDuration - (c - h.createdAt);
          if (g < 0) {
            h.visible && je.dismiss(h.id);
            return;
          }
          return setTimeout(() => je.dismiss(h.id), g);
        });
      return () => {
        d.forEach((h) => h && clearTimeout(h));
      };
    }, [t, r]);
    let s = x.useCallback(() => {
        r && xr({ type: 6, time: Date.now() });
      }, [r]),
      o = x.useCallback(
        (c, d) => {
          let {
              reverseOrder: h = !1,
              gutter: g = 8,
              defaultPosition: m,
            } = d || {},
            y = t.filter(
              (A) => (A.position || m) === (c.position || m) && A.height
            ),
            b = y.findIndex((A) => A.id === c.id),
            w = y.filter((A, U) => U < b && A.visible).length;
          return y
            .filter((A) => A.visible)
            .slice(...(h ? [w + 1] : [0, w]))
            .reduce((A, U) => A + (U.height || 0) + g, 0);
        },
        [t]
      );
    return (
      x.useEffect(() => {
        t.forEach((c) => {
          if (c.dismissed) CO(c.id, c.removeDelay);
          else {
            let d = Qs.get(c.id);
            d && (clearTimeout(d), Qs.delete(c.id));
          }
        });
      }, [t]),
      {
        toasts: t,
        handlers: {
          updateHeight: DO,
          startPause: wO,
          endPause: s,
          calculateOffset: o,
        },
      }
    );
  },
  NO = Xn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  MO = Xn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  xO = Xn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  UO = qi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(i) => i.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${NO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${MO} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(i) => i.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${xO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  IO = Xn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  LO = qi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(i) => i.secondary || "#e0e0e0"};
  border-right-color: ${(i) => i.primary || "#616161"};
  animation: ${IO} 1s linear infinite;
`,
  zO = Xn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  HO = Xn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  jO = qi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(i) => i.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${zO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${HO} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(i) => i.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  kO = qi("div")`
  position: absolute;
`,
  BO = qi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  PO = Xn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  qO = qi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${PO} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  VO = ({ toast: i }) => {
    let { icon: t, type: r, iconTheme: s } = i;
    return t !== void 0
      ? typeof t == "string"
        ? x.createElement(qO, null, t)
        : t
      : r === "blank"
      ? null
      : x.createElement(
          BO,
          null,
          x.createElement(LO, { ...s }),
          r !== "loading" &&
            x.createElement(
              kO,
              null,
              r === "error"
                ? x.createElement(UO, { ...s })
                : x.createElement(jO, { ...s })
            )
        );
  },
  GO = (i) => `
0% {transform: translate3d(0,${i * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  QO = (i) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${i * -150}%,-1px) scale(.6); opacity:0;}
`,
  YO = "0%{opacity:0;} 100%{opacity:1;}",
  FO = "0%{opacity:1;} 100%{opacity:0;}",
  XO = qi("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  KO = qi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  ZO = (i, t) => {
    let r = i.includes("top") ? 1 : -1,
      [s, o] = m0() ? [YO, FO] : [GO(r), QO(r)];
    return {
      animation: t
        ? `${Xn(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Xn(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  $O = x.memo(({ toast: i, position: t, style: r, children: s }) => {
    let o = i.height
        ? ZO(i.position || t || "top-center", i.visible)
        : { opacity: 0 },
      c = x.createElement(VO, { toast: i }),
      d = x.createElement(KO, { ...i.ariaProps }, $o(i.message, i));
    return x.createElement(
      XO,
      { className: i.className, style: { ...o, ...r, ...i.style } },
      typeof s == "function"
        ? s({ icon: c, message: d })
        : x.createElement(x.Fragment, null, c, d)
    );
  });
yO(x.createElement);
var JO = ({
    id: i,
    className: t,
    style: r,
    onHeightUpdate: s,
    children: o,
  }) => {
    let c = x.useCallback(
      (d) => {
        if (d) {
          let h = () => {
            let g = d.getBoundingClientRect().height;
            s(i, g);
          };
          h(),
            new MutationObserver(h).observe(d, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [i, s]
    );
    return x.createElement("div", { ref: c, className: t, style: r }, o);
  },
  WO = (i, t) => {
    let r = i.includes("top"),
      s = r ? { top: 0 } : { bottom: 0 },
      o = i.includes("center")
        ? { justifyContent: "center" }
        : i.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: m0() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (r ? 1 : -1)}px)`,
      ...s,
      ...o,
    };
  },
  e1 = ou`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Uo = 16,
  t1 = ({
    reverseOrder: i,
    position: t = "top-center",
    toastOptions: r,
    gutter: s,
    children: o,
    containerStyle: c,
    containerClassName: d,
  }) => {
    let { toasts: h, handlers: g } = AO(r);
    return x.createElement(
      "div",
      {
        id: "_rht_toaster",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Uo,
          left: Uo,
          right: Uo,
          bottom: Uo,
          pointerEvents: "none",
          ...c,
        },
        className: d,
        onMouseEnter: g.startPause,
        onMouseLeave: g.endPause,
      },
      h.map((m) => {
        let y = m.position || t,
          b = g.calculateOffset(m, {
            reverseOrder: i,
            gutter: s,
            defaultPosition: t,
          }),
          w = WO(y, b);
        return x.createElement(
          JO,
          {
            id: m.id,
            key: m.id,
            onHeightUpdate: g.updateHeight,
            className: m.visible ? e1 : "",
            style: w,
          },
          m.type === "custom"
            ? $o(m.message, m)
            : o
            ? o(m)
            : x.createElement($O, { toast: m, position: y })
        );
      })
    );
  },
  Uv = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const y0 = function (i) {
    const t = [];
    let r = 0;
    for (let s = 0; s < i.length; s++) {
      let o = i.charCodeAt(s);
      o < 128
        ? (t[r++] = o)
        : o < 2048
        ? ((t[r++] = (o >> 6) | 192), (t[r++] = (o & 63) | 128))
        : (o & 64512) === 55296 &&
          s + 1 < i.length &&
          (i.charCodeAt(s + 1) & 64512) === 56320
        ? ((o = 65536 + ((o & 1023) << 10) + (i.charCodeAt(++s) & 1023)),
          (t[r++] = (o >> 18) | 240),
          (t[r++] = ((o >> 12) & 63) | 128),
          (t[r++] = ((o >> 6) & 63) | 128),
          (t[r++] = (o & 63) | 128))
        : ((t[r++] = (o >> 12) | 224),
          (t[r++] = ((o >> 6) & 63) | 128),
          (t[r++] = (o & 63) | 128));
    }
    return t;
  },
  n1 = function (i) {
    const t = [];
    let r = 0,
      s = 0;
    for (; r < i.length; ) {
      const o = i[r++];
      if (o < 128) t[s++] = String.fromCharCode(o);
      else if (o > 191 && o < 224) {
        const c = i[r++];
        t[s++] = String.fromCharCode(((o & 31) << 6) | (c & 63));
      } else if (o > 239 && o < 365) {
        const c = i[r++],
          d = i[r++],
          h = i[r++],
          g =
            (((o & 7) << 18) | ((c & 63) << 12) | ((d & 63) << 6) | (h & 63)) -
            65536;
        (t[s++] = String.fromCharCode(55296 + (g >> 10))),
          (t[s++] = String.fromCharCode(56320 + (g & 1023)));
      } else {
        const c = i[r++],
          d = i[r++];
        t[s++] = String.fromCharCode(
          ((o & 15) << 12) | ((c & 63) << 6) | (d & 63)
        );
      }
    }
    return t.join("");
  },
  b0 = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(i, t) {
      if (!Array.isArray(i))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const r = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        s = [];
      for (let o = 0; o < i.length; o += 3) {
        const c = i[o],
          d = o + 1 < i.length,
          h = d ? i[o + 1] : 0,
          g = o + 2 < i.length,
          m = g ? i[o + 2] : 0,
          y = c >> 2,
          b = ((c & 3) << 4) | (h >> 4);
        let w = ((h & 15) << 2) | (m >> 6),
          A = m & 63;
        g || ((A = 64), d || (w = 64)), s.push(r[y], r[b], r[w], r[A]);
      }
      return s.join("");
    },
    encodeString(i, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(i)
        : this.encodeByteArray(y0(i), t);
    },
    decodeString(i, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(i)
        : n1(this.decodeStringToByteArray(i, t));
    },
    decodeStringToByteArray(i, t) {
      this.init_();
      const r = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        s = [];
      for (let o = 0; o < i.length; ) {
        const c = r[i.charAt(o++)],
          h = o < i.length ? r[i.charAt(o)] : 0;
        ++o;
        const m = o < i.length ? r[i.charAt(o)] : 64;
        ++o;
        const b = o < i.length ? r[i.charAt(o)] : 64;
        if ((++o, c == null || h == null || m == null || b == null))
          throw new i1();
        const w = (c << 2) | (h >> 4);
        if ((s.push(w), m !== 64)) {
          const A = ((h << 4) & 240) | (m >> 2);
          if ((s.push(A), b !== 64)) {
            const U = ((m << 6) & 192) | b;
            s.push(U);
          }
        }
      }
      return s;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let i = 0; i < this.ENCODED_VALS.length; i++)
          (this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i)),
            (this.charToByteMap_[this.byteToCharMap_[i]] = i),
            (this.byteToCharMapWebSafe_[i] =
              this.ENCODED_VALS_WEBSAFE.charAt(i)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i),
            i >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i));
      }
    },
  };
class i1 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const r1 = function (i) {
    const t = y0(i);
    return b0.encodeByteArray(t, !0);
  },
  S0 = function (i) {
    return r1(i).replace(/\./g, "");
  },
  E0 = function (i) {
    try {
      return b0.decodeString(i, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function a1() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const s1 = () => a1().__FIREBASE_DEFAULTS__,
  l1 = () => {
    if (typeof process > "u" || typeof Uv > "u") return;
    const i = Uv.__FIREBASE_DEFAULTS__;
    if (i) return JSON.parse(i);
  },
  o1 = () => {
    if (typeof document > "u") return;
    let i;
    try {
      i = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = i && E0(i[1]);
    return t && JSON.parse(t);
  },
  Wd = () => {
    try {
      return s1() || l1() || o1();
    } catch (i) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);
      return;
    }
  },
  u1 = (i) => {
    var t, r;
    return (r =
      (t = Wd()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || r === void 0
      ? void 0
      : r[i];
  },
  T0 = () => {
    var i;
    return (i = Wd()) === null || i === void 0 ? void 0 : i.config;
  },
  _0 = (i) => {
    var t;
    return (t = Wd()) === null || t === void 0 ? void 0 : t[`_${i}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c1 {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, r) => {
        (this.resolve = t), (this.reject = r);
      }));
  }
  wrapCallback(t) {
    return (r, s) => {
      r ? this.reject(r) : this.resolve(s),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(r) : t(r, s));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function mt() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function f1() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())
  );
}
function d1() {
  return typeof navigator < "u" && navigator.userAgent === "Cloudflare-Workers";
}
function h1() {
  const i =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof i == "object" && i.id !== void 0;
}
function p1() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function g1() {
  const i = mt();
  return i.indexOf("MSIE ") >= 0 || i.indexOf("Trident/") >= 0;
}
function m1() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function v1() {
  return new Promise((i, t) => {
    try {
      let r = !0;
      const s = "validate-browser-context-for-indexeddb-analytics-module",
        o = self.indexedDB.open(s);
      (o.onsuccess = () => {
        o.result.close(), r || self.indexedDB.deleteDatabase(s), i(!0);
      }),
        (o.onupgradeneeded = () => {
          r = !1;
        }),
        (o.onerror = () => {
          var c;
          t(
            ((c = o.error) === null || c === void 0 ? void 0 : c.message) || ""
          );
        });
    } catch (r) {
      t(r);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const y1 = "FirebaseError";
class Vi extends Error {
  constructor(t, r, s) {
    super(r),
      (this.code = t),
      (this.customData = s),
      (this.name = y1),
      Object.setPrototypeOf(this, Vi.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, ol.prototype.create);
  }
}
class ol {
  constructor(t, r, s) {
    (this.service = t), (this.serviceName = r), (this.errors = s);
  }
  create(t, ...r) {
    const s = r[0] || {},
      o = `${this.service}/${t}`,
      c = this.errors[t],
      d = c ? b1(c, s) : "Error",
      h = `${this.serviceName}: ${d} (${o}).`;
    return new Vi(o, h, s);
  }
}
function b1(i, t) {
  return i.replace(S1, (r, s) => {
    const o = t[s];
    return o != null ? String(o) : `<${s}?>`;
  });
}
const S1 = /\{\$([^}]+)}/g;
function E1(i) {
  for (const t in i) if (Object.prototype.hasOwnProperty.call(i, t)) return !1;
  return !0;
}
function Jo(i, t) {
  if (i === t) return !0;
  const r = Object.keys(i),
    s = Object.keys(t);
  for (const o of r) {
    if (!s.includes(o)) return !1;
    const c = i[o],
      d = t[o];
    if (Iv(c) && Iv(d)) {
      if (!Jo(c, d)) return !1;
    } else if (c !== d) return !1;
  }
  for (const o of s) if (!r.includes(o)) return !1;
  return !0;
}
function Iv(i) {
  return i !== null && typeof i == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ul(i) {
  const t = [];
  for (const [r, s] of Object.entries(i))
    Array.isArray(s)
      ? s.forEach((o) => {
          t.push(encodeURIComponent(r) + "=" + encodeURIComponent(o));
        })
      : t.push(encodeURIComponent(r) + "=" + encodeURIComponent(s));
  return t.length ? "&" + t.join("&") : "";
}
function T1(i, t) {
  const r = new _1(i, t);
  return r.subscribe.bind(r);
}
class _1 {
  constructor(t, r) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = r),
      this.task
        .then(() => {
          t(this);
        })
        .catch((s) => {
          this.error(s);
        });
  }
  next(t) {
    this.forEachObserver((r) => {
      r.next(t);
    });
  }
  error(t) {
    this.forEachObserver((r) => {
      r.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, r, s) {
    let o;
    if (t === void 0 && r === void 0 && s === void 0)
      throw new Error("Missing Observer.");
    O1(t, ["next", "error", "complete"])
      ? (o = t)
      : (o = { next: t, error: r, complete: s }),
      o.next === void 0 && (o.next = qf),
      o.error === void 0 && (o.error = qf),
      o.complete === void 0 && (o.complete = qf);
    const c = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? o.error(this.finalError) : o.complete();
          } catch {}
        }),
      this.observers.push(o),
      c
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let r = 0; r < this.observers.length; r++) this.sendOne(r, t);
  }
  sendOne(t, r) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          r(this.observers[t]);
        } catch (s) {
          typeof console < "u" && console.error && console.error(s);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function O1(i, t) {
  if (typeof i != "object" || i === null) return !1;
  for (const r of t) if (r in i && typeof i[r] == "function") return !0;
  return !1;
}
function qf() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gi(i) {
  return i && i._delegate ? i._delegate : i;
}
class Ia {
  constructor(t, r, s) {
    (this.name = t),
      (this.instanceFactory = r),
      (this.type = s),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hr = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class D1 {
  constructor(t, r) {
    (this.name = t),
      (this.container = r),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const r = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(r)) {
      const s = new c1();
      if (
        (this.instancesDeferred.set(r, s),
        this.isInitialized(r) || this.shouldAutoInitialize())
      )
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: r });
          o && s.resolve(o);
        } catch {}
    }
    return this.instancesDeferred.get(r).promise;
  }
  getImmediate(t) {
    var r;
    const s = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      o =
        (r = t == null ? void 0 : t.optional) !== null && r !== void 0 ? r : !1;
    if (this.isInitialized(s) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: s });
      } catch (c) {
        if (o) return null;
        throw c;
      }
    else {
      if (o) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (R1(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: hr });
        } catch {}
      for (const [r, s] of this.instancesDeferred.entries()) {
        const o = this.normalizeInstanceIdentifier(r);
        try {
          const c = this.getOrInitializeService({ instanceIdentifier: o });
          s.resolve(c);
        } catch {}
      }
    }
  }
  clearInstance(t = hr) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((r) => "INTERNAL" in r).map((r) => r.INTERNAL.delete()),
      ...t.filter((r) => "_delete" in r).map((r) => r._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = hr) {
    return this.instances.has(t);
  }
  getOptions(t = hr) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: r = {} } = t,
      s = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(s))
      throw Error(`${this.name}(${s}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const o = this.getOrInitializeService({
      instanceIdentifier: s,
      options: r,
    });
    for (const [c, d] of this.instancesDeferred.entries()) {
      const h = this.normalizeInstanceIdentifier(c);
      s === h && d.resolve(o);
    }
    return o;
  }
  onInit(t, r) {
    var s;
    const o = this.normalizeInstanceIdentifier(r),
      c =
        (s = this.onInitCallbacks.get(o)) !== null && s !== void 0
          ? s
          : new Set();
    c.add(t), this.onInitCallbacks.set(o, c);
    const d = this.instances.get(o);
    return (
      d && t(d, o),
      () => {
        c.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, r) {
    const s = this.onInitCallbacks.get(r);
    if (s)
      for (const o of s)
        try {
          o(t, r);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: r = {} }) {
    let s = this.instances.get(t);
    if (
      !s &&
      this.component &&
      ((s = this.component.instanceFactory(this.container, {
        instanceIdentifier: w1(t),
        options: r,
      })),
      this.instances.set(t, s),
      this.instancesOptions.set(t, r),
      this.invokeOnInitCallbacks(s, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, s);
      } catch {}
    return s || null;
  }
  normalizeInstanceIdentifier(t = hr) {
    return this.component ? (this.component.multipleInstances ? t : hr) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function w1(i) {
  return i === hr ? void 0 : i;
}
function R1(i) {
  return i.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C1 {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const r = this.getProvider(t.name);
    if (r.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    r.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const r = new D1(t, this);
    return this.providers.set(t, r), r;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ne;
(function (i) {
  (i[(i.DEBUG = 0)] = "DEBUG"),
    (i[(i.VERBOSE = 1)] = "VERBOSE"),
    (i[(i.INFO = 2)] = "INFO"),
    (i[(i.WARN = 3)] = "WARN"),
    (i[(i.ERROR = 4)] = "ERROR"),
    (i[(i.SILENT = 5)] = "SILENT");
})(Ne || (Ne = {}));
const A1 = {
    debug: Ne.DEBUG,
    verbose: Ne.VERBOSE,
    info: Ne.INFO,
    warn: Ne.WARN,
    error: Ne.ERROR,
    silent: Ne.SILENT,
  },
  N1 = Ne.INFO,
  M1 = {
    [Ne.DEBUG]: "log",
    [Ne.VERBOSE]: "log",
    [Ne.INFO]: "info",
    [Ne.WARN]: "warn",
    [Ne.ERROR]: "error",
  },
  x1 = (i, t, ...r) => {
    if (t < i.logLevel) return;
    const s = new Date().toISOString(),
      o = M1[t];
    if (o) console[o](`[${s}]  ${i.name}:`, ...r);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class O0 {
  constructor(t) {
    (this.name = t),
      (this._logLevel = N1),
      (this._logHandler = x1),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in Ne))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? A1[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, Ne.DEBUG, ...t),
      this._logHandler(this, Ne.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, Ne.VERBOSE, ...t),
      this._logHandler(this, Ne.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, Ne.INFO, ...t),
      this._logHandler(this, Ne.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, Ne.WARN, ...t),
      this._logHandler(this, Ne.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, Ne.ERROR, ...t),
      this._logHandler(this, Ne.ERROR, ...t);
  }
}
const U1 = (i, t) => t.some((r) => i instanceof r);
let Lv, zv;
function I1() {
  return (
    Lv ||
    (Lv = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function L1() {
  return (
    zv ||
    (zv = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const D0 = new WeakMap(),
  Od = new WeakMap(),
  w0 = new WeakMap(),
  Vf = new WeakMap(),
  eh = new WeakMap();
function z1(i) {
  const t = new Promise((r, s) => {
    const o = () => {
        i.removeEventListener("success", c), i.removeEventListener("error", d);
      },
      c = () => {
        r(ji(i.result)), o();
      },
      d = () => {
        s(i.error), o();
      };
    i.addEventListener("success", c), i.addEventListener("error", d);
  });
  return (
    t
      .then((r) => {
        r instanceof IDBCursor && D0.set(r, i);
      })
      .catch(() => {}),
    eh.set(t, i),
    t
  );
}
function H1(i) {
  if (Od.has(i)) return;
  const t = new Promise((r, s) => {
    const o = () => {
        i.removeEventListener("complete", c),
          i.removeEventListener("error", d),
          i.removeEventListener("abort", d);
      },
      c = () => {
        r(), o();
      },
      d = () => {
        s(i.error || new DOMException("AbortError", "AbortError")), o();
      };
    i.addEventListener("complete", c),
      i.addEventListener("error", d),
      i.addEventListener("abort", d);
  });
  Od.set(i, t);
}
let Dd = {
  get(i, t, r) {
    if (i instanceof IDBTransaction) {
      if (t === "done") return Od.get(i);
      if (t === "objectStoreNames") return i.objectStoreNames || w0.get(i);
      if (t === "store")
        return r.objectStoreNames[1]
          ? void 0
          : r.objectStore(r.objectStoreNames[0]);
    }
    return ji(i[t]);
  },
  set(i, t, r) {
    return (i[t] = r), !0;
  },
  has(i, t) {
    return i instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in i;
  },
};
function j1(i) {
  Dd = i(Dd);
}
function k1(i) {
  return i === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...r) {
        const s = i.call(Gf(this), t, ...r);
        return w0.set(s, t.sort ? t.sort() : [t]), ji(s);
      }
    : L1().includes(i)
    ? function (...t) {
        return i.apply(Gf(this), t), ji(D0.get(this));
      }
    : function (...t) {
        return ji(i.apply(Gf(this), t));
      };
}
function B1(i) {
  return typeof i == "function"
    ? k1(i)
    : (i instanceof IDBTransaction && H1(i),
      U1(i, I1()) ? new Proxy(i, Dd) : i);
}
function ji(i) {
  if (i instanceof IDBRequest) return z1(i);
  if (Vf.has(i)) return Vf.get(i);
  const t = B1(i);
  return t !== i && (Vf.set(i, t), eh.set(t, i)), t;
}
const Gf = (i) => eh.get(i);
function P1(i, t, { blocked: r, upgrade: s, blocking: o, terminated: c } = {}) {
  const d = indexedDB.open(i, t),
    h = ji(d);
  return (
    s &&
      d.addEventListener("upgradeneeded", (g) => {
        s(ji(d.result), g.oldVersion, g.newVersion, ji(d.transaction), g);
      }),
    r && d.addEventListener("blocked", (g) => r(g.oldVersion, g.newVersion, g)),
    h
      .then((g) => {
        c && g.addEventListener("close", () => c()),
          o &&
            g.addEventListener("versionchange", (m) =>
              o(m.oldVersion, m.newVersion, m)
            );
      })
      .catch(() => {}),
    h
  );
}
const q1 = ["get", "getKey", "getAll", "getAllKeys", "count"],
  V1 = ["put", "add", "delete", "clear"],
  Qf = new Map();
function Hv(i, t) {
  if (!(i instanceof IDBDatabase && !(t in i) && typeof t == "string")) return;
  if (Qf.get(t)) return Qf.get(t);
  const r = t.replace(/FromIndex$/, ""),
    s = t !== r,
    o = V1.includes(r);
  if (
    !(r in (s ? IDBIndex : IDBObjectStore).prototype) ||
    !(o || q1.includes(r))
  )
    return;
  const c = async function (d, ...h) {
    const g = this.transaction(d, o ? "readwrite" : "readonly");
    let m = g.store;
    return (
      s && (m = m.index(h.shift())),
      (await Promise.all([m[r](...h), o && g.done]))[0]
    );
  };
  return Qf.set(t, c), c;
}
j1((i) => ({
  ...i,
  get: (t, r, s) => Hv(t, r) || i.get(t, r, s),
  has: (t, r) => !!Hv(t, r) || i.has(t, r),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class G1 {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((r) => {
        if (Q1(r)) {
          const s = r.getImmediate();
          return `${s.library}/${s.version}`;
        } else return null;
      })
      .filter((r) => r)
      .join(" ");
  }
}
function Q1(i) {
  const t = i.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const wd = "@firebase/app",
  jv = "0.11.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kn = new O0("@firebase/app"),
  Y1 = "@firebase/app-compat",
  F1 = "@firebase/analytics-compat",
  X1 = "@firebase/analytics",
  K1 = "@firebase/app-check-compat",
  Z1 = "@firebase/app-check",
  $1 = "@firebase/auth",
  J1 = "@firebase/auth-compat",
  W1 = "@firebase/database",
  eD = "@firebase/data-connect",
  tD = "@firebase/database-compat",
  nD = "@firebase/functions",
  iD = "@firebase/functions-compat",
  rD = "@firebase/installations",
  aD = "@firebase/installations-compat",
  sD = "@firebase/messaging",
  lD = "@firebase/messaging-compat",
  oD = "@firebase/performance",
  uD = "@firebase/performance-compat",
  cD = "@firebase/remote-config",
  fD = "@firebase/remote-config-compat",
  dD = "@firebase/storage",
  hD = "@firebase/storage-compat",
  pD = "@firebase/firestore",
  gD = "@firebase/vertexai",
  mD = "@firebase/firestore-compat",
  vD = "firebase",
  yD = "11.3.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rd = "[DEFAULT]",
  bD = {
    [wd]: "fire-core",
    [Y1]: "fire-core-compat",
    [X1]: "fire-analytics",
    [F1]: "fire-analytics-compat",
    [Z1]: "fire-app-check",
    [K1]: "fire-app-check-compat",
    [$1]: "fire-auth",
    [J1]: "fire-auth-compat",
    [W1]: "fire-rtdb",
    [eD]: "fire-data-connect",
    [tD]: "fire-rtdb-compat",
    [nD]: "fire-fn",
    [iD]: "fire-fn-compat",
    [rD]: "fire-iid",
    [aD]: "fire-iid-compat",
    [sD]: "fire-fcm",
    [lD]: "fire-fcm-compat",
    [oD]: "fire-perf",
    [uD]: "fire-perf-compat",
    [cD]: "fire-rc",
    [fD]: "fire-rc-compat",
    [dD]: "fire-gcs",
    [hD]: "fire-gcs-compat",
    [pD]: "fire-fst",
    [mD]: "fire-fst-compat",
    [gD]: "fire-vertex",
    "fire-js": "fire-js",
    [vD]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wo = new Map(),
  SD = new Map(),
  Cd = new Map();
function kv(i, t) {
  try {
    i.container.addComponent(t);
  } catch (r) {
    Kn.debug(
      `Component ${t.name} failed to register with FirebaseApp ${i.name}`,
      r
    );
  }
}
function $s(i) {
  const t = i.name;
  if (Cd.has(t))
    return (
      Kn.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Cd.set(t, i);
  for (const r of Wo.values()) kv(r, i);
  for (const r of SD.values()) kv(r, i);
  return !0;
}
function R0(i, t) {
  const r = i.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return r && r.triggerHeartbeat(), i.container.getProvider(t);
}
function yn(i) {
  return i == null ? !1 : i.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ED = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  ki = new ol("app", "Firebase", ED);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class TD {
  constructor(t, r, s) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, r)),
      (this._name = r.name),
      (this._automaticDataCollectionEnabled = r.automaticDataCollectionEnabled),
      (this._container = s),
      this.container.addComponent(new Ia("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw ki.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const cl = yD;
function C0(i, t = {}) {
  let r = i;
  typeof t != "object" && (t = { name: t });
  const s = Object.assign({ name: Rd, automaticDataCollectionEnabled: !1 }, t),
    o = s.name;
  if (typeof o != "string" || !o)
    throw ki.create("bad-app-name", { appName: String(o) });
  if ((r || (r = T0()), !r)) throw ki.create("no-options");
  const c = Wo.get(o);
  if (c) {
    if (Jo(r, c.options) && Jo(s, c.config)) return c;
    throw ki.create("duplicate-app", { appName: o });
  }
  const d = new C1(o);
  for (const g of Cd.values()) d.addComponent(g);
  const h = new TD(r, s, d);
  return Wo.set(o, h), h;
}
function _D(i = Rd) {
  const t = Wo.get(i);
  if (!t && i === Rd && T0()) return C0();
  if (!t) throw ki.create("no-app", { appName: i });
  return t;
}
function va(i, t, r) {
  var s;
  let o = (s = bD[i]) !== null && s !== void 0 ? s : i;
  r && (o += `-${r}`);
  const c = o.match(/\s|\//),
    d = t.match(/\s|\//);
  if (c || d) {
    const h = [`Unable to register library "${o}" with version "${t}":`];
    c &&
      h.push(
        `library name "${o}" contains illegal characters (whitespace or "/")`
      ),
      c && d && h.push("and"),
      d &&
        h.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      Kn.warn(h.join(" "));
    return;
  }
  $s(new Ia(`${o}-version`, () => ({ library: o, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const OD = "firebase-heartbeat-database",
  DD = 1,
  Js = "firebase-heartbeat-store";
let Yf = null;
function A0() {
  return (
    Yf ||
      (Yf = P1(OD, DD, {
        upgrade: (i, t) => {
          switch (t) {
            case 0:
              try {
                i.createObjectStore(Js);
              } catch (r) {
                console.warn(r);
              }
          }
        },
      }).catch((i) => {
        throw ki.create("idb-open", { originalErrorMessage: i.message });
      })),
    Yf
  );
}
async function wD(i) {
  try {
    const r = (await A0()).transaction(Js),
      s = await r.objectStore(Js).get(N0(i));
    return await r.done, s;
  } catch (t) {
    if (t instanceof Vi) Kn.warn(t.message);
    else {
      const r = ki.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Kn.warn(r.message);
    }
  }
}
async function Bv(i, t) {
  try {
    const s = (await A0()).transaction(Js, "readwrite");
    await s.objectStore(Js).put(t, N0(i)), await s.done;
  } catch (r) {
    if (r instanceof Vi) Kn.warn(r.message);
    else {
      const s = ki.create("idb-set", {
        originalErrorMessage: r == null ? void 0 : r.message,
      });
      Kn.warn(s.message);
    }
  }
}
function N0(i) {
  return `${i.name}!${i.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RD = 1024,
  CD = 30;
class AD {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const r = this.container.getProvider("app").getImmediate();
    (this._storage = new MD(r)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((s) => ((this._heartbeatsCache = s), s)));
  }
  async triggerHeartbeat() {
    var t, r;
    try {
      const o = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        c = Pv();
      if (
        (((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((r = this._heartbeatsCache) === null || r === void 0
            ? void 0
            : r.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === c ||
        this._heartbeatsCache.heartbeats.some((d) => d.date === c)
      )
        return;
      if (
        (this._heartbeatsCache.heartbeats.push({ date: c, agent: o }),
        this._heartbeatsCache.heartbeats.length > CD)
      ) {
        const d = xD(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(d, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (s) {
      Kn.warn(s);
    }
  }
  async getHeartbeatsHeader() {
    var t;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const r = Pv(),
        { heartbeatsToSend: s, unsentEntries: o } = ND(
          this._heartbeatsCache.heartbeats
        ),
        c = S0(JSON.stringify({ version: 2, heartbeats: s }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = r),
        o.length > 0
          ? ((this._heartbeatsCache.heartbeats = o),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        c
      );
    } catch (r) {
      return Kn.warn(r), "";
    }
  }
}
function Pv() {
  return new Date().toISOString().substring(0, 10);
}
function ND(i, t = RD) {
  const r = [];
  let s = i.slice();
  for (const o of i) {
    const c = r.find((d) => d.agent === o.agent);
    if (c) {
      if ((c.dates.push(o.date), qv(r) > t)) {
        c.dates.pop();
        break;
      }
    } else if ((r.push({ agent: o.agent, dates: [o.date] }), qv(r) > t)) {
      r.pop();
      break;
    }
    s = s.slice(1);
  }
  return { heartbeatsToSend: r, unsentEntries: s };
}
class MD {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return m1()
      ? v1()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const r = await wD(this.app);
      return r != null && r.heartbeats ? r : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return Bv(this.app, {
        lastSentHeartbeatDate:
          (r = t.lastSentHeartbeatDate) !== null && r !== void 0
            ? r
            : o.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return Bv(this.app, {
        lastSentHeartbeatDate:
          (r = t.lastSentHeartbeatDate) !== null && r !== void 0
            ? r
            : o.lastSentHeartbeatDate,
        heartbeats: [...o.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function qv(i) {
  return S0(JSON.stringify({ version: 2, heartbeats: i })).length;
}
function xD(i) {
  if (i.length === 0) return -1;
  let t = 0,
    r = i[0].date;
  for (let s = 1; s < i.length; s++)
    i[s].date < r && ((r = i[s].date), (t = s));
  return t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function UD(i) {
  $s(new Ia("platform-logger", (t) => new G1(t), "PRIVATE")),
    $s(new Ia("heartbeat", (t) => new AD(t), "PRIVATE")),
    va(wd, jv, i),
    va(wd, jv, "esm2017"),
    va("fire-js", "");
}
UD("");
function th(i, t) {
  var r = {};
  for (var s in i)
    Object.prototype.hasOwnProperty.call(i, s) &&
      t.indexOf(s) < 0 &&
      (r[s] = i[s]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++)
      t.indexOf(s[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(i, s[o]) &&
        (r[s[o]] = i[s[o]]);
  return r;
}
function M0() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const ID = M0,
  x0 = new ol("auth", "Firebase", M0());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const eu = new O0("@firebase/auth");
function LD(i, ...t) {
  eu.logLevel <= Ne.WARN && eu.warn(`Auth (${cl}): ${i}`, ...t);
}
function ko(i, ...t) {
  eu.logLevel <= Ne.ERROR && eu.error(`Auth (${cl}): ${i}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Sn(i, ...t) {
  throw ih(i, ...t);
}
function nn(i, ...t) {
  return ih(i, ...t);
}
function nh(i, t, r) {
  const s = Object.assign(Object.assign({}, ID()), { [t]: r });
  return new ol("auth", "Firebase", s).create(t, { appName: i.name });
}
function Dr(i) {
  return nh(
    i,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function zD(i, t, r) {
  const s = r;
  if (!(t instanceof s))
    throw (
      (s.name !== t.constructor.name && Sn(i, "argument-error"),
      nh(
        i,
        "argument-error",
        `Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
      ))
    );
}
function ih(i, ...t) {
  if (typeof i != "string") {
    const r = t[0],
      s = [...t.slice(1)];
    return s[0] && (s[0].appName = i.name), i._errorFactory.create(r, ...s);
  }
  return x0.create(i, ...t);
}
function re(i, t, ...r) {
  if (!i) throw ih(t, ...r);
}
function Gn(i) {
  const t = "INTERNAL ASSERTION FAILED: " + i;
  throw (ko(t), new Error(t));
}
function Zn(i, t) {
  i || Gn(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ad() {
  var i;
  return (
    (typeof self < "u" &&
      ((i = self.location) === null || i === void 0 ? void 0 : i.href)) ||
    ""
  );
}
function HD() {
  return Vv() === "http:" || Vv() === "https:";
}
function Vv() {
  var i;
  return (
    (typeof self < "u" &&
      ((i = self.location) === null || i === void 0 ? void 0 : i.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jD() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (HD() || h1() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function kD() {
  if (typeof navigator > "u") return null;
  const i = navigator;
  return (i.languages && i.languages[0]) || i.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fl {
  constructor(t, r) {
    (this.shortDelay = t),
      (this.longDelay = r),
      Zn(r > t, "Short delay should be less than long delay!"),
      (this.isMobile = f1() || p1());
  }
  get() {
    return jD()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rh(i, t) {
  Zn(i.emulator, "Emulator should always be set here");
  const { url: r } = i.emulator;
  return t ? `${r}${t.startsWith("/") ? t.slice(1) : t}` : r;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U0 {
  static initialize(t, r, s) {
    (this.fetchImpl = t),
      r && (this.headersImpl = r),
      s && (this.responseImpl = s);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    Gn(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    Gn(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < "u") return Response;
    Gn(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const BD = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PD = new fl(3e4, 6e4);
function ah(i, t) {
  return i.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: i.tenantId })
    : t;
}
async function ka(i, t, r, s, o = {}) {
  return I0(i, o, async () => {
    let c = {},
      d = {};
    s && (t === "GET" ? (d = s) : (c = { body: JSON.stringify(s) }));
    const h = ul(Object.assign({ key: i.config.apiKey }, d)).slice(1),
      g = await i._getAdditionalHeaders();
    (g["Content-Type"] = "application/json"),
      i.languageCode && (g["X-Firebase-Locale"] = i.languageCode);
    const m = Object.assign({ method: t, headers: g }, c);
    return (
      d1() || (m.referrerPolicy = "no-referrer"),
      U0.fetch()(L0(i, i.config.apiHost, r, h), m)
    );
  });
}
async function I0(i, t, r) {
  i._canInitEmulator = !1;
  const s = Object.assign(Object.assign({}, BD), t);
  try {
    const o = new VD(i),
      c = await Promise.race([r(), o.promise]);
    o.clearNetworkTimeout();
    const d = await c.json();
    if ("needConfirmation" in d)
      throw Io(i, "account-exists-with-different-credential", d);
    if (c.ok && !("errorMessage" in d)) return d;
    {
      const h = c.ok ? d.errorMessage : d.error.message,
        [g, m] = h.split(" : ");
      if (g === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw Io(i, "credential-already-in-use", d);
      if (g === "EMAIL_EXISTS") throw Io(i, "email-already-in-use", d);
      if (g === "USER_DISABLED") throw Io(i, "user-disabled", d);
      const y = s[g] || g.toLowerCase().replace(/[_\s]+/g, "-");
      if (m) throw nh(i, y, m);
      Sn(i, y);
    }
  } catch (o) {
    if (o instanceof Vi) throw o;
    Sn(i, "network-request-failed", { message: String(o) });
  }
}
async function qD(i, t, r, s, o = {}) {
  const c = await ka(i, t, r, s, o);
  return (
    "mfaPendingCredential" in c &&
      Sn(i, "multi-factor-auth-required", { _serverResponse: c }),
    c
  );
}
function L0(i, t, r, s) {
  const o = `${t}${r}?${s}`;
  return i.config.emulator ? rh(i.config, o) : `${i.config.apiScheme}://${o}`;
}
class VD {
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((r, s) => {
        this.timer = setTimeout(
          () => s(nn(this.auth, "network-request-failed")),
          PD.get()
        );
      }));
  }
}
function Io(i, t, r) {
  const s = { appName: i.name };
  r.email && (s.email = r.email),
    r.phoneNumber && (s.phoneNumber = r.phoneNumber);
  const o = nn(i, t, s);
  return (o.customData._tokenResponse = r), o;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function GD(i, t) {
  return ka(i, "POST", "/v1/accounts:delete", t);
}
async function z0(i, t) {
  return ka(i, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ys(i) {
  if (i)
    try {
      const t = new Date(Number(i));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function QD(i, t = !1) {
  const r = Gi(i),
    s = await r.getIdToken(t),
    o = sh(s);
  re(o && o.exp && o.auth_time && o.iat, r.auth, "internal-error");
  const c = typeof o.firebase == "object" ? o.firebase : void 0,
    d = c == null ? void 0 : c.sign_in_provider;
  return {
    claims: o,
    token: s,
    authTime: Ys(Ff(o.auth_time)),
    issuedAtTime: Ys(Ff(o.iat)),
    expirationTime: Ys(Ff(o.exp)),
    signInProvider: d || null,
    signInSecondFactor: (c == null ? void 0 : c.sign_in_second_factor) || null,
  };
}
function Ff(i) {
  return Number(i) * 1e3;
}
function sh(i) {
  const [t, r, s] = i.split(".");
  if (t === void 0 || r === void 0 || s === void 0)
    return ko("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const o = E0(r);
    return o
      ? JSON.parse(o)
      : (ko("Failed to decode base64 JWT payload"), null);
  } catch (o) {
    return (
      ko(
        "Caught error parsing JWT payload as JSON",
        o == null ? void 0 : o.toString()
      ),
      null
    );
  }
}
function Gv(i) {
  const t = sh(i);
  return (
    re(t, "internal-error"),
    re(typeof t.exp < "u", "internal-error"),
    re(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ws(i, t, r = !1) {
  if (r) return t;
  try {
    return await t;
  } catch (s) {
    throw (
      (s instanceof Vi &&
        YD(s) &&
        i.auth.currentUser === i &&
        (await i.auth.signOut()),
      s)
    );
  }
}
function YD({ code: i }) {
  return i === "auth/user-disabled" || i === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FD {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var r;
    if (t) {
      const s = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), s;
    } else {
      this.errorBackoff = 3e4;
      const o =
        ((r = this.user.stsTokenManager.expirationTime) !== null && r !== void 0
          ? r
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, o);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const r = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, r);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nd {
  constructor(t, r) {
    (this.createdAt = t), (this.lastLoginAt = r), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = Ys(this.lastLoginAt)),
      (this.creationTime = Ys(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tu(i) {
  var t;
  const r = i.auth,
    s = await i.getIdToken(),
    o = await Ws(i, z0(r, { idToken: s }));
  re(o == null ? void 0 : o.users.length, r, "internal-error");
  const c = o.users[0];
  i._notifyReloadListener(c);
  const d =
      !((t = c.providerUserInfo) === null || t === void 0) && t.length
        ? H0(c.providerUserInfo)
        : [],
    h = KD(i.providerData, d),
    g = i.isAnonymous,
    m = !(i.email && c.passwordHash) && !(h != null && h.length),
    y = g ? m : !1,
    b = {
      uid: c.localId,
      displayName: c.displayName || null,
      photoURL: c.photoUrl || null,
      email: c.email || null,
      emailVerified: c.emailVerified || !1,
      phoneNumber: c.phoneNumber || null,
      tenantId: c.tenantId || null,
      providerData: h,
      metadata: new Nd(c.createdAt, c.lastLoginAt),
      isAnonymous: y,
    };
  Object.assign(i, b);
}
async function XD(i) {
  const t = Gi(i);
  await tu(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function KD(i, t) {
  return [
    ...i.filter((s) => !t.some((o) => o.providerId === s.providerId)),
    ...t,
  ];
}
function H0(i) {
  return i.map((t) => {
    var { providerId: r } = t,
      s = th(t, ["providerId"]);
    return {
      providerId: r,
      uid: s.rawId || "",
      displayName: s.displayName || null,
      email: s.email || null,
      phoneNumber: s.phoneNumber || null,
      photoURL: s.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ZD(i, t) {
  const r = await I0(i, {}, async () => {
    const s = ul({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: o, apiKey: c } = i.config,
      d = L0(i, o, "/v1/token", `key=${c}`),
      h = await i._getAdditionalHeaders();
    return (
      (h["Content-Type"] = "application/x-www-form-urlencoded"),
      U0.fetch()(d, { method: "POST", headers: h, body: s })
    );
  });
  return {
    accessToken: r.access_token,
    expiresIn: r.expires_in,
    refreshToken: r.refresh_token,
  };
}
async function $D(i, t) {
  return ka(i, "POST", "/v2/accounts:revokeToken", ah(i, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ya {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    re(t.idToken, "internal-error"),
      re(typeof t.idToken < "u", "internal-error"),
      re(typeof t.refreshToken < "u", "internal-error");
    const r =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : Gv(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, r);
  }
  updateFromIdToken(t) {
    re(t.length !== 0, "internal-error");
    const r = Gv(t);
    this.updateTokensAndExpiration(t, null, r);
  }
  async getToken(t, r = !1) {
    return !r && this.accessToken && !this.isExpired
      ? this.accessToken
      : (re(this.refreshToken, t, "user-token-expired"),
        this.refreshToken
          ? (await this.refresh(t, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, r) {
    const { accessToken: s, refreshToken: o, expiresIn: c } = await ZD(t, r);
    this.updateTokensAndExpiration(s, o, Number(c));
  }
  updateTokensAndExpiration(t, r, s) {
    (this.refreshToken = r || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + s * 1e3);
  }
  static fromJSON(t, r) {
    const { refreshToken: s, accessToken: o, expirationTime: c } = r,
      d = new ya();
    return (
      s &&
        (re(typeof s == "string", "internal-error", { appName: t }),
        (d.refreshToken = s)),
      o &&
        (re(typeof o == "string", "internal-error", { appName: t }),
        (d.accessToken = o)),
      c &&
        (re(typeof c == "number", "internal-error", { appName: t }),
        (d.expirationTime = c)),
      d
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new ya(), this.toJSON());
  }
  _performRefresh() {
    return Gn("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ei(i, t) {
  re(typeof i == "string" || typeof i > "u", "internal-error", { appName: t });
}
class Qn {
  constructor(t) {
    var { uid: r, auth: s, stsTokenManager: o } = t,
      c = th(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new FD(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = r),
      (this.auth = s),
      (this.stsTokenManager = o),
      (this.accessToken = o.accessToken),
      (this.displayName = c.displayName || null),
      (this.email = c.email || null),
      (this.emailVerified = c.emailVerified || !1),
      (this.phoneNumber = c.phoneNumber || null),
      (this.photoURL = c.photoURL || null),
      (this.isAnonymous = c.isAnonymous || !1),
      (this.tenantId = c.tenantId || null),
      (this.providerData = c.providerData ? [...c.providerData] : []),
      (this.metadata = new Nd(c.createdAt || void 0, c.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const r = await Ws(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      re(r, this.auth, "internal-error"),
      this.accessToken !== r &&
        ((this.accessToken = r),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      r
    );
  }
  getIdTokenResult(t) {
    return QD(this, t);
  }
  reload() {
    return XD(this);
  }
  _assign(t) {
    this !== t &&
      (re(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((r) => Object.assign({}, r))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const r = new Qn(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return r.metadata._copy(this.metadata), r;
  }
  _onReload(t) {
    re(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, r = !1) {
    let s = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (s = !0)),
      r && (await tu(this)),
      await this.auth._persistUserIfCurrent(this),
      s && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (yn(this.auth.app)) return Promise.reject(Dr(this.auth));
    const t = await this.getIdToken();
    return (
      await Ws(this, GD(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, r) {
    var s, o, c, d, h, g, m, y;
    const b = (s = r.displayName) !== null && s !== void 0 ? s : void 0,
      w = (o = r.email) !== null && o !== void 0 ? o : void 0,
      A = (c = r.phoneNumber) !== null && c !== void 0 ? c : void 0,
      U = (d = r.photoURL) !== null && d !== void 0 ? d : void 0,
      N = (h = r.tenantId) !== null && h !== void 0 ? h : void 0,
      R = (g = r._redirectEventId) !== null && g !== void 0 ? g : void 0,
      k = (m = r.createdAt) !== null && m !== void 0 ? m : void 0,
      P = (y = r.lastLoginAt) !== null && y !== void 0 ? y : void 0,
      {
        uid: q,
        emailVerified: W,
        isAnonymous: Y,
        providerData: se,
        stsTokenManager: ye,
      } = r;
    re(q && ye, t, "internal-error");
    const me = ya.fromJSON(this.name, ye);
    re(typeof q == "string", t, "internal-error"),
      Ei(b, t.name),
      Ei(w, t.name),
      re(typeof W == "boolean", t, "internal-error"),
      re(typeof Y == "boolean", t, "internal-error"),
      Ei(A, t.name),
      Ei(U, t.name),
      Ei(N, t.name),
      Ei(R, t.name),
      Ei(k, t.name),
      Ei(P, t.name);
    const V = new Qn({
      uid: q,
      auth: t,
      email: w,
      emailVerified: W,
      displayName: b,
      isAnonymous: Y,
      photoURL: U,
      phoneNumber: A,
      tenantId: N,
      stsTokenManager: me,
      createdAt: k,
      lastLoginAt: P,
    });
    return (
      se &&
        Array.isArray(se) &&
        (V.providerData = se.map((fe) => Object.assign({}, fe))),
      R && (V._redirectEventId = R),
      V
    );
  }
  static async _fromIdTokenResponse(t, r, s = !1) {
    const o = new ya();
    o.updateFromServerResponse(r);
    const c = new Qn({
      uid: r.localId,
      auth: t,
      stsTokenManager: o,
      isAnonymous: s,
    });
    return await tu(c), c;
  }
  static async _fromGetAccountInfoResponse(t, r, s) {
    const o = r.users[0];
    re(o.localId !== void 0, "internal-error");
    const c = o.providerUserInfo !== void 0 ? H0(o.providerUserInfo) : [],
      d = !(o.email && o.passwordHash) && !(c != null && c.length),
      h = new ya();
    h.updateFromIdToken(s);
    const g = new Qn({
        uid: o.localId,
        auth: t,
        stsTokenManager: h,
        isAnonymous: d,
      }),
      m = {
        uid: o.localId,
        displayName: o.displayName || null,
        photoURL: o.photoUrl || null,
        email: o.email || null,
        emailVerified: o.emailVerified || !1,
        phoneNumber: o.phoneNumber || null,
        tenantId: o.tenantId || null,
        providerData: c,
        metadata: new Nd(o.createdAt, o.lastLoginAt),
        isAnonymous: !(o.email && o.passwordHash) && !(c != null && c.length),
      };
    return Object.assign(g, m), g;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qv = new Map();
function Yn(i) {
  Zn(i instanceof Function, "Expected a class definition");
  let t = Qv.get(i);
  return t
    ? (Zn(t instanceof i, "Instance stored in cache mismatched with class"), t)
    : ((t = new i()), Qv.set(i, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j0 {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, r) {
    this.storage[t] = r;
  }
  async _get(t) {
    const r = this.storage[t];
    return r === void 0 ? null : r;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, r) {}
  _removeListener(t, r) {}
}
j0.type = "NONE";
const Yv = j0;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bo(i, t, r) {
  return `firebase:${i}:${t}:${r}`;
}
class ba {
  constructor(t, r, s) {
    (this.persistence = t), (this.auth = r), (this.userKey = s);
    const { config: o, name: c } = this.auth;
    (this.fullUserKey = Bo(this.userKey, o.apiKey, c)),
      (this.fullPersistenceKey = Bo("persistence", o.apiKey, c)),
      (this.boundEventHandler = r._onStorageEvent.bind(r)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? Qn._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const r = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), r))
      return this.setCurrentUser(r);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, r, s = "authUser") {
    if (!r.length) return new ba(Yn(Yv), t, s);
    const o = (
      await Promise.all(
        r.map(async (m) => {
          if (await m._isAvailable()) return m;
        })
      )
    ).filter((m) => m);
    let c = o[0] || Yn(Yv);
    const d = Bo(s, t.config.apiKey, t.name);
    let h = null;
    for (const m of r)
      try {
        const y = await m._get(d);
        if (y) {
          const b = Qn._fromJSON(t, y);
          m !== c && (h = b), (c = m);
          break;
        }
      } catch {}
    const g = o.filter((m) => m._shouldAllowMigration);
    return !c._shouldAllowMigration || !g.length
      ? new ba(c, t, s)
      : ((c = g[0]),
        h && (await c._set(d, h.toJSON())),
        await Promise.all(
          r.map(async (m) => {
            if (m !== c)
              try {
                await m._remove(d);
              } catch {}
          })
        ),
        new ba(c, t, s));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fv(i) {
  const t = i.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (q0(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (k0(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (G0(t)) return "Blackberry";
  if (Q0(t)) return "Webos";
  if (B0(t)) return "Safari";
  if ((t.includes("chrome/") || P0(t)) && !t.includes("edge/")) return "Chrome";
  if (V0(t)) return "Android";
  {
    const r = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      s = i.match(r);
    if ((s == null ? void 0 : s.length) === 2) return s[1];
  }
  return "Other";
}
function k0(i = mt()) {
  return /firefox\//i.test(i);
}
function B0(i = mt()) {
  const t = i.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function P0(i = mt()) {
  return /crios\//i.test(i);
}
function q0(i = mt()) {
  return /iemobile/i.test(i);
}
function V0(i = mt()) {
  return /android/i.test(i);
}
function G0(i = mt()) {
  return /blackberry/i.test(i);
}
function Q0(i = mt()) {
  return /webos/i.test(i);
}
function lh(i = mt()) {
  return (
    /iphone|ipad|ipod/i.test(i) || (/macintosh/i.test(i) && /mobile/i.test(i))
  );
}
function JD(i = mt()) {
  var t;
  return (
    lh(i) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function WD() {
  return g1() && document.documentMode === 10;
}
function Y0(i = mt()) {
  return lh(i) || V0(i) || Q0(i) || G0(i) || /windows phone/i.test(i) || q0(i);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function F0(i, t = []) {
  let r;
  switch (i) {
    case "Browser":
      r = Fv(mt());
      break;
    case "Worker":
      r = `${Fv(mt())}-${i}`;
      break;
    default:
      r = i;
  }
  const s = t.length ? t.join(",") : "FirebaseCore-web";
  return `${r}/JsCore/${cl}/${s}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ew {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, r) {
    const s = (c) =>
      new Promise((d, h) => {
        try {
          const g = t(c);
          d(g);
        } catch (g) {
          h(g);
        }
      });
    (s.onAbort = r), this.queue.push(s);
    const o = this.queue.length - 1;
    return () => {
      this.queue[o] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const r = [];
    try {
      for (const s of this.queue) await s(t), s.onAbort && r.push(s.onAbort);
    } catch (s) {
      r.reverse();
      for (const o of r)
        try {
          o();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: s == null ? void 0 : s.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function tw(i, t = {}) {
  return ka(i, "GET", "/v2/passwordPolicy", ah(i, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nw = 6;
class iw {
  constructor(t) {
    var r, s, o, c;
    const d = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (r = d.minPasswordLength) !== null && r !== void 0 ? r : nw),
      d.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = d.maxPasswordLength),
      d.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          d.containsLowercaseCharacter),
      d.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          d.containsUppercaseCharacter),
      d.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          d.containsNumericCharacter),
      d.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          d.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" &&
        (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (o =
          (s = t.allowedNonAlphanumericCharacters) === null || s === void 0
            ? void 0
            : s.join("")) !== null && o !== void 0
          ? o
          : ""),
      (this.forceUpgradeOnSignin =
        (c = t.forceUpgradeOnSignin) !== null && c !== void 0 ? c : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var r, s, o, c, d, h;
    const g = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, g),
      this.validatePasswordCharacterOptions(t, g),
      g.isValid &&
        (g.isValid =
          (r = g.meetsMinPasswordLength) !== null && r !== void 0 ? r : !0),
      g.isValid &&
        (g.isValid =
          (s = g.meetsMaxPasswordLength) !== null && s !== void 0 ? s : !0),
      g.isValid &&
        (g.isValid =
          (o = g.containsLowercaseLetter) !== null && o !== void 0 ? o : !0),
      g.isValid &&
        (g.isValid =
          (c = g.containsUppercaseLetter) !== null && c !== void 0 ? c : !0),
      g.isValid &&
        (g.isValid =
          (d = g.containsNumericCharacter) !== null && d !== void 0 ? d : !0),
      g.isValid &&
        (g.isValid =
          (h = g.containsNonAlphanumericCharacter) !== null && h !== void 0
            ? h
            : !0),
      g
    );
  }
  validatePasswordLengthOptions(t, r) {
    const s = this.customStrengthOptions.minPasswordLength,
      o = this.customStrengthOptions.maxPasswordLength;
    s && (r.meetsMinPasswordLength = t.length >= s),
      o && (r.meetsMaxPasswordLength = t.length <= o);
  }
  validatePasswordCharacterOptions(t, r) {
    this.updatePasswordCharacterOptionsStatuses(r, !1, !1, !1, !1);
    let s;
    for (let o = 0; o < t.length; o++)
      (s = t.charAt(o)),
        this.updatePasswordCharacterOptionsStatuses(
          r,
          s >= "a" && s <= "z",
          s >= "A" && s <= "Z",
          s >= "0" && s <= "9",
          this.allowedNonAlphanumericCharacters.includes(s)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, r, s, o, c) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = r)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = s)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = o)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter ||
          (t.containsNonAlphanumericCharacter = c));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rw {
  constructor(t, r, s, o) {
    (this.app = t),
      (this.heartbeatServiceProvider = r),
      (this.appCheckServiceProvider = s),
      (this.config = o),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Xv(this)),
      (this.idTokenSubscription = new Xv(this)),
      (this.beforeStateQueue = new ew(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = x0),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = o.sdkClientVersion);
  }
  _initializeWithPersistence(t, r) {
    return (
      r && (this._popupRedirectResolver = Yn(r)),
      (this._initializationPromise = this.queue(async () => {
        var s, o;
        if (
          !this._deleted &&
          ((this.persistenceManager = await ba.create(this, t)), !this._deleted)
        ) {
          if (
            !((s = this._popupRedirectResolver) === null || s === void 0) &&
            s._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(r),
            (this.lastNotifiedUid =
              ((o = this.currentUser) === null || o === void 0
                ? void 0
                : o.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUserFromIdToken(t) {
    try {
      const r = await z0(this, { idToken: t }),
        s = await Qn._fromGetAccountInfoResponse(this, r, t);
      await this.directlySetCurrentUser(s);
    } catch (r) {
      console.warn(
        "FirebaseServerApp could not login user with provided authIdToken: ",
        r
      ),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    var r;
    if (yn(this.app)) {
      const d = this.app.settings.authIdToken;
      return d
        ? new Promise((h) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(d).then(h, h)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const s = await this.assertedPersistence.getCurrentUser();
    let o = s,
      c = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const d =
          (r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId,
        h = o == null ? void 0 : o._redirectEventId,
        g = await this.tryRedirectSignIn(t);
      (!d || d === h) && g != null && g.user && ((o = g.user), (c = !0));
    }
    if (!o) return this.directlySetCurrentUser(null);
    if (!o._redirectEventId) {
      if (c)
        try {
          await this.beforeStateQueue.runMiddleware(o);
        } catch (d) {
          (o = s),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(d)
            );
        }
      return o
        ? this.reloadAndSetCurrentUserOrClear(o)
        : this.directlySetCurrentUser(null);
    }
    return (
      re(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === o._redirectEventId
        ? this.directlySetCurrentUser(o)
        : this.reloadAndSetCurrentUserOrClear(o)
    );
  }
  async tryRedirectSignIn(t) {
    let r = null;
    try {
      r = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return r;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await tu(t);
    } catch (r) {
      if ((r == null ? void 0 : r.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = kD();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (yn(this.app)) return Promise.reject(Dr(this));
    const r = t ? Gi(t) : null;
    return (
      r &&
        re(
          r.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(r && r._clone(this))
    );
  }
  async _updateCurrentUser(t, r = !1) {
    if (!this._deleted)
      return (
        t && re(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        r || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return yn(this.app)
      ? Promise.reject(Dr(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return yn(this.app)
      ? Promise.reject(Dr(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(Yn(t));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const r = this._getPasswordPolicyInternal();
    return r.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            "unsupported-password-policy-schema-version",
            {}
          )
        )
      : r.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await tw(this),
      r = new iw(t);
    this.tenantId === null
      ? (this._projectPasswordPolicy = r)
      : (this._tenantPasswordPolicies[this.tenantId] = r);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new ol("auth", "Firebase", t());
  }
  onAuthStateChanged(t, r, s) {
    return this.registerStateListener(this.authStateSubscription, t, r, s);
  }
  beforeAuthStateChanged(t, r) {
    return this.beforeStateQueue.pushCallback(t, r);
  }
  onIdTokenChanged(t, r, s) {
    return this.registerStateListener(this.idTokenSubscription, t, r, s);
  }
  authStateReady() {
    return new Promise((t, r) => {
      if (this.currentUser) t();
      else {
        const s = this.onAuthStateChanged(() => {
          s(), t();
        }, r);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const r = await this.currentUser.getIdToken(),
        s = {
          providerId: "apple.com",
          tokenType: "ACCESS_TOKEN",
          token: t,
          idToken: r,
        };
      this.tenantId != null && (s.tenantId = this.tenantId), await $D(this, s);
    }
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, r) {
    const s = await this.getOrInitRedirectPersistenceManager(r);
    return t === null ? s.removeCurrentUser() : s.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const r = (t && Yn(t)) || this._popupRedirectResolver;
      re(r, this, "argument-error"),
        (this.redirectPersistenceManager = await ba.create(
          this,
          [Yn(r._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var r, s;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((r = this._currentUser) === null || r === void 0
        ? void 0
        : r._redirectEventId) === t
        ? this._currentUser
        : ((s = this.redirectUser) === null || s === void 0
            ? void 0
            : s._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, r;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const s =
      (r = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && r !== void 0
        ? r
        : null;
    this.lastNotifiedUid !== s &&
      ((this.lastNotifiedUid = s),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, r, s, o) {
    if (this._deleted) return () => {};
    const c = typeof r == "function" ? r : r.next.bind(r);
    let d = !1;
    const h = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (re(h, this, "internal-error"),
      h.then(() => {
        d || c(this.currentUser);
      }),
      typeof r == "function")
    ) {
      const g = t.addObserver(r, s, o);
      return () => {
        (d = !0), g();
      };
    } else {
      const g = t.addObserver(r);
      return () => {
        (d = !0), g();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      re(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = F0(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const r = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (r["X-Firebase-gmpid"] = this.app.options.appId);
    const s = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    s && (r["X-Firebase-Client"] = s);
    const o = await this._getAppCheckToken();
    return o && (r["X-Firebase-AppCheck"] = o), r;
  }
  async _getAppCheckToken() {
    var t;
    if (yn(this.app) && this.app.settings.appCheckToken)
      return this.app.settings.appCheckToken;
    const r = await ((t = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      r != null &&
        r.error &&
        LD(`Error while retrieving App Check token: ${r.error}`),
      r == null ? void 0 : r.token
    );
  }
}
function uu(i) {
  return Gi(i);
}
class Xv {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = T1((r) => (this.observer = r)));
  }
  get next() {
    return (
      re(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let oh = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function aw(i) {
  oh = i;
}
function sw(i) {
  return oh.loadJS(i);
}
function lw() {
  return oh.gapiScript;
}
function ow(i) {
  return `__${i}${Math.floor(Math.random() * 1e6)}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function uw(i, t) {
  const r = R0(i, "auth");
  if (r.isInitialized()) {
    const o = r.getImmediate(),
      c = r.getOptions();
    if (Jo(c, t ?? {})) return o;
    Sn(o, "already-initialized");
  }
  return r.initialize({ options: t });
}
function cw(i, t) {
  const r = (t == null ? void 0 : t.persistence) || [],
    s = (Array.isArray(r) ? r : [r]).map(Yn);
  t != null && t.errorMap && i._updateErrorMap(t.errorMap),
    i._initializeWithPersistence(
      s,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
function fw(i, t, r) {
  const s = uu(i);
  re(s._canInitEmulator, s, "emulator-config-failed"),
    re(/^https?:\/\//.test(t), s, "invalid-emulator-scheme");
  const o = !1,
    c = X0(t),
    { host: d, port: h } = dw(t),
    g = h === null ? "" : `:${h}`;
  (s.config.emulator = { url: `${c}//${d}${g}/` }),
    (s.settings.appVerificationDisabledForTesting = !0),
    (s.emulatorConfig = Object.freeze({
      host: d,
      port: h,
      protocol: c.replace(":", ""),
      options: Object.freeze({ disableWarnings: o }),
    })),
    hw();
}
function X0(i) {
  const t = i.indexOf(":");
  return t < 0 ? "" : i.substr(0, t + 1);
}
function dw(i) {
  const t = X0(i),
    r = /(\/\/)?([^?#/]+)/.exec(i.substr(t.length));
  if (!r) return { host: "", port: null };
  const s = r[2].split("@").pop() || "",
    o = /^(\[[^\]]+\])(:|$)/.exec(s);
  if (o) {
    const c = o[1];
    return { host: c, port: Kv(s.substr(c.length + 1)) };
  } else {
    const [c, d] = s.split(":");
    return { host: c, port: Kv(d) };
  }
}
function Kv(i) {
  if (!i) return null;
  const t = Number(i);
  return isNaN(t) ? null : t;
}
function hw() {
  function i() {
    const t = document.createElement("p"),
      r = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (r.position = "fixed"),
      (r.width = "100%"),
      (r.backgroundColor = "#ffffff"),
      (r.border = ".1em solid #000000"),
      (r.color = "#b50000"),
      (r.bottom = "0px"),
      (r.left = "0px"),
      (r.margin = "0px"),
      (r.zIndex = "10000"),
      (r.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", i)
        : i());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class K0 {
  constructor(t, r) {
    (this.providerId = t), (this.signInMethod = r);
  }
  toJSON() {
    return Gn("not implemented");
  }
  _getIdTokenResponse(t) {
    return Gn("not implemented");
  }
  _linkToIdToken(t, r) {
    return Gn("not implemented");
  }
  _getReauthenticationResolver(t) {
    return Gn("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Sa(i, t) {
  return qD(i, "POST", "/v1/accounts:signInWithIdp", ah(i, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const pw = "http://localhost";
class Ar extends K0 {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const r = new Ar(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (r.idToken = t.idToken),
          t.accessToken && (r.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (r.nonce = t.nonce),
          t.pendingToken && (r.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((r.accessToken = t.oauthToken), (r.secret = t.oauthTokenSecret))
        : Sn("argument-error"),
      r
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const r = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: s, signInMethod: o } = r,
      c = th(r, ["providerId", "signInMethod"]);
    if (!s || !o) return null;
    const d = new Ar(s, o);
    return (
      (d.idToken = c.idToken || void 0),
      (d.accessToken = c.accessToken || void 0),
      (d.secret = c.secret),
      (d.nonce = c.nonce),
      (d.pendingToken = c.pendingToken || null),
      d
    );
  }
  _getIdTokenResponse(t) {
    const r = this.buildRequest();
    return Sa(t, r);
  }
  _linkToIdToken(t, r) {
    const s = this.buildRequest();
    return (s.idToken = r), Sa(t, s);
  }
  _getReauthenticationResolver(t) {
    const r = this.buildRequest();
    return (r.autoCreate = !1), Sa(t, r);
  }
  buildRequest() {
    const t = { requestUri: pw, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const r = {};
      this.idToken && (r.id_token = this.idToken),
        this.accessToken && (r.access_token = this.accessToken),
        this.secret && (r.oauth_token_secret = this.secret),
        (r.providerId = this.providerId),
        this.nonce && !this.pendingToken && (r.nonce = this.nonce),
        (t.postBody = ul(r));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uh {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dl extends uh {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oi extends dl {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return Ar._fromParams({
      providerId: Oi.PROVIDER_ID,
      signInMethod: Oi.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Oi.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Oi.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Oi.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Oi.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Oi.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vn extends dl {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, r) {
    return Ar._fromParams({
      providerId: Vn.PROVIDER_ID,
      signInMethod: Vn.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: r,
    });
  }
  static credentialFromResult(t) {
    return Vn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Vn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: r, oauthAccessToken: s } = t;
    if (!r && !s) return null;
    try {
      return Vn.credential(r, s);
    } catch {
      return null;
    }
  }
}
Vn.GOOGLE_SIGN_IN_METHOD = "google.com";
Vn.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Di extends dl {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return Ar._fromParams({
      providerId: Di.PROVIDER_ID,
      signInMethod: Di.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return Di.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Di.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Di.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Di.GITHUB_SIGN_IN_METHOD = "github.com";
Di.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wi extends dl {
  constructor() {
    super("twitter.com");
  }
  static credential(t, r) {
    return Ar._fromParams({
      providerId: wi.PROVIDER_ID,
      signInMethod: wi.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: r,
    });
  }
  static credentialFromResult(t) {
    return wi.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return wi.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: r, oauthTokenSecret: s } = t;
    if (!r || !s) return null;
    try {
      return wi.credential(r, s);
    } catch {
      return null;
    }
  }
}
wi.TWITTER_SIGN_IN_METHOD = "twitter.com";
wi.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class La {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, r, s, o = !1) {
    const c = await Qn._fromIdTokenResponse(t, s, o),
      d = Zv(s);
    return new La({
      user: c,
      providerId: d,
      _tokenResponse: s,
      operationType: r,
    });
  }
  static async _forOperation(t, r, s) {
    await t._updateTokensIfNecessary(s, !0);
    const o = Zv(s);
    return new La({
      user: t,
      providerId: o,
      _tokenResponse: s,
      operationType: r,
    });
  }
}
function Zv(i) {
  return i.providerId ? i.providerId : "phoneNumber" in i ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nu extends Vi {
  constructor(t, r, s, o) {
    var c;
    super(r.code, r.message),
      (this.operationType = s),
      (this.user = o),
      Object.setPrototypeOf(this, nu.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (c = t.tenantId) !== null && c !== void 0 ? c : void 0,
        _serverResponse: r.customData._serverResponse,
        operationType: s,
      });
  }
  static _fromErrorAndOperation(t, r, s, o) {
    return new nu(t, r, s, o);
  }
}
function Z0(i, t, r, s) {
  return (
    t === "reauthenticate"
      ? r._getReauthenticationResolver(i)
      : r._getIdTokenResponse(i)
  ).catch((c) => {
    throw c.code === "auth/multi-factor-auth-required"
      ? nu._fromErrorAndOperation(i, c, t, s)
      : c;
  });
}
async function gw(i, t, r = !1) {
  const s = await Ws(i, t._linkToIdToken(i.auth, await i.getIdToken()), r);
  return La._forOperation(i, "link", s);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function mw(i, t, r = !1) {
  const { auth: s } = i;
  if (yn(s.app)) return Promise.reject(Dr(s));
  const o = "reauthenticate";
  try {
    const c = await Ws(i, Z0(s, o, t, i), r);
    re(c.idToken, s, "internal-error");
    const d = sh(c.idToken);
    re(d, s, "internal-error");
    const { sub: h } = d;
    return re(i.uid === h, s, "user-mismatch"), La._forOperation(i, o, c);
  } catch (c) {
    throw (
      ((c == null ? void 0 : c.code) === "auth/user-not-found" &&
        Sn(s, "user-mismatch"),
      c)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function vw(i, t, r = !1) {
  if (yn(i.app)) return Promise.reject(Dr(i));
  const s = "signIn",
    o = await Z0(i, s, t),
    c = await La._fromIdTokenResponse(i, s, o);
  return r || (await i._updateCurrentUser(c.user)), c;
}
function yw(i, t, r, s) {
  return Gi(i).onIdTokenChanged(t, r, s);
}
function bw(i, t, r) {
  return Gi(i).beforeAuthStateChanged(t, r);
}
function Sw(i, t, r, s) {
  return Gi(i).onAuthStateChanged(t, r, s);
}
function Ew(i) {
  return Gi(i).signOut();
}
const iu = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $0 {
  constructor(t, r) {
    (this.storageRetriever = t), (this.type = r);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(iu, "1"),
          this.storage.removeItem(iu),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, r) {
    return this.storage.setItem(t, JSON.stringify(r)), Promise.resolve();
  }
  _get(t) {
    const r = this.storage.getItem(t);
    return Promise.resolve(r ? JSON.parse(r) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tw = 1e3,
  _w = 10;
class J0 extends $0 {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, r) => this.onStorageEvent(t, r)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = Y0()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const r of Object.keys(this.listeners)) {
      const s = this.storage.getItem(r),
        o = this.localCache[r];
      s !== o && t(r, o, s);
    }
  }
  onStorageEvent(t, r = !1) {
    if (!t.key) {
      this.forAllChangedKeys((d, h, g) => {
        this.notifyListeners(d, g);
      });
      return;
    }
    const s = t.key;
    r ? this.detachListener() : this.stopPolling();
    const o = () => {
        const d = this.storage.getItem(s);
        (!r && this.localCache[s] === d) || this.notifyListeners(s, d);
      },
      c = this.storage.getItem(s);
    WD() && c !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(o, _w)
      : o();
  }
  notifyListeners(t, r) {
    this.localCache[t] = r;
    const s = this.listeners[t];
    if (s) for (const o of Array.from(s)) o(r && JSON.parse(r));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, r, s) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: t, oldValue: r, newValue: s }),
            !0
          );
        });
      }, Tw));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, r) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(r);
  }
  _removeListener(t, r) {
    this.listeners[t] &&
      (this.listeners[t].delete(r),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, r) {
    await super._set(t, r), (this.localCache[t] = JSON.stringify(r));
  }
  async _get(t) {
    const r = await super._get(t);
    return (this.localCache[t] = JSON.stringify(r)), r;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
J0.type = "LOCAL";
const Ow = J0;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class W0 extends $0 {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, r) {}
  _removeListener(t, r) {}
}
W0.type = "SESSION";
const eb = W0;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Dw(i) {
  return Promise.all(
    i.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (r) {
        return { fulfilled: !1, reason: r };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cu {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const r = this.receivers.find((o) => o.isListeningto(t));
    if (r) return r;
    const s = new cu(t);
    return this.receivers.push(s), s;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const r = t,
      { eventId: s, eventType: o, data: c } = r.data,
      d = this.handlersMap[o];
    if (!(d != null && d.size)) return;
    r.ports[0].postMessage({ status: "ack", eventId: s, eventType: o });
    const h = Array.from(d).map(async (m) => m(r.origin, c)),
      g = await Dw(h);
    r.ports[0].postMessage({
      status: "done",
      eventId: s,
      eventType: o,
      response: g,
    });
  }
  _subscribe(t, r) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(r);
  }
  _unsubscribe(t, r) {
    this.handlersMap[t] && r && this.handlersMap[t].delete(r),
      (!r || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
cu.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ch(i = "", t = 10) {
  let r = "";
  for (let s = 0; s < t; s++) r += Math.floor(Math.random() * 10);
  return i + r;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ww {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, r, s = 50) {
    const o = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!o) throw new Error("connection_unavailable");
    let c, d;
    return new Promise((h, g) => {
      const m = ch("", 20);
      o.port1.start();
      const y = setTimeout(() => {
        g(new Error("unsupported_event"));
      }, s);
      (d = {
        messageChannel: o,
        onMessage(b) {
          const w = b;
          if (w.data.eventId === m)
            switch (w.data.status) {
              case "ack":
                clearTimeout(y),
                  (c = setTimeout(() => {
                    g(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(c), h(w.data.response);
                break;
              default:
                clearTimeout(y),
                  clearTimeout(c),
                  g(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(d),
        o.port1.addEventListener("message", d.onMessage),
        this.target.postMessage({ eventType: t, eventId: m, data: r }, [
          o.port2,
        ]);
    }).finally(() => {
      d && this.removeMessageHandler(d);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bn() {
  return window;
}
function Rw(i) {
  bn().location.href = i;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tb() {
  return (
    typeof bn().WorkerGlobalScope < "u" &&
    typeof bn().importScripts == "function"
  );
}
async function Cw() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Aw() {
  var i;
  return (
    ((i = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    i === void 0
      ? void 0
      : i.controller) || null
  );
}
function Nw() {
  return tb() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nb = "firebaseLocalStorageDb",
  Mw = 1,
  ru = "firebaseLocalStorage",
  ib = "fbase_key";
class hl {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, r) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          r(this.request.error);
        });
    });
  }
}
function fu(i, t) {
  return i.transaction([ru], t ? "readwrite" : "readonly").objectStore(ru);
}
function xw() {
  const i = indexedDB.deleteDatabase(nb);
  return new hl(i).toPromise();
}
function Md() {
  const i = indexedDB.open(nb, Mw);
  return new Promise((t, r) => {
    i.addEventListener("error", () => {
      r(i.error);
    }),
      i.addEventListener("upgradeneeded", () => {
        const s = i.result;
        try {
          s.createObjectStore(ru, { keyPath: ib });
        } catch (o) {
          r(o);
        }
      }),
      i.addEventListener("success", async () => {
        const s = i.result;
        s.objectStoreNames.contains(ru)
          ? t(s)
          : (s.close(), await xw(), t(await Md()));
      });
  });
}
async function $v(i, t, r) {
  const s = fu(i, !0).put({ [ib]: t, value: r });
  return new hl(s).toPromise();
}
async function Uw(i, t) {
  const r = fu(i, !1).get(t),
    s = await new hl(r).toPromise();
  return s === void 0 ? null : s.value;
}
function Jv(i, t) {
  const r = fu(i, !0).delete(t);
  return new hl(r).toPromise();
}
const Iw = 800,
  Lw = 3;
class rb {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Md()), this.db);
  }
  async _withRetries(t) {
    let r = 0;
    for (;;)
      try {
        const s = await this._openDb();
        return await t(s);
      } catch (s) {
        if (r++ > Lw) throw s;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return tb() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = cu._getInstance(Nw())),
      this.receiver._subscribe("keyChanged", async (t, r) => ({
        keyProcessed: (await this._poll()).includes(r.key),
      })),
      this.receiver._subscribe("ping", async (t, r) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, r;
    if (((this.activeServiceWorker = await Cw()), !this.activeServiceWorker))
      return;
    this.sender = new ww(this.activeServiceWorker);
    const s = await this.sender._send("ping", {}, 800);
    s &&
      !((t = s[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((r = s[0]) === null || r === void 0) &&
      r.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        Aw() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await Md();
      return await $v(t, iu, "1"), await Jv(t, iu), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, r) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((s) => $v(s, t, r)),
        (this.localCache[t] = r),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const r = await this._withRetries((s) => Uw(s, t));
    return (this.localCache[t] = r), r;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => Jv(r, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((o) => {
      const c = fu(o, !1).getAll();
      return new hl(c).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const r = [],
      s = new Set();
    if (t.length !== 0)
      for (const { fbase_key: o, value: c } of t)
        s.add(o),
          JSON.stringify(this.localCache[o]) !== JSON.stringify(c) &&
            (this.notifyListeners(o, c), r.push(o));
    for (const o of Object.keys(this.localCache))
      this.localCache[o] &&
        !s.has(o) &&
        (this.notifyListeners(o, null), r.push(o));
    return r;
  }
  notifyListeners(t, r) {
    this.localCache[t] = r;
    const s = this.listeners[t];
    if (s) for (const o of Array.from(s)) o(r);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), Iw));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, r) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(r);
  }
  _removeListener(t, r) {
    this.listeners[t] &&
      (this.listeners[t].delete(r),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
rb.type = "LOCAL";
const zw = rb;
new fl(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ab(i, t) {
  return t
    ? Yn(t)
    : (re(i._popupRedirectResolver, i, "argument-error"),
      i._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fh extends K0 {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Sa(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, r) {
    return Sa(t, this._buildIdpRequest(r));
  }
  _getReauthenticationResolver(t) {
    return Sa(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const r = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (r.idToken = t), r;
  }
}
function Hw(i) {
  return vw(i.auth, new fh(i), i.bypassAuthState);
}
function jw(i) {
  const { auth: t, user: r } = i;
  return re(r, t, "internal-error"), mw(r, new fh(i), i.bypassAuthState);
}
async function kw(i) {
  const { auth: t, user: r } = i;
  return re(r, t, "internal-error"), gw(r, new fh(i), i.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sb {
  constructor(t, r, s, o, c = !1) {
    (this.auth = t),
      (this.resolver = s),
      (this.user = o),
      (this.bypassAuthState = c),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(r) ? r : [r]);
  }
  execute() {
    return new Promise(async (t, r) => {
      this.pendingPromise = { resolve: t, reject: r };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (s) {
        this.reject(s);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: r,
      sessionId: s,
      postBody: o,
      tenantId: c,
      error: d,
      type: h,
    } = t;
    if (d) {
      this.reject(d);
      return;
    }
    const g = {
      auth: this.auth,
      requestUri: r,
      sessionId: s,
      tenantId: c || void 0,
      postBody: o || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(h)(g));
    } catch (m) {
      this.reject(m);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return Hw;
      case "linkViaPopup":
      case "linkViaRedirect":
        return kw;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return jw;
      default:
        Sn(this.auth, "internal-error");
    }
  }
  resolve(t) {
    Zn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    Zn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Bw = new fl(2e3, 1e4);
async function Pw(i, t, r) {
  if (yn(i.app))
    return Promise.reject(nn(i, "operation-not-supported-in-this-environment"));
  const s = uu(i);
  zD(i, t, uh);
  const o = ab(s, r);
  return new gr(s, "signInViaPopup", t, o).executeNotNull();
}
class gr extends sb {
  constructor(t, r, s, o, c) {
    super(t, r, o, c),
      (this.provider = s),
      (this.authWindow = null),
      (this.pollId = null),
      gr.currentPopupAction && gr.currentPopupAction.cancel(),
      (gr.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return re(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    Zn(this.filter.length === 1, "Popup operations only handle one event");
    const t = ch();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((r) => {
        this.reject(r);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (r) => {
        r || this.reject(nn(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0
        ? void 0
        : t.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(nn(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (gr.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var r, s;
      if (
        !(
          (s =
            (r = this.authWindow) === null || r === void 0
              ? void 0
              : r.window) === null || s === void 0
        ) &&
        s.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(nn(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, Bw.get());
    };
    t();
  }
}
gr.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qw = "pendingRedirect",
  Po = new Map();
class Vw extends sb {
  constructor(t, r, s = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      r,
      void 0,
      s
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = Po.get(this.auth._key());
    if (!t) {
      try {
        const s = (await Gw(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(s);
      } catch (r) {
        t = () => Promise.reject(r);
      }
      Po.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        Po.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const r = await this.auth._redirectUserForId(t.eventId);
      if (r) return (this.user = r), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function Gw(i, t) {
  const r = Fw(t),
    s = Yw(i);
  if (!(await s._isAvailable())) return !1;
  const o = (await s._get(r)) === "true";
  return await s._remove(r), o;
}
function Qw(i, t) {
  Po.set(i._key(), t);
}
function Yw(i) {
  return Yn(i._redirectPersistence);
}
function Fw(i) {
  return Bo(qw, i.config.apiKey, i.name);
}
async function Xw(i, t, r = !1) {
  if (yn(i.app)) return Promise.reject(Dr(i));
  const s = uu(i),
    o = ab(s, t),
    d = await new Vw(s, o, r).execute();
  return (
    d &&
      !r &&
      (delete d.user._redirectEventId,
      await s._persistUserIfCurrent(d.user),
      await s._setRedirectUser(null, t)),
    d
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kw = 10 * 60 * 1e3;
class Zw {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let r = !1;
    return (
      this.consumers.forEach((s) => {
        this.isEventForConsumer(t, s) &&
          ((r = !0), this.sendToConsumer(t, s), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !$w(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        r || ((this.queuedRedirectEvent = t), (r = !0))),
      r
    );
  }
  sendToConsumer(t, r) {
    var s;
    if (t.error && !lb(t)) {
      const o =
        ((s = t.error.code) === null || s === void 0
          ? void 0
          : s.split("auth/")[1]) || "internal-error";
      r.onError(nn(this.auth, o));
    } else r.onAuthEvent(t);
  }
  isEventForConsumer(t, r) {
    const s = r.eventId === null || (!!t.eventId && t.eventId === r.eventId);
    return r.filter.includes(t.type) && s;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= Kw &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(Wv(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(Wv(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function Wv(i) {
  return [i.type, i.eventId, i.sessionId, i.tenantId]
    .filter((t) => t)
    .join("-");
}
function lb({ type: i, error: t }) {
  return (
    i === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
  );
}
function $w(i) {
  switch (i.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return lb(i);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Jw(i, t = {}) {
  return ka(i, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ww = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  eR = /^https?/;
async function tR(i) {
  if (i.config.emulator) return;
  const { authorizedDomains: t } = await Jw(i);
  for (const r of t)
    try {
      if (nR(r)) return;
    } catch {}
  Sn(i, "unauthorized-domain");
}
function nR(i) {
  const t = Ad(),
    { protocol: r, hostname: s } = new URL(t);
  if (i.startsWith("chrome-extension://")) {
    const d = new URL(i);
    return d.hostname === "" && s === ""
      ? r === "chrome-extension:" &&
          i.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : r === "chrome-extension:" && d.hostname === s;
  }
  if (!eR.test(r)) return !1;
  if (Ww.test(i)) return s === i;
  const o = i.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(s);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const iR = new fl(3e4, 6e4);
function ey() {
  const i = bn().___jsl;
  if (i != null && i.H) {
    for (const t of Object.keys(i.H))
      if (
        ((i.H[t].r = i.H[t].r || []),
        (i.H[t].L = i.H[t].L || []),
        (i.H[t].r = [...i.H[t].L]),
        i.CP)
      )
        for (let r = 0; r < i.CP.length; r++) i.CP[r] = null;
  }
}
function rR(i) {
  return new Promise((t, r) => {
    var s, o, c;
    function d() {
      ey(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            ey(), r(nn(i, "network-request-failed"));
          },
          timeout: iR.get(),
        });
    }
    if (
      !(
        (o = (s = bn().gapi) === null || s === void 0 ? void 0 : s.iframes) ===
          null || o === void 0
      ) &&
      o.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((c = bn().gapi) === null || c === void 0) && c.load) d();
    else {
      const h = ow("iframefcb");
      return (
        (bn()[h] = () => {
          gapi.load ? d() : r(nn(i, "network-request-failed"));
        }),
        sw(`${lw()}?onload=${h}`).catch((g) => r(g))
      );
    }
  }).catch((t) => {
    throw ((qo = null), t);
  });
}
let qo = null;
function aR(i) {
  return (qo = qo || rR(i)), qo;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sR = new fl(5e3, 15e3),
  lR = "__/auth/iframe",
  oR = "emulator/auth/iframe",
  uR = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  cR = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function fR(i) {
  const t = i.config;
  re(t.authDomain, i, "auth-domain-config-required");
  const r = t.emulator ? rh(t, oR) : `https://${i.config.authDomain}/${lR}`,
    s = { apiKey: t.apiKey, appName: i.name, v: cl },
    o = cR.get(i.config.apiHost);
  o && (s.eid = o);
  const c = i._getFrameworks();
  return c.length && (s.fw = c.join(",")), `${r}?${ul(s).slice(1)}`;
}
async function dR(i) {
  const t = await aR(i),
    r = bn().gapi;
  return (
    re(r, i, "internal-error"),
    t.open(
      {
        where: document.body,
        url: fR(i),
        messageHandlersFilter: r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: uR,
        dontclear: !0,
      },
      (s) =>
        new Promise(async (o, c) => {
          await s.restyle({ setHideOnLeave: !1 });
          const d = nn(i, "network-request-failed"),
            h = bn().setTimeout(() => {
              c(d);
            }, sR.get());
          function g() {
            bn().clearTimeout(h), o(s);
          }
          s.ping(g).then(g, () => {
            c(d);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hR = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  pR = 500,
  gR = 600,
  mR = "_blank",
  vR = "http://localhost";
class ty {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function yR(i, t, r, s = pR, o = gR) {
  const c = Math.max((window.screen.availHeight - o) / 2, 0).toString(),
    d = Math.max((window.screen.availWidth - s) / 2, 0).toString();
  let h = "";
  const g = Object.assign(Object.assign({}, hR), {
      width: s.toString(),
      height: o.toString(),
      top: c,
      left: d,
    }),
    m = mt().toLowerCase();
  r && (h = P0(m) ? mR : r), k0(m) && ((t = t || vR), (g.scrollbars = "yes"));
  const y = Object.entries(g).reduce((w, [A, U]) => `${w}${A}=${U},`, "");
  if (JD(m) && h !== "_self") return bR(t || "", h), new ty(null);
  const b = window.open(t || "", h, y);
  re(b, i, "popup-blocked");
  try {
    b.focus();
  } catch {}
  return new ty(b);
}
function bR(i, t) {
  const r = document.createElement("a");
  (r.href = i), (r.target = t);
  const s = document.createEvent("MouseEvent");
  s.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    r.dispatchEvent(s);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const SR = "__/auth/handler",
  ER = "emulator/auth/handler",
  TR = encodeURIComponent("fac");
async function ny(i, t, r, s, o, c) {
  re(i.config.authDomain, i, "auth-domain-config-required"),
    re(i.config.apiKey, i, "invalid-api-key");
  const d = {
    apiKey: i.config.apiKey,
    appName: i.name,
    authType: r,
    redirectUrl: s,
    v: cl,
    eventId: o,
  };
  if (t instanceof uh) {
    t.setDefaultLanguage(i.languageCode),
      (d.providerId = t.providerId || ""),
      E1(t.getCustomParameters()) ||
        (d.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [y, b] of Object.entries({})) d[y] = b;
  }
  if (t instanceof dl) {
    const y = t.getScopes().filter((b) => b !== "");
    y.length > 0 && (d.scopes = y.join(","));
  }
  i.tenantId && (d.tid = i.tenantId);
  const h = d;
  for (const y of Object.keys(h)) h[y] === void 0 && delete h[y];
  const g = await i._getAppCheckToken(),
    m = g ? `#${TR}=${encodeURIComponent(g)}` : "";
  return `${_R(i)}?${ul(h).slice(1)}${m}`;
}
function _R({ config: i }) {
  return i.emulator ? rh(i, ER) : `https://${i.authDomain}/${SR}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xf = "webStorageSupport";
class OR {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = eb),
      (this._completeRedirectFn = Xw),
      (this._overrideRedirectResult = Qw);
  }
  async _openPopup(t, r, s, o) {
    var c;
    Zn(
      (c = this.eventManagers[t._key()]) === null || c === void 0
        ? void 0
        : c.manager,
      "_initialize() not called before _openPopup()"
    );
    const d = await ny(t, r, s, Ad(), o);
    return yR(t, d, ch());
  }
  async _openRedirect(t, r, s, o) {
    await this._originValidation(t);
    const c = await ny(t, r, s, Ad(), o);
    return Rw(c), new Promise(() => {});
  }
  _initialize(t) {
    const r = t._key();
    if (this.eventManagers[r]) {
      const { manager: o, promise: c } = this.eventManagers[r];
      return o
        ? Promise.resolve(o)
        : (Zn(c, "If manager is not set, promise should be"), c);
    }
    const s = this.initAndGetManager(t);
    return (
      (this.eventManagers[r] = { promise: s }),
      s.catch(() => {
        delete this.eventManagers[r];
      }),
      s
    );
  }
  async initAndGetManager(t) {
    const r = await dR(t),
      s = new Zw(t);
    return (
      r.register(
        "authEvent",
        (o) => (
          re(o == null ? void 0 : o.authEvent, t, "invalid-auth-event"),
          { status: s.onEvent(o.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: s }),
      (this.iframes[t._key()] = r),
      s
    );
  }
  _isIframeWebStorageSupported(t, r) {
    this.iframes[t._key()].send(
      Xf,
      { type: Xf },
      (o) => {
        var c;
        const d =
          (c = o == null ? void 0 : o[0]) === null || c === void 0
            ? void 0
            : c[Xf];
        d !== void 0 && r(!!d), Sn(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const r = t._key();
    return (
      this.originValidationPromises[r] ||
        (this.originValidationPromises[r] = tR(t)),
      this.originValidationPromises[r]
    );
  }
  get _shouldInitProactively() {
    return Y0() || B0() || lh();
  }
}
const DR = OR;
var iy = "@firebase/auth",
  ry = "1.9.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wR {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const r = this.auth.onIdTokenChanged((s) => {
      t((s == null ? void 0 : s.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, r), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const r = this.internalListeners.get(t);
    r && (this.internalListeners.delete(t), r(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    re(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function RR(i) {
  switch (i) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function CR(i) {
  $s(
    new Ia(
      "auth",
      (t, { options: r }) => {
        const s = t.getProvider("app").getImmediate(),
          o = t.getProvider("heartbeat"),
          c = t.getProvider("app-check-internal"),
          { apiKey: d, authDomain: h } = s.options;
        re(d && !d.includes(":"), "invalid-api-key", { appName: s.name });
        const g = {
            apiKey: d,
            authDomain: h,
            clientPlatform: i,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: F0(i),
          },
          m = new rw(s, o, c, g);
        return cw(m, r), m;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, r, s) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    $s(
      new Ia(
        "auth-internal",
        (t) => {
          const r = uu(t.getProvider("auth").getImmediate());
          return ((s) => new wR(s))(r);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    va(iy, ry, RR(i)),
    va(iy, ry, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const AR = 5 * 60,
  NR = _0("authIdTokenMaxAge") || AR;
let ay = null;
const MR = (i) => async (t) => {
  const r = t && (await t.getIdTokenResult()),
    s = r && (new Date().getTime() - Date.parse(r.issuedAtTime)) / 1e3;
  if (s && s > NR) return;
  const o = r == null ? void 0 : r.token;
  ay !== o &&
    ((ay = o),
    await fetch(i, {
      method: o ? "POST" : "DELETE",
      headers: o ? { Authorization: `Bearer ${o}` } : {},
    }));
};
function xR(i = _D()) {
  const t = R0(i, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const r = uw(i, { popupRedirectResolver: DR, persistence: [zw, Ow, eb] }),
    s = _0("authTokenSyncURL");
  if (s && typeof isSecureContext == "boolean" && isSecureContext) {
    const c = new URL(s, location.origin);
    if (location.origin === c.origin) {
      const d = MR(c.toString());
      bw(r, d, () => d(r.currentUser)), yw(r, (h) => d(h));
    }
  }
  const o = u1("auth");
  return o && fw(r, `http://${o}`), r;
}
function UR() {
  var i, t;
  return (t =
    (i = document.getElementsByTagName("head")) === null || i === void 0
      ? void 0
      : i[0]) !== null && t !== void 0
    ? t
    : document;
}
aw({
  loadJS(i) {
    return new Promise((t, r) => {
      const s = document.createElement("script");
      s.setAttribute("src", i),
        (s.onload = t),
        (s.onerror = (o) => {
          const c = nn("internal-error");
          (c.customData = o), r(c);
        }),
        (s.type = "text/javascript"),
        (s.charset = "UTF-8"),
        UR().appendChild(s);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript:
    "https://www.google.com/recaptcha/enterprise.js?render=",
});
CR("Browser");
var IR = "firebase",
  LR = "11.3.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ va(IR, LR, "app");
const zR = {
    apiKey: "AIzaSyD8WOFhNwrES2g07yc_peHD5PyQKMMd8Bk",
    authDomain: "sportszone-1db2b.firebaseapp.com",
    projectId: "sportszone-1db2b",
    storageBucket: "sportszone-1db2b.firebasestorage.app",
    messagingSenderId: "455290984041",
    appId: "1:455290984041:web:1ff884095579ba285734f8",
  },
  HR = C0(zR),
  ob = x.createContext(),
  jR = ({ children: i }) => {
    const t = xR(HR),
      [r, s] = x.useState(null),
      [o, c] = x.useState(!0),
      d = new Vn();
    x.useEffect(() => {
      const m = Sw(t, (y) => {
        s(y), c(!1);
      });
      return () => m();
    }, [t]);
    const h = async () => {
        try {
          await Pw(t, d);
        } catch (m) {
          console.error("Login error:", m);
        }
      },
      g = async () => {
        try {
          await Ew(t), s(null);
        } catch (m) {
          console.error("Logout error:", m);
        }
      };
    return Q.jsx(ob.Provider, {
      value: { user: r, login: h, logout: g, loading: o },
      children: i,
    });
  },
  Ba = () => x.useContext(ob),
  kR = () => {
    const { user: i } = Ba();
    return Q.jsxs("div", {
      className:
        "flex flex-col items-center justify-center h-screen bg-gray-100",
      children: [
        Q.jsx("h1", {
          className: "text-4xl font-bold mb-6",
          children: "Welcome to Task Manager",
        }),
        Q.jsx("p", {
          className: "text-lg text-gray-700 mb-4",
          children:
            "Organize your tasks efficiently with our simple task management tool.",
        }),
        i
          ? Q.jsx(Sv, {
              to: "/dashboard",
              className:
                "px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600",
              children: "Go to Dashboard",
            })
          : Q.jsx(Sv, {
              to: "/login",
              className:
                "px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600",
              children: "Login to Get Started",
            }),
      ],
    });
  },
  BR = () => {
    const { login: i } = Ba(),
      t = Xd(),
      r = async () => {
        await i(), t("/dashboard");
      };
    return Q.jsx("div", {
      className: "flex items-center justify-center min-h-screen bg-gray-100",
      children: Q.jsxs("div", {
        className: "bg-white p-6 rounded-lg shadow-lg text-center",
        children: [
          Q.jsx("h1", {
            className: "text-2xl font-semibold mb-4",
            children: "Login",
          }),
          Q.jsx("button", {
            onClick: r,
            className:
              "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",
            children: "Sign in with Google",
          }),
        ],
      }),
    });
  },
  ub = x.createContext({ dragDropManager: void 0 });
function Qt(i) {
  return (
    "Minified Redux error #" +
    i +
    "; visit https://redux.js.org/Errors?code=" +
    i +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var sy = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  ly = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  oy = { INIT: "@@redux/INIT" + ly(), REPLACE: "@@redux/REPLACE" + ly() };
function PR(i) {
  if (typeof i != "object" || i === null) return !1;
  for (var t = i; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(i) === t;
}
function cb(i, t, r) {
  var s;
  if (
    (typeof t == "function" && typeof r == "function") ||
    (typeof r == "function" && typeof arguments[3] == "function")
  )
    throw new Error(Qt(0));
  if (
    (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
    typeof r < "u")
  ) {
    if (typeof r != "function") throw new Error(Qt(1));
    return r(cb)(i, t);
  }
  if (typeof i != "function") throw new Error(Qt(2));
  var o = i,
    c = t,
    d = [],
    h = d,
    g = !1;
  function m() {
    h === d && (h = d.slice());
  }
  function y() {
    if (g) throw new Error(Qt(3));
    return c;
  }
  function b(N) {
    if (typeof N != "function") throw new Error(Qt(4));
    if (g) throw new Error(Qt(5));
    var R = !0;
    return (
      m(),
      h.push(N),
      function () {
        if (R) {
          if (g) throw new Error(Qt(6));
          (R = !1), m();
          var P = h.indexOf(N);
          h.splice(P, 1), (d = null);
        }
      }
    );
  }
  function w(N) {
    if (!PR(N)) throw new Error(Qt(7));
    if (typeof N.type > "u") throw new Error(Qt(8));
    if (g) throw new Error(Qt(9));
    try {
      (g = !0), (c = o(c, N));
    } finally {
      g = !1;
    }
    for (var R = (d = h), k = 0; k < R.length; k++) {
      var P = R[k];
      P();
    }
    return N;
  }
  function A(N) {
    if (typeof N != "function") throw new Error(Qt(10));
    (o = N), w({ type: oy.REPLACE });
  }
  function U() {
    var N,
      R = b;
    return (
      (N = {
        subscribe: function (P) {
          if (typeof P != "object" || P === null) throw new Error(Qt(11));
          function q() {
            P.next && P.next(y());
          }
          q();
          var W = R(q);
          return { unsubscribe: W };
        },
      }),
      (N[sy] = function () {
        return this;
      }),
      N
    );
  }
  return (
    w({ type: oy.INIT }),
    (s = { dispatch: w, subscribe: b, getState: y, replaceReducer: A }),
    (s[sy] = U),
    s
  );
}
function ue(i, t, ...r) {
  if (qR() && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!i) {
    let s;
    if (t === void 0)
      s = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      let o = 0;
      (s = new Error(
        t.replace(/%s/g, function () {
          return r[o++];
        })
      )),
        (s.name = "Invariant Violation");
    }
    throw ((s.framesToPop = 1), s);
  }
}
function qR() {
  return typeof process < "u" && !0;
}
function VR(i, t, r) {
  return t.split(".").reduce((s, o) => (s && s[o] ? s[o] : r || null), i);
}
function GR(i, t) {
  return i.filter((r) => r !== t);
}
function fb(i) {
  return typeof i == "object";
}
function QR(i, t) {
  const r = new Map(),
    s = (c) => {
      r.set(c, r.has(c) ? r.get(c) + 1 : 1);
    };
  i.forEach(s), t.forEach(s);
  const o = [];
  return (
    r.forEach((c, d) => {
      c === 1 && o.push(d);
    }),
    o
  );
}
function YR(i, t) {
  return i.filter((r) => t.indexOf(r) > -1);
}
const dh = "dnd-core/INIT_COORDS",
  du = "dnd-core/BEGIN_DRAG",
  hh = "dnd-core/PUBLISH_DRAG_SOURCE",
  hu = "dnd-core/HOVER",
  pu = "dnd-core/DROP",
  gu = "dnd-core/END_DRAG";
function uy(i, t) {
  return {
    type: dh,
    payload: { sourceClientOffset: t || null, clientOffset: i || null },
  };
}
const FR = {
  type: dh,
  payload: { clientOffset: null, sourceClientOffset: null },
};
function XR(i) {
  return function (r = [], s = { publishSource: !0 }) {
    const {
        publishSource: o = !0,
        clientOffset: c,
        getSourceClientOffset: d,
      } = s,
      h = i.getMonitor(),
      g = i.getRegistry();
    i.dispatch(uy(c)), KR(r, h, g);
    const m = JR(r, h);
    if (m == null) {
      i.dispatch(FR);
      return;
    }
    let y = null;
    if (c) {
      if (!d) throw new Error("getSourceClientOffset must be defined");
      ZR(d), (y = d(m));
    }
    i.dispatch(uy(c, y));
    const w = g.getSource(m).beginDrag(h, m);
    if (w == null) return;
    $R(w), g.pinSource(m);
    const A = g.getSourceType(m);
    return {
      type: du,
      payload: {
        itemType: A,
        item: w,
        sourceId: m,
        clientOffset: c || null,
        sourceClientOffset: y || null,
        isSourcePublic: !!o,
      },
    };
  };
}
function KR(i, t, r) {
  ue(!t.isDragging(), "Cannot call beginDrag while dragging."),
    i.forEach(function (s) {
      ue(r.getSource(s), "Expected sourceIds to be registered.");
    });
}
function ZR(i) {
  ue(
    typeof i == "function",
    "When clientOffset is provided, getSourceClientOffset must be a function."
  );
}
function $R(i) {
  ue(fb(i), "Item must be an object.");
}
function JR(i, t) {
  let r = null;
  for (let s = i.length - 1; s >= 0; s--)
    if (t.canDragSource(i[s])) {
      r = i[s];
      break;
    }
  return r;
}
function WR(i, t, r) {
  return (
    t in i
      ? Object.defineProperty(i, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[t] = r),
    i
  );
}
function eC(i) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      s = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (s = s.concat(
        Object.getOwnPropertySymbols(r).filter(function (o) {
          return Object.getOwnPropertyDescriptor(r, o).enumerable;
        })
      )),
      s.forEach(function (o) {
        WR(i, o, r[o]);
      });
  }
  return i;
}
function tC(i) {
  return function (r = {}) {
    const s = i.getMonitor(),
      o = i.getRegistry();
    nC(s),
      aC(s).forEach((d, h) => {
        const g = iC(d, h, o, s),
          m = { type: pu, payload: { dropResult: eC({}, r, g) } };
        i.dispatch(m);
      });
  };
}
function nC(i) {
  ue(i.isDragging(), "Cannot call drop while not dragging."),
    ue(!i.didDrop(), "Cannot call drop twice during one drag operation.");
}
function iC(i, t, r, s) {
  const o = r.getTarget(i);
  let c = o ? o.drop(s, i) : void 0;
  return rC(c), typeof c > "u" && (c = t === 0 ? {} : s.getDropResult()), c;
}
function rC(i) {
  ue(
    typeof i > "u" || fb(i),
    "Drop result must either be an object or undefined."
  );
}
function aC(i) {
  const t = i.getTargetIds().filter(i.canDropOnTarget, i);
  return t.reverse(), t;
}
function sC(i) {
  return function () {
    const r = i.getMonitor(),
      s = i.getRegistry();
    lC(r);
    const o = r.getSourceId();
    return (
      o != null && (s.getSource(o, !0).endDrag(r, o), s.unpinSource()),
      { type: gu }
    );
  };
}
function lC(i) {
  ue(i.isDragging(), "Cannot call endDrag while not dragging.");
}
function xd(i, t) {
  return t === null
    ? i === null
    : Array.isArray(i)
    ? i.some((r) => r === t)
    : i === t;
}
function oC(i) {
  return function (r, { clientOffset: s } = {}) {
    uC(r);
    const o = r.slice(0),
      c = i.getMonitor(),
      d = i.getRegistry(),
      h = c.getItemType();
    return (
      fC(o, d, h),
      cC(o, c, d),
      dC(o, c, d),
      { type: hu, payload: { targetIds: o, clientOffset: s || null } }
    );
  };
}
function uC(i) {
  ue(Array.isArray(i), "Expected targetIds to be an array.");
}
function cC(i, t, r) {
  ue(t.isDragging(), "Cannot call hover while not dragging."),
    ue(!t.didDrop(), "Cannot call hover after drop.");
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    ue(
      i.lastIndexOf(o) === s,
      "Expected targetIds to be unique in the passed array."
    );
    const c = r.getTarget(o);
    ue(c, "Expected targetIds to be registered.");
  }
}
function fC(i, t, r) {
  for (let s = i.length - 1; s >= 0; s--) {
    const o = i[s],
      c = t.getTargetType(o);
    xd(c, r) || i.splice(s, 1);
  }
}
function dC(i, t, r) {
  i.forEach(function (s) {
    r.getTarget(s).hover(t, s);
  });
}
function hC(i) {
  return function () {
    if (i.getMonitor().isDragging()) return { type: hh };
  };
}
function pC(i) {
  return {
    beginDrag: XR(i),
    publishDragSource: hC(i),
    hover: oC(i),
    drop: tC(i),
    endDrag: sC(i),
  };
}
class gC {
  receiveBackend(t) {
    this.backend = t;
  }
  getMonitor() {
    return this.monitor;
  }
  getBackend() {
    return this.backend;
  }
  getRegistry() {
    return this.monitor.registry;
  }
  getActions() {
    const t = this,
      { dispatch: r } = this.store;
    function s(c) {
      return (...d) => {
        const h = c.apply(t, d);
        typeof h < "u" && r(h);
      };
    }
    const o = pC(this);
    return Object.keys(o).reduce((c, d) => {
      const h = o[d];
      return (c[d] = s(h)), c;
    }, {});
  }
  dispatch(t) {
    this.store.dispatch(t);
  }
  constructor(t, r) {
    (this.isSetUp = !1),
      (this.handleRefCountChange = () => {
        const s = this.store.getState().refCount > 0;
        this.backend &&
          (s && !this.isSetUp
            ? (this.backend.setup(), (this.isSetUp = !0))
            : !s &&
              this.isSetUp &&
              (this.backend.teardown(), (this.isSetUp = !1)));
      }),
      (this.store = t),
      (this.monitor = r),
      t.subscribe(this.handleRefCountChange);
  }
}
function mC(i, t) {
  return { x: i.x + t.x, y: i.y + t.y };
}
function db(i, t) {
  return { x: i.x - t.x, y: i.y - t.y };
}
function vC(i) {
  const {
    clientOffset: t,
    initialClientOffset: r,
    initialSourceClientOffset: s,
  } = i;
  return !t || !r || !s ? null : db(mC(t, s), r);
}
function yC(i) {
  const { clientOffset: t, initialClientOffset: r } = i;
  return !t || !r ? null : db(t, r);
}
const Fs = [],
  ph = [];
Fs.__IS_NONE__ = !0;
ph.__IS_ALL__ = !0;
function bC(i, t) {
  return i === Fs ? !1 : i === ph || typeof t > "u" ? !0 : YR(t, i).length > 0;
}
class SC {
  subscribeToStateChange(t, r = {}) {
    const { handlerIds: s } = r;
    ue(typeof t == "function", "listener must be a function."),
      ue(
        typeof s > "u" || Array.isArray(s),
        "handlerIds, when specified, must be an array of strings."
      );
    let o = this.store.getState().stateId;
    const c = () => {
      const d = this.store.getState(),
        h = d.stateId;
      try {
        h === o || (h === o + 1 && !bC(d.dirtyHandlerIds, s)) || t();
      } finally {
        o = h;
      }
    };
    return this.store.subscribe(c);
  }
  subscribeToOffsetChange(t) {
    ue(typeof t == "function", "listener must be a function.");
    let r = this.store.getState().dragOffset;
    const s = () => {
      const o = this.store.getState().dragOffset;
      o !== r && ((r = o), t());
    };
    return this.store.subscribe(s);
  }
  canDragSource(t) {
    if (!t) return !1;
    const r = this.registry.getSource(t);
    return (
      ue(r, `Expected to find a valid source. sourceId=${t}`),
      this.isDragging() ? !1 : r.canDrag(this, t)
    );
  }
  canDropOnTarget(t) {
    if (!t) return !1;
    const r = this.registry.getTarget(t);
    if (
      (ue(r, `Expected to find a valid target. targetId=${t}`),
      !this.isDragging() || this.didDrop())
    )
      return !1;
    const s = this.registry.getTargetType(t),
      o = this.getItemType();
    return xd(s, o) && r.canDrop(this, t);
  }
  isDragging() {
    return !!this.getItemType();
  }
  isDraggingSource(t) {
    if (!t) return !1;
    const r = this.registry.getSource(t, !0);
    if (
      (ue(r, `Expected to find a valid source. sourceId=${t}`),
      !this.isDragging() || !this.isSourcePublic())
    )
      return !1;
    const s = this.registry.getSourceType(t),
      o = this.getItemType();
    return s !== o ? !1 : r.isDragging(this, t);
  }
  isOverTarget(t, r = { shallow: !1 }) {
    if (!t) return !1;
    const { shallow: s } = r;
    if (!this.isDragging()) return !1;
    const o = this.registry.getTargetType(t),
      c = this.getItemType();
    if (c && !xd(o, c)) return !1;
    const d = this.getTargetIds();
    if (!d.length) return !1;
    const h = d.indexOf(t);
    return s ? h === d.length - 1 : h > -1;
  }
  getItemType() {
    return this.store.getState().dragOperation.itemType;
  }
  getItem() {
    return this.store.getState().dragOperation.item;
  }
  getSourceId() {
    return this.store.getState().dragOperation.sourceId;
  }
  getTargetIds() {
    return this.store.getState().dragOperation.targetIds;
  }
  getDropResult() {
    return this.store.getState().dragOperation.dropResult;
  }
  didDrop() {
    return this.store.getState().dragOperation.didDrop;
  }
  isSourcePublic() {
    return !!this.store.getState().dragOperation.isSourcePublic;
  }
  getInitialClientOffset() {
    return this.store.getState().dragOffset.initialClientOffset;
  }
  getInitialSourceClientOffset() {
    return this.store.getState().dragOffset.initialSourceClientOffset;
  }
  getClientOffset() {
    return this.store.getState().dragOffset.clientOffset;
  }
  getSourceClientOffset() {
    return vC(this.store.getState().dragOffset);
  }
  getDifferenceFromInitialOffset() {
    return yC(this.store.getState().dragOffset);
  }
  constructor(t, r) {
    (this.store = t), (this.registry = r);
  }
}
const cy = typeof global < "u" ? global : self,
  hb = cy.MutationObserver || cy.WebKitMutationObserver;
function pb(i) {
  return function () {
    const r = setTimeout(o, 0),
      s = setInterval(o, 50);
    function o() {
      clearTimeout(r), clearInterval(s), i();
    }
  };
}
function EC(i) {
  let t = 1;
  const r = new hb(i),
    s = document.createTextNode("");
  return (
    r.observe(s, { characterData: !0 }),
    function () {
      (t = -t), (s.data = t);
    }
  );
}
const TC = typeof hb == "function" ? EC : pb;
class _C {
  enqueueTask(t) {
    const { queue: r, requestFlush: s } = this;
    r.length || (s(), (this.flushing = !0)), (r[r.length] = t);
  }
  constructor() {
    (this.queue = []),
      (this.pendingErrors = []),
      (this.flushing = !1),
      (this.index = 0),
      (this.capacity = 1024),
      (this.flush = () => {
        const { queue: t } = this;
        for (; this.index < t.length; ) {
          const r = this.index;
          if ((this.index++, t[r].call(), this.index > this.capacity)) {
            for (let s = 0, o = t.length - this.index; s < o; s++)
              t[s] = t[s + this.index];
            (t.length -= this.index), (this.index = 0);
          }
        }
        (t.length = 0), (this.index = 0), (this.flushing = !1);
      }),
      (this.registerPendingError = (t) => {
        this.pendingErrors.push(t), this.requestErrorThrow();
      }),
      (this.requestFlush = TC(this.flush)),
      (this.requestErrorThrow = pb(() => {
        if (this.pendingErrors.length) throw this.pendingErrors.shift();
      }));
  }
}
class OC {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      (this.task = null), this.release(this);
    }
  }
  constructor(t, r) {
    (this.onError = t), (this.release = r), (this.task = null);
  }
}
class DC {
  create(t) {
    const r = this.freeTasks,
      s = r.length ? r.pop() : new OC(this.onError, (o) => (r[r.length] = o));
    return (s.task = t), s;
  }
  constructor(t) {
    (this.onError = t), (this.freeTasks = []);
  }
}
const gb = new _C(),
  wC = new DC(gb.registerPendingError);
function RC(i) {
  gb.enqueueTask(wC.create(i));
}
const gh = "dnd-core/ADD_SOURCE",
  mh = "dnd-core/ADD_TARGET",
  vh = "dnd-core/REMOVE_SOURCE",
  mu = "dnd-core/REMOVE_TARGET";
function CC(i) {
  return { type: gh, payload: { sourceId: i } };
}
function AC(i) {
  return { type: mh, payload: { targetId: i } };
}
function NC(i) {
  return { type: vh, payload: { sourceId: i } };
}
function MC(i) {
  return { type: mu, payload: { targetId: i } };
}
function xC(i) {
  ue(typeof i.canDrag == "function", "Expected canDrag to be a function."),
    ue(
      typeof i.beginDrag == "function",
      "Expected beginDrag to be a function."
    ),
    ue(typeof i.endDrag == "function", "Expected endDrag to be a function.");
}
function UC(i) {
  ue(typeof i.canDrop == "function", "Expected canDrop to be a function."),
    ue(typeof i.hover == "function", "Expected hover to be a function."),
    ue(typeof i.drop == "function", "Expected beginDrag to be a function.");
}
function Ud(i, t) {
  if (t && Array.isArray(i)) {
    i.forEach((r) => Ud(r, !1));
    return;
  }
  ue(
    typeof i == "string" || typeof i == "symbol",
    t
      ? "Type can only be a string, a symbol, or an array of either."
      : "Type can only be a string or a symbol."
  );
}
var Xt;
(function (i) {
  (i.SOURCE = "SOURCE"), (i.TARGET = "TARGET");
})(Xt || (Xt = {}));
let IC = 0;
function LC() {
  return IC++;
}
function zC(i) {
  const t = LC().toString();
  switch (i) {
    case Xt.SOURCE:
      return `S${t}`;
    case Xt.TARGET:
      return `T${t}`;
    default:
      throw new Error(`Unknown Handler Role: ${i}`);
  }
}
function fy(i) {
  switch (i[0]) {
    case "S":
      return Xt.SOURCE;
    case "T":
      return Xt.TARGET;
    default:
      throw new Error(`Cannot parse handler ID: ${i}`);
  }
}
function dy(i, t) {
  const r = i.entries();
  let s = !1;
  do {
    const {
      done: o,
      value: [, c],
    } = r.next();
    if (c === t) return !0;
    s = !!o;
  } while (!s);
  return !1;
}
class HC {
  addSource(t, r) {
    Ud(t), xC(r);
    const s = this.addHandler(Xt.SOURCE, t, r);
    return this.store.dispatch(CC(s)), s;
  }
  addTarget(t, r) {
    Ud(t, !0), UC(r);
    const s = this.addHandler(Xt.TARGET, t, r);
    return this.store.dispatch(AC(s)), s;
  }
  containsHandler(t) {
    return dy(this.dragSources, t) || dy(this.dropTargets, t);
  }
  getSource(t, r = !1) {
    return (
      ue(this.isSourceId(t), "Expected a valid source ID."),
      r && t === this.pinnedSourceId
        ? this.pinnedSource
        : this.dragSources.get(t)
    );
  }
  getTarget(t) {
    return (
      ue(this.isTargetId(t), "Expected a valid target ID."),
      this.dropTargets.get(t)
    );
  }
  getSourceType(t) {
    return (
      ue(this.isSourceId(t), "Expected a valid source ID."), this.types.get(t)
    );
  }
  getTargetType(t) {
    return (
      ue(this.isTargetId(t), "Expected a valid target ID."), this.types.get(t)
    );
  }
  isSourceId(t) {
    return fy(t) === Xt.SOURCE;
  }
  isTargetId(t) {
    return fy(t) === Xt.TARGET;
  }
  removeSource(t) {
    ue(this.getSource(t), "Expected an existing source."),
      this.store.dispatch(NC(t)),
      RC(() => {
        this.dragSources.delete(t), this.types.delete(t);
      });
  }
  removeTarget(t) {
    ue(this.getTarget(t), "Expected an existing target."),
      this.store.dispatch(MC(t)),
      this.dropTargets.delete(t),
      this.types.delete(t);
  }
  pinSource(t) {
    const r = this.getSource(t);
    ue(r, "Expected an existing source."),
      (this.pinnedSourceId = t),
      (this.pinnedSource = r);
  }
  unpinSource() {
    ue(this.pinnedSource, "No source is pinned at the time."),
      (this.pinnedSourceId = null),
      (this.pinnedSource = null);
  }
  addHandler(t, r, s) {
    const o = zC(t);
    return (
      this.types.set(o, r),
      t === Xt.SOURCE
        ? this.dragSources.set(o, s)
        : t === Xt.TARGET && this.dropTargets.set(o, s),
      o
    );
  }
  constructor(t) {
    (this.types = new Map()),
      (this.dragSources = new Map()),
      (this.dropTargets = new Map()),
      (this.pinnedSourceId = null),
      (this.pinnedSource = null),
      (this.store = t);
  }
}
const jC = (i, t) => i === t;
function kC(i, t) {
  return !i && !t ? !0 : !i || !t ? !1 : i.x === t.x && i.y === t.y;
}
function BC(i, t, r = jC) {
  if (i.length !== t.length) return !1;
  for (let s = 0; s < i.length; ++s) if (!r(i[s], t[s])) return !1;
  return !0;
}
function PC(i = Fs, t) {
  switch (t.type) {
    case hu:
      break;
    case gh:
    case mh:
    case mu:
    case vh:
      return Fs;
    case du:
    case hh:
    case gu:
    case pu:
    default:
      return ph;
  }
  const { targetIds: r = [], prevTargetIds: s = [] } = t.payload,
    o = QR(r, s);
  if (!(o.length > 0 || !BC(r, s))) return Fs;
  const d = s[s.length - 1],
    h = r[r.length - 1];
  return d !== h && (d && o.push(d), h && o.push(h)), o;
}
function qC(i, t, r) {
  return (
    t in i
      ? Object.defineProperty(i, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[t] = r),
    i
  );
}
function VC(i) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      s = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (s = s.concat(
        Object.getOwnPropertySymbols(r).filter(function (o) {
          return Object.getOwnPropertyDescriptor(r, o).enumerable;
        })
      )),
      s.forEach(function (o) {
        qC(i, o, r[o]);
      });
  }
  return i;
}
const hy = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null,
};
function GC(i = hy, t) {
  const { payload: r } = t;
  switch (t.type) {
    case dh:
    case du:
      return {
        initialSourceClientOffset: r.sourceClientOffset,
        initialClientOffset: r.clientOffset,
        clientOffset: r.clientOffset,
      };
    case hu:
      return kC(i.clientOffset, r.clientOffset)
        ? i
        : VC({}, i, { clientOffset: r.clientOffset });
    case gu:
    case pu:
      return hy;
    default:
      return i;
  }
}
function QC(i, t, r) {
  return (
    t in i
      ? Object.defineProperty(i, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[t] = r),
    i
  );
}
function ga(i) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      s = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (s = s.concat(
        Object.getOwnPropertySymbols(r).filter(function (o) {
          return Object.getOwnPropertyDescriptor(r, o).enumerable;
        })
      )),
      s.forEach(function (o) {
        QC(i, o, r[o]);
      });
  }
  return i;
}
const YC = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null,
};
function FC(i = YC, t) {
  const { payload: r } = t;
  switch (t.type) {
    case du:
      return ga({}, i, {
        itemType: r.itemType,
        item: r.item,
        sourceId: r.sourceId,
        isSourcePublic: r.isSourcePublic,
        dropResult: null,
        didDrop: !1,
      });
    case hh:
      return ga({}, i, { isSourcePublic: !0 });
    case hu:
      return ga({}, i, { targetIds: r.targetIds });
    case mu:
      return i.targetIds.indexOf(r.targetId) === -1
        ? i
        : ga({}, i, { targetIds: GR(i.targetIds, r.targetId) });
    case pu:
      return ga({}, i, {
        dropResult: r.dropResult,
        didDrop: !0,
        targetIds: [],
      });
    case gu:
      return ga({}, i, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: !1,
        isSourcePublic: null,
        targetIds: [],
      });
    default:
      return i;
  }
}
function XC(i = 0, t) {
  switch (t.type) {
    case gh:
    case mh:
      return i + 1;
    case vh:
    case mu:
      return i - 1;
    default:
      return i;
  }
}
function KC(i = 0) {
  return i + 1;
}
function ZC(i, t, r) {
  return (
    t in i
      ? Object.defineProperty(i, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[t] = r),
    i
  );
}
function $C(i) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      s = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (s = s.concat(
        Object.getOwnPropertySymbols(r).filter(function (o) {
          return Object.getOwnPropertyDescriptor(r, o).enumerable;
        })
      )),
      s.forEach(function (o) {
        ZC(i, o, r[o]);
      });
  }
  return i;
}
function JC(i = {}, t) {
  return {
    dirtyHandlerIds: PC(i.dirtyHandlerIds, {
      type: t.type,
      payload: $C({}, t.payload, {
        prevTargetIds: VR(i, "dragOperation.targetIds", []),
      }),
    }),
    dragOffset: GC(i.dragOffset, t),
    refCount: XC(i.refCount, t),
    dragOperation: FC(i.dragOperation, t),
    stateId: KC(i.stateId),
  };
}
function WC(i, t = void 0, r = {}, s = !1) {
  const o = eA(s),
    c = new SC(o, new HC(o)),
    d = new gC(o, c),
    h = i(d, t, r);
  return d.receiveBackend(h), d;
}
function eA(i) {
  const t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return cb(JC, i && t && t({ name: "dnd-core", instanceId: "dnd-core" }));
}
function tA(i, t) {
  if (i == null) return {};
  var r = nA(i, t),
    s,
    o;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(i);
    for (o = 0; o < c.length; o++)
      (s = c[o]),
        !(t.indexOf(s) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(i, s) &&
          (r[s] = i[s]);
  }
  return r;
}
function nA(i, t) {
  if (i == null) return {};
  var r = {},
    s = Object.keys(i),
    o,
    c;
  for (c = 0; c < s.length; c++)
    (o = s[c]), !(t.indexOf(o) >= 0) && (r[o] = i[o]);
  return r;
}
let py = 0;
const Vo = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
var iA = x.memo(function (t) {
  var { children: r } = t,
    s = tA(t, ["children"]);
  const [o, c] = rA(s);
  return (
    x.useEffect(() => {
      if (c) {
        const d = mb();
        return (
          ++py,
          () => {
            --py === 0 && (d[Vo] = null);
          }
        );
      }
    }, []),
    Q.jsx(ub.Provider, { value: o, children: r })
  );
});
function rA(i) {
  if ("manager" in i) return [{ dragDropManager: i.manager }, !1];
  const t = aA(i.backend, i.context, i.options, i.debugMode),
    r = !i.context;
  return [t, r];
}
function aA(i, t = mb(), r, s) {
  const o = t;
  return o[Vo] || (o[Vo] = { dragDropManager: WC(i, t, r, s) }), o[Vo];
}
function mb() {
  return typeof global < "u" ? global : window;
}
var Kf, gy;
function sA() {
  return (
    gy ||
      ((gy = 1),
      (Kf = function i(t, r) {
        if (t === r) return !0;
        if (t && r && typeof t == "object" && typeof r == "object") {
          if (t.constructor !== r.constructor) return !1;
          var s, o, c;
          if (Array.isArray(t)) {
            if (((s = t.length), s != r.length)) return !1;
            for (o = s; o-- !== 0; ) if (!i(t[o], r[o])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === r.source && t.flags === r.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === r.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === r.toString();
          if (
            ((c = Object.keys(t)), (s = c.length), s !== Object.keys(r).length)
          )
            return !1;
          for (o = s; o-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(r, c[o])) return !1;
          for (o = s; o-- !== 0; ) {
            var d = c[o];
            if (!i(t[d], r[d])) return !1;
          }
          return !0;
        }
        return t !== t && r !== r;
      })),
    Kf
  );
}
var lA = sA();
const oA = Vy(lA),
  Nr = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function uA(i, t, r) {
  const [s, o] = x.useState(() => t(i)),
    c = x.useCallback(() => {
      const d = t(i);
      oA(s, d) || (o(d), r && r());
    }, [s, i, r]);
  return Nr(c), [s, c];
}
function cA(i, t, r) {
  const [s, o] = uA(i, t, r);
  return (
    Nr(
      function () {
        const d = i.getHandlerId();
        if (d != null) return i.subscribeToStateChange(o, { handlerIds: [d] });
      },
      [i, o]
    ),
    s
  );
}
function vb(i, t, r) {
  return cA(t, i || (() => ({})), () => r.reconnect());
}
function yb(i, t) {
  const r = [];
  return (
    typeof i != "function" && r.push(i),
    x.useMemo(() => (typeof i == "function" ? i() : i), r)
  );
}
function fA(i) {
  return x.useMemo(() => i.hooks.dragSource(), [i]);
}
function dA(i) {
  return x.useMemo(() => i.hooks.dragPreview(), [i]);
}
let Zf = !1,
  $f = !1;
class hA {
  receiveHandlerId(t) {
    this.sourceId = t;
  }
  getHandlerId() {
    return this.sourceId;
  }
  canDrag() {
    ue(
      !Zf,
      "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
    );
    try {
      return (Zf = !0), this.internalMonitor.canDragSource(this.sourceId);
    } finally {
      Zf = !1;
    }
  }
  isDragging() {
    if (!this.sourceId) return !1;
    ue(
      !$f,
      "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
    );
    try {
      return ($f = !0), this.internalMonitor.isDraggingSource(this.sourceId);
    } finally {
      $f = !1;
    }
  }
  subscribeToStateChange(t, r) {
    return this.internalMonitor.subscribeToStateChange(t, r);
  }
  isDraggingSource(t) {
    return this.internalMonitor.isDraggingSource(t);
  }
  isOverTarget(t, r) {
    return this.internalMonitor.isOverTarget(t, r);
  }
  getTargetIds() {
    return this.internalMonitor.getTargetIds();
  }
  isSourcePublic() {
    return this.internalMonitor.isSourcePublic();
  }
  getSourceId() {
    return this.internalMonitor.getSourceId();
  }
  subscribeToOffsetChange(t) {
    return this.internalMonitor.subscribeToOffsetChange(t);
  }
  canDragSource(t) {
    return this.internalMonitor.canDragSource(t);
  }
  canDropOnTarget(t) {
    return this.internalMonitor.canDropOnTarget(t);
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(t) {
    (this.sourceId = null), (this.internalMonitor = t.getMonitor());
  }
}
let Jf = !1;
class pA {
  receiveHandlerId(t) {
    this.targetId = t;
  }
  getHandlerId() {
    return this.targetId;
  }
  subscribeToStateChange(t, r) {
    return this.internalMonitor.subscribeToStateChange(t, r);
  }
  canDrop() {
    if (!this.targetId) return !1;
    ue(
      !Jf,
      "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor"
    );
    try {
      return (Jf = !0), this.internalMonitor.canDropOnTarget(this.targetId);
    } finally {
      Jf = !1;
    }
  }
  isOver(t) {
    return this.targetId
      ? this.internalMonitor.isOverTarget(this.targetId, t)
      : !1;
  }
  getItemType() {
    return this.internalMonitor.getItemType();
  }
  getItem() {
    return this.internalMonitor.getItem();
  }
  getDropResult() {
    return this.internalMonitor.getDropResult();
  }
  didDrop() {
    return this.internalMonitor.didDrop();
  }
  getInitialClientOffset() {
    return this.internalMonitor.getInitialClientOffset();
  }
  getInitialSourceClientOffset() {
    return this.internalMonitor.getInitialSourceClientOffset();
  }
  getSourceClientOffset() {
    return this.internalMonitor.getSourceClientOffset();
  }
  getClientOffset() {
    return this.internalMonitor.getClientOffset();
  }
  getDifferenceFromInitialOffset() {
    return this.internalMonitor.getDifferenceFromInitialOffset();
  }
  constructor(t) {
    (this.targetId = null), (this.internalMonitor = t.getMonitor());
  }
}
function gA(i, t, r) {
  const s = r.getRegistry(),
    o = s.addTarget(i, t);
  return [o, () => s.removeTarget(o)];
}
function mA(i, t, r) {
  const s = r.getRegistry(),
    o = s.addSource(i, t);
  return [o, () => s.removeSource(o)];
}
function Id(i, t, r, s) {
  let o;
  if (o !== void 0) return !!o;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  const c = Object.keys(i),
    d = Object.keys(t);
  if (c.length !== d.length) return !1;
  const h = Object.prototype.hasOwnProperty.bind(t);
  for (let g = 0; g < c.length; g++) {
    const m = c[g];
    if (!h(m)) return !1;
    const y = i[m],
      b = t[m];
    if (((o = void 0), o === !1 || (o === void 0 && y !== b))) return !1;
  }
  return !0;
}
function Ld(i) {
  return (
    i !== null &&
    typeof i == "object" &&
    Object.prototype.hasOwnProperty.call(i, "current")
  );
}
function vA(i) {
  if (typeof i.type == "string") return;
  const t = i.type.displayName || i.type.name || "the component";
  throw new Error(
    `Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`
  );
}
function yA(i) {
  return (t = null, r = null) => {
    if (!x.isValidElement(t)) {
      const c = t;
      return i(c, r), c;
    }
    const s = t;
    return vA(s), bA(s, r ? (c) => i(c, r) : i);
  };
}
function bb(i) {
  const t = {};
  return (
    Object.keys(i).forEach((r) => {
      const s = i[r];
      if (r.endsWith("Ref")) t[r] = i[r];
      else {
        const o = yA(s);
        t[r] = () => o;
      }
    }),
    t
  );
}
function my(i, t) {
  typeof i == "function" ? i(t) : (i.current = t);
}
function bA(i, t) {
  const r = i.ref;
  return (
    ue(
      typeof r != "string",
      "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"
    ),
    r
      ? x.cloneElement(i, {
          ref: (s) => {
            my(r, s), my(t, s);
          },
        })
      : x.cloneElement(i, { ref: t })
  );
}
class SA {
  receiveHandlerId(t) {
    this.handlerId !== t && ((this.handlerId = t), this.reconnect());
  }
  get connectTarget() {
    return this.dragSource;
  }
  get dragSourceOptions() {
    return this.dragSourceOptionsInternal;
  }
  set dragSourceOptions(t) {
    this.dragSourceOptionsInternal = t;
  }
  get dragPreviewOptions() {
    return this.dragPreviewOptionsInternal;
  }
  set dragPreviewOptions(t) {
    this.dragPreviewOptionsInternal = t;
  }
  reconnect() {
    const t = this.reconnectDragSource();
    this.reconnectDragPreview(t);
  }
  reconnectDragSource() {
    const t = this.dragSource,
      r =
        this.didHandlerIdChange() ||
        this.didConnectedDragSourceChange() ||
        this.didDragSourceOptionsChange();
    return (
      r && this.disconnectDragSource(),
      this.handlerId
        ? t
          ? (r &&
              ((this.lastConnectedHandlerId = this.handlerId),
              (this.lastConnectedDragSource = t),
              (this.lastConnectedDragSourceOptions = this.dragSourceOptions),
              (this.dragSourceUnsubscribe = this.backend.connectDragSource(
                this.handlerId,
                t,
                this.dragSourceOptions
              ))),
            r)
          : ((this.lastConnectedDragSource = t), r)
        : r
    );
  }
  reconnectDragPreview(t = !1) {
    const r = this.dragPreview,
      s =
        t ||
        this.didHandlerIdChange() ||
        this.didConnectedDragPreviewChange() ||
        this.didDragPreviewOptionsChange();
    if ((s && this.disconnectDragPreview(), !!this.handlerId)) {
      if (!r) {
        this.lastConnectedDragPreview = r;
        return;
      }
      s &&
        ((this.lastConnectedHandlerId = this.handlerId),
        (this.lastConnectedDragPreview = r),
        (this.lastConnectedDragPreviewOptions = this.dragPreviewOptions),
        (this.dragPreviewUnsubscribe = this.backend.connectDragPreview(
          this.handlerId,
          r,
          this.dragPreviewOptions
        )));
    }
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didConnectedDragSourceChange() {
    return this.lastConnectedDragSource !== this.dragSource;
  }
  didConnectedDragPreviewChange() {
    return this.lastConnectedDragPreview !== this.dragPreview;
  }
  didDragSourceOptionsChange() {
    return !Id(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
  }
  didDragPreviewOptionsChange() {
    return !Id(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
  }
  disconnectDragSource() {
    this.dragSourceUnsubscribe &&
      (this.dragSourceUnsubscribe(), (this.dragSourceUnsubscribe = void 0));
  }
  disconnectDragPreview() {
    this.dragPreviewUnsubscribe &&
      (this.dragPreviewUnsubscribe(),
      (this.dragPreviewUnsubscribe = void 0),
      (this.dragPreviewNode = null),
      (this.dragPreviewRef = null));
  }
  get dragSource() {
    return (
      this.dragSourceNode || (this.dragSourceRef && this.dragSourceRef.current)
    );
  }
  get dragPreview() {
    return (
      this.dragPreviewNode ||
      (this.dragPreviewRef && this.dragPreviewRef.current)
    );
  }
  clearDragSource() {
    (this.dragSourceNode = null), (this.dragSourceRef = null);
  }
  clearDragPreview() {
    (this.dragPreviewNode = null), (this.dragPreviewRef = null);
  }
  constructor(t) {
    (this.hooks = bb({
      dragSource: (r, s) => {
        this.clearDragSource(),
          (this.dragSourceOptions = s || null),
          Ld(r) ? (this.dragSourceRef = r) : (this.dragSourceNode = r),
          this.reconnectDragSource();
      },
      dragPreview: (r, s) => {
        this.clearDragPreview(),
          (this.dragPreviewOptions = s || null),
          Ld(r) ? (this.dragPreviewRef = r) : (this.dragPreviewNode = r),
          this.reconnectDragPreview();
      },
    })),
      (this.handlerId = null),
      (this.dragSourceRef = null),
      (this.dragSourceOptionsInternal = null),
      (this.dragPreviewRef = null),
      (this.dragPreviewOptionsInternal = null),
      (this.lastConnectedHandlerId = null),
      (this.lastConnectedDragSource = null),
      (this.lastConnectedDragSourceOptions = null),
      (this.lastConnectedDragPreview = null),
      (this.lastConnectedDragPreviewOptions = null),
      (this.backend = t);
  }
}
class EA {
  get connectTarget() {
    return this.dropTarget;
  }
  reconnect() {
    const t =
      this.didHandlerIdChange() ||
      this.didDropTargetChange() ||
      this.didOptionsChange();
    t && this.disconnectDropTarget();
    const r = this.dropTarget;
    if (this.handlerId) {
      if (!r) {
        this.lastConnectedDropTarget = r;
        return;
      }
      t &&
        ((this.lastConnectedHandlerId = this.handlerId),
        (this.lastConnectedDropTarget = r),
        (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
        (this.unsubscribeDropTarget = this.backend.connectDropTarget(
          this.handlerId,
          r,
          this.dropTargetOptions
        )));
    }
  }
  receiveHandlerId(t) {
    t !== this.handlerId && ((this.handlerId = t), this.reconnect());
  }
  get dropTargetOptions() {
    return this.dropTargetOptionsInternal;
  }
  set dropTargetOptions(t) {
    this.dropTargetOptionsInternal = t;
  }
  didHandlerIdChange() {
    return this.lastConnectedHandlerId !== this.handlerId;
  }
  didDropTargetChange() {
    return this.lastConnectedDropTarget !== this.dropTarget;
  }
  didOptionsChange() {
    return !Id(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
  }
  disconnectDropTarget() {
    this.unsubscribeDropTarget &&
      (this.unsubscribeDropTarget(), (this.unsubscribeDropTarget = void 0));
  }
  get dropTarget() {
    return (
      this.dropTargetNode || (this.dropTargetRef && this.dropTargetRef.current)
    );
  }
  clearDropTarget() {
    (this.dropTargetRef = null), (this.dropTargetNode = null);
  }
  constructor(t) {
    (this.hooks = bb({
      dropTarget: (r, s) => {
        this.clearDropTarget(),
          (this.dropTargetOptions = s),
          Ld(r) ? (this.dropTargetRef = r) : (this.dropTargetNode = r),
          this.reconnect();
      },
    })),
      (this.handlerId = null),
      (this.dropTargetRef = null),
      (this.dropTargetOptionsInternal = null),
      (this.lastConnectedHandlerId = null),
      (this.lastConnectedDropTarget = null),
      (this.lastConnectedDropTargetOptions = null),
      (this.backend = t);
  }
}
function Pa() {
  const { dragDropManager: i } = x.useContext(ub);
  return ue(i != null, "Expected drag drop context"), i;
}
function TA(i, t) {
  const r = Pa(),
    s = x.useMemo(() => new SA(r.getBackend()), [r]);
  return (
    Nr(
      () => (
        (s.dragSourceOptions = i || null),
        s.reconnect(),
        () => s.disconnectDragSource()
      ),
      [s, i]
    ),
    Nr(
      () => (
        (s.dragPreviewOptions = t || null),
        s.reconnect(),
        () => s.disconnectDragPreview()
      ),
      [s, t]
    ),
    s
  );
}
function _A() {
  const i = Pa();
  return x.useMemo(() => new hA(i), [i]);
}
class OA {
  beginDrag() {
    const t = this.spec,
      r = this.monitor;
    let s = null;
    return (
      typeof t.item == "object"
        ? (s = t.item)
        : typeof t.item == "function"
        ? (s = t.item(r))
        : (s = {}),
      s ?? null
    );
  }
  canDrag() {
    const t = this.spec,
      r = this.monitor;
    return typeof t.canDrag == "boolean"
      ? t.canDrag
      : typeof t.canDrag == "function"
      ? t.canDrag(r)
      : !0;
  }
  isDragging(t, r) {
    const s = this.spec,
      o = this.monitor,
      { isDragging: c } = s;
    return c ? c(o) : r === t.getSourceId();
  }
  endDrag() {
    const t = this.spec,
      r = this.monitor,
      s = this.connector,
      { end: o } = t;
    o && o(r.getItem(), r), s.reconnect();
  }
  constructor(t, r, s) {
    (this.spec = t), (this.monitor = r), (this.connector = s);
  }
}
function DA(i, t, r) {
  const s = x.useMemo(() => new OA(i, t, r), [t, r]);
  return (
    x.useEffect(() => {
      s.spec = i;
    }, [i]),
    s
  );
}
function wA(i) {
  return x.useMemo(() => {
    const t = i.type;
    return ue(t != null, "spec.type must be defined"), t;
  }, [i]);
}
function RA(i, t, r) {
  const s = Pa(),
    o = DA(i, t, r),
    c = wA(i);
  Nr(
    function () {
      if (c != null) {
        const [h, g] = mA(c, o, s);
        return t.receiveHandlerId(h), r.receiveHandlerId(h), g;
      }
    },
    [s, t, r, o, c]
  );
}
function CA(i, t) {
  const r = yb(i);
  ue(
    !r.begin,
    "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)"
  );
  const s = _A(),
    o = TA(r.options, r.previewOptions);
  return RA(r, s, o), [vb(r.collect, s, o), fA(o), dA(o)];
}
function AA(i) {
  return x.useMemo(() => i.hooks.dropTarget(), [i]);
}
function NA(i) {
  const t = Pa(),
    r = x.useMemo(() => new EA(t.getBackend()), [t]);
  return (
    Nr(
      () => (
        (r.dropTargetOptions = i || null),
        r.reconnect(),
        () => r.disconnectDropTarget()
      ),
      [i]
    ),
    r
  );
}
function MA() {
  const i = Pa();
  return x.useMemo(() => new pA(i), [i]);
}
function xA(i) {
  const { accept: t } = i;
  return x.useMemo(
    () => (
      ue(i.accept != null, "accept must be defined"), Array.isArray(t) ? t : [t]
    ),
    [t]
  );
}
class UA {
  canDrop() {
    const t = this.spec,
      r = this.monitor;
    return t.canDrop ? t.canDrop(r.getItem(), r) : !0;
  }
  hover() {
    const t = this.spec,
      r = this.monitor;
    t.hover && t.hover(r.getItem(), r);
  }
  drop() {
    const t = this.spec,
      r = this.monitor;
    if (t.drop) return t.drop(r.getItem(), r);
  }
  constructor(t, r) {
    (this.spec = t), (this.monitor = r);
  }
}
function IA(i, t) {
  const r = x.useMemo(() => new UA(i, t), [t]);
  return (
    x.useEffect(() => {
      r.spec = i;
    }, [i]),
    r
  );
}
function LA(i, t, r) {
  const s = Pa(),
    o = IA(i, t),
    c = xA(i);
  Nr(
    function () {
      const [h, g] = gA(c, o, s);
      return t.receiveHandlerId(h), r.receiveHandlerId(h), g;
    },
    [s, t, o, r, c.map((d) => d.toString()).join("|")]
  );
}
function zA(i, t) {
  const r = yb(i),
    s = MA(),
    o = NA(r.options);
  return LA(r, s, o), [vb(r.collect, s, o), AA(o)];
}
function Sb(i) {
  let t = null;
  return () => (t == null && (t = i()), t);
}
function HA(i, t) {
  return i.filter((r) => r !== t);
}
function jA(i, t) {
  const r = new Set(),
    s = (c) => r.add(c);
  i.forEach(s), t.forEach(s);
  const o = [];
  return r.forEach((c) => o.push(c)), o;
}
class kA {
  enter(t) {
    const r = this.entered.length,
      s = (o) => this.isNodeInDocument(o) && (!o.contains || o.contains(t));
    return (
      (this.entered = jA(this.entered.filter(s), [t])),
      r === 0 && this.entered.length > 0
    );
  }
  leave(t) {
    const r = this.entered.length;
    return (
      (this.entered = HA(this.entered.filter(this.isNodeInDocument), t)),
      r > 0 && this.entered.length === 0
    );
  }
  reset() {
    this.entered = [];
  }
  constructor(t) {
    (this.entered = []), (this.isNodeInDocument = t);
  }
}
class BA {
  initializeExposedProperties() {
    Object.keys(this.config.exposeProperties).forEach((t) => {
      Object.defineProperty(this.item, t, {
        configurable: !0,
        enumerable: !0,
        get() {
          return (
            console.warn(
              `Browser doesn't allow reading "${t}" until the drop event.`
            ),
            null
          );
        },
      });
    });
  }
  loadDataTransfer(t) {
    if (t) {
      const r = {};
      Object.keys(this.config.exposeProperties).forEach((s) => {
        const o = this.config.exposeProperties[s];
        o != null &&
          (r[s] = {
            value: o(t, this.config.matchesTypes),
            configurable: !0,
            enumerable: !0,
          });
      }),
        Object.defineProperties(this.item, r);
    }
  }
  canDrag() {
    return !0;
  }
  beginDrag() {
    return this.item;
  }
  isDragging(t, r) {
    return r === t.getSourceId();
  }
  endDrag() {}
  constructor(t) {
    (this.config = t), (this.item = {}), this.initializeExposedProperties();
  }
}
const Eb = "__NATIVE_FILE__",
  Tb = "__NATIVE_URL__",
  _b = "__NATIVE_TEXT__",
  Ob = "__NATIVE_HTML__",
  vy = Object.freeze(
    Object.defineProperty(
      { __proto__: null, FILE: Eb, HTML: Ob, TEXT: _b, URL: Tb },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Wf(i, t, r) {
  const s = t.reduce((o, c) => o || i.getData(c), "");
  return s ?? r;
}
const zd = {
  [Eb]: {
    exposeProperties: {
      files: (i) => Array.prototype.slice.call(i.files),
      items: (i) => i.items,
      dataTransfer: (i) => i,
    },
    matchesTypes: ["Files"],
  },
  [Ob]: {
    exposeProperties: { html: (i, t) => Wf(i, t, ""), dataTransfer: (i) => i },
    matchesTypes: ["Html", "text/html"],
  },
  [Tb]: {
    exposeProperties: {
      urls: (i, t) =>
        Wf(i, t, "").split(`
`),
      dataTransfer: (i) => i,
    },
    matchesTypes: ["Url", "text/uri-list"],
  },
  [_b]: {
    exposeProperties: { text: (i, t) => Wf(i, t, ""), dataTransfer: (i) => i },
    matchesTypes: ["Text", "text/plain"],
  },
};
function PA(i, t) {
  const r = zd[i];
  if (!r) throw new Error(`native type ${i} has no configuration`);
  const s = new BA(r);
  return s.loadDataTransfer(t), s;
}
function ed(i) {
  if (!i) return null;
  const t = Array.prototype.slice.call(i.types || []);
  return (
    Object.keys(zd).filter((r) => {
      const s = zd[r];
      return s != null && s.matchesTypes
        ? s.matchesTypes.some((o) => t.indexOf(o) > -1)
        : !1;
    })[0] || null
  );
}
const qA = Sb(() => /firefox/i.test(navigator.userAgent)),
  Db = Sb(() => !!window.safari);
class yy {
  interpolate(t) {
    const { xs: r, ys: s, c1s: o, c2s: c, c3s: d } = this;
    let h = r.length - 1;
    if (t === r[h]) return s[h];
    let g = 0,
      m = d.length - 1,
      y;
    for (; g <= m; ) {
      y = Math.floor(0.5 * (g + m));
      const A = r[y];
      if (A < t) g = y + 1;
      else if (A > t) m = y - 1;
      else return s[y];
    }
    h = Math.max(0, m);
    const b = t - r[h],
      w = b * b;
    return s[h] + o[h] * b + c[h] * w + d[h] * b * w;
  }
  constructor(t, r) {
    const { length: s } = t,
      o = [];
    for (let A = 0; A < s; A++) o.push(A);
    o.sort((A, U) => (t[A] < t[U] ? -1 : 1));
    const c = [],
      d = [];
    let h, g;
    for (let A = 0; A < s - 1; A++)
      (h = t[A + 1] - t[A]), (g = r[A + 1] - r[A]), c.push(h), d.push(g / h);
    const m = [d[0]];
    for (let A = 0; A < c.length - 1; A++) {
      const U = d[A],
        N = d[A + 1];
      if (U * N <= 0) m.push(0);
      else {
        h = c[A];
        const R = c[A + 1],
          k = h + R;
        m.push((3 * k) / ((k + R) / U + (k + h) / N));
      }
    }
    m.push(d[d.length - 1]);
    const y = [],
      b = [];
    let w;
    for (let A = 0; A < m.length - 1; A++) {
      w = d[A];
      const U = m[A],
        N = 1 / c[A],
        R = U + m[A + 1] - w - w;
      y.push((w - U - R) * N), b.push(R * N * N);
    }
    (this.xs = t),
      (this.ys = r),
      (this.c1s = m),
      (this.c2s = y),
      (this.c3s = b);
  }
}
const VA = 1;
function wb(i) {
  const t = i.nodeType === VA ? i : i.parentElement;
  if (!t) return null;
  const { top: r, left: s } = t.getBoundingClientRect();
  return { x: s, y: r };
}
function Lo(i) {
  return { x: i.clientX, y: i.clientY };
}
function GA(i) {
  var t;
  return (
    i.nodeName === "IMG" &&
    (qA() ||
      !(
        !((t = document.documentElement) === null || t === void 0) &&
        t.contains(i)
      ))
  );
}
function QA(i, t, r, s) {
  let o = i ? t.width : r,
    c = i ? t.height : s;
  return (
    Db() &&
      i &&
      ((c /= window.devicePixelRatio), (o /= window.devicePixelRatio)),
    { dragPreviewWidth: o, dragPreviewHeight: c }
  );
}
function YA(i, t, r, s, o) {
  const c = GA(t),
    h = wb(c ? i : t),
    g = { x: r.x - h.x, y: r.y - h.y },
    { offsetWidth: m, offsetHeight: y } = i,
    { anchorX: b, anchorY: w } = s,
    { dragPreviewWidth: A, dragPreviewHeight: U } = QA(c, t, m, y),
    N = () => {
      let se = new yy(
        [0, 0.5, 1],
        [g.y, (g.y / y) * U, g.y + U - y]
      ).interpolate(w);
      return Db() && c && (se += (window.devicePixelRatio - 1) * U), se;
    },
    R = () =>
      new yy([0, 0.5, 1], [g.x, (g.x / m) * A, g.x + A - m]).interpolate(b),
    { offsetX: k, offsetY: P } = o,
    q = k === 0 || k,
    W = P === 0 || P;
  return { x: q ? k : R(), y: W ? P : N() };
}
class FA {
  get window() {
    if (this.globalContext) return this.globalContext;
    if (typeof window < "u") return window;
  }
  get document() {
    var t;
    return !((t = this.globalContext) === null || t === void 0) && t.document
      ? this.globalContext.document
      : this.window
      ? this.window.document
      : void 0;
  }
  get rootElement() {
    var t;
    return (
      ((t = this.optionsArgs) === null || t === void 0
        ? void 0
        : t.rootElement) || this.window
    );
  }
  constructor(t, r) {
    (this.ownerDocument = null),
      (this.globalContext = t),
      (this.optionsArgs = r);
  }
}
function XA(i, t, r) {
  return (
    t in i
      ? Object.defineProperty(i, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[t] = r),
    i
  );
}
function by(i) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {},
      s = Object.keys(r);
    typeof Object.getOwnPropertySymbols == "function" &&
      (s = s.concat(
        Object.getOwnPropertySymbols(r).filter(function (o) {
          return Object.getOwnPropertyDescriptor(r, o).enumerable;
        })
      )),
      s.forEach(function (o) {
        XA(i, o, r[o]);
      });
  }
  return i;
}
class KA {
  profile() {
    var t, r;
    return {
      sourcePreviewNodes: this.sourcePreviewNodes.size,
      sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
      sourceNodeOptions: this.sourceNodeOptions.size,
      sourceNodes: this.sourceNodes.size,
      dragStartSourceIds:
        ((t = this.dragStartSourceIds) === null || t === void 0
          ? void 0
          : t.length) || 0,
      dropTargetIds: this.dropTargetIds.length,
      dragEnterTargetIds: this.dragEnterTargetIds.length,
      dragOverTargetIds:
        ((r = this.dragOverTargetIds) === null || r === void 0
          ? void 0
          : r.length) || 0,
    };
  }
  get window() {
    return this.options.window;
  }
  get document() {
    return this.options.document;
  }
  get rootElement() {
    return this.options.rootElement;
  }
  setup() {
    const t = this.rootElement;
    if (t !== void 0) {
      if (t.__isReactDndBackendSetUp)
        throw new Error("Cannot have two HTML5 backends at the same time.");
      (t.__isReactDndBackendSetUp = !0), this.addEventListeners(t);
    }
  }
  teardown() {
    const t = this.rootElement;
    if (
      t !== void 0 &&
      ((t.__isReactDndBackendSetUp = !1),
      this.removeEventListeners(this.rootElement),
      this.clearCurrentDragSourceNode(),
      this.asyncEndDragFrameId)
    ) {
      var r;
      (r = this.window) === null ||
        r === void 0 ||
        r.cancelAnimationFrame(this.asyncEndDragFrameId);
    }
  }
  connectDragPreview(t, r, s) {
    return (
      this.sourcePreviewNodeOptions.set(t, s),
      this.sourcePreviewNodes.set(t, r),
      () => {
        this.sourcePreviewNodes.delete(t),
          this.sourcePreviewNodeOptions.delete(t);
      }
    );
  }
  connectDragSource(t, r, s) {
    this.sourceNodes.set(t, r), this.sourceNodeOptions.set(t, s);
    const o = (d) => this.handleDragStart(d, t),
      c = (d) => this.handleSelectStart(d);
    return (
      r.setAttribute("draggable", "true"),
      r.addEventListener("dragstart", o),
      r.addEventListener("selectstart", c),
      () => {
        this.sourceNodes.delete(t),
          this.sourceNodeOptions.delete(t),
          r.removeEventListener("dragstart", o),
          r.removeEventListener("selectstart", c),
          r.setAttribute("draggable", "false");
      }
    );
  }
  connectDropTarget(t, r) {
    const s = (d) => this.handleDragEnter(d, t),
      o = (d) => this.handleDragOver(d, t),
      c = (d) => this.handleDrop(d, t);
    return (
      r.addEventListener("dragenter", s),
      r.addEventListener("dragover", o),
      r.addEventListener("drop", c),
      () => {
        r.removeEventListener("dragenter", s),
          r.removeEventListener("dragover", o),
          r.removeEventListener("drop", c);
      }
    );
  }
  addEventListeners(t) {
    t.addEventListener &&
      (t.addEventListener("dragstart", this.handleTopDragStart),
      t.addEventListener("dragstart", this.handleTopDragStartCapture, !0),
      t.addEventListener("dragend", this.handleTopDragEndCapture, !0),
      t.addEventListener("dragenter", this.handleTopDragEnter),
      t.addEventListener("dragenter", this.handleTopDragEnterCapture, !0),
      t.addEventListener("dragleave", this.handleTopDragLeaveCapture, !0),
      t.addEventListener("dragover", this.handleTopDragOver),
      t.addEventListener("dragover", this.handleTopDragOverCapture, !0),
      t.addEventListener("drop", this.handleTopDrop),
      t.addEventListener("drop", this.handleTopDropCapture, !0));
  }
  removeEventListeners(t) {
    t.removeEventListener &&
      (t.removeEventListener("dragstart", this.handleTopDragStart),
      t.removeEventListener("dragstart", this.handleTopDragStartCapture, !0),
      t.removeEventListener("dragend", this.handleTopDragEndCapture, !0),
      t.removeEventListener("dragenter", this.handleTopDragEnter),
      t.removeEventListener("dragenter", this.handleTopDragEnterCapture, !0),
      t.removeEventListener("dragleave", this.handleTopDragLeaveCapture, !0),
      t.removeEventListener("dragover", this.handleTopDragOver),
      t.removeEventListener("dragover", this.handleTopDragOverCapture, !0),
      t.removeEventListener("drop", this.handleTopDrop),
      t.removeEventListener("drop", this.handleTopDropCapture, !0));
  }
  getCurrentSourceNodeOptions() {
    const t = this.monitor.getSourceId(),
      r = this.sourceNodeOptions.get(t);
    return by({ dropEffect: this.altKeyPressed ? "copy" : "move" }, r || {});
  }
  getCurrentDropEffect() {
    return this.isDraggingNativeItem()
      ? "copy"
      : this.getCurrentSourceNodeOptions().dropEffect;
  }
  getCurrentSourcePreviewNodeOptions() {
    const t = this.monitor.getSourceId(),
      r = this.sourcePreviewNodeOptions.get(t);
    return by(
      { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
      r || {}
    );
  }
  isDraggingNativeItem() {
    const t = this.monitor.getItemType();
    return Object.keys(vy).some((r) => vy[r] === t);
  }
  beginDragNativeItem(t, r) {
    this.clearCurrentDragSourceNode(),
      (this.currentNativeSource = PA(t, r)),
      (this.currentNativeHandle = this.registry.addSource(
        t,
        this.currentNativeSource
      )),
      this.actions.beginDrag([this.currentNativeHandle]);
  }
  setCurrentDragSourceNode(t) {
    this.clearCurrentDragSourceNode(), (this.currentDragSourceNode = t);
    const r = 1e3;
    this.mouseMoveTimeoutTimer = setTimeout(() => {
      var s;
      return (s = this.rootElement) === null || s === void 0
        ? void 0
        : s.addEventListener(
            "mousemove",
            this.endDragIfSourceWasRemovedFromDOM,
            !0
          );
    }, r);
  }
  clearCurrentDragSourceNode() {
    if (this.currentDragSourceNode) {
      if (((this.currentDragSourceNode = null), this.rootElement)) {
        var t;
        (t = this.window) === null ||
          t === void 0 ||
          t.clearTimeout(this.mouseMoveTimeoutTimer || void 0),
          this.rootElement.removeEventListener(
            "mousemove",
            this.endDragIfSourceWasRemovedFromDOM,
            !0
          );
      }
      return (this.mouseMoveTimeoutTimer = null), !0;
    }
    return !1;
  }
  handleDragStart(t, r) {
    t.defaultPrevented ||
      (this.dragStartSourceIds || (this.dragStartSourceIds = []),
      this.dragStartSourceIds.unshift(r));
  }
  handleDragEnter(t, r) {
    this.dragEnterTargetIds.unshift(r);
  }
  handleDragOver(t, r) {
    this.dragOverTargetIds === null && (this.dragOverTargetIds = []),
      this.dragOverTargetIds.unshift(r);
  }
  handleDrop(t, r) {
    this.dropTargetIds.unshift(r);
  }
  constructor(t, r, s) {
    (this.sourcePreviewNodes = new Map()),
      (this.sourcePreviewNodeOptions = new Map()),
      (this.sourceNodes = new Map()),
      (this.sourceNodeOptions = new Map()),
      (this.dragStartSourceIds = null),
      (this.dropTargetIds = []),
      (this.dragEnterTargetIds = []),
      (this.currentNativeSource = null),
      (this.currentNativeHandle = null),
      (this.currentDragSourceNode = null),
      (this.altKeyPressed = !1),
      (this.mouseMoveTimeoutTimer = null),
      (this.asyncEndDragFrameId = null),
      (this.dragOverTargetIds = null),
      (this.lastClientOffset = null),
      (this.hoverRafId = null),
      (this.getSourceClientOffset = (o) => {
        const c = this.sourceNodes.get(o);
        return (c && wb(c)) || null;
      }),
      (this.endDragNativeItem = () => {
        this.isDraggingNativeItem() &&
          (this.actions.endDrag(),
          this.currentNativeHandle &&
            this.registry.removeSource(this.currentNativeHandle),
          (this.currentNativeHandle = null),
          (this.currentNativeSource = null));
      }),
      (this.isNodeInDocument = (o) =>
        !!(
          o &&
          this.document &&
          this.document.body &&
          this.document.body.contains(o)
        )),
      (this.endDragIfSourceWasRemovedFromDOM = () => {
        const o = this.currentDragSourceNode;
        o == null ||
          this.isNodeInDocument(o) ||
          (this.clearCurrentDragSourceNode() &&
            this.monitor.isDragging() &&
            this.actions.endDrag(),
          this.cancelHover());
      }),
      (this.scheduleHover = (o) => {
        this.hoverRafId === null &&
          typeof requestAnimationFrame < "u" &&
          (this.hoverRafId = requestAnimationFrame(() => {
            this.monitor.isDragging() &&
              this.actions.hover(o || [], {
                clientOffset: this.lastClientOffset,
              }),
              (this.hoverRafId = null);
          }));
      }),
      (this.cancelHover = () => {
        this.hoverRafId !== null &&
          typeof cancelAnimationFrame < "u" &&
          (cancelAnimationFrame(this.hoverRafId), (this.hoverRafId = null));
      }),
      (this.handleTopDragStartCapture = () => {
        this.clearCurrentDragSourceNode(), (this.dragStartSourceIds = []);
      }),
      (this.handleTopDragStart = (o) => {
        if (o.defaultPrevented) return;
        const { dragStartSourceIds: c } = this;
        this.dragStartSourceIds = null;
        const d = Lo(o);
        this.monitor.isDragging() &&
          (this.actions.endDrag(), this.cancelHover()),
          this.actions.beginDrag(c || [], {
            publishSource: !1,
            getSourceClientOffset: this.getSourceClientOffset,
            clientOffset: d,
          });
        const { dataTransfer: h } = o,
          g = ed(h);
        if (this.monitor.isDragging()) {
          if (h && typeof h.setDragImage == "function") {
            const y = this.monitor.getSourceId(),
              b = this.sourceNodes.get(y),
              w = this.sourcePreviewNodes.get(y) || b;
            if (w) {
              const {
                  anchorX: A,
                  anchorY: U,
                  offsetX: N,
                  offsetY: R,
                } = this.getCurrentSourcePreviewNodeOptions(),
                q = YA(
                  b,
                  w,
                  d,
                  { anchorX: A, anchorY: U },
                  { offsetX: N, offsetY: R }
                );
              h.setDragImage(w, q.x, q.y);
            }
          }
          try {
            h == null || h.setData("application/json", {});
          } catch {}
          this.setCurrentDragSourceNode(o.target);
          const { captureDraggingState: m } =
            this.getCurrentSourcePreviewNodeOptions();
          m
            ? this.actions.publishDragSource()
            : setTimeout(() => this.actions.publishDragSource(), 0);
        } else if (g) this.beginDragNativeItem(g);
        else {
          if (
            h &&
            !h.types &&
            ((o.target && !o.target.hasAttribute) ||
              !o.target.hasAttribute("draggable"))
          )
            return;
          o.preventDefault();
        }
      }),
      (this.handleTopDragEndCapture = () => {
        this.clearCurrentDragSourceNode() &&
          this.monitor.isDragging() &&
          this.actions.endDrag(),
          this.cancelHover();
      }),
      (this.handleTopDragEnterCapture = (o) => {
        if (((this.dragEnterTargetIds = []), this.isDraggingNativeItem())) {
          var c;
          (c = this.currentNativeSource) === null ||
            c === void 0 ||
            c.loadDataTransfer(o.dataTransfer);
        }
        if (
          !this.enterLeaveCounter.enter(o.target) ||
          this.monitor.isDragging()
        )
          return;
        const { dataTransfer: h } = o,
          g = ed(h);
        g && this.beginDragNativeItem(g, h);
      }),
      (this.handleTopDragEnter = (o) => {
        const { dragEnterTargetIds: c } = this;
        if (((this.dragEnterTargetIds = []), !this.monitor.isDragging()))
          return;
        (this.altKeyPressed = o.altKey),
          c.length > 0 && this.actions.hover(c, { clientOffset: Lo(o) }),
          c.some((h) => this.monitor.canDropOnTarget(h)) &&
            (o.preventDefault(),
            o.dataTransfer &&
              (o.dataTransfer.dropEffect = this.getCurrentDropEffect()));
      }),
      (this.handleTopDragOverCapture = (o) => {
        if (((this.dragOverTargetIds = []), this.isDraggingNativeItem())) {
          var c;
          (c = this.currentNativeSource) === null ||
            c === void 0 ||
            c.loadDataTransfer(o.dataTransfer);
        }
      }),
      (this.handleTopDragOver = (o) => {
        const { dragOverTargetIds: c } = this;
        if (((this.dragOverTargetIds = []), !this.monitor.isDragging())) {
          o.preventDefault(),
            o.dataTransfer && (o.dataTransfer.dropEffect = "none");
          return;
        }
        (this.altKeyPressed = o.altKey),
          (this.lastClientOffset = Lo(o)),
          this.scheduleHover(c),
          (c || []).some((h) => this.monitor.canDropOnTarget(h))
            ? (o.preventDefault(),
              o.dataTransfer &&
                (o.dataTransfer.dropEffect = this.getCurrentDropEffect()))
            : this.isDraggingNativeItem()
            ? o.preventDefault()
            : (o.preventDefault(),
              o.dataTransfer && (o.dataTransfer.dropEffect = "none"));
      }),
      (this.handleTopDragLeaveCapture = (o) => {
        this.isDraggingNativeItem() && o.preventDefault(),
          this.enterLeaveCounter.leave(o.target) &&
            (this.isDraggingNativeItem() &&
              setTimeout(() => this.endDragNativeItem(), 0),
            this.cancelHover());
      }),
      (this.handleTopDropCapture = (o) => {
        if (((this.dropTargetIds = []), this.isDraggingNativeItem())) {
          var c;
          o.preventDefault(),
            (c = this.currentNativeSource) === null ||
              c === void 0 ||
              c.loadDataTransfer(o.dataTransfer);
        } else ed(o.dataTransfer) && o.preventDefault();
        this.enterLeaveCounter.reset();
      }),
      (this.handleTopDrop = (o) => {
        const { dropTargetIds: c } = this;
        (this.dropTargetIds = []),
          this.actions.hover(c, { clientOffset: Lo(o) }),
          this.actions.drop({ dropEffect: this.getCurrentDropEffect() }),
          this.isDraggingNativeItem()
            ? this.endDragNativeItem()
            : this.monitor.isDragging() && this.actions.endDrag(),
          this.cancelHover();
      }),
      (this.handleSelectStart = (o) => {
        const c = o.target;
        typeof c.dragDrop == "function" &&
          (c.tagName === "INPUT" ||
            c.tagName === "SELECT" ||
            c.tagName === "TEXTAREA" ||
            c.isContentEditable ||
            (o.preventDefault(), c.dragDrop()));
      }),
      (this.options = new FA(r, s)),
      (this.actions = t.getActions()),
      (this.monitor = t.getMonitor()),
      (this.registry = t.getRegistry()),
      (this.enterLeaveCounter = new kA(this.isNodeInDocument));
  }
}
const ZA = function (t, r, s) {
  return new KA(t, r, s);
};
function Rb(i, t) {
  return function () {
    return i.apply(t, arguments);
  };
}
const { toString: $A } = Object.prototype,
  { getPrototypeOf: yh } = Object,
  vu = ((i) => (t) => {
    const r = $A.call(t);
    return i[r] || (i[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  rn = (i) => ((i = i.toLowerCase()), (t) => vu(t) === i),
  yu = (i) => (t) => typeof t === i,
  { isArray: qa } = Array,
  el = yu("undefined");
function JA(i) {
  return (
    i !== null &&
    !el(i) &&
    i.constructor !== null &&
    !el(i.constructor) &&
    xt(i.constructor.isBuffer) &&
    i.constructor.isBuffer(i)
  );
}
const Cb = rn("ArrayBuffer");
function WA(i) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(i))
      : (t = i && i.buffer && Cb(i.buffer)),
    t
  );
}
const eN = yu("string"),
  xt = yu("function"),
  Ab = yu("number"),
  bu = (i) => i !== null && typeof i == "object",
  tN = (i) => i === !0 || i === !1,
  Go = (i) => {
    if (vu(i) !== "object") return !1;
    const t = yh(i);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in i) &&
      !(Symbol.iterator in i)
    );
  },
  nN = rn("Date"),
  iN = rn("File"),
  rN = rn("Blob"),
  aN = rn("FileList"),
  sN = (i) => bu(i) && xt(i.pipe),
  lN = (i) => {
    let t;
    return (
      i &&
      ((typeof FormData == "function" && i instanceof FormData) ||
        (xt(i.append) &&
          ((t = vu(i)) === "formdata" ||
            (t === "object" &&
              xt(i.toString) &&
              i.toString() === "[object FormData]"))))
    );
  },
  oN = rn("URLSearchParams"),
  [uN, cN, fN, dN] = ["ReadableStream", "Request", "Response", "Headers"].map(
    rn
  ),
  hN = (i) =>
    i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function pl(i, t, { allOwnKeys: r = !1 } = {}) {
  if (i === null || typeof i > "u") return;
  let s, o;
  if ((typeof i != "object" && (i = [i]), qa(i)))
    for (s = 0, o = i.length; s < o; s++) t.call(null, i[s], s, i);
  else {
    const c = r ? Object.getOwnPropertyNames(i) : Object.keys(i),
      d = c.length;
    let h;
    for (s = 0; s < d; s++) (h = c[s]), t.call(null, i[h], h, i);
  }
}
function Nb(i, t) {
  t = t.toLowerCase();
  const r = Object.keys(i);
  let s = r.length,
    o;
  for (; s-- > 0; ) if (((o = r[s]), t === o.toLowerCase())) return o;
  return null;
}
const mr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Mb = (i) => !el(i) && i !== mr;
function Hd() {
  const { caseless: i } = (Mb(this) && this) || {},
    t = {},
    r = (s, o) => {
      const c = (i && Nb(t, o)) || o;
      Go(t[c]) && Go(s)
        ? (t[c] = Hd(t[c], s))
        : Go(s)
        ? (t[c] = Hd({}, s))
        : qa(s)
        ? (t[c] = s.slice())
        : (t[c] = s);
    };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && pl(arguments[s], r);
  return t;
}
const pN = (i, t, r, { allOwnKeys: s } = {}) => (
    pl(
      t,
      (o, c) => {
        r && xt(o) ? (i[c] = Rb(o, r)) : (i[c] = o);
      },
      { allOwnKeys: s }
    ),
    i
  ),
  gN = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i),
  mN = (i, t, r, s) => {
    (i.prototype = Object.create(t.prototype, s)),
      (i.prototype.constructor = i),
      Object.defineProperty(i, "super", { value: t.prototype }),
      r && Object.assign(i.prototype, r);
  },
  vN = (i, t, r, s) => {
    let o, c, d;
    const h = {};
    if (((t = t || {}), i == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(i), c = o.length; c-- > 0; )
        (d = o[c]), (!s || s(d, i, t)) && !h[d] && ((t[d] = i[d]), (h[d] = !0));
      i = r !== !1 && yh(i);
    } while (i && (!r || r(i, t)) && i !== Object.prototype);
    return t;
  },
  yN = (i, t, r) => {
    (i = String(i)),
      (r === void 0 || r > i.length) && (r = i.length),
      (r -= t.length);
    const s = i.indexOf(t, r);
    return s !== -1 && s === r;
  },
  bN = (i) => {
    if (!i) return null;
    if (qa(i)) return i;
    let t = i.length;
    if (!Ab(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = i[t];
    return r;
  },
  SN = (
    (i) => (t) =>
      i && t instanceof i
  )(typeof Uint8Array < "u" && yh(Uint8Array)),
  EN = (i, t) => {
    const s = (i && i[Symbol.iterator]).call(i);
    let o;
    for (; (o = s.next()) && !o.done; ) {
      const c = o.value;
      t.call(i, c[0], c[1]);
    }
  },
  TN = (i, t) => {
    let r;
    const s = [];
    for (; (r = i.exec(t)) !== null; ) s.push(r);
    return s;
  },
  _N = rn("HTMLFormElement"),
  ON = (i) =>
    i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, s, o) {
      return s.toUpperCase() + o;
    }),
  Sy = (
    ({ hasOwnProperty: i }) =>
    (t, r) =>
      i.call(t, r)
  )(Object.prototype),
  DN = rn("RegExp"),
  xb = (i, t) => {
    const r = Object.getOwnPropertyDescriptors(i),
      s = {};
    pl(r, (o, c) => {
      let d;
      (d = t(o, c, i)) !== !1 && (s[c] = d || o);
    }),
      Object.defineProperties(i, s);
  },
  wN = (i) => {
    xb(i, (t, r) => {
      if (xt(i) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
        return !1;
      const s = i[r];
      if (xt(s)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + r + "'");
          });
      }
    });
  },
  RN = (i, t) => {
    const r = {},
      s = (o) => {
        o.forEach((c) => {
          r[c] = !0;
        });
      };
    return qa(i) ? s(i) : s(String(i).split(t)), r;
  },
  CN = () => {},
  AN = (i, t) => (i != null && Number.isFinite((i = +i)) ? i : t);
function NN(i) {
  return !!(
    i &&
    xt(i.append) &&
    i[Symbol.toStringTag] === "FormData" &&
    i[Symbol.iterator]
  );
}
const MN = (i) => {
    const t = new Array(10),
      r = (s, o) => {
        if (bu(s)) {
          if (t.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            t[o] = s;
            const c = qa(s) ? [] : {};
            return (
              pl(s, (d, h) => {
                const g = r(d, o + 1);
                !el(g) && (c[h] = g);
              }),
              (t[o] = void 0),
              c
            );
          }
        }
        return s;
      };
    return r(i, 0);
  },
  xN = rn("AsyncFunction"),
  UN = (i) => i && (bu(i) || xt(i)) && xt(i.then) && xt(i.catch),
  Ub = ((i, t) =>
    i
      ? setImmediate
      : t
      ? ((r, s) => (
          mr.addEventListener(
            "message",
            ({ source: o, data: c }) => {
              o === mr && c === r && s.length && s.shift()();
            },
            !1
          ),
          (o) => {
            s.push(o), mr.postMessage(r, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (r) => setTimeout(r))(
    typeof setImmediate == "function",
    xt(mr.postMessage)
  ),
  IN =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(mr)
      : (typeof process < "u" && process.nextTick) || Ub,
  I = {
    isArray: qa,
    isArrayBuffer: Cb,
    isBuffer: JA,
    isFormData: lN,
    isArrayBufferView: WA,
    isString: eN,
    isNumber: Ab,
    isBoolean: tN,
    isObject: bu,
    isPlainObject: Go,
    isReadableStream: uN,
    isRequest: cN,
    isResponse: fN,
    isHeaders: dN,
    isUndefined: el,
    isDate: nN,
    isFile: iN,
    isBlob: rN,
    isRegExp: DN,
    isFunction: xt,
    isStream: sN,
    isURLSearchParams: oN,
    isTypedArray: SN,
    isFileList: aN,
    forEach: pl,
    merge: Hd,
    extend: pN,
    trim: hN,
    stripBOM: gN,
    inherits: mN,
    toFlatObject: vN,
    kindOf: vu,
    kindOfTest: rn,
    endsWith: yN,
    toArray: bN,
    forEachEntry: EN,
    matchAll: TN,
    isHTMLForm: _N,
    hasOwnProperty: Sy,
    hasOwnProp: Sy,
    reduceDescriptors: xb,
    freezeMethods: wN,
    toObjectSet: RN,
    toCamelCase: ON,
    noop: CN,
    toFiniteNumber: AN,
    findKey: Nb,
    global: mr,
    isContextDefined: Mb,
    isSpecCompliantForm: NN,
    toJSONObject: MN,
    isAsyncFn: xN,
    isThenable: UN,
    setImmediate: Ub,
    asap: IN,
  };
function oe(i, t, r, s, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = i),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    s && (this.request = s),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
I.inherits(oe, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: I.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Ib = oe.prototype,
  Lb = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((i) => {
  Lb[i] = { value: i };
});
Object.defineProperties(oe, Lb);
Object.defineProperty(Ib, "isAxiosError", { value: !0 });
oe.from = (i, t, r, s, o, c) => {
  const d = Object.create(Ib);
  return (
    I.toFlatObject(
      i,
      d,
      function (g) {
        return g !== Error.prototype;
      },
      (h) => h !== "isAxiosError"
    ),
    oe.call(d, i.message, t, r, s, o),
    (d.cause = i),
    (d.name = i.name),
    c && Object.assign(d, c),
    d
  );
};
const LN = null;
function jd(i) {
  return I.isPlainObject(i) || I.isArray(i);
}
function zb(i) {
  return I.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function Ey(i, t, r) {
  return i
    ? i
        .concat(t)
        .map(function (o, c) {
          return (o = zb(o)), !r && c ? "[" + o + "]" : o;
        })
        .join(r ? "." : "")
    : t;
}
function zN(i) {
  return I.isArray(i) && !i.some(jd);
}
const HN = I.toFlatObject(I, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Su(i, t, r) {
  if (!I.isObject(i)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (r = I.toFlatObject(
      r,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (N, R) {
        return !I.isUndefined(R[N]);
      }
    ));
  const s = r.metaTokens,
    o = r.visitor || y,
    c = r.dots,
    d = r.indexes,
    g = (r.Blob || (typeof Blob < "u" && Blob)) && I.isSpecCompliantForm(t);
  if (!I.isFunction(o)) throw new TypeError("visitor must be a function");
  function m(U) {
    if (U === null) return "";
    if (I.isDate(U)) return U.toISOString();
    if (!g && I.isBlob(U))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return I.isArrayBuffer(U) || I.isTypedArray(U)
      ? g && typeof Blob == "function"
        ? new Blob([U])
        : Buffer.from(U)
      : U;
  }
  function y(U, N, R) {
    let k = U;
    if (U && !R && typeof U == "object") {
      if (I.endsWith(N, "{}"))
        (N = s ? N : N.slice(0, -2)), (U = JSON.stringify(U));
      else if (
        (I.isArray(U) && zN(U)) ||
        ((I.isFileList(U) || I.endsWith(N, "[]")) && (k = I.toArray(U)))
      )
        return (
          (N = zb(N)),
          k.forEach(function (q, W) {
            !(I.isUndefined(q) || q === null) &&
              t.append(
                d === !0 ? Ey([N], W, c) : d === null ? N : N + "[]",
                m(q)
              );
          }),
          !1
        );
    }
    return jd(U) ? !0 : (t.append(Ey(R, N, c), m(U)), !1);
  }
  const b = [],
    w = Object.assign(HN, {
      defaultVisitor: y,
      convertValue: m,
      isVisitable: jd,
    });
  function A(U, N) {
    if (!I.isUndefined(U)) {
      if (b.indexOf(U) !== -1)
        throw Error("Circular reference detected in " + N.join("."));
      b.push(U),
        I.forEach(U, function (k, P) {
          (!(I.isUndefined(k) || k === null) &&
            o.call(t, k, I.isString(P) ? P.trim() : P, N, w)) === !0 &&
            A(k, N ? N.concat(P) : [P]);
        }),
        b.pop();
    }
  }
  if (!I.isObject(i)) throw new TypeError("data must be an object");
  return A(i), t;
}
function Ty(i) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s];
  });
}
function bh(i, t) {
  (this._pairs = []), i && Su(i, this, t);
}
const Hb = bh.prototype;
Hb.append = function (t, r) {
  this._pairs.push([t, r]);
};
Hb.toString = function (t) {
  const r = t
    ? function (s) {
        return t.call(this, s, Ty);
      }
    : Ty;
  return this._pairs
    .map(function (o) {
      return r(o[0]) + "=" + r(o[1]);
    }, "")
    .join("&");
};
function jN(i) {
  return encodeURIComponent(i)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function jb(i, t, r) {
  if (!t) return i;
  const s = (r && r.encode) || jN;
  I.isFunction(r) && (r = { serialize: r });
  const o = r && r.serialize;
  let c;
  if (
    (o
      ? (c = o(t, r))
      : (c = I.isURLSearchParams(t) ? t.toString() : new bh(t, r).toString(s)),
    c)
  ) {
    const d = i.indexOf("#");
    d !== -1 && (i = i.slice(0, d)),
      (i += (i.indexOf("?") === -1 ? "?" : "&") + c);
  }
  return i;
}
class _y {
  constructor() {
    this.handlers = [];
  }
  use(t, r, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    I.forEach(this.handlers, function (s) {
      s !== null && t(s);
    });
  }
}
const kb = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  kN = typeof URLSearchParams < "u" ? URLSearchParams : bh,
  BN = typeof FormData < "u" ? FormData : null,
  PN = typeof Blob < "u" ? Blob : null,
  qN = {
    isBrowser: !0,
    classes: { URLSearchParams: kN, FormData: BN, Blob: PN },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Sh = typeof window < "u" && typeof document < "u",
  kd = (typeof navigator == "object" && navigator) || void 0,
  VN =
    Sh &&
    (!kd || ["ReactNative", "NativeScript", "NS"].indexOf(kd.product) < 0),
  GN =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  QN = (Sh && window.location.href) || "http://localhost",
  YN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Sh,
        hasStandardBrowserEnv: VN,
        hasStandardBrowserWebWorkerEnv: GN,
        navigator: kd,
        origin: QN,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ct = { ...YN, ...qN };
function FN(i, t) {
  return Su(
    i,
    new ct.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (r, s, o, c) {
          return ct.isNode && I.isBuffer(r)
            ? (this.append(s, r.toString("base64")), !1)
            : c.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function XN(i) {
  return I.matchAll(/\w+|\[(\w*)]/g, i).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function KN(i) {
  const t = {},
    r = Object.keys(i);
  let s;
  const o = r.length;
  let c;
  for (s = 0; s < o; s++) (c = r[s]), (t[c] = i[c]);
  return t;
}
function Bb(i) {
  function t(r, s, o, c) {
    let d = r[c++];
    if (d === "__proto__") return !0;
    const h = Number.isFinite(+d),
      g = c >= r.length;
    return (
      (d = !d && I.isArray(o) ? o.length : d),
      g
        ? (I.hasOwnProp(o, d) ? (o[d] = [o[d], s]) : (o[d] = s), !h)
        : ((!o[d] || !I.isObject(o[d])) && (o[d] = []),
          t(r, s, o[d], c) && I.isArray(o[d]) && (o[d] = KN(o[d])),
          !h)
    );
  }
  if (I.isFormData(i) && I.isFunction(i.entries)) {
    const r = {};
    return (
      I.forEachEntry(i, (s, o) => {
        t(XN(s), o, r, 0);
      }),
      r
    );
  }
  return null;
}
function ZN(i, t, r) {
  if (I.isString(i))
    try {
      return (t || JSON.parse)(i), I.trim(i);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (r || JSON.stringify)(i);
}
const gl = {
  transitional: kb,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, r) {
      const s = r.getContentType() || "",
        o = s.indexOf("application/json") > -1,
        c = I.isObject(t);
      if ((c && I.isHTMLForm(t) && (t = new FormData(t)), I.isFormData(t)))
        return o ? JSON.stringify(Bb(t)) : t;
      if (
        I.isArrayBuffer(t) ||
        I.isBuffer(t) ||
        I.isStream(t) ||
        I.isFile(t) ||
        I.isBlob(t) ||
        I.isReadableStream(t)
      )
        return t;
      if (I.isArrayBufferView(t)) return t.buffer;
      if (I.isURLSearchParams(t))
        return (
          r.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let h;
      if (c) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return FN(t, this.formSerializer).toString();
        if ((h = I.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
          const g = this.env && this.env.FormData;
          return Su(
            h ? { "files[]": t } : t,
            g && new g(),
            this.formSerializer
          );
        }
      }
      return c || o ? (r.setContentType("application/json", !1), ZN(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const r = this.transitional || gl.transitional,
        s = r && r.forcedJSONParsing,
        o = this.responseType === "json";
      if (I.isResponse(t) || I.isReadableStream(t)) return t;
      if (t && I.isString(t) && ((s && !this.responseType) || o)) {
        const d = !(r && r.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (h) {
          if (d)
            throw h.name === "SyntaxError"
              ? oe.from(h, oe.ERR_BAD_RESPONSE, this, null, this.response)
              : h;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ct.classes.FormData, Blob: ct.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
I.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  gl.headers[i] = {};
});
const $N = I.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  JN = (i) => {
    const t = {};
    let r, s, o;
    return (
      i &&
        i
          .split(
            `
`
          )
          .forEach(function (d) {
            (o = d.indexOf(":")),
              (r = d.substring(0, o).trim().toLowerCase()),
              (s = d.substring(o + 1).trim()),
              !(!r || (t[r] && $N[r])) &&
                (r === "set-cookie"
                  ? t[r]
                    ? t[r].push(s)
                    : (t[r] = [s])
                  : (t[r] = t[r] ? t[r] + ", " + s : s));
          }),
      t
    );
  },
  Oy = Symbol("internals");
function Vs(i) {
  return i && String(i).trim().toLowerCase();
}
function Qo(i) {
  return i === !1 || i == null ? i : I.isArray(i) ? i.map(Qo) : String(i);
}
function WN(i) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = r.exec(i)); ) t[s[1]] = s[2];
  return t;
}
const eM = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function td(i, t, r, s, o) {
  if (I.isFunction(s)) return s.call(this, t, r);
  if ((o && (t = r), !!I.isString(t))) {
    if (I.isString(s)) return t.indexOf(s) !== -1;
    if (I.isRegExp(s)) return s.test(t);
  }
}
function tM(i) {
  return i
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, r, s) => r.toUpperCase() + s);
}
function nM(i, t) {
  const r = I.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(i, s + r, {
      value: function (o, c, d) {
        return this[s].call(this, t, o, c, d);
      },
      configurable: !0,
    });
  });
}
let Ot = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, s) {
    const o = this;
    function c(h, g, m) {
      const y = Vs(g);
      if (!y) throw new Error("header name must be a non-empty string");
      const b = I.findKey(o, y);
      (!b || o[b] === void 0 || m === !0 || (m === void 0 && o[b] !== !1)) &&
        (o[b || g] = Qo(h));
    }
    const d = (h, g) => I.forEach(h, (m, y) => c(m, y, g));
    if (I.isPlainObject(t) || t instanceof this.constructor) d(t, r);
    else if (I.isString(t) && (t = t.trim()) && !eM(t)) d(JN(t), r);
    else if (I.isHeaders(t)) for (const [h, g] of t.entries()) c(g, h, s);
    else t != null && c(r, t, s);
    return this;
  }
  get(t, r) {
    if (((t = Vs(t)), t)) {
      const s = I.findKey(this, t);
      if (s) {
        const o = this[s];
        if (!r) return o;
        if (r === !0) return WN(o);
        if (I.isFunction(r)) return r.call(this, o, s);
        if (I.isRegExp(r)) return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (((t = Vs(t)), t)) {
      const s = I.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!r || td(this, this[s], s, r)));
    }
    return !1;
  }
  delete(t, r) {
    const s = this;
    let o = !1;
    function c(d) {
      if (((d = Vs(d)), d)) {
        const h = I.findKey(s, d);
        h && (!r || td(s, s[h], h, r)) && (delete s[h], (o = !0));
      }
    }
    return I.isArray(t) ? t.forEach(c) : c(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let s = r.length,
      o = !1;
    for (; s--; ) {
      const c = r[s];
      (!t || td(this, this[c], c, t, !0)) && (delete this[c], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const r = this,
      s = {};
    return (
      I.forEach(this, (o, c) => {
        const d = I.findKey(s, c);
        if (d) {
          (r[d] = Qo(o)), delete r[c];
          return;
        }
        const h = t ? tM(c) : String(c).trim();
        h !== c && delete r[c], (r[h] = Qo(o)), (s[h] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return (
      I.forEach(this, (s, o) => {
        s != null && s !== !1 && (r[o] = t && I.isArray(s) ? s.join(", ") : s);
      }),
      r
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const s = new this(t);
    return r.forEach((o) => s.set(o)), s;
  }
  static accessor(t) {
    const s = (this[Oy] = this[Oy] = { accessors: {} }).accessors,
      o = this.prototype;
    function c(d) {
      const h = Vs(d);
      s[h] || (nM(o, d), (s[h] = !0));
    }
    return I.isArray(t) ? t.forEach(c) : c(t), this;
  }
};
Ot.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
I.reduceDescriptors(Ot.prototype, ({ value: i }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => i,
    set(s) {
      this[r] = s;
    },
  };
});
I.freezeMethods(Ot);
function nd(i, t) {
  const r = this || gl,
    s = t || r,
    o = Ot.from(s.headers);
  let c = s.data;
  return (
    I.forEach(i, function (h) {
      c = h.call(r, c, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    c
  );
}
function Pb(i) {
  return !!(i && i.__CANCEL__);
}
function Va(i, t, r) {
  oe.call(this, i ?? "canceled", oe.ERR_CANCELED, t, r),
    (this.name = "CanceledError");
}
I.inherits(Va, oe, { __CANCEL__: !0 });
function qb(i, t, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status)
    ? i(r)
    : t(
        new oe(
          "Request failed with status code " + r.status,
          [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][
            Math.floor(r.status / 100) - 4
          ],
          r.config,
          r.request,
          r
        )
      );
}
function iM(i) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return (t && t[1]) || "";
}
function rM(i, t) {
  i = i || 10;
  const r = new Array(i),
    s = new Array(i);
  let o = 0,
    c = 0,
    d;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (g) {
      const m = Date.now(),
        y = s[c];
      d || (d = m), (r[o] = g), (s[o] = m);
      let b = c,
        w = 0;
      for (; b !== o; ) (w += r[b++]), (b = b % i);
      if (((o = (o + 1) % i), o === c && (c = (c + 1) % i), m - d < t)) return;
      const A = y && m - y;
      return A ? Math.round((w * 1e3) / A) : void 0;
    }
  );
}
function aM(i, t) {
  let r = 0,
    s = 1e3 / t,
    o,
    c;
  const d = (m, y = Date.now()) => {
    (r = y), (o = null), c && (clearTimeout(c), (c = null)), i.apply(null, m);
  };
  return [
    (...m) => {
      const y = Date.now(),
        b = y - r;
      b >= s
        ? d(m, y)
        : ((o = m),
          c ||
            (c = setTimeout(() => {
              (c = null), d(o);
            }, s - b)));
    },
    () => o && d(o),
  ];
}
const au = (i, t, r = 3) => {
    let s = 0;
    const o = rM(50, 250);
    return aM((c) => {
      const d = c.loaded,
        h = c.lengthComputable ? c.total : void 0,
        g = d - s,
        m = o(g),
        y = d <= h;
      s = d;
      const b = {
        loaded: d,
        total: h,
        progress: h ? d / h : void 0,
        bytes: g,
        rate: m || void 0,
        estimated: m && h && y ? (h - d) / m : void 0,
        event: c,
        lengthComputable: h != null,
        [t ? "download" : "upload"]: !0,
      };
      i(b);
    }, r);
  },
  Dy = (i, t) => {
    const r = i != null;
    return [(s) => t[0]({ lengthComputable: r, total: i, loaded: s }), t[1]];
  },
  wy =
    (i) =>
    (...t) =>
      I.asap(() => i(...t)),
  sM = ct.hasStandardBrowserEnv
    ? ((i, t) => (r) => (
        (r = new URL(r, ct.origin)),
        i.protocol === r.protocol &&
          i.host === r.host &&
          (t || i.port === r.port)
      ))(
        new URL(ct.origin),
        ct.navigator && /(msie|trident)/i.test(ct.navigator.userAgent)
      )
    : () => !0,
  lM = ct.hasStandardBrowserEnv
    ? {
        write(i, t, r, s, o, c) {
          const d = [i + "=" + encodeURIComponent(t)];
          I.isNumber(r) && d.push("expires=" + new Date(r).toGMTString()),
            I.isString(s) && d.push("path=" + s),
            I.isString(o) && d.push("domain=" + o),
            c === !0 && d.push("secure"),
            (document.cookie = d.join("; "));
        },
        read(i) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + i + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(i) {
          this.write(i, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function oM(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function uM(i, t) {
  return t ? i.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : i;
}
function Vb(i, t, r) {
  let s = !oM(t);
  return (i && s) || r == !1 ? uM(i, t) : t;
}
const Ry = (i) => (i instanceof Ot ? { ...i } : i);
function Mr(i, t) {
  t = t || {};
  const r = {};
  function s(m, y, b, w) {
    return I.isPlainObject(m) && I.isPlainObject(y)
      ? I.merge.call({ caseless: w }, m, y)
      : I.isPlainObject(y)
      ? I.merge({}, y)
      : I.isArray(y)
      ? y.slice()
      : y;
  }
  function o(m, y, b, w) {
    if (I.isUndefined(y)) {
      if (!I.isUndefined(m)) return s(void 0, m, b, w);
    } else return s(m, y, b, w);
  }
  function c(m, y) {
    if (!I.isUndefined(y)) return s(void 0, y);
  }
  function d(m, y) {
    if (I.isUndefined(y)) {
      if (!I.isUndefined(m)) return s(void 0, m);
    } else return s(void 0, y);
  }
  function h(m, y, b) {
    if (b in t) return s(m, y);
    if (b in i) return s(void 0, m);
  }
  const g = {
    url: c,
    method: c,
    data: c,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: h,
    headers: (m, y, b) => o(Ry(m), Ry(y), b, !0),
  };
  return (
    I.forEach(Object.keys(Object.assign({}, i, t)), function (y) {
      const b = g[y] || o,
        w = b(i[y], t[y], y);
      (I.isUndefined(w) && b !== h) || (r[y] = w);
    }),
    r
  );
}
const Gb = (i) => {
    const t = Mr({}, i);
    let {
      data: r,
      withXSRFToken: s,
      xsrfHeaderName: o,
      xsrfCookieName: c,
      headers: d,
      auth: h,
    } = t;
    (t.headers = d = Ot.from(d)),
      (t.url = jb(Vb(t.baseURL, t.url), i.params, i.paramsSerializer)),
      h &&
        d.set(
          "Authorization",
          "Basic " +
            btoa(
              (h.username || "") +
                ":" +
                (h.password ? unescape(encodeURIComponent(h.password)) : "")
            )
        );
    let g;
    if (I.isFormData(r)) {
      if (ct.hasStandardBrowserEnv || ct.hasStandardBrowserWebWorkerEnv)
        d.setContentType(void 0);
      else if ((g = d.getContentType()) !== !1) {
        const [m, ...y] = g
          ? g
              .split(";")
              .map((b) => b.trim())
              .filter(Boolean)
          : [];
        d.setContentType([m || "multipart/form-data", ...y].join("; "));
      }
    }
    if (
      ct.hasStandardBrowserEnv &&
      (s && I.isFunction(s) && (s = s(t)), s || (s !== !1 && sM(t.url)))
    ) {
      const m = o && c && lM.read(c);
      m && d.set(o, m);
    }
    return t;
  },
  cM = typeof XMLHttpRequest < "u",
  fM =
    cM &&
    function (i) {
      return new Promise(function (r, s) {
        const o = Gb(i);
        let c = o.data;
        const d = Ot.from(o.headers).normalize();
        let { responseType: h, onUploadProgress: g, onDownloadProgress: m } = o,
          y,
          b,
          w,
          A,
          U;
        function N() {
          A && A(),
            U && U(),
            o.cancelToken && o.cancelToken.unsubscribe(y),
            o.signal && o.signal.removeEventListener("abort", y);
        }
        let R = new XMLHttpRequest();
        R.open(o.method.toUpperCase(), o.url, !0), (R.timeout = o.timeout);
        function k() {
          if (!R) return;
          const q = Ot.from(
              "getAllResponseHeaders" in R && R.getAllResponseHeaders()
            ),
            Y = {
              data:
                !h || h === "text" || h === "json"
                  ? R.responseText
                  : R.response,
              status: R.status,
              statusText: R.statusText,
              headers: q,
              config: i,
              request: R,
            };
          qb(
            function (ye) {
              r(ye), N();
            },
            function (ye) {
              s(ye), N();
            },
            Y
          ),
            (R = null);
        }
        "onloadend" in R
          ? (R.onloadend = k)
          : (R.onreadystatechange = function () {
              !R ||
                R.readyState !== 4 ||
                (R.status === 0 &&
                  !(R.responseURL && R.responseURL.indexOf("file:") === 0)) ||
                setTimeout(k);
            }),
          (R.onabort = function () {
            R &&
              (s(new oe("Request aborted", oe.ECONNABORTED, i, R)), (R = null));
          }),
          (R.onerror = function () {
            s(new oe("Network Error", oe.ERR_NETWORK, i, R)), (R = null);
          }),
          (R.ontimeout = function () {
            let W = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const Y = o.transitional || kb;
            o.timeoutErrorMessage && (W = o.timeoutErrorMessage),
              s(
                new oe(
                  W,
                  Y.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
                  i,
                  R
                )
              ),
              (R = null);
          }),
          c === void 0 && d.setContentType(null),
          "setRequestHeader" in R &&
            I.forEach(d.toJSON(), function (W, Y) {
              R.setRequestHeader(Y, W);
            }),
          I.isUndefined(o.withCredentials) ||
            (R.withCredentials = !!o.withCredentials),
          h && h !== "json" && (R.responseType = o.responseType),
          m && (([w, U] = au(m, !0)), R.addEventListener("progress", w)),
          g &&
            R.upload &&
            (([b, A] = au(g)),
            R.upload.addEventListener("progress", b),
            R.upload.addEventListener("loadend", A)),
          (o.cancelToken || o.signal) &&
            ((y = (q) => {
              R &&
                (s(!q || q.type ? new Va(null, i, R) : q),
                R.abort(),
                (R = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(y),
            o.signal &&
              (o.signal.aborted ? y() : o.signal.addEventListener("abort", y)));
        const P = iM(o.url);
        if (P && ct.protocols.indexOf(P) === -1) {
          s(new oe("Unsupported protocol " + P + ":", oe.ERR_BAD_REQUEST, i));
          return;
        }
        R.send(c || null);
      });
    },
  dM = (i, t) => {
    const { length: r } = (i = i ? i.filter(Boolean) : []);
    if (t || r) {
      let s = new AbortController(),
        o;
      const c = function (m) {
        if (!o) {
          (o = !0), h();
          const y = m instanceof Error ? m : this.reason;
          s.abort(
            y instanceof oe ? y : new Va(y instanceof Error ? y.message : y)
          );
        }
      };
      let d =
        t &&
        setTimeout(() => {
          (d = null), c(new oe(`timeout ${t} of ms exceeded`, oe.ETIMEDOUT));
        }, t);
      const h = () => {
        i &&
          (d && clearTimeout(d),
          (d = null),
          i.forEach((m) => {
            m.unsubscribe
              ? m.unsubscribe(c)
              : m.removeEventListener("abort", c);
          }),
          (i = null));
      };
      i.forEach((m) => m.addEventListener("abort", c));
      const { signal: g } = s;
      return (g.unsubscribe = () => I.asap(h)), g;
    }
  },
  hM = function* (i, t) {
    let r = i.byteLength;
    if (r < t) {
      yield i;
      return;
    }
    let s = 0,
      o;
    for (; s < r; ) (o = s + t), yield i.slice(s, o), (s = o);
  },
  pM = async function* (i, t) {
    for await (const r of gM(i)) yield* hM(r, t);
  },
  gM = async function* (i) {
    if (i[Symbol.asyncIterator]) {
      yield* i;
      return;
    }
    const t = i.getReader();
    try {
      for (;;) {
        const { done: r, value: s } = await t.read();
        if (r) break;
        yield s;
      }
    } finally {
      await t.cancel();
    }
  },
  Cy = (i, t, r, s) => {
    const o = pM(i, t);
    let c = 0,
      d,
      h = (g) => {
        d || ((d = !0), s && s(g));
      };
    return new ReadableStream(
      {
        async pull(g) {
          try {
            const { done: m, value: y } = await o.next();
            if (m) {
              h(), g.close();
              return;
            }
            let b = y.byteLength;
            if (r) {
              let w = (c += b);
              r(w);
            }
            g.enqueue(new Uint8Array(y));
          } catch (m) {
            throw (h(m), m);
          }
        },
        cancel(g) {
          return h(g), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Eu =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Qb = Eu && typeof ReadableStream == "function",
  mM =
    Eu &&
    (typeof TextEncoder == "function"
      ? (
          (i) => (t) =>
            i.encode(t)
        )(new TextEncoder())
      : async (i) => new Uint8Array(await new Response(i).arrayBuffer())),
  Yb = (i, ...t) => {
    try {
      return !!i(...t);
    } catch {
      return !1;
    }
  },
  vM =
    Qb &&
    Yb(() => {
      let i = !1;
      const t = new Request(ct.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (i = !0), "half";
        },
      }).headers.has("Content-Type");
      return i && !t;
    }),
  Ay = 64 * 1024,
  Bd = Qb && Yb(() => I.isReadableStream(new Response("").body)),
  su = { stream: Bd && ((i) => i.body) };
Eu &&
  ((i) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !su[t] &&
        (su[t] = I.isFunction(i[t])
          ? (r) => r[t]()
          : (r, s) => {
              throw new oe(
                `Response type '${t}' is not supported`,
                oe.ERR_NOT_SUPPORT,
                s
              );
            });
    });
  })(new Response());
const yM = async (i) => {
    if (i == null) return 0;
    if (I.isBlob(i)) return i.size;
    if (I.isSpecCompliantForm(i))
      return (
        await new Request(ct.origin, { method: "POST", body: i }).arrayBuffer()
      ).byteLength;
    if (I.isArrayBufferView(i) || I.isArrayBuffer(i)) return i.byteLength;
    if ((I.isURLSearchParams(i) && (i = i + ""), I.isString(i)))
      return (await mM(i)).byteLength;
  },
  bM = async (i, t) => {
    const r = I.toFiniteNumber(i.getContentLength());
    return r ?? yM(t);
  },
  SM =
    Eu &&
    (async (i) => {
      let {
        url: t,
        method: r,
        data: s,
        signal: o,
        cancelToken: c,
        timeout: d,
        onDownloadProgress: h,
        onUploadProgress: g,
        responseType: m,
        headers: y,
        withCredentials: b = "same-origin",
        fetchOptions: w,
      } = Gb(i);
      m = m ? (m + "").toLowerCase() : "text";
      let A = dM([o, c && c.toAbortSignal()], d),
        U;
      const N =
        A &&
        A.unsubscribe &&
        (() => {
          A.unsubscribe();
        });
      let R;
      try {
        if (
          g &&
          vM &&
          r !== "get" &&
          r !== "head" &&
          (R = await bM(y, s)) !== 0
        ) {
          let Y = new Request(t, { method: "POST", body: s, duplex: "half" }),
            se;
          if (
            (I.isFormData(s) &&
              (se = Y.headers.get("content-type")) &&
              y.setContentType(se),
            Y.body)
          ) {
            const [ye, me] = Dy(R, au(wy(g)));
            s = Cy(Y.body, Ay, ye, me);
          }
        }
        I.isString(b) || (b = b ? "include" : "omit");
        const k = "credentials" in Request.prototype;
        U = new Request(t, {
          ...w,
          signal: A,
          method: r.toUpperCase(),
          headers: y.normalize().toJSON(),
          body: s,
          duplex: "half",
          credentials: k ? b : void 0,
        });
        let P = await fetch(U);
        const q = Bd && (m === "stream" || m === "response");
        if (Bd && (h || (q && N))) {
          const Y = {};
          ["status", "statusText", "headers"].forEach((V) => {
            Y[V] = P[V];
          });
          const se = I.toFiniteNumber(P.headers.get("content-length")),
            [ye, me] = (h && Dy(se, au(wy(h), !0))) || [];
          P = new Response(
            Cy(P.body, Ay, ye, () => {
              me && me(), N && N();
            }),
            Y
          );
        }
        m = m || "text";
        let W = await su[I.findKey(su, m) || "text"](P, i);
        return (
          !q && N && N(),
          await new Promise((Y, se) => {
            qb(Y, se, {
              data: W,
              headers: Ot.from(P.headers),
              status: P.status,
              statusText: P.statusText,
              config: i,
              request: U,
            });
          })
        );
      } catch (k) {
        throw (
          (N && N(),
          k && k.name === "TypeError" && /fetch/i.test(k.message)
            ? Object.assign(new oe("Network Error", oe.ERR_NETWORK, i, U), {
                cause: k.cause || k,
              })
            : oe.from(k, k && k.code, i, U))
        );
      }
    }),
  Pd = { http: LN, xhr: fM, fetch: SM };
I.forEach(Pd, (i, t) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: t });
    } catch {}
    Object.defineProperty(i, "adapterName", { value: t });
  }
});
const Ny = (i) => `- ${i}`,
  EM = (i) => I.isFunction(i) || i === null || i === !1,
  Fb = {
    getAdapter: (i) => {
      i = I.isArray(i) ? i : [i];
      const { length: t } = i;
      let r, s;
      const o = {};
      for (let c = 0; c < t; c++) {
        r = i[c];
        let d;
        if (
          ((s = r),
          !EM(r) && ((s = Pd[(d = String(r)).toLowerCase()]), s === void 0))
        )
          throw new oe(`Unknown adapter '${d}'`);
        if (s) break;
        o[d || "#" + c] = s;
      }
      if (!s) {
        const c = Object.entries(o).map(
          ([h, g]) =>
            `adapter ${h} ` +
            (g === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let d = t
          ? c.length > 1
            ? `since :
` +
              c.map(Ny).join(`
`)
            : " " + Ny(c[0])
          : "as no adapter specified";
        throw new oe(
          "There is no suitable adapter to dispatch the request " + d,
          "ERR_NOT_SUPPORT"
        );
      }
      return s;
    },
    adapters: Pd,
  };
function id(i) {
  if (
    (i.cancelToken && i.cancelToken.throwIfRequested(),
    i.signal && i.signal.aborted)
  )
    throw new Va(null, i);
}
function My(i) {
  return (
    id(i),
    (i.headers = Ot.from(i.headers)),
    (i.data = nd.call(i, i.transformRequest)),
    ["post", "put", "patch"].indexOf(i.method) !== -1 &&
      i.headers.setContentType("application/x-www-form-urlencoded", !1),
    Fb.getAdapter(i.adapter || gl.adapter)(i).then(
      function (s) {
        return (
          id(i),
          (s.data = nd.call(i, i.transformResponse, s)),
          (s.headers = Ot.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          Pb(s) ||
            (id(i),
            s &&
              s.response &&
              ((s.response.data = nd.call(i, i.transformResponse, s.response)),
              (s.response.headers = Ot.from(s.response.headers)))),
          Promise.reject(s)
        );
      }
    )
  );
}
const Xb = "1.8.1",
  Tu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (i, t) => {
    Tu[i] = function (s) {
      return typeof s === i || "a" + (t < 1 ? "n " : " ") + i;
    };
  }
);
const xy = {};
Tu.transitional = function (t, r, s) {
  function o(c, d) {
    return (
      "[Axios v" +
      Xb +
      "] Transitional option '" +
      c +
      "'" +
      d +
      (s ? ". " + s : "")
    );
  }
  return (c, d, h) => {
    if (t === !1)
      throw new oe(
        o(d, " has been removed" + (r ? " in " + r : "")),
        oe.ERR_DEPRECATED
      );
    return (
      r &&
        !xy[d] &&
        ((xy[d] = !0),
        console.warn(
          o(
            d,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      t ? t(c, d, h) : !0
    );
  };
};
Tu.spelling = function (t) {
  return (r, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function TM(i, t, r) {
  if (typeof i != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(i);
  let o = s.length;
  for (; o-- > 0; ) {
    const c = s[o],
      d = t[c];
    if (d) {
      const h = i[c],
        g = h === void 0 || d(h, c, i);
      if (g !== !0)
        throw new oe("option " + c + " must be " + g, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new oe("Unknown option " + c, oe.ERR_BAD_OPTION);
  }
}
const Yo = { assertOptions: TM, validators: Tu },
  hn = Yo.validators;
let wr = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new _y(), response: new _y() });
  }
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (s) {
      if (s instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const c = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? c &&
              !String(s.stack).endsWith(c.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + c)
            : (s.stack = c);
        } catch {}
      }
      throw s;
    }
  }
  _request(t, r) {
    typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
      (r = Mr(this.defaults, r));
    const { transitional: s, paramsSerializer: o, headers: c } = r;
    s !== void 0 &&
      Yo.assertOptions(
        s,
        {
          silentJSONParsing: hn.transitional(hn.boolean),
          forcedJSONParsing: hn.transitional(hn.boolean),
          clarifyTimeoutError: hn.transitional(hn.boolean),
        },
        !1
      ),
      o != null &&
        (I.isFunction(o)
          ? (r.paramsSerializer = { serialize: o })
          : Yo.assertOptions(
              o,
              { encode: hn.function, serialize: hn.function },
              !0
            )),
      r.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (r.allowAbsoluteUrls = !0)),
      Yo.assertOptions(
        r,
        {
          baseUrl: hn.spelling("baseURL"),
          withXsrfToken: hn.spelling("withXSRFToken"),
        },
        !0
      ),
      (r.method = (r.method || this.defaults.method || "get").toLowerCase());
    let d = c && I.merge(c.common, c[r.method]);
    c &&
      I.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (U) => {
          delete c[U];
        }
      ),
      (r.headers = Ot.concat(d, c));
    const h = [];
    let g = !0;
    this.interceptors.request.forEach(function (N) {
      (typeof N.runWhen == "function" && N.runWhen(r) === !1) ||
        ((g = g && N.synchronous), h.unshift(N.fulfilled, N.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function (N) {
      m.push(N.fulfilled, N.rejected);
    });
    let y,
      b = 0,
      w;
    if (!g) {
      const U = [My.bind(this), void 0];
      for (
        U.unshift.apply(U, h),
          U.push.apply(U, m),
          w = U.length,
          y = Promise.resolve(r);
        b < w;

      )
        y = y.then(U[b++], U[b++]);
      return y;
    }
    w = h.length;
    let A = r;
    for (b = 0; b < w; ) {
      const U = h[b++],
        N = h[b++];
      try {
        A = U(A);
      } catch (R) {
        N.call(this, R);
        break;
      }
    }
    try {
      y = My.call(this, A);
    } catch (U) {
      return Promise.reject(U);
    }
    for (b = 0, w = m.length; b < w; ) y = y.then(m[b++], m[b++]);
    return y;
  }
  getUri(t) {
    t = Mr(this.defaults, t);
    const r = Vb(t.baseURL, t.url, t.allowAbsoluteUrls);
    return jb(r, t.params, t.paramsSerializer);
  }
};
I.forEach(["delete", "get", "head", "options"], function (t) {
  wr.prototype[t] = function (r, s) {
    return this.request(
      Mr(s || {}, { method: t, url: r, data: (s || {}).data })
    );
  };
});
I.forEach(["post", "put", "patch"], function (t) {
  function r(s) {
    return function (c, d, h) {
      return this.request(
        Mr(h || {}, {
          method: t,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: c,
          data: d,
        })
      );
    };
  }
  (wr.prototype[t] = r()), (wr.prototype[t + "Form"] = r(!0));
});
let _M = class Kb {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (c) {
      r = c;
    });
    const s = this;
    this.promise.then((o) => {
      if (!s._listeners) return;
      let c = s._listeners.length;
      for (; c-- > 0; ) s._listeners[c](o);
      s._listeners = null;
    }),
      (this.promise.then = (o) => {
        let c;
        const d = new Promise((h) => {
          s.subscribe(h), (c = h);
        }).then(o);
        return (
          (d.cancel = function () {
            s.unsubscribe(c);
          }),
          d
        );
      }),
      t(function (c, d, h) {
        s.reason || ((s.reason = new Va(c, d, h)), r(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      r = (s) => {
        t.abort(s);
      };
    return (
      this.subscribe(r),
      (t.signal.unsubscribe = () => this.unsubscribe(r)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Kb(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
};
function OM(i) {
  return function (r) {
    return i.apply(null, r);
  };
}
function DM(i) {
  return I.isObject(i) && i.isAxiosError === !0;
}
const qd = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(qd).forEach(([i, t]) => {
  qd[t] = i;
});
function Zb(i) {
  const t = new wr(i),
    r = Rb(wr.prototype.request, t);
  return (
    I.extend(r, wr.prototype, t, { allOwnKeys: !0 }),
    I.extend(r, t, null, { allOwnKeys: !0 }),
    (r.create = function (o) {
      return Zb(Mr(i, o));
    }),
    r
  );
}
const Ie = Zb(gl);
Ie.Axios = wr;
Ie.CanceledError = Va;
Ie.CancelToken = _M;
Ie.isCancel = Pb;
Ie.VERSION = Xb;
Ie.toFormData = Su;
Ie.AxiosError = oe;
Ie.Cancel = Ie.CanceledError;
Ie.all = function (t) {
  return Promise.all(t);
};
Ie.spread = OM;
Ie.isAxiosError = DM;
Ie.mergeConfig = Mr;
Ie.AxiosHeaders = Ot;
Ie.formToJSON = (i) => Bb(I.isHTMLForm(i) ? new FormData(i) : i);
Ie.getAdapter = Fb.getAdapter;
Ie.HttpStatusCode = qd;
Ie.default = Ie;
const {
    Axios: kM,
    AxiosError: BM,
    CanceledError: PM,
    isCancel: qM,
    CancelToken: VM,
    VERSION: GM,
    all: QM,
    Cancel: YM,
    isAxiosError: FM,
    spread: XM,
    toFormData: KM,
    AxiosHeaders: ZM,
    HttpStatusCode: $M,
    formToJSON: JM,
    getAdapter: WM,
    mergeConfig: ex,
  } = Ie,
  $b = { TASK: "task" },
  wM = ({ task: i, updateTaskStatus: t }) => {
    const [r, s] = x.useState(!1),
      [o, c] = x.useState(i.title),
      [d, h] = x.useState(i.description),
      g = sl(),
      m = Zo({
        mutationFn: async () => {
          await Ie.delete(
            `https://task-server-peach-ten.vercel.app/tasks/${i._id}`
          );
        },
        onSuccess: () => {
          je.success("Task deleted"), g.invalidateQueries(["tasks"]);
        },
        onError: () => {
          je.error("Failed to delete task");
        },
      }),
      y = Zo({
        mutationFn: async () => {
          await Ie.put(
            `https://task-server-peach-ten.vercel.app/tasks/${i._id}`,
            { title: o, description: d, status: i.status }
          );
        },
        onSuccess: () => {
          je.success("Task updated"), g.invalidateQueries(["tasks"]), s(!1);
        },
        onError: () => {
          je.error("Failed to update task");
        },
      }),
      [, b] = CA({ type: $b.TASK, item: { id: i._id, updateTaskStatus: t } }),
      w = () => {
        s(!0);
      },
      A = () => {
        s(!1);
      },
      U = () => {
        y.mutate();
      };
    return Q.jsx("div", {
      ref: b,
      className:
        "bg-gray-100 p-3 rounded-md flex justify-between items-center shadow",
      children: r
        ? Q.jsxs("div", {
            className: "flex-grow",
            children: [
              Q.jsx("input", {
                type: "text",
                value: o,
                onChange: (N) => c(N.target.value),
                className: "w-full p-2 mb-2 border rounded",
              }),
              Q.jsx("textarea", {
                value: d,
                onChange: (N) => h(N.target.value),
                className: "w-full p-2 border rounded",
              }),
              Q.jsxs("div", {
                className: "mt-2 flex justify-end gap-2",
                children: [
                  Q.jsx("button", {
                    onClick: A,
                    className:
                      "px-3 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400",
                    children: "Cancel",
                  }),
                  Q.jsx("button", {
                    onClick: U,
                    className:
                      "px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600",
                    children: "Save",
                  }),
                ],
              }),
            ],
          })
        : Q.jsxs(Q.Fragment, {
            children: [
              Q.jsxs("div", {
                children: [
                  Q.jsx("h3", {
                    className: "font-semibold",
                    children: i.title,
                  }),
                  Q.jsx("p", {
                    className: "text-sm text-gray-600",
                    children: i.description,
                  }),
                ],
              }),
              Q.jsxs("div", {
                className: "flex gap-2",
                children: [
                  Q.jsx("button", {
                    onClick: w,
                    className:
                      "px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600",
                    children: "Edit",
                  }),
                  Q.jsx("button", {
                    onClick: () => m.mutate(),
                    className:
                      "px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600",
                    children: "Delete",
                  }),
                ],
              }),
            ],
          }),
    });
  },
  RM = async (i, t) => {
    const { data: r } = await Ie.get(
      `https://task-server-peach-ten.vercel.app/tasks/category/${t}?userId=${i}`
    );
    return r;
  },
  CM = ({ status: i }) => {
    const { user: t } = Ba(),
      r = sl(),
      {
        data: s,
        isLoading: o,
        error: c,
      } = fO({
        queryKey: ["tasks", t == null ? void 0 : t.uid, i],
        queryFn: () => RM(t == null ? void 0 : t.uid, i),
        enabled: !!t,
      }),
      d = Zo({
        mutationFn: async ({ taskId: h, newStatus: g }) => {
          await Ie.put(`https://task-server-peach-ten.vercel.app/tasks/${h}`, {
            status: g,
          });
        },
        onSuccess: () => {
          je.success("Task status updated"), r.invalidateQueries(["tasks"]);
        },
        onError: (h) => {
          console.error("Error updating task status:", h),
            je.error("Failed to update task status");
        },
      });
    return o
      ? Q.jsx("p", { children: "Loading..." })
      : c
      ? Q.jsx("p", { children: "Error loading tasks" })
      : Q.jsx("div", {
          className: "space-y-3",
          children:
            s.length > 0
              ? s.map((h) =>
                  Q.jsx(wM, { task: h, updateTaskStatus: d.mutate }, h._id)
                )
              : Q.jsx("p", {
                  className: "text-gray-500",
                  children: "No tasks available",
                }),
        });
  },
  rd = ({ title: i, status: t }) => {
    const [, r] = zA({
      accept: $b.TASK,
      drop: (s) => {
        s.updateTaskStatus({ taskId: s.id, newStatus: t });
      },
    });
    return Q.jsxs("div", {
      ref: r,
      className: "bg-white p-4 rounded-lg shadow-md",
      children: [
        Q.jsx("h2", { className: "text-xl font-semibold mb-4", children: i }),
        Q.jsx(CM, { status: t }),
      ],
    });
  },
  AM = () =>
    Q.jsx(iA, {
      backend: ZA,
      children: Q.jsxs("div", {
        className: "grid grid-cols-3 gap-4",
        children: [
          Q.jsx(rd, { title: "To-Do", status: "todo" }),
          Q.jsx(rd, { title: "In Progress", status: "in-progress" }),
          Q.jsx(rd, { title: "Done", status: "done" }),
        ],
      }),
    }),
  NM = () => {
    const { user: i } = Ba(),
      t = sl(),
      [r, s] = x.useState({ title: "", description: "", status: "todo" }),
      o = Zo({
        mutationFn: async (d) => {
          await Ie.post("https://task-server-peach-ten.vercel.app/tasks", d);
        },
        onSuccess: () => {
          je.success("Task added!"),
            t.invalidateQueries(["tasks"]),
            s({ title: "", description: "", status: "todo" });
        },
        onError: () => {
          je.error("Failed to add task");
        },
      }),
      c = (d) => {
        if ((d.preventDefault(), !r.title.trim() || !r.description.trim())) {
          je.error("Please fill out all fields");
          return;
        }
        o.mutate({ ...r, userId: i.uid });
      };
    return Q.jsxs("form", {
      onSubmit: c,
      className: "bg-white p-4 rounded-lg shadow-md space-y-3",
      children: [
        Q.jsx("input", {
          type: "text",
          placeholder: "Task Title",
          value: r.title,
          onChange: (d) => s({ ...r, title: d.target.value }),
          className: "w-full px-3 py-2 border rounded-md",
        }),
        Q.jsx("textarea", {
          placeholder: "Task Description",
          value: r.description,
          onChange: (d) => s({ ...r, description: d.target.value }),
          className: "w-full px-3 py-2 border rounded-md",
        }),
        Q.jsxs("select", {
          value: r.status,
          onChange: (d) => s({ ...r, status: d.target.value }),
          className: "w-full px-3 py-2 border rounded-md",
          children: [
            Q.jsx("option", { value: "todo", children: "To-Do" }),
            Q.jsx("option", { value: "in-progress", children: "In Progress" }),
            Q.jsx("option", { value: "done", children: "Done" }),
          ],
        }),
        Q.jsx("button", {
          type: "submit",
          className:
            "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full",
          children: "Add Task",
        }),
      ],
    });
  },
  MM = () => {
    const { user: i, logout: t } = Ba();
    return Q.jsxs("div", {
      className: "min-h-screen bg-gray-100 p-6",
      children: [
        Q.jsxs("div", {
          className: "flex justify-between items-center mb-6",
          children: [
            Q.jsx("h1", {
              className: "text-2xl font-bold",
              children: "Task Manager",
            }),
            Q.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                Q.jsx("span", {
                  className: "text-lg",
                  children: i == null ? void 0 : i.displayName,
                }),
                Q.jsx("button", {
                  onClick: t,
                  className:
                    "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600",
                  children: "Logout",
                }),
              ],
            }),
          ],
        }),
        Q.jsx(AM, {}),
        Q.jsx("div", { className: "mt-6", children: Q.jsx(NM, {}) }),
      ],
    });
  },
  xM = ({ children: i }) => {
    const { user: t, loading: r } = Ba();
    return r
      ? Q.jsx("div", { children: "Loading..." })
      : t
      ? i
      : Q.jsx(E_, { to: "/login" });
  },
  UM = new X_();
function IM() {
  return Q.jsx(W_, {
    client: UM,
    children: Q.jsxs(jR, {
      children: [
        Q.jsx(N_, {
          children: Q.jsxs(__, {
            children: [
              Q.jsx(zo, { path: "/", element: Q.jsx(kR, {}) }),
              Q.jsx(zo, { path: "/login", element: Q.jsx(BR, {}) }),
              Q.jsx(zo, {
                path: "/dashboard",
                element: Q.jsx(xM, { children: Q.jsx(MM, {}) }),
              }),
            ],
          }),
        }),
        Q.jsx(t1, {}),
      ],
    }),
  });
}
MT.createRoot(document.getElementById("root")).render(
  Q.jsx(x.StrictMode, { children: Q.jsx(IM, {}) })
);
