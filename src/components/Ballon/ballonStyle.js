import styled, { keyframes } from "styled-components";

// Animação de subida dos balões
const floatUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(-110vh);
    opacity: 1;
  }
`;

// Componente de container para os balões
export const BalloonContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Não interfere nos cliques */
  overflow: hidden;
`;

// Componente para os balões
export const Balloon = styled.div`
  position: absolute;
  bottom: -100px;
  width: 30px;
  height: 40px;
  background-color: ${(props) => props.color || 'red'};
  border-radius: 50%;
  animation: ${floatUp} 6s linear infinite;
  opacity: 0.8;
  transition: opacity 3s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  /* Cordas dos balões */
  &:before {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 50%;
    width: 2px;
    height: 30px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      #4b4b4b 20%,
      transparent 40%,
      #4b4b4b 60%,
      transparent 80%,
      #4b4b4b 100%
    );
    border-radius: 50%;
    transform: translateX(-50%);
  }

  /* Efeito de fade-out */
  &.fade-out {
    opacity: 0 !important;
  }
`;
