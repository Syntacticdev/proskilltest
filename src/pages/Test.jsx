import React from "react";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div className="bg-[url('/icon_image/abstract-city.png')] min-h-screen">
      <div>
        <h1 className="text-3xl mb-3 px-4 py-2 text-white rounded-sm font-bold">
          Active Test
        </h1>
      </div>

      <div>
        <div className="course__card my-3 grid h-32 p-4 rounded-md bg-red-400  overflow-hidden grid-cols-[60%,40%]">
          <div>
            <div>
              <h1 className="course__code text-white font-semibold text-2xl">
                MTH214
              </h1>
              <h1 className="course_name text-yellow-200">Statistics</h1>
            </div>
            <div className="mt-4">
              <span className="tag text-white bg-slate-400  px-4 rounded-sm">
                CSC
              </span>
            </div>
          </div>
          <img
            src="/icon_image/cute-pencil-waving-hand.png"
            alt="simple__image"
            className="w-[100px] h-[100px] "
          />
        </div>
        <div className="course__card my-3 grid h-32 p-4 rounded-md bg-blue-400 object-contain overflow-hidden grid-cols-[60%,40%]">
          <div>
            <div>
              <h1 className="course__code text-white font-semibold text-2xl">
                MTH212
              </h1>
              <h1 className="course_name text-yellow-200">
                Introduction to Physics Maths
              </h1>
            </div>
            <div className="mt-4">
              <span className="tag text-white bg-slate-400  px-4 rounded-sm">
                CSC
              </span>
            </div>
          </div>
          <img
            src="/icon_image/cute-pencil-waving-hand.png"
            alt="simple__image"
            className="w-full h-4/5 "
          />
        </div>
        <div className="course__card my-3 grid h-32 p-4 rounded-md bg-[url('icon_image/3d-rendered-podium.png')] bg-cover bg-no-repeat overflow-hidden grid-cols-[60%,40%]">
          <div>
            <div>
              <h1 className="course__code text-white font-semibold text-2xl">
                MTH212
              </h1>
              <h1 className="course_name text-yellow-200">
                Introduction to Physics Maths
              </h1>
            </div>
            <div className="mt-4">
              <span className="tag text-white bg-slate-400  px-4 rounded-sm">
                CSC
              </span>
            </div>
          </div>
          <img
            src="/icon_image/cute-pencil-waving-hand.png"
            alt="simple__image"
            className="w-full h-4/5 "
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
