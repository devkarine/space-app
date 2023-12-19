import { styled } from "styled-components";
import Banner from "../../assets/banner.png";

const InputContent = styled.div`
  border: 2px solid #c98cf1;
  border-radius: 10px;
  max-height: 30px;
  width: 566px;
  padding: 12px 16px;
  display: flex;

  input {
    width: 100%;
    background-color: inherit;
    color: #d9d9d9;
    font-family: Gandhi Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;
export const CampoTexto = () => {
  return (
    <InputContent>
      <input type="text" placeholder="O que você procura?" />
      <img src={Banner} alt="lupa" />
    </InputContent>
  );
};
