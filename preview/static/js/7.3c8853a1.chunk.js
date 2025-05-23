(window["webpackJsonpstar-admin-pro-react"] =
  window["webpackJsonpstar-admin-pro-react"] || []).push([
  [7],
  {
    357: function (e, a, t) {
      "use strict";
      var l = t(1),
        s = t(3),
        r = t(4),
        i = t.n(r),
        c = t(0),
        n = t.n(c),
        o = (t(78), t(5)),
        m = t.n(o),
        d = { type: m.a.string.isRequired, as: m.a.elementType },
        f = n.a.forwardRef(function (e, a) {
          var t = e.as,
            r = void 0 === t ? "div" : t,
            c = e.className,
            o = e.type,
            m = Object(s.a)(e, ["as", "className", "type"]);
          return n.a.createElement(
            r,
            Object(l.a)({}, m, {
              ref: a,
              className: i()(c, o && o + "-feedback"),
            }),
          );
        });
      (f.displayName = "Feedback"),
        (f.propTypes = d),
        (f.defaultProps = { type: "valid" });
      var u = f,
        b = n.a.createContext({ controlId: void 0 }),
        v = t(6),
        p = n.a.forwardRef(function (e, a) {
          var t = e.id,
            r = e.bsPrefix,
            o = e.bsCustomPrefix,
            m = e.className,
            d = e.isValid,
            f = e.isInvalid,
            u = e.isStatic,
            p = e.as,
            N = void 0 === p ? "input" : p,
            x = Object(s.a)(e, [
              "id",
              "bsPrefix",
              "bsCustomPrefix",
              "className",
              "isValid",
              "isInvalid",
              "isStatic",
              "as",
            ]),
            h = Object(c.useContext)(b),
            O = h.controlId,
            y = h.custom
              ? [o, "custom-control-input"]
              : [r, "form-check-input"],
            j = y[0],
            E = y[1];
          return (
            (r = Object(v.a)(j, E)),
            n.a.createElement(
              N,
              Object(l.a)({}, x, {
                ref: a,
                id: t || O,
                className: i()(
                  m,
                  r,
                  d && "is-valid",
                  f && "is-invalid",
                  u && "position-static",
                ),
              }),
            )
          );
        });
      (p.displayName = "FormCheckInput"),
        (p.defaultProps = { type: "checkbox" });
      var N = p,
        x = n.a.forwardRef(function (e, a) {
          var t = e.bsPrefix,
            r = e.bsCustomPrefix,
            o = e.className,
            m = e.htmlFor,
            d = Object(s.a)(e, [
              "bsPrefix",
              "bsCustomPrefix",
              "className",
              "htmlFor",
            ]),
            f = Object(c.useContext)(b),
            u = f.controlId,
            p = f.custom
              ? [r, "custom-control-label"]
              : [t, "form-check-label"],
            N = p[0],
            x = p[1];
          return (
            (t = Object(v.a)(N, x)),
            n.a.createElement(
              "label",
              Object(l.a)({}, d, {
                ref: a,
                htmlFor: m || u,
                className: i()(o, t),
              }),
            )
          );
        });
      x.displayName = "FormCheckLabel";
      var h = x,
        O = n.a.forwardRef(function (e, a) {
          var t = e.id,
            r = e.bsPrefix,
            o = e.bsCustomPrefix,
            m = e.inline,
            d = e.disabled,
            f = e.isValid,
            p = e.isInvalid,
            x = e.feedback,
            O = e.className,
            y = e.style,
            j = e.title,
            E = e.type,
            P = e.label,
            w = e.children,
            g = e.custom,
            C = e.as,
            I = void 0 === C ? "input" : C,
            k = Object(s.a)(e, [
              "id",
              "bsPrefix",
              "bsCustomPrefix",
              "inline",
              "disabled",
              "isValid",
              "isInvalid",
              "feedback",
              "className",
              "style",
              "title",
              "type",
              "label",
              "children",
              "custom",
              "as",
            ]),
            F = "switch" === E || g,
            R = F ? [o, "custom-control"] : [r, "form-check"],
            V = R[0],
            L = R[1];
          r = Object(v.a)(V, L);
          var S = Object(c.useContext)(b).controlId,
            G = Object(c.useMemo)(
              function () {
                return { controlId: t || S, custom: F };
              },
              [S, F, t],
            ),
            z = null != P && !1 !== P && !w,
            T = n.a.createElement(
              N,
              Object(l.a)({}, k, {
                type: "switch" === E ? "checkbox" : E,
                ref: a,
                isValid: f,
                isInvalid: p,
                isStatic: !z,
                disabled: d,
                as: I,
              }),
            );
          return n.a.createElement(
            b.Provider,
            { value: G },
            n.a.createElement(
              "div",
              {
                style: y,
                className: i()(O, r, F && "custom-" + E, m && r + "-inline"),
              },
              w ||
                n.a.createElement(
                  n.a.Fragment,
                  null,
                  T,
                  z && n.a.createElement(h, { title: j }, P),
                  (f || p) &&
                    n.a.createElement(u, { type: f ? "valid" : "invalid" }, x),
                ),
            ),
          );
        });
      (O.displayName = "FormCheck"),
        (O.defaultProps = {
          type: "checkbox",
          inline: !1,
          disabled: !1,
          isValid: !1,
          isInvalid: !1,
          title: "",
        }),
        (O.Input = N),
        (O.Label = h);
      var y = O,
        j = n.a.forwardRef(function (e, a) {
          var t = e.id,
            r = e.bsPrefix,
            o = e.bsCustomPrefix,
            m = e.className,
            d = e.isValid,
            f = e.isInvalid,
            u = e.lang,
            p = e.as,
            N = void 0 === p ? "input" : p,
            x = Object(s.a)(e, [
              "id",
              "bsPrefix",
              "bsCustomPrefix",
              "className",
              "isValid",
              "isInvalid",
              "lang",
              "as",
            ]),
            h = Object(c.useContext)(b),
            O = h.controlId,
            y = h.custom ? [o, "custom-file-input"] : [r, "form-control-file"],
            j = y[0],
            E = y[1];
          return (
            (r = Object(v.a)(j, E)),
            n.a.createElement(
              N,
              Object(l.a)({}, x, {
                ref: a,
                id: t || O,
                type: "file",
                lang: u,
                className: i()(m, r, d && "is-valid", f && "is-invalid"),
              }),
            )
          );
        });
      j.displayName = "FormFileInput";
      var E = j,
        P = n.a.forwardRef(function (e, a) {
          var t = e.bsPrefix,
            r = e.bsCustomPrefix,
            o = e.className,
            m = e.htmlFor,
            d = Object(s.a)(e, [
              "bsPrefix",
              "bsCustomPrefix",
              "className",
              "htmlFor",
            ]),
            f = Object(c.useContext)(b),
            u = f.controlId,
            p = f.custom ? [r, "custom-file-label"] : [t, "form-file-label"],
            N = p[0],
            x = p[1];
          return (
            (t = Object(v.a)(N, x)),
            n.a.createElement(
              "label",
              Object(l.a)({}, d, {
                ref: a,
                htmlFor: m || u,
                className: i()(o, t),
                "data-browse": d["data-browse"],
              }),
            )
          );
        });
      P.displayName = "FormFileLabel";
      var w = P,
        g = n.a.forwardRef(function (e, a) {
          var t = e.id,
            r = e.bsPrefix,
            o = e.bsCustomPrefix,
            m = e.disabled,
            d = e.isValid,
            f = e.isInvalid,
            p = e.feedback,
            N = e.className,
            x = e.style,
            h = e.label,
            O = e.children,
            y = e.custom,
            j = e.lang,
            P = e["data-browse"],
            g = e.as,
            C = void 0 === g ? "div" : g,
            I = e.inputAs,
            k = void 0 === I ? "input" : I,
            F = Object(s.a)(e, [
              "id",
              "bsPrefix",
              "bsCustomPrefix",
              "disabled",
              "isValid",
              "isInvalid",
              "feedback",
              "className",
              "style",
              "label",
              "children",
              "custom",
              "lang",
              "data-browse",
              "as",
              "inputAs",
            ]),
            R = y ? [o, "custom"] : [r, "form-file"],
            V = R[0],
            L = R[1];
          r = Object(v.a)(V, L);
          var S = Object(c.useContext)(b).controlId,
            G = Object(c.useMemo)(
              function () {
                return { controlId: t || S, custom: y };
              },
              [S, y, t],
            ),
            z = null != h && !1 !== h && !O,
            T = n.a.createElement(
              E,
              Object(l.a)({}, F, {
                ref: a,
                isValid: d,
                isInvalid: f,
                disabled: m,
                as: k,
                lang: j,
              }),
            );
          return n.a.createElement(
            b.Provider,
            { value: G },
            n.a.createElement(
              C,
              { style: x, className: i()(N, r, y && "custom-file") },
              O ||
                n.a.createElement(
                  n.a.Fragment,
                  null,
                  y
                    ? n.a.createElement(
                        n.a.Fragment,
                        null,
                        T,
                        z && n.a.createElement(w, { "data-browse": P }, h),
                      )
                    : n.a.createElement(
                        n.a.Fragment,
                        null,
                        z && n.a.createElement(w, null, h),
                        T,
                      ),
                  (d || f) &&
                    n.a.createElement(u, { type: d ? "valid" : "invalid" }, p),
                ),
            ),
          );
        });
      (g.displayName = "FormFile"),
        (g.defaultProps = { disabled: !1, isValid: !1, isInvalid: !1 }),
        (g.Input = E),
        (g.Label = w);
      var C = g,
        I =
          (t(51),
          n.a.forwardRef(function (e, a) {
            var t,
              r,
              o = e.bsPrefix,
              m = e.bsCustomPrefix,
              d = e.type,
              f = e.size,
              u = e.id,
              p = e.className,
              N = e.isValid,
              x = e.isInvalid,
              h = e.plaintext,
              O = e.readOnly,
              y = e.custom,
              j = e.as,
              E = void 0 === j ? "input" : j,
              P = Object(s.a)(e, [
                "bsPrefix",
                "bsCustomPrefix",
                "type",
                "size",
                "id",
                "className",
                "isValid",
                "isInvalid",
                "plaintext",
                "readOnly",
                "custom",
                "as",
              ]),
              w = Object(c.useContext)(b).controlId,
              g = y ? [m, "custom"] : [o, "form-control"],
              C = g[0],
              I = g[1];
            if (((o = Object(v.a)(C, I)), h))
              ((r = {})[o + "-plaintext"] = !0), (t = r);
            else if ("file" === d) {
              var k;
              ((k = {})[o + "-file"] = !0), (t = k);
            } else if ("range" === d) {
              var F;
              ((F = {})[o + "-range"] = !0), (t = F);
            } else if ("select" === E && y) {
              var R;
              ((R = {})[o + "-select"] = !0),
                (R[o + "-select-" + f] = f),
                (t = R);
            } else {
              var V;
              ((V = {})[o] = !0), (V[o + "-" + f] = f), (t = V);
            }
            return n.a.createElement(
              E,
              Object(l.a)({}, P, {
                type: d,
                ref: a,
                readOnly: O,
                id: u || w,
                className: i()(p, t, N && "is-valid", x && "is-invalid"),
              }),
            );
          }));
      (I.displayName = "FormControl"), (I.Feedback = u);
      var k = I,
        F = n.a.forwardRef(function (e, a) {
          var t = e.bsPrefix,
            r = e.className,
            o = e.children,
            m = e.controlId,
            d = e.as,
            f = void 0 === d ? "div" : d,
            u = Object(s.a)(e, [
              "bsPrefix",
              "className",
              "children",
              "controlId",
              "as",
            ]);
          t = Object(v.a)(t, "form-group");
          var p = Object(c.useMemo)(
            function () {
              return { controlId: m };
            },
            [m],
          );
          return n.a.createElement(
            b.Provider,
            { value: p },
            n.a.createElement(
              f,
              Object(l.a)({}, u, { ref: a, className: i()(r, t) }),
              o,
            ),
          );
        });
      F.displayName = "FormGroup";
      var R = F,
        V = ["xl", "lg", "md", "sm", "xs"],
        L = n.a.forwardRef(function (e, a) {
          var t = e.bsPrefix,
            r = e.className,
            c = e.as,
            o = void 0 === c ? "div" : c,
            m = Object(s.a)(e, ["bsPrefix", "className", "as"]),
            d = Object(v.a)(t, "col"),
            f = [],
            u = [];
          return (
            V.forEach(function (e) {
              var a,
                t,
                l,
                s = m[e];
              if ((delete m[e], null != s && "object" === typeof s)) {
                var r = s.span;
                (a = void 0 === r || r), (t = s.offset), (l = s.order);
              } else a = s;
              var i = "xs" !== e ? "-" + e : "";
              null != a && f.push(!0 === a ? "" + d + i : "" + d + i + "-" + a),
                null != l && u.push("order" + i + "-" + l),
                null != t && u.push("offset" + i + "-" + t);
            }),
            f.length || f.push(d),
            n.a.createElement(
              o,
              Object(l.a)({}, m, {
                ref: a,
                className: i.a.apply(void 0, [r].concat(f, u)),
              }),
            )
          );
        });
      L.displayName = "Col";
      var S = L,
        G = n.a.forwardRef(function (e, a) {
          var t = e.as,
            r = void 0 === t ? "label" : t,
            o = e.bsPrefix,
            m = e.column,
            d = e.srOnly,
            f = e.className,
            u = e.htmlFor,
            p = Object(s.a)(e, [
              "as",
              "bsPrefix",
              "column",
              "srOnly",
              "className",
              "htmlFor",
            ]),
            N = Object(c.useContext)(b).controlId;
          o = Object(v.a)(o, "form-label");
          var x = "col-form-label";
          "string" === typeof m && (x = x + "-" + m);
          var h = i()(f, o, d && "sr-only", m && x);
          return (
            (u = u || N),
            m
              ? n.a.createElement(
                  S,
                  Object(l.a)({ as: "label", className: h, htmlFor: u }, p),
                )
              : n.a.createElement(
                  r,
                  Object(l.a)({ ref: a, className: h, htmlFor: u }, p),
                )
          );
        });
      (G.displayName = "FormLabel"),
        (G.defaultProps = { column: !1, srOnly: !1 });
      var z = G,
        T = n.a.forwardRef(function (e, a) {
          var t = e.bsPrefix,
            r = e.className,
            c = e.as,
            o = void 0 === c ? "small" : c,
            m = e.muted,
            d = Object(s.a)(e, ["bsPrefix", "className", "as", "muted"]);
          return (
            (t = Object(v.a)(t, "form-text")),
            n.a.createElement(
              o,
              Object(l.a)({}, d, {
                ref: a,
                className: i()(r, t, m && "text-muted"),
              }),
            )
          );
        });
      T.displayName = "FormText";
      var M = T,
        A = n.a.forwardRef(function (e, a) {
          return n.a.createElement(
            y,
            Object(l.a)({}, e, { ref: a, type: "switch" }),
          );
        });
      (A.displayName = "Switch"), (A.Input = y.Input), (A.Label = y.Label);
      var D = A,
        J = t(54),
        q = n.a.forwardRef(function (e, a) {
          var t = e.bsPrefix,
            r = e.inline,
            c = e.className,
            o = e.validated,
            m = e.as,
            d = void 0 === m ? "form" : m,
            f = Object(s.a)(e, [
              "bsPrefix",
              "inline",
              "className",
              "validated",
              "as",
            ]);
          return (
            (t = Object(v.a)(t, "form")),
            n.a.createElement(
              d,
              Object(l.a)({}, f, {
                ref: a,
                className: i()(c, o && "was-validated", r && t + "-inline"),
              }),
            )
          );
        });
      (q.displayName = "Form"),
        (q.defaultProps = { inline: !1 }),
        (q.Row = Object(J.a)("form-row")),
        (q.Group = R),
        (q.Control = k),
        (q.Check = y),
        (q.File = C),
        (q.Switch = D),
        (q.Label = z),
        (q.Text = M);
      a.a = q;
    },
    370: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "Login", function () {
          return d;
        });
      var l = t(10),
        s = t(11),
        r = t(13),
        i = t(12),
        c = t(0),
        n = t.n(c),
        o = t(9),
        m = t(357),
        d = (function (e) {
          Object(r.a)(c, e);
          var a = Object(i.a)(c);
          function c() {
            return Object(l.a)(this, c), a.apply(this, arguments);
          }
          return (
            Object(s.a)(c, [
              {
                key: "render",
                value: function () {
                  return n.a.createElement(
                    "div",
                    null,
                    n.a.createElement(
                      "div",
                      { className: "d-flex align-items-center auth px-0" },
                      n.a.createElement(
                        "div",
                        { className: "row w-100 mx-0" },
                        n.a.createElement(
                          "div",
                          { className: "col-lg-4 mx-auto" },
                          n.a.createElement(
                            "div",
                            {
                              className:
                                "auth-form-light text-left py-5 px-4 px-sm-5",
                            },
                            n.a.createElement(
                              "div",
                              { className: "brand-logo" },
                              n.a.createElement("img", {
                                src: t(80),
                                alt: "logo",
                              }),
                            ),
                            n.a.createElement(
                              "h4",
                              null,
                              "Hello! let's get started",
                            ),
                            n.a.createElement(
                              "h6",
                              { className: "font-weight-light" },
                              "Sign in to continue.",
                            ),
                            n.a.createElement(
                              m.a,
                              { className: "pt-3" },
                              n.a.createElement(
                                m.a.Group,
                                { className: "d-flex search-field" },
                                n.a.createElement(m.a.Control, {
                                  type: "email",
                                  placeholder: "Username",
                                  size: "lg",
                                  className: "h-auto",
                                }),
                              ),
                              n.a.createElement(
                                m.a.Group,
                                { className: "d-flex search-field" },
                                n.a.createElement(m.a.Control, {
                                  type: "password",
                                  placeholder: "Password",
                                  size: "lg",
                                  className: "h-auto",
                                }),
                              ),
                              n.a.createElement(
                                "div",
                                { className: "mt-3" },
                                n.a.createElement(
                                  o.b,
                                  {
                                    className:
                                      "btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",
                                    to: "/dashboard",
                                  },
                                  "SIGN IN",
                                ),
                              ),
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "my-2 d-flex justify-content-between align-items-center",
                                },
                                n.a.createElement(
                                  "div",
                                  { className: "form-check" },
                                  n.a.createElement(
                                    "label",
                                    {
                                      className: "form-check-label text-muted",
                                    },
                                    n.a.createElement("input", {
                                      type: "checkbox",
                                      className: "form-check-input",
                                    }),
                                    n.a.createElement("i", {
                                      className: "input-helper",
                                    }),
                                    "Keep me signed in",
                                  ),
                                ),
                                n.a.createElement(
                                  "a",
                                  {
                                    href: "!#",
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                    className: "auth-link text-black",
                                  },
                                  "Forgot password?",
                                ),
                              ),
                              n.a.createElement(
                                "div",
                                { className: "mb-2" },
                                n.a.createElement(
                                  "button",
                                  {
                                    type: "button",
                                    className:
                                      "btn btn-block btn-facebook auth-form-btn",
                                  },
                                  n.a.createElement("i", {
                                    className: "mdi mdi-facebook mr-2",
                                  }),
                                  "Connect using facebook",
                                ),
                              ),
                              n.a.createElement(
                                "div",
                                {
                                  className:
                                    "text-center mt-4 font-weight-light",
                                },
                                "Don't have an account? ",
                                n.a.createElement(
                                  o.b,
                                  {
                                    to: "/user-pages/register",
                                    className: "text-primary",
                                  },
                                  "Create",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            c
          );
        })(c.Component);
      a.default = d;
    },
  },
]);
//# sourceMappingURL=7.3c8853a1.chunk.js.map
