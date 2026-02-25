import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/mainPage/Hero";
import Booking from "./components/BookingPage/BookingHero";
import NavBar from "./components/Navbar";
import LoginPage from "./components/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        {/* <Route path="/" element={<Hero />} />
        <Route path="/booking" element={<Booking />} /> */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
