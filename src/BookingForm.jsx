import React, { useState } from "react";

const BookingForm = ({ availableTimes, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call parent function
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book a Table at Little Lemon</h2>

      {/* Name */}
    
      <label >
        Your Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>


      {/* Date */}
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          />
      </label>

      {/* Time */}
      <label>
        Time:
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          >
          <option value="">Select a time</option>
          {availableTimes.map((time, i) => (
            <option key={i} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>

      {/* Guests */}
      <label>
        Number of Guests:
        <input
          type="number"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />
      </label>

      {/* Occasion */}
      <label>
        Occasion:
        <select
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
      </label>
      
      <button
        type="submit"
        >
        Book Now
      </button>
    </form>
        );
};

export default BookingForm;
