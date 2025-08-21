import styled from "styled-components";
import { media } from "../../styles/media";
import colors from "../../ui/colors";

export const Container = styled.main`
  width: 1300px;
  margin: 0 auto;
  padding: 2rem;

  ${media.xs(`
    width: auto;
  `)}
  ${media.sm(`
    width: auto;
  `)}
  ${media.md(`
    width: auto;
  `)}
  ${media.lg(`
    width: auto;
  `)}

`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const HappyBirthday = styled.p`
  font-size: 6.5vw;
  color: ${colors.darkRed};
  font-weight: 600;
  font-family: "Playfair Display", serif;
`;

// TODOS VAO RECEBER O MESMO CSS
const BaseText = styled.p`
  font-size: 1.5vw;
  color: ${colors.darkRed};
  font-family: "Inter", sans-serif;
  font-weight: 400;

  ${media.xs(`
    font-size: 4vw;
    text-align: center;
  `)}
  ${media.sm(`
    font-size: 3vw;
    text-align: center;
  `)}
  ${media.md(`
    font-size: 1.5vw;
    text-align: center;
  `)}
  ${media.lg(`
  `)}
`;
export const Name = BaseText;
export const Date = BaseText;
export const Phrase = BaseText;

// SCROL ICONE
export const ScrollDown = styled.div`
  --color: ${colors.darkRed};
  --sizeX: 30px;
  --sizeY: 50px;
  position: relative;
  width: var(--sizeX);
  height: var(--sizeY);
  border: calc(var(--sizeX) / 10) solid ${colors.darkRed};
  border-radius: 50px;
  box-sizing: border-box;
  margin-bottom: 16px;
  cursor: pointer;
  margin-top: 10rem;

  &::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: ${colors.darkRed};
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
  }

  @keyframes scrolldown-anim {
    0% {
      opacity: 0;
      height: 6px;
    }

    40% {
      opacity: 1;
      height: 10px;
    }

    80% {
      transform: translate(0, 20px);
      height: 10px;
      opacity: 0;
    }

    100% {
      height: 3px;
      opacity: 0;
    }
  }
`;

export const Chevrons = styled.div`
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChevronDown = styled.div`
  margin-top: -6px;
  position: relative;
  border: solid ${colors.darkRed};
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  animation: pulse54012 500ms ease infinite alternate;

  &:nth-child(even) {
    animation: pulse54012 500ms ease infinite alternate 250ms;
  }

  @keyframes pulse54012 {
    from {
      opacity: 0;
    }

    to {
      opacity: 0.5;
    }
  }
`;

export const Banner = styled.img`
  width: 100%;
  border-radius: 15px;

  ${media.xs(`
    margin-bottom: 3rem;
  `)}
  ${media.sm(`
    margin-bottom: 3rem;
  `)}
  ${media.md(`
    margin-bottom: 3rem;
  `)}
  ${media.lg(`
  `)}
`;

