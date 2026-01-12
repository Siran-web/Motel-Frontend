import BookingBar from "./BookingBar";
import heroImage from "../../assests/image.png"
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage:
          `url(${heroImage})`, 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative text-center text-white px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-light leading-tight">
          Stay. Dine.
          <br />
          <span className="font-semibold">Experience Luxury.</span>
        </h1>

        <p className="mt-6 text-lg text-gray-200">
          Discover unparalleled comfort and elegance at our luxury hotel.
          Where every moment becomes a cherished memory.
        </p>

        <button
          onClick={() => navigate("/booking")}
          className="mt-8 bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Book a Room
        </button>

        <div className="mt-16">
          <BookingBar />
        </div>
      </div>
    </section>
  );
}
