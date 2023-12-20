import styled from "styled-components";

const ContentGaleria = styled.section`
  display: flex;
  gap: 24px;

  h2 {
    color: #7b78e5;
    font-size: 32px;
    font-weight: 400;
  }
`;

const GaleriaEstilizada = styled.section``;

const Populares = styled.section``;

export const Galeria = () => {
  return (
    <ContentGaleria>
      <GaleriaEstilizada>
        <h2>Navegue pela galeria</h2>
      </GaleriaEstilizada>
      <Populares>
        <h2>Populares</h2>
      </Populares>
    </ContentGaleria>
  );
};
