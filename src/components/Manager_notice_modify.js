import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "../style/Manager_notice_modify.module.css";
// import axios from 'axios';

const NoticeModify = () => {
  const navigate = useNavigate();
  // const { idx } = useParams();
  const [notice, setNotice] = useState({
    idx: 0,
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

  // const getNotice = async () => {
  //   const resp = await (await axios.get(`//localhost:4000/ManageNotice/${idx}`)).data;
  //   setNotice(resp.data);
  // };

  // const modifyNotice = async () => {
  //   await axios.patch(`//localhost:4000/ManageNotice`, notice).then((res) => {
  //     alert('수정되었습니다.');
  //     navigate('/ManageNotice/' + idx);
  //   });
  // };

  /*공지사항 목록버튼*/
  const backToList = () => {
    navigate('/ManageNotice/' + idx);
  };

  // useEffect(() => {
  //   getNotice();
  // }, []);

  return (
    <div className={styles.notice_modify_wrap}>
      <p>공지사항 수정</p>
      <hr />
      <div className={styles.modify_wrap}>
        <form method="post">
          <div className={styles.modify_inner}>
            <div className={styles.modify_auth}>
              <p>작성자</p>
              <input
                type="text"
                name="nb_auth"
                value={nb_auth}
                readOnly={true}
              />
            </div>
            <div className={styles.modify_import}>
              <p>중요표시</p>
              <input
                type="text"
                name="nb_important"
                value={nb_important}
                onChange={onChange}
              />
            </div>
          </div>

          <div className={styles.modify_inner_02}>
            <div className={styles.modify_title}>
              <p>제목</p>
              <input
                type="text"
                name="nb_title"
                value={nb_title}
                onChange={onChange}
              />
            </div>
            <div className={styles.modify_content}>
              <p>내용</p>
              <textarea
                name="nb_content"
                value={nb_content}
                onChange={onChange}
              ></textarea>
            </div>
          </div>

          <div className={styles.modify_button_wrap}>
            <div className={styles.modify_button}>
              <button onClick={backToList}>돌아가기</button>
              <input type="submit" value={"수정"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NoticeModify;
