import React, { useState } from 'react';
import { createBooking } from '../../api';
import { useHistory } from 'react-router-dom';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await createBooking({ date, ticketType, amount }, token);
      history.push('/bookings');
    } catch (error) {
      setError('Booking failed');
    }
  };

  return (
    <div>
      <h2>Book Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Ticket Type:
          <input type="text" value={ticketType} onChange={(e) => setTicketType(e.target.value)} required />
        </label>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
