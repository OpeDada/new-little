import React from "react";

const FormFields = ({
  formik,
  availableTimes,
  updateTimes,
  handleReserveTableClick,
}) => {
  const handleDateChange = (date) => {
    formik.setFieldValue("date", date);
    updateTimes(date);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-8 mb-4">
        {/* Fields for the first section */}
        <label className="block font-medium">Seating Preference</label>
        <div className="flex gap-4 col-span-2 mb-4">
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                id="indoorSeating"
                name="seatingPreference"
                value="indoor"
                {...formik.getFieldProps("seatingPreference")}
                className="mr-2"
              />
              Indoor Seating
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="radio"
                id="outdoorSeating"
                name="seatingPreference"
                value="outdoor"
                {...formik.getFieldProps("seatingPreference")}
                className="mr-2"
              />
              Outdoor Seating
            </label>
          </div>
          {formik.touched.seatingPreference &&
            formik.errors.seatingPreference && (
              <div className="text-red">{formik.errors.seatingPreference}</div>
            )}
        </div>
        {/* <div className="mb-4"> */}
        <div className="col-span-1">
          <label htmlFor="date" className="block font-medium">
            Choose Date<span className="text-red">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            {...formik.getFieldProps("date")}
            onChange={(e) => handleDateChange(e.target.value)}
            className="border rounded p-2 w-full"
          />
          {formik.touched.date && formik.errors.date && (
            <div className="text-red">{formik.errors.date}</div>
          )}
        </div>

        {/* </div> */}
        {/* <div className="mb-4"> */}
        <div className="col-span-1">
          <label htmlFor="guests" className="block font-medium">
            Number of Guests<span className="text-red">*</span>
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            placeholder="1"
            min="1"
            max="10"
            {...formik.getFieldProps("guests")}
            className="border rounded p-2 w-full"
          />
          {formik.touched.guests && formik.errors.guests && (
            <div className="text-red">{formik.errors.guests}</div>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="time" className="block font-medium">
            Choose Time<span className="text-red">*</span>
          </label>
          <select
            id="time"
            name="time"
            {...formik.getFieldProps("time")}
            className="border rounded p-2 w-full"
          >
            <option value="">Select a Time</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          {formik.touched.time && formik.errors.time && (
            <div className="text-red">{formik.errors.time}</div>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="occasion" className="block font-medium">
            Occasion<span className="text-red">*</span>
          </label>
          <select
            id="occasion"
            name="occasion"
            {...formik.getFieldProps("occasion")}
            className="border rounded p-2 w-full"
          >
            <option value="">Select an Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {formik.touched.occasion && formik.errors.occasion && (
            <div className="text-red">{formik.errors.occasion}</div>
          )}
        </div>
      </div>
      <div className="text-center mb-8 mt-8">
        <button
          type="button"
          onClick={handleReserveTableClick}
          className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded"
        >
          Reserve a Table
        </button>
      </div>
      <br />

      {/* Second section */}
      <div id="secondSection" className="grid grid-cols-2 gap-8">
        {/* Fields for the second section */}
        {/* ... */}
        {/* <div className="mb-4"> */}
        <div className="col-span-1 mb-4">
          <label htmlFor="firstName" className="block font-medium">
            First Name<span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...formik.getFieldProps("firstName")}
            className="border rounded p-2 w-full"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red">{formik.errors.firstName}</div>
          )}
        </div>

        <div className="col-span-1">
          <label htmlFor="lastName" className="block font-medium">
            Last Name<span className="text-red">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            {...formik.getFieldProps("lastName")}
            className="border rounded p-2 w-full"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red">{formik.errors.lastName}</div>
          )}
        </div>
        {/* </div> */}
        {/* <div className="mb-4"> */}
        <div className="col-span-1">
          <label htmlFor="phone" className="block font-medium">
            Phone<span className="text-red">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            {...formik.getFieldProps("phone")}
            className="border rounded p-2 w-full"
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red">{formik.errors.phone}</div>
          )}
        </div>
        <div className="col-span-1">
          <label htmlFor="email" className="block font-medium">
            Email<span className="text-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
            className="border rounded p-2 w-full"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red">{formik.errors.email}</div>
          )}
        </div>

        <div className="col-span-2">
          <label htmlFor="specialRequest" className="block font-medium">
            Special Request
          </label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            {...formik.getFieldProps("specialRequest")}
            className="border rounded p-2 w-full"
          />
          {formik.touched.specialRequest && formik.errors.specialRequest && (
            <div className="text-red">{formik.errors.specialRequest}</div>
          )}
        </div>
        {/* Display user input from the first section */}
        <div className="col-span-2 mb-4 text-left">
          <h3 className="text-lg font-semibold mb-2">Reservation Details</h3>
          <p>Date: {formik.values.date}</p>
          <p>Time: {formik.values.time}</p>
          <p>Occasion: {formik.values.occasion}</p>
          <p>No of Guests: {formik.values.guests}</p>
          <p>Seating Preference: {formik.values.seatingPreference}</p>
          {/* ... Display other values */}
        </div>

        <div className="mb-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="confirmSelection"
              {...formik.getFieldProps("confirmSelection")}
              className="mr-2"
            />
            Confirm Selection<span className="text-red">*</span>
          </label>
          {formik.touched.confirmSelection &&
            formik.errors.confirmSelection && (
              <div className="text-red w-[16rem]">
                {formik.errors.confirmSelection}
              </div>
            )}
        </div>
      </div>
    </>
  );

  // return (
  //   <>
  // <div className="mb-4">
  //   <label htmlFor="firstName" className="block font-medium">
  //     First Name<span className="text-red">*</span>
  //   </label>
  //   <input
  //     type="text"
  //     id="firstName"
  //     name="firstName"
  //     {...formik.getFieldProps("firstName")}
  //     className="border rounded p-2 w-full"
  //   />
  //   {formik.touched.firstName && formik.errors.firstName && (
  //     <div className="text-red">{formik.errors.firstName}</div>
  //   )}
  // </div>
  // <div className="mb-4">
  //   <label htmlFor="lastName" className="block font-medium">
  //     Last Name<span className="text-red">*</span>
  //   </label>
  //   <input
  //     type="text"
  //     id="lastName"
  //     name="lastName"
  //     {...formik.getFieldProps("lastName")}
  //     className="border rounded p-2 w-full"
  //   />
  //   {formik.touched.lastName && formik.errors.lastName && (
  //     <div className="text-red">{formik.errors.lastName}</div>
  //   )}
  // </div>
  // <div className="mb-4">
  //   <label htmlFor="date" className="block font-medium">
  //     Choose Date<span className="text-red">*</span>
  //   </label>
  //   <input
  //     type="date"
  //     id="date"
  //     name="date"
  //     {...formik.getFieldProps("date")}
  //     onChange={(e) => handleDateChange(e.target.value)}
  //     className="border rounded p-2 w-full"
  //   />
  //   {formik.touched.date && formik.errors.date && (
  //     <div className="text-red">{formik.errors.date}</div>
  //   )}
  // </div>
  // <div className="mb-4">
  //   <label htmlFor="time" className="block font-medium">
  //     Choose Time<span className="text-red">*</span>
  //   </label>
  //   <select
  //     id="time"
  //     name="time"
  //     {...formik.getFieldProps("time")}
  //     className="border rounded p-2 w-full"
  //   >
  //     <option value="">Select a Time</option>
  //     {availableTimes.map((time, index) => (
  //       <option key={index} value={time}>
  //         {time}
  //       </option>
  //     ))}
  //   </select>
  //   {formik.touched.time && formik.errors.time && (
  //     <div className="text-red">{formik.errors.time}</div>
  //   )}
  // </div>
  // <div className="mb-4">
  //   <label htmlFor="guests" className="block font-medium">
  //     Number of Guests<span className="text-red">*</span>
  //   </label>
  //   <input
  //     type="number"
  //     id="guests"
  //     name="guests"
  //     placeholder="1"
  //     min="1"
  //     max="10"
  //     {...formik.getFieldProps("guests")}
  //     className="border rounded p-2 w-full"
  //   />
  //   {formik.touched.guests && formik.errors.guests && (
  //     <div className="text-red">{formik.errors.guests}</div>
  //   )}
  // </div>
  // <div className="mb-4">
  //   <label htmlFor="occasion" className="block font-medium">
  //     Occasion<span className="text-red">*</span>
  //   </label>
  //   <select
  //     id="occasion"
  //     name="occasion"
  //     {...formik.getFieldProps("occasion")}
  //     className="border rounded p-2 w-full"
  //   >
  //     <option value="">Select an Occasion</option>
  //     <option value="Birthday">Birthday</option>
  //     <option value="Anniversary">Anniversary</option>
  //   </select>
  //   {formik.touched.occasion && formik.errors.occasion && (
  //     <div className="text-red">{formik.errors.occasion}</div>
  //   )}
  // </div>
  // <div className="mb-4">
  //   <label htmlFor="phone" className="block font-medium">
  //     Phone<span className="text-red">*</span>
  //   </label>
  //   <input
  //     type="tel"
  //     id="phone"
  //     name="phone"
  //     {...formik.getFieldProps("phone")}
  //     className="border rounded p-2 w-full"
  //   />
  //   {formik.touched.phone && formik.errors.phone && (
  //     <div className="text-red">{formik.errors.phone}</div>
  //   )}
  // </div>
  // <div className="mb-4">
  //   <label htmlFor="email" className="block font-medium">
  //     Email<span className="text-red">*</span>
  //   </label>
  //   <input
  //     type="email"
  //     id="email"
  //     name="email"
  //     {...formik.getFieldProps("email")}
  //     className="border rounded p-2 w-full"
  //   />
  //   {formik.touched.email && formik.errors.email && (
  //     <div className="text-red">{formik.errors.email}</div>
  //   )}
  // </div>
  // <div className="mb-4">
  //   <label htmlFor="specialRequest" className="block font-medium">
  //     Special Request
  //   </label>
  //   <textarea
  //     id="specialRequest"
  //     name="specialRequest"
  //     {...formik.getFieldProps("specialRequest")}
  //     className="border rounded p-2 w-full"
  //   />
  //   {formik.touched.specialRequest && formik.errors.specialRequest && (
  //     <div className="text-red">{formik.errors.specialRequest}</div>
  //   )}
  // </div>
      // <div className="mb-4">
      //   <label className="flex items-center cursor-pointer">
      //     <input
      //       type="checkbox"
      //       name="confirmSelection"
      //       {...formik.getFieldProps("confirmSelection")}
      //       className="mr-2"
      //     />
      //     Confirm Selection<span className="text-red">*</span>
      //   </label>
      //   {formik.touched.confirmSelection && formik.errors.confirmSelection && (
      //     <div className="text-red w-[16rem]">
      //       {formik.errors.confirmSelection}
      //     </div>
      //   )}
      // </div>
  //   </>
  // );
};

export default FormFields;
