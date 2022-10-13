import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CustomerInfo = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.log(error);
            alert("Card payment has not been successful. Please try again.")
        } else {
            axios.post("http://localhost:3000/bookings/create", {
                bookingNo: props.newBooking.booking_num,
                name: name,
                email: email,
                film: props.newBooking.MovieName,
                location: props.newBooking.ScreenName,
                date: props.newBooking.Date,
                time: props.newBooking.Time,
                screenType: props.newBooking.ScreenType,
                adult: props.newBooking.adult,
                child: props.newBooking.child,
                concession: props.newBooking.concession,
                totalSeatsBooked: props.totalSeatsBooked,
                totalPrice: props.totalPrice,
                hasPaid: true
            })
                .then((res) => {
                    navigate("/booking/" + res.data.booking_num, )
                }).catch((error) => {
                    console.log(error)
                    alert("Error")
                })
        }
    };

    return (
        <form className='payment-form' onSubmit={handleSubmit}>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} required/>
                        <label htmlFor="email" className="form-label">Email Address </label>
                        <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} required/>
           
            <div>
                <label htmlFor="card" className="form-label">Credit Card Details</label>
                <div className='card-input' id='card'>
                    <CardElement />
                </div>
            </div>
            <button disabled={!stripe}>Make Payment</button>
        </form>
    )

}

export default CustomerInfo;