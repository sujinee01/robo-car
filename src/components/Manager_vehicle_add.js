import React from "react";
import styles from "../style/Manager_vehicle_add.module.css";

const VehicleAdd = ({ addToggle, setAddToggle, infoReq }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAddToggle(!addToggle);

    const formData = new FormData(e.target);
    const clicenseplt = formData.get("clicenseplt");
    const cmodel = formData.get("cmodel");
    const cid = formData.get("cid");
    const cpower = formData.get("cpower") === "on" ? 1 : 0;
    const clight = formData.get("clight") === "on" ? 1 : 0;
    const cbattery = formData.get("cbattery");
    console.log(cpower, clight);
    try {
      const response = await fetch("/CarAdd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clicenseplt,
          cmodel,
          cid,
          cpower,
          clight,
          cbattery,
        }),
      });

      if (response.ok) {
        const data = await response.json();
      }
    } catch {
      console.log("차량 등록 오류");
    }
  };

  return (
    <>
      <div className={styles.vehicle_add_wrap}>
        <p>운송차량등록</p>
        <div className={styles.add_wrap}>
          <form method="post" action="/CarAdd" onSubmit={handleSubmit}>
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
                    <option value={"1호차"}>1호차</option>
                    <option value={"2호차"}>2호차</option>
                    <option value={"3호차"}>3호차</option>
                    <option value={"4호차"}>4호차</option>
                  </select>
                </td>
                <td>
                  <select name="cpower">
                    <option value={"on"}>ON</option>
                    <option value={"off"} selected>
                      OFF
                    </option>
                  </select>
                </td>
                <td>
                  <select name="clight">
                    <option value={"on"}>ON</option>
                    <option value={"off"} selected>
                      OFF
                    </option>
                  </select>
                </td>
                <td>
                  <input type="text" name="cbattery" size={4} />
                </td>
              </tr>
            </table>
            <div className={styles.add_button}>
              <div>
                <input
                  type="button"
                  value={"돌아가기"}
                  onClick={() => {
                    setAddToggle(!addToggle);
                  }}
                />
                <input type="submit" value={"등록"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default VehicleAdd;
