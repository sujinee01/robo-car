import { Link } from "react-router-dom";
import styles from "../style/Manager_vehicle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ManagerHeader from "./Manager_header";

function ManagerVehicle({ vehicleData }) {
  let vehicles = [
    {
      id: 1,
      car_licenseplt: "",
      car_model: "",
      car_id: "",
      car_power: "",
      car_light: "",
      car_battery: "",
    },
  ];
  if (vehicleData) {
    vehicles = vehicleData;
  }

  function Vehicle({ vehicle, key }) {
    return (
      <tr>
        <td>{key}</td>
        <td>{vehicle.car_licenseplt}</td>
        <td>{vehicle.car_model}</td>
        <td>{vehicle.car_id}</td>
        <td>{vehicle.car_power}</td>
        <td>{vehicle.car_light}</td>
        <td>{vehicle.car_battery}</td>
        <td>
          {/*삭제버튼*/}
          <button>
            <FontAwesomeIcon icon={faXmark} className={styles.faXmark} />
          </button>
        </td>
      </tr>
    );
  }

  return (
    <>
      <ManagerHeader />
      <div className={styles.vehicle_wrap}>
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
            {vehicles.map((vehicle, index) => (
              <Vehicle vehicle={vehicle} key={index} />
            ))}
          </tbody>
        </table>
        <div className={styles.vehicle_add}>
          <Link to="/VehicleAdd">
            <button>차량등록</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default ManagerVehicle;
