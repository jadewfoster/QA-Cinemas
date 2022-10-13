const PaymentInfo = (props) => {

  return (
      <div className="Booking Confirmation">
              <h4 className="mb-3">Booking confirmation</h4>
              {props.bookingNum ? <p>Booking Number: {props.bookingNum}</p> : <></>}
              <p>Film: {props.newBooking.MovieName}</p>
              <p>Cinema Location: {props.newBooking.CinemaName}</p>
              <p>Date: {props.newBooking.Date}</p>
              <p>Time: {props.newBooking.Time}</p>
              <p>Number of Tickets: {props.totalSeatsBooked}</p>
              <p>Total Price: £{props.totalPrice}</p>
      </div>
  )
}

export default PaymentInfo;