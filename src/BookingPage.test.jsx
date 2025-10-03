import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "./BookingPage";

describe("BookingPage", () => {
  test("initially shows 'No bookings yet'", () => {
    render(<BookingPage />);
    expect(screen.getByText(/No bookings yet/i)).toBeInTheDocument();
  });

  test("adds a booking when the form is submitted", () => {
    render(<BookingPage />);

    const nameInput = screen.getByLabelText(/Your Name/i);
    const dateInput = screen.getByLabelText(/Date/i);
    const timeSelect = screen.getByLabelText(/Time/i);
    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    const submitButton = screen.getByRole("button", { name: /Book Now/i });

    fireEvent.change(nameInput, { target: { value: "Alice" } });
    fireEvent.change(dateInput, { target: { value: "2025-10-05" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: 3 } });
    fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

    fireEvent.click(submitButton);

    expect(screen.getByText(/Alice – 2025-10-05 at 18:00/i)).toBeInTheDocument();
    expect(screen.getByText(/\(3 guests, Anniversary\)/i)).toBeInTheDocument();
  });
});
