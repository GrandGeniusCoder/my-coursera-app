import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    render(<BookingForm availableTimes={availableTimes} onSubmit={mockOnSubmit} />);
  });

  test("renders all inputs", () => {
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  test("allows typing into inputs", () => {
    const nameInput = screen.getByLabelText(/Your Name/i);
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput.value).toBe("John Doe");

    const guestsInput = screen.getByLabelText(/Number of Guests/i);
    fireEvent.change(guestsInput, { target: { value: 3 } });
    expect(guestsInput.value).toBe("3");
  });

  test("calls onSubmit with form data when submitted", () => {
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: "Jane" } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: "2025-10-05" } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });

    fireEvent.click(screen.getByRole("button", { name: /Book Now/i }));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: "Jane",
      date: "2025-10-05",
      time: "17:00",
      guests: 2,
      occasion: "Birthday",
    });
  });
});
