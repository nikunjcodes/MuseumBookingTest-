import React from "react";

const PaymentForm = () => {
    return (
        <div>
        <h2>Payment</h2>
        <form>
            <label>
            Card Number:
            <input type="text" required />
            </label>
            <label>
            Expiry Date:
            <input type="text" required />
            </label>
            <label>
            CVV:
            <input type="text" required />
            </label>
            <button type="submit">Pay</button>
        </form>
        </div>
    );

};
export default PaymentForm;
