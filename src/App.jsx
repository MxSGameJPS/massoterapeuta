import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Permita from "./components/permita";
import Tratamentos from "./components/Tratamentos";
import Feedbacks from "./components/Feedbacks";
import Conveniencias from "./components/Conveniencias";
import Cta from "./components/cta";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rouge+Script&family=Great+Vibes&family=Dancing+Script:wght@400;700&family=Montserrat:wght@300;400;600;700&display=swap');
  html, body, #root {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Montserrat', Arial, sans-serif;
    background: linear-gradient(120deg, #B8E0D2 0%, #F5F5DC 100%);
    color: #8AA39B;
    min-height: 100vh;
  }

  /* Efeitos globais para botões, cards e ícones sociais */
  a, button {
    transition: all 0.2s cubic-bezier(.4,0,.2,1);
  }
  button:active, a:active {
    transform: scale(0.97);
  }
  /* Efeito hover em botões principais */
  .btn, button, a[role="button"] {
    transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
  }
  .btn:hover, button:hover, a[role="button"]:hover {
    filter: brightness(1.08);
    box-shadow: 0 4px 24px rgba(106,59,160,0.13);
    transform: translateY(-2px) scale(1.03);
  }
  /* Efeito hover em ícones sociais */
  a[aria-label^="WhatsApp"], a[aria-label^="Instagram"], a[aria-label^="Facebook"] {
    transition: background 0.2s, color 0.2s, transform 0.2s;
  }
  a[aria-label^="WhatsApp"]:hover, a[aria-label^="Instagram"]:hover, a[aria-label^="Facebook"]:hover {
    background: #b8e0d2;
    color: #065a3dff;
    transform: scale(1.13);
  }
  /* Efeito hover em cards */
  .card, .tratamento-card, .conveniencia-card {
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .card:hover, .tratamento-card:hover, .conveniencia-card:hover {
    box-shadow: 0 8px 32px rgba(106,59,160,0.15);
    transform: translateY(-4px) scale(1.03);
  }

  /* Scroll reveal animation */
  .scroll-reveal-init {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
    will-change: opacity, transform;
  }
  .scroll-reveal-visible {
    opacity: 1;
    transform: none;
  }
`;

function App() {
  const heroRef = useScrollReveal();
  const permitaRef = useScrollReveal();
  const tratamentosRef = useScrollReveal();
  const ctaRef = useScrollReveal();
  const convenienciasRef = useScrollReveal();
  const feedbacksRef = useScrollReveal();
  const footerRef = useScrollReveal();
  return (
    <>
      <GlobalStyle />
      <div ref={heroRef} className="scroll-reveal-init">
        <Hero>
          <Header />
        </Hero>
      </div>
      <div ref={permitaRef} className="scroll-reveal-init">
        <Permita />
      </div>
      <div ref={tratamentosRef} className="scroll-reveal-init">
        <Tratamentos />
      </div>
      <div ref={ctaRef} className="scroll-reveal-init">
        <Cta />
      </div>
      <div ref={convenienciasRef} className="scroll-reveal-init">
        <Conveniencias />
      </div>
      <div ref={feedbacksRef} className="scroll-reveal-init">
        <Feedbacks />
      </div>
      <div ref={footerRef} className="scroll-reveal-init">
        <Footer />
      </div>
    </>
  );
}

export default App;
