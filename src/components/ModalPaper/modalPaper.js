import { ContainerModalPaper, Page, Margin, Paragraph } from "../ModalPaper/modalPaperStyle";
import { useEffect } from "react";

import Pi from "../../assests/img/começo.jpg";
import Pi1 from "../../assests/img/meu amor.jpg";
import Pi2 from "../../assests/img/1 (41).jpg";
import Pi3 from "../../assests/img/1 (47).jpg"
import Pi4 from "../../assests/img/1 (45).jpg";
import Pi5 from "../../assests/img/1 (33).jpg";

const ModalPaper = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [isOpen]);
    
      if (!isOpen) return null;

return (
    <ContainerModalPaper onClick={onClose}>
      <Page onClick={(e) => e.stopPropagation()}>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "17px", justifyContent: "center" }}>

      <img src={Pi} alt="Imagem 2" style={{ maxWidth: "110%", width: "400px", height: "auto" }} />
          <Paragraph>
            Meu amor, desde o dia em que cruzamos olhares, minha vida ganhou cor, sentido e propósito. Cada instante ao seu lado é um presente que a vida me deu, e hoje quero te lembrar o quanto você é especial para mim.
          </Paragraph>
      <img src={Pi1} alt="Imagem 2" style={{ maxWidth: "110%", width: "400px", height: "auto" }} />
          <Paragraph>
            Lembro de cada riso, cada abraço, cada conversa madrugada adentro. Você não é apenas minha esposa, é minha melhor amiga, minha confidente, meu porto seguro. E por isso, neste dia, celebro não só o seu aniversário, mas o privilégio de caminhar com você.
          </Paragraph>
      <img src={Pi2} alt="Imagem 2" style={{ maxWidth: "110%", width: "400px", height: "auto" }} />
          <Paragraph>
            Juntos, construímos uma família linda, cheia de amor, risadas e histórias. Você é a base de tudo isso, a força que mantém nossa casa em pé e o carinho que nos envolve todos os dias.
          </Paragraph>
      <img src={Pi3} alt="Imagem 2" style={{ maxWidth: "110%", width: "400px", height: "auto" }} />
          <Paragraph>
            Hoje, meu desejo é que a vida continue sorrindo para você, que seus sonhos se realizem e que cada novo ano traga mais motivos para celebrarmos juntos. Que Deus abençoe seu caminho e proteja seu coração.
          </Paragraph>
      <img src={Pi4} alt="Imagem 2" style={{ maxWidth: "110%", width: "400px", height: "auto" }} />
          <Paragraph>
            Thaylla, saiba que meu amor por você é infinito. Vou estar sempre aqui para te apoiar, te amparar e te lembrar todos os dias o quanto é linda, incrível e insubstituível.
          </Paragraph>
      <img src={Pi5} alt="Imagem 2" style={{ maxWidth: "110%", width: "400px", height: "auto" }} />
          <Paragraph>
            Feliz aniversário, minha esposa, minha vida, meu tudo. Hoje e sempre, sou grato a Deus por ter me dado você. Te amo para sempre, de todas as formas, em todos os tempos. 💖
          </Paragraph>
        </div>
        </Page>
    </ContainerModalPaper>
  );
};


export default ModalPaper;
