import React, { useEffect, useState } from "react";
import styles from "../style/Manager_notice_modify.module.css";

const NoticeModify = ({ handleModify, notice }) => {
  const [content, setContent] = useState(notice.nb_content);
  const [title, setTitle] = useState(notice.nb_title);
  const [important, setImportant] = useState(notice.nb_important);

  const modifyReq = async (e) => {
    e.preventDefault();
    handleModify();

    const formData = new FormData(e.target);
    const modify = true;
    const targetIdx = notice.nb_idx;
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
          modify,
          targetIdx,
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
    <div className={styles.notice_modify_wrap}>
      <p>공지사항 수정</p>
      <hr />
      <div className={styles.modify_wrap}>
        <form method="post" action="/NotiAdd" onSubmit={modifyReq}>
          <div className={styles.modify_inner}>
            <div className={styles.modify_auth}>
              <p>작성자</p>
              <input
                type="text"
                name="nb_auth"
                readOnly={true}
                value={notice.nb_auth}
              />
            </div>
            <div className={styles.modify_import}>
              <p>중요표시</p>
              <input
                type="text"
                name="nb_important"
                value={important}
                onChange={(e) => setImportant(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.modify_inner_02}>
            <div className={styles.modify_title}>
              <p>제목</p>
              <input
                type="text"
                name="nb_title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={styles.modify_content}>
              <p>내용</p>
              <textarea
                name="nb_content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className={styles.modify_button_wrap}>
            <div className={styles.modify_button}>
              <button onClick={handleModify}>돌아가기</button>
              <input type="submit" value={"수정"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NoticeModify;
