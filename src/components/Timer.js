import React from 'react';

const Timer = ({ time }) => {
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor(time / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  
  return (
    <div>
      <span>{hours.toString().padStart(2, '0')}:</span>
      <span>{minutes.toString().padStart(2, '0')}:</span>
      <span>{seconds.toString().padStart(2, '0')}.</span>
      <span className="millisecond">
        {milliseconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
};

export default Timer;
