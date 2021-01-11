import React, { useState, useContext } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import { Link } from "react-router-dom";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import logo from "../../assets/img/logo2.png";
import { Container, Nav, NavMenu, MenuIcon } from "./styles";

interface Iheaderprops {
  toggleTheme(): void;
}
const Header: React.FC<Iheaderprops> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Nav>
        <img src={logo} alt="" />
        <MenuIcon open={open} onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </MenuIcon>
        <NavMenu open={open}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/signin">Signin</Link>

          <Switch
            onChange={toggleTheme}
            checked={title === "dark"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={colors.secondaryDark}
            onColor={colors.primaryDark}
          />
        </NavMenu>
      </Nav>
    </Container>
  );
};

export default Header;
