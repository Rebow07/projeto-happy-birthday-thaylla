import styled from "styled-components";
import colors from "../../ui/colors";
import { media } from "../../styles/media";

export const Text = styled.p`
  color: ${colors.darkRed};
  font-size: 1.5vw;
  line-height: 1.6; // Adicionado para melhor legibilidade
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem; // Levemente reduzido para um visual mais coeso
  height: 100vh;
  justify-content: center;
  text-align: center;
  padding: 0 1rem; // Adicionado para evitar que o texto toque as bordas em telas estreitas

  ${media.xs(`
    font-size: 4.2vw;
    height: auto;
    gap: 1.5rem;
    padding: 2rem 1rem; // Garante espaço no topo e embaixo em mobile
  `)}
  ${media.sm(`
    font-size: 3vw;
    height: auto;
    gap: 2rem;
    padding: 2rem 1rem;
  `)}
  ${media.md(`
    font-size: 2.2vw;
    height: auto;
    gap: 2rem;
  `)}
  ${media.lg(`
    font-size: 1.5vw;
  `)}
`;

export const BreakLine = styled.div`
  font-family: "Inter", sans-serif;
  display: block;
`;

export const TitleHappy = styled.p`
  font-weight: 600;
  font-size: 3.5vw; // Ligeiramente aumentado para mais destaque
  font-family: "Playfair Display", serif;
  letter-spacing: 0.03em; // Adiciona um respiro entre as letras, para um toque mais sofisticado

  ${media.xs(`
    font-size: 8vw;
  `)}
  ${media.sm(`
    font-size: 6vw;
  `)}
  ${media.md(`
    font-size: 4.5vw;
  `)}
  ${media.lg(`
    font-size: 3.5vw;
  `)}
`;