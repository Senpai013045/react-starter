import * as React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import {store} from "./store";
import {ReduxDemo} from "./components/ui/ReduxDemo";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route>
            <div style={{padding: 10}}>
              <ReduxDemo />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
