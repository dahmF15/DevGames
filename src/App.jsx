import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishlist from "./Pages/Wishlist";
import Categories from "./Pages/Categories";
import Friends from "./Pages/Friends";
import Support from "./Pages/Support";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import GameDetails from "./Pages/GameDetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
