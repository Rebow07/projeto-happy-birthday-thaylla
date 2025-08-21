import styled from "styled-components";
import colors from "../../ui/colors";
import { media } from "../../styles/media";

export const ContainerFooter = styled.footer`
    padding: 3rem;
    background-color: ${colors.white};
    position: relative;
    margin-top: 10rem;

    & p {
        text-align: center;
        font-family: "Inter", sans-serif;
        color: ${colors.darkRed};
        font-weight: 300;
    }

    & span {
        font-weight: 600;
    }
`;

export const Alligator = styled.img`
    width: 150px;
    position: absolute;
    bottom: 5rem;
    right: 10rem;
    z-index: -1;
`;
