import React from "react";
import styles from "../style/Manager_member_detail.module.css";

const MemberDetail = ({ handleDetail, searchId }) => {
  return (
    <>
      {/* <ManagerHeader /> */}
      <div className={styles.member_detail_wrap}>
        <p>회원정보 상세조회</p>
        <hr />
        <div className={styles.detail_header}>
          <div className={styles.detail_button}>
            <button
              className={`${styles.detail_list} ${styles.button_inner}`}
              onClick={handleDetail}
            >
              목록
            </button>
            <button
              className={`${styles.detail_delete} ${styles.button_inner}`}
            >
              삭제
            </button>
          </div>
        </div>
        {/* 회원테이블 */}
        <div className={styles.detail_wrap}>
          <table>
            <tr>
              <td className={styles.tdfirst}>이름</td>
              <td></td>
            </tr>
            <tr>
              <td>아이디</td>
              <td>{searchId}</td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td></td>
            </tr>
            <tr>
              <td>휴대전화</td>
              <td></td>
            </tr>
            <tr>
              <td>이메일</td>
              <td></td>
            </tr>
            <tr>
              <td>주소</td>
              <td></td>
            </tr>
            <tr>
              <td className={styles.tdlast}>회사명</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default MemberDetail;
