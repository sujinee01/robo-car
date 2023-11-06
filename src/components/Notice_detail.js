import React from "react";
import styles from "../style/Notice_detail.module.css";

function NoticeDetail({ handleDetail, selInfo }) {
  console.log(selInfo);
  return (
    <div>
      <section className={styles.notice_page}>
        <body>
          <div className={styles.wrap}>
            {/* <h1 className={styles.title}>공지사항</h1> */}
            <nav className={styles.nav}>
              <table className={styles.board_table}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.th_num}>
                      {selInfo.idx}&nbsp;
                    </th>
                    <th scope="col" className={`${styles["th-title"]}`}>
                    <span style={{ color: "red" }}>{selInfo.important}</span>
                      [{selInfo.title}]
                    </th>
                    <th scope="col" className={styles.th_date}>
                      {selInfo.auth}
                    </th>
                  </tr>
                </thead>
              </table>
            </nav>
            <section className={styles.container}>
              <div className={styles.content}>{selInfo.content}</div>
              <button
                className={`${styles.btn} ${styles.btnlist}`}
                onClick={handleDetail}
              >
                목록
              </button>
            </section>
          </div>
        </body>
      </section>
    </div>
  );
}

export default NoticeDetail;
