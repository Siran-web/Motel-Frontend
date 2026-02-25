import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from '../../../services/ApiService';

const AdminPage = () => {
    const [adminName, setAdminName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdminName = async () => {
            try {
                const response = await ApiService.getUserProfile();
                setAdminName(response.user.name);
            } catch (error) {
                console.error('Error fetching admin details:', error.message);
            }
        };

        fetchAdminName();
    }, []);
    
return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    
    <h1 className="text-3xl font-bold text-gray-800 mb-10">
      Welcome, {adminName}
    </h1>

    {/* Room Card */}
    <div
      onClick={() => navigate('/admin/manage-rooms')}
      className="w-80 bg-white rounded-2xl shadow-lg p-6 cursor-pointer 
                 hover:shadow-xl hover:scale-105 transition duration-300"
    >
      <div className="flex flex-col items-center text-center">
        
        {/* Icon (optional) */}
        <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-4 text-3xl">
          🏨
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Rooms
        </h2>

        <p className="text-gray-600 text-sm">
          Add, update, or remove hotel rooms
        </p>
      </div>
    </div>

  </div>
);
}

export default AdminPage;
