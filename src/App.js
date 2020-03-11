import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import "./App.css";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>Basketball</Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, "home")}
            >
              Home
            </Button>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;
