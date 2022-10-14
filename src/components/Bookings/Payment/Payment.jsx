import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js'
import {useLocation} from 'react-router-dom';
import CustomerInfo from './CustomerInfo';
import PaymentInfo from './PaymentInfo.jsx';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const location = useLocation();
    const {newBooking} = location.state
    const totalSeatsBooked = parseInt(newBooking.adult) + parseInt(newBooking.child) + parseInt(newBooking.concession);
    const totalPrice = calculateTotalPrice();

    //Calculates total ticket cost, with different values for whether the user has chosen standard or director screens
    function calculateTotalPrice() {
        let totalPrice = 0;

        if (newBooking.screenType === "Standard") {
            totalPrice = (parseInt(newBooking.adult) * 7.50 + parseInt(newBooking.child) * 5 + parseInt(newBooking.concession) * 6.75).toFixed(2);
        } 
        
        else {
            totalPrice = (parseInt(newBooking.adult) * 12.50 + parseInt(newBooking.child) * 10 + parseInt(newBooking.concession) * 11.75).toFixed(2);
        }

        return totalPrice;
    }

    return (
        <section className='container-fluid'>
            <h1>Checkout</h1>
            <PaymentInfo newBooking={newBooking} totalSeatsBooked={totalSeatsBooked} totalPrice={totalPrice}/>
            <div className="Customer Info">
                {/* Links to stripe checkout */}
                    <Elements stripe={stripePromise}>
                        <CustomerInfo newBooking={newBooking} totalSeatsBooked={totalSeatsBooked} totalPrice={totalPrice}/>
                    </Elements>
            </div>
        </section>
    )
}
// }

export default Payment;