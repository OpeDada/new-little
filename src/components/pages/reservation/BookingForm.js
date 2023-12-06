import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormFields, FormFieldsSecondSection } from "./FormFields";

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
      specialRequest: "",
      seatingPreference: "",
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

    const handleReserveTableClick = () => {
      // Scroll to the second section
      document.getElementById("secondSection").scrollIntoView({
        behavior: "smooth",
      });
    };

  return (
    <div className="flex justify-center text-center bg-hero h-128">
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-4">Make a Reservation</h2>
        <form onSubmit={formik.handleSubmit} className="">
          <div className="">
            <FormFields
              formik={formik}
              availableTimes={availableTimes}
              updateTimes={updateTimes}
              handleReserveTableClick={handleReserveTableClick}
            />
          </div>
          <div className="">
            <FormFieldsSecondSection formik={formik} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
