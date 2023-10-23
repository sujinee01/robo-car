import React from "react";
import styles from "../style/Notice_detail.module.css";

function NoticeDetail() {
  return (
    <div>
      <section className={styles.notice_page}>
        <body>
          <div className={styles.wrap}>
            <h1 className={styles.title}>공지사항</h1>
            <nav className={styles.nav}>
              <table className={styles.board_table}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.th_num}>
                      04 &nbsp; &nbsp; &nbsp;공지
                    </th>
                    <th scope="col" className={`${styles["th-title"]}`}>
                      공지사항입니다 이용해주셔서 감사합니다
                    </th>
                    <th scope="col" className={styles.th_date}>
                      관리자
                    </th>
                  </tr>
                </thead>
              </table>
            </nav>
            <section className={styles.container}>
              <div className={styles.content}>
                차량관제 서비스를 시연해 보실 수 있는 관리자화면 주소입니다.{" "}
                <br />
                <br />
                https://robocar.co.kr
                <br />
                <br />
                설명이 필요하신 경우 당사 고객센터로 연락을 주신 후 업체명 /
                담당자명 / 연락처 / 도입사유등 말씀해 주시면 시연 및 안내가
                가능합니다.
              </div>
              <button className={`${styles.btn} ${styles.btnlist}`}>
                <a href="/noticeMain">목록</a>
              </button>
            </section>
          </div>
        </body>
      </section>
    </div>
  );
}

export default NoticeDetail;
