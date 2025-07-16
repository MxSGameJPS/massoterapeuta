import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const feedbacks = [
  {
    nome: "Fernanda da Silva",
    foto: "https://randomuser.me/api/portraits/women/44.jpg",
    texto:
      "Melhor sensação do mundo é o toque das mãos da profissional Alice, proprietária desse cantinho abençoado!!! É mais que recomendar, quase obrigatório ter essa experiência incrível.",
  },
  {
    nome: "Rafaela S.",
    foto: "https://randomuser.me/api/portraits/women/65.jpg",
    texto:
      "Amooo o lugar e a Alice!! Mãos de fadas acompanhadas de uma ótima conversa!",
  },
  {
    nome: "Ana Clara",
    foto: "https://randomuser.me/api/portraits/women/68.jpg",
    texto: "Super indico. Massagem nota mil. Mãos abençoadas.",
  },
];

const Feedbacks = () => (
  <Section id="feedbacks">
    <Titulo>O que acham do meu trabalho!</Titulo>
    <Cards>
      {feedbacks.map((f, i) => (
        <Card key={i}>
          <User>
            <Foto src={f.foto} alt={f.nome} />
            <Nome>{f.nome}</Nome>
          </User>
          <Texto>"{f.texto}"</Texto>
        </Card>
      ))}
    </Cards>   
  </Section>
);

const Section = styled.section`
  width: 100%;
  padding: 3.5rem 1rem 2.5rem 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.h2`
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 2.3rem;
  color: #1a2b1f;
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
    background: #6daf8bff;
    border-radius: 2px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 2.5rem;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled.div`
  background: #ecf4ef;
  border-radius: 0.7rem;
  padding: 2.2rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 180px;
  color: #444;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  font-size: 1.18rem;
  @media (max-width: 700px) {
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
    font-size: 1rem;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.1rem;
`;

const Foto = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const Nome = styled.span`
  font-size: 1.08rem;
  color: #444;
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 400;
`;

const Texto = styled.p`
  font-size: 1.18rem;
  color: #555;
  font-family: "Montserrat", Arial, sans-serif;
  margin: 0;
  line-height: 1.5;
`;

const NavSetas = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2.2rem;
`;

const Seta = styled.button`
  background: #6daf8bff;
  color: #fff;
  border: none;
  border-radius: 2rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #065a3dff;
  }
`;

const GoogleLink = styled.a`
  color: #4b8b72;
  font-size: 1.08rem;
  text-align: center;
  margin-top: 1.2rem;
  text-decoration: none;
  display: block;
  &:hover {
    text-decoration: underline;
  }
`;

export default Feedbacks;
