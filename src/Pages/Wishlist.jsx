import React from "react";
import Sidebar from "../components/Sidebar";

export default function Wishlist() {
  return (
    <div div className="grid grid-cols-12 h-full">
      {/* Sidebar */}
      <div className="col-span-2">
        <Sidebar />
      </div>
    </div>
  );
}
