import styled from "styled-components";

interface IStyledNavProps {
  open: boolean;
}

export const Container = styled.div`
  top: 0;
  background-color: #e5e5e5;
  height: 5rem;
  /* max-width: 100rem;
  margin: 0 auto; */
  align-items: center;
`;

export const Nav = styled.nav`
  max-width: 100rem;
  margin: 0 auto;

  height: 5rem;
  /* border-bottom: 2px solid ${({ theme }) => theme.colors.secondary}; */
  padding: 0 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  img {
    width: 12.5rem;
  }
`;

export const MenuIcon = styled.div<IStyledNavProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
  }

  svg {
    font-size: 3rem;
    color: ${({ open }) => (open ? "#fff" : "#000ee00")};
    @media (min-width: 767px) {
      display: none;
    }
  }
`;

export const NavMenu = styled.ul<IStyledNavProps>`
  width: 100%;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  align-items: center;
  margin-left: auto;

  a {
    padding: 18px 10px;
    text-decoration: none;
    /* margin: 0 auto; */
    color: #191919;
    font-size: 1.5rem;
  }
  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    text-decoration: none;
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #3e3b47;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a {
      color: #fff;
    }
  }
`;
