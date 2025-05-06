import React from "react";
import { Nav } from "react-bootstrap";
import Navigation from "./Navigation";
import Teachers from "./Teachers.json";
import Footer from "./Footer";
function Team() {
  return (
    <section>
      <Navigation />

      <section className="aboutone-hero">
        <h1 className="aboutone-title">Our Team</h1>
      </section>

      <section
        className="py-5 position-relative"
        style={{
          backgroundImage: `url(https://t4.ftcdn.net/jpg/05/42/87/55/360_F_542875592_W7J8A4snWY9dxaUT3RrcZNVeLQuGAJUJ.jpg)`, // Use your desired background image URL here
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
        }}
      >
        {/* Black overlay covering only the background */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // 50% black overlay
            zIndex: 0, // This ensures the overlay stays behind the content
          }}
        ></div>

        <div className="container position-relative z-index-2">
          <h2 className="text-center mb-5 fw-bold text-white">
            Meet Our Teachers
          </h2>
          <div className="row g-4 justify-content-center">
            {Teachers.map((stud, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <div className="card h-100 border-0 shadow-lg">
                  {/* Image at the top of the card */}
                  <img
                    src={stud.img}
                    alt={stud.name}
                    className="card-img-top"
                    style={{
                      height: "280px",
                      width: "100%",
                      objectFit: "cover",
                      borderTopLeftRadius: "0.5rem",
                      borderTopRightRadius: "0.5rem",
                    }}
                  />

                  {/* Teacher Info */}
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold mb-1">{stud.name}</h5>
                    <p className="text-muted mb-2">{stud.type}</p>
                    <p className="text-secondary small">
                      {stud.description ||
                        "Dedicated and experienced professional educator."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}

export default Team;
