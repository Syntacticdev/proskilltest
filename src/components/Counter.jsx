import React, { useState, useEffect } from "react";

const Counter = () => {
  const [textDuration, settextDuration] = useState(60);
  const [duration, setDuration] = useState(2);
  let interval = 60000;

  let timer = setInterval(() => {
    setDuration(duration - 1);
    if (duration == 0) {
      clearInterval(timer);
    }
  }, interval);

  return (
    <div className="grid mb-3">
      <div className=" w-40 text-right justify-self-end  px-5">
        <div className="grid  grid-cols-[70%,30%]">
          <span className=" text-white text-center bg-black w-full">
            Duration:
          </span>
          <span className="w-full text-center bg-slate-200 text-xl">
            {textDuration}
          </span>
        </div>
        <div className="grid bg-slate-600  grid-cols-[60%,40%]">
          <span className="bg-red-200 text-center">{duration}</span>
          <span className="px-3 text-white">left</span>
        </div>
        {/* <button onClick={startTimer}>Start</button> */}
      </div>
    </div>
  );
};

export default Counter;
