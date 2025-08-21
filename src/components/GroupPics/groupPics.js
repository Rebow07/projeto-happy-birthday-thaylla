import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Container, TituloContainer, BackgroundCard, SwiperContainer } from "../GroupPics/groupPicsStyle";

import bg1 from "../../assests/img/1 (1).jpg";
import bg2 from "../../assests/img/1 (10).jpg";
import bg3 from "../../assests/img/1 (11).jpg";
import bg4 from "../../assests/img/1 (12).jpg";
import bg5 from "../../assests/img/1 (13).jpg";
import bg6 from "../../assests/img/1 (14).jpg";
import bg7 from "../../assests/img/1 (15).jpg";
import bg8 from "../../assests/img/1 (16).jpg";
import bg9 from "../../assests/img/1 (17).jpg";
import bg10 from "../../assests/img/1 (18).jpg";
import bg11 from "../../assests/img/1 (19).jpg";
import bg12 from "../../assests/img/1 (2).jpg";
import bg13 from "../../assests/img/1 (20).jpg";
import bg14 from "../../assests/img/1 (21).jpg";






export const GroupPics = () => {

  const items = [
    { img: bg1 },
    { img: bg2 },
    { img: bg3 },
    { img: bg4 },
    { img: bg5 },
    { img: bg6 },
    { img: bg7 },
    { img: bg8 },
    { img: bg9 },
    { img: bg10},
    { img: bg11},
    { img: bg12},
    { img: bg13},
    { img: bg14},
  ];

  return (
    <Container>
      <TituloContainer data-aos="zoom-in-up">
        <h1>Algumas das nossas fotos favoritas</h1>
        <p>Nosso amor em um clique</p>
      </TituloContainer>

      {/* Swiper com as imagens */}
        <SwiperContainer
            data-aos="fade-up"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={2}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            >
            {items.map((item, index) => (
                <SwiperSlide key={index}>
                <BackgroundCard src={item.img} alt={item.title} />
                </SwiperSlide>
            ))}
        </SwiperContainer>
    </Container>
  );
};

export default GroupPics;