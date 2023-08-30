import React, { useState } from "react";
import BookingForm from "./BookingForm";

const ReservationPage = () => {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Reservation Page</h1>
      <BookingForm availableTimes={availableTimes} />
    </div>
  );
};

export default ReservationPage;
