import './main-reservetable.css';
import { Formik, Form, Field, ErrorMessage, resetForm } from 'formik';
import chefB from '../../../images/restaurantchefB.jpg';
import { Navigate, useNavigate } from 'react-router-dom';
import Signup from './main.signup.component';
import { useFormik, useFormikContext } from "formik";
import * as Yup from 'yup';
import { useState, useReducer, useEffect } from 'react';
import {fetchAPI, submitAPI} from '../../../api/api';

export default function Findtable(props){ //pass table object as props to lift up state to App.js level
    const navigate = useNavigate();


  

    const validationSchemaTable = Yup.object().shape({
        date: Yup.string().notOneOf(["Select One", ""], "Select Date"),
        time: Yup.string().notOneOf(["Select One"], "Select Time"),
        dinners: Yup.string().notOneOf(["Select One"], "Select Dinners"),
        occasion: Yup.string().notOneOf(["Select One"], "Select occasion").required(),
        seating: Yup.string().notOneOf(["","Select One"], "Select Seating"),
        fullname: Yup.string().required(),
        email: Yup.string().email().required(),
        //phone: Yup.string().phone()
        confirmation: Yup.string().required(),
        });

 
    let initialValues=props.tableprops;
    // let time_options = ["Select One",...props.AvailableTimes];

    //console.log(initialValues.time);
    // initialValues.time = props.AvailableTimes[0];
    //const [seat_options, setseat_options] = useState(["Select One","01 guest", "02 guests","03 guests","04 guests","05 guests","08 guests", "10 guests" ]);
    const seat_options=["Select One","01 guest", "02 guests","03 guests","04 guests","05 guests","08 guests", "10 guests" ];
    const occasion_options = ["Select One","Birthday","Party","Graduation","Anniversary","Wedding","Business","Family Reunion"];

    //transforming UseState useReducer 
    const [AvailableTimes, dispatch] =useReducer(updateTimes, props.todaydate, initializeTimes) //(todaysdate)=>fetchAPI(Date.parse(todaysdate)));
    console.log(AvailableTimes);
    let time_options = ["Select One",...AvailableTimes];

    function initializeTimes(todaysdate) {
        return fetchAPI(Date.parse(todaysdate))
    };

    //updateTimes function is the reducer function (problem setting state in App.js and findtable.js at same time)
    function updateTimes(state, action){
        switch(action.type){
            case 'dateChange':{
            //console.log(action.currentValue);
            //console.log(state);
            // props.setDate(action.currentValue);
            // props.setTime("Select One");
            return fetchAPI(Date.parse(action.currentValue));

                    }
                }
            };

    function handleDateChange(e){
        e.preventDefault();
        if(e.target.name ==="date"){
            dispatch({
                type:'dateChange',
                currentValue: e.target.value
                }
    
                );
                //console.log(e.target.value);
                props.setDate(e.target.value);
                props.setTime("Select One");
                console.log(e.target.value);
            }
            else if(e.target.name ==="time"){
                console.log(e.target.value);
                props.setTime(e.target.value);
            }    
            else if(e.target.name ==="dinners"){
                console.log(e.target.value);
                props.setDinners(e.target.value);
            }    
            else if(e.target.name ==="occasion"){
                console.log(e.target.value);
                props.setOccasion(e.target.value);
            }
            // else if(e.target.name ==="seating"){
            //     console.log(e.target.value);
            //     props.setSeating(e.target.value);
            // } 
            else if(e.target.name ==="fullname"){
                console.log(e.target.value);
                props.setFullName(e.target.value);
            } 
            else if(e.target.name ==="email"){
                console.log(e.target.value);
                props.setEmail(e.target.value);
            } 
            else if(e.target.name ==="phone"){
                console.log(e.target.value);
                props.setPhone(e.target.value);
            } 
            else if(e.target.name ==="confirmation"){
                console.log(e.target.value);
                props.setCommunication(e.target.value);
            } 
            
        };

    //changed function name from onSubmit to submitForm    
    const submitForm = (values, { setSubmitting, resetForm }) => {
        if(props.selectedTime ==="Select One"){
            alert("select a time")
        }
        else {
            alert(JSON.stringify(props.currentBooking, null, 2));
            if(submitAPI(JSON.stringify(values, null, 2))){
                {navigate('Signup/Booking')}
                resetForm({values: initialValues});
            }

        };
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 40);
        // props.tableprops.date = values.date;
        // props.tableprops.time = values.time;
        // props.tableprops.dinners = values.dinners;
        // props.tableprops.occasion = values.occasion;
        // props.tableprops.seating = values.seating;

        // props.currentBooking.date = values.date;
        // props.currentBooking.time = values.time;
        // props.currentBooking.dinners = values.dinners;
        // props.currentBooking.occasion = values.occasion;
        // props.currentBooking.seating = values.seating;

        //seting the available times variable
        // props.bookedAvaliableTimes.push(values.time);
        // setNowAvailableTimes();
        // console.log(props.bookedAvaliableTimes);
        // console.log(nowAvailableTimes);

       // resetForm({values: initialValues});
        // {navigate('Signup')};//should be called after submission!!
        // {dispatch({"Type":"table-submit"})}
      };


      return (
        <div className='main findtable'>
            {/* This is the main findtable page */}
            <div className='form-findtable'>
                {/* <p>Find a Table for any Occasion</p> */}
                <Formik
                    validationSchema={validationSchemaTable}
                    onSubmit={submitForm}
                    initialValues={initialValues}
                >
                    <Form 
                    // onChange={(e)=>{
                    //     e.preventDefault();
                    //     if (e.target.name ==="date"){
                    //         props.functionAvailableTimes(e.target.value);
                    //         console.log(e.target.value);

                    //         //console.log(props.AvailableTimes);//gives previous value because is executed before functionAvailableTimes returns value
                    //     }
                    // }}
                    onChange={handleDateChange}
                    >
                        <section className='tablepictures'>
                        <h2>Find a Table for any Occasion</h2>
                            {/* <img src={chefB} width="100%"/> */}
                            {/* <img src={Mario} width="180px"/> */}
                        </section>
                        <section className='tabledetails'>
                        <div>
                            <label htmlFor="date"><b>Date</b> </label>
                            <Field className="field" name="date" type="Date" id="date" data-testid="date-picker"/>
                            <ErrorMessage name="date" component="div" className='error'/>
                        </div>
                        <div>
                            <label htmlFor="time"><b>Time</b>  </label>
                            <Field className="field" name="time" as="select" id="time">
                                {/* <option value="10:00">10:00AM</option>
                                <option value="10:30">10:30AM</option>
                                <option value="11:00">11:00AM</option>
                                <option value="11:30">11:30AM</option> */}
                                {time_options.map((item)=><option value={item} key={item}>{item}</option>)}
                            </Field>
                            <ErrorMessage name="time" component="div" className='error'/>
                        </div>
                        <div>
                            <label htmlFor="dinners"><b>Dinners</b>  </label>
                            <Field className="field" name="dinners" as="select">
                                {/* <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="4">04</option>
                                <option value="10">10</option> */}
                                {seat_options.map((item)=><option value={item} key={item}>{item}</option>)}
                            </Field>
                            <ErrorMessage name="dinners" component="div" className='error'/>
                        </div>
                        <div>
                            <label htmlFor="occasion"><b>Occasion</b>  </label>
                            <Field className="field" name="occasion" as="select" >
                                {/* <option value="Birthday">Birthday</option>
                                <option value="Party">Party</option>
                                <option value="Graduation">Graduation</option>
                                <option value="Anniversary">Anniversary</option> */}
                                 {occasion_options.map((item)=><option value={item} key={item}>{item}</option>)}
                            </Field>
                            <ErrorMessage name="occasion" component="div" className='error'/>
                        </div>
                        </section>
                        <section className='personaldetails'>
                            <label name="fullname" className="lbl personaldetails__fullname--lbl" htmlFor="fullname">Full Name</label>
                            <Field name="fullname" className="fullname field" type="text" placeholder="fullname"/>
                            <ErrorMessage name="fullname" component="div" className='error'/>
                            
                            <label name="email" className="lbl personaldetails__email--lbl" htmlFor="email">Email</label>
                            <Field name="email" className="email field" type="text" placeholder="Email" />
                            <ErrorMessage name="email" component="div" className='error'/>
                           
                       
                            <label name="phone" className="lbl personaldetails__phone--lbl" htmlFor="phone">Phone Number</label>
                            <Field name="phone" className="phone field" type="text" placeholder="Phone Number"/>
                            <ErrorMessage name="phone" component="div" className='error'/>
                        
                            </section>
                            <section className='communication'>
                                <div>
                                <h4>Send Details via...</h4>
                            <label className='booking__signupdetails--radio'>
                                <Field name="confirmation" type="radio" value="email"/>
                                <span>Email</span>
                            </label><br/>
                            <label className='booking__signupdetails--radio'>
                                <Field name="confirmation" type="radio" value="text"/>
                                <span>Text</span>
                            </label>
                                <ErrorMessage name="confirmation" component="div" className='error'/>
                                </div>
                        {/* <div>
                            <p><b>Searting Options</b></p>
                            <label>
                                <Field className="field" name="seating" type="radio" value="Inside"/>
                                  Inside
                            </label><br/>
                            <label>
                                <Field className="field" name="seating" type="radio" value="Outside"/>
                                  Outside
                            </label>
                            <ErrorMessage name="seating" component="div" className='error'/>
                        </div> */}
                        </section>
                        <button className='btn btn-findtable' type='submit' aria-label="Book">Book Now</button>
                    </Form>
                </Formik>

            </div>
        </div>
    )
};

// export {initializeTimes, myreducer, useReducer};