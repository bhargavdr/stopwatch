import React, { useRef, useState } from 'react';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  // const toggleStartStop = () => {
  //   if (isRunning) {
  //     clearInterval(intervalRef.current);
  //     setIsRunning(false);
  //   } else {
  //     const startTime = Date.now() - time;
  //     intervalRef.current = setInterval(() => {
  //       const now = Date.now();
  //       setTime(now - startTime);
  //     }, 10);
  //     setIsRunning(true);
  //   }
  // };
  const handleStart = () => {
    if (!isRunning) {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        const now = Date.now();
        setTime(now - startTime);
      }, 10);
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);

    if (isRunning) setIsRunning(false);
  };

  const formatTime = (time) => {
    const padTime = (value) => {
      return value < 10 ? `0${value}` : value;
    };

    const minutes = Math.floor(time / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
  };

  return (
    <div className="mainContainer">
      <div className="circle">
        <div>
          <p>{formatTime(time)}</p>
        </div>
      </div>
      <div className="btnContainer">
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
