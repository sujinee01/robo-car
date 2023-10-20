import React, { useState } from "react";
import styles from "../style/Customer_faq.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function CustomerFaq() {
  const faqData = [
    {
      question: "Q. 관제서비스는 운송예약 후 바로 이용할 수 있나요?",
      answer: "A. 운송상품 픽업 완료시 관제서비스 이용가능합니다",
    },
    {
      question: "Q. 자주 묻는 질문입니다.",
      answer: "A. 답변",
    },
    {
      question: "Q. 자주 묻는 질문입니다.",
      answer: "A. 답변",
    },
    {
      question: "Q. 자주 묻는 질문입니다.",
      answer: "A. 답변",
    },
    {
      question: "Q. 자주 묻는 질문입니다.",
      answer: "A. 답변",
    },
    {
      question: "Q. 자주 묻는 질문입니다.",
      answer: "A. 답변",
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
      <div className={styles.numlist}>
        <button className={styles.btnnum}>1</button>
        <button className={styles.btnnum}>2</button>
      </div>
    </div>
  );
}

export default CustomerFaq;
