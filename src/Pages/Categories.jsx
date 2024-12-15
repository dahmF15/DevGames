import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
// import Games from "../components/Games";
import { FetchGames } from "../components/FetchGames";
import Images from "../components/Images";
import { Link, Links } from "react-router-dom";

export default function Categories() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadingGames = async () => {
      setLoading(true);
      try {
        const data = await FetchGames();
        setGames(data.results);
      } catch (err) {
        setError("Somthing went wrong, please try again");
      } finally {
        setLoading(false);
      }
    };
    loadingGames();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-4xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 h-full">
      {/* Sidebar */}
      <div className="col-span-2">
        <Sidebar />
      </div>
      <main className="col-span-10 min-h-screen p-8">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-200">
            Discover Games
          </h1>
          <p className="text-pink-400 mt-2">
            Explore our collection of amazing games
          </p>
        </header>

        {/* Games Grid */}
        <div className="container mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <li
                key={game.id}
                className="transform transition-all duration-300 hover:-translate-y-2"
              >
                <Link
                  to={`/game/${game.id}`}
                  className="block bg-purple-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <Images
                      src={game.background_image}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      alt={game.name}
                    />
                    {/* Rating Badge */}
                    {game.rating && (
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        ⭐ {game.rating.toFixed(1)}
                      </div>
                    )}
                  </div>

                  {/* Game Info */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                      {game.name}
                    </h2>

                    {/* Additional Game Info */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {game.genres?.slice(0, 3).map((genre) => (
                        <span
                          key={genre.id}
                          className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full"
                        >
                          {genre.name}
                        </span>
                      ))}
                    </div>

                    {/* Release Date */}
                    <div className="text-sm text-gray-600">
                      {new Date(game.released).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex place-items-end rounded-3xl">
                    <div className="p-6 text-white">
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-pink-600 border-t-transparent"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-red-600 text-center">
              <span className="block text-4xl mb-2">😕</span>
              <p>{error}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
