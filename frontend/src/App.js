import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Auth/Register';
import BookingForm from './components/Booking/BookingForm';
import BookingList from './components/Booking/BookingList';
import PaymentForm from './components/Payment/PaymentForm';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/bookings/new" element={<BookingForm />} />
        <Route path="/bookings" element={<BookingList />} />
        <Route path="/payment" element={<PaymentForm />} />
      </Routes>
    </div>
  );
};

export default App;
