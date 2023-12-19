import styled from "styled-components";
import BannerImg from "../../assets/banner.png";

const BannerEsttilizado = styled.div`
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-grow: 1;
  border-radius: 20px;
  opacity: 0.8;
  min-height: 328px;
  max-width: 100%;
  padding-left: 64px;

  h1 {
    font-size: 40px;
    max-width: 301px;
    color: #fff;
    font-weight: 400;
  }
`;

export const Banner = () => {
  return (
    <BannerEsttilizado>
      <h1>A galeria mais completa de fotos do espaço!</h1>
    </BannerEsttilizado>
  );
};
