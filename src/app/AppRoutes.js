import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
import UserManagementDrawer from "./tables/NewUser";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));
const GareUpcoming = lazy(() => import("./basic-ui/GareUpcoming"));
const DashboardPanoramica = lazy(() => import("./form-elements/BasicElements"));
const GestioneCommesse = lazy(() => import("./commerciale/Gestione"));
const Cordinamento = lazy(() => import("./commerciale/Cordinamento"));
const BasicTable = lazy(() => import("./tables/BasicTable"));
const Mdi = lazy(() => import("./icons/Mdi"));
const ChartJs = lazy(() => import("./charts/ChartJs"));
const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));
const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

class AppRoutes extends Component {
  render() {
    const isLoggedIn = localStorage.getItem("isLogin");

    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          {/* Login e Registrazione accessibili sempre */}
          <Route path="/user-pages/login-1" component={Login} />

          {/* Se non loggato, redirect alla login */}
          {!isLoggedIn && <Redirect to="/user-pages/login-1" />}

          {/* Tutte le altre rotte (protette) */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route path="/gare/upcoming" component={GareUpcoming} />
          <Route path="/gestione/commesse" component={GestioneCommesse} />
          <Route path="/tecnico/dashboard" component={DashboardPanoramica} />
          <Route path="/produzione/cordinamento" component={Cordinamento} />
          <Route path="/tables/basic-table" component={BasicTable} />
          <Route path="/icons/mdi" component={BasicTable} />
          <Route path="/charts/chart-js" component={BasicTable} />
          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />
          <Route path="/basic-ui/newsuer" component={UserManagementDrawer} />
          {/* Default redirect se il path non è riconosciuto */}
          <Redirect to="/user-pages/login-1" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
