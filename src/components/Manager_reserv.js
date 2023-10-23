import React, { useState } from "react";
import styles from "../style/Manager_reserv.module.css";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Manager_reserv() {
  const [openIndex, setOpenIndex] = useState(null);
  const CATEGORY_LIST = [
    { label: "일반", value: null },
    { label: "특근", value: "0001" },
  ];
  const PRODUCT_DATA = [...CATEGORY_LIST];
  const [selectedOption, setSelectedOption] = useState(CATEGORY_LIST[0]);
  const reserve = [
    // 리뷰 데이터...
    {
      num: "05.",
      reservnum: "23523-232424",
      reservid: "gildong12",
      reservtime: "2023-10-10",
      depart: "서울고속버스터미널",
      arrive: "국립중앙도서관",
      car: "1톤 트럭",
      option: CATEGORY_LIST[0],
      sendtel: "010-2453-0000",
      receitel: "010-8565-0000",
      thing: "중고서적 200권",
      memo: "중고서적 200권",
      cost: "55000원",
    },
    // 다른 리뷰 데이터 추가
    {
      num: "05.",
      reservnum: "23523-232424",
      reservid: "gildong12",
      reservtime: "2023-10-10",
      depart: "서울고속버스터미널",
      arrive: "국립중앙도서관",
      car: "1톤 트럭",
      option: CATEGORY_LIST[0],
      sendtel: "010-2453-0000",
      receitel: "010-8565-0000",
      thing: "중고서적 200권",
      memo: "중고서적 200권",
      cost: "55000원",
    },
    {
      num: "05.",
      reservnum: "23523-232424",
      reservid: "gildong12",
      reservtime: "2023-10-10",
      depart: "서울고속버스터미널",
      arrive: "국립중앙도서관",
      car: "1톤 트럭",
      option: CATEGORY_LIST[0],
      sendtel: "010-2453-0000",
      receitel: "010-8565-0000",
      thing: "중고서적 200권",
      memo: "중고서적 200권",
      cost: "55000원",
    },
    {
      num: "05.",
      reservnum: "23523-232424",
      reservid: "gildong12",
      reservtime: "2023-10-10",
      depart: "서울고속버스터미널",
      arrive: "국립중앙도서관",
      car: "1톤 트럭",
      option: CATEGORY_LIST[0],
      sendtel: "010-2453-0000",
      receitel: "010-8565-0000",
      thing: "중고서적 200권",
      memo: "중고서적 200권",
      cost: "55000원",
    },
    {
      num: "05.",
      reservnum: "23523-232424",
      reservid: "gildong12",
      reservtime: "2023-10-10",
      depart: "서울고속버스터미널",
      arrive: "국립중앙도서관",
      car: "1톤 트럭",
      option: CATEGORY_LIST[0],
      sendtel: "010-2453-0000",
      receitel: "010-8565-0000",
      thing: "중고서적 200권",
      memo: "중고서적 200권",
      cost: "55000원",
    },
    {
      num: "05.",
      reservnum: "23523-232424",
      reservid: "gildong12",
      reservtime: "2023-10-10",
      depart: "서울고속버스터미널",
      arrive: "국립중앙도서관",
      car: "1톤 트럭",
      option: CATEGORY_LIST[0],
      sendtel: "010-2453-0000",
      receitel: "010-8565-0000",
      thing: "중고서적 200권",
      memo: "중고서적 200권",
      cost: "55000원",
    },
  ];

  const [arrowRotated, setArrowRotated] = useState(() =>
    Array(reserve.length).fill(false)
  );

  const handleItemClick = (index) => {
    const newArrowRotated = [...arrowRotated];
    newArrowRotated[index] = !newArrowRotated[index];
    setArrowRotated(newArrowRotated);

    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className={styles.reservcontainer}>
      <div className={styles.listcontainer}>
        {/* 제목 테이블 */}
        <div className={styles.titlecontainer}>
          <p className={styles.tablenum}>NO.</p>
          <p className={styles.thnum}>예약번호</p>
          <p className={styles.thid}>예약자 아이디</p>
          <p className={styles.thdate}>예약일시</p>
        </div>

        {/* 예약 아이템들 */}
        <div className={styles.accordionContainer}>
          {reserve.map((reserve, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => handleItemClick(index)}
              >
                <span className={styles.num}>{reserve.num}</span>
                <span className={styles.reservnum}>{reserve.reservnum}</span>
                <div className={styles.person}>
                  <span className={styles.reservid}>{reserve.reservid}</span>
                </div>
                <span className={styles.reservtime}>{reserve.reservtime}</span>
                <div className={styles.triangleContainer}>
                  <p className={styles.triangle}>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className={
                        arrowRotated[index] ? styles.rotate : styles.default
                      }
                    />
                  </p>
                </div>
              </div>

              <div className={styles.openlist}>
                {openIndex === index && (
                  <div className={styles.conaiainercontent}>
                    <div className={styles.leftlist}>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>
                          출발지 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </p>
                        <span className={styles.item}>{reserve.depart}</span>
                      </div>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>
                          도착지 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </p>
                        <span className={styles.item}>{reserve.arrive}</span>
                      </div>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>
                          배송 차량 &nbsp; &nbsp; &nbsp;
                        </p>
                        <span className={styles.item}>{reserve.car}</span>
                      </div>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>
                          배송 옵션 &nbsp; &nbsp; &nbsp;
                        </p>
                        <Select
                          className={styles.item}
                          options={CATEGORY_LIST}
                          value={selectedOption}
                          onChange={handleSelectChange}
                        />
                      </div>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>발송인 연락처 </p>
                        <span className={styles.item}>{reserve.sendtel}</span>
                      </div>
                      <div className={styles.reservlist}>
                        <p className={styles.contname}>수령인 연락처 </p>
                        <span className={styles.item}>{reserve.receitel}</span>
                      </div>
                    </div>
                    <div className={styles.rightlist}>
                      <div className={styles.rightitem}>
                        <p className={styles.contname}>배송물품설명</p>
                        <span className={styles.item}>{reserve.thing}</span>
                      </div>
                      <div className={styles.rightitem}>
                        <p className={styles.contname}>메모</p>
                        <span className={styles.item}>{reserve.memo}</span>
                      </div>
                      <div className={styles.rightitem}>
                        <p className={styles.contname}>결재금액</p>
                        <span className={styles.item}>{reserve.cost}</span>
                      </div>
                    </div>
                    <button className={styles.btncomp}>수정 완료</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Manager_reserv;
