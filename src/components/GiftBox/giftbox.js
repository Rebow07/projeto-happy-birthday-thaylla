import {
    Section,
    ContainerTitle,
    Card,
    Content,
    Logo,
    H6,
    HoverContent
} from "./giftboxStyle";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
 
const GiftBoxComponent = () => {

  return (
    <Section data-aos="fade-up">
        <ContainerTitle>
            <h1>Uma pequena lembrancinha</h1>
            <p>de coração</p>
        </ContainerTitle>

      <Card>
        <Content>
          <Logo>De quem te ama</Logo>
          <H6>Clique para acompanhar.</H6>
          <HoverContent>
            <div className="sent">
                <FontAwesomeIcon className="iconCheck" icon={faCheck} /> 
                <p className="text-p">
                  Feliz aniversário, Thaylla!!❤
                  Que Deus derrame sempre as ricas bênçãos dos céus sobre sua vida e realize todos os seus sonhos! 
                  Obrigada por todo apoio e carinho sempre, que sua vida seja repleta de alegrias e amor! 
                  Você é muito especial pra nós, te amamos🥰   
                  <span style={{fontWeight: 'bold'}}>Duda Lino</span>
                </p>
            </div>

            <div className="sent">
                <FontAwesomeIcon className="iconCheck" icon={faCheck} />
                <p className="text-p">
                  Parabéns, Thaylla, minha mamãe de outra mãe! Que Deus continue abençoando muito a sua vida.
                  Estou passando aqui para te parabenizar por ser essa pessoa incrível que é, que sempre me acolheu quando precisei, 
                  esteve comigo nos momentos difíceis, puxando minha orelha e me incentivando a aceitar Jesus. 
                  Só quero te agradecer por ser essa pessoa tão especial. Aproveite o seu dia! 🥰   
                  <span style={{fontWeight: 'bold'}}>Diogo Evaldis</span>
                </p>
            </div>

            <div className="sent">
                <FontAwesomeIcon className="iconCheck" icon={faCheck} />
                <p className="text-p">
                  Minha gêmea ♥ 
                  Uma pessoa que me inspira, uma amiga, uma confidente, uma mulher de Deus, 
                  uma guerreira, uma grande metade de mim ♥ isso que vc é, e isso q te torna tão essencial na minha vida.
                  Podemos estar grudadas ou a mil quilómetros de distância e nada muda, 
                  pois nossa amizade vem de Deus e sabemos disso, entendemos o momento, 
                  mas as vezes sentimos por não estar perto e no final sabemos q faz parte da vida adulta. 
                  Porém eu te agradeço por sempre estar comigo, quantas risadas, quantos choros, quantos docinhos que dividimos , 
                  quantos segredos e sonhos compartilhados e eu agradeço cada momento q temos e ainda vamos ter juntas,
                  VC é uma grande amiga, vc é uma grande mulher, uma grande mãe , e eu sei q tem dias difíceis q vc não pensa nada disso,
                  sei q as vezes o inimigo vem soprar no seu ouvido q vc podia ter feito mais, q fez pouco q não foi suficiente , mas é porque ele sabe
                  Seu coração ,e sabe como Deus te usa na vida de quem estar perto de ti.
                  🙌🏻♥ Então não esqueça que sua amizade é uma dádiva !
                  Que vc é linda, e como eu sempre digo: 
                  "seu marido já agradeceu a Deus hoje por ter vc como esposa ?"
                  Espero que sim, pq vc com certeza vale mais do que rubis ♥ te amo Thay   
                  <span style={{fontWeight: 'bold'}}>Julia Dias</span>
                </p>
            </div>
            
            <div className="sent">
                <FontAwesomeIcon className="iconCheck" icon={faCheck} />
                <p className="text-p">
                  Parabéns Thaylla mtas felicidades!!! Desejamos a vc o melhor de Deus 
                  e sei que o melhor Dele nos surpreende pq é mais do que imaginamos. 🎂👏🏽
                  Que a Graça e o Amor de Jesus transborde em ti e na sua família sempre!!!🙏🏼🥰
                  Beijos e Abraços da nossa Família 
                  <span style={{fontWeight: 'bold'}}> Rafa, Vivi e Manu</span>
                </p>
            </div>
            
            <div className="sent">
              <FontAwesomeIcon className="iconCheck" icon={faCheck} />
              <p className="text-p">
                Feliz aniversário meu amor, que o papai do céu te abençoe e te guarde 
                sempre e te projeta como a menininha dos olhos dele. Thay vc tem o 
                brilho do espírito santo em seus olhos, o seu coração bondoso e de 
                mãezinha que sempre me cuidou e acolheu em seus braços. 
                Saiba que eu te amo demais e sempre vou estar aqui do seu lado 
                te aplaudindo e apoiando, te amo infinitamente! ❤🎉🎉 
                <span style={{fontWeight: 'bold'}}>Isa</span>
              </p>
            </div>
          </HoverContent>
        </Content>
      </Card>
    </Section>
  );
};

export default GiftBoxComponent;