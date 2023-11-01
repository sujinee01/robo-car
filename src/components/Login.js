import React, { useState, useEffect } from "react";
import styles from "../style/Login.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginMessage, setLoginMessage] = useState(""); // 로그인 메시지 상태
  const navigate = useNavigate();

  useEffect(() => {
    if (loginMessage) {
      toast.error(loginMessage, {
        theme: "colored",
      }); // 로그인 관련 안내 토스트
      setLoginMessage("");
    }
  }, [loginMessage]);

  const loginSucc = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const id = formData.get("id");
    const password = formData.get("password");

    try {
      const response = await fetch("/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.success) {
          localStorage.setItem("id", id);
          localStorage.setItem("name", data.u_name);
          // 로그인 성공 시 메시지 설정
          toast.success(`환영합니다, ${data.u_name}님!`, {
            theme: "colored",
          });
          // 토스트 창 확인을 위한 1초 딜레이 설정
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        } else {
          // 로그인 실패 시 메시지 설정
          if (data.info === "pw") {
            setLoginMessage("비밀번호가 일치하지 않습니다.");
          } else {
            setLoginMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
          }
        }
      }
    } catch (error) {
      console.error("로그인 오류:", error);
    }
  };

  const signUpToast = () => {
    toast.info("회원가입 페이지로 이동합니다.", { theme: "colored" });

    // 1초 후에 페이지를 이동합니다.
    setTimeout(() => {
      navigate("/join"); // 지정된 URL로 이동합니다.
    }, 1000);
  };

  return (
    <div className={styles.login_body}>
      <div className={styles.login_form}>
        <div className={styles.login_tit_wrapper}>
          <h3 className={styles.login_tit}>
            ROBO-CAR
            <br />
            아이디와
            <br />
            비밀번호를 입력해주세요
          </h3>
        </div>
        {/* {loggedIn ? (
          <p>Welcome, {username}!</p>
        ) : ( */}
        <form
          className={styles.login_input_wrapper}
          action="/Login"
          method="post"
          onSubmit={loginSucc}
        >
          <label className={styles.login_label}>아이디</label>
          <input className={styles.id} type="text" name="id" />
          <br />
          <label className={styles.login_label}>비밀번호</label>
          <input className={styles.password} type="password" name="password" />
          <br />
          <button className={styles.login_comple} type="submit">
            <strong>로그인</strong>
          </button>
          <br />
          <br />
          <a href="#" className={styles.go_join} onClick={signUpToast}>
            회원가입
          </a>
        </form>
        {/* )} */}
      </div>
    </div>
  );
}

export default Login;
