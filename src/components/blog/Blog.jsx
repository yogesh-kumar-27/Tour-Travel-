import React from "react";
import blog1 from '../../images/blog-1.jpg'
import blog2 from '../../images/blog-2.jpg'
import blog3 from '../../images/blog-3.jpg'
export default function Blog() {
  return (
    <section className="blogs" id="blogs">
      <div className="heading">
        <span>blogs & posts</span>
        <h1>we untold stories</h1>
      </div>
      <div className="box-container">
      <div className="box">
            <div className="image">
                <img src={blog1} alt=""/>
            </div>
            <div className="content">
                <a href="#home" className="link">Life is a journey, not a destination</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!</p>
                <div className="icon">
                    <a href="#home"><i className="fas fa-clock"></i> 21st may, 2021</a>
                    <a href="#home"><i className="fas fa-user"></i> by admin</a>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={blog2} alt=""/>
            </div>
            <div className="content">
                <a href="#home" className="link">Life is a journey, not a destination</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!</p>
                <div className="icon">
                    <a href="#home"><i className="fas fa-clock"></i> 21st may, 2021</a>
                    <a href="#home"><i className="fas fa-user"></i> by admin</a>
                </div>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={blog3} alt=""/>
            </div>
            <div className="content">
                <a href="#home" className="link">Life is a journey, not a destination</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!</p>
                <div className="icon">
                    <a href="#home"><i className="fas fa-clock"></i> 21st may, 2021</a>
                    <a href="#home"><i className="fas fa-user"></i> by admin</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
