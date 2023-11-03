/*
 파일명 = 언더바 사용
 컴포넌트(모듈)명 = 낙타형 선언
*/
/*
아래에 2개 install 해줘야 에러가 나지 않습니다
npm install http-proxy-middleware // npm 사용 일 경우
npm install axios
*/
import React, { useEffect, useState } from "react";
import styles from "../style/Control_main.module.css";
import BatteryStatus from "./Batterystatus";
import Currenttime from "./Currenttime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faChargingStation,
  faMapLocationDot,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const { kakao } = window;

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
        <div className={styles.info_wrap}>
          <div className={styles.branch}>
            <p className={styles.slidetext}>차량번호</p>
            <button className={styles.slideinfo}>12가 2893</button>
          </div>
          <div className={styles.branch}>
            <p className={styles.slidetext}>차량모델</p>
            <button className={styles.slideinfo}>차량모델</button>
          </div>
          <div className={styles.branch}>
            <p className={styles.slidetext}>호차</p>
            <button className={styles.slideinfo}>호차표시</button>
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

            <div className={styles.control2}>
              <p className={styles.slidetext}>라이트</p>
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
          </div>
          <div className={styles.control3}>
            <p className={styles.slidetext}>배터리</p>
            <BatteryStatus />
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
            <div className={styles.timelist}>
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
          {/* <div className={styles.stationlist}>
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
          </div> */}
        </div>
        <div className={styles.stainfobtn}>
          <button className={styles.stationlook}>
            <FontAwesomeIcon
              icon={faMapLocationDot}
              size="2x"
              className={styles.faMapLocationDot}
            />
            <span className={`${styles.tooltiptext} ${styles.tooltip_right}`}>
              충전소 위치
              <br />
              지도표시
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState("관제화면");
  const [selectedTab, setSelectedTab] = useState(); // 초기값을 차량목록으로 설정

  const toggle = (tab) => {
    setIsOpen(!isOpen);
    setSelectedTab(tab); // 선택된 탭을 상태에 설정
  };

  const toggleHandler = (tabName) => {
    setIsOpen(tabName);
    // setSelectedTab(selectedTab);
    // setIsOn(tabName);
    // setSelectedTab(tabName);
    // isOpen ? selectedTab(false) : selectedTab(true)
  };
  return (
    <div>
      <div className={styles.side_menu}>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => {
                toggle("관제화면");
                toggleHandler("관제화면");
              }}
              className={` ${styles.btn} ${
                isOpen === "관제화면" ? styles.active : styles.activecancel
              }`}
            >
              <FontAwesomeIcon
                icon={faEye}
                size="2x"
                className={styles.faCar}
              />
              <div>관제화면</div>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                toggle("차량목록");
                toggleHandler("차량목록");
              }}
              className={` ${styles.btn} ${
                isOpen === "차량목록" ? styles.active : styles.activecancel
              }`}
            >
              <FontAwesomeIcon
                icon={faCar}
                size="2x"
                className={styles.faCar}
              />
              <div>차량목록</div>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                toggle("충전소");
                toggleHandler("충전소");
              }}
              className={` ${styles.btn} ${
                isOpen === "충전소" ? styles.active : styles.activecancel
              }`}
            >
              <FontAwesomeIcon
                icon={faChargingStation}
                size="2x"
                className={styles.faChargingStation}
              />
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
  // src/App.js
  useEffect(() => {
    const fetchdata = async () => {
      // const  data  = await axios.get("/service/EvInfoServiceV2", {
      //   params: {
      //     serviceKey:
      //       "Qv4x3BQfuVNWucObH5c5ozxzFaZgcDGsM89ELePqaBGVVt6NvIZpEw1MEL9cofLNgckCDIP4fk1%2FDaUWsTEcxg%3D%3D",
      //     numOfRows: 1,
      //     pageNo: 10,
      //     addr: "서울특별시",
      //   },
      // });
      console.log("======================");
      const data2 = await axios
        .get("/service/EvInfoServiceV2/getEvSearchList", {
          params: {
            serviceKey:
              "JKivvxMVQ+mDxqbBrdCvF8UQtFJUsQBKZlrCiULVIaqyBYb3MtzsJxLx8/5lSmcCjkQEWa/xC12eu0xHqerA1Q==",
            numOfRows: 10,
            pageNo: 1,
            addr: "서울특별시",
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          console.log("성공");
        });
      // console.log(data);
    };
    fetchdata();
  }, []);

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 일반 지도/스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
    var mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
    var positions = [
      {
        content: "<div>이화여고 앞 공영주차장</div>",
        latlng: new kakao.maps.LatLng(37.564136, 126.968772),
      },
      {
        content: "<div>생태연못</div>",
        latlng: new kakao.maps.LatLng(33.450936, 126.569477),
      },
      {
        content: "<div>텃밭</div>",
        latlng: new kakao.maps.LatLng(33.450879, 126.56994),
      },
      {
        content: "<div>근린공원</div>",
        latlng: new kakao.maps.LatLng(33.451393, 126.570738),
      },
    ];

    for (var i = 0; i < positions.length; i++) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
      });

      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content, // 인포윈도우에 표시할 내용
      });

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  }, []);

  return (
    <div>
      <div className={styles.map_wrapper}>
        <SideMenu />
        <div id="map" className={styles.kakao_map}>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default ControlMain;
