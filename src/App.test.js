// import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import App from "./App";
// import ReservationPage from "./components/pages/reservation/ReservationPage";
// import BookingForm from "./components/pages/reservation/BookingForm";
// import { fetchAPI, submitAPI } from "./BookingApi";


// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders "Make a Reservation" text', () => {
//   render(<BookingForm />);
//   const makeReservationText = screen.getByText(/Make a Reservation/i);
//   expect(makeReservationText).toBeInTheDocument();
// });


// jest.mock("./BookingApi", () => ({
//   fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00"]),
//   submitAPI: jest.fn(() => true),
// }));

// test("it updates available times after selecting a date", async () => {
//   render(
//     <MemoryRouter>
//       <ReservationPage availableTimes={["17:00", "18:00", "19:00"]} />
//     </MemoryRouter>
//   );

//   const dateInput = screen.getByLabelText("Choose Date");
//   fireEvent.change(dateInput, { target: { value: "2023-08-01" } });

//   await waitFor(() => {
//     const updatedTime = screen.getByText("17:00");
//     expect(updatedTime).toBeInTheDocument();
//   });
// });

// test("it submits the form and navigates to confirmation on successful submission", async () => {
//   render(
//     <MemoryRouter>
//       <ReservationPage availableTimes={["17:00", "18:00", "19:00"]} />
//     </MemoryRouter>
//   );

//   const dateInput = screen.getByLabelText("Choose Date");
//   const timeInput = screen.getByLabelText("Choose Time");
//   const guestsInput = screen.getByLabelText("Number of Guests");
//   const occasionInput = screen.getByLabelText("Occasion");

//   fireEvent.change(dateInput, { target: { value: "2023-08-01" } });
//   fireEvent.change(timeInput, { target: { value: "17:00" } });
//   fireEvent.change(guestsInput, { target: { value: "4" } });
//   fireEvent.change(occasionInput, { target: { value: "Birthday" } });

//   const submitButton = screen.getByText("Confirm Reservation");
//   fireEvent.click(submitButton);

//   await waitFor(() => {
//     const confirmationMessage = screen.getByText("Booking has been confirmed.");
//     expect(confirmationMessage).toBeInTheDocument();
//   });
// });
