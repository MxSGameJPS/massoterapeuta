import styled from "styled-components";
import {
  FaSnowflake,
  FaLock,
  FaMoneyBillWave,
  FaCreditCard,
} from "react-icons/fa";

const conveniencias = [
  {
    titulo: "Ambiente Climatizado",
    icone: <FaSnowflake size={38} />,
    texto: "Faça frio ou calor, a sua experiência será sempre fantástica.",
  },
  {
    titulo: "Privacidade e Exclusividade",
    icone: <FaLock size={38} />,
    texto:
      "Ambiente acolhedor e intimista, onde a privacidade das pacientes é importante.",
  },
  {
    titulo: "Descontos Incríveis",
    icone: <FaMoneyBillWave size={38} />,
    texto: "Ganhe descontos imperdíveis contratando pacotes com 10 sessões.",
  },
  {
    titulo: "Pagamento Parcelado",
    icone: <FaCreditCard size={38} />,
    texto: "Pague em até 6 vezes no cartão de crédito!",
  },
];

const Conveniencias = () => (
  <Section id="conveniências">
    <Bg />
    <Overlay />
    <Content>
      <Titulo>Conveniências</Titulo>
      <Cards>
        {conveniencias.map((c, i) => (
          <Card key={i}>
            <IconWrap>{c.icone}</IconWrap>
            <CardTitulo>{c.titulo}</CardTitulo>
            <CardTexto>{c.texto}</CardTexto>
          </Card>
        ))}
      </Cards>
    </Content>
  </Section>
);

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 420px;
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
  background: url("/image/fundo2.jpg") center center/cover no-repeat;
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
  background: rgba(30, 30, 30, 0.55);
  z-index: 2;
  box-shadow: 0 0 80px 20px rgba(20, 20, 20, 0.55) inset,
    0 8px 32px 0 rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 3.5rem 2rem 3.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    padding: 2rem 0.5rem 2rem 0.5rem;
  }
`;

const Titulo = styled.h2`
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2.5rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  &::after {
    content: "";
    display: block;
    margin: 0.7rem auto 0 auto;
    width: 80px;
    height: 3px;
    background: #b8e0d2;
    border-radius: 2px;
  }
  @media (max-width: 700px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border: 1.5px solid #b8e0d2;
  border-radius: 1.1rem;
  padding: 2.2rem 1.2rem 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
  min-height: 220px;
  color: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  transition: box-shadow 0.2s, border 0.2s;
  &:hover {
    box-shadow: 0 4px 24px rgba(106, 59, 160, 0.13);
    border: 1.5px solid #6daf8bff;
  }
  @media (max-width: 700px) {
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
    min-height: 160px;
  }
`;

const IconWrap = styled.div`
  color: #b8e0d2;
  margin-bottom: 1.1rem;
`;

const CardTitulo = styled.h3`
  font-size: 1.18rem;
  color: #fff;
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 700;
  margin-bottom: 0.7rem;
  text-align: center;
`;

const CardTexto = styled.p`
  font-size: 1rem;
  color: #e6f2ee;
  text-align: center;
  font-family: "Montserrat", Arial, sans-serif;
`;

export default Conveniencias;
