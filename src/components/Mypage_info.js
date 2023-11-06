import React, { useState } from "react";
import styles from "../style/Mypage_info.module.css";
import { toast } from "react-toastify";
import Modal from "react-modal";

function Mypage_info({ myData, modifySucc, setModifySucc }) {
  const data = myData[0];

  const [id, setId] = useState(data.u_id);
  const [pw, setPw] = useState("");
  const [name, setName] = useState(data.u_name);
  const [phone, setPhone] = useState(data.u_phone);
  const [email, setEmail] = useState(data.u_email);
  const [addr, setAddr] = useState(data.u_addr);

  const [passwordMessage, setPasswordMessage] = useState("");
  const [isPassword, setIsPassword] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordPassChk, setPasswordPassChk] = useState(false);

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPw(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("숫자/영문자/특수문자 포함 8~16자 입력해주세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  const addHyphen = (e) => {
    const currentNumber = e;
    let formattedNumber = currentNumber.replace(/[^0-9]/g, ""); // 숫자만 남기기
    if (formattedNumber.length > 11) {
      formattedNumber = formattedNumber.slice(0, 11); // 최대 10자리까지
    }
    if (formattedNumber.length > 3) {
      formattedNumber =
        formattedNumber.slice(0, 3) + "-" + formattedNumber.slice(3);
    }
    if (formattedNumber.length > 8) {
      formattedNumber =
        formattedNumber.slice(0, 8) + "-" + formattedNumber.slice(8);
    }
    setPhone(formattedNumber);
  };

  const clickId = () => {
    toast.warning("아이디는 수정하실 수 없습니다!", {
      theme: "colored",
    });
  };

  const chkPassword = () => {
    if (enteredPassword === data.u_pw) {
      toast.success("사용자 확인 성공!", {
        theme: "colored",
      });
      setPasswordPassChk(true);
      setModalOpen(false);
      setEnteredPassword("");
    } else {
      setEnteredPassword("");
      toast.error("비밀번호가 일치하지 않습니다.", {
        theme: "colored",
      });
    }
  };

  const closeModal = () => {
    setEnteredPassword("");
    setModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let modifyMsg = "";
    if (isPassword === false && pw !== "") {
      toast.error(passwordMessage, {
        theme: "colored",
      });
      return;
    }

    let uName = data.u_name;
    let uPw = data.u_pw;
    let uPhone = data.u_phone;
    let uEmail = data.u_email;
    let uAddr = data.u_addr;
    const uOffice = data.u_office;

    if (name !== data.u_name) {
      uName = name;
      modifyMsg += "[이름]";
    }
    if (isPassword && pw !== data.u_pw) {
      uPw = pw;
      modifyMsg += "[비밀번호]";
    }
    if (phone !== data.u_phone) {
      uPhone = phone;
      modifyMsg += "[전화번호]";
    }
    if (email !== data.u_email) {
      uEmail = email;
      modifyMsg += "[이메일]";
    }
    if (addr !== data.u_addr) {
      uAddr = addr;
      modifyMsg += "[주소]";
    }
    console.log(modifyMsg);
    if (modifyMsg === "") {
      toast.warning("수정된 내용이 없습니다.", {
        theme: "colored",
      });
      return;
    } else {
      try {
        const response = await fetch("/MypageModify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            uName,
            uPw,
            uPhone,
            uEmail,
            uAddr,
            uOffice,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          toast.success(data.message, {
            theme: "colored",
          });
          setTimeout(() => {
            setPasswordPassChk(false);
            setModifySucc(!modifySucc);
          }, 1500);
        }
      } catch {
        console.log("개인정보 수정 오류");
      }
    }
  };

  return (
    <div className={styles.mypageinfocontainer}>
      <form
        className={styles.myinfocontain}
        action="/MypageModify"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className={styles.infotopic}>
          <p className={styles.pagetopic}>개인정보 수정</p>
        </div>
        <div className={styles.hline}></div>
        <div className={styles.infocontainer}>
          <div
            className={styles.infoblock_wrap}
            onClick={() => setModalOpen(true)}
          >
            <div className={styles.infoblock}>
              <p className={styles.infolist}>아이디</p>
              <input
                className={styles.textbox}
                value={id}
                onClick={clickId}
                readOnly
              />
            </div>
            <div className={styles.infoblock}>
              <p className={styles.infolist}>비밀번호</p>
              <input
                type="password"
                className={styles.textbox}
                onChange={onChangePassword}
              />
            </div>

            <div className={styles.infoblock}>
              <p className={styles.infolist}>이름</p>
              <input
                className={styles.textbox}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={styles.infoblock}>
              <p className={styles.infolist}>전화번호</p>
              <input
                className={styles.textbox}
                value={phone}
                onChange={(e) => addHyphen(e.target.value)}
              />
            </div>

            <div className={styles.infoblock}>
              <p className={styles.infolist}>이메일</p>
              <input
                className={styles.textbox}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.infoblock}>
              <p className={styles.infolist}>주소</p>
              <div className={styles.addr_form}>
                <input
                  className={styles.addr_input}
                  type="text"
                  name="addr1"
                ></input>
                <button className={styles.addrnumfind} type="submit">
                  우편번호
                </button>
                <br />
                <input
                  className={styles.textbox}
                  type="text"
                  name="addr2"
                  value={addr}
                  onChange={(e) => setAddr(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.modify_wrap}>
          <button type="submit" className={styles.modify}>
            수정하기
          </button>
        </div>
      </form>
      {isModalOpen && !passwordPassChk && (
        <Modal
          isOpen={isModalOpen}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(150, 150, 150, 0.75)",
            },
            content: {
              position: "absolute",
              top: "350px",
              left: "600px",
              right: "600px",
              bottom: "50px",
              background: "#f5f5f5",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "10px",
              boxShadow: "5px 5px 3px gray",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h2 className={styles.modalHeader}>비밀번호 확인</h2>
              <p className={styles.modalInfo}>
                개인정보 수정을 위해 현재 비밀번호를 입력해주세요.
              </p>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                id="modalInput"
                value={enteredPassword}
                className={styles.modalInput}
                onChange={(e) => setEnteredPassword(e.target.value)}
              />
              <div className={styles.modalBtnWrap}>
                <button className={styles.modalCancel} onClick={closeModal}>
                  취소
                </button>
                <button
                  className={styles.modalConfirm}
                  onClick={() => chkPassword()}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Mypage_info;
