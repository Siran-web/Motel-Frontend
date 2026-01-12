import Booking from "./FromBooking";
import heroImage from "../../assests/image.png"

function BookingHero() {
  return (

    <section
    className="h-screen bg-cover bg-center relative flex items-center justify-center"
    style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroImage})`,
  }}
>
     <div className="relative text-white px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-light leading-tight">
          Stay. Dine.
          <br />
          <span className="font-semibold">Experience Luxury.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-200">
          Discover unparalleled comfort and elegance at our luxury hotel.
          Where every moment becomes a cherished memory.
        </p>
      </div>

      {/* Right side - Booking Form */}
      <div className=" shadow-lg rounded-lg">
        <Booking />
      </div>

    </section>
  );
}

export default BookingHero;
