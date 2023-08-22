import { render, screen, renderHook, fireEvent, waitFor} from "@testing-library/react";
import BookingForm from '../components/main/reservetable/main.findtable.component';


//Static TEXT test
test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Find a Table for any Occasion");
    expect(headingElement).toBeInTheDocument();
});

// //initializeTimes function test was called
test('initializeTimes function called?', () => {
    render(<BookingForm />);
    //show that you have values in the Time dropdown list ie time-options list not empty
    const timelist = screen.getAllByLabelText('Time');
    expect(timelist.length).toBeGreaterThan(0);
});

//Test the useReducer function when called after change of Date
test('dispatch/useReducer function called?', () => {
    render(<BookingForm />);
    const dateElement= screen.getAllByLabelText("Date");
    fireEvent.change(dateElement, {target:{ value: "2020-05-12"}}) ;
    // const timelist = screen.getAllByLabelText('Time');
    // expect(timelist.length).toBeGreaterThan(0);
    //triger the onChange event handler
    //show that you have values in the Time dropdown list ie time-options list not empty
});