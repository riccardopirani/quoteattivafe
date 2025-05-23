(window["webpackJsonpstar-admin-pro-react"] =
  window["webpackJsonpstar-admin-pro-react"] || []).push([
  [9],
  {
    372: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(10),
        l = t(11),
        r = t(13),
        m = t(12),
        c = t(0),
        o = t.n(c),
        i = t(116),
        u = t(1),
        d = t(3),
        E = t(4),
        s = t.n(E),
        p = t(6),
        g = o.a.forwardRef(function (e, a) {
          var t = e.bsPrefix,
            n = e.size,
            l = e.toggle,
            r = e.vertical,
            m = e.className,
            c = e.as,
            i = void 0 === c ? "div" : c,
            E = Object(d.a)(e, [
              "bsPrefix",
              "size",
              "toggle",
              "vertical",
              "className",
              "as",
            ]),
            g = Object(p.a)(t, "btn-group"),
            b = g;
          return (
            r && (b = g + "-vertical"),
            o.a.createElement(
              i,
              Object(u.a)({}, E, {
                ref: a,
                className: s()(m, b, n && g + "-" + n, l && g + "-toggle"),
              }),
            )
          );
        });
      (g.displayName = "ButtonGroup"),
        (g.defaultProps = { vertical: !1, toggle: !1, role: "group" });
      var b = g;
      t.d(a, "Dropdowns", function () {
        return I;
      });
      var I = (function (e) {
        Object(r.a)(t, e);
        var a = Object(m.a)(t);
        function t() {
          return Object(n.a)(this, t), a.apply(this, arguments);
        }
        return (
          Object(l.a)(t, [
            {
              key: "render",
              value: function () {
                return o.a.createElement(
                  "div",
                  null,
                  o.a.createElement(
                    "div",
                    { className: "page-header" },
                    o.a.createElement(
                      "h3",
                      { className: "page-title" },
                      "Dropdowns",
                    ),
                    o.a.createElement(
                      "nav",
                      { "aria-label": "breadcrumb" },
                      o.a.createElement(
                        "ol",
                        { className: "breadcrumb" },
                        o.a.createElement(
                          "li",
                          { className: "breadcrumb-item" },
                          o.a.createElement(
                            "a",
                            {
                              href: "!#",
                              onClick: function (e) {
                                return e.preventDefault();
                              },
                            },
                            "UI Elements",
                          ),
                        ),
                        o.a.createElement(
                          "li",
                          {
                            className: "breadcrumb-item active",
                            "aria-current": "page",
                          },
                          "Dropdowns",
                        ),
                      ),
                    ),
                  ),
                  o.a.createElement(
                    "div",
                    { className: "row" },
                    o.a.createElement(
                      "div",
                      { className: "col-lg-12 grid-margin" },
                      o.a.createElement(
                        "div",
                        { className: "card" },
                        o.a.createElement(
                          "div",
                          { className: "card-body" },
                          o.a.createElement(
                            "h4",
                            { className: "card-title" },
                            "Basic dropdown",
                          ),
                          o.a.createElement(
                            "p",
                            { className: "card-description" },
                            "Wrap the dropdown\u2019s toggle (your button or link) and the dropdown menu within ",
                            o.a.createElement("code", null, ".dropdown"),
                          ),
                          o.a.createElement(
                            "div",
                            { className: "template-demo" },
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-primary",
                                  id: "dropdownMenuButton1",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-secondary",
                                  id: "dropdownMenuButton2",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-danger",
                                  id: "dropdownMenuButton3",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-warning",
                                  id: "dropdownMenuButton4",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-success",
                                  id: "dropdownMenuButton5",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-info",
                                  id: "dropdownMenuButton6",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                          ),
                        ),
                        o.a.createElement(
                          "div",
                          { className: "card-body" },
                          o.a.createElement(
                            "h4",
                            { className: "card-title" },
                            "Dropdown outline",
                          ),
                          o.a.createElement(
                            "p",
                            { className: "card-description" },
                            "Add class ",
                            o.a.createElement(
                              "code",
                              null,
                              ".btn-outline-{color}",
                            ),
                            " to the button inside ",
                            o.a.createElement("code", null, ".dropdown"),
                          ),
                          o.a.createElement(
                            "div",
                            { className: "template-demo" },
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-outline-primary",
                                  id: "dropdownMenuOutlineButton1",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-outline-secondary",
                                  id: "dropdownMenuOutlineButton2",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-outline-danger",
                                  id: "dropdownMenuOutlineButton3",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-outline-warning",
                                  id: "dropdownMenuOutlineButton4",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-outline-success",
                                  id: "dropdownMenuOutlineButton5",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-outline-info",
                                  id: "dropdownMenuOutlineButton6",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    o.a.createElement(
                      "div",
                      { className: "col-md-6 grid-margin stretch-card" },
                      o.a.createElement(
                        "div",
                        { className: "card" },
                        o.a.createElement(
                          "div",
                          { className: "card-body" },
                          o.a.createElement(
                            "h4",
                            { className: "card-title" },
                            "Split button dropdowns",
                          ),
                          o.a.createElement(
                            "p",
                            { className: "card-description" },
                            "Wrap two buttons in ",
                            o.a.createElement("code", null, ".btn-group"),
                            " and add ",
                            o.a.createElement(
                              "code",
                              null,
                              ".dropdown-toggle-split",
                            ),
                            " to the toggling button",
                          ),
                          o.a.createElement(
                            "div",
                            { className: "template-demo" },
                            o.a.createElement(
                              i.a,
                              { as: b },
                              o.a.createElement(
                                "button",
                                {
                                  type: "button",
                                  className: "btn btn-primary",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant:
                                    "btn btn-primary dropdown-toggle-split",
                                  id: "dropdownMenuSplitButton1",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              { as: b },
                              o.a.createElement(
                                "button",
                                { type: "button", className: "btn btn-danger" },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant:
                                    "btn btn-danger dropdown-toggle dropdown-toggle-split",
                                  id: "dropdownMenuSplitButton2",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              { as: b },
                              o.a.createElement(
                                "button",
                                {
                                  type: "button",
                                  className: "btn btn-success",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant:
                                    "btn btn-success dropdown-toggle dropdown-toggle-split",
                                  id: "dropdownMenuSplitButton3",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              { as: b },
                              o.a.createElement(
                                "button",
                                {
                                  type: "button",
                                  className: "btn btn-secondary",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant:
                                    "btn btn-secondary dropdown-toggle dropdown-toggle-split",
                                  id: "dropdownMenuSplitButton4",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              { as: b },
                              o.a.createElement(
                                "button",
                                { type: "button", className: "btn btn-info" },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant:
                                    "btn btn-info dropdown-toggle dropdown-toggle-split",
                                  id: "dropdownMenuSplitButton5",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              { as: b },
                              o.a.createElement(
                                "button",
                                {
                                  type: "button",
                                  className: "btn btn-warning",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant:
                                    "btn btn-warning dropdown-toggle dropdown-toggle-split",
                                  id: "dropdownMenuSplitButton6",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    o.a.createElement(
                      "div",
                      { className: "col-md-6 grid-margin stretch-card" },
                      o.a.createElement(
                        "div",
                        { className: "card" },
                        o.a.createElement(
                          "div",
                          { className: "card-body" },
                          o.a.createElement(
                            "h4",
                            { className: "card-title" },
                            "Icon dropdowns",
                          ),
                          o.a.createElement(
                            "p",
                            { className: "card-description" },
                            "Add icon tags instead of text",
                          ),
                          o.a.createElement(
                            "div",
                            { className: "row" },
                            o.a.createElement(
                              "div",
                              { className: "col-12" },
                              o.a.createElement(
                                "div",
                                {
                                  className:
                                    "template-demo d-flex justify-content-between",
                                },
                                o.a.createElement(
                                  i.a,
                                  null,
                                  o.a.createElement(
                                    i.a.Toggle,
                                    {
                                      variant: "btn btn-warning",
                                      id: "dropdownMenuIconButton1",
                                    },
                                    o.a.createElement("i", {
                                      className: "mdi mdi-earth",
                                    }),
                                  ),
                                  o.a.createElement(
                                    i.a.Menu,
                                    null,
                                    o.a.createElement(
                                      i.a.Header,
                                      null,
                                      "Settings",
                                    ),
                                    o.a.createElement(i.a.Item, null, "Action"),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Another action",
                                    ),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Something else here",
                                    ),
                                    o.a.createElement(i.a.Divider, null),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Separated link",
                                    ),
                                  ),
                                ),
                                o.a.createElement(
                                  i.a,
                                  null,
                                  o.a.createElement(
                                    i.a.Toggle,
                                    {
                                      variant: "btn btn-danger",
                                      id: "dropdownMenuIconButton2",
                                    },
                                    o.a.createElement("i", {
                                      className: "mdi mdi-trophy-outline",
                                    }),
                                  ),
                                  o.a.createElement(
                                    i.a.Menu,
                                    null,
                                    o.a.createElement(
                                      i.a.Header,
                                      null,
                                      "Settings",
                                    ),
                                    o.a.createElement(i.a.Item, null, "Action"),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Another action",
                                    ),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Something else here",
                                    ),
                                    o.a.createElement(i.a.Divider, null),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Separated link",
                                    ),
                                  ),
                                ),
                                o.a.createElement(
                                  i.a,
                                  null,
                                  o.a.createElement(
                                    i.a.Toggle,
                                    {
                                      variant: "btn btn-outline-info",
                                      id: "dropdownMenuIconButton3",
                                    },
                                    o.a.createElement("i", {
                                      className: "mdi mdi-clock",
                                    }),
                                  ),
                                  o.a.createElement(
                                    i.a.Menu,
                                    null,
                                    o.a.createElement(
                                      i.a.Header,
                                      null,
                                      "Settings",
                                    ),
                                    o.a.createElement(i.a.Item, null, "Action"),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Another action",
                                    ),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Something else here",
                                    ),
                                    o.a.createElement(i.a.Divider, null),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Separated link",
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          o.a.createElement(
                            "div",
                            { className: "row" },
                            o.a.createElement(
                              "div",
                              { className: "col-12" },
                              o.a.createElement(
                                "div",
                                {
                                  className:
                                    "template-demo d-flex justify-content-between",
                                },
                                o.a.createElement(
                                  i.a,
                                  null,
                                  o.a.createElement(
                                    i.a.Toggle,
                                    {
                                      variant: "btn btn-success",
                                      id: "dropdownMenuIconButton4",
                                    },
                                    o.a.createElement("i", {
                                      className: "mdi mdi-heart",
                                    }),
                                  ),
                                  o.a.createElement(
                                    i.a.Menu,
                                    null,
                                    o.a.createElement(
                                      i.a.Header,
                                      null,
                                      "Settings",
                                    ),
                                    o.a.createElement(i.a.Item, null, "Action"),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Another action",
                                    ),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Something else here",
                                    ),
                                    o.a.createElement(i.a.Divider, null),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Separated link",
                                    ),
                                  ),
                                ),
                                o.a.createElement(
                                  i.a,
                                  null,
                                  o.a.createElement(
                                    i.a.Toggle,
                                    {
                                      variant: "btn btn-warning",
                                      id: "dropdownMenuIconButton5",
                                    },
                                    o.a.createElement("i", {
                                      className: "mdi mdi-logout",
                                    }),
                                  ),
                                  o.a.createElement(
                                    i.a.Menu,
                                    null,
                                    o.a.createElement(
                                      i.a.Header,
                                      null,
                                      "Settings",
                                    ),
                                    o.a.createElement(i.a.Item, null, "Action"),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Another action",
                                    ),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Something else here",
                                    ),
                                    o.a.createElement(i.a.Divider, null),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Separated link",
                                    ),
                                  ),
                                ),
                                o.a.createElement(
                                  i.a,
                                  null,
                                  o.a.createElement(
                                    i.a.Toggle,
                                    {
                                      variant: "btn btn-primary",
                                      id: "dropdownMenuIconButton6",
                                    },
                                    o.a.createElement("i", {
                                      className: "mdi mdi-security",
                                    }),
                                  ),
                                  o.a.createElement(
                                    i.a.Menu,
                                    null,
                                    o.a.createElement(
                                      i.a.Header,
                                      null,
                                      "Settings",
                                    ),
                                    o.a.createElement(i.a.Item, null, "Action"),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Another action",
                                    ),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Something else here",
                                    ),
                                    o.a.createElement(i.a.Divider, null),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Separated link",
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          o.a.createElement(
                            "div",
                            { className: "row" },
                            o.a.createElement(
                              "div",
                              { className: "col-12" },
                              o.a.createElement(
                                "div",
                                {
                                  className:
                                    "template-demo d-flex justify-content-between",
                                },
                                o.a.createElement(
                                  i.a,
                                  null,
                                  o.a.createElement(
                                    i.a.Toggle,
                                    {
                                      variant: "btn btn-dark",
                                      id: "dropdownMenuIconButton7",
                                    },
                                    o.a.createElement("i", {
                                      className: "mdi mdi-account",
                                    }),
                                  ),
                                  o.a.createElement(
                                    i.a.Menu,
                                    null,
                                    o.a.createElement(
                                      i.a.Header,
                                      null,
                                      "Settings",
                                    ),
                                    o.a.createElement(i.a.Item, null, "Action"),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Another action",
                                    ),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Something else here",
                                    ),
                                    o.a.createElement(i.a.Divider, null),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Separated link",
                                    ),
                                  ),
                                ),
                                o.a.createElement(
                                  i.a,
                                  null,
                                  o.a.createElement(
                                    i.a.Toggle,
                                    {
                                      variant: "btn btn-info",
                                      id: "dropdownMenuIconButton8",
                                    },
                                    o.a.createElement("i", {
                                      className: "mdi mdi-bell",
                                    }),
                                  ),
                                  o.a.createElement(
                                    i.a.Menu,
                                    null,
                                    o.a.createElement(
                                      i.a.Header,
                                      null,
                                      "Settings",
                                    ),
                                    o.a.createElement(i.a.Item, null, "Action"),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Another action",
                                    ),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Something else here",
                                    ),
                                    o.a.createElement(i.a.Divider, null),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Separated link",
                                    ),
                                  ),
                                ),
                                o.a.createElement(
                                  i.a,
                                  null,
                                  o.a.createElement(
                                    i.a.Toggle,
                                    {
                                      variant: "btn btn-success",
                                      id: "dropdownMenuIconButton7",
                                    },
                                    o.a.createElement("i", {
                                      className: "mdi mdi-account",
                                    }),
                                  ),
                                  o.a.createElement(
                                    i.a.Menu,
                                    null,
                                    o.a.createElement(
                                      i.a.Header,
                                      null,
                                      "Settings",
                                    ),
                                    o.a.createElement(i.a.Item, null, "Action"),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Another action",
                                    ),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Something else here",
                                    ),
                                    o.a.createElement(i.a.Divider, null),
                                    o.a.createElement(
                                      i.a.Item,
                                      null,
                                      "Separated link",
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    o.a.createElement(
                      "div",
                      { className: "col-lg-6 grid-margin stretch-card" },
                      o.a.createElement(
                        "div",
                        { className: "card" },
                        o.a.createElement(
                          "div",
                          { className: "card-body" },
                          o.a.createElement(
                            "h4",
                            { className: "card-title" },
                            "Dropup variation",
                          ),
                          o.a.createElement(
                            "p",
                            { className: "card-description" },
                            "Add class ",
                            o.a.createElement("code", null, ".dropup"),
                          ),
                          o.a.createElement(
                            "div",
                            { className: "template-demo" },
                            o.a.createElement(
                              i.a,
                              { drop: "up", as: b },
                              o.a.createElement(
                                "button",
                                {
                                  type: "button",
                                  className: "btn btn-primary",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-primary",
                                  id: "dropupMenuSplitButton1",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              { drop: "up", as: b },
                              o.a.createElement(
                                "button",
                                { type: "button", className: "btn btn-danger" },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-danger",
                                  id: "dropupMenuSplitButton2",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              { drop: "up", as: b },
                              o.a.createElement(
                                "button",
                                {
                                  type: "button",
                                  className: "btn btn-success",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-success",
                                  id: "dropupMenuSplitButton3",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              { drop: "up", as: b },
                              o.a.createElement(
                                "button",
                                {
                                  type: "button",
                                  className: "btn btn-secondary",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-secondary",
                                  id: "dropupMenuSplitButton4",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              { drop: "up", as: b },
                              o.a.createElement(
                                "button",
                                { type: "button", className: "btn btn-info" },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-info",
                                  id: "dropupMenuSplitButton5",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              { drop: "up", as: b },
                              o.a.createElement(
                                "button",
                                {
                                  type: "button",
                                  className: "btn btn-warning",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-warning",
                                  id: "dropupMenuSplitButton6",
                                },
                                o.a.createElement(
                                  "span",
                                  { className: "sr-only" },
                                  "Toggle Dropdown",
                                ),
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    o.a.createElement(
                      "div",
                      { className: "col-lg-6 grid-margin stretch-card" },
                      o.a.createElement(
                        "div",
                        { className: "card" },
                        o.a.createElement(
                          "div",
                          { className: "card-body" },
                          o.a.createElement(
                            "h4",
                            { className: "card-title" },
                            "Dropdown sizes",
                          ),
                          o.a.createElement(
                            "p",
                            { className: "card-description" },
                            "Add class ",
                            o.a.createElement("code", null, ".btn-{size}"),
                            " to dropdown buttons",
                          ),
                          o.a.createElement(
                            "div",
                            { className: "template-demo mt-5" },
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-danger btn-lg",
                                  id: "dropdownMenuSizeButton1",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-danger",
                                  id: "dropdownMenuSizeButton2",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
                                ),
                              ),
                            ),
                            o.a.createElement(
                              i.a,
                              null,
                              o.a.createElement(
                                i.a.Toggle,
                                {
                                  variant: "btn btn-danger btn-sm",
                                  id: "dropdownMenuSizeButton3",
                                },
                                "Dropdown",
                              ),
                              o.a.createElement(
                                i.a.Menu,
                                null,
                                o.a.createElement(i.a.Header, null, "Settings"),
                                o.a.createElement(i.a.Item, null, "Action"),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Another action",
                                ),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Something else here",
                                ),
                                o.a.createElement(i.a.Divider, null),
                                o.a.createElement(
                                  i.a.Item,
                                  null,
                                  "Separated link",
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
          t
        );
      })(c.Component);
      a.default = I;
    },
  },
]);
//# sourceMappingURL=9.14bdaa13.chunk.js.map
