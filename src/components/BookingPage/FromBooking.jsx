// import React, { useState } from "react";
// import { createCustomer, createBooking } from "../../api/BookingApi";

// export default function BookingForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [roomType, setRoomType] = useState("1"); // Default to a valid Room ID
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [phone, setPhone] = useState("");
//   const [requirements, setRequirements] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const customer = await createCustomer({ name, email, phone });
      
//       // Ensure customer.id exists based on your CustomerDTO response
//       const customerId = customer.id || customer.customerId; 

//       await createBooking(
//         { checkInDate: checkIn, checkOutDate: checkOut, totalPrice: 0 },
//         customerId,
//         roomType // This is being used as roomId path variable
//       );

//       alert("Booking successful!");
//       setName(""); setEmail(""); setPhone(""); setCheckIn(""); 
//       setCheckOut(""); setRoomType("1"); setRequirements("");
//     } catch (error) {
//       console.error(error);
//       alert("Booking failed!");
//     }
//   };

//   return (
//     // Wrap everything in a FORM tag to enable onSubmit
//     <form onSubmit={handleSubmit} className="bg-black/50 text-white p-6 w-full max-w-md rounded">
//       <h3 className="text-lg font-semibold mb-4">Hotel Booking Form</h3>

//       <input
//         type="text"
//         placeholder="Name"
//         value={name} // Added value binding
//         onChange={(e) => setName(e.target.value)}
//         className="w-full px-3 py-2 mb-3 text-black text-sm outline-none"
//         required
//       />

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full px-3 py-2 text-black text-sm mb-3 outline-none"
//         required
//       />

//       <input
//         type="tel" // changed to tel
//         placeholder="Phone"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         className="w-full px-3 py-2 text-black text-sm mb-3 outline-none"
//       />

//       <select
//         value={roomType}
//         onChange={(e) => setRoomType(e.target.value)}
//         className="w-full px-3 py-2 text-black text-sm mb-3 outline-none"
//       >
//         {/* These values should be the numeric IDs of your rooms in the DB */}
//         <option value="1">Standard</option>
//         <option value="2">Deluxe</option>
//         <option value="3">Super Deluxe</option>
//         <option value="4">Premium</option>
//       </select>

//       <div className="grid grid-cols-2 gap-3 mb-3">
//         <input
//           type="date"
//           value={checkIn}
//           onChange={(e) => setCheckIn(e.target.value)}
//           className="px-3 py-2 text-black text-sm outline-none"
//         />
//         <input
//           type="date"
//           value={checkOut}
//           onChange={(e) => setCheckOut(e.target.value)}
//           className="px-3 py-2 text-black text-sm outline-none"
//         />
//       </div>

//       <textarea
//         rows={3}
//         placeholder="Any extra requirements"
//         value={requirements}
//         onChange={(e) => setRequirements(e.target.value)} // Added missing onChange
//         className="w-full px-3 py-2 text-black text-sm mb-3 outline-none resize-none"
//       />

//       <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 transition py-2 text-sm font-semibold">
//         BOOK NOW
//       </button>
//     </form>
//   );
// }