import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Navbar from './components/pages/Navbar/Navbar';
// import Home from './components/pages/Home/Home';
// import Login from './components/pages/Login/Login';
// import Register from './components/pages/Register/Register';

import './App.css';
import Contact from "./conponents/Contact/Contact";
import Dashboard from "./conponents/Dashboard/Dashboard";
import Explore from "./conponents/Explore/Explore";
import AuthProvider from "./conponents/Firebase/contexts/AuthProvider";
import Home from "./conponents/Home/Home";
import Login from "./conponents/Login/Login";
import PrivateRoute from "./conponents/PrivateRoute/PrivateRoute";
import ProductDetail from "./conponents/ProductDetail/ProductDetail";

import Register from "./conponents/Register/Register";
function App() {
  return (
    <AuthProvider>
    <Router>
    <div>
      

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route path="/contact">
             <Contact /> 
          </Route>
        <Route path="/Register">
             <Register /> 
          </Route>
        <Route path="/Login">
             <Login /> 
          </Route>
        <PrivateRoute path="/Dashboard">
             <Dashboard /> 
          </PrivateRoute>
        <Route path="/explore">
             <Explore /> 
          </Route>
          <PrivateRoute path="/productDetail/:Productid">
             <ProductDetail /> 
          </PrivateRoute>
        
      </Switch>
    </div>
  </Router>
  </AuthProvider>
  );
}

export default App;