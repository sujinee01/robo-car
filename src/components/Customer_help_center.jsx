import React, { useEffect, useState } from "react";
import styles from "../style/Customer_rating.module.css";
import s from "../style/Customer_help_center.module.css";
import styled from "styled-components";

import CustomerFaq from "./Customer_FAQ";
import CustomerReviewList from "./Customer_review_list";

const Btn = styled.button`
  width: 600px;
  height: 50px;
  background: #f5f5f5;
  color: black;
  font-size: 17px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
`;

/** 고객 센터 페이지 */
const CustomerHelpCenter = () => {
  const [activeTab, setActiveTab] = useState("자주 묻는 질문");

  useEffect(() => {
    if (activeTab) {
    }
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.customratingcontainer}>
      <div className={styles.ratingcontainer}>
        <h1 className={styles.rating_topic}>고객센터</h1>
        <div className={styles.rating_btn}>
          <Btn
            type="radio"
            name="tab"
            className={` ${s.btn} ${
              activeTab === "자주 묻는 질문" ? s.active : ""
            }`}
            onClick={() => handleTabClick("자주 묻는 질문")}
          >
            자주 묻는 질문
          </Btn>
          <Btn
            type="radio"
            name="tab"
            className={` ${s.btn} ${
              activeTab === "서비스 평가" ? s.active : ""
            }`}
            onClick={() => handleTabClick("서비스 평가")}
          >
            서비스 평가
          </Btn>
        </div>
      </div>
      {activeTab === "자주 묻는 질문" ? (
        <CustomerFaq />
      ) : (
        <CustomerReviewList />
      )}
    </div>
  );
};

export default CustomerHelpCenter;
