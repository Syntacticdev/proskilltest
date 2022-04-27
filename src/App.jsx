import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Test from "./pages/Test";
import Footer from "./components/Footer";
import Navigations from "./components/Navigations";
import { MdMenu, MdCancel } from "react-icons/md";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App min-h-screen  relative">
      <Header />
      <main className="bg-[url('/icon_image/abstract-city.png')] pt-[70px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
      {toggle && <Navigations setToggle={setToggle} />}
      <button
        onClick={() => setToggle(!toggle)}
        className="fixed bottom-5 outline-none bg-blue-400 rounded-full p-3 right-5 z-40"
      >
        {!toggle ? (
          <MdMenu className="fill-white w-[40px] h-[40px]" />
        ) : (
          <MdCancel className="fill-white w-[40px] h-[40px]" />
        )}
      </button>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
