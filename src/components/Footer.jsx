import styled from "styled-components";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => (
  <Section>
    <Bg />
    <Overlay />
    <Content>
      <Nome>Seu Nome ou Logo Aqui</Nome>
      <Endereco>
        Rua da Massagem, 1003, Centro
        <br />
        Novo Hamburgo, RS
        <br />
        (51) 99999-9999
      </Endereco>
      <Social>
        <IconLink
          href="https://wa.me/555199999-9999"
          target="_blank"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </IconLink>
        <IconLink
          href="https://instagram.com/"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </IconLink>
        <IconLink
          href="https://facebook.com/"
          target="_blank"
          aria-label="Facebook"
        >
          <FaFacebook />
        </IconLink>
      </Social>
      <Linha />
      <Copyright>
        Copyright © 2025 | Feito com <span>❤️</span> por Saulo Pavanello
      </Copyright>
    </Content>
  </Section>
);

const Section = styled.footer`
  position: relative;
  width: 100%;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url("/image/fundofooter.jpg") center center/cover no-repeat;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.68);
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 3.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const Nome = styled.h2`
  font-family: "Dancing Script", cursive;
  font-size: 2.7rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #fff;
`;

const Endereco = styled.p`
  font-size: 1.15rem;
  margin-bottom: 2.2rem;
  color: #fff;
  font-family: "Montserrat", Arial, sans-serif;
`;

const Social = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.2rem;
`;

const IconLink = styled.a`
  background: rgba(180, 180, 180, 0.18);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b8e0d2;
  font-size: 1.7rem;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #b8e0d2;
    color: #065a3dff;
  }
`;

const Linha = styled.hr`
  width: 80%;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  margin: 2.2rem 0 1.2rem 0;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: #e6f2ee;
  font-family: "Montserrat", Arial, sans-serif;
  span {
    color: #e25555;
    font-size: 1.1em;
    vertical-align: middle;
  }
`;

export default Footer;
