import React from "react";
import styles from "../style/Manager_member_detail.module.css";

const MemberDetail = ({ handleDetail, search }) => {
  console.log(search);
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
            {/* <button
              className={`${styles.detail_delete} ${styles.button_inner}`}
            >
              삭제
            </button> */}
          </div>
        </div>
        {/* 회원테이블 */}
        <div className={styles.detail_wrap}>
          <table>
            <tr>
              <td className={styles.tdfirst}>이름</td>
              <td>{search.u_id}</td>
            </tr>
            <tr>
              <td>아이디</td>
              <td>{search.u_name}</td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>{[...search.u_pw].map((s) => (s = "*"))}</td>
            </tr>
            <tr>
              <td>휴대전화</td>
              <td>{search.u_phone}</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>{search.u_email}</td>
            </tr>
            <tr>
              <td>주소</td>
              <td>{search.u_addr}</td>
            </tr>
            <tr>
              <td className={styles.tdlast}>회사명</td>
              <td>{search.u_office}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default MemberDetail;
