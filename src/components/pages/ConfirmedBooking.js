
const ConfirmedBooking = () => {
  return (
    <div className="relative text-center">
      <img
        src={require("../../assets/restaurant.jpg")}
        alt="greek salad"
        className="rounded w-full h-96"
      />
      <div className="bg-white p-12 border-green absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl font-semibold mb-4">Booking Confirmed</h1>
        <p>Your booking has been confirmed. Thank you for choosing us!</p>
      </div>
    </div>
  );
}

export default ConfirmedBooking
