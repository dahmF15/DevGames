import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Images from "../components/Images";

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGamesDetails = async () => {
      try {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const API_URL = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${API_URL}/games/${id}`, {
          params: { key: API_KEY },
        });
        setGame(res.data);
      } catch (err) {
        setError("Something went wrong, please try again");
      } finally {
        setLoading(false);
      }
    };
    fetchGamesDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
      {/* Hero Section */}
      <div className="relative mb-12">
        <div className="absolute inset-0">
          <Images
            src={game.background_image}
            alt={game.name}
            className="w-full h-[280px] object-cover filter brightness-50 rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl"></div>
        </div>
        <div className="relative pt-40 pb-8 px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{game.name}</h1>
          <div className="flex flex-wrap gap-2">
            {game.genres?.map((genre) => (
              <span
                key={genre.id}
                className="px-4 py-1 bg-pink-600/60 text-white rounded-full text-sm backdrop-blur-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* About Section */}
          <div className="bg-purple-200 rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {game.description_raw}
            </p>
          </div>

          {/* Screenshots */}
          {game.screenshots && (
            <div className="bg-purple-200 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Screenshots</h2>
              <div className="grid grid-cols-2 gap-4">
                {game.screenshots.slice(0, 4).map((screenshot) => (
                  <Images
                    key={screenshot.id}
                    src={screenshot.image}
                    alt={`${game.name} screenshot`}
                    className="w-full h-48 object-cover rounded-xl hover:opacity-90 transition-opacity"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Game Info Card */}
          <div className="bg-purple-200 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Game Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Release Date</p>
                <p className="font-medium text-gray-800">
                  {new Date(game.released).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Rating</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-pink-600">{game.rating}</span>
                  <span className="text-sm text-gray-500">/ 5</span>
                  <span className="text-sm text-gray-500">({game.ratings_count} reviews)</span>
                </div>
              </div>
              {game.platforms && (
                <div>
                  <p className="text-sm text-gray-500">Platforms</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {game.platforms.map((platform) => (
                      <span
                        key={platform.platform.id}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {platform.platform.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Additional Info */}
          {(game.developers?.length > 0 || game.publishers?.length > 0) && (
            <div className="bg-purple-200 rounded-2xl p-6 shadow-lg">
              {game.developers?.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Developer</p>
                  <p className="font-medium text-gray-800">
                    {game.developers.map(dev => dev.name).join(', ')}
                  </p>
                </div>
              )}
              {game.publishers?.length > 0 && (
                <div>
                  <p className="text-sm text-gray-500">Publisher</p>
                  <p className="font-medium text-gray-800">
                    {game.publishers.map(pub => pub.name).join(', ')}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}