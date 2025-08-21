import React, { useState, useEffect } from "react";
import { BalloonContainer, Balloon } from "../Ballon/ballonStyle.js"; // Caminho para o arquivo de estilos

const Ballon = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const numBalloons = 6; // Quantidade de balões
    const newBalloons = Array.from({ length: numBalloons }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Posição aleatória
      delay: Math.random() * 1, // Delay aleatório
      fade: false, // Estado inicial sem fade
      color: `hsl(${Math.random() * 360}, 70%, 60%)`, // Cores aleatórias para cada balão
    }));

    setBalloons(newBalloons);


    // Remover balões após 30 segundos
    const removeTimer = setTimeout(() => {
      setBalloons([]);
    }, 20000);

    return () => {
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <BalloonContainer>
      {balloons.map((balloon) => (
        <Balloon
          key={balloon.id}
          style={{ left: `${balloon.left}%`, animationDelay: `${balloon.delay}s` }}
          color={balloon.color}
        />
      ))}
    </BalloonContainer>
  );
};

export default Ballon;
