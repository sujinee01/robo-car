import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState(""); // 로그인 메시지 상태

  useEffect(() => {
    if (loginMessage) {
      alert(loginMessage);
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

        if (data.success) {
          localStorage.setItem("id", id);
          localStorage.setItem("name", data.u_name);
          // 로그인 성공 시 메시지 설정
          alert(`환영합니다, ${data.u_name}님!`);
          navigate("/"); // 로그인 성공 시 Home 페이지로 이동
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
          <button className={styles.go_join}>
            <a href="/join">회원가입</a>
          </button>
        </form>
        {/* )} */}
      </div>
    </div>
  );
}

export default Login;
