import React, { useState } from "react";
import styled from "styled-components";
import { FaLock } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

// Estilos
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const IconWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;

  svg.heart {
    font-size: 100px;
    color: #e63946;
  }

  svg.lock {
    position: absolute;
    top: 20px;
    left: 32px;
    font-size: 40px;
    color: #fff;
  }
`;

const Inputs = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputBox = styled.input`
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 10px;
  border: 2px solid #ccc;
  background: #fff;

  &:focus {
    outline: none;
    border-color: #e63946;
  }
`;

const ErrorMsg = styled.p`
  margin-top: 1rem;
  color: red;
`;


// Componente principal
const PasswordGate = ({ onAccessGranted }) => {
  const [digits, setDigits] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const correctPassword = "2208"; 

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    // Mover para o próximo campo
    if (value && index < 3) {
      const nextInput = document.getElementById(`input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    if (newDigits.every((d) => d !== "")) {
      const typedPassword = newDigits.join("");
      if (typedPassword === correctPassword) {
        onAccessGranted();
      } else {
        setError(true);
        setDigits(["", "", "", ""]);
      }
    }
  };

  return (
    <Overlay>
      <IconWrapper>
        <AiFillHeart className="heart" />
        <FaLock className="lock" />
      </IconWrapper>

      <Inputs>
        {digits.map((digit, i) => (
          <InputBox
            key={i}
            id={`input-${i}`}
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            type="password"
            inputMode="numeric"
            autoFocus={i === 0}
          />
        ))}
      </Inputs>

      {error && <ErrorMsg>Senha incorreta. Tente novamente.</ErrorMsg>}
    </Overlay>
  );
};

export default PasswordGate;
