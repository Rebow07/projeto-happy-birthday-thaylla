import styled, { keyframes } from "styled-components";
import colors from "../../ui/colors";
import { media } from "../../styles/media";

// Animação de subida
const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ContainerModalPaper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Page = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 300px;
  font-family: cursive;
  font-size: 20px;
  border-radius: 10px;
  background: #fff;
  background-image: linear-gradient(#f5f5f0 1.1rem, #ccc 1.3rem);
  background-size: 100% 1.2rem;
  line-height: 2rem;
  padding: 1rem;
  text-align: left;
  height: 100%;
  overflow: auto;
  animation: ${slideUp} 0.5s ease-out;

  &::before,
  &::after {
    position: absolute;
    content: "";
    bottom: 10px;
    width: 40%;
    height: 10px;
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.7);
    z-index: -1;
    transition: all 0.3s ease;
  }

  &::before {
    left: 15px;
    transform: skew(-5deg) rotate(-5deg);
  }

  &::after {
    right: 15px;
    transform: skew(5deg) rotate(5deg);
  }

  &:hover::before,
  &:hover::after {
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
  }


    /* Scrollbar customizada */
    &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 10px;
    border: 2px solid #fff;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8a8a8;
  }


  
  ${media.xs(`
        height: 90%;
    `)}

    ${media.sm(`
    height: 90%;
    `)}
    ${media.md(`
    height: 90%;
    `)}
    ${media.lg(`
    height: 90%;
    `)}

`;


export const Paragraph = styled.p`
  margin: 0;
  text-indent: 1rem;
  padding-bottom: 1.2rem;
  color: black;
  line-height: 1.5rem;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
`;
