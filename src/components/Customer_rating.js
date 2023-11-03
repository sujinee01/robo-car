import React from "react";
import styles from "../style/Customer_rating.module.css";
import { toast } from "react-toastify";

function CustomRating({ doRating, targetResv }) {
  console.log(targetResv);
  const addReview = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const auth = localStorage.getItem("id");
    const title = formData.get("title");
    const car = targetResv.resv_carselect;
    const rating = formData.get("rating");
    const content = formData.get("content");
    const resvNo = targetResv.resv_no;

    try {
      const response = await fetch("/ReviewAdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          auth,
          title,
          car,
          rating,
          content,
          resvNo,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`${data.message}`, {
          theme: "colored",
        });
        setTimeout(() => {
          doRating();
        }, 1000);
      }
    } catch {
      console.log("리뷰 등록 오류");
    }
  };

  return (
    <form
      action="/ReviewAdd"
      method="post"
      onSubmit={addReview}
      className={styles.customratingcontainer}
    >
      <div className={styles.ratingpart}>
        <p className={styles.ratingtitle}>서비스 평가 등록</p>
        <div className={styles.ratingtitle_wrap}>
          <div className={styles.rating_auth}>
            <p>제목</p>
            <input className={styles.nameinput} type="text" name="title" />
          </div>
          <div className={styles.rating_car}>
            <p>이용차량</p>
            <div className={styles.carinput} name="car" id="car">
              <div value={targetResv.resv_carselect}>
                {targetResv.resv_carselect}_{targetResv.resv_no}
              </div>
            </div>
          </div>
          <div className={styles.rating_satis}>
            <p>이용만족도</p>
            <select className={styles.satisinput} name="rating" id="car">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5" selected>
                5
              </option>
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
        <button className={styles.sendrating} type="submit">
          등록
        </button>
        <button className={styles.sendrating_back} onClick={doRating}>
          돌아가기
        </button>
      </div>
    </form>
  );
}

export default CustomRating;
