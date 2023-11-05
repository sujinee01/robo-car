import React, { useState, useEffect } from "react";
import styles from "../style/Notice_main.module.css"; // 파일명 및 변수명 수정
import NoticeDetail from "./Notice_detail";

function NoticeMain() {
  const [notices, setNotices] = useState([]);
  const [isDetail, setIsDetail] = useState(false);
  const [selInfo, setSelInfo] = useState([]);

  const noticeReq = async () => {
    try {
      const response = await fetch("/Notice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const receiveData = data["rows"]; // 쿼리 수행으로 받아온 테이블 데이터
        if (data.success) {
          setNotices(receiveData); // 받아온 데이터 useState 변수에 저장
          console.log(receiveData);
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  const handleDetail = () => {
    setIsDetail(!isDetail);
  };

  useEffect(() => {
    noticeReq();
  }, []);

  return (
    <section className={styles.notice}>
      <div className={styles.pageTitle}>
        <div className={styles.container}>
          <h3>공지사항</h3>
        </div>
      </div>
      {isDetail ? (
        <NoticeDetail handleDetail={handleDetail} selInfo={selInfo} />
      ) : (
        <>
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
                  {notices.map((notice) => (
                    <tr>
                      <td>{notice.nb_idx}</td>
                      <th>
                        <a
                          href="#!"
                          onClick={() => {
                            setSelInfo({
                              auth: notice.nb_auth,
                              title: notice.nb_title,
                              content: notice.nb_content,
                              important: notice.nb_important,
                              idx: notice.nb_idx,
                            });
                            handleDetail();
                          }}
                        >
                          {notice.nb_title}
                        </a>
                        <p>{notice.nb_important}</p>
                      </th>
                      <td>{notice.nb_auth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
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
