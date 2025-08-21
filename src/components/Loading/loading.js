import React, { useState, useEffect } from "react";
import { IntroContainer, IntroBox, TextIntro } from "../Loading/loadingStyle.js";

function LoadingPage() {
  const [introStep, setIntroStep] = useState(1);
  const [showIntro, setShowIntro] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);  // Estado para controlar o fade-out

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    const loadingPage = setTimeout(() => {
      
      if (introStep < 10) {

        setTimeout(() => {
          setIntroStep((prevStep) => prevStep + 1);
        }, 500);

      } else if(introStep == 10){
        
        setTimeout(() => {
          setIntroStep((prevStep) => prevStep + 1);
        }, 500);
        
        window.scrollTo(0,0);

      }
      
      else {
        setFadeOut(true);  // Iniciar o fade-out
        
        setTimeout(() => {
          setShowIntro(false);
          enableScroll();
        }, 1500); // Tempo do fade-out

      }
      

    }, 1000);

    return () => clearTimeout(loadingPage);
  }, [introStep]);

  return (
    <IntroContainer show={showIntro} fadeOut={fadeOut}>
      <IntroBox>
        <TextIntro visible={introStep === 1}>UMA HOMENAGEM</TextIntro>
        <TextIntro visible={introStep === 2}>PARA</TextIntro>
        <TextIntro visible={introStep === 3}>MINHA ESPOSA</TextIntro>
        <TextIntro visible={introStep === 4}>AMADA</TextIntro>
        <TextIntro visible={introStep === 5}>E QUERIDA</TextIntro>
        <TextIntro visible={introStep === 6}>DESEJO</TextIntro>
        <TextIntro visible={introStep === 7}>UM FELIZ</TextIntro>
        <TextIntro visible={introStep === 8}>ANIVERSARIO</TextIntro>
        <TextIntro visible={introStep === 9}>DE</TextIntro>
        <TextIntro visible={introStep === 10}>KELVIN LOUREIRO</TextIntro>
        <TextIntro visible={introStep === 11}>🤍</TextIntro>
      </IntroBox>
    </IntroContainer>
  );
}

export default LoadingPage;
