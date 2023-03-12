import '../stylesheet/mystyles.css'; //applying css styles, you just import ONLY
import restaurantfood from '../images/restaurantfood.jpg'
import greeksalad from '../images/greek salad.jpg'
import Brucheta from '../images/Brucheta.png'
import lemondessert from '../images/lemon dessert.jpg'
import restaurant from '../images/restaurant.jpg'
import restaurantchef from '../images/restaurantchefB.jpg'

export default function Main(){
    return (
        <div class="main">
 {/* This is a Main component */}
            <section class="hero">
                <article>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et
                    </p>
                    
                </article>

                <img src={restaurantfood}/>
                <button>Reserve a Table</button>
            </section>
            <section class="specials">
            {/* This is the specials section */}
                <section class="specials-1"><b>This week's Specials!</b> <button>Online Menu</button></section>
                <section class="specials-2">
                    <article class="card" id='card-1'>
                        <img src={greeksalad}/>
                        <h4>Greek Salad</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur </p>
                    </article>
                    <article class="card" id='card-2'>
                        <img src={Brucheta}/>
                        <h4>Brucheta</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur </p>
                    </article>
                    <article class="card" id='card-3'>
                        <img src={lemondessert}/>
                        <h4>lemondessert</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur </p>
                    </article>
                </section>
            </section>
            <section class="testimonials">
            {/* This is the testimonials section */}
                <h4 class="testimonials-heading">Testimonials</h4>
                <article class="testimonial-1">
                    <h5>Rating</h5>
                    <img src=""></img>
                    <h7>Name</h7>
                    <p>Comments</p>
                </article>
                <article class="testimonial-2">
                    <h5>Rating</h5>
                    <img src=""></img>
                    <h7>Name</h7>
                    <p>Comments</p>
                </article>
                <article class="testimonial-3">
                    <h5>Rating</h5>
                    <img src=""></img>
                    <h7>Name</h7>
                    <p>Comments</p>
                </article>
                <article class="testimonial-4">
                    <h5>Rating</h5>
                    <img src=""></img>
                    <h7>Name</h7>
                    <p>Comments</p>
                </article>
            </section>
            <section class="description">
            {/* This is the description section */}
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et
                </p>
                <img src={restaurant} class="image-1"></img>
                <img src={restaurantchef} class="image-2"></img>
            </section>
        </div>
       
    )
}