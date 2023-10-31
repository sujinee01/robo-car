import React, { useState } from "react";
import styles from "../style/Manager_notice_add.module.css";

const NoticeAdd = ({ handleAdd }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAdd();

    const formData = new FormData(e.target);
    console.log(formData);
    const auth = formData.get("nb_auth");
    const title = formData.get("nb_title");
    const content = formData.get("nb_content");
    const important = formData.get("nb_important");

    try {
      const response = await fetch("/NotiAdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          auth,
          title,
          content,
          important,
        }),
      });

      if (response.ok) {
        const data = await response.json();
      }
    } catch {
      console.log("차량 등록 오류");
    }
  };

  return (
    <div className={styles.notice_add_wrap}>
      <p>공지사항 등록</p>
      <hr />
      <div className={styles.add_wrap}>
        <form action="/NotiAdd" method="post" onSubmit={handleSubmit}>
          <div className={styles.add_inner}>
            <div className={styles.add_auth}>
              <p>작성자</p>
              <input type="text" name="nb_auth" value="admin" />
            </div>
            <div className={styles.add_import}>
              <p>중요도</p>
              <input type="text" name="nb_important" />
            </div>
          </div>

          <div className={styles.add_inner_02}>
            <div className={styles.add_title}>
              <p>제목</p>
              <input type="text" name="nb_title" />
            </div>
            <div className={styles.add_content}>
              <p>내용</p>
              <textarea name="nb_content"></textarea>
            </div>
          </div>

          <div className={styles.add_button_wrap}>
            <div className={styles.add_button}>
              <button onClick={handleAdd}>돌아가기</button>
              <input type="submit" value={"확인"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NoticeAdd;
