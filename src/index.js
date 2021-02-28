import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { AuthProvider } from "./context/Context";
import "semantic-ui-css/semantic.min.css";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPageE from "views/examples/RegisterPageE.js";
import RegisterPageF from "views/examples/RegisterPageF.js";
import EmployeePage from "./components/EmployeesPages/EmployeePage";
import EmployerPage from "./components/EmployerPages/EmployerPage";
import TransactionPageE from "./components/TransactionPage/TransactionPageE";
import TransactionPageF from "./components/TransactionPage/TransactionPageF";
import LoginPageE from "views/examples/LoginPageE";
import LoginPageF from "views/examples/LoginPageF";
// others

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route
          exact
          path="/employeePage"
          render={(props) => <EmployeePage {...props} />}
        />
        <Route
          exact
          path="/employerPage"
          render={(props) => <EmployerPage {...props} />}
        />
        <Route
          exact
          path="/transactionPageE"
          render={(props) => <TransactionPageE {...props} />}
        />
        <Route
          exact
          path="/transactionPageF"
          render={(props) => <TransactionPageF {...props} />}
        />
        <Route
          exact
          path="/login-page-f"
          render={(props) => <LoginPageF {...props} />}
        />
        <Route
          exact
          path="/login-page-e"
          render={(props) => <LoginPageE {...props} />}
        />
        <Route
          exact
          path="/register-page-e"
          render={(props) => <RegisterPageE {...props} />}
        />
        <Route
          exact
          path="/register-page-f"
          render={(props) => <RegisterPageF {...props} />}
        />
      </Switch>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
