import './main-reservetable.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Navigate, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


export default function Signup(){
    const navigate = useNavigate();

    const initialValues = {
        firstName:"",
        lastName:"",
        phonenumber:"",
        email:"",
        password:"",
        request:"",
    };
    const validationSchema = Yup.object().shape({
        booking: Yup.string().min(2, "Too Short"),
        cardnumber: Yup.string().min(2, "Too Short").required(),
        fullname: Yup.string().required("Please enter a full name"),
        expirydate: Yup.string().required("Please enter expiry date"),
        cvv: Yup.string().required("Please enter your CVV"),
        confirmation: Yup.string().required("Please choose an option"),
        });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 40);
        resetForm({values: initialValues});
        {navigate('Booking')};//should be called after submission!!
      };


    return (
        <div className='main signup'>
            {/* This is the signup page */}
            <div className='form-signup'>
                {/* <p>Signin to collect Points</p> */}
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <section className='signup__hero'>
                            {/* <img src={Mario} width="100%"/> */}
                            {/* <img src={Mario} width="180px"/> */}
                            <h2>Signin to collect Points</h2>
                        </section>
                        <section className='signupdetails'>
                        <div>
                            {/* <label name="firstName" className="lbl" for="firstName">First Name</label> */}
                            <Field name="firstName" className="detail firstName" type="text" placeholder="First Name"/>
                        </div>
                        <div>
                            {/* <label name="lastName" className="lbl" for="lasttName">Last Name</label> */}
                            <Field name="lastName" className="detail lastName" type="text" placeholder="Last Name"/>
                        </div>
                        <div>
                            {/* <label name="phonenumber" className="lbl" for="phonenumber">Phone Nbr</label> */}
                            <Field name="phonenumber" className="detail phonenumber" type="text" placeholder="Phone Number"/>
                        </div>
                        <div>
                            {/* <label name="email" className="lbl" for="email">Email</label> */}
                            <Field name="email" className="detail  email" type="email" placeholder="Email"/>
                        </div>
                        <div>
                            {/* <label name="password" className="lbl" for="password">Password <span></span></label> */}
                            <Field name="password" className="detail password" type="password" placeholder="Password"/>
                        </div>
                        <div>
                            {/* <label name="request" className="lbl" for="request">Request <span></span></label> */}
                            <Field name="request" className="detail request" component="textarea" rows="4" placeholder="Special Request"/>
                        </div>
                        </section>
                        <button className='btn btn-signup' type='submit' onClick="">Continue</button>
                    </Form>
                </Formik>

            </div>

        </div>
    )
}