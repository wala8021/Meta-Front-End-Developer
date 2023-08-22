import './main-reservetable.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Navigate, useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import Findtable from './main.findtable.component'

export default function Bookingdetails(props){
    const navigate = useNavigate();


    // const initialValues = {
    //         cardnumber:"",
    //         fullname:"",
    //         expirydate:"",
    //         cvv:"",
    //         confirmation:""
    //     };
    // const validationSchema = Yup.object().shape({
    //         booking: Yup.string().min(2, "Too Short"),
    //         cardnumber: Yup.string().min(2, "Too Short").required(),
    //         fullname: Yup.string().required("Please enter a full name"),
    //         expirydate: Yup.string().required("Please enter expiry date"),
    //         cvv: Yup.string().required("Please enter your CVV"),
    //         confirmation: Yup.string().required("Please choose an option"),
    // });

    // const onSubmit = (values, { setSubmitting, resetForm }) => {
    //         setTimeout(() => {
    //           alert(JSON.stringify(values, null, 2));
    //           setSubmitting(false);
    //         }, 40);
    //         resetForm({values: initialValues});//should be called after submission!!
    //         navigate("/"); //navigates back to home page
    //       };

    const handleonClick=() => {navigate("/");};

    return (
        <div className='main booking'>
            {/* This is the Bookingdetails page */}
            <div className='booking__form'>
                <div className='booking__form--hero'>
                <h2>Booking Confirmation</h2>
                </div>
                <section className='booking__signupdetails'>
                                <h4>Your Booking Confirmation Details Below</h4>
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
                {/* <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <section className='booking__signupdetails'>
                                <h4>Booking Confirmed! See Details</h4>
                                Date:<span >{props.currentBooking.selectedDate}</span>
                                Time:<span >{props.currentBooking.selectedTime}</span>
                                Dinners:<span >{props.currentBooking.selectedDinners}</span>
                                Occasion:<span >{props.currentBooking.selectedOccasion}</span>
                                Seating:<span >{props.currentBooking.selectedSeating}</span>


                            <h4>Credit Card Details (you won't be charged yet)</h4>
                       
                            <label name="cardnumber" className="lbl booking__signupdetails--lbl" htmlFor="cardnumber">Card Number</label>
                            <Field name="cardnumber" className="detail cardnumber" type="text" placeholder="Credit Number"/>
                            <ErrorMessage name="cardnumber" component="div" className='error'/>

                            <label name="fullname" className="lbl booking__signupdetails--lbl" htmlFor="fullname">Full Name</label>
                            <Field name="fullname" className="detail fullname" type="txt" placeholder="Full Name"/>
                            <ErrorMessage name="fullname" component="div" className='error'/>

                            <label name="expirydate" className="lbl booking__signupdetails--lbl" htmlFor="expirydate">Expiry Date</label>
                            <Field name="expirydate" className="detail  expirydate" type="text" placeholder="Expiry Date"/>
                            <ErrorMessage name="expirydate" component="div" className='error'/>
                            
                           
                            {/* <label name="cvv" className="lbl booking__signupdetails--lbl" htmlFor="cvv">CVV </label>
                            <Field name="cvv" className="detail cvv" type="text" placeholder="CVV"/>
                            <ErrorMessage name="cvv" component="div" className='error'/>
                            
                            <h4>How should we send your confirmation details?</h4>
                            <label className='booking__signupdetails--radio'>
                                <Field name="confirmation" type="radio" value="text-message"/>
                                <span>Send me booking confirmation via text</span>
                            </label>
                            <label className='booking__signupdetails--radio'>
                                <Field name="confirmation" type="radio" value="email"/>
                                <span>Send me booking confirmation via email</span>
                            </label>
                                <ErrorMessage name="confirmation" component="div" className='error'/> 
                          
                        </section>
                        <button className='btn btn-book' type='submit' aria-label="Done">Done</button>
                    </Form>

                </Formik> */}
                    <button className='btn btn-book' type='submit' onClick={handleonClick}>Done</button>
            </div>   
        </div>
    )
}