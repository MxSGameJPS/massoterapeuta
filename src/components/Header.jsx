import styled from "styled-components";
import { FaSpa, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <LogoHamburgerWrap>
        <Logo>
          <FaSpa className="logo-icon" />
          Seu Nome Aqui ou Logo
        </Logo>
        <Hamburger
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? (
            <FaTimes className="hamburger-icon" />
          ) : (
            <FaBars className="hamburger-icon" />
          )}
        </Hamburger>
      </LogoHamburgerWrap>
      <Nav open={menuOpen}>
        <NavBtn href="#inicio" onClick={() => setMenuOpen(false)}>
          Início
        </NavBtn>
        <NavBtn href="#sobre" onClick={() => setMenuOpen(false)}>
          Sobre
        </NavBtn>
        <NavBtn href="#servicos" onClick={() => setMenuOpen(false)}>
          Serviços
        </NavBtn>
        <NavBtn href="#contato" onClick={() => setMenuOpen(false)}>
          Contato
        </NavBtn>
      </Nav>
      {menuOpen && <Overlay onClick={() => setMenuOpen(false)} />}
    </HeaderContainer>
  );
};

const LogoHamburgerWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  @media (max-width: 800px) {
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    gap: 0.3rem;
    justify-content: space-between;
    width: 100%;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4vw 1rem 4vw;
  background: transparent;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  @media (max-width: 800px) {
    padding: 0.7rem 2vw 0.7rem 2vw;
  }
  @media (max-width: 500px) {
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
    margin: 0 auto;
    width: 100%;
    justify-content: space-between;
  }
`;

const Logo = styled.h1`
  font-family: "Dancing Script", cursive, Arial, sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  background: linear-gradient(90deg, #fafafaff, #b925b1ff, #ffffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  z-index: 102;
  .logo-icon {
    font-size: 32px;
    color: #6a3ba0ff;
  }
  @media (max-width: 800px) {
    font-size: 1.08rem;
    gap: 0.4rem;
    .logo-icon {
      font-size: 22px;
    }
  }
  @media (max-width: 500px) {
    font-size: 0.98rem;
    gap: 0.25rem;
    .logo-icon {
      font-size: 17px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 800px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    left: auto;
    width: 260px;
    height: 100vh;
    background: #c3ddd4ff ;
    padding: 70px 1rem 1.2rem 1rem;
    gap: 1.1rem;
    z-index: 300;
    box-shadow: -2px 0 16px rgba(0, 0, 0, 0.08);
    transform: none;
    transition: none;

    @media (max-width: 500px) {
      width: 180px;
      padding: 70px 0.2rem 0.7rem 0.2rem;
      gap: 0.5rem;
    }
  }
`;

const NavBtn = styled.a`
  color: #fdfdfdff;
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 400;
  font-size: 1.08rem;
  padding: 0.5rem 1.3rem;
  border-radius: 1.2rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  letter-spacing: 1px;
  cursor: pointer;

  @media (max-width: 800px) {
    font-size: 1rem;
    padding: 0.4rem 0.7rem;
  }
  @media (max-width: 500px) {
    font-size: 0.95rem;
    padding: 0.3rem 0.5rem;
    color: #065a3dff;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: #c3ddd4ff;
  cursor: pointer;
  z-index: 103;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 800px) {
    display: flex;
    margin-left: 0.2rem;
    margin-right: 0;
    height: 32px;
    width: 32px;
    padding: 0;
    .hamburger-icon {
      font-size: 22px;
    }
  }
  @media (max-width: 500px) {
    height: 26px;
    width: 26px;
    .hamburger-icon {
      font-size: 16px;
    }
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.25);
    z-index: 100;
  }
`;

export default Header;
