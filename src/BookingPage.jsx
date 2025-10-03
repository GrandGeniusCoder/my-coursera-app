import React, { useState } from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  const handleBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
    alert(`✅ Booking confirmed for ${newBooking.name} on ${newBooking.date} at ${newBooking.time}`);
  };

  return (
    <div className="booking-list">
      <BookingForm availableTimes={availableTimes} onSubmit={handleBooking} />

      <div className="booking-item">
        <h3>Your Bookings:</h3>
        {bookings.length === 0 ? (
          <p>No bookings yet</p>
        ) : (
          <ul>
            {bookings.map((b, i) => (
              <li key={i}>
                {b.name} – {b.date} at {b.time} ({b.guests} guests, {b.occasion})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
