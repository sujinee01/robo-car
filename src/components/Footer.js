/*
 페이지 하단 푸터 부분 구현하는 JS 파일입니다.
*/
import styles from "../style/Footer.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faInfo } from "@fortawesome/free-solid-svg-icons";
import footerlogo from "../assets/footer_logo.png";

const Footer = () => {
  return (
    <div className={styles.footer_wrap}>
      <div className={styles.footer_inner}>
        <div className={styles.footer_info}>
          <div className={styles.footer_info_inner}>
            <div className={styles.footer_logo}>
              <img src={footerlogo} alt="LOGO" />
            </div>
            <div className={styles.footer_service}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <span>이용안내</span>
              </Link>
              <span>개인정보처리방침</span>
            </div>
            <p>(주)ROBO-CAR</p>
            <p>서울특별시 강남구 언주로 508 14층(역삼동, 서울상록빌딩)</p>
            <p>
              고객센터 1544-0000 상담안내시간 (평일 09:00~18:00 주말
              10:00~14:00)
            </p>
            <p>Copyright by ROBO-CAR .All Rights Reserved.</p>
          </div>
        </div>

        <div className={styles.footer_icon}>
          <div className={styles.footer_icon_inner}>
            <Link to="/about">
              <div className={styles.icon_info} title="서비스 소개">
                <FontAwesomeIcon
                  icon={faInfo}
                  size="2x"
                  className={styles.faInfo}
                />
              </div>
            </Link>
            <Link to="/helpCenter">
              <div className={styles.icon_service} title="고객센터">
                <FontAwesomeIcon
                  icon={faHeadset}
                  size="2x"
                  className={styles.faHeadset}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
