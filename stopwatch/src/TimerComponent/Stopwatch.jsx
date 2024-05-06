import { useState, useEffect } from "react";
import "./Stopwatch.css";
const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [inprogress, SetInprogress] = useState(false);
  const timeFormat = (seconds) => {
    let min = Math.floor(seconds / 60);
    let remainingSec = seconds % 60;
    return `${min}:${remainingSec < 10 ? "0" : ""}${remainingSec}`;
  };
  const startAndStop = () => {
    SetInprogress(!inprogress);
  };

  const reset = () => {
    setTimer(0);
    SetInprogress(false);
  };

  useEffect(() => {
    let intervel;
    if (inprogress) {
      intervel = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervel);
  }, [inprogress]);

  return (
    <div className="container">
      <h2>Stopwatch</h2>
      <p>Time: {timeFormat(timer)}</p>
      <button onClick={startAndStop}>{!inprogress ? "Start" : "stop"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Stopwatch;
