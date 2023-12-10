
const ConfirmedBooking = () => {
  return (
    <div className="relative text-center text-green">
      <img
        src={require("../../assets/restaurant.jpg")}
        alt="greek salad"
        className="w-full lg:h-[620px]"
      />
      <div className="bg-white lg:p-12 md:p-12 sm:p-4 rounded border-4 border-double absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl font-semibold mb-4">Booking Confirmed</h1>
        <p>Your booking has been confirmed. Thank you for choosing us!</p>
      </div>
    </div>
  );
}

export default ConfirmedBooking
