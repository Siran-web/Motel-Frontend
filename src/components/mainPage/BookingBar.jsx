// import { useState } from "react";
// import { checkAvailability } from "../../api/Availability";

// export default function AvailabilityChecker() {
//   const [roomType, setRoomType] = useState("STANDARD"); 
//   const today = new Date().toISOString().split("T")[0];
//   const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split("T")[0];

//   const [checkIn, setCheckIn] = useState(today);
//   const [checkOut, setCheckOut] = useState(tomorrow);

//   const [available, setAvailable] = useState(null);
//   const [error, setError] = useState("");

//   const handleCheck = async () => {
//     if (!checkIn || !checkOut) {
//       setError("Please select check-in and check-out dates");
//       return;
//     }

//     setError("");

//     try {
//       const result = await checkAvailability(roomType, checkIn, checkOut);
//       setAvailable(result);
//     }  catch (err) {
//       console.error("Check availability error:", err);
//       setError("Failed to check availability: " + (err.response?.data?.message || err.message));
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-5xl mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">

//         <div>
//           <label className="text-sm text-gray-500">Check-in Date</label>
//           <input
//             type="date"
//             onChange={(e) => setCheckIn(e.target.value)}
//             className="w-full mt-1 border text-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="text-sm text-gray-500">Check-out Date</label>
//           <input
//             type="date"
//             onChange={(e) => setCheckOut(e.target.value)}
//             className="w-full mt-1 border text-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="text-sm text-gray-500">Room Type</label>
//           <select
//             onChange={(e) => setRoomType(e.target.value)}
//             className="w-full mt-1 border text-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="STANDARD">Standard</option>
//             <option value="DELUXE">Deluxe</option>
//             <option value="SUPER_DELUXE">Super Deluxe</option>
//             <option value="PREMIUM">Premium</option>
//           </select>
//         </div>

//         <button
//           onClick={handleCheck}
//           className="bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
//         >
//           Check Availability
//         </button>
//       </div>

//       {/* Result Message */}
//       {available !== null && (
//         <p className="mt-4 text-center font-semibold">
//           {available ? (
//             <span className="text-green-600">Room Available</span>
//           ) : (
//             <span className="text-red-600">Room Not Available</span>
//           )}
//         </p>
//       )}

//       {error && (
//         <p className="mt-2 text-center text-red-600">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }
