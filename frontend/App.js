import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Auth/Register";
import BookingForm from "./components/Booking/BookingForm";
import BookingList from "./components/Booking/BookingList";
import PaymentForm from "./components/Payment/PaymentForm"

const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/booking" component={BookingForm} />
                <Route path="/bookinglist" component={BookingList} />
                <Route path="/payment" component={PaymentForm} />
            </Switch>
        </div>
    );
};
export default App;
