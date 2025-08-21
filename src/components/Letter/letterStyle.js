import styled from "styled-components";
import colors from "../../ui/colors";
import { media } from "../../styles/media";

export const ContainerGift = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  height: 100vh;
  justify-content: center;
  text-align: center;
`;

export const TitleGift = styled.p`
    color: ${colors.darkRed};
    font-weight: 600;
    font-size: 3vw;
    font-family: "Playfair Display", serif;

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
`;
export const SubtitleGift = styled.p`
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

export const Gift = styled.div`
  height: 70px;
  width: 110px;
  border-radius: 5px;
  background-color: #fff;
  background-image: linear-gradient(
    to left bottom,
    #f2f5f8,
    #ecf1f2,
    #e7eceb,
    #e3e7e4,
    #e1e2de
  );
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.151);
  position: relative;
  transition: transform 0.3s ease;
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    top: -50%;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    border-radius: 5px;
    background-image: linear-gradient(
      to left bottom,
      #1288ff,
      #e4eaec,
      #d8dfde,
      #cdd3cf,
      #c5c7c1
    );
    width: 100%;
    height: 50%;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateX(-150deg) translateY(-110%);
    transition: transform 0.3s ease;
    z-index: -1;
  }

  &:hover {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &:hover::before {
    transform: rotateX(0);
    background-image: none;
    background-color: white;
  }
`;

export const Text = styled.span`
  color: rgb(32, 30, 30);
  font-weight: bold;
  font-size: 40px;
`;

export const BreakLine = styled.div`
  display: block;
`;
