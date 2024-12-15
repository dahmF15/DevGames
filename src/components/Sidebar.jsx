import React, { useState } from "react";
import { FaHome, FaHeart, FaUserFriends } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Links } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const Links = [
    { Icon: FaHome, path: "/", name: "Home" },
    { Icon: BiCategory, path: "/Categories", name: "Categories" },
    { Icon: FaHeart, path: "/Wishlist", name: "Wishlist" },
    { Icon: FaUserFriends, path: "/Friends", name: "Friends" },
    { Icon: MdContactSupport, path: "/Support", name: "Support" },
  ];
  return (
    <>
      {/* Toggle Button */}
      <div className="md:hidden fixed top-8 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 rounded-full"
        >
          <FiMenu className="text-2xl" />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-[120vh] bg-purple-900 text-white flex flex-col items-center py-8 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-1/6`}
      >
        {/* Sidebar Content */}
        <h2 className="text-3xl font-bold mb-10">
          Dev<span className="text-pink-600">Games</span>
        </h2>
        <ul className="w-full flex flex-col gap-6 px-6">
          {Links.map((link, index) => {
            return (
              <li key={index}>
                <a
                  href={link.path}
                  className="flex items-center gap-4 hover:bg-pink-600 hover:bg-opacity-20 rounded-lg px-4 py-2 transition w-full"
                >
                  <link.Icon className="text-pink-600 text-xl" />
                  <span>{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}