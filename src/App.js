import "./App.css";
import React from "react";
import DataFetching from "./pages/DataFetching";
import IndividualPost from "./pages/IndividualPost";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <hr />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <ErrorBoundary>
                <DataFetching />
              </ErrorBoundary>
            )}
          />
          <Route
            path="/dashboard"
            exact
            render={() => (
              <ErrorBoundary>
                <DataFetching />
              </ErrorBoundary>
            )}
          />
          <Route
            path="/dashboard/:postId"
            exact
            render={() => (
              <ErrorBoundary>
                <IndividualPost />
              </ErrorBoundary>
            )}
            component={IndividualPost}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
