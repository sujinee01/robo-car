import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  let [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 1초마다 현재 시간을 업데이트합니다.
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // 1초마다 업데이트

    // 컴포넌트가 언마운트되면 인터벌을 정리합니다.
    return () => clearInterval(intervalId);
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행됩니다.

  const formattedTime = currentTime.toLocaleTimeString(); // 현재 시간만 포함된 문자열로 포맷합니다.

  return <div>{formattedTime}</div>;
};

export default CurrentTime;