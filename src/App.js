import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/mainPage/Hero";
import Booking from "./components/BookingPage/BookingHero";
import NavBar from "./components/Navbar";
import LoginPage from "./components/auth/Login";
import RegisterPage from "./components/auth/Register";
import AddRoomPage from "./components/admin/room/AddRoom";
import AdminPage from "./components/admin/room/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        {/* <Route path="/" element={<Hero />} />
        <Route path="/booking" element={<Booking />} /> */}
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />  */}
        {/* <Route path="/admin/add-room" element={<AddRoomPage />} /> */}
        <Route path="/admin" element={<AdminPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
