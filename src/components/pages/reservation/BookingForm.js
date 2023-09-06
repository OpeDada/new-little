import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      phone: "",
      email: "",
      confirmSelection: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .typeError("Guests must be a number")
        .integer("Guests must be an integer")
        .min(1, "Guests must be at least 1")
        .max(10, "Guests cannot be more than 10")
        .required("Guests is required"),
      occasion: Yup.string().required("Occasion is required"),
      phone: Yup.string().required("Phone is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      confirmSelection: Yup.boolean().oneOf(
        [true],
        "Please confirm your selection"
      ),
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
    <div className="flex justify-center items-center h-screen">
      <div className="grid gap-4 max-w-md p-8 bg-white shadow rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Make a Reservation</h2>
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="mb-4 ">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4 col-span-2">
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
                <div className="text-red">{formik.errors.confirmSelection}</div>
              )}
          </div>
          <button
            type="submit"
            className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded col-span-2"
            disabled={!formik.isValid}
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
