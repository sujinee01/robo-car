import styles from "../style/Manager_page.module.css";
import ManagerMain from "./Manager_main";
import ManagerMember from "./Manager_member";
const ManagerPage = () => {
  return (
    <>
      <div className={styles.tab_wrap}>
        <h2>관리자 페이지</h2>
        <input name="tab" id="tab1" type="radio" defaultChecked />
        <input name="tab" id="tab2" type="radio" />
        <input name="tab" id="tab3" type="radio" />
        <input name="tab" id="tab4" type="radio" />
        <input name="tab" id="tab5" type="radio" />
        <input name="tab" id="tab6" type="radio" />
        <header>
          <label htmlFor="tab1">Home</label>
          <label htmlFor="tab2">회원관리</label>
          <label htmlFor="tab3">예약관리</label>
          <label htmlFor="tab4">운송차량관리</label>
          <label htmlFor="tab5">공지사항관리</label>
          <label htmlFor="tab6">이용자 평가 내역</label>
          <hr />
        </header>
        <div className={`${styles.tab1_content} ${styles.tab_content}`}>
          <ManagerMain />
        </div>
        <div className={`${styles.tab2_content} ${styles.tab_content}`}>
          <ManagerMember />
        </div>
        <div className={`${styles.tab3_content} ${styles.tab_content}`}>
          예약관리 링크
        </div>
        <div className={`${styles.tab4_content} ${styles.tab_content}`}>
          운송차량관리 링크
        </div>
        <div className={`${styles.tab5_content} ${styles.tab_content}`}>
          공지사항관리 링크
        </div>
        <div className={`${styles.tab6_content} ${styles.tab_content}`}>
          이용자 평가내역 링크
        </div>
      </div>
    </>
  );
};

export default ManagerPage;
