import React from "react";
import logo from "../../assets/img/logo2.png";
import Input from "../Input";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="" srcSet="" />
        <Input />
      </div>
    </Container>
  );
};

export default Header;
