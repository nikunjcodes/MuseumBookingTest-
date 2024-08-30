import React, { useEffect, useState } from 'react';
import { fetchBookings } from '../../api';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('User not authenticated');
        return;
      }

      try {
        const result = await fetchBookings(token);
        setBookings(result);
      } catch (error) {
        setError('Failed to fetch bookings');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      {error && <p>{error}</p>}
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <div>Date: {new Date(booking.date).toLocaleDateString()}</div>
              <div>Ticket Type: {booking.ticketType}</div>
              <div>Amount: ${booking.amount}</div>
              <div>Status: {booking.status}</div>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default BookingList;
