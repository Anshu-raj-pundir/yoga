import React from 'react'

function Footer() {
  return (

<section className="footer">
  <div className="footer-text">
    <img src="https://www.creativefabrica.com/wp-content/uploads/2019/11/21/MEDITATION-YOGA-8.jpg" alt="" /><h3>YOKU</h3>
    <p>Far far away, behind the word mountains, far from countries Vokalia and Consonantia, there live the blind texts. Separated they.</p>
  </div>

  <div className="quick-links">
    <h3>Quick Links</h3>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Classes</li>
      <li>Pages</li>
      <li>Blog</li>
    </ul>
  </div>

  <div className="contact-links">
    <ul>
      <li>Become Instructor</li>
      <li>Contact Us</li>
      <li>Privacy Policy</li>
      <li>Support Center</li>
    </ul>
  </div>

  <div className="contact-info">
    <h3>Contact Info</h3>
    <div className="contact-item">
      <i className="fas fa-map-marker-alt"></i>
      <h5>1810 Kings Way, King Street, 5th Avenue, New York</h5>
    </div>
    <div className="contact-item">
      <i className="fas fa-phone-alt"></i>
      <h6>1800-2355-2356</h6>
    </div>
    <div className="contact-item">
      <i className="fas fa-envelope"></i>
      <h6>contact@yokuyoga.co</h6>
    </div>
  </div>
</section>



  )
}

export default Footer