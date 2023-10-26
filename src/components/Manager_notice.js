import { useNavigate } from 'react-router-dom';
import styles from "../style/Manager_notice.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function ManagerNotice({ noticeData }) {
  let notices = [
    {
      id: 1,
      nb_idx: "",
      nb_important: "",
      nb_title: "",
      nb_auth: "",
    },
  ];
  if (noticeData) {
    notices = noticeData;
  }

  /*공지사항 등록버튼*/
  const navigate = useNavigate();
  const addNotice = () => {
    navigate('/NoticeAdd');
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
          <button onClick={addNotice}>공지사항 등록</button>
        </div>
      </div>
  );
}
export default ManagerNotice;
