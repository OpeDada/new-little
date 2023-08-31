import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingForm = ({ availableTimes, updateTimes }) => {
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
    if (name === "date") {
      updateTimes(value); // Call the updateTimes function when date changes
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g. send the data to the server
    console.log("Form submitted:", formData);
  };

  return (
    <div className="grid gap-4 max-w-xs py-8 px-4">
      <h2 className="text-xl font-semibold mb-4">Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block font-medium">
            Choose Date
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
            Choose Time
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
            required
          >
            <option value="">Select a Time</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="guests" className="block font-medium">
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            placeholder="1"
            min="1"
            max="10"
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
        <Link
          to="/confirmation"
          className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded"
        >
          <button type="submit">Make a Reservation</button>
        </Link>
      </form>
    </div>
  );
};

export default BookingForm;
