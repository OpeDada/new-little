import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "date") {
      updateTimes(value); // Call the updateTimes function when date changes
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if the selected time is in the available times list
    if (!availableTimes.includes(formData.time)) {
      console.log("The selected time is not available.");
      return;
    }

    // Handle form submission using the submitAPI function
    try {
      const submitted = await submitForm(formData);

      if (submitted) {
        console.log("Form submitted:", formData);
        navigate("/confirmation");
      } else {
        console.log("Form submission failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
        {/* <Link
          to="#"
          className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded"
        > */}
        <button
          type="submit"
          className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded"
        >
          Confirm Reservation
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default BookingForm;
