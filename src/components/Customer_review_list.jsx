import React, { useState } from "react";
import styles from "../style/Customer_review_list.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// import CustomRating from "./Customer_rating";

function CustomerReviewList({ reviewData }) {
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
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [arrowRotated, setArrowRotated] = useState([]);
  // const [doRatingClick, setDoRatingClick] = useState(false);

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

  return (
    <div>
      <div className={styles.customratingcontainer}>
        <div className={styles.listcontainer}>
          <div className={styles.accordionContainer}>
            {reviewData.map((review, index) => (
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
                  <span className={styles.num}>No.{review.rb_idx}</span>
                  <span className={styles.title}>{review.rb_title}</span>
                  <div className={styles.rating_box}>
                    별점 {"⭐️".repeat(review.rb_rating)}
                  </div>
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
                        <span className={styles.rating}></span>
                      </div>
                      <div className={styles.openwriter}>
                        <p>작성자: </p>
                        <span className={styles.author}>{review.rb_auth}</span>
                      </div>
                      <div className={styles.opencar}>
                        <p>이용 차량번호: </p>
                        <span className={styles.car}>
                          {review.rb_usedCarId}
                        </span>
                      </div>
                      <div className={styles.opensatisfy}>
                        <p>만족도: </p>
                        <span className={styles.satisfy}>
                          {review.rb_rating}
                        </span>
                      </div>
                      <div className={styles.opencontent}>
                        <p>{review.rb_content}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviewList;
