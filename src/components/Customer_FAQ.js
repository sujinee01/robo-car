import React, { useState } from "react";
import styles from "../style/Customer_faq.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function CustomerFaq() {
  const faqData = [
    {
      question: "Q. [서비스이용] ROBO-CAR 주요 서비스는 무엇인가요?",
      answer:
        "A. ROBO-CAR는 무인차량관제 시스템을 이용해서 배송은 빠르게 진행하고, 비용을 절감하여 더욱 저렴하고 안전한 운송 서비스를 제공합니다. 실시간 차량 관제 및 운행 정보 분석을 통한 효율적인 배차 및 경로, 24시간 픽업으로 빠른 배송 서비스를 편하게 이용해 보세요!",
    },
    {
      question: "Q. [서비스이용] 차량관제시스템은 어떤 서비스인가요?",
      answer:
        "A. 차량용 통신 모듈을 이용해 차량의 위치와 상태를 실시간으로 PC와 스마트폰에서 확인하는 서비스입니다. 차량 관제 시스템은 빠른 픽업과 안전한 배송으로 고객분들의 운송을 책임집니다.",
    },
    {
      question: "Q. [서비스이용] 운송 예약 서비스 이용금액은 어떻게 되나요?",
      answer:
        "A. 금액은 거리와 화물 크기에 따른 운송차량의 종류와 배송 유형에 따라 달라집니다. 운송 서비스 이용 금액에 대해 자세한 내용을 알고 싶으시면 서비스 소개 페이지 방문 및 상담전화로 문의해 주시기 바랍니다. 고객센터: 1544-1000 상담안내시간 (평일 09:00~18:00 주말 10:00~14:00)",
    },
    {
      question:
        "Q. [서비스이용] 관제서비스는 운송예약 후 바로 이용할 수 있나요?",
      answer:
        "A. 운송상품 픽업 완료시 관제서비스 이용가능합니다. 해당 예약 건의 진행상황은 홈페이지 [마이페이지] -> [예약내역]을 통해 확인하실 수 있습니다.",
    },
    {
      question: "Q. [배송] 일반배송과 특송의 차이점은 무엇인가요?",
      answer:
        "A. 일반 배송은 해당 예약 건의 운송차량의 배차와 픽업, 배송 완료 시까지 2~3일 소요됩니다. 특송은 운송차량의 배차와 픽업, 배송완료까지 24시간 이내 서비스를 이용하실 수 있습니다.",
    },
    {
      question: "Q. [배송] 지방 배송도 가능한가요?",
      answer: "A. 가능합니다. 거리나 상황에 따라 운송차량 배차가 늦어질 수 있습니다. ",
    },
    {
      question: "Q. [배송] 배송 시간은 얼마나 걸리나요?",
      answer:
        "A. 일반 배송은 해당 예약 건의 운송차량의 배차와 픽업, 배송 완료 시까지 2~3일 소요됩니다. 지방은 상황에 따라 시간이 더 소요될 수 있습니다.",
    },
    {
      question: "Q. [이용문의] 예약내역은 어떻게 확인하나요?",
      answer:
        "A. 예약내역은 홈페이지 [마이페이지] -> [예약내역]을 통해 확인하실 수 있습니다.",
    },
    {
      question: "Q. [이용문의] 개인정보 수정은 어떻게 하나요?",
      answer:
        "A. 개인정보 수정은 홈페이지 [마이페이지] -> [개인정보 수정]을 통해 이용하실 수 있습니다.",
    },
  
    // 추가적인 질문과 답변을 필요에 따라 추가할 수 있습니다.
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [arrowRotated, setArrowRotated] = useState([]);

  const handleItemClick = (index) => {
    // 모든 삼각형 초기화
    setArrowRotated(Array(faqData.length).fill(false));
    // 삼각형 회전 상태를 설정
    setArrowRotated((prevArrowRotated) => {
      const newArrowRotated = [...prevArrowRotated];

      if (openIndex !== index) {
        // 새로운 질문을 클릭하면 해당 질문을 열고 이전 질문을 닫는다.
        newArrowRotated[index] = !newArrowRotated[index];
        setOpenIndex(index);
      } else {
        // 이미 열린 질문을 다시 클릭하면 닫는다.
        setOpenIndex(null);
      }
      return newArrowRotated;
    });
  };

  return (
    <div className={styles.faq_container}>
      {/* <h1 className={styles.cus_title}>고객센터</h1>
      <div className={styles.custom_btn}>
        <button className={styles.btn_choice}>자주 묻는 질문</button>
        <button className={styles.btn_left}>서비스 평가</button>
      </div> */}
      <div className={styles.quescontainer}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.faq_item} ${
              openIndex === index ? styles.active : ""
            }`}
          >
            <div
              className={styles.question}
              onClick={() => handleItemClick(index)}
            >
              {item.question}
              <p
                className={`${styles.triangle} ${
                  arrowRotated[index] ? styles.rotate : ""
                }`}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </p>
            </div>
            {openIndex === index && (
              <div className={styles.answer}>{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      {/* <div className={styles.numlist}>
        <button className={styles.btnnum}>1</button>
        <button className={styles.btnnum}>2</button>
      </div> */}
    </div>
  );
}

export default CustomerFaq;
