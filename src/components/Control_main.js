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
import styled from "styled-components";
import { toast } from "react-toastify";
const { kakao } = window;

/** 사이드 메뉴 선택시 해당하는 내용을 보여주는 부분 */
const CarListTab = ({ isOpen, carList, map, isAdmin }) => {
  const slide = isOpen ? styles.side_menu_car_info : styles.side_menu_hide;
  const [isEngineOn, setIsEngineOn] = useState(false); // 시동 버튼 상태
  const [areLightsOn, setAreLightsOn] = useState(false); // 라이트 버튼 상태

  const carInfo = carList; // 받아온 차량 정보
  const [selectedCar, setSelectedCar] = useState([]);
  const [carPath, setCarPath] = useState([]);
  const kmap = map;

  const toggleEngine = () => {
    if (isAdmin) {
      setIsEngineOn(!isEngineOn);
      if (isEngineOn === false) {
        toast.success(`차량 시동 ON`, {
          theme: "colored",
        });
      } else {
        toast.error(`차량 시동 OFF`, {
          theme: "colored",
        });
      }
    } else {
      toast.error("제어 권한이 없습니다!", {
        theme: "colored",
      });
    }
  };
  const toggleLights = () => {
    if (isAdmin) {
      setAreLightsOn(!areLightsOn);
      if (areLightsOn === false) {
        toast.success(`라이트 ON`, {
          theme: "colored",
        });
      } else {
        toast.error(`라이트 OFF`, {
          theme: "colored",
        });
      }
    } else {
      toast.error("제어 권한이 없습니다!", {
        theme: "colored",
      });
    }
  };

  /** 선택된 차량의 주행 기록 가져오는 함수 */
  const infoReq = async (id) => {
    const target = id;

    try {
      const response = await fetch("/PathReq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ target }), // 요청하는 데이터
      });

      if (response.ok) {
        const data = await response.json();
        const path = data["rows"];
        if (data.success) {
          setCarPath(path);
        } else {
          setCarPath([]);
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  const selectCar = async (choice) => {
    if (choice === undefined) {
      return;
    } else {
      await infoReq(choice.car_id);
      setSelectedCar(choice);
      console.log(carPath);
      carMarker();
    }
  };

  const carMarker = () => {
    console.log(selectedCar);
    console.log(carPath);
    if (selectedCar && carPath.length > 0) {
      const moveLatLon = new window.kakao.maps.LatLng(
        selectedCar.car_lat,
        selectedCar.car_lng
      );
      kmap.setCenter(moveLatLon);

      const imageSrc = "./assets/car.png";
      const imageSize = new window.kakao.maps.Size(47, 49);
      const imageOption = { offset: new window.kakao.maps.Point(27, 69) };
      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );

      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(
          selectedCar.car_lat,
          selectedCar.car_lng
        ),
        image: markerImage,
      });

      const infowindow = new window.kakao.maps.InfoWindow({
        content: `<div style="background-color: #f7be16; margin-bottom: 2px; padding: 5px; width: 180px; text-align:center; font-weight:bold;">${selectedCar.car_id}_${carPath[0].cp_resv_no}</div>`,
      });

      // 마커에 이벤트 리스너 추가
      window.kakao.maps.event.addListener(marker, "mouseover", function () {
        infowindow.open(map, marker);
      });
      window.kakao.maps.event.addListener(marker, "mouseout", function () {
        infowindow.close();
      });

      marker.setMap(map);

      toast.success(`차량 위치 조회 성공!`, {
        theme: "colored",
      });
    } else {
      toast.warning("차량 위치 수신중 입니다.", {
        theme: "colored",
      });
    }
  };

  return (
    <div className={styles.slidebar}>
      <div className={slide}>
        <div className={styles.infoslide}>운행차량</div>
        <div className={styles.info_wrap}>
          <div className={styles.carOptWrap}>
            <select
              className={styles.carOption}
              onChange={(e) =>
                selectCar(carInfo.find((car) => car.car_id === e.target.value))
              }
            >
              <option value="none">차량을 선택하세요</option>
              {carInfo.map((car) => (
                <option value={car.car_id} key={car.car_id}>
                  {car.car_id}_{car.car_licenseplt}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.branch}>
            <p className={styles.slidetext}>차량번호</p>
            <button className={styles.slideinfo}>
              {selectedCar.car_licenseplt}
            </button>
          </div>
          <div className={styles.branch}>
            <p className={styles.slidetext}>차량모델</p>
            <button className={styles.slideinfo}>
              {selectedCar.car_model}
            </button>
          </div>
          <div className={styles.branch}>
            <p className={styles.slidetext}>호차</p>
            <button className={styles.slideinfo}>{selectedCar.car_id}</button>
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
                value={carPath.length !== 0 ? carPath[0].cp_origin : ""}
                readOnly
              />
            </div>
            <div className={styles.locationinfo}>
              <p className={styles.place}>도착지</p>
              <input
                className={styles.location}
                type="text"
                placeholder="텍스트박스 2"
                value={carPath.length !== 0 ? carPath[0].cp_destination : ""}
                readOnly
              />
            </div>
          </div>

          <br />
          <div className={styles.time}>
            <div className={styles.timelist}>
              <p className={styles.timetit1}>도착예정시간</p>
              <p className={styles.endtimenum}>--:--</p>
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

const ChargingStationTab = ({ isOpen, positions, map }) => {
  const slide = isOpen ? styles.side_menu_car_info : styles.side_menu_hide;
  const [station, setStation] = useState(null);
  const [prevMarker, setPrevMarker] = useState(null);
  const [isMarkersVisible, setIsMarkersVisible] = useState(true);
  const [allMarkers, setAllMarkers] = useState(null);
  let allMarker = [];
  const kmap = map;

  /** 충전소 선택 시 동작 */
  const selectStation = (pick) => {
    const selectedStation = positions.find(
      (position) => position.chargerId === parseInt(pick)
    );
    setStation(selectedStation);

    if (prevMarker) {
      prevMarker.setMap(null); // 이전 마커 삭제
    }

    const moveLatLon = new window.kakao.maps.LatLng(
      selectedStation.latlng.Ma,
      selectedStation.latlng.La
    );
    kmap.setCenter(moveLatLon);

    const imageSrc = "./assets/selectedStn.png";
    const imageSize = new window.kakao.maps.Size(72, 79);
    const imageOption = { offset: new window.kakao.maps.Point(40, 80) };
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    const marker = new window.kakao.maps.Marker({
      map: map,
      position: moveLatLon,
      image: markerImage,
    });

    const infowindow = new window.kakao.maps.InfoWindow({
      content: `<div style="background-color: #f7be16; margin-bottom: 2px; padding: 5px; width:180px; text-align:center; font-weight:bold;">${selectedStation.stationName}</div>`,
    });

    // 마커에 이벤트 리스너 추가
    window.kakao.maps.event.addListener(marker, "mouseover", function () {
      infowindow.open(map, marker);
    });
    window.kakao.maps.event.addListener(marker, "mouseout", function () {
      infowindow.close();
    });

    setPrevMarker(marker); // 현재 마커를 이전 마커로 설정
  };

  /** "충전소 위치 지도표시" 버튼 동작 */
  const viewStations = () => {
    // 마커 보이기
    const imageSrc = "./assets/chargingMarker.png";
    const imageSize = new window.kakao.maps.Size(47, 49);
    const imageOption = { offset: new window.kakao.maps.Point(27, 69) };
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    for (let i = 0; i < positions.length; i++) {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        image: markerImage,
      });
      marker.setMap(map);
      allMarker.push(marker);

      const infowindow = new window.kakao.maps.InfoWindow({
        content: `<div style="background-color: #f7be16; margin-bottom: 2px; padding: 5px; width:180px; text-align:center; font-weight:bold;">${positions[i].stationName}</div>`,
      });

      // 마커에 이벤트 리스너 추가
      window.kakao.maps.event.addListener(marker, "mouseover", function () {
        infowindow.open(map, marker);
      });
      window.kakao.maps.event.addListener(marker, "mouseout", function () {
        infowindow.close();
      });
    }
    setAllMarkers(allMarker);
    // 토글 변수 값 변경
    setIsMarkersVisible(!isMarkersVisible);
  };

  /** "충전소 위치 숨기기" 동작 */
  const hideStations = () => {
    console.log("hide", allMarkers);
    console.log(allMarkers.length);
    if (prevMarker) {
      prevMarker.setMap(null);
    }
    for (let i = 0; i < allMarkers.length; i++) {
      allMarkers[i].setMap(null);
    }
    setIsMarkersVisible(!isMarkersVisible);
  };

  return (
    <div>
      <div className={slide}>
        <div className={styles.infoslide}>충전소 목록</div>

        <div className={styles.slidestation}>
          <select
            className={styles.station}
            onChange={(e) => selectStation(e.target.value)}
          >
            <option>충전소를 선택하세요.</option>
            {positions.map((position, idx) => (
              <option key={idx} value={position.chargerId}>
                {position.stationName}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.stationInfo}>
          <div className={styles.stationInfoWrap}>
            {station === null ? (
              ""
            ) : (
              <>
                <p>주소</p>
                <span>{station.stationAddr}</span>
                <p>충전기 ID</p>
                <span>{station.chargerId}</span>
                <p>충전기 정보</p>
                <span>{station.chargerName}</span>
                <p>충전기 상태</p>
                <span>
                  {station.chargerStat === 0
                    ? "상태확인불가"
                    : 1
                    ? "충전가능"
                    : 2
                    ? "충전중"
                    : 3
                    ? "고장/점검"
                    : 4
                    ? "통신장애"
                    : "충전예약"}
                </span>
                <p>충전 방식</p>
                <span>
                  {station.chargeMethod === 1
                    ? "B타입(5핀)"
                    : 2
                    ? "C타입(5핀)"
                    : 3
                    ? "BC타입(5핀)"
                    : 4
                    ? "BC타입 (7핀)"
                    : 5
                    ? "DC차데모"
                    : "AC3상"}
                </span>
                <p>상태 갱신 시각</p>
                <span>{station.updateTime}</span>
              </>
            )}
          </div>
        </div>
        <div className={styles.stainfobtn}>
          <button
            className={styles.stationlook}
            onClick={isMarkersVisible ? viewStations : hideStations}
          >
            <FontAwesomeIcon
              icon={faMapLocationDot}
              size="2x"
              className={styles.faMapLocationDot}
            />
            <span className={`${styles.tooltiptext} ${styles.tooltip_right}`}>
              {isMarkersVisible ? "충전소 위치 보이기" : "충전소 위치 숨기기"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const SideMenu = ({ positions, map, carList, isAdmin }) => {
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
              href="#!"
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
              href="#!"
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
              href="#!"
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
      {selectedTab === "차량목록" && (
        <CarListTab
          isOpen={isOpen}
          carList={carList}
          map={map}
          isAdmin={isAdmin}
        />
      )}{" "}
      {/* 차량목록 탭을 선택한 경우 CarListTab 컴포넌트를 렌더링 */}
      {selectedTab === "충전소" && (
        <ChargingStationTab isOpen={isOpen} positions={positions} map={map} />
      )}{" "}
      {/* 충전소 탭을 선택한 경우 ChargingStationTab 컴포넌트를 렌더링 */}
    </div>
  );
};

/** 관제화면 지도 생성 및 사이드바/차량 정보 확인 관련 기능 */
const ControlMain = ({ isLogin, isAdmin }) => {
  const [positions, setPositions] = useState([]);
  const [mergedPositions, setMergedPositions] = useState([]);
  const [map, setMap] = useState(null); // 카카오맵 객체

  const catchdata = async () => {
    try {
      const response = await axios.get(
        "/service/EvInfoServiceV2/getEvSearchList",
        {
          params: {
            serviceKey:
              "Qv4x3BQfuVNWucObH5c5ozxzFaZgcDGsM89ELePqaBGVVt6NvIZpEw1MEL9cofLNgckCDIP4fk1/DaUWsTEcxg==",
            numOfRows: 30, //표시할 데이터 개수
            pageNo: 1, //몇 페이지에서 가져올지
            addr: "서울특별시 중구", //주소를 구체화하면 차량관제 화면에 보이는 마커가 더 많아질 것 같습니다.
          },
          withCredentials: true,
        }
      ); // API 요청 예시 (실제 엔드포인트에 맞게 수정 필요)
      const addrs = response.data.response.body.items.item; // API로부터 받아온 주소 데이터 배열
      console.log("addrs : ", addrs);

      setMergedPositions([]);
      setPositions([]);
      // API로부터 받아온 주소 데이터를 기반으로 positions 배열 업데이트
      const updatedPositions = addrs.map((addr) => ({
        // console.log("addr : ", addr);
        content: `<div style={"background-color: #f7be16; margin-bottom: 2px; padding: 5px; width:180px; text-align:center; font-weight:bold;"}>${addr.addr}</div>`, // 주소를 인포윈도우에 표시
        latlng: new kakao.maps.LatLng(addr.lat, addr.longi), // 주소의 위도와 경도 정보
        stationAddr: addr.addr, // 충전소 주소
        stationName: addr.csNm, // 충전소 이름
        chargerName: addr.cpNm, // 충전기 명칭
        chargerType: addr.chargeTp, // 충전기 타입
        chargeMethod: addr.cpTp, // 충전 방식
        chargerStat: addr.cpStat, // 충전기 상태 코드
        chargerId: addr.cpId, // 충전기 ID
        updateTime: addr.statUpdateDatetime, // 충전기 상태 갱신 시각
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

  /** 페이지가 렌더링 될 때 카카오맵 객체와 지도를 생성하는 Hook */
  useEffect(() => {
    // 페이지가 렌더링 될 때 카카오맵 객체를 생성해 화면에 출력해 줌
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 4, // 지도의 확대 레벨
      };

    var kakaomap = new kakao.maps.Map(mapContainer, mapOption);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    kakaomap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    kakaomap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    setMap(kakaomap);
    catchdata();
  }, []);

  const [carList, setCarList] = useState(null);
  const infoReq = async () => {
    const reqTarget = "Car";

    try {
      const response = await fetch("/ManageMember", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reqTarget }), // 요청하는 데이터
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          setCarList(data["rows"]);
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  useEffect(() => {
    infoReq();
  }, []);

  /** 중심 좌표 변화에 따른 주소를 출력 해주는 Hook */
  useEffect(() => {
    if (map) {
      var geocoder = new kakao.maps.services.Geocoder();

      // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
      const posi = map.getCenter();
      searchAddrFromCoords(posi, displayCenterInfo);

      // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(map, "idle", function () {
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);
      });

      function searchAddrFromCoords(coords, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
      }

      // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
      function displayCenterInfo(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          var infoDiv = document.getElementById("centerAddr");

          for (var i = 0; i < result.length; i++) {
            // 행정동의 region_type 값은 'H' 이므로
            if (result[i].region_type === "H") {
              infoDiv.innerHTML = result[i].address_name;
              break;
            }
          }
        }
      }
    }
  }, [map]);

  /** 마커 생성 및 positions 배열에 추가 */
  function createMarkers() {
    var imageSrc = "./assets/chargingMarker.png";
    var imageSize = new window.kakao.maps.Size(47, 49);
    var imageOption = { offset: new window.kakao.maps.Point(27, 69) };
    var markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    const updatedPositions = positions.map((position) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: position.latlng,
        image: markerImage,
      });

      const infowindow = new window.kakao.maps.InfoWindow({
        content: `<div style="background-color: #f7be16; margin-bottom: 2px; padding: 5px; width:180px; text-align:center; font-weight:bold;">${position.stationName}</div>`,
      });

      window.kakao.maps.event.addListener(marker, "mouseover", function () {
        infowindow.open(map, marker);
      });
      window.kakao.maps.event.addListener(marker, "mouseout", function () {
        infowindow.close();
      });

      return {
        ...position,
        marker: marker, // 마커를 positions 배열의 객체에 추가
      };
    });

    setPositions(updatedPositions);
  }

  useEffect(() => {
    if (map) {
      createMarkers(); // 마커 생성 및 positions 배열 업데이트
    }
  }, [map]);

  return (
    <div>
      <div className={styles.map_wrapper}>
        <SideMenu
          positions={positions}
          map={map}
          carList={carList}
          isAdmin={isAdmin}
        />
        <div id="map" className={styles.kakao_map}>
          <button></button>
        </div>
        <span id="centerAddr" className={styles.addrInfo}></span>
      </div>
    </div>
  );
};

export default ControlMain;
