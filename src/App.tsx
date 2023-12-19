import { styled } from "styled-components";
import { EstilosGlobais } from "./components/EstilosGlobais";
import { Cabecalho } from "./components/Cabecalho";
import { BarraLateral } from "./components/BarraLateral";
import { Banner } from "./components/Banner";

const FundoGradiente = styled.div`
  background: var(
    --Gradiente-fundo,
    linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%)
  );
  width: 100%;
  min-height: 100vh;
`;

const ContainerHero = styled.div`
  display: flex;
  gap: 22px;
`

export const App = () => {
  return <FundoGradiente>
    <EstilosGlobais/>
    <Cabecalho/>
    <ContainerHero>
      <BarraLateral/>
      <Banner/>
    </ContainerHero>
    
  </FundoGradiente>;
};
