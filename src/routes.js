import React from "react";
import { Route, Router } from "react-router-dom";
import history from "./history";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./store/reducers";
import ResultContainer from "./container/ResultContainer";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route path="/" render={props => <ResultContainer {...props} />} />
        </div>
      </Router>
    </Provider>
  );
};
