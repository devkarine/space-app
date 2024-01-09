import styled from "styled-components";
import { Tags } from "./Tags";
import { Populares } from "./Populares";
import { FotoProps } from "../../App";
import { Imagem } from "./Imagem";

const ContentGaleria = styled.div`
  display: flex;
  gap: 24px;
  margin: 49px 0 24px 0;

  h2 {
    color: #7b78e5;
    font-size: 32px;
    font-weight: 400;
  }
`;

const GaleriaEstilizada = styled.section`
  flex-grow: 1;
  display: flex;
  gap: 20px;
  flex-direction: column;

  ul {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }
`;



const PopularesEstilizado = styled.section`
  text-align: center;
`;

export interface GaleriaProps {
  fotos: FotoProps[];
}

export const Galeria = ({ fotos = [] }: GaleriaProps) => {
  return (
    <>
      <Tags />

      <ContentGaleria>
        <GaleriaEstilizada>
          <h2>Navegue pela galeria</h2>
          <ul>
            {fotos.map((foto) => (
              <li key={foto.id}>
                <Imagem foto={foto} />
              </li>
            ))}
          </ul>
        </GaleriaEstilizada>

        <PopularesEstilizado>
          <h2>Populares</h2>
          <Populares />
        </PopularesEstilizado>
      </ContentGaleria>
    </>
  );
};
