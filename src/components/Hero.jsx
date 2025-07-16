import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

const Hero = ({ children }) => (
  <HeroSection>
    {children && (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        {children}
      </div>
    )}
    <HeroContent>
      <HeroTitle>Seu Nome Aqui</HeroTitle>
      <HeroSubtitle>Bem-estar, relaxamento e saúde para você</HeroSubtitle>
      <HeroText>
        Especialista em massagens para alívio de tensões, dores e promoção do
        bem-estar. Atendimento acolhedor e personalizado em Novo Hamburgo.
        Agende seu momento de cuidado!
      </HeroText>
      <WhatsBtn
        href="https://wa.me/5199999-9999"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={22} /> Iniciar conversa no WhatsApp
      </WhatsBtn>
    </HeroContent>
  </HeroSection>
);

const HeroSection = styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(30, 40, 40, 0.6), rgba(30, 40, 40, 0.6)),
    url("/image/hero.jpg") center/cover no-repeat;
  position: relative;
  @media (max-width: 900px) {
    min-height: 70vh;
  }
  @media (max-width: 600px) {
    min-height: 60vh;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  margin-left: 17vw;
  color: #fff;
  z-index: 2;
  @media (max-width: 900px) {
    margin-left: 0;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    margin: 0 auto;
    max-width: 90%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroTitle = styled.h1`
  font-family: "Rouge Script", cursive, Arial, sans-serif;
  font-size: 4.3rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: 1px;
  @media (max-width: 900px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.1rem;
    margin-bottom: 1rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  line-height: 1.1;
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  color: #f1f1f1;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.1rem;
  }
`;

const WhatsBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  background: #6fcf97;
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.9rem 2.2rem;
  border-radius: 2rem;
  text-decoration: none;
  box-shadow: 0 2px 8px #0002;
  transition: background 0.2s;
  &:hover {
    background: #4fa86b;
    color: #fff;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    padding: 0.7rem 1.2rem;
    gap: 0.5rem;
  }
`;

export default Hero;
