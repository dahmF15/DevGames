import React from "react";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import Buttons from "../components/Buttons";
import ButtonGradient from "../components/ButtonGradient";
import Slider from "../components/Slider";
import Genres from "../components/Genres";
import PopularGamesPC from "../components/PopularGamesPC";
import PopularGamesPS5 from "../components/PopularGamesPS5";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-full">
      {/* Sidebar */}
      <div className="col-span-2">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="col-span-10 h-full w-full p-8 flex flex-col">
        <div className="flex items-center justify-between">
          {/* Left-Aligned Content */}
          <Searchbar />

          {/* Right-Aligned Content */}
          <div className="relative flex space-x-4 items-center">
            <ButtonGradient />
            <Buttons href={"/Login"} className="text-white hover:text-pink-200">
              Login
            </Buttons>
            <Buttons
              href={"/Signup"}
              className="text-white hover:text-pink-200"
            >
              Sign up
            </Buttons>
          </div>
        </div>

        {/* Swiper */}
        <div>
          <Slider />
        </div>
        {/* Genres */}
        <div>
          <Genres/>
        </div>
        {/* Popular games PC*/}
        <div>
          <PopularGamesPC/>
        </div>
        {/* Popular games PS5 */}
        <div>
          <PopularGamesPS5/>
        </div>
      </main>
    </div>
  );
}
