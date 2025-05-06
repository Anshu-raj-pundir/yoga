import React from "react";
import Navigation from "./Navigation";
import "./contact.css";
import Footer from "./Footer";

function Contact() {
  return (
    <section>
      <Navigation />

      <section className="aboutone-hero">
        <h1 className="aboutone-title">Contact Us</h1>
      </section>

      <section class="contact-section">
        <div class="contact-card">
          <h3>Phone</h3>
          <h6 class="contact-desc">
            A wonderful serenity has taken possession of my entire soul, like
            these.
          </h6>
          <h6 class="contact-info">+1-2345-2345</h6>
        </div>
        <div class="contact-card">
          <h3>Email</h3>
          <h6 class="contact-desc">
            A wonderful serenity has taken possession of my entire soul, like
            these.
          </h6>
          <h6 class="contact-info">Contact@goodlayers.com</h6>
        </div>
        <div class="contact-card">
          <h3>Location</h3>
          <h6 class="contact-info">Liverpool, UK 33342</h6>
          <h6 class="contact-link">View On Google Map</h6>
        </div>
      </section>
      <section class="map-section">
        <div class="map-container">
          <iframe
            src="https://maps.google.com/maps?q=london&output=embed"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section class="social-section">
        <a href="https://www.instagram.com" target="_blank" class="social-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="Instagram"
          />
        </a>
        <a href="https://www.skype.com" target="_blank" class="social-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174869.png"
            alt="Skype"
          />
        </a>
        <a href="https://www.facebook.com" target="_blank" class="social-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank" class="social-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="Twitter"
          />
        </a>
      </section>

      <Footer />
    </section>
  );
}

export default Contact;
