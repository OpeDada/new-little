import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../../../BookingApi";

// Reducer function
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.times;
    // return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

const ReservationPage = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  const [selectedDate, setSelectedDate] = useState(""); // Add a state for the selected date

  useEffect(() => {
    if (selectedDate) {
      const times = fetchAPI(selectedDate); // Fetch available times for the selected date
      dispatch({ type: "UPDATE_TIMES", times }); // Dispatch the times to update availableTimes
    }
  }, [selectedDate]);

  const updateTimes = (date) => {
    setSelectedDate(date); // Update the selectedDate when the date changes
  };


  // Set up the function for submitting the form
  const submitForm = async (formData) => {
    return await submitAPI(formData);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold mb-4">Reservation Page</h1>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm} // Pass the submitForm function as a prop
      />
    </div>
  );
};

export default ReservationPage;
