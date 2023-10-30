import React, { useEffect, useState } from "react";
import { IoBatteryFull } from "react-icons/io5";

import styled from "styled-components";

const Branch = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-weight: 400;
  font-size: 20px;
  float: left;
  padding: 0.5rem;
`;

function Batterystatus() {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    navigator.getBattery().then((battery) => {
      setBatteryLevel(battery.level);

      battery.addEventListener("levelchange", () => {
        setBatteryLevel(battery.level);
      });
    });
  }, []);

  return (
    <div>
      {batteryLevel !== null ? (
        <div>
          <IoBatteryFull
            size={50}
            color={batteryLevel >= 0.2 ? "green" : "red"}
          />
        </div>
      ) : (
        <p>배터리 정보를 불러오는 중입니다...</p>
      )}
    </div>
  );
}

export default Batterystatus;
