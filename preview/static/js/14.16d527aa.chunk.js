(window["webpackJsonpstar-admin-pro-react"] =
  window["webpackJsonpstar-admin-pro-react"] || []).push([
  [14],
  {
    364: function (e, a, l) {
      "use strict";
      l.r(a),
        l.d(a, "BasicElements", function () {
          return u;
        });
      var t = l(10),
        c = l(11),
        m = l(13),
        r = l(12),
        n = l(0),
        s = l.n(n),
        o = l(357),
        i = l(295),
        p = l.n(i),
        d = l(294),
        E = l.n(d),
        u = (function (e) {
          Object(m.a)(l, e);
          var a = Object(r.a)(l);
          function l() {
            var e;
            Object(t.a)(this, l);
            for (var c = arguments.length, m = new Array(c), r = 0; r < c; r++)
              m[r] = arguments[r];
            return (
              ((e = a.call.apply(a, [this].concat(m))).state = {
                startDate: new Date(),
              }),
              (e.handleChange = function (a) {
                e.setState({ startDate: a });
              }),
              e
            );
          }
          return (
            Object(c.a)(l, [
              {
                key: "componentDidMount",
                value: function () {
                  E.a.init();
                },
              },
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(
                      "div",
                      { className: "page-header" },
                      s.a.createElement(
                        "h3",
                        { className: "page-title" },
                        " Form elements ",
                      ),
                      s.a.createElement(
                        "nav",
                        { "aria-label": "breadcrumb" },
                        s.a.createElement(
                          "ol",
                          { className: "breadcrumb" },
                          s.a.createElement(
                            "li",
                            { className: "breadcrumb-item" },
                            s.a.createElement(
                              "a",
                              {
                                href: "!#",
                                onClick: function (e) {
                                  return e.preventDefault();
                                },
                              },
                              "Forms",
                            ),
                          ),
                          s.a.createElement(
                            "li",
                            {
                              className: "breadcrumb-item active",
                              "aria-current": "page",
                            },
                            "Form elements",
                          ),
                        ),
                      ),
                    ),
                    s.a.createElement(
                      "div",
                      { className: "row" },
                      s.a.createElement(
                        "div",
                        { className: "col-md-6 grid-margin stretch-card" },
                        s.a.createElement(
                          "div",
                          { className: "card" },
                          s.a.createElement(
                            "div",
                            { className: "card-body" },
                            s.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Default form",
                            ),
                            s.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Basic form layout ",
                            ),
                            s.a.createElement(
                              "form",
                              { className: "forms-sample" },
                              s.a.createElement(
                                o.a.Group,
                                null,
                                s.a.createElement(
                                  "label",
                                  { htmlFor: "exampleInputUsername1" },
                                  "Username",
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "text",
                                  id: "exampleInputUsername1",
                                  placeholder: "Username",
                                  size: "lg",
                                }),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                null,
                                s.a.createElement(
                                  "label",
                                  { htmlFor: "exampleInputEmail1" },
                                  "Email address",
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "email",
                                  className: "form-control",
                                  id: "exampleInputEmail1",
                                  placeholder: "Email",
                                }),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                null,
                                s.a.createElement(
                                  "label",
                                  { htmlFor: "exampleInputPassword1" },
                                  "Password",
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "password",
                                  className: "form-control",
                                  id: "exampleInputPassword1",
                                  placeholder: "Password",
                                }),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                null,
                                s.a.createElement(
                                  "label",
                                  { htmlFor: "exampleInputConfirmPassword1" },
                                  "Confirm Password",
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "password",
                                  className: "form-control",
                                  id: "exampleInputConfirmPassword1",
                                  placeholder: "Password",
                                }),
                              ),
                              s.a.createElement(
                                "div",
                                { className: "form-check" },
                                s.a.createElement(
                                  "label",
                                  { className: "form-check-label text-muted" },
                                  s.a.createElement("input", {
                                    type: "checkbox",
                                    className: "form-check-input",
                                  }),
                                  s.a.createElement("i", {
                                    className: "input-helper",
                                  }),
                                  "Remember me",
                                ),
                              ),
                              s.a.createElement(
                                "button",
                                {
                                  type: "submit",
                                  className: "btn btn-primary mr-2",
                                },
                                "Submit",
                              ),
                              s.a.createElement(
                                "button",
                                { className: "btn btn-light" },
                                "Cancel",
                              ),
                            ),
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "div",
                        { className: "col-md-6 grid-margin stretch-card" },
                        s.a.createElement(
                          "div",
                          { className: "card" },
                          s.a.createElement(
                            "div",
                            { className: "card-body" },
                            s.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Horizontal Form",
                            ),
                            s.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Horizontal form layout ",
                            ),
                            s.a.createElement(
                              "form",
                              { className: "forms-sample" },
                              s.a.createElement(
                                o.a.Group,
                                { className: "row" },
                                s.a.createElement(
                                  "label",
                                  {
                                    htmlFor: "exampleInputUsername2",
                                    className: "col-sm-3 col-form-label",
                                  },
                                  "Email",
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-sm-9" },
                                  s.a.createElement(o.a.Control, {
                                    type: "text",
                                    className: "form-control",
                                    id: "exampleInputUsername2",
                                    placeholder: "Username",
                                  }),
                                ),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                { className: "row" },
                                s.a.createElement(
                                  "label",
                                  {
                                    htmlFor: "exampleInputEmail2",
                                    className: "col-sm-3 col-form-label",
                                  },
                                  "Email",
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-sm-9" },
                                  s.a.createElement(o.a.Control, {
                                    type: "email",
                                    className: "form-control",
                                    id: "exampleInputEmail2",
                                    placeholder: "Email",
                                  }),
                                ),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                { className: "row" },
                                s.a.createElement(
                                  "label",
                                  {
                                    htmlFor: "exampleInputMobile",
                                    className: "col-sm-3 col-form-label",
                                  },
                                  "Mobile",
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-sm-9" },
                                  s.a.createElement(o.a.Control, {
                                    type: "text",
                                    className: "form-control",
                                    id: "exampleInputMobile",
                                    placeholder: "Mobile number",
                                  }),
                                ),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                { className: "row" },
                                s.a.createElement(
                                  "label",
                                  {
                                    htmlFor: "exampleInputPassword2",
                                    className: "col-sm-3 col-form-label",
                                  },
                                  "Password",
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-sm-9" },
                                  s.a.createElement(o.a.Control, {
                                    type: "password",
                                    className: "form-control",
                                    id: "exampleInputPassword2",
                                    placeholder: "Password",
                                  }),
                                ),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                { className: "row" },
                                s.a.createElement(
                                  "label",
                                  {
                                    htmlFor: "exampleInputConfirmPassword2",
                                    className: "col-sm-3 col-form-label",
                                  },
                                  "Re Password",
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-sm-9" },
                                  s.a.createElement(o.a.Control, {
                                    type: "password",
                                    className: "form-control",
                                    id: "exampleInputConfirmPassword2",
                                    placeholder: "Password",
                                  }),
                                ),
                              ),
                              s.a.createElement(
                                "div",
                                { className: "form-check" },
                                s.a.createElement(
                                  "label",
                                  { className: "form-check-label text-muted" },
                                  s.a.createElement("input", {
                                    type: "checkbox",
                                    className: "form-check-input",
                                  }),
                                  s.a.createElement("i", {
                                    className: "input-helper",
                                  }),
                                  "Remember me",
                                ),
                              ),
                              s.a.createElement(
                                "button",
                                {
                                  type: "submit",
                                  className: "btn btn-primary mr-2",
                                },
                                "Submit",
                              ),
                              s.a.createElement(
                                "button",
                                { className: "btn btn-light" },
                                "Cancel",
                              ),
                            ),
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "div",
                        { className: "col-12 grid-margin stretch-card" },
                        s.a.createElement(
                          "div",
                          { className: "card" },
                          s.a.createElement(
                            "div",
                            { className: "card-body" },
                            s.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Basic form elements",
                            ),
                            s.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Basic form elements ",
                            ),
                            s.a.createElement(
                              "form",
                              { className: "forms-sample" },
                              s.a.createElement(
                                o.a.Group,
                                null,
                                s.a.createElement(
                                  "label",
                                  { htmlFor: "exampleInputName1" },
                                  "Name",
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "text",
                                  className: "form-control",
                                  id: "exampleInputName1",
                                  placeholder: "Name",
                                }),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                null,
                                s.a.createElement(
                                  "label",
                                  { htmlFor: "exampleInputEmail3" },
                                  "Email address",
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "email",
                                  className: "form-control",
                                  id: "exampleInputEmail3",
                                  placeholder: "Email",
                                }),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                null,
                                s.a.createElement(
                                  "label",
                                  { htmlFor: "exampleInputPassword4" },
                                  "Password",
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "password",
                                  className: "form-control",
                                  id: "exampleInputPassword4",
                                  placeholder: "Password",
                                }),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                null,
                                s.a.createElement(
                                  "label",
                                  { htmlFor: "exampleSelectGender" },
                                  "Gender",
                                ),
                                s.a.createElement(
                                  "select",
                                  {
                                    className: "form-control",
                                    id: "exampleSelectGender",
                                  },
                                  s.a.createElement("option", null, "Male"),
                                  s.a.createElement("option", null, "Female"),
                                ),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                null,
                                s.a.createElement("label", null, "File upload"),
                                s.a.createElement(
                                  "div",
                                  { className: "custom-file" },
                                  s.a.createElement(o.a.Control, {
                                    type: "file",
                                    className: "form-control visibility-hidden",
                                    id: "customFileLang",
                                    lang: "es",
                                  }),
                                  s.a.createElement(
                                    "label",
                                    {
                                      className: "custom-file-label",
                                      htmlFor: "customFileLang",
                                    },
                                    "Upload image",
                                  ),
                                ),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                null,
                                s.a.createElement(
                                  "label",
                                  { htmlFor: "exampleInputCity1" },
                                  "City",
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "text",
                                  className: "form-control",
                                  id: "exampleInputCity1",
                                  placeholder: "Location",
                                }),
                              ),
                              s.a.createElement(
                                o.a.Group,
                                null,
                                s.a.createElement(
                                  "label",
                                  { htmlFor: "exampleTextarea1" },
                                  "Textarea",
                                ),
                                s.a.createElement("textarea", {
                                  className: "form-control",
                                  id: "exampleTextarea1",
                                  rows: "4",
                                }),
                              ),
                              s.a.createElement(
                                "button",
                                {
                                  type: "submit",
                                  className: "btn btn-primary mr-2",
                                },
                                "Submit",
                              ),
                              s.a.createElement(
                                "button",
                                { className: "btn btn-light" },
                                "Cancel",
                              ),
                            ),
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "div",
                        { className: "col-md-6 grid-margin stretch-card" },
                        s.a.createElement(
                          "div",
                          { className: "card" },
                          s.a.createElement(
                            "div",
                            { className: "card-body" },
                            s.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Input size",
                            ),
                            s.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Add classNames like ",
                              s.a.createElement(
                                "code",
                                null,
                                ".form-control-lg",
                              ),
                              " and ",
                              s.a.createElement(
                                "code",
                                null,
                                ".form-control-sm",
                              ),
                              ". ",
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement("label", null, "Large input"),
                              s.a.createElement(o.a.Control, {
                                type: "text",
                                className: "form-control-lg",
                                placeholder: "Username",
                                "aria-label": "Username",
                              }),
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement("label", null, "Default input"),
                              s.a.createElement(o.a.Control, {
                                type: "text",
                                className: "form-control",
                                placeholder: "Username",
                                "aria-label": "Username",
                              }),
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement("label", null, "Small input"),
                              s.a.createElement(o.a.Control, {
                                type: "text",
                                className: "form-control-sm",
                                placeholder: "Username",
                                "aria-label": "Username",
                              }),
                            ),
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "div",
                        { className: "col-md-6 grid-margin stretch-card" },
                        s.a.createElement(
                          "div",
                          { className: "card" },
                          s.a.createElement(
                            "div",
                            { className: "card-body" },
                            s.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Select size",
                            ),
                            s.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Add classNamees like ",
                              s.a.createElement(
                                "code",
                                null,
                                ".form-control-lg",
                              ),
                              " and ",
                              s.a.createElement(
                                "code",
                                null,
                                ".form-control-sm",
                              ),
                              ". ",
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement(
                                "label",
                                { htmlFor: "exampleFormControlSelect1" },
                                "Large select",
                              ),
                              s.a.createElement(
                                "select",
                                {
                                  className: "form-control form-control-lg",
                                  id: "exampleFormControlSelect1",
                                },
                                s.a.createElement("option", null, "1"),
                                s.a.createElement("option", null, "2"),
                                s.a.createElement("option", null, "3"),
                                s.a.createElement("option", null, "4"),
                                s.a.createElement("option", null, "5"),
                              ),
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement(
                                "label",
                                { htmlFor: "exampleFormControlSelect2" },
                                "Default select",
                              ),
                              s.a.createElement(
                                "select",
                                {
                                  className: "form-control",
                                  id: "exampleFormControlSelect2",
                                },
                                s.a.createElement("option", null, "1"),
                                s.a.createElement("option", null, "2"),
                                s.a.createElement("option", null, "3"),
                                s.a.createElement("option", null, "4"),
                                s.a.createElement("option", null, "5"),
                              ),
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement(
                                "label",
                                { htmlFor: "exampleFormControlSelect3" },
                                "Small select",
                              ),
                              s.a.createElement(
                                "select",
                                {
                                  className: "form-control form-control-sm",
                                  id: "exampleFormControlSelect3",
                                },
                                s.a.createElement("option", null, "1"),
                                s.a.createElement("option", null, "2"),
                                s.a.createElement("option", null, "3"),
                                s.a.createElement("option", null, "4"),
                                s.a.createElement("option", null, "5"),
                              ),
                            ),
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "div",
                        { className: "col-md-6 grid-margin stretch-card" },
                        s.a.createElement(
                          "div",
                          { className: "card" },
                          s.a.createElement(
                            "div",
                            { className: "card-body" },
                            s.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Basic input groups",
                            ),
                            s.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Basic bootstrap input groups ",
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement(
                                "div",
                                { className: "input-group" },
                                s.a.createElement(
                                  "div",
                                  { className: "input-group-prepend" },
                                  s.a.createElement(
                                    "span",
                                    { className: "input-group-text" },
                                    "@",
                                  ),
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "Username",
                                  "aria-label": "Username",
                                  "aria-describedby": "basic-addon1",
                                }),
                              ),
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement(
                                "div",
                                { className: "input-group" },
                                s.a.createElement(
                                  "div",
                                  { className: "input-group-prepend" },
                                  s.a.createElement(
                                    "span",
                                    {
                                      className:
                                        "input-group-text bg-primary text-white",
                                    },
                                    "$",
                                  ),
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "text",
                                  className: "form-control",
                                  "aria-label":
                                    "Amount (to the nearest dollar)",
                                }),
                                s.a.createElement(
                                  "div",
                                  { className: "input-group-append" },
                                  s.a.createElement(
                                    "span",
                                    { className: "input-group-text" },
                                    ".00",
                                  ),
                                ),
                              ),
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement(
                                "div",
                                { className: "input-group" },
                                s.a.createElement(
                                  "div",
                                  { className: "input-group-prepend" },
                                  s.a.createElement(
                                    "span",
                                    { className: "input-group-text" },
                                    "$",
                                  ),
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "input-group-prepend" },
                                  s.a.createElement(
                                    "span",
                                    { className: "input-group-text" },
                                    "0.00",
                                  ),
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "text",
                                  className: "form-control",
                                  "aria-label":
                                    "Amount (to the nearest dollar)",
                                }),
                              ),
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement(
                                "div",
                                { className: "input-group" },
                                s.a.createElement(o.a.Control, {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "Recipient's username",
                                  "aria-label": "Recipient's username",
                                  "aria-describedby": "basic-addon2",
                                }),
                                s.a.createElement(
                                  "div",
                                  { className: "input-group-append" },
                                  s.a.createElement(
                                    "button",
                                    {
                                      className: "btn btn-sm btn-primary",
                                      type: "button",
                                    },
                                    "Search",
                                  ),
                                ),
                              ),
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement(
                                "div",
                                { className: "input-group" },
                                s.a.createElement(
                                  "div",
                                  { className: "input-group-prepend" },
                                  s.a.createElement(
                                    "button",
                                    {
                                      className:
                                        "btn btn-sm btn-outline-primary dropdown-toggle",
                                      type: "button",
                                      "data-toggle": "dropdown",
                                      "aria-haspopup": "true",
                                      "aria-expanded": "false",
                                    },
                                    "Dropdown",
                                  ),
                                  s.a.createElement(
                                    "div",
                                    { className: "dropdown-menu" },
                                    s.a.createElement(
                                      "a",
                                      {
                                        className: "dropdown-item",
                                        href: "!#",
                                        onClick: function (e) {
                                          return e.preventDefault();
                                        },
                                      },
                                      "Action",
                                    ),
                                    s.a.createElement(
                                      "a",
                                      {
                                        className: "dropdown-item",
                                        href: "!#",
                                        onClick: function (e) {
                                          return e.preventDefault();
                                        },
                                      },
                                      "Another action",
                                    ),
                                    s.a.createElement(
                                      "a",
                                      {
                                        className: "dropdown-item",
                                        href: "!#",
                                        onClick: function (e) {
                                          return e.preventDefault();
                                        },
                                      },
                                      "Something else here",
                                    ),
                                    s.a.createElement("div", {
                                      role: "separator",
                                      className: "dropdown-divider",
                                    }),
                                    s.a.createElement(
                                      "a",
                                      {
                                        className: "dropdown-item",
                                        href: "!#",
                                        onClick: function (e) {
                                          return e.preventDefault();
                                        },
                                      },
                                      "Separated link",
                                    ),
                                  ),
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "text",
                                  className: "form-control",
                                  "aria-label":
                                    "Text input with dropdown button",
                                }),
                              ),
                            ),
                            s.a.createElement(
                              o.a.Group,
                              null,
                              s.a.createElement(
                                "div",
                                { className: "input-group" },
                                s.a.createElement(o.a.Control, {
                                  type: "text",
                                  className: "form-control",
                                  placeholder: "Find in facebook",
                                  "aria-label": "Recipient's username",
                                  "aria-describedby": "basic-addon2",
                                }),
                                s.a.createElement(
                                  "div",
                                  { className: "input-group-append" },
                                  s.a.createElement(
                                    "button",
                                    {
                                      className: "btn btn-sm btn-facebook",
                                      type: "button",
                                    },
                                    s.a.createElement("i", {
                                      className: "mdi mdi-facebook",
                                    }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "div",
                        { className: "col-md-6 grid-margin stretch-card" },
                        s.a.createElement(
                          "div",
                          { className: "card" },
                          s.a.createElement(
                            "div",
                            { className: "card-body" },
                            s.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Checkbox Controls",
                            ),
                            s.a.createElement(
                              "p",
                              { className: "card-description" },
                              "Checkbox and radio controls (default appearance is in primary color)",
                            ),
                            s.a.createElement(
                              "form",
                              null,
                              s.a.createElement(
                                "div",
                                { className: "row" },
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    null,
                                    s.a.createElement(
                                      "div",
                                      { className: "form-check" },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "checkbox",
                                          className: "form-check-input",
                                        }),
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                        "Default",
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "form-check" },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "checkbox",
                                          defaultChecked: !0,
                                          className: "form-check-input",
                                        }),
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                        "Checked",
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "form-check" },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "checkbox",
                                          disabled: !0,
                                          className: "form-check-input",
                                        }),
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                        "Disabled",
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "form-check" },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "checkbox",
                                          disabled: !0,
                                          defaultChecked: !0,
                                          className: "form-check-input",
                                        }),
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                        "Disabled checked",
                                      ),
                                    ),
                                  ),
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    null,
                                    s.a.createElement(
                                      "div",
                                      { className: "form-check" },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "radio",
                                          className: "form-check-input",
                                          name: "optionsRadios",
                                          id: "optionsRadios1",
                                          value: "",
                                        }),
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                        "Default",
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "form-check" },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "radio",
                                          className: "form-check-input",
                                          name: "optionsRadios",
                                          id: "optionsRadios2",
                                          value: "option2",
                                          defaultChecked: !0,
                                        }),
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                        "Selected",
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "form-check" },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "radio",
                                          className: "form-check-input",
                                          name: "optionsRadios2",
                                          id: "optionsRadios3",
                                          value: "option3",
                                          disabled: !0,
                                        }),
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                        "Disabled",
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "form-check" },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "radio",
                                          className: "form-check-input",
                                          name: "optionsRadios2",
                                          id: "optionsRadios4",
                                          value: "option4",
                                          disabled: !0,
                                          defaultChecked: !0,
                                        }),
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                        "Selected and disabled",
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          s.a.createElement(
                            "div",
                            { className: "card-body" },
                            s.a.createElement(
                              "p",
                              { className: "card-description" },
                              "Add className ",
                              s.a.createElement(
                                "code",
                                null,
                                ".form-check-{color{",
                              ),
                              " for checkbox and radio controls in theme colors",
                            ),
                            s.a.createElement(
                              "form",
                              null,
                              s.a.createElement(
                                "div",
                                { className: "row" },
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    null,
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "form-check form-check-primary",
                                      },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "checkbox",
                                          className: "form-check-input",
                                          defaultChecked: !0,
                                        }),
                                        " Primary",
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "form-check form-check-success",
                                      },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "checkbox",
                                          className: "form-check-input",
                                          defaultChecked: !0,
                                        }),
                                        " Success",
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      {
                                        className: "form-check form-check-info",
                                      },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "checkbox",
                                          className: "form-check-input",
                                          defaultChecked: !0,
                                        }),
                                        " Info",
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "form-check form-check-danger",
                                      },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "checkbox",
                                          className: "form-check-input",
                                          defaultChecked: !0,
                                        }),
                                        " Danger",
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "form-check form-check-warning",
                                      },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "checkbox",
                                          className: "form-check-input",
                                          defaultChecked: !0,
                                        }),
                                        " Warning",
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                      ),
                                    ),
                                  ),
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    null,
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "form-check form-check-primary",
                                      },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "radio",
                                          className: "form-check-input",
                                          name: "ExampleRadio1",
                                          id: "ExampleRadio1",
                                          defaultChecked: !0,
                                        }),
                                        " Primary",
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "form-check form-check-success",
                                      },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "radio",
                                          className: "form-check-input",
                                          name: "ExampleRadio2",
                                          id: "ExampleRadio2",
                                          defaultChecked: !0,
                                        }),
                                        " Success",
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      {
                                        className: "form-check form-check-info",
                                      },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "radio",
                                          className: "form-check-input",
                                          name: "ExampleRadio3",
                                          id: "ExampleRadio3",
                                          defaultChecked: !0,
                                        }),
                                        " Info",
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "form-check form-check-danger",
                                      },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "radio",
                                          className: "form-check-input",
                                          name: "ExampleRadio4",
                                          id: "ExampleRadio4",
                                          defaultChecked: !0,
                                        }),
                                        " Danger",
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "form-check form-check-warning",
                                      },
                                      s.a.createElement(
                                        "label",
                                        { className: "form-check-label" },
                                        s.a.createElement("input", {
                                          type: "radio",
                                          className: "form-check-input",
                                          name: "ExampleRadio5",
                                          id: "ExampleRadio5",
                                          defaultChecked: !0,
                                        }),
                                        " Warning",
                                        s.a.createElement("i", {
                                          className: "input-helper",
                                        }),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "div",
                        { className: "col-12 grid-margin stretch-card" },
                        s.a.createElement(
                          "div",
                          { className: "card" },
                          s.a.createElement(
                            "div",
                            { className: "card-body" },
                            s.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Inline forms",
                            ),
                            s.a.createElement(
                              "p",
                              { className: "card-description" },
                              " Use the ",
                              s.a.createElement("code", null, ".form-inline"),
                              " className to display a series of labels, form controls, and buttons on a single horizontal row ",
                            ),
                            s.a.createElement(
                              "form",
                              { className: "form-inline" },
                              s.a.createElement(
                                "label",
                                {
                                  className: "sr-only",
                                  htmlFor: "inlineFormInputName2",
                                },
                                "Name",
                              ),
                              s.a.createElement(o.a.Control, {
                                type: "text",
                                className: "form-control mb-2 mr-sm-2",
                                id: "inlineFormInputName2",
                                placeholder: "Jane Doe",
                              }),
                              s.a.createElement(
                                "label",
                                {
                                  className: "sr-only",
                                  htmlFor: "inlineFormInputGroupUsername2",
                                },
                                "Username",
                              ),
                              s.a.createElement(
                                "div",
                                { className: "input-group mb-2 mr-sm-2" },
                                s.a.createElement(
                                  "div",
                                  { className: "input-group-prepend" },
                                  s.a.createElement(
                                    "div",
                                    { className: "input-group-text" },
                                    "@",
                                  ),
                                ),
                                s.a.createElement(o.a.Control, {
                                  type: "text",
                                  className: "form-control",
                                  id: "inlineFormInputGroupUsername2",
                                  placeholder: "Username",
                                }),
                              ),
                              s.a.createElement(
                                "div",
                                { className: "form-check mx-sm-2" },
                                s.a.createElement(
                                  "label",
                                  { className: "form-check-label" },
                                  s.a.createElement("input", {
                                    type: "checkbox",
                                    className: "form-check-input",
                                    defaultChecked: !0,
                                  }),
                                  " Remember me",
                                  s.a.createElement("i", {
                                    className: "input-helper",
                                  }),
                                ),
                              ),
                              s.a.createElement(
                                "button",
                                {
                                  type: "submit",
                                  className: "btn btn-primary mb-2",
                                },
                                "Submit",
                              ),
                            ),
                          ),
                        ),
                      ),
                      s.a.createElement(
                        "div",
                        { className: "col-12 grid-margin" },
                        s.a.createElement(
                          "div",
                          { className: "card" },
                          s.a.createElement(
                            "div",
                            { className: "card-body" },
                            s.a.createElement(
                              "h4",
                              { className: "card-title" },
                              "Horizontal Two column",
                            ),
                            s.a.createElement(
                              "form",
                              { className: "form-sample" },
                              s.a.createElement(
                                "p",
                                { className: "card-description" },
                                " Personal info ",
                              ),
                              s.a.createElement(
                                "div",
                                { className: "row" },
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "First Name",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-9" },
                                      s.a.createElement(o.a.Control, {
                                        type: "text",
                                      }),
                                    ),
                                  ),
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "Last Name",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-9" },
                                      s.a.createElement(o.a.Control, {
                                        type: "text",
                                      }),
                                    ),
                                  ),
                                ),
                              ),
                              s.a.createElement(
                                "div",
                                { className: "row" },
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "Gender",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-9" },
                                      s.a.createElement(
                                        "select",
                                        { className: "form-control" },
                                        s.a.createElement(
                                          "option",
                                          null,
                                          "Male",
                                        ),
                                        s.a.createElement(
                                          "option",
                                          null,
                                          "Female",
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "Date of Birth",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-9" },
                                      s.a.createElement(p.a, {
                                        className: "form-control w-100",
                                        selected: this.state.startDate,
                                        onChange: this.handleChange,
                                      }),
                                    ),
                                  ),
                                ),
                              ),
                              s.a.createElement(
                                "div",
                                { className: "row" },
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "Category",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-9" },
                                      s.a.createElement(
                                        "select",
                                        { className: "form-control" },
                                        s.a.createElement(
                                          "option",
                                          null,
                                          "Category1",
                                        ),
                                        s.a.createElement(
                                          "option",
                                          null,
                                          "Category2",
                                        ),
                                        s.a.createElement(
                                          "option",
                                          null,
                                          "Category3",
                                        ),
                                        s.a.createElement(
                                          "option",
                                          null,
                                          "Category4",
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "Membership",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-4" },
                                      s.a.createElement(
                                        "div",
                                        { className: "form-check" },
                                        s.a.createElement(
                                          "label",
                                          { className: "form-check-label" },
                                          s.a.createElement("input", {
                                            type: "radio",
                                            className: "form-check-input",
                                            name: "ExampleRadio4",
                                            id: "membershipRadios1",
                                            defaultChecked: !0,
                                          }),
                                          " Free",
                                          s.a.createElement("i", {
                                            className: "input-helper",
                                          }),
                                        ),
                                      ),
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-5" },
                                      s.a.createElement(
                                        "div",
                                        { className: "form-check" },
                                        s.a.createElement(
                                          "label",
                                          { className: "form-check-label" },
                                          s.a.createElement("input", {
                                            type: "radio",
                                            className: "form-check-input",
                                            name: "ExampleRadio4",
                                            id: "membershipRadios2",
                                          }),
                                          " Proffessional",
                                          s.a.createElement("i", {
                                            className: "input-helper",
                                          }),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                              s.a.createElement(
                                "p",
                                { className: "card-description" },
                                " Address ",
                              ),
                              s.a.createElement(
                                "div",
                                { className: "row" },
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "Address 1",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-9" },
                                      s.a.createElement(o.a.Control, {
                                        type: "text",
                                      }),
                                    ),
                                  ),
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "State 1",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-9" },
                                      s.a.createElement(o.a.Control, {
                                        type: "text",
                                      }),
                                    ),
                                  ),
                                ),
                              ),
                              s.a.createElement(
                                "div",
                                { className: "row" },
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "Address 2",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-9" },
                                      s.a.createElement(o.a.Control, {
                                        type: "text",
                                      }),
                                    ),
                                  ),
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "Postcode",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-9" },
                                      s.a.createElement(o.a.Control, {
                                        type: "text",
                                      }),
                                    ),
                                  ),
                                ),
                              ),
                              s.a.createElement(
                                "div",
                                { className: "row" },
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "Cirt",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-9" },
                                      s.a.createElement(o.a.Control, {
                                        type: "text",
                                      }),
                                    ),
                                  ),
                                ),
                                s.a.createElement(
                                  "div",
                                  { className: "col-md-6" },
                                  s.a.createElement(
                                    o.a.Group,
                                    { className: "row" },
                                    s.a.createElement(
                                      "label",
                                      { className: "col-sm-3 col-form-label" },
                                      "Country",
                                    ),
                                    s.a.createElement(
                                      "div",
                                      { className: "col-sm-9" },
                                      s.a.createElement(
                                        "select",
                                        { className: "form-control" },
                                        s.a.createElement(
                                          "option",
                                          null,
                                          "America",
                                        ),
                                        s.a.createElement(
                                          "option",
                                          null,
                                          "Italy",
                                        ),
                                        s.a.createElement(
                                          "option",
                                          null,
                                          "Russia",
                                        ),
                                        s.a.createElement(
                                          "option",
                                          null,
                                          "Britain",
                                        ),
                                      ),
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
            l
          );
        })(n.Component);
      a.default = u;
    },
  },
]);
//# sourceMappingURL=14.16d527aa.chunk.js.map
