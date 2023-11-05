import React, { useEffect, useState } from "react";
import styles from "../style/Manager_review.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function ManagerReview({ reviewData }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [arrowRotated, setArrowRotated] = useState([]);
  const [doRatingClick, setDoRatingClick] = useState(false);
  const [receiveData, setReceiveData] = useState([]);

  const toggleAccordion = (index) => {
    // 모든 삼각형 초기화
    setArrowRotated(Array(receiveData.length).fill(false));
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

  const infoReq = async () => {
    const reqTarget = "Review";

    try {
      const response = await fetch("/ManageMember", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reqTarget }), // 요청하는 데이터
      });

      if (response.ok) {
        const data = await response.json();
        const receiveData = data["rows"]; // 쿼리 수행으로 받아온 테이블 데이터
        if (data.success) {
          setReceiveData(receiveData); // 받아온 데이터 useState 변수에 저장
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useEffect(() => {
    infoReq();
  }, []);

  return (
    <div className={styles.customratingcontainer}>
      <div className={styles.titlecontainer}>
        <p className={styles.tablenum}>NO.</p>
        <p className={styles.thnum}>제목</p>
        <p className={styles.thid}>작성자</p>
      </div>
      <div className={styles.accordionContainer}>
        {receiveData.map((review, index) => (
          <div
            key={index}
            className={`${styles.accordionItem} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            <div
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(index)}
            >
              <span className={styles.num}>{review.rb_idx}</span>
              <span className={styles.title}>{review.rb_title}</span>
              <div className={styles.person}>
                <span className={styles.author}>{review.rb_auth}</span>
              </div>
              <p
                className={`${styles.triangle} ${
                  arrowRotated[index] ? styles.rotate : ""
                }`}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </p>
            </div>
            <div className={styles.openontainer}>
              {openIndex === index && (
                <div className={styles.content}>
                  <div className={styles.openstar}>
                    <span className={styles.rating}>
                      {"⭐️".repeat(review.rb_rating)}
                    </span>
                  </div>
                  <div className={styles.openwriter}>
                    <p>직성자 : </p>
                    <span className={styles.author}>{review.rb_auth}</span>
                  </div>
                  <div className={styles.opencar}>
                    <p>이용 차량 : </p>
                    <span className={styles.car}>{review.rb_usedCarId}</span>
                  </div>
                  <div className={styles.opensatisfy}>
                    <p>만족도 : </p>
                    <span className={styles.satisfy}>{review.rb_rating}</span>
                  </div>
                  <div className={styles.opencontent}>
                    <p>{review.rb_content}</p>
                  </div>
                  <button className={styles.btndelt}>삭제</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagerReview;
