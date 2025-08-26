import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./constants/routes";

import Spinner from "../app/shared/Spinner";
import UserManagementDrawer from "./tables/NewUser";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));
const GareUpcoming = lazy(() => import("./basic-ui/GareUpcoming"));
const DashboardPanoramica = lazy(() => import("./form-elements/BasicElements"));
const GestioneCommesse = lazy(() => import("./commerciale/Gestione"));
const DashboardOre = lazy(() => import("./produzione/DashboardOre"));
const PanoramicaDashboard = lazy(() => import("./produzione/DashboardOre"));
const Cordinamento = lazy(() => import("./commerciale/Cordinamento"));
const BasicTable = lazy(() => import("./tables/BasicTable"));
const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));
const Login = lazy(() => import("./user-pages/Login"));
const GestioneCommessaUI = lazy(
  () => import("./produzione/GestioneCommessaUI"),
);

class AppRoutes extends Component {
  render() {
    const isLoggedIn = localStorage.getItem("isLogin");

    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          {/* Authentication Routes */}
          <Route path={ROUTES.LOGIN} component={Login} />
          {!isLoggedIn && <Redirect to={ROUTES.LOGIN} />}

          {/* Dashboard Routes */}
          <Route exact path={ROUTES.HOME} component={Dashboard} />
          <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />

          {/* Basic UI Routes */}
          <Route path={ROUTES.UI_BUTTONS} component={Buttons} />
          <Route path={ROUTES.UI_DROPDOWNS} component={Dropdowns} />

          {/* Gare Routes */}
          <Route path={ROUTES.GARE_UPCOMING} component={GareUpcoming} />

          {/* Commerciale Routes */}
          <Route
            path={ROUTES.COMMERCIALE_COMMESSE}
            component={GestioneCommesse}
          />
          <Route
            path={ROUTES.COMMERCIALE_CORDINAMENTO}
            component={Cordinamento}
          />

          {/* Produzione Routes */}
          <Route
            path={ROUTES.PRODUZIONE_DASHBOARD}
            component={PanoramicaDashboard}
          />
          <Route
            path={ROUTES.PRODUZIONE_DASHBOARD_GLOBAL}
            component={DashboardOre}
          />
          <Route
            path={ROUTES.PRODUZIONE_GESTIONE_COMMESSA}
            component={GestioneCommessaUI}
          />

          {/* Tecnico Routes */}
          <Route
            path={ROUTES.TECNICO_DASHBOARD}
            component={DashboardPanoramica}
          />

          {/* Table Routes */}
          <Route path={ROUTES.TABLES_BASIC} component={BasicTable} />
          <Route path={ROUTES.TABLES_USERS} component={UserManagementDrawer} />

          {/* Other Routes */}
          <Route path={ROUTES.ICONS} component={BasicTable} />
          <Route path={ROUTES.CHARTS} component={BasicTable} />

          {/* Error Routes */}
          <Route path={ROUTES.ERROR_404} component={Error404} />
          <Route path={ROUTES.ERROR_500} component={Error500} />

          {/* Default redirect */}
          <Redirect to={ROUTES.LOGIN} />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
