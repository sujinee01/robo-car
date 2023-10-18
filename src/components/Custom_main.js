import React, { useState } from "react";
import styles from "../style/Custom_main.module.css";

function Custom_main() {
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
    // 추가적인 질문과 답변을 필요에 따라 추가할 수 있습니다.
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faq_container}>
      <h1 className={styles.cus_title}>고객센터</h1>
      <div className={styles.custom_btn}>
        <button className={styles.btn_choice}>자주 묻는 질문</button>
        <button className={styles.btn_left}>서비스 평가</button>
      </div>
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
              <p className={styles.triangle}>&#9660;</p>
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

export default Custom_main;
