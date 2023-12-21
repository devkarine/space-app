import styled from "styled-components";
import { Tags } from "./Tags";
import { Populares } from "./Populares";

const ContentGaleria = styled.div`
  display: flex;
  gap: 24px;

  h2 {
    color: #7b78e5;
    font-size: 32px;
    font-weight: 400;
  }
`;

const GaleriaEstilizada = styled.section`
  flex-grow: 1;
`;

const PopularesEstilizado = styled.section`
    text-align: center;
`;

export const Galeria = () => {
  return (
    <>
      <Tags />

      <ContentGaleria>

        <GaleriaEstilizada>
          <h2>Navegue pela galeria</h2>

        </GaleriaEstilizada>

        <PopularesEstilizado>
          <h2>Populares</h2>
          <Populares/>
        </PopularesEstilizado>

      </ContentGaleria>
    </>
  );
};
