import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";

// Reducer function
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return the same available times regardless of the date
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

const ReservationPage = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  // Update available times function
  const updateTimes = (date) => {
    dispatch({ type: "UPDATE_TIMES", date });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Reservation Page</h1>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
};

export default ReservationPage;
