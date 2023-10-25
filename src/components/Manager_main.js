import styles from "../style/Manager_main.module.css";
import right from "../assets/right.png";
import ManagerHeader from "./Manager_header";
const ManagerMain = () => {
  return (
    <>
      <ManagerHeader />
      <div className={styles.manager_main_wrap}>
        <div className={styles.main_data_wrap}>
          <div className={styles.main_data_inner}>
            <div className={styles.data_title}>
              <span>예약현황</span>
            </div>
            <div className={styles.data_content_wrap}>
              <div className={styles.data_content}>
                <div className={styles.data_content_inner}>
                  <div className={styles.data_content_step}>
                    <p>예약완료</p>
                    <span></span>
                  </div>
                </div>
                <div className={styles.data_arrow}>
                  <img src={right} alt="React" />
                </div>
                <div className={styles.data_content_inner}>
                  <div className={styles.data_content_step}>
                    <p>배차완료</p>
                    <span></span>
                  </div>
                </div>
                <div className={styles.data_arrow}>
                  <img src={right} alt="React" />
                </div>
                <div className={styles.data_content_inner}>
                  <div className={styles.data_content_step}>
                    <p>픽업완료</p>
                    <span></span>
                  </div>
                </div>
                <div className={styles.data_arrow}>
                  <img src={right} alt="React" />
                </div>
                <div className={styles.data_content_inner}>
                  <div className={styles.data_content_step}>
                    <p>배송완료</p>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.main_data_inner}>
            <div className={styles.data_title}>
              <span>등록차량</span>
            </div>
            <div className={styles.data_content_wrap}>
              <div className={styles.data_content}>
                <div className={styles.data_content_inner_02}>
                  <div className={styles.data_content_step}>
                    <p>등록차량수</p>
                    <span></span>
                  </div>
                </div>
                <div className={styles.data_content_inner_02}>
                  <div className={styles.data_content_step}>
                    <p>운행중</p>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerMain;
