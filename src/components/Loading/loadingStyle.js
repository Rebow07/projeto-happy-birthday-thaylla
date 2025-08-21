import styled, { keyframes } from "styled-components";
import colors from "../../ui/colors";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.darkRed};
  z-index: 9999;
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: center;
  animation: ${(props) => (props.fadeOut ? fadeOut : fadeIn)} 1s cubic-bezier(0.42, 0, 0.58, 1) forwards;
`;

export const IntroBox = styled.div`
  width: 80%;
  height: 20vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextIntro = styled.div`
  color: ${colors.beige};
  font-size: 6vw;
  font-weight: 400;
  white-space: nowrap;
  font-family: "Playfair Display", serif;
  display: ${(props) => (props.visible ? "block" : "none")};
  animation: ${fadeIn} 1.5s cubic-bezier(0.42, 0, 0.58, 1) forwards;
`;
