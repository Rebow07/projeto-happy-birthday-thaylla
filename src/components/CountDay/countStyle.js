import styled from "styled-components";
import colors from "../../ui/colors";
import { media } from "../../styles/media";

export const ContainerCount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  text-align: center;
  background-color: ${colors.darkRed};
  padding: 2rem;
  height: 100%;

  ${media.xs(`
    height: auto;
  `)}

  ${media.sm(`
    height: auto;
  `)}

  ${media.md(`
    height: auto;
  `)}

  ${media.lg(`
  `)}
`;

export const WidthScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 20%;

  ${media.xs(`
    width: 90%;
  `)}

  ${media.sm(`
    width: 90%;
  `)}

  ${media.md(`
    width: 60%;
  `)}
`;

export const Paper = styled.div`
  background-color: ${colors.white};
  padding: 0.5rem 0.5rem 2rem 0.5rem;
  width: 100%;
  border-radius: 0.5rem;

  video {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

export const BackgroundJa = styled.img`
  width: 100%;
`;

export const Music = styled.iframe`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 200px;

  ${media.xs(`
    height: 150px;
  `)}
`;

export const TitleCount = styled.h1`
  font-size: 3vw;   
  color: ${colors.beige};
  font-weight: 500;

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

export const Count = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Day = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  & p {
    background: linear-gradient(1deg, ${colors.beige} 50%, ${colors.darkRed} 100%);
    border-radius: 1rem;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    color: ${colors.darkRed};
    width: 100%;
    max-width: 150px;
    height: 3.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: "Inter", sans-serif;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    padding: 0.5rem;
    flex: 1;

    ${media.xs(`
      max-width: 100%;
      width: 100%;
      height: 4.5rem;
      font-size: 20px;
    `)}

    ${media.sm(`
      max-width: 100%;
      width: 100%;
      height: 4.5rem;
      font-size: 20px;
    `)}
  }

  & span {
    display: flex;
    flex-direction: column;
    font-weight: normal;
    font-size: 13px;
  }
`;