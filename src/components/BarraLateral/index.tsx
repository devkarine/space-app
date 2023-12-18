import styled from "styled-components";
import { ItemNavegacao } from "../ItemNavegacao";

const ListaEstilizada = styled.ul`
  padding: 0;
  margin: 0;
`;

export const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavegacao
            iconeAtivo="/icones/home-ativo.png"
            iconeInativo="/icones/home-inativo.png"
            ativo={true}
          >
            Início
          </ItemNavegacao>
          <ItemNavegacao
            iconeAtivo="/icones/mais-vistas-ativo.png"
            iconeInativo="/icones/mais-vistas-inativo.png"
            ativo={false}
          >
            Mais Vistas
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};
