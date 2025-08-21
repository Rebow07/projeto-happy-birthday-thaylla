import { ContainerFooter, Alligator } from "../Footer/footerStyle";
import alligator1 from "../../assests/img/6d83d150a9bfedf87bfc7197fd2035ad.gif";
import alligator2 from "../../assests/img/alligator2.gif";

const Footer = () => {
  return (
    <ContainerFooter>
      <p>Desenvolvido por <span>Kelvin Loureiro</span></p>
      <Alligator src={alligator1} data-aos="fade-up"/>
    </ContainerFooter>
  );
};

export default Footer;