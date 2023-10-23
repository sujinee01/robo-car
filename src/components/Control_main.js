/*
 파일명 = 언더바 사용
 컴포넌트(모듈)명 = 낙타형 선언
*/
import React, { useEffect, useState } from "react";
import styles from "../style/Control_main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faChargingStation } from "@fortawesome/free-solid-svg-icons";
const { kakao } = window;

/** 사이드 메뉴 선택시 해당하는 내용을 보여주는 부분 */
const SideMenuInfo = ({ isOpen }) => {
  const slide = isOpen ? styles.side_menu_car_info : styles.side_menu_hide;
  return (
    <div>
      <div className={slide}>test</div>
    </div>
  );
};

/** 관제화면 좌측 탭 메뉴 생성 */
const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div>
      <div className={styles.side_menu}>
        <ul>
          <li>
            <a href="#" onClick={toggle}>
              <FontAwesomeIcon icon={faCar} size="2x" />
              <div>차량목록</div>
            </a>
          </li>
          <li>
            <a href="#" onClick={toggle}>
              <FontAwesomeIcon icon={faChargingStation} size="2x" />
              <div>충전소</div>
            </a>
          </li>
        </ul>
      </div>
      <SideMenuInfo isOpen={isOpen} />
    </div>
  );
};

/** 관제화면 지도 생성 및 사이드바/차량 정보 확인 관련 기능 */
const ControlMain = () => {
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
