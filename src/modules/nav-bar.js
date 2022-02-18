import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

const MainNav = () => {
  const {isAuthenticated} = useAuth0();
  return(
    isAuthenticated ? 
      <Nav className="mr-auto">
        <Nav.Link
        as={RouterNavLink}
        to="/"
        >
            Home 
        </Nav.Link>
        <Nav.Link
        as={RouterNavLink}
        to="/profile"
        >
            Profile
        </Nav.Link>
      </Nav>
:<Nav className="mr-auto">Guest</Nav>);
};

const AuthNav = () => {
  const {isAuthenticated} = useAuth0();
    return(
        <Nav className="justify-content-end">
            {isAuthenticated ? <LogoutButton/>:<LoginButton/>}
        </Nav>
    )
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;