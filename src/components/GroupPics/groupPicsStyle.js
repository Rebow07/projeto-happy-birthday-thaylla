import styled from "styled-components";
import colors from "../../ui/colors";
import { Swiper } from "swiper/react";
import { media } from "../../styles/media";

/* Container principal */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  min-height: 100vh;
  background-color: ${colors.darkRed};
`;

/* Título */
export const TituloContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  h1 {
    color: ${colors.beige};
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
  }

  p {
    color: ${colors.beige};
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

/* Swiper */
export const SwiperContainer = styled(Swiper)`
  width: 100%;
  max-width: 900px;
  padding-top: 50px;
  padding-bottom: 50px;

  .swiper-pagination-bullet {
    background-color: ${colors.beige};
    width: 12px;
    height: 12px;
    transform: scale(0.5);
    opacity: 1;
    transition: all 0.3s ease-in-out;
  }

  .swiper-pagination-bullet-active {
    background-color: transparent;
    border: 2px solid ${colors.beige};
    transform: scale(1.0);
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;

    ${media.xs(`
      width: 200px;
      height: 300px;
    `)}
  }

  .swiper-slide:hover {
    transform: scale(1.05);
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


/* Card */
export const Card = styled.div`
  background-color: ${colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  height: 350px;
  width: 100%;
  max-width: 260px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

/* Imagem do card */
export const BackgroundCard = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
