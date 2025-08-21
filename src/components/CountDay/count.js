import React, { useState, useEffect } from "react";
import {
  ContainerCount,
  Count,
  TitleCount,
  Day,
  BackgroundJa,
  Music,
  WidthScreen,
  Paper,
} from "../CountDay/countStyle";

import PictureJa from "../../assests/img/Video.mp4";

const CountDay = () => {
  const [tempoJuntos, setTempoJuntos] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const primeiroEncontro = new Date("1996-08-22T00:00:00");

    const atualizarContador = () => {
      const agora = new Date();
      const diferenca = agora - primeiroEncontro;
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);

      setTempoJuntos({ dias, horas, minutos, segundos });
    };

    atualizarContador();
    const intervalo = setInterval(atualizarContador, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <ContainerCount data-aos="fade-up">
      <WidthScreen>
        <Paper>
          <video
            controls
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src={PictureJa} type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>        
          </Paper>

        <Music
          src="https://open.spotify.com/embed/track/6mElqFFbwo90BrQDjHndnr"
          width="100%"
          height="200"
          allow="encrypted-media"
        ></Music>        

        <Count>
          <TitleCount>Nosso presente</TitleCount>
          <Day>
            <p>
              {tempoJuntos.dias} <span>D</span>
            </p>
            <p>
              {tempoJuntos.horas} <span>H</span>
            </p>
            <p>
              {tempoJuntos.minutos} <span>M</span>
            </p>
            <p>
              {tempoJuntos.segundos} <span>S</span>
            </p>
          </Day>
        </Count>
      </WidthScreen>
    </ContainerCount>
  );
};

export default CountDay;
