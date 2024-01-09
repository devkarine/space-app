import styled from "styled-components";
import { FotoProps } from "../../../App";

interface CardProps {
  $expandida: boolean;
}

const Card = styled.div<CardProps>`
  width: ${(props) => (props.$expandida ? "90px" : "376px")};
  height: 336px;
  border-radius: 20px;
  background: #001634;
`;

const ImageGalery = styled.img`
  width: 100%;
  height: 256px;
  border-radius: 20px 20px 0px 0px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  padding: 10px 22px;
  color: #ffffff;

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ContentIcon = styled.div`
  display: flex;
  gap: 24px;
`;

const Icon = styled.button`
  border: none;
  background-color: transparent;
`;

interface ImagemProps {
  foto: FotoProps;
}

export const Imagem = ({ foto }: ImagemProps) => {
  const expandida = false;
  return (
    <Card $expandida={expandida} id={`foto-${foto.id}`}>
      <ImageGalery src={foto.path} alt="imagem do céu estrelado" />
      <Description>
        <h3>{foto.titulo}</h3>
        <footer>
          <p>{foto.fonte}</p>
          <ContentIcon>
            <Icon>
              <img src="/icones/favorito.png" alt="icone de coração" />
            </Icon>
            {!expandida && (
              <Icon>
                <img src="/icones/expandir.png" alt="icone de expandir" />
              </Icon>
            )}
          </ContentIcon>
        </footer>
      </Description>
    </Card>
  );
};
