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
  const [positions, setPositions] = useState([]);
  const [mergedPositions, setMergedPositions] = useState([]);

  // var mapContainer = document.getElementById("map"), // 지도를 표시할 div
  //   mapOption = {
  //     center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
  //     level: 4, // 지도의 확대 레벨
  //   };

  // // 지도를 표시할 div와 지도 옵션으로 지도를 생성
  // var map = new kakao.maps.Map(mapContainer, mapOption);

  // // 일반 지도/스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성
  // var mapTypeControl = new kakao.maps.MapTypeControl();
  // map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

  // // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
  // var zoomControl = new kakao.maps.ZoomControl();
  // map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  // // 주소-좌표 변환 객체를 생성합니다
  // var geocoder = new kakao.maps.services.Geocoder();

  // // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
  // searchAddrFromCoords(map.getCenter(), displayCenterInfo);

  // // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
  // kakao.maps.event.addListener(map, "idle", function () {
  //   searchAddrFromCoords(map.getCenter(), displayCenterInfo);
  // });

  // function searchAddrFromCoords(coords, callback) {
  //   // 좌표로 행정동 주소 정보를 요청합니다
  //   geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  // }

  // // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
  // function displayCenterInfo(result, status) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     var infoDiv = document.getElementById("centerAddr");

  //     for (var i = 0; i < result.length; i++) {
  //       // 행정동의 region_type 값은 'H' 이므로
  //       if (result[i].region_type === "H") {
  //         infoDiv.innerHTML = result[i].address_name;
  //         break;
  //       }
  //     }
  //   }
  // }

  const catchdata = async () => {
    try {
      const response = await axios.get(
        "/service/EvInfoServiceV2/getEvSearchList",
        {
          params: {
            serviceKey:
              "JKivvxMVQ+mDxqbBrdCvF8UQtFJUsQBKZlrCiULVIaqyBYb3MtzsJxLx8/5lSmcCjkQEWa/xC12eu0xHqerA1Q==",
            numOfRows: 30, //표시할 데이터 개수
            pageNo: 1, //몇 페이지에서 가져올지
            addr: "서울특별시 종로구", //주소를 구체화하면 차량관제 화면에 보이는 마커가 더 많아질 것 같습니다.
          },
          withCredentials: true,
        }
      ); // API 요청 예시 (실제 엔드포인트에 맞게 수정 필요)
      const addrs = response.data.response.body.items.item; // API로부터 받아온 주소 데이터 배열
      // console.log("addrs : ", addrs);

      // API로부터 받아온 주소 데이터를 기반으로 positions 배열 업데이트
      const updatedPositions = addrs.map((addr) => ({
        // console.log("addr : ", addr);
        content: `<div>${addr.addr}</div>`, // 주소를 인포윈도우에 표시
        latlng: new kakao.maps.LatLng(addr.lat, addr.longi), // 주소의 위도와 경도 정보
      }));

      setMergedPositions(mergedPositions.concat(updatedPositions));

      // 기존 positions 배열에 API로부터 받아온 주소 정보를 추가
      setPositions([...positions, ...updatedPositions]);
      console.log(updatedPositions);

      console.log("API에서 주소 데이터를 성공적으로 받아왔습니다.");
    } catch (error) {
      console.log("API에서 주소 데이터를 불러오는 중 에러가 발생했습니다.");
      console.log(error);
    }
  };

  useEffect(() => {
    catchdata();
  }, []);

  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    var imageSrc = "./assets/chargingMarker.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(47, 49), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    for (var i = 0; i < positions.length; i++) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커의 위치
        image: markerImage,
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
  }, [positions]);

  return (
    <div>
      <div className={styles.map_wrapper}>
        <SideMenu />
        <div id="map" className={styles.kakao_map}>
          <button></button>
        </div>
        <span id="centerAddr" className={styles.addrInfo}></span>
      </div>
    </div>
  );
};

export default ControlMain;
