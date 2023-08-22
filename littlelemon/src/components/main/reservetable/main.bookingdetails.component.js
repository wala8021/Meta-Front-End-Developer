import './main-reservetable.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Navigate, useNavigate} from 'react-router-dom';


export default function Bookingdetails(props){
    const navigate = useNavigate();


    const handleonClick=() => {navigate("/");};

    return (
        <div className='main booking'>
            <div className='booking__form'>
                <div className='booking__form--hero'>
                <h2>Booking Confirmation</h2>
                </div>
                <section className='booking__signupdetails'>
                                <h4>Your Booking Confirmation Details Below...</h4>
                                FullName:<span >{props.currentBooking.selectedFullName}</span>
                                Date:<span >{props.currentBooking.selectedDate}</span>
                                Time:<span >{props.currentBooking.selectedTime}</span>
                                Dinners:<span >{props.currentBooking.selectedDinners}</span>
                                Occasion:<span >{props.currentBooking.selectedOccasion}</span>
                                Email:<span >{props.currentBooking.selectedEmail}</span>
                                Number:<span >{props.currentBooking.selectedPhone}</span>
                                
                                </section><br />
                                <h5>Details of the above confirmation has been sent to you via {props.currentBooking.selectedCommunication}. We look forward to welcoming you soon.Thank you!</h5>
                                <br />
                
                    <button className='btn btn-book' type='submit' onClick={handleonClick}>Done</button>
            </div>   
        </div>
    )
}