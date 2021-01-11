import styled from "styled-components";

interface IStyledNavProps {
  open: boolean;
}

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 5rem;
  align-items: center;
`;

export const Nav = styled.nav`
  /* width: 100%; */
  height: 5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
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
    color: ${({ theme, open }) =>
      open ? theme.colors.secondary : theme.colors.secondary};
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
    color: ${(props) => props.theme.colors.textBase};
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.colors.background};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a {
      color: ${(props) => props.theme.colors.textBase};
    }
  }
`;
