import styled from "styled-components";
import tags from "../../../../tags.json";

const ContainerTag = styled.div`
  font-family: Gandhi Sans;
  height: 49px;
  display: flex;
  align-items: center;
  margin-top: 56px;
  gap: 24px;

  p {
    color: #d9d9d9;
    font-size: 24px;
  }

  button {
    
    background: rgba(217, 217, 217, 0.3);
    padding: 10px 8px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    color: #fff;
    text-align: center;
    font-size: 24px;

    &:hover {
      border-image-slice: 1;
      border-image-source: linear-gradient(
        50deg,
        #ff8b8c 0,
        #ff8390 7.14%,
        #fb7b95 14.29%,
        #f6729a 21.43%,
        #ef69a0 28.57%,
        #e660a5 35.71%,
        #da58aa 42.86%,
        #cc50b0 50%,
        #bb4ab6 57.14%,
        #a847bc 64.29%,
        #9247c3 71.43%,
        #7748ca 78.57%,
        #534bcf 85.71%,
        #004fd5 92.86%,
        #0052d8 100%
      );
    }
  }
`;

export const Tags = () => {
  return (
    <ContainerTag>
      <p>Busque por Tags:</p>
      {tags.map((tag) => (
        <button key={tag.id}>{tag.titulo}</button>
      ))}
    </ContainerTag>
  );
};
