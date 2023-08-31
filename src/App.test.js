import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/pages/reservation/BookingForm";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders "Make a Reservation" text', () => {
  render(<BookingForm />);
  const makeReservationText = screen.getByText(/Make a Reservation/i);
  expect(makeReservationText).toBeInTheDocument();
});
