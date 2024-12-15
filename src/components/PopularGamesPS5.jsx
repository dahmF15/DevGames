import React from "react";
import Images from "./Images";
import DragonBall from "../assets/DragonBallSparkingZero.jpg";
import Ghost from "../assets/GhostOfTsushima.jpg";
import Spiderman from "../assets/Spiderman.avif";

export default function PopularGamesPS5() {
  const cards = [
    { id: 1, src: DragonBall },
    { id: 2, src: Ghost },
    { id: 3, src: Spiderman },
    { id: 4, src: DragonBall },
  ];
  return (
    <>
      <h1 className="text-3xl font-bold mt-32">
        Popular Games <span className="text-pink-600">PS5</span>
      </h1>
      <div className="flex mt-10 w-full flex-wrap justify-center gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-[25rem] h-[30rem] rounded-3xl mr-20 "
          >
            <Images
              src={card.src}
              className={
                "absolute opacity-65 rounded-3xl w-full h-full object-cover hover:bg-gray-200 hover:opacity-100 hover:scale-105 left-0"
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}
