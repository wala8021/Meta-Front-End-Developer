import './main.css'; //applying css styles, you just import ONLY
import restaurantfood from '../../images/restaurantfood.jpg'
import greeksalad from '../../images/greek salad.jpg'
import Brucheta from '../../images/Brucheta.png'
import lemondessert from '../../images/lemon dessert.jpg'
import restaurant from '../../images/restaurant.jpg'
import restaurantchef from '../../images/restaurantchefB.jpg'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Main(){
    const navigate = useNavigate();

    return (
        <div className="main">
 {/* This is a Main component */}
            <section className="hero">
                <article>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et
                    </p>

                </article>

                <img src={restaurantfood}/>
                <button className='btn btn-hero' onClick={() =>navigate('Reservations/Findtable')}>Reserve a Table</button>
            </section>
            <section className="specials">
            {/* This is the specials section */}
                <section className="specials-1"><b>This week's Specials!</b> <button className='btn btn-specials'>Online Menu</button></section>
                <section className="specials-2">
                    <article className="card" id='card-1'>
                        <img src={greeksalad}/>
                        <h4>Greek Salad<span>$15.99</span></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur </p>
                    </article>
                    <article className="card" id='card-2'>
                        <img src={Brucheta}/>
                        <h4>Brucheta<span>$10.99</span></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur </p>
                    </article>
                    <article className="card" id='card-3'>
                        <img src={lemondessert}/>
                        <h4>lemondessert<span>$11.99</span></h4>
                        <p>Lorem ipsum dolor sit amet, consetetur </p>
                    </article>
                </section>
            </section>
            <section className="testimonials">
            {/* This is the testimonials section */}
                <h4 className="testimonials-heading">Testimonials</h4>
                <article className="testimonial-1">
                    <h5>Rating</h5>
                    <img src=""></img>
                    <h5>Name</h5>
                    <p>Comments</p>
                </article>
                <article className="testimonial-2">
                    <h5>Rating</h5>
                    <img src=""></img>
                    <h5>Name</h5>
                    <p>Comments</p>
                </article>
                <article className="testimonial-3">
                    <h5>Rating</h5>
                    <img src=""></img>
                    <h5>Name</h5>
                    <p>Comments</p>
                </article>
                <article className="testimonial-4">
                    <h5>Rating</h5>
                    <img src=""></img>
                    <h5>Name</h5>
                    <p>Comments</p>
                </article>
            </section>
            <section className="description">
            {/* This is the description section */}
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et
                </p>
                <img src={restaurant} className="image-1"></img>
                <img src={restaurantchef} className="image-2"></img>
            </section>
        </div>
    )
}