export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-blue-900">
            Siran's Motel
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-900 cursor-pointer">Home</li>
          <li className="hover:text-blue-900 cursor-pointer">Rooms</li>
          <li className="hover:text-blue-900 cursor-pointer">Dining</li>
          <li className="hover:text-blue-900 cursor-pointer">Amenities</li>
          <li className="hover:text-blue-900 cursor-pointer">Gallery</li>
          <li className="hover:text-blue-900 cursor-pointer">Contact</li>
        </ul>

        <div className="flex items-center gap-4">
          <span className="hidden md:block text-gray-700">
            +12 34567890
          </span>
          <button className="border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
            QR Menu Demo
          </button>
        </div>

      </div>
    </nav>
  );
}
