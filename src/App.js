import React from 'react';
import './App.css';
import {Route} from "react-router";
import Login from "./Login";
import Registro from "./Registro";
import Home from "./Home";
import DetalleProducto from "./DetalleProducto";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDOzuAO0_p9GVSwOHLzKww3W9auQYJ78FY",
    authDomain: "react-831dc.firebaseapp.com",
    databaseURL: "https://react-831dc.firebaseio.com",
    projectId: "react-831dc",
    storageBucket: "react-831dc.appspot.com",
    messagingSenderId: "762888472149",
    appId: "1:762888472149:web:14a70b46fa17fa4b5e36dc",
    measurementId: "G-W7SQP8S6PH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log("FIRE BASE " + firebase.database());

class App extends  React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand><Link to='/home' class="link">E-commerce</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href='/home' class="link" >Home</Nav.Link>
                        <Nav.Link href='/login' class="link">Login</Nav.Link>
                        <Nav.Link href='/registro' class="link">Registro</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>

        <div>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/registro" component={Registro} exact/>
            <Route path="/home" component={Home} exact/>
            <Route path="/detalle-producto/:id" component={DetalleProducto} exact/>
        </div>
    </div>
    )
  }

}

export default App;
