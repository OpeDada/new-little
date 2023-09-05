import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../../../BookingApi";

// Reducer function
const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return the same available times regardless of the date
      return action.times
      // return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

const ReservationPage = () => {
  const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

  // Update available times function
 const updateTimes = async (date) => {
   const times = await fetchAPI(date);
   dispatch({ type: "UPDATE_TIMES", times });
 };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Reservation Page</h1>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
};

export default ReservationPage;
