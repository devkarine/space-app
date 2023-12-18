import { styled } from "styled-components";
import { CampoTexto } from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const ContainerCabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



export const Cabecalho = () => {
  return (
    <ContainerCabecalho>
      <HeaderEstilizado>
        <img src="/imagens/logo.png" alt="logo" />
      </HeaderEstilizado>

      <CampoTexto/>
    </ContainerCabecalho>
  );
};
