import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import BookingForm from './components/Booking/BookingForm';
import BookingList from './components/Booking/BookingList';
import PaymentForm from './components/Payment/PaymentForm';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/bookings/new" component={BookingForm} />
        <Route path="/bookings" component={BookingList} />
        <Route path="/payment" component={PaymentForm} />
      </Switch>
    </div>
  );
};

export default App;
