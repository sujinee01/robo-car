import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/Manager_notice_add.module.css";
// import axios from "axios";

const NoticeAdd = () => {
  const navigate = useNavigate();

  const [notice, setNotice] = useState({
    nb_important: "",
    nb_title: "",
    nb_content: "",
    nb_auth: "",
  });

  const { nb_important, nb_title, nb_content, nb_auth } = notice;

  const onChange = (event) => {
    const { value, name } = event.target;
    setNotice({
      ...notice,
      [name]: value,
    });
  };

  // const saveNotice = async () => {
  //   await axios.post(`//localhost:4000/ManageNotice`, notice).then((res) => {
  //     alert("등록되었습니다.");
  //     navigate("/ManageNotice");
  //   });
  // };

  /*공지사항 목록버튼*/
  const backToList = () => {
    navigate("/ManageNotice");
  };

  return (
    <div className={styles.notice_add_wrap}>
      <p>공지사항 등록</p>
      <hr />
      <div className={styles.add_wrap}>
        <form method="post">
          <div className={styles.add_inner}>
            <div className={styles.add_auth}>
              <p>작성자</p>
              <input
                type="text"
                name="nb_auth"
                value={nb_auth}
                onChange={onChange}
              />
            </div>
            <div className={styles.add_import}>
              <p>중요표시</p>
              <input
                type="text"
                name="nb_important"
                value={nb_important}
                onChange={onChange}
              />
            </div>
          </div>

          <div className={styles.add_inner_02}>
            <div className={styles.add_title}>
              <p>제목</p>
              <input
                type="text"
                name="nb_title"
                value={nb_title}
                onChange={onChange}
              />
            </div>
            <div className={styles.add_content}>
              <p>내용</p>
              <textarea
                name="nb_content"
                value={nb_content}
                onChange={onChange}
              ></textarea>
            </div>
          </div>

          <div className={styles.add_button_wrap}>
            <div className={styles.add_button}>
              <button onClick={backToList}>돌아가기</button>
              <input type="submit" value={"확인"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NoticeAdd;
