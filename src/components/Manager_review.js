import React, { useState } from "react";
import styles from "../style/Manager_review.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function ManagerReview() {
  const [openIndex, setOpenIndex] = useState(null);
  const [arrowRotated, setArrowRotated] = useState([]);
  const [doRatingClick, setDoRatingClick] = useState(false);

  const toggleAccordion = (index) => {
    // 모든 삼각형 초기화
    setArrowRotated(Array(reviews.length).fill(false));
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

  const doRating = () => {
    if (!doRatingClick) {
      setDoRatingClick(true);
    }
  };

  const reviews = [
    {
      num: "05.",
      title: "만족스러운 이용",
      author: "홍길동",
      car: "23나 2345",
      satisfy: "5",
      rating: (
        <div>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
        </div>
      ),
      content: "운송예약 잘 이용했습니다. 다음에도 이용할게요.",
    },
    // 다른 리뷰 데이터 추가

    {
      num: "04.",
      title: "만족스러운 이용",
      author: "김철수",
      car: "12가 1234",
      satisfy: "4",
      rating: (
        <div>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
        </div>
      ),
      content: "운송예약 잘 이용했습니다.",
    },
    {
      num: "03.",
      title: "만족스러운 이용",
      author: "한민성",
      car: "98미4532",
      satisfy: "5",
      rating: (
        <div>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
        </div>
      ),
      content: "간편하니 좋네요. 다음에도 이용하겠습니다",
    },
    {
      num: "02.",
      title: "만족스러운 이용",
      author: "박다라",
      car: "12가1234",
      satisfy: "5",
      rating: (
        <div>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
        </div>
      ),
      content: "간편하니 이용하기 좋네요 감사합니다",
    },
    {
      num: "01.",
      title: "만족스러운 이용",
      author: "박하나",
      car: "21다4356",
      satisfy: "4",
      rating: (
        <div>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
          <span role="img" aria-label="star">
            ⭐️
          </span>
        </div>
      ),
      content: "운송예약부터 배송까지 빠르고 좋습니다.",
    },
  ];

  return (
    <div className={styles.customratingcontainer}>
      <div className={styles.titlecontainer}>
        <p className={styles.tablenum}>NO.</p>
        <p className={styles.thnum}>제목</p>
        <p className={styles.thid}>작성자</p>
      </div>
      <div className={styles.accordionContainer}>
        {reviews.map((review, index) => (
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
              <span className={styles.num}>{review.num}</span>
              <span className={styles.title}>{review.title}</span>
              <div className={styles.person}>
                <span className={styles.author}>{review.author}</span>
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
                    <span className={styles.rating}>{review.rating}</span>
                  </div>
                  <div className={styles.openwriter}>
                    <p>직성자: </p>
                    <span className={styles.author}>{review.author}</span>
                  </div>
                  <div className={styles.opencar}>
                    <p>이용 차량번호: </p>
                    <span className={styles.car}>{review.car}</span>
                  </div>
                  <div className={styles.opensatisfy}>
                    <p>만족도: </p>
                    <span className={styles.satisfy}>{review.satisfy}</span>
                  </div>
                  <div className={styles.opencontent}>
                    <p>{review.content}</p>
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
