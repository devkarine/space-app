import { styled } from "styled-components";
import { EstilosGlobais } from "./components/EstilosGlobais";
import { Cabecalho } from "./components/Cabecalho";

const FundoGradiente = styled.div`
  background: var(
    --Gradiente-fundo,
    linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%)
  );
  width: 100%;
  min-height: 100vh;
`;

export const App = () => {
  return <FundoGradiente>
    <EstilosGlobais/>
    <Cabecalho/>
  </FundoGradiente>;
};
