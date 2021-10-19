import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Vets from './components/Vets/Vets';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/vets">
            <Vets></Vets>
          </PrivateRoute>
          <Route path="/contact">
             <Contact></Contact>
             </Route>
             

             <Route path="/login">
               <Login></Login>
             </Route>
             <Route path="/register">
               <Register></Register>
             </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
     
    </div>
  );
}

export default App;
