import React, { useState } from "react";
import styles from "../style/Manager_notice.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import NoticeAdd from "./Manager_notice_add";

function ManagerNotice({ noticeData }) {
  let notices = [
    {
      nb_idx: 0,
      nb_title: "",
      nb_auth: "",
      nb_important: "",
    },
  ];
  if (noticeData) {
    notices = noticeData;
  }

  const [addToggle, setAddToggle] = useState(false);

  const handleAdd = () => {
    setAddToggle(!addToggle);
  };

  function Notice({ notice, key }) {
    return (
      <tr>
        {key}
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
          <button>
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
              {notices.map((notice, index) => (
                <Notice notice={notice} key={index} />
              ))}
            </tbody>
          </table>
          <div className={styles.notice_add}>
            <button onClick={handleAdd}>공지사항 등록</button>
          </div>
        </div>
      )}
    </>
  );
}
export default ManagerNotice;
