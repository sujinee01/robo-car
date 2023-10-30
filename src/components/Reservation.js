/*
운송 예약 페이지
*/

import React, { useState } from "react";
import style from "../style/Reservation.module.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReservationPage() {
  const [selectedCar, setSelectedCar] = useState(""); // 선택한 배송차량 상태

  // 라디오 버튼 선택 시 호출되는 함수
  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  };

  const [selectedOption1, setSelectedOption1] = useState(""); // 선택한 배송옵션 상태

  // 라디오 버튼 선택 시 호출되는 함수
  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const [selectedOption2, setSelectedOption2] = useState(""); // 선택한 배송옵션 상태

  // 라디오 버튼 선택 시 호출되는 함수
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  // 옵션별 가격 책정하는 부분
  let carOptPrice =
    selectedCar === "차량1" || selectedCar === "차량2"
      ? 200000
      : selectedCar !== ""
      ? 100000
      : 0; // 차량 옵션 가격
  let delivOptPrice1 =
    selectedOption1 === "편도"
      ? 100000
      : selectedOption1 === "왕복"
      ? 180000
      : 0; // 배송 옵션 가걱 (편도/왕복)
  let delivOptPrice2 =
    selectedOption2 === "일반" ? 50000 : selectedOption2 === "특송" ? 80000 : 0; // 배송 옵션 가걱 (일반/특송)
  let totalPrice = carOptPrice + delivOptPrice1 + delivOptPrice2; // 최종 가격

  let priceMsg = `${carOptPrice.toLocaleString()}(${selectedCar}) + ${delivOptPrice1.toLocaleString()}(${selectedOption1}) + ${delivOptPrice2.toLocaleString()}(${selectedOption2}) = `;

  const resvReq = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const subscriber = localStorage.getItem("id");
    const origin = formData.get("origin");
    const consignorPhone = formData.get("consignorPhone");
    const destination = formData.get("desti");
    const recepiptPhone = formData.get("recepiptPhone");
    const date = formData.get("date");
    const time = formData.get("time");
    const carOpt = formData.get("deliveryCar");
    const delivOpt1 = formData.get("deliveryOption1");
    const delivOpt2 = formData.get("deliveryOption2");
    const freightInfo = formData.get("freightInfo");
    const memo = formData.get("memo");
    const price = totalPrice;

    try {
      const response = await fetch("/Resv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subscriber,
          origin,
          consignorPhone,
          destination,
          recepiptPhone,
          date,
          time,
          carOpt,
          delivOpt1,
          delivOpt2,
          freightInfo,
          memo,
          price,
        }),
      });

      if (response.ok) {
        alert(`${subscriber}님, 예약이 정상적으로 처리되었습니다.`);
        window.location.href = "/"; // 로그인 성공 시 Home 페이지로 리다이렉트
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  };

  return (
    <div>
      <div className={style.image}>IMAGE</div>
      <h1>운송 예약</h1>
      <div className={style.reservation_info_line}>
        <span className={style.reservation_info}>예약정보입력</span>
      </div>
      <form action="/Resv" method="post" onSubmit={resvReq}>
        <div className={style.delivery_address}>
          <div>
            <div className={style.title_css}>발송지</div>
            <div>
              <input
                className={style.padding_background_1}
                type="text"
                placeholder="발송지 입력"
                name="origin"
              ></input>
            </div>
            <div>
              <input
                className={style.padding_background_2}
                placeholder="발송인 연락처"
                name="consignorPhone"
              ></input>
            </div>
          </div>
          <div>
            <div className={style.title_css}>도착지</div>
            <div>
              <input
                className={style.padding_background_1}
                type="text"
                placeholder="도착지 입력"
                name="desti"
              ></input>
            </div>
            <div>
              <input
                className={style.padding_background_2}
                placeholder="수령인 연락처"
                name="recepiptPhone"
              ></input>
            </div>
          </div>
        </div>
        <div className={style.delivery_day}>
          <div>
            <div className={style.title_css}>배송일</div>
            <div>
              <input
                className={style.padding_background_1}
                type="date"
                placeholder="배송일 선택"
                name="date"
              ></input>
            </div>
          </div>
          <div>
            <div className={style.title_css}>배송시간</div>
            <div>
              <input
                className={style.padding_background_1}
                type="time"
                placeholder="배송시간 선택"
                name="time"
              ></input>
            </div>
          </div>
        </div>
        <div className={style.title_css}>배송차량 선택</div>
        <div className={style.delivery_car_choice}>
          <label
            className={`${style.padding_background_3} ${
              selectedCar === "차량1" ? style["car-selected"] : ""
            }`}
          >
            <input
              type="radio"
              name="deliveryCar"
              value="차량1"
              checked={selectedCar === "차량1"} // 선택 상태 확인
              onChange={handleCarChange}
            />
            <span>차량1</span>
          </label>
          <label
            className={`${style.padding_background_3} ${
              selectedCar === "차량2" ? style["car-selected"] : ""
            }`}
          >
            <input
              type="radio"
              name="deliveryCar"
              value="차량2"
              checked={selectedCar === "차량2"}
              onChange={handleCarChange}
            />
            <span>차량2</span>
          </label>
          <label
            className={`${style.padding_background_3} ${
              selectedCar === "차량3" ? style["car-selected"] : ""
            }`}
          >
            <input
              type="radio"
              name="deliveryCar"
              value="차량3"
              checked={selectedCar === "차량3"}
              onChange={handleCarChange}
            />
            <span>차량3</span>
          </label>
          <label
            className={`${style.padding_background_3} ${
              selectedCar === "차량4" ? style["car-selected"] : ""
            }`}
          >
            <input
              type="radio"
              name="deliveryCar"
              value="차량4"
              checked={selectedCar === "차량4"}
              onChange={handleCarChange}
            />
            <span>차량4</span>
          </label>
        </div>
        <div className={style.title_css}>배송옵션</div>
        <div className={style.delivery_option_choice}>
          <label
            className={`${style.padding_background_4} ${
              selectedOption1 === "편도" ? style["option-selected"] : ""
            }`}
          >
            <input
              type="radio"
              name="deliveryOption1"
              value="편도"
              checked={selectedOption1 === "편도"} // 선택 상태 확인
              onChange={handleOptionChange1}
            />
            <span>편도</span>
          </label>
          <label
            className={`${style.padding_background_4} ${
              selectedOption1 === "왕복" ? style["option-selected"] : ""
            }`}
          >
            <input
              type="radio"
              name="deliveryOption1"
              value="왕복"
              checked={selectedOption1 === "왕복"}
              onChange={handleOptionChange1}
            />
            <span>왕복</span>
          </label>
          <label
            className={`${style.padding_background_4} ${
              selectedOption2 === "일반" ? style["option-selected"] : ""
            }`}
          >
            <input
              type="radio"
              name="deliveryOption2"
              value="일반"
              checked={selectedOption2 === "일반"}
              onChange={handleOptionChange2}
            />
            <span>일반</span>
          </label>
          <label
            className={`${style.padding_background_4} ${
              selectedOption2 === "특송" ? style["option-selected"] : ""
            }`}
          >
            <input
              type="radio"
              name="deliveryOption2"
              value="특송"
              checked={selectedOption2 === "특송"}
              onChange={handleOptionChange2}
            />
            <span>특송</span>
          </label>
        </div>
        <div className={style.delivery_memo}>
          <div>
            <div className={style.title_css}>배송물품 설명</div>
            <div>
              <input
                className={style.padding_background_5}
                type="text"
                name="freightInfo"
              ></input>
            </div>
          </div>
          <div>
            <div className={style.title_css}>메모</div>
            <div>
              <input
                className={style.padding_background_5}
                type="text"
                name="memo"
              ></input>
            </div>
          </div>
        </div>
        <div className={style.payment}>결제금액</div>
        <div className={style.payment_notice}>
          {selectedCar && selectedOption1 && selectedOption2 ? priceMsg : ""}
          <span>{totalPrice.toLocaleString()}</span>원
        </div>
        <div className={style.title_css}>
          <button className={style.pay_btn}>예약하기</button>
        </div>
      </form>
    </div>
  );
}

export default ReservationPage;
