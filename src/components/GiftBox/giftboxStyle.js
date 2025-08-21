import styled from "styled-components";
import colors from "../../ui/colors";
import { media } from "../../styles/media";


export const Section = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  margin-top: 2rem;
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
   
   & h1{ 
    font-size: 3vw;   
    color: ${colors.darkRed};
    font-weight: 600;

    ${media.xs(`
    font-size: 7vw;
    `)}
    ${media.sm(`
    font-size: 6vw;
    `)}
    ${media.md(`
    font-size: 3.5vw;
    `)}
    ${media.lg(`
    `)}
  }

  & p{
    color: ${colors.darkRed};
    font-size: 1.5vw;
    font-family: "Inter", sans-serif;

    ${media.xs(`
    font-size: 4vw;
    `)}
    ${media.sm(`
    font-size: 3vw;
    `)}
    ${media.md(`
    font-size: 1.5vw;
    `)}
    ${media.lg(`
    `)}
  } 

`;

export const Content = styled.div`
  width: 18em;
  max-width: 80%;
  padding: 1rem;

  & .text-p {
  flex-direction: column;
  }
`;

export const H6 = styled.div`
    font-size: 16px;
    font-family: "Inter", sans-serif;
    color: ${colors.darkgray};

    ${media.xs(`
    font-size: 4vw;
    `)}
    ${media.sm(`
    font-size: 3vw;
    `)}
    ${media.md(`
    font-size: 1.5vw;
    `)}
    ${media.lg(`
    `)}
`;


export const Logo = styled.p`
    margin: 0 0 1em;
    transition: all 0.35s ease;
    color: ${colors.darkRed};
    font-size: 1.5vw;
    font-family: "Inter", sans-serif;

        ${media.xs(`
        font-size: 4vw;
        `)}
        ${media.sm(`
        font-size: 3vw;
        `)}
        ${media.md(`
        font-size: 1.5vw;
        `)}
        ${media.lg(`
        `)}
`;

export const HoverContent = styled.div`
  overflow: hidden;
  max-height: 0;
  transform: translateY(1em);
  transition: all 1s ease;

 & p {
    color: ${colors.darkgray};
    margin: 4em 0 0;
    line-height: 1.4em;
    font-size: 1rem;
    display: flex;
    font-family: "Inter", sans-serif;
    align-items: center;
    gap: 1rem;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 20em;
  max-width: 80%;
  height: 100%;
  padding: 2em 0;
  background: ${colors.white};
  box-shadow: 0 0 6px 0 rgba(32, 32, 36, 0.12);
  transition: all 0.35s ease;
  color: ${colors.darkgray};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
  }

  &::before {
    background: ${colors.red};
    width: 0;
    opacity: 0;
    transition: opacity 0 ease, width 0 ease;
    transition-delay: 0.5s;
  }

  &::after {
    background: white;
    transition: width 0.5s ease;
  }

  &:hover {
    box-shadow: 0 10px 20px 0 rgba(32, 32, 36, 0.12);
  }

  &:hover::before {
    width: 100%;
    opacity: 1;
    transition: opacity 0.5s ease, width 0.5s ease;
    transition-delay: 0;
  }

  &:hover::after {
    width: 0;
    opacity: 0;
    transition: width 0 ease;
  }

  &:hover ${Logo} {
    margin-bottom: 0.5em;
  }

  &:hover ${HoverContent} {
    max-height: 100%;
    transform: none;
  }

  & .not-sent{
    color: ${colors.lightgray};
  }

  & .iconStep{
    font-size: 0.8rem;
    color:${colors.darkgray};
  }

  & .iconCheck{
    font-size: 0.8rem;
    color: #00db00;
  }
`;
