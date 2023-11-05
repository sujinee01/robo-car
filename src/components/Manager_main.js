import React, { useState, useEffect } from "react";
import styles from "../style/Manager_main.module.css";
import right from "../assets/right.png";

// import ManagerHeader from "./Manager_header";
const ManagerMain = () => {
  const [receiveData, setReceiveData] = useState([]);
  const [resvStatus, setResvStatus] = useState({
    예약완료: 0,
    배차완료: 0,
    픽업완료: 0,
    배송완료: 0,
  });
  const [carTot, setCarTot] = useState(0);

  useEffect(() => {
    const infoReq = async () => {
      try {
        const response = await fetch("/ManageHome", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          const getData = [data["rows"], data["rows2"]];

          if (data.success) {
            setReceiveData(getData);

            // 데이터를 받은 후 상태를 업데이트하고 난 뒤에 계산 로직을 수행합니다.
            const updatedResvStatus = {
              예약완료: 0,
              배차완료: 0,
              픽업완료: 0,
              배송완료: 0,
            };

            getData[0].forEach((data) => {
              if (data["resv_state"] === "예약완료") {
                updatedResvStatus["예약완료"] += 1;
              } else if (data["resv_state"] === "배차완료") {
                updatedResvStatus["배차완료"] += 1;
              } else if (data["resv_state"] === "픽업완료") {
                updatedResvStatus["픽업완료"] += 1;
              } else {
                updatedResvStatus["배송완료"] += 1;
              }
            });

            setResvStatus(updatedResvStatus);
            setCarTot(data["rows2"][0].row_count);
          }
        }
      } catch (error) {
        console.error("오류:", error);
      }
    };

    infoReq(); // 컴포넌트가 처음 렌더링될 때 데이터를 가져오도록 호출
  }, []);
  // console.log(receiveData[1][0].row_count);
  return (
    <>
      {/* <ManagerHeader /> */}
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
                    <span>{resvStatus["예약완료"]}</span>
                  </div>
                </div>
                <div className={styles.data_arrow}>
                  <img src={right} alt="React" />
                </div>
                <div className={styles.data_content_inner}>
                  <div className={styles.data_content_step}>
                    <p>배차완료</p>
                    <span>{resvStatus["배차완료"]}</span>
                  </div>
                </div>
                <div className={styles.data_arrow}>
                  <img src={right} alt="React" />
                </div>
                <div className={styles.data_content_inner}>
                  <div className={styles.data_content_step}>
                    <p>픽업완료</p>
                    <span>{resvStatus["픽업완료"]}</span>
                  </div>
                </div>
                <div className={styles.data_arrow}>
                  <img src={right} alt="React" />
                </div>
                <div className={styles.data_content_inner}>
                  <div className={styles.data_content_step}>
                    <p>배송완료</p>
                    <span>{resvStatus["배송완료"]}</span>
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
                    <span>{carTot}</span>
                  </div>
                </div>
                <div className={styles.data_content_inner_02}>
                  <div className={styles.data_content_step}>
                    <p>운행중</p>
                    <span>{resvStatus["픽업완료"]}</span>
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
