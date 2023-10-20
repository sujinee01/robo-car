import React from "react";
import styles from "../style/About_us.module.css";

import logo from "../assets/logo.png";
import truck01 from "../assets/truck_01.png";
import truck02 from "../assets/truck_02.png";
import outlineimage01 from "../assets/outlineimage_01.jpg";
import outlineimage02 from "../assets/outlineimage_02.jpg";
import controlimage from "../assets/controlimage.jpg";
import info from "../assets/info.png";
import calendar from "../assets/calendar.png";
import packagepick from "../assets/packagepick.png";
import fastforward from "../assets/fast-forward.png";
import lorry from "../assets/lorry.png";
import answer from "../assets/answer.png";
import notes from "../assets/notes.png";

const AboutUs = () => {
  return (
    <div className={styles.about_us}>
      <div className={styles.company_main}>
        <div className={styles.company_logo}>
          <img src={logo} className={styles.company_logo_img} alt="React" />
        </div>
        <div className={styles.company_text}>
          <h2>ROBO-CAR는 안심할 수 있는 서비스를 제공합니다.</h2>
          <span>
            편리한 운송예약부터 최신기술을 겸비한
            <br />
            무인차량 관제시스템으로 만족스러운 서비스를 경험하세요.
          </span>
        </div>
        <div className={styles.truck_wrap}>
          <div className={styles.truck_inner}>
            <img src={truck01} className={styles.truck} alt="React" />
            <img src={truck02} className={styles.truck} alt="React" />
          </div>
        </div>
      </div>

      <div className={styles.company_content}>
        <div className={styles.outline_wrap}>
          <div className={styles.outline_inner}>
            <div className={styles.outline_title}>
              <hr />
              <h2>
                ROBO-CAR의
                <br />
                운송 예약 서비스를 소개합니다
              </h2>
            </div>
            <div className={styles.outline_text}>
              <div className={styles.outline_image_wrap}>
                <img src={outlineimage01} alt="React" />
              </div>
              <span>
                언제든지 원하는 시간에 운송을 예약하면 <b>차량 관제 시스템</b>
                으로 관리하는 무인 차량이 상품을 회수 및 배송해주는
                서비스입니다. 발전하는 과학기술에 맞춰 <b>무인 및 자동화</b>로
                운송 서비스를 제공하여 상황에 따라 필요한 옵션으로 상품은 더
                빠르게, 배송은 더 효율적으로, 가격은 더 저렴하게 이용하실 수
                있습니다.
              </span>
            </div>
          </div>

          <div className={styles.outline_inner_02}>
            <div className={styles.outline_title_02}>
              <hr />
              <h2>
                ROBO-CAR의
                <br />
                차량관제시스템을 소개합니다
              </h2>
            </div>
            <div className={styles.outline_text_02}>
              <span>
                차량용 통신 모듈을 이용해 <b>차량의 위치와 상태를 실시간</b>으로
                PC와 스마트폰에서 확인하는 서비스입니다. 차량 관제 시스템으로
                차량을 실시간 관리할 수 있고 무인 운송 차량의 효율적인 배차와
                이동경로로 운송 비용을 절감하여 <b>저렴한 비용</b>으로 이용이
                가능합니다. 빠른 픽업과 <b>안전한 배송</b>으로 고객분들의 운송을
                책임집니다.
              </span>
              <div className={styles.outline_image_wrap_02}>
                <img src={outlineimage02} alt="React" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tab_wrap}>
        <input name="tab" id="tab1" type="radio" checked />
        <input name="tab" id="tab2" type="radio" />
        <header>
          <label htmlFor="tab1">차량관제화면 이용안내</label>
          <label htmlFor="tab2">운송예약 이용안내</label>
        </header>
        <div className={styles.tab1_content}> 
          <div className={styles.info_wrap}>
            <p>차량관제 화면</p>
            <div className={styles.control_image}>
              <img src={controlimage} alt="React" />
            </div>
            <div className={styles.control_step_wrap}>
              <p>차량관제 화면 이용안내</p>
              <div className={styles.control_step_inner}>
                <div className={styles.control_step_info}>
                  <img src={info} alt="React" />
                </div>
                <p>
                  운송 예약 완료 후 차량관제 서비스의 이용 차량을 선택해주세요.
                </p>
              </div>
              <div className={styles.control_step_inner}>
                <div className={styles.control_step_info}>
                  <img src={info} alt="React" />
                </div>
                <p>
                  선택한 차량의 차량정보와 시동,라이트의 유무, 배터리 잔량을
                  조회할 수 있습니다.
                </p>
              </div>
              <div className={styles.control_step_inner}>
                <div className={styles.control_step_info}>
                  <img src={info} alt="React" />
                </div>
                <p>
                  운송 예약의 발송지와 도착지 및 도착예정시간을 조회할 수
                  있습니다.
                </p>
              </div>
              <div className={styles.control_step_inner}>
                <div className={styles.control_step_info}>
                  <img src={info} alt="React" />
                </div>
                <p>
                  충전소 위치 목록 조회와 충전소 위치를 지도에 표기할 수
                  있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tab2_content}>
          <div className={styles.info_wrap_02}>
            <p>운송예약 이용안내</p>
            <div className={styles.book_step_wrap}>
              <div className={styles.book_icon_wrap}>
                <div className={styles.book_icon_inner}>
                  <img src={calendar} className={styles.bookstep} alt="React" />
                  <span>STEP01</span>
                </div>
                <div className={styles.book_icon_arrow}>
                  <img
                    src={fastforward}
                    className={styles.bookarrow}
                    alt="React"
                  />
                </div>
                <div className={styles.book_icon_inner}>
                  <img
                    src={packagepick}
                    className={styles.bookstep}
                    alt="React"
                  />
                  <span>STEP02</span>
                </div>
                <div className={styles.book_icon_arrow}>
                  <img
                    src={fastforward}
                    className={styles.bookarrow}
                    alt="React"
                  />
                </div>
                <div className={styles.book_icon_inner}>
                  <img src={lorry} className={styles.bookstep} alt="React" />
                  <span>STEP03</span>
                </div>
                <div className={styles.book_icon_arrow}>
                  <img
                    src={fastforward}
                    className={styles.bookarrow}
                    alt="React"
                  />
                </div>
                <div className={styles.book_icon_inner}>
                  <img src={answer} className={styles.bookstep} alt="React" />
                  <span>STEP04</span>
                </div>
                <div className={styles.book_icon_arrow}>
                  <img
                    src={fastforward}
                    className={styles.bookarrow}
                    alt="React"
                  />
                </div>
                <div className={styles.book_icon_inner}>
                  <img src={notes} className={styles.bookstep} alt="React" />
                  <span>STEP05</span>
                </div>
              </div>
            </div>

            <div className={styles.book_info_wrap}>
              <div className={styles.book_info_inner}>
                <div className={styles.book_text}>
                  <p>STEP01. 운송 발송지와 도착지를 입력해주세요.</p>
                  <p>STEP02. 물품 픽업 날짜와 원하는 시간을 선택해주세요.</p>
                  <p>
                    STEP03. 운송 물품과 무게에 맞는 운송차량을 선택해주세요.
                  </p>
                  <p>
                    STEP04. 4가지의 배송옵션(편도, 일반, 왕복, 특송)중 하나를
                    선택해주세요.
                  </p>
                  <p>STEP05. 운송 물품 내역과 운송메모를 남겨주세요.</p>
                </div>
              </div>
            </div>

            <div className={styles.book_price_wrap}>
              <p>운송예약 이용요금</p>
              <div className={styles.book_price_inner}>
                <img src={controlimage} alt="React" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*탭메뉴 부분 */}
    </div>
  );
};

export default AboutUs;
