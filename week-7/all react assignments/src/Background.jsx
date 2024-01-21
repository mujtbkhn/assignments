import { useState } from "react";

export const Background = () => {
  const [color, setColor] = useState("white");

  const handleBackgroundColor = (colorClass) => {
    setColor(colorClass);
  };
  return (
    <div className={`text-black w-screen h-screen ${color}`}>
      <div className="absolute bottom-10 left-80 bg-white rounded-md px-8 flex justify-center shadow-xl">
        <button
          className="px-5 pt-2 m-3 rounded-xl bg-red-700 "
          onClick={() => handleBackgroundColor("bg-red-700")}
        >
          Red
        </button>
        <button
          className="px-5 pt-2 m-3 rounded-xl bg-yellow-300 "
          onClick={() => handleBackgroundColor("bg-yellow-300")}
        >
          Yellow
        </button>
        <button
          className="px-5 pt-2 m-3 rounded-xl bg-black text-white "
          onClick={() => handleBackgroundColor("bg-black")}
        >
          Black
        </button>
        <button
          className="px-5 pt-2 m-3 rounded-xl bg-purple-700 "
          onClick={() => handleBackgroundColor("bg-purple-700")}
        >
          Purple
        </button>
        <button
          className="px-5 pt-2 m-3 rounded-xl bg-green-700 "
          onClick={() => handleBackgroundColor("bg-green-700")}
        >
          Green
        </button>
        <button
          className="px-5 pt-2 m-3 rounded-xl bg-blue-700 "
          onClick={() => handleBackgroundColor("bg-blue-700")}
        >
          Blue
        </button>
        <button
          className="px-5 pt-2 m-3 rounded-xl bg-red-400 "
          onClick={() => handleBackgroundColor("bg-red-400")}
        >
          Default
        </button>
      </div>
    </div>
  );
};
