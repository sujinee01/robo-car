import React from "react";
import styles from "../style/Manager_member_detail.module.css";

const MemberDetail = () => {
  return (
    <div className={styles.member_detail_wrap}>
      <div className={styles.detail_header}>
        <div className={styles.detail_button}>
          <button className={`${styles.detail_list} ${styles.button_inner}`}>
            목록
          </button>
          <button className={`${styles.detail_delete} ${styles.button_inner}`}>
            삭제
          </button>
        </div>
      </div>
      <div className={styles.detail_wrap}>
        <div className={styles.input_wrap}>
          <p>이름</p>
          <div className={styles.input_info}>
            <span></span>
          </div>
        </div>
        <div className={styles.input_wrap}>
          <p>아이디</p>
          <div className={styles.input_info}>
            <span></span>
          </div>
        </div>
        <div className={styles.input_wrap}>
          <p>비밀번호</p>
          <div className={styles.input_info}>
            <span></span>
          </div>
        </div>
        <div className={styles.input_wrap}>
          <p>휴대전화</p>
          <div className={styles.input_info}>
            <span></span>
          </div>
        </div>
        <div className={styles.input_wrap}>
          <p>이메일</p>
          <div className={styles.input_info}>
            <span></span>
          </div>
        </div>
        <div className={styles.input_wrap}>
          <p>주소</p>
          <div className={styles.input_info}>
            <span></span>
          </div>
        </div>
        <div className={styles.input_wrap}>
          <p>회사명</p>
          <div className={styles.input_info}>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
