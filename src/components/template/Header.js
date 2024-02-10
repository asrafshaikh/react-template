import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  return (
    <div>
      <Navbar color="danger" light expand="md">
        <NavbarBrand href="/">React Application
        <img
          alt="Logo"
          src="/path/to/your/logo.png" // Replace with the path to your logo image
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Your App Name
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/"></NavLink>
          </NavItem>
          <NavItem>
             
            <NavLink href="https://github.com/reactstrap/reactstrap">
              
            </NavLink>
          
          </NavItem>
        </Nav>
        <NavbarText>
          <div>
            hello
            <AiOutlineUser></AiOutlineUser>
          </div>
        </NavbarText>
      </Navbar>
    </div>
  );
};

export default Header;