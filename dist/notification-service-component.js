function W2(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var By = { exports: {} }, Lv = {}, $y = { exports: {} }, Dt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jb;
function G2() {
  if (jb) return Dt;
  jb = 1;
  var f = Symbol.for("react.element"), c = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), _ = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), B = Symbol.iterator;
  function K(L) {
    return L === null || typeof L != "object" ? null : (L = B && L[B] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var Z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ae = Object.assign, de = {};
  function ue(L, q, Ze) {
    this.props = L, this.context = q, this.refs = de, this.updater = Ze || Z;
  }
  ue.prototype.isReactComponent = {}, ue.prototype.setState = function(L, q) {
    if (typeof L != "object" && typeof L != "function" && L != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, q, "setState");
  }, ue.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function Ne() {
  }
  Ne.prototype = ue.prototype;
  function ve(L, q, Ze) {
    this.props = L, this.context = q, this.refs = de, this.updater = Ze || Z;
  }
  var se = ve.prototype = new Ne();
  se.constructor = ve, ae(se, ue.prototype), se.isPureReactComponent = !0;
  var Te = Array.isArray, me = Object.prototype.hasOwnProperty, Ye = { current: null }, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ct(L, q, Ze) {
    var Xe, gt = {}, pt = null, ct = null;
    if (q != null) for (Xe in q.ref !== void 0 && (ct = q.ref), q.key !== void 0 && (pt = "" + q.key), q) me.call(q, Xe) && !Pe.hasOwnProperty(Xe) && (gt[Xe] = q[Xe]);
    var vt = arguments.length - 2;
    if (vt === 1) gt.children = Ze;
    else if (1 < vt) {
      for (var St = Array(vt), qt = 0; qt < vt; qt++) St[qt] = arguments[qt + 2];
      gt.children = St;
    }
    if (L && L.defaultProps) for (Xe in vt = L.defaultProps, vt) gt[Xe] === void 0 && (gt[Xe] = vt[Xe]);
    return { $$typeof: f, type: L, key: pt, ref: ct, props: gt, _owner: Ye.current };
  }
  function Rt(L, q) {
    return { $$typeof: f, type: L.type, key: q, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function dt(L) {
    return typeof L == "object" && L !== null && L.$$typeof === f;
  }
  function Ft(L) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(Ze) {
      return q[Ze];
    });
  }
  var nt = /\/+/g;
  function Me(L, q) {
    return typeof L == "object" && L !== null && L.key != null ? Ft("" + L.key) : q.toString(36);
  }
  function Tt(L, q, Ze, Xe, gt) {
    var pt = typeof L;
    (pt === "undefined" || pt === "boolean") && (L = null);
    var ct = !1;
    if (L === null) ct = !0;
    else switch (pt) {
      case "string":
      case "number":
        ct = !0;
        break;
      case "object":
        switch (L.$$typeof) {
          case f:
          case c:
            ct = !0;
        }
    }
    if (ct) return ct = L, gt = gt(ct), L = Xe === "" ? "." + Me(ct, 0) : Xe, Te(gt) ? (Ze = "", L != null && (Ze = L.replace(nt, "$&/") + "/"), Tt(gt, q, Ze, "", function(qt) {
      return qt;
    })) : gt != null && (dt(gt) && (gt = Rt(gt, Ze + (!gt.key || ct && ct.key === gt.key ? "" : ("" + gt.key).replace(nt, "$&/") + "/") + L)), q.push(gt)), 1;
    if (ct = 0, Xe = Xe === "" ? "." : Xe + ":", Te(L)) for (var vt = 0; vt < L.length; vt++) {
      pt = L[vt];
      var St = Xe + Me(pt, vt);
      ct += Tt(pt, q, Ze, St, gt);
    }
    else if (St = K(L), typeof St == "function") for (L = St.call(L), vt = 0; !(pt = L.next()).done; ) pt = pt.value, St = Xe + Me(pt, vt++), ct += Tt(pt, q, Ze, St, gt);
    else if (pt === "object") throw q = String(L), Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.");
    return ct;
  }
  function st(L, q, Ze) {
    if (L == null) return L;
    var Xe = [], gt = 0;
    return Tt(L, Xe, "", "", function(pt) {
      return q.call(Ze, pt, gt++);
    }), Xe;
  }
  function Ot(L) {
    if (L._status === -1) {
      var q = L._result;
      q = q(), q.then(function(Ze) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = Ze);
      }, function(Ze) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = Ze);
      }), L._status === -1 && (L._status = 0, L._result = q);
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var Ue = { current: null }, fe = { transition: null }, He = { ReactCurrentDispatcher: Ue, ReactCurrentBatchConfig: fe, ReactCurrentOwner: Ye };
  function Se() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Dt.Children = { map: st, forEach: function(L, q, Ze) {
    st(L, function() {
      q.apply(this, arguments);
    }, Ze);
  }, count: function(L) {
    var q = 0;
    return st(L, function() {
      q++;
    }), q;
  }, toArray: function(L) {
    return st(L, function(q) {
      return q;
    }) || [];
  }, only: function(L) {
    if (!dt(L)) throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, Dt.Component = ue, Dt.Fragment = h, Dt.Profiler = b, Dt.PureComponent = ve, Dt.StrictMode = S, Dt.Suspense = P, Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = He, Dt.act = Se, Dt.cloneElement = function(L, q, Ze) {
    if (L == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var Xe = ae({}, L.props), gt = L.key, pt = L.ref, ct = L._owner;
    if (q != null) {
      if (q.ref !== void 0 && (pt = q.ref, ct = Ye.current), q.key !== void 0 && (gt = "" + q.key), L.type && L.type.defaultProps) var vt = L.type.defaultProps;
      for (St in q) me.call(q, St) && !Pe.hasOwnProperty(St) && (Xe[St] = q[St] === void 0 && vt !== void 0 ? vt[St] : q[St]);
    }
    var St = arguments.length - 2;
    if (St === 1) Xe.children = Ze;
    else if (1 < St) {
      vt = Array(St);
      for (var qt = 0; qt < St; qt++) vt[qt] = arguments[qt + 2];
      Xe.children = vt;
    }
    return { $$typeof: f, type: L.type, key: gt, ref: pt, props: Xe, _owner: ct };
  }, Dt.createContext = function(L) {
    return L = { $$typeof: _, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: k, _context: L }, L.Consumer = L;
  }, Dt.createElement = Ct, Dt.createFactory = function(L) {
    var q = Ct.bind(null, L);
    return q.type = L, q;
  }, Dt.createRef = function() {
    return { current: null };
  }, Dt.forwardRef = function(L) {
    return { $$typeof: G, render: L };
  }, Dt.isValidElement = dt, Dt.lazy = function(L) {
    return { $$typeof: ee, _payload: { _status: -1, _result: L }, _init: Ot };
  }, Dt.memo = function(L, q) {
    return { $$typeof: A, type: L, compare: q === void 0 ? null : q };
  }, Dt.startTransition = function(L) {
    var q = fe.transition;
    fe.transition = {};
    try {
      L();
    } finally {
      fe.transition = q;
    }
  }, Dt.unstable_act = Se, Dt.useCallback = function(L, q) {
    return Ue.current.useCallback(L, q);
  }, Dt.useContext = function(L) {
    return Ue.current.useContext(L);
  }, Dt.useDebugValue = function() {
  }, Dt.useDeferredValue = function(L) {
    return Ue.current.useDeferredValue(L);
  }, Dt.useEffect = function(L, q) {
    return Ue.current.useEffect(L, q);
  }, Dt.useId = function() {
    return Ue.current.useId();
  }, Dt.useImperativeHandle = function(L, q, Ze) {
    return Ue.current.useImperativeHandle(L, q, Ze);
  }, Dt.useInsertionEffect = function(L, q) {
    return Ue.current.useInsertionEffect(L, q);
  }, Dt.useLayoutEffect = function(L, q) {
    return Ue.current.useLayoutEffect(L, q);
  }, Dt.useMemo = function(L, q) {
    return Ue.current.useMemo(L, q);
  }, Dt.useReducer = function(L, q, Ze) {
    return Ue.current.useReducer(L, q, Ze);
  }, Dt.useRef = function(L) {
    return Ue.current.useRef(L);
  }, Dt.useState = function(L) {
    return Ue.current.useState(L);
  }, Dt.useSyncExternalStore = function(L, q, Ze) {
    return Ue.current.useSyncExternalStore(L, q, Ze);
  }, Dt.useTransition = function() {
    return Ue.current.useTransition();
  }, Dt.version = "18.3.1", Dt;
}
var jv = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
jv.exports;
var Pb;
function q2() {
  return Pb || (Pb = 1, function(f, c) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var h = "18.3.1", S = Symbol.for("react.element"), b = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), A = Symbol.for("react.context"), ee = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), de = Symbol.for("react.offscreen"), ue = Symbol.iterator, Ne = "@@iterator";
      function ve(g) {
        if (g === null || typeof g != "object")
          return null;
        var R = ue && g[ue] || g[Ne];
        return typeof R == "function" ? R : null;
      }
      var se = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Te = {
        transition: null
      }, me = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ye = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Pe = {}, Ct = null;
      function Rt(g) {
        Ct = g;
      }
      Pe.setExtraStackFrame = function(g) {
        Ct = g;
      }, Pe.getCurrentStack = null, Pe.getStackAddendum = function() {
        var g = "";
        Ct && (g += Ct);
        var R = Pe.getCurrentStack;
        return R && (g += R() || ""), g;
      };
      var dt = !1, Ft = !1, nt = !1, Me = !1, Tt = !1, st = {
        ReactCurrentDispatcher: se,
        ReactCurrentBatchConfig: Te,
        ReactCurrentOwner: Ye
      };
      st.ReactDebugCurrentFrame = Pe, st.ReactCurrentActQueue = me;
      function Ot(g) {
        {
          for (var R = arguments.length, V = new Array(R > 1 ? R - 1 : 0), Y = 1; Y < R; Y++)
            V[Y - 1] = arguments[Y];
          fe("warn", g, V);
        }
      }
      function Ue(g) {
        {
          for (var R = arguments.length, V = new Array(R > 1 ? R - 1 : 0), Y = 1; Y < R; Y++)
            V[Y - 1] = arguments[Y];
          fe("error", g, V);
        }
      }
      function fe(g, R, V) {
        {
          var Y = st.ReactDebugCurrentFrame, oe = Y.getStackAddendum();
          oe !== "" && (R += "%s", V = V.concat([oe]));
          var Qe = V.map(function(ge) {
            return String(ge);
          });
          Qe.unshift("Warning: " + R), Function.prototype.apply.call(console[g], console, Qe);
        }
      }
      var He = {};
      function Se(g, R) {
        {
          var V = g.constructor, Y = V && (V.displayName || V.name) || "ReactClass", oe = Y + "." + R;
          if (He[oe])
            return;
          Ue("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", R, Y), He[oe] = !0;
        }
      }
      var L = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(g) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(g, R, V) {
          Se(g, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(g, R, V, Y) {
          Se(g, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(g, R, V, Y) {
          Se(g, "setState");
        }
      }, q = Object.assign, Ze = {};
      Object.freeze(Ze);
      function Xe(g, R, V) {
        this.props = g, this.context = R, this.refs = Ze, this.updater = V || L;
      }
      Xe.prototype.isReactComponent = {}, Xe.prototype.setState = function(g, R) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, g, R, "setState");
      }, Xe.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      {
        var gt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, pt = function(g, R) {
          Object.defineProperty(Xe.prototype, g, {
            get: function() {
              Ot("%s(...) is deprecated in plain JavaScript React classes. %s", R[0], R[1]);
            }
          });
        };
        for (var ct in gt)
          gt.hasOwnProperty(ct) && pt(ct, gt[ct]);
      }
      function vt() {
      }
      vt.prototype = Xe.prototype;
      function St(g, R, V) {
        this.props = g, this.context = R, this.refs = Ze, this.updater = V || L;
      }
      var qt = St.prototype = new vt();
      qt.constructor = St, q(qt, Xe.prototype), qt.isPureReactComponent = !0;
      function Mn() {
        var g = {
          current: null
        };
        return Object.seal(g), g;
      }
      var kr = Array.isArray;
      function xn(g) {
        return kr(g);
      }
      function ir(g) {
        {
          var R = typeof Symbol == "function" && Symbol.toStringTag, V = R && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return V;
        }
      }
      function Yn(g) {
        try {
          return Qn(g), !1;
        } catch {
          return !0;
        }
      }
      function Qn(g) {
        return "" + g;
      }
      function Wr(g) {
        if (Yn(g))
          return Ue("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(g)), Qn(g);
      }
      function yi(g, R, V) {
        var Y = g.displayName;
        if (Y)
          return Y;
        var oe = R.displayName || R.name || "";
        return oe !== "" ? V + "(" + oe + ")" : V;
      }
      function fa(g) {
        return g.displayName || "Context";
      }
      function er(g) {
        if (g == null)
          return null;
        if (typeof g.tag == "number" && Ue("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
          return g.displayName || g.name || null;
        if (typeof g == "string")
          return g;
        switch (g) {
          case k:
            return "Fragment";
          case b:
            return "Portal";
          case G:
            return "Profiler";
          case _:
            return "StrictMode";
          case B:
            return "Suspense";
          case K:
            return "SuspenseList";
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case A:
              var R = g;
              return fa(R) + ".Consumer";
            case P:
              var V = g;
              return fa(V._context) + ".Provider";
            case ee:
              return yi(g, g.render, "ForwardRef");
            case Z:
              var Y = g.displayName || null;
              return Y !== null ? Y : er(g.type) || "Memo";
            case ae: {
              var oe = g, Qe = oe._payload, ge = oe._init;
              try {
                return er(ge(Qe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var wn = Object.prototype.hasOwnProperty, Wn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, qa, An;
      An = {};
      function Cr(g) {
        if (wn.call(g, "ref")) {
          var R = Object.getOwnPropertyDescriptor(g, "ref").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return g.ref !== void 0;
      }
      function da(g) {
        if (wn.call(g, "key")) {
          var R = Object.getOwnPropertyDescriptor(g, "key").get;
          if (R && R.isReactWarning)
            return !1;
        }
        return g.key !== void 0;
      }
      function Xa(g, R) {
        var V = function() {
          Er || (Er = !0, Ue("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        V.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: V,
          configurable: !0
        });
      }
      function gi(g, R) {
        var V = function() {
          qa || (qa = !0, Ue("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        V.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: V,
          configurable: !0
        });
      }
      function he(g) {
        if (typeof g.ref == "string" && Ye.current && g.__self && Ye.current.stateNode !== g.__self) {
          var R = er(Ye.current.type);
          An[R] || (Ue('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R, g.ref), An[R] = !0);
        }
      }
      var Fe = function(g, R, V, Y, oe, Qe, ge) {
        var qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: g,
          key: R,
          ref: V,
          props: ge,
          // Record the component responsible for creating this element.
          _owner: Qe
        };
        return qe._store = {}, Object.defineProperty(qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Y
        }), Object.defineProperty(qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: oe
        }), Object.freeze && (Object.freeze(qe.props), Object.freeze(qe)), qe;
      };
      function ht(g, R, V) {
        var Y, oe = {}, Qe = null, ge = null, qe = null, xt = null;
        if (R != null) {
          Cr(R) && (ge = R.ref, he(R)), da(R) && (Wr(R.key), Qe = "" + R.key), qe = R.__self === void 0 ? null : R.__self, xt = R.__source === void 0 ? null : R.__source;
          for (Y in R)
            wn.call(R, Y) && !Wn.hasOwnProperty(Y) && (oe[Y] = R[Y]);
        }
        var Ut = arguments.length - 2;
        if (Ut === 1)
          oe.children = V;
        else if (Ut > 1) {
          for (var sn = Array(Ut), Jt = 0; Jt < Ut; Jt++)
            sn[Jt] = arguments[Jt + 2];
          Object.freeze && Object.freeze(sn), oe.children = sn;
        }
        if (g && g.defaultProps) {
          var mt = g.defaultProps;
          for (Y in mt)
            oe[Y] === void 0 && (oe[Y] = mt[Y]);
        }
        if (Qe || ge) {
          var en = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Qe && Xa(oe, en), ge && gi(oe, en);
        }
        return Fe(g, Qe, ge, qe, xt, Ye.current, oe);
      }
      function Qt(g, R) {
        var V = Fe(g.type, R, g.ref, g._self, g._source, g._owner, g.props);
        return V;
      }
      function ln(g, R, V) {
        if (g == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + g + ".");
        var Y, oe = q({}, g.props), Qe = g.key, ge = g.ref, qe = g._self, xt = g._source, Ut = g._owner;
        if (R != null) {
          Cr(R) && (ge = R.ref, Ut = Ye.current), da(R) && (Wr(R.key), Qe = "" + R.key);
          var sn;
          g.type && g.type.defaultProps && (sn = g.type.defaultProps);
          for (Y in R)
            wn.call(R, Y) && !Wn.hasOwnProperty(Y) && (R[Y] === void 0 && sn !== void 0 ? oe[Y] = sn[Y] : oe[Y] = R[Y]);
        }
        var Jt = arguments.length - 2;
        if (Jt === 1)
          oe.children = V;
        else if (Jt > 1) {
          for (var mt = Array(Jt), en = 0; en < Jt; en++)
            mt[en] = arguments[en + 2];
          oe.children = mt;
        }
        return Fe(g.type, Qe, ge, qe, xt, Ut, oe);
      }
      function yn(g) {
        return typeof g == "object" && g !== null && g.$$typeof === S;
      }
      var fn = ".", tr = ":";
      function on(g) {
        var R = /[=:]/g, V = {
          "=": "=0",
          ":": "=2"
        }, Y = g.replace(R, function(oe) {
          return V[oe];
        });
        return "$" + Y;
      }
      var Xt = !1, Kt = /\/+/g;
      function pa(g) {
        return g.replace(Kt, "$&/");
      }
      function br(g, R) {
        return typeof g == "object" && g !== null && g.key != null ? (Wr(g.key), on("" + g.key)) : R.toString(36);
      }
      function Ta(g, R, V, Y, oe) {
        var Qe = typeof g;
        (Qe === "undefined" || Qe === "boolean") && (g = null);
        var ge = !1;
        if (g === null)
          ge = !0;
        else
          switch (Qe) {
            case "string":
            case "number":
              ge = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case S:
                case b:
                  ge = !0;
              }
          }
        if (ge) {
          var qe = g, xt = oe(qe), Ut = Y === "" ? fn + br(qe, 0) : Y;
          if (xn(xt)) {
            var sn = "";
            Ut != null && (sn = pa(Ut) + "/"), Ta(xt, R, sn, "", function(Nd) {
              return Nd;
            });
          } else xt != null && (yn(xt) && (xt.key && (!qe || qe.key !== xt.key) && Wr(xt.key), xt = Qt(
            xt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            V + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (xt.key && (!qe || qe.key !== xt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              pa("" + xt.key) + "/"
            ) : "") + Ut
          )), R.push(xt));
          return 1;
        }
        var Jt, mt, en = 0, gn = Y === "" ? fn : Y + tr;
        if (xn(g))
          for (var Ll = 0; Ll < g.length; Ll++)
            Jt = g[Ll], mt = gn + br(Jt, Ll), en += Ta(Jt, R, V, mt, oe);
        else {
          var ms = ve(g);
          if (typeof ms == "function") {
            var Ki = g;
            ms === Ki.entries && (Xt || Ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xt = !0);
            for (var ys = ms.call(Ki), Ro, Od = 0; !(Ro = ys.next()).done; )
              Jt = Ro.value, mt = gn + br(Jt, Od++), en += Ta(Jt, R, V, mt, oe);
          } else if (Qe === "object") {
            var Mc = String(g);
            throw new Error("Objects are not valid as a React child (found: " + (Mc === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : Mc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return en;
      }
      function Gi(g, R, V) {
        if (g == null)
          return g;
        var Y = [], oe = 0;
        return Ta(g, Y, "", "", function(Qe) {
          return R.call(V, Qe, oe++);
        }), Y;
      }
      function yo(g) {
        var R = 0;
        return Gi(g, function() {
          R++;
        }), R;
      }
      function go(g, R, V) {
        Gi(g, function() {
          R.apply(this, arguments);
        }, V);
      }
      function xl(g) {
        return Gi(g, function(R) {
          return R;
        }) || [];
      }
      function wl(g) {
        if (!yn(g))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
      function So(g) {
        var R = {
          $$typeof: A,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: g,
          _currentValue2: g,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        R.Provider = {
          $$typeof: P,
          _context: R
        };
        var V = !1, Y = !1, oe = !1;
        {
          var Qe = {
            $$typeof: A,
            _context: R
          };
          Object.defineProperties(Qe, {
            Provider: {
              get: function() {
                return Y || (Y = !0, Ue("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), R.Provider;
              },
              set: function(ge) {
                R.Provider = ge;
              }
            },
            _currentValue: {
              get: function() {
                return R._currentValue;
              },
              set: function(ge) {
                R._currentValue = ge;
              }
            },
            _currentValue2: {
              get: function() {
                return R._currentValue2;
              },
              set: function(ge) {
                R._currentValue2 = ge;
              }
            },
            _threadCount: {
              get: function() {
                return R._threadCount;
              },
              set: function(ge) {
                R._threadCount = ge;
              }
            },
            Consumer: {
              get: function() {
                return V || (V = !0, Ue("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), R.Consumer;
              }
            },
            displayName: {
              get: function() {
                return R.displayName;
              },
              set: function(ge) {
                oe || (Ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ge), oe = !0);
              }
            }
          }), R.Consumer = Qe;
        }
        return R._currentRenderer = null, R._currentRenderer2 = null, R;
      }
      var Dr = -1, Or = 0, lr = 1, Si = 2;
      function Ka(g) {
        if (g._status === Dr) {
          var R = g._result, V = R();
          if (V.then(function(Qe) {
            if (g._status === Or || g._status === Dr) {
              var ge = g;
              ge._status = lr, ge._result = Qe;
            }
          }, function(Qe) {
            if (g._status === Or || g._status === Dr) {
              var ge = g;
              ge._status = Si, ge._result = Qe;
            }
          }), g._status === Dr) {
            var Y = g;
            Y._status = Or, Y._result = V;
          }
        }
        if (g._status === lr) {
          var oe = g._result;
          return oe === void 0 && Ue(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, oe), "default" in oe || Ue(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, oe), oe.default;
        } else
          throw g._result;
      }
      function _i(g) {
        var R = {
          // We use these fields to store the result.
          _status: Dr,
          _result: g
        }, V = {
          $$typeof: ae,
          _payload: R,
          _init: Ka
        };
        {
          var Y, oe;
          Object.defineProperties(V, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return Y;
              },
              set: function(Qe) {
                Ue("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Y = Qe, Object.defineProperty(V, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return oe;
              },
              set: function(Qe) {
                Ue("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), oe = Qe, Object.defineProperty(V, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return V;
      }
      function Ei(g) {
        g != null && g.$$typeof === Z ? Ue("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof g != "function" ? Ue("forwardRef requires a render function but was given %s.", g === null ? "null" : typeof g) : g.length !== 0 && g.length !== 2 && Ue("forwardRef render functions accept exactly two parameters: props and ref. %s", g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), g != null && (g.defaultProps != null || g.propTypes != null) && Ue("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var R = {
          $$typeof: ee,
          render: g
        };
        {
          var V;
          Object.defineProperty(R, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return V;
            },
            set: function(Y) {
              V = Y, !g.name && !g.displayName && (g.displayName = Y);
            }
          });
        }
        return R;
      }
      var T;
      T = Symbol.for("react.module.reference");
      function J(g) {
        return !!(typeof g == "string" || typeof g == "function" || g === k || g === G || Tt || g === _ || g === B || g === K || Me || g === de || dt || Ft || nt || typeof g == "object" && g !== null && (g.$$typeof === ae || g.$$typeof === Z || g.$$typeof === P || g.$$typeof === A || g.$$typeof === ee || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        g.$$typeof === T || g.getModuleId !== void 0));
      }
      function _e(g, R) {
        J(g) || Ue("memo: The first argument must be a component. Instead received: %s", g === null ? "null" : typeof g);
        var V = {
          $$typeof: Z,
          type: g,
          compare: R === void 0 ? null : R
        };
        {
          var Y;
          Object.defineProperty(V, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return Y;
            },
            set: function(oe) {
              Y = oe, !g.name && !g.displayName && (g.displayName = oe);
            }
          });
        }
        return V;
      }
      function Oe() {
        var g = se.current;
        return g === null && Ue(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), g;
      }
      function lt(g) {
        var R = Oe();
        if (g._context !== void 0) {
          var V = g._context;
          V.Consumer === g ? Ue("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : V.Provider === g && Ue("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return R.useContext(g);
      }
      function rt(g) {
        var R = Oe();
        return R.useState(g);
      }
      function bt(g, R, V) {
        var Y = Oe();
        return Y.useReducer(g, R, V);
      }
      function _t(g) {
        var R = Oe();
        return R.useRef(g);
      }
      function Rn(g, R) {
        var V = Oe();
        return V.useEffect(g, R);
      }
      function un(g, R) {
        var V = Oe();
        return V.useInsertionEffect(g, R);
      }
      function dn(g, R) {
        var V = Oe();
        return V.useLayoutEffect(g, R);
      }
      function or(g, R) {
        var V = Oe();
        return V.useCallback(g, R);
      }
      function Za(g, R) {
        var V = Oe();
        return V.useMemo(g, R);
      }
      function Ja(g, R, V) {
        var Y = Oe();
        return Y.useImperativeHandle(g, R, V);
      }
      function ot(g, R) {
        {
          var V = Oe();
          return V.useDebugValue(g, R);
        }
      }
      function ft() {
        var g = Oe();
        return g.useTransition();
      }
      function ei(g) {
        var R = Oe();
        return R.useDeferredValue(g);
      }
      function _o() {
        var g = Oe();
        return g.useId();
      }
      function Eo(g, R, V) {
        var Y = Oe();
        return Y.useSyncExternalStore(g, R, V);
      }
      var Rl = 0, fu, Tl, Gr, ds, Nr, zc, Lc;
      function du() {
      }
      du.__reactDisabledLog = !0;
      function kl() {
        {
          if (Rl === 0) {
            fu = console.log, Tl = console.info, Gr = console.warn, ds = console.error, Nr = console.group, zc = console.groupCollapsed, Lc = console.groupEnd;
            var g = {
              configurable: !0,
              enumerable: !0,
              value: du,
              writable: !0
            };
            Object.defineProperties(console, {
              info: g,
              log: g,
              warn: g,
              error: g,
              group: g,
              groupCollapsed: g,
              groupEnd: g
            });
          }
          Rl++;
        }
      }
      function va() {
        {
          if (Rl--, Rl === 0) {
            var g = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: q({}, g, {
                value: fu
              }),
              info: q({}, g, {
                value: Tl
              }),
              warn: q({}, g, {
                value: Gr
              }),
              error: q({}, g, {
                value: ds
              }),
              group: q({}, g, {
                value: Nr
              }),
              groupCollapsed: q({}, g, {
                value: zc
              }),
              groupEnd: q({}, g, {
                value: Lc
              })
            });
          }
          Rl < 0 && Ue("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ti = st.ReactCurrentDispatcher, ni;
      function pu(g, R, V) {
        {
          if (ni === void 0)
            try {
              throw Error();
            } catch (oe) {
              var Y = oe.stack.trim().match(/\n( *(at )?)/);
              ni = Y && Y[1] || "";
            }
          return `
` + ni + g;
        }
      }
      var Co = !1, Dl;
      {
        var vu = typeof WeakMap == "function" ? WeakMap : Map;
        Dl = new vu();
      }
      function hu(g, R) {
        if (!g || Co)
          return "";
        {
          var V = Dl.get(g);
          if (V !== void 0)
            return V;
        }
        var Y;
        Co = !0;
        var oe = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Qe;
        Qe = ti.current, ti.current = null, kl();
        try {
          if (R) {
            var ge = function() {
              throw Error();
            };
            if (Object.defineProperty(ge.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ge, []);
              } catch (gn) {
                Y = gn;
              }
              Reflect.construct(g, [], ge);
            } else {
              try {
                ge.call();
              } catch (gn) {
                Y = gn;
              }
              g.call(ge.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (gn) {
              Y = gn;
            }
            g();
          }
        } catch (gn) {
          if (gn && Y && typeof gn.stack == "string") {
            for (var qe = gn.stack.split(`
`), xt = Y.stack.split(`
`), Ut = qe.length - 1, sn = xt.length - 1; Ut >= 1 && sn >= 0 && qe[Ut] !== xt[sn]; )
              sn--;
            for (; Ut >= 1 && sn >= 0; Ut--, sn--)
              if (qe[Ut] !== xt[sn]) {
                if (Ut !== 1 || sn !== 1)
                  do
                    if (Ut--, sn--, sn < 0 || qe[Ut] !== xt[sn]) {
                      var Jt = `
` + qe[Ut].replace(" at new ", " at ");
                      return g.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", g.displayName)), typeof g == "function" && Dl.set(g, Jt), Jt;
                    }
                  while (Ut >= 1 && sn >= 0);
                break;
              }
          }
        } finally {
          Co = !1, ti.current = Qe, va(), Error.prepareStackTrace = oe;
        }
        var mt = g ? g.displayName || g.name : "", en = mt ? pu(mt) : "";
        return typeof g == "function" && Dl.set(g, en), en;
      }
      function qi(g, R, V) {
        return hu(g, !1);
      }
      function kd(g) {
        var R = g.prototype;
        return !!(R && R.isReactComponent);
      }
      function Xi(g, R, V) {
        if (g == null)
          return "";
        if (typeof g == "function")
          return hu(g, kd(g));
        if (typeof g == "string")
          return pu(g);
        switch (g) {
          case B:
            return pu("Suspense");
          case K:
            return pu("SuspenseList");
        }
        if (typeof g == "object")
          switch (g.$$typeof) {
            case ee:
              return qi(g.render);
            case Z:
              return Xi(g.type, R, V);
            case ae: {
              var Y = g, oe = Y._payload, Qe = Y._init;
              try {
                return Xi(Qe(oe), R, V);
              } catch {
              }
            }
          }
        return "";
      }
      var Ht = {}, mu = st.ReactDebugCurrentFrame;
      function At(g) {
        if (g) {
          var R = g._owner, V = Xi(g.type, g._source, R ? R.type : null);
          mu.setExtraStackFrame(V);
        } else
          mu.setExtraStackFrame(null);
      }
      function ps(g, R, V, Y, oe) {
        {
          var Qe = Function.call.bind(wn);
          for (var ge in g)
            if (Qe(g, ge)) {
              var qe = void 0;
              try {
                if (typeof g[ge] != "function") {
                  var xt = Error((Y || "React class") + ": " + V + " type `" + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw xt.name = "Invariant Violation", xt;
                }
                qe = g[ge](R, ge, Y, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ut) {
                qe = Ut;
              }
              qe && !(qe instanceof Error) && (At(oe), Ue("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Y || "React class", V, ge, typeof qe), At(null)), qe instanceof Error && !(qe.message in Ht) && (Ht[qe.message] = !0, At(oe), Ue("Failed %s type: %s", V, qe.message), At(null));
            }
        }
      }
      function Ci(g) {
        if (g) {
          var R = g._owner, V = Xi(g.type, g._source, R ? R.type : null);
          Rt(V);
        } else
          Rt(null);
      }
      var et;
      et = !1;
      function yu() {
        if (Ye.current) {
          var g = er(Ye.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
      function ur(g) {
        if (g !== void 0) {
          var R = g.fileName.replace(/^.*[\\\/]/, ""), V = g.lineNumber;
          return `

Check your code at ` + R + ":" + V + ".";
        }
        return "";
      }
      function bi(g) {
        return g != null ? ur(g.__source) : "";
      }
      var zr = {};
      function xi(g) {
        var R = yu();
        if (!R) {
          var V = typeof g == "string" ? g : g.displayName || g.name;
          V && (R = `

Check the top-level render call using <` + V + ">.");
        }
        return R;
      }
      function pn(g, R) {
        if (!(!g._store || g._store.validated || g.key != null)) {
          g._store.validated = !0;
          var V = xi(R);
          if (!zr[V]) {
            zr[V] = !0;
            var Y = "";
            g && g._owner && g._owner !== Ye.current && (Y = " It was passed a child from " + er(g._owner.type) + "."), Ci(g), Ue('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, Y), Ci(null);
          }
        }
      }
      function Zt(g, R) {
        if (typeof g == "object") {
          if (xn(g))
            for (var V = 0; V < g.length; V++) {
              var Y = g[V];
              yn(Y) && pn(Y, R);
            }
          else if (yn(g))
            g._store && (g._store.validated = !0);
          else if (g) {
            var oe = ve(g);
            if (typeof oe == "function" && oe !== g.entries)
              for (var Qe = oe.call(g), ge; !(ge = Qe.next()).done; )
                yn(ge.value) && pn(ge.value, R);
          }
        }
      }
      function Ol(g) {
        {
          var R = g.type;
          if (R == null || typeof R == "string")
            return;
          var V;
          if (typeof R == "function")
            V = R.propTypes;
          else if (typeof R == "object" && (R.$$typeof === ee || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          R.$$typeof === Z))
            V = R.propTypes;
          else
            return;
          if (V) {
            var Y = er(R);
            ps(V, g.props, "prop", Y, g);
          } else if (R.PropTypes !== void 0 && !et) {
            et = !0;
            var oe = er(R);
            Ue("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", oe || "Unknown");
          }
          typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && Ue("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Gn(g) {
        {
          for (var R = Object.keys(g.props), V = 0; V < R.length; V++) {
            var Y = R[V];
            if (Y !== "children" && Y !== "key") {
              Ci(g), Ue("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Y), Ci(null);
              break;
            }
          }
          g.ref !== null && (Ci(g), Ue("Invalid attribute `ref` supplied to `React.Fragment`."), Ci(null));
        }
      }
      function Lr(g, R, V) {
        var Y = J(g);
        if (!Y) {
          var oe = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Qe = bi(R);
          Qe ? oe += Qe : oe += yu();
          var ge;
          g === null ? ge = "null" : xn(g) ? ge = "array" : g !== void 0 && g.$$typeof === S ? (ge = "<" + (er(g.type) || "Unknown") + " />", oe = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof g, Ue("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, oe);
        }
        var qe = ht.apply(this, arguments);
        if (qe == null)
          return qe;
        if (Y)
          for (var xt = 2; xt < arguments.length; xt++)
            Zt(arguments[xt], g);
        return g === k ? Gn(qe) : Ol(qe), qe;
      }
      var ka = !1;
      function bo(g) {
        var R = Lr.bind(null, g);
        return R.type = g, ka || (ka = !0, Ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(R, "type", {
          enumerable: !1,
          get: function() {
            return Ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: g
            }), g;
          }
        }), R;
      }
      function vs(g, R, V) {
        for (var Y = ln.apply(this, arguments), oe = 2; oe < arguments.length; oe++)
          Zt(arguments[oe], Y.type);
        return Ol(Y), Y;
      }
      function hs(g, R) {
        var V = Te.transition;
        Te.transition = {};
        var Y = Te.transition;
        Te.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          g();
        } finally {
          if (Te.transition = V, V === null && Y._updatedFibers) {
            var oe = Y._updatedFibers.size;
            oe > 10 && Ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), Y._updatedFibers.clear();
          }
        }
      }
      var Nl = !1, xo = null;
      function Dd(g) {
        if (xo === null)
          try {
            var R = ("require" + Math.random()).slice(0, 7), V = f && f[R];
            xo = V.call(f, "timers").setImmediate;
          } catch {
            xo = function(oe) {
              Nl === !1 && (Nl = !0, typeof MessageChannel > "u" && Ue("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Qe = new MessageChannel();
              Qe.port1.onmessage = oe, Qe.port2.postMessage(void 0);
            };
          }
        return xo(g);
      }
      var Da = 0, ri = !1;
      function wi(g) {
        {
          var R = Da;
          Da++, me.current === null && (me.current = []);
          var V = me.isBatchingLegacy, Y;
          try {
            if (me.isBatchingLegacy = !0, Y = g(), !V && me.didScheduleLegacyUpdate) {
              var oe = me.current;
              oe !== null && (me.didScheduleLegacyUpdate = !1, zl(oe));
            }
          } catch (mt) {
            throw Oa(R), mt;
          } finally {
            me.isBatchingLegacy = V;
          }
          if (Y !== null && typeof Y == "object" && typeof Y.then == "function") {
            var Qe = Y, ge = !1, qe = {
              then: function(mt, en) {
                ge = !0, Qe.then(function(gn) {
                  Oa(R), Da === 0 ? gu(gn, mt, en) : mt(gn);
                }, function(gn) {
                  Oa(R), en(gn);
                });
              }
            };
            return !ri && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ge || (ri = !0, Ue("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), qe;
          } else {
            var xt = Y;
            if (Oa(R), Da === 0) {
              var Ut = me.current;
              Ut !== null && (zl(Ut), me.current = null);
              var sn = {
                then: function(mt, en) {
                  me.current === null ? (me.current = [], gu(xt, mt, en)) : mt(xt);
                }
              };
              return sn;
            } else {
              var Jt = {
                then: function(mt, en) {
                  mt(xt);
                }
              };
              return Jt;
            }
          }
        }
      }
      function Oa(g) {
        g !== Da - 1 && Ue("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Da = g;
      }
      function gu(g, R, V) {
        {
          var Y = me.current;
          if (Y !== null)
            try {
              zl(Y), Dd(function() {
                Y.length === 0 ? (me.current = null, R(g)) : gu(g, R, V);
              });
            } catch (oe) {
              V(oe);
            }
          else
            R(g);
        }
      }
      var Su = !1;
      function zl(g) {
        if (!Su) {
          Su = !0;
          var R = 0;
          try {
            for (; R < g.length; R++) {
              var V = g[R];
              do
                V = V(!0);
              while (V !== null);
            }
            g.length = 0;
          } catch (Y) {
            throw g = g.slice(R + 1), Y;
          } finally {
            Su = !1;
          }
        }
      }
      var wo = Lr, _u = vs, Eu = bo, ai = {
        map: Gi,
        forEach: go,
        count: yo,
        toArray: xl,
        only: wl
      };
      c.Children = ai, c.Component = Xe, c.Fragment = k, c.Profiler = G, c.PureComponent = St, c.StrictMode = _, c.Suspense = B, c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = st, c.act = wi, c.cloneElement = _u, c.createContext = So, c.createElement = wo, c.createFactory = Eu, c.createRef = Mn, c.forwardRef = Ei, c.isValidElement = yn, c.lazy = _i, c.memo = _e, c.startTransition = hs, c.unstable_act = wi, c.useCallback = or, c.useContext = lt, c.useDebugValue = ot, c.useDeferredValue = ei, c.useEffect = Rn, c.useId = _o, c.useImperativeHandle = Ja, c.useInsertionEffect = un, c.useLayoutEffect = dn, c.useMemo = Za, c.useReducer = bt, c.useRef = _t, c.useState = rt, c.useSyncExternalStore = Eo, c.useTransition = ft, c.version = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(jv, jv.exports)), jv.exports;
}
var Hb;
function Kv() {
  return Hb || (Hb = 1, process.env.NODE_ENV === "production" ? $y.exports = G2() : $y.exports = q2()), $y.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vb;
function X2() {
  if (Vb) return Lv;
  Vb = 1;
  var f = Kv(), c = Symbol.for("react.element"), h = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, b = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(G, P, A) {
    var ee, B = {}, K = null, Z = null;
    A !== void 0 && (K = "" + A), P.key !== void 0 && (K = "" + P.key), P.ref !== void 0 && (Z = P.ref);
    for (ee in P) S.call(P, ee) && !k.hasOwnProperty(ee) && (B[ee] = P[ee]);
    if (G && G.defaultProps) for (ee in P = G.defaultProps, P) B[ee] === void 0 && (B[ee] = P[ee]);
    return { $$typeof: c, type: G, key: K, ref: Z, props: B, _owner: b.current };
  }
  return Lv.Fragment = h, Lv.jsx = _, Lv.jsxs = _, Lv;
}
var Mv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bb;
function K2() {
  return Bb || (Bb = 1, process.env.NODE_ENV !== "production" && function() {
    var f = Kv(), c = Symbol.for("react.element"), h = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), G = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), ae = Symbol.iterator, de = "@@iterator";
    function ue(T) {
      if (T === null || typeof T != "object")
        return null;
      var J = ae && T[ae] || T[de];
      return typeof J == "function" ? J : null;
    }
    var Ne = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ve(T) {
      {
        for (var J = arguments.length, _e = new Array(J > 1 ? J - 1 : 0), Oe = 1; Oe < J; Oe++)
          _e[Oe - 1] = arguments[Oe];
        se("error", T, _e);
      }
    }
    function se(T, J, _e) {
      {
        var Oe = Ne.ReactDebugCurrentFrame, lt = Oe.getStackAddendum();
        lt !== "" && (J += "%s", _e = _e.concat([lt]));
        var rt = _e.map(function(bt) {
          return String(bt);
        });
        rt.unshift("Warning: " + J), Function.prototype.apply.call(console[T], console, rt);
      }
    }
    var Te = !1, me = !1, Ye = !1, Pe = !1, Ct = !1, Rt;
    Rt = Symbol.for("react.module.reference");
    function dt(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === S || T === k || Ct || T === b || T === A || T === ee || Pe || T === Z || Te || me || Ye || typeof T == "object" && T !== null && (T.$$typeof === K || T.$$typeof === B || T.$$typeof === _ || T.$$typeof === G || T.$$typeof === P || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === Rt || T.getModuleId !== void 0));
    }
    function Ft(T, J, _e) {
      var Oe = T.displayName;
      if (Oe)
        return Oe;
      var lt = J.displayName || J.name || "";
      return lt !== "" ? _e + "(" + lt + ")" : _e;
    }
    function nt(T) {
      return T.displayName || "Context";
    }
    function Me(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && ve("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case S:
          return "Fragment";
        case h:
          return "Portal";
        case k:
          return "Profiler";
        case b:
          return "StrictMode";
        case A:
          return "Suspense";
        case ee:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case G:
            var J = T;
            return nt(J) + ".Consumer";
          case _:
            var _e = T;
            return nt(_e._context) + ".Provider";
          case P:
            return Ft(T, T.render, "ForwardRef");
          case B:
            var Oe = T.displayName || null;
            return Oe !== null ? Oe : Me(T.type) || "Memo";
          case K: {
            var lt = T, rt = lt._payload, bt = lt._init;
            try {
              return Me(bt(rt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Tt = Object.assign, st = 0, Ot, Ue, fe, He, Se, L, q;
    function Ze() {
    }
    Ze.__reactDisabledLog = !0;
    function Xe() {
      {
        if (st === 0) {
          Ot = console.log, Ue = console.info, fe = console.warn, He = console.error, Se = console.group, L = console.groupCollapsed, q = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: Ze,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        st++;
      }
    }
    function gt() {
      {
        if (st--, st === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Tt({}, T, {
              value: Ot
            }),
            info: Tt({}, T, {
              value: Ue
            }),
            warn: Tt({}, T, {
              value: fe
            }),
            error: Tt({}, T, {
              value: He
            }),
            group: Tt({}, T, {
              value: Se
            }),
            groupCollapsed: Tt({}, T, {
              value: L
            }),
            groupEnd: Tt({}, T, {
              value: q
            })
          });
        }
        st < 0 && ve("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pt = Ne.ReactCurrentDispatcher, ct;
    function vt(T, J, _e) {
      {
        if (ct === void 0)
          try {
            throw Error();
          } catch (lt) {
            var Oe = lt.stack.trim().match(/\n( *(at )?)/);
            ct = Oe && Oe[1] || "";
          }
        return `
` + ct + T;
      }
    }
    var St = !1, qt;
    {
      var Mn = typeof WeakMap == "function" ? WeakMap : Map;
      qt = new Mn();
    }
    function kr(T, J) {
      if (!T || St)
        return "";
      {
        var _e = qt.get(T);
        if (_e !== void 0)
          return _e;
      }
      var Oe;
      St = !0;
      var lt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var rt;
      rt = pt.current, pt.current = null, Xe();
      try {
        if (J) {
          var bt = function() {
            throw Error();
          };
          if (Object.defineProperty(bt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(bt, []);
            } catch (ot) {
              Oe = ot;
            }
            Reflect.construct(T, [], bt);
          } else {
            try {
              bt.call();
            } catch (ot) {
              Oe = ot;
            }
            T.call(bt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ot) {
            Oe = ot;
          }
          T();
        }
      } catch (ot) {
        if (ot && Oe && typeof ot.stack == "string") {
          for (var _t = ot.stack.split(`
`), Rn = Oe.stack.split(`
`), un = _t.length - 1, dn = Rn.length - 1; un >= 1 && dn >= 0 && _t[un] !== Rn[dn]; )
            dn--;
          for (; un >= 1 && dn >= 0; un--, dn--)
            if (_t[un] !== Rn[dn]) {
              if (un !== 1 || dn !== 1)
                do
                  if (un--, dn--, dn < 0 || _t[un] !== Rn[dn]) {
                    var or = `
` + _t[un].replace(" at new ", " at ");
                    return T.displayName && or.includes("<anonymous>") && (or = or.replace("<anonymous>", T.displayName)), typeof T == "function" && qt.set(T, or), or;
                  }
                while (un >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        St = !1, pt.current = rt, gt(), Error.prepareStackTrace = lt;
      }
      var Za = T ? T.displayName || T.name : "", Ja = Za ? vt(Za) : "";
      return typeof T == "function" && qt.set(T, Ja), Ja;
    }
    function xn(T, J, _e) {
      return kr(T, !1);
    }
    function ir(T) {
      var J = T.prototype;
      return !!(J && J.isReactComponent);
    }
    function Yn(T, J, _e) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return kr(T, ir(T));
      if (typeof T == "string")
        return vt(T);
      switch (T) {
        case A:
          return vt("Suspense");
        case ee:
          return vt("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case P:
            return xn(T.render);
          case B:
            return Yn(T.type, J, _e);
          case K: {
            var Oe = T, lt = Oe._payload, rt = Oe._init;
            try {
              return Yn(rt(lt), J, _e);
            } catch {
            }
          }
        }
      return "";
    }
    var Qn = Object.prototype.hasOwnProperty, Wr = {}, yi = Ne.ReactDebugCurrentFrame;
    function fa(T) {
      if (T) {
        var J = T._owner, _e = Yn(T.type, T._source, J ? J.type : null);
        yi.setExtraStackFrame(_e);
      } else
        yi.setExtraStackFrame(null);
    }
    function er(T, J, _e, Oe, lt) {
      {
        var rt = Function.call.bind(Qn);
        for (var bt in T)
          if (rt(T, bt)) {
            var _t = void 0;
            try {
              if (typeof T[bt] != "function") {
                var Rn = Error((Oe || "React class") + ": " + _e + " type `" + bt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[bt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rn.name = "Invariant Violation", Rn;
              }
              _t = T[bt](J, bt, Oe, _e, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (un) {
              _t = un;
            }
            _t && !(_t instanceof Error) && (fa(lt), ve("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Oe || "React class", _e, bt, typeof _t), fa(null)), _t instanceof Error && !(_t.message in Wr) && (Wr[_t.message] = !0, fa(lt), ve("Failed %s type: %s", _e, _t.message), fa(null));
          }
      }
    }
    var wn = Array.isArray;
    function Wn(T) {
      return wn(T);
    }
    function Er(T) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, _e = J && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return _e;
      }
    }
    function qa(T) {
      try {
        return An(T), !1;
      } catch {
        return !0;
      }
    }
    function An(T) {
      return "" + T;
    }
    function Cr(T) {
      if (qa(T))
        return ve("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(T)), An(T);
    }
    var da = Ne.ReactCurrentOwner, Xa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gi, he;
    function Fe(T) {
      if (Qn.call(T, "ref")) {
        var J = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function ht(T) {
      if (Qn.call(T, "key")) {
        var J = Object.getOwnPropertyDescriptor(T, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function Qt(T, J) {
      typeof T.ref == "string" && da.current;
    }
    function ln(T, J) {
      {
        var _e = function() {
          gi || (gi = !0, ve("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        _e.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: _e,
          configurable: !0
        });
      }
    }
    function yn(T, J) {
      {
        var _e = function() {
          he || (he = !0, ve("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        _e.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: _e,
          configurable: !0
        });
      }
    }
    var fn = function(T, J, _e, Oe, lt, rt, bt) {
      var _t = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: T,
        key: J,
        ref: _e,
        props: bt,
        // Record the component responsible for creating this element.
        _owner: rt
      };
      return _t._store = {}, Object.defineProperty(_t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_t, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.defineProperty(_t, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: lt
      }), Object.freeze && (Object.freeze(_t.props), Object.freeze(_t)), _t;
    };
    function tr(T, J, _e, Oe, lt) {
      {
        var rt, bt = {}, _t = null, Rn = null;
        _e !== void 0 && (Cr(_e), _t = "" + _e), ht(J) && (Cr(J.key), _t = "" + J.key), Fe(J) && (Rn = J.ref, Qt(J, lt));
        for (rt in J)
          Qn.call(J, rt) && !Xa.hasOwnProperty(rt) && (bt[rt] = J[rt]);
        if (T && T.defaultProps) {
          var un = T.defaultProps;
          for (rt in un)
            bt[rt] === void 0 && (bt[rt] = un[rt]);
        }
        if (_t || Rn) {
          var dn = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          _t && ln(bt, dn), Rn && yn(bt, dn);
        }
        return fn(T, _t, Rn, lt, Oe, da.current, bt);
      }
    }
    var on = Ne.ReactCurrentOwner, Xt = Ne.ReactDebugCurrentFrame;
    function Kt(T) {
      if (T) {
        var J = T._owner, _e = Yn(T.type, T._source, J ? J.type : null);
        Xt.setExtraStackFrame(_e);
      } else
        Xt.setExtraStackFrame(null);
    }
    var pa;
    pa = !1;
    function br(T) {
      return typeof T == "object" && T !== null && T.$$typeof === c;
    }
    function Ta() {
      {
        if (on.current) {
          var T = Me(on.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function Gi(T) {
      return "";
    }
    var yo = {};
    function go(T) {
      {
        var J = Ta();
        if (!J) {
          var _e = typeof T == "string" ? T : T.displayName || T.name;
          _e && (J = `

Check the top-level render call using <` + _e + ">.");
        }
        return J;
      }
    }
    function xl(T, J) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var _e = go(J);
        if (yo[_e])
          return;
        yo[_e] = !0;
        var Oe = "";
        T && T._owner && T._owner !== on.current && (Oe = " It was passed a child from " + Me(T._owner.type) + "."), Kt(T), ve('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _e, Oe), Kt(null);
      }
    }
    function wl(T, J) {
      {
        if (typeof T != "object")
          return;
        if (Wn(T))
          for (var _e = 0; _e < T.length; _e++) {
            var Oe = T[_e];
            br(Oe) && xl(Oe, J);
          }
        else if (br(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var lt = ue(T);
          if (typeof lt == "function" && lt !== T.entries)
            for (var rt = lt.call(T), bt; !(bt = rt.next()).done; )
              br(bt.value) && xl(bt.value, J);
        }
      }
    }
    function So(T) {
      {
        var J = T.type;
        if (J == null || typeof J == "string")
          return;
        var _e;
        if (typeof J == "function")
          _e = J.propTypes;
        else if (typeof J == "object" && (J.$$typeof === P || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        J.$$typeof === B))
          _e = J.propTypes;
        else
          return;
        if (_e) {
          var Oe = Me(J);
          er(_e, T.props, "prop", Oe, T);
        } else if (J.PropTypes !== void 0 && !pa) {
          pa = !0;
          var lt = Me(J);
          ve("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", lt || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && ve("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Dr(T) {
      {
        for (var J = Object.keys(T.props), _e = 0; _e < J.length; _e++) {
          var Oe = J[_e];
          if (Oe !== "children" && Oe !== "key") {
            Kt(T), ve("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Oe), Kt(null);
            break;
          }
        }
        T.ref !== null && (Kt(T), ve("Invalid attribute `ref` supplied to `React.Fragment`."), Kt(null));
      }
    }
    var Or = {};
    function lr(T, J, _e, Oe, lt, rt) {
      {
        var bt = dt(T);
        if (!bt) {
          var _t = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (_t += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rn = Gi();
          Rn ? _t += Rn : _t += Ta();
          var un;
          T === null ? un = "null" : Wn(T) ? un = "array" : T !== void 0 && T.$$typeof === c ? (un = "<" + (Me(T.type) || "Unknown") + " />", _t = " Did you accidentally export a JSX literal instead of a component?") : un = typeof T, ve("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", un, _t);
        }
        var dn = tr(T, J, _e, lt, rt);
        if (dn == null)
          return dn;
        if (bt) {
          var or = J.children;
          if (or !== void 0)
            if (Oe)
              if (Wn(or)) {
                for (var Za = 0; Za < or.length; Za++)
                  wl(or[Za], T);
                Object.freeze && Object.freeze(or);
              } else
                ve("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wl(or, T);
        }
        if (Qn.call(J, "key")) {
          var Ja = Me(T), ot = Object.keys(J).filter(function(_o) {
            return _o !== "key";
          }), ft = ot.length > 0 ? "{key: someKey, " + ot.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Or[Ja + ft]) {
            var ei = ot.length > 0 ? "{" + ot.join(": ..., ") + ": ...}" : "{}";
            ve(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ft, Ja, ei, Ja), Or[Ja + ft] = !0;
          }
        }
        return T === S ? Dr(dn) : So(dn), dn;
      }
    }
    function Si(T, J, _e) {
      return lr(T, J, _e, !0);
    }
    function Ka(T, J, _e) {
      return lr(T, J, _e, !1);
    }
    var _i = Ka, Ei = Si;
    Mv.Fragment = S, Mv.jsx = _i, Mv.jsxs = Ei;
  }()), Mv;
}
var $b;
function Z2() {
  return $b || ($b = 1, process.env.NODE_ENV === "production" ? By.exports = X2() : By.exports = K2()), By.exports;
}
var fo = Z2(), wt = Kv();
const bn = /* @__PURE__ */ W2(wt);
function wd(f, c) {
  var h = {};
  for (var S in f) Object.prototype.hasOwnProperty.call(f, S) && c.indexOf(S) < 0 && (h[S] = f[S]);
  if (f != null && typeof Object.getOwnPropertySymbols == "function") {
    var b = 0;
    for (S = Object.getOwnPropertySymbols(f); b < S.length; b++) c.indexOf(S[b]) < 0 && Object.prototype.propertyIsEnumerable.call(f, S[b]) && (h[S[b]] = f[S[b]]);
  }
  return h;
}
function $_(f, c) {
  c === void 0 && (c = {});
  var h = c.insertAt;
  if (f && typeof document < "u") {
    var S = document.head || document.getElementsByTagName("head")[0], b = document.createElement("style");
    b.type = "text/css", h === "top" && S.firstChild ? S.insertBefore(b, S.firstChild) : S.appendChild(b), b.styleSheet ? b.styleSheet.cssText = f : b.appendChild(document.createTextNode(f));
  }
}
var Dc;
(function(f) {
  f.ExtraSmall = "extraSmall", f.Small = "small", f.Medium = "medium", f.Large = "large", f.ExtraLarge = "extraLarge";
})(Dc || (Dc = {}));
var vo = { icon: "Icon-module_icon__1Jtzj icon_hds-icon__1YqNC", extraSmall: "Icon-module_extraSmall__3Q7tD icon_hds-icon--size-xs__3dAMZ", small: "Icon-module_small__gTGkU icon_hds-icon--size-s__2Lkik", medium: "Icon-module_medium__1D6Pb icon_hds-icon--size-m__1mcHv", large: "Icon-module_large__28YAW icon_hds-icon--size-l__3Zczy", extraLarge: "Icon-module_extraLarge__27rtn icon_hds-icon--size-xl__1Jes8" };
$_('.icon_hds-icon__1YqNC{background-color:currentcolor;display:inline-block;height:var(--icon-size);-webkit-mask-image:var(--mask-image);mask-image:var(--mask-image);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:auto;mask-size:auto;width:var(--icon-size)}.icon_hds-icon--size-xs__3dAMZ{--icon-size:var(--spacing-layout-2-xs)}.icon_hds-icon--size-s__2Lkik{--icon-size:var(--spacing-layout-xs)}.icon_hds-icon--size-m__1mcHv{--icon-size:var(--spacing-layout-s)}.icon_hds-icon--size-l__3Zczy{--icon-size:var(--spacing-layout-m)}.icon_hds-icon--size-xl__1Jes8{--icon-size:var(--spacing-layout-l)}[class*=hds-icon-start--]:before{-webkit-mask-image:var(--mask-image-before);mask-image:var(--mask-image-before)}[class*=hds-icon-end--]:after,[class*=hds-icon-start--]:before{background-color:currentcolor;content:"";display:inline-flex;height:var(--icon-size,24px);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:var(--icon-size,24px)}[class*=hds-icon-end--]:after{-webkit-mask-image:var(--mask-image-after);mask-image:var(--mask-image-after)}.Icon-module_icon__1Jtzj{background-color:transparent}');
const J2 = (f) => {
  var { "aria-label": c = "alert-circle-fill", "aria-hidden": h = !0, className: S = "", color: b, size: k = Dc.Small, style: _ = {} } = f, G = wd(f, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return bn.createElement("svg", Object.assign({ "aria-label": c, "aria-hidden": h, className: [vo.icon, vo[k], S].filter((P) => P).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: b, style: _ }, G), bn.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM13 16V18H11V16H13ZM13 6V14H11V6H13Z", fill: "currentColor" }));
}, eO = (f) => {
  var { "aria-label": c = "info-circle-fill", "aria-hidden": h = !0, className: S = "", color: b, size: k = Dc.Small, style: _ = {} } = f, G = wd(f, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return bn.createElement("svg", Object.assign({ "aria-label": c, "aria-hidden": h, className: [vo.icon, vo[k], S].filter((P) => P).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: b, style: _ }, G), bn.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM13 10V16.5H15V18H9V16.5H11V11.5H9V10H13ZM11.8125 6C12.5374 6 13.125 6.5876 13.125 7.3125C13.125 8.03735 12.5374 8.625 11.8125 8.625C11.0876 8.625 10.5 8.03735 10.5 7.3125C10.5 6.5876 11.0876 6 11.8125 6Z", fill: "currentColor" }));
}, tO = (f) => {
  var { "aria-label": c = "check-circle-fill", "aria-hidden": h = !0, className: S = "", color: b, size: k = Dc.Small, style: _ = {} } = f, G = wd(f, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return bn.createElement("svg", Object.assign({ "aria-label": c, "aria-hidden": h, className: [vo.icon, vo[k], S].filter((P) => P).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: b, style: _ }, G), bn.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM16.5 8L18 9.5L10.5 17L6 12.5L7.5 11L10.5 14L16.5 8Z", fill: "currentColor" }));
}, nO = (f) => {
  var { "aria-label": c = "cross", "aria-hidden": h = !0, className: S = "", color: b, size: k = Dc.Small, style: _ = {} } = f, G = wd(f, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return bn.createElement("svg", Object.assign({ "aria-label": c, "aria-hidden": h, className: [vo.icon, vo[k], S].filter((P) => P).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: b, style: _ }, G), bn.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 7.5L13.5 12L18 16.5L16.5 18L12 13.5L7.5 18L6 16.5L10.5 12L6 7.5L7.5 6L12 10.5L16.5 6L18 7.5Z", fill: "currentColor" }));
}, rO = (f) => {
  var { "aria-label": c = "error-fill", "aria-hidden": h = !0, className: S = "", color: b, size: k = Dc.Small, style: _ = {} } = f, G = wd(f, ["aria-label", "aria-hidden", "className", "color", "size", "style"]);
  return bn.createElement("svg", Object.assign({ "aria-label": c, "aria-hidden": h, className: [vo.icon, vo[k], S].filter((P) => P).join(" "), role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", color: b, style: _ }, G), bn.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.175 3.45608C11.5239 2.86969 12.3977 2.84875 12.7842 3.39325L12.825 3.45608L21.8771 18.6666C22.2202 19.2432 21.8055 19.951 21.1235 19.9976L21.052 20H2.94799C2.24813 20 1.7987 19.3114 2.09013 18.7267L2.12295 18.6666L11.175 3.45608ZM13 16V18H11V16H13ZM13 8.5V14.5H11V8.5H13Z", fill: "currentColor" }));
};
$_(':root{--breakpoint-xs:320px;--breakpoint-s:576px;--breakpoint-m:768px;--breakpoint-l:992px;--breakpoint-xl:1248px;--container-width-xs:288px;--container-width-s:544px;--container-width-m:720px;--container-width-l:944px;--container-width-xl:1200px;--color-brick:#bd2719;--color-brick-light:#ffeeed;--color-brick-medium-light:#facbc8;--color-brick-dark:#800e04;--color-bus:#0000bf;--color-bus-light:#f0f0ff;--color-bus-medium-light:#ccf;--color-bus-dark:#00005e;--color-coat-of-arms:#0072c6;--color-coat-of-arms-light:#e6f4ff;--color-coat-of-arms-medium-light:#b5daf7;--color-coat-of-arms-dark:#005799;--color-copper:#00d7a7;--color-copper-light:#cffaf1;--color-copper-medium-light:#9ef0de;--color-copper-dark:#00a17d;--color-engel:#ffe977;--color-engel-light:#fff9db;--color-engel-medium-light:#fff3b8;--color-engel-dark:#dbc030;--color-fog:#9fc9eb;--color-fog-light:#e8f3fc;--color-fog-medium-light:#d0e6f7;--color-fog-dark:#72a5cf;--color-gold:#c2a251;--color-gold-light:#f7f2e4;--color-gold-medium-light:#e8d7a7;--color-gold-dark:#9e823c;--color-metro:#fd4f00;--color-metro-light:#ffeee6;--color-metro-medium-light:#ffcab3;--color-metro-dark:#bd2f00;--color-silver:#dedfe1;--color-silver-light:#f7f7f8;--color-silver-medium-light:#efeff0;--color-silver-dark:#b0b8bf;--color-summer:#ffc61e;--color-summer-light:#fff4d4;--color-summer-medium-light:#ffe49c;--color-summer-dark:#cc9200;--color-suomenlinna:#f5a3c7;--color-suomenlinna-light:#fff0f7;--color-suomenlinna-medium-light:#ffdbeb;--color-suomenlinna-dark:#e673a5;--color-tram:#008741;--color-tram-light:#dff7eb;--color-tram-medium-light:#a3e3c2;--color-tram-dark:#006631;--color-focus-outline:#0072c6;--color-black:#000;--color-white:#fff;--color-black-5:#f2f2f2;--color-black-10:#e6e6e6;--color-black-20:#ccc;--color-black-30:#b3b3b3;--color-black-40:#999;--color-black-50:grey;--color-black-60:#595959;--color-black-70:#4d4d4d;--color-black-80:#333;--color-black-90:#1a1a1a;--color-error:#b01038;--color-error-light:#f6e2e6;--color-error-dark:#8d0d2d;--color-success:#007a64;--color-success-light:#e2f5f3;--color-success-dark:#006250;--color-alert:#ffda07;--color-alert-light:#fff4b4;--color-alert-dark:#d18200;--color-info:#0062b9;--color-info-light:#e5eff8;--color-info-dark:#004f94;--box-shadow-s:0px 2px 10px 0px rgba(0,0,0,0.07);--box-shadow-m:0px 2px 10px 0px rgba(0,0,0,0.1);--box-shadow-l:0px 2px 20px 0px rgba(0,0,0,0.2);--spacing-layout-2-xs:1rem;--spacing-layout-xs:1.5rem;--spacing-layout-s:2rem;--spacing-layout-m:3rem;--spacing-layout-l:4rem;--spacing-layout-xl:6rem;--spacing-layout-2-xl:8rem;--spacing-4-xs:0.125rem;--spacing-3-xs:0.25rem;--spacing-2-xs:0.5rem;--spacing-xs:0.75rem;--spacing-s:1rem;--spacing-m:1.5rem;--spacing-l:2rem;--spacing-xl:2.5rem;--spacing-2-xl:3.0rem;--spacing-3-xl:3.5rem;--spacing-4-xl:4rem;--spacing-5-xl:4.5rem;--fontsize-heading-xxl:4rem;--fontsize-heading-xl:3rem;--fontsize-heading-xl-mobile:2.5rem;--fontsize-heading-l:2rem;--fontsize-heading-m:1.5rem;--fontsize-heading-s:1.25rem;--fontsize-heading-xs:1.125rem;--fontsize-heading-xxs:1rem;--fontsize-body-s:0.875rem;--fontsize-body-m:1rem;--fontsize-body-l:1.125rem;--fontsize-body-xl:1.25rem;--font-default:HelsinkiGrotesk,Arial,sans-serif;--lineheight-s:1;--lineheight-m:1.2;--lineheight-l:1.5;--lineheight-xl:1.75}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.visually-hidden{border:0;clip:"rect(0 0 0 0)";height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.button-reset{background:none;border:none;color:inherit;cursor:pointer;font:inherit;padding:0}.text-body{color:var(--color-black-90);font-size:var(--fontsize-body-m);line-height:var(--lineheight-l)}.text-body,.text-medium{font-family:var(--font-default)}.text-medium{font-weight:500}.text-bold{font-family:var(--font-default);font-weight:700}.text-xl{font-size:var(--fontsize-heading-m)}.text-lg{font-size:var(--fontsize-heading-s)}.text-md{font-size:var(--fontsize-heading-xs)}.subtitle{font-size:var(--fontsize-body-m)}.text-sm{font-size:var(--fontsize-body-s);line-height:var(--lineheight-xl)}.heading-xxl{font-size:var(--fontsize-heading-xxl);letter-spacing:-1.2px}.heading-xl,.heading-xxl{font-weight:400;line-height:var(--lineheight-s)}.heading-xl{font-size:var(--fontsize-heading-xl);letter-spacing:-1px}.heading-xl-mobile{font-size:var(--fontsize-heading-xl-mobile);font-weight:400;letter-spacing:-.8px;line-height:var(--lineheight-s)}.heading-l{font-size:var(--fontsize-heading-l);font-weight:400;letter-spacing:-.4px}.heading-l,.heading-m{line-height:var(--lineheight-m)}.heading-m{font-size:var(--fontsize-heading-m);font-weight:500;letter-spacing:-.2px}.heading-s{font-size:var(--fontsize-heading-s);font-weight:500}.heading-s,.heading-xs{letter-spacing:0;line-height:var(--lineheight-l)}.heading-xs{font-size:var(--fontsize-heading-xs);font-weight:700}.heading-xxs{font-size:var(--fontsize-heading-xxs);font-weight:700;letter-spacing:.2px;line-height:var(--lineheight-l)}.helper-text{color:var(--color-black-60);display:block;flex-basis:100%;font-size:var(--fontsize-body-m);margin-top:var(--spacing-2-xs)}html{-webkit-text-size-adjust:100%}');
const aO = {}.hasOwnProperty;
function wx(f) {
  const c = typeof f;
  return f ? c === "string" || c === "number" ? f : Array.isArray(f) ? f.length ? f.map((h) => wx(h)).filter(Boolean).join(" ") : null : c === "object" ? ((h, S = null) => {
    if (h.toString !== Object.prototype.toString && !h.toString.toString().includes("[native code]")) return h.toString();
    const b = Object.assign({}, h);
    return S && Object.keys(S).filter((k) => !!h[k]).forEach((k) => {
      b[S[k]] = !0;
    }), Object.keys(b).filter((k) => aO.call(b, k) && !!b[k]).join(" ");
  })(f, this) : null : null;
}
var Ib = (...f) => f.map(wx).filter(Boolean).join(" "), Iy = { exports: {} }, Qa = {}, Yy = { exports: {} }, R_ = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yb;
function iO() {
  return Yb || (Yb = 1, function(f) {
    function c(fe, He) {
      var Se = fe.length;
      fe.push(He);
      e: for (; 0 < Se; ) {
        var L = Se - 1 >>> 1, q = fe[L];
        if (0 < b(q, He)) fe[L] = He, fe[Se] = q, Se = L;
        else break e;
      }
    }
    function h(fe) {
      return fe.length === 0 ? null : fe[0];
    }
    function S(fe) {
      if (fe.length === 0) return null;
      var He = fe[0], Se = fe.pop();
      if (Se !== He) {
        fe[0] = Se;
        e: for (var L = 0, q = fe.length, Ze = q >>> 1; L < Ze; ) {
          var Xe = 2 * (L + 1) - 1, gt = fe[Xe], pt = Xe + 1, ct = fe[pt];
          if (0 > b(gt, Se)) pt < q && 0 > b(ct, gt) ? (fe[L] = ct, fe[pt] = Se, L = pt) : (fe[L] = gt, fe[Xe] = Se, L = Xe);
          else if (pt < q && 0 > b(ct, Se)) fe[L] = ct, fe[pt] = Se, L = pt;
          else break e;
        }
      }
      return He;
    }
    function b(fe, He) {
      var Se = fe.sortIndex - He.sortIndex;
      return Se !== 0 ? Se : fe.id - He.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var k = performance;
      f.unstable_now = function() {
        return k.now();
      };
    } else {
      var _ = Date, G = _.now();
      f.unstable_now = function() {
        return _.now() - G;
      };
    }
    var P = [], A = [], ee = 1, B = null, K = 3, Z = !1, ae = !1, de = !1, ue = typeof setTimeout == "function" ? setTimeout : null, Ne = typeof clearTimeout == "function" ? clearTimeout : null, ve = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function se(fe) {
      for (var He = h(A); He !== null; ) {
        if (He.callback === null) S(A);
        else if (He.startTime <= fe) S(A), He.sortIndex = He.expirationTime, c(P, He);
        else break;
        He = h(A);
      }
    }
    function Te(fe) {
      if (de = !1, se(fe), !ae) if (h(P) !== null) ae = !0, Ot(me);
      else {
        var He = h(A);
        He !== null && Ue(Te, He.startTime - fe);
      }
    }
    function me(fe, He) {
      ae = !1, de && (de = !1, Ne(Ct), Ct = -1), Z = !0;
      var Se = K;
      try {
        for (se(He), B = h(P); B !== null && (!(B.expirationTime > He) || fe && !Ft()); ) {
          var L = B.callback;
          if (typeof L == "function") {
            B.callback = null, K = B.priorityLevel;
            var q = L(B.expirationTime <= He);
            He = f.unstable_now(), typeof q == "function" ? B.callback = q : B === h(P) && S(P), se(He);
          } else S(P);
          B = h(P);
        }
        if (B !== null) var Ze = !0;
        else {
          var Xe = h(A);
          Xe !== null && Ue(Te, Xe.startTime - He), Ze = !1;
        }
        return Ze;
      } finally {
        B = null, K = Se, Z = !1;
      }
    }
    var Ye = !1, Pe = null, Ct = -1, Rt = 5, dt = -1;
    function Ft() {
      return !(f.unstable_now() - dt < Rt);
    }
    function nt() {
      if (Pe !== null) {
        var fe = f.unstable_now();
        dt = fe;
        var He = !0;
        try {
          He = Pe(!0, fe);
        } finally {
          He ? Me() : (Ye = !1, Pe = null);
        }
      } else Ye = !1;
    }
    var Me;
    if (typeof ve == "function") Me = function() {
      ve(nt);
    };
    else if (typeof MessageChannel < "u") {
      var Tt = new MessageChannel(), st = Tt.port2;
      Tt.port1.onmessage = nt, Me = function() {
        st.postMessage(null);
      };
    } else Me = function() {
      ue(nt, 0);
    };
    function Ot(fe) {
      Pe = fe, Ye || (Ye = !0, Me());
    }
    function Ue(fe, He) {
      Ct = ue(function() {
        fe(f.unstable_now());
      }, He);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(fe) {
      fe.callback = null;
    }, f.unstable_continueExecution = function() {
      ae || Z || (ae = !0, Ot(me));
    }, f.unstable_forceFrameRate = function(fe) {
      0 > fe || 125 < fe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Rt = 0 < fe ? Math.floor(1e3 / fe) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, f.unstable_getFirstCallbackNode = function() {
      return h(P);
    }, f.unstable_next = function(fe) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var He = 3;
          break;
        default:
          He = K;
      }
      var Se = K;
      K = He;
      try {
        return fe();
      } finally {
        K = Se;
      }
    }, f.unstable_pauseExecution = function() {
    }, f.unstable_requestPaint = function() {
    }, f.unstable_runWithPriority = function(fe, He) {
      switch (fe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          fe = 3;
      }
      var Se = K;
      K = fe;
      try {
        return He();
      } finally {
        K = Se;
      }
    }, f.unstable_scheduleCallback = function(fe, He, Se) {
      var L = f.unstable_now();
      switch (typeof Se == "object" && Se !== null ? (Se = Se.delay, Se = typeof Se == "number" && 0 < Se ? L + Se : L) : Se = L, fe) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return q = Se + q, fe = { id: ee++, callback: He, priorityLevel: fe, startTime: Se, expirationTime: q, sortIndex: -1 }, Se > L ? (fe.sortIndex = Se, c(A, fe), h(P) === null && fe === h(A) && (de ? (Ne(Ct), Ct = -1) : de = !0, Ue(Te, Se - L))) : (fe.sortIndex = q, c(P, fe), ae || Z || (ae = !0, Ot(me))), fe;
    }, f.unstable_shouldYield = Ft, f.unstable_wrapCallback = function(fe) {
      var He = K;
      return function() {
        var Se = K;
        K = He;
        try {
          return fe.apply(this, arguments);
        } finally {
          K = Se;
        }
      };
    };
  }(R_)), R_;
}
var T_ = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qb;
function lO() {
  return Qb || (Qb = 1, function(f) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var c = !1, h = 5;
      function S(he, Fe) {
        var ht = he.length;
        he.push(Fe), _(he, Fe, ht);
      }
      function b(he) {
        return he.length === 0 ? null : he[0];
      }
      function k(he) {
        if (he.length === 0)
          return null;
        var Fe = he[0], ht = he.pop();
        return ht !== Fe && (he[0] = ht, G(he, ht, 0)), Fe;
      }
      function _(he, Fe, ht) {
        for (var Qt = ht; Qt > 0; ) {
          var ln = Qt - 1 >>> 1, yn = he[ln];
          if (P(yn, Fe) > 0)
            he[ln] = Fe, he[Qt] = yn, Qt = ln;
          else
            return;
        }
      }
      function G(he, Fe, ht) {
        for (var Qt = ht, ln = he.length, yn = ln >>> 1; Qt < yn; ) {
          var fn = (Qt + 1) * 2 - 1, tr = he[fn], on = fn + 1, Xt = he[on];
          if (P(tr, Fe) < 0)
            on < ln && P(Xt, tr) < 0 ? (he[Qt] = Xt, he[on] = Fe, Qt = on) : (he[Qt] = tr, he[fn] = Fe, Qt = fn);
          else if (on < ln && P(Xt, Fe) < 0)
            he[Qt] = Xt, he[on] = Fe, Qt = on;
          else
            return;
        }
      }
      function P(he, Fe) {
        var ht = he.sortIndex - Fe.sortIndex;
        return ht !== 0 ? ht : he.id - Fe.id;
      }
      var A = 1, ee = 2, B = 3, K = 4, Z = 5;
      function ae(he, Fe) {
      }
      var de = typeof performance == "object" && typeof performance.now == "function";
      if (de) {
        var ue = performance;
        f.unstable_now = function() {
          return ue.now();
        };
      } else {
        var Ne = Date, ve = Ne.now();
        f.unstable_now = function() {
          return Ne.now() - ve;
        };
      }
      var se = 1073741823, Te = -1, me = 250, Ye = 5e3, Pe = 1e4, Ct = se, Rt = [], dt = [], Ft = 1, nt = null, Me = B, Tt = !1, st = !1, Ot = !1, Ue = typeof setTimeout == "function" ? setTimeout : null, fe = typeof clearTimeout == "function" ? clearTimeout : null, He = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function Se(he) {
        for (var Fe = b(dt); Fe !== null; ) {
          if (Fe.callback === null)
            k(dt);
          else if (Fe.startTime <= he)
            k(dt), Fe.sortIndex = Fe.expirationTime, S(Rt, Fe);
          else
            return;
          Fe = b(dt);
        }
      }
      function L(he) {
        if (Ot = !1, Se(he), !st)
          if (b(Rt) !== null)
            st = !0, An(q);
          else {
            var Fe = b(dt);
            Fe !== null && Cr(L, Fe.startTime - he);
          }
      }
      function q(he, Fe) {
        st = !1, Ot && (Ot = !1, da()), Tt = !0;
        var ht = Me;
        try {
          var Qt;
          if (!c) return Ze(he, Fe);
        } finally {
          nt = null, Me = ht, Tt = !1;
        }
      }
      function Ze(he, Fe) {
        var ht = Fe;
        for (Se(ht), nt = b(Rt); nt !== null && !(nt.expirationTime > ht && (!he || yi())); ) {
          var Qt = nt.callback;
          if (typeof Qt == "function") {
            nt.callback = null, Me = nt.priorityLevel;
            var ln = nt.expirationTime <= ht, yn = Qt(ln);
            ht = f.unstable_now(), typeof yn == "function" ? nt.callback = yn : nt === b(Rt) && k(Rt), Se(ht);
          } else
            k(Rt);
          nt = b(Rt);
        }
        if (nt !== null)
          return !0;
        var fn = b(dt);
        return fn !== null && Cr(L, fn.startTime - ht), !1;
      }
      function Xe(he, Fe) {
        switch (he) {
          case A:
          case ee:
          case B:
          case K:
          case Z:
            break;
          default:
            he = B;
        }
        var ht = Me;
        Me = he;
        try {
          return Fe();
        } finally {
          Me = ht;
        }
      }
      function gt(he) {
        var Fe;
        switch (Me) {
          case A:
          case ee:
          case B:
            Fe = B;
            break;
          default:
            Fe = Me;
            break;
        }
        var ht = Me;
        Me = Fe;
        try {
          return he();
        } finally {
          Me = ht;
        }
      }
      function pt(he) {
        var Fe = Me;
        return function() {
          var ht = Me;
          Me = Fe;
          try {
            return he.apply(this, arguments);
          } finally {
            Me = ht;
          }
        };
      }
      function ct(he, Fe, ht) {
        var Qt = f.unstable_now(), ln;
        if (typeof ht == "object" && ht !== null) {
          var yn = ht.delay;
          typeof yn == "number" && yn > 0 ? ln = Qt + yn : ln = Qt;
        } else
          ln = Qt;
        var fn;
        switch (he) {
          case A:
            fn = Te;
            break;
          case ee:
            fn = me;
            break;
          case Z:
            fn = Ct;
            break;
          case K:
            fn = Pe;
            break;
          case B:
          default:
            fn = Ye;
            break;
        }
        var tr = ln + fn, on = {
          id: Ft++,
          callback: Fe,
          priorityLevel: he,
          startTime: ln,
          expirationTime: tr,
          sortIndex: -1
        };
        return ln > Qt ? (on.sortIndex = ln, S(dt, on), b(Rt) === null && on === b(dt) && (Ot ? da() : Ot = !0, Cr(L, ln - Qt))) : (on.sortIndex = tr, S(Rt, on), !st && !Tt && (st = !0, An(q))), on;
      }
      function vt() {
      }
      function St() {
        !st && !Tt && (st = !0, An(q));
      }
      function qt() {
        return b(Rt);
      }
      function Mn(he) {
        he.callback = null;
      }
      function kr() {
        return Me;
      }
      var xn = !1, ir = null, Yn = -1, Qn = h, Wr = -1;
      function yi() {
        var he = f.unstable_now() - Wr;
        return !(he < Qn);
      }
      function fa() {
      }
      function er(he) {
        if (he < 0 || he > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        he > 0 ? Qn = Math.floor(1e3 / he) : Qn = h;
      }
      var wn = function() {
        if (ir !== null) {
          var he = f.unstable_now();
          Wr = he;
          var Fe = !0, ht = !0;
          try {
            ht = ir(Fe, he);
          } finally {
            ht ? Wn() : (xn = !1, ir = null);
          }
        } else
          xn = !1;
      }, Wn;
      if (typeof He == "function")
        Wn = function() {
          He(wn);
        };
      else if (typeof MessageChannel < "u") {
        var Er = new MessageChannel(), qa = Er.port2;
        Er.port1.onmessage = wn, Wn = function() {
          qa.postMessage(null);
        };
      } else
        Wn = function() {
          Ue(wn, 0);
        };
      function An(he) {
        ir = he, xn || (xn = !0, Wn());
      }
      function Cr(he, Fe) {
        Yn = Ue(function() {
          he(f.unstable_now());
        }, Fe);
      }
      function da() {
        fe(Yn), Yn = -1;
      }
      var Xa = fa, gi = null;
      f.unstable_IdlePriority = Z, f.unstable_ImmediatePriority = A, f.unstable_LowPriority = K, f.unstable_NormalPriority = B, f.unstable_Profiling = gi, f.unstable_UserBlockingPriority = ee, f.unstable_cancelCallback = Mn, f.unstable_continueExecution = St, f.unstable_forceFrameRate = er, f.unstable_getCurrentPriorityLevel = kr, f.unstable_getFirstCallbackNode = qt, f.unstable_next = gt, f.unstable_pauseExecution = vt, f.unstable_requestPaint = Xa, f.unstable_runWithPriority = Xe, f.unstable_scheduleCallback = ct, f.unstable_shouldYield = yi, f.unstable_wrapCallback = pt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(T_)), T_;
}
var Wb;
function Rx() {
  return Wb || (Wb = 1, process.env.NODE_ENV === "production" ? Yy.exports = iO() : Yy.exports = lO()), Yy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gb;
function oO() {
  if (Gb) return Qa;
  Gb = 1;
  var f = Kv(), c = Rx();
  function h(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var S = /* @__PURE__ */ new Set(), b = {};
  function k(n, r) {
    _(n, r), _(n + "Capture", r);
  }
  function _(n, r) {
    for (b[n] = r, n = 0; n < r.length; n++) S.add(r[n]);
  }
  var G = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), P = Object.prototype.hasOwnProperty, A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ee = {}, B = {};
  function K(n) {
    return P.call(B, n) ? !0 : P.call(ee, n) ? !1 : A.test(n) ? B[n] = !0 : (ee[n] = !0, !1);
  }
  function Z(n, r, l, u) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ae(n, r, l, u) {
    if (r === null || typeof r > "u" || Z(n, r, l, u)) return !0;
    if (u) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function de(n, r, l, u, d, v, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = d, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = v, this.removeEmptyString = E;
  }
  var ue = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ue[n] = new de(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ue[r] = new de(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ue[n] = new de(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ue[n] = new de(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ue[n] = new de(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ue[n] = new de(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ue[n] = new de(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ue[n] = new de(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ue[n] = new de(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Ne = /[\-:]([a-z])/g;
  function ve(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Ne,
      ve
    );
    ue[r] = new de(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Ne, ve);
    ue[r] = new de(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Ne, ve);
    ue[r] = new de(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ue[n] = new de(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ue.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ue[n] = new de(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function se(n, r, l, u) {
    var d = ue.hasOwnProperty(r) ? ue[r] : null;
    (d !== null ? d.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ae(r, l, d, u) && (l = null), u || d === null ? K(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : d.mustUseProperty ? n[d.propertyName] = l === null ? d.type === 3 ? !1 : "" : l : (r = d.attributeName, u = d.attributeNamespace, l === null ? n.removeAttribute(r) : (d = d.type, l = d === 3 || d === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Te = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, me = Symbol.for("react.element"), Ye = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), Ct = Symbol.for("react.strict_mode"), Rt = Symbol.for("react.profiler"), dt = Symbol.for("react.provider"), Ft = Symbol.for("react.context"), nt = Symbol.for("react.forward_ref"), Me = Symbol.for("react.suspense"), Tt = Symbol.for("react.suspense_list"), st = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Ue = Symbol.for("react.offscreen"), fe = Symbol.iterator;
  function He(n) {
    return n === null || typeof n != "object" ? null : (n = fe && n[fe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Se = Object.assign, L;
  function q(n) {
    if (L === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      L = r && r[1] || "";
    }
    return `
` + L + n;
  }
  var Ze = !1;
  function Xe(n, r) {
    if (!n || Ze) return "";
    Ze = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch ($) {
          var u = $;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch ($) {
          u = $;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch ($) {
          u = $;
        }
        n();
      }
    } catch ($) {
      if ($ && u && typeof $.stack == "string") {
        for (var d = $.stack.split(`
`), v = u.stack.split(`
`), E = d.length - 1, w = v.length - 1; 1 <= E && 0 <= w && d[E] !== v[w]; ) w--;
        for (; 1 <= E && 0 <= w; E--, w--) if (d[E] !== v[w]) {
          if (E !== 1 || w !== 1)
            do
              if (E--, w--, 0 > w || d[E] !== v[w]) {
                var D = `
` + d[E].replace(" at new ", " at ");
                return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), D;
              }
            while (1 <= E && 0 <= w);
          break;
        }
      }
    } finally {
      Ze = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? q(n) : "";
  }
  function gt(n) {
    switch (n.tag) {
      case 5:
        return q(n.type);
      case 16:
        return q("Lazy");
      case 13:
        return q("Suspense");
      case 19:
        return q("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Xe(n.type, !1), n;
      case 11:
        return n = Xe(n.type.render, !1), n;
      case 1:
        return n = Xe(n.type, !0), n;
      default:
        return "";
    }
  }
  function pt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Pe:
        return "Fragment";
      case Ye:
        return "Portal";
      case Rt:
        return "Profiler";
      case Ct:
        return "StrictMode";
      case Me:
        return "Suspense";
      case Tt:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Ft:
        return (n.displayName || "Context") + ".Consumer";
      case dt:
        return (n._context.displayName || "Context") + ".Provider";
      case nt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case st:
        return r = n.displayName || null, r !== null ? r : pt(n.type) || "Memo";
      case Ot:
        r = n._payload, n = n._init;
        try {
          return pt(n(r));
        } catch {
        }
    }
    return null;
  }
  function ct(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return pt(r);
      case 8:
        return r === Ct ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function vt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function St(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function qt(n) {
    var r = St(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var d = l.get, v = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return d.call(this);
      }, set: function(E) {
        u = "" + E, v.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(E) {
        u = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Mn(n) {
    n._valueTracker || (n._valueTracker = qt(n));
  }
  function kr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = St(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function xn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function ir(n, r) {
    var l = r.checked;
    return Se({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Yn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = vt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Qn(n, r) {
    r = r.checked, r != null && se(n, "checked", r, !1);
  }
  function Wr(n, r) {
    Qn(n, r);
    var l = vt(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? fa(n, r.type, l) : r.hasOwnProperty("defaultValue") && fa(n, r.type, vt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function yi(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function fa(n, r, l) {
    (r !== "number" || xn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var er = Array.isArray;
  function wn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var d = 0; d < l.length; d++) r["$" + l[d]] = !0;
      for (l = 0; l < n.length; l++) d = r.hasOwnProperty("$" + n[l].value), n[l].selected !== d && (n[l].selected = d), d && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + vt(l), r = null, d = 0; d < n.length; d++) {
        if (n[d].value === l) {
          n[d].selected = !0, u && (n[d].defaultSelected = !0);
          return;
        }
        r !== null || n[d].disabled || (r = n[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Wn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(h(91));
    return Se({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Er(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(h(92));
        if (er(l)) {
          if (1 < l.length) throw Error(h(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: vt(l) };
  }
  function qa(n, r) {
    var l = vt(r.value), u = vt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function An(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Cr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function da(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Cr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Xa, gi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, d);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Xa = Xa || document.createElement("div"), Xa.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Xa.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function he(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Fe = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ht = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Fe).forEach(function(n) {
    ht.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Fe[r] = Fe[n];
    });
  });
  function Qt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Fe.hasOwnProperty(n) && Fe[n] ? ("" + r).trim() : r + "px";
  }
  function ln(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, d = Qt(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, d) : n[l] = d;
    }
  }
  var yn = Se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function fn(n, r) {
    if (r) {
      if (yn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(h(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(h(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(h(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(h(62));
    }
  }
  function tr(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var on = null;
  function Xt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Kt = null, pa = null, br = null;
  function Ta(n) {
    if (n = Be(n)) {
      if (typeof Kt != "function") throw Error(h(280));
      var r = n.stateNode;
      r && (r = Tn(r), Kt(n.stateNode, n.type, r));
    }
  }
  function Gi(n) {
    pa ? br ? br.push(n) : br = [n] : pa = n;
  }
  function yo() {
    if (pa) {
      var n = pa, r = br;
      if (br = pa = null, Ta(n), r) for (n = 0; n < r.length; n++) Ta(r[n]);
    }
  }
  function go(n, r) {
    return n(r);
  }
  function xl() {
  }
  var wl = !1;
  function So(n, r, l) {
    if (wl) return n(r, l);
    wl = !0;
    try {
      return go(n, r, l);
    } finally {
      wl = !1, (pa !== null || br !== null) && (xl(), yo());
    }
  }
  function Dr(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var u = Tn(l);
    if (u === null) return null;
    l = u[r];
    e: switch (r) {
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
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(h(231, r, typeof l));
    return l;
  }
  var Or = !1;
  if (G) try {
    var lr = {};
    Object.defineProperty(lr, "passive", { get: function() {
      Or = !0;
    } }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
  } catch {
    Or = !1;
  }
  function Si(n, r, l, u, d, v, E, w, D) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, $);
    } catch (re) {
      this.onError(re);
    }
  }
  var Ka = !1, _i = null, Ei = !1, T = null, J = { onError: function(n) {
    Ka = !0, _i = n;
  } };
  function _e(n, r, l, u, d, v, E, w, D) {
    Ka = !1, _i = null, Si.apply(J, arguments);
  }
  function Oe(n, r, l, u, d, v, E, w, D) {
    if (_e.apply(this, arguments), Ka) {
      if (Ka) {
        var $ = _i;
        Ka = !1, _i = null;
      } else throw Error(h(198));
      Ei || (Ei = !0, T = $);
    }
  }
  function lt(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function rt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function bt(n) {
    if (lt(n) !== n) throw Error(h(188));
  }
  function _t(n) {
    var r = n.alternate;
    if (!r) {
      if (r = lt(n), r === null) throw Error(h(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var d = l.return;
      if (d === null) break;
      var v = d.alternate;
      if (v === null) {
        if (u = d.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (d.child === v.child) {
        for (v = d.child; v; ) {
          if (v === l) return bt(d), n;
          if (v === u) return bt(d), r;
          v = v.sibling;
        }
        throw Error(h(188));
      }
      if (l.return !== u.return) l = d, u = v;
      else {
        for (var E = !1, w = d.child; w; ) {
          if (w === l) {
            E = !0, l = d, u = v;
            break;
          }
          if (w === u) {
            E = !0, u = d, l = v;
            break;
          }
          w = w.sibling;
        }
        if (!E) {
          for (w = v.child; w; ) {
            if (w === l) {
              E = !0, l = v, u = d;
              break;
            }
            if (w === u) {
              E = !0, u = v, l = d;
              break;
            }
            w = w.sibling;
          }
          if (!E) throw Error(h(189));
        }
      }
      if (l.alternate !== u) throw Error(h(190));
    }
    if (l.tag !== 3) throw Error(h(188));
    return l.stateNode.current === l ? n : r;
  }
  function Rn(n) {
    return n = _t(n), n !== null ? un(n) : null;
  }
  function un(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = un(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var dn = c.unstable_scheduleCallback, or = c.unstable_cancelCallback, Za = c.unstable_shouldYield, Ja = c.unstable_requestPaint, ot = c.unstable_now, ft = c.unstable_getCurrentPriorityLevel, ei = c.unstable_ImmediatePriority, _o = c.unstable_UserBlockingPriority, Eo = c.unstable_NormalPriority, Rl = c.unstable_LowPriority, fu = c.unstable_IdlePriority, Tl = null, Gr = null;
  function ds(n) {
    if (Gr && typeof Gr.onCommitFiberRoot == "function") try {
      Gr.onCommitFiberRoot(Tl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Nr = Math.clz32 ? Math.clz32 : du, zc = Math.log, Lc = Math.LN2;
  function du(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (zc(n) / Lc | 0) | 0;
  }
  var kl = 64, va = 4194304;
  function ti(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ni(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var u = 0, d = n.suspendedLanes, v = n.pingedLanes, E = l & 268435455;
    if (E !== 0) {
      var w = E & ~d;
      w !== 0 ? u = ti(w) : (v &= E, v !== 0 && (u = ti(v)));
    } else E = l & ~d, E !== 0 ? u = ti(E) : v !== 0 && (u = ti(v));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & d) && (d = u & -u, v = r & -r, d >= v || d === 16 && (v & 4194240) !== 0)) return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - Nr(r), d = 1 << l, u |= n[l], r &= ~d;
    return u;
  }
  function pu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
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
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Co(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, d = n.expirationTimes, v = n.pendingLanes; 0 < v; ) {
      var E = 31 - Nr(v), w = 1 << E, D = d[E];
      D === -1 ? (!(w & l) || w & u) && (d[E] = pu(w, r)) : D <= r && (n.expiredLanes |= w), v &= ~w;
    }
  }
  function Dl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function vu() {
    var n = kl;
    return kl <<= 1, !(kl & 4194240) && (kl = 64), n;
  }
  function hu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function qi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Nr(r), n[r] = l;
  }
  function kd(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var d = 31 - Nr(l), v = 1 << d;
      r[d] = 0, u[d] = -1, n[d] = -1, l &= ~v;
    }
  }
  function Xi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Nr(l), d = 1 << u;
      d & r | n[u] & r && (n[u] |= r), l &= ~d;
    }
  }
  var Ht = 0;
  function mu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var At, ps, Ci, et, yu, ur = !1, bi = [], zr = null, xi = null, pn = null, Zt = /* @__PURE__ */ new Map(), Ol = /* @__PURE__ */ new Map(), Gn = [], Lr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ka(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        zr = null;
        break;
      case "dragenter":
      case "dragleave":
        xi = null;
        break;
      case "mouseover":
      case "mouseout":
        pn = null;
        break;
      case "pointerover":
      case "pointerout":
        Zt.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ol.delete(r.pointerId);
    }
  }
  function bo(n, r, l, u, d, v) {
    return n === null || n.nativeEvent !== v ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: v, targetContainers: [d] }, r !== null && (r = Be(r), r !== null && ps(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), n);
  }
  function vs(n, r, l, u, d) {
    switch (r) {
      case "focusin":
        return zr = bo(zr, n, r, l, u, d), !0;
      case "dragenter":
        return xi = bo(xi, n, r, l, u, d), !0;
      case "mouseover":
        return pn = bo(pn, n, r, l, u, d), !0;
      case "pointerover":
        var v = d.pointerId;
        return Zt.set(v, bo(Zt.get(v) || null, n, r, l, u, d)), !0;
      case "gotpointercapture":
        return v = d.pointerId, Ol.set(v, bo(Ol.get(v) || null, n, r, l, u, d)), !0;
    }
    return !1;
  }
  function hs(n) {
    var r = zo(n.target);
    if (r !== null) {
      var l = lt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = rt(l), r !== null) {
            n.blockedOn = r, yu(n.priority, function() {
              Ci(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Nl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = _u(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        on = u, l.target.dispatchEvent(u), on = null;
      } else return r = Be(l), r !== null && ps(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function xo(n, r, l) {
    Nl(n) && l.delete(r);
  }
  function Dd() {
    ur = !1, zr !== null && Nl(zr) && (zr = null), xi !== null && Nl(xi) && (xi = null), pn !== null && Nl(pn) && (pn = null), Zt.forEach(xo), Ol.forEach(xo);
  }
  function Da(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ur || (ur = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, Dd)));
  }
  function ri(n) {
    function r(d) {
      return Da(d, n);
    }
    if (0 < bi.length) {
      Da(bi[0], n);
      for (var l = 1; l < bi.length; l++) {
        var u = bi[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (zr !== null && Da(zr, n), xi !== null && Da(xi, n), pn !== null && Da(pn, n), Zt.forEach(r), Ol.forEach(r), l = 0; l < Gn.length; l++) u = Gn[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Gn.length && (l = Gn[0], l.blockedOn === null); ) hs(l), l.blockedOn === null && Gn.shift();
  }
  var wi = Te.ReactCurrentBatchConfig, Oa = !0;
  function gu(n, r, l, u) {
    var d = Ht, v = wi.transition;
    wi.transition = null;
    try {
      Ht = 1, zl(n, r, l, u);
    } finally {
      Ht = d, wi.transition = v;
    }
  }
  function Su(n, r, l, u) {
    var d = Ht, v = wi.transition;
    wi.transition = null;
    try {
      Ht = 4, zl(n, r, l, u);
    } finally {
      Ht = d, wi.transition = v;
    }
  }
  function zl(n, r, l, u) {
    if (Oa) {
      var d = _u(n, r, l, u);
      if (d === null) Yc(n, r, u, wo, l), ka(n, u);
      else if (vs(d, n, r, l, u)) u.stopPropagation();
      else if (ka(n, u), r & 4 && -1 < Lr.indexOf(n)) {
        for (; d !== null; ) {
          var v = Be(d);
          if (v !== null && At(v), v = _u(n, r, l, u), v === null && Yc(n, r, u, wo, l), v === d) break;
          d = v;
        }
        d !== null && u.stopPropagation();
      } else Yc(n, r, u, null, l);
    }
  }
  var wo = null;
  function _u(n, r, l, u) {
    if (wo = null, n = Xt(u), n = zo(n), n !== null) if (r = lt(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = rt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return wo = n, null;
  }
  function Eu(n) {
    switch (n) {
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
        return 1;
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
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ft()) {
          case ei:
            return 1;
          case _o:
            return 4;
          case Eo:
          case Rl:
            return 16;
          case fu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ai = null, g = null, R = null;
  function V() {
    if (R) return R;
    var n, r = g, l = r.length, u, d = "value" in ai ? ai.value : ai.textContent, v = d.length;
    for (n = 0; n < l && r[n] === d[n]; n++) ;
    var E = l - n;
    for (u = 1; u <= E && r[l - u] === d[v - u]; u++) ;
    return R = d.slice(n, 1 < u ? 1 - u : void 0);
  }
  function Y(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function oe() {
    return !0;
  }
  function Qe() {
    return !1;
  }
  function ge(n) {
    function r(l, u, d, v, E) {
      this._reactName = l, this._targetInst = d, this.type = u, this.nativeEvent = v, this.target = E, this.currentTarget = null;
      for (var w in n) n.hasOwnProperty(w) && (l = n[w], this[w] = l ? l(v) : v[w]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? oe : Qe, this.isPropagationStopped = Qe, this;
    }
    return Se(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = oe);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = oe);
    }, persist: function() {
    }, isPersistent: oe }), r;
  }
  var qe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, xt = ge(qe), Ut = Se({}, qe, { view: 0, detail: 0 }), sn = ge(Ut), Jt, mt, en, gn = Se({}, Ut, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Md, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== en && (en && n.type === "mousemove" ? (Jt = n.screenX - en.screenX, mt = n.screenY - en.screenY) : mt = Jt = 0, en = n), Jt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : mt;
  } }), Ll = ge(gn), ms = Se({}, gn, { dataTransfer: 0 }), Ki = ge(ms), ys = Se({}, Ut, { relatedTarget: 0 }), Ro = ge(ys), Od = Se({}, qe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Mc = ge(Od), Nd = Se({}, qe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Jv = ge(Nd), zd = Se({}, qe, { data: 0 }), Ld = ge(zd), eh = {
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
    MozPrintableKey: "Unidentified"
  }, th = {
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
    224: "Meta"
  }, sg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = sg[n]) ? !!r[n] : !1;
  }
  function Md() {
    return Zi;
  }
  var Ad = Se({}, Ut, { key: function(n) {
    if (n.key) {
      var r = eh[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = Y(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? th[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Md, charCode: function(n) {
    return n.type === "keypress" ? Y(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Y(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ud = ge(Ad), Fd = Se({}, gn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), nh = ge(Fd), Ac = Se({}, Ut, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Md }), rh = ge(Ac), qr = Se({}, qe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ji = ge(qr), Un = Se({}, gn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), el = ge(Un), jd = [9, 13, 27, 32], Cu = G && "CompositionEvent" in window, gs = null;
  G && "documentMode" in document && (gs = document.documentMode);
  var Ss = G && "TextEvent" in window && !gs, ah = G && (!Cu || gs && 8 < gs && 11 >= gs), ih = " ", Uc = !1;
  function lh(n, r) {
    switch (n) {
      case "keyup":
        return jd.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function oh(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var bu = !1;
  function uh(n, r) {
    switch (n) {
      case "compositionend":
        return oh(r);
      case "keypress":
        return r.which !== 32 ? null : (Uc = !0, ih);
      case "textInput":
        return n = r.data, n === ih && Uc ? null : n;
      default:
        return null;
    }
  }
  function cg(n, r) {
    if (bu) return n === "compositionend" || !Cu && lh(n, r) ? (n = V(), R = g = ai = null, bu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ah && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var fg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function sh(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!fg[n.type] : r === "textarea";
  }
  function Pd(n, r, l, u) {
    Gi(u), r = ws(r, "onChange"), 0 < r.length && (l = new xt("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var Ri = null, To = null;
  function ch(n) {
    Oo(n, 0);
  }
  function _s(n) {
    var r = li(n);
    if (kr(r)) return n;
  }
  function dg(n, r) {
    if (n === "change") return r;
  }
  var fh = !1;
  if (G) {
    var Hd;
    if (G) {
      var Vd = "oninput" in document;
      if (!Vd) {
        var dh = document.createElement("div");
        dh.setAttribute("oninput", "return;"), Vd = typeof dh.oninput == "function";
      }
      Hd = Vd;
    } else Hd = !1;
    fh = Hd && (!document.documentMode || 9 < document.documentMode);
  }
  function ph() {
    Ri && (Ri.detachEvent("onpropertychange", vh), To = Ri = null);
  }
  function vh(n) {
    if (n.propertyName === "value" && _s(To)) {
      var r = [];
      Pd(r, To, n, Xt(n)), So(ch, r);
    }
  }
  function pg(n, r, l) {
    n === "focusin" ? (ph(), Ri = r, To = l, Ri.attachEvent("onpropertychange", vh)) : n === "focusout" && ph();
  }
  function hh(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return _s(To);
  }
  function vg(n, r) {
    if (n === "click") return _s(r);
  }
  function mh(n, r) {
    if (n === "input" || n === "change") return _s(r);
  }
  function hg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ii = typeof Object.is == "function" ? Object.is : hg;
  function Es(n, r) {
    if (ii(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var d = l[u];
      if (!P.call(r, d) || !ii(n[d], r[d])) return !1;
    }
    return !0;
  }
  function yh(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Fc(n, r) {
    var l = yh(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r) return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = yh(l);
    }
  }
  function Ml(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Ml(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Cs() {
    for (var n = window, r = xn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = xn(n.document);
    }
    return r;
  }
  function jc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function xu(n) {
    var r = Cs(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Ml(l.ownerDocument.documentElement, l)) {
      if (u !== null && jc(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var d = l.textContent.length, v = Math.min(u.start, d);
          u = u.end === void 0 ? v : Math.min(u.end, d), !n.extend && v > u && (d = u, u = v, v = d), d = Fc(l, v);
          var E = Fc(
            l,
            u
          );
          d && E && (n.rangeCount !== 1 || n.anchorNode !== d.node || n.anchorOffset !== d.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), n.removeAllRanges(), v > u ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var mg = G && "documentMode" in document && 11 >= document.documentMode, wu = null, Bd = null, bs = null, $d = !1;
  function Id(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    $d || wu == null || wu !== xn(u) || (u = wu, "selectionStart" in u && jc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), bs && Es(bs, u) || (bs = u, u = ws(Bd, "onSelect"), 0 < u.length && (r = new xt("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = wu)));
  }
  function Pc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ko = { animationend: Pc("Animation", "AnimationEnd"), animationiteration: Pc("Animation", "AnimationIteration"), animationstart: Pc("Animation", "AnimationStart"), transitionend: Pc("Transition", "TransitionEnd") }, sr = {}, Yd = {};
  G && (Yd = document.createElement("div").style, "AnimationEvent" in window || (delete ko.animationend.animation, delete ko.animationiteration.animation, delete ko.animationstart.animation), "TransitionEvent" in window || delete ko.transitionend.transition);
  function Hc(n) {
    if (sr[n]) return sr[n];
    if (!ko[n]) return n;
    var r = ko[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Yd) return sr[n] = r[l];
    return n;
  }
  var gh = Hc("animationend"), Sh = Hc("animationiteration"), _h = Hc("animationstart"), Eh = Hc("transitionend"), Qd = /* @__PURE__ */ new Map(), Vc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Na(n, r) {
    Qd.set(n, r), k(r, [n]);
  }
  for (var Wd = 0; Wd < Vc.length; Wd++) {
    var Do = Vc[Wd], yg = Do.toLowerCase(), gg = Do[0].toUpperCase() + Do.slice(1);
    Na(yg, "on" + gg);
  }
  Na(gh, "onAnimationEnd"), Na(Sh, "onAnimationIteration"), Na(_h, "onAnimationStart"), Na("dblclick", "onDoubleClick"), Na("focusin", "onFocus"), Na("focusout", "onBlur"), Na(Eh, "onTransitionEnd"), _("onMouseEnter", ["mouseout", "mouseover"]), _("onMouseLeave", ["mouseout", "mouseover"]), _("onPointerEnter", ["pointerout", "pointerover"]), _("onPointerLeave", ["pointerout", "pointerover"]), k("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), k("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), k("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), k("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), k("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), k("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gd = new Set("cancel close invalid load scroll toggle".split(" ").concat(xs));
  function Bc(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, Oe(u, r, void 0, n), n.currentTarget = null;
  }
  function Oo(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], d = u.event;
      u = u.listeners;
      e: {
        var v = void 0;
        if (r) for (var E = u.length - 1; 0 <= E; E--) {
          var w = u[E], D = w.instance, $ = w.currentTarget;
          if (w = w.listener, D !== v && d.isPropagationStopped()) break e;
          Bc(d, w, $), v = D;
        }
        else for (E = 0; E < u.length; E++) {
          if (w = u[E], D = w.instance, $ = w.currentTarget, w = w.listener, D !== v && d.isPropagationStopped()) break e;
          Bc(d, w, $), v = D;
        }
      }
    }
    if (Ei) throw n = T, Ei = !1, T = null, n;
  }
  function Wt(n, r) {
    var l = r[ks];
    l === void 0 && (l = r[ks] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (Ch(r, n, 2, !1), l.add(u));
  }
  function $c(n, r, l) {
    var u = 0;
    r && (u |= 4), Ch(l, n, u, r);
  }
  var Ic = "_reactListening" + Math.random().toString(36).slice(2);
  function Ru(n) {
    if (!n[Ic]) {
      n[Ic] = !0, S.forEach(function(l) {
        l !== "selectionchange" && (Gd.has(l) || $c(l, !1, n), $c(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ic] || (r[Ic] = !0, $c("selectionchange", !1, r));
    }
  }
  function Ch(n, r, l, u) {
    switch (Eu(r)) {
      case 1:
        var d = gu;
        break;
      case 4:
        d = Su;
        break;
      default:
        d = zl;
    }
    l = d.bind(null, r, l, n), d = void 0, !Or || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), u ? d !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: d }) : n.addEventListener(r, l, !0) : d !== void 0 ? n.addEventListener(r, l, { passive: d }) : n.addEventListener(r, l, !1);
  }
  function Yc(n, r, l, u, d) {
    var v = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var E = u.tag;
      if (E === 3 || E === 4) {
        var w = u.stateNode.containerInfo;
        if (w === d || w.nodeType === 8 && w.parentNode === d) break;
        if (E === 4) for (E = u.return; E !== null; ) {
          var D = E.tag;
          if ((D === 3 || D === 4) && (D = E.stateNode.containerInfo, D === d || D.nodeType === 8 && D.parentNode === d)) return;
          E = E.return;
        }
        for (; w !== null; ) {
          if (E = zo(w), E === null) return;
          if (D = E.tag, D === 5 || D === 6) {
            u = v = E;
            continue e;
          }
          w = w.parentNode;
        }
      }
      u = u.return;
    }
    So(function() {
      var $ = v, re = Xt(l), ie = [];
      e: {
        var ne = Qd.get(n);
        if (ne !== void 0) {
          var we = xt, ze = n;
          switch (n) {
            case "keypress":
              if (Y(l) === 0) break e;
            case "keydown":
            case "keyup":
              we = Ud;
              break;
            case "focusin":
              ze = "focus", we = Ro;
              break;
            case "focusout":
              ze = "blur", we = Ro;
              break;
            case "beforeblur":
            case "afterblur":
              we = Ro;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              we = Ll;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              we = Ki;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              we = rh;
              break;
            case gh:
            case Sh:
            case _h:
              we = Mc;
              break;
            case Eh:
              we = Ji;
              break;
            case "scroll":
              we = sn;
              break;
            case "wheel":
              we = el;
              break;
            case "copy":
            case "cut":
            case "paste":
              we = Jv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              we = nh;
          }
          var Ae = (r & 4) !== 0, zn = !Ae && n === "scroll", M = Ae ? ne !== null ? ne + "Capture" : null : ne;
          Ae = [];
          for (var N = $, j; N !== null; ) {
            j = N;
            var ce = j.stateNode;
            if (j.tag === 5 && ce !== null && (j = ce, M !== null && (ce = Dr(N, M), ce != null && Ae.push(Tu(N, ce, j)))), zn) break;
            N = N.return;
          }
          0 < Ae.length && (ne = new we(ne, ze, null, l, re), ie.push({ event: ne, listeners: Ae }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ne = n === "mouseover" || n === "pointerover", we = n === "mouseout" || n === "pointerout", ne && l !== on && (ze = l.relatedTarget || l.fromElement) && (zo(ze) || ze[tl])) break e;
          if ((we || ne) && (ne = re.window === re ? re : (ne = re.ownerDocument) ? ne.defaultView || ne.parentWindow : window, we ? (ze = l.relatedTarget || l.toElement, we = $, ze = ze ? zo(ze) : null, ze !== null && (zn = lt(ze), ze !== zn || ze.tag !== 5 && ze.tag !== 6) && (ze = null)) : (we = null, ze = $), we !== ze)) {
            if (Ae = Ll, ce = "onMouseLeave", M = "onMouseEnter", N = "mouse", (n === "pointerout" || n === "pointerover") && (Ae = nh, ce = "onPointerLeave", M = "onPointerEnter", N = "pointer"), zn = we == null ? ne : li(we), j = ze == null ? ne : li(ze), ne = new Ae(ce, N + "leave", we, l, re), ne.target = zn, ne.relatedTarget = j, ce = null, zo(re) === $ && (Ae = new Ae(M, N + "enter", ze, l, re), Ae.target = j, Ae.relatedTarget = zn, ce = Ae), zn = ce, we && ze) t: {
              for (Ae = we, M = ze, N = 0, j = Ae; j; j = Al(j)) N++;
              for (j = 0, ce = M; ce; ce = Al(ce)) j++;
              for (; 0 < N - j; ) Ae = Al(Ae), N--;
              for (; 0 < j - N; ) M = Al(M), j--;
              for (; N--; ) {
                if (Ae === M || M !== null && Ae === M.alternate) break t;
                Ae = Al(Ae), M = Al(M);
              }
              Ae = null;
            }
            else Ae = null;
            we !== null && bh(ie, ne, we, Ae, !1), ze !== null && zn !== null && bh(ie, zn, ze, Ae, !0);
          }
        }
        e: {
          if (ne = $ ? li($) : window, we = ne.nodeName && ne.nodeName.toLowerCase(), we === "select" || we === "input" && ne.type === "file") var be = dg;
          else if (sh(ne)) if (fh) be = mh;
          else {
            be = hh;
            var Ie = pg;
          }
          else (we = ne.nodeName) && we.toLowerCase() === "input" && (ne.type === "checkbox" || ne.type === "radio") && (be = vg);
          if (be && (be = be(n, $))) {
            Pd(ie, be, l, re);
            break e;
          }
          Ie && Ie(n, ne, $), n === "focusout" && (Ie = ne._wrapperState) && Ie.controlled && ne.type === "number" && fa(ne, "number", ne.value);
        }
        switch (Ie = $ ? li($) : window, n) {
          case "focusin":
            (sh(Ie) || Ie.contentEditable === "true") && (wu = Ie, Bd = $, bs = null);
            break;
          case "focusout":
            bs = Bd = wu = null;
            break;
          case "mousedown":
            $d = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            $d = !1, Id(ie, l, re);
            break;
          case "selectionchange":
            if (mg) break;
          case "keydown":
          case "keyup":
            Id(ie, l, re);
        }
        var Ge;
        if (Cu) e: {
          switch (n) {
            case "compositionstart":
              var tt = "onCompositionStart";
              break e;
            case "compositionend":
              tt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              tt = "onCompositionUpdate";
              break e;
          }
          tt = void 0;
        }
        else bu ? lh(n, l) && (tt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (tt = "onCompositionStart");
        tt && (ah && l.locale !== "ko" && (bu || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && bu && (Ge = V()) : (ai = re, g = "value" in ai ? ai.value : ai.textContent, bu = !0)), Ie = ws($, tt), 0 < Ie.length && (tt = new Ld(tt, n, null, l, re), ie.push({ event: tt, listeners: Ie }), Ge ? tt.data = Ge : (Ge = oh(l), Ge !== null && (tt.data = Ge)))), (Ge = Ss ? uh(n, l) : cg(n, l)) && ($ = ws($, "onBeforeInput"), 0 < $.length && (re = new Ld("onBeforeInput", "beforeinput", null, l, re), ie.push({ event: re, listeners: $ }), re.data = Ge));
      }
      Oo(ie, r);
    });
  }
  function Tu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ws(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var d = n, v = d.stateNode;
      d.tag === 5 && v !== null && (d = v, v = Dr(n, l), v != null && u.unshift(Tu(n, v, d)), v = Dr(n, r), v != null && u.push(Tu(n, v, d))), n = n.return;
    }
    return u;
  }
  function Al(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function bh(n, r, l, u, d) {
    for (var v = r._reactName, E = []; l !== null && l !== u; ) {
      var w = l, D = w.alternate, $ = w.stateNode;
      if (D !== null && D === u) break;
      w.tag === 5 && $ !== null && (w = $, d ? (D = Dr(l, v), D != null && E.unshift(Tu(l, D, w))) : d || (D = Dr(l, v), D != null && E.push(Tu(l, D, w)))), l = l.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var xh = /\r\n?/g, Sg = /\u0000|\uFFFD/g;
  function wh(n) {
    return (typeof n == "string" ? n : "" + n).replace(xh, `
`).replace(Sg, "");
  }
  function Qc(n, r, l) {
    if (r = wh(r), wh(n) !== r && l) throw Error(h(425));
  }
  function Ul() {
  }
  var Rs = null, No = null;
  function Wc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Gc = typeof setTimeout == "function" ? setTimeout : void 0, qd = typeof clearTimeout == "function" ? clearTimeout : void 0, Rh = typeof Promise == "function" ? Promise : void 0, ku = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rh < "u" ? function(n) {
    return Rh.resolve(null).then(n).catch(qc);
  } : Gc;
  function qc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Du(n, r) {
    var l = r, u = 0;
    do {
      var d = l.nextSibling;
      if (n.removeChild(l), d && d.nodeType === 8) if (l = d.data, l === "/$") {
        if (u === 0) {
          n.removeChild(d), ri(r);
          return;
        }
        u--;
      } else l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = d;
    } while (l);
    ri(r);
  }
  function Ti(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Th(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Fl = Math.random().toString(36).slice(2), ki = "__reactFiber$" + Fl, Ts = "__reactProps$" + Fl, tl = "__reactContainer$" + Fl, ks = "__reactEvents$" + Fl, Ou = "__reactListeners$" + Fl, _g = "__reactHandles$" + Fl;
  function zo(n) {
    var r = n[ki];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[tl] || l[ki]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Th(n); n !== null; ) {
          if (l = n[ki]) return l;
          n = Th(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Be(n) {
    return n = n[ki] || n[tl], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function li(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(h(33));
  }
  function Tn(n) {
    return n[Ts] || null;
  }
  var Nt = [], za = -1;
  function oi(n) {
    return { current: n };
  }
  function cn(n) {
    0 > za || (n.current = Nt[za], Nt[za] = null, za--);
  }
  function Ve(n, r) {
    za++, Nt[za] = n.current, n.current = r;
  }
  var Xr = {}, Cn = oi(Xr), qn = oi(!1), Kr = Xr;
  function La(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Xr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var d = {}, v;
    for (v in l) d[v] = r[v];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function Fn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Nu() {
    cn(qn), cn(Cn);
  }
  function kh(n, r, l) {
    if (Cn.current !== Xr) throw Error(h(168));
    Ve(Cn, r), Ve(qn, l);
  }
  function Ds(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var d in u) if (!(d in r)) throw Error(h(108, ct(n) || "Unknown", d));
    return Se({}, l, u);
  }
  function Zr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Xr, Kr = Cn.current, Ve(Cn, n), Ve(qn, qn.current), !0;
  }
  function Xc(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(h(169));
    l ? (n = Ds(n, r, Kr), u.__reactInternalMemoizedMergedChildContext = n, cn(qn), cn(Cn), Ve(Cn, n)) : cn(qn), Ve(qn, l);
  }
  var Di = null, zu = !1, nl = !1;
  function Kc(n) {
    Di === null ? Di = [n] : Di.push(n);
  }
  function jl(n) {
    zu = !0, Kc(n);
  }
  function Oi() {
    if (!nl && Di !== null) {
      nl = !0;
      var n = 0, r = Ht;
      try {
        var l = Di;
        for (Ht = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Di = null, zu = !1;
      } catch (d) {
        throw Di !== null && (Di = Di.slice(n + 1)), dn(ei, Oi), d;
      } finally {
        Ht = r, nl = !1;
      }
    }
    return null;
  }
  var Pl = [], Hl = 0, Vl = null, rl = 0, jn = [], Ma = 0, ha = null, Ni = 1, zi = "";
  function Lo(n, r) {
    Pl[Hl++] = rl, Pl[Hl++] = Vl, Vl = n, rl = r;
  }
  function Dh(n, r, l) {
    jn[Ma++] = Ni, jn[Ma++] = zi, jn[Ma++] = ha, ha = n;
    var u = Ni;
    n = zi;
    var d = 32 - Nr(u) - 1;
    u &= ~(1 << d), l += 1;
    var v = 32 - Nr(r) + d;
    if (30 < v) {
      var E = d - d % 5;
      v = (u & (1 << E) - 1).toString(32), u >>= E, d -= E, Ni = 1 << 32 - Nr(r) + d | l << d | u, zi = v + n;
    } else Ni = 1 << v | l << d | u, zi = n;
  }
  function Zc(n) {
    n.return !== null && (Lo(n, 1), Dh(n, 1, 0));
  }
  function Jc(n) {
    for (; n === Vl; ) Vl = Pl[--Hl], Pl[Hl] = null, rl = Pl[--Hl], Pl[Hl] = null;
    for (; n === ha; ) ha = jn[--Ma], jn[Ma] = null, zi = jn[--Ma], jn[Ma] = null, Ni = jn[--Ma], jn[Ma] = null;
  }
  var Jr = null, ea = null, hn = !1, Aa = null;
  function Xd(n, r) {
    var l = Ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Oh(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Jr = n, ea = Ti(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Jr = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ha !== null ? { id: Ni, overflow: zi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Jr = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Kd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Zd(n) {
    if (hn) {
      var r = ea;
      if (r) {
        var l = r;
        if (!Oh(n, r)) {
          if (Kd(n)) throw Error(h(418));
          r = Ti(l.nextSibling);
          var u = Jr;
          r && Oh(n, r) ? Xd(u, l) : (n.flags = n.flags & -4097 | 2, hn = !1, Jr = n);
        }
      } else {
        if (Kd(n)) throw Error(h(418));
        n.flags = n.flags & -4097 | 2, hn = !1, Jr = n;
      }
    }
  }
  function Xn(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Jr = n;
  }
  function ef(n) {
    if (n !== Jr) return !1;
    if (!hn) return Xn(n), hn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Wc(n.type, n.memoizedProps)), r && (r = ea)) {
      if (Kd(n)) throw Os(), Error(h(418));
      for (; r; ) Xd(n, r), r = Ti(r.nextSibling);
    }
    if (Xn(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(h(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = Ti(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else ea = Jr ? Ti(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Os() {
    for (var n = ea; n; ) n = Ti(n.nextSibling);
  }
  function Bl() {
    ea = Jr = null, hn = !1;
  }
  function al(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var Eg = Te.ReactCurrentBatchConfig;
  function Mo(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(h(309));
          var u = l.stateNode;
        }
        if (!u) throw Error(h(147, n));
        var d = u, v = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === v ? r.ref : (r = function(E) {
          var w = d.refs;
          E === null ? delete w[v] : w[v] = E;
        }, r._stringRef = v, r);
      }
      if (typeof n != "string") throw Error(h(284));
      if (!l._owner) throw Error(h(290, n));
    }
    return n;
  }
  function tf(n, r) {
    throw n = Object.prototype.toString.call(r), Error(h(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Ao(n) {
    function r(M, N) {
      if (n) {
        var j = M.deletions;
        j === null ? (M.deletions = [N], M.flags |= 16) : j.push(N);
      }
    }
    function l(M, N) {
      if (!n) return null;
      for (; N !== null; ) r(M, N), N = N.sibling;
      return null;
    }
    function u(M, N) {
      for (M = /* @__PURE__ */ new Map(); N !== null; ) N.key !== null ? M.set(N.key, N) : M.set(N.index, N), N = N.sibling;
      return M;
    }
    function d(M, N) {
      return M = Xl(M, N), M.index = 0, M.sibling = null, M;
    }
    function v(M, N, j) {
      return M.index = j, n ? (j = M.alternate, j !== null ? (j = j.index, j < N ? (M.flags |= 2, N) : j) : (M.flags |= 2, N)) : (M.flags |= 1048576, N);
    }
    function E(M) {
      return n && M.alternate === null && (M.flags |= 2), M;
    }
    function w(M, N, j, ce) {
      return N === null || N.tag !== 6 ? (N = Dp(j, M.mode, ce), N.return = M, N) : (N = d(N, j), N.return = M, N);
    }
    function D(M, N, j, ce) {
      var be = j.type;
      return be === Pe ? re(M, N, j.props.children, ce, j.key) : N !== null && (N.elementType === be || typeof be == "object" && be !== null && be.$$typeof === Ot && Nh(be) === N.type) ? (ce = d(N, j.props), ce.ref = Mo(M, N, j), ce.return = M, ce) : (ce = lc(j.type, j.key, j.props, null, M.mode, ce), ce.ref = Mo(M, N, j), ce.return = M, ce);
    }
    function $(M, N, j, ce) {
      return N === null || N.tag !== 4 || N.stateNode.containerInfo !== j.containerInfo || N.stateNode.implementation !== j.implementation ? (N = Af(j, M.mode, ce), N.return = M, N) : (N = d(N, j.children || []), N.return = M, N);
    }
    function re(M, N, j, ce, be) {
      return N === null || N.tag !== 7 ? (N = cl(j, M.mode, ce, be), N.return = M, N) : (N = d(N, j), N.return = M, N);
    }
    function ie(M, N, j) {
      if (typeof N == "string" && N !== "" || typeof N == "number") return N = Dp("" + N, M.mode, j), N.return = M, N;
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case me:
            return j = lc(N.type, N.key, N.props, null, M.mode, j), j.ref = Mo(M, null, N), j.return = M, j;
          case Ye:
            return N = Af(N, M.mode, j), N.return = M, N;
          case Ot:
            var ce = N._init;
            return ie(M, ce(N._payload), j);
        }
        if (er(N) || He(N)) return N = cl(N, M.mode, j, null), N.return = M, N;
        tf(M, N);
      }
      return null;
    }
    function ne(M, N, j, ce) {
      var be = N !== null ? N.key : null;
      if (typeof j == "string" && j !== "" || typeof j == "number") return be !== null ? null : w(M, N, "" + j, ce);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case me:
            return j.key === be ? D(M, N, j, ce) : null;
          case Ye:
            return j.key === be ? $(M, N, j, ce) : null;
          case Ot:
            return be = j._init, ne(
              M,
              N,
              be(j._payload),
              ce
            );
        }
        if (er(j) || He(j)) return be !== null ? null : re(M, N, j, ce, null);
        tf(M, j);
      }
      return null;
    }
    function we(M, N, j, ce, be) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number") return M = M.get(j) || null, w(N, M, "" + ce, be);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case me:
            return M = M.get(ce.key === null ? j : ce.key) || null, D(N, M, ce, be);
          case Ye:
            return M = M.get(ce.key === null ? j : ce.key) || null, $(N, M, ce, be);
          case Ot:
            var Ie = ce._init;
            return we(M, N, j, Ie(ce._payload), be);
        }
        if (er(ce) || He(ce)) return M = M.get(j) || null, re(N, M, ce, be, null);
        tf(N, ce);
      }
      return null;
    }
    function ze(M, N, j, ce) {
      for (var be = null, Ie = null, Ge = N, tt = N = 0, Zn = null; Ge !== null && tt < j.length; tt++) {
        Ge.index > tt ? (Zn = Ge, Ge = null) : Zn = Ge.sibling;
        var $t = ne(M, Ge, j[tt], ce);
        if ($t === null) {
          Ge === null && (Ge = Zn);
          break;
        }
        n && Ge && $t.alternate === null && r(M, Ge), N = v($t, N, tt), Ie === null ? be = $t : Ie.sibling = $t, Ie = $t, Ge = Zn;
      }
      if (tt === j.length) return l(M, Ge), hn && Lo(M, tt), be;
      if (Ge === null) {
        for (; tt < j.length; tt++) Ge = ie(M, j[tt], ce), Ge !== null && (N = v(Ge, N, tt), Ie === null ? be = Ge : Ie.sibling = Ge, Ie = Ge);
        return hn && Lo(M, tt), be;
      }
      for (Ge = u(M, Ge); tt < j.length; tt++) Zn = we(Ge, M, tt, j[tt], ce), Zn !== null && (n && Zn.alternate !== null && Ge.delete(Zn.key === null ? tt : Zn.key), N = v(Zn, N, tt), Ie === null ? be = Zn : Ie.sibling = Zn, Ie = Zn);
      return n && Ge.forEach(function(Jl) {
        return r(M, Jl);
      }), hn && Lo(M, tt), be;
    }
    function Ae(M, N, j, ce) {
      var be = He(j);
      if (typeof be != "function") throw Error(h(150));
      if (j = be.call(j), j == null) throw Error(h(151));
      for (var Ie = be = null, Ge = N, tt = N = 0, Zn = null, $t = j.next(); Ge !== null && !$t.done; tt++, $t = j.next()) {
        Ge.index > tt ? (Zn = Ge, Ge = null) : Zn = Ge.sibling;
        var Jl = ne(M, Ge, $t.value, ce);
        if (Jl === null) {
          Ge === null && (Ge = Zn);
          break;
        }
        n && Ge && Jl.alternate === null && r(M, Ge), N = v(Jl, N, tt), Ie === null ? be = Jl : Ie.sibling = Jl, Ie = Jl, Ge = Zn;
      }
      if ($t.done) return l(
        M,
        Ge
      ), hn && Lo(M, tt), be;
      if (Ge === null) {
        for (; !$t.done; tt++, $t = j.next()) $t = ie(M, $t.value, ce), $t !== null && (N = v($t, N, tt), Ie === null ? be = $t : Ie.sibling = $t, Ie = $t);
        return hn && Lo(M, tt), be;
      }
      for (Ge = u(M, Ge); !$t.done; tt++, $t = j.next()) $t = we(Ge, M, tt, $t.value, ce), $t !== null && (n && $t.alternate !== null && Ge.delete($t.key === null ? tt : $t.key), N = v($t, N, tt), Ie === null ? be = $t : Ie.sibling = $t, Ie = $t);
      return n && Ge.forEach(function(Ag) {
        return r(M, Ag);
      }), hn && Lo(M, tt), be;
    }
    function zn(M, N, j, ce) {
      if (typeof j == "object" && j !== null && j.type === Pe && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case me:
            e: {
              for (var be = j.key, Ie = N; Ie !== null; ) {
                if (Ie.key === be) {
                  if (be = j.type, be === Pe) {
                    if (Ie.tag === 7) {
                      l(M, Ie.sibling), N = d(Ie, j.props.children), N.return = M, M = N;
                      break e;
                    }
                  } else if (Ie.elementType === be || typeof be == "object" && be !== null && be.$$typeof === Ot && Nh(be) === Ie.type) {
                    l(M, Ie.sibling), N = d(Ie, j.props), N.ref = Mo(M, Ie, j), N.return = M, M = N;
                    break e;
                  }
                  l(M, Ie);
                  break;
                } else r(M, Ie);
                Ie = Ie.sibling;
              }
              j.type === Pe ? (N = cl(j.props.children, M.mode, ce, j.key), N.return = M, M = N) : (ce = lc(j.type, j.key, j.props, null, M.mode, ce), ce.ref = Mo(M, N, j), ce.return = M, M = ce);
            }
            return E(M);
          case Ye:
            e: {
              for (Ie = j.key; N !== null; ) {
                if (N.key === Ie) if (N.tag === 4 && N.stateNode.containerInfo === j.containerInfo && N.stateNode.implementation === j.implementation) {
                  l(M, N.sibling), N = d(N, j.children || []), N.return = M, M = N;
                  break e;
                } else {
                  l(M, N);
                  break;
                }
                else r(M, N);
                N = N.sibling;
              }
              N = Af(j, M.mode, ce), N.return = M, M = N;
            }
            return E(M);
          case Ot:
            return Ie = j._init, zn(M, N, Ie(j._payload), ce);
        }
        if (er(j)) return ze(M, N, j, ce);
        if (He(j)) return Ae(M, N, j, ce);
        tf(M, j);
      }
      return typeof j == "string" && j !== "" || typeof j == "number" ? (j = "" + j, N !== null && N.tag === 6 ? (l(M, N.sibling), N = d(N, j), N.return = M, M = N) : (l(M, N), N = Dp(j, M.mode, ce), N.return = M, M = N), E(M)) : l(M, N);
    }
    return zn;
  }
  var kn = Ao(!0), Ee = Ao(!1), ma = oi(null), ta = null, Lu = null, Jd = null;
  function ep() {
    Jd = Lu = ta = null;
  }
  function tp(n) {
    var r = ma.current;
    cn(ma), n._currentValue = r;
  }
  function np(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Sn(n, r) {
    ta = n, Jd = Lu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Hn = !0), n.firstContext = null);
  }
  function Ua(n) {
    var r = n._currentValue;
    if (Jd !== n) if (n = { context: n, memoizedValue: r, next: null }, Lu === null) {
      if (ta === null) throw Error(h(308));
      Lu = n, ta.dependencies = { lanes: 0, firstContext: n };
    } else Lu = Lu.next = n;
    return r;
  }
  var Uo = null;
  function rp(n) {
    Uo === null ? Uo = [n] : Uo.push(n);
  }
  function ap(n, r, l, u) {
    var d = r.interleaved;
    return d === null ? (l.next = l, rp(r)) : (l.next = d.next, d.next = l), r.interleaved = l, ya(n, u);
  }
  function ya(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ga = !1;
  function ip(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function zh(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function il(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function $l(n, r, l) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, zt & 2) {
      var d = u.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), u.pending = r, ya(n, l);
    }
    return d = u.interleaved, d === null ? (r.next = r, rp(u)) : (r.next = d.next, d.next = r), u.interleaved = r, ya(n, l);
  }
  function nf(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Xi(n, l);
    }
  }
  function Lh(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var d = null, v = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var E = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          v === null ? d = v = E : v = v.next = E, l = l.next;
        } while (l !== null);
        v === null ? d = v = r : v = v.next = r;
      } else d = v = r;
      l = { baseState: u.baseState, firstBaseUpdate: d, lastBaseUpdate: v, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Ns(n, r, l, u) {
    var d = n.updateQueue;
    ga = !1;
    var v = d.firstBaseUpdate, E = d.lastBaseUpdate, w = d.shared.pending;
    if (w !== null) {
      d.shared.pending = null;
      var D = w, $ = D.next;
      D.next = null, E === null ? v = $ : E.next = $, E = D;
      var re = n.alternate;
      re !== null && (re = re.updateQueue, w = re.lastBaseUpdate, w !== E && (w === null ? re.firstBaseUpdate = $ : w.next = $, re.lastBaseUpdate = D));
    }
    if (v !== null) {
      var ie = d.baseState;
      E = 0, re = $ = D = null, w = v;
      do {
        var ne = w.lane, we = w.eventTime;
        if ((u & ne) === ne) {
          re !== null && (re = re.next = {
            eventTime: we,
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          });
          e: {
            var ze = n, Ae = w;
            switch (ne = r, we = l, Ae.tag) {
              case 1:
                if (ze = Ae.payload, typeof ze == "function") {
                  ie = ze.call(we, ie, ne);
                  break e;
                }
                ie = ze;
                break e;
              case 3:
                ze.flags = ze.flags & -65537 | 128;
              case 0:
                if (ze = Ae.payload, ne = typeof ze == "function" ? ze.call(we, ie, ne) : ze, ne == null) break e;
                ie = Se({}, ie, ne);
                break e;
              case 2:
                ga = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (n.flags |= 64, ne = d.effects, ne === null ? d.effects = [w] : ne.push(w));
        } else we = { eventTime: we, lane: ne, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, re === null ? ($ = re = we, D = ie) : re = re.next = we, E |= ne;
        if (w = w.next, w === null) {
          if (w = d.shared.pending, w === null) break;
          ne = w, w = ne.next, ne.next = null, d.lastBaseUpdate = ne, d.shared.pending = null;
        }
      } while (!0);
      if (re === null && (D = ie), d.baseState = D, d.firstBaseUpdate = $, d.lastBaseUpdate = re, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          E |= d.lane, d = d.next;
        while (d !== r);
      } else v === null && (d.shared.lanes = 0);
      Fi |= E, n.lanes = E, n.memoizedState = ie;
    }
  }
  function lp(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], d = u.callback;
      if (d !== null) {
        if (u.callback = null, u = l, typeof d != "function") throw Error(h(191, d));
        d.call(u);
      }
    }
  }
  var zs = {}, Li = oi(zs), Ls = oi(zs), Ms = oi(zs);
  function Fo(n) {
    if (n === zs) throw Error(h(174));
    return n;
  }
  function op(n, r) {
    switch (Ve(Ms, r), Ve(Ls, n), Ve(Li, zs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : da(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = da(r, n);
    }
    cn(Li), Ve(Li, r);
  }
  function jo() {
    cn(Li), cn(Ls), cn(Ms);
  }
  function Mh(n) {
    Fo(Ms.current);
    var r = Fo(Li.current), l = da(r, n.type);
    r !== l && (Ve(Ls, n), Ve(Li, l));
  }
  function rf(n) {
    Ls.current === n && (cn(Li), cn(Ls));
  }
  var _n = oi(0);
  function af(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var As = [];
  function $e() {
    for (var n = 0; n < As.length; n++) As[n]._workInProgressVersionPrimary = null;
    As.length = 0;
  }
  var Et = Te.ReactCurrentDispatcher, Vt = Te.ReactCurrentBatchConfig, tn = 0, Bt = null, Pn = null, nr = null, lf = !1, Us = !1, Po = 0, te = 0;
  function jt() {
    throw Error(h(321));
  }
  function Ke(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!ii(n[l], r[l])) return !1;
    return !0;
  }
  function Il(n, r, l, u, d, v) {
    if (tn = v, Bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Et.current = n === null || n.memoizedState === null ? Ef : Bs, n = l(u, d), Us) {
      v = 0;
      do {
        if (Us = !1, Po = 0, 25 <= v) throw Error(h(301));
        v += 1, nr = Pn = null, r.updateQueue = null, Et.current = Cf, n = l(u, d);
      } while (Us);
    }
    if (Et.current = Io, r = Pn !== null && Pn.next !== null, tn = 0, nr = Pn = Bt = null, lf = !1, r) throw Error(h(300));
    return n;
  }
  function ui() {
    var n = Po !== 0;
    return Po = 0, n;
  }
  function xr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return nr === null ? Bt.memoizedState = nr = n : nr = nr.next = n, nr;
  }
  function Dn() {
    if (Pn === null) {
      var n = Bt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Pn.next;
    var r = nr === null ? Bt.memoizedState : nr.next;
    if (r !== null) nr = r, Pn = n;
    else {
      if (n === null) throw Error(h(310));
      Pn = n, n = { memoizedState: Pn.memoizedState, baseState: Pn.baseState, baseQueue: Pn.baseQueue, queue: Pn.queue, next: null }, nr === null ? Bt.memoizedState = nr = n : nr = nr.next = n;
    }
    return nr;
  }
  function ll(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Yl(n) {
    var r = Dn(), l = r.queue;
    if (l === null) throw Error(h(311));
    l.lastRenderedReducer = n;
    var u = Pn, d = u.baseQueue, v = l.pending;
    if (v !== null) {
      if (d !== null) {
        var E = d.next;
        d.next = v.next, v.next = E;
      }
      u.baseQueue = d = v, l.pending = null;
    }
    if (d !== null) {
      v = d.next, u = u.baseState;
      var w = E = null, D = null, $ = v;
      do {
        var re = $.lane;
        if ((tn & re) === re) D !== null && (D = D.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), u = $.hasEagerState ? $.eagerState : n(u, $.action);
        else {
          var ie = {
            lane: re,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          D === null ? (w = D = ie, E = u) : D = D.next = ie, Bt.lanes |= re, Fi |= re;
        }
        $ = $.next;
      } while ($ !== null && $ !== v);
      D === null ? E = u : D.next = w, ii(u, r.memoizedState) || (Hn = !0), r.memoizedState = u, r.baseState = E, r.baseQueue = D, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      d = n;
      do
        v = d.lane, Bt.lanes |= v, Fi |= v, d = d.next;
      while (d !== n);
    } else d === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ho(n) {
    var r = Dn(), l = r.queue;
    if (l === null) throw Error(h(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, d = l.pending, v = r.memoizedState;
    if (d !== null) {
      l.pending = null;
      var E = d = d.next;
      do
        v = n(v, E.action), E = E.next;
      while (E !== d);
      ii(v, r.memoizedState) || (Hn = !0), r.memoizedState = v, r.baseQueue === null && (r.baseState = v), l.lastRenderedState = v;
    }
    return [v, u];
  }
  function of() {
  }
  function uf(n, r) {
    var l = Bt, u = Dn(), d = r(), v = !ii(u.memoizedState, d);
    if (v && (u.memoizedState = d, Hn = !0), u = u.queue, Fs(ff.bind(null, l, u, n), [n]), u.getSnapshot !== r || v || nr !== null && nr.memoizedState.tag & 1) {
      if (l.flags |= 2048, Vo(9, cf.bind(null, l, u, d, r), void 0, null), Kn === null) throw Error(h(349));
      tn & 30 || sf(l, r, d);
    }
    return d;
  }
  function sf(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function cf(n, r, l, u) {
    r.value = l, r.getSnapshot = u, df(r) && pf(n);
  }
  function ff(n, r, l) {
    return l(function() {
      df(r) && pf(n);
    });
  }
  function df(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ii(n, l);
    } catch {
      return !0;
    }
  }
  function pf(n) {
    var r = ya(n, 1);
    r !== null && Fr(r, n, 1, -1);
  }
  function vf(n) {
    var r = xr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ll, lastRenderedState: n }, r.queue = n, n = n.dispatch = $o.bind(null, Bt, n), [r.memoizedState, n];
  }
  function Vo(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function hf() {
    return Dn().memoizedState;
  }
  function Mu(n, r, l, u) {
    var d = xr();
    Bt.flags |= n, d.memoizedState = Vo(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function Au(n, r, l, u) {
    var d = Dn();
    u = u === void 0 ? null : u;
    var v = void 0;
    if (Pn !== null) {
      var E = Pn.memoizedState;
      if (v = E.destroy, u !== null && Ke(u, E.deps)) {
        d.memoizedState = Vo(r, l, v, u);
        return;
      }
    }
    Bt.flags |= n, d.memoizedState = Vo(1 | r, l, v, u);
  }
  function mf(n, r) {
    return Mu(8390656, 8, n, r);
  }
  function Fs(n, r) {
    return Au(2048, 8, n, r);
  }
  function yf(n, r) {
    return Au(4, 2, n, r);
  }
  function js(n, r) {
    return Au(4, 4, n, r);
  }
  function Bo(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function gf(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Au(4, 4, Bo.bind(null, r, n), l);
  }
  function Ps() {
  }
  function Sf(n, r) {
    var l = Dn();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ke(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function _f(n, r) {
    var l = Dn();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && Ke(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function up(n, r, l) {
    return tn & 21 ? (ii(l, r) || (l = vu(), Bt.lanes |= l, Fi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Hn = !0), n.memoizedState = l);
  }
  function Hs(n, r) {
    var l = Ht;
    Ht = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Vt.transition;
    Vt.transition = {};
    try {
      n(!1), r();
    } finally {
      Ht = l, Vt.transition = u;
    }
  }
  function sp() {
    return Dn().memoizedState;
  }
  function Vs(n, r, l) {
    var u = ji(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, Sa(n)) Ah(r, l);
    else if (l = ap(n, r, l, u), l !== null) {
      var d = $n();
      Fr(l, n, u, d), an(l, r, u);
    }
  }
  function $o(n, r, l) {
    var u = ji(n), d = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Sa(n)) Ah(r, d);
    else {
      var v = n.alternate;
      if (n.lanes === 0 && (v === null || v.lanes === 0) && (v = r.lastRenderedReducer, v !== null)) try {
        var E = r.lastRenderedState, w = v(E, l);
        if (d.hasEagerState = !0, d.eagerState = w, ii(w, E)) {
          var D = r.interleaved;
          D === null ? (d.next = d, rp(r)) : (d.next = D.next, D.next = d), r.interleaved = d;
          return;
        }
      } catch {
      } finally {
      }
      l = ap(n, r, d, u), l !== null && (d = $n(), Fr(l, n, u, d), an(l, r, u));
    }
  }
  function Sa(n) {
    var r = n.alternate;
    return n === Bt || r !== null && r === Bt;
  }
  function Ah(n, r) {
    Us = lf = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function an(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Xi(n, l);
    }
  }
  var Io = { readContext: Ua, useCallback: jt, useContext: jt, useEffect: jt, useImperativeHandle: jt, useInsertionEffect: jt, useLayoutEffect: jt, useMemo: jt, useReducer: jt, useRef: jt, useState: jt, useDebugValue: jt, useDeferredValue: jt, useTransition: jt, useMutableSource: jt, useSyncExternalStore: jt, useId: jt, unstable_isNewReconciler: !1 }, Ef = { readContext: Ua, useCallback: function(n, r) {
    return xr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ua, useEffect: mf, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Mu(
      4194308,
      4,
      Bo.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Mu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Mu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = xr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = xr();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Vs.bind(null, Bt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = xr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: vf, useDebugValue: Ps, useDeferredValue: function(n) {
    return xr().memoizedState = n;
  }, useTransition: function() {
    var n = vf(!1), r = n[0];
    return n = Hs.bind(null, n[1]), xr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = Bt, d = xr();
    if (hn) {
      if (l === void 0) throw Error(h(407));
      l = l();
    } else {
      if (l = r(), Kn === null) throw Error(h(349));
      tn & 30 || sf(u, r, l);
    }
    d.memoizedState = l;
    var v = { value: l, getSnapshot: r };
    return d.queue = v, mf(ff.bind(
      null,
      u,
      v,
      n
    ), [n]), u.flags |= 2048, Vo(9, cf.bind(null, u, v, l, r), void 0, null), l;
  }, useId: function() {
    var n = xr(), r = Kn.identifierPrefix;
    if (hn) {
      var l = zi, u = Ni;
      l = (u & ~(1 << 32 - Nr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Po++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = te++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Bs = {
    readContext: Ua,
    useCallback: Sf,
    useContext: Ua,
    useEffect: Fs,
    useImperativeHandle: gf,
    useInsertionEffect: yf,
    useLayoutEffect: js,
    useMemo: _f,
    useReducer: Yl,
    useRef: hf,
    useState: function() {
      return Yl(ll);
    },
    useDebugValue: Ps,
    useDeferredValue: function(n) {
      var r = Dn();
      return up(r, Pn.memoizedState, n);
    },
    useTransition: function() {
      var n = Yl(ll)[0], r = Dn().memoizedState;
      return [n, r];
    },
    useMutableSource: of,
    useSyncExternalStore: uf,
    useId: sp,
    unstable_isNewReconciler: !1
  }, Cf = { readContext: Ua, useCallback: Sf, useContext: Ua, useEffect: Fs, useImperativeHandle: gf, useInsertionEffect: yf, useLayoutEffect: js, useMemo: _f, useReducer: Ho, useRef: hf, useState: function() {
    return Ho(ll);
  }, useDebugValue: Ps, useDeferredValue: function(n) {
    var r = Dn();
    return Pn === null ? r.memoizedState = n : up(r, Pn.memoizedState, n);
  }, useTransition: function() {
    var n = Ho(ll)[0], r = Dn().memoizedState;
    return [n, r];
  }, useMutableSource: of, useSyncExternalStore: uf, useId: sp, unstable_isNewReconciler: !1 };
  function si(n, r) {
    if (n && n.defaultProps) {
      r = Se({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function cp(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : Se({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var bf = { isMounted: function(n) {
    return (n = n._reactInternals) ? lt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = $n(), d = ji(n), v = il(u, d);
    v.payload = r, l != null && (v.callback = l), r = $l(n, v, d), r !== null && (Fr(r, n, d, u), nf(r, n, d));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = $n(), d = ji(n), v = il(u, d);
    v.tag = 1, v.payload = r, l != null && (v.callback = l), r = $l(n, v, d), r !== null && (Fr(r, n, d, u), nf(r, n, d));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = $n(), u = ji(n), d = il(l, u);
    d.tag = 2, r != null && (d.callback = r), r = $l(n, d, u), r !== null && (Fr(r, n, u, l), nf(r, n, u));
  } };
  function Uh(n, r, l, u, d, v, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, v, E) : r.prototype && r.prototype.isPureReactComponent ? !Es(l, u) || !Es(d, v) : !0;
  }
  function xf(n, r, l) {
    var u = !1, d = Xr, v = r.contextType;
    return typeof v == "object" && v !== null ? v = Ua(v) : (d = Fn(r) ? Kr : Cn.current, u = r.contextTypes, v = (u = u != null) ? La(n, d) : Xr), r = new r(l, v), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = bf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = d, n.__reactInternalMemoizedMaskedChildContext = v), r;
  }
  function Fh(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && bf.enqueueReplaceState(r, r.state, null);
  }
  function $s(n, r, l, u) {
    var d = n.stateNode;
    d.props = l, d.state = n.memoizedState, d.refs = {}, ip(n);
    var v = r.contextType;
    typeof v == "object" && v !== null ? d.context = Ua(v) : (v = Fn(r) ? Kr : Cn.current, d.context = La(n, v)), d.state = n.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (cp(n, r, v, l), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && bf.enqueueReplaceState(d, d.state, null), Ns(n, l, d, u), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Yo(n, r) {
    try {
      var l = "", u = r;
      do
        l += gt(u), u = u.return;
      while (u);
      var d = l;
    } catch (v) {
      d = `
Error generating stack: ` + v.message + `
` + v.stack;
    }
    return { value: n, source: r, stack: d, digest: null };
  }
  function fp(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function dp(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var wf = typeof WeakMap == "function" ? WeakMap : Map;
  function jh(n, r, l) {
    l = il(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      Vu || (Vu = !0, Go = u), dp(n, r);
    }, l;
  }
  function pp(n, r, l) {
    l = il(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = r.value;
      l.payload = function() {
        return u(d);
      }, l.callback = function() {
        dp(n, r);
      };
    }
    var v = n.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (l.callback = function() {
      dp(n, r), typeof u != "function" && (Gl === null ? Gl = /* @__PURE__ */ new Set([this]) : Gl.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), l;
  }
  function vp(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new wf();
      var d = /* @__PURE__ */ new Set();
      u.set(r, d);
    } else d = u.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), u.set(r, d));
    d.has(l) || (d.add(l), n = kg.bind(null, n, r, l), r.then(n, n));
  }
  function Ph(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ql(n, r, l, u, d) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = d, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = il(-1, 1), r.tag = 2, $l(l, r, 1))), l.lanes |= 1), n);
  }
  var Is = Te.ReactCurrentOwner, Hn = !1;
  function cr(n, r, l, u) {
    r.child = n === null ? Ee(r, null, l, u) : kn(r, n.child, l, u);
  }
  function na(n, r, l, u, d) {
    l = l.render;
    var v = r.ref;
    return Sn(r, d), u = Il(n, r, l, u, v, d), l = ui(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, ja(n, r, d)) : (hn && l && Zc(r), r.flags |= 1, cr(n, r, u, d), r.child);
  }
  function Qo(n, r, l, u, d) {
    if (n === null) {
      var v = l.type;
      return typeof v == "function" && !kp(v) && v.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = v, ut(n, r, v, u, d)) : (n = lc(l.type, null, u, r, r.mode, d), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (v = n.child, !(n.lanes & d)) {
      var E = v.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Es, l(E, u) && n.ref === r.ref) return ja(n, r, d);
    }
    return r.flags |= 1, n = Xl(v, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ut(n, r, l, u, d) {
    if (n !== null) {
      var v = n.memoizedProps;
      if (Es(v, u) && n.ref === r.ref) if (Hn = !1, r.pendingProps = u = v, (n.lanes & d) !== 0) n.flags & 131072 && (Hn = !0);
      else return r.lanes = n.lanes, ja(n, r, d);
    }
    return Hh(n, r, l, u, d);
  }
  function Ys(n, r, l) {
    var u = r.pendingProps, d = u.children, v = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ve(ju, _a), _a |= l;
    else {
      if (!(l & 1073741824)) return n = v !== null ? v.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ve(ju, _a), _a |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = v !== null ? v.baseLanes : l, Ve(ju, _a), _a |= u;
    }
    else v !== null ? (u = v.baseLanes | l, r.memoizedState = null) : u = l, Ve(ju, _a), _a |= u;
    return cr(n, r, d, l), r.child;
  }
  function hp(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Hh(n, r, l, u, d) {
    var v = Fn(l) ? Kr : Cn.current;
    return v = La(r, v), Sn(r, d), l = Il(n, r, l, u, v, d), u = ui(), n !== null && !Hn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~d, ja(n, r, d)) : (hn && u && Zc(r), r.flags |= 1, cr(n, r, l, d), r.child);
  }
  function Vh(n, r, l, u, d) {
    if (Fn(l)) {
      var v = !0;
      Zr(r);
    } else v = !1;
    if (Sn(r, d), r.stateNode === null) Fa(n, r), xf(r, l, u), $s(r, l, u, d), u = !0;
    else if (n === null) {
      var E = r.stateNode, w = r.memoizedProps;
      E.props = w;
      var D = E.context, $ = l.contextType;
      typeof $ == "object" && $ !== null ? $ = Ua($) : ($ = Fn(l) ? Kr : Cn.current, $ = La(r, $));
      var re = l.getDerivedStateFromProps, ie = typeof re == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      ie || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (w !== u || D !== $) && Fh(r, E, u, $), ga = !1;
      var ne = r.memoizedState;
      E.state = ne, Ns(r, u, E, d), D = r.memoizedState, w !== u || ne !== D || qn.current || ga ? (typeof re == "function" && (cp(r, l, re, u), D = r.memoizedState), (w = ga || Uh(r, l, w, u, ne, D, $)) ? (ie || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = D), E.props = u, E.state = D, E.context = $, u = w) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      E = r.stateNode, zh(n, r), w = r.memoizedProps, $ = r.type === r.elementType ? w : si(r.type, w), E.props = $, ie = r.pendingProps, ne = E.context, D = l.contextType, typeof D == "object" && D !== null ? D = Ua(D) : (D = Fn(l) ? Kr : Cn.current, D = La(r, D));
      var we = l.getDerivedStateFromProps;
      (re = typeof we == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (w !== ie || ne !== D) && Fh(r, E, u, D), ga = !1, ne = r.memoizedState, E.state = ne, Ns(r, u, E, d);
      var ze = r.memoizedState;
      w !== ie || ne !== ze || qn.current || ga ? (typeof we == "function" && (cp(r, l, we, u), ze = r.memoizedState), ($ = ga || Uh(r, l, $, u, ne, ze, D) || !1) ? (re || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(u, ze, D), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(u, ze, D)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = ze), E.props = u, E.state = ze, E.context = D, u = $) : (typeof E.componentDidUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || w === n.memoizedProps && ne === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Qs(n, r, l, u, v, d);
  }
  function Qs(n, r, l, u, d, v) {
    hp(n, r);
    var E = (r.flags & 128) !== 0;
    if (!u && !E) return d && Xc(r, l, !1), ja(n, r, v);
    u = r.stateNode, Is.current = r;
    var w = E && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && E ? (r.child = kn(r, n.child, null, v), r.child = kn(r, null, w, v)) : cr(n, r, w, v), r.memoizedState = u.state, d && Xc(r, l, !0), r.child;
  }
  function Uu(n) {
    var r = n.stateNode;
    r.pendingContext ? kh(n, r.pendingContext, r.pendingContext !== r.context) : r.context && kh(n, r.context, !1), op(n, r.containerInfo);
  }
  function Bh(n, r, l, u, d) {
    return Bl(), al(d), r.flags |= 256, cr(n, r, l, u), r.child;
  }
  var Rf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function mp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Tf(n, r, l) {
    var u = r.pendingProps, d = _n.current, v = !1, E = (r.flags & 128) !== 0, w;
    if ((w = E) || (w = n !== null && n.memoizedState === null ? !1 : (d & 2) !== 0), w ? (v = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (d |= 1), Ve(_n, d & 1), n === null)
      return Zd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (E = u.children, n = u.fallback, v ? (u = r.mode, v = r.child, E = { mode: "hidden", children: E }, !(u & 1) && v !== null ? (v.childLanes = 0, v.pendingProps = E) : v = Kl(E, u, 0, null), n = cl(n, u, l, null), v.return = r, n.return = r, v.sibling = n, r.child = v, r.child.memoizedState = mp(l), r.memoizedState = Rf, n) : yp(r, E));
    if (d = n.memoizedState, d !== null && (w = d.dehydrated, w !== null)) return $h(n, r, E, u, w, d, l);
    if (v) {
      v = u.fallback, E = r.mode, d = n.child, w = d.sibling;
      var D = { mode: "hidden", children: u.children };
      return !(E & 1) && r.child !== d ? (u = r.child, u.childLanes = 0, u.pendingProps = D, r.deletions = null) : (u = Xl(d, D), u.subtreeFlags = d.subtreeFlags & 14680064), w !== null ? v = Xl(w, v) : (v = cl(v, E, l, null), v.flags |= 2), v.return = r, u.return = r, u.sibling = v, r.child = u, u = v, v = r.child, E = n.child.memoizedState, E = E === null ? mp(l) : { baseLanes: E.baseLanes | l, cachePool: null, transitions: E.transitions }, v.memoizedState = E, v.childLanes = n.childLanes & ~l, r.memoizedState = Rf, u;
    }
    return v = n.child, n = v.sibling, u = Xl(v, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function yp(n, r) {
    return r = Kl({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ws(n, r, l, u) {
    return u !== null && al(u), kn(r, n.child, null, l), n = yp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function $h(n, r, l, u, d, v, E) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = fp(Error(h(422))), Ws(n, r, E, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (v = u.fallback, d = r.mode, u = Kl({ mode: "visible", children: u.children }, d, 0, null), v = cl(v, d, E, null), v.flags |= 2, u.return = r, v.return = r, u.sibling = v, r.child = u, r.mode & 1 && kn(r, n.child, null, E), r.child.memoizedState = mp(E), r.memoizedState = Rf, v);
    if (!(r.mode & 1)) return Ws(n, r, E, null);
    if (d.data === "$!") {
      if (u = d.nextSibling && d.nextSibling.dataset, u) var w = u.dgst;
      return u = w, v = Error(h(419)), u = fp(v, u, void 0), Ws(n, r, E, u);
    }
    if (w = (E & n.childLanes) !== 0, Hn || w) {
      if (u = Kn, u !== null) {
        switch (E & -E) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = d & (u.suspendedLanes | E) ? 0 : d, d !== 0 && d !== v.retryLane && (v.retryLane = d, ya(n, d), Fr(u, n, d, -1));
      }
      return Tp(), u = fp(Error(h(421))), Ws(n, r, E, u);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Dg.bind(null, n), d._reactRetry = r, null) : (n = v.treeContext, ea = Ti(d.nextSibling), Jr = r, hn = !0, Aa = null, n !== null && (jn[Ma++] = Ni, jn[Ma++] = zi, jn[Ma++] = ha, Ni = n.id, zi = n.overflow, ha = r), r = yp(r, u.children), r.flags |= 4096, r);
  }
  function gp(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), np(n.return, r, l);
  }
  function Mr(n, r, l, u, d) {
    var v = n.memoizedState;
    v === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: d } : (v.isBackwards = r, v.rendering = null, v.renderingStartTime = 0, v.last = u, v.tail = l, v.tailMode = d);
  }
  function Mi(n, r, l) {
    var u = r.pendingProps, d = u.revealOrder, v = u.tail;
    if (cr(n, r, u.children, l), u = _n.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && gp(n, l, r);
        else if (n.tag === 19) gp(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (Ve(_n, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (d) {
      case "forwards":
        for (l = r.child, d = null; l !== null; ) n = l.alternate, n !== null && af(n) === null && (d = l), l = l.sibling;
        l = d, l === null ? (d = r.child, r.child = null) : (d = l.sibling, l.sibling = null), Mr(r, !1, d, l, v);
        break;
      case "backwards":
        for (l = null, d = r.child, r.child = null; d !== null; ) {
          if (n = d.alternate, n !== null && af(n) === null) {
            r.child = d;
            break;
          }
          n = d.sibling, d.sibling = l, l = d, d = n;
        }
        Mr(r, !0, l, null, v);
        break;
      case "together":
        Mr(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Fa(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ja(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Fi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(h(153));
    if (r.child !== null) {
      for (n = r.child, l = Xl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Xl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Gs(n, r, l) {
    switch (r.tag) {
      case 3:
        Uu(r), Bl();
        break;
      case 5:
        Mh(r);
        break;
      case 1:
        Fn(r.type) && Zr(r);
        break;
      case 4:
        op(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, d = r.memoizedProps.value;
        Ve(ma, u._currentValue), u._currentValue = d;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Ve(_n, _n.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Tf(n, r, l) : (Ve(_n, _n.current & 1), n = ja(n, r, l), n !== null ? n.sibling : null);
        Ve(_n, _n.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u) return Mi(n, r, l);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Ve(_n, _n.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ys(n, r, l);
    }
    return ja(n, r, l);
  }
  var Pa, Vn, Ih, Yh;
  Pa = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Vn = function() {
  }, Ih = function(n, r, l, u) {
    var d = n.memoizedProps;
    if (d !== u) {
      n = r.stateNode, Fo(Li.current);
      var v = null;
      switch (l) {
        case "input":
          d = ir(n, d), u = ir(n, u), v = [];
          break;
        case "select":
          d = Se({}, d, { value: void 0 }), u = Se({}, u, { value: void 0 }), v = [];
          break;
        case "textarea":
          d = Wn(n, d), u = Wn(n, u), v = [];
          break;
        default:
          typeof d.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Ul);
      }
      fn(l, u);
      var E;
      l = null;
      for ($ in d) if (!u.hasOwnProperty($) && d.hasOwnProperty($) && d[$] != null) if ($ === "style") {
        var w = d[$];
        for (E in w) w.hasOwnProperty(E) && (l || (l = {}), l[E] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (b.hasOwnProperty($) ? v || (v = []) : (v = v || []).push($, null));
      for ($ in u) {
        var D = u[$];
        if (w = d != null ? d[$] : void 0, u.hasOwnProperty($) && D !== w && (D != null || w != null)) if ($ === "style") if (w) {
          for (E in w) !w.hasOwnProperty(E) || D && D.hasOwnProperty(E) || (l || (l = {}), l[E] = "");
          for (E in D) D.hasOwnProperty(E) && w[E] !== D[E] && (l || (l = {}), l[E] = D[E]);
        } else l || (v || (v = []), v.push(
          $,
          l
        )), l = D;
        else $ === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, w = w ? w.__html : void 0, D != null && w !== D && (v = v || []).push($, D)) : $ === "children" ? typeof D != "string" && typeof D != "number" || (v = v || []).push($, "" + D) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (b.hasOwnProperty($) ? (D != null && $ === "onScroll" && Wt("scroll", n), v || w === D || (v = [])) : (v = v || []).push($, D));
      }
      l && (v = v || []).push("style", l);
      var $ = v;
      (r.updateQueue = $) && (r.flags |= 4);
    }
  }, Yh = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function qs(n, r) {
    if (!hn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var u = null; l !== null; ) l.alternate !== null && (u = l), l = l.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function rr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r) for (var d = n.child; d !== null; ) l |= d.lanes | d.childLanes, u |= d.subtreeFlags & 14680064, u |= d.flags & 14680064, d.return = n, d = d.sibling;
    else for (d = n.child; d !== null; ) l |= d.lanes | d.childLanes, u |= d.subtreeFlags, u |= d.flags, d.return = n, d = d.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function Qh(n, r, l) {
    var u = r.pendingProps;
    switch (Jc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return rr(r), null;
      case 1:
        return Fn(r.type) && Nu(), rr(r), null;
      case 3:
        return u = r.stateNode, jo(), cn(qn), cn(Cn), $e(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (ef(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (qo(Aa), Aa = null))), Vn(n, r), rr(r), null;
      case 5:
        rf(r);
        var d = Fo(Ms.current);
        if (l = r.type, n !== null && r.stateNode != null) Ih(n, r, l, u, d), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(h(166));
            return rr(r), null;
          }
          if (n = Fo(Li.current), ef(r)) {
            u = r.stateNode, l = r.type;
            var v = r.memoizedProps;
            switch (u[ki] = r, u[Ts] = v, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Wt("cancel", u), Wt("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Wt("load", u);
                break;
              case "video":
              case "audio":
                for (d = 0; d < xs.length; d++) Wt(xs[d], u);
                break;
              case "source":
                Wt("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Wt(
                  "error",
                  u
                ), Wt("load", u);
                break;
              case "details":
                Wt("toggle", u);
                break;
              case "input":
                Yn(u, v), Wt("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!v.multiple }, Wt("invalid", u);
                break;
              case "textarea":
                Er(u, v), Wt("invalid", u);
            }
            fn(l, v), d = null;
            for (var E in v) if (v.hasOwnProperty(E)) {
              var w = v[E];
              E === "children" ? typeof w == "string" ? u.textContent !== w && (v.suppressHydrationWarning !== !0 && Qc(u.textContent, w, n), d = ["children", w]) : typeof w == "number" && u.textContent !== "" + w && (v.suppressHydrationWarning !== !0 && Qc(
                u.textContent,
                w,
                n
              ), d = ["children", "" + w]) : b.hasOwnProperty(E) && w != null && E === "onScroll" && Wt("scroll", u);
            }
            switch (l) {
              case "input":
                Mn(u), yi(u, v, !0);
                break;
              case "textarea":
                Mn(u), An(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (u.onclick = Ul);
            }
            u = d, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            E = d.nodeType === 9 ? d : d.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Cr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = E.createElement(l, { is: u.is }) : (n = E.createElement(l), l === "select" && (E = n, u.multiple ? E.multiple = !0 : u.size && (E.size = u.size))) : n = E.createElementNS(n, l), n[ki] = r, n[Ts] = u, Pa(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = tr(l, u), l) {
                case "dialog":
                  Wt("cancel", n), Wt("close", n), d = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Wt("load", n), d = u;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < xs.length; d++) Wt(xs[d], n);
                  d = u;
                  break;
                case "source":
                  Wt("error", n), d = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Wt(
                    "error",
                    n
                  ), Wt("load", n), d = u;
                  break;
                case "details":
                  Wt("toggle", n), d = u;
                  break;
                case "input":
                  Yn(n, u), d = ir(n, u), Wt("invalid", n);
                  break;
                case "option":
                  d = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, d = Se({}, u, { value: void 0 }), Wt("invalid", n);
                  break;
                case "textarea":
                  Er(n, u), d = Wn(n, u), Wt("invalid", n);
                  break;
                default:
                  d = u;
              }
              fn(l, d), w = d;
              for (v in w) if (w.hasOwnProperty(v)) {
                var D = w[v];
                v === "style" ? ln(n, D) : v === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && gi(n, D)) : v === "children" ? typeof D == "string" ? (l !== "textarea" || D !== "") && he(n, D) : typeof D == "number" && he(n, "" + D) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (b.hasOwnProperty(v) ? D != null && v === "onScroll" && Wt("scroll", n) : D != null && se(n, v, D, E));
              }
              switch (l) {
                case "input":
                  Mn(n), yi(n, u, !1);
                  break;
                case "textarea":
                  Mn(n), An(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + vt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, v = u.value, v != null ? wn(n, !!u.multiple, v, !1) : u.defaultValue != null && wn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof d.onClick == "function" && (n.onclick = Ul);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return rr(r), null;
      case 6:
        if (n && r.stateNode != null) Yh(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(h(166));
          if (l = Fo(Ms.current), Fo(Li.current), ef(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[ki] = r, (v = u.nodeValue !== l) && (n = Jr, n !== null)) switch (n.tag) {
              case 3:
                Qc(u.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Qc(u.nodeValue, l, (n.mode & 1) !== 0);
            }
            v && (r.flags |= 4);
          } else u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[ki] = r, r.stateNode = u;
        }
        return rr(r), null;
      case 13:
        if (cn(_n), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (hn && ea !== null && r.mode & 1 && !(r.flags & 128)) Os(), Bl(), r.flags |= 98560, v = !1;
          else if (v = ef(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!v) throw Error(h(318));
              if (v = r.memoizedState, v = v !== null ? v.dehydrated : null, !v) throw Error(h(317));
              v[ki] = r;
            } else Bl(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            rr(r), v = !1;
          } else Aa !== null && (qo(Aa), Aa = null), v = !0;
          if (!v) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || _n.current & 1 ? Nn === 0 && (Nn = 3) : Tp())), r.updateQueue !== null && (r.flags |= 4), rr(r), null);
      case 4:
        return jo(), Vn(n, r), n === null && Ru(r.stateNode.containerInfo), rr(r), null;
      case 10:
        return tp(r.type._context), rr(r), null;
      case 17:
        return Fn(r.type) && Nu(), rr(r), null;
      case 19:
        if (cn(_n), v = r.memoizedState, v === null) return rr(r), null;
        if (u = (r.flags & 128) !== 0, E = v.rendering, E === null) if (u) qs(v, !1);
        else {
          if (Nn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (E = af(n), E !== null) {
              for (r.flags |= 128, qs(v, !1), u = E.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) v = l, n = u, v.flags &= 14680066, E = v.alternate, E === null ? (v.childLanes = 0, v.lanes = n, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = E.childLanes, v.lanes = E.lanes, v.child = E.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = E.memoizedProps, v.memoizedState = E.memoizedState, v.updateQueue = E.updateQueue, v.type = E.type, n = E.dependencies, v.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Ve(_n, _n.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          v.tail !== null && ot() > Hu && (r.flags |= 128, u = !0, qs(v, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = af(E), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), qs(v, !0), v.tail === null && v.tailMode === "hidden" && !E.alternate && !hn) return rr(r), null;
          } else 2 * ot() - v.renderingStartTime > Hu && l !== 1073741824 && (r.flags |= 128, u = !0, qs(v, !1), r.lanes = 4194304);
          v.isBackwards ? (E.sibling = r.child, r.child = E) : (l = v.last, l !== null ? l.sibling = E : r.child = E, v.last = E);
        }
        return v.tail !== null ? (r = v.tail, v.rendering = r, v.tail = r.sibling, v.renderingStartTime = ot(), r.sibling = null, l = _n.current, Ve(_n, u ? l & 1 | 2 : l & 1), r) : (rr(r), null);
      case 22:
      case 23:
        return Rp(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? _a & 1073741824 && (rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(h(156, r.tag));
  }
  function kf(n, r) {
    switch (Jc(r), r.tag) {
      case 1:
        return Fn(r.type) && Nu(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return jo(), cn(qn), cn(Cn), $e(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return rf(r), null;
      case 13:
        if (cn(_n), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(h(340));
          Bl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return cn(_n), null;
      case 4:
        return jo(), null;
      case 10:
        return tp(r.type._context), null;
      case 22:
      case 23:
        return Rp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Xs = !1, wr = !1, Cg = typeof WeakSet == "function" ? WeakSet : Set, De = null;
  function Fu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (u) {
      mn(n, r, u);
    }
    else l.current = null;
  }
  function Df(n, r, l) {
    try {
      l();
    } catch (u) {
      mn(n, r, u);
    }
  }
  var Wh = !1;
  function Gh(n, r) {
    if (Rs = Oa, n = Cs(), jc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var u = l.getSelection && l.getSelection();
        if (u && u.rangeCount !== 0) {
          l = u.anchorNode;
          var d = u.anchorOffset, v = u.focusNode;
          u = u.focusOffset;
          try {
            l.nodeType, v.nodeType;
          } catch {
            l = null;
            break e;
          }
          var E = 0, w = -1, D = -1, $ = 0, re = 0, ie = n, ne = null;
          t: for (; ; ) {
            for (var we; ie !== l || d !== 0 && ie.nodeType !== 3 || (w = E + d), ie !== v || u !== 0 && ie.nodeType !== 3 || (D = E + u), ie.nodeType === 3 && (E += ie.nodeValue.length), (we = ie.firstChild) !== null; )
              ne = ie, ie = we;
            for (; ; ) {
              if (ie === n) break t;
              if (ne === l && ++$ === d && (w = E), ne === v && ++re === u && (D = E), (we = ie.nextSibling) !== null) break;
              ie = ne, ne = ie.parentNode;
            }
            ie = we;
          }
          l = w === -1 || D === -1 ? null : { start: w, end: D };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (No = { focusedElem: n, selectionRange: l }, Oa = !1, De = r; De !== null; ) if (r = De, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, De = n;
    else for (; De !== null; ) {
      r = De;
      try {
        var ze = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ze !== null) {
              var Ae = ze.memoizedProps, zn = ze.memoizedState, M = r.stateNode, N = M.getSnapshotBeforeUpdate(r.elementType === r.type ? Ae : si(r.type, Ae), zn);
              M.__reactInternalSnapshotBeforeUpdate = N;
            }
            break;
          case 3:
            var j = r.stateNode.containerInfo;
            j.nodeType === 1 ? j.textContent = "" : j.nodeType === 9 && j.documentElement && j.removeChild(j.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(h(163));
        }
      } catch (ce) {
        mn(r, r.return, ce);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, De = n;
        break;
      }
      De = r.return;
    }
    return ze = Wh, Wh = !1, ze;
  }
  function Ks(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var d = u = u.next;
      do {
        if ((d.tag & n) === n) {
          var v = d.destroy;
          d.destroy = void 0, v !== void 0 && Df(r, l, v);
        }
        d = d.next;
      } while (d !== u);
    }
  }
  function Zs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Sp(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Of(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Of(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ki], delete r[Ts], delete r[ks], delete r[Ou], delete r[_g])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Js(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ol(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Js(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ai(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ul));
    else if (u !== 4 && (n = n.child, n !== null)) for (Ai(n, r, l), n = n.sibling; n !== null; ) Ai(n, r, l), n = n.sibling;
  }
  function Ui(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Ui(n, r, l), n = n.sibling; n !== null; ) Ui(n, r, l), n = n.sibling;
  }
  var On = null, Ar = !1;
  function Ur(n, r, l) {
    for (l = l.child; l !== null; ) qh(n, r, l), l = l.sibling;
  }
  function qh(n, r, l) {
    if (Gr && typeof Gr.onCommitFiberUnmount == "function") try {
      Gr.onCommitFiberUnmount(Tl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        wr || Fu(l, r);
      case 6:
        var u = On, d = Ar;
        On = null, Ur(n, r, l), On = u, Ar = d, On !== null && (Ar ? (n = On, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : On.removeChild(l.stateNode));
        break;
      case 18:
        On !== null && (Ar ? (n = On, l = l.stateNode, n.nodeType === 8 ? Du(n.parentNode, l) : n.nodeType === 1 && Du(n, l), ri(n)) : Du(On, l.stateNode));
        break;
      case 4:
        u = On, d = Ar, On = l.stateNode.containerInfo, Ar = !0, Ur(n, r, l), On = u, Ar = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!wr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          d = u = u.next;
          do {
            var v = d, E = v.destroy;
            v = v.tag, E !== void 0 && (v & 2 || v & 4) && Df(l, r, E), d = d.next;
          } while (d !== u);
        }
        Ur(n, r, l);
        break;
      case 1:
        if (!wr && (Fu(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (w) {
          mn(l, r, w);
        }
        Ur(n, r, l);
        break;
      case 21:
        Ur(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (wr = (u = wr) || l.memoizedState !== null, Ur(n, r, l), wr = u) : Ur(n, r, l);
        break;
      default:
        Ur(n, r, l);
    }
  }
  function Xh(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Cg()), r.forEach(function(u) {
        var d = im.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(d, d));
      });
    }
  }
  function ci(n, r) {
    var l = r.deletions;
    if (l !== null) for (var u = 0; u < l.length; u++) {
      var d = l[u];
      try {
        var v = n, E = r, w = E;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 5:
              On = w.stateNode, Ar = !1;
              break e;
            case 3:
              On = w.stateNode.containerInfo, Ar = !0;
              break e;
            case 4:
              On = w.stateNode.containerInfo, Ar = !0;
              break e;
          }
          w = w.return;
        }
        if (On === null) throw Error(h(160));
        qh(v, E, d), On = null, Ar = !1;
        var D = d.alternate;
        D !== null && (D.return = null), d.return = null;
      } catch ($) {
        mn(d, r, $);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) _p(r, n), r = r.sibling;
  }
  function _p(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ci(r, n), ra(n), u & 4) {
          try {
            Ks(3, n, n.return), Zs(3, n);
          } catch (Ae) {
            mn(n, n.return, Ae);
          }
          try {
            Ks(5, n, n.return);
          } catch (Ae) {
            mn(n, n.return, Ae);
          }
        }
        break;
      case 1:
        ci(r, n), ra(n), u & 512 && l !== null && Fu(l, l.return);
        break;
      case 5:
        if (ci(r, n), ra(n), u & 512 && l !== null && Fu(l, l.return), n.flags & 32) {
          var d = n.stateNode;
          try {
            he(d, "");
          } catch (Ae) {
            mn(n, n.return, Ae);
          }
        }
        if (u & 4 && (d = n.stateNode, d != null)) {
          var v = n.memoizedProps, E = l !== null ? l.memoizedProps : v, w = n.type, D = n.updateQueue;
          if (n.updateQueue = null, D !== null) try {
            w === "input" && v.type === "radio" && v.name != null && Qn(d, v), tr(w, E);
            var $ = tr(w, v);
            for (E = 0; E < D.length; E += 2) {
              var re = D[E], ie = D[E + 1];
              re === "style" ? ln(d, ie) : re === "dangerouslySetInnerHTML" ? gi(d, ie) : re === "children" ? he(d, ie) : se(d, re, ie, $);
            }
            switch (w) {
              case "input":
                Wr(d, v);
                break;
              case "textarea":
                qa(d, v);
                break;
              case "select":
                var ne = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!v.multiple;
                var we = v.value;
                we != null ? wn(d, !!v.multiple, we, !1) : ne !== !!v.multiple && (v.defaultValue != null ? wn(
                  d,
                  !!v.multiple,
                  v.defaultValue,
                  !0
                ) : wn(d, !!v.multiple, v.multiple ? [] : "", !1));
            }
            d[Ts] = v;
          } catch (Ae) {
            mn(n, n.return, Ae);
          }
        }
        break;
      case 6:
        if (ci(r, n), ra(n), u & 4) {
          if (n.stateNode === null) throw Error(h(162));
          d = n.stateNode, v = n.memoizedProps;
          try {
            d.nodeValue = v;
          } catch (Ae) {
            mn(n, n.return, Ae);
          }
        }
        break;
      case 3:
        if (ci(r, n), ra(n), u & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ri(r.containerInfo);
        } catch (Ae) {
          mn(n, n.return, Ae);
        }
        break;
      case 4:
        ci(r, n), ra(n);
        break;
      case 13:
        ci(r, n), ra(n), d = n.child, d.flags & 8192 && (v = d.memoizedState !== null, d.stateNode.isHidden = v, !v || d.alternate !== null && d.alternate.memoizedState !== null || (bp = ot())), u & 4 && Xh(n);
        break;
      case 22:
        if (re = l !== null && l.memoizedState !== null, n.mode & 1 ? (wr = ($ = wr) || re, ci(r, n), wr = $) : ci(r, n), ra(n), u & 8192) {
          if ($ = n.memoizedState !== null, (n.stateNode.isHidden = $) && !re && n.mode & 1) for (De = n, re = n.child; re !== null; ) {
            for (ie = De = re; De !== null; ) {
              switch (ne = De, we = ne.child, ne.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ks(4, ne, ne.return);
                  break;
                case 1:
                  Fu(ne, ne.return);
                  var ze = ne.stateNode;
                  if (typeof ze.componentWillUnmount == "function") {
                    u = ne, l = ne.return;
                    try {
                      r = u, ze.props = r.memoizedProps, ze.state = r.memoizedState, ze.componentWillUnmount();
                    } catch (Ae) {
                      mn(u, l, Ae);
                    }
                  }
                  break;
                case 5:
                  Fu(ne, ne.return);
                  break;
                case 22:
                  if (ne.memoizedState !== null) {
                    ec(ie);
                    continue;
                  }
              }
              we !== null ? (we.return = ne, De = we) : ec(ie);
            }
            re = re.sibling;
          }
          e: for (re = null, ie = n; ; ) {
            if (ie.tag === 5) {
              if (re === null) {
                re = ie;
                try {
                  d = ie.stateNode, $ ? (v = d.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none") : (w = ie.stateNode, D = ie.memoizedProps.style, E = D != null && D.hasOwnProperty("display") ? D.display : null, w.style.display = Qt("display", E));
                } catch (Ae) {
                  mn(n, n.return, Ae);
                }
              }
            } else if (ie.tag === 6) {
              if (re === null) try {
                ie.stateNode.nodeValue = $ ? "" : ie.memoizedProps;
              } catch (Ae) {
                mn(n, n.return, Ae);
              }
            } else if ((ie.tag !== 22 && ie.tag !== 23 || ie.memoizedState === null || ie === n) && ie.child !== null) {
              ie.child.return = ie, ie = ie.child;
              continue;
            }
            if (ie === n) break e;
            for (; ie.sibling === null; ) {
              if (ie.return === null || ie.return === n) break e;
              re === ie && (re = null), ie = ie.return;
            }
            re === ie && (re = null), ie.sibling.return = ie.return, ie = ie.sibling;
          }
        }
        break;
      case 19:
        ci(r, n), ra(n), u & 4 && Xh(n);
        break;
      case 21:
        break;
      default:
        ci(
          r,
          n
        ), ra(n);
    }
  }
  function ra(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Js(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(h(160));
        }
        switch (u.tag) {
          case 5:
            var d = u.stateNode;
            u.flags & 32 && (he(d, ""), u.flags &= -33);
            var v = ol(n);
            Ui(n, v, d);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, w = ol(n);
            Ai(n, w, E);
            break;
          default:
            throw Error(h(161));
        }
      } catch (D) {
        mn(n, n.return, D);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function bg(n, r, l) {
    De = n, Ep(n);
  }
  function Ep(n, r, l) {
    for (var u = (n.mode & 1) !== 0; De !== null; ) {
      var d = De, v = d.child;
      if (d.tag === 22 && u) {
        var E = d.memoizedState !== null || Xs;
        if (!E) {
          var w = d.alternate, D = w !== null && w.memoizedState !== null || wr;
          w = Xs;
          var $ = wr;
          if (Xs = E, (wr = D) && !$) for (De = d; De !== null; ) E = De, D = E.child, E.tag === 22 && E.memoizedState !== null ? Cp(d) : D !== null ? (D.return = E, De = D) : Cp(d);
          for (; v !== null; ) De = v, Ep(v), v = v.sibling;
          De = d, Xs = w, wr = $;
        }
        Kh(n);
      } else d.subtreeFlags & 8772 && v !== null ? (v.return = d, De = v) : Kh(n);
    }
  }
  function Kh(n) {
    for (; De !== null; ) {
      var r = De;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              wr || Zs(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !wr) if (l === null) u.componentDidMount();
              else {
                var d = r.elementType === r.type ? l.memoizedProps : si(r.type, l.memoizedProps);
                u.componentDidUpdate(d, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var v = r.updateQueue;
              v !== null && lp(r, v, u);
              break;
            case 3:
              var E = r.updateQueue;
              if (E !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                lp(r, E, l);
              }
              break;
            case 5:
              var w = r.stateNode;
              if (l === null && r.flags & 4) {
                l = w;
                var D = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    D.autoFocus && l.focus();
                    break;
                  case "img":
                    D.src && (l.src = D.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var $ = r.alternate;
                if ($ !== null) {
                  var re = $.memoizedState;
                  if (re !== null) {
                    var ie = re.dehydrated;
                    ie !== null && ri(ie);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(h(163));
          }
          wr || r.flags & 512 && Sp(r);
        } catch (ne) {
          mn(r, r.return, ne);
        }
      }
      if (r === n) {
        De = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, De = l;
        break;
      }
      De = r.return;
    }
  }
  function ec(n) {
    for (; De !== null; ) {
      var r = De;
      if (r === n) {
        De = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, De = l;
        break;
      }
      De = r.return;
    }
  }
  function Cp(n) {
    for (; De !== null; ) {
      var r = De;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Zs(4, r);
            } catch (D) {
              mn(r, l, D);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var d = r.return;
              try {
                u.componentDidMount();
              } catch (D) {
                mn(r, d, D);
              }
            }
            var v = r.return;
            try {
              Sp(r);
            } catch (D) {
              mn(r, v, D);
            }
            break;
          case 5:
            var E = r.return;
            try {
              Sp(r);
            } catch (D) {
              mn(r, E, D);
            }
        }
      } catch (D) {
        mn(r, r.return, D);
      }
      if (r === n) {
        De = null;
        break;
      }
      var w = r.sibling;
      if (w !== null) {
        w.return = r.return, De = w;
        break;
      }
      De = r.return;
    }
  }
  var xg = Math.ceil, Wl = Te.ReactCurrentDispatcher, Wo = Te.ReactCurrentOwner, fr = Te.ReactCurrentBatchConfig, zt = 0, Kn = null, Bn = null, dr = 0, _a = 0, ju = oi(0), Nn = 0, tc = null, Fi = 0, Pu = 0, Nf = 0, nc = null, aa = null, bp = 0, Hu = 1 / 0, Ea = null, Vu = !1, Go = null, Gl = null, zf = !1, ul = null, rc = 0, ql = 0, Bu = null, ac = -1, Rr = 0;
  function $n() {
    return zt & 6 ? ot() : ac !== -1 ? ac : ac = ot();
  }
  function ji(n) {
    return n.mode & 1 ? zt & 2 && dr !== 0 ? dr & -dr : Eg.transition !== null ? (Rr === 0 && (Rr = vu()), Rr) : (n = Ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Eu(n.type)), n) : 1;
  }
  function Fr(n, r, l, u) {
    if (50 < ql) throw ql = 0, Bu = null, Error(h(185));
    qi(n, l, u), (!(zt & 2) || n !== Kn) && (n === Kn && (!(zt & 2) && (Pu |= l), Nn === 4 && fi(n, dr)), ia(n, u), l === 1 && zt === 0 && !(r.mode & 1) && (Hu = ot() + 500, zu && Oi()));
  }
  function ia(n, r) {
    var l = n.callbackNode;
    Co(n, r);
    var u = ni(n, n === Kn ? dr : 0);
    if (u === 0) l !== null && or(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && or(l), r === 1) n.tag === 0 ? jl(xp.bind(null, n)) : Kc(xp.bind(null, n)), ku(function() {
        !(zt & 6) && Oi();
      }), l = null;
      else {
        switch (mu(u)) {
          case 1:
            l = ei;
            break;
          case 4:
            l = _o;
            break;
          case 16:
            l = Eo;
            break;
          case 536870912:
            l = fu;
            break;
          default:
            l = Eo;
        }
        l = om(l, Lf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Lf(n, r) {
    if (ac = -1, Rr = 0, zt & 6) throw Error(h(327));
    var l = n.callbackNode;
    if ($u() && n.callbackNode !== l) return null;
    var u = ni(n, n === Kn ? dr : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = Mf(n, u);
    else {
      r = u;
      var d = zt;
      zt |= 2;
      var v = Jh();
      (Kn !== n || dr !== r) && (Ea = null, Hu = ot() + 500, sl(n, r));
      do
        try {
          em();
          break;
        } catch (w) {
          Zh(n, w);
        }
      while (!0);
      ep(), Wl.current = v, zt = d, Bn !== null ? r = 0 : (Kn = null, dr = 0, r = Nn);
    }
    if (r !== 0) {
      if (r === 2 && (d = Dl(n), d !== 0 && (u = d, r = ic(n, d))), r === 1) throw l = tc, sl(n, 0), fi(n, u), ia(n, ot()), l;
      if (r === 6) fi(n, u);
      else {
        if (d = n.current.alternate, !(u & 30) && !wg(d) && (r = Mf(n, u), r === 2 && (v = Dl(n), v !== 0 && (u = v, r = ic(n, v))), r === 1)) throw l = tc, sl(n, 0), fi(n, u), ia(n, ot()), l;
        switch (n.finishedWork = d, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(h(345));
          case 2:
            Ko(n, aa, Ea);
            break;
          case 3:
            if (fi(n, u), (u & 130023424) === u && (r = bp + 500 - ot(), 10 < r)) {
              if (ni(n, 0) !== 0) break;
              if (d = n.suspendedLanes, (d & u) !== u) {
                $n(), n.pingedLanes |= n.suspendedLanes & d;
                break;
              }
              n.timeoutHandle = Gc(Ko.bind(null, n, aa, Ea), r);
              break;
            }
            Ko(n, aa, Ea);
            break;
          case 4:
            if (fi(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, d = -1; 0 < u; ) {
              var E = 31 - Nr(u);
              v = 1 << E, E = r[E], E > d && (d = E), u &= ~v;
            }
            if (u = d, u = ot() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * xg(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Gc(Ko.bind(null, n, aa, Ea), u);
              break;
            }
            Ko(n, aa, Ea);
            break;
          case 5:
            Ko(n, aa, Ea);
            break;
          default:
            throw Error(h(329));
        }
      }
    }
    return ia(n, ot()), n.callbackNode === l ? Lf.bind(null, n) : null;
  }
  function ic(n, r) {
    var l = nc;
    return n.current.memoizedState.isDehydrated && (sl(n, r).flags |= 256), n = Mf(n, r), n !== 2 && (r = aa, aa = l, r !== null && qo(r)), n;
  }
  function qo(n) {
    aa === null ? aa = n : aa.push.apply(aa, n);
  }
  function wg(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var u = 0; u < l.length; u++) {
          var d = l[u], v = d.getSnapshot;
          d = d.value;
          try {
            if (!ii(v(), d)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function fi(n, r) {
    for (r &= ~Nf, r &= ~Pu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Nr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function xp(n) {
    if (zt & 6) throw Error(h(327));
    $u();
    var r = ni(n, 0);
    if (!(r & 1)) return ia(n, ot()), null;
    var l = Mf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = Dl(n);
      u !== 0 && (r = u, l = ic(n, u));
    }
    if (l === 1) throw l = tc, sl(n, 0), fi(n, r), ia(n, ot()), l;
    if (l === 6) throw Error(h(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ko(n, aa, Ea), ia(n, ot()), null;
  }
  function wp(n, r) {
    var l = zt;
    zt |= 1;
    try {
      return n(r);
    } finally {
      zt = l, zt === 0 && (Hu = ot() + 500, zu && Oi());
    }
  }
  function Xo(n) {
    ul !== null && ul.tag === 0 && !(zt & 6) && $u();
    var r = zt;
    zt |= 1;
    var l = fr.transition, u = Ht;
    try {
      if (fr.transition = null, Ht = 1, n) return n();
    } finally {
      Ht = u, fr.transition = l, zt = r, !(zt & 6) && Oi();
    }
  }
  function Rp() {
    _a = ju.current, cn(ju);
  }
  function sl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, qd(l)), Bn !== null) for (l = Bn.return; l !== null; ) {
      var u = l;
      switch (Jc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Nu();
          break;
        case 3:
          jo(), cn(qn), cn(Cn), $e();
          break;
        case 5:
          rf(u);
          break;
        case 4:
          jo();
          break;
        case 13:
          cn(_n);
          break;
        case 19:
          cn(_n);
          break;
        case 10:
          tp(u.type._context);
          break;
        case 22:
        case 23:
          Rp();
      }
      l = l.return;
    }
    if (Kn = n, Bn = n = Xl(n.current, null), dr = _a = r, Nn = 0, tc = null, Nf = Pu = Fi = 0, aa = nc = null, Uo !== null) {
      for (r = 0; r < Uo.length; r++) if (l = Uo[r], u = l.interleaved, u !== null) {
        l.interleaved = null;
        var d = u.next, v = l.pending;
        if (v !== null) {
          var E = v.next;
          v.next = d, u.next = E;
        }
        l.pending = u;
      }
      Uo = null;
    }
    return n;
  }
  function Zh(n, r) {
    do {
      var l = Bn;
      try {
        if (ep(), Et.current = Io, lf) {
          for (var u = Bt.memoizedState; u !== null; ) {
            var d = u.queue;
            d !== null && (d.pending = null), u = u.next;
          }
          lf = !1;
        }
        if (tn = 0, nr = Pn = Bt = null, Us = !1, Po = 0, Wo.current = null, l === null || l.return === null) {
          Nn = 1, tc = r, Bn = null;
          break;
        }
        e: {
          var v = n, E = l.return, w = l, D = r;
          if (r = dr, w.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var $ = D, re = w, ie = re.tag;
            if (!(re.mode & 1) && (ie === 0 || ie === 11 || ie === 15)) {
              var ne = re.alternate;
              ne ? (re.updateQueue = ne.updateQueue, re.memoizedState = ne.memoizedState, re.lanes = ne.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var we = Ph(E);
            if (we !== null) {
              we.flags &= -257, Ql(we, E, w, v, r), we.mode & 1 && vp(v, $, r), r = we, D = $;
              var ze = r.updateQueue;
              if (ze === null) {
                var Ae = /* @__PURE__ */ new Set();
                Ae.add(D), r.updateQueue = Ae;
              } else ze.add(D);
              break e;
            } else {
              if (!(r & 1)) {
                vp(v, $, r), Tp();
                break e;
              }
              D = Error(h(426));
            }
          } else if (hn && w.mode & 1) {
            var zn = Ph(E);
            if (zn !== null) {
              !(zn.flags & 65536) && (zn.flags |= 256), Ql(zn, E, w, v, r), al(Yo(D, w));
              break e;
            }
          }
          v = D = Yo(D, w), Nn !== 4 && (Nn = 2), nc === null ? nc = [v] : nc.push(v), v = E;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, r &= -r, v.lanes |= r;
                var M = jh(v, D, r);
                Lh(v, M);
                break e;
              case 1:
                w = D;
                var N = v.type, j = v.stateNode;
                if (!(v.flags & 128) && (typeof N.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (Gl === null || !Gl.has(j)))) {
                  v.flags |= 65536, r &= -r, v.lanes |= r;
                  var ce = pp(v, w, r);
                  Lh(v, ce);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        nm(l);
      } catch (be) {
        r = be, Bn === l && l !== null && (Bn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Jh() {
    var n = Wl.current;
    return Wl.current = Io, n === null ? Io : n;
  }
  function Tp() {
    (Nn === 0 || Nn === 3 || Nn === 2) && (Nn = 4), Kn === null || !(Fi & 268435455) && !(Pu & 268435455) || fi(Kn, dr);
  }
  function Mf(n, r) {
    var l = zt;
    zt |= 2;
    var u = Jh();
    (Kn !== n || dr !== r) && (Ea = null, sl(n, r));
    do
      try {
        Rg();
        break;
      } catch (d) {
        Zh(n, d);
      }
    while (!0);
    if (ep(), zt = l, Wl.current = u, Bn !== null) throw Error(h(261));
    return Kn = null, dr = 0, Nn;
  }
  function Rg() {
    for (; Bn !== null; ) tm(Bn);
  }
  function em() {
    for (; Bn !== null && !Za(); ) tm(Bn);
  }
  function tm(n) {
    var r = lm(n.alternate, n, _a);
    n.memoizedProps = n.pendingProps, r === null ? nm(n) : Bn = r, Wo.current = null;
  }
  function nm(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = kf(l, r), l !== null) {
          l.flags &= 32767, Bn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Nn = 6, Bn = null;
          return;
        }
      } else if (l = Qh(l, r, _a), l !== null) {
        Bn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Bn = r;
        return;
      }
      Bn = r = n;
    } while (r !== null);
    Nn === 0 && (Nn = 5);
  }
  function Ko(n, r, l) {
    var u = Ht, d = fr.transition;
    try {
      fr.transition = null, Ht = 1, Tg(n, r, l, u);
    } finally {
      fr.transition = d, Ht = u;
    }
    return null;
  }
  function Tg(n, r, l, u) {
    do
      $u();
    while (ul !== null);
    if (zt & 6) throw Error(h(327));
    l = n.finishedWork;
    var d = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(h(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var v = l.lanes | l.childLanes;
    if (kd(n, v), n === Kn && (Bn = Kn = null, dr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || zf || (zf = !0, om(Eo, function() {
      return $u(), null;
    })), v = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || v) {
      v = fr.transition, fr.transition = null;
      var E = Ht;
      Ht = 1;
      var w = zt;
      zt |= 4, Wo.current = null, Gh(n, l), _p(l, n), xu(No), Oa = !!Rs, No = Rs = null, n.current = l, bg(l), Ja(), zt = w, Ht = E, fr.transition = v;
    } else n.current = l;
    if (zf && (zf = !1, ul = n, rc = d), v = n.pendingLanes, v === 0 && (Gl = null), ds(l.stateNode), ia(n, ot()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) d = r[l], u(d.value, { componentStack: d.stack, digest: d.digest });
    if (Vu) throw Vu = !1, n = Go, Go = null, n;
    return rc & 1 && n.tag !== 0 && $u(), v = n.pendingLanes, v & 1 ? n === Bu ? ql++ : (ql = 0, Bu = n) : ql = 0, Oi(), null;
  }
  function $u() {
    if (ul !== null) {
      var n = mu(rc), r = fr.transition, l = Ht;
      try {
        if (fr.transition = null, Ht = 16 > n ? 16 : n, ul === null) var u = !1;
        else {
          if (n = ul, ul = null, rc = 0, zt & 6) throw Error(h(331));
          var d = zt;
          for (zt |= 4, De = n.current; De !== null; ) {
            var v = De, E = v.child;
            if (De.flags & 16) {
              var w = v.deletions;
              if (w !== null) {
                for (var D = 0; D < w.length; D++) {
                  var $ = w[D];
                  for (De = $; De !== null; ) {
                    var re = De;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ks(8, re, v);
                    }
                    var ie = re.child;
                    if (ie !== null) ie.return = re, De = ie;
                    else for (; De !== null; ) {
                      re = De;
                      var ne = re.sibling, we = re.return;
                      if (Of(re), re === $) {
                        De = null;
                        break;
                      }
                      if (ne !== null) {
                        ne.return = we, De = ne;
                        break;
                      }
                      De = we;
                    }
                  }
                }
                var ze = v.alternate;
                if (ze !== null) {
                  var Ae = ze.child;
                  if (Ae !== null) {
                    ze.child = null;
                    do {
                      var zn = Ae.sibling;
                      Ae.sibling = null, Ae = zn;
                    } while (Ae !== null);
                  }
                }
                De = v;
              }
            }
            if (v.subtreeFlags & 2064 && E !== null) E.return = v, De = E;
            else e: for (; De !== null; ) {
              if (v = De, v.flags & 2048) switch (v.tag) {
                case 0:
                case 11:
                case 15:
                  Ks(9, v, v.return);
              }
              var M = v.sibling;
              if (M !== null) {
                M.return = v.return, De = M;
                break e;
              }
              De = v.return;
            }
          }
          var N = n.current;
          for (De = N; De !== null; ) {
            E = De;
            var j = E.child;
            if (E.subtreeFlags & 2064 && j !== null) j.return = E, De = j;
            else e: for (E = N; De !== null; ) {
              if (w = De, w.flags & 2048) try {
                switch (w.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zs(9, w);
                }
              } catch (be) {
                mn(w, w.return, be);
              }
              if (w === E) {
                De = null;
                break e;
              }
              var ce = w.sibling;
              if (ce !== null) {
                ce.return = w.return, De = ce;
                break e;
              }
              De = w.return;
            }
          }
          if (zt = d, Oi(), Gr && typeof Gr.onPostCommitFiberRoot == "function") try {
            Gr.onPostCommitFiberRoot(Tl, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Ht = l, fr.transition = r;
      }
    }
    return !1;
  }
  function rm(n, r, l) {
    r = Yo(l, r), r = jh(n, r, 1), n = $l(n, r, 1), r = $n(), n !== null && (qi(n, 1, r), ia(n, r));
  }
  function mn(n, r, l) {
    if (n.tag === 3) rm(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        rm(r, n, l);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Gl === null || !Gl.has(u))) {
          n = Yo(l, n), n = pp(r, n, 1), r = $l(r, n, 1), n = $n(), r !== null && (qi(r, 1, n), ia(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function kg(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = $n(), n.pingedLanes |= n.suspendedLanes & l, Kn === n && (dr & l) === l && (Nn === 4 || Nn === 3 && (dr & 130023424) === dr && 500 > ot() - bp ? sl(n, 0) : Nf |= l), ia(n, r);
  }
  function am(n, r) {
    r === 0 && (n.mode & 1 ? (r = va, va <<= 1, !(va & 130023424) && (va = 4194304)) : r = 1);
    var l = $n();
    n = ya(n, r), n !== null && (qi(n, r, l), ia(n, l));
  }
  function Dg(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), am(n, l);
  }
  function im(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, d = n.memoizedState;
        d !== null && (l = d.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(h(314));
    }
    u !== null && u.delete(r), am(n, l);
  }
  var lm;
  lm = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || qn.current) Hn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Hn = !1, Gs(n, r, l);
      Hn = !!(n.flags & 131072);
    }
    else Hn = !1, hn && r.flags & 1048576 && Dh(r, rl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Fa(n, r), n = r.pendingProps;
        var d = La(r, Cn.current);
        Sn(r, l), d = Il(null, r, u, n, d, l);
        var v = ui();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Fn(u) ? (v = !0, Zr(r)) : v = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, ip(r), d.updater = bf, r.stateNode = d, d._reactInternals = r, $s(r, u, n, l), r = Qs(null, r, u, !0, v, l)) : (r.tag = 0, hn && v && Zc(r), cr(null, r, d, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Fa(n, r), n = r.pendingProps, d = u._init, u = d(u._payload), r.type = u, d = r.tag = Ng(u), n = si(u, n), d) {
            case 0:
              r = Hh(null, r, u, n, l);
              break e;
            case 1:
              r = Vh(null, r, u, n, l);
              break e;
            case 11:
              r = na(null, r, u, n, l);
              break e;
            case 14:
              r = Qo(null, r, u, si(u.type, n), l);
              break e;
          }
          throw Error(h(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : si(u, d), Hh(n, r, u, d, l);
      case 1:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : si(u, d), Vh(n, r, u, d, l);
      case 3:
        e: {
          if (Uu(r), n === null) throw Error(h(387));
          u = r.pendingProps, v = r.memoizedState, d = v.element, zh(n, r), Ns(r, u, null, l);
          var E = r.memoizedState;
          if (u = E.element, v.isDehydrated) if (v = { element: u, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = v, r.memoizedState = v, r.flags & 256) {
            d = Yo(Error(h(423)), r), r = Bh(n, r, u, l, d);
            break e;
          } else if (u !== d) {
            d = Yo(Error(h(424)), r), r = Bh(n, r, u, l, d);
            break e;
          } else for (ea = Ti(r.stateNode.containerInfo.firstChild), Jr = r, hn = !0, Aa = null, l = Ee(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Bl(), u === d) {
              r = ja(n, r, l);
              break e;
            }
            cr(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Mh(r), n === null && Zd(r), u = r.type, d = r.pendingProps, v = n !== null ? n.memoizedProps : null, E = d.children, Wc(u, d) ? E = null : v !== null && Wc(u, v) && (r.flags |= 32), hp(n, r), cr(n, r, E, l), r.child;
      case 6:
        return n === null && Zd(r), null;
      case 13:
        return Tf(n, r, l);
      case 4:
        return op(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = kn(r, null, u, l) : cr(n, r, u, l), r.child;
      case 11:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : si(u, d), na(n, r, u, d, l);
      case 7:
        return cr(n, r, r.pendingProps, l), r.child;
      case 8:
        return cr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return cr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, d = r.pendingProps, v = r.memoizedProps, E = d.value, Ve(ma, u._currentValue), u._currentValue = E, v !== null) if (ii(v.value, E)) {
            if (v.children === d.children && !qn.current) {
              r = ja(n, r, l);
              break e;
            }
          } else for (v = r.child, v !== null && (v.return = r); v !== null; ) {
            var w = v.dependencies;
            if (w !== null) {
              E = v.child;
              for (var D = w.firstContext; D !== null; ) {
                if (D.context === u) {
                  if (v.tag === 1) {
                    D = il(-1, l & -l), D.tag = 2;
                    var $ = v.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var re = $.pending;
                      re === null ? D.next = D : (D.next = re.next, re.next = D), $.pending = D;
                    }
                  }
                  v.lanes |= l, D = v.alternate, D !== null && (D.lanes |= l), np(
                    v.return,
                    l,
                    r
                  ), w.lanes |= l;
                  break;
                }
                D = D.next;
              }
            } else if (v.tag === 10) E = v.type === r.type ? null : v.child;
            else if (v.tag === 18) {
              if (E = v.return, E === null) throw Error(h(341));
              E.lanes |= l, w = E.alternate, w !== null && (w.lanes |= l), np(E, l, r), E = v.sibling;
            } else E = v.child;
            if (E !== null) E.return = v;
            else for (E = v; E !== null; ) {
              if (E === r) {
                E = null;
                break;
              }
              if (v = E.sibling, v !== null) {
                v.return = E.return, E = v;
                break;
              }
              E = E.return;
            }
            v = E;
          }
          cr(n, r, d.children, l), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, u = r.pendingProps.children, Sn(r, l), d = Ua(d), u = u(d), r.flags |= 1, cr(n, r, u, l), r.child;
      case 14:
        return u = r.type, d = si(u, r.pendingProps), d = si(u.type, d), Qo(n, r, u, d, l);
      case 15:
        return ut(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : si(u, d), Fa(n, r), r.tag = 1, Fn(u) ? (n = !0, Zr(r)) : n = !1, Sn(r, l), xf(r, u, d), $s(r, u, d, l), Qs(null, r, u, !0, n, l);
      case 19:
        return Mi(n, r, l);
      case 22:
        return Ys(n, r, l);
    }
    throw Error(h(156, r.tag));
  };
  function om(n, r) {
    return dn(n, r);
  }
  function Og(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, l, u) {
    return new Og(n, r, l, u);
  }
  function kp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Ng(n) {
    if (typeof n == "function") return kp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === nt) return 11;
      if (n === st) return 14;
    }
    return 2;
  }
  function Xl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function lc(n, r, l, u, d, v) {
    var E = 2;
    if (u = n, typeof n == "function") kp(n) && (E = 1);
    else if (typeof n == "string") E = 5;
    else e: switch (n) {
      case Pe:
        return cl(l.children, d, v, r);
      case Ct:
        E = 8, d |= 8;
        break;
      case Rt:
        return n = Ha(12, l, r, d | 2), n.elementType = Rt, n.lanes = v, n;
      case Me:
        return n = Ha(13, l, r, d), n.elementType = Me, n.lanes = v, n;
      case Tt:
        return n = Ha(19, l, r, d), n.elementType = Tt, n.lanes = v, n;
      case Ue:
        return Kl(l, d, v, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case dt:
            E = 10;
            break e;
          case Ft:
            E = 9;
            break e;
          case nt:
            E = 11;
            break e;
          case st:
            E = 14;
            break e;
          case Ot:
            E = 16, u = null;
            break e;
        }
        throw Error(h(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(E, l, r, d), r.elementType = n, r.type = u, r.lanes = v, r;
  }
  function cl(n, r, l, u) {
    return n = Ha(7, n, u, r), n.lanes = l, n;
  }
  function Kl(n, r, l, u) {
    return n = Ha(22, n, u, r), n.elementType = Ue, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Dp(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function Af(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function um(n, r, l, u, d) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = hu(0), this.expirationTimes = hu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hu(0), this.identifierPrefix = u, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function Uf(n, r, l, u, d, v, E, w, D) {
    return n = new um(n, r, l, w, D), r === 1 ? (r = 1, v === !0 && (r |= 8)) : r = 0, v = Ha(3, null, null, r), n.current = v, v.stateNode = n, v.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ip(v), n;
  }
  function zg(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ye, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function Op(n) {
    if (!n) return Xr;
    n = n._reactInternals;
    e: {
      if (lt(n) !== n || n.tag !== 1) throw Error(h(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Fn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(h(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Fn(l)) return Ds(n, l, r);
    }
    return r;
  }
  function sm(n, r, l, u, d, v, E, w, D) {
    return n = Uf(l, u, !0, n, d, v, E, w, D), n.context = Op(null), l = n.current, u = $n(), d = ji(l), v = il(u, d), v.callback = r ?? null, $l(l, v, d), n.current.lanes = d, qi(n, d, u), ia(n, u), n;
  }
  function Ff(n, r, l, u) {
    var d = r.current, v = $n(), E = ji(d);
    return l = Op(l), r.context === null ? r.context = l : r.pendingContext = l, r = il(v, E), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = $l(d, r, E), n !== null && (Fr(n, d, E, v), nf(n, d, E)), E;
  }
  function jf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Np(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Pf(n, r) {
    Np(n, r), (n = n.alternate) && Np(n, r);
  }
  var zp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Zl(n) {
    this._internalRoot = n;
  }
  Hf.prototype.render = Zl.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(h(409));
    Ff(n, r, null, null);
  }, Hf.prototype.unmount = Zl.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Xo(function() {
        Ff(null, n, null, null);
      }), r[tl] = null;
    }
  };
  function Hf(n) {
    this._internalRoot = n;
  }
  Hf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = et();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Gn.length && r !== 0 && r < Gn[l].priority; l++) ;
      Gn.splice(l, 0, n), l === 0 && hs(n);
    }
  };
  function Lp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Vf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function cm() {
  }
  function Lg(n, r, l, u, d) {
    if (d) {
      if (typeof u == "function") {
        var v = u;
        u = function() {
          var $ = jf(E);
          v.call($);
        };
      }
      var E = sm(r, u, n, 0, null, !1, !1, "", cm);
      return n._reactRootContainer = E, n[tl] = E.current, Ru(n.nodeType === 8 ? n.parentNode : n), Xo(), E;
    }
    for (; d = n.lastChild; ) n.removeChild(d);
    if (typeof u == "function") {
      var w = u;
      u = function() {
        var $ = jf(D);
        w.call($);
      };
    }
    var D = Uf(n, 0, !1, null, null, !1, !1, "", cm);
    return n._reactRootContainer = D, n[tl] = D.current, Ru(n.nodeType === 8 ? n.parentNode : n), Xo(function() {
      Ff(r, D, l, u);
    }), D;
  }
  function Bf(n, r, l, u, d) {
    var v = l._reactRootContainer;
    if (v) {
      var E = v;
      if (typeof d == "function") {
        var w = d;
        d = function() {
          var D = jf(E);
          w.call(D);
        };
      }
      Ff(r, E, n, d);
    } else E = Lg(l, r, n, d, u);
    return jf(E);
  }
  At = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ti(r.pendingLanes);
          l !== 0 && (Xi(r, l | 1), ia(r, ot()), !(zt & 6) && (Hu = ot() + 500, Oi()));
        }
        break;
      case 13:
        Xo(function() {
          var u = ya(n, 1);
          if (u !== null) {
            var d = $n();
            Fr(u, n, 1, d);
          }
        }), Pf(n, 1);
    }
  }, ps = function(n) {
    if (n.tag === 13) {
      var r = ya(n, 134217728);
      if (r !== null) {
        var l = $n();
        Fr(r, n, 134217728, l);
      }
      Pf(n, 134217728);
    }
  }, Ci = function(n) {
    if (n.tag === 13) {
      var r = ji(n), l = ya(n, r);
      if (l !== null) {
        var u = $n();
        Fr(l, n, r, u);
      }
      Pf(n, r);
    }
  }, et = function() {
    return Ht;
  }, yu = function(n, r) {
    var l = Ht;
    try {
      return Ht = n, r();
    } finally {
      Ht = l;
    }
  }, Kt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Wr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var d = Tn(u);
              if (!d) throw Error(h(90));
              kr(u), Wr(u, d);
            }
          }
        }
        break;
      case "textarea":
        qa(n, l);
        break;
      case "select":
        r = l.value, r != null && wn(n, !!l.multiple, r, !1);
    }
  }, go = wp, xl = Xo;
  var fm = { usingClientEntryPoint: !1, Events: [Be, li, Tn, Gi, yo, wp] }, oc = { findFiberByHostInstance: zo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mg = { bundleType: oc.bundleType, version: oc.version, rendererPackageName: oc.rendererPackageName, rendererConfig: oc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Te.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Rn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: oc.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var uc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!uc.isDisabled && uc.supportsFiber) try {
      Tl = uc.inject(Mg), Gr = uc;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fm, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lp(r)) throw Error(h(200));
    return zg(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!Lp(n)) throw Error(h(299));
    var l = !1, u = "", d = zp;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = Uf(n, 1, !1, null, null, l, !1, u, d), n[tl] = r.current, Ru(n.nodeType === 8 ? n.parentNode : n), new Zl(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(h(188)) : (n = Object.keys(n).join(","), Error(h(268, n)));
    return n = Rn(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Xo(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!Vf(r)) throw Error(h(200));
    return Bf(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!Lp(n)) throw Error(h(405));
    var u = l != null && l.hydratedSources || null, d = !1, v = "", E = zp;
    if (l != null && (l.unstable_strictMode === !0 && (d = !0), l.identifierPrefix !== void 0 && (v = l.identifierPrefix), l.onRecoverableError !== void 0 && (E = l.onRecoverableError)), r = sm(r, null, n, 1, l ?? null, d, !1, v, E), n[tl] = r.current, Ru(n), u) for (n = 0; n < u.length; n++) l = u[n], d = l._getVersion, d = d(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, d] : r.mutableSourceEagerHydrationData.push(
      l,
      d
    );
    return new Hf(r);
  }, Qa.render = function(n, r, l) {
    if (!Vf(r)) throw Error(h(200));
    return Bf(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!Vf(n)) throw Error(h(40));
    return n._reactRootContainer ? (Xo(function() {
      Bf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[tl] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = wp, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Vf(l)) throw Error(h(200));
    if (n == null || n._reactInternals === void 0) throw Error(h(38));
    return Bf(n, r, l, !1, u);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qb;
function uO() {
  return qb || (qb = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var f = Kv(), c = Rx(), h = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = !1;
    function b(e) {
      S = e;
    }
    function k(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        G("warn", e, a);
      }
    }
    function _(e) {
      if (!S) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        G("error", e, a);
      }
    }
    function G(e, t, a) {
      {
        var i = h.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(p) {
          return String(p);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var P = 0, A = 1, ee = 2, B = 3, K = 4, Z = 5, ae = 6, de = 7, ue = 8, Ne = 9, ve = 10, se = 11, Te = 12, me = 13, Ye = 14, Pe = 15, Ct = 16, Rt = 17, dt = 18, Ft = 19, nt = 21, Me = 22, Tt = 23, st = 24, Ot = 25, Ue = !0, fe = !1, He = !1, Se = !1, L = !1, q = !0, Ze = !0, Xe = !0, gt = !0, pt = /* @__PURE__ */ new Set(), ct = {}, vt = {};
    function St(e, t) {
      qt(e, t), qt(e + "Capture", t);
    }
    function qt(e, t) {
      ct[e] && _("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ct[e] = t;
      {
        var a = e.toLowerCase();
        vt[a] = e, e === "onDoubleClick" && (vt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        pt.add(t[i]);
    }
    var Mn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", kr = Object.prototype.hasOwnProperty;
    function xn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ir(e) {
      try {
        return Yn(e), !1;
      } catch {
        return !0;
      }
    }
    function Yn(e) {
      return "" + e;
    }
    function Qn(e, t) {
      if (ir(e))
        return _("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xn(e)), Yn(e);
    }
    function Wr(e) {
      if (ir(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xn(e)), Yn(e);
    }
    function yi(e, t) {
      if (ir(e))
        return _("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xn(e)), Yn(e);
    }
    function fa(e, t) {
      if (ir(e))
        return _("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, xn(e)), Yn(e);
    }
    function er(e) {
      if (ir(e))
        return _("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", xn(e)), Yn(e);
    }
    function wn(e) {
      if (ir(e))
        return _("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", xn(e)), Yn(e);
    }
    var Wn = 0, Er = 1, qa = 2, An = 3, Cr = 4, da = 5, Xa = 6, gi = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", he = gi + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Fe = new RegExp("^[" + gi + "][" + he + "]*$"), ht = {}, Qt = {};
    function ln(e) {
      return kr.call(Qt, e) ? !0 : kr.call(ht, e) ? !1 : Fe.test(e) ? (Qt[e] = !0, !0) : (ht[e] = !0, _("Invalid attribute name: `%s`", e), !1);
    }
    function yn(e, t, a) {
      return t !== null ? t.type === Wn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fn(e, t, a, i) {
      if (a !== null && a.type === Wn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function tr(e, t, a, i) {
      if (t === null || typeof t > "u" || fn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case An:
            return !t;
          case Cr:
            return t === !1;
          case da:
            return isNaN(t);
          case Xa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function on(e) {
      return Kt.hasOwnProperty(e) ? Kt[e] : null;
    }
    function Xt(e, t, a, i, o, s, p) {
      this.acceptsBooleans = t === qa || t === An || t === Cr, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = p;
    }
    var Kt = {}, pa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    pa.forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Wn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Kt[t] = new Xt(
        t,
        Er,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        qa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        qa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        An,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        An,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Cr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Xa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        da,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var br = /[\-\:]([a-z])/g, Ta = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, Ta);
      Kt[t] = new Xt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, Ta);
      Kt[t] = new Xt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(br, Ta);
      Kt[t] = new Xt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Gi = "xlinkHref";
    Kt[Gi] = new Xt(
      "xlinkHref",
      Er,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Kt[e] = new Xt(
        e,
        Er,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var yo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, go = !1;
    function xl(e) {
      !go && yo.test(e) && (go = !0, _("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function wl(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        Qn(a, t), i.sanitizeURL && xl("" + a);
        var s = i.attributeName, p = null;
        if (i.type === Cr) {
          if (e.hasAttribute(s)) {
            var m = e.getAttribute(s);
            return m === "" ? !0 : tr(t, a, i, !1) ? m : m === "" + a ? a : m;
          }
        } else if (e.hasAttribute(s)) {
          if (tr(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === An)
            return a;
          p = e.getAttribute(s);
        }
        return tr(t, a, i, !1) ? p === null ? a : p : p === "" + a ? a : p;
      }
    }
    function So(e, t, a, i) {
      {
        if (!ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return Qn(a, t), o === "" + a ? a : o;
      }
    }
    function Dr(e, t, a, i) {
      var o = on(t);
      if (!yn(t, o, i)) {
        if (tr(t, a, o, i) && (a = null), i || o === null) {
          if (ln(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Qn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var p = o.mustUseProperty;
        if (p) {
          var m = o.propertyName;
          if (a === null) {
            var y = o.type;
            e[m] = y === An ? !1 : "";
          } else
            e[m] = a;
          return;
        }
        var C = o.attributeName, x = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var z = o.type, O;
          z === An || z === Cr && a === !0 ? O = "" : (Qn(a, C), O = "" + a, o.sanitizeURL && xl(O.toString())), x ? e.setAttributeNS(x, C, O) : e.setAttribute(C, O);
        }
      }
    }
    var Or = Symbol.for("react.element"), lr = Symbol.for("react.portal"), Si = Symbol.for("react.fragment"), Ka = Symbol.for("react.strict_mode"), _i = Symbol.for("react.profiler"), Ei = Symbol.for("react.provider"), T = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), rt = Symbol.for("react.lazy"), bt = Symbol.for("react.scope"), _t = Symbol.for("react.debug_trace_mode"), Rn = Symbol.for("react.offscreen"), un = Symbol.for("react.legacy_hidden"), dn = Symbol.for("react.cache"), or = Symbol.for("react.tracing_marker"), Za = Symbol.iterator, Ja = "@@iterator";
    function ot(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Za && e[Za] || e[Ja];
      return typeof t == "function" ? t : null;
    }
    var ft = Object.assign, ei = 0, _o, Eo, Rl, fu, Tl, Gr, ds;
    function Nr() {
    }
    Nr.__reactDisabledLog = !0;
    function zc() {
      {
        if (ei === 0) {
          _o = console.log, Eo = console.info, Rl = console.warn, fu = console.error, Tl = console.group, Gr = console.groupCollapsed, ds = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Nr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ei++;
      }
    }
    function Lc() {
      {
        if (ei--, ei === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ft({}, e, {
              value: _o
            }),
            info: ft({}, e, {
              value: Eo
            }),
            warn: ft({}, e, {
              value: Rl
            }),
            error: ft({}, e, {
              value: fu
            }),
            group: ft({}, e, {
              value: Tl
            }),
            groupCollapsed: ft({}, e, {
              value: Gr
            }),
            groupEnd: ft({}, e, {
              value: ds
            })
          });
        }
        ei < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var du = h.ReactCurrentDispatcher, kl;
    function va(e, t, a) {
      {
        if (kl === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            kl = i && i[1] || "";
          }
        return `
` + kl + e;
      }
    }
    var ti = !1, ni;
    {
      var pu = typeof WeakMap == "function" ? WeakMap : Map;
      ni = new pu();
    }
    function Co(e, t) {
      if (!e || ti)
        return "";
      {
        var a = ni.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ti = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = du.current, du.current = null, zc();
      try {
        if (t) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (I) {
              i = I;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (I) {
              i = I;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            i = I;
          }
          e();
        }
      } catch (I) {
        if (I && i && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), y = i.stack.split(`
`), C = m.length - 1, x = y.length - 1; C >= 1 && x >= 0 && m[C] !== y[x]; )
            x--;
          for (; C >= 1 && x >= 0; C--, x--)
            if (m[C] !== y[x]) {
              if (C !== 1 || x !== 1)
                do
                  if (C--, x--, x < 0 || m[C] !== y[x]) {
                    var z = `
` + m[C].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && ni.set(e, z), z;
                  }
                while (C >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        ti = !1, du.current = s, Lc(), Error.prepareStackTrace = o;
      }
      var O = e ? e.displayName || e.name : "", H = O ? va(O) : "";
      return typeof e == "function" && ni.set(e, H), H;
    }
    function Dl(e, t, a) {
      return Co(e, !0);
    }
    function vu(e, t, a) {
      return Co(e, !1);
    }
    function hu(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function qi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Co(e, hu(e));
      if (typeof e == "string")
        return va(e);
      switch (e) {
        case _e:
          return va("Suspense");
        case Oe:
          return va("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case J:
            return vu(e.render);
          case lt:
            return qi(e.type, t, a);
          case rt: {
            var i = e, o = i._payload, s = i._init;
            try {
              return qi(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function kd(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case Z:
          return va(e.type);
        case Ct:
          return va("Lazy");
        case me:
          return va("Suspense");
        case Ft:
          return va("SuspenseList");
        case P:
        case ee:
        case Pe:
          return vu(e.type);
        case se:
          return vu(e.type.render);
        case A:
          return Dl(e.type);
        default:
          return "";
      }
    }
    function Xi(e) {
      try {
        var t = "", a = e;
        do
          t += kd(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Ht(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function mu(e) {
      return e.displayName || "Context";
    }
    function At(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Si:
          return "Fragment";
        case lr:
          return "Portal";
        case _i:
          return "Profiler";
        case Ka:
          return "StrictMode";
        case _e:
          return "Suspense";
        case Oe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var t = e;
            return mu(t) + ".Consumer";
          case Ei:
            var a = e;
            return mu(a._context) + ".Provider";
          case J:
            return Ht(e, e.render, "ForwardRef");
          case lt:
            var i = e.displayName || null;
            return i !== null ? i : At(e.type) || "Memo";
          case rt: {
            var o = e, s = o._payload, p = o._init;
            try {
              return At(p(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function ps(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Ci(e) {
      return e.displayName || "Context";
    }
    function et(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case st:
          return "Cache";
        case Ne:
          var i = a;
          return Ci(i) + ".Consumer";
        case ve:
          var o = a;
          return Ci(o._context) + ".Provider";
        case dt:
          return "DehydratedFragment";
        case se:
          return ps(a, a.render, "ForwardRef");
        case de:
          return "Fragment";
        case Z:
          return a;
        case K:
          return "Portal";
        case B:
          return "Root";
        case ae:
          return "Text";
        case Ct:
          return At(a);
        case ue:
          return a === Ka ? "StrictMode" : "Mode";
        case Me:
          return "Offscreen";
        case Te:
          return "Profiler";
        case nt:
          return "Scope";
        case me:
          return "Suspense";
        case Ft:
          return "SuspenseList";
        case Ot:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case A:
        case P:
        case Rt:
        case ee:
        case Ye:
        case Pe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var yu = h.ReactDebugCurrentFrame, ur = null, bi = !1;
    function zr() {
      {
        if (ur === null)
          return null;
        var e = ur._debugOwner;
        if (e !== null && typeof e < "u")
          return et(e);
      }
      return null;
    }
    function xi() {
      return ur === null ? "" : Xi(ur);
    }
    function pn() {
      yu.getCurrentStack = null, ur = null, bi = !1;
    }
    function Zt(e) {
      yu.getCurrentStack = e === null ? null : xi, ur = e, bi = !1;
    }
    function Ol() {
      return ur;
    }
    function Gn(e) {
      bi = e;
    }
    function Lr(e) {
      return "" + e;
    }
    function ka(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return wn(e), e;
        default:
          return "";
      }
    }
    var bo = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function vs(e, t) {
      bo[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || _("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || _("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function hs(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Nl(e) {
      return e._valueTracker;
    }
    function xo(e) {
      e._valueTracker = null;
    }
    function Dd(e) {
      var t = "";
      return e && (hs(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Da(e) {
      var t = hs(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      wn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(m) {
            wn(m), i = "" + m, s.call(this, m);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var p = {
          getValue: function() {
            return i;
          },
          setValue: function(m) {
            wn(m), i = "" + m;
          },
          stopTracking: function() {
            xo(e), delete e[t];
          }
        };
        return p;
      }
    }
    function ri(e) {
      Nl(e) || (e._valueTracker = Da(e));
    }
    function wi(e) {
      if (!e)
        return !1;
      var t = Nl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Dd(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Oa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var gu = !1, Su = !1, zl = !1, wo = !1;
    function _u(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Eu(e, t) {
      var a = e, i = t.checked, o = ft({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function ai(e, t) {
      vs("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Su && (_("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), Su = !0), t.value !== void 0 && t.defaultValue !== void 0 && !gu && (_("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component", t.type), gu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ka(t.value != null ? t.value : i),
        controlled: _u(t)
      };
    }
    function g(e, t) {
      var a = e, i = t.checked;
      i != null && Dr(a, "checked", i, !1);
    }
    function R(e, t) {
      var a = e;
      {
        var i = _u(t);
        !a._wrapperState.controlled && i && !wo && (_("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), wo = !0), a._wrapperState.controlled && !i && !zl && (_("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), zl = !0);
      }
      g(e, t);
      var o = ka(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Lr(o)) : a.value !== Lr(o) && (a.value = Lr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Qe(a, t.type, o) : t.hasOwnProperty("defaultValue") && Qe(a, t.type, ka(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function V(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var p = Lr(i._wrapperState.initialValue);
        a || p !== i.value && (i.value = p), i.defaultValue = p;
      }
      var m = i.name;
      m !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, m !== "" && (i.name = m);
    }
    function Y(e, t) {
      var a = e;
      R(a, t), oe(a, t);
    }
    function oe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Qn(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var p = o[s];
          if (!(p === e || p.form !== e.form)) {
            var m = km(p);
            if (!m)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            wi(p), R(p, m);
          }
        }
      }
    }
    function Qe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Oa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Lr(e._wrapperState.initialValue) : e.defaultValue !== Lr(a) && (e.defaultValue = Lr(a)));
    }
    var ge = !1, qe = !1, xt = !1;
    function Ut(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? f.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || qe || (qe = !0, _("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (xt || (xt = !0, _("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ge && (_("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ge = !0);
    }
    function sn(e, t) {
      t.value != null && e.setAttribute("value", Lr(ka(t.value)));
    }
    var Jt = Array.isArray;
    function mt(e) {
      return Jt(e);
    }
    var en;
    en = !1;
    function gn() {
      var e = zr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ll = ["value", "defaultValue"];
    function ms(e) {
      {
        vs("select", e);
        for (var t = 0; t < Ll.length; t++) {
          var a = Ll[t];
          if (e[a] != null) {
            var i = mt(e[a]);
            e.multiple && !i ? _("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, gn()) : !e.multiple && i && _("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, gn());
          }
        }
      }
    }
    function Ki(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, p = {}, m = 0; m < s.length; m++)
          p["$" + s[m]] = !0;
        for (var y = 0; y < o.length; y++) {
          var C = p.hasOwnProperty("$" + o[y].value);
          o[y].selected !== C && (o[y].selected = C), C && i && (o[y].defaultSelected = !0);
        }
      } else {
        for (var x = Lr(ka(a)), z = null, O = 0; O < o.length; O++) {
          if (o[O].value === x) {
            o[O].selected = !0, i && (o[O].defaultSelected = !0);
            return;
          }
          z === null && !o[O].disabled && (z = o[O]);
        }
        z !== null && (z.selected = !0);
      }
    }
    function ys(e, t) {
      return ft({}, t, {
        value: void 0
      });
    }
    function Ro(e, t) {
      var a = e;
      ms(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !en && (_("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), en = !0);
    }
    function Od(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ki(a, !!t.multiple, i, !1) : t.defaultValue != null && Ki(a, !!t.multiple, t.defaultValue, !0);
    }
    function Mc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Ki(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ki(a, !!t.multiple, t.defaultValue, !0) : Ki(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Nd(e, t) {
      var a = e, i = t.value;
      i != null && Ki(a, !!t.multiple, i, !1);
    }
    var Jv = !1;
    function zd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = ft({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Lr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Ld(e, t) {
      var a = e;
      vs("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Jv && (_("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", zr() || "A component"), Jv = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          _("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (mt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: ka(i)
      };
    }
    function eh(e, t) {
      var a = e, i = ka(t.value), o = ka(t.defaultValue);
      if (i != null) {
        var s = Lr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Lr(o));
    }
    function th(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function sg(e, t) {
      eh(e, t);
    }
    var Zi = "http://www.w3.org/1999/xhtml", Md = "http://www.w3.org/1998/Math/MathML", Ad = "http://www.w3.org/2000/svg";
    function Ud(e) {
      switch (e) {
        case "svg":
          return Ad;
        case "math":
          return Md;
        default:
          return Zi;
      }
    }
    function Fd(e, t) {
      return e == null || e === Zi ? Ud(t) : e === Ad && t === "foreignObject" ? Zi : e;
    }
    var nh = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, Ac, rh = nh(function(e, t) {
      if (e.namespaceURI === Ad && !("innerHTML" in e)) {
        Ac = Ac || document.createElement("div"), Ac.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Ac.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, Ji = 3, Un = 8, el = 9, jd = 11, Cu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Ji) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, gs = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Ss = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function ah(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ih = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ss).forEach(function(e) {
      ih.forEach(function(t) {
        Ss[ah(t, e)] = Ss[e];
      });
    });
    function Uc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Ss.hasOwnProperty(e) && Ss[e]) ? t + "px" : (fa(t, e), ("" + t).trim());
    }
    var lh = /([A-Z])/g, oh = /^ms-/;
    function bu(e) {
      return e.replace(lh, "-$1").toLowerCase().replace(oh, "-ms-");
    }
    var uh = function() {
    };
    {
      var cg = /^(?:webkit|moz|o)[A-Z]/, fg = /^-ms-/, sh = /-(.)/g, Pd = /;\s*$/, Ri = {}, To = {}, ch = !1, _s = !1, dg = function(e) {
        return e.replace(sh, function(t, a) {
          return a.toUpperCase();
        });
      }, fh = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, _(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          dg(e.replace(fg, "ms-"))
        ));
      }, Hd = function(e) {
        Ri.hasOwnProperty(e) && Ri[e] || (Ri[e] = !0, _("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Vd = function(e, t) {
        To.hasOwnProperty(t) && To[t] || (To[t] = !0, _(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Pd, "")));
      }, dh = function(e, t) {
        ch || (ch = !0, _("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ph = function(e, t) {
        _s || (_s = !0, _("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      uh = function(e, t) {
        e.indexOf("-") > -1 ? fh(e) : cg.test(e) ? Hd(e) : Pd.test(t) && Vd(e, t), typeof t == "number" && (isNaN(t) ? dh(e, t) : isFinite(t) || ph(e, t));
      };
    }
    var vh = uh;
    function pg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : bu(i)) + ":", t += Uc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function hh(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || vh(i, t[i]);
          var s = Uc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function vg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function mh(e) {
      var t = {};
      for (var a in e)
        for (var i = gs[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function hg(e, t) {
      {
        if (!t)
          return;
        var a = mh(e), i = mh(t), o = {};
        for (var s in a) {
          var p = a[s], m = i[s];
          if (m && p !== m) {
            var y = p + "," + m;
            if (o[y])
              continue;
            o[y] = !0, _("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", vg(e[p]) ? "Removing" : "Updating", p, m);
          }
        }
      }
    }
    var ii = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Es = ft({
      menuitem: !0
    }, ii), yh = "__html";
    function Fc(e, t) {
      if (t) {
        if (Es[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(yh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && _("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ml(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
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
    var Cs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, jc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, xu = {}, mg = new RegExp("^(aria)-[" + he + "]*$"), wu = new RegExp("^(aria)[A-Z][" + he + "]*$");
    function Bd(e, t) {
      {
        if (kr.call(xu, t) && xu[t])
          return !0;
        if (wu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = jc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return _("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), xu[t] = !0, !0;
          if (t !== i)
            return _("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), xu[t] = !0, !0;
        }
        if (mg.test(t)) {
          var o = t.toLowerCase(), s = jc.hasOwnProperty(o) ? o : null;
          if (s == null)
            return xu[t] = !0, !1;
          if (t !== s)
            return _("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), xu[t] = !0, !0;
        }
      }
      return !0;
    }
    function bs(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = Bd(e, i);
          o || a.push(i);
        }
        var s = a.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        a.length === 1 ? _("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && _("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function $d(e, t) {
      Ml(e, t) || bs(e, t);
    }
    var Id = !1;
    function Pc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Id && (Id = !0, e === "select" && t.multiple ? _("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : _("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ko = function() {
    };
    {
      var sr = {}, Yd = /^on./, Hc = /^on[^A-Z]/, gh = new RegExp("^(aria)-[" + he + "]*$"), Sh = new RegExp("^(aria)[A-Z][" + he + "]*$");
      ko = function(e, t, a, i) {
        if (kr.call(sr, t) && sr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return _("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), sr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, p = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var m = p.hasOwnProperty(o) ? p[o] : null;
          if (m != null)
            return _("Invalid event handler property `%s`. Did you mean `%s`?", t, m), sr[t] = !0, !0;
          if (Yd.test(t))
            return _("Unknown event handler property `%s`. It will be ignored.", t), sr[t] = !0, !0;
        } else if (Yd.test(t))
          return Hc.test(t) && _("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), sr[t] = !0, !0;
        if (gh.test(t) || Sh.test(t))
          return !0;
        if (o === "innerhtml")
          return _("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), sr[t] = !0, !0;
        if (o === "aria")
          return _("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), sr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return _("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), sr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return _("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), sr[t] = !0, !0;
        var y = on(t), C = y !== null && y.type === Wn;
        if (Cs.hasOwnProperty(o)) {
          var x = Cs[o];
          if (x !== t)
            return _("Invalid DOM property `%s`. Did you mean `%s`?", t, x), sr[t] = !0, !0;
        } else if (!C && t !== o)
          return _("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), sr[t] = !0, !0;
        return typeof a == "boolean" && fn(t, a, y, !1) ? (a ? _('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : _('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), sr[t] = !0, !0) : C ? !0 : fn(t, a, y, !1) ? (sr[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === An && (_("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), sr[t] = !0), !0);
      };
    }
    var _h = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = ko(e, o, t[o], a);
          s || i.push(o);
        }
        var p = i.map(function(m) {
          return "`" + m + "`";
        }).join(", ");
        i.length === 1 ? _("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : i.length > 1 && _("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
      }
    };
    function Eh(e, t, a) {
      Ml(e, t) || _h(e, t, a);
    }
    var Qd = 1, Vc = 2, Na = 4, Wd = Qd | Vc | Na, Do = null;
    function yg(e) {
      Do !== null && _("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Do = e;
    }
    function gg() {
      Do === null && _("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Do = null;
    }
    function xs(e) {
      return e === Do;
    }
    function Gd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Ji ? t.parentNode : t;
    }
    var Bc = null, Oo = null, Wt = null;
    function $c(e) {
      var t = Qu(e);
      if (t) {
        if (typeof Bc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = km(a);
          Bc(t.stateNode, t.type, i);
        }
      }
    }
    function Ic(e) {
      Bc = e;
    }
    function Ru(e) {
      Oo ? Wt ? Wt.push(e) : Wt = [e] : Oo = e;
    }
    function Ch() {
      return Oo !== null || Wt !== null;
    }
    function Yc() {
      if (Oo) {
        var e = Oo, t = Wt;
        if (Oo = null, Wt = null, $c(e), t)
          for (var a = 0; a < t.length; a++)
            $c(t[a]);
      }
    }
    var Tu = function(e, t) {
      return e(t);
    }, ws = function() {
    }, Al = !1;
    function bh() {
      var e = Ch();
      e && (ws(), Yc());
    }
    function xh(e, t, a) {
      if (Al)
        return e(t, a);
      Al = !0;
      try {
        return Tu(e, t, a);
      } finally {
        Al = !1, bh();
      }
    }
    function Sg(e, t, a) {
      Tu = e, ws = a;
    }
    function wh(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Qc(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && wh(t));
        default:
          return !1;
      }
    }
    function Ul(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = km(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Qc(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var Rs = !1;
    if (Mn)
      try {
        var No = {};
        Object.defineProperty(No, "passive", {
          get: function() {
            Rs = !0;
          }
        }), window.addEventListener("test", No, No), window.removeEventListener("test", No, No);
      } catch {
        Rs = !1;
      }
    function Wc(e, t, a, i, o, s, p, m, y) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (x) {
        this.onError(x);
      }
    }
    var Gc = Wc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var qd = document.createElement("react");
      Gc = function(t, a, i, o, s, p, m, y, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var x = document.createEvent("Event"), z = !1, O = !0, H = window.event, I = Object.getOwnPropertyDescriptor(window, "event");
        function Q() {
          qd.removeEventListener(W, We, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = H);
        }
        var Ce = Array.prototype.slice.call(arguments, 3);
        function We() {
          z = !0, Q(), a.apply(i, Ce), O = !1;
        }
        var je, Mt = !1, kt = !1;
        function U(F) {
          if (je = F.error, Mt = !0, je === null && F.colno === 0 && F.lineno === 0 && (kt = !0), F.defaultPrevented && je != null && typeof je == "object")
            try {
              je._suppressLogging = !0;
            } catch {
            }
        }
        var W = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", U), qd.addEventListener(W, We, !1), x.initEvent(W, !1, !1), qd.dispatchEvent(x), I && Object.defineProperty(window, "event", I), z && O && (Mt ? kt && (je = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : je = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(je)), window.removeEventListener("error", U), !z)
          return Q(), Wc.apply(this, arguments);
      };
    }
    var Rh = Gc, ku = !1, qc = null, Du = !1, Ti = null, Th = {
      onError: function(e) {
        ku = !0, qc = e;
      }
    };
    function Fl(e, t, a, i, o, s, p, m, y) {
      ku = !1, qc = null, Rh.apply(Th, arguments);
    }
    function ki(e, t, a, i, o, s, p, m, y) {
      if (Fl.apply(this, arguments), ku) {
        var C = ks();
        Du || (Du = !0, Ti = C);
      }
    }
    function Ts() {
      if (Du) {
        var e = Ti;
        throw Du = !1, Ti = null, e;
      }
    }
    function tl() {
      return ku;
    }
    function ks() {
      if (ku) {
        var e = qc;
        return ku = !1, qc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ou(e) {
      return e._reactInternals;
    }
    function _g(e) {
      return e._reactInternals !== void 0;
    }
    function zo(e, t) {
      e._reactInternals = t;
    }
    var Be = (
      /*                      */
      0
    ), li = (
      /*                */
      1
    ), Tn = (
      /*                    */
      2
    ), Nt = (
      /*                       */
      4
    ), za = (
      /*                */
      16
    ), oi = (
      /*                 */
      32
    ), cn = (
      /*                     */
      64
    ), Ve = (
      /*                   */
      128
    ), Xr = (
      /*            */
      256
    ), Cn = (
      /*                          */
      512
    ), qn = (
      /*                     */
      1024
    ), Kr = (
      /*                      */
      2048
    ), La = (
      /*                    */
      4096
    ), Fn = (
      /*                   */
      8192
    ), Nu = (
      /*             */
      16384
    ), kh = (
      /*               */
      32767
    ), Ds = (
      /*                   */
      32768
    ), Zr = (
      /*                */
      65536
    ), Xc = (
      /* */
      131072
    ), Di = (
      /*                       */
      1048576
    ), zu = (
      /*                    */
      2097152
    ), nl = (
      /*                 */
      4194304
    ), Kc = (
      /*                */
      8388608
    ), jl = (
      /*               */
      16777216
    ), Oi = (
      /*              */
      33554432
    ), Pl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Nt | qn | 0
    ), Hl = Tn | Nt | za | oi | Cn | La | Fn, Vl = Nt | cn | Cn | Fn, rl = Kr | za, jn = nl | Kc | zu, Ma = h.ReactCurrentOwner;
    function ha(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Tn | La)) !== Be && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === B ? a : null;
    }
    function Ni(e) {
      if (e.tag === me) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function zi(e) {
      return e.tag === B ? e.stateNode.containerInfo : null;
    }
    function Lo(e) {
      return ha(e) === e;
    }
    function Dh(e) {
      {
        var t = Ma.current;
        if (t !== null && t.tag === A) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || _("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", et(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = Ou(e);
      return o ? ha(o) === o : !1;
    }
    function Zc(e) {
      if (ha(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Jc(e) {
      var t = e.alternate;
      if (!t) {
        var a = ha(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var p = s.alternate;
        if (p === null) {
          var m = s.return;
          if (m !== null) {
            i = o = m;
            continue;
          }
          break;
        }
        if (s.child === p.child) {
          for (var y = s.child; y; ) {
            if (y === i)
              return Zc(s), e;
            if (y === o)
              return Zc(s), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = p;
        else {
          for (var C = !1, x = s.child; x; ) {
            if (x === i) {
              C = !0, i = s, o = p;
              break;
            }
            if (x === o) {
              C = !0, o = s, i = p;
              break;
            }
            x = x.sibling;
          }
          if (!C) {
            for (x = p.child; x; ) {
              if (x === i) {
                C = !0, i = p, o = s;
                break;
              }
              if (x === o) {
                C = !0, o = p, i = s;
                break;
              }
              x = x.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== B)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Jr(e) {
      var t = Jc(e);
      return t !== null ? ea(t) : null;
    }
    function ea(e) {
      if (e.tag === Z || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ea(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function hn(e) {
      var t = Jc(e);
      return t !== null ? Aa(t) : null;
    }
    function Aa(e) {
      if (e.tag === Z || e.tag === ae)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== K) {
          var a = Aa(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Xd = c.unstable_scheduleCallback, Oh = c.unstable_cancelCallback, Kd = c.unstable_shouldYield, Zd = c.unstable_requestPaint, Xn = c.unstable_now, ef = c.unstable_getCurrentPriorityLevel, Os = c.unstable_ImmediatePriority, Bl = c.unstable_UserBlockingPriority, al = c.unstable_NormalPriority, Eg = c.unstable_LowPriority, Mo = c.unstable_IdlePriority, tf = c.unstable_yieldValue, Nh = c.unstable_setDisableYieldValue, Ao = null, kn = null, Ee = null, ma = !1, ta = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Lu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return _("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ze && (e = ft({}, e, {
          getLaneLabelMap: Uo,
          injectProfilingHooks: Ua
        })), Ao = t.inject(e), kn = t;
      } catch (a) {
        _("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Jd(e, t) {
      if (kn && typeof kn.onScheduleFiberRoot == "function")
        try {
          kn.onScheduleFiberRoot(Ao, e, t);
        } catch (a) {
          ma || (ma = !0, _("React instrumentation encountered an error: %s", a));
        }
    }
    function ep(e, t) {
      if (kn && typeof kn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ve) === Ve;
          if (Xe) {
            var i;
            switch (t) {
              case Mr:
                i = Os;
                break;
              case Mi:
                i = Bl;
                break;
              case Fa:
                i = al;
                break;
              case ja:
                i = Mo;
                break;
              default:
                i = al;
                break;
            }
            kn.onCommitFiberRoot(Ao, e, i, a);
          }
        } catch (o) {
          ma || (ma = !0, _("React instrumentation encountered an error: %s", o));
        }
    }
    function tp(e) {
      if (kn && typeof kn.onPostCommitFiberRoot == "function")
        try {
          kn.onPostCommitFiberRoot(Ao, e);
        } catch (t) {
          ma || (ma = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function np(e) {
      if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
          kn.onCommitFiberUnmount(Ao, e);
        } catch (t) {
          ma || (ma = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function Sn(e) {
      if (typeof tf == "function" && (Nh(e), b(e)), kn && typeof kn.setStrictMode == "function")
        try {
          kn.setStrictMode(Ao, e);
        } catch (t) {
          ma || (ma = !0, _("React instrumentation encountered an error: %s", t));
        }
    }
    function Ua(e) {
      Ee = e;
    }
    function Uo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Po; a++) {
          var i = Ah(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function rp(e) {
      Ee !== null && typeof Ee.markCommitStarted == "function" && Ee.markCommitStarted(e);
    }
    function ap() {
      Ee !== null && typeof Ee.markCommitStopped == "function" && Ee.markCommitStopped();
    }
    function ya(e) {
      Ee !== null && typeof Ee.markComponentRenderStarted == "function" && Ee.markComponentRenderStarted(e);
    }
    function ga() {
      Ee !== null && typeof Ee.markComponentRenderStopped == "function" && Ee.markComponentRenderStopped();
    }
    function ip(e) {
      Ee !== null && typeof Ee.markComponentPassiveEffectMountStarted == "function" && Ee.markComponentPassiveEffectMountStarted(e);
    }
    function zh() {
      Ee !== null && typeof Ee.markComponentPassiveEffectMountStopped == "function" && Ee.markComponentPassiveEffectMountStopped();
    }
    function il(e) {
      Ee !== null && typeof Ee.markComponentPassiveEffectUnmountStarted == "function" && Ee.markComponentPassiveEffectUnmountStarted(e);
    }
    function $l() {
      Ee !== null && typeof Ee.markComponentPassiveEffectUnmountStopped == "function" && Ee.markComponentPassiveEffectUnmountStopped();
    }
    function nf(e) {
      Ee !== null && typeof Ee.markComponentLayoutEffectMountStarted == "function" && Ee.markComponentLayoutEffectMountStarted(e);
    }
    function Lh() {
      Ee !== null && typeof Ee.markComponentLayoutEffectMountStopped == "function" && Ee.markComponentLayoutEffectMountStopped();
    }
    function Ns(e) {
      Ee !== null && typeof Ee.markComponentLayoutEffectUnmountStarted == "function" && Ee.markComponentLayoutEffectUnmountStarted(e);
    }
    function lp() {
      Ee !== null && typeof Ee.markComponentLayoutEffectUnmountStopped == "function" && Ee.markComponentLayoutEffectUnmountStopped();
    }
    function zs(e, t, a) {
      Ee !== null && typeof Ee.markComponentErrored == "function" && Ee.markComponentErrored(e, t, a);
    }
    function Li(e, t, a) {
      Ee !== null && typeof Ee.markComponentSuspended == "function" && Ee.markComponentSuspended(e, t, a);
    }
    function Ls(e) {
      Ee !== null && typeof Ee.markLayoutEffectsStarted == "function" && Ee.markLayoutEffectsStarted(e);
    }
    function Ms() {
      Ee !== null && typeof Ee.markLayoutEffectsStopped == "function" && Ee.markLayoutEffectsStopped();
    }
    function Fo(e) {
      Ee !== null && typeof Ee.markPassiveEffectsStarted == "function" && Ee.markPassiveEffectsStarted(e);
    }
    function op() {
      Ee !== null && typeof Ee.markPassiveEffectsStopped == "function" && Ee.markPassiveEffectsStopped();
    }
    function jo(e) {
      Ee !== null && typeof Ee.markRenderStarted == "function" && Ee.markRenderStarted(e);
    }
    function Mh() {
      Ee !== null && typeof Ee.markRenderYielded == "function" && Ee.markRenderYielded();
    }
    function rf() {
      Ee !== null && typeof Ee.markRenderStopped == "function" && Ee.markRenderStopped();
    }
    function _n(e) {
      Ee !== null && typeof Ee.markRenderScheduled == "function" && Ee.markRenderScheduled(e);
    }
    function af(e, t) {
      Ee !== null && typeof Ee.markForceUpdateScheduled == "function" && Ee.markForceUpdateScheduled(e, t);
    }
    function As(e, t) {
      Ee !== null && typeof Ee.markStateUpdateScheduled == "function" && Ee.markStateUpdateScheduled(e, t);
    }
    var $e = (
      /*                         */
      0
    ), Et = (
      /*                 */
      1
    ), Vt = (
      /*                    */
      2
    ), tn = (
      /*               */
      8
    ), Bt = (
      /*              */
      16
    ), Pn = Math.clz32 ? Math.clz32 : Us, nr = Math.log, lf = Math.LN2;
    function Us(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (nr(t) / lf | 0) | 0;
    }
    var Po = 31, te = (
      /*                        */
      0
    ), jt = (
      /*                          */
      0
    ), Ke = (
      /*                        */
      1
    ), Il = (
      /*    */
      2
    ), ui = (
      /*             */
      4
    ), xr = (
      /*            */
      8
    ), Dn = (
      /*                     */
      16
    ), ll = (
      /*                */
      32
    ), Yl = (
      /*                       */
      4194240
    ), Ho = (
      /*                        */
      64
    ), of = (
      /*                        */
      128
    ), uf = (
      /*                        */
      256
    ), sf = (
      /*                        */
      512
    ), cf = (
      /*                        */
      1024
    ), ff = (
      /*                        */
      2048
    ), df = (
      /*                        */
      4096
    ), pf = (
      /*                        */
      8192
    ), vf = (
      /*                        */
      16384
    ), Vo = (
      /*                       */
      32768
    ), hf = (
      /*                       */
      65536
    ), Mu = (
      /*                       */
      131072
    ), Au = (
      /*                       */
      262144
    ), mf = (
      /*                       */
      524288
    ), Fs = (
      /*                       */
      1048576
    ), yf = (
      /*                       */
      2097152
    ), js = (
      /*                            */
      130023424
    ), Bo = (
      /*                             */
      4194304
    ), gf = (
      /*                             */
      8388608
    ), Ps = (
      /*                             */
      16777216
    ), Sf = (
      /*                             */
      33554432
    ), _f = (
      /*                             */
      67108864
    ), up = Bo, Hs = (
      /*          */
      134217728
    ), sp = (
      /*                          */
      268435455
    ), Vs = (
      /*               */
      268435456
    ), $o = (
      /*                        */
      536870912
    ), Sa = (
      /*                   */
      1073741824
    );
    function Ah(e) {
      {
        if (e & Ke)
          return "Sync";
        if (e & Il)
          return "InputContinuousHydration";
        if (e & ui)
          return "InputContinuous";
        if (e & xr)
          return "DefaultHydration";
        if (e & Dn)
          return "Default";
        if (e & ll)
          return "TransitionHydration";
        if (e & Yl)
          return "Transition";
        if (e & js)
          return "Retry";
        if (e & Hs)
          return "SelectiveHydration";
        if (e & Vs)
          return "IdleHydration";
        if (e & $o)
          return "Idle";
        if (e & Sa)
          return "Offscreen";
      }
    }
    var an = -1, Io = Ho, Ef = Bo;
    function Bs(e) {
      switch (Ql(e)) {
        case Ke:
          return Ke;
        case Il:
          return Il;
        case ui:
          return ui;
        case xr:
          return xr;
        case Dn:
          return Dn;
        case ll:
          return ll;
        case Ho:
        case of:
        case uf:
        case sf:
        case cf:
        case ff:
        case df:
        case pf:
        case vf:
        case Vo:
        case hf:
        case Mu:
        case Au:
        case mf:
        case Fs:
        case yf:
          return e & Yl;
        case Bo:
        case gf:
        case Ps:
        case Sf:
        case _f:
          return e & js;
        case Hs:
          return Hs;
        case Vs:
          return Vs;
        case $o:
          return $o;
        case Sa:
          return Sa;
        default:
          return _("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Cf(e, t) {
      var a = e.pendingLanes;
      if (a === te)
        return te;
      var i = te, o = e.suspendedLanes, s = e.pingedLanes, p = a & sp;
      if (p !== te) {
        var m = p & ~o;
        if (m !== te)
          i = Bs(m);
        else {
          var y = p & s;
          y !== te && (i = Bs(y));
        }
      } else {
        var C = a & ~o;
        C !== te ? i = Bs(C) : s !== te && (i = Bs(s));
      }
      if (i === te)
        return te;
      if (t !== te && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === te) {
        var x = Ql(i), z = Ql(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          x >= z || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          x === Dn && (z & Yl) !== te
        )
          return t;
      }
      (i & ui) !== te && (i |= a & Dn);
      var O = e.entangledLanes;
      if (O !== te)
        for (var H = e.entanglements, I = i & O; I > 0; ) {
          var Q = Hn(I), Ce = 1 << Q;
          i |= H[Q], I &= ~Ce;
        }
      return i;
    }
    function si(e, t) {
      for (var a = e.eventTimes, i = an; t > 0; ) {
        var o = Hn(t), s = 1 << o, p = a[o];
        p > i && (i = p), t &= ~s;
      }
      return i;
    }
    function cp(e, t) {
      switch (e) {
        case Ke:
        case Il:
        case ui:
          return t + 250;
        case xr:
        case Dn:
        case ll:
        case Ho:
        case of:
        case uf:
        case sf:
        case cf:
        case ff:
        case df:
        case pf:
        case vf:
        case Vo:
        case hf:
        case Mu:
        case Au:
        case mf:
        case Fs:
        case yf:
          return t + 5e3;
        case Bo:
        case gf:
        case Ps:
        case Sf:
        case _f:
          return an;
        case Hs:
        case Vs:
        case $o:
        case Sa:
          return an;
        default:
          return _("Should have found matching lanes. This is a bug in React."), an;
      }
    }
    function bf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, p = a; p > 0; ) {
        var m = Hn(p), y = 1 << m, C = s[m];
        C === an ? ((y & i) === te || (y & o) !== te) && (s[m] = cp(y, t)) : C <= t && (e.expiredLanes |= y), p &= ~y;
      }
    }
    function Uh(e) {
      return Bs(e.pendingLanes);
    }
    function xf(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== te ? t : t & Sa ? Sa : te;
    }
    function Fh(e) {
      return (e & Ke) !== te;
    }
    function $s(e) {
      return (e & sp) !== te;
    }
    function Yo(e) {
      return (e & js) === e;
    }
    function fp(e) {
      var t = Ke | ui | Dn;
      return (e & t) === te;
    }
    function dp(e) {
      return (e & Yl) === e;
    }
    function wf(e, t) {
      var a = Il | ui | xr | Dn;
      return (t & a) !== te;
    }
    function jh(e, t) {
      return (t & e.expiredLanes) !== te;
    }
    function pp(e) {
      return (e & Yl) !== te;
    }
    function vp() {
      var e = Io;
      return Io <<= 1, (Io & Yl) === te && (Io = Ho), e;
    }
    function Ph() {
      var e = Ef;
      return Ef <<= 1, (Ef & js) === te && (Ef = Bo), e;
    }
    function Ql(e) {
      return e & -e;
    }
    function Is(e) {
      return Ql(e);
    }
    function Hn(e) {
      return 31 - Pn(e);
    }
    function cr(e) {
      return Hn(e);
    }
    function na(e, t) {
      return (e & t) !== te;
    }
    function Qo(e, t) {
      return (e & t) === t;
    }
    function ut(e, t) {
      return e | t;
    }
    function Ys(e, t) {
      return e & ~t;
    }
    function hp(e, t) {
      return e & t;
    }
    function Hh(e) {
      return e;
    }
    function Vh(e, t) {
      return e !== jt && e < t ? e : t;
    }
    function Qs(e) {
      for (var t = [], a = 0; a < Po; a++)
        t.push(e);
      return t;
    }
    function Uu(e, t, a) {
      e.pendingLanes |= t, t !== $o && (e.suspendedLanes = te, e.pingedLanes = te);
      var i = e.eventTimes, o = cr(t);
      i[o] = a;
    }
    function Bh(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Hn(i), s = 1 << o;
        a[o] = an, i &= ~s;
      }
    }
    function Rf(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function mp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = te, e.pingedLanes = te, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, p = a; p > 0; ) {
        var m = Hn(p), y = 1 << m;
        i[m] = te, o[m] = an, s[m] = an, p &= ~y;
      }
    }
    function Tf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Hn(o), p = 1 << s;
        // Is this one of the newly entangled lanes?
        p & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~p;
      }
    }
    function yp(e, t) {
      var a = Ql(t), i;
      switch (a) {
        case ui:
          i = Il;
          break;
        case Dn:
          i = xr;
          break;
        case Ho:
        case of:
        case uf:
        case sf:
        case cf:
        case ff:
        case df:
        case pf:
        case vf:
        case Vo:
        case hf:
        case Mu:
        case Au:
        case mf:
        case Fs:
        case yf:
        case Bo:
        case gf:
        case Ps:
        case Sf:
        case _f:
          i = ll;
          break;
        case $o:
          i = Vs;
          break;
        default:
          i = jt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== jt ? jt : i;
    }
    function Ws(e, t, a) {
      if (ta)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = cr(a), s = 1 << o, p = i[o];
          p.add(t), a &= ~s;
        }
    }
    function $h(e, t) {
      if (ta)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = cr(t), s = 1 << o, p = a[o];
          p.size > 0 && (p.forEach(function(m) {
            var y = m.alternate;
            (y === null || !i.has(y)) && i.add(m);
          }), p.clear()), t &= ~s;
        }
    }
    function gp(e, t) {
      return null;
    }
    var Mr = Ke, Mi = ui, Fa = Dn, ja = $o, Gs = jt;
    function Pa() {
      return Gs;
    }
    function Vn(e) {
      Gs = e;
    }
    function Ih(e, t) {
      var a = Gs;
      try {
        return Gs = e, t();
      } finally {
        Gs = a;
      }
    }
    function Yh(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function qs(e, t) {
      return e > t ? e : t;
    }
    function rr(e, t) {
      return e !== 0 && e < t;
    }
    function Qh(e) {
      var t = Ql(e);
      return rr(Mr, t) ? rr(Mi, t) ? $s(t) ? Fa : ja : Mi : Mr;
    }
    function kf(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Xs;
    function wr(e) {
      Xs = e;
    }
    function Cg(e) {
      Xs(e);
    }
    var De;
    function Fu(e) {
      De = e;
    }
    var Df;
    function Wh(e) {
      Df = e;
    }
    var Gh;
    function Ks(e) {
      Gh = e;
    }
    var Zs;
    function Sp(e) {
      Zs = e;
    }
    var Of = !1, Js = [], ol = null, Ai = null, Ui = null, On = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Map(), Ur = [], qh = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Xh(e) {
      return qh.indexOf(e) > -1;
    }
    function ci(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function _p(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ol = null;
          break;
        case "dragenter":
        case "dragleave":
          Ai = null;
          break;
        case "mouseover":
        case "mouseout":
          Ui = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          On.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Ar.delete(i);
          break;
        }
      }
    }
    function ra(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var p = ci(t, a, i, o, s);
        if (t !== null) {
          var m = Qu(t);
          m !== null && De(m);
        }
        return p;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return o !== null && y.indexOf(o) === -1 && y.push(o), e;
    }
    function bg(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return ol = ra(ol, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var p = o;
          return Ai = ra(Ai, e, t, a, i, p), !0;
        }
        case "mouseover": {
          var m = o;
          return Ui = ra(Ui, e, t, a, i, m), !0;
        }
        case "pointerover": {
          var y = o, C = y.pointerId;
          return On.set(C, ra(On.get(C) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var x = o, z = x.pointerId;
          return Ar.set(z, ra(Ar.get(z) || null, e, t, a, i, x)), !0;
        }
      }
      return !1;
    }
    function Ep(e) {
      var t = fc(e.target);
      if (t !== null) {
        var a = ha(t);
        if (a !== null) {
          var i = a.tag;
          if (i === me) {
            var o = Ni(a);
            if (o !== null) {
              e.blockedOn = o, Zs(e.priority, function() {
                Df(a);
              });
              return;
            }
          } else if (i === B) {
            var s = a.stateNode;
            if (kf(s)) {
              e.blockedOn = zi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Kh(e) {
      for (var t = Gh(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ur.length && rr(t, Ur[i].priority); i++)
        ;
      Ur.splice(i, 0, a), i === 0 && Ep(a);
    }
    function ec(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Pu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          yg(s), o.target.dispatchEvent(s), gg();
        } else {
          var p = Qu(i);
          return p !== null && De(p), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Cp(e, t, a) {
      ec(e) && a.delete(t);
    }
    function xg() {
      Of = !1, ol !== null && ec(ol) && (ol = null), Ai !== null && ec(Ai) && (Ai = null), Ui !== null && ec(Ui) && (Ui = null), On.forEach(Cp), Ar.forEach(Cp);
    }
    function Wl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Of || (Of = !0, c.unstable_scheduleCallback(c.unstable_NormalPriority, xg)));
    }
    function Wo(e) {
      if (Js.length > 0) {
        Wl(Js[0], e);
        for (var t = 1; t < Js.length; t++) {
          var a = Js[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ol !== null && Wl(ol, e), Ai !== null && Wl(Ai, e), Ui !== null && Wl(Ui, e);
      var i = function(m) {
        return Wl(m, e);
      };
      On.forEach(i), Ar.forEach(i);
      for (var o = 0; o < Ur.length; o++) {
        var s = Ur[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ur.length > 0; ) {
        var p = Ur[0];
        if (p.blockedOn !== null)
          break;
        Ep(p), p.blockedOn === null && Ur.shift();
      }
    }
    var fr = h.ReactCurrentBatchConfig, zt = !0;
    function Kn(e) {
      zt = !!e;
    }
    function Bn() {
      return zt;
    }
    function dr(e, t, a) {
      var i = Nf(t), o;
      switch (i) {
        case Mr:
          o = _a;
          break;
        case Mi:
          o = ju;
          break;
        case Fa:
        default:
          o = Nn;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function _a(e, t, a, i) {
      var o = Pa(), s = fr.transition;
      fr.transition = null;
      try {
        Vn(Mr), Nn(e, t, a, i);
      } finally {
        Vn(o), fr.transition = s;
      }
    }
    function ju(e, t, a, i) {
      var o = Pa(), s = fr.transition;
      fr.transition = null;
      try {
        Vn(Mi), Nn(e, t, a, i);
      } finally {
        Vn(o), fr.transition = s;
      }
    }
    function Nn(e, t, a, i) {
      zt && tc(e, t, a, i);
    }
    function tc(e, t, a, i) {
      var o = Pu(e, t, a, i);
      if (o === null) {
        Bg(e, t, i, Fi, a), _p(e, i);
        return;
      }
      if (bg(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (_p(e, i), t & Na && Xh(e)) {
        for (; o !== null; ) {
          var s = Qu(o);
          s !== null && Cg(s);
          var p = Pu(e, t, a, i);
          if (p === null && Bg(e, t, i, Fi, a), p === o)
            break;
          o = p;
        }
        o !== null && i.stopPropagation();
        return;
      }
      Bg(e, t, i, null, a);
    }
    var Fi = null;
    function Pu(e, t, a, i) {
      Fi = null;
      var o = Gd(i), s = fc(o);
      if (s !== null) {
        var p = ha(s);
        if (p === null)
          s = null;
        else {
          var m = p.tag;
          if (m === me) {
            var y = Ni(p);
            if (y !== null)
              return y;
            s = null;
          } else if (m === B) {
            var C = p.stateNode;
            if (kf(C))
              return zi(p);
            s = null;
          } else p !== s && (s = null);
        }
      }
      return Fi = s, null;
    }
    function Nf(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
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
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Mr;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Mi;
        case "message": {
          var t = ef();
          switch (t) {
            case Os:
              return Mr;
            case Bl:
              return Mi;
            case al:
            case Eg:
              return Fa;
            case Mo:
              return ja;
            default:
              return Fa;
          }
        }
        default:
          return Fa;
      }
    }
    function nc(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function aa(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function bp(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Hu(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ea = null, Vu = null, Go = null;
    function Gl(e) {
      return Ea = e, Vu = rc(), !0;
    }
    function zf() {
      Ea = null, Vu = null, Go = null;
    }
    function ul() {
      if (Go)
        return Go;
      var e, t = Vu, a = t.length, i, o = rc(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var p = a - e;
      for (i = 1; i <= p && t[a - i] === o[s - i]; i++)
        ;
      var m = i > 1 ? 1 - i : void 0;
      return Go = o.slice(e, m), Go;
    }
    function rc() {
      return "value" in Ea ? Ea.value : Ea.textContent;
    }
    function ql(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Bu() {
      return !0;
    }
    function ac() {
      return !1;
    }
    function Rr(e) {
      function t(a, i, o, s, p) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = p, this.currentTarget = null;
        for (var m in e)
          if (e.hasOwnProperty(m)) {
            var y = e[m];
            y ? this[m] = y(s) : this[m] = s[m];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Bu : this.isDefaultPrevented = ac, this.isPropagationStopped = ac, this;
      }
      return ft(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Bu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Bu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Bu
      }), t;
    }
    var $n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ji = Rr($n), Fr = ft({}, $n, {
      view: 0,
      detail: 0
    }), ia = Rr(Fr), Lf, ic, qo;
    function wg(e) {
      e !== qo && (qo && e.type === "mousemove" ? (Lf = e.screenX - qo.screenX, ic = e.screenY - qo.screenY) : (Lf = 0, ic = 0), qo = e);
    }
    var fi = ft({}, Fr, {
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
      getModifierState: mn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (wg(e), Lf);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : ic;
      }
    }), xp = Rr(fi), wp = ft({}, fi, {
      dataTransfer: 0
    }), Xo = Rr(wp), Rp = ft({}, Fr, {
      relatedTarget: 0
    }), sl = Rr(Rp), Zh = ft({}, $n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Jh = Rr(Zh), Tp = ft({}, $n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Mf = Rr(Tp), Rg = ft({}, $n, {
      data: 0
    }), em = Rr(Rg), tm = em, nm = {
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
      MozPrintableKey: "Unidentified"
    }, Ko = {
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
      224: "Meta"
    };
    function Tg(e) {
      if (e.key) {
        var t = nm[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = ql(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ko[e.keyCode] || "Unidentified" : "";
    }
    var $u = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function rm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = $u[e];
      return i ? !!a[i] : !1;
    }
    function mn(e) {
      return rm;
    }
    var kg = ft({}, Fr, {
      key: Tg,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: mn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? ql(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), am = Rr(kg), Dg = ft({}, fi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), im = Rr(Dg), lm = ft({}, Fr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mn
    }), om = Rr(lm), Og = ft({}, $n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ha = Rr(Og), kp = ft({}, fi, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ng = Rr(kp), Xl = [9, 13, 27, 32], lc = 229, cl = Mn && "CompositionEvent" in window, Kl = null;
    Mn && "documentMode" in document && (Kl = document.documentMode);
    var Dp = Mn && "TextEvent" in window && !Kl, Af = Mn && (!cl || Kl && Kl > 8 && Kl <= 11), um = 32, Uf = String.fromCharCode(um);
    function zg() {
      St("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), St("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), St("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), St("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Op = !1;
    function sm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Ff(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function jf(e, t) {
      return e === "keydown" && t.keyCode === lc;
    }
    function Np(e, t) {
      switch (e) {
        case "keyup":
          return Xl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== lc;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Pf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function zp(e) {
      return e.locale === "ko";
    }
    var Zl = !1;
    function Hf(e, t, a, i, o) {
      var s, p;
      if (cl ? s = Ff(t) : Zl ? Np(t, i) && (s = "onCompositionEnd") : jf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Af && !zp(i) && (!Zl && s === "onCompositionStart" ? Zl = Gl(o) : s === "onCompositionEnd" && Zl && (p = ul()));
      var m = hm(a, s);
      if (m.length > 0) {
        var y = new em(s, t, null, i, o);
        if (e.push({
          event: y,
          listeners: m
        }), p)
          y.data = p;
        else {
          var C = Pf(i);
          C !== null && (y.data = C);
        }
      }
    }
    function Lp(e, t) {
      switch (e) {
        case "compositionend":
          return Pf(t);
        case "keypress":
          var a = t.which;
          return a !== um ? null : (Op = !0, Uf);
        case "textInput":
          var i = t.data;
          return i === Uf && Op ? null : i;
        default:
          return null;
      }
    }
    function Vf(e, t) {
      if (Zl) {
        if (e === "compositionend" || !cl && Np(e, t)) {
          var a = ul();
          return zf(), Zl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!sm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Af && !zp(t) ? null : t.data;
        default:
          return null;
      }
    }
    function cm(e, t, a, i, o) {
      var s;
      if (Dp ? s = Lp(t, i) : s = Vf(t, i), !s)
        return null;
      var p = hm(a, "onBeforeInput");
      if (p.length > 0) {
        var m = new tm("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: m,
          listeners: p
        }), m.data = s;
      }
    }
    function Lg(e, t, a, i, o, s, p) {
      Hf(e, t, a, i, o), cm(e, t, a, i, o);
    }
    var Bf = {
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
      week: !0
    };
    function fm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Bf[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function oc(e) {
      if (!Mn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Mg() {
      St("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function uc(e, t, a, i) {
      Ru(i);
      var o = hm(t, "onChange");
      if (o.length > 0) {
        var s = new ji("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var n = null, r = null;
    function l(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function u(e) {
      var t = [];
      uc(t, r, e, Gd(e)), xh(d, t);
    }
    function d(e) {
      h1(e, 0);
    }
    function v(e) {
      var t = Gf(e);
      if (wi(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var w = !1;
    Mn && (w = oc("input") && (!document.documentMode || document.documentMode > 9));
    function D(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", re);
    }
    function $() {
      n && (n.detachEvent("onpropertychange", re), n = null, r = null);
    }
    function re(e) {
      e.propertyName === "value" && v(r) && u(e);
    }
    function ie(e, t, a) {
      e === "focusin" ? ($(), D(t, a)) : e === "focusout" && $();
    }
    function ne(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return v(r);
    }
    function we(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ze(e, t) {
      if (e === "click")
        return v(t);
    }
    function Ae(e, t) {
      if (e === "input" || e === "change")
        return v(t);
    }
    function zn(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Qe(e, "number", e.value);
    }
    function M(e, t, a, i, o, s, p) {
      var m = a ? Gf(a) : window, y, C;
      if (l(m) ? y = E : fm(m) ? w ? y = Ae : (y = ne, C = ie) : we(m) && (y = ze), y) {
        var x = y(t, a);
        if (x) {
          uc(e, x, i, o);
          return;
        }
      }
      C && C(t, m, a), t === "focusout" && zn(m);
    }
    function N() {
      qt("onMouseEnter", ["mouseout", "mouseover"]), qt("onMouseLeave", ["mouseout", "mouseover"]), qt("onPointerEnter", ["pointerout", "pointerover"]), qt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function j(e, t, a, i, o, s, p) {
      var m = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (m && !xs(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (fc(C) || Wp(C)))
          return;
      }
      if (!(!y && !m)) {
        var x;
        if (o.window === o)
          x = o;
        else {
          var z = o.ownerDocument;
          z ? x = z.defaultView || z.parentWindow : x = window;
        }
        var O, H;
        if (y) {
          var I = i.relatedTarget || i.toElement;
          if (O = a, H = I ? fc(I) : null, H !== null) {
            var Q = ha(H);
            (H !== Q || H.tag !== Z && H.tag !== ae) && (H = null);
          }
        } else
          O = null, H = a;
        if (O !== H) {
          var Ce = xp, We = "onMouseLeave", je = "onMouseEnter", Mt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ce = im, We = "onPointerLeave", je = "onPointerEnter", Mt = "pointer");
          var kt = O == null ? x : Gf(O), U = H == null ? x : Gf(H), W = new Ce(We, Mt + "leave", O, i, o);
          W.target = kt, W.relatedTarget = U;
          var F = null, le = fc(o);
          if (le === a) {
            var ke = new Ce(je, Mt + "enter", H, i, o);
            ke.target = U, ke.relatedTarget = kt, F = ke;
          }
          ww(e, W, F, O, H);
        }
      }
    }
    function ce(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var be = typeof Object.is == "function" ? Object.is : ce;
    function Ie(e, t) {
      if (be(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!kr.call(t, s) || !be(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ge(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function tt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Zn(e, t) {
      for (var a = Ge(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Ji) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = Ge(tt(a));
      }
    }
    function $t(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, p = i.focusNode, m = i.focusOffset;
      try {
        o.nodeType, p.nodeType;
      } catch {
        return null;
      }
      return Jl(e, o, s, p, m);
    }
    function Jl(e, t, a, i, o) {
      var s = 0, p = -1, m = -1, y = 0, C = 0, x = e, z = null;
      e: for (; ; ) {
        for (var O = null; x === t && (a === 0 || x.nodeType === Ji) && (p = s + a), x === i && (o === 0 || x.nodeType === Ji) && (m = s + o), x.nodeType === Ji && (s += x.nodeValue.length), (O = x.firstChild) !== null; )
          z = x, x = O;
        for (; ; ) {
          if (x === e)
            break e;
          if (z === t && ++y === a && (p = s), z === i && ++C === o && (m = s), (O = x.nextSibling) !== null)
            break;
          x = z, z = x.parentNode;
        }
        x = O;
      }
      return p === -1 || m === -1 ? null : {
        start: p,
        end: m
      };
    }
    function Ag(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, p = Math.min(t.start, s), m = t.end === void 0 ? p : Math.min(t.end, s);
        if (!o.extend && p > m) {
          var y = m;
          m = p, p = y;
        }
        var C = Zn(e, p), x = Zn(e, m);
        if (C && x) {
          if (o.rangeCount === 1 && o.anchorNode === C.node && o.anchorOffset === C.offset && o.focusNode === x.node && o.focusOffset === x.offset)
            return;
          var z = a.createRange();
          z.setStart(C.node, C.offset), o.removeAllRanges(), p > m ? (o.addRange(z), o.extend(x.node, x.offset)) : (z.setEnd(x.node, x.offset), o.addRange(z));
        }
      }
    }
    function r1(e) {
      return e && e.nodeType === Ji;
    }
    function a1(e, t) {
      return !e || !t ? !1 : e === t ? !0 : r1(e) ? !1 : r1(t) ? a1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function ow(e) {
      return e && e.ownerDocument && a1(e.ownerDocument.documentElement, e);
    }
    function uw(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function i1() {
      for (var e = window, t = Oa(); t instanceof e.HTMLIFrameElement; ) {
        if (uw(t))
          e = t.contentWindow;
        else
          return t;
        t = Oa(e.document);
      }
      return t;
    }
    function Ug(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function sw() {
      var e = i1();
      return {
        focusedElem: e,
        selectionRange: Ug(e) ? fw(e) : null
      };
    }
    function cw(e) {
      var t = i1(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && ow(a)) {
        i !== null && Ug(a) && dw(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === qr && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var p = 0; p < o.length; p++) {
          var m = o[p];
          m.element.scrollLeft = m.left, m.element.scrollTop = m.top;
        }
      }
    }
    function fw(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = $t(e), t || {
        start: 0,
        end: 0
      };
    }
    function dw(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Ag(e, t);
    }
    var pw = Mn && "documentMode" in document && document.documentMode <= 11;
    function vw() {
      St("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var $f = null, Fg = null, Mp = null, jg = !1;
    function hw(e) {
      if ("selectionStart" in e && Ug(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function mw(e) {
      return e.window === e ? e.document : e.nodeType === el ? e : e.ownerDocument;
    }
    function l1(e, t, a) {
      var i = mw(a);
      if (!(jg || $f == null || $f !== Oa(i))) {
        var o = hw($f);
        if (!Mp || !Ie(Mp, o)) {
          Mp = o;
          var s = hm(Fg, "onSelect");
          if (s.length > 0) {
            var p = new ji("onSelect", "select", null, t, a);
            e.push({
              event: p,
              listeners: s
            }), p.target = $f;
          }
        }
      }
    }
    function yw(e, t, a, i, o, s, p) {
      var m = a ? Gf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (fm(m) || m.contentEditable === "true") && ($f = m, Fg = a, Mp = null);
          break;
        case "focusout":
          $f = null, Fg = null, Mp = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          jg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          jg = !1, l1(e, i, o);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (pw)
            break;
        // falls through
        case "keydown":
        case "keyup":
          l1(e, i, o);
      }
    }
    function dm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var If = {
      animationend: dm("Animation", "AnimationEnd"),
      animationiteration: dm("Animation", "AnimationIteration"),
      animationstart: dm("Animation", "AnimationStart"),
      transitionend: dm("Transition", "TransitionEnd")
    }, Pg = {}, o1 = {};
    Mn && (o1 = document.createElement("div").style, "AnimationEvent" in window || (delete If.animationend.animation, delete If.animationiteration.animation, delete If.animationstart.animation), "TransitionEvent" in window || delete If.transitionend.transition);
    function pm(e) {
      if (Pg[e])
        return Pg[e];
      if (!If[e])
        return e;
      var t = If[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in o1)
          return Pg[e] = t[a];
      return e;
    }
    var u1 = pm("animationend"), s1 = pm("animationiteration"), c1 = pm("animationstart"), f1 = pm("transitionend"), d1 = /* @__PURE__ */ new Map(), p1 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Iu(e, t) {
      d1.set(e, t), St(t, [e]);
    }
    function gw() {
      for (var e = 0; e < p1.length; e++) {
        var t = p1[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Iu(a, "on" + i);
      }
      Iu(u1, "onAnimationEnd"), Iu(s1, "onAnimationIteration"), Iu(c1, "onAnimationStart"), Iu("dblclick", "onDoubleClick"), Iu("focusin", "onFocus"), Iu("focusout", "onBlur"), Iu(f1, "onTransitionEnd");
    }
    function Sw(e, t, a, i, o, s, p) {
      var m = d1.get(t);
      if (m !== void 0) {
        var y = ji, C = t;
        switch (t) {
          case "keypress":
            if (ql(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            y = am;
            break;
          case "focusin":
            C = "focus", y = sl;
            break;
          case "focusout":
            C = "blur", y = sl;
            break;
          case "beforeblur":
          case "afterblur":
            y = sl;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = xp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Xo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = om;
            break;
          case u1:
          case s1:
          case c1:
            y = Jh;
            break;
          case f1:
            y = Ha;
            break;
          case "scroll":
            y = ia;
            break;
          case "wheel":
            y = Ng;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Mf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = im;
            break;
        }
        var x = (s & Na) !== 0;
        {
          var z = !x && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", O = bw(a, m, i.type, x, z);
          if (O.length > 0) {
            var H = new y(m, C, null, i, o);
            e.push({
              event: H,
              listeners: O
            });
          }
        }
      }
    }
    gw(), N(), Mg(), vw(), zg();
    function _w(e, t, a, i, o, s, p) {
      Sw(e, t, a, i, o, s);
      var m = (s & Wd) === 0;
      m && (j(e, t, a, i, o), M(e, t, a, i, o), yw(e, t, a, i, o), Lg(e, t, a, i, o));
    }
    var Ap = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Hg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Ap));
    function v1(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ki(i, t, void 0, e), e.currentTarget = null;
    }
    function Ew(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], p = s.instance, m = s.currentTarget, y = s.listener;
          if (p !== i && e.isPropagationStopped())
            return;
          v1(e, y, m), i = p;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var x = t[C], z = x.instance, O = x.currentTarget, H = x.listener;
          if (z !== i && e.isPropagationStopped())
            return;
          v1(e, H, O), i = z;
        }
    }
    function h1(e, t) {
      for (var a = (t & Na) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, p = o.listeners;
        Ew(s, p, a);
      }
      Ts();
    }
    function Cw(e, t, a, i, o) {
      var s = Gd(a), p = [];
      _w(p, e, i, a, s, t), h1(p, t);
    }
    function En(e, t) {
      Hg.has(e) || _('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ZR(t), o = Rw(e);
      i.has(o) || (m1(t, e, Vc, a), i.add(o));
    }
    function Vg(e, t, a) {
      Hg.has(e) && !t && _('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Na), m1(a, e, i, t);
    }
    var vm = "_reactListening" + Math.random().toString(36).slice(2);
    function Up(e) {
      if (!e[vm]) {
        e[vm] = !0, pt.forEach(function(a) {
          a !== "selectionchange" && (Hg.has(a) || Vg(a, !1, e), Vg(a, !0, e));
        });
        var t = e.nodeType === el ? e : e.ownerDocument;
        t !== null && (t[vm] || (t[vm] = !0, Vg("selectionchange", !1, t)));
      }
    }
    function m1(e, t, a, i, o) {
      var s = dr(e, t, a), p = void 0;
      Rs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (p = !0), e = e, i ? p !== void 0 ? bp(e, t, s, p) : aa(e, t, s) : p !== void 0 ? Hu(e, t, s, p) : nc(e, t, s);
    }
    function y1(e, t) {
      return e === t || e.nodeType === Un && e.parentNode === t;
    }
    function Bg(e, t, a, i, o) {
      var s = i;
      if (!(t & Qd) && !(t & Vc)) {
        var p = o;
        if (i !== null) {
          var m = i;
          e: for (; ; ) {
            if (m === null)
              return;
            var y = m.tag;
            if (y === B || y === K) {
              var C = m.stateNode.containerInfo;
              if (y1(C, p))
                break;
              if (y === K)
                for (var x = m.return; x !== null; ) {
                  var z = x.tag;
                  if (z === B || z === K) {
                    var O = x.stateNode.containerInfo;
                    if (y1(O, p))
                      return;
                  }
                  x = x.return;
                }
              for (; C !== null; ) {
                var H = fc(C);
                if (H === null)
                  return;
                var I = H.tag;
                if (I === Z || I === ae) {
                  m = s = H;
                  continue e;
                }
                C = C.parentNode;
              }
            }
            m = m.return;
          }
        }
      }
      xh(function() {
        return Cw(e, t, a, s);
      });
    }
    function Fp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function bw(e, t, a, i, o, s) {
      for (var p = t !== null ? t + "Capture" : null, m = i ? p : t, y = [], C = e, x = null; C !== null; ) {
        var z = C, O = z.stateNode, H = z.tag;
        if (H === Z && O !== null && (x = O, m !== null)) {
          var I = Ul(C, m);
          I != null && y.push(Fp(C, I, x));
        }
        if (o)
          break;
        C = C.return;
      }
      return y;
    }
    function hm(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, p = s.stateNode, m = s.tag;
        if (m === Z && p !== null) {
          var y = p, C = Ul(o, a);
          C != null && i.unshift(Fp(o, C, y));
          var x = Ul(o, t);
          x != null && i.push(Fp(o, x, y));
        }
        o = o.return;
      }
      return i;
    }
    function Yf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== Z);
      return e || null;
    }
    function xw(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Yf(s))
        o++;
      for (var p = 0, m = i; m; m = Yf(m))
        p++;
      for (; o - p > 0; )
        a = Yf(a), o--;
      for (; p - o > 0; )
        i = Yf(i), p--;
      for (var y = o; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Yf(a), i = Yf(i);
      }
      return null;
    }
    function g1(e, t, a, i, o) {
      for (var s = t._reactName, p = [], m = a; m !== null && m !== i; ) {
        var y = m, C = y.alternate, x = y.stateNode, z = y.tag;
        if (C !== null && C === i)
          break;
        if (z === Z && x !== null) {
          var O = x;
          if (o) {
            var H = Ul(m, s);
            H != null && p.unshift(Fp(m, H, O));
          } else if (!o) {
            var I = Ul(m, s);
            I != null && p.push(Fp(m, I, O));
          }
        }
        m = m.return;
      }
      p.length !== 0 && e.push({
        event: t,
        listeners: p
      });
    }
    function ww(e, t, a, i, o) {
      var s = i && o ? xw(i, o) : null;
      i !== null && g1(e, t, i, s, !1), o !== null && a !== null && g1(e, a, o, s, !0);
    }
    function Rw(e, t) {
      return e + "__bubble";
    }
    var Va = !1, jp = "dangerouslySetInnerHTML", mm = "suppressContentEditableWarning", Yu = "suppressHydrationWarning", S1 = "autoFocus", sc = "children", cc = "style", ym = "__html", $g, gm, Pp, _1, Sm, E1, C1;
    $g = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, gm = function(e, t) {
      $d(e, t), Pc(e, t), Eh(e, t, {
        registrationNameDependencies: ct,
        possibleRegistrationNames: vt
      });
    }, E1 = Mn && !document.documentMode, Pp = function(e, t, a) {
      if (!Va) {
        var i = _m(a), o = _m(t);
        o !== i && (Va = !0, _("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, _1 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), _("Extra attributes from the server: %s", t);
      }
    }, Sm = function(e, t) {
      t === !1 ? _("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : _("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, C1 = function(e, t) {
      var a = e.namespaceURI === Zi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Tw = /\r\n?/g, kw = /\u0000|\uFFFD/g;
    function _m(e) {
      er(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Tw, `
`).replace(kw, "");
    }
    function Em(e, t, a, i) {
      var o = _m(t), s = _m(e);
      if (s !== o && (i && (Va || (Va = !0, _('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && Ue))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function b1(e) {
      return e.nodeType === el ? e : e.ownerDocument;
    }
    function Dw() {
    }
    function Cm(e) {
      e.onclick = Dw;
    }
    function Ow(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var p = i[s];
          if (s === cc)
            p && Object.freeze(p), hh(t, p);
          else if (s === jp) {
            var m = p ? p[ym] : void 0;
            m != null && rh(t, m);
          } else if (s === sc)
            if (typeof p == "string") {
              var y = e !== "textarea" || p !== "";
              y && Cu(t, p);
            } else typeof p == "number" && Cu(t, "" + p);
          else s === mm || s === Yu || s === S1 || (ct.hasOwnProperty(s) ? p != null && (typeof p != "function" && Sm(s, p), s === "onScroll" && En("scroll", t)) : p != null && Dr(t, s, p, o));
        }
    }
    function Nw(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], p = t[o + 1];
        s === cc ? hh(e, p) : s === jp ? rh(e, p) : s === sc ? Cu(e, p) : Dr(e, s, p, i);
      }
    }
    function zw(e, t, a, i) {
      var o, s = b1(a), p, m = i;
      if (m === Zi && (m = Ud(e)), m === Zi) {
        if (o = Ml(e, t), !o && e !== e.toLowerCase() && _("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var C = y.firstChild;
          p = y.removeChild(C);
        } else if (typeof t.is == "string")
          p = s.createElement(e, {
            is: t.is
          });
        else if (p = s.createElement(e), e === "select") {
          var x = p;
          t.multiple ? x.multiple = !0 : t.size && (x.size = t.size);
        }
      } else
        p = s.createElementNS(m, e);
      return m === Zi && !o && Object.prototype.toString.call(p) === "[object HTMLUnknownElement]" && !kr.call($g, e) && ($g[e] = !0, _("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), p;
    }
    function Lw(e, t) {
      return b1(t).createTextNode(e);
    }
    function Mw(e, t, a, i) {
      var o = Ml(t, a);
      gm(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var p = 0; p < Ap.length; p++)
            En(Ap[p], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          ai(e, a), s = Eu(e, a), En("invalid", e);
          break;
        case "option":
          Ut(e, a), s = a;
          break;
        case "select":
          Ro(e, a), s = ys(e, a), En("invalid", e);
          break;
        case "textarea":
          Ld(e, a), s = zd(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (Fc(t, s), Ow(t, e, i, s, o), t) {
        case "input":
          ri(e), V(e, a, !1);
          break;
        case "textarea":
          ri(e), th(e);
          break;
        case "option":
          sn(e, a);
          break;
        case "select":
          Od(e, a);
          break;
        default:
          typeof s.onClick == "function" && Cm(e);
          break;
      }
    }
    function Aw(e, t, a, i, o) {
      gm(t, i);
      var s = null, p, m;
      switch (t) {
        case "input":
          p = Eu(e, a), m = Eu(e, i), s = [];
          break;
        case "select":
          p = ys(e, a), m = ys(e, i), s = [];
          break;
        case "textarea":
          p = zd(e, a), m = zd(e, i), s = [];
          break;
        default:
          p = a, m = i, typeof p.onClick != "function" && typeof m.onClick == "function" && Cm(e);
          break;
      }
      Fc(t, m);
      var y, C, x = null;
      for (y in p)
        if (!(m.hasOwnProperty(y) || !p.hasOwnProperty(y) || p[y] == null))
          if (y === cc) {
            var z = p[y];
            for (C in z)
              z.hasOwnProperty(C) && (x || (x = {}), x[C] = "");
          } else y === jp || y === sc || y === mm || y === Yu || y === S1 || (ct.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in m) {
        var O = m[y], H = p != null ? p[y] : void 0;
        if (!(!m.hasOwnProperty(y) || O === H || O == null && H == null))
          if (y === cc)
            if (O && Object.freeze(O), H) {
              for (C in H)
                H.hasOwnProperty(C) && (!O || !O.hasOwnProperty(C)) && (x || (x = {}), x[C] = "");
              for (C in O)
                O.hasOwnProperty(C) && H[C] !== O[C] && (x || (x = {}), x[C] = O[C]);
            } else
              x || (s || (s = []), s.push(y, x)), x = O;
          else if (y === jp) {
            var I = O ? O[ym] : void 0, Q = H ? H[ym] : void 0;
            I != null && Q !== I && (s = s || []).push(y, I);
          } else y === sc ? (typeof O == "string" || typeof O == "number") && (s = s || []).push(y, "" + O) : y === mm || y === Yu || (ct.hasOwnProperty(y) ? (O != null && (typeof O != "function" && Sm(y, O), y === "onScroll" && En("scroll", e)), !s && H !== O && (s = [])) : (s = s || []).push(y, O));
      }
      return x && (hg(x, m[cc]), (s = s || []).push(cc, x)), s;
    }
    function Uw(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && g(e, o);
      var s = Ml(a, i), p = Ml(a, o);
      switch (Nw(e, t, s, p), a) {
        case "input":
          R(e, o);
          break;
        case "textarea":
          eh(e, o);
          break;
        case "select":
          Mc(e, o);
          break;
      }
    }
    function Fw(e) {
      {
        var t = e.toLowerCase();
        return Cs.hasOwnProperty(t) && Cs[t] || null;
      }
    }
    function jw(e, t, a, i, o, s, p) {
      var m, y;
      switch (m = Ml(t, a), gm(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < Ap.length; C++)
            En(Ap[C], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          ai(e, a), En("invalid", e);
          break;
        case "option":
          Ut(e, a);
          break;
        case "select":
          Ro(e, a), En("invalid", e);
          break;
        case "textarea":
          Ld(e, a), En("invalid", e);
          break;
      }
      Fc(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var x = e.attributes, z = 0; z < x.length; z++) {
          var O = x[z].name.toLowerCase();
          switch (O) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(x[z].name);
          }
        }
      }
      var H = null;
      for (var I in a)
        if (a.hasOwnProperty(I)) {
          var Q = a[I];
          if (I === sc)
            typeof Q == "string" ? e.textContent !== Q && (a[Yu] !== !0 && Em(e.textContent, Q, s, p), H = [sc, Q]) : typeof Q == "number" && e.textContent !== "" + Q && (a[Yu] !== !0 && Em(e.textContent, Q, s, p), H = [sc, "" + Q]);
          else if (ct.hasOwnProperty(I))
            Q != null && (typeof Q != "function" && Sm(I, Q), I === "onScroll" && En("scroll", e));
          else if (p && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof m == "boolean") {
            var Ce = void 0, We = on(I);
            if (a[Yu] !== !0) {
              if (!(I === mm || I === Yu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              I === "value" || I === "checked" || I === "selected")) {
                if (I === jp) {
                  var je = e.innerHTML, Mt = Q ? Q[ym] : void 0;
                  if (Mt != null) {
                    var kt = C1(e, Mt);
                    kt !== je && Pp(I, je, kt);
                  }
                } else if (I === cc) {
                  if (y.delete(I), E1) {
                    var U = pg(Q);
                    Ce = e.getAttribute("style"), U !== Ce && Pp(I, Ce, U);
                  }
                } else if (m)
                  y.delete(I.toLowerCase()), Ce = So(e, I, Q), Q !== Ce && Pp(I, Ce, Q);
                else if (!yn(I, We, m) && !tr(I, Q, We, m)) {
                  var W = !1;
                  if (We !== null)
                    y.delete(We.attributeName), Ce = wl(e, I, Q, We);
                  else {
                    var F = i;
                    if (F === Zi && (F = Ud(t)), F === Zi)
                      y.delete(I.toLowerCase());
                    else {
                      var le = Fw(I);
                      le !== null && le !== I && (W = !0, y.delete(le)), y.delete(I);
                    }
                    Ce = So(e, I, Q);
                  }
                  var ke = L;
                  !ke && Q !== Ce && !W && Pp(I, Ce, Q);
                }
              }
            }
          }
        }
      switch (p && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Yu] !== !0 && _1(y), t) {
        case "input":
          ri(e), V(e, a, !0);
          break;
        case "textarea":
          ri(e), th(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Cm(e);
          break;
      }
      return H;
    }
    function Pw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ig(e, t) {
      {
        if (Va)
          return;
        Va = !0, _("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Yg(e, t) {
      {
        if (Va)
          return;
        Va = !0, _('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Qg(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, _("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Wg(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, _('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Hw(e, t, a) {
      switch (t) {
        case "input":
          Y(e, a);
          return;
        case "textarea":
          sg(e, a);
          return;
        case "select":
          Nd(e, a);
          return;
      }
    }
    var Hp = function() {
    }, Vp = function() {
    };
    {
      var Vw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], x1 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Bw = x1.concat(["button"]), $w = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], w1 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Vp = function(e, t) {
        var a = ft({}, e || w1), i = {
          tag: t
        };
        return x1.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Bw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Vw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var Iw = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return $w.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Yw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, R1 = {};
      Hp = function(e, t, a) {
        a = a || w1;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && _("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = Iw(e, o) ? null : i, p = s ? null : Yw(e, a), m = s || p;
        if (m) {
          var y = m.tag, C = !!s + "|" + e + "|" + y;
          if (!R1[C]) {
            R1[C] = !0;
            var x = e, z = "";
            if (e === "#text" ? /\S/.test(t) ? x = "Text nodes" : (x = "Whitespace text nodes", z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", s) {
              var O = "";
              y === "table" && e === "tr" && (O += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), _("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, y, z, O);
            } else
              _("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, y);
          }
        }
      };
    }
    var bm = "suppressHydrationWarning", xm = "$", wm = "/$", Bp = "$?", $p = "$!", Qw = "style", Gg = null, qg = null;
    function Ww(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case el:
        case jd: {
          t = i === el ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : Fd(null, "");
          break;
        }
        default: {
          var s = i === Un ? e.parentNode : e, p = s.namespaceURI || null;
          t = s.tagName, a = Fd(p, t);
          break;
        }
      }
      {
        var m = t.toLowerCase(), y = Vp(null, m);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function Gw(e, t, a) {
      {
        var i = e, o = Fd(i.namespace, t), s = Vp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function YN(e) {
      return e;
    }
    function qw(e) {
      Gg = Bn(), qg = sw();
      var t = null;
      return Kn(!1), t;
    }
    function Xw(e) {
      cw(qg), Kn(Gg), Gg = null, qg = null;
    }
    function Kw(e, t, a, i, o) {
      var s;
      {
        var p = i;
        if (Hp(e, null, p.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var m = "" + t.children, y = Vp(p.ancestorInfo, e);
          Hp(null, m, y);
        }
        s = p.namespace;
      }
      var C = zw(e, t, a, s);
      return Qp(o, C), r0(C, t), C;
    }
    function Zw(e, t) {
      e.appendChild(t);
    }
    function Jw(e, t, a, i, o) {
      switch (Mw(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function eR(e, t, a, i, o, s) {
      {
        var p = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var m = "" + i.children, y = Vp(p.ancestorInfo, t);
          Hp(null, m, y);
        }
      }
      return Aw(e, t, a, i);
    }
    function Xg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function tR(e, t, a, i) {
      {
        var o = a;
        Hp(null, e, o.ancestorInfo);
      }
      var s = Lw(e, t);
      return Qp(i, s), s;
    }
    function nR() {
      var e = window.event;
      return e === void 0 ? Fa : Nf(e.type);
    }
    var Kg = typeof setTimeout == "function" ? setTimeout : void 0, rR = typeof clearTimeout == "function" ? clearTimeout : void 0, Zg = -1, T1 = typeof Promise == "function" ? Promise : void 0, aR = typeof queueMicrotask == "function" ? queueMicrotask : typeof T1 < "u" ? function(e) {
      return T1.resolve(null).then(e).catch(iR);
    } : Kg;
    function iR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function lR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function oR(e, t, a, i, o, s) {
      Uw(e, t, a, i, o), r0(e, o);
    }
    function k1(e) {
      Cu(e, "");
    }
    function uR(e, t, a) {
      e.nodeValue = a;
    }
    function sR(e, t) {
      e.appendChild(t);
    }
    function cR(e, t) {
      var a;
      e.nodeType === Un ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Cm(a);
    }
    function fR(e, t, a) {
      e.insertBefore(t, a);
    }
    function dR(e, t, a) {
      e.nodeType === Un ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function pR(e, t) {
      e.removeChild(t);
    }
    function vR(e, t) {
      e.nodeType === Un ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Jg(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Un) {
          var s = o.data;
          if (s === wm)
            if (i === 0) {
              e.removeChild(o), Wo(t);
              return;
            } else
              i--;
          else (s === xm || s === Bp || s === $p) && i++;
        }
        a = o;
      } while (a);
      Wo(t);
    }
    function hR(e, t) {
      e.nodeType === Un ? Jg(e.parentNode, t) : e.nodeType === qr && Jg(e, t), Wo(e);
    }
    function mR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function yR(e) {
      e.nodeValue = "";
    }
    function gR(e, t) {
      e = e;
      var a = t[Qw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Uc("display", i);
    }
    function SR(e, t) {
      e.nodeValue = t;
    }
    function _R(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === el && e.documentElement && e.removeChild(e.documentElement);
    }
    function ER(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function CR(e, t) {
      return t === "" || e.nodeType !== Ji ? null : e;
    }
    function bR(e) {
      return e.nodeType !== Un ? null : e;
    }
    function D1(e) {
      return e.data === Bp;
    }
    function e0(e) {
      return e.data === $p;
    }
    function xR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function wR(e, t) {
      e._reactRetry = t;
    }
    function Rm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === Ji)
          break;
        if (t === Un) {
          var a = e.data;
          if (a === xm || a === $p || a === Bp)
            break;
          if (a === wm)
            return null;
        }
      }
      return e;
    }
    function Ip(e) {
      return Rm(e.nextSibling);
    }
    function RR(e) {
      return Rm(e.firstChild);
    }
    function TR(e) {
      return Rm(e.firstChild);
    }
    function kR(e) {
      return Rm(e.nextSibling);
    }
    function DR(e, t, a, i, o, s, p) {
      Qp(s, e), r0(e, a);
      var m;
      {
        var y = o;
        m = y.namespace;
      }
      var C = (s.mode & Et) !== $e;
      return jw(e, t, a, m, i, C, p);
    }
    function OR(e, t, a, i) {
      return Qp(a, e), a.mode & Et, Pw(e, t);
    }
    function NR(e, t) {
      Qp(t, e);
    }
    function zR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === wm) {
            if (a === 0)
              return Ip(t);
            a--;
          } else (i === xm || i === $p || i === Bp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function O1(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Un) {
          var i = t.data;
          if (i === xm || i === $p || i === Bp) {
            if (a === 0)
              return t;
            a--;
          } else i === wm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function LR(e) {
      Wo(e);
    }
    function MR(e) {
      Wo(e);
    }
    function AR(e) {
      return e !== "head" && e !== "body";
    }
    function UR(e, t, a, i) {
      var o = !0;
      Em(t.nodeValue, a, i, o);
    }
    function FR(e, t, a, i, o, s) {
      if (t[bm] !== !0) {
        var p = !0;
        Em(i.nodeValue, o, s, p);
      }
    }
    function jR(e, t) {
      t.nodeType === qr ? Ig(e, t) : t.nodeType === Un || Yg(e, t);
    }
    function PR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? Ig(a, t) : t.nodeType === Un || Yg(a, t));
      }
    }
    function HR(e, t, a, i, o) {
      (o || t[bm] !== !0) && (i.nodeType === qr ? Ig(a, i) : i.nodeType === Un || Yg(a, i));
    }
    function VR(e, t, a) {
      Qg(e, t);
    }
    function BR(e, t) {
      Wg(e, t);
    }
    function $R(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Qg(i, t);
      }
    }
    function IR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Wg(a, t);
      }
    }
    function YR(e, t, a, i, o, s) {
      (s || t[bm] !== !0) && Qg(a, i);
    }
    function QR(e, t, a, i, o) {
      (o || t[bm] !== !0) && Wg(a, i);
    }
    function WR(e) {
      _("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function GR(e) {
      Up(e);
    }
    var Qf = Math.random().toString(36).slice(2), Wf = "__reactFiber$" + Qf, t0 = "__reactProps$" + Qf, Yp = "__reactContainer$" + Qf, n0 = "__reactEvents$" + Qf, qR = "__reactListeners$" + Qf, XR = "__reactHandles$" + Qf;
    function KR(e) {
      delete e[Wf], delete e[t0], delete e[n0], delete e[qR], delete e[XR];
    }
    function Qp(e, t) {
      t[Wf] = e;
    }
    function Tm(e, t) {
      t[Yp] = e;
    }
    function N1(e) {
      e[Yp] = null;
    }
    function Wp(e) {
      return !!e[Yp];
    }
    function fc(e) {
      var t = e[Wf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Yp] || a[Wf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = O1(e); o !== null; ) {
              var s = o[Wf];
              if (s)
                return s;
              o = O1(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Qu(e) {
      var t = e[Wf] || e[Yp];
      return t && (t.tag === Z || t.tag === ae || t.tag === me || t.tag === B) ? t : null;
    }
    function Gf(e) {
      if (e.tag === Z || e.tag === ae)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function km(e) {
      return e[t0] || null;
    }
    function r0(e, t) {
      e[t0] = t;
    }
    function ZR(e) {
      var t = e[n0];
      return t === void 0 && (t = e[n0] = /* @__PURE__ */ new Set()), t;
    }
    var z1 = {}, L1 = h.ReactDebugCurrentFrame;
    function Dm(e) {
      if (e) {
        var t = e._owner, a = qi(e.type, e._source, t ? t.type : null);
        L1.setExtraStackFrame(a);
      } else
        L1.setExtraStackFrame(null);
    }
    function fl(e, t, a, i, o) {
      {
        var s = Function.call.bind(kr);
        for (var p in e)
          if (s(e, p)) {
            var m = void 0;
            try {
              if (typeof e[p] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              m = e[p](t, p, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              m = C;
            }
            m && !(m instanceof Error) && (Dm(o), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, p, typeof m), Dm(null)), m instanceof Error && !(m.message in z1) && (z1[m.message] = !0, Dm(o), _("Failed %s type: %s", a, m.message), Dm(null));
          }
      }
    }
    var a0 = [], Om;
    Om = [];
    var Zo = -1;
    function Wu(e) {
      return {
        current: e
      };
    }
    function la(e, t) {
      if (Zo < 0) {
        _("Unexpected pop.");
        return;
      }
      t !== Om[Zo] && _("Unexpected Fiber popped."), e.current = a0[Zo], a0[Zo] = null, Om[Zo] = null, Zo--;
    }
    function oa(e, t, a) {
      Zo++, a0[Zo] = e.current, Om[Zo] = a, e.current = t;
    }
    var i0;
    i0 = {};
    var di = {};
    Object.freeze(di);
    var Jo = Wu(di), eo = Wu(!1), l0 = di;
    function qf(e, t, a) {
      return a && to(t) ? l0 : Jo.current;
    }
    function M1(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Xf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return di;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var p in i)
          s[p] = t[p];
        {
          var m = et(e) || "Unknown";
          fl(i, s, "context", m);
        }
        return o && M1(e, t, s), s;
      }
    }
    function Nm() {
      return eo.current;
    }
    function to(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function zm(e) {
      la(eo, e), la(Jo, e);
    }
    function o0(e) {
      la(eo, e), la(Jo, e);
    }
    function A1(e, t, a) {
      {
        if (Jo.current !== di)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        oa(Jo, t, e), oa(eo, a, e);
      }
    }
    function U1(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = et(e) || "Unknown";
            i0[s] || (i0[s] = !0, _("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var p = i.getChildContext();
        for (var m in p)
          if (!(m in o))
            throw new Error((et(e) || "Unknown") + '.getChildContext(): key "' + m + '" is not defined in childContextTypes.');
        {
          var y = et(e) || "Unknown";
          fl(o, p, "child context", y);
        }
        return ft({}, a, p);
      }
    }
    function Lm(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || di;
        return l0 = Jo.current, oa(Jo, a, e), oa(eo, eo.current, e), !0;
      }
    }
    function F1(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = U1(e, t, l0);
          i.__reactInternalMemoizedMergedChildContext = o, la(eo, e), la(Jo, e), oa(Jo, o, e), oa(eo, a, e);
        } else
          la(eo, e), oa(eo, a, e);
      }
    }
    function JR(e) {
      {
        if (!Lo(e) || e.tag !== A)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case B:
              return t.stateNode.context;
            case A: {
              var a = t.type;
              if (to(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Gu = 0, Mm = 1, eu = null, u0 = !1, s0 = !1;
    function j1(e) {
      eu === null ? eu = [e] : eu.push(e);
    }
    function eT(e) {
      u0 = !0, j1(e);
    }
    function P1() {
      u0 && qu();
    }
    function qu() {
      if (!s0 && eu !== null) {
        s0 = !0;
        var e = 0, t = Pa();
        try {
          var a = !0, i = eu;
          for (Vn(Mr); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          eu = null, u0 = !1;
        } catch (s) {
          throw eu !== null && (eu = eu.slice(e + 1)), Xd(Os, qu), s;
        } finally {
          Vn(t), s0 = !1;
        }
      }
      return null;
    }
    var Kf = [], Zf = 0, Am = null, Um = 0, Pi = [], Hi = 0, dc = null, tu = 1, nu = "";
    function tT(e) {
      return vc(), (e.flags & Di) !== Be;
    }
    function nT(e) {
      return vc(), Um;
    }
    function rT() {
      var e = nu, t = tu, a = t & ~aT(t);
      return a.toString(32) + e;
    }
    function pc(e, t) {
      vc(), Kf[Zf++] = Um, Kf[Zf++] = Am, Am = e, Um = t;
    }
    function H1(e, t, a) {
      vc(), Pi[Hi++] = tu, Pi[Hi++] = nu, Pi[Hi++] = dc, dc = e;
      var i = tu, o = nu, s = Fm(i) - 1, p = i & ~(1 << s), m = a + 1, y = Fm(t) + s;
      if (y > 30) {
        var C = s - s % 5, x = (1 << C) - 1, z = (p & x).toString(32), O = p >> C, H = s - C, I = Fm(t) + H, Q = m << H, Ce = Q | O, We = z + o;
        tu = 1 << I | Ce, nu = We;
      } else {
        var je = m << s, Mt = je | p, kt = o;
        tu = 1 << y | Mt, nu = kt;
      }
    }
    function c0(e) {
      vc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        pc(e, a), H1(e, a, i);
      }
    }
    function Fm(e) {
      return 32 - Pn(e);
    }
    function aT(e) {
      return 1 << Fm(e) - 1;
    }
    function f0(e) {
      for (; e === Am; )
        Am = Kf[--Zf], Kf[Zf] = null, Um = Kf[--Zf], Kf[Zf] = null;
      for (; e === dc; )
        dc = Pi[--Hi], Pi[Hi] = null, nu = Pi[--Hi], Pi[Hi] = null, tu = Pi[--Hi], Pi[Hi] = null;
    }
    function iT() {
      return vc(), dc !== null ? {
        id: tu,
        overflow: nu
      } : null;
    }
    function lT(e, t) {
      vc(), Pi[Hi++] = tu, Pi[Hi++] = nu, Pi[Hi++] = dc, tu = t.id, nu = t.overflow, dc = e;
    }
    function vc() {
      Pr() || _("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var jr = null, Vi = null, dl = !1, hc = !1, Xu = null;
    function oT() {
      dl && _("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function V1() {
      hc = !0;
    }
    function uT() {
      return hc;
    }
    function sT(e) {
      var t = e.stateNode.containerInfo;
      return Vi = TR(t), jr = e, dl = !0, Xu = null, hc = !1, !0;
    }
    function cT(e, t, a) {
      return Vi = kR(t), jr = e, dl = !0, Xu = null, hc = !1, a !== null && lT(e, a), !0;
    }
    function B1(e, t) {
      switch (e.tag) {
        case B: {
          jR(e.stateNode.containerInfo, t);
          break;
        }
        case Z: {
          var a = (e.mode & Et) !== $e;
          HR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case me: {
          var i = e.memoizedState;
          i.dehydrated !== null && PR(i.dehydrated, t);
          break;
        }
      }
    }
    function $1(e, t) {
      B1(e, t);
      var a = v2();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= za) : i.push(a);
    }
    function d0(e, t) {
      {
        if (hc)
          return;
        switch (e.tag) {
          case B: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case Z:
                var i = t.type;
                t.pendingProps, VR(a, i);
                break;
              case ae:
                var o = t.pendingProps;
                BR(a, o);
                break;
            }
            break;
          }
          case Z: {
            var s = e.type, p = e.memoizedProps, m = e.stateNode;
            switch (t.tag) {
              case Z: {
                var y = t.type, C = t.pendingProps, x = (e.mode & Et) !== $e;
                YR(
                  s,
                  p,
                  m,
                  y,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
              case ae: {
                var z = t.pendingProps, O = (e.mode & Et) !== $e;
                QR(
                  s,
                  p,
                  m,
                  z,
                  // TODO: Delete this argument when we remove the legacy root API.
                  O
                );
                break;
              }
            }
            break;
          }
          case me: {
            var H = e.memoizedState, I = H.dehydrated;
            if (I !== null) switch (t.tag) {
              case Z:
                var Q = t.type;
                t.pendingProps, $R(I, Q);
                break;
              case ae:
                var Ce = t.pendingProps;
                IR(I, Ce);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function I1(e, t) {
      t.flags = t.flags & -4097 | Tn, d0(e, t);
    }
    function Y1(e, t) {
      switch (e.tag) {
        case Z: {
          var a = e.type;
          e.pendingProps;
          var i = ER(t, a);
          return i !== null ? (e.stateNode = i, jr = e, Vi = RR(i), !0) : !1;
        }
        case ae: {
          var o = e.pendingProps, s = CR(t, o);
          return s !== null ? (e.stateNode = s, jr = e, Vi = null, !0) : !1;
        }
        case me: {
          var p = bR(t);
          if (p !== null) {
            var m = {
              dehydrated: p,
              treeContext: iT(),
              retryLane: Sa
            };
            e.memoizedState = m;
            var y = h2(p);
            return y.return = e, e.child = y, jr = e, Vi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function p0(e) {
      return (e.mode & Et) !== $e && (e.flags & Ve) === Be;
    }
    function v0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function h0(e) {
      if (dl) {
        var t = Vi;
        if (!t) {
          p0(e) && (d0(jr, e), v0()), I1(jr, e), dl = !1, jr = e;
          return;
        }
        var a = t;
        if (!Y1(e, t)) {
          p0(e) && (d0(jr, e), v0()), t = Ip(a);
          var i = jr;
          if (!t || !Y1(e, t)) {
            I1(jr, e), dl = !1, jr = e;
            return;
          }
          $1(i, a);
        }
      }
    }
    function fT(e, t, a) {
      var i = e.stateNode, o = !hc, s = DR(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function dT(e) {
      var t = e.stateNode, a = e.memoizedProps, i = OR(t, a, e);
      if (i) {
        var o = jr;
        if (o !== null)
          switch (o.tag) {
            case B: {
              var s = o.stateNode.containerInfo, p = (o.mode & Et) !== $e;
              UR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                p
              );
              break;
            }
            case Z: {
              var m = o.type, y = o.memoizedProps, C = o.stateNode, x = (o.mode & Et) !== $e;
              FR(
                m,
                y,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
          }
      }
      return i;
    }
    function pT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      NR(a, e);
    }
    function vT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return zR(a);
    }
    function Q1(e) {
      for (var t = e.return; t !== null && t.tag !== Z && t.tag !== B && t.tag !== me; )
        t = t.return;
      jr = t;
    }
    function jm(e) {
      if (e !== jr)
        return !1;
      if (!dl)
        return Q1(e), dl = !0, !1;
      if (e.tag !== B && (e.tag !== Z || AR(e.type) && !Xg(e.type, e.memoizedProps))) {
        var t = Vi;
        if (t)
          if (p0(e))
            W1(e), v0();
          else
            for (; t; )
              $1(e, t), t = Ip(t);
      }
      return Q1(e), e.tag === me ? Vi = vT(e) : Vi = jr ? Ip(e.stateNode) : null, !0;
    }
    function hT() {
      return dl && Vi !== null;
    }
    function W1(e) {
      for (var t = Vi; t; )
        B1(e, t), t = Ip(t);
    }
    function Jf() {
      jr = null, Vi = null, dl = !1, hc = !1;
    }
    function G1() {
      Xu !== null && (VC(Xu), Xu = null);
    }
    function Pr() {
      return dl;
    }
    function m0(e) {
      Xu === null ? Xu = [e] : Xu.push(e);
    }
    var mT = h.ReactCurrentBatchConfig, yT = null;
    function gT() {
      return mT.transition;
    }
    var pl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var ST = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & tn && (t = a), a = a.return;
        return t;
      }, mc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Gp = [], qp = [], Xp = [], Kp = [], Zp = [], Jp = [], yc = /* @__PURE__ */ new Set();
      pl.recordUnsafeLifecycleWarnings = function(e, t) {
        yc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Gp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillMount == "function" && qp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Xp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Kp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Zp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillUpdate == "function" && Jp.push(e));
      }, pl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Gp.length > 0 && (Gp.forEach(function(O) {
          e.add(et(O) || "Component"), yc.add(O.type);
        }), Gp = []);
        var t = /* @__PURE__ */ new Set();
        qp.length > 0 && (qp.forEach(function(O) {
          t.add(et(O) || "Component"), yc.add(O.type);
        }), qp = []);
        var a = /* @__PURE__ */ new Set();
        Xp.length > 0 && (Xp.forEach(function(O) {
          a.add(et(O) || "Component"), yc.add(O.type);
        }), Xp = []);
        var i = /* @__PURE__ */ new Set();
        Kp.length > 0 && (Kp.forEach(function(O) {
          i.add(et(O) || "Component"), yc.add(O.type);
        }), Kp = []);
        var o = /* @__PURE__ */ new Set();
        Zp.length > 0 && (Zp.forEach(function(O) {
          o.add(et(O) || "Component"), yc.add(O.type);
        }), Zp = []);
        var s = /* @__PURE__ */ new Set();
        if (Jp.length > 0 && (Jp.forEach(function(O) {
          s.add(et(O) || "Component"), yc.add(O.type);
        }), Jp = []), t.size > 0) {
          var p = mc(t);
          _(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, p);
        }
        if (i.size > 0) {
          var m = mc(i);
          _(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, m);
        }
        if (s.size > 0) {
          var y = mc(s);
          _(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var C = mc(e);
          k(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var x = mc(a);
          k(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (o.size > 0) {
          var z = mc(o);
          k(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, z);
        }
      };
      var Pm = /* @__PURE__ */ new Map(), q1 = /* @__PURE__ */ new Set();
      pl.recordLegacyContextWarning = function(e, t) {
        var a = ST(e);
        if (a === null) {
          _("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!q1.has(e.type)) {
          var i = Pm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Pm.set(a, i)), i.push(e));
        }
      }, pl.flushLegacyContextWarning = function() {
        Pm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(et(s) || "Component"), q1.add(s.type);
            });
            var o = mc(i);
            try {
              Zt(a), _(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              pn();
            }
          }
        });
      }, pl.discardPendingWarnings = function() {
        Gp = [], qp = [], Xp = [], Kp = [], Zp = [], Jp = [], Pm = /* @__PURE__ */ new Map();
      };
    }
    var y0, g0, S0, _0, E0, X1 = function(e, t) {
    };
    y0 = !1, g0 = !1, S0 = {}, _0 = {}, E0 = {}, X1 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = et(t) || "Component";
        _0[a] || (_0[a] = !0, _('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function _T(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function ev(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & tn || q) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== A) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !_T(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var o = et(e) || "Component";
          S0[o] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, i), S0[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, p;
          if (s) {
            var m = s;
            if (m.tag !== A)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            p = m.stateNode;
          }
          if (!p)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = p;
          yi(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var x = function(z) {
            var O = y.refs;
            z === null ? delete O[C] : O[C] = z;
          };
          return x._stringRef = C, x;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Hm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Vm(e) {
      {
        var t = et(e) || "Component";
        if (E0[t])
          return;
        E0[t] = !0, _("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function K1(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Z1(e) {
      function t(U, W) {
        if (e) {
          var F = U.deletions;
          F === null ? (U.deletions = [W], U.flags |= za) : F.push(W);
        }
      }
      function a(U, W) {
        if (!e)
          return null;
        for (var F = W; F !== null; )
          t(U, F), F = F.sibling;
        return null;
      }
      function i(U, W) {
        for (var F = /* @__PURE__ */ new Map(), le = W; le !== null; )
          le.key !== null ? F.set(le.key, le) : F.set(le.index, le), le = le.sibling;
        return F;
      }
      function o(U, W) {
        var F = Rc(U, W);
        return F.index = 0, F.sibling = null, F;
      }
      function s(U, W, F) {
        if (U.index = F, !e)
          return U.flags |= Di, W;
        var le = U.alternate;
        if (le !== null) {
          var ke = le.index;
          return ke < W ? (U.flags |= Tn, W) : ke;
        } else
          return U.flags |= Tn, W;
      }
      function p(U) {
        return e && U.alternate === null && (U.flags |= Tn), U;
      }
      function m(U, W, F, le) {
        if (W === null || W.tag !== ae) {
          var ke = m_(F, U.mode, le);
          return ke.return = U, ke;
        } else {
          var xe = o(W, F);
          return xe.return = U, xe;
        }
      }
      function y(U, W, F, le) {
        var ke = F.type;
        if (ke === Si)
          return x(U, W, F.props.children, le, F.key);
        if (W !== null && (W.elementType === ke || // Keep this check inline so it only runs on the false path:
        rb(W, F) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ke == "object" && ke !== null && ke.$$typeof === rt && K1(ke) === W.type)) {
          var xe = o(W, F.props);
          return xe.ref = ev(U, W, F), xe.return = U, xe._debugSource = F._source, xe._debugOwner = F._owner, xe;
        }
        var Je = h_(F, U.mode, le);
        return Je.ref = ev(U, W, F), Je.return = U, Je;
      }
      function C(U, W, F, le) {
        if (W === null || W.tag !== K || W.stateNode.containerInfo !== F.containerInfo || W.stateNode.implementation !== F.implementation) {
          var ke = y_(F, U.mode, le);
          return ke.return = U, ke;
        } else {
          var xe = o(W, F.children || []);
          return xe.return = U, xe;
        }
      }
      function x(U, W, F, le, ke) {
        if (W === null || W.tag !== de) {
          var xe = os(F, U.mode, le, ke);
          return xe.return = U, xe;
        } else {
          var Je = o(W, F);
          return Je.return = U, Je;
        }
      }
      function z(U, W, F) {
        if (typeof W == "string" && W !== "" || typeof W == "number") {
          var le = m_("" + W, U.mode, F);
          return le.return = U, le;
        }
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case Or: {
              var ke = h_(W, U.mode, F);
              return ke.ref = ev(U, null, W), ke.return = U, ke;
            }
            case lr: {
              var xe = y_(W, U.mode, F);
              return xe.return = U, xe;
            }
            case rt: {
              var Je = W._payload, it = W._init;
              return z(U, it(Je), F);
            }
          }
          if (mt(W) || ot(W)) {
            var rn = os(W, U.mode, F, null);
            return rn.return = U, rn;
          }
          Hm(U, W);
        }
        return typeof W == "function" && Vm(U), null;
      }
      function O(U, W, F, le) {
        var ke = W !== null ? W.key : null;
        if (typeof F == "string" && F !== "" || typeof F == "number")
          return ke !== null ? null : m(U, W, "" + F, le);
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case Or:
              return F.key === ke ? y(U, W, F, le) : null;
            case lr:
              return F.key === ke ? C(U, W, F, le) : null;
            case rt: {
              var xe = F._payload, Je = F._init;
              return O(U, W, Je(xe), le);
            }
          }
          if (mt(F) || ot(F))
            return ke !== null ? null : x(U, W, F, le, null);
          Hm(U, F);
        }
        return typeof F == "function" && Vm(U), null;
      }
      function H(U, W, F, le, ke) {
        if (typeof le == "string" && le !== "" || typeof le == "number") {
          var xe = U.get(F) || null;
          return m(W, xe, "" + le, ke);
        }
        if (typeof le == "object" && le !== null) {
          switch (le.$$typeof) {
            case Or: {
              var Je = U.get(le.key === null ? F : le.key) || null;
              return y(W, Je, le, ke);
            }
            case lr: {
              var it = U.get(le.key === null ? F : le.key) || null;
              return C(W, it, le, ke);
            }
            case rt:
              var rn = le._payload, It = le._init;
              return H(U, W, F, It(rn), ke);
          }
          if (mt(le) || ot(le)) {
            var Jn = U.get(F) || null;
            return x(W, Jn, le, ke, null);
          }
          Hm(W, le);
        }
        return typeof le == "function" && Vm(W), null;
      }
      function I(U, W, F) {
        {
          if (typeof U != "object" || U === null)
            return W;
          switch (U.$$typeof) {
            case Or:
            case lr:
              X1(U, F);
              var le = U.key;
              if (typeof le != "string")
                break;
              if (W === null) {
                W = /* @__PURE__ */ new Set(), W.add(le);
                break;
              }
              if (!W.has(le)) {
                W.add(le);
                break;
              }
              _("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", le);
              break;
            case rt:
              var ke = U._payload, xe = U._init;
              I(xe(ke), W, F);
              break;
          }
        }
        return W;
      }
      function Q(U, W, F, le) {
        for (var ke = null, xe = 0; xe < F.length; xe++) {
          var Je = F[xe];
          ke = I(Je, ke, U);
        }
        for (var it = null, rn = null, It = W, Jn = 0, Yt = 0, In = null; It !== null && Yt < F.length; Yt++) {
          It.index > Yt ? (In = It, It = null) : In = It.sibling;
          var sa = O(U, It, F[Yt], le);
          if (sa === null) {
            It === null && (It = In);
            break;
          }
          e && It && sa.alternate === null && t(U, It), Jn = s(sa, Jn, Yt), rn === null ? it = sa : rn.sibling = sa, rn = sa, It = In;
        }
        if (Yt === F.length) {
          if (a(U, It), Pr()) {
            var Qr = Yt;
            pc(U, Qr);
          }
          return it;
        }
        if (It === null) {
          for (; Yt < F.length; Yt++) {
            var vi = z(U, F[Yt], le);
            vi !== null && (Jn = s(vi, Jn, Yt), rn === null ? it = vi : rn.sibling = vi, rn = vi);
          }
          if (Pr()) {
            var wa = Yt;
            pc(U, wa);
          }
          return it;
        }
        for (var Ra = i(U, It); Yt < F.length; Yt++) {
          var ca = H(Ra, U, Yt, F[Yt], le);
          ca !== null && (e && ca.alternate !== null && Ra.delete(ca.key === null ? Yt : ca.key), Jn = s(ca, Jn, Yt), rn === null ? it = ca : rn.sibling = ca, rn = ca);
        }
        if (e && Ra.forEach(function(gd) {
          return t(U, gd);
        }), Pr()) {
          var su = Yt;
          pc(U, su);
        }
        return it;
      }
      function Ce(U, W, F, le) {
        var ke = ot(F);
        if (typeof ke != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          F[Symbol.toStringTag] === "Generator" && (g0 || _("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), g0 = !0), F.entries === ke && (y0 || _("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), y0 = !0);
          var xe = ke.call(F);
          if (xe)
            for (var Je = null, it = xe.next(); !it.done; it = xe.next()) {
              var rn = it.value;
              Je = I(rn, Je, U);
            }
        }
        var It = ke.call(F);
        if (It == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Jn = null, Yt = null, In = W, sa = 0, Qr = 0, vi = null, wa = It.next(); In !== null && !wa.done; Qr++, wa = It.next()) {
          In.index > Qr ? (vi = In, In = null) : vi = In.sibling;
          var Ra = O(U, In, wa.value, le);
          if (Ra === null) {
            In === null && (In = vi);
            break;
          }
          e && In && Ra.alternate === null && t(U, In), sa = s(Ra, sa, Qr), Yt === null ? Jn = Ra : Yt.sibling = Ra, Yt = Ra, In = vi;
        }
        if (wa.done) {
          if (a(U, In), Pr()) {
            var ca = Qr;
            pc(U, ca);
          }
          return Jn;
        }
        if (In === null) {
          for (; !wa.done; Qr++, wa = It.next()) {
            var su = z(U, wa.value, le);
            su !== null && (sa = s(su, sa, Qr), Yt === null ? Jn = su : Yt.sibling = su, Yt = su);
          }
          if (Pr()) {
            var gd = Qr;
            pc(U, gd);
          }
          return Jn;
        }
        for (var zv = i(U, In); !wa.done; Qr++, wa = It.next()) {
          var so = H(zv, U, Qr, wa.value, le);
          so !== null && (e && so.alternate !== null && zv.delete(so.key === null ? Qr : so.key), sa = s(so, sa, Qr), Yt === null ? Jn = so : Yt.sibling = so, Yt = so);
        }
        if (e && zv.forEach(function(Q2) {
          return t(U, Q2);
        }), Pr()) {
          var Y2 = Qr;
          pc(U, Y2);
        }
        return Jn;
      }
      function We(U, W, F, le) {
        if (W !== null && W.tag === ae) {
          a(U, W.sibling);
          var ke = o(W, F);
          return ke.return = U, ke;
        }
        a(U, W);
        var xe = m_(F, U.mode, le);
        return xe.return = U, xe;
      }
      function je(U, W, F, le) {
        for (var ke = F.key, xe = W; xe !== null; ) {
          if (xe.key === ke) {
            var Je = F.type;
            if (Je === Si) {
              if (xe.tag === de) {
                a(U, xe.sibling);
                var it = o(xe, F.props.children);
                return it.return = U, it._debugSource = F._source, it._debugOwner = F._owner, it;
              }
            } else if (xe.elementType === Je || // Keep this check inline so it only runs on the false path:
            rb(xe, F) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Je == "object" && Je !== null && Je.$$typeof === rt && K1(Je) === xe.type) {
              a(U, xe.sibling);
              var rn = o(xe, F.props);
              return rn.ref = ev(U, xe, F), rn.return = U, rn._debugSource = F._source, rn._debugOwner = F._owner, rn;
            }
            a(U, xe);
            break;
          } else
            t(U, xe);
          xe = xe.sibling;
        }
        if (F.type === Si) {
          var It = os(F.props.children, U.mode, le, F.key);
          return It.return = U, It;
        } else {
          var Jn = h_(F, U.mode, le);
          return Jn.ref = ev(U, W, F), Jn.return = U, Jn;
        }
      }
      function Mt(U, W, F, le) {
        for (var ke = F.key, xe = W; xe !== null; ) {
          if (xe.key === ke)
            if (xe.tag === K && xe.stateNode.containerInfo === F.containerInfo && xe.stateNode.implementation === F.implementation) {
              a(U, xe.sibling);
              var Je = o(xe, F.children || []);
              return Je.return = U, Je;
            } else {
              a(U, xe);
              break;
            }
          else
            t(U, xe);
          xe = xe.sibling;
        }
        var it = y_(F, U.mode, le);
        return it.return = U, it;
      }
      function kt(U, W, F, le) {
        var ke = typeof F == "object" && F !== null && F.type === Si && F.key === null;
        if (ke && (F = F.props.children), typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case Or:
              return p(je(U, W, F, le));
            case lr:
              return p(Mt(U, W, F, le));
            case rt:
              var xe = F._payload, Je = F._init;
              return kt(U, W, Je(xe), le);
          }
          if (mt(F))
            return Q(U, W, F, le);
          if (ot(F))
            return Ce(U, W, F, le);
          Hm(U, F);
        }
        return typeof F == "string" && F !== "" || typeof F == "number" ? p(We(U, W, "" + F, le)) : (typeof F == "function" && Vm(U), a(U, W));
      }
      return kt;
    }
    var ed = Z1(!0), J1 = Z1(!1);
    function ET(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Rc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Rc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function CT(e, t) {
      for (var a = e.child; a !== null; )
        s2(a, t), a = a.sibling;
    }
    var C0 = Wu(null), b0;
    b0 = {};
    var Bm = null, td = null, x0 = null, $m = !1;
    function Im() {
      Bm = null, td = null, x0 = null, $m = !1;
    }
    function eE() {
      $m = !0;
    }
    function tE() {
      $m = !1;
    }
    function nE(e, t, a) {
      oa(C0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== b0 && _("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = b0;
    }
    function w0(e, t) {
      var a = C0.current;
      la(C0, t), e._currentValue = a;
    }
    function R0(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Qo(i.childLanes, t) ? o !== null && !Qo(o.childLanes, t) && (o.childLanes = ut(o.childLanes, t)) : (i.childLanes = ut(i.childLanes, t), o !== null && (o.childLanes = ut(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && _("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function bT(e, t, a) {
      xT(e, t, a);
    }
    function xT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var p = s.firstContext; p !== null; ) {
            if (p.context === t) {
              if (i.tag === A) {
                var m = Is(a), y = ru(an, m);
                y.tag = Qm;
                var C = i.updateQueue;
                if (C !== null) {
                  var x = C.shared, z = x.pending;
                  z === null ? y.next = y : (y.next = z.next, z.next = y), x.pending = y;
                }
              }
              i.lanes = ut(i.lanes, a);
              var O = i.alternate;
              O !== null && (O.lanes = ut(O.lanes, a)), R0(i.return, a, e), s.lanes = ut(s.lanes, a);
              break;
            }
            p = p.next;
          }
        } else if (i.tag === ve)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === dt) {
          var H = i.return;
          if (H === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          H.lanes = ut(H.lanes, a);
          var I = H.alternate;
          I !== null && (I.lanes = ut(I.lanes, a)), R0(H, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var Q = o.sibling;
            if (Q !== null) {
              Q.return = o.return, o = Q;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function nd(e, t) {
      Bm = e, td = null, x0 = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (na(a.lanes, t) && hv(), a.firstContext = null);
      }
    }
    function ar(e) {
      $m && _("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (x0 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (td === null) {
          if (Bm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          td = a, Bm.dependencies = {
            lanes: te,
            firstContext: a
          };
        } else
          td = td.next = a;
      }
      return t;
    }
    var gc = null;
    function T0(e) {
      gc === null ? gc = [e] : gc.push(e);
    }
    function wT() {
      if (gc !== null) {
        for (var e = 0; e < gc.length; e++) {
          var t = gc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        gc = null;
      }
    }
    function rE(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, T0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Ym(e, i);
    }
    function RT(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, T0(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function TT(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, T0(t)) : (a.next = o.next, o.next = a), t.interleaved = a, Ym(e, i);
    }
    function Ba(e, t) {
      return Ym(e, t);
    }
    var kT = Ym;
    function Ym(e, t) {
      e.lanes = ut(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ut(a.lanes, t)), a === null && (e.flags & (Tn | La)) !== Be && JC(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = ut(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = ut(a.childLanes, t) : (o.flags & (Tn | La)) !== Be && JC(e), i = o, o = o.return;
      if (i.tag === B) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var aE = 0, iE = 1, Qm = 2, k0 = 3, Wm = !1, D0, Gm;
    D0 = !1, Gm = null;
    function O0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: te
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function lE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function ru(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: aE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ku(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (Gm === o && !D0 && (_("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), D0 = !0), RD()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, kT(e, a);
      } else
        return TT(e, o, t, a);
    }
    function qm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (pp(a)) {
          var s = o.lanes;
          s = hp(s, e.pendingLanes);
          var p = ut(s, a);
          o.lanes = p, Tf(e, p);
        }
      }
    }
    function N0(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, p = null, m = a.firstBaseUpdate;
          if (m !== null) {
            var y = m;
            do {
              var C = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              p === null ? s = p = C : (p.next = C, p = C), y = y.next;
            } while (y !== null);
            p === null ? s = p = t : (p.next = t, p = t);
          } else
            s = p = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: p,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var x = a.lastBaseUpdate;
      x === null ? a.firstBaseUpdate = t : x.next = t, a.lastBaseUpdate = t;
    }
    function DT(e, t, a, i, o, s) {
      switch (a.tag) {
        case iE: {
          var p = a.payload;
          if (typeof p == "function") {
            eE();
            var m = p.call(s, i, o);
            {
              if (e.mode & tn) {
                Sn(!0);
                try {
                  p.call(s, i, o);
                } finally {
                  Sn(!1);
                }
              }
              tE();
            }
            return m;
          }
          return p;
        }
        case k0:
          e.flags = e.flags & -65537 | Ve;
        // Intentional fallthrough
        case aE: {
          var y = a.payload, C;
          if (typeof y == "function") {
            eE(), C = y.call(s, i, o);
            {
              if (e.mode & tn) {
                Sn(!0);
                try {
                  y.call(s, i, o);
                } finally {
                  Sn(!1);
                }
              }
              tE();
            }
          } else
            C = y;
          return C == null ? i : ft({}, i, C);
        }
        case Qm:
          return Wm = !0, i;
      }
      return i;
    }
    function Xm(e, t, a, i) {
      var o = e.updateQueue;
      Wm = !1, Gm = o.shared;
      var s = o.firstBaseUpdate, p = o.lastBaseUpdate, m = o.shared.pending;
      if (m !== null) {
        o.shared.pending = null;
        var y = m, C = y.next;
        y.next = null, p === null ? s = C : p.next = C, p = y;
        var x = e.alternate;
        if (x !== null) {
          var z = x.updateQueue, O = z.lastBaseUpdate;
          O !== p && (O === null ? z.firstBaseUpdate = C : O.next = C, z.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var H = o.baseState, I = te, Q = null, Ce = null, We = null, je = s;
        do {
          var Mt = je.lane, kt = je.eventTime;
          if (Qo(i, Mt)) {
            if (We !== null) {
              var W = {
                eventTime: kt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: jt,
                tag: je.tag,
                payload: je.payload,
                callback: je.callback,
                next: null
              };
              We = We.next = W;
            }
            H = DT(e, o, je, H, t, a);
            var F = je.callback;
            if (F !== null && // If the update was already committed, we should not queue its
            // callback again.
            je.lane !== jt) {
              e.flags |= cn;
              var le = o.effects;
              le === null ? o.effects = [je] : le.push(je);
            }
          } else {
            var U = {
              eventTime: kt,
              lane: Mt,
              tag: je.tag,
              payload: je.payload,
              callback: je.callback,
              next: null
            };
            We === null ? (Ce = We = U, Q = H) : We = We.next = U, I = ut(I, Mt);
          }
          if (je = je.next, je === null) {
            if (m = o.shared.pending, m === null)
              break;
            var ke = m, xe = ke.next;
            ke.next = null, je = xe, o.lastBaseUpdate = ke, o.shared.pending = null;
          }
        } while (!0);
        We === null && (Q = H), o.baseState = Q, o.firstBaseUpdate = Ce, o.lastBaseUpdate = We;
        var Je = o.shared.interleaved;
        if (Je !== null) {
          var it = Je;
          do
            I = ut(I, it.lane), it = it.next;
          while (it !== Je);
        } else s === null && (o.shared.lanes = te);
        Tv(I), e.lanes = I, e.memoizedState = H;
      }
      Gm = null;
    }
    function OT(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function oE() {
      Wm = !1;
    }
    function Km() {
      return Wm;
    }
    function uE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], p = s.callback;
          p !== null && (s.callback = null, OT(p, a));
        }
    }
    var tv = {}, Zu = Wu(tv), nv = Wu(tv), Zm = Wu(tv);
    function Jm(e) {
      if (e === tv)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function sE() {
      var e = Jm(Zm.current);
      return e;
    }
    function z0(e, t) {
      oa(Zm, t, e), oa(nv, e, e), oa(Zu, tv, e);
      var a = Ww(t);
      la(Zu, e), oa(Zu, a, e);
    }
    function rd(e) {
      la(Zu, e), la(nv, e), la(Zm, e);
    }
    function L0() {
      var e = Jm(Zu.current);
      return e;
    }
    function cE(e) {
      Jm(Zm.current);
      var t = Jm(Zu.current), a = Gw(t, e.type);
      t !== a && (oa(nv, e, e), oa(Zu, a, e));
    }
    function M0(e) {
      nv.current === e && (la(Zu, e), la(nv, e));
    }
    var NT = 0, fE = 1, dE = 1, rv = 2, vl = Wu(NT);
    function A0(e, t) {
      return (e & t) !== 0;
    }
    function ad(e) {
      return e & fE;
    }
    function U0(e, t) {
      return e & fE | t;
    }
    function zT(e, t) {
      return e | t;
    }
    function Ju(e, t) {
      oa(vl, t, e);
    }
    function id(e) {
      la(vl, e);
    }
    function LT(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ey(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === me) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || D1(i) || e0(i))
              return t;
          }
        } else if (t.tag === Ft && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & Ve) !== Be;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var $a = (
      /*   */
      0
    ), pr = (
      /* */
      1
    ), no = (
      /*  */
      2
    ), vr = (
      /*    */
      4
    ), Hr = (
      /*   */
      8
    ), F0 = [];
    function j0() {
      for (var e = 0; e < F0.length; e++) {
        var t = F0[e];
        t._workInProgressVersionPrimary = null;
      }
      F0.length = 0;
    }
    function MT(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Re = h.ReactCurrentDispatcher, av = h.ReactCurrentBatchConfig, P0, ld;
    P0 = /* @__PURE__ */ new Set();
    var Sc = te, nn = null, hr = null, mr = null, ty = !1, iv = !1, lv = 0, AT = 0, UT = 25, X = null, Bi = null, es = -1, H0 = !1;
    function Gt() {
      {
        var e = X;
        Bi === null ? Bi = [e] : Bi.push(e);
      }
    }
    function ye() {
      {
        var e = X;
        Bi !== null && (es++, Bi[es] !== e && FT(e));
      }
    }
    function od(e) {
      e != null && !mt(e) && _("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", X, typeof e);
    }
    function FT(e) {
      {
        var t = et(nn);
        if (!P0.has(t) && (P0.add(t), Bi !== null)) {
          for (var a = "", i = 30, o = 0; o <= es; o++) {
            for (var s = Bi[o], p = o === es ? e : s, m = o + 1 + ". " + s; m.length < i; )
              m += " ";
            m += p + `
`, a += m;
          }
          _(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ua() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function V0(e, t) {
      if (H0)
        return !1;
      if (t === null)
        return _("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", X), !1;
      e.length !== t.length && _(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, X, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!be(e[a], t[a]))
          return !1;
      return !0;
    }
    function ud(e, t, a, i, o, s) {
      Sc = s, nn = t, Bi = e !== null ? e._debugHookTypes : null, es = -1, H0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = te, e !== null && e.memoizedState !== null ? Re.current = ME : Bi !== null ? Re.current = LE : Re.current = zE;
      var p = a(i, o);
      if (iv) {
        var m = 0;
        do {
          if (iv = !1, lv = 0, m >= UT)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          m += 1, H0 = !1, hr = null, mr = null, t.updateQueue = null, es = -1, Re.current = AE, p = a(i, o);
        } while (iv);
      }
      Re.current = vy, t._debugHookTypes = Bi;
      var y = hr !== null && hr.next !== null;
      if (Sc = te, nn = null, hr = null, mr = null, X = null, Bi = null, es = -1, e !== null && (e.flags & jn) !== (t.flags & jn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Et) !== $e && _("Internal React error: Expected static flag was missing. Please notify the React team."), ty = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return p;
    }
    function sd() {
      var e = lv !== 0;
      return lv = 0, e;
    }
    function pE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Bt) !== $e ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ys(e.lanes, a);
    }
    function vE() {
      if (Re.current = vy, ty) {
        for (var e = nn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        ty = !1;
      }
      Sc = te, nn = null, hr = null, mr = null, Bi = null, es = -1, X = null, TE = !1, iv = !1, lv = 0;
    }
    function ro() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? nn.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function $i() {
      var e;
      if (hr === null) {
        var t = nn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = nn.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? nn.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function hE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function B0(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function $0(e, t, a) {
      var i = ro(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var p = s.dispatch = VT.bind(null, nn, s);
      return [i.memoizedState, p];
    }
    function I0(e, t, a) {
      var i = $i(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = hr, p = s.baseQueue, m = o.pending;
      if (m !== null) {
        if (p !== null) {
          var y = p.next, C = m.next;
          p.next = C, m.next = y;
        }
        s.baseQueue !== p && _("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = p = m, o.pending = null;
      }
      if (p !== null) {
        var x = p.next, z = s.baseState, O = null, H = null, I = null, Q = x;
        do {
          var Ce = Q.lane;
          if (Qo(Sc, Ce)) {
            if (I !== null) {
              var je = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: jt,
                action: Q.action,
                hasEagerState: Q.hasEagerState,
                eagerState: Q.eagerState,
                next: null
              };
              I = I.next = je;
            }
            if (Q.hasEagerState)
              z = Q.eagerState;
            else {
              var Mt = Q.action;
              z = e(z, Mt);
            }
          } else {
            var We = {
              lane: Ce,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            };
            I === null ? (H = I = We, O = z) : I = I.next = We, nn.lanes = ut(nn.lanes, Ce), Tv(Ce);
          }
          Q = Q.next;
        } while (Q !== null && Q !== x);
        I === null ? O = z : I.next = H, be(z, i.memoizedState) || hv(), i.memoizedState = z, i.baseState = O, i.baseQueue = I, o.lastRenderedState = z;
      }
      var kt = o.interleaved;
      if (kt !== null) {
        var U = kt;
        do {
          var W = U.lane;
          nn.lanes = ut(nn.lanes, W), Tv(W), U = U.next;
        } while (U !== kt);
      } else p === null && (o.lanes = te);
      var F = o.dispatch;
      return [i.memoizedState, F];
    }
    function Y0(e, t, a) {
      var i = $i(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, p = o.pending, m = i.memoizedState;
      if (p !== null) {
        o.pending = null;
        var y = p.next, C = y;
        do {
          var x = C.action;
          m = e(m, x), C = C.next;
        } while (C !== y);
        be(m, i.memoizedState) || hv(), i.memoizedState = m, i.baseQueue === null && (i.baseState = m), o.lastRenderedState = m;
      }
      return [m, s];
    }
    function QN(e, t, a) {
    }
    function WN(e, t, a) {
    }
    function Q0(e, t, a) {
      var i = nn, o = ro(), s, p = Pr();
      if (p) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), ld || s !== a() && (_("The result of getServerSnapshot should be cached to avoid an infinite loop"), ld = !0);
      } else {
        if (s = t(), !ld) {
          var m = t();
          be(s, m) || (_("The result of getSnapshot should be cached to avoid an infinite loop"), ld = !0);
        }
        var y = Ly();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        wf(y, Sc) || mE(i, t, s);
      }
      o.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return o.queue = C, ly(gE.bind(null, i, C, e), [e]), i.flags |= Kr, ov(pr | Hr, yE.bind(null, i, C, s, t), void 0, null), s;
    }
    function ny(e, t, a) {
      var i = nn, o = $i(), s = t();
      if (!ld) {
        var p = t();
        be(s, p) || (_("The result of getSnapshot should be cached to avoid an infinite loop"), ld = !0);
      }
      var m = o.memoizedState, y = !be(m, s);
      y && (o.memoizedState = s, hv());
      var C = o.queue;
      if (sv(gE.bind(null, i, C, e), [e]), C.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= Kr, ov(pr | Hr, yE.bind(null, i, C, s, t), void 0, null);
        var x = Ly();
        if (x === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        wf(x, Sc) || mE(i, t, s);
      }
      return s;
    }
    function mE(e, t, a) {
      e.flags |= Nu;
      var i = {
        getSnapshot: t,
        value: a
      }, o = nn.updateQueue;
      if (o === null)
        o = hE(), nn.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function yE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, SE(t) && _E(e);
    }
    function gE(e, t, a) {
      var i = function() {
        SE(t) && _E(e);
      };
      return a(i);
    }
    function SE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !be(a, i);
      } catch {
        return !0;
      }
    }
    function _E(e) {
      var t = Ba(e, Ke);
      t !== null && _r(t, e, Ke, an);
    }
    function ry(e) {
      var t = ro();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: te,
        dispatch: null,
        lastRenderedReducer: B0,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = BT.bind(null, nn, a);
      return [t.memoizedState, i];
    }
    function W0(e) {
      return I0(B0);
    }
    function G0(e) {
      return Y0(B0);
    }
    function ov(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = nn.updateQueue;
      if (s === null)
        s = hE(), nn.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var p = s.lastEffect;
        if (p === null)
          s.lastEffect = o.next = o;
        else {
          var m = p.next;
          p.next = o, o.next = m, s.lastEffect = o;
        }
      }
      return o;
    }
    function q0(e) {
      var t = ro();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function ay(e) {
      var t = $i();
      return t.memoizedState;
    }
    function uv(e, t, a, i) {
      var o = ro(), s = i === void 0 ? null : i;
      nn.flags |= e, o.memoizedState = ov(pr | t, a, void 0, s);
    }
    function iy(e, t, a, i) {
      var o = $i(), s = i === void 0 ? null : i, p = void 0;
      if (hr !== null) {
        var m = hr.memoizedState;
        if (p = m.destroy, s !== null) {
          var y = m.deps;
          if (V0(s, y)) {
            o.memoizedState = ov(t, a, p, s);
            return;
          }
        }
      }
      nn.flags |= e, o.memoizedState = ov(pr | t, a, p, s);
    }
    function ly(e, t) {
      return (nn.mode & Bt) !== $e ? uv(Oi | Kr | Kc, Hr, e, t) : uv(Kr | Kc, Hr, e, t);
    }
    function sv(e, t) {
      return iy(Kr, Hr, e, t);
    }
    function X0(e, t) {
      return uv(Nt, no, e, t);
    }
    function oy(e, t) {
      return iy(Nt, no, e, t);
    }
    function K0(e, t) {
      var a = Nt;
      return a |= nl, (nn.mode & Bt) !== $e && (a |= jl), uv(a, vr, e, t);
    }
    function uy(e, t) {
      return iy(Nt, vr, e, t);
    }
    function EE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || _("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function Z0(e, t, a) {
      typeof t != "function" && _("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Nt;
      return o |= nl, (nn.mode & Bt) !== $e && (o |= jl), uv(o, vr, EE.bind(null, t, e), i);
    }
    function sy(e, t, a) {
      typeof t != "function" && _("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return iy(Nt, vr, EE.bind(null, t, e), i);
    }
    function jT(e, t) {
    }
    var cy = jT;
    function J0(e, t) {
      var a = ro(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function fy(e, t) {
      var a = $i(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (V0(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function eS(e, t) {
      var a = ro(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function dy(e, t) {
      var a = $i(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (V0(i, s))
          return o[0];
      }
      var p = e();
      return a.memoizedState = [p, i], p;
    }
    function tS(e) {
      var t = ro();
      return t.memoizedState = e, e;
    }
    function CE(e) {
      var t = $i(), a = hr, i = a.memoizedState;
      return xE(t, i, e);
    }
    function bE(e) {
      var t = $i();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return xE(t, a, e);
    }
    function xE(e, t, a) {
      var i = !fp(Sc);
      if (i) {
        if (!be(a, t)) {
          var o = vp();
          nn.lanes = ut(nn.lanes, o), Tv(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, hv()), e.memoizedState = a, a;
    }
    function PT(e, t, a) {
      var i = Pa();
      Vn(Yh(i, Mi)), e(!0);
      var o = av.transition;
      av.transition = {};
      var s = av.transition;
      av.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Vn(i), av.transition = o, o === null && s._updatedFibers) {
          var p = s._updatedFibers.size;
          p > 10 && k("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function nS() {
      var e = ry(!1), t = e[0], a = e[1], i = PT.bind(null, a), o = ro();
      return o.memoizedState = i, [t, i];
    }
    function wE() {
      var e = W0(), t = e[0], a = $i(), i = a.memoizedState;
      return [t, i];
    }
    function RE() {
      var e = G0(), t = e[0], a = $i(), i = a.memoizedState;
      return [t, i];
    }
    var TE = !1;
    function HT() {
      return TE;
    }
    function rS() {
      var e = ro(), t = Ly(), a = t.identifierPrefix, i;
      if (Pr()) {
        var o = rT();
        i = ":" + a + "R" + o;
        var s = lv++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var p = AT++;
        i = ":" + a + "r" + p.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function py() {
      var e = $i(), t = e.memoizedState;
      return t;
    }
    function VT(e, t, a) {
      typeof arguments[3] == "function" && _("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = is(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (kE(e))
        DE(t, o);
      else {
        var s = rE(e, t, o, i);
        if (s !== null) {
          var p = xa();
          _r(s, e, i, p), OE(s, t, i);
        }
      }
      NE(e, i);
    }
    function BT(e, t, a) {
      typeof arguments[3] == "function" && _("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = is(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (kE(e))
        DE(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === te && (s === null || s.lanes === te)) {
          var p = t.lastRenderedReducer;
          if (p !== null) {
            var m;
            m = Re.current, Re.current = hl;
            try {
              var y = t.lastRenderedState, C = p(y, a);
              if (o.hasEagerState = !0, o.eagerState = C, be(C, y)) {
                RT(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Re.current = m;
            }
          }
        }
        var x = rE(e, t, o, i);
        if (x !== null) {
          var z = xa();
          _r(x, e, i, z), OE(x, t, i);
        }
      }
      NE(e, i);
    }
    function kE(e) {
      var t = e.alternate;
      return e === nn || t !== null && t === nn;
    }
    function DE(e, t) {
      iv = ty = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function OE(e, t, a) {
      if (pp(a)) {
        var i = t.lanes;
        i = hp(i, e.pendingLanes);
        var o = ut(i, a);
        t.lanes = o, Tf(e, o);
      }
    }
    function NE(e, t, a) {
      As(e, t);
    }
    var vy = {
      readContext: ar,
      useCallback: ua,
      useContext: ua,
      useEffect: ua,
      useImperativeHandle: ua,
      useInsertionEffect: ua,
      useLayoutEffect: ua,
      useMemo: ua,
      useReducer: ua,
      useRef: ua,
      useState: ua,
      useDebugValue: ua,
      useDeferredValue: ua,
      useTransition: ua,
      useMutableSource: ua,
      useSyncExternalStore: ua,
      useId: ua,
      unstable_isNewReconciler: fe
    }, zE = null, LE = null, ME = null, AE = null, ao = null, hl = null, hy = null;
    {
      var aS = function() {
        _("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, at = function() {
        _("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      zE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", Gt(), od(t), J0(e, t);
        },
        useContext: function(e) {
          return X = "useContext", Gt(), ar(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", Gt(), od(t), ly(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", Gt(), od(a), Z0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", Gt(), od(t), X0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", Gt(), od(t), K0(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", Gt(), od(t);
          var a = Re.current;
          Re.current = ao;
          try {
            return eS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", Gt();
          var i = Re.current;
          Re.current = ao;
          try {
            return $0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", Gt(), q0(e);
        },
        useState: function(e) {
          X = "useState", Gt();
          var t = Re.current;
          Re.current = ao;
          try {
            return ry(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", Gt(), tS(e);
        },
        useTransition: function() {
          return X = "useTransition", Gt(), nS();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", Gt(), Q0(e, t, a);
        },
        useId: function() {
          return X = "useId", Gt(), rS();
        },
        unstable_isNewReconciler: fe
      }, LE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", ye(), J0(e, t);
        },
        useContext: function(e) {
          return X = "useContext", ye(), ar(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", ye(), ly(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", ye(), Z0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", ye(), X0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", ye(), K0(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", ye();
          var a = Re.current;
          Re.current = ao;
          try {
            return eS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", ye();
          var i = Re.current;
          Re.current = ao;
          try {
            return $0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", ye(), q0(e);
        },
        useState: function(e) {
          X = "useState", ye();
          var t = Re.current;
          Re.current = ao;
          try {
            return ry(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", ye(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", ye(), tS(e);
        },
        useTransition: function() {
          return X = "useTransition", ye(), nS();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", ye(), Q0(e, t, a);
        },
        useId: function() {
          return X = "useId", ye(), rS();
        },
        unstable_isNewReconciler: fe
      }, ME = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", ye(), fy(e, t);
        },
        useContext: function(e) {
          return X = "useContext", ye(), ar(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", ye(), sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", ye(), sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", ye(), oy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", ye(), uy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", ye();
          var a = Re.current;
          Re.current = hl;
          try {
            return dy(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", ye();
          var i = Re.current;
          Re.current = hl;
          try {
            return I0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", ye(), ay();
        },
        useState: function(e) {
          X = "useState", ye();
          var t = Re.current;
          Re.current = hl;
          try {
            return W0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", ye(), cy();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", ye(), CE(e);
        },
        useTransition: function() {
          return X = "useTransition", ye(), wE();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", ye(), ny(e, t);
        },
        useId: function() {
          return X = "useId", ye(), py();
        },
        unstable_isNewReconciler: fe
      }, AE = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", ye(), fy(e, t);
        },
        useContext: function(e) {
          return X = "useContext", ye(), ar(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", ye(), sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", ye(), sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", ye(), oy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", ye(), uy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", ye();
          var a = Re.current;
          Re.current = hy;
          try {
            return dy(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", ye();
          var i = Re.current;
          Re.current = hy;
          try {
            return Y0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", ye(), ay();
        },
        useState: function(e) {
          X = "useState", ye();
          var t = Re.current;
          Re.current = hy;
          try {
            return G0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", ye(), cy();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", ye(), bE(e);
        },
        useTransition: function() {
          return X = "useTransition", ye(), RE();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", ye(), ny(e, t);
        },
        useId: function() {
          return X = "useId", ye(), py();
        },
        unstable_isNewReconciler: fe
      }, ao = {
        readContext: function(e) {
          return aS(), ar(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", at(), Gt(), J0(e, t);
        },
        useContext: function(e) {
          return X = "useContext", at(), Gt(), ar(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", at(), Gt(), ly(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", at(), Gt(), Z0(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", at(), Gt(), X0(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", at(), Gt(), K0(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", at(), Gt();
          var a = Re.current;
          Re.current = ao;
          try {
            return eS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", at(), Gt();
          var i = Re.current;
          Re.current = ao;
          try {
            return $0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", at(), Gt(), q0(e);
        },
        useState: function(e) {
          X = "useState", at(), Gt();
          var t = Re.current;
          Re.current = ao;
          try {
            return ry(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", at(), Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", at(), Gt(), tS(e);
        },
        useTransition: function() {
          return X = "useTransition", at(), Gt(), nS();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", at(), Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", at(), Gt(), Q0(e, t, a);
        },
        useId: function() {
          return X = "useId", at(), Gt(), rS();
        },
        unstable_isNewReconciler: fe
      }, hl = {
        readContext: function(e) {
          return aS(), ar(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", at(), ye(), fy(e, t);
        },
        useContext: function(e) {
          return X = "useContext", at(), ye(), ar(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", at(), ye(), sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", at(), ye(), sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", at(), ye(), oy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", at(), ye(), uy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", at(), ye();
          var a = Re.current;
          Re.current = hl;
          try {
            return dy(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", at(), ye();
          var i = Re.current;
          Re.current = hl;
          try {
            return I0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", at(), ye(), ay();
        },
        useState: function(e) {
          X = "useState", at(), ye();
          var t = Re.current;
          Re.current = hl;
          try {
            return W0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", at(), ye(), cy();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", at(), ye(), CE(e);
        },
        useTransition: function() {
          return X = "useTransition", at(), ye(), wE();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", at(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", at(), ye(), ny(e, t);
        },
        useId: function() {
          return X = "useId", at(), ye(), py();
        },
        unstable_isNewReconciler: fe
      }, hy = {
        readContext: function(e) {
          return aS(), ar(e);
        },
        useCallback: function(e, t) {
          return X = "useCallback", at(), ye(), fy(e, t);
        },
        useContext: function(e) {
          return X = "useContext", at(), ye(), ar(e);
        },
        useEffect: function(e, t) {
          return X = "useEffect", at(), ye(), sv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return X = "useImperativeHandle", at(), ye(), sy(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return X = "useInsertionEffect", at(), ye(), oy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return X = "useLayoutEffect", at(), ye(), uy(e, t);
        },
        useMemo: function(e, t) {
          X = "useMemo", at(), ye();
          var a = Re.current;
          Re.current = hl;
          try {
            return dy(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          X = "useReducer", at(), ye();
          var i = Re.current;
          Re.current = hl;
          try {
            return Y0(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return X = "useRef", at(), ye(), ay();
        },
        useState: function(e) {
          X = "useState", at(), ye();
          var t = Re.current;
          Re.current = hl;
          try {
            return G0(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return X = "useDebugValue", at(), ye(), cy();
        },
        useDeferredValue: function(e) {
          return X = "useDeferredValue", at(), ye(), bE(e);
        },
        useTransition: function() {
          return X = "useTransition", at(), ye(), RE();
        },
        useMutableSource: function(e, t, a) {
          return X = "useMutableSource", at(), ye(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return X = "useSyncExternalStore", at(), ye(), ny(e, t);
        },
        useId: function() {
          return X = "useId", at(), ye(), py();
        },
        unstable_isNewReconciler: fe
      };
    }
    var ts = c.unstable_now, UE = 0, my = -1, cv = -1, yy = -1, iS = !1, gy = !1;
    function FE() {
      return iS;
    }
    function $T() {
      gy = !0;
    }
    function IT() {
      iS = !1, gy = !1;
    }
    function YT() {
      iS = gy, gy = !1;
    }
    function jE() {
      return UE;
    }
    function PE() {
      UE = ts();
    }
    function lS(e) {
      cv = ts(), e.actualStartTime < 0 && (e.actualStartTime = ts());
    }
    function HE(e) {
      cv = -1;
    }
    function Sy(e, t) {
      if (cv >= 0) {
        var a = ts() - cv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), cv = -1;
      }
    }
    function io(e) {
      if (my >= 0) {
        var t = ts() - my;
        my = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Te:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function oS(e) {
      if (yy >= 0) {
        var t = ts() - yy;
        yy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Te:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function lo() {
      my = ts();
    }
    function uS() {
      yy = ts();
    }
    function sS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ml(e, t) {
      if (e && e.defaultProps) {
        var a = ft({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var cS = {}, fS, dS, pS, vS, hS, VE, _y, mS, yS, gS, fv;
    {
      fS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set(), pS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set(), mS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), yS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set(), fv = /* @__PURE__ */ new Set();
      var BE = /* @__PURE__ */ new Set();
      _y = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          BE.has(a) || (BE.add(a), _("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, VE = function(e, t) {
        if (t === void 0) {
          var a = At(e) || "Component";
          hS.has(a) || (hS.add(a), _("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(cS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(cS);
    }
    function SS(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & tn) {
          Sn(!0);
          try {
            s = a(i, o);
          } finally {
            Sn(!1);
          }
        }
        VE(t, s);
      }
      var p = s == null ? o : ft({}, o, s);
      if (e.memoizedState = p, e.lanes === te) {
        var m = e.updateQueue;
        m.baseState = p;
      }
    }
    var _S = {
      isMounted: Dh,
      enqueueSetState: function(e, t, a) {
        var i = Ou(e), o = xa(), s = is(i), p = ru(o, s);
        p.payload = t, a != null && (_y(a, "setState"), p.callback = a);
        var m = Ku(i, p, s);
        m !== null && (_r(m, i, s, o), qm(m, i, s)), As(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ou(e), o = xa(), s = is(i), p = ru(o, s);
        p.tag = iE, p.payload = t, a != null && (_y(a, "replaceState"), p.callback = a);
        var m = Ku(i, p, s);
        m !== null && (_r(m, i, s, o), qm(m, i, s)), As(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ou(e), i = xa(), o = is(a), s = ru(i, o);
        s.tag = Qm, t != null && (_y(t, "forceUpdate"), s.callback = t);
        var p = Ku(a, s, o);
        p !== null && (_r(p, a, o, i), qm(p, a, o)), af(a, o);
      }
    };
    function $E(e, t, a, i, o, s, p) {
      var m = e.stateNode;
      if (typeof m.shouldComponentUpdate == "function") {
        var y = m.shouldComponentUpdate(i, s, p);
        {
          if (e.mode & tn) {
            Sn(!0);
            try {
              y = m.shouldComponentUpdate(i, s, p);
            } finally {
              Sn(!1);
            }
          }
          y === void 0 && _("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", At(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ie(a, i) || !Ie(o, s) : !0;
    }
    function QT(e, t, a) {
      var i = e.stateNode;
      {
        var o = At(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? _("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : _("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && _("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && _("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && _("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && _("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), t.childContextTypes && !fv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & tn) === $e && (fv.add(t), _(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), t.contextTypes && !fv.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & tn) === $e && (fv.add(t), _(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), i.contextTypes && _("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !yS.has(t) && (yS.add(t), _("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && _("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && _("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", At(t) || "A pure component"), typeof i.componentDidUnmount == "function" && _("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && _("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && _("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && _("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var p = i.props !== a;
        i.props !== void 0 && p && _("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && _("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !pS.has(t) && (pS.add(t), _("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", At(t))), typeof i.getDerivedStateFromProps == "function" && _("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && _("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && _("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var m = i.state;
        m && (typeof m != "object" || mt(m)) && _("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && _("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function IE(e, t) {
      t.updater = _S, e.stateNode = t, zo(t, e), t._reactInternalInstance = cS;
    }
    function YE(e, t, a) {
      var i = !1, o = di, s = di, p = t.contextType;
      if ("contextType" in t) {
        var m = (
          // Allow null for conditional declaration
          p === null || p !== void 0 && p.$$typeof === T && p._context === void 0
        );
        if (!m && !gS.has(t)) {
          gS.add(t);
          var y = "";
          p === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p != "object" ? y = " However, it is set to a " + typeof p + "." : p.$$typeof === Ei ? y = " Did you accidentally pass the Context.Provider instead?" : p._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}.", _("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", At(t) || "Component", y);
        }
      }
      if (typeof p == "object" && p !== null)
        s = ar(p);
      else {
        o = qf(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? Xf(e, o) : di;
      }
      var x = new t(a, s);
      if (e.mode & tn) {
        Sn(!0);
        try {
          x = new t(a, s);
        } finally {
          Sn(!1);
        }
      }
      var z = e.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null;
      IE(e, x);
      {
        if (typeof t.getDerivedStateFromProps == "function" && z === null) {
          var O = At(t) || "Component";
          dS.has(O) || (dS.add(O), _("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", O, x.state === null ? "null" : "undefined", O));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var H = null, I = null, Q = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? H = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (H = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Q = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (Q = "UNSAFE_componentWillUpdate"), H !== null || I !== null || Q !== null) {
            var Ce = At(t) || "Component", We = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            vS.has(Ce) || (vS.add(Ce), _(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ce, We, H !== null ? `
  ` + H : "", I !== null ? `
  ` + I : "", Q !== null ? `
  ` + Q : ""));
          }
        }
      }
      return i && M1(e, o, s), x;
    }
    function WT(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (_("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", et(e) || "Component"), _S.enqueueReplaceState(t, t.state, null));
    }
    function QE(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = et(e) || "Component";
          fS.has(s) || (fS.add(s), _("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        _S.enqueueReplaceState(t, t.state, null);
      }
    }
    function ES(e, t, a, i) {
      QT(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = {}, O0(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = ar(s);
      else {
        var p = qf(e, t, !0);
        o.context = Xf(e, p);
      }
      {
        if (o.state === a) {
          var m = At(t) || "Component";
          mS.has(m) || (mS.add(m), _("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", m));
        }
        e.mode & tn && pl.recordLegacyContextWarning(e, o), pl.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (SS(e, t, y, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (WT(e, o), Xm(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var C = Nt;
        C |= nl, (e.mode & Bt) !== $e && (C |= jl), e.flags |= C;
      }
    }
    function GT(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var p = o.context, m = t.contextType, y = di;
      if (typeof m == "object" && m !== null)
        y = ar(m);
      else {
        var C = qf(e, t, !0);
        y = Xf(e, C);
      }
      var x = t.getDerivedStateFromProps, z = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !z && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || p !== y) && QE(e, o, a, y), oE();
      var O = e.memoizedState, H = o.state = O;
      if (Xm(e, a, o, i), H = e.memoizedState, s === a && O === H && !Nm() && !Km()) {
        if (typeof o.componentDidMount == "function") {
          var I = Nt;
          I |= nl, (e.mode & Bt) !== $e && (I |= jl), e.flags |= I;
        }
        return !1;
      }
      typeof x == "function" && (SS(e, t, x, a), H = e.memoizedState);
      var Q = Km() || $E(e, t, s, a, O, H, y);
      if (Q) {
        if (!z && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var Ce = Nt;
          Ce |= nl, (e.mode & Bt) !== $e && (Ce |= jl), e.flags |= Ce;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var We = Nt;
          We |= nl, (e.mode & Bt) !== $e && (We |= jl), e.flags |= We;
        }
        e.memoizedProps = a, e.memoizedState = H;
      }
      return o.props = a, o.state = H, o.context = y, Q;
    }
    function qT(e, t, a, i, o) {
      var s = t.stateNode;
      lE(e, t);
      var p = t.memoizedProps, m = t.type === t.elementType ? p : ml(t.type, p);
      s.props = m;
      var y = t.pendingProps, C = s.context, x = a.contextType, z = di;
      if (typeof x == "object" && x !== null)
        z = ar(x);
      else {
        var O = qf(t, a, !0);
        z = Xf(t, O);
      }
      var H = a.getDerivedStateFromProps, I = typeof H == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !I && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (p !== y || C !== z) && QE(t, s, i, z), oE();
      var Q = t.memoizedState, Ce = s.state = Q;
      if (Xm(t, i, s, o), Ce = t.memoizedState, p === y && Q === Ce && !Nm() && !Km())
        return typeof s.componentDidUpdate == "function" && (p !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= qn), !1;
      typeof H == "function" && (SS(t, a, H, i), Ce = t.memoizedState);
      var We = Km() || $E(t, a, m, i, Q, Ce, z) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      He;
      return We ? (!I && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ce, z), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ce, z)), typeof s.componentDidUpdate == "function" && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= qn)) : (typeof s.componentDidUpdate == "function" && (p !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= Nt), typeof s.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || Q !== e.memoizedState) && (t.flags |= qn), t.memoizedProps = i, t.memoizedState = Ce), s.props = i, s.state = Ce, s.context = z, We;
    }
    function _c(e, t) {
      return {
        value: e,
        source: t,
        stack: Xi(t),
        digest: null
      };
    }
    function CS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function XT(e, t) {
      return !0;
    }
    function bS(e, t) {
      try {
        var a = XT(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, p = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === A)
            return;
          console.error(i);
        }
        var m = o ? et(o) : null, y = m ? "The above error occurred in the <" + m + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === B)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var x = et(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + x + ".");
        }
        var z = y + `
` + p + `

` + ("" + C);
        console.error(z);
      } catch (O) {
        setTimeout(function() {
          throw O;
        });
      }
    }
    var KT = typeof WeakMap == "function" ? WeakMap : Map;
    function WE(e, t, a) {
      var i = ru(an, a);
      i.tag = k0, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        $D(o), bS(e, t);
      }, i;
    }
    function xS(e, t, a) {
      var i = ru(an, a);
      i.tag = k0;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          ab(e), bS(e, t);
        };
      }
      var p = e.stateNode;
      return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
        ab(e), bS(e, t), typeof o != "function" && VD(this);
        var y = t.value, C = t.stack;
        this.componentDidCatch(y, {
          componentStack: C !== null ? C : ""
        }), typeof o != "function" && (na(e.lanes, Ke) || _("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", et(e) || "Unknown"));
      }), i;
    }
    function GE(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new KT(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = ID.bind(null, e, t, a);
        ta && kv(e, a), t.then(s, s);
      }
    }
    function ZT(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function JT(e, t) {
      var a = e.tag;
      if ((e.mode & Et) === $e && (a === P || a === se || a === Pe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function qE(e) {
      var t = e;
      do {
        if (t.tag === me && LT(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function XE(e, t, a, i, o) {
      if ((e.mode & Et) === $e) {
        if (e === t)
          e.flags |= Zr;
        else {
          if (e.flags |= Ve, a.flags |= Xc, a.flags &= -52805, a.tag === A) {
            var s = a.alternate;
            if (s === null)
              a.tag = Rt;
            else {
              var p = ru(an, Ke);
              p.tag = Qm, Ku(a, p, Ke);
            }
          }
          a.lanes = ut(a.lanes, Ke);
        }
        return e;
      }
      return e.flags |= Zr, e.lanes = o, e;
    }
    function ek(e, t, a, i, o) {
      if (a.flags |= Ds, ta && kv(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        JT(a), Pr() && a.mode & Et && V1();
        var p = qE(t);
        if (p !== null) {
          p.flags &= -257, XE(p, t, a, e, o), p.mode & Et && GE(e, s, o), ZT(p, e, s);
          return;
        } else {
          if (!Fh(o)) {
            GE(e, s, o), r_();
            return;
          }
          var m = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = m;
        }
      } else if (Pr() && a.mode & Et) {
        V1();
        var y = qE(t);
        if (y !== null) {
          (y.flags & Zr) === Be && (y.flags |= Xr), XE(y, t, a, e, o), m0(_c(i, a));
          return;
        }
      }
      i = _c(i, a), LD(i);
      var C = t;
      do {
        switch (C.tag) {
          case B: {
            var x = i;
            C.flags |= Zr;
            var z = Is(o);
            C.lanes = ut(C.lanes, z);
            var O = WE(C, x, z);
            N0(C, O);
            return;
          }
          case A:
            var H = i, I = C.type, Q = C.stateNode;
            if ((C.flags & Ve) === Be && (typeof I.getDerivedStateFromError == "function" || Q !== null && typeof Q.componentDidCatch == "function" && !qC(Q))) {
              C.flags |= Zr;
              var Ce = Is(o);
              C.lanes = ut(C.lanes, Ce);
              var We = xS(C, H, Ce);
              N0(C, We);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function tk() {
      return null;
    }
    var dv = h.ReactCurrentOwner, yl = !1, wS, pv, RS, TS, kS, Ec, DS, Ey, vv;
    wS = {}, pv = {}, RS = {}, TS = {}, kS = {}, Ec = !1, DS = {}, Ey = {}, vv = {};
    function Ca(e, t, a, i) {
      e === null ? t.child = J1(t, null, a, i) : t.child = ed(t, e.child, a, i);
    }
    function nk(e, t, a, i) {
      t.child = ed(t, e.child, null, i), t.child = ed(t, null, a, i);
    }
    function KE(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && fl(
          s,
          i,
          // Resolved props
          "prop",
          At(a)
        );
      }
      var p = a.render, m = t.ref, y, C;
      nd(t, o), ya(t);
      {
        if (dv.current = t, Gn(!0), y = ud(e, t, p, i, m, o), C = sd(), t.mode & tn) {
          Sn(!0);
          try {
            y = ud(e, t, p, i, m, o), C = sd();
          } finally {
            Sn(!1);
          }
        }
        Gn(!1);
      }
      return ga(), e !== null && !yl ? (pE(e, t, o), au(e, t, o)) : (Pr() && C && c0(t), t.flags |= li, Ca(e, t, y, o), t.child);
    }
    function ZE(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (o2(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var p = s;
          return p = yd(s), t.tag = Pe, t.type = p, zS(t, s), JE(e, t, p, i, o);
        }
        {
          var m = s.propTypes;
          if (m && fl(
            m,
            i,
            // Resolved props
            "prop",
            At(s)
          ), a.defaultProps !== void 0) {
            var y = At(s) || "Unknown";
            vv[y] || (_("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", y), vv[y] = !0);
          }
        }
        var C = v_(a.type, null, i, t, t.mode, o);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var x = a.type, z = x.propTypes;
        z && fl(
          z,
          i,
          // Resolved props
          "prop",
          At(x)
        );
      }
      var O = e.child, H = jS(e, o);
      if (!H) {
        var I = O.memoizedProps, Q = a.compare;
        if (Q = Q !== null ? Q : Ie, Q(I, i) && e.ref === t.ref)
          return au(e, t, o);
      }
      t.flags |= li;
      var Ce = Rc(O, i);
      return Ce.ref = t.ref, Ce.return = t, t.child = Ce, Ce;
    }
    function JE(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === rt) {
          var p = s, m = p._payload, y = p._init;
          try {
            s = y(m);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && fl(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            At(s)
          );
        }
      }
      if (e !== null) {
        var x = e.memoizedProps;
        if (Ie(x, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (yl = !1, t.pendingProps = i = x, jS(e, o))
            (e.flags & Xc) !== Be && (yl = !0);
          else return t.lanes = e.lanes, au(e, t, o);
      }
      return OS(e, t, a, i, o);
    }
    function eC(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Se)
        if ((t.mode & Et) === $e) {
          var p = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = p, My(t, a);
        } else if (na(a, Sa)) {
          var z = {
            baseLanes: te,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = z;
          var O = s !== null ? s.baseLanes : a;
          My(t, O);
        } else {
          var m = null, y;
          if (s !== null) {
            var C = s.baseLanes;
            y = ut(C, a);
          } else
            y = a;
          t.lanes = t.childLanes = Sa;
          var x = {
            baseLanes: y,
            cachePool: m,
            transitions: null
          };
          return t.memoizedState = x, t.updateQueue = null, My(t, y), null;
        }
      else {
        var H;
        s !== null ? (H = ut(s.baseLanes, a), t.memoizedState = null) : H = a, My(t, H);
      }
      return Ca(e, t, o, a), t.child;
    }
    function rk(e, t, a) {
      var i = t.pendingProps;
      return Ca(e, t, i, a), t.child;
    }
    function ak(e, t, a) {
      var i = t.pendingProps.children;
      return Ca(e, t, i, a), t.child;
    }
    function ik(e, t, a) {
      {
        t.flags |= Nt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return Ca(e, t, s, a), t.child;
    }
    function tC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Cn, t.flags |= zu);
    }
    function OS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && fl(
          s,
          i,
          // Resolved props
          "prop",
          At(a)
        );
      }
      var p;
      {
        var m = qf(t, a, !0);
        p = Xf(t, m);
      }
      var y, C;
      nd(t, o), ya(t);
      {
        if (dv.current = t, Gn(!0), y = ud(e, t, a, i, p, o), C = sd(), t.mode & tn) {
          Sn(!0);
          try {
            y = ud(e, t, a, i, p, o), C = sd();
          } finally {
            Sn(!1);
          }
        }
        Gn(!1);
      }
      return ga(), e !== null && !yl ? (pE(e, t, o), au(e, t, o)) : (Pr() && C && c0(t), t.flags |= li, Ca(e, t, y, o), t.child);
    }
    function nC(e, t, a, i, o) {
      {
        switch (C2(t)) {
          case !1: {
            var s = t.stateNode, p = t.type, m = new p(t.memoizedProps, s.context), y = m.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= Ve, t.flags |= Zr;
            var C = new Error("Simulated error coming from DevTools"), x = Is(o);
            t.lanes = ut(t.lanes, x);
            var z = xS(t, _c(C, t), x);
            N0(t, z);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var O = a.propTypes;
          O && fl(
            O,
            i,
            // Resolved props
            "prop",
            At(a)
          );
        }
      }
      var H;
      to(a) ? (H = !0, Lm(t)) : H = !1, nd(t, o);
      var I = t.stateNode, Q;
      I === null ? (by(e, t), YE(t, a, i), ES(t, a, i, o), Q = !0) : e === null ? Q = GT(t, a, i, o) : Q = qT(e, t, a, i, o);
      var Ce = NS(e, t, a, Q, H, o);
      {
        var We = t.stateNode;
        Q && We.props !== i && (Ec || _("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", et(t) || "a component"), Ec = !0);
      }
      return Ce;
    }
    function NS(e, t, a, i, o, s) {
      tC(e, t);
      var p = (t.flags & Ve) !== Be;
      if (!i && !p)
        return o && F1(t, a, !1), au(e, t, s);
      var m = t.stateNode;
      dv.current = t;
      var y;
      if (p && typeof a.getDerivedStateFromError != "function")
        y = null, HE();
      else {
        ya(t);
        {
          if (Gn(!0), y = m.render(), t.mode & tn) {
            Sn(!0);
            try {
              m.render();
            } finally {
              Sn(!1);
            }
          }
          Gn(!1);
        }
        ga();
      }
      return t.flags |= li, e !== null && p ? nk(e, t, y, s) : Ca(e, t, y, s), t.memoizedState = m.state, o && F1(t, a, !0), t.child;
    }
    function rC(e) {
      var t = e.stateNode;
      t.pendingContext ? A1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && A1(e, t.context, !1), z0(e, t.containerInfo);
    }
    function lk(e, t, a) {
      if (rC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      lE(e, t), Xm(t, i, null, a);
      var p = t.memoizedState;
      t.stateNode;
      var m = p.element;
      if (o.isDehydrated) {
        var y = {
          element: m,
          isDehydrated: !1,
          cache: p.cache,
          pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
          transitions: p.transitions
        }, C = t.updateQueue;
        if (C.baseState = y, t.memoizedState = y, t.flags & Xr) {
          var x = _c(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return aC(e, t, m, a, x);
        } else if (m !== s) {
          var z = _c(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return aC(e, t, m, a, z);
        } else {
          sT(t);
          var O = J1(t, null, m, a);
          t.child = O;
          for (var H = O; H; )
            H.flags = H.flags & -3 | La, H = H.sibling;
        }
      } else {
        if (Jf(), m === s)
          return au(e, t, a);
        Ca(e, t, m, a);
      }
      return t.child;
    }
    function aC(e, t, a, i, o) {
      return Jf(), m0(o), t.flags |= Xr, Ca(e, t, a, i), t.child;
    }
    function ok(e, t, a) {
      cE(t), e === null && h0(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, p = o.children, m = Xg(i, o);
      return m ? p = null : s !== null && Xg(i, s) && (t.flags |= oi), tC(e, t), Ca(e, t, p, a), t.child;
    }
    function uk(e, t) {
      return e === null && h0(t), null;
    }
    function sk(e, t, a, i) {
      by(e, t);
      var o = t.pendingProps, s = a, p = s._payload, m = s._init, y = m(p);
      t.type = y;
      var C = t.tag = u2(y), x = ml(y, o), z;
      switch (C) {
        case P:
          return zS(t, y), t.type = y = yd(y), z = OS(null, t, y, x, i), z;
        case A:
          return t.type = y = u_(y), z = nC(null, t, y, x, i), z;
        case se:
          return t.type = y = s_(y), z = KE(null, t, y, x, i), z;
        case Ye: {
          if (t.type !== t.elementType) {
            var O = y.propTypes;
            O && fl(
              O,
              x,
              // Resolved for outer only
              "prop",
              At(y)
            );
          }
          return z = ZE(
            null,
            t,
            y,
            ml(y.type, x),
            // The inner type can have defaults too
            i
          ), z;
        }
      }
      var H = "";
      throw y !== null && typeof y == "object" && y.$$typeof === rt && (H = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + H));
    }
    function ck(e, t, a, i, o) {
      by(e, t), t.tag = A;
      var s;
      return to(a) ? (s = !0, Lm(t)) : s = !1, nd(t, o), YE(t, a, i), ES(t, a, i, o), NS(null, t, a, !0, s, o);
    }
    function fk(e, t, a, i) {
      by(e, t);
      var o = t.pendingProps, s;
      {
        var p = qf(t, a, !1);
        s = Xf(t, p);
      }
      nd(t, i);
      var m, y;
      ya(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = At(a) || "Unknown";
          wS[C] || (_("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), wS[C] = !0);
        }
        t.mode & tn && pl.recordLegacyContextWarning(t, null), Gn(!0), dv.current = t, m = ud(null, t, a, o, s, i), y = sd(), Gn(!1);
      }
      if (ga(), t.flags |= li, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0) {
        var x = At(a) || "Unknown";
        pv[x] || (_("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), pv[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0
      ) {
        {
          var z = At(a) || "Unknown";
          pv[z] || (_("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", z, z, z), pv[z] = !0);
        }
        t.tag = A, t.memoizedState = null, t.updateQueue = null;
        var O = !1;
        return to(a) ? (O = !0, Lm(t)) : O = !1, t.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, O0(t), IE(t, m), ES(t, a, o, i), NS(null, t, a, !0, O, i);
      } else {
        if (t.tag = P, t.mode & tn) {
          Sn(!0);
          try {
            m = ud(null, t, a, o, s, i), y = sd();
          } finally {
            Sn(!1);
          }
        }
        return Pr() && y && c0(t), Ca(null, t, m, i), zS(t, a), t.child;
      }
    }
    function zS(e, t) {
      {
        if (t && t.childContextTypes && _("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = zr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), kS[o] || (kS[o] = !0, _("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var p = At(t) || "Unknown";
          vv[p] || (_("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", p), vv[p] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var m = At(t) || "Unknown";
          TS[m] || (_("%s: Function components do not support getDerivedStateFromProps.", m), TS[m] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = At(t) || "Unknown";
          RS[y] || (_("%s: Function components do not support contextType.", y), RS[y] = !0);
        }
      }
    }
    var LS = {
      dehydrated: null,
      treeContext: null,
      retryLane: jt
    };
    function MS(e) {
      return {
        baseLanes: e,
        cachePool: tk(),
        transitions: null
      };
    }
    function dk(e, t) {
      var a = null;
      return {
        baseLanes: ut(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function pk(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return A0(e, rv);
    }
    function vk(e, t) {
      return Ys(e.childLanes, t);
    }
    function iC(e, t, a) {
      var i = t.pendingProps;
      b2(t) && (t.flags |= Ve);
      var o = vl.current, s = !1, p = (t.flags & Ve) !== Be;
      if (p || pk(o, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o = zT(o, dE)), o = ad(o), Ju(t, o), e === null) {
        h0(t);
        var m = t.memoizedState;
        if (m !== null) {
          var y = m.dehydrated;
          if (y !== null)
            return Sk(t, y);
        }
        var C = i.children, x = i.fallback;
        if (s) {
          var z = hk(t, C, x, a), O = t.child;
          return O.memoizedState = MS(a), t.memoizedState = LS, z;
        } else
          return AS(t, C);
      } else {
        var H = e.memoizedState;
        if (H !== null) {
          var I = H.dehydrated;
          if (I !== null)
            return _k(e, t, p, i, I, H, a);
        }
        if (s) {
          var Q = i.fallback, Ce = i.children, We = yk(e, t, Ce, Q, a), je = t.child, Mt = e.child.memoizedState;
          return je.memoizedState = Mt === null ? MS(a) : dk(Mt, a), je.childLanes = vk(e, a), t.memoizedState = LS, We;
        } else {
          var kt = i.children, U = mk(e, t, kt, a);
          return t.memoizedState = null, U;
        }
      }
    }
    function AS(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = US(o, i);
      return s.return = e, e.child = s, s;
    }
    function hk(e, t, a, i) {
      var o = e.mode, s = e.child, p = {
        mode: "hidden",
        children: t
      }, m, y;
      return (o & Et) === $e && s !== null ? (m = s, m.childLanes = te, m.pendingProps = p, e.mode & Vt && (m.actualDuration = 0, m.actualStartTime = -1, m.selfBaseDuration = 0, m.treeBaseDuration = 0), y = os(a, o, i, null)) : (m = US(p, o), y = os(a, o, i, null)), m.return = e, y.return = e, m.sibling = y, e.child = m, y;
    }
    function US(e, t, a) {
      return lb(e, t, te, null);
    }
    function lC(e, t) {
      return Rc(e, t);
    }
    function mk(e, t, a, i) {
      var o = e.child, s = o.sibling, p = lC(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Et) === $e && (p.lanes = i), p.return = t, p.sibling = null, s !== null) {
        var m = t.deletions;
        m === null ? (t.deletions = [s], t.flags |= za) : m.push(s);
      }
      return t.child = p, p;
    }
    function yk(e, t, a, i, o) {
      var s = t.mode, p = e.child, m = p.sibling, y = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Et) === $e && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== p
      ) {
        var x = t.child;
        C = x, C.childLanes = te, C.pendingProps = y, t.mode & Vt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = p.selfBaseDuration, C.treeBaseDuration = p.treeBaseDuration), t.deletions = null;
      } else
        C = lC(p, y), C.subtreeFlags = p.subtreeFlags & jn;
      var z;
      return m !== null ? z = Rc(m, i) : (z = os(i, s, o, null), z.flags |= Tn), z.return = t, C.return = t, C.sibling = z, t.child = C, z;
    }
    function Cy(e, t, a, i) {
      i !== null && m0(i), ed(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, p = AS(t, s);
      return p.flags |= Tn, t.memoizedState = null, p;
    }
    function gk(e, t, a, i, o) {
      var s = t.mode, p = {
        mode: "visible",
        children: a
      }, m = US(p, s), y = os(i, s, o, null);
      return y.flags |= Tn, m.return = t, y.return = t, m.sibling = y, t.child = m, (t.mode & Et) !== $e && ed(t, e.child, null, o), y;
    }
    function Sk(e, t, a) {
      return (e.mode & Et) === $e ? (_("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ke) : e0(t) ? e.lanes = xr : e.lanes = Sa, null;
    }
    function _k(e, t, a, i, o, s, p) {
      if (a)
        if (t.flags & Xr) {
          t.flags &= -257;
          var U = CS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Cy(e, t, p, U);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ve, null;
          var W = i.children, F = i.fallback, le = gk(e, t, W, F, p), ke = t.child;
          return ke.memoizedState = MS(p), t.memoizedState = LS, le;
        }
      else {
        if (oT(), (t.mode & Et) === $e)
          return Cy(
            e,
            t,
            p,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (e0(o)) {
          var m, y, C;
          {
            var x = xR(o);
            m = x.digest, y = x.message, C = x.stack;
          }
          var z;
          y ? z = new Error(y) : z = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var O = CS(z, m, C);
          return Cy(e, t, p, O);
        }
        var H = na(p, e.childLanes);
        if (yl || H) {
          var I = Ly();
          if (I !== null) {
            var Q = yp(I, p);
            if (Q !== jt && Q !== s.retryLane) {
              s.retryLane = Q;
              var Ce = an;
              Ba(e, Q), _r(I, e, Q, Ce);
            }
          }
          r_();
          var We = CS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Cy(e, t, p, We);
        } else if (D1(o)) {
          t.flags |= Ve, t.child = e.child;
          var je = YD.bind(null, e);
          return wR(o, je), null;
        } else {
          cT(t, o, s.treeContext);
          var Mt = i.children, kt = AS(t, Mt);
          return kt.flags |= La, kt;
        }
      }
    }
    function oC(e, t, a) {
      e.lanes = ut(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ut(i.lanes, t)), R0(e.return, t, a);
    }
    function Ek(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === me) {
          var o = i.memoizedState;
          o !== null && oC(i, a, e);
        } else if (i.tag === Ft)
          oC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Ck(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && ey(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function bk(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !DS[e])
        if (DS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              _('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              _('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              _('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          _('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function xk(e, t) {
      e !== void 0 && !Ey[e] && (e !== "collapsed" && e !== "hidden" ? (Ey[e] = !0, _('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ey[e] = !0, _('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function uC(e, t) {
      {
        var a = mt(e), i = !a && typeof ot(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return _("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function wk(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (mt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!uC(e[a], a))
              return;
        } else {
          var i = ot(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), p = 0; !s.done; s = o.next()) {
                if (!uC(s.value, p))
                  return;
                p++;
              }
          } else
            _('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function FS(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function sC(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, p = i.children;
      bk(o), xk(s, o), wk(p, o), Ca(e, t, p, a);
      var m = vl.current, y = A0(m, rv);
      if (y)
        m = U0(m, rv), t.flags |= Ve;
      else {
        var C = e !== null && (e.flags & Ve) !== Be;
        C && Ek(t, t.child, a), m = ad(m);
      }
      if (Ju(t, m), (t.mode & Et) === $e)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var x = Ck(t.child), z;
            x === null ? (z = t.child, t.child = null) : (z = x.sibling, x.sibling = null), FS(
              t,
              !1,
              // isBackwards
              z,
              x,
              s
            );
            break;
          }
          case "backwards": {
            var O = null, H = t.child;
            for (t.child = null; H !== null; ) {
              var I = H.alternate;
              if (I !== null && ey(I) === null) {
                t.child = H;
                break;
              }
              var Q = H.sibling;
              H.sibling = O, O = H, H = Q;
            }
            FS(
              t,
              !0,
              // isBackwards
              O,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            FS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Rk(e, t, a) {
      z0(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = ed(t, null, i, a) : Ca(e, t, i, a), t.child;
    }
    var cC = !1;
    function Tk(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, p = t.memoizedProps, m = s.value;
      {
        "value" in s || cC || (cC = !0, _("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && fl(y, s, "prop", "Context.Provider");
      }
      if (nE(t, o, m), p !== null) {
        var C = p.value;
        if (be(C, m)) {
          if (p.children === s.children && !Nm())
            return au(e, t, a);
        } else
          bT(t, o, a);
      }
      var x = s.children;
      return Ca(e, t, x, a), t.child;
    }
    var fC = !1;
    function kk(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (fC || (fC = !0, _("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && _("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), nd(t, a);
      var p = ar(i);
      ya(t);
      var m;
      return dv.current = t, Gn(!0), m = s(p), Gn(!1), ga(), t.flags |= li, Ca(e, t, m, a), t.child;
    }
    function hv() {
      yl = !0;
    }
    function by(e, t) {
      (t.mode & Et) === $e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tn);
    }
    function au(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), HE(), Tv(t.lanes), na(a, t.childLanes) ? (ET(e, t), t.child) : null;
    }
    function Dk(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= za) : s.push(e), a.flags |= Tn, a;
      }
    }
    function jS(e, t) {
      var a = e.lanes;
      return !!na(a, t);
    }
    function Ok(e, t, a) {
      switch (t.tag) {
        case B:
          rC(t), t.stateNode, Jf();
          break;
        case Z:
          cE(t);
          break;
        case A: {
          var i = t.type;
          to(i) && Lm(t);
          break;
        }
        case K:
          z0(t, t.stateNode.containerInfo);
          break;
        case ve: {
          var o = t.memoizedProps.value, s = t.type._context;
          nE(t, s, o);
          break;
        }
        case Te:
          {
            var p = na(a, t.childLanes);
            p && (t.flags |= Nt);
            {
              var m = t.stateNode;
              m.effectDuration = 0, m.passiveEffectDuration = 0;
            }
          }
          break;
        case me: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Ju(t, ad(vl.current)), t.flags |= Ve, null;
            var C = t.child, x = C.childLanes;
            if (na(a, x))
              return iC(e, t, a);
            Ju(t, ad(vl.current));
            var z = au(e, t, a);
            return z !== null ? z.sibling : null;
          } else
            Ju(t, ad(vl.current));
          break;
        }
        case Ft: {
          var O = (e.flags & Ve) !== Be, H = na(a, t.childLanes);
          if (O) {
            if (H)
              return sC(e, t, a);
            t.flags |= Ve;
          }
          var I = t.memoizedState;
          if (I !== null && (I.rendering = null, I.tail = null, I.lastEffect = null), Ju(t, vl.current), H)
            break;
          return null;
        }
        case Me:
        case Tt:
          return t.lanes = te, eC(e, t, a);
      }
      return au(e, t, a);
    }
    function dC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Dk(e, t, v_(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || Nm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          yl = !0;
        else {
          var s = jS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ve) === Be)
            return yl = !1, Ok(e, t, a);
          (e.flags & Xc) !== Be ? yl = !0 : yl = !1;
        }
      } else if (yl = !1, Pr() && tT(t)) {
        var p = t.index, m = nT();
        H1(t, m, p);
      }
      switch (t.lanes = te, t.tag) {
        case ee:
          return fk(e, t, t.type, a);
        case Ct: {
          var y = t.elementType;
          return sk(e, t, y, a);
        }
        case P: {
          var C = t.type, x = t.pendingProps, z = t.elementType === C ? x : ml(C, x);
          return OS(e, t, C, z, a);
        }
        case A: {
          var O = t.type, H = t.pendingProps, I = t.elementType === O ? H : ml(O, H);
          return nC(e, t, O, I, a);
        }
        case B:
          return lk(e, t, a);
        case Z:
          return ok(e, t, a);
        case ae:
          return uk(e, t);
        case me:
          return iC(e, t, a);
        case K:
          return Rk(e, t, a);
        case se: {
          var Q = t.type, Ce = t.pendingProps, We = t.elementType === Q ? Ce : ml(Q, Ce);
          return KE(e, t, Q, We, a);
        }
        case de:
          return rk(e, t, a);
        case ue:
          return ak(e, t, a);
        case Te:
          return ik(e, t, a);
        case ve:
          return Tk(e, t, a);
        case Ne:
          return kk(e, t, a);
        case Ye: {
          var je = t.type, Mt = t.pendingProps, kt = ml(je, Mt);
          if (t.type !== t.elementType) {
            var U = je.propTypes;
            U && fl(
              U,
              kt,
              // Resolved for outer only
              "prop",
              At(je)
            );
          }
          return kt = ml(je.type, kt), ZE(e, t, je, kt, a);
        }
        case Pe:
          return JE(e, t, t.type, t.pendingProps, a);
        case Rt: {
          var W = t.type, F = t.pendingProps, le = t.elementType === W ? F : ml(W, F);
          return ck(e, t, W, le, a);
        }
        case Ft:
          return sC(e, t, a);
        case nt:
          break;
        case Me:
          return eC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function cd(e) {
      e.flags |= Nt;
    }
    function pC(e) {
      e.flags |= Cn, e.flags |= zu;
    }
    var vC, PS, hC, mC;
    vC = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === Z || o.tag === ae)
          Zw(e, o.stateNode);
        else if (o.tag !== K) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, PS = function(e, t) {
    }, hC = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var p = t.stateNode, m = L0(), y = eR(p, a, s, i, o, m);
        t.updateQueue = y, y && cd(t);
      }
    }, mC = function(e, t, a, i) {
      a !== i && cd(t);
    };
    function mv(e, t) {
      if (!Pr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Vr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = te, i = Be;
      if (t) {
        if ((e.mode & Vt) !== $e) {
          for (var y = e.selfBaseDuration, C = e.child; C !== null; )
            a = ut(a, ut(C.lanes, C.childLanes)), i |= C.subtreeFlags & jn, i |= C.flags & jn, y += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = y;
        } else
          for (var x = e.child; x !== null; )
            a = ut(a, ut(x.lanes, x.childLanes)), i |= x.subtreeFlags & jn, i |= x.flags & jn, x.return = e, x = x.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Vt) !== $e) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, p = e.child; p !== null; )
            a = ut(a, ut(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, o += p.actualDuration, s += p.treeBaseDuration, p = p.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var m = e.child; m !== null; )
            a = ut(a, ut(m.lanes, m.childLanes)), i |= m.subtreeFlags, i |= m.flags, m.return = e, m = m.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Nk(e, t, a) {
      if (hT() && (t.mode & Et) !== $e && (t.flags & Ve) === Be)
        return W1(t), Jf(), t.flags |= Xr | Ds | Zr, !1;
      var i = jm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (pT(t), Vr(t), (t.mode & Vt) !== $e) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Jf(), (t.flags & Ve) === Be && (t.memoizedState = null), t.flags |= Nt, Vr(t), (t.mode & Vt) !== $e) {
            var p = a !== null;
            if (p) {
              var m = t.child;
              m !== null && (t.treeBaseDuration -= m.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return G1(), !0;
    }
    function yC(e, t, a) {
      var i = t.pendingProps;
      switch (f0(t), t.tag) {
        case ee:
        case Ct:
        case Pe:
        case P:
        case se:
        case de:
        case ue:
        case Te:
        case Ne:
        case Ye:
          return Vr(t), null;
        case A: {
          var o = t.type;
          return to(o) && zm(t), Vr(t), null;
        }
        case B: {
          var s = t.stateNode;
          if (rd(t), o0(t), j0(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var p = jm(t);
            if (p)
              cd(t);
            else if (e !== null) {
              var m = e.memoizedState;
              // Check if this is a client root
              (!m.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Xr) !== Be) && (t.flags |= qn, G1());
            }
          }
          return PS(e, t), Vr(t), null;
        }
        case Z: {
          M0(t);
          var y = sE(), C = t.type;
          if (e !== null && t.stateNode != null)
            hC(e, t, C, i, y), e.ref !== t.ref && pC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Vr(t), null;
            }
            var x = L0(), z = jm(t);
            if (z)
              fT(t, y, x) && cd(t);
            else {
              var O = Kw(C, i, y, x, t);
              vC(O, t, !1, !1), t.stateNode = O, Jw(O, C, i, y) && cd(t);
            }
            t.ref !== null && pC(t);
          }
          return Vr(t), null;
        }
        case ae: {
          var H = i;
          if (e && t.stateNode != null) {
            var I = e.memoizedProps;
            mC(e, t, I, H);
          } else {
            if (typeof H != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Q = sE(), Ce = L0(), We = jm(t);
            We ? dT(t) && cd(t) : t.stateNode = tR(H, Q, Ce, t);
          }
          return Vr(t), null;
        }
        case me: {
          id(t);
          var je = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Mt = Nk(e, t, je);
            if (!Mt)
              return t.flags & Zr ? t : null;
          }
          if ((t.flags & Ve) !== Be)
            return t.lanes = a, (t.mode & Vt) !== $e && sS(t), t;
          var kt = je !== null, U = e !== null && e.memoizedState !== null;
          if (kt !== U && kt) {
            var W = t.child;
            if (W.flags |= Fn, (t.mode & Et) !== $e) {
              var F = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              F || A0(vl.current, dE) ? zD() : r_();
            }
          }
          var le = t.updateQueue;
          if (le !== null && (t.flags |= Nt), Vr(t), (t.mode & Vt) !== $e && kt) {
            var ke = t.child;
            ke !== null && (t.treeBaseDuration -= ke.treeBaseDuration);
          }
          return null;
        }
        case K:
          return rd(t), PS(e, t), e === null && GR(t.stateNode.containerInfo), Vr(t), null;
        case ve:
          var xe = t.type._context;
          return w0(xe, t), Vr(t), null;
        case Rt: {
          var Je = t.type;
          return to(Je) && zm(t), Vr(t), null;
        }
        case Ft: {
          id(t);
          var it = t.memoizedState;
          if (it === null)
            return Vr(t), null;
          var rn = (t.flags & Ve) !== Be, It = it.rendering;
          if (It === null)
            if (rn)
              mv(it, !1);
            else {
              var Jn = MD() && (e === null || (e.flags & Ve) === Be);
              if (!Jn)
                for (var Yt = t.child; Yt !== null; ) {
                  var In = ey(Yt);
                  if (In !== null) {
                    rn = !0, t.flags |= Ve, mv(it, !1);
                    var sa = In.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= Nt), t.subtreeFlags = Be, CT(t, a), Ju(t, U0(vl.current, rv)), t.child;
                  }
                  Yt = Yt.sibling;
                }
              it.tail !== null && Xn() > jC() && (t.flags |= Ve, rn = !0, mv(it, !1), t.lanes = up);
            }
          else {
            if (!rn) {
              var Qr = ey(It);
              if (Qr !== null) {
                t.flags |= Ve, rn = !0;
                var vi = Qr.updateQueue;
                if (vi !== null && (t.updateQueue = vi, t.flags |= Nt), mv(it, !0), it.tail === null && it.tailMode === "hidden" && !It.alternate && !Pr())
                  return Vr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Xn() * 2 - it.renderingStartTime > jC() && a !== Sa && (t.flags |= Ve, rn = !0, mv(it, !1), t.lanes = up);
            }
            if (it.isBackwards)
              It.sibling = t.child, t.child = It;
            else {
              var wa = it.last;
              wa !== null ? wa.sibling = It : t.child = It, it.last = It;
            }
          }
          if (it.tail !== null) {
            var Ra = it.tail;
            it.rendering = Ra, it.tail = Ra.sibling, it.renderingStartTime = Xn(), Ra.sibling = null;
            var ca = vl.current;
            return rn ? ca = U0(ca, rv) : ca = ad(ca), Ju(t, ca), Ra;
          }
          return Vr(t), null;
        }
        case nt:
          break;
        case Me:
        case Tt: {
          n_(t);
          var su = t.memoizedState, gd = su !== null;
          if (e !== null) {
            var zv = e.memoizedState, so = zv !== null;
            so !== gd && (t.flags |= Fn);
          }
          return !gd || (t.mode & Et) === $e ? Vr(t) : na(uo, Sa) && (Vr(t), t.subtreeFlags & (Tn | Nt) && (t.flags |= Fn)), null;
        }
        case st:
          return null;
        case Ot:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function zk(e, t, a) {
      switch (f0(t), t.tag) {
        case A: {
          var i = t.type;
          to(i) && zm(t);
          var o = t.flags;
          return o & Zr ? (t.flags = o & -65537 | Ve, (t.mode & Vt) !== $e && sS(t), t) : null;
        }
        case B: {
          t.stateNode, rd(t), o0(t), j0();
          var s = t.flags;
          return (s & Zr) !== Be && (s & Ve) === Be ? (t.flags = s & -65537 | Ve, t) : null;
        }
        case Z:
          return M0(t), null;
        case me: {
          id(t);
          var p = t.memoizedState;
          if (p !== null && p.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Jf();
          }
          var m = t.flags;
          return m & Zr ? (t.flags = m & -65537 | Ve, (t.mode & Vt) !== $e && sS(t), t) : null;
        }
        case Ft:
          return id(t), null;
        case K:
          return rd(t), null;
        case ve:
          var y = t.type._context;
          return w0(y, t), null;
        case Me:
        case Tt:
          return n_(t), null;
        case st:
          return null;
        default:
          return null;
      }
    }
    function gC(e, t, a) {
      switch (f0(t), t.tag) {
        case A: {
          var i = t.type.childContextTypes;
          i != null && zm(t);
          break;
        }
        case B: {
          t.stateNode, rd(t), o0(t), j0();
          break;
        }
        case Z: {
          M0(t);
          break;
        }
        case K:
          rd(t);
          break;
        case me:
          id(t);
          break;
        case Ft:
          id(t);
          break;
        case ve:
          var o = t.type._context;
          w0(o, t);
          break;
        case Me:
        case Tt:
          n_(t);
          break;
      }
    }
    var SC = null;
    SC = /* @__PURE__ */ new Set();
    var xy = !1, Br = !1, Lk = typeof WeakSet == "function" ? WeakSet : Set, Le = null, fd = null, dd = null;
    function Mk(e) {
      Fl(null, function() {
        throw e;
      }), ks();
    }
    var Ak = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Vt)
        try {
          lo(), t.componentWillUnmount();
        } finally {
          io(e);
        }
      else
        t.componentWillUnmount();
    };
    function _C(e, t) {
      try {
        ns(vr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function HS(e, t, a) {
      try {
        Ak(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function Uk(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function EC(e, t) {
      try {
        bC(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function pd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Xe && gt && e.mode & Vt)
              try {
                lo(), i = a(null);
              } finally {
                io(e);
              }
            else
              i = a(null);
          } catch (o) {
            vn(e, t, o);
          }
          typeof i == "function" && _("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          a.current = null;
    }
    function wy(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var CC = !1;
    function Fk(e, t) {
      qw(e.containerInfo), Le = t, jk();
      var a = CC;
      return CC = !1, a;
    }
    function jk() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        (e.subtreeFlags & Pl) !== Be && t !== null ? (t.return = e, Le = t) : Pk();
      }
    }
    function Pk() {
      for (; Le !== null; ) {
        var e = Le;
        Zt(e);
        try {
          Hk(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        pn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function Hk(e) {
      var t = e.alternate, a = e.flags;
      if ((a & qn) !== Be) {
        switch (Zt(e), e.tag) {
          case P:
          case se:
          case Pe:
            break;
          case A: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ec && (s.props !== e.memoizedProps && _("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(e) || "instance"), s.state !== e.memoizedState && _("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(e) || "instance"));
              var p = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ml(e.type, i), o);
              {
                var m = SC;
                p === void 0 && !m.has(e.type) && (m.add(e.type), _("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", et(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          }
          case B: {
            {
              var y = e.stateNode;
              _R(y.containerInfo);
            }
            break;
          }
          case Z:
          case ae:
          case K:
          case Rt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        pn();
      }
    }
    function gl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, p = s;
        do {
          if ((p.tag & e) === e) {
            var m = p.destroy;
            p.destroy = void 0, m !== void 0 && ((e & Hr) !== $a ? il(t) : (e & vr) !== $a && Ns(t), (e & no) !== $a && Dv(!0), wy(t, a, m), (e & no) !== $a && Dv(!1), (e & Hr) !== $a ? $l() : (e & vr) !== $a && lp());
          }
          p = p.next;
        } while (p !== s);
      }
    }
    function ns(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Hr) !== $a ? ip(t) : (e & vr) !== $a && nf(t);
            var p = s.create;
            (e & no) !== $a && Dv(!0), s.destroy = p(), (e & no) !== $a && Dv(!1), (e & Hr) !== $a ? zh() : (e & vr) !== $a && Lh();
            {
              var m = s.destroy;
              if (m !== void 0 && typeof m != "function") {
                var y = void 0;
                (s.tag & vr) !== Be ? y = "useLayoutEffect" : (s.tag & no) !== Be ? y = "useInsertionEffect" : y = "useEffect";
                var C = void 0;
                m === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof m.then == "function" ? C = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + m, _("%s must not return anything besides a function, which is used for clean-up.%s", y, C);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function Vk(e, t) {
      if ((t.flags & Nt) !== Be)
        switch (t.tag) {
          case Te: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, p = jE(), m = t.alternate === null ? "mount" : "update";
            FE() && (m = "nested-update"), typeof s == "function" && s(o, m, a, p);
            var y = t.return;
            e: for (; y !== null; ) {
              switch (y.tag) {
                case B:
                  var C = y.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
                case Te:
                  var x = y.stateNode;
                  x.passiveEffectDuration += a;
                  break e;
              }
              y = y.return;
            }
            break;
          }
        }
    }
    function Bk(e, t, a, i) {
      if ((a.flags & Vl) !== Be)
        switch (a.tag) {
          case P:
          case se:
          case Pe: {
            if (!Br)
              if (a.mode & Vt)
                try {
                  lo(), ns(vr | pr, a);
                } finally {
                  io(a);
                }
              else
                ns(vr | pr, a);
            break;
          }
          case A: {
            var o = a.stateNode;
            if (a.flags & Nt && !Br)
              if (t === null)
                if (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && _("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), o.state !== a.memoizedState && _("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & Vt)
                  try {
                    lo(), o.componentDidMount();
                  } finally {
                    io(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ml(a.type, t.memoizedProps), p = t.memoizedState;
                if (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && _("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), o.state !== a.memoizedState && _("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & Vt)
                  try {
                    lo(), o.componentDidUpdate(s, p, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    io(a);
                  }
                else
                  o.componentDidUpdate(s, p, o.__reactInternalSnapshotBeforeUpdate);
              }
            var m = a.updateQueue;
            m !== null && (a.type === a.elementType && !Ec && (o.props !== a.memoizedProps && _("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), o.state !== a.memoizedState && _("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), uE(a, m, o));
            break;
          }
          case B: {
            var y = a.updateQueue;
            if (y !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case Z:
                    C = a.child.stateNode;
                    break;
                  case A:
                    C = a.child.stateNode;
                    break;
                }
              uE(a, y, C);
            }
            break;
          }
          case Z: {
            var x = a.stateNode;
            if (t === null && a.flags & Nt) {
              var z = a.type, O = a.memoizedProps;
              lR(x, z, O);
            }
            break;
          }
          case ae:
            break;
          case K:
            break;
          case Te: {
            {
              var H = a.memoizedProps, I = H.onCommit, Q = H.onRender, Ce = a.stateNode.effectDuration, We = jE(), je = t === null ? "mount" : "update";
              FE() && (je = "nested-update"), typeof Q == "function" && Q(a.memoizedProps.id, je, a.actualDuration, a.treeBaseDuration, a.actualStartTime, We);
              {
                typeof I == "function" && I(a.memoizedProps.id, je, Ce, We), PD(a);
                var Mt = a.return;
                e: for (; Mt !== null; ) {
                  switch (Mt.tag) {
                    case B:
                      var kt = Mt.stateNode;
                      kt.effectDuration += Ce;
                      break e;
                    case Te:
                      var U = Mt.stateNode;
                      U.effectDuration += Ce;
                      break e;
                  }
                  Mt = Mt.return;
                }
              }
            }
            break;
          }
          case me: {
            Xk(e, a);
            break;
          }
          case Ft:
          case Rt:
          case nt:
          case Me:
          case Tt:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Br || a.flags & Cn && bC(a);
    }
    function $k(e) {
      switch (e.tag) {
        case P:
        case se:
        case Pe: {
          if (e.mode & Vt)
            try {
              lo(), _C(e, e.return);
            } finally {
              io(e);
            }
          else
            _C(e, e.return);
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Uk(e, e.return, t), EC(e, e.return);
          break;
        }
        case Z: {
          EC(e, e.return);
          break;
        }
      }
    }
    function Ik(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === Z) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? mR(o) : gR(i.stateNode, i.memoizedProps);
            } catch (p) {
              vn(e, e.return, p);
            }
          }
        } else if (i.tag === ae) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? yR(s) : SR(s, i.memoizedProps);
            } catch (p) {
              vn(e, e.return, p);
            }
        } else if (!((i.tag === Me || i.tag === Tt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function bC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case Z:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & Vt)
            try {
              lo(), o = t(i);
            } finally {
              io(e);
            }
          else
            o = t(i);
          typeof o == "function" && _("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          t.hasOwnProperty("current") || _("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", et(e)), t.current = i;
      }
    }
    function Yk(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function xC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, xC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === Z) {
          var a = e.stateNode;
          a !== null && KR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Qk(e) {
      for (var t = e.return; t !== null; ) {
        if (wC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wC(e) {
      return e.tag === Z || e.tag === B || e.tag === K;
    }
    function RC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || wC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== Z && t.tag !== ae && t.tag !== dt; ) {
          if (t.flags & Tn || t.child === null || t.tag === K)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Tn))
          return t.stateNode;
      }
    }
    function Wk(e) {
      var t = Qk(e);
      switch (t.tag) {
        case Z: {
          var a = t.stateNode;
          t.flags & oi && (k1(a), t.flags &= -33);
          var i = RC(e);
          BS(e, i, a);
          break;
        }
        case B:
        case K: {
          var o = t.stateNode.containerInfo, s = RC(e);
          VS(e, s, o);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function VS(e, t, a) {
      var i = e.tag, o = i === Z || i === ae;
      if (o) {
        var s = e.stateNode;
        t ? dR(a, s, t) : cR(a, s);
      } else if (i !== K) {
        var p = e.child;
        if (p !== null) {
          VS(p, t, a);
          for (var m = p.sibling; m !== null; )
            VS(m, t, a), m = m.sibling;
        }
      }
    }
    function BS(e, t, a) {
      var i = e.tag, o = i === Z || i === ae;
      if (o) {
        var s = e.stateNode;
        t ? fR(a, s, t) : sR(a, s);
      } else if (i !== K) {
        var p = e.child;
        if (p !== null) {
          BS(p, t, a);
          for (var m = p.sibling; m !== null; )
            BS(m, t, a), m = m.sibling;
        }
      }
    }
    var $r = null, Sl = !1;
    function Gk(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case Z: {
              $r = i.stateNode, Sl = !1;
              break e;
            }
            case B: {
              $r = i.stateNode.containerInfo, Sl = !0;
              break e;
            }
            case K: {
              $r = i.stateNode.containerInfo, Sl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if ($r === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        TC(e, t, a), $r = null, Sl = !1;
      }
      Yk(a);
    }
    function rs(e, t, a) {
      for (var i = a.child; i !== null; )
        TC(e, t, i), i = i.sibling;
    }
    function TC(e, t, a) {
      switch (np(a), a.tag) {
        case Z:
          Br || pd(a, t);
        // eslint-disable-next-line-no-fallthrough
        case ae: {
          {
            var i = $r, o = Sl;
            $r = null, rs(e, t, a), $r = i, Sl = o, $r !== null && (Sl ? vR($r, a.stateNode) : pR($r, a.stateNode));
          }
          return;
        }
        case dt: {
          $r !== null && (Sl ? hR($r, a.stateNode) : Jg($r, a.stateNode));
          return;
        }
        case K: {
          {
            var s = $r, p = Sl;
            $r = a.stateNode.containerInfo, Sl = !0, rs(e, t, a), $r = s, Sl = p;
          }
          return;
        }
        case P:
        case se:
        case Ye:
        case Pe: {
          if (!Br) {
            var m = a.updateQueue;
            if (m !== null) {
              var y = m.lastEffect;
              if (y !== null) {
                var C = y.next, x = C;
                do {
                  var z = x, O = z.destroy, H = z.tag;
                  O !== void 0 && ((H & no) !== $a ? wy(a, t, O) : (H & vr) !== $a && (Ns(a), a.mode & Vt ? (lo(), wy(a, t, O), io(a)) : wy(a, t, O), lp())), x = x.next;
                } while (x !== C);
              }
            }
          }
          rs(e, t, a);
          return;
        }
        case A: {
          if (!Br) {
            pd(a, t);
            var I = a.stateNode;
            typeof I.componentWillUnmount == "function" && HS(a, t, I);
          }
          rs(e, t, a);
          return;
        }
        case nt: {
          rs(e, t, a);
          return;
        }
        case Me: {
          if (
            // TODO: Remove this dead flag
            a.mode & Et
          ) {
            var Q = Br;
            Br = Q || a.memoizedState !== null, rs(e, t, a), Br = Q;
          } else
            rs(e, t, a);
          break;
        }
        default: {
          rs(e, t, a);
          return;
        }
      }
    }
    function qk(e) {
      e.memoizedState;
    }
    function Xk(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && MR(s);
          }
        }
      }
    }
    function kC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Lk()), t.forEach(function(i) {
          var o = QD.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ta)
              if (fd !== null && dd !== null)
                kv(dd, fd);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function Kk(e, t, a) {
      fd = a, dd = e, Zt(t), DC(t, e), Zt(t), fd = null, dd = null;
    }
    function _l(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            Gk(e, t, s);
          } catch (y) {
            vn(s, t, y);
          }
        }
      var p = Ol();
      if (t.subtreeFlags & Hl)
        for (var m = t.child; m !== null; )
          Zt(m), DC(m, e), m = m.sibling;
      Zt(p);
    }
    function DC(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case P:
        case se:
        case Ye:
        case Pe: {
          if (_l(t, e), oo(e), o & Nt) {
            try {
              gl(no | pr, e, e.return), ns(no | pr, e);
            } catch (Je) {
              vn(e, e.return, Je);
            }
            if (e.mode & Vt) {
              try {
                lo(), gl(vr | pr, e, e.return);
              } catch (Je) {
                vn(e, e.return, Je);
              }
              io(e);
            } else
              try {
                gl(vr | pr, e, e.return);
              } catch (Je) {
                vn(e, e.return, Je);
              }
          }
          return;
        }
        case A: {
          _l(t, e), oo(e), o & Cn && i !== null && pd(i, i.return);
          return;
        }
        case Z: {
          _l(t, e), oo(e), o & Cn && i !== null && pd(i, i.return);
          {
            if (e.flags & oi) {
              var s = e.stateNode;
              try {
                k1(s);
              } catch (Je) {
                vn(e, e.return, Je);
              }
            }
            if (o & Nt) {
              var p = e.stateNode;
              if (p != null) {
                var m = e.memoizedProps, y = i !== null ? i.memoizedProps : m, C = e.type, x = e.updateQueue;
                if (e.updateQueue = null, x !== null)
                  try {
                    oR(p, x, C, y, m, e);
                  } catch (Je) {
                    vn(e, e.return, Je);
                  }
              }
            }
          }
          return;
        }
        case ae: {
          if (_l(t, e), oo(e), o & Nt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var z = e.stateNode, O = e.memoizedProps, H = i !== null ? i.memoizedProps : O;
            try {
              uR(z, H, O);
            } catch (Je) {
              vn(e, e.return, Je);
            }
          }
          return;
        }
        case B: {
          if (_l(t, e), oo(e), o & Nt && i !== null) {
            var I = i.memoizedState;
            if (I.isDehydrated)
              try {
                LR(t.containerInfo);
              } catch (Je) {
                vn(e, e.return, Je);
              }
          }
          return;
        }
        case K: {
          _l(t, e), oo(e);
          return;
        }
        case me: {
          _l(t, e), oo(e);
          var Q = e.child;
          if (Q.flags & Fn) {
            var Ce = Q.stateNode, We = Q.memoizedState, je = We !== null;
            if (Ce.isHidden = je, je) {
              var Mt = Q.alternate !== null && Q.alternate.memoizedState !== null;
              Mt || ND();
            }
          }
          if (o & Nt) {
            try {
              qk(e);
            } catch (Je) {
              vn(e, e.return, Je);
            }
            kC(e);
          }
          return;
        }
        case Me: {
          var kt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Et
          ) {
            var U = Br;
            Br = U || kt, _l(t, e), Br = U;
          } else
            _l(t, e);
          if (oo(e), o & Fn) {
            var W = e.stateNode, F = e.memoizedState, le = F !== null, ke = e;
            if (W.isHidden = le, le && !kt && (ke.mode & Et) !== $e) {
              Le = ke;
              for (var xe = ke.child; xe !== null; )
                Le = xe, Jk(xe), xe = xe.sibling;
            }
            Ik(ke, le);
          }
          return;
        }
        case Ft: {
          _l(t, e), oo(e), o & Nt && kC(e);
          return;
        }
        case nt:
          return;
        default: {
          _l(t, e), oo(e);
          return;
        }
      }
    }
    function oo(e) {
      var t = e.flags;
      if (t & Tn) {
        try {
          Wk(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & La && (e.flags &= -4097);
    }
    function Zk(e, t, a) {
      fd = a, dd = t, Le = e, OC(e, t, a), fd = null, dd = null;
    }
    function OC(e, t, a) {
      for (var i = (e.mode & Et) !== $e; Le !== null; ) {
        var o = Le, s = o.child;
        if (o.tag === Me && i) {
          var p = o.memoizedState !== null, m = p || xy;
          if (m) {
            $S(e, t, a);
            continue;
          } else {
            var y = o.alternate, C = y !== null && y.memoizedState !== null, x = C || Br, z = xy, O = Br;
            xy = m, Br = x, Br && !O && (Le = o, eD(o));
            for (var H = s; H !== null; )
              Le = H, OC(
                H,
                // New root; bubble back up to here and stop.
                t,
                a
              ), H = H.sibling;
            Le = o, xy = z, Br = O, $S(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & Vl) !== Be && s !== null ? (s.return = o, Le = s) : $S(e, t, a);
      }
    }
    function $S(e, t, a) {
      for (; Le !== null; ) {
        var i = Le;
        if ((i.flags & Vl) !== Be) {
          var o = i.alternate;
          Zt(i);
          try {
            Bk(t, o, i, a);
          } catch (p) {
            vn(i, i.return, p);
          }
          pn();
        }
        if (i === e) {
          Le = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Le = s;
          return;
        }
        Le = i.return;
      }
    }
    function Jk(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        switch (t.tag) {
          case P:
          case se:
          case Ye:
          case Pe: {
            if (t.mode & Vt)
              try {
                lo(), gl(vr, t, t.return);
              } finally {
                io(t);
              }
            else
              gl(vr, t, t.return);
            break;
          }
          case A: {
            pd(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && HS(t, t.return, i);
            break;
          }
          case Z: {
            pd(t, t.return);
            break;
          }
          case Me: {
            var o = t.memoizedState !== null;
            if (o) {
              NC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Le = a) : NC(e);
      }
    }
    function NC(e) {
      for (; Le !== null; ) {
        var t = Le;
        if (t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function eD(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        if (t.tag === Me) {
          var i = t.memoizedState !== null;
          if (i) {
            zC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Le = a) : zC(e);
      }
    }
    function zC(e) {
      for (; Le !== null; ) {
        var t = Le;
        Zt(t);
        try {
          $k(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (pn(), t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function tD(e, t, a, i) {
      Le = t, nD(t, e, a, i);
    }
    function nD(e, t, a, i) {
      for (; Le !== null; ) {
        var o = Le, s = o.child;
        (o.subtreeFlags & rl) !== Be && s !== null ? (s.return = o, Le = s) : rD(e, t, a, i);
      }
    }
    function rD(e, t, a, i) {
      for (; Le !== null; ) {
        var o = Le;
        if ((o.flags & Kr) !== Be) {
          Zt(o);
          try {
            aD(t, o, a, i);
          } catch (p) {
            vn(o, o.return, p);
          }
          pn();
        }
        if (o === e) {
          Le = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Le = s;
          return;
        }
        Le = o.return;
      }
    }
    function aD(e, t, a, i) {
      switch (t.tag) {
        case P:
        case se:
        case Pe: {
          if (t.mode & Vt) {
            uS();
            try {
              ns(Hr | pr, t);
            } finally {
              oS(t);
            }
          } else
            ns(Hr | pr, t);
          break;
        }
      }
    }
    function iD(e) {
      Le = e, lD();
    }
    function lD() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        if ((Le.flags & za) !== Be) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Le = o, sD(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var p = s.child;
                if (p !== null) {
                  s.child = null;
                  do {
                    var m = p.sibling;
                    p.sibling = null, p = m;
                  } while (p !== null);
                }
              }
            }
            Le = e;
          }
        }
        (e.subtreeFlags & rl) !== Be && t !== null ? (t.return = e, Le = t) : oD();
      }
    }
    function oD() {
      for (; Le !== null; ) {
        var e = Le;
        (e.flags & Kr) !== Be && (Zt(e), uD(e), pn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function uD(e) {
      switch (e.tag) {
        case P:
        case se:
        case Pe: {
          e.mode & Vt ? (uS(), gl(Hr | pr, e, e.return), oS(e)) : gl(Hr | pr, e, e.return);
          break;
        }
      }
    }
    function sD(e, t) {
      for (; Le !== null; ) {
        var a = Le;
        Zt(a), fD(a, t), pn();
        var i = a.child;
        i !== null ? (i.return = a, Le = i) : cD(e);
      }
    }
    function cD(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.sibling, i = t.return;
        if (xC(t), t === e) {
          Le = null;
          return;
        }
        if (a !== null) {
          a.return = i, Le = a;
          return;
        }
        Le = i;
      }
    }
    function fD(e, t) {
      switch (e.tag) {
        case P:
        case se:
        case Pe: {
          e.mode & Vt ? (uS(), gl(Hr, e, t), oS(e)) : gl(Hr, e, t);
          break;
        }
      }
    }
    function dD(e) {
      switch (e.tag) {
        case P:
        case se:
        case Pe: {
          try {
            ns(vr | pr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case A: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function pD(e) {
      switch (e.tag) {
        case P:
        case se:
        case Pe: {
          try {
            ns(Hr | pr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function vD(e) {
      switch (e.tag) {
        case P:
        case se:
        case Pe: {
          try {
            gl(vr | pr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case A: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && HS(e, e.return, t);
          break;
        }
      }
    }
    function hD(e) {
      switch (e.tag) {
        case P:
        case se:
        case Pe:
          try {
            gl(Hr | pr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var yv = Symbol.for;
      yv("selector.component"), yv("selector.has_pseudo_class"), yv("selector.role"), yv("selector.test_id"), yv("selector.text");
    }
    var mD = [];
    function yD() {
      mD.forEach(function(e) {
        return e();
      });
    }
    var gD = h.ReactCurrentActQueue;
    function SD(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function LC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && gD.current !== null && _("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var _D = Math.ceil, IS = h.ReactCurrentDispatcher, YS = h.ReactCurrentOwner, Ir = h.ReactCurrentBatchConfig, El = h.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), MC = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Ii = (
      /*                */
      4
    ), iu = 0, gv = 1, Cc = 2, Ry = 3, Sv = 4, AC = 5, QS = 6, Lt = yr, ba = null, Ln = null, gr = te, uo = te, WS = Wu(te), Sr = iu, _v = null, Ty = te, Ev = te, ky = te, Cv = null, Ia = null, GS = 0, UC = 500, FC = 1 / 0, ED = 500, lu = null;
    function bv() {
      FC = Xn() + ED;
    }
    function jC() {
      return FC;
    }
    var Dy = !1, qS = null, vd = null, bc = !1, as = null, xv = te, XS = [], KS = null, CD = 50, wv = 0, ZS = null, JS = !1, Oy = !1, bD = 50, hd = 0, Ny = null, Rv = an, zy = te, PC = !1;
    function Ly() {
      return ba;
    }
    function xa() {
      return (Lt & (Yr | Ii)) !== yr ? Xn() : (Rv !== an || (Rv = Xn()), Rv);
    }
    function is(e) {
      var t = e.mode;
      if ((t & Et) === $e)
        return Ke;
      if ((Lt & Yr) !== yr && gr !== te)
        return Is(gr);
      var a = gT() !== yT;
      if (a) {
        if (Ir.transition !== null) {
          var i = Ir.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return zy === jt && (zy = vp()), zy;
      }
      var o = Pa();
      if (o !== jt)
        return o;
      var s = nR();
      return s;
    }
    function xD(e) {
      var t = e.mode;
      return (t & Et) === $e ? Ke : Ph();
    }
    function _r(e, t, a, i) {
      GD(), PC && _("useInsertionEffect must not schedule updates."), JS && (Oy = !0), Uu(e, a, i), (Lt & Yr) !== te && e === ba ? KD(t) : (ta && Ws(e, t, a), ZD(t), e === ba && ((Lt & Yr) === yr && (Ev = ut(Ev, a)), Sr === Sv && ls(e, gr)), Ya(e, i), a === Ke && Lt === yr && (t.mode & Et) === $e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !El.isBatchingLegacy && (bv(), P1()));
    }
    function wD(e, t, a) {
      var i = e.current;
      i.lanes = t, Uu(e, t, a), Ya(e, a);
    }
    function RD(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Lt & Yr) !== yr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      bf(e, t);
      var i = Cf(e, e === ba ? gr : te);
      if (i === te) {
        a !== null && tb(a), e.callbackNode = null, e.callbackPriority = jt;
        return;
      }
      var o = Ql(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(El.current !== null && a !== l_)) {
        a == null && s !== Ke && _("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && tb(a);
      var p;
      if (o === Ke)
        e.tag === Gu ? (El.isBatchingLegacy !== null && (El.didScheduleLegacyUpdate = !0), eT(BC.bind(null, e))) : j1(BC.bind(null, e)), El.current !== null ? El.current.push(qu) : aR(function() {
          (Lt & (Yr | Ii)) === yr && qu();
        }), p = null;
      else {
        var m;
        switch (Qh(i)) {
          case Mr:
            m = Os;
            break;
          case Mi:
            m = Bl;
            break;
          case Fa:
            m = al;
            break;
          case ja:
            m = Mo;
            break;
          default:
            m = al;
            break;
        }
        p = o_(m, HC.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = p;
    }
    function HC(e, t) {
      if (IT(), Rv = an, zy = te, (Lt & (Yr | Ii)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = uu();
      if (i && e.callbackNode !== a)
        return null;
      var o = Cf(e, e === ba ? gr : te);
      if (o === te)
        return null;
      var s = !wf(e, o) && !jh(e, o) && !t, p = s ? UD(e, o) : Ay(e, o);
      if (p !== iu) {
        if (p === Cc) {
          var m = xf(e);
          m !== te && (o = m, p = e_(e, m));
        }
        if (p === gv) {
          var y = _v;
          throw xc(e, te), ls(e, o), Ya(e, Xn()), y;
        }
        if (p === QS)
          ls(e, o);
        else {
          var C = !wf(e, o), x = e.current.alternate;
          if (C && !kD(x)) {
            if (p = Ay(e, o), p === Cc) {
              var z = xf(e);
              z !== te && (o = z, p = e_(e, z));
            }
            if (p === gv) {
              var O = _v;
              throw xc(e, te), ls(e, o), Ya(e, Xn()), O;
            }
          }
          e.finishedWork = x, e.finishedLanes = o, TD(e, p, o);
        }
      }
      return Ya(e, Xn()), e.callbackNode === a ? HC.bind(null, e) : null;
    }
    function e_(e, t) {
      var a = Cv;
      if (kf(e)) {
        var i = xc(e, t);
        i.flags |= Xr, WR(e.containerInfo);
      }
      var o = Ay(e, t);
      if (o !== Cc) {
        var s = Ia;
        Ia = a, s !== null && VC(s);
      }
      return o;
    }
    function VC(e) {
      Ia === null ? Ia = e : Ia.push.apply(Ia, e);
    }
    function TD(e, t, a) {
      switch (t) {
        case iu:
        case gv:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case Cc: {
          wc(e, Ia, lu);
          break;
        }
        case Ry: {
          if (ls(e, a), Yo(a) && // do not delay if we're inside an act() scope
          !nb()) {
            var i = GS + UC - Xn();
            if (i > 10) {
              var o = Cf(e, te);
              if (o !== te)
                break;
              var s = e.suspendedLanes;
              if (!Qo(s, a)) {
                xa(), Rf(e, s);
                break;
              }
              e.timeoutHandle = Kg(wc.bind(null, e, Ia, lu), i);
              break;
            }
          }
          wc(e, Ia, lu);
          break;
        }
        case Sv: {
          if (ls(e, a), dp(a))
            break;
          if (!nb()) {
            var p = si(e, a), m = p, y = Xn() - m, C = WD(y) - y;
            if (C > 10) {
              e.timeoutHandle = Kg(wc.bind(null, e, Ia, lu), C);
              break;
            }
          }
          wc(e, Ia, lu);
          break;
        }
        case AC: {
          wc(e, Ia, lu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function kD(e) {
      for (var t = e; ; ) {
        if (t.flags & Nu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], p = s.getSnapshot, m = s.value;
                try {
                  if (!be(p(), m))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & Nu && y !== null) {
          y.return = t, t = y;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ls(e, t) {
      t = Ys(t, ky), t = Ys(t, Ev), Bh(e, t);
    }
    function BC(e) {
      if (YT(), (Lt & (Yr | Ii)) !== yr)
        throw new Error("Should not already be working.");
      uu();
      var t = Cf(e, te);
      if (!na(t, Ke))
        return Ya(e, Xn()), null;
      var a = Ay(e, t);
      if (e.tag !== Gu && a === Cc) {
        var i = xf(e);
        i !== te && (t = i, a = e_(e, i));
      }
      if (a === gv) {
        var o = _v;
        throw xc(e, te), ls(e, t), Ya(e, Xn()), o;
      }
      if (a === QS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, wc(e, Ia, lu), Ya(e, Xn()), null;
    }
    function DD(e, t) {
      t !== te && (Tf(e, ut(t, Ke)), Ya(e, Xn()), (Lt & (Yr | Ii)) === yr && (bv(), qu()));
    }
    function t_(e, t) {
      var a = Lt;
      Lt |= MC;
      try {
        return e(t);
      } finally {
        Lt = a, Lt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !El.isBatchingLegacy && (bv(), P1());
      }
    }
    function OD(e, t, a, i, o) {
      var s = Pa(), p = Ir.transition;
      try {
        return Ir.transition = null, Vn(Mr), e(t, a, i, o);
      } finally {
        Vn(s), Ir.transition = p, Lt === yr && bv();
      }
    }
    function ou(e) {
      as !== null && as.tag === Gu && (Lt & (Yr | Ii)) === yr && uu();
      var t = Lt;
      Lt |= MC;
      var a = Ir.transition, i = Pa();
      try {
        return Ir.transition = null, Vn(Mr), e ? e() : void 0;
      } finally {
        Vn(i), Ir.transition = a, Lt = t, (Lt & (Yr | Ii)) === yr && qu();
      }
    }
    function $C() {
      return (Lt & (Yr | Ii)) !== yr;
    }
    function My(e, t) {
      oa(WS, uo, e), uo = ut(uo, t);
    }
    function n_(e) {
      uo = WS.current, la(WS, e);
    }
    function xc(e, t) {
      e.finishedWork = null, e.finishedLanes = te;
      var a = e.timeoutHandle;
      if (a !== Zg && (e.timeoutHandle = Zg, rR(a)), Ln !== null)
        for (var i = Ln.return; i !== null; ) {
          var o = i.alternate;
          gC(o, i), i = i.return;
        }
      ba = e;
      var s = Rc(e.current, null);
      return Ln = s, gr = uo = t, Sr = iu, _v = null, Ty = te, Ev = te, ky = te, Cv = null, Ia = null, wT(), pl.discardPendingWarnings(), s;
    }
    function IC(e, t) {
      do {
        var a = Ln;
        try {
          if (Im(), vE(), pn(), YS.current = null, a === null || a.return === null) {
            Sr = gv, _v = t, Ln = null;
            return;
          }
          if (Xe && a.mode & Vt && Sy(a, !0), Ze)
            if (ga(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Li(a, i, gr);
            } else
              zs(a, t, gr);
          ek(e, a.return, a, t, gr), GC(a);
        } catch (o) {
          t = o, Ln === a && a !== null ? (a = a.return, Ln = a) : a = Ln;
          continue;
        }
        return;
      } while (!0);
    }
    function YC() {
      var e = IS.current;
      return IS.current = vy, e === null ? vy : e;
    }
    function QC(e) {
      IS.current = e;
    }
    function ND() {
      GS = Xn();
    }
    function Tv(e) {
      Ty = ut(e, Ty);
    }
    function zD() {
      Sr === iu && (Sr = Ry);
    }
    function r_() {
      (Sr === iu || Sr === Ry || Sr === Cc) && (Sr = Sv), ba !== null && ($s(Ty) || $s(Ev)) && ls(ba, gr);
    }
    function LD(e) {
      Sr !== Sv && (Sr = Cc), Cv === null ? Cv = [e] : Cv.push(e);
    }
    function MD() {
      return Sr === iu;
    }
    function Ay(e, t) {
      var a = Lt;
      Lt |= Yr;
      var i = YC();
      if (ba !== e || gr !== t) {
        if (ta) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (kv(e, gr), o.clear()), $h(e, t);
        }
        lu = gp(), xc(e, t);
      }
      jo(t);
      do
        try {
          AD();
          break;
        } catch (s) {
          IC(e, s);
        }
      while (!0);
      if (Im(), Lt = a, QC(i), Ln !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return rf(), ba = null, gr = te, Sr;
    }
    function AD() {
      for (; Ln !== null; )
        WC(Ln);
    }
    function UD(e, t) {
      var a = Lt;
      Lt |= Yr;
      var i = YC();
      if (ba !== e || gr !== t) {
        if (ta) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (kv(e, gr), o.clear()), $h(e, t);
        }
        lu = gp(), bv(), xc(e, t);
      }
      jo(t);
      do
        try {
          FD();
          break;
        } catch (s) {
          IC(e, s);
        }
      while (!0);
      return Im(), QC(i), Lt = a, Ln !== null ? (Mh(), iu) : (rf(), ba = null, gr = te, Sr);
    }
    function FD() {
      for (; Ln !== null && !Kd(); )
        WC(Ln);
    }
    function WC(e) {
      var t = e.alternate;
      Zt(e);
      var a;
      (e.mode & Vt) !== $e ? (lS(e), a = a_(t, e, uo), Sy(e, !0)) : a = a_(t, e, uo), pn(), e.memoizedProps = e.pendingProps, a === null ? GC(e) : Ln = a, YS.current = null;
    }
    function GC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Ds) === Be) {
          Zt(t);
          var o = void 0;
          if ((t.mode & Vt) === $e ? o = yC(a, t, uo) : (lS(t), o = yC(a, t, uo), Sy(t, !1)), pn(), o !== null) {
            Ln = o;
            return;
          }
        } else {
          var s = zk(a, t);
          if (s !== null) {
            s.flags &= kh, Ln = s;
            return;
          }
          if ((t.mode & Vt) !== $e) {
            Sy(t, !1);
            for (var p = t.actualDuration, m = t.child; m !== null; )
              p += m.actualDuration, m = m.sibling;
            t.actualDuration = p;
          }
          if (i !== null)
            i.flags |= Ds, i.subtreeFlags = Be, i.deletions = null;
          else {
            Sr = QS, Ln = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          Ln = y;
          return;
        }
        t = i, Ln = t;
      } while (t !== null);
      Sr === iu && (Sr = AC);
    }
    function wc(e, t, a) {
      var i = Pa(), o = Ir.transition;
      try {
        Ir.transition = null, Vn(Mr), jD(e, t, a, i);
      } finally {
        Ir.transition = o, Vn(i);
      }
      return null;
    }
    function jD(e, t, a, i) {
      do
        uu();
      while (as !== null);
      if (qD(), (Lt & (Yr | Ii)) !== yr)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (rp(s), o === null)
        return ap(), null;
      if (s === te && _("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = te, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = jt;
      var p = ut(o.lanes, o.childLanes);
      mp(e, p), e === ba && (ba = null, Ln = null, gr = te), ((o.subtreeFlags & rl) !== Be || (o.flags & rl) !== Be) && (bc || (bc = !0, KS = a, o_(al, function() {
        return uu(), null;
      })));
      var m = (o.subtreeFlags & (Pl | Hl | Vl | rl)) !== Be, y = (o.flags & (Pl | Hl | Vl | rl)) !== Be;
      if (m || y) {
        var C = Ir.transition;
        Ir.transition = null;
        var x = Pa();
        Vn(Mr);
        var z = Lt;
        Lt |= Ii, YS.current = null, Fk(e, o), PE(), Kk(e, o, s), Xw(e.containerInfo), e.current = o, Ls(s), Zk(o, e, s), Ms(), Zd(), Lt = z, Vn(x), Ir.transition = C;
      } else
        e.current = o, PE();
      var O = bc;
      if (bc ? (bc = !1, as = e, xv = s) : (hd = 0, Ny = null), p = e.pendingLanes, p === te && (vd = null), O || ZC(e.current, !1), ep(o.stateNode, i), ta && e.memoizedUpdaters.clear(), yD(), Ya(e, Xn()), t !== null)
        for (var H = e.onRecoverableError, I = 0; I < t.length; I++) {
          var Q = t[I], Ce = Q.stack, We = Q.digest;
          H(Q.value, {
            componentStack: Ce,
            digest: We
          });
        }
      if (Dy) {
        Dy = !1;
        var je = qS;
        throw qS = null, je;
      }
      return na(xv, Ke) && e.tag !== Gu && uu(), p = e.pendingLanes, na(p, Ke) ? ($T(), e === ZS ? wv++ : (wv = 0, ZS = e)) : wv = 0, qu(), ap(), null;
    }
    function uu() {
      if (as !== null) {
        var e = Qh(xv), t = qs(Fa, e), a = Ir.transition, i = Pa();
        try {
          return Ir.transition = null, Vn(t), HD();
        } finally {
          Vn(i), Ir.transition = a;
        }
      }
      return !1;
    }
    function PD(e) {
      XS.push(e), bc || (bc = !0, o_(al, function() {
        return uu(), null;
      }));
    }
    function HD() {
      if (as === null)
        return !1;
      var e = KS;
      KS = null;
      var t = as, a = xv;
      if (as = null, xv = te, (Lt & (Yr | Ii)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      JS = !0, Oy = !1, Fo(a);
      var i = Lt;
      Lt |= Ii, iD(t.current), tD(t, t.current, a, e);
      {
        var o = XS;
        XS = [];
        for (var s = 0; s < o.length; s++) {
          var p = o[s];
          Vk(t, p);
        }
      }
      op(), ZC(t.current, !0), Lt = i, qu(), Oy ? t === Ny ? hd++ : (hd = 0, Ny = t) : hd = 0, JS = !1, Oy = !1, tp(t);
      {
        var m = t.current.stateNode;
        m.effectDuration = 0, m.passiveEffectDuration = 0;
      }
      return !0;
    }
    function qC(e) {
      return vd !== null && vd.has(e);
    }
    function VD(e) {
      vd === null ? vd = /* @__PURE__ */ new Set([e]) : vd.add(e);
    }
    function BD(e) {
      Dy || (Dy = !0, qS = e);
    }
    var $D = BD;
    function XC(e, t, a) {
      var i = _c(a, t), o = WE(e, i, Ke), s = Ku(e, o, Ke), p = xa();
      s !== null && (Uu(s, Ke, p), Ya(s, p));
    }
    function vn(e, t, a) {
      if (Mk(a), Dv(!1), e.tag === B) {
        XC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === B) {
          XC(i, e, a);
          return;
        } else if (i.tag === A) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !qC(s)) {
            var p = _c(a, e), m = xS(i, p, Ke), y = Ku(i, m, Ke), C = xa();
            y !== null && (Uu(y, Ke, C), Ya(y, C));
            return;
          }
        }
        i = i.return;
      }
      _(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ID(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = xa();
      Rf(e, a), JD(e), ba === e && Qo(gr, a) && (Sr === Sv || Sr === Ry && Yo(gr) && Xn() - GS < UC ? xc(e, te) : ky = ut(ky, a)), Ya(e, o);
    }
    function KC(e, t) {
      t === jt && (t = xD(e));
      var a = xa(), i = Ba(e, t);
      i !== null && (Uu(i, t, a), Ya(i, a));
    }
    function YD(e) {
      var t = e.memoizedState, a = jt;
      t !== null && (a = t.retryLane), KC(e, a);
    }
    function QD(e, t) {
      var a = jt, i;
      switch (e.tag) {
        case me:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case Ft:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), KC(e, a);
    }
    function WD(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : _D(e / 1960) * 1960;
    }
    function GD() {
      if (wv > CD)
        throw wv = 0, ZS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      hd > bD && (hd = 0, Ny = null, _("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function qD() {
      pl.flushLegacyContextWarning(), pl.flushPendingUnsafeLifecycleWarnings();
    }
    function ZC(e, t) {
      Zt(e), Uy(e, jl, vD), t && Uy(e, Oi, hD), Uy(e, jl, dD), t && Uy(e, Oi, pD), pn();
    }
    function Uy(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== Be ? i = i.child : ((i.flags & t) !== Be && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var Fy = null;
    function JC(e) {
      {
        if ((Lt & Yr) !== yr || !(e.mode & Et))
          return;
        var t = e.tag;
        if (t !== ee && t !== B && t !== A && t !== P && t !== se && t !== Ye && t !== Pe)
          return;
        var a = et(e) || "ReactComponent";
        if (Fy !== null) {
          if (Fy.has(a))
            return;
          Fy.add(a);
        } else
          Fy = /* @__PURE__ */ new Set([a]);
        var i = ur;
        try {
          Zt(e), _("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Zt(e) : pn();
        }
      }
    }
    var a_;
    {
      var XD = null;
      a_ = function(e, t, a) {
        var i = ob(XD, t);
        try {
          return dC(e, t, a);
        } catch (s) {
          if (uT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Im(), vE(), gC(e, t), ob(t, i), t.mode & Vt && lS(t), Fl(null, dC, null, e, t, a), tl()) {
            var o = ks();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var eb = !1, i_;
    i_ = /* @__PURE__ */ new Set();
    function KD(e) {
      if (bi && !HT())
        switch (e.tag) {
          case P:
          case se:
          case Pe: {
            var t = Ln && et(Ln) || "Unknown", a = t;
            if (!i_.has(a)) {
              i_.add(a);
              var i = et(e) || "Unknown";
              _("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case A: {
            eb || (_("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), eb = !0);
            break;
          }
        }
    }
    function kv(e, t) {
      if (ta) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Ws(e, i, t);
        });
      }
    }
    var l_ = {};
    function o_(e, t) {
      {
        var a = El.current;
        return a !== null ? (a.push(t), l_) : Xd(e, t);
      }
    }
    function tb(e) {
      if (e !== l_)
        return Oh(e);
    }
    function nb() {
      return El.current !== null;
    }
    function ZD(e) {
      {
        if (e.mode & Et) {
          if (!LC())
            return;
        } else if (!SD() || Lt !== yr || e.tag !== P && e.tag !== se && e.tag !== Pe)
          return;
        if (El.current === null) {
          var t = ur;
          try {
            Zt(e), _(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, et(e));
          } finally {
            t ? Zt(e) : pn();
          }
        }
      }
    }
    function JD(e) {
      e.tag !== Gu && LC() && El.current === null && _(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Dv(e) {
      PC = e;
    }
    var Yi = null, md = null, e2 = function(e) {
      Yi = e;
    };
    function yd(e) {
      {
        if (Yi === null)
          return e;
        var t = Yi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function u_(e) {
      return yd(e);
    }
    function s_(e) {
      {
        if (Yi === null)
          return e;
        var t = Yi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = yd(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: J,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function rb(e, t) {
      {
        if (Yi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case A: {
            typeof i == "function" && (o = !0);
            break;
          }
          case P: {
            (typeof i == "function" || s === rt) && (o = !0);
            break;
          }
          case se: {
            (s === J || s === rt) && (o = !0);
            break;
          }
          case Ye:
          case Pe: {
            (s === lt || s === rt) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var p = Yi(a);
          if (p !== void 0 && p === Yi(i))
            return !0;
        }
        return !1;
      }
    }
    function ab(e) {
      {
        if (Yi === null || typeof WeakSet != "function")
          return;
        md === null && (md = /* @__PURE__ */ new WeakSet()), md.add(e);
      }
    }
    var t2 = function(e, t) {
      {
        if (Yi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        uu(), ou(function() {
          c_(e.current, i, a);
        });
      }
    }, n2 = function(e, t) {
      {
        if (e.context !== di)
          return;
        uu(), ou(function() {
          Ov(t, e, null, null);
        });
      }
    };
    function c_(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, p = e.tag, m = e.type, y = null;
        switch (p) {
          case P:
          case Pe:
          case A:
            y = m;
            break;
          case se:
            y = m.render;
            break;
        }
        if (Yi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, x = !1;
        if (y !== null) {
          var z = Yi(y);
          z !== void 0 && (a.has(z) ? x = !0 : t.has(z) && (p === A ? x = !0 : C = !0));
        }
        if (md !== null && (md.has(e) || i !== null && md.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || C) {
          var O = Ba(e, Ke);
          O !== null && _r(O, e, Ke, an);
        }
        o !== null && !x && c_(o, t, a), s !== null && c_(s, t, a);
      }
    }
    var r2 = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return f_(e.current, i, a), a;
      }
    };
    function f_(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, p = e.type, m = null;
        switch (s) {
          case P:
          case Pe:
          case A:
            m = p;
            break;
          case se:
            m = p.render;
            break;
        }
        var y = !1;
        m !== null && t.has(m) && (y = !0), y ? a2(e, a) : i !== null && f_(i, t, a), o !== null && f_(o, t, a);
      }
    }
    function a2(e, t) {
      {
        var a = i2(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case Z:
              t.add(i.stateNode);
              return;
            case K:
              t.add(i.stateNode.containerInfo);
              return;
            case B:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function i2(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === Z)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var d_;
    {
      d_ = !1;
      try {
        var ib = Object.preventExtensions({});
      } catch {
        d_ = !0;
      }
    }
    function l2(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Be, this.subtreeFlags = Be, this.deletions = null, this.lanes = te, this.childLanes = te, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !d_ && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var pi = function(e, t, a, i) {
      return new l2(e, t, a, i);
    };
    function p_(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function o2(e) {
      return typeof e == "function" && !p_(e) && e.defaultProps === void 0;
    }
    function u2(e) {
      if (typeof e == "function")
        return p_(e) ? A : P;
      if (e != null) {
        var t = e.$$typeof;
        if (t === J)
          return se;
        if (t === lt)
          return Ye;
      }
      return ee;
    }
    function Rc(e, t) {
      var a = e.alternate;
      a === null ? (a = pi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Be, a.subtreeFlags = Be, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & jn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ee:
        case P:
        case Pe:
          a.type = yd(e.type);
          break;
        case A:
          a.type = u_(e.type);
          break;
        case se:
          a.type = s_(e.type);
          break;
      }
      return a;
    }
    function s2(e, t) {
      e.flags &= jn | Tn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = te, e.lanes = t, e.child = null, e.subtreeFlags = Be, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Be, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function c2(e, t, a) {
      var i;
      return e === Mm ? (i = Et, t === !0 && (i |= tn, i |= Bt)) : i = $e, ta && (i |= Vt), pi(B, null, null, i);
    }
    function v_(e, t, a, i, o, s) {
      var p = ee, m = e;
      if (typeof e == "function")
        p_(e) ? (p = A, m = u_(m)) : m = yd(m);
      else if (typeof e == "string")
        p = Z;
      else
        e: switch (e) {
          case Si:
            return os(a.children, o, s, t);
          case Ka:
            p = ue, o |= tn, (o & Et) !== $e && (o |= Bt);
            break;
          case _i:
            return f2(a, o, s, t);
          case _e:
            return d2(a, o, s, t);
          case Oe:
            return p2(a, o, s, t);
          case Rn:
            return lb(a, o, s, t);
          case un:
          // eslint-disable-next-line no-fallthrough
          case bt:
          // eslint-disable-next-line no-fallthrough
          case dn:
          // eslint-disable-next-line no-fallthrough
          case or:
          // eslint-disable-next-line no-fallthrough
          case _t:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ei:
                  p = ve;
                  break e;
                case T:
                  p = Ne;
                  break e;
                case J:
                  p = se, m = s_(m);
                  break e;
                case lt:
                  p = Ye;
                  break e;
                case rt:
                  p = Ct, m = null;
                  break e;
              }
            var y = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var C = i ? et(i) : null;
              C && (y += `

Check the render method of \`` + C + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
          }
        }
      var x = pi(p, a, t, o);
      return x.elementType = e, x.type = m, x.lanes = s, x._debugOwner = i, x;
    }
    function h_(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, p = e.props, m = v_(o, s, p, i, t, a);
      return m._debugSource = e._source, m._debugOwner = e._owner, m;
    }
    function os(e, t, a, i) {
      var o = pi(de, e, i, t);
      return o.lanes = a, o;
    }
    function f2(e, t, a, i) {
      typeof e.id != "string" && _('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = pi(Te, e, i, t | Vt);
      return o.elementType = _i, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function d2(e, t, a, i) {
      var o = pi(me, e, i, t);
      return o.elementType = _e, o.lanes = a, o;
    }
    function p2(e, t, a, i) {
      var o = pi(Ft, e, i, t);
      return o.elementType = Oe, o.lanes = a, o;
    }
    function lb(e, t, a, i) {
      var o = pi(Me, e, i, t);
      o.elementType = Rn, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function m_(e, t, a) {
      var i = pi(ae, e, null, t);
      return i.lanes = a, i;
    }
    function v2() {
      var e = pi(Z, null, null, $e);
      return e.elementType = "DELETED", e;
    }
    function h2(e) {
      var t = pi(dt, null, null, $e);
      return t.stateNode = e, t;
    }
    function y_(e, t, a) {
      var i = e.children !== null ? e.children : [], o = pi(K, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function ob(e, t) {
      return e === null && (e = pi(ee, null, null, $e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function m2(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Zg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = jt, this.eventTimes = Qs(te), this.expirationTimes = Qs(an), this.pendingLanes = te, this.suspendedLanes = te, this.pingedLanes = te, this.expiredLanes = te, this.mutableReadLanes = te, this.finishedLanes = te, this.entangledLanes = te, this.entanglements = Qs(te), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], p = 0; p < Po; p++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Mm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Gu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function ub(e, t, a, i, o, s, p, m, y, C) {
      var x = new m2(e, t, a, m, y), z = c2(t, s);
      x.current = z, z.stateNode = x;
      {
        var O = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        z.memoizedState = O;
      }
      return O0(z), x;
    }
    var g_ = "18.3.1";
    function y2(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Wr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: lr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var S_, __;
    S_ = !1, __ = {};
    function sb(e) {
      if (!e)
        return di;
      var t = Ou(e), a = JR(t);
      if (t.tag === A) {
        var i = t.type;
        if (to(i))
          return U1(t, i, a);
      }
      return a;
    }
    function g2(e, t) {
      {
        var a = Ou(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = Jr(a);
        if (o === null)
          return null;
        if (o.mode & tn) {
          var s = et(a) || "Component";
          if (!__[s]) {
            __[s] = !0;
            var p = ur;
            try {
              Zt(o), a.mode & tn ? _("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : _("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              p ? Zt(p) : pn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function cb(e, t, a, i, o, s, p, m) {
      var y = !1, C = null;
      return ub(e, t, y, C, a, i, o, s, p);
    }
    function fb(e, t, a, i, o, s, p, m, y, C) {
      var x = !0, z = ub(a, i, x, e, o, s, p, m, y);
      z.context = sb(null);
      var O = z.current, H = xa(), I = is(O), Q = ru(H, I);
      return Q.callback = t ?? null, Ku(O, Q, I), wD(z, I, H), z;
    }
    function Ov(e, t, a, i) {
      Jd(t, e);
      var o = t.current, s = xa(), p = is(o);
      _n(p);
      var m = sb(a);
      t.context === null ? t.context = m : t.pendingContext = m, bi && ur !== null && !S_ && (S_ = !0, _(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, et(ur) || "Unknown"));
      var y = ru(s, p);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && _("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var C = Ku(o, y, p);
      return C !== null && (_r(C, o, p, s), qm(C, o, p)), p;
    }
    function jy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case Z:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function S2(e) {
      switch (e.tag) {
        case B: {
          var t = e.stateNode;
          if (kf(t)) {
            var a = Uh(t);
            DD(t, a);
          }
          break;
        }
        case me: {
          ou(function() {
            var o = Ba(e, Ke);
            if (o !== null) {
              var s = xa();
              _r(o, e, Ke, s);
            }
          });
          var i = Ke;
          E_(e, i);
          break;
        }
      }
    }
    function db(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Vh(a.retryLane, t));
    }
    function E_(e, t) {
      db(e, t);
      var a = e.alternate;
      a && db(a, t);
    }
    function _2(e) {
      if (e.tag === me) {
        var t = Hs, a = Ba(e, t);
        if (a !== null) {
          var i = xa();
          _r(a, e, t, i);
        }
        E_(e, t);
      }
    }
    function E2(e) {
      if (e.tag === me) {
        var t = is(e), a = Ba(e, t);
        if (a !== null) {
          var i = xa();
          _r(a, e, t, i);
        }
        E_(e, t);
      }
    }
    function pb(e) {
      var t = hn(e);
      return t === null ? null : t.stateNode;
    }
    var vb = function(e) {
      return null;
    };
    function C2(e) {
      return vb(e);
    }
    var hb = function(e) {
      return !1;
    };
    function b2(e) {
      return hb(e);
    }
    var mb = null, yb = null, gb = null, Sb = null, _b = null, Eb = null, Cb = null, bb = null, xb = null;
    {
      var wb = function(e, t, a) {
        var i = t[a], o = mt(e) ? e.slice() : ft({}, e);
        return a + 1 === t.length ? (mt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = wb(e[i], t, a + 1), o);
      }, Rb = function(e, t) {
        return wb(e, t, 0);
      }, Tb = function(e, t, a, i) {
        var o = t[i], s = mt(e) ? e.slice() : ft({}, e);
        if (i + 1 === t.length) {
          var p = a[i];
          s[p] = s[o], mt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = Tb(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, kb = function(e, t, a) {
        if (t.length !== a.length) {
          k("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              k("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Tb(e, t, a, 0);
      }, Db = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = mt(e) ? e.slice() : ft({}, e);
        return s[o] = Db(e[o], t, a + 1, i), s;
      }, Ob = function(e, t, a) {
        return Db(e, t, 0, a);
      }, C_ = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      mb = function(e, t, a, i) {
        var o = C_(e, t);
        if (o !== null) {
          var s = Ob(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var p = Ba(e, Ke);
          p !== null && _r(p, e, Ke, an);
        }
      }, yb = function(e, t, a) {
        var i = C_(e, t);
        if (i !== null) {
          var o = Rb(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = ft({}, e.memoizedProps);
          var s = Ba(e, Ke);
          s !== null && _r(s, e, Ke, an);
        }
      }, gb = function(e, t, a, i) {
        var o = C_(e, t);
        if (o !== null) {
          var s = kb(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = ft({}, e.memoizedProps);
          var p = Ba(e, Ke);
          p !== null && _r(p, e, Ke, an);
        }
      }, Sb = function(e, t, a) {
        e.pendingProps = Ob(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Ke);
        i !== null && _r(i, e, Ke, an);
      }, _b = function(e, t) {
        e.pendingProps = Rb(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, Ke);
        a !== null && _r(a, e, Ke, an);
      }, Eb = function(e, t, a) {
        e.pendingProps = kb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Ke);
        i !== null && _r(i, e, Ke, an);
      }, Cb = function(e) {
        var t = Ba(e, Ke);
        t !== null && _r(t, e, Ke, an);
      }, bb = function(e) {
        vb = e;
      }, xb = function(e) {
        hb = e;
      };
    }
    function x2(e) {
      var t = Jr(e);
      return t === null ? null : t.stateNode;
    }
    function w2(e) {
      return null;
    }
    function R2() {
      return ur;
    }
    function T2(e) {
      var t = e.findFiberByHostInstance, a = h.ReactCurrentDispatcher;
      return Lu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: mb,
        overrideHookStateDeletePath: yb,
        overrideHookStateRenamePath: gb,
        overrideProps: Sb,
        overridePropsDeletePath: _b,
        overridePropsRenamePath: Eb,
        setErrorHandler: bb,
        setSuspenseHandler: xb,
        scheduleUpdate: Cb,
        currentDispatcherRef: a,
        findHostInstanceByFiber: x2,
        findFiberByHostInstance: t || w2,
        // React Refresh
        findHostInstancesForRefresh: r2,
        scheduleRefresh: t2,
        scheduleRoot: n2,
        setRefreshHandler: e2,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: R2,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: g_
      });
    }
    var Nb = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function b_(e) {
      this._internalRoot = e;
    }
    Py.prototype.render = b_.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? _("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Hy(arguments[1]) ? _("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && _("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Un) {
          var i = pb(t.current);
          i && i.parentNode !== a && _("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ov(e, t, null, null);
    }, Py.prototype.unmount = b_.prototype.unmount = function() {
      typeof arguments[0] == "function" && _("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        $C() && _("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ou(function() {
          Ov(null, e, null, null);
        }), N1(t);
      }
    };
    function k2(e, t) {
      if (!Hy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      zb(e);
      var a = !1, i = !1, o = "", s = Nb;
      t != null && (t.hydrate ? k("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Or && _(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var p = cb(e, Mm, null, a, i, o, s);
      Tm(p.current, e);
      var m = e.nodeType === Un ? e.parentNode : e;
      return Up(m), new b_(p);
    }
    function Py(e) {
      this._internalRoot = e;
    }
    function D2(e) {
      e && Kh(e);
    }
    Py.prototype.unstable_scheduleHydration = D2;
    function O2(e, t, a) {
      if (!Hy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      zb(e), t === void 0 && _("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, p = !1, m = "", y = Nb;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (m = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var C = fb(t, null, e, Mm, i, s, p, m, y);
      if (Tm(C.current, e), Up(e), o)
        for (var x = 0; x < o.length; x++) {
          var z = o[x];
          MT(C, z);
        }
      return new Py(C);
    }
    function Hy(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === el || e.nodeType === jd));
    }
    function Nv(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === el || e.nodeType === jd || e.nodeType === Un && e.nodeValue === " react-mount-point-unstable "));
    }
    function zb(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && _("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Wp(e) && (e._reactRootContainer ? _("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : _("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var N2 = h.ReactCurrentOwner, Lb;
    Lb = function(e) {
      if (e._reactRootContainer && e.nodeType !== Un) {
        var t = pb(e._reactRootContainer.current);
        t && t.parentNode !== e && _("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = x_(e), o = !!(i && Qu(i));
      o && !a && _("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && _("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function x_(e) {
      return e ? e.nodeType === el ? e.documentElement : e.firstChild : null;
    }
    function Mb() {
    }
    function z2(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var O = jy(p);
            s.call(O);
          };
        }
        var p = fb(
          t,
          i,
          e,
          Gu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Mb
        );
        e._reactRootContainer = p, Tm(p.current, e);
        var m = e.nodeType === Un ? e.parentNode : e;
        return Up(m), ou(), p;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var O = jy(x);
            C.call(O);
          };
        }
        var x = cb(
          e,
          Gu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Mb
        );
        e._reactRootContainer = x, Tm(x.current, e);
        var z = e.nodeType === Un ? e.parentNode : e;
        return Up(z), ou(function() {
          Ov(t, x, a, i);
        }), x;
      }
    }
    function L2(e, t) {
      e !== null && typeof e != "function" && _("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vy(e, t, a, i, o) {
      Lb(a), L2(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, p;
      if (!s)
        p = z2(a, t, e, o, i);
      else {
        if (p = s, typeof o == "function") {
          var m = o;
          o = function() {
            var y = jy(p);
            m.call(y);
          };
        }
        Ov(t, p, e, o);
      }
      return jy(p);
    }
    var Ab = !1;
    function M2(e) {
      {
        Ab || (Ab = !0, _("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = N2.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || _("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", At(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : g2(e, "findDOMNode");
    }
    function A2(e, t, a) {
      if (_("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Wp(t) && t._reactRootContainer === void 0;
        i && _("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Vy(null, e, t, !0, a);
    }
    function U2(e, t, a) {
      if (_("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Wp(t) && t._reactRootContainer === void 0;
        i && _("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vy(null, e, t, !1, a);
    }
    function F2(e, t, a, i) {
      if (_("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Nv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !_g(e))
        throw new Error("parentComponent must be a valid React Component");
      return Vy(e, t, a, !1, i);
    }
    var Ub = !1;
    function j2(e) {
      if (Ub || (Ub = !0, _("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Nv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Wp(e) && e._reactRootContainer === void 0;
        t && _("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = x_(e), i = a && !Qu(a);
          i && _("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ou(function() {
          Vy(null, null, e, !1, function() {
            e._reactRootContainer = null, N1(e);
          });
        }), !0;
      } else {
        {
          var o = x_(e), s = !!(o && Qu(o)), p = e.nodeType === qr && Nv(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && _("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", p ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    wr(S2), Fu(_2), Wh(E2), Ks(Pa), Sp(Ih), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && _("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ic(Hw), Sg(t_, OD, ou);
    function P2(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hy(t))
        throw new Error("Target container is not a DOM element.");
      return y2(e, t, null, a);
    }
    function H2(e, t, a, i) {
      return F2(e, t, a, i);
    }
    var w_ = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Qu, Gf, km, Ru, Yc, t_]
    };
    function V2(e, t) {
      return w_.usingClientEntryPoint || _('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), k2(e, t);
    }
    function B2(e, t, a) {
      return w_.usingClientEntryPoint || _('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), O2(e, t, a);
    }
    function $2(e) {
      return $C() && _("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ou(e);
    }
    var I2 = T2({
      findFiberByHostInstance: fc,
      bundleType: 1,
      version: g_,
      rendererPackageName: "react-dom"
    });
    if (!I2 && Mn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Fb = window.location.protocol;
      /^(https?|file):$/.test(Fb) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Fb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w_, Wa.createPortal = P2, Wa.createRoot = V2, Wa.findDOMNode = M2, Wa.flushSync = $2, Wa.hydrate = A2, Wa.hydrateRoot = B2, Wa.render = U2, Wa.unmountComponentAtNode = j2, Wa.unstable_batchedUpdates = t_, Wa.unstable_renderSubtreeIntoContainer = H2, Wa.version = g_, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Wa;
}
var Xb;
function sO() {
  if (Xb) return Iy.exports;
  Xb = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (c) {
        console.error(c);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (f(), Iy.exports = oO()) : Iy.exports = uO(), Iy.exports;
}
var cO = sO(), hi = { "hds-icon": "Notification-module_hds-icon__2ocjD", "hds-icon--size-xs": "Notification-module_hds-icon--size-xs__2Mj5D", "hds-icon--size-s": "Notification-module_hds-icon--size-s__igOqE", "hds-icon--size-m": "Notification-module_hds-icon--size-m__sxXOh", "hds-icon--size-l": "Notification-module_hds-icon--size-l__3Ho_A", "hds-icon--size-xl": "Notification-module_hds-icon--size-xl__1cTta", "hds-icon--alert-circle-fill": "Notification-module_hds-icon--alert-circle-fill__12XKS", "hds-icon-start--alert-circle-fill": "Notification-module_hds-icon-start--alert-circle-fill__TwQNY", "hds-icon-end--alert-circle-fill": "Notification-module_hds-icon-end--alert-circle-fill__3gb8C", "hds-icon--check-circle-fill": "Notification-module_hds-icon--check-circle-fill__2wjh3", "hds-icon-start--check-circle-fill": "Notification-module_hds-icon-start--check-circle-fill__2QULC", "hds-icon-end--check-circle-fill": "Notification-module_hds-icon-end--check-circle-fill__2gbRD", "hds-icon--error-fill": "Notification-module_hds-icon--error-fill__159Nf", "hds-icon-start--error-fill": "Notification-module_hds-icon-start--error-fill__2FrGR", "hds-icon-end--error-fill": "Notification-module_hds-icon-end--error-fill__1qx8A", "hds-icon--info-circle-fill": "Notification-module_hds-icon--info-circle-fill__1F7dp", "hds-icon-start--info-circle-fill": "Notification-module_hds-icon-start--info-circle-fill__1-3q2", "hds-icon-end--info-circle-fill": "Notification-module_hds-icon-end--info-circle-fill__w7XD0", notification: "Notification-module_notification__3eUBu notification_hds-notification__2DQPN", noBorder: "Notification-module_noBorder__3HZZH", close: "Notification-module_close__nX5bK notification_hds-notification__close-button__1yGIj", autoClose: "Notification-module_autoClose__3mkBX", content: "Notification-module_content__2E8Z_ notification_hds-notification__content__5ylSS", icon: "Notification-module_icon__3xieh notification_hds-icon__29HQM", label: "Notification-module_label__2OUcx notification_hds-notification__label__2t1lR", body: "Notification-module_body__2lrYE notification_hds-notification__body__3cobH", small: "Notification-module_small__3Vi8R notification_hds-notification--small__1wVl6", large: "Notification-module_large__3sVHL notification_hds-notification--large__260Qm", "top-left": "Notification-module_top-left__nZQMd notification_hds-notification--top-left__sIHO2", "top-center": "Notification-module_top-center__1GWPg notification_hds-notification--top-center__GDWo5", "top-right": "Notification-module_top-right__1HAHi notification_hds-notification--top-right__3Wa5K", "bottom-left": "Notification-module_bottom-left__17y2g notification_hds-notification--bottom-left__eB4ZK", "bottom-center": "Notification-module_bottom-center__2i8Ht notification_hds-notification--bottom-center__5EgOP", "bottom-right": "Notification-module_bottom-right__1Giev notification_hds-notification--bottom-right__1SmfT", success: "Notification-module_success__TdJna notification_hds-notification--success__1_3XZ", alert: "Notification-module_alert__1bsQa notification_hds-notification--alert__1MV7H", error: "Notification-module_error___-koD notification_hds-notification--error__3T1Of", boxShadow: "Notification-module_boxShadow__2yJQB notification_hds-notification--box-shadow__2kbD_" };
$_(`.notification_hds-icon__29HQM{background-color:currentcolor;display:inline-block;height:var(--icon-size);-webkit-mask-image:var(--mask-image);mask-image:var(--mask-image);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:auto;mask-size:auto;width:var(--icon-size)}.notification_hds-icon--size-xs__19VKz{--icon-size:var(--spacing-layout-2-xs)}.notification_hds-icon--size-s__2Ffyw{--icon-size:var(--spacing-layout-xs)}.notification_hds-icon--size-m__28mpE{--icon-size:var(--spacing-layout-s)}.notification_hds-icon--size-l__T6YEf{--icon-size:var(--spacing-layout-m)}.notification_hds-icon--size-xl__18_OX{--icon-size:var(--spacing-layout-l)}.notification_hds-icon--alert-circle-fill__3er4k{--mask-image-alert-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-alert-circle-fill)}.notification_hds-icon-start--alert-circle-fill__1r-B3{--mask-image-before:var(--mask-image-alert-circle-fill)}.notification_hds-icon-end--alert-circle-fill__2dkn2{--mask-image-after:var(--mask-image-alert-circle-fill)}.notification_hds-icon--check-circle-fill__2u1G4{--mask-image-check-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-check-circle-fill)}.notification_hds-icon-start--check-circle-fill__2JuU0{--mask-image-before:var(--mask-image-check-circle-fill)}.notification_hds-icon-end--check-circle-fill__3YsAQ{--mask-image-after:var(--mask-image-check-circle-fill)}.notification_hds-icon--error-fill__jPWn1{--mask-image-error-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-error-fill)}.notification_hds-icon-start--error-fill__1sR7v{--mask-image-before:var(--mask-image-error-fill)}.notification_hds-icon-end--error-fill__1jyx_{--mask-image-after:var(--mask-image-error-fill)}.notification_hds-icon--info-circle-fill__1gXDU{--mask-image-info-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm1 7v6.5h2V18H9v-1.5h2v-5H9V10h4zm-1.188-4a1.312 1.312 0 110 2.625 1.312 1.312 0 010-2.625z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-info-circle-fill)}.notification_hds-icon-start--info-circle-fill__rortu{--mask-image-before:var(--mask-image-info-circle-fill)}.notification_hds-icon-end--info-circle-fill__3ycxA{--mask-image-after:var(--mask-image-info-circle-fill)}.notification_hds-notification__2DQPN{--notification-background-color:var(--color-info-light);--notification-border-color:var(--color-info);--notification-border-width:var(--spacing-2-xs);--notification-icon-color:var(--color-info);--notification-color:var(--color-black-90);--notification-max-width-inline:none;--notification-max-width-toast:21rem;--notification-z-index-inline:auto;--notification-z-index-toast:99;--notification-offset:var(--spacing-layout-s);--notification-padding:var(--spacing-s);background-color:var(--notification-background-color);border:solid var(--notification-border-color);border-left-width:var(--notification-border-width);border-bottom-width:0;border-right-width:0;border-top-width:0;box-sizing:border-box;color:var(--notification-color);max-width:var(--notification-max-width-inline);padding:var(--notification-padding);position:relative;width:100%;z-index:var(--notification-z-index-inline)}.notification_hds-notification__content__5ylSS{display:grid;grid-gap:var(--spacing-s);gap:var(--spacing-s)}.notification_hds-notification__label__2t1lR{align-items:center;display:flex;font-size:var(--fontsize-heading-xs);font-weight:700;letter-spacing:0;line-height:24px;margin-right:var(--spacing-l)}.notification_hds-notification__2DQPN .notification_hds-icon__29HQM{--icon-size:var(--spacing-layout-xs)}.notification_hds-notification__label__2t1lR>.notification_hds-icon__29HQM{color:var(--notification-icon-color);flex:none;margin-right:var(--spacing-2-xs)}.notification_hds-notification__body__3cobH{font-size:var(--fontsize-body-s);line-height:24px}.notification_hds-notification__close-button__1yGIj{--notification-close-button-offset:var(--spacing-s);background:none;border:none;cursor:pointer;display:flex;outline:none;padding:0;position:absolute;right:var(--notification-close-button-offset);top:var(--notification-close-button-offset)}.notification_hds-notification__close-button__1yGIj:focus{box-shadow:0 0 0 3px var(--color-focus-outline)}.notification_hds-notification--small__1wVl6{--notification-padding:var(--spacing-2-xs)}.notification_hds-notification--small__1wVl6 .notification_hds-notification__content__5ylSS{display:flex;grid-gap:0;gap:0}.notification_hds-notification--small__1wVl6 .notification_hds-notification__label__2t1lR{margin-right:0}.notification_hds-notification--small__1wVl6 .notification_hds-notification__body__3cobH{margin-right:var(--spacing-l)}.notification_hds-notification--small__1wVl6 .notification_hds-notification__close-button__1yGIj{--notification-close-button-offset:var(--spacing-2-xs)}.notification_hds-notification--large__260Qm{--notification-padding:var(--spacing-l)}.notification_hds-notification--large__260Qm .notification_hds-notification__label__2t1lR{margin-right:0}.notification_hds-notification--large__260Qm .notification_hds-notification__close-button__1yGIj{--notification-close-button-offset:var(--spacing-2-xs)}.notification_hds-notification--bottom-center__5EgOP,.notification_hds-notification--bottom-left__eB4ZK,.notification_hds-notification--bottom-right__1SmfT,.notification_hds-notification--top-center__GDWo5,.notification_hds-notification--top-left__sIHO2,.notification_hds-notification--top-right__3Wa5K{border-left-width:0;border-bottom-width:0;border-right-width:0;border-top-width:var(--notification-border-width);max-width:var(--notification-max-width-toast);position:fixed;width:calc(100% - var(--spacing-l));z-index:var(--notification-z-index-toast)}.notification_hds-notification--top-left__sIHO2{left:var(--notification-offset);top:var(--notification-offset)}.notification_hds-notification--top-center__GDWo5{left:50%;top:var(--notification-offset);transform:translateX(-50%)}.notification_hds-notification--top-right__3Wa5K{right:var(--notification-offset);top:var(--notification-offset)}.notification_hds-notification--bottom-left__eB4ZK{bottom:var(--notification-offset);left:var(--notification-offset)}.notification_hds-notification--bottom-center__5EgOP{bottom:var(--notification-offset);left:50%;transform:translateX(-50%)}.notification_hds-notification--bottom-right__1SmfT{bottom:var(--notification-offset);right:var(--notification-offset)}@media only screen and (max-width:765.98px){.notification_hds-notification__2DQPN{--notification-offset:var(--spacing-s)}}.notification_hds-notification--success__1_3XZ{--notification-background-color:var(--color-success-light);--notification-border-color:var(--color-success);--notification-icon-color:var(--color-success)}.notification_hds-notification--alert__1MV7H{--notification-background-color:var(--color-alert-light);--notification-border-color:var(--color-alert-dark);--notification-icon-color:var(--color-alert-dark)}.notification_hds-notification--error__3T1Of{--notification-background-color:var(--color-error-light);--notification-border-color:var(--color-error);--notification-icon-color:var(--color-error)}.notification_hds-notification--box-shadow__2kbD_{box-shadow:var(--box-shadow-l)}.Notification-module_hds-icon__2ocjD{background-color:currentcolor;display:inline-block;height:var(--icon-size);-webkit-mask-image:var(--mask-image);mask-image:var(--mask-image);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:auto;mask-size:auto;width:var(--icon-size)}.Notification-module_hds-icon--size-xs__2Mj5D{--icon-size:var(--spacing-layout-2-xs)}.Notification-module_hds-icon--size-s__igOqE{--icon-size:var(--spacing-layout-xs)}.Notification-module_hds-icon--size-m__sxXOh{--icon-size:var(--spacing-layout-s)}.Notification-module_hds-icon--size-l__3Ho_A{--icon-size:var(--spacing-layout-m)}.Notification-module_hds-icon--size-xl__1cTta{--icon-size:var(--spacing-layout-l)}[class*=hds-icon-start--]:before{-webkit-mask-image:var(--mask-image-before);mask-image:var(--mask-image-before)}[class*=hds-icon-end--]:after,[class*=hds-icon-start--]:before{background-color:currentcolor;content:"";display:inline-flex;height:var(--icon-size,24px);-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:var(--icon-size,24px)}[class*=hds-icon-end--]:after{-webkit-mask-image:var(--mask-image-after);mask-image:var(--mask-image-after)}.Notification-module_hds-icon--alert-circle-fill__12XKS{--mask-image-alert-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 110 18 9 9 0 010-18zm1 13v2h-2v-2h2zm0-10v8h-2V6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-alert-circle-fill)}.Notification-module_hds-icon-start--alert-circle-fill__TwQNY{--mask-image-before:var(--mask-image-alert-circle-fill)}.Notification-module_hds-icon-end--alert-circle-fill__3gb8C{--mask-image-after:var(--mask-image-alert-circle-fill)}.Notification-module_hds-icon--check-circle-fill__2wjh3{--mask-image-check-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm4.5 5L18 9.5 10.5 17 6 12.5 7.5 11l3 3 6-6z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-check-circle-fill)}.Notification-module_hds-icon-start--check-circle-fill__2QULC{--mask-image-before:var(--mask-image-check-circle-fill)}.Notification-module_hds-icon-end--check-circle-fill__2gbRD{--mask-image-after:var(--mask-image-check-circle-fill)}.Notification-module_hds-icon--error-fill__159Nf{--mask-image-error-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.175 3.456c.349-.586 1.223-.607 1.61-.063l.04.063 9.052 15.21c.343.577-.072 1.285-.753 1.332l-.072.002H2.948c-.7 0-1.15-.689-.858-1.273l.033-.06 9.052-15.21zM13 16v2h-2v-2h2zm0-7.5v6h-2v-6h2z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-error-fill)}.Notification-module_hds-icon-start--error-fill__2FrGR{--mask-image-before:var(--mask-image-error-fill)}.Notification-module_hds-icon-end--error-fill__1qx8A{--mask-image-after:var(--mask-image-error-fill)}.Notification-module_hds-icon--info-circle-fill__1F7dp{--mask-image-info-circle-fill:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 3a9 9 0 100 18 9 9 0 000-18zm1 7v6.5h2V18H9v-1.5h2v-5H9V10h4zm-1.188-4a1.312 1.312 0 110 2.625 1.312 1.312 0 010-2.625z' fill='currentColor'/%3E%3C/svg%3E");--mask-image:var(--mask-image-info-circle-fill)}.Notification-module_hds-icon-start--info-circle-fill__1-3q2{--mask-image-before:var(--mask-image-info-circle-fill)}.Notification-module_hds-icon-end--info-circle-fill__w7XD0{--mask-image-after:var(--mask-image-info-circle-fill)}.Notification-module_notification__3eUBu{overflow:hidden}.Notification-module_notification__3eUBu.Notification-module_noBorder__3HZZH{border:0;padding-top:calc(var(--notification-padding) + var(--notification-border-width))}.Notification-module_notification__3eUBu.Notification-module_noBorder__3HZZH .Notification-module_close__nX5bK{top:calc(var(--notification-close-button-offset) + var(--notification-border-width))}.Notification-module_autoClose__3mkBX{background-color:var(--notification-border-color);height:var(--notification-border-width);left:0;position:absolute;top:0;width:100%}.Notification-module_icon__3xieh{background-color:transparent}`);
const Tx = typeof document < "u" ? bn.useLayoutEffect : () => {
};
function fO(f) {
  const c = wt.useRef(null);
  return Tx(() => {
    c.current = f;
  }, [
    f
  ]), wt.useCallback((...h) => {
    const S = c.current;
    return S == null ? void 0 : S(...h);
  }, []);
}
let Kb = /* @__PURE__ */ new Map();
function dO(f, c) {
  if (f === c) return f;
  let h = Kb.get(f);
  if (h)
    return h.forEach((b) => b(c)), c;
  let S = Kb.get(c);
  return S ? (S.forEach((b) => b(f)), f) : c;
}
function pO(...f) {
  return (...c) => {
    for (let h of f) typeof h == "function" && h(...c);
  };
}
function kx(f) {
  var c, h, S = "";
  if (typeof f == "string" || typeof f == "number") S += f;
  else if (typeof f == "object") if (Array.isArray(f)) {
    var b = f.length;
    for (c = 0; c < b; c++) f[c] && (h = kx(f[c])) && (S && (S += " "), S += h);
  } else for (h in f) f[h] && (S && (S += " "), S += h);
  return S;
}
function vO() {
  for (var f, c, h = 0, S = "", b = arguments.length; h < b; h++) (f = arguments[h]) && (c = kx(f)) && (S && (S += " "), S += c);
  return S;
}
function hO(...f) {
  let c = {
    ...f[0]
  };
  for (let h = 1; h < f.length; h++) {
    let S = f[h];
    for (let b in S) {
      let k = c[b], _ = S[b];
      typeof k == "function" && typeof _ == "function" && // This is a lot faster than a regex.
      b[0] === "o" && b[1] === "n" && b.charCodeAt(2) >= /* 'A' */
      65 && b.charCodeAt(2) <= /* 'Z' */
      90 ? c[b] = pO(k, _) : (b === "className" || b === "UNSAFE_className") && typeof k == "string" && typeof _ == "string" ? c[b] = vO(k, _) : b === "id" && k && _ ? c.id = dO(k, _) : c[b] = _ !== void 0 ? _ : k;
    }
  }
  return c;
}
class mO {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = !0, this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), this.isPropagationStopped = () => !0;
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {
  }
  constructor(c, h) {
    this.nativeEvent = h, this.target = h.target, this.currentTarget = h.currentTarget, this.relatedTarget = h.relatedTarget, this.bubbles = h.bubbles, this.cancelable = h.cancelable, this.defaultPrevented = h.defaultPrevented, this.eventPhase = h.eventPhase, this.isTrusted = h.isTrusted, this.timeStamp = h.timeStamp, this.type = c;
  }
}
function yO(f) {
  let c = wt.useRef({
    isFocused: !1,
    observer: null
  });
  Tx(() => {
    const S = c.current;
    return () => {
      S.observer && (S.observer.disconnect(), S.observer = null);
    };
  }, []);
  let h = fO((S) => {
    f == null || f(S);
  });
  return wt.useCallback((S) => {
    if (S.target instanceof HTMLButtonElement || S.target instanceof HTMLInputElement || S.target instanceof HTMLTextAreaElement || S.target instanceof HTMLSelectElement) {
      c.current.isFocused = !0;
      let b = S.target, k = (_) => {
        c.current.isFocused = !1, b.disabled && h(new mO("blur", _)), c.current.observer && (c.current.observer.disconnect(), c.current.observer = null);
      };
      b.addEventListener("focusout", k, {
        once: !0
      }), c.current.observer = new MutationObserver(() => {
        if (c.current.isFocused && b.disabled) {
          var _;
          (_ = c.current.observer) === null || _ === void 0 || _.disconnect();
          let G = b === document.activeElement ? null : document.activeElement;
          b.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: G
          })), b.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: G
          }));
        }
      }), c.current.observer.observe(b, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    h
  ]);
}
function gO(f) {
  let { isDisabled: c, onBlurWithin: h, onFocusWithin: S, onFocusWithinChange: b } = f, k = wt.useRef({
    isFocusWithin: !1
  }), _ = wt.useCallback((A) => {
    k.current.isFocusWithin && !A.currentTarget.contains(A.relatedTarget) && (k.current.isFocusWithin = !1, h && h(A), b && b(!1));
  }, [
    h,
    b,
    k
  ]), G = yO(_), P = wt.useCallback((A) => {
    !k.current.isFocusWithin && document.activeElement === A.target && (S && S(A), b && b(!0), k.current.isFocusWithin = !0, G(A));
  }, [
    S,
    b,
    G
  ]);
  return c ? {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: P,
      onBlur: _
    }
  };
}
const Zb = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function SO(f = {}) {
  let { style: c, isFocusable: h } = f, [S, b] = wt.useState(!1), { focusWithinProps: k } = gO({
    isDisabled: !h,
    onFocusWithinChange: (G) => b(G)
  }), _ = wt.useMemo(() => S ? c : c ? {
    ...Zb,
    ...c
  } : Zb, [
    S
  ]);
  return {
    visuallyHiddenProps: {
      ...k,
      style: _
    }
  };
}
function _O(f) {
  let { children: c, elementType: h = "div", isFocusable: S, style: b, ...k } = f, { visuallyHiddenProps: _ } = SO(f);
  return /* @__PURE__ */ bn.createElement(h, hO(k, _), c);
}
let eg = po();
const yt = (f) => Zv(f, eg);
let tg = po();
yt.write = (f) => Zv(f, tg);
let ng = po();
yt.onStart = (f) => Zv(f, ng);
let I_ = po();
yt.onFrame = (f) => Zv(f, I_);
let Y_ = po();
yt.onFinish = (f) => Zv(f, Y_);
let kc = [];
yt.setTimeout = (f, c) => {
  let h = yt.now() + c, S = () => {
    let k = kc.findIndex((_) => _.cancel == S);
    ~k && kc.splice(k, 1), cs.count -= ~k ? 1 : 0;
  }, b = {
    time: h,
    handler: f,
    cancel: S
  };
  return kc.splice(Dx(h), 0, b), cs.count += 1, Ox(), b;
};
let Dx = (f) => ~(~kc.findIndex((c) => c.time > f) || ~kc.length);
yt.cancel = (f) => {
  eg.delete(f), tg.delete(f);
};
yt.sync = (f) => {
  M_ = !0, yt.batchedUpdates(f), M_ = !1;
};
yt.throttle = (f) => {
  let c;
  function h() {
    try {
      f(...c);
    } finally {
      c = null;
    }
  }
  function S(...b) {
    c = b, yt.onStart(h);
  }
  return S.handler = f, S.cancel = () => {
    ng.delete(h), c = null;
  }, S;
};
let Q_ = typeof window < "u" ? window.requestAnimationFrame : () => {
};
yt.use = (f) => Q_ = f;
yt.now = typeof performance < "u" ? () => performance.now() : Date.now;
yt.batchedUpdates = (f) => f();
yt.catch = console.error;
yt.frameLoop = "always";
yt.advance = () => {
  yt.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : zx();
};
let ss = -1, M_ = !1;
function Zv(f, c) {
  M_ ? (c.delete(f), f(0)) : (c.add(f), Ox());
}
function Ox() {
  ss < 0 && (ss = 0, yt.frameLoop !== "demand" && Q_(Nx));
}
function Nx() {
  ~ss && (Q_(Nx), yt.batchedUpdates(zx));
}
function zx() {
  let f = ss;
  ss = yt.now();
  let c = Dx(ss);
  c && (Lx(kc.splice(0, c), (h) => h.handler()), cs.count -= c), ng.flush(), eg.flush(f ? Math.min(64, ss - f) : 16.667), I_.flush(), tg.flush(), Y_.flush();
}
function po() {
  let f = /* @__PURE__ */ new Set(), c = f;
  return {
    add(h) {
      cs.count += c == f && !f.has(h) ? 1 : 0, f.add(h);
    },
    delete(h) {
      return cs.count -= c == f && f.has(h) ? 1 : 0, f.delete(h);
    },
    flush(h) {
      c.size && (f = /* @__PURE__ */ new Set(), cs.count -= c.size, Lx(c, (S) => S(h) && f.add(S)), cs.count += f.size, c = f);
    }
  };
}
function Lx(f, c) {
  f.forEach((h) => {
    try {
      c(h);
    } catch (S) {
      yt.catch(S);
    }
  });
}
const cs = {
  count: 0,
  clear() {
    ss = -1, kc = [], ng = po(), eg = po(), I_ = po(), tg = po(), Y_ = po(), cs.count = 0;
  }
};
function A_() {
}
const EO = (f, c, h) => Object.defineProperty(f, c, {
  value: h,
  writable: !0,
  configurable: !0
}), pe = {
  arr: Array.isArray,
  obj: (f) => !!f && f.constructor.name === "Object",
  fun: (f) => typeof f == "function",
  str: (f) => typeof f == "string",
  num: (f) => typeof f == "number",
  und: (f) => f === void 0
};
function cu(f, c) {
  if (pe.arr(f)) {
    if (!pe.arr(c) || f.length !== c.length) return !1;
    for (let h = 0; h < f.length; h++)
      if (f[h] !== c[h]) return !1;
    return !0;
  }
  return f === c;
}
const Pt = (f, c) => f.forEach(c);
function ho(f, c, h) {
  if (pe.arr(f)) {
    for (let S = 0; S < f.length; S++)
      c.call(h, f[S], `${S}`);
    return;
  }
  for (const S in f)
    f.hasOwnProperty(S) && c.call(h, f[S], S);
}
const mi = (f) => pe.und(f) ? [] : pe.arr(f) ? f : [f];
function Hv(f, c) {
  if (f.size) {
    const h = Array.from(f);
    f.clear(), Pt(h, c);
  }
}
const Pv = (f, ...c) => Hv(f, (h) => h(...c));
let W_, Mx, fs = null, Ax = !1, G_ = A_;
const CO = (f) => {
  f.to && (Mx = f.to), f.now && (yt.now = f.now), f.colors !== void 0 && (fs = f.colors), f.skipAnimation != null && (Ax = f.skipAnimation), f.createStringInterpolator && (W_ = f.createStringInterpolator), f.requestAnimationFrame && yt.use(f.requestAnimationFrame), f.batchedUpdates && (yt.batchedUpdates = f.batchedUpdates), f.willAdvance && (G_ = f.willAdvance), f.frameLoop && (yt.frameLoop = f.frameLoop);
};
var mo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return W_;
  },
  get to() {
    return Mx;
  },
  get colors() {
    return fs;
  },
  get skipAnimation() {
    return Ax;
  },
  get willAdvance() {
    return G_;
  },
  assign: CO
});
const Vv = /* @__PURE__ */ new Set();
let Wi = [], k_ = [], qy = 0;
const rg = {
  get idle() {
    return !Vv.size && !Wi.length;
  },
  start(f) {
    qy > f.priority ? (Vv.add(f), yt.onStart(bO)) : (Ux(f), yt(U_));
  },
  advance: U_,
  sort(f) {
    if (qy)
      yt.onFrame(() => rg.sort(f));
    else {
      const c = Wi.indexOf(f);
      ~c && (Wi.splice(c, 1), Fx(f));
    }
  },
  clear() {
    Wi = [], Vv.clear();
  }
};
function bO() {
  Vv.forEach(Ux), Vv.clear(), yt(U_);
}
function Ux(f) {
  Wi.includes(f) || Fx(f);
}
function Fx(f) {
  Wi.splice(xO(Wi, (c) => c.priority > f.priority), 0, f);
}
function U_(f) {
  const c = k_;
  for (let h = 0; h < Wi.length; h++) {
    const S = Wi[h];
    qy = S.priority, S.idle || (G_(S), S.advance(f), S.idle || c.push(S));
  }
  return qy = 0, k_ = Wi, k_.length = 0, Wi = c, Wi.length > 0;
}
function xO(f, c) {
  const h = f.findIndex(c);
  return h < 0 ? f.length : h;
}
const wO = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
}, bl = "[-+]?\\d*\\.?\\d+", Xy = bl + "%";
function ag(...f) {
  return "\\(\\s*(" + f.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const RO = new RegExp("rgb" + ag(bl, bl, bl)), TO = new RegExp("rgba" + ag(bl, bl, bl, bl)), kO = new RegExp("hsl" + ag(bl, Xy, Xy)), DO = new RegExp("hsla" + ag(bl, Xy, Xy, bl)), OO = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, NO = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, zO = /^#([0-9a-fA-F]{6})$/, LO = /^#([0-9a-fA-F]{8})$/;
function MO(f) {
  let c;
  return typeof f == "number" ? f >>> 0 === f && f >= 0 && f <= 4294967295 ? f : null : (c = zO.exec(f)) ? parseInt(c[1] + "ff", 16) >>> 0 : fs && fs[f] !== void 0 ? fs[f] : (c = RO.exec(f)) ? (Sd(c[1]) << 24 | Sd(c[2]) << 16 | Sd(c[3]) << 8 | 255) >>> 0 : (c = TO.exec(f)) ? (Sd(c[1]) << 24 | Sd(c[2]) << 16 | Sd(c[3]) << 8 | tx(c[4])) >>> 0 : (c = OO.exec(f)) ? parseInt(c[1] + c[1] + c[2] + c[2] + c[3] + c[3] + "ff", 16) >>> 0 : (c = LO.exec(f)) ? parseInt(c[1], 16) >>> 0 : (c = NO.exec(f)) ? parseInt(c[1] + c[1] + c[2] + c[2] + c[3] + c[3] + c[4] + c[4], 16) >>> 0 : (c = kO.exec(f)) ? (Jb(ex(c[1]), Qy(c[2]), Qy(c[3])) | 255) >>> 0 : (c = DO.exec(f)) ? (Jb(ex(c[1]), Qy(c[2]), Qy(c[3])) | tx(c[4])) >>> 0 : null;
}
function D_(f, c, h) {
  return h < 0 && (h += 1), h > 1 && (h -= 1), h < 1 / 6 ? f + (c - f) * 6 * h : h < 1 / 2 ? c : h < 2 / 3 ? f + (c - f) * (2 / 3 - h) * 6 : f;
}
function Jb(f, c, h) {
  const S = h < 0.5 ? h * (1 + c) : h + c - h * c, b = 2 * h - S, k = D_(b, S, f + 1 / 3), _ = D_(b, S, f), G = D_(b, S, f - 1 / 3);
  return Math.round(k * 255) << 24 | Math.round(_ * 255) << 16 | Math.round(G * 255) << 8;
}
function Sd(f) {
  const c = parseInt(f, 10);
  return c < 0 ? 0 : c > 255 ? 255 : c;
}
function ex(f) {
  return (parseFloat(f) % 360 + 360) % 360 / 360;
}
function tx(f) {
  const c = parseFloat(f);
  return c < 0 ? 0 : c > 1 ? 255 : Math.round(c * 255);
}
function Qy(f) {
  const c = parseFloat(f);
  return c < 0 ? 0 : c > 100 ? 1 : c / 100;
}
function nx(f) {
  let c = MO(f);
  if (c === null) return f;
  c = c || 0;
  let h = (c & 4278190080) >>> 24, S = (c & 16711680) >>> 16, b = (c & 65280) >>> 8, k = (c & 255) / 255;
  return `rgba(${h}, ${S}, ${b}, ${k})`;
}
const Iv = (f, c, h) => {
  if (pe.fun(f))
    return f;
  if (pe.arr(f))
    return Iv({
      range: f,
      output: c,
      extrapolate: h
    });
  if (pe.str(f.output[0]))
    return W_(f);
  const S = f, b = S.output, k = S.range || [0, 1], _ = S.extrapolateLeft || S.extrapolate || "extend", G = S.extrapolateRight || S.extrapolate || "extend", P = S.easing || ((A) => A);
  return (A) => {
    const ee = UO(A, k);
    return AO(A, k[ee], k[ee + 1], b[ee], b[ee + 1], P, _, G, S.map);
  };
};
function AO(f, c, h, S, b, k, _, G, P) {
  let A = P ? P(f) : f;
  if (A < c) {
    if (_ === "identity") return A;
    _ === "clamp" && (A = c);
  }
  if (A > h) {
    if (G === "identity") return A;
    G === "clamp" && (A = h);
  }
  return S === b ? S : c === h ? f <= c ? S : b : (c === -1 / 0 ? A = -A : h === 1 / 0 ? A = A - c : A = (A - c) / (h - c), A = k(A), S === -1 / 0 ? A = -A : b === 1 / 0 ? A = A + S : A = A * (b - S) + S, A);
}
function UO(f, c) {
  for (var h = 1; h < c.length - 1 && !(c[h] >= f); ++h) ;
  return h - 1;
}
function F_() {
  return F_ = Object.assign || function(f) {
    for (var c = 1; c < arguments.length; c++) {
      var h = arguments[c];
      for (var S in h)
        Object.prototype.hasOwnProperty.call(h, S) && (f[S] = h[S]);
    }
    return f;
  }, F_.apply(this, arguments);
}
const bd = Symbol.for("FluidValue.get"), Oc = Symbol.for("FluidValue.observers"), Qi = (f) => !!(f && f[bd]), Ga = (f) => f && f[bd] ? f[bd]() : f, rx = (f) => f[Oc] || null;
function FO(f, c) {
  f.eventObserved ? f.eventObserved(c) : f(c);
}
function Yv(f, c) {
  let h = f[Oc];
  h && h.forEach((S) => {
    FO(S, c);
  });
}
class jx {
  constructor(c) {
    if (this[bd] = void 0, this[Oc] = void 0, !c && !(c = this.get))
      throw Error("Unknown getter");
    jO(this, c);
  }
}
const jO = (f, c) => Px(f, bd, c);
function Rd(f, c) {
  if (f[bd]) {
    let h = f[Oc];
    h || Px(f, Oc, h = /* @__PURE__ */ new Set()), h.has(c) || (h.add(c), f.observerAdded && f.observerAdded(h.size, c));
  }
  return c;
}
function Qv(f, c) {
  let h = f[Oc];
  if (h && h.has(c)) {
    const S = h.size - 1;
    S ? h.delete(c) : f[Oc] = null, f.observerRemoved && f.observerRemoved(S, c);
  }
}
const Px = (f, c, h) => Object.defineProperty(f, c, {
  value: h,
  writable: !0,
  configurable: !0
}), Wy = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, PO = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, ax = new RegExp(`(${Wy.source})(%|[a-z]+)`, "i");
let O_;
const HO = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, VO = (f, c, h, S, b) => `rgba(${Math.round(c)}, ${Math.round(h)}, ${Math.round(S)}, ${b})`, Hx = (f) => {
  O_ || (O_ = fs ? new RegExp(`(${Object.keys(fs).join("|")})(?!\\w)`, "g") : /^\b$/);
  const c = f.output.map((k) => Ga(k).replace(PO, nx).replace(O_, nx)), h = c.map((k) => k.match(Wy).map(Number)), b = h[0].map((k, _) => h.map((G) => {
    if (!(_ in G))
      throw Error('The arity of each "output" value must be equal');
    return G[_];
  })).map((k) => Iv(F_({}, f, {
    output: k
  })));
  return (k) => {
    var _;
    const G = !ax.test(c[0]) && ((_ = c.find((A) => ax.test(A))) == null ? void 0 : _.replace(Wy, ""));
    let P = 0;
    return c[0].replace(Wy, () => `${b[P++](k)}${G || ""}`).replace(HO, VO);
  };
}, q_ = "react-spring: ", Vx = (f) => {
  const c = f;
  let h = !1;
  if (typeof c != "function")
    throw new TypeError(`${q_}once requires a function parameter`);
  return (...S) => {
    h || (c(...S), h = !0);
  };
}, BO = Vx(console.warn);
function $O() {
  BO(`${q_}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
const IO = Vx(console.warn);
function YO() {
  IO(`${q_}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function ig(f) {
  return pe.str(f) && (f[0] == "#" || /\d/.test(f) || f in (fs || {}));
}
const X_ = (f) => wt.useEffect(f, QO), QO = [];
function Bx() {
  const f = wt.useState()[1], c = wt.useState(WO)[0];
  return X_(c.unmount), () => {
    c.current && f({});
  };
}
function WO() {
  const f = {
    current: !0,
    unmount: () => () => {
      f.current = !1;
    }
  };
  return f;
}
function GO(f, c) {
  const [h] = wt.useState(() => ({
    inputs: c,
    result: f()
  })), S = wt.useRef(), b = S.current;
  let k = b;
  return k ? k.inputs && qO(c, k.inputs) || (k = {
    inputs: c,
    result: f()
  }) : k = h, wt.useEffect(() => {
    S.current = k, b == h && (h.inputs = h.result = void 0);
  }, [k]), k.result;
}
function qO(f, c) {
  if (f.length !== c.length)
    return !1;
  for (let h = 0; h < f.length; h++)
    if (f[h] !== c[h])
      return !1;
  return !0;
}
function ix(f) {
  const c = wt.useRef();
  return wt.useEffect(() => {
    c.current = f;
  }), c.current;
}
const $x = typeof window < "u" && window.document && window.document.createElement ? wt.useLayoutEffect : wt.useEffect, Wv = Symbol.for("Animated:node"), XO = (f) => !!f && f[Wv] === f, co = (f) => f && f[Wv], K_ = (f, c) => EO(f, Wv, c), lg = (f) => f && f[Wv] && f[Wv].getPayload();
class Ix {
  constructor() {
    this.payload = void 0, K_(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}
class Td extends Ix {
  constructor(c) {
    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = c, pe.num(this._value) && (this.lastPosition = this._value);
  }
  static create(c) {
    return new Td(c);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(c, h) {
    return pe.num(c) && (this.lastPosition = c, h && (c = Math.round(c / h) * h, this.done && (this.lastPosition = c))), this._value === c ? !1 : (this._value = c, !0);
  }
  reset() {
    const {
      done: c
    } = this;
    this.done = !1, pe.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, c && (this.lastVelocity = null), this.v0 = null);
  }
}
class xd extends Td {
  constructor(c) {
    super(0), this._string = null, this._toString = void 0, this._toString = Iv({
      output: [c, c]
    });
  }
  static create(c) {
    return new xd(c);
  }
  getValue() {
    let c = this._string;
    return c ?? (this._string = this._toString(this._value));
  }
  setValue(c) {
    if (pe.str(c)) {
      if (c == this._string)
        return !1;
      this._string = c, this._value = 1;
    } else if (super.setValue(c))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(c) {
    c && (this._toString = Iv({
      output: [this.getValue(), c]
    })), this._value = 0, super.reset();
  }
}
const Ky = {
  dependencies: null
};
class og extends Ix {
  constructor(c) {
    super(), this.source = c, this.setValue(c);
  }
  getValue(c) {
    const h = {};
    return ho(this.source, (S, b) => {
      XO(S) ? h[b] = S.getValue(c) : Qi(S) ? h[b] = Ga(S) : c || (h[b] = S);
    }), h;
  }
  setValue(c) {
    this.source = c, this.payload = this._makePayload(c);
  }
  reset() {
    this.payload && Pt(this.payload, (c) => c.reset());
  }
  _makePayload(c) {
    if (c) {
      const h = /* @__PURE__ */ new Set();
      return ho(c, this._addToPayload, h), Array.from(h);
    }
  }
  _addToPayload(c) {
    Ky.dependencies && Qi(c) && Ky.dependencies.add(c);
    const h = lg(c);
    h && Pt(h, (S) => this.add(S));
  }
}
class Z_ extends og {
  constructor(c) {
    super(c);
  }
  static create(c) {
    return new Z_(c);
  }
  getValue() {
    return this.source.map((c) => c.getValue());
  }
  setValue(c) {
    const h = this.getPayload();
    return c.length == h.length ? h.map((S, b) => S.setValue(c[b])).some(Boolean) : (super.setValue(c.map(KO)), !0);
  }
}
function KO(f) {
  return (ig(f) ? xd : Td).create(f);
}
function j_(f) {
  const c = co(f);
  return c ? c.constructor : pe.arr(f) ? Z_ : ig(f) ? xd : Td;
}
function Zy() {
  return Zy = Object.assign || function(f) {
    for (var c = 1; c < arguments.length; c++) {
      var h = arguments[c];
      for (var S in h)
        Object.prototype.hasOwnProperty.call(h, S) && (f[S] = h[S]);
    }
    return f;
  }, Zy.apply(this, arguments);
}
const lx = (f, c) => {
  const h = !pe.fun(f) || f.prototype && f.prototype.isReactComponent;
  return wt.forwardRef((S, b) => {
    const k = wt.useRef(null), _ = h && wt.useCallback((ae) => {
      k.current = eN(b, ae);
    }, [b]), [G, P] = JO(S, c), A = Bx(), ee = () => {
      const ae = k.current;
      if (h && !ae)
        return;
      (ae ? c.applyAnimatedValues(ae, G.getValue(!0)) : !1) === !1 && A();
    }, B = new ZO(ee, P), K = wt.useRef();
    $x(() => {
      const ae = K.current;
      K.current = B, Pt(P, (de) => Rd(de, B)), ae && (Pt(ae.deps, (de) => Qv(de, ae)), yt.cancel(ae.update));
    }), wt.useEffect(ee, []), X_(() => () => {
      const ae = K.current;
      Pt(ae.deps, (de) => Qv(de, ae));
    });
    const Z = c.getComponentProps(G.getValue());
    return wt.createElement(f, Zy({}, Z, {
      ref: _
    }));
  });
};
class ZO {
  constructor(c, h) {
    this.update = c, this.deps = h;
  }
  eventObserved(c) {
    c.type == "change" && yt.write(this.update);
  }
}
function JO(f, c) {
  const h = /* @__PURE__ */ new Set();
  return Ky.dependencies = h, f.style && (f = Zy({}, f, {
    style: c.createAnimatedStyle(f.style)
  })), f = new og(f), Ky.dependencies = null, [f, h];
}
function eN(f, c) {
  return f && (pe.fun(f) ? f(c) : f.current = c), c;
}
const ox = Symbol.for("AnimatedComponent"), tN = (f, {
  applyAnimatedValues: c = () => !1,
  createAnimatedStyle: h = (b) => new og(b),
  getComponentProps: S = (b) => b
} = {}) => {
  const b = {
    applyAnimatedValues: c,
    createAnimatedStyle: h,
    getComponentProps: S
  }, k = (_) => {
    const G = ux(_) || "Anonymous";
    return pe.str(_) ? _ = k[_] || (k[_] = lx(_, b)) : _ = _[ox] || (_[ox] = lx(_, b)), _.displayName = `Animated(${G})`, _;
  };
  return ho(f, (_, G) => {
    pe.arr(f) && (G = ux(_)), k[G] = k(_);
  }), {
    animated: k
  };
}, ux = (f) => pe.str(f) ? f : f && pe.str(f.displayName) ? f.displayName : pe.fun(f) && f.name || null;
function Tr() {
  return Tr = Object.assign || function(f) {
    for (var c = 1; c < arguments.length; c++) {
      var h = arguments[c];
      for (var S in h)
        Object.prototype.hasOwnProperty.call(h, S) && (f[S] = h[S]);
    }
    return f;
  }, Tr.apply(this, arguments);
}
function Tc(f, ...c) {
  return pe.fun(f) ? f(...c) : f;
}
const Bv = (f, c) => f === !0 || !!(c && f && (pe.fun(f) ? f(c) : mi(f).includes(c))), Yx = (f, c) => pe.obj(f) ? c && f[c] : f, Qx = (f, c) => f.default === !0 ? f[c] : f.default ? f.default[c] : void 0, nN = (f) => f, J_ = (f, c = nN) => {
  let h = rN;
  f.default && f.default !== !0 && (f = f.default, h = Object.keys(f));
  const S = {};
  for (const b of h) {
    const k = c(f[b], b);
    pe.und(k) || (S[b] = k);
  }
  return S;
}, rN = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], aN = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};
function iN(f) {
  const c = {};
  let h = 0;
  if (ho(f, (S, b) => {
    aN[b] || (c[b] = S, h++);
  }), h)
    return c;
}
function Wx(f) {
  const c = iN(f);
  if (c) {
    const h = {
      to: c
    };
    return ho(f, (S, b) => b in c || (h[b] = S)), h;
  }
  return Tr({}, f);
}
function Gv(f) {
  return f = Ga(f), pe.arr(f) ? f.map(Gv) : ig(f) ? mo.createStringInterpolator({
    range: [0, 1],
    output: [f, f]
  })(1) : f;
}
function lN(f) {
  for (const c in f) return !0;
  return !1;
}
function P_(f) {
  return pe.fun(f) || pe.arr(f) && pe.obj(f[0]);
}
function oN(f, c) {
  var h;
  (h = f.ref) == null || h.delete(f), c == null || c.delete(f);
}
function uN(f, c) {
  if (c && f.ref !== c) {
    var h;
    (h = f.ref) == null || h.delete(f), c.add(f), f.ref = c;
  }
}
const sN = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
}, cN = (f) => f, H_ = Tr({}, sN.default, {
  mass: 1,
  damping: 1,
  easing: cN,
  clamp: !1
});
class fN {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, H_);
  }
}
function dN(f, c, h) {
  h && (h = Tr({}, h), sx(h, c), c = Tr({}, h, c)), sx(f, c), Object.assign(f, c);
  for (const _ in H_)
    f[_] == null && (f[_] = H_[_]);
  let {
    mass: S,
    frequency: b,
    damping: k
  } = f;
  return pe.und(b) || (b < 0.01 && (b = 0.01), k < 0 && (k = 0), f.tension = Math.pow(2 * Math.PI / b, 2) * S, f.friction = 4 * Math.PI * k * S / b), f;
}
function sx(f, c) {
  if (!pe.und(c.decay))
    f.duration = void 0;
  else {
    const h = !pe.und(c.tension) || !pe.und(c.friction);
    (h || !pe.und(c.frequency) || !pe.und(c.damping) || !pe.und(c.mass)) && (f.duration = void 0, f.decay = void 0), h && (f.frequency = void 0);
  }
}
const cx = [];
class pN {
  constructor() {
    this.changed = !1, this.values = cx, this.toValues = null, this.fromValues = cx, this.to = void 0, this.from = void 0, this.config = new fN(), this.immediate = !1;
  }
}
function Gx(f, {
  key: c,
  props: h,
  defaultProps: S,
  state: b,
  actions: k
}) {
  return new Promise((_, G) => {
    var P;
    let A, ee, B = Bv((P = h.cancel) != null ? P : S == null ? void 0 : S.cancel, c);
    if (B)
      ae();
    else {
      pe.und(h.pause) || (b.paused = Bv(h.pause, c));
      let de = S == null ? void 0 : S.pause;
      de !== !0 && (de = b.paused || Bv(de, c)), A = Tc(h.delay || 0, c), de ? (b.resumeQueue.add(Z), k.pause()) : (k.resume(), Z());
    }
    function K() {
      b.resumeQueue.add(Z), b.timeouts.delete(ee), ee.cancel(), A = ee.time - yt.now();
    }
    function Z() {
      A > 0 && !mo.skipAnimation ? (ee = yt.setTimeout(ae, A), b.pauseQueue.add(K), b.timeouts.add(ee)) : ae();
    }
    function ae() {
      b.pauseQueue.delete(K), b.timeouts.delete(ee), f <= (b.cancelId || 0) && (B = !0);
      try {
        k.start(Tr({}, h, {
          callId: f,
          cancel: B
        }), _);
      } catch (de) {
        G(de);
      }
    }
  });
}
const e1 = (f, c) => c.length == 1 ? c[0] : c.some((h) => h.cancelled) ? Cd(f.get()) : c.every((h) => h.noop) ? qx(f.get()) : Cl(f.get(), c.every((h) => h.finished)), qx = (f) => ({
  value: f,
  noop: !0,
  finished: !0,
  cancelled: !1
}), Cl = (f, c, h = !1) => ({
  value: f,
  finished: c,
  cancelled: h
}), Cd = (f) => ({
  value: f,
  cancelled: !0,
  finished: !1
});
function Xx(f, c, h, S) {
  const {
    callId: b,
    parentId: k,
    onRest: _
  } = c, {
    asyncTo: G,
    promise: P
  } = h;
  return !k && f === G && !c.reset ? P : h.promise = (async () => {
    h.asyncId = b, h.asyncTo = f;
    const A = J_(c, (ue, Ne) => Ne === "onRest" ? void 0 : ue);
    let ee, B;
    const K = new Promise((ue, Ne) => (ee = ue, B = Ne)), Z = (ue) => {
      const Ne = b <= (h.cancelId || 0) && Cd(S) || b !== h.asyncId && Cl(S, !1);
      if (Ne)
        throw ue.result = Ne, B(ue), ue;
    }, ae = (ue, Ne) => {
      const ve = new fx(), se = new dx();
      return (async () => {
        if (mo.skipAnimation)
          throw qv(h), se.result = Cl(S, !1), B(se), se;
        Z(ve);
        const Te = pe.obj(ue) ? Tr({}, ue) : Tr({}, Ne, {
          to: ue
        });
        Te.parentId = b, ho(A, (Ye, Pe) => {
          pe.und(Te[Pe]) && (Te[Pe] = Ye);
        });
        const me = await S.start(Te);
        return Z(ve), h.paused && await new Promise((Ye) => {
          h.resumeQueue.add(Ye);
        }), me;
      })();
    };
    let de;
    if (mo.skipAnimation)
      return qv(h), Cl(S, !1);
    try {
      let ue;
      pe.arr(f) ? ue = (async (Ne) => {
        for (const ve of Ne)
          await ae(ve);
      })(f) : ue = Promise.resolve(f(ae, S.stop.bind(S))), await Promise.all([ue.then(ee), K]), de = Cl(S.get(), !0, !1);
    } catch (ue) {
      if (ue instanceof fx)
        de = ue.result;
      else if (ue instanceof dx)
        de = ue.result;
      else
        throw ue;
    } finally {
      b == h.asyncId && (h.asyncId = k, h.asyncTo = k ? G : void 0, h.promise = k ? P : void 0);
    }
    return pe.fun(_) && yt.batchedUpdates(() => {
      _(de, S, S.item);
    }), de;
  })();
}
function qv(f, c) {
  Hv(f.timeouts, (h) => h.cancel()), f.pauseQueue.clear(), f.resumeQueue.clear(), f.asyncId = f.asyncTo = f.promise = void 0, c && (f.cancelId = c);
}
class fx extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}
class dx extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}
const V_ = (f) => f instanceof t1;
let vN = 1;
class t1 extends jx {
  constructor(...c) {
    super(...c), this.id = vN++, this.key = void 0, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(c) {
    this._priority != c && (this._priority = c, this._onPriorityChange(c));
  }
  get() {
    const c = co(this);
    return c && c.getValue();
  }
  to(...c) {
    return mo.to(this, c);
  }
  interpolate(...c) {
    return $O(), mo.to(this, c);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(c) {
    c == 1 && this._attach();
  }
  observerRemoved(c) {
    c == 0 && this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(c, h = !1) {
    Yv(this, {
      type: "change",
      parent: this,
      value: c,
      idle: h
    });
  }
  _onPriorityChange(c) {
    this.idle || rg.sort(this), Yv(this, {
      type: "priority",
      parent: this,
      priority: c
    });
  }
}
const Nc = Symbol.for("SpringPhase"), Kx = 1, Zx = 2, Jx = 4, N_ = (f) => (f[Nc] & Kx) > 0, us = (f) => (f[Nc] & Zx) > 0, Av = (f) => (f[Nc] & Jx) > 0, px = (f, c) => c ? f[Nc] |= Zx | Kx : f[Nc] &= -3, vx = (f, c) => c ? f[Nc] |= Jx : f[Nc] &= -5;
class hN extends t1 {
  constructor(c, h) {
    if (super(), this.key = void 0, this.animation = new pN(), this.queue = void 0, this.defaultProps = {}, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !pe.und(c) || !pe.und(h)) {
      const S = pe.obj(c) ? Tr({}, c) : Tr({}, h, {
        from: c
      });
      pe.und(S.default) && (S.default = !0), this.start(S);
    }
  }
  get idle() {
    return !(us(this) || this._state.asyncTo) || Av(this);
  }
  get goal() {
    return Ga(this.animation.to);
  }
  get velocity() {
    const c = co(this);
    return c instanceof Td ? c.lastVelocity || 0 : c.getPayload().map((h) => h.lastVelocity || 0);
  }
  get hasAnimated() {
    return N_(this);
  }
  get isAnimating() {
    return us(this);
  }
  get isPaused() {
    return Av(this);
  }
  advance(c) {
    let h = !0, S = !1;
    const b = this.animation;
    let {
      config: k,
      toValues: _
    } = b;
    const G = lg(b.to);
    !G && Qi(b.to) && (_ = mi(Ga(b.to))), b.values.forEach((ee, B) => {
      if (ee.done) return;
      const K = ee.constructor == xd ? 1 : G ? G[B].lastPosition : _[B];
      let Z = b.immediate, ae = K;
      if (!Z) {
        if (ae = ee.lastPosition, k.tension <= 0) {
          ee.done = !0;
          return;
        }
        let de = ee.elapsedTime += c;
        const ue = b.fromValues[B], Ne = ee.v0 != null ? ee.v0 : ee.v0 = pe.arr(k.velocity) ? k.velocity[B] : k.velocity;
        let ve;
        if (pe.und(k.duration))
          if (k.decay) {
            const se = k.decay === !0 ? 0.998 : k.decay, Te = Math.exp(-(1 - se) * de);
            ae = ue + Ne / (1 - se) * (1 - Te), Z = Math.abs(ee.lastPosition - ae) < 0.1, ve = Ne * Te;
          } else {
            ve = ee.lastVelocity == null ? Ne : ee.lastVelocity;
            const se = k.precision || (ue == K ? 5e-3 : Math.min(1, Math.abs(K - ue) * 1e-3)), Te = k.restVelocity || se / 10, me = k.clamp ? 0 : k.bounce, Ye = !pe.und(me), Pe = ue == K ? ee.v0 > 0 : ue < K;
            let Ct, Rt = !1;
            const dt = 1, Ft = Math.ceil(c / dt);
            for (let nt = 0; nt < Ft && (Ct = Math.abs(ve) > Te, !(!Ct && (Z = Math.abs(K - ae) <= se, Z))); ++nt) {
              Ye && (Rt = ae == K || ae > K == Pe, Rt && (ve = -ve * me, ae = K));
              const Me = -k.tension * 1e-6 * (ae - K), Tt = -k.friction * 1e-3 * ve, st = (Me + Tt) / k.mass;
              ve = ve + st * dt, ae = ae + ve * dt;
            }
          }
        else {
          let se = 1;
          k.duration > 0 && (this._memoizedDuration !== k.duration && (this._memoizedDuration = k.duration, ee.durationProgress > 0 && (ee.elapsedTime = k.duration * ee.durationProgress, de = ee.elapsedTime += c)), se = (k.progress || 0) + de / this._memoizedDuration, se = se > 1 ? 1 : se < 0 ? 0 : se, ee.durationProgress = se), ae = ue + k.easing(se) * (K - ue), ve = (ae - ee.lastPosition) / c, Z = se == 1;
        }
        ee.lastVelocity = ve, Number.isNaN(ae) && (console.warn("Got NaN while animating:", this), Z = !0);
      }
      G && !G[B].done && (Z = !1), Z ? ee.done = !0 : h = !1, ee.setValue(ae, k.round) && (S = !0);
    });
    const P = co(this), A = P.getValue();
    if (h) {
      const ee = Ga(b.to);
      (A !== ee || S) && !k.decay ? (P.setValue(ee), this._onChange(ee)) : S && k.decay && this._onChange(A), this._stop();
    } else S && this._onChange(A);
  }
  set(c) {
    return yt.batchedUpdates(() => {
      this._stop(), this._focus(c), this._set(c);
    }), this;
  }
  pause() {
    this._update({
      pause: !0
    });
  }
  resume() {
    this._update({
      pause: !1
    });
  }
  finish() {
    if (us(this)) {
      const {
        to: c,
        config: h
      } = this.animation;
      yt.batchedUpdates(() => {
        this._onStart(), h.decay || this._set(c, !1), this._stop();
      });
    }
    return this;
  }
  update(c) {
    return (this.queue || (this.queue = [])).push(c), this;
  }
  start(c, h) {
    let S;
    return pe.und(c) ? (S = this.queue || [], this.queue = []) : S = [pe.obj(c) ? c : Tr({}, h, {
      to: c
    })], Promise.all(S.map((b) => this._update(b))).then((b) => e1(this, b));
  }
  stop(c) {
    const {
      to: h
    } = this.animation;
    return this._focus(this.get()), qv(this._state, c && this._lastCallId), yt.batchedUpdates(() => this._stop(h, c)), this;
  }
  reset() {
    this._update({
      reset: !0
    });
  }
  eventObserved(c) {
    c.type == "change" ? this._start() : c.type == "priority" && (this.priority = c.priority + 1);
  }
  _prepareNode(c) {
    const h = this.key || "";
    let {
      to: S,
      from: b
    } = c;
    S = pe.obj(S) ? S[h] : S, (S == null || P_(S)) && (S = void 0), b = pe.obj(b) ? b[h] : b, b == null && (b = void 0);
    const k = {
      to: S,
      from: b
    };
    return N_(this) || (c.reverse && ([S, b] = [b, S]), b = Ga(b), pe.und(b) ? co(this) || this._set(S) : this._set(b)), k;
  }
  _update(c, h) {
    let S = Tr({}, c);
    const {
      key: b,
      defaultProps: k
    } = this;
    S.default && Object.assign(k, J_(S, (P, A) => /^on/.test(A) ? Yx(P, b) : P)), mx(this, S, "onProps"), Fv(this, "onProps", S, this);
    const _ = this._prepareNode(S);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    const G = this._state;
    return Gx(++this._lastCallId, {
      key: b,
      props: S,
      defaultProps: k,
      state: G,
      actions: {
        pause: () => {
          Av(this) || (vx(this, !0), Pv(G.pauseQueue), Fv(this, "onPause", Cl(this, Uv(this, this.animation.to)), this));
        },
        resume: () => {
          Av(this) && (vx(this, !1), us(this) && this._resume(), Pv(G.resumeQueue), Fv(this, "onResume", Cl(this, Uv(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, _)
      }
    }).then((P) => {
      if (S.loop && P.finished && !(h && P.noop)) {
        const A = ew(S);
        if (A)
          return this._update(A, !0);
      }
      return P;
    });
  }
  _merge(c, h, S) {
    if (h.cancel)
      return this.stop(!0), S(Cd(this));
    const b = !pe.und(c.to), k = !pe.und(c.from);
    if (b || k)
      if (h.callId > this._lastToId)
        this._lastToId = h.callId;
      else
        return S(Cd(this));
    const {
      key: _,
      defaultProps: G,
      animation: P
    } = this, {
      to: A,
      from: ee
    } = P;
    let {
      to: B = A,
      from: K = ee
    } = c;
    k && !b && (!h.default || pe.und(B)) && (B = K), h.reverse && ([B, K] = [K, B]);
    const Z = !cu(K, ee);
    Z && (P.from = K), K = Ga(K);
    const ae = !cu(B, A);
    ae && this._focus(B);
    const de = P_(h.to), {
      config: ue
    } = P, {
      decay: Ne,
      velocity: ve
    } = ue;
    (b || k) && (ue.velocity = 0), h.config && !de && dN(ue, Tc(h.config, _), h.config !== G.config ? Tc(G.config, _) : void 0);
    let se = co(this);
    if (!se || pe.und(B))
      return S(Cl(this, !0));
    const Te = pe.und(h.reset) ? k && !h.default : !pe.und(K) && Bv(h.reset, _), me = Te ? K : this.get(), Ye = Gv(B), Pe = pe.num(Ye) || pe.arr(Ye) || ig(Ye), Ct = !de && (!Pe || Bv(G.immediate || h.immediate, _));
    if (ae) {
      const nt = j_(B);
      if (nt !== se.constructor)
        if (Ct)
          se = this._set(Ye);
        else throw Error(`Cannot animate between ${se.constructor.name} and ${nt.name}, as the "to" prop suggests`);
    }
    const Rt = se.constructor;
    let dt = Qi(B), Ft = !1;
    if (!dt) {
      const nt = Te || !N_(this) && Z;
      (ae || nt) && (Ft = cu(Gv(me), Ye), dt = !Ft), (!cu(P.immediate, Ct) && !Ct || !cu(ue.decay, Ne) || !cu(ue.velocity, ve)) && (dt = !0);
    }
    if (Ft && us(this) && (P.changed && !Te ? dt = !0 : dt || this._stop(A)), !de && ((dt || Qi(A)) && (P.values = se.getPayload(), P.toValues = Qi(B) ? null : Rt == xd ? [1] : mi(Ye)), P.immediate != Ct && (P.immediate = Ct, !Ct && !Te && this._set(A)), dt)) {
      const {
        onRest: nt
      } = P;
      Pt(yN, (Tt) => mx(this, h, Tt));
      const Me = Cl(this, Uv(this, A));
      Pv(this._pendingCalls, Me), this._pendingCalls.add(S), P.changed && yt.batchedUpdates(() => {
        P.changed = !Te, nt == null || nt(Me, this), Te ? Tc(G.onRest, Me) : P.onStart == null || P.onStart(Me, this);
      });
    }
    Te && this._set(me), de ? S(Xx(h.to, h, this._state, this)) : dt ? this._start() : us(this) && !ae ? this._pendingCalls.add(S) : S(qx(me));
  }
  _focus(c) {
    const h = this.animation;
    c !== h.to && (rx(this) && this._detach(), h.to = c, rx(this) && this._attach());
  }
  _attach() {
    let c = 0;
    const {
      to: h
    } = this.animation;
    Qi(h) && (Rd(h, this), V_(h) && (c = h.priority + 1)), this.priority = c;
  }
  _detach() {
    const {
      to: c
    } = this.animation;
    Qi(c) && Qv(c, this);
  }
  _set(c, h = !0) {
    const S = Ga(c);
    if (!pe.und(S)) {
      const b = co(this);
      if (!b || !cu(S, b.getValue())) {
        const k = j_(S);
        !b || b.constructor != k ? K_(this, k.create(S)) : b.setValue(S), b && yt.batchedUpdates(() => {
          this._onChange(S, h);
        });
      }
    }
    return co(this);
  }
  _onStart() {
    const c = this.animation;
    c.changed || (c.changed = !0, Fv(this, "onStart", Cl(this, Uv(this, c.to)), this));
  }
  _onChange(c, h) {
    h || (this._onStart(), Tc(this.animation.onChange, c, this)), Tc(this.defaultProps.onChange, c, this), super._onChange(c, h);
  }
  _start() {
    const c = this.animation;
    co(this).reset(Ga(c.to)), c.immediate || (c.fromValues = c.values.map((h) => h.lastPosition)), us(this) || (px(this, !0), Av(this) || this._resume());
  }
  _resume() {
    mo.skipAnimation ? this.finish() : rg.start(this);
  }
  _stop(c, h) {
    if (us(this)) {
      px(this, !1);
      const S = this.animation;
      Pt(S.values, (k) => {
        k.done = !0;
      }), S.toValues && (S.onChange = S.onPause = S.onResume = void 0), Yv(this, {
        type: "idle",
        parent: this
      });
      const b = h ? Cd(this.get()) : Cl(this.get(), Uv(this, c ?? S.to));
      Pv(this._pendingCalls, b), S.changed && (S.changed = !1, Fv(this, "onRest", b, this));
    }
  }
}
function Uv(f, c) {
  const h = Gv(c), S = Gv(f.get());
  return cu(S, h);
}
function ew(f, c = f.loop, h = f.to) {
  let S = Tc(c);
  if (S) {
    const b = S !== !0 && Wx(S), k = (b || f).reverse, _ = !b || b.reset;
    return Xv(Tr({}, f, {
      loop: c,
      default: !1,
      pause: void 0,
      to: !k || P_(h) ? h : void 0,
      from: _ ? f.from : void 0,
      reset: _
    }, b));
  }
}
function Xv(f) {
  const {
    to: c,
    from: h
  } = f = Wx(f), S = /* @__PURE__ */ new Set();
  return pe.obj(c) && hx(c, S), pe.obj(h) && hx(h, S), f.keys = S.size ? Array.from(S) : null, f;
}
function mN(f) {
  const c = Xv(f);
  return pe.und(c.default) && (c.default = J_(c)), c;
}
function hx(f, c) {
  ho(f, (h, S) => h != null && c.add(S));
}
const yN = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function mx(f, c, h) {
  f.animation[h] = c[h] !== Qx(c, h) ? Yx(c[h], f.key) : void 0;
}
function Fv(f, c, ...h) {
  var S, b, k, _;
  (S = (b = f.animation)[c]) == null || S.call(b, ...h), (k = (_ = f.defaultProps)[c]) == null || k.call(_, ...h);
}
const gN = ["onStart", "onChange", "onRest"];
let SN = 1;
class _N {
  constructor(c, h) {
    this.id = SN++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), h && (this._flush = h), c && this.start(Tr({
      default: !0
    }, c));
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((c) => c.idle);
  }
  get item() {
    return this._item;
  }
  set item(c) {
    this._item = c;
  }
  get() {
    const c = {};
    return this.each((h, S) => c[S] = h.get()), c;
  }
  set(c) {
    for (const h in c) {
      const S = c[h];
      pe.und(S) || this.springs[h].set(S);
    }
  }
  update(c) {
    return c && this.queue.push(Xv(c)), this;
  }
  start(c) {
    let {
      queue: h
    } = this;
    return c ? h = mi(c).map(Xv) : this.queue = [], this._flush ? this._flush(this, h) : (iw(this, h), B_(this, h));
  }
  stop(c, h) {
    if (c !== !!c && (h = c), h) {
      const S = this.springs;
      Pt(mi(h), (b) => S[b].stop(!!c));
    } else
      qv(this._state, this._lastAsyncId), this.each((S) => S.stop(!!c));
    return this;
  }
  pause(c) {
    if (pe.und(c))
      this.start({
        pause: !0
      });
    else {
      const h = this.springs;
      Pt(mi(c), (S) => h[S].pause());
    }
    return this;
  }
  resume(c) {
    if (pe.und(c))
      this.start({
        pause: !1
      });
    else {
      const h = this.springs;
      Pt(mi(c), (S) => h[S].resume());
    }
    return this;
  }
  each(c) {
    ho(this.springs, c);
  }
  _onFrame() {
    const {
      onStart: c,
      onChange: h,
      onRest: S
    } = this._events, b = this._active.size > 0, k = this._changed.size > 0;
    (b && !this._started || k && !this._started) && (this._started = !0, Hv(c, ([P, A]) => {
      A.value = this.get(), P(A, this, this._item);
    }));
    const _ = !b && this._started, G = k || _ && S.size ? this.get() : null;
    k && h.size && Hv(h, ([P, A]) => {
      A.value = G, P(A, this, this._item);
    }), _ && (this._started = !1, Hv(S, ([P, A]) => {
      A.value = G, P(A, this, this._item);
    }));
  }
  eventObserved(c) {
    if (c.type == "change")
      this._changed.add(c.parent), c.idle || this._active.add(c.parent);
    else if (c.type == "idle")
      this._active.delete(c.parent);
    else return;
    yt.onFrame(this._onFrame);
  }
}
function B_(f, c) {
  return Promise.all(c.map((h) => tw(f, h))).then((h) => e1(f, h));
}
async function tw(f, c, h) {
  const {
    keys: S,
    to: b,
    from: k,
    loop: _,
    onRest: G,
    onResolve: P
  } = c, A = pe.obj(c.default) && c.default;
  _ && (c.loop = !1), b === !1 && (c.to = null), k === !1 && (c.from = null);
  const ee = pe.arr(b) || pe.fun(b) ? b : void 0;
  ee ? (c.to = void 0, c.onRest = void 0, A && (A.onRest = void 0)) : Pt(gN, (de) => {
    const ue = c[de];
    if (pe.fun(ue)) {
      const Ne = f._events[de];
      c[de] = ({
        finished: ve,
        cancelled: se
      }) => {
        const Te = Ne.get(ue);
        Te ? (ve || (Te.finished = !1), se && (Te.cancelled = !0)) : Ne.set(ue, {
          value: null,
          finished: ve || !1,
          cancelled: se || !1
        });
      }, A && (A[de] = c[de]);
    }
  });
  const B = f._state;
  c.pause === !B.paused ? (B.paused = c.pause, Pv(c.pause ? B.pauseQueue : B.resumeQueue)) : B.paused && (c.pause = !0);
  const K = (S || Object.keys(f.springs)).map((de) => f.springs[de].start(c)), Z = c.cancel === !0 || Qx(c, "cancel") === !0;
  (ee || Z && B.asyncId) && K.push(Gx(++f._lastAsyncId, {
    props: c,
    state: B,
    actions: {
      pause: A_,
      resume: A_,
      start(de, ue) {
        Z ? (qv(B, f._lastAsyncId), ue(Cd(f))) : (de.onRest = G, ue(Xx(ee, de, B, f)));
      }
    }
  })), B.paused && await new Promise((de) => {
    B.resumeQueue.add(de);
  });
  const ae = e1(f, await Promise.all(K));
  if (_ && ae.finished && !(h && ae.noop)) {
    const de = ew(c, _, b);
    if (de)
      return iw(f, [de]), tw(f, de, !0);
  }
  return P && yt.batchedUpdates(() => P(ae, f, f.item)), ae;
}
function yx(f, c) {
  const h = Tr({}, f.springs);
  return c && Pt(mi(c), (S) => {
    pe.und(S.keys) && (S = Xv(S)), pe.obj(S.to) || (S = Tr({}, S, {
      to: void 0
    })), aw(h, S, (b) => rw(b));
  }), nw(f, h), h;
}
function nw(f, c) {
  ho(c, (h, S) => {
    f.springs[S] || (f.springs[S] = h, Rd(h, f));
  });
}
function rw(f, c) {
  const h = new hN();
  return h.key = f, c && Rd(h, c), h;
}
function aw(f, c, h) {
  c.keys && Pt(c.keys, (S) => {
    (f[S] || (f[S] = h(S)))._prepareNode(c);
  });
}
function iw(f, c) {
  Pt(c, (h) => {
    aw(f.springs, h, (S) => rw(S, f));
  });
}
function EN(f, c) {
  if (f == null) return {};
  var h = {}, S = Object.keys(f), b, k;
  for (k = 0; k < S.length; k++)
    b = S[k], !(c.indexOf(b) >= 0) && (h[b] = f[b]);
  return h;
}
const CN = ["children"], ug = (f) => {
  let {
    children: c
  } = f, h = EN(f, CN);
  const S = wt.useContext(Jy), b = h.pause || !!S.pause, k = h.immediate || !!S.immediate;
  h = GO(() => ({
    pause: b,
    immediate: k
  }), [b, k]);
  const {
    Provider: _
  } = Jy;
  return wt.createElement(_, {
    value: h
  }, c);
}, Jy = bN(ug, {});
ug.Provider = Jy.Provider;
ug.Consumer = Jy.Consumer;
function bN(f, c) {
  return Object.assign(f, wt.createContext(c)), f.Provider._context = f, f.Consumer._context = f, f;
}
const xN = () => {
  const f = [], c = function(b) {
    YO();
    const k = [];
    return Pt(f, (_, G) => {
      if (pe.und(b))
        k.push(_.start());
      else {
        const P = h(b, _, G);
        P && k.push(_.start(P));
      }
    }), k;
  };
  c.current = f, c.add = function(S) {
    f.includes(S) || f.push(S);
  }, c.delete = function(S) {
    const b = f.indexOf(S);
    ~b && f.splice(b, 1);
  }, c.pause = function() {
    return Pt(f, (S) => S.pause(...arguments)), this;
  }, c.resume = function() {
    return Pt(f, (S) => S.resume(...arguments)), this;
  }, c.set = function(S) {
    Pt(f, (b) => b.set(S));
  }, c.start = function(S) {
    const b = [];
    return Pt(f, (k, _) => {
      if (pe.und(S))
        b.push(k.start());
      else {
        const G = this._getProps(S, k, _);
        G && b.push(k.start(G));
      }
    }), b;
  }, c.stop = function() {
    return Pt(f, (S) => S.stop(...arguments)), this;
  }, c.update = function(S) {
    return Pt(f, (b, k) => b.update(this._getProps(S, b, k))), this;
  };
  const h = function(b, k, _) {
    return pe.fun(b) ? b(_, k) : b;
  };
  return c._getProps = h, c;
};
function wN(f, c, h) {
  const S = pe.fun(c) && c;
  S && !h && (h = []);
  const b = wt.useMemo(() => S || arguments.length == 3 ? xN() : void 0, []), k = wt.useRef(0), _ = Bx(), G = wt.useMemo(() => ({
    ctrls: [],
    queue: [],
    flush(Ne, ve) {
      const se = yx(Ne, ve);
      return k.current > 0 && !G.queue.length && !Object.keys(se).some((me) => !Ne.springs[me]) ? B_(Ne, ve) : new Promise((me) => {
        nw(Ne, se), G.queue.push(() => {
          me(B_(Ne, ve));
        }), _();
      });
    }
  }), []), P = wt.useRef([...G.ctrls]), A = [], ee = ix(f) || 0;
  wt.useMemo(() => {
    Pt(P.current.slice(f, ee), (Ne) => {
      oN(Ne, b), Ne.stop(!0);
    }), P.current.length = f, B(ee, f);
  }, [f]), wt.useMemo(() => {
    B(0, Math.min(ee, f));
  }, h);
  function B(Ne, ve) {
    for (let se = Ne; se < ve; se++) {
      const Te = P.current[se] || (P.current[se] = new _N(null, G.flush)), me = S ? S(se, Te) : c[se];
      me && (A[se] = mN(me));
    }
  }
  const K = P.current.map((Ne, ve) => yx(Ne, A[ve])), Z = wt.useContext(ug), ae = ix(Z), de = Z !== ae && lN(Z);
  $x(() => {
    k.current++, G.ctrls = P.current;
    const {
      queue: Ne
    } = G;
    Ne.length && (G.queue = [], Pt(Ne, (ve) => ve())), Pt(P.current, (ve, se) => {
      b == null || b.add(ve), de && ve.start({
        default: Z
      });
      const Te = A[se];
      Te && (uN(ve, Te.ref), ve.ref ? ve.queue.push(Te) : ve.start(Te));
    });
  }), X_(() => () => {
    Pt(G.ctrls, (Ne) => Ne.stop(!0));
  });
  const ue = K.map((Ne) => Tr({}, Ne));
  return b ? [ue, b] : ue;
}
function gx(f, c) {
  const h = pe.fun(f), [[S], b] = wN(1, h ? f : [f], h ? [] : c);
  return h || arguments.length == 2 ? [S, b] : S;
}
let Sx;
(function(f) {
  f.MOUNT = "mount", f.ENTER = "enter", f.UPDATE = "update", f.LEAVE = "leave";
})(Sx || (Sx = {}));
class RN extends t1 {
  constructor(c, h) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = c, this.calc = Iv(...h);
    const S = this._get(), b = j_(S);
    K_(this, b.create(S));
  }
  advance(c) {
    const h = this._get(), S = this.get();
    cu(h, S) || (co(this).setValue(h), this._onChange(h, this.idle)), !this.idle && _x(this._active) && z_(this);
  }
  _get() {
    const c = pe.arr(this.source) ? this.source.map(Ga) : mi(Ga(this.source));
    return this.calc(...c);
  }
  _start() {
    this.idle && !_x(this._active) && (this.idle = !1, Pt(lg(this), (c) => {
      c.done = !1;
    }), mo.skipAnimation ? (yt.batchedUpdates(() => this.advance()), z_(this)) : rg.start(this));
  }
  _attach() {
    let c = 1;
    Pt(mi(this.source), (h) => {
      Qi(h) && Rd(h, this), V_(h) && (h.idle || this._active.add(h), c = Math.max(c, h.priority + 1));
    }), this.priority = c, this._start();
  }
  _detach() {
    Pt(mi(this.source), (c) => {
      Qi(c) && Qv(c, this);
    }), this._active.clear(), z_(this);
  }
  eventObserved(c) {
    c.type == "change" ? c.idle ? this.advance() : (this._active.add(c.parent), this._start()) : c.type == "idle" ? this._active.delete(c.parent) : c.type == "priority" && (this.priority = mi(this.source).reduce((h, S) => Math.max(h, (V_(S) ? S.priority : 0) + 1), 0));
  }
}
function TN(f) {
  return f.idle !== !1;
}
function _x(f) {
  return !f.size || Array.from(f).every(TN);
}
function z_(f) {
  f.idle || (f.idle = !0, Pt(lg(f), (c) => {
    c.done = !0;
  }), Yv(f, {
    type: "idle",
    parent: f
  }));
}
mo.assign({
  createStringInterpolator: Hx,
  to: (f, c) => new RN(f, c)
});
function n1(f, c) {
  if (f == null) return {};
  var h = {}, S = Object.keys(f), b, k;
  for (k = 0; k < S.length; k++)
    b = S[k], !(c.indexOf(b) >= 0) && (h[b] = f[b]);
  return h;
}
const kN = ["style", "children", "scrollTop", "scrollLeft"], lw = /^--/;
function DN(f, c) {
  return c == null || typeof c == "boolean" || c === "" ? "" : typeof c == "number" && c !== 0 && !lw.test(f) && !($v.hasOwnProperty(f) && $v[f]) ? c + "px" : ("" + c).trim();
}
const Ex = {};
function ON(f, c) {
  if (!f.nodeType || !f.setAttribute)
    return !1;
  const h = f.nodeName === "filter" || f.parentNode && f.parentNode.nodeName === "filter", S = c, {
    style: b,
    children: k,
    scrollTop: _,
    scrollLeft: G
  } = S, P = n1(S, kN), A = Object.values(P), ee = Object.keys(P).map((B) => h || f.hasAttribute(B) ? B : Ex[B] || (Ex[B] = B.replace(/([A-Z])/g, (K) => "-" + K.toLowerCase())));
  k !== void 0 && (f.textContent = k);
  for (let B in b)
    if (b.hasOwnProperty(B)) {
      const K = DN(B, b[B]);
      lw.test(B) ? f.style.setProperty(B, K) : f.style[B] = K;
    }
  ee.forEach((B, K) => {
    f.setAttribute(B, A[K]);
  }), _ !== void 0 && (f.scrollTop = _), G !== void 0 && (f.scrollLeft = G);
}
let $v = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
};
const NN = (f, c) => f + c.charAt(0).toUpperCase() + c.substring(1), zN = ["Webkit", "Ms", "Moz", "O"];
$v = Object.keys($v).reduce((f, c) => (zN.forEach((h) => f[NN(h, c)] = f[c]), f), $v);
const LN = ["x", "y", "z"], MN = /^(matrix|translate|scale|rotate|skew)/, AN = /^(translate)/, UN = /^(rotate|skew)/, L_ = (f, c) => pe.num(f) && f !== 0 ? f + c : f, Gy = (f, c) => pe.arr(f) ? f.every((h) => Gy(h, c)) : pe.num(f) ? f === c : parseFloat(f) === c;
class FN extends og {
  constructor(c) {
    let {
      x: h,
      y: S,
      z: b
    } = c, k = n1(c, LN);
    const _ = [], G = [];
    (h || S || b) && (_.push([h || 0, S || 0, b || 0]), G.push((P) => [`translate3d(${P.map((A) => L_(A, "px")).join(",")})`, Gy(P, 0)])), ho(k, (P, A) => {
      if (A === "transform")
        _.push([P || ""]), G.push((ee) => [ee, ee === ""]);
      else if (MN.test(A)) {
        if (delete k[A], pe.und(P)) return;
        const ee = AN.test(A) ? "px" : UN.test(A) ? "deg" : "";
        _.push(mi(P)), G.push(A === "rotate3d" ? ([B, K, Z, ae]) => [`rotate3d(${B},${K},${Z},${L_(ae, ee)})`, Gy(ae, 0)] : (B) => [`${A}(${B.map((K) => L_(K, ee)).join(",")})`, Gy(B, A.startsWith("scale") ? 1 : 0)]);
      }
    }), _.length && (k.transform = new jN(_, G)), super(k);
  }
}
class jN extends jx {
  constructor(c, h) {
    super(), this._value = null, this.inputs = c, this.transforms = h;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let c = "", h = !0;
    return Pt(this.inputs, (S, b) => {
      const k = Ga(S[0]), [_, G] = this.transforms[b](pe.arr(k) ? k : S.map(Ga));
      c += " " + _, h = h && G;
    }), h ? "none" : c;
  }
  observerAdded(c) {
    c == 1 && Pt(this.inputs, (h) => Pt(h, (S) => Qi(S) && Rd(S, this)));
  }
  observerRemoved(c) {
    c == 0 && Pt(this.inputs, (h) => Pt(h, (S) => Qi(S) && Qv(S, this)));
  }
  eventObserved(c) {
    c.type == "change" && (this._value = null), Yv(this, c);
  }
}
const PN = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], HN = ["scrollTop", "scrollLeft"];
mo.assign({
  batchedUpdates: cO.unstable_batchedUpdates,
  createStringInterpolator: Hx,
  colors: wO
});
const VN = tN(PN, {
  applyAnimatedValues: ON,
  createAnimatedStyle: (f) => new FN(f),
  getComponentProps: (f) => n1(f, HN)
}), Cx = VN.animated;
var Ed;
(function(f) {
  f.Small = "small", f.Medium = "medium", f.Large = "large";
})(Ed || (Ed = {}));
const BN = { info: eO, success: tO, error: rO, alert: J2 }, bx = ({ visuallyHidden: f, children: c }) => f ? bn.createElement(_O, null, c) : c, $N = bn.forwardRef((f, c) => {
  var { autoClose: h = !1, autoCloseDuration: S = 6e3, boxShadow: b = !1, children: k, className: _ = "", closeAnimationDuration: G = 85, closeButtonLabelText: P, dismissible: A = !1, displayAutoCloseProgress: ee = !0, invisible: B = !1, label: K, notificationAriaLabel: Z = "Notification", position: ae = "inline", onClose: de = () => null, size: ue = Ed.Medium, style: Ne, type: ve = "info", headingLevel: se = 2 } = f, Te = wd(f, ["autoClose", "autoCloseDuration", "boxShadow", "children", "className", "closeAnimationDuration", "closeButtonLabelText", "dismissible", "displayAutoCloseProgress", "invisible", "label", "notificationAriaLabel", "position", "onClose", "size", "style", "type", "headingLevel"]);
  const me = ae !== "inline";
  me && ue === Ed.Large && (console.warn(`Size '${ue}' is only allowed for inline positioned notifications`), ue = Ed.Medium), !me && h && (console.warn("The 'autoClose' property is not allowed for inline positioned notifications"), h = !1);
  const [Ye, Pe] = wt.useState(!0), Ct = wt.useCallback(() => {
    Pe(!1), setTimeout(() => de(), G);
  }, [de, G]);
  wt.useEffect(() => {
    const st = setTimeout(() => {
      h && Ct();
    }, S);
    return () => clearTimeout(st);
  }, [h, S, Ct]);
  const Rt = BN[ve], dt = me ? ((st) => {
    const Ot = st.includes("center");
    return { from: { transform: `translate3d(${Ot ? "-50%" : "0"}, ${st.includes("top") ? "-" : ""}32px, 0)`, opacity: 0.66 }, to: { transform: `translate3d(${Ot ? "-50%" : "0"}, 0, 0)`, opacity: 1 }, config: { friction: 30, tension: 300 } };
  })(ae) : {}, Ft = { from: { opacity: 1 }, to: { opacity: 0 }, config: { duration: G } }, nt = ee ? /* @__PURE__ */ ((st) => ({ from: { transform: "translate3d(0%, 0, 0)" }, to: { transform: "translate3d(-100%, 0, 0)" }, config: { duration: st } }))(S) : {}, Me = gx(Ye ? dt : Ft), Tt = gx(nt);
  return bn.createElement(bx, { visuallyHidden: B }, bn.createElement(Cx.section, Object.assign({}, Te, { style: Object.assign(Object.assign({}, Me), Ne), className: Ib(hi[ae], hi.notification, hi[ue], hi[ve], h && hi.noBorder, b && hi.boxShadow, _), "aria-label": Z, role: me || B ? "alert" : void 0 }), h && bn.createElement(Cx.div, { style: Tt, className: hi.autoClose }), bn.createElement("div", { className: hi.content, ref: c }, K && bn.createElement("div", Object.assign({ className: hi.label }, me || B ? {} : { role: "heading", "aria-level": se }), bn.createElement(Rt, { className: hi.icon }), bn.createElement(bx, { visuallyHidden: ue === Ed.Small }, K)), k && bn.createElement("div", { className: hi.body }, k)), A && bn.createElement("button", { className: Ib(hi.close, hi[ve]), type: "button", title: P, "aria-label": P, onClick: Ct }, bn.createElement(nO, null))));
}), IN = (f) => {
  const { notifications: c, closeNotification: h } = f;
  return /* @__PURE__ */ fo.jsx(fo.Fragment, { children: c.map((S) => /* @__PURE__ */ fo.jsxs("div", { className: "notification-container", children: [
    /* @__PURE__ */ fo.jsx("button", { className: "notification-closeBtn", onClick: () => h(S.id), children: "X" }),
    /* @__PURE__ */ fo.jsx($N, { type: S.level, label: S.header, children: /* @__PURE__ */ fo.jsx("p", { children: S.text }) })
  ] }, S.id)) });
}, xx = localStorage.getItem("closedNotifications"), _d = xx ? JSON.parse(xx) : [], GN = (f) => {
  const { notifications: c } = f, [h, S] = wt.useState(() => c.filter((_) => !_d.includes(_.id) || _.level === "error")), b = (_) => {
    _d.push(_), localStorage.setItem("closedNotifications", JSON.stringify(_d)), S(c.filter((G) => !_d.includes(G.id)));
  }, k = () => {
    localStorage.removeItem("closedNotifications"), _d.splice(0, _d.length), S(c);
  };
  return /* @__PURE__ */ fo.jsxs(fo.Fragment, { children: [
    /* @__PURE__ */ fo.jsx(IN, { notifications: h, closeNotification: b }),
    h.length < c.length && /* @__PURE__ */ fo.jsx("button", { onClick: () => k(), children: "Näytä kaikki ilmoitukset" })
  ] });
};
export {
  GN as NotificationService
};
