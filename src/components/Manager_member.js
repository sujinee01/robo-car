import React, { useState, useEffect } from "react";
import styles from "../style/Manager_member.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MemberDetail from "./Manager_member_detail";

function ManagerMember() {
  const [searchId, setSearchId] = useState("");
  const [detailToggle, setDetailToggle] = useState(false);
  const [receiveData, setReceiveData] = useState([]);

  const handleDetail = (searchId) => {
    setDetailToggle(!detailToggle);
    setSearchId(searchId);
  };

  const infoReq = async () => {
    const reqTarget = "Member";

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

        if (data.success) {
          setReceiveData(data["rows"]);
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  const delMember = async (id) => {
    const reqTarget = "delMember";
    const u_id = id;

    try {
      const response = await fetch("/ManageMember", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reqTarget, u_id }), // 요청하는 데이터
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.success) {
          const updatedData = receiveData.filter((user) => user.u_id !== u_id);
          setReceiveData(updatedData);
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useEffect(() => {
    infoReq();
  }, []);

  function User({ user }) {
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
          <button onClick={() => delMember(user.u_id)}>
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
          {receiveData ? (
            receiveData.length === 0 ? (
              <>
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
                </table>
                <p>등록된 회원이 없습니다.</p>
              </>
            ) : (
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
                  {receiveData.map((user, index) => (
                    <User user={user} key={index} />
                  ))}
                </tbody>
              </table>
            )
          ) : (
            <>
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
              </table>
              <p>등록된 회원이 없습니다.</p>
            </>
          )}
        </div>
      )}
    </>
  );
}
export default ManagerMember;
