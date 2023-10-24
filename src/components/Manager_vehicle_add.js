import React from "react";
import styles from "../style/Manager_vehicle_add.module.css";
import ManagerHeader from "./Manager_header"
const VehicleAdd = () => {
  return (
    <>
    <ManagerHeader/>
    <div className={styles.vehicle_add_wrap}>
      <p>운송차량등록</p>
      <div className={styles.add_wrap}>
        <form method="post">
          <table>
            <tr>
              <th>차량번호</th>
              <th>차량모델</th>
              <th>호차</th>
              <th>시동</th>
              <th>라이트</th>
              <th>배터리잔량</th>
            </tr>
            <tr>
              <td>
                <input type="text" name="clicenseplt" />
              </td>
              <td>
                <input type="text" name="cmodel" />
              </td>
              <td>
                <select name="cid">
                  <option value={"car01"}>1호차</option>
                  <option value={"car02"}>2호차</option>
                </select>
              </td>
              <td>
                <select name="cpower">
                  <option value={"on"}>ON</option>
                  <option value={"off"}>OFF</option>
                </select>
              </td>
              <td>
                <select name="clight">
                  <option value={"on"}>ON</option>
                  <option value={"off"}>OFF</option>
                </select>
              </td>
              <td>
                <input type="text" name="cbattery" size={4} />
              </td>
            </tr>
          </table>
          <div className={styles.add_button}>
            <input type="submit" value={"등록"} />
          </div>
        </form>
      </div>
    </div>
    </>
  );
};
export default VehicleAdd;
