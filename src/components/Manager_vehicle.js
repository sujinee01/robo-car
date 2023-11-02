import React, { useEffect, useState } from "react";
import styles from "../style/Manager_vehicle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import ManagerHeader from "./Manager_header";
import VehicleAdd from "./Manager_vehicle_add";
import ConfirmFunc from "./Confirm_func";

function ManagerVehicle() {
  const [addToggle, setAddToggle] = useState(false);
  const [receiveData, setReceiveData] = useState([]);

  const infoReq = async () => {
    const reqTarget = "Car";

    try {
      const response = await fetch("/ManageMember", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reqTarget }), // 요청하는 데이터
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          setReceiveData(data["rows"]);
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  const delCar = async (car) => {
    const reqTarget = "delCar";
    const carId = car;

    try {
      const response = await fetch("/ManageMember", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reqTarget, carId }), // 요청하는 데이터
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          const updatedData = receiveData.filter(
            (vehicle) => vehicle.car_id !== carId
          );
          setReceiveData(updatedData);
        }
      }
    } catch (error) {
      console.error("오류:", error);
    }
  };

  const handleAdd = () => {
    setAddToggle(!addToggle);
  };

  function Vehicle({ vehicle }) {
    return (
      <tr>
        <td></td>
        <td>{vehicle.car_licenseplt}</td>
        <td>{vehicle.car_model}</td>
        <td>{vehicle.car_id}</td>
        <td>{vehicle.car_power === 1 ? "ON" : "OFF"}</td>
        <td>{vehicle.car_light === 1 ? "ON" : "OFF"}</td>
        <td>{vehicle.car_battery}</td>
        <td>
          {/*삭제버튼*/}
          <button onClick={() => ConfirmFunc(() => delCar(vehicle.car_id))}>
            <FontAwesomeIcon icon={faXmark} className={styles.faXmark} />
          </button>
        </td>
      </tr>
    );
  }

  // useEffect 써서 addToggle 변경될때 ,
  // addToggle이 false 일경우에 infoReq 호출
  useEffect(() => {
    if (addToggle === false) {
      infoReq();
    }
  }, [addToggle]);

  useEffect(() => {
    if (addToggle === false) {
      infoReq();
    }
  }, []);

  return (
    <>
      {/* <ManagerHeader /> */}
      {addToggle ? (
        <VehicleAdd
          addToggle={addToggle}
          setAddToggle={setAddToggle}
          infoReq={infoReq}
        />
      ) : (
        <div className={styles.vehicle_wrap}>
          {receiveData ? (
            receiveData.length === 0 ? (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>차량번호</th>
                      <th>차량모델</th>
                      <th>호차</th>
                      <th>시동</th>
                      <th>라이트</th>
                      <th>배터리잔량</th>
                      <th>삭제</th>
                    </tr>
                  </thead>
                </table>
                <p>차량을 등록해주세요.</p>
              </>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>차량번호</th>
                    <th>차량모델</th>
                    <th>호차</th>
                    <th>시동</th>
                    <th>라이트</th>
                    <th>배터리잔량</th>
                    <th>삭제</th>
                  </tr>
                </thead>
                <tbody>
                  {receiveData.map((vehicle, index) => (
                    <Vehicle vehicle={vehicle} key={index} />
                  ))}
                </tbody>
              </table>
            )
          ) : (
            <>
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>차량번호</th>
                    <th>차량모델</th>
                    <th>호차</th>
                    <th>시동</th>
                    <th>라이트</th>
                    <th>배터리잔량</th>
                    <th>삭제</th>
                  </tr>
                </thead>
              </table>
              <p>차량을 등록해주세요.</p>
            </>
          )}
          <div className={styles.vehicle_add}>
            <button onClick={() => handleAdd()}>차량등록</button>
          </div>
        </div>
      )}
    </>
  );
}
export default ManagerVehicle;
