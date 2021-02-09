import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { Link } from "react-router-dom";

import logo from "../../assets/img/logo2.png";
import { useAuth } from "../../hooks/Auth";

import { Container, Nav, NavMenu, MenuIcon } from "./styles";

// interface Iheaderprops {
//   page: string;
// }
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Nav>
        <img src={logo} alt="" />
        <MenuIcon open={open} onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </MenuIcon>
        <NavMenu open={open}>
          {user ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/product/create">Create product</Link>
              <button type="button" onClick={signOut}>
                {" "}
                sair
              </button>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/signin">Signin</Link>
            </>
          )}
        </NavMenu>
      </Nav>
    </Container>
  );
};

export default Header;
