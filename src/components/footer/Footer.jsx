import React from "react";

export default function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <a href="#home" className="logo">
            {" "}
            <i className="fas fa-paper-plane"></i>travel{" "}
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ad?
          </p>
          <div className="share">
            <a href="#home" className="fab fa-facebook-f"></a>
            <a href="#home" className="fab fa-twitter"></a>
            <a href="#home" className="fab fa-instagram"></a>
            <a href="#home" className="fab fa-linkedin"></a>
          </div>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> home{" "}
          </a>
          <a href="#about" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> about{" "}
          </a>
          <a href="#destination" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> destination{" "}
          </a>
          <a href="#services" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> services{" "}
          </a>
          <a href="#gallery" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> gallery{" "}
          </a>
          <a href="#blogs" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> blogs{" "}
          </a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <p>
            {" "}
            <i className="fas fa-map"></i> delhi, india{" "}
          </p>
          <p>
            {" "}
            <i className="fas fa-phone"></i> +123-456-7890{" "}
          </p>
          <p>
            {" "}
            <i className="fas fa-envelope"></i> lorem@gmail.com{" "}
          </p>
          <p>
            {" "}
            <i className="fas fa-clock"></i> 7:00am - 10:00pm{" "}
          </p>
        </div>

        <div className="box">
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input
              type="email"
              name=""
              placeholder="enter your email"
              className="email"
              id=""
            />
            <input type="submit" value="subscribe" className="btn" />
          </form>
        </div>
      </div>
    </section>
  );
}
