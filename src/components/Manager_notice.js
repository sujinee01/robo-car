import React, { useState, useEffect } from "react";
import styles from "../style/Manager_notice.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import NoticeAdd from "./Manager_notice_add";
import ConfirmFunc from "./Confirm_func";

function ManagerNotice() {
  const [addToggle, setAddToggle] = useState(false);
  const [receiveData, setReceiveData] = useState([]);

  const handleAdd = () => {
    setAddToggle(!addToggle);
  };

  const infoReq = async () => {
    const reqTarget = "Notice";

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

  const delNotice = async (noti) => {
    const reqTarget = "delNotice";
    const notiIdx = noti;

    try {
      const response = await fetch("/ManageMember", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reqTarget, notiIdx }), // 요청하는 데이터
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          const updatedData = receiveData.filter(
            (notice) => notice.nb_idx !== notiIdx
          );
          setReceiveData(updatedData);
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
    infoReq();
  };

  useEffect(() => {
    if (addToggle === false) {
      infoReq();
    }
  }, [addToggle]);

  useEffect(() => {
    if (addToggle === false) {
      infoReq();
    }
  }, []);

  function Notice({ notice }) {
    return (
      <tr>
        <td>{notice.nb_idx}</td>
        <td>{notice.nb_important}</td>
        <td>{notice.nb_title}</td>
        <td>{notice.nb_auth}</td>
        <td>
          {/*수정버튼*/}
          <button>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={styles.faPenToSquare}
            />
          </button>
        </td>
        <td>
          {/*삭제버튼*/}
          <button onClick={() => ConfirmFunc(() => delNotice(notice.nb_idx))}>
            <FontAwesomeIcon icon={faXmark} className={styles.faXmark} />
          </button>
        </td>
      </tr>
    );
  }

  return (
    <>
      {addToggle ? (
        <NoticeAdd handleAdd={handleAdd} />
      ) : (
        <div className={styles.notice_wrap}>
          {receiveData ? (
            receiveData.length === 0 ? (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>중요</th>
                      <th>제목</th>
                      <th>작성자</th>
                      <th>수정</th>
                      <th>삭제</th>
                    </tr>
                  </thead>
                </table>
                <p>공지사항이 없습니다.</p>
              </>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>중요</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>수정</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                <tbody>
                  {receiveData.map((notice, index) => (
                    <Notice notice={notice} key={index} />
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
                    <th>중요</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>수정</th>
                    <th>삭제</th>
                  </tr>
                </thead>
              </table>
              <p>공지사항이 없습니다.</p>
            </>
          )}
          <div className={styles.notice_add}>
            <button onClick={handleAdd}>공지사항 등록</button>
          </div>
        </div>
      )}
    </>
  );
}
export default ManagerNotice;
