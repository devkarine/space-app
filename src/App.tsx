import { styled } from "styled-components";
import { EstilosGlobais } from "./components/EstilosGlobais";
import { Cabecalho } from "./components/Cabecalho";
import { BarraLateral } from "./components/BarraLateral";
import { Banner } from "./components/Banner";
import { Galeria } from "./components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import { DialogZoom } from "./components/ModalZoom";

const FundoGradiente = styled.div`
  background-image: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );

  width: 100%;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const AppContainer = styled.div`
  width: 1140px;
  margin: 0 auto;
  max-width: 100%;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export interface FotoProps {
  titulo: string;
  fonte: string;
  path: string;
  id: number;
  tagId: number;
}

export const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState<FotoProps[]>(fotos);
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria fotos={fotosDaGaleria} />
          </ConteudoGaleria>
        </MainContainer>
        <DialogZoom />
      </AppContainer>
    </FundoGradiente>
  );
};
