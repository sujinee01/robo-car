import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/Customer_rating.module.css";

function CustomRating() {
  const navigate = useNavigate();
  const backToReview = () => {
    navigate("/reviewList");
  };
  return (
    <div className={styles.customratingcontainer}>
      {/* <div className={styles.ratingcontainer}>
        <h1 className={styles.rating_topic}>고객센터</h1>
        <div className={styles.rating_btn}>
          <button className={styles.leftbtn}>자주 묻는 질문</button>
          <button className={styles.choicebtn}>서비스 평가</button>
        </div>
      </div> */}
      {/* <div className={styles.ratingpart}>
        <p className={styles.ratingtitle}>서비스 평가 등록</p>
        <p className={styles.ratingname}>작성자</p>
        <input className={styles.nameinput} type="text"></input>
        <div className={styles.partcontainer}>
          <p className={styles.ratingsatis}>이용 만족도</p>
          <p className={styles.ratingcar}>이용 차량</p>
        </div>
        <br />
        <div className={styles.inputcontainer}>
          <form className={styles.satislist} action="#">
            <select className={styles.satisinput} name="car" id="car">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </form>
          <form className={styles.carlist} action="#">
            <select className={styles.carinput} name="car" id="car">
              <option value="car1">12가1234</option>
              <option value="car2">23나2345</option>
              <option value="car3">21다4356</option>
              <option value="car4">98미4532</option>
              <option value="car5">12가9834</option>
            </select>
          </form>
        </div>
        <br />
        <p className={styles.ratingitem}>평가 항목</p>
        <textarea
          className={styles.iteminput}
          name="content"
          id="content"
          cols="20"
          rows="10"
          placeholder="내용"
        ></textarea>
        <button className={styles.sendrating}>등록</button>
      </div> */}

      <div className={styles.ratingpart}>
        <p className={styles.ratingtitle}>서비스 평가 등록</p>
        <div className={styles.ratingtitle_wrap}>
          <div className={styles.rating_auth}>
            <p>작성자</p>
            <input className={styles.nameinput} type="text" />
          </div>
          <div className={styles.rating_car}>
            <p>이용차량</p>
            <select className={styles.carinput} name="car" id="car">
              <option value="car1">12가1234</option>
              <option value="car2">23나2345</option>
              <option value="car3">21다4356</option>
              <option value="car4">98미4532</option>
              <option value="car5">12가9834</option>
            </select>
          </div>
          <div className={styles.rating_satis}>
            <p>이용만족도</p>
            <select className={styles.satisinput} name="car" id="car">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className={styles.ratingcontent_wrap}>
          <p>평가 내용</p>
          <textarea
            className={styles.iteminput}
            name="content"
            id="content"
            cols="20"
            rows="10"
            placeholder="내용"
          ></textarea>
        </div>
      </div>
      <div className={styles.sendrating_wrap}>
        <button className={styles.sendrating}>등록</button>
        <button className={styles.sendrating_back} onClick={backToReview}>
          돌아가기
        </button>
      </div>
    </div>
  );
}

export default CustomRating;
