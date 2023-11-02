import React, { useEffect, useState } from "react";
import style from "../style/Mypage_confirm.module.css";
import mys from "../style/Mypage.module.css";
import styled from "styled-components";

import MypageInfo from "./Mypage_info";
import MypageConf from "./Mypage_confirm";

const Btn = styled.button`
  width: 400px;
  height: 50px;
  background: #f5f5f5;
  color: black;
  font-size: 18px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
`;

const Mypage = () => {
  const [activeTab, setActiveTab] = useState("개인정보 수정");
  const [receiveData, setReceiveData] = useState(""); // DB 요청 저장 변수

  useEffect(() => {
    infoReq(activeTab);
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    infoReq(tabName);
  };

  const infoReq = async (tab) => {
    const reqTarget = tab;
    const userId = localStorage.getItem("id");

    try {
      const response = await fetch("/Mypage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reqTarget, userId }), // 요청하는 데이터
      });

      if (response.ok) {
        const data = await response.json();
        const receiveData = data["rows"]; // 쿼리 수행으로 받아온 테이블 데이터
        if (data.success) {
          setReceiveData(receiveData); // 받아온 데이터 useState 변수에 저장
          console.log(receiveData);
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  return (
    <div className={style.mypageconfcontainer}>
      <div className={style.myconfcontain}>
        <div className={style.conftopic}>
          <h1 className={style.conftopic}>마이페이지</h1>
          <div className={style.choosebtn}>
            <Btn
              type="radio"
              name="tab"
              className={` ${mys.btn} ${
                activeTab === "개인정보 수정" ? mys.active : ""
              }`}
              value="개인정보수정"
              onClick={() => handleTabClick("개인정보 수정")}
            >
              개인정보 수정
            </Btn>
            <Btn
              type="radio"
              name="tab"
              className={` ${mys.btn} ${
                activeTab === "예약내역" ? mys.active : ""
              }`}
              value="예약내역"
              onClick={() => handleTabClick("예약내역")}
            >
              예약내역
            </Btn>
          </div>
        </div>
        {activeTab === "개인정보 수정" ? <MypageInfo /> : <MypageConf />}
      </div>
    </div>
  );
};

export default Mypage;
