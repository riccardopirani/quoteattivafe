(window["webpackJsonpstar-admin-pro-react"] =
  window["webpackJsonpstar-admin-pro-react"] || []).push([
  [11],
  {
    362: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "Dashboard", function () {
          return v;
        });
      var l = t(30),
        r = t(55),
        s = t(10),
        n = t(11),
        c = t(28),
        m = t(13),
        i = t(12),
        o = t(0),
        d = t.n(o),
        E = t(153),
        u = t(116),
        b = t(293),
        p = t(287),
        g = t.n(p),
        h = t(292),
        f = { CN: 1e5, IN: 9900, SA: 86, EG: 70, SE: 0, FI: 0, FR: 0, US: 20 },
        v = (function (e) {
          Object(m.a)(o, e);
          var a = Object(i.a)(o);
          function o(e) {
            var t;
            return (
              Object(s.a)(this, o),
              ((t = a.call(this, e)).changeChartOneData = function (e) {
                var a = e.target.id;
                t.state.active === a
                  ? t.setState({ active: "" })
                  : t.setState({ active: a });
                var l = t.state.datasets[0],
                  s = t.state.datasets[1],
                  n = Object(r.a)({}, l),
                  c = Object(r.a)({}, s);
                (n.data = [60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170]),
                  (c.data = [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135]);
                var m = { datasets: [n, c] };
                try {
                  t.setState(m);
                } catch (e) {
                  throw Error(e);
                }
              }),
              (t.changeChartTwoData = function (e) {
                var a = e.target.id;
                t.state.active === a
                  ? t.setState({ active: "" })
                  : t.setState({ active: a });
                var l = t.state.datasets[0],
                  s = t.state.datasets[1],
                  n = Object(r.a)({}, l),
                  c = Object(r.a)({}, s);
                (n.data = [130, 145, 155, 60, 75, 65, 130, 110, 145, 149, 170]),
                  (c.data = [0, 70, 52, 90, 25, 20, 40, 70, 49, 94, 110, 135]),
                  console.log("this is:", n.data),
                  console.log("this is:", c.data);
                var m = { datasets: [n, c] };
                try {
                  t.setState(m);
                } catch (e) {
                  throw Error(e);
                }
              }),
              (t.changeChartThreeData = function (e) {
                var a = e.target.id;
                t.state.active === a
                  ? t.setState({ active: "" })
                  : t.setState({ active: a });
                var l = t.state.datasets[0],
                  s = t.state.datasets[1],
                  n = Object(r.a)({}, l),
                  c = Object(r.a)({}, s);
                (n.data = [130, 75, 65, 130, 110, 145, 155, 60, 145, 149, 170]),
                  (c.data = [0, 70, 52, 94, 110, 135, 90, 25, 20, 40, 70, 49]),
                  console.log("this is:", n.data),
                  console.log("this is:", c.data);
                var m = { datasets: [n, c] };
                try {
                  t.setState(m);
                } catch (e) {
                  throw Error(e);
                }
              }),
              (t.changeChartFourData = function (e) {
                var a = e.target.id;
                t.state.active === a
                  ? t.setState({ active: "" })
                  : t.setState({ active: a });
                var l = t.state.datasets[0],
                  s = t.state.datasets[1],
                  n = Object(r.a)({}, l),
                  c = Object(r.a)({}, s);
                (n.data = [130, 145, 65, 130, 75, 145, 149, 170, 110, 155, 60]),
                  (c.data = [0, 70, 90, 25, 40, 20, 94, 110, 135, 70, 49, 52]),
                  console.log("this is:", n.data),
                  console.log("this is:", c.data);
                var m = { datasets: [n, c] };
                try {
                  t.setState(m);
                } catch (e) {
                  throw Error(e);
                }
              }),
              (t.usersDoughnutChartData = {
                datasets: [
                  {
                    data: [80, 34, 100],
                    backgroundColor: ["#19d895", "#2196f3", "#dde4eb"],
                    borderColor: ["#19d895", "#2196f3", "#dde4eb"],
                  },
                ],
                labels: ["Request", "Email"],
              }),
              (t.usersDoughnutChartOptions = {
                cutoutPercentage: 70,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                responsive: !0,
                maintainAspectRatio: !0,
                showScale: !0,
                legend: { display: !1 },
                layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
              }),
              (t.amountDueBarData = {
                labels: [
                  "Day 1",
                  "Day 2",
                  "Day 3",
                  "Day 4",
                  "Day 5",
                  "Day 6",
                  "Day 7",
                  "Day 8",
                  "Day 9",
                  "Day 10",
                ],
                datasets: [
                  {
                    label: "Profit",
                    data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
                    backgroundColor: [
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                    ],
                    borderColor: [
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                      "#2196f3",
                    ],
                    borderWidth: 2,
                    fill: !0,
                  },
                ],
              }),
              (t.amountDueBarOptions = {
                layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
                scales: {
                  responsive: !0,
                  maintainAspectRatio: !0,
                  yAxes: [
                    {
                      display: !1,
                      gridLines: { color: "rgba(0, 0, 0, 0.03)" },
                    },
                  ],
                  xAxes: [
                    {
                      display: !1,
                      barPercentage: 0.4,
                      gridLines: { display: !1 },
                    },
                  ],
                },
                legend: { display: !1 },
              }),
              (t.totalRevenueData = {
                labels: [
                  "Day01",
                  "Day02",
                  "Day03",
                  "Day04",
                  "Day05",
                  "Day06",
                  "Day07",
                  "Day08",
                  "Day09",
                  "Day10",
                  "Day11",
                  "Day12",
                  "Day13",
                  "Day14",
                  "Day15",
                  "Day16",
                  "Day17",
                  "Day18",
                  "Day19",
                  "Day20",
                  "Day21",
                  "Day22",
                  "Day23",
                  "Day24",
                  "Day25",
                  "Day26",
                  "Day27",
                  "Day28",
                  "Day29",
                  "Day30",
                  "Day31",
                  "Day32",
                  "Day33",
                  "Day34",
                  "Day35",
                  "Day36",
                  "Day37",
                  "Day38",
                  "Day39",
                  "Day40",
                  "Day41",
                  "Day42",
                  "Day43",
                  "Day44",
                  "Day45",
                  "Day46",
                  "Day47",
                  "Day48",
                  "Day49",
                  "Day50",
                  "Day51",
                  "Day52",
                  "Day53",
                  "Day54",
                  "Day55",
                  "Day56",
                  "Day57",
                  "Day58",
                  "Day59",
                  "Day60",
                  "Day61",
                  "Day62",
                  "Day63",
                  "Day64",
                  "Day65",
                  "Day66",
                  "Day67",
                  "Day68",
                  "Day69",
                  "Day70",
                  "Day71",
                  "Day72",
                  "Day73",
                  "Day74",
                  "Day75",
                  "Day76",
                  "Day77",
                  "Day78",
                  "Day79",
                  "Day80",
                  "Day81",
                  "Day82",
                ],
                datasets: [
                  {
                    label: "Total Revenue",
                    data: [
                      56, 55, 59, 59, 59, 57, 56, 57, 54, 56, 58, 57, 59, 58,
                      59, 57, 55, 56, 54, 52, 49, 48, 50, 50, 46, 45, 49, 50,
                      52, 53, 52, 55, 54, 53, 56, 55, 56, 55, 54, 55, 57, 58,
                      56, 55, 56, 57, 58, 59, 58, 57, 55, 53, 52, 55, 57, 55,
                      54, 52, 55, 57, 56, 57, 58, 59, 58, 59, 57, 56, 55, 57,
                      58, 59, 60, 62, 60, 59, 58, 57, 56, 57, 56, 58, 59,
                    ],
                    borderColor: "#9B86F1",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderWidth: 3,
                    fill: "origin",
                  },
                ],
              }),
              (t.totalRevenueOptions = {
                responsive: !0,
                maintainAspectRatio: !0,
                scales: { yAxes: [{ display: !1 }], xAxes: [{ display: !1 }] },
                legend: { display: !1 },
                elements: { point: { radius: 0 }, line: { tension: 0 } },
                stepsize: 100,
              }),
              (t.realTimeStatisticsData = {
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    label: "Profit",
                    data: [330, 380, 230, 400, 309, 530, 340],
                    backgroundColor: "#0f5bff",
                    borderColor: "#0f5bff",
                    borderWidth: 0,
                  },
                  {
                    label: "Target",
                    data: [600, 600, 600, 600, 600, 600, 600],
                    backgroundColor: "#e5e9f2",
                    borderColor: "#e5e9f2",
                    borderWidth: 0,
                  },
                ],
              }),
              (t.realTimeStatisticsOptions = {
                responsive: !0,
                maintainAspectRatio: !0,
                layout: { padding: { left: 0, right: 25, top: 0, bottom: 0 } },
                scales: {
                  yAxes: [{ display: !1, gridLines: { display: !1 } }],
                  xAxes: [
                    {
                      stacked: !0,
                      ticks: {
                        display: !1,
                        beginAtZero: !0,
                        fontColor: "#f3f3f3",
                      },
                      gridLines: {
                        display: !1,
                        color: "#f3f3f3",
                        zeroLineColor: "0,0,0,0",
                      },
                      barPercentage: 0.5,
                    },
                  ],
                },
                legend: { display: !1 },
                elements: { point: { radius: 0 } },
              }),
              (t.marketingOverviewData = {
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                ],
                datasets: [
                  {
                    label: "OVERDUE",
                    data: [145, 238, 148, 293, 242, 235, 256, 334],
                    backgroundColor: "#826af9",
                    borderColor: "#826af9",
                    borderWidth: 0,
                  },
                  {
                    label: "SNOOZED",
                    data: [330, 380, 230, 400, 309, 430, 340, 310],
                    borderColor: "#9e86ff",
                    borderWidth: 0,
                  },
                  {
                    label: "COMPLETED",
                    data: [375, 440, 284, 450, 386, 480, 400, 365],
                    backgroundColor: "#d0aeff",
                    borderColor: "#d0aeff",
                    borderWidth: 0,
                  },
                  {
                    label: "PENDING",
                    data: [425, 480, 324, 490, 426, 520, 440, 405],
                    backgroundColor: "#f7d2ff",
                    borderColor: "#f7d2ff",
                    borderWidth: 0,
                  },
                ],
              }),
              (t.marketingOverviewOptions = {
                responsive: !0,
                maintainAspectRatio: !0,
                layout: { padding: { left: 0, right: 0, top: 20, bottom: 0 } },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        max: 400,
                        display: !0,
                        beginAtZero: !0,
                        fontColor: "#b9b8b8",
                        stepSize: 100,
                      },
                      gridLines: {
                        display: !1,
                        color: "#dde4eb",
                        zeroLineColor: "#dde4eb",
                      },
                    },
                  ],
                  xAxes: [
                    {
                      stacked: !0,
                      ticks: {
                        beginAtZero: !0,
                        fontColor: "#b9b8b8",
                        color: "#dde4eb",
                        zeroLineColor: "#dde4eb",
                      },
                      gridLines: {
                        display: !0,
                        color: "#dde4eb",
                        zeroLineColor: "#dde4eb",
                      },
                      barPercentage: 0.2,
                    },
                  ],
                },
                legend: { display: !1 },
                elements: { point: { radius: 0 } },
              }),
              (t.state = {
                visitChartData: {},
                impressionChartData: {},
                conversionChartData: {},
                downloadChartData: {},
                salesStatisticsChartData: {},
                netProfitChartData: {},
                totaltransactionChartData: {},
                areaOptions: {
                  responsive: !0,
                  maintainAspectRatio: !1,
                  scales: {
                    yAxes: [{ display: !1 }],
                    xAxes: [{ display: !1 }],
                  },
                  legend: { display: !1 },
                  elements: { point: { radius: 0 }, line: { tension: 0 } },
                  stepsize: 100,
                },
                salesStaticsOptions: {
                  responsive: !0,
                  animation: { animateScale: !0, animateRotate: !0 },
                  elements: { point: { radius: 3 }, line: { tension: 0 } },
                  layout: { padding: { left: 0, right: 0, top: 0, bottom: 0 } },
                  legend: !1,
                  scales: {
                    xAxes: [
                      {
                        display: !1,
                        ticks: { display: !1, beginAtZero: !1 },
                        gridLines: {
                          drawBorder: !1,
                          color: "#f8f8f8",
                          zeroLineColor: "#f8f8f8",
                        },
                      },
                    ],
                    yAxes: [
                      {
                        ticks: {
                          max: 200,
                          min: 0,
                          stepSize: 50,
                          fontColor: "#8b9298",
                          beginAtZero: !1,
                        },
                        gridLines: {
                          color: "#f8f8f8",
                          zeroLineColor: "#f8f8f8",
                          display: !0,
                          drawBorder: !1,
                        },
                      },
                    ],
                  },
                },
                netProfitOptions: {
                  scale: {
                    ticks: {
                      beginAtZero: !0,
                      min: 0,
                      max: 100,
                      stepSize: 20,
                      display: !1,
                    },
                    pointLabels: {
                      fontSize: 14,
                      fontColor: "#6c757c",
                      color: "#f3f3f3",
                      zeroLineColor: "#f3f3f3",
                    },
                    angleLines: { color: "#f3f3f3", zeroLineColor: "#f3f3f3" },
                    gridLines: { color: "#f3f3f3", zeroLineColor: "#f3f3f3" },
                  },
                  legend: !1,
                },
                totaltransactionChartOptions: {
                  responsive: !0,
                  animation: { animateScale: !0, animateRotate: !0 },
                  elements: { point: { radius: 0 } },
                  layout: {
                    padding: { left: -10, right: 0, top: 0, bottom: -10 },
                  },
                  legend: !1,
                  scales: {
                    xAxes: [
                      {
                        gridLines: {
                          display: !1,
                          color: "#fff",
                          zeroLineColor: "#fff",
                        },
                        ticks: {
                          display: !1,
                          color: "#fff",
                          zeroLineColor: "#fff",
                        },
                      },
                    ],
                    yAxes: [
                      {
                        gridLines: {
                          display: !1,
                          color: "#fff",
                          zeroLineColor: "#fff",
                        },
                        ticks: {
                          display: !1,
                          color: "#fff",
                          zeroLineColor: "#fff",
                        },
                      },
                    ],
                  },
                },
                todos: [
                  { id: 1, task: "Pick up kids from school", isCompleted: !1 },
                  { id: 2, task: "Prepare for presentation", isCompleted: !1 },
                  { id: 3, task: "Print Statements", isCompleted: !1 },
                  { id: 4, task: "Create invoice", isCompleted: !1 },
                  { id: 5, task: "Call John", isCompleted: !1 },
                ],
                inputValue: "",
                active: "",
              }),
              (t.statusChangedHandler = t.statusChangedHandler.bind(
                Object(c.a)(t),
              )),
              (t.addTodo = t.addTodo.bind(Object(c.a)(t))),
              (t.removeTodo = t.removeTodo.bind(Object(c.a)(t))),
              (t.inputChangeHandler = t.inputChangeHandler.bind(
                Object(c.a)(t),
              )),
              t
            );
          }
          return (
            Object(n.a)(o, [
              {
                key: "statusChangedHandler",
                value: function (e, a) {
                  var t = Object(r.a)({}, this.state.todos[a]);
                  t.isCompleted = e.target.checked;
                  var s = Object(l.a)(this.state.todos);
                  (s[a] = t), this.setState({ todos: s });
                },
              },
              {
                key: "addTodo",
                value: function (e) {
                  e.preventDefault();
                  var a = Object(l.a)(this.state.todos);
                  a.unshift({
                    id: a.length ? a[a.length - 1].id + 1 : 1,
                    task: this.state.inputValue,
                    isCompleted: !1,
                  }),
                    this.setState({ todos: a, inputValue: "" });
                },
              },
              {
                key: "removeTodo",
                value: function (e) {
                  var a = Object(l.a)(this.state.todos);
                  a.splice(e, 1), this.setState({ todos: a });
                },
              },
              {
                key: "inputChangeHandler",
                value: function (e) {
                  this.setState({ inputValue: e.target.value });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = document
                    .getElementById("visitChart")
                    .getContext("2d")
                    .createLinearGradient(0, 0, 0, 181);
                  e.addColorStop(1, "rgba(110,123,247,0.7)"),
                    e.addColorStop(0, "rgba(255,255,255,0)");
                  var a = document
                    .getElementById("imoressionChart")
                    .getContext("2d")
                    .createLinearGradient(0, 0, 0, 181);
                  a.addColorStop(1, "rgba(110,123,247,0.7)"),
                    a.addColorStop(0, "rgba(255,255,255,0)");
                  var t = document
                    .getElementById("conversionChart")
                    .getContext("2d")
                    .createLinearGradient(0, 0, 0, 181);
                  t.addColorStop(1, "rgba(110,123,247,0.7)"),
                    t.addColorStop(0, "rgba(255,255,255,0)");
                  var l = document
                    .getElementById("downloadChart")
                    .getContext("2d")
                    .createLinearGradient(0, 0, 0, 181);
                  l.addColorStop(1, "rgba(110,123,247,0.7)"),
                    l.addColorStop(0, "rgba(255,255,255,0)");
                  var r = document
                    .getElementById("salesStatisticsChart")
                    .getContext("2d")
                    .createLinearGradient(0, 0, 0, 450);
                  r.addColorStop(1, "rgba(255,255,255, 0.0)"),
                    r.addColorStop(0, "rgba(102,78,235, 0.2)");
                  var s = document
                    .getElementById("salesStatisticsChart")
                    .getContext("2d")
                    .createLinearGradient(0, 0, 0, 400);
                  s.addColorStop(1, "rgba(255, 255, 255, 0.01)"),
                    s.addColorStop(0, "#14c671");
                  var n = document
                    .getElementById("totaltransactionChart")
                    .getContext("2d")
                    .createLinearGradient(0, 100, 200, 0);
                  n.addColorStop(1, "#fa3252"), n.addColorStop(0, "#fa5539");
                  var c = {
                      labels: [
                        "Day 1",
                        "Day 2",
                        "Day 3",
                        "Day 4",
                        "Day 5",
                        "Day 6",
                        "Day 7",
                        "Day 8",
                        "Day 9",
                        "Day 10",
                        "Day 11",
                        "Day 12",
                        "Day 13",
                      ],
                      datasets: [
                        {
                          label: "Profit",
                          data: [7, 6, 9, 7, 8, 6, 8, 5, 7, 8, 6, 7, 7],
                          borderColor: "#6d7cfc",
                          backgroundColor: e,
                          borderWidth: 3,
                          fill: !0,
                        },
                      ],
                    },
                    m = {
                      labels: [
                        "Day 1",
                        "Day 2",
                        "Day 3",
                        "Day 4",
                        "Day 5",
                        "Day 6",
                        "Day 7",
                        "Day 8",
                        "Day 9",
                        "Day 10",
                        "Day 11",
                        "Day 12",
                        "Day 13",
                      ],
                      datasets: [
                        {
                          label: "Profit",
                          data: [7, 6, 8, 5, 7, 8, 6, 7, 7, 6, 9, 7, 8],
                          borderColor: "#6d7cfc",
                          backgroundColor: a,
                          borderWidth: 3,
                          fill: !0,
                        },
                      ],
                    },
                    i = {
                      labels: [
                        "Day 1",
                        "Day 2",
                        "Day 3",
                        "Day 4",
                        "Day 5",
                        "Day 6",
                        "Day 7",
                        "Day 8",
                        "Day 9",
                        "Day 10",
                        "Day 11",
                        "Day 12",
                        "Day 13",
                      ],
                      datasets: [
                        {
                          label: "Profit",
                          data: [8, 6, 7, 8, 5, 7, 9, 7, 8, 7, 6, 7, 6],
                          borderColor: "#6d7cfc",
                          backgroundColor: t,
                          borderWidth: 3,
                          fill: !0,
                        },
                      ],
                    },
                    o = {
                      labels: [
                        "Day 1",
                        "Day 2",
                        "Day 3",
                        "Day 4",
                        "Day 5",
                        "Day 6",
                        "Day 7",
                        "Day 8",
                        "Day 9",
                        "Day 10",
                        "Day 11",
                        "Day 12",
                        "Day 13",
                      ],
                      datasets: [
                        {
                          label: "Profit",
                          data: [7, 6, 8, 5, 8, 6, 8, 7, 8, 6, 9, 7, 7],
                          borderColor: "#6d7cfc",
                          backgroundColor: l,
                          borderWidth: 3,
                          fill: !0,
                        },
                      ],
                    },
                    d = {
                      labels: [
                        "Jan 1",
                        "Jan 7",
                        "Jan 14",
                        "Jan 21",
                        "Jan 28",
                        "Feb 4",
                        "Feb 11",
                        "Feb 18",
                      ],
                      datasets: [
                        {
                          label: "Revenue",
                          data: [
                            60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170,
                          ],
                          borderColor: "#8862e0",
                          backgroundColor: r,
                          borderWidth: 2,
                          fill: !0,
                        },
                        {
                          label: "Sales",
                          data: [
                            0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135,
                          ],
                          borderColor: "#5ed2a1",
                          backgroundColor: s,
                          borderWidth: 2,
                          fill: !0,
                        },
                      ],
                    };
                  this.setState(d);
                  var E = {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                      {
                        label: "Sessions",
                        data: [320, 280, 300, 280, 300, 270, 350],
                        backgroundColor: n,
                        borderColor: "#fa394e",
                        borderWidth: 0,
                        pointBackgroundColor: "#fa394e",
                        pointRadius: 7,
                        pointBorderWidth: 3,
                        pointBorderColor: "#fff",
                        pointHoverRadius: 7,
                        pointHoverBackgroundColor: "#fa394e",
                        pointHoverBorderColor: "#fa394e",
                        pointHoverBorderWidth: 2,
                        pointHitRadius: 7,
                      },
                    ],
                  };
                  this.setState({
                    visitChartData: c,
                    impressionChartData: m,
                    conversionChartData: i,
                    downloadChartData: o,
                    salesStatisticsChartData: d,
                    netProfitChartData: {
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                      ],
                      datasets: [
                        {
                          label: "Sales",
                          backgroundColor: "rgba(88, 208, 222,0.8)",
                          borderColor: "rgba(88, 208, 222,0.8)",
                          borderWidth: 0,
                          fill: !0,
                          radius: 0,
                          pointRadius: 0,
                          pointBorderWidth: 0,
                          pointBackgroundColor: "rgba(88, 208, 222,0.8)",
                          pointHoverRadius: 10,
                          pointHitRadius: 5,
                          data: [54, 45, 60, 70, 54, 75, 60, 54],
                        },
                        {
                          label: "Orders",
                          backgroundColor: "rgba(150, 77, 247,1)",
                          borderColor: "rgba(150, 77, 247,1)",
                          borderWidth: 0,
                          fill: !0,
                          radius: 0,
                          pointRadius: 0,
                          pointBorderWidth: 0,
                          pointBackgroundColor: "rgba(150, 77, 247,1)",
                          pointHoverRadius: 10,
                          pointHitRadius: 5,
                          data: [65, 75, 70, 80, 60, 80, 36, 60],
                        },
                      ],
                    },
                    totaltransactionChartData: E,
                  });
                },
              },
              {
                key: "toggleProBanner",
                value: function () {
                  document.querySelector(".proBanner").classList.toggle("hide");
                },
              },
              {
                key: "render",
                value: function () {
                  return d.a.createElement(
                    "div",
                    null,
                    d.a.createElement(
                      "div",
                      { className: "row proBanner" },
                      d.a.createElement(
                        "div",
                        { className: "col-12" },
                        d.a.createElement(
                          "span",
                          {
                            className:
                              "d-flex align-items-center purchase-popup",
                          },
                          d.a.createElement(
                            "p",
                            null,
                            "Get tons of UI components, Plugins, multiple layouts, 20+ sample pages, and more!",
                          ),
                          d.a.createElement(
                            "a",
                            {
                              href: "https://www.bootstrapdash.com/product/star-admin-pro-react/",
                              rel: "noopener noreferrer",
                              target: "_blank",
                              className: "btn purchase-button ml-auto",
                            },
                            "Check Pro Version",
                          ),
                          d.a.createElement("i", {
                            className: "mdi mdi-close bannerClose",
                            onClick: this.toggleProBanner,
                          }),
                        ),
                      ),
                    ),
                    d.a.createElement(
                      "div",
                      { className: "row page-title-header" },
                      d.a.createElement(
                        "div",
                        { className: "col-12" },
                        d.a.createElement(
                          "div",
                          { className: "page-header" },
                          d.a.createElement(
                            "h4",
                            { className: "page-title" },
                            "Dashboard",
                          ),
                          d.a.createElement(
                            "div",
                            {
                              className:
                                "quick-link-wrapper w-100 d-md-flex flex-md-wrap",
                            },
                            d.a.createElement(
                              "ul",
                              { className: "quick-links" },
                              d.a.createElement(
                                "li",
                                null,
                                d.a.createElement(
                                  "a",
                                  {
                                    href: "!#",
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                  },
                                  "ICE Market data",
                                ),
                              ),
                              d.a.createElement(
                                "li",
                                null,
                                d.a.createElement(
                                  "a",
                                  {
                                    href: "!#",
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                  },
                                  "Own analysis",
                                ),
                              ),
                              d.a.createElement(
                                "li",
                                null,
                                d.a.createElement(
                                  "a",
                                  {
                                    href: "!#",
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                  },
                                  "Historic market data",
                                ),
                              ),
                            ),
                            d.a.createElement(
                              "ul",
                              { className: "quick-links ml-auto" },
                              d.a.createElement(
                                "li",
                                null,
                                d.a.createElement(
                                  "a",
                                  {
                                    href: "!#",
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                  },
                                  "Settings",
                                ),
                              ),
                              d.a.createElement(
                                "li",
                                null,
                                d.a.createElement(
                                  "a",
                                  {
                                    href: "!#",
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                  },
                                  "Analytics",
                                ),
                              ),
                              d.a.createElement(
                                "li",
                                null,
                                d.a.createElement(
                                  "a",
                                  {
                                    href: "!#",
                                    onClick: function (e) {
                                      return e.preventDefault();
                                    },
                                  },
                                  "Watchlist",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      d.a.createElement(
                        "div",
                        { className: "col-md-12" },
                        d.a.createElement(
                          "div",
                          { className: "page-header-toolbar" },
                          d.a.createElement(
                            "div",
                            {
                              className: "btn-group toolbar-item",
                              role: "group",
                              "aria-label": "Basic example",
                            },
                            d.a.createElement(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-secondary",
                              },
                              d.a.createElement("i", {
                                className: "mdi mdi-chevron-left",
                              }),
                            ),
                            d.a.createElement(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-secondary",
                              },
                              "03/02/2019 - 20/08/2019",
                            ),
                            d.a.createElement(
                              "button",
                              {
                                type: "button",
                                className: "btn btn-secondary",
                              },
                              d.a.createElement("i", {
                                className: "mdi mdi-chevron-right",
                              }),
                            ),
                          ),
                          d.a.createElement(
                            "div",
                            { className: "filter-wrapper" },
                            d.a.createElement(
                              "div",
                              { className: "dropdown toolbar-item" },
                              d.a.createElement(
                                u.a,
                                null,
                                d.a.createElement(
                                  u.a.Toggle,
                                  {
                                    variant:
                                      "btn btn-secondary dropdown-toggle",
                                    id: "dropdownMenuButton1",
                                  },
                                  "All Day",
                                ),
                                d.a.createElement(
                                  u.a.Menu,
                                  null,
                                  d.a.createElement(
                                    u.a.Header,
                                    null,
                                    "Last Day",
                                  ),
                                  d.a.createElement(
                                    u.a.Item,
                                    null,
                                    "Last Month",
                                  ),
                                  d.a.createElement(
                                    u.a.Item,
                                    null,
                                    "Last Year",
                                  ),
                                ),
                              ),
                            ),
                            d.a.createElement(
                              "a",
                              {
                                href: "!#",
                                onClick: function (e) {
                                  return e.preventDefault();
                                },
                                className: "advanced-link toolbar-item",
                              },
                              "Advanced Options",
                            ),
                          ),
                          d.a.createElement(
                            "div",
                            {
                              className: "sort-wrapper justify-content-between",
                            },
                            d.a.createElement(
                              "button",
                              { type: "button", className: "btn btn-primary" },
                              "New",
                            ),
                            d.a.createElement(
                              u.a,
                              null,
                              d.a.createElement(
                                u.a.Toggle,
                                {
                                  variant:
                                    "btn btn-secondary dropdown-toggle  toolbar-item",
                                  id: "dropdownMenuButton2",
                                },
                                "Export",
                              ),
                              d.a.createElement(
                                u.a.Menu,
                                null,
                                d.a.createElement(
                                  u.a.Header,
                                  null,
                                  "Export as PDF",
                                ),
                                d.a.createElement(
                                  u.a.Item,
                                  null,
                                  "Export as DOCX",
                                ),
                                d.a.createElement(
                                  u.a.Item,
                                  null,
                                  "Export as CDR",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    d.a.createElement(
                      "div",
                      { className: "row" },
                      d.a.createElement(
                        "div",
                        { className: "col-md-12 grid-margin" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body" },
                            d.a.createElement(
                              "div",
                              { className: "row" },
                              d.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-xl-3 col-lg-6 col-sm-6 grid-margin-xl-0 grid-margin",
                                },
                                d.a.createElement(
                                  "div",
                                  { className: "d-flex" },
                                  d.a.createElement(
                                    "div",
                                    { className: "wrapper" },
                                    d.a.createElement(
                                      "h3",
                                      {
                                        className: "mb-0 font-weight-semibold",
                                      },
                                      "32,451",
                                    ),
                                    d.a.createElement(
                                      "h5",
                                      {
                                        className:
                                          "mb-0 font-weight-medium text-primary",
                                      },
                                      "Visits",
                                    ),
                                    d.a.createElement(
                                      "p",
                                      { className: "mb-0 text-muted" },
                                      "+14.00(+0.50%)",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "wrapper my-auto ml-auto ml-lg-4",
                                    },
                                    d.a.createElement(E.c, {
                                      ref: "chart",
                                      data: this.state.visitChartData,
                                      options: this.state.areaOptions,
                                      datasetKeyProvider:
                                        this.state.datasetKeyProvider,
                                      height: 50,
                                      width: 100,
                                      id: "visitChart",
                                    }),
                                  ),
                                ),
                              ),
                              d.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin",
                                },
                                d.a.createElement(
                                  "div",
                                  { className: "d-flex" },
                                  d.a.createElement(
                                    "div",
                                    { className: "wrapper" },
                                    d.a.createElement(
                                      "h3",
                                      {
                                        className: "mb-0 font-weight-semibold",
                                      },
                                      "15,236",
                                    ),
                                    d.a.createElement(
                                      "h5",
                                      {
                                        className:
                                          "mb-0 font-weight-medium text-primary",
                                      },
                                      "Impressions",
                                    ),
                                    d.a.createElement(
                                      "p",
                                      { className: "mb-0 text-muted" },
                                      "+138.97(+0.54%)",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "wrapper my-auto ml-auto ml-lg-4",
                                    },
                                    d.a.createElement(E.c, {
                                      ref: "chart",
                                      data: this.state.impressionChartData,
                                      options: this.state.areaOptions,
                                      datasetKeyProvider:
                                        this.state.datasetKeyProvider,
                                      height: 50,
                                      width: 100,
                                      id: "imoressionChart",
                                    }),
                                  ),
                                ),
                              ),
                              d.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin",
                                },
                                d.a.createElement(
                                  "div",
                                  { className: "d-flex" },
                                  d.a.createElement(
                                    "div",
                                    { className: "wrapper" },
                                    d.a.createElement(
                                      "h3",
                                      {
                                        className: "mb-0 font-weight-semibold",
                                      },
                                      "7,688",
                                    ),
                                    d.a.createElement(
                                      "h5",
                                      {
                                        className:
                                          "mb-0 font-weight-medium text-primary",
                                      },
                                      "Conversion",
                                    ),
                                    d.a.createElement(
                                      "p",
                                      { className: "mb-0 text-muted" },
                                      "+57.62(+0.76%)",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "wrapper my-auto ml-auto ml-lg-4",
                                    },
                                    d.a.createElement(E.c, {
                                      ref: "chart",
                                      data: this.state.conversionChartData,
                                      options: this.state.areaOptions,
                                      datasetKeyProvider:
                                        this.state.datasetKeyProvider,
                                      height: 50,
                                      width: 100,
                                      id: "conversionChart",
                                    }),
                                  ),
                                ),
                              ),
                              d.a.createElement(
                                "div",
                                {
                                  className:
                                    "col-xl-3 col-lg-6 col-sm-6 mt-md-0 mt-4 grid-margin-xl-0 grid-margin",
                                },
                                d.a.createElement(
                                  "div",
                                  { className: "d-flex" },
                                  d.a.createElement(
                                    "div",
                                    { className: "wrapper" },
                                    d.a.createElement(
                                      "h3",
                                      {
                                        className: "mb-0 font-weight-semibold",
                                      },
                                      "1,553",
                                    ),
                                    d.a.createElement(
                                      "h5",
                                      {
                                        className:
                                          "mb-0 font-weight-medium text-primary",
                                      },
                                      "Downloads",
                                    ),
                                    d.a.createElement(
                                      "p",
                                      { className: "mb-0 text-muted" },
                                      "+138.97(+0.54%)",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "wrapper my-auto ml-auto ml-lg-4",
                                    },
                                    d.a.createElement(E.c, {
                                      ref: "chart",
                                      data: this.state.downloadChartData,
                                      options: this.state.areaOptions,
                                      datasetKeyProvider:
                                        this.state.datasetKeyProvider,
                                      height: 50,
                                      width: 100,
                                      id: "downloadChart",
                                    }),
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
                      { className: "row" },
                      d.a.createElement(
                        "div",
                        { className: "col-md-8 grid-margin stretch-card" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body" },
                            d.a.createElement(
                              "h4",
                              { className: "card-title mb-0" },
                              "Sales Statistics Overview",
                            ),
                            d.a.createElement(
                              "div",
                              {
                                className: "d-xl-flex flex-column flex-lg-row",
                              },
                              d.a.createElement(
                                "p",
                                null,
                                "Lorem ipsum is placeholder text commonly used",
                              ),
                              d.a.createElement(
                                "ul",
                                {
                                  className:
                                    "nav nav-tabs sales-mini-tabs ml-lg-auto mb-4 mb-md-0",
                                  role: "tablist",
                                },
                                d.a.createElement(
                                  "li",
                                  { className: "nav-item" },
                                  d.a.createElement(
                                    "button",
                                    {
                                      className: "nav-link ".concat(
                                        "sales-statistics_switch_1" ===
                                          this.state.active
                                          ? "active"
                                          : "",
                                      ),
                                      id: "sales-statistics_switch_1",
                                      onClick: this.changeChartOneData,
                                      "data-toggle": "tab",
                                      role: "tab",
                                      "aria-selected": "false",
                                    },
                                    "1D",
                                  ),
                                ),
                                d.a.createElement(
                                  "li",
                                  { className: "nav-item" },
                                  d.a.createElement(
                                    "button",
                                    {
                                      className: "nav-link ".concat(
                                        "sales-statistics_switch_2" ===
                                          this.state.active
                                          ? "active"
                                          : "",
                                      ),
                                      id: "sales-statistics_switch_2",
                                      onClick: this.changeChartTwoData,
                                      "data-toggle": "tab",
                                      role: "tab",
                                      "aria-selected": "false",
                                    },
                                    "5D",
                                  ),
                                ),
                                d.a.createElement(
                                  "li",
                                  { className: "nav-item" },
                                  d.a.createElement(
                                    "button",
                                    {
                                      className: "nav-link ".concat(
                                        "sales-statistics_switch_3" ===
                                          this.state.active
                                          ? "active"
                                          : "",
                                      ),
                                      id: "sales-statistics_switch_3",
                                      onClick: this.changeChartThreeData,
                                      "data-toggle": "tab",
                                      role: "tab",
                                      "aria-selected": "false",
                                    },
                                    "1M",
                                  ),
                                ),
                                d.a.createElement(
                                  "li",
                                  { className: "nav-item" },
                                  d.a.createElement(
                                    "button",
                                    {
                                      className: "nav-link ".concat(
                                        "sales-statistics_switch_4" ===
                                          this.state.active
                                          ? "active"
                                          : "",
                                      ),
                                      id: "sales-statistics_switch_4",
                                      onClick: this.changeChartFourData,
                                      "data-toggle": "tab",
                                      role: "tab",
                                      "aria-selected": "false",
                                    },
                                    "1Y",
                                  ),
                                ),
                              ),
                            ),
                            d.a.createElement(
                              "div",
                              {
                                className: "d-xl-flex flex-column flex-lg-row",
                              },
                              d.a.createElement(
                                "div",
                                {
                                  className: "data-wrapper d-flex mt-2 mt-lg-0",
                                },
                                d.a.createElement(
                                  "div",
                                  { className: "wrapper pr-5" },
                                  d.a.createElement(
                                    "h5",
                                    { className: "mb-0" },
                                    "Total Cost",
                                  ),
                                  d.a.createElement(
                                    "div",
                                    {
                                      className: "d-xl-flex align-items-center",
                                    },
                                    d.a.createElement(
                                      "h4",
                                      {
                                        className: "font-weight-semibold mb-0",
                                      },
                                      "15,263",
                                    ),
                                    d.a.createElement(
                                      "small",
                                      {
                                        className:
                                          "ml-2 text-gray d-none d-lg-block",
                                      },
                                      d.a.createElement("b", null, "89.5%"),
                                      " of 20,000 Total",
                                    ),
                                  ),
                                ),
                                d.a.createElement(
                                  "div",
                                  { className: "wrapper" },
                                  d.a.createElement(
                                    "h5",
                                    { className: "mb-0" },
                                    "Total Revenue",
                                  ),
                                  d.a.createElement(
                                    "div",
                                    {
                                      className: "d-xl-flex align-items-center",
                                    },
                                    d.a.createElement(
                                      "h4",
                                      {
                                        className: "font-weight-semibold mb-0",
                                      },
                                      "$753,098",
                                    ),
                                    d.a.createElement(
                                      "small",
                                      {
                                        className:
                                          "ml-2 text-gray d-none d-lg-block",
                                      },
                                      d.a.createElement("b", null, "10.5%"),
                                      " of 20,000 Total",
                                    ),
                                  ),
                                ),
                              ),
                              d.a.createElement(
                                "div",
                                {
                                  className: "ml-lg-auto",
                                  id: "sales-statistics-legend",
                                },
                                d.a.createElement(
                                  "div",
                                  { className: "chartjs-legend line-legend" },
                                  d.a.createElement(
                                    "ul",
                                    null,
                                    d.a.createElement(
                                      "li",
                                      null,
                                      d.a.createElement("span", {
                                        className: "bg-info",
                                      }),
                                      "Revenue",
                                    ),
                                    d.a.createElement(
                                      "li",
                                      null,
                                      d.a.createElement("span", {
                                        className: "bg-success",
                                      }),
                                      "Sales",
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            d.a.createElement(E.c, {
                              data: this.state,
                              options: this.state.salesStaticsOptions,
                              datasetKeyProvider: this.datasetKeyProvider,
                              height: 50,
                              width: 100,
                              id: "salesStatisticsChart",
                            }),
                          ),
                        ),
                      ),
                      d.a.createElement(
                        "div",
                        { className: "col-md-4 grid-margin stretch-card" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body d-flex flex-column" },
                            d.a.createElement(
                              "div",
                              { className: "wrapper" },
                              d.a.createElement(
                                "h4",
                                { className: "card-title mb-0" },
                                "Net Profit Margin",
                              ),
                              d.a.createElement(
                                "p",
                                null,
                                "Started collecting data from February 2019",
                              ),
                              d.a.createElement(
                                "div",
                                {
                                  className: "mb-4 rounded-legend",
                                  id: "net-profit-legend",
                                },
                                d.a.createElement(
                                  "ul",
                                  null,
                                  d.a.createElement(
                                    "li",
                                    null,
                                    d.a.createElement("span", {
                                      className: "bg-success",
                                    }),
                                    "Sales",
                                  ),
                                  d.a.createElement(
                                    "li",
                                    null,
                                    d.a.createElement("span", {
                                      className: "bg-info",
                                    }),
                                    "Orders",
                                  ),
                                ),
                              ),
                            ),
                            d.a.createElement(E.e, {
                              data: this.state.netProfitChartData,
                              options: this.state.netProfitOptions,
                              height: 280,
                            }),
                          ),
                        ),
                      ),
                    ),
                    d.a.createElement(
                      "div",
                      { className: "row" },
                      d.a.createElement(
                        "div",
                        { className: "col-md-8" },
                        d.a.createElement(
                          "div",
                          { className: "row" },
                          d.a.createElement(
                            "div",
                            {
                              className:
                                "col-xl-6 col-lg-12 grid-margin stretch-card",
                            },
                            d.a.createElement(
                              "div",
                              { className: "card" },
                              d.a.createElement(
                                "div",
                                { className: "card-body pb-0" },
                                d.a.createElement(
                                  "div",
                                  {
                                    className: "d-flex justify-content-between",
                                  },
                                  d.a.createElement(
                                    "h4",
                                    { className: "card-title mb-0" },
                                    "Total Revenue",
                                  ),
                                  d.a.createElement(
                                    "p",
                                    { className: "font-weight-semibold mb-0" },
                                    "+1.37%",
                                  ),
                                ),
                                d.a.createElement(
                                  "h3",
                                  { className: "font-weight-medium mb-4" },
                                  "184.42K",
                                ),
                              ),
                              d.a.createElement(E.c, {
                                data: this.totalRevenueData,
                                options: this.totalRevenueOptions,
                                height: 75,
                              }),
                            ),
                          ),
                          d.a.createElement(
                            "div",
                            {
                              className:
                                "col-xl-6 col-lg-12 grid-margin stretch-card",
                            },
                            d.a.createElement(
                              "div",
                              { className: "card" },
                              d.a.createElement(
                                "div",
                                { className: "card-body pb-0" },
                                d.a.createElement(
                                  "div",
                                  {
                                    className: "d-flex justify-content-between",
                                  },
                                  d.a.createElement(
                                    "h4",
                                    { className: "card-title mb-0" },
                                    "Transaction",
                                  ),
                                  d.a.createElement(
                                    "p",
                                    { className: "font-weight-semibold mb-0" },
                                    "-2.87%",
                                  ),
                                ),
                                d.a.createElement(
                                  "h3",
                                  { className: "font-weight-medium" },
                                  "147.7K",
                                ),
                              ),
                              d.a.createElement(E.c, {
                                data: this.state.totaltransactionChartData,
                                options:
                                  this.state.totaltransactionChartOptions,
                                height: 75,
                                id: "totaltransactionChart",
                              }),
                            ),
                          ),
                          d.a.createElement(
                            "div",
                            { className: "col-md-12 grid-margin" },
                            d.a.createElement(
                              "div",
                              { className: "card" },
                              d.a.createElement(
                                "div",
                                { className: "card-body" },
                                d.a.createElement(
                                  "h4",
                                  { className: "card-title mb-0" },
                                  "Market Overview",
                                ),
                                d.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "d-flex align-items-center justify-content-between w-100",
                                  },
                                  d.a.createElement(
                                    "p",
                                    { className: "mb-0" },
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                  ),
                                  d.a.createElement(
                                    "div",
                                    { className: "dropdown" },
                                    d.a.createElement(
                                      u.a,
                                      null,
                                      d.a.createElement(
                                        u.a.Toggle,
                                        {
                                          variant:
                                            "btn btn-outline-secondary dropdown-toggle",
                                          id: "dropdownMenuButton4",
                                        },
                                        "Daily",
                                      ),
                                      d.a.createElement(
                                        u.a.Menu,
                                        null,
                                        d.a.createElement(
                                          u.a.Item,
                                          {
                                            onClick:
                                              this.changeMarketingOneData,
                                          },
                                          "Daily",
                                        ),
                                        d.a.createElement(
                                          u.a.Item,
                                          {
                                            onClick:
                                              this.changeMarketingTwoData,
                                          },
                                          "Weekly",
                                        ),
                                        d.a.createElement(
                                          u.a.Item,
                                          {
                                            onClick:
                                              this.changeMarketingThreeData,
                                          },
                                          "Monthly",
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                                d.a.createElement(
                                  "div",
                                  { className: "d-flex align-items-end" },
                                  d.a.createElement(
                                    "h3",
                                    { className: "mb-0 font-weight-semibold" },
                                    "$36,2531.00",
                                  ),
                                  d.a.createElement(
                                    "p",
                                    {
                                      className:
                                        "mb-0 font-weight-medium mr-2 ml-2 mb-1",
                                    },
                                    "USD",
                                  ),
                                  d.a.createElement(
                                    "p",
                                    {
                                      className:
                                        "mb-0 text-success font-weight-semibold mb-1",
                                    },
                                    "(+1.37%)",
                                  ),
                                ),
                                d.a.createElement(E.a, {
                                  data: this.marketingOverviewData,
                                  options: this.marketingOverviewOptions,
                                  datasetKeyProvider: this.datasetKeyProvider,
                                  height: 100,
                                  id: "marketingOverviewChart1",
                                }),
                              ),
                            ),
                          ),
                          d.a.createElement(
                            "div",
                            { className: "col-md-12 grid-margin" },
                            d.a.createElement(
                              "div",
                              { className: "card" },
                              d.a.createElement(
                                "div",
                                { className: "card-body" },
                                d.a.createElement(
                                  "div",
                                  {
                                    className: "d-flex justify-content-between",
                                  },
                                  d.a.createElement(
                                    "h4",
                                    { className: "card-title mb-0" },
                                    "Invoice",
                                  ),
                                  d.a.createElement(
                                    "a",
                                    {
                                      href: "!#",
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                    },
                                    d.a.createElement(
                                      "small",
                                      null,
                                      "Show All",
                                    ),
                                  ),
                                ),
                                d.a.createElement(
                                  "p",
                                  null,
                                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est quod cupiditate esse fuga",
                                ),
                                d.a.createElement(
                                  "div",
                                  { className: "table-responsive" },
                                  d.a.createElement(
                                    "table",
                                    {
                                      className:
                                        "table table-striped table-hover",
                                    },
                                    d.a.createElement(
                                      "thead",
                                      null,
                                      d.a.createElement(
                                        "tr",
                                        null,
                                        d.a.createElement(
                                          "th",
                                          null,
                                          "Invoice ID",
                                        ),
                                        d.a.createElement(
                                          "th",
                                          null,
                                          "Customer",
                                        ),
                                        d.a.createElement("th", null, "Status"),
                                        d.a.createElement(
                                          "th",
                                          null,
                                          "Due Date",
                                        ),
                                        d.a.createElement("th", null, "Amount"),
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
                                          null,
                                          "INV-87239",
                                        ),
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "Viola Ford",
                                        ),
                                        d.a.createElement("td", null, "Paid"),
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "20 Jan 2019",
                                        ),
                                        d.a.createElement("td", null, "$755"),
                                      ),
                                      d.a.createElement(
                                        "tr",
                                        null,
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "INV-87239",
                                        ),
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "Dylan Waters",
                                        ),
                                        d.a.createElement("td", null, "Unpaid"),
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "23 Feb 2019",
                                        ),
                                        d.a.createElement("td", null, "$800"),
                                      ),
                                      d.a.createElement(
                                        "tr",
                                        null,
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "INV-87239",
                                        ),
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "Louis Poole",
                                        ),
                                        d.a.createElement("td", null, "Unpaid"),
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "25 Mar 2019",
                                        ),
                                        d.a.createElement("td", null, "$463"),
                                      ),
                                      d.a.createElement(
                                        "tr",
                                        null,
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "INV-87239",
                                        ),
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "Vera Howell",
                                        ),
                                        d.a.createElement("td", null, "Paid"),
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "27 Mar 2019",
                                        ),
                                        d.a.createElement("td", null, "$235"),
                                      ),
                                      d.a.createElement(
                                        "tr",
                                        null,
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "INV-87239",
                                        ),
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "Allie Goodman",
                                        ),
                                        d.a.createElement("td", null, "Unpaid"),
                                        d.a.createElement(
                                          "td",
                                          null,
                                          "1 Apr 2019",
                                        ),
                                        d.a.createElement("td", null, "$657"),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          d.a.createElement(
                            "div",
                            { className: "col-md-6 grid-margin stretch-card" },
                            d.a.createElement(
                              "div",
                              { className: "card" },
                              d.a.createElement(
                                "div",
                                { className: "card-body" },
                                d.a.createElement(
                                  "div",
                                  { className: "row" },
                                  d.a.createElement(
                                    "div",
                                    { className: "col-md-6" },
                                    d.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "d-flex align-items-center pb-2",
                                      },
                                      d.a.createElement("div", {
                                        className:
                                          "dot-indicator bg-danger mr-2",
                                      }),
                                      d.a.createElement(
                                        "p",
                                        { className: "mb-0" },
                                        "Total Sales",
                                      ),
                                    ),
                                    d.a.createElement(
                                      "h4",
                                      { className: "font-weight-semibold" },
                                      "$7,590",
                                    ),
                                    d.a.createElement(b.a, {
                                      variant: "danger",
                                      now: 80,
                                    }),
                                  ),
                                  d.a.createElement(
                                    "div",
                                    { className: "col-md-6 mt-4 mt-md-0" },
                                    d.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "d-flex align-items-center pb-2",
                                      },
                                      d.a.createElement("div", {
                                        className:
                                          "dot-indicator bg-success mr-2",
                                      }),
                                      d.a.createElement(
                                        "p",
                                        { className: "mb-0" },
                                        "Active Users",
                                      ),
                                    ),
                                    d.a.createElement(
                                      "h4",
                                      { className: "font-weight-semibold" },
                                      "$5,460",
                                    ),
                                    d.a.createElement(b.a, {
                                      variant: "success",
                                      now: 50,
                                    }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          d.a.createElement(
                            "div",
                            {
                              className:
                                "col-md-6 grid-margin stretch-card average-price-card",
                            },
                            d.a.createElement(
                              "div",
                              { className: "card text-white" },
                              d.a.createElement(
                                "div",
                                { className: "card-body" },
                                d.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "d-flex justify-content-between pb-2 align-items-center",
                                  },
                                  d.a.createElement(
                                    "h2",
                                    { className: "font-weight-semibold mb-0" },
                                    "4,624",
                                  ),
                                  d.a.createElement(
                                    "div",
                                    { className: "icon-holder" },
                                    d.a.createElement("i", {
                                      className: "mdi mdi-briefcase-outline",
                                    }),
                                  ),
                                ),
                                d.a.createElement(
                                  "div",
                                  {
                                    className: "d-flex justify-content-between",
                                  },
                                  d.a.createElement(
                                    "h5",
                                    { className: "font-weight-semibold mb-0" },
                                    "Average Price",
                                  ),
                                  d.a.createElement(
                                    "p",
                                    { className: "text-white mb-0" },
                                    "Since last month",
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                      d.a.createElement(
                        "div",
                        { className: "col-md-4" },
                        d.a.createElement(
                          "div",
                          { className: "row" },
                          d.a.createElement(
                            "div",
                            { className: "col-md-12 grid-margin" },
                            d.a.createElement(
                              "div",
                              { className: "card" },
                              d.a.createElement(
                                "div",
                                { className: "card-body" },
                                d.a.createElement(
                                  "h1",
                                  { className: "card-title mb-4" },
                                  "Website Audience Metrics",
                                ),
                                d.a.createElement(
                                  "div",
                                  { className: "row" },
                                  d.a.createElement(
                                    "div",
                                    { className: "col-xl-5 col-lg-12" },
                                    d.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "wrapper border-bottom mb-2 pb-2",
                                      },
                                      d.a.createElement(
                                        "h4",
                                        {
                                          className:
                                            "font-weight-semibold mb-0",
                                        },
                                        "523,200",
                                      ),
                                      d.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "d-flex align-items-center",
                                        },
                                        d.a.createElement(
                                          "p",
                                          { className: "mb-0" },
                                          "Page Views",
                                        ),
                                        d.a.createElement("div", {
                                          className:
                                            "dot-indicator bg-secondary ml-auto",
                                        }),
                                      ),
                                    ),
                                    d.a.createElement(
                                      "div",
                                      { className: "wrapper mb-2 mb-lg-0" },
                                      d.a.createElement(
                                        "h4",
                                        {
                                          className:
                                            "font-weight-semibold mb-0",
                                        },
                                        "753,098",
                                      ),
                                      d.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "d-flex align-items-center",
                                        },
                                        d.a.createElement(
                                          "p",
                                          { className: "mb-0" },
                                          "Bounce Rate",
                                        ),
                                        d.a.createElement("div", {
                                          className:
                                            "dot-indicator bg-primary ml-auto",
                                        }),
                                      ),
                                    ),
                                  ),
                                  d.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "col-xl-7 col-lg-12 d-flex pl-4",
                                    },
                                    d.a.createElement(
                                      "div",
                                      { className: "ml-auto" },
                                      d.a.createElement(E.a, {
                                        data: this.realTimeStatisticsData,
                                        options: this.realTimeStatisticsOptions,
                                        height: 100,
                                        id: "realtime-statistics",
                                      }),
                                    ),
                                  ),
                                ),
                                d.a.createElement(
                                  "div",
                                  { className: "row mt-5" },
                                  d.a.createElement(
                                    "div",
                                    { className: "col-xl-5 col-lg-12" },
                                    d.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "d-flex align-items-center mb-2",
                                      },
                                      d.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "icon-holder bg-primary text-white py-1 px-3 rounded mr-2",
                                        },
                                        d.a.createElement("i", {
                                          className: "mdi mdi-buffer icon-sm",
                                        }),
                                      ),
                                      d.a.createElement(
                                        "h2",
                                        {
                                          className:
                                            "font-weight-semibold mb-0",
                                        },
                                        "3,605",
                                      ),
                                    ),
                                    d.a.createElement(
                                      "p",
                                      null,
                                      "Since last week",
                                    ),
                                    d.a.createElement(
                                      "p",
                                      { className: "mb-3 mb-lg-0" },
                                      d.a.createElement(
                                        "span",
                                        { className: "font-weight-medium" },
                                        "0.51%",
                                      ),
                                      " (30 days)",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "div",
                                    { className: "col-xl-7 col-lg-12" },
                                    d.a.createElement("div", {
                                      className: "mt-n3 ml-auto",
                                      id: "dashboard-guage-chart",
                                    }),
                                    d.a.createElement(g.a, {
                                      id: "gauge-chart1",
                                      textColor: "#010101",
                                      percent: 0.65,
                                      arcPadding: 0,
                                      cornerRadius: 0,
                                      nrOfLevels: 2,
                                      colors: ["#FF0017", "#eceaea"],
                                      arcsLength: [0.4, 0.25],
                                    }),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          d.a.createElement(
                            "div",
                            { className: "col-md-12 grid-margin" },
                            d.a.createElement(
                              "div",
                              { className: "card" },
                              d.a.createElement(
                                "div",
                                { className: "card-body" },
                                d.a.createElement(
                                  "h4",
                                  { className: "card-title mb-4" },
                                  "World sellings",
                                ),
                                d.a.createElement(
                                  "div",
                                  { className: "map-height" },
                                  d.a.createElement(h.VectorMap, {
                                    map: "world_mill",
                                    height: 100,
                                    backgroundColor: "transparent",
                                    zoomOnScroll: !1,
                                    containerClassName: "map",
                                    regionStyle: {
                                      initial: {
                                        fill: "#3198f7",
                                        "fill-opacity": 1,
                                        stroke: "none",
                                        "stroke-width": 0,
                                        "stroke-opacity": 0,
                                      },
                                      hover: {
                                        "fill-opacity": 0.8,
                                        cursor: "pointer",
                                      },
                                      selected: { fill: "#3198f7" },
                                      selectedHover: {},
                                    },
                                    regionsSelectable: !0,
                                    containerStyle: {
                                      width: "100%",
                                      height: "100%",
                                    },
                                    series: {
                                      regions: [
                                        {
                                          values: f,
                                          scale: ["#3198f7", "#3198f7"],
                                          normalizeFunction: "polynomial",
                                        },
                                      ],
                                    },
                                  }),
                                ),
                                d.a.createElement(
                                  "div",
                                  { className: "wrapper" },
                                  d.a.createElement(
                                    "div",
                                    { className: "d-flex w-100 pt-2 mt-4" },
                                    d.a.createElement(
                                      "p",
                                      {
                                        className: "mb-0 font-weight-semibold",
                                      },
                                      "California",
                                    ),
                                    d.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "wrapper ml-auto d-flex align-items-center",
                                      },
                                      d.a.createElement(
                                        "p",
                                        {
                                          className:
                                            "font-weight-semibold mb-0",
                                        },
                                        "26,437",
                                      ),
                                      d.a.createElement(
                                        "p",
                                        { className: "ml-1 mb-0" },
                                        "26%",
                                      ),
                                    ),
                                  ),
                                  d.a.createElement(
                                    "div",
                                    { className: "d-flex w-100 pt-2" },
                                    d.a.createElement(
                                      "p",
                                      {
                                        className: "mb-0 font-weight-semibold",
                                      },
                                      "Washington",
                                    ),
                                    d.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "wrapper ml-auto d-flex align-items-center",
                                      },
                                      d.a.createElement(
                                        "p",
                                        {
                                          className:
                                            "font-weight-semibold mb-0",
                                        },
                                        "3252",
                                      ),
                                      d.a.createElement(
                                        "p",
                                        { className: "ml-1 mb-0" },
                                        "64%",
                                      ),
                                    ),
                                  ),
                                  d.a.createElement(
                                    "div",
                                    { className: "d-flex w-100 pt-2" },
                                    d.a.createElement(
                                      "p",
                                      {
                                        className: "mb-0 font-weight-semibold",
                                      },
                                      "Michigan",
                                    ),
                                    d.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "wrapper ml-auto d-flex align-items-center",
                                      },
                                      d.a.createElement(
                                        "p",
                                        {
                                          className:
                                            "font-weight-semibold mb-0",
                                        },
                                        "4,987",
                                      ),
                                      d.a.createElement(
                                        "p",
                                        { className: "ml-1 mb-0" },
                                        "30%",
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          d.a.createElement(
                            "div",
                            { className: "col-md-12 grid-margin" },
                            d.a.createElement(
                              "div",
                              { className: "card" },
                              d.a.createElement(
                                "div",
                                { className: "card-body" },
                                d.a.createElement(
                                  "h4",
                                  { className: "card-title mb-0" },
                                  "Top Performer",
                                ),
                                d.a.createElement(
                                  "div",
                                  {
                                    className: "d-flex mt-3 py-2 border-bottom",
                                  },
                                  d.a.createElement("img", {
                                    className: "img-sm rounded-circle",
                                    src: t(81),
                                    alt: "profile",
                                  }),
                                  d.a.createElement(
                                    "div",
                                    { className: "wrapper ml-2" },
                                    d.a.createElement(
                                      "p",
                                      {
                                        className: "mb-n1 font-weight-semibold",
                                      },
                                      "Ray Douglas",
                                    ),
                                    d.a.createElement("small", null, "162543"),
                                  ),
                                  d.a.createElement(
                                    "small",
                                    { className: "text-muted ml-auto" },
                                    "1 Hours ago",
                                  ),
                                ),
                                d.a.createElement(
                                  "div",
                                  { className: "d-flex py-2 border-bottom" },
                                  d.a.createElement(
                                    "span",
                                    {
                                      className:
                                        "img-sm rounded-circle bg-warning text-white text-avatar",
                                    },
                                    "OH",
                                  ),
                                  d.a.createElement(
                                    "div",
                                    { className: "wrapper ml-2" },
                                    d.a.createElement(
                                      "p",
                                      {
                                        className: "mb-n1 font-weight-semibold",
                                      },
                                      "Ora Hill",
                                    ),
                                    d.a.createElement("small", null, "162543"),
                                  ),
                                  d.a.createElement(
                                    "small",
                                    { className: "text-muted ml-auto" },
                                    "4 Hours ago",
                                  ),
                                ),
                                d.a.createElement(
                                  "div",
                                  { className: "d-flex py-2 border-bottom" },
                                  d.a.createElement("img", {
                                    className: "img-sm rounded-circle",
                                    src: t(82),
                                    alt: "profile",
                                  }),
                                  d.a.createElement(
                                    "div",
                                    { className: "wrapper ml-2" },
                                    d.a.createElement(
                                      "p",
                                      {
                                        className: "mb-n1 font-weight-semibold",
                                      },
                                      "Brian Dean",
                                    ),
                                    d.a.createElement("small", null, "162543"),
                                  ),
                                  d.a.createElement(
                                    "small",
                                    { className: "text-muted ml-auto" },
                                    "4 Hours ago",
                                  ),
                                ),
                                d.a.createElement(
                                  "div",
                                  { className: "d-flex pt-2" },
                                  d.a.createElement(
                                    "span",
                                    {
                                      className:
                                        "img-sm rounded-circle bg-success text-white text-avatar",
                                    },
                                    "OB",
                                  ),
                                  d.a.createElement(
                                    "div",
                                    { className: "wrapper ml-2" },
                                    d.a.createElement(
                                      "p",
                                      {
                                        className: "mb-n1 font-weight-semibold",
                                      },
                                      "Olive Bridges",
                                    ),
                                    d.a.createElement("small", null, "162543"),
                                  ),
                                  d.a.createElement(
                                    "small",
                                    { className: "text-muted ml-auto" },
                                    "7 Hours ago",
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
                      { className: "row" },
                      d.a.createElement(
                        "div",
                        { className: "col-md-4 grid-margin stretch-card" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body" },
                            d.a.createElement(
                              "h4",
                              { className: "card-title mb-0" },
                              "Recent Events",
                            ),
                            d.a.createElement(
                              "div",
                              { className: "d-flex py-2 border-bottom" },
                              d.a.createElement(
                                "div",
                                { className: "wrapper" },
                                d.a.createElement(
                                  "small",
                                  { className: "text-muted" },
                                  "Mar 14, 2019",
                                ),
                                d.a.createElement(
                                  "p",
                                  {
                                    className:
                                      "font-weight-semibold text-gray mb-0",
                                  },
                                  "Change in Directors",
                                ),
                              ),
                              d.a.createElement(
                                "small",
                                { className: "text-muted ml-auto" },
                                "Edit event",
                              ),
                            ),
                            d.a.createElement(
                              "div",
                              { className: "d-flex py-2 border-bottom" },
                              d.a.createElement(
                                "div",
                                { className: "wrapper" },
                                d.a.createElement(
                                  "small",
                                  { className: "text-muted" },
                                  "Mar 14, 2019",
                                ),
                                d.a.createElement(
                                  "p",
                                  {
                                    className:
                                      "font-weight-semibold text-gray mb-0",
                                  },
                                  "Other Events",
                                ),
                              ),
                              d.a.createElement(
                                "small",
                                { className: "text-muted ml-auto" },
                                "Edit event",
                              ),
                            ),
                            d.a.createElement(
                              "div",
                              { className: "d-flex py-2 border-bottom" },
                              d.a.createElement(
                                "div",
                                { className: "wrapper" },
                                d.a.createElement(
                                  "small",
                                  { className: "text-muted" },
                                  "Mar 14, 2019",
                                ),
                                d.a.createElement(
                                  "p",
                                  {
                                    className:
                                      "font-weight-semibold text-gray mb-0",
                                  },
                                  "Quarterly Report",
                                ),
                              ),
                              d.a.createElement(
                                "small",
                                { className: "text-muted ml-auto" },
                                "Edit event",
                              ),
                            ),
                            d.a.createElement(
                              "div",
                              { className: "d-flex pt-2" },
                              d.a.createElement(
                                "div",
                                { className: "wrapper" },
                                d.a.createElement(
                                  "small",
                                  { className: "text-muted" },
                                  "Mar 14, 2019",
                                ),
                                d.a.createElement(
                                  "p",
                                  {
                                    className:
                                      "font-weight-semibold text-gray mb-0",
                                  },
                                  "Change in Directors",
                                ),
                              ),
                              d.a.createElement(
                                "small",
                                { className: "text-muted ml-auto" },
                                "Edit event",
                              ),
                            ),
                            d.a.createElement(
                              "a",
                              {
                                className: "d-block mt-5",
                                href: "!#",
                                onClick: function (e) {
                                  return e.preventDefault();
                                },
                              },
                              "Show all",
                            ),
                          ),
                        ),
                      ),
                      d.a.createElement(
                        "div",
                        { className: "col-md-4 grid-margin stretch-card" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body" },
                            d.a.createElement(
                              "div",
                              {
                                className:
                                  "d-flex justify-content-between pb-3",
                              },
                              d.a.createElement(
                                "h4",
                                { className: "card-title mb-0" },
                                "Activities",
                              ),
                              d.a.createElement(
                                "p",
                                { className: "mb-0 text-muted" },
                                "20 finished, 5 remaining",
                              ),
                            ),
                            d.a.createElement(
                              "ul",
                              { className: "timeline" },
                              d.a.createElement(
                                "li",
                                { className: "timeline-item" },
                                d.a.createElement(
                                  "p",
                                  { className: "timeline-content" },
                                  d.a.createElement(
                                    "a",
                                    {
                                      href: "!#",
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                    },
                                    "Ben Tossell",
                                  ),
                                  " assign you a task",
                                ),
                                d.a.createElement(
                                  "p",
                                  { className: "event-time" },
                                  "Just now",
                                ),
                              ),
                              d.a.createElement(
                                "li",
                                { className: "timeline-item" },
                                d.a.createElement(
                                  "p",
                                  { className: "timeline-content" },
                                  d.a.createElement(
                                    "a",
                                    {
                                      href: "!#",
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                    },
                                    "Ben Tossell",
                                  ),
                                  " assign you a task",
                                ),
                                d.a.createElement(
                                  "p",
                                  { className: "event-time" },
                                  "Just now",
                                ),
                              ),
                              d.a.createElement(
                                "li",
                                { className: "timeline-item" },
                                d.a.createElement(
                                  "p",
                                  { className: "timeline-content" },
                                  d.a.createElement(
                                    "a",
                                    {
                                      href: "!#",
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                    },
                                    "Ben Tossell",
                                  ),
                                  " assign you a task",
                                ),
                                d.a.createElement(
                                  "p",
                                  { className: "event-time" },
                                  "Just now",
                                ),
                              ),
                              d.a.createElement(
                                "li",
                                { className: "timeline-item" },
                                d.a.createElement(
                                  "p",
                                  { className: "timeline-content" },
                                  d.a.createElement(
                                    "a",
                                    {
                                      href: "!#",
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                    },
                                    "Ben Tossell",
                                  ),
                                  " assign you a task",
                                ),
                                d.a.createElement(
                                  "p",
                                  { className: "event-time" },
                                  "Just now",
                                ),
                              ),
                              d.a.createElement(
                                "li",
                                { className: "timeline-item" },
                                d.a.createElement(
                                  "p",
                                  { className: "timeline-content" },
                                  d.a.createElement(
                                    "a",
                                    {
                                      href: "!#",
                                      onClick: function (e) {
                                        return e.preventDefault();
                                      },
                                    },
                                    "Ben Tossell",
                                  ),
                                  " assign you a task",
                                ),
                                d.a.createElement(
                                  "p",
                                  { className: "event-time" },
                                  "Just now",
                                ),
                              ),
                            ),
                            d.a.createElement(
                              "a",
                              {
                                className: "d-block mt-3",
                                href: "!#",
                                onClick: function (e) {
                                  return e.preventDefault();
                                },
                              },
                              "Show all",
                            ),
                          ),
                        ),
                      ),
                      d.a.createElement(
                        "div",
                        { className: "col-md-4 grid-margin stretch-card" },
                        d.a.createElement(
                          "div",
                          { className: "card" },
                          d.a.createElement(
                            "div",
                            { className: "card-body" },
                            d.a.createElement(
                              "h4",
                              { className: "card-title mb-0" },
                              "People Also Watch",
                            ),
                            d.a.createElement(
                              "div",
                              { className: "table-responsive" },
                              d.a.createElement(
                                "table",
                                { className: "table table-stretched" },
                                d.a.createElement(
                                  "thead",
                                  null,
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement("th", null, "Symbol"),
                                    d.a.createElement("th", null, "Last Price"),
                                    d.a.createElement("th", null, "Change"),
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
                                      null,
                                      d.a.createElement(
                                        "p",
                                        {
                                          className:
                                            "mb-1 text-dark font-weight-medium",
                                        },
                                        "NFLX",
                                      ),
                                      d.a.createElement(
                                        "small",
                                        { className: "font-weight-medium" },
                                        "Netflix, Inc.",
                                      ),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      { className: "font-weight-medium" },
                                      "$250.00",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      {
                                        className:
                                          "text-success font-weight-medium",
                                      },
                                      "+12.64",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "p",
                                        {
                                          className:
                                            "mb-1 text-dark font-weight-medium",
                                        },
                                        "TSLA",
                                      ),
                                      d.a.createElement(
                                        "small",
                                        { className: "font-weight-medium" },
                                        "Tesla, Inc.",
                                      ),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      { className: "font-weight-medium" },
                                      "$458.00",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      {
                                        className:
                                          "text-danger font-weight-medium",
                                      },
                                      "-14.53",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "p",
                                        {
                                          className:
                                            "mb-1 text-dark font-weight-medium",
                                        },
                                        "GOOG",
                                      ),
                                      d.a.createElement(
                                        "small",
                                        { className: "font-weight-medium" },
                                        "Alphabet, Inc.",
                                      ),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      { className: "font-weight-medium" },
                                      "$250.00",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      {
                                        className:
                                          "text-danger font-weight-medium",
                                      },
                                      "+12.64",
                                    ),
                                  ),
                                  d.a.createElement(
                                    "tr",
                                    null,
                                    d.a.createElement(
                                      "td",
                                      null,
                                      d.a.createElement(
                                        "p",
                                        {
                                          className:
                                            "mb-1 text-dark font-weight-medium",
                                        },
                                        "AMZN",
                                      ),
                                      d.a.createElement(
                                        "small",
                                        { className: "font-weight-medium" },
                                        "Amazon.com, Inc.",
                                      ),
                                    ),
                                    d.a.createElement(
                                      "td",
                                      { className: "font-weight-medium" },
                                      "$546.00",
                                    ),
                                    d.a.createElement(
                                      "td",
                                      {
                                        className:
                                          "text-success font-weight-medium",
                                      },
                                      "+24.34",
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            d.a.createElement(
                              "a",
                              {
                                className: "d-block mt-3",
                                href: "!#",
                                onClick: function (e) {
                                  return e.preventDefault();
                                },
                              },
                              "Show all",
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            o
          );
        })(o.Component);
      a.default = v;
    },
  },
]);
//# sourceMappingURL=11.fd046cfa.chunk.js.map
