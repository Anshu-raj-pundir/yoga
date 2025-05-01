import React from 'react'
import Navigation from './Navigation'
import './home.css'
import Type from './Type.json'
import Course from './Course.json'
import Instructor from './Instructor.json'

function Home() {
  return (
    <section>
      <div>
        <Navigation/>
        
      </div>

      <section className="hero-section">
  <div className="hero-text">
    <h1>Online Yoga Classes</h1>
    <p>Yoga is the most popular online yoga classes, trusted by 100,000+ customers. Our instructors are well-known and certified.</p>
    <button className="browse-button">Browse Courses</button>
  </div>

  <div className="hero-image">
    <img 
      src="https://m.media-amazon.com/images/I/81zA2TfRoaL._AC_UF894,1000_QL80_.jpg" 
      alt="Yoga Class" 
    />
  </div>
</section>



<div className="card-container">
  {Type.map((stud, index) => (
    <div className="card" key={index}>
      <img src={stud.img} alt={stud.title} />
      <h2>{stud.title}</h2>
      <p>{stud.sub_title}</p>
    </div>
  ))}
</div>


<section>
<div className="header-section">
  <h1>Popular Online Classes</h1>
  <p>
    A meditative means of discovering dysfunctional perception and cognition,
    as well as overcoming it to release any suffering, find inner peace and salvation.
  </p>
</div>



  <div className="course-container">
  {Course.map((stud, index) => (
    <div className="course-card" key={index}>
      <div className="img-wrapper">
        <img src={stud.img} alt={stud.title} />
        <div className="hover-info">
          <h5>{stud.lessons}</h5>
          <h6>{stud.students}</h6>
          <h6>{stud.yoga_type}</h6>
        </div>
      </div>
      <h2>{stud.title}</h2>
      <h5>{stud.sub_title}</h5>
      <h6>{stud.price}</h6>
    </div>
  ))}
</div>



</section>


<section class="modern-yoga">
  <div class="image-container">
    <img
      src="https://img.freepik.com/free-photo/outdoor-portrait-dark-haired-woman-with-perfect-body-white-sportrswear_176532-14599.jpg?t=st=1746029503~exp=1746033103~hmac=f4014b784a5f7b4d40131406553c345878a4f46af4abddd9369b4d192e640520&w=1380"
      alt="Modern Yoga"
    />
  </div>

  <div class="text-container">
    <h4>Our foundation is</h4>
    <h2>Modern Yoga</h2>
    <p>
      Modern postural yoga consists largely but not exclusively of the practice of asanas.
      There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles,
      from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise,
      precision in the asanas, and spirituality in the Haṭha yoga tradition.
    </p>

    <div class="button-container">
      <button class="btn">Learn More</button>
      <button class="btn">Our Story</button>
    </div>
  </div>
</section>


<section className="instructors-section">

  <div className="instructors-header">
    <h1>Our Instructors</h1>
    <p>
      A meditative means of discovering dysfunctional perception and cognition,
      as well as overcoming it to release any suffering, find inner peace and salvation.
    </p>
  </div>

  <div className="instructors-container">
    {Instructor.map(stud => (
      <div className="instructor-card" key={stud.title}>
        <div className="image-wrapper">
          <img src={stud.img} alt={stud.title} />
        </div>
        <h4>{stud.title}</h4>
        <h6>{stud.class}</h6>
      </div>
    ))}
  </div>

</section>







    </section>
  )
}

export default Home