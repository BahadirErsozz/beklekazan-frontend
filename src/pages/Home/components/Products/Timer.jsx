import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ marginBottom: "5px" }}>
        {days > 0 || hours > 0 || minutes > 0 || seconds > 0
          ? "Kalan Süre: "
          : ""}
        {days > 0 ? days + " Gün " + hours + " Saat" : ""}
        {days <= 0 && hours > 0 ? hours + " Saat " + minutes + " Dakika " : ""}
        {days <= 0 && hours <= 0 && minutes > 0
          ? minutes + " Dakika " + seconds + " Saniye "
          : ""}
        {days <= 0 && hours <= 0 && minutes <= 0 && seconds > 0
          ? seconds + " Saniye"
          : ""}
        {days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0
          ? "Süre Bitti"
          : ""}
      </div>
    </>
  );
};

export default Timer;
