import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .typeError("Guests must be a number")
        .integer("Guests must be an integer")
        .min(1, "Guests must be at least 1")
        .max(10, "Guests cannot be more than 10")
        .required("Guests is required"),
      occasion: Yup.string().required("Occasion is required"),
    }),
    onSubmit: async (values) => {
      const submitted = await submitForm(values);

      if (submitted) {
        console.log("Form submitted:", values);
        navigate("/confirmation");
      } else {
        console.log("Form submission failed.");
      }
    },
  });

  const handleDateChange = (date) => {
    formik.setFieldValue("date", date);
    updateTimes(date);
  };

  return (
    <div className="grid gap-4 max-w-xs py-8 px-4">
      <h2 className="text-xl font-semibold mb-4">Make a Reservation</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="date" className="block font-medium">
            Choose Date
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
            <div className="text-red-500">{formik.errors.date}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block font-medium">
            Choose Time
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
            <div className="text-red-500">{formik.errors.time}</div>
          )}
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
            {...formik.getFieldProps("guests")}
            className="border rounded p-2 w-full"
          />
          {formik.touched.guests && formik.errors.guests && (
            <div className="text-red-500">{formik.errors.guests}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="occasion" className="block font-medium">
            Occasion
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
            <div className="text-red-500">{formik.errors.occasion}</div>
          )}
        </div>
        <button
          type="submit"
          className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded"
          disabled={!formik.isValid}
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
