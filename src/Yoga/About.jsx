import React from 'react'
import Navigation from './Navigation'
import './about.css'
import Faith from './Faith.json'
import Test from './Test.json'
import Footer from './Footer'

function About() {
  return (

    <section>
      <Navigation/>
      
      <section className="aboutone-hero">
      <h1 className="aboutone-title">About Us</h1>
    </section>

    <section className="abouttwo-container">
      <div className="abouttwo-image-wrapper">
        <img
          src="https://media.istockphoto.com/id/1092303564/photo/child-pose-performed-by-six-diverse-females-view-from-above.jpg?s=612x612&w=0&k=20&c=D80cyUqgeTPIZRGS9pNMdXjjLWImk_J26kmcBVyZn34="
          alt="Yoga posture demonstration"
          className="abouttwo-image"
        />
      </div>
      <div className="abouttwo-content">
        <h3 className="abouttwo-subheading">About Our School____</h3>
        <h1 className="abouttwo-heading">How We Became Yoku</h1>
        <p className="abouttwo-paragraph">
          Modern yoga consists of a range of techniques including asanas and meditation, derived from
          the philosophies and teachings of traditional Hindu Yoga schools. Yoku blends ancient practices
          with modern awareness, offering a grounded, healing journey for all levels of practitioners.
        </p>
        <button className="abouttwo-button">Meet Instructors</button>
      </div>
    </section>

    <section className="faith-section">

      {/* Header */}
      <div className="faith-header">
        <h4>Our Faith</h4>
        <h2>We believe in Making Yoga Inclusive</h2>
      </div>

      {/* Two Equal Sections: Cards + Image */}
      <div className="faith-body">
  
       {/* Left: Cards (50%) */}
       <div className="faith-cards-wrapper">
            <div className="faith-cards">
              {Faith.map((stud, index) => (
             <div className="faith-card" key={index}>
               <img src={stud.img} alt={stud.title} />
               <h5>{stud.title}</h5>
               <h6>{stud.sub_title}</h6>
              </div>
              ))}
            </div>
        </div>


        {/* Right: Image (50%) */}
        <div className="faith-image">
          <img
          src="https://thumbs.dreamstime.com/b/woman-yoga-relax-nature-lake-60434685.jpg"
          alt="Yoga Inclusion" 
           />
        </div>

      </div>
    </section>

    <section className="numbers-section">
  <div className="numbers-content">
    <h3>What's the numbers</h3>
    <h6>
      Modern yoga consists of a range of techniques including asanas (postures) and meditation derived from some of the philosophies, teachings and practices of the Yoga school, which is one of the six schools of traditional Hindu.
    </h6>
    <button className="browse-button">Browse Courses</button>
  </div>
</section>


<section className="testimonial-section">
  <div className="testimonial-container">
    <h2>Testimonial</h2>
    <h6>What people say about us</h6>

    <div className="testimonial-grid">
      {Test.map((stud, index) => (
        <div className="testimonial-card" key={index}>
          <img src={stud.img} alt={stud.name} />
          <p>{stud.pera}</p>
          <h4>{stud.name}</h4>
          <h5>{stud.title}</h5>
        </div>
      ))}
    </div>
  </div>
</section>


<section class="featured-section">

  <div class="featured-header">
    <h2>We are featured in</h2>
  </div>

  <div class="featured-logos">
    <img src="https://img.freepik.com/premium-vector/black-nature-creative-human-body-meditation-yoga-logo-white-background_1188140-1784.jpg" alt="Logo 1" />
    <img src="https://img.freepik.com/premium-vector/black-white-logo-yoga-studio_1145966-1012.jpg" alt="Logo 2" />
    <img src="https://img.freepik.com/free-vector/aesthetic-business-logo-template-creative-professional-design-vector_53876-136290.jpg?semt=ais_hybrid&w=740" alt="Logo 3" />
    <img src="https://images.rawpixel.com/image_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjI4Ni1hZXctMDgwLWhlYWx0aC1sb2dvXzIuanBn.jpg" alt="Logo 4" />
    <img src="https://matthatfieldart.com/wp-content/uploads/2019/11/mandela-yoga-logo-om-symbol-2.png" alt="Logo 5" />
  </div>

</section>


<section className="subscribe-section">
  <div className="subscribe-text">
    <h1>Subscribe to our newsletter</h1>
    <p>Get updates for new classes and new products</p>
  </div>

  <div className="subscribe-form">
    <input type="email" placeholder="Your Email Address" />
    <button type="submit">Subscribe</button>
  </div>
</section>


<Footer/>


    </section>
  )
}

export default About