import styled from "styled-components";
import colors from "../../ui/colors";

export const Navbar = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.beige};
    user-select: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    transition: background-color 0.3s ease-in-out, 
    backdrop-filter 0.3s ease-in-out, color 0.3s ease-in-out, 
    box-shadow 0.3s ease-in-out;

    & p {
        color: ${colors.darkRed};
        font-size: 2.5rem;
        font-weight: 600;
        font-family: "Playfair Display", serif;
    }

    &.scrolled {
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        p {
            color: ${colors.darkRed};
        }
    }
`;
