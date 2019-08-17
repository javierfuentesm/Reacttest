import React from "react";
import {
  Nav,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,

} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }



  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username:" +
        this.username.value +
        "Password" +
        this.password.value +
        "Remember" +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
           
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
               
               
                <NavItem>
                  <NavLink className="nav-link" to="/post">
                    <span className="fa fa-list fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/newpost">
                    <span className="fa fa-address-card fa-lg" /> New post
                  </NavLink>
                </NavItem>
              </Nav>
          
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Posts para Edteam</h1>
                <p>
                  Prueba para lata edición y eliminación de posts
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>

      </>
    );
  }
}
export default Header;
