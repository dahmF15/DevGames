import React from "react";
import Images from "./Images";
import db from "../assets/DragonBallSparkingZero.jpg";

export default function Games() {
  return (
    <div className="flex mt-10 w-full flex-wrap justify-center gap-10 cursor-pointer">
      <Images
        src={db}
        className=" opacity-65 rounded-3xl w-[25rem] h-[30rem] object-cover hover:bg-gray-200 hover:opacity-100 hover:scale-105  col-span-2"
      />
      <Images
        src={db}
        className="opacity-65 rounded-3xl w-[25rem] h-[30rem] object-cover hover:bg-gray-200 hover:opacity-100 hover:scale-105  col-span-2"
      />
      <Images
        src={db}
        className="opacity-65 rounded-3xl w-[25rem] h-[30rem] object-cover hover:bg-gray-200 hover:opacity-100 hover:scale-105  col-span-2"
      />
      <Images
        src={db}
        className="opacity-65 rounded-3xl w-[25rem] h-[30rem] object-cover hover:bg-gray-200 hover:opacity-100 hover:scale-105  col-span-2"
      />
    </div>
  );
}
