import React, { useEffect } from "react";
import aboutVideo from "../../images/about-vid-1.mp4";
import aboutVideo2 from "../../images/about-vid-2.mp4";
import aboutVideo3 from "../../images/about-vid-3.mp4";

export default function About() {
  const videoChanger = () => {
    document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
        btn.onclick = () =>{
            let src = btn.getAttribute('data-src');
            document.querySelector('.about .video-container .video').src = src;
        }
    })
       
  };
  useEffect(() => {
    videoChanger();
    return () => {
      videoChanger();
    };
  }, []);
  return (
    <section className="about" id="about">
      <div className="video-container">
        <video src={aboutVideo} muted autoPlay loop className="video"></video>
        <div className="controls">
          <span className="control-btn" data-src={aboutVideo}></span>
          <span className="control-btn" data-src={aboutVideo2}></span>
          <span className="control-btn" data-src={aboutVideo3}></span>
        </div>
      </div>
      <div className="content">
        <span>Why choose us?</span>
        <h3>nature's majesty Awaits You</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          minus eligendi pariatur non itaque quasi qui vel tempore id optio?
        </p>
        <a href="#home" className="btn">
          read more
        </a>
      </div>
    </section>
  );
}
