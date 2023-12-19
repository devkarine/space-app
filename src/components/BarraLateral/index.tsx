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

          <ItemNavegacao
            iconeAtivo="/icones/mais-curtidas-ativo.png"
            iconeInativo="public/icones/mais-curtidas-inativo.png"
            ativo={false}
          >
            Mais Curtidas
          </ItemNavegacao>

          <ItemNavegacao
            iconeAtivo="public/icones/novas-ativo.png"
            iconeInativo="public/icones/novas-inativo.png"
            ativo={false}
          >
            Novas
          </ItemNavegacao>

          <ItemNavegacao
            iconeAtivo="public/icones/surpreenda-me-ativo.png"
            iconeInativo="public/icones/surpreenda-me-inativo.png"
            ativo={false}
          >
            Surpreenda-me
          </ItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};
