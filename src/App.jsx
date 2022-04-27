import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Form from "./components/Form";
import QuestionCard from "./components/QuestionCard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Test from "./pages/Test";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App min-h-screen  relative">
      <BrowserRouter>
        <Header />
        <main className="bg-[url('/icon_image/abstract-city.png')]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
