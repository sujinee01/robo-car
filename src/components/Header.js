/*
  페이지 상단 헤더 부분 구현하는 JS 파일입니다.
*/
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import st from "../style/Header.module.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";

/** 헤더 구현 컴포넌트 */
const Header = ({ isLogin, isAdmin }) => {
  const navigate = useNavigate();
  const { nav_item, header } = st;
  const [preScrollPos, setPreScrollPos] = useState(0);
  const [btnToggle, setBtnToggle] = useState(false);

  const toggleBtn = () => {
    if (!btnToggle) {
      setBtnToggle(!btnToggle);
    } else {
      setBtnToggle(!btnToggle);
    }
  };

  const handleLink = () => {
    isLogin
      ? navigate("/resv")
      : (() => {
          toast.info("로그인이 필요한 서비스입니다.", {
            theme: "colored",
          });
          setTimeout(() => {
            navigate("/login");
          }, 500);
        })();
  };

  useEffect(() => {
    const navItems = document.querySelectorAll(`.${nav_item}`);
    const targetHeader = document.querySelectorAll(`.${header}`);

    // 네비게이션 hover 구현 부분
    navItems.forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.style.color = "#21325e";
        item.style.borderBottom = "3px solid #f7be16";
        item.style.transition = "0.1s";
        // 선택된 개체 이외의 개체
        navItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.style.color = "lightgray";
            otherItem.style.transition = "0.1s";
          }
        });
      });

      item.addEventListener("mouseout", () => {
        item.style.color = "black";
        item.style.borderBottom = "";
        item.style.transition = "0.3s";
        navItems.forEach((other) => {
          if (item !== other) {
            other.style.color = "black";
            other.style.transition = "0.3s";
          }
        });
      });
    });

    /** 스크롤 반응형 헤더 부분 */
    const scrollPos = () => {
      const nowScrollPos = window.scrollY;
      setPreScrollPos(nowScrollPos);

      if (preScrollPos > nowScrollPos) {
        targetHeader.forEach((header) => {
          header.style.height = "100px";
        });
      } else {
        targetHeader.forEach((header) => {
          header.style.height = "50px";
        });
      }
    };

    window.addEventListener("scroll", scrollPos); // window 객체에 스크롤 이벤트 추가

    return () => {
      window.removeEventListener("scroll", scrollPos); // 컴포넌트가 언마운트될 때 이벤트 제거
    };
  }, [preScrollPos]);

  return (
    <div>
      <header className={st.header}>
        <a href="/">
          <img src={logo} alt="LOGO" />
        </a>

        <div className={st.header_nav}>
          <a href="/about" className={st.nav_item}>
            서비스 소개
          </a>
          <a href="/ControlMain" className={st.nav_item}>
            차량관제
          </a>
          <a href="#!" className={st.nav_item} onClick={handleLink}>
            운송예약
          </a>
          <a href="/noticeMain" className={st.nav_item}>
            공지사항
          </a>
          <a href="/helpCenter" className={st.nav_item}>
            고객센터
          </a>
        </div>

        <div className={st.ham_btn} onClick={toggleBtn}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <Sidebar
          isOpen={btnToggle}
          setIsOpen={setBtnToggle}
          isLogin={isLogin}
          isAdmin={isAdmin}
        />
      </header>
    </div>
  );
};

export default Header;
