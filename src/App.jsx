import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Permita from "./components/permita";
import Tratamentos from "./components/Tratamentos";
import Feedbacks from "./components/Feedbacks";
import Conveniencias from "./components/Conveniencias";
import Cta from "./components/cta";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rouge+Script&family=Great+Vibes&family=Dancing+Script:wght@400;700&family=Montserrat:wght@300;400;600;700&display=swap');
  html, body, #root {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  body {
    font-family: 'Montserrat', Arial, sans-serif;
    background: linear-gradient(120deg, #B8E0D2 0%, #F5F5DC 100%);
    color: #8AA39B;
    min-height: 100vh;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero>
        <Header />
      </Hero>
      <Permita />
      <Tratamentos />
      <Cta />
      <Conveniencias />
      <Feedbacks />
      <Footer />
    </>
  );
}

export default App;
