import "./App.css";
import LiquidEther from "./LiquidEther";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      &nbsp;
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>

      <div className="absolute inset-0 -z-10 w-full h-full">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
        />
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
