import React, { useState } from "react";
import styles from "../style/Manager_page.module.css";
import ManagerMain from "./Manager_main";
import ManagerMember from "./Manager_member";
const ManagerPage = () => {
  const [receiveData, setReceiveData] = useState(""); // DB 요청 저장 변수

  /** DB내 데이터 요청 처리 */
  const memberInfoReq = async (e) => {
    const reqTarget = e.target.value;

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
        console.log(receiveData);
        if (data.success) {
          console.log(data.message);
          setReceiveData(receiveData); // 받아온 데이터 useState 변수에 저장
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  return (
    <>
      <div className={styles.tab_wrap}>
        <h2>관리자 페이지</h2>
        <input
          name="tab"
          id="tab1"
          value="Home"
          type="radio"
          onClick={memberInfoReq}
          defaultChecked
        />
        <input
          name="tab"
          id="tab2"
          value="Member"
          type="radio"
          onClick={memberInfoReq}
        />
        <input
          name="tab"
          id="tab3"
          value="Resv"
          type="radio"
          onClick={memberInfoReq}
        />
        <input
          name="tab"
          id="tab4"
          value="Car"
          type="radio"
          onClick={memberInfoReq}
        />
        <input
          name="tab"
          id="tab5"
          value="Notice"
          type="radio"
          onClick={memberInfoReq}
        />
        <input
          name="tab"
          id="tab6"
          value="Review"
          type="radio"
          onClick={memberInfoReq}
        />
        <header>
          <label htmlFor="tab1">Home</label>
          <label htmlFor="tab2">회원관리</label>
          <label htmlFor="tab3">예약관리</label>
          <label htmlFor="tab4">운송차량관리</label>
          <label htmlFor="tab5">공지사항관리</label>
          <label htmlFor="tab6">이용자 평가 내역</label>
          <hr />
        </header>
        <div className={`${styles.tab1_content} ${styles.tab_content}`}>
          <ManagerMain />
        </div>
        <div className={`${styles.tab2_content} ${styles.tab_content}`}>
          <ManagerMember userData={receiveData} />
        </div>
        <div className={`${styles.tab3_content} ${styles.tab_content}`}>
          예약관리 링크
        </div>
        <div className={`${styles.tab4_content} ${styles.tab_content}`}>
          운송차량관리 링크
        </div>
        <div className={`${styles.tab5_content} ${styles.tab_content}`}>
          공지사항관리 링크
        </div>
        <div className={`${styles.tab6_content} ${styles.tab_content}`}>
          이용자 평가내역 링크
        </div>
      </div>
    </>
  );
};

export default ManagerPage;
