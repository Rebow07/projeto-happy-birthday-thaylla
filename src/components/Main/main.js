import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerTitle,
  Name,
  HappyBirthday,
  Date,
  Phrase,
  ScrollDown,
  Chevrons,
  ChevronDown,
  Banner,
} from "../Main/mainStyle";

import Letter from "../Letter/letter";
import Ballon from "../Ballon/ballon";
import Navbar from "../Navbar/navbar";
import TextHappy from "../TextHappy/textHappy";
import GroupPics from "../GroupPics/groupPics";
import ModalPaper from "../ModalPaper/modalPaper";
import CountDay from "../CountDay/count";
import GiftBox from "../GiftBox/giftbox";
import Footer from "../Footer/footer";

import banner from '../../assests/img/capa.jpg';

import Aos from "aos";
import "aos/dist/aos.css";


const Main = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);


  return (
    <>
      <Ballon />
      <Navbar />

      <Container>
        <ContainerTitle data-aos="fade-up">
          <Name>Thaylla Borges</Name>
          <HappyBirthday>FELIZ ANIVERSÁRIO</HappyBirthday>
          <Date>22/08/1996</Date>
          <Phrase>
            A vida é feita de momentos, e hoje celebramos um dos mais especiais da minha vida: o seu aniversário
          </Phrase>

          <ScrollDown>
            <Chevrons>
              <ChevronDown />
              <ChevronDown />
            </Chevrons>
          </ScrollDown>
        </ContainerTitle>

        <Banner src={banner} alt="E + L" data-aos="fade-up" />
        <TextHappy onOpenModal={() => setIsModalOpen(true)} />
      </Container>

      <GroupPics />
      <Letter onOpenModal={() => setIsModalOpen(true)} />

      <ModalPaper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <CountDay />

      <GiftBox />

      <Footer />
    </>
  );
};

export default Main;
