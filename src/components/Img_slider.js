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
  height: 600px;
`;

const Img = styled.img`
  width: 100vw;
`;

const ImgText = styled.div`
  position:absolute;
  top:50%;
  left:61%;
  transform:translateY(-50%);
`;

const ImgTitle = styled.p`
  display:inline-bolck;
  font-size:33px;
  font-weight:bold;
`;

const ImgHr = styled.hr`
  display:inline-block;
  background-color:#000;
  width:200px;
  height:3px;
  border:none;
 
`;
const ImgPs = styled.p`
  display:inline-bolck;
  font-size:20px;
  padding-top:15px;
  font-weight:bold;
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
          <ImgText>
            <ImgTitle>
              하나의 플랫폼에서
              <br />
              운송예약부터 차량관제까지!
            </ImgTitle>
            <ImgHr>
            </ImgHr>
            <ImgPs>
              빠르고 간편한 예약과 배송,
              <br />
              운송상황 실시간 확인으로 믿을 수 있는
              <br />
              운송 서비스를 만나보세요.
            </ImgPs>
          </ImgText>
        </ImgWrap>
        <ImgWrap>
          <Img src="./assets/keyimage_01.jpg" />
        </ImgWrap>
        <ImgWrap>
          <Img src="./assets/keyimage_01.jpg" />
        </ImgWrap>
      </StyledSlider>
    </div>
  );
}

export default ImgSlider;
