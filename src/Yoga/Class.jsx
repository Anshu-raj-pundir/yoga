import React from 'react'
import Navigation from './Navigation'
import './class.css'
import Online from './Online.json'
import Footer from './Footer'

function Class() {
  return (
    <section>
      
      <section>
        <Navigation/>
      </section>


      <section className="aboutone-hero">
      <h1 className="aboutone-title">Online Classes</h1>
    </section>


    <section className="course-section">
  {Online.map((stud, index) => (
    <div className="course-card" key={index}>
      <div className="img-wrapper">
        <img src={stud.img} alt={stud.title} className="course-img" />
      </div>
      <div className="course-content">
        <h6 className="course-type">{stud.type}</h6>
        <h4 className="course-title">{stud.title}</h4>
        <h5 className="course-price">{stud.price}</h5>
        <div className="course-meta">
          <span>{stud.lesson}</span>
          <span>{stud.student}</span>
        </div>
      </div>
    </div>
  ))}
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

<section>
  <Footer/>
</section>



    </section>
  )
}

export default Class