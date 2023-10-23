import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  display: block;
  background-size: cover;
  width: 100vw;
`;

const ImgWrap = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100vw;
  height: 500px;
`;

const Img = styled.img`
  width: 100vw;
`;

function ImgSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <StyledSlider {...settings}>
        <ImgWrap>
          <Img src="./assets/keyimage_01.jpg" />
        </ImgWrap>
        <ImgWrap>
          <Img src="./assets/step_keyimage.jpg" />
        </ImgWrap>
        <ImgWrap>
          <Img src="./assets/keyimage_01.jpg" />
        </ImgWrap>
      </StyledSlider>
    </div>
  );
}

export default ImgSlider;
