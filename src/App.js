import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* import TimeLine from "./components/TimeLine"; */

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' exact component={Home} />
       {/*  <Route path='/timeline' component={TimeLine} /> */}
      </Switch>
    </Router>
  );
}

export default App;
