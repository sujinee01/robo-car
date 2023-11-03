import React, { useState } from "react";
import styles from "../style/Mypage_confirm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import CustomRating from "./Customer_rating";

function Mypage_confirm({ resvData }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [arrowRotated, setArrowRotated] = useState([]);
  const [doRatingClick, setDoRatingClick] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [selectedResv, setSelectedResv] = useState("");

  if (resvData && resvData !== reviews) {
    setReviews(resvData);
  }

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
    setDoRatingClick(!doRatingClick);
  };
  // 예약 내역 없는 경우 예외처리 필요!!!!!!
  // reservation 테이블에서 예약 건에 대한 리뷰 작성 여부 확인할 속성 추가 필요!
  return (
    <>
      {doRatingClick ? (
        <CustomRating doRating={doRating} targetResv={selectedResv} />
      ) : (
        <div className={styles.mypageconfirmcontainer}>
          <div className={styles.myconfirmcontain}>
            <div className={styles.confirmtopic}>
              <p className={styles.pagetopic}>예약내역</p>
              <div className={styles.hline}></div>
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
                    <button className={styles.btnstate}>
                      <span className={styles.state}>{review.resv_state}</span>
                    </button>
                    <div className={styles.opennum}>
                      <p>예약번호</p>
                      <span className={styles.author}>{review.resv_no}</span>
                    </div>
                    <div className={styles.vline}></div>
                    <div className={styles.opendate}>
                      <p>예약일시</p>
                      <span className={styles.date}>{review.resv_date}</span>
                    </div>
                    <p
                      className={`${styles.triangle} ${
                        arrowRotated[index] ? styles.rotate : ""
                      }`}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </p>
                  </div>
                  <div className={styles.opencontainer}>
                    {openIndex === index && (
                      <div className={styles.content}>
                        <div className={styles.openleft}>
                          <div className={styles.opencontent}>
                            <p>
                              발송지&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                            <span className={styles.rescontent}>
                              {review.resv_start}
                            </span>
                          </div>
                          <div className={styles.opencontent}>
                            <p>
                              도착지&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                            <span className={styles.rescontent}>
                              {review.resv_destin}
                            </span>
                          </div>
                          <div className={styles.opencontent}>
                            <p>배송차량&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <span className={styles.rescontent}>
                              {review.resv_carselect}
                            </span>
                          </div>
                          <div className={styles.opencontent}>
                            <p>배송옵션&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            <span className={styles.rescontent}>
                              {review.resv_delivopt}
                            </span>
                          </div>
                          <div className={styles.opencontent}>
                            <p>배송물품설명</p>
                            <span className={styles.rescontent}>
                              {review.resv_info}
                            </span>
                          </div>
                        </div>
                        <div className={styles.openright}>
                          <div className={styles.opencontent}>
                            <p>발송자 연락처</p>
                            <span className={styles.rescontent}>
                              {review.resv_ord_tel}
                            </span>
                          </div>
                          <div className={styles.opencontent}>
                            <p>수령인 연락처</p>
                            <span className={styles.rescontent}>
                              {review.resv_recip_tel}
                            </span>
                          </div>
                          <div className={styles.opencontent}>
                            <p>
                              메모&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                            <span className={styles.rescontent}>
                              {review.resv_memo}
                            </span>
                          </div>
                          <div className={styles.opencontent}>
                            <div className={styles.costshow}>
                              <p>
                                결제금액:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <span className={styles.rescontent}>
                                {review.resv_price.toLocaleString()}원
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className={styles.btnrate_wrap}>
                          {review.resv_review_chk === 0 ? (
                            <button
                              className={styles.btnrate}
                              onClick={() => {
                                setSelectedResv(review);
                                doRating();
                              }}
                            >
                              서비스 평가하기
                            </button>
                          ) : (
                            <button className={styles.btnrate} disabled>
                              평가완료
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Mypage_confirm;
