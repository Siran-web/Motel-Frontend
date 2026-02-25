import React, { useState } from 'react';
import ApiService from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { name, email, password, phoneNumber } = formData;
        if (!name || !email || !password || !phoneNumber) {
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setErrorMessage('Please fill all the fields.');
            setTimeout(() => setErrorMessage(''), 5000);
            return;
        }
        try {
            // Call the register method from ApiService
            const response = await ApiService.registerUser(formData);

            // Check if the response is successful
            if (response.statusCode === 200) {
                // Clear the form fields after successful registration
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    phoneNumber: ''
                });
                setSuccessMessage('User registered successfully');
                setTimeout(() => {
                    setSuccessMessage('');
                    navigate('/');
                }, 3000);
            }
        }
         catch (error) {
            setErrorMessage(error.response?.data?.message || error.message);
            setTimeout(() => setErrorMessage(''), 5000);
        }
    };

    return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
      
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Sign Up
      </h2>

      {errorMessage && (
        <p className="text-red-500 text-sm text-center mb-3">
          {errorMessage}
        </p>
      )}

      {successMessage && (
        <p className="text-green-600 text-sm text-center mb-3">
          {successMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
        >
          Register
        </button>
      </form>

      <p className="text-center text-gray-600 mt-6">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-blue-600 font-medium hover:underline"
        >
          Login
        </a>
      </p>
    </div>
  </div>
);
}

export default RegisterPage;
