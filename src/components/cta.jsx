import styled from "styled-components";

export default function Cta() {
  return (
    <Section>
      <Title>Agende sua sessão de massoterapia</Title>
      <p>
        Entre em contato conosco para agendar sua sessão de massoterapia e
        descubra como podemos ajudar você a relaxar e se sentir melhor.
      </p>
      <Button href="#contato">Entrar em contato</Button>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  background: linear-gradient(120deg, #fafafaff 0%, #c3ddd4ff 100%);
  border-radius: 10px;
  margin: 0rem auto;

  @media (max-width: 600px) {
    padding: 2rem;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-family: "Helvetica", cursive;
  font-size: 2.5rem;
  color: #6daf8bff;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Button = styled.a`
  padding: 1rem 4rem;
  background-color: #6daf8bff;
  color: #fff;
  border-radius: 45px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #99c4acff;
    color: #fff;
  }

  @media (max-width: 600px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;
