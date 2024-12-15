import React from "react";
import DragonBall from "../assets/DragonBallSparkingZero.jpg";
import Ghost from "../assets/GhostOfTsushima.jpg";
import Spiderman from "../assets/Spiderman.avif";
import Images from "./Images";

export default function Cards() {
  const cards = [
    { id: 1, src: DragonBall, text: "Anime" },
    { id: 2, src: Ghost, text: "Action" },
    { id: 3, src: Spiderman, text: "Adventure" },
    { id: 4, src: DragonBall, text: "Co-op" },
    { id: 5, src: Ghost, text: "Sport" },
    { id: 6, src: Spiderman, text: "Strategy" },
    { id: 7, src: DragonBall, text: "Casual" },
    { id: 8, src: Ghost, text: "Survivle" },
  ];
  return (
    <>
      <div className="grid grid-cols-8 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-[15rem] h-[30rem] rounded-3xl overflow-hidden"
          >
            <Images
              src={card.src}
              className={
                "opacity-65 rounded-3xl w-[15rem] h-[30rem] object-cover hover:bg-gray-200 hover:opacity-100 hover:scale-105  col-span-2"
              }
            />

            {/* Text Overlay */}
            <div className="absolute bottom-48 left-0 w-full bg-black bg-opacity-50 text-white p-4 text-center font-bold text-3xl">
              {card.text}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
