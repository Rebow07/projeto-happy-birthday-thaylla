import { useState, useEffect } from "react";
import { ContainerGift, TitleGift, SubtitleGift, Gift, Text, BreakLine } from "./letterStyle";

const GiftPaper = ({ onOpenModal }) => {

  return (
    <ContainerGift data-aos="fade-up">
      <TitleGift>
      Um pequeno texto, <BreakLine>de um grande sentimento</BreakLine>
      </TitleGift>
      <SubtitleGift>Abra o envelope</SubtitleGift>

      <Gift onClick={onOpenModal}>
        <Text></Text>
      </Gift>

    </ContainerGift>
  );
};

export default GiftPaper;
