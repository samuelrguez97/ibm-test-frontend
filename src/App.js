import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { Grid } from "@material-ui/core";

import SupplierListContainer from "./pages/SupplierList/container/SupplierListContainer";
import SupplierDetailContainer from "./pages/SupplierDetail/container/SupplierDetailContainer";
import NotFoundContainer from "./pages/NotFound/container/NotFoundContainer";
import ErrorContainer from "./pages/Error/container/ErrorContainer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className="App-container"
      >
        <Grid container alignItems="center" justify="center">
          <Grid item xs={11} md={8} lg={6}>
            <Router>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/supplier" />}
                />
                <Route
                  exact
                  path="/supplier"
                  component={SupplierListContainer}
                />
                <Route
                  exact
                  path="/supplier/:id"
                  component={SupplierDetailContainer}
                />
                <Route exact path="/not-found" component={NotFoundContainer} />
                <Route exact path="/error" component={ErrorContainer} />
                <Route
                  exact
                  path="*"
                  render={() => <Redirect to="/not-found" />}
                />
              </Switch>
            </Router>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
