/*
 파일명 = 언더바 사용
 컴포넌트(모듈)명 = 낙타형 선언
*/
import React, { useEffect, useState } from "react";
import styles from "../style/Control_main.module.css";
import BatteryStatus from "./Batterystatus";
import Currenttime from "./Currenttime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faChargingStation } from "@fortawesome/free-solid-svg-icons";
import KakaoMapScript from "./KakaoMapScript";
// import instance from "./instance";

// const { createProxyMiddleware } = require("http-proxy-middleware");
import axios from "axios";
const { kakao } = window;
const instance = axios.create({
  baseURL: "http://openapi.kepco.co.kr",
});

export { instance };

/** 사이드 메뉴 선택시 해당하는 내용을 보여주는 부분 */
const CarListTab = ({ isOpen }) => {
  const [isEngineOn, setIsEngineOn] = useState(false);
  const [areLightsOn, setAreLightsOn] = useState(false);

  const toggleEngine = () => {
    setIsEngineOn(!isEngineOn);
  };

  const toggleLights = () => {
    setAreLightsOn(!areLightsOn);
  };

  const slide = isOpen ? styles.side_menu_car_info : styles.side_menu_hide;
  return (
    <div className={styles.slidebar}>
      <div className={slide}>
        <div className={styles.infoslide}>운행차량</div>
        <div>
          <div className={styles.branch}>
            <p className={styles.slidetext}>차량번호&nbsp;</p>
            <button className={styles.slideinfo}>12가 2893</button>
          </div>
          <div className={styles.branch}>
            <p className={styles.slidetext}>소유주명&nbsp;</p>
            <button className={styles.slideinfo}>소유주명</button>
          </div>
          <div className={styles.branch}>
            <p className={styles.slidetext}>제품명&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <button className={styles.slideinfo}>제품명</button>
          </div>
          <div className={styles.branch}>
            <p className={styles.slidetext}>제조사&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <button className={styles.slideinfo}>제조사</button>
          </div>
          <div className={styles.branch}>
            <p className={styles.slidetext}>
              용도&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
            <button className={styles.slideinfo}>용도</button>
          </div>
        </div>
        <div className={styles.contzip}>
          <div>
            <div className={styles.control1}>
              <p className={styles.slidetext}>시동</p>
              <button
                className={`${styles.carcontrol} ${
                  isEngineOn ? styles.greenButton1 : styles.redButton1
                }`}
                onClick={toggleEngine}
              >
                {isEngineOn ? (
                  <div className={styles.btntext}>ON</div>
                ) : (
                  <div className={styles.btntext}>OFF</div>
                )}
              </button>
            </div>
          </div>
          <div className={styles.control2}>
            <p className={styles.slidetext}>라이트</p>
            <div>
              <button
                className={`${styles.carcontrol} ${
                  areLightsOn ? styles.greenButton2 : styles.redButton2
                }`}
                onClick={toggleLights}
              >
                {areLightsOn ? (
                  <div className={styles.btntext}>ON</div>
                ) : (
                  <div className={styles.btntext}>OFF</div>
                )}
              </button>
            </div>

            <div className={styles.control3}>
              <p className={styles.slidetext}>배터리</p>
              <BatteryStatus />
            </div>
          </div>
        </div>
        <div className={styles.move}>
          <div className={styles.locationlist}>
            <div className={styles.locationinfo}>
              {" "}
              <p className={styles.place}>출발지</p>
              <input
                className={styles.location}
                type="text"
                placeholder="텍스트박스 1"
              />
            </div>
            <div className={styles.locationinfo}>
              <p className={styles.place}>도착지</p>
              <input
                className={styles.location}
                type="text"
                placeholder="텍스트박스 2"
              />
            </div>
          </div>

          <br />
          <div className={styles.time}>
            <div className={styles.timelist}>
              <p className={styles.timetit1}>도착예정시간</p>
              <p className={styles.endtimenum}>14:22</p>
            </div>
            <div className={styles.timlist}>
              <p className={styles.timetit2}>현재시간</p>
              <p className={styles.presenttime}>
                <Currenttime />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChargingStationTab = ({ isOpen }) => {
  const slide = isOpen ? styles.side_menu_car_info : styles.side_menu_hide;
  return (
    <div>
      <div className={slide}>
        <div className={styles.infoslide}>충전소 목록</div>
        <div className={styles.slidestation}>
          <select className={styles.station}>
            <option>옵션 1</option>
            <option>옵션 2</option>
            {/* 필요한 만큼 옵션을 추가하세요 */}
          </select>
          <div className={styles.stationlist}>
            <input
              className={styles.textbox}
              type="text"
              placeholder="텍스트박스 1"
            />
            <input
              className={styles.textbox}
              type="text"
              placeholder="텍스트박스 2"
            />
            <input
              className={styles.textbox}
              type="text"
              placeholder="텍스트박스 3"
            />
          </div>
        </div>
        <div className={styles.stainfobtn}>
          <button className={styles.stationlook}></button>
          <p className={styles.btntext}>충전소 지도표시</p>
        </div>
      </div>
    </div>
  );
};

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(); // 초기값을 차량목록으로 설정

  const toggle = (tab) => {
    setIsOpen(!isOpen);
    setSelectedTab(tab); // 선택된 탭을 상태에 설정
  };

  return (
    <div>
      <div className={styles.side_menu}>
        <ul>
          <li>
            <a href="#" onClick={() => toggle("차량목록")}>
              <FontAwesomeIcon icon={faCar} size="2x" />
              <div>차량목록</div>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => toggle("충전소")}>
              <FontAwesomeIcon icon={faChargingStation} size="2x" />
              <div>충전소</div>
            </a>
          </li>
        </ul>
      </div>
      {selectedTab === "차량목록" && <CarListTab isOpen={isOpen} />}{" "}
      {/* 차량목록 탭을 선택한 경우 CarListTab 컴포넌트를 렌더링 */}
      {selectedTab === "충전소" && <ChargingStationTab isOpen={isOpen} />}{" "}
      {/* 충전소 탭을 선택한 경우 ChargingStationTab 컴포넌트를 렌더링 */}
    </div>
  );
};

/** 관제화면 지도 생성 및 사이드바/차량 정보 확인 관련 기능 */
const ControlMain = () => {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  const [data, setData] = useState(null); // 데이터 상태 추가

  // src/App.js
  useEffect(() => {
    const fetchdata = async () => {
      console.log("======================");
      const data2 = await axios
        .get(
          // http://openapi.kepco.co.kr/service/EvInfoServiceV2/getEvSearchList?serviceKey=JKivvxMVQ%2BmDxqbBrdCvF8UQtFJUsQBKZlrCiULVIaqyBYb3MtzsJxLx8%2F5lSmcCjkQEWa%2FxC12eu0xHqerA1Q%3D%3D&numOfRows=10&addr=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C
          "/service/EvInfoServiceV2/getEvSearchList",
          {
            params: {
              serviceKey:
                "JKivvxMVQ+mDxqbBrdCvF8UQtFJUsQBKZlrCiULVIaqyBYb3MtzsJxLx8/5lSmcCjkQEWa/xC12eu0xHqerA1Q==",
              numOfRows: 10,
              pageNo: 1,
              addr: "서울특별시",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          console.log("성공");
        })
        .catch((err) => {
          console.log("실패¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡");
          console.log(err);
        });
      // console.log(data);
    };
    console.log("??????????????");
    fetchdata();
  }, []);

  return (
    <div>
      <div className={styles.map_wrapper}>
        <SideMenu />
        {/* <div id="map" className={styles.kakao_map}>
          <button></button>
        </div> */}
        <div
          id="myMap"
          style={{
            width: "100vw",
            height: "85vh",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ControlMain;
