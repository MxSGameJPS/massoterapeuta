import styled from "styled-components";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Permita() {
  return (
    <Section>
      <ContainerTexto>
        <Title>Permita-se sentir.</Title>
        <SubTitulo>
          Cuide do seu corpo, da sua mente e da sua essência.
        </SubTitulo>
        <Texto>
          Essa é a sua chance de se reconectar com quem você é de verdade —
          restaurando o equilíbrio, despertando o amor-próprio e fortalecendo
          sua autoestima. Viva uma experiência transformadora de bem-estar, onde
          cada toque é um convite ao autocuidado e à renovação. Seu bem-estar
          merece ser prioridade. 🌿
        </Texto>
        <IconLinks>
          <IconButton
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={28} />
          </IconButton>
          <IconButton
            href="https://instagram.com/SEUINSTAGRAM"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </IconButton>
        </IconLinks>
      </ContainerTexto>
      <ImageContainer>
        <Image src="/image/permita.jpg" alt="Relaxamento" />
        <ImageNina src="/image/Nina.webp" alt="Bem-estar" />
      </ImageContainer>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 2rem 1rem;
  background: linear-gradient(120deg, #fafafaff 0%, #c3ddd4ff 100%);
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2.5rem;
    padding: 2rem 0.5rem;
  }
  @media (max-width: 600px) {
    padding: 1.2rem 0rem;
    gap: 1.5rem;
  }
`;

const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 600px;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    max-width: 90%;
    width: 100%;
  }
`;

const Title = styled.h2`
  font-family: "Rouge Script", cursive, Arial, sans-serif;
  font-size: 2.5rem;
  margin: 0 0 1rem 0;
`;

const SubTitulo = styled.p`
  font-size: 1.2rem;
  margin: -1.5rem 0 1rem 0;
`;

const Texto = styled.p`
  font-size: 1rem;
`;

const IconLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fafafaff;
  border: 2px solid #c3ddd4ff;
  color: #c3ddd4ff;
  transition: background 0.3s, color 0.3s;
  font-size: 1.5rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  &:hover {
    background: #c3ddd4ff;
    color: #fafafaff;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2.5rem;
  margin-top: 1.5rem;
  position: relative;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    width: 100%;
    max-width: 220px;
  }
`;

const Image = styled.img`
  border-radius: 8px;
  width: 360px;
  height: 420px;
  object-fit: cover;
  background: #fafafa;
  margin-top: 35px;
  @media (max-width: 900px) {
    width: 270px;
    height: 320px;
    margin-top: 18px;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 320px;
    height: auto;
    margin-top: 0;
  }
`;

const ImageNina = styled.img`
  border-radius: 8px;
  width: 360px;
  height: 420px;
  object-fit: cover;
  background: #fafafa;
  @media (max-width: 900px) {
    width: 270px;
    height: 320px;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 320px;
    height: auto;
  }
`;
