import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "../style/Image_slider.module.css"; // .module.css 파일로 변경
import slideimage from "../assets/keyimage_01.jpg";

const ImageSlider = () => {
  return (
    <Slide autoplay={false}>
      <div className={styles["each-slide-effect"]}>
        <div className={styles.keyimage_wrap}>
          <img src={slideimage} className={styles.keyimage_style} alt="React" />
          <span className={styles.keyspan_style}>
            하나의 플랫폼에서 운송부터 예약까지
          </span>
        </div>
      </div>
      <div className={styles["each-slide-effect"]}>
        <div className={styles.keyimage_wrap}>
          <img src={slideimage} className={styles.keyimage_style} alt="React" />
          <span className={styles.keyspan_style}>
            하나의 플랫폼에서 운송부터 예약까지2
          </span>
        </div>
      </div>
      <div className={styles["each-slide-effect"]}>
        <div className={styles.keyimage_wrap}>
          <img src={slideimage} className={styles.keyimage_style} alt="React" />
          <span className={styles.keyspan_style}>
            하나의 플랫폼에서 운송부터 예약까지3
          </span>
        </div>
      </div>
    </Slide>
  );
};

export default ImageSlider;
