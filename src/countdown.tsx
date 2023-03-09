import { useEffect, useState } from "react";

export function CountDown({ hours = 0, minutes = 0, seconds = 0 }) {
  let [paused, setPaused] = useState(false);
  let [over, setOver] = useState(false);
  let [timer, setTimer] = useState({
    hours: hours,
    minutes: minutes,
    seconds: seconds
  });

  const tick = () => {
    if (paused || over) return;
    if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0)
      setOver(true);
    else if (timer.minutes === 0 && timer.seconds === 0) {
      setTimer({
        hours: timer.hours - 1,
        minutes: 59,
        seconds: 59
      });
    } else if (timer.seconds === 0) {
      setTimer({
        hours: timer.hours,
        minutes: timer.minutes - 1,
        seconds: 59
      });
    } else {
      setTimer({
        hours: timer.hours,
        minutes: timer.minutes,
        seconds: timer.seconds - 1
      });
    }
  };

  const reset = () => {
    setTimer({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
    setOver(false);
    setPaused(false);
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      <p>{`${timer.hours}h : ${timer.minutes}m : ${timer.seconds}s`}</p>
      <p>{over ? "Time over" : ""}</p>
      <button onClick={() => setPaused(!paused)}>
        {paused ? "Resume" : "Pause"}
      </button>
      <button onClick={reset}>Restart</button>
    </div>
  );
}
