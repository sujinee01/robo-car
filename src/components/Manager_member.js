import React, { useState } from "react";
import styles from "../style/Manager_member.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MemberDetail from "./Manager_member_detail";

function ManagerMember({ userData }) {
  let users = [
    {
      id: 1,
      u_name: "",
      u_id: "",
      u_phone: "",
      u_email: "",
      u_addr: "",
      u_office: "",
    },
  ];
  if (userData) {
    users = userData;
  }

  const [searchId, setSearchId] = useState("");
  const [detailToggle, setDetailToggle] = useState(false);

  const handleDetail = (searchId) => {
    setDetailToggle(!detailToggle);
    setSearchId(searchId);
  };

  function User({ user, key }) {
    return (
      <tr>
        <td></td>
        <td>{user.u_name}</td>
        <td>{user.u_id}</td>
        <td>{user.u_phone}</td>
        <td>{user.u_email}</td>
        <td>{user.u_addr}</td>
        <td>{user.u_office}</td>
        <td>
          {/*삭제버튼*/}
          <button>
            <FontAwesomeIcon icon={faXmark} className={styles.faXmark} />
          </button>
        </td>
        <td>
          {/*상세조회버튼*/}
          <button onClick={() => handleDetail(user.u_id)}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.faMagnifyingGlass}
            />
          </button>
        </td>
      </tr>
    );
  }

  return (
    <>
      {detailToggle ? (
        <MemberDetail handleDetail={handleDetail} searchId={searchId} />
      ) : (
        <div className={styles.member_wrap}>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>이름</th>
                <th>아이디</th>
                <th>휴대전화</th>
                <th>이메일</th>
                <th>주소</th>
                <th>회사</th>
                <th>삭제</th>
                <th>조회</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <User user={user} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
export default ManagerMember;
