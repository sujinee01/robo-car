import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../style/Manager_header.module.css";

const ManagerHeader = () => {
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

  /*클릭시 디자인*/
  const activeStyle = {
    backgroundColor: "var(--sub-color)",
  };

  return (
    <div className={styles.manager_header_wrap}>
      <p>관리자 페이지</p>
      <header>
        <NavLink
          to="/ManagerMain"
          value="Home"
          className={styles.btnactive}
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          Home
        </NavLink>
        <NavLink
          to="/ManagerMember"
          value="Member"
          onClick={memberInfoReq}
          userData={receiveData}
          className={styles.btnactive}
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          회원관리
        </NavLink>
        <NavLink
          to="/ManagerRes"
          value="Resv"
          className={styles.btnactive}
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          예약관리
        </NavLink>
        <NavLink
          to="/ManagerVehicle"
          value="Car"
          className={styles.btnactive}
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          운송차량관리
        </NavLink>
        <NavLink
          to="/ManagerNotice"
          value="Notice"
          className={styles.btnactive}
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          공지사항관리
        </NavLink>
        <NavLink
          to="/ManagerReview"
          value="Review"
          className={styles.btnactive}
          style={({ isActive }) => (isActive ? activeStyle : {})}
        >
          이용자 평가내역
        </NavLink>
      </header>
      <hr />
    </div>
  );
};

export default ManagerHeader;
