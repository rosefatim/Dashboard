import "./App.css";
import Home from "./components/tabs/Layout";
import Login from "./components/tabs/Login";
import Error from "./components/tabs/Error";
// import User from './components/tabs/User';
// import Chart from './components/tabs/Chart';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> <Login /> </Route>
          <Route path="/main"> <Home /> </Route>
          <Route exact path="*"> <Error /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
