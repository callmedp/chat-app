import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map(route => <Route
            key={route.path}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />)
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
