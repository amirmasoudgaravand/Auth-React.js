import React from "react";

import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.component";
import Nav from "./components/Nav.component";
import Login from "./components/Login.component";
import Register from "./components/Register.component";

import {BrowserRouter,Switch,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
    <Nav />
     <div className="auth-wrapper">
       <div className="auth-inner">
<Switch>
<Route exact path="/" component={Home} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/register" component={Register} />
</Switch>
        
       </div>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
