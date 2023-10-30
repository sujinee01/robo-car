/*
 페이지 하단 푸터 부분 구현하는 JS 파일입니다.
*/
import styles from "../style/Footer.module.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faInfo, faX } from "@fortawesome/free-solid-svg-icons";
import footerlogo from "../assets/footer_logo.png";

const Footer = () => {
  /*모달창*/
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

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
              <button
                className={styles.modal_open_btn}
                onClick={() => setModalOpen(true)}
              >
                개인정보처리방침
              </button>
              {modalOpen && (
                <div
                  className={styles.modal_container}
                  ref={modalBackground}
                  onClick={(e) => {
                    if (e.target === modalBackground.current) {
                      setModalOpen(false);
                    }
                  }}
                >
                  <div className={styles.modal_content_wrap}>
                    <div className={styles.modal_content}>
                      <button
                        className={styles.modal_close_btn}
                        onClick={() => setModalOpen(false)}
                      >
                        <FontAwesomeIcon icon={faX} className={styles.faX} />
                      </button>
                      <p>개인정보처리방침</p>
                      <div className={styles.modal_inner}>
                        <div className={styles.policy_content}>
                          1. 개인정보의 처리 목적 (‘www.robocar.com’이하
                          ‘ROBOCAR’) 은(는) 다음의 목적을 위하여 개인정보를
                          처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지
                          않습니다.
                          <br />
                          - 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른
                          본인 식별 및 인증, 회원자격의 유지 및 관리, 물품 또는
                          서비스 공급에 따른 금액 결제, 물품 또는 서비스의 공급.
                          배송 등
                          <br />
                          <br />
                          2. 개인정보의 처리 및 보유 기간
                          <br />
                          ‘ROBOCAR’는 정보주체로부터 개인정보를 수집할 때 동의
                          받은 개인정보 보유․이용기간 또는 법령에 따른 개인정보
                          보유․이용기간 내에서 개인정보를 처리․보유합니다.
                          구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.
                          아래 예시를 참고하여 개인정보 처리업무와 개인정보
                          처리업무에 대한 보유기간 및 관련 법령, 근거 등을
                          기재합니다.
                          <br />
                          - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
                          <br />
                          - 신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년
                          <br />
                          - 대금결제 및 재화 등의 공급에 관한 기록 : 5년
                          <br />
                          - 계약 또는 청약철회 등에 관한 기록 : 5년
                          <br />
                          <br />
                          3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법
                          이용자는 개인정보주체로써 다음과 같은 권리를 행사할 수
                          있습니다. 정보주체는 ‘ROBOCAR’ 에 대해 언제든지 다음
                          각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                          <br />
                          - 개인정보 열람요구
                          <br />
                          - 오류 등이 있을 경우 정정 요구
                          <br />
                          - 삭제요구
                          <br />
                          - 처리정지 요구
                          <br />
                          <br />
                          4. 처리하는 개인정보의 항목 작성
                          <br />
                          'ROBOCAR'는 다음의 개인정보 항목을 처리하고 있습니다.
                          <br />
                          - 처리항목 : 휴대전화번호, 자택주소, 비밀번호,
                          생년월일, 이름, 이메일 주소 등<br />
                          <br />
                          5. 개인정보의 파기
                          <br />
                          'ROBOCAR'는 원칙적으로 개인정보 처리목적이 달성된
                          경우에는 지체 없이 해당 개인정보를 파기합니다. 파기의
                          절차, 기한 및 방법은 다음과 같습니다.
                          <br />
                          - 파기절차
                          <br />
                          이용자가 입력한 정보는 목적 달성 후 별도의 DB에
                          옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련
                          법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.
                          이 때, DB로 옮겨진 개인정보는 법률에 의한 경우가
                          아니고서는 다른 목적으로 이용되지 않습니다.
                          <br />
                          - 파기기한
                          <br />
                          이용자의 개인정보는 개인정보의 보유기간이 경과된
                          경우에는 보유기간의 종료일로부터 5일 이내에,
                          개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의
                          종료 등 그 개인정보가 불필요하게 되었을 때에는
                          개인정보의 처리가 불필요한 것으로 인정되는 날로부터
                          5일 이내에 그 개인정보를 파기합니다.
                          <br />
                          <br />
                          6. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한
                          사항 (주)ROBOCAR은 정보주체의 이용정보를 저장하고
                          수시로 불러오는 ‘쿠키’를 사용하지 않습니다.
                          <br />
                          <br />
                          7. 개인정보 보호책임자 작성
                          <br />
                          - ‘ROBOCAR’는 개인정보 처리에 관한 업무를 총괄해서
                          책임지고, 개인정보 처리와 관련한 정보주체의 불만처리
                          및 피해구제 등을 위하여 아래와 같이 개인정보
                          보호책임자를 지정하고 있습니다.
                          <br />
                          <br />
                          8. 개인정보 처리방침 변경
                          <br />이 개인정보처리방침은 시행일로부터 적용되며,
                          법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이
                          있는 경우에는 변경사항의 시행 7일 전부터 공지사항을
                          통하여 고지할 것입니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
