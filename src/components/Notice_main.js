import React from "react";
import styles from "../style/Notice_main.module.css"; // 파일명 및 변수명 수정

function NoticeMain() {
  return (
    <section className={styles.notice}>
      <div className={styles.pageTitle}>
        <div className={styles.container}>
          <h3>공지사항</h3>
        </div>
      </div>
      <div className={styles.boardSearch}>
        <div className={styles.container}>
          <div className={styles.searchWindow}>
            <form action="">
              <div className={styles.searchWrap}>
                <label htmlFor="search" className={styles.blind}>
                  공지사항 내용 검색
                </label>
                <input
                  id="search"
                  type="search"
                  name=""
                  placeholder="검색어를 입력해주세요."
                />
                <button
                  type="submit"
                  className={`${styles.btn} ${styles.btnSearch}`}
                >
                  검색
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="board-list">
        <div className={styles.container}>
          <table className={styles.boardTable}>
            <thead>
              <tr>
                <th scope="col" className={styles.thNum}>
                  번호
                </th>
                <th scope="col" className={styles.thTitle}>
                  제목
                </th>
                <th scope="col" className={styles.thDate}>
                  작성자
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>5</td>
                <th>
                  <a href="#!">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
                  <p>테스트</p>
                </th>
                <td>관리자</td>
              </tr>

              <tr>
                <td>4</td>
                <th>
                  <a>공지사항입니다. 이용해주셔서 감사합니다</a>
                </th>
                <td>관리자</td>
              </tr>

              <tr>
                <td>3</td>
                <th>
                  <a>공지사항입니다. 이용해주셔서 감사합니다</a>
                </th>
                <td>관리자</td>
              </tr>

              <tr>
                <td>2</td>
                <th>
                  <a>공지사항입니다. 이용해주셔서 감사합니다</a>
                </th>
                <td>관리자</td>
              </tr>

              <tr>
                <td>1</td>
                <th>
                  <a>공지사항입니다. 이용해주셔서 감사합니다</a>
                </th>
                <td>관리자</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      {/* <div className={styles.pageList}>
        <div className={styles.numBtn}>
          <button className={`${styles.btn} ${styles.btnPage}`}>1</button>
        </div>
        <div className={styles.numBtn}>
          <button className={`${styles.btn} ${styles.btnPage}`}>2</button>
        </div>
      </div> */}
    </section>
  );
}

export default NoticeMain;
