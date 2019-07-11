import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
MDBCol, MDBIcon,
MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline
} from "mdbreact";
import SearchAppBar from './header';
import "./home.css";
import AboutMe from "./aboutme";

class Home extends React.Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

  render() {
    const overlay = (
      <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.toggleCollapse("navbarCollapse")} />
    );
    return (
      <div>
      <Router>
        <SearchAppBar />
        <div className="routing-main">
        <Route exact path='/' render={()=>(
          <div id="classicformpage">
          <MDBView>
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
            </MDBMask>
          </MDBView>
          <div className="footer">
            <a href="https://www.facebook.com/" id="fafa"><i className="fa fa-facebook-square" ></i></a>
            <a href="https://github.com/rajshah9914" id="fafa"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/raj-shah-b14115156/" id="fafa"><i className="fa fa-linkedin-square"></i></a>
        </div>
        </div>
        )
        }>
        </Route>
        </div>
      </Router>
      </div>
    );
  }
}

render(<Home />, document.getElementById('root'));

export default Home;