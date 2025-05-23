(window["webpackJsonpstar-admin-pro-react"] =
  window["webpackJsonpstar-admin-pro-react"] || []).push([
  [6],
  {
    293: function (e, a, t) {
      "use strict";
      var l = t(1),
        n = t(3),
        r = t(4),
        c = t.n(r),
        m = t(0),
        d = t.n(m),
        s = t(6),
        E = t(39);
      function u(e, a, t) {
        var l = ((e - a) / (t - a)) * 100;
        return Math.round(1e3 * l) / 1e3;
      }
      function i(e, a) {
        var t,
          r = e.min,
          m = e.now,
          s = e.max,
          E = e.label,
          i = e.srOnly,
          o = e.striped,
          b = e.animated,
          N = e.className,
          g = e.style,
          h = e.variant,
          p = e.bsPrefix,
          v = Object(n.a)(e, [
            "min",
            "now",
            "max",
            "label",
            "srOnly",
            "striped",
            "animated",
            "className",
            "style",
            "variant",
            "bsPrefix",
          ]);
        return d.a.createElement(
          "div",
          Object(l.a)({ ref: a }, v, {
            role: "progressbar",
            className: c()(
              N,
              p + "-bar",
              ((t = {}),
              (t["bg-" + h] = h),
              (t[p + "-bar-animated"] = b),
              (t[p + "-bar-striped"] = b || o),
              t),
            ),
            style: Object(l.a)({ width: u(m, r, s) + "%" }, g),
            "aria-valuenow": m,
            "aria-valuemin": r,
            "aria-valuemax": s,
          }),
          i ? d.a.createElement("span", { className: "sr-only" }, E) : E,
        );
      }
      var o = d.a.forwardRef(function (e, a) {
        var t = e.isChild,
          r = Object(n.a)(e, ["isChild"]);
        if (((r.bsPrefix = Object(s.a)(r.bsPrefix, "progress")), t))
          return i(r, a);
        var u = r.min,
          o = r.now,
          b = r.max,
          N = r.label,
          g = r.srOnly,
          h = r.striped,
          p = r.animated,
          v = r.bsPrefix,
          y = r.variant,
          w = r.className,
          f = r.children,
          M = Object(n.a)(r, [
            "min",
            "now",
            "max",
            "label",
            "srOnly",
            "striped",
            "animated",
            "bsPrefix",
            "variant",
            "className",
            "children",
          ]);
        return d.a.createElement(
          "div",
          Object(l.a)({ ref: a }, M, { className: c()(w, v) }),
          f
            ? Object(E.b)(f, function (e) {
                return Object(m.cloneElement)(e, { isChild: !0 });
              })
            : i(
                {
                  min: u,
                  now: o,
                  max: b,
                  label: N,
                  srOnly: g,
                  striped: h,
                  animated: p,
                  bsPrefix: v,
                  variant: y,
                },
                a,
              ),
        );
      });
      (o.displayName = "ProgressBar"),
        (o.defaultProps = {
          min: 0,
          max: 100,
          animated: !1,
          isChild: !1,
          srOnly: !1,
          striped: !1,
        }),
        (a.a = o);
    },
    355: function (e, a, t) {
      e.exports = t.p + "static/media/face7.c996f7f0.jpg";
    },
    365: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "BasicTable", function () {
          return E;
        });
      var l = t(10),
        n = t(11),
        r = t(13),
        c = t(12),
        m = t(0),
        d = t.n(m),
        s = t(293),
        E = (function (e) {
          Object(r.a)(m, e);
          var a = Object(c.a)(m);
          function m() {
            return Object(l.a)(this, m), a.apply(this, arguments);
          }
          return (
            Object(n.a)(m, [
              {
                key: "render",
                value: function () {
                  return d.a.createElement(
                    "div",
                    null,
                    d.a.createElement(
                      "div",
                      { className: "page-header" },
                      d.a.createElement(
                        "h3",
                        { className: "page-title" },
                        " Basic Tables ",
                      ),
                      d.a.createElement(
                        "nav",
                        { "aria-label": "breadcrumb" },
                        d.a.createElement(
                          "ol",
                          { className: "breadcrumb" },
                          d.a.createElement(
                            "li",
                            { className: "breadcrumb-item" },
                            d.a.createElement(
                              "a",
                              {
                                href: "!#",
                                onClick: function (e) {
                                  return e.preventDefault();
                                },
                              },
                              "Tables",
                            ),
                          ),
                          d.a.createElement(
                            "li",
                            {
                              className: "breadcrumb-item active",
                              "aria-current": "page",
                            },
                            "Basic tables",
                          ),
                        ),
                      ),
                    ),
                    d.a.createElement(
                      "div",
                      { className: "row" },
                      d.a.createElement(
                        "div",
                        { className: "col-lg-6 grid-margin stretch-card" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body" },
                            d.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Basic Table",
                            ),
                            d.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Add className ",
                              d.a.createElement("code", null, ".table"),
                            ),
                            d.a.createElement(
                              "div",
                              { className: "table-responsive" },
                              d.a.createElement(
                                "table",
                                { className: "table" },
                                d.a.createElement(
                                  "thead",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("th", null, "Profile"),
                                    d.a.createElement("th", null, "VatNo."),
                                    d.a.createElement("th", null, "Created"),
                                    d.a.createElement("th", null, "Status"),
                                  ),
                                ),
                                d.a.createElement(
                                  "tbody",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, "Jacob"),
                                    d.a.createElement("td", null, "53275531"),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      "12 May 2017",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "label",
                                        { className: "badge badge-danger" },
                                        "Pending",
                                      ),
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, "Messsy"),
                                    d.a.createElement("td", null, "53275532"),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      "15 May 2017",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "label",
                                        { className: "badge badge-warning" },
                                        "In progress",
                                      ),
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, "John"),
                                    d.a.createElement("td", null, "53275533"),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      "14 May 2017",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "label",
                                        { className: "badge badge-info" },
                                        "Fixed",
                                      ),
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, "Peter"),
                                    d.a.createElement("td", null, "53275534"),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      "16 May 2017",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "label",
                                        { className: "badge badge-success" },
                                        "Completed",
                                      ),
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, "Dave"),
                                    d.a.createElement("td", null, "53275535"),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      "20 May 2017",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "label",
                                        { className: "badge badge-warning" },
                                        "In progress",
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      d.a.createElement(
                        "div",
                        { className: "col-lg-6 grid-margin stretch-card" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body" },
                            d.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Hoverable Table",
                            ),
                            d.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Add className ",
                              d.a.createElement("code", null, ".table-hover"),
                            ),
                            d.a.createElement(
                              "div",
                              { className: "table-responsive" },
                              d.a.createElement(
                                "table",
                                { className: "table table-hover" },
                                d.a.createElement(
                                  "thead",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("th", null, "User"),
                                    d.a.createElement("th", null, "Product"),
                                    d.a.createElement("th", null, "Sale"),
                                    d.a.createElement("th", null, "Status"),
                                  ),
                                ),
                                d.a.createElement(
                                  "tbody",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, "Jacob"),
                                    d.a.createElement("td", null, "Photoshop"),
                                    d.a.createElement(
                                      "td",
                                      { className: "text-danger" },
                                      " 28.76% ",
                                      d.a.createElement("i", {
                                        className: "mdi mdi-arrow-down",
                                      }),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "label",
                                        { className: "badge badge-danger" },
                                        "Pending",
                                      ),
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, "Messsy"),
                                    d.a.createElement("td", null, "Flash"),
                                    d.a.createElement(
                                      "td",
                                      { className: "text-danger" },
                                      " 21.06% ",
                                      d.a.createElement("i", {
                                        className: "mdi mdi-arrow-down",
                                      }),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "label",
                                        { className: "badge badge-warning" },
                                        "In progress",
                                      ),
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, "John"),
                                    d.a.createElement("td", null, "Premier"),
                                    d.a.createElement(
                                      "td",
                                      { className: "text-danger" },
                                      " 35.00% ",
                                      d.a.createElement("i", {
                                        className: "mdi mdi-arrow-down",
                                      }),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "label",
                                        { className: "badge badge-info" },
                                        "Fixed",
                                      ),
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, "Peter"),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      "After effects",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      { className: "text-success" },
                                      " 82.00% ",
                                      d.a.createElement("i", {
                                        className: "mdi mdi-arrow-up",
                                      }),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "label",
                                        { className: "badge badge-success" },
                                        "Completed",
                                      ),
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, "Dave"),
                                    d.a.createElement("td", null, "53275535"),
                                    d.a.createElement(
                                      "td",
                                      { className: "text-success" },
                                      " 98.05% ",
                                      d.a.createElement("i", {
                                        className: "mdi mdi-arrow-up",
                                      }),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "label",
                                        { className: "badge badge-warning" },
                                        "In progress",
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      d.a.createElement(
                        "div",
                        { className: "col-lg-12 grid-margin stretch-card" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body" },
                            d.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Striped Table",
                            ),
                            d.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Add className ",
                              d.a.createElement("code", null, ".table-striped"),
                            ),
                            d.a.createElement(
                              "div",
                              { className: "table-responsive" },
                              d.a.createElement(
                                "table",
                                { className: "table table-striped" },
                                d.a.createElement(
                                  "thead",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("th", null, " User "),
                                    d.a.createElement(
                                      "th",
                                      null,
                                      " First name ",
                                    ),
                                    d.a.createElement("th", null, " Progress "),
                                    d.a.createElement("th", null, " Amount "),
                                    d.a.createElement("th", null, " Deadline "),
                                  ),
                                ),
                                d.a.createElement(
                                  "tbody",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement(
                                      "td",
                                      { className: "py-1" },
                                      d.a.createElement("img", {
                                        src: t(60),
                                        alt: "user icon",
                                      }),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Herman Beck ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "success",
                                        now: 25,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $ 77.99 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 15, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement(
                                      "td",
                                      { className: "py-1" },
                                      d.a.createElement("img", {
                                        src: t(84),
                                        alt: "user icon",
                                      }),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Messsy Adam ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "danger",
                                        now: 75,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $245.30 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " July 1, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement(
                                      "td",
                                      { className: "py-1" },
                                      d.a.createElement("img", {
                                        src: t(81),
                                        alt: "user icon",
                                      }),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " John Richards ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "warning",
                                        now: 90,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $138.00 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Apr 12, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement(
                                      "td",
                                      { className: "py-1" },
                                      d.a.createElement("img", {
                                        src: t(82),
                                        alt: "user icon",
                                      }),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Peter Meggik ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "primary",
                                        now: 50,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $ 77.99 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 15, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement(
                                      "td",
                                      { className: "py-1" },
                                      d.a.createElement("img", {
                                        src: t(85),
                                        alt: "user icon",
                                      }),
                                    ),
                                    d.a.createElement("td", null, " Edward "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "danger",
                                        now: 60,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $ 160.25 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 03, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement(
                                      "td",
                                      { className: "py-1" },
                                      d.a.createElement("img", {
                                        src: t(86),
                                        alt: "user icon",
                                      }),
                                    ),
                                    d.a.createElement("td", null, " John Doe "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "info",
                                        now: 65,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $ 123.21 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " April 05, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement(
                                      "td",
                                      { className: "py-1" },
                                      d.a.createElement("img", {
                                        src: t(355),
                                        alt: "user icon",
                                      }),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Henry Tom ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "warning",
                                        now: 20,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $ 150.00 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " June 16, 2015 ",
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      d.a.createElement(
                        "div",
                        { className: "col-lg-12 grid-margin stretch-card" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body" },
                            d.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Bordered table",
                            ),
                            d.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Add className ",
                              d.a.createElement(
                                "code",
                                null,
                                ".table-bordered",
                              ),
                            ),
                            d.a.createElement(
                              "div",
                              { className: "table-responsive" },
                              d.a.createElement(
                                "table",
                                { className: "table table-bordered" },
                                d.a.createElement(
                                  "thead",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("th", null, " # "),
                                    d.a.createElement(
                                      "th",
                                      null,
                                      " First name ",
                                    ),
                                    d.a.createElement("th", null, " Progress "),
                                    d.a.createElement("th", null, " Amount "),
                                    d.a.createElement("th", null, " Deadline "),
                                  ),
                                ),
                                d.a.createElement(
                                  "tbody",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 1 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Herman Beck ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "success",
                                        now: 25,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $ 77.99 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 15, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 2 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Messsy Adam ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "danger",
                                        now: 75,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $245.30 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " July 1, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 3 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " John Richards ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "warning",
                                        now: 90,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $138.00 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Apr 12, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 4 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Peter Meggik ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "primary",
                                        now: 50,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $ 77.99 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 15, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 5 "),
                                    d.a.createElement("td", null, " Edward "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "danger",
                                        now: 35,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $ 160.25 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 03, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 6 "),
                                    d.a.createElement("td", null, " John Doe "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, {
                                        variant: "info",
                                        now: 65,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $ 123.21 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " April 05, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 7 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Henry Tom ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(s.a, { now: 60 }),
                                      d.a.createElement(s.a, {
                                        variant: "warning",
                                        now: 20,
                                      }),
                                    ),
                                    d.a.createElement("td", null, " $ 150.00 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " June 16, 2015 ",
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      d.a.createElement(
                        "div",
                        { className: "col-lg-12 grid-margin stretch-card" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body" },
                            d.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Inverse table",
                            ),
                            d.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Add className ",
                              d.a.createElement("code", null, ".table-dark"),
                            ),
                            d.a.createElement(
                              "div",
                              { className: "table-responsive" },
                              d.a.createElement(
                                "table",
                                { className: "table table-dark" },
                                d.a.createElement(
                                  "thead",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("th", null, " # "),
                                    d.a.createElement(
                                      "th",
                                      null,
                                      " First name ",
                                    ),
                                    d.a.createElement("th", null, " Amount "),
                                    d.a.createElement("th", null, " Deadline "),
                                  ),
                                ),
                                d.a.createElement(
                                  "tbody",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 1 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Herman Beck ",
                                    ),
                                    d.a.createElement("td", null, " $ 77.99 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 15, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 2 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Messsy Adam ",
                                    ),
                                    d.a.createElement("td", null, " $245.30 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " July 1, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 3 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " John Richards ",
                                    ),
                                    d.a.createElement("td", null, " $138.00 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Apr 12, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 4 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Peter Meggik ",
                                    ),
                                    d.a.createElement("td", null, " $ 77.99 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 15, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 5 "),
                                    d.a.createElement("td", null, " Edward "),
                                    d.a.createElement("td", null, " $ 160.25 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 03, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 6 "),
                                    d.a.createElement("td", null, " John Doe "),
                                    d.a.createElement("td", null, " $ 123.21 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " April 05, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("td", null, " 7 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Henry Tom ",
                                    ),
                                    d.a.createElement("td", null, " $ 150.00 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " June 16, 2015 ",
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      d.a.createElement(
                        "div",
                        { className: "col-lg-12 stretch-card" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body" },
                            d.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Table with contextual classNames",
                            ),
                            d.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Add className ",
                              d.a.createElement("code", null, ".table-{color}"),
                            ),
                            d.a.createElement(
                              "div",
                              { className: "table-responsive" },
                              d.a.createElement(
                                "table",
                                { className: "table table-bordered" },
                                d.a.createElement(
                                  "thead",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("th", null, " # "),
                                    d.a.createElement(
                                      "th",
                                      null,
                                      " First name ",
                                    ),
                                    d.a.createElement("th", null, " Product "),
                                    d.a.createElement("th", null, " Amount "),
                                    d.a.createElement("th", null, " Deadline "),
                                  ),
                                ),
                                d.a.createElement(
                                  "tbody",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    { className: "table-info" },
                                    d.a.createElement("td", null, " 1 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Herman Beck ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Photoshop ",
                                    ),
                                    d.a.createElement("td", null, " $ 77.99 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 15, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    { className: "table-warning" },
                                    d.a.createElement("td", null, " 2 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Messsy Adam ",
                                    ),
                                    d.a.createElement("td", null, " Flash "),
                                    d.a.createElement("td", null, " $245.30 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " July 1, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    { className: "table-danger" },
                                    d.a.createElement("td", null, " 3 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " John Richards ",
                                    ),
                                    d.a.createElement("td", null, " Premeire "),
                                    d.a.createElement("td", null, " $138.00 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Apr 12, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    { className: "table-success" },
                                    d.a.createElement("td", null, " 4 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Peter Meggik ",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " After effects ",
                                    ),
                                    d.a.createElement("td", null, " $ 77.99 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 15, 2015 ",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    { className: "table-primary" },
                                    d.a.createElement("td", null, " 5 "),
                                    d.a.createElement("td", null, " Edward "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " Illustrator ",
                                    ),
                                    d.a.createElement("td", null, " $ 160.25 "),
                                    d.a.createElement(
                                      "td",
                                      null,
                                      " May 03, 2015 ",
                                    ),
                                  ),
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
            m
          );
        })(m.Component);
      a.default = E;
    },
  },
]);
//# sourceMappingURL=6.f813c679.chunk.js.map
