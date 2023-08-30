import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g. send the data to the server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="py-8 px-4">
      <h2 className="text-xl font-semibold mb-4">Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block font-medium">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="guests" className="block font-medium">
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="occasion" className="block font-medium">
            Occasion
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          >
            <option value="">Select an Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Reservation
        </button>
      </form>
    </div>
  );
};

const ReservationPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Reservation Page</h1>
      <BookingForm />
    </div>
  );
};

export default ReservationPage;
