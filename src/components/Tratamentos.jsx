import styled from "styled-components";

const tratamentos = [
  {
    nome: "Massagem Terapêutica",
    imagem: "https://vittaespa.com.br/wp-content/uploads/2021/01/2.jpg",
    descricao:
      "Alívio de tensões, dores e estresse. Técnica personalizada para seu bem-estar físico e mental.",
  },
  {
    nome: "Drenagem Linfática",
    imagem:
      "https://shiatsuluizasato.com.br/wp-content/uploads/2025/01/Head-Blog.jpg",
    descricao:
      "Estimula o sistema linfático, reduz inchaços e melhora a circulação. Ideal para retenção de líquidos.",
  },
  {
    nome: "Massagem Modeladora",
    imagem:
      "https://www.clinicahumanita.com.br/wp-content/uploads/2024/02/Drenomodeladora-800x800.png",
    descricao:
      "Técnica vigorosa para remodelar o corpo, ativar a circulação e auxiliar na redução de medidas.",
  },
  {
    nome: "Massagem Facial",
    imagem:
      "https://www.clinicahumanita.com.br/wp-content/uploads/2024/02/Massagem-lifting-facial.png",
    descricao:
      "Relaxamento e rejuvenescimento do rosto, melhora da circulação e viço da pele.",
  },
  {
    nome: "Tratamento com Ventosas",
    imagem: "https://caapua.com.br/wp-content/uploads/2023/08/lash-1-1.png",
    descricao:
      "Terapia milenar que utiliza ventosas para aliviar dores, tensões e melhorar a circulação.",
  },
  {
    nome: "Tratamento com Ventosas",
    imagem: "https://caapua.com.br/wp-content/uploads/2023/08/lash-1-1.png",
    descricao:
      "Terapia milenar que utiliza ventosas para aliviar dores, tensões e melhorar a circulação.",
  },
];

const Tratamentos = () => (
  <Section id="tratamentos">
    <Titulo>Tratamentos</Titulo>
    <Grid>
      {tratamentos.map((t, i) => (
        <Card key={i}>
          <Img src={t.imagem} alt={t.nome} />
          <Nome>{t.nome}</Nome>
          <Descricao>{t.descricao}</Descricao>
        </Card>
      ))}
    </Grid>
  </Section>
);

const Section = styled.section`
  padding: 3.5rem 2rem 3.5rem 2rem;
  background: #f8fafb;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 700px) {
    padding: 2rem 0.5rem 2rem 0.5rem;
  }
`;

const Titulo = styled.h2`
  font-family: "Dancing Script", cursive;
  font-size: 2.8rem;
  color: #6daf8bff;
  margin-bottom: 2.5rem;

  @media (max-width: 700px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  width: 100%;
  max-width: 1300px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    width: 90%;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.09);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.2rem 1.5rem 2.2rem 1.5rem;
  transition: box-shadow 0.2s;
  min-height: 370px;
  max-width: 420px;
  margin: 0 auto;
  &:hover {
    box-shadow: 0 8px 32px rgba(106, 59, 160, 0.15);
  }

  @media (max-width: 700px) {
    padding: 1.2rem 0.5rem 1.2rem 0.5rem;
    min-height: 280px;
    max-width: 90vw;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 260px;
  height: 180px;
  object-fit: cover;
  border-radius: 1.1rem;
  margin-bottom: 1.3rem;

  @media (max-width: 700px) {
    max-width: 80vw;
    height: 120px;
  }
`;

const Nome = styled.h3`
  font-size: 1.45rem;
  color: #065a3dff;
  margin-bottom: 1rem;
  font-family: "Montserrat", Arial, sans-serif;
  font-weight: 700;

  @media (max-width: 700px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`;

const Descricao = styled.p`
  font-size: 1.18rem;
  color: #6a3ba0ff;
  text-align: center;
  font-family: "Montserrat", Arial, sans-serif;
  margin-top: 0.2rem;

  @media (max-width: 700px) {
    font-size: 0.98rem;
  }
`;

export default Tratamentos;
