import React, { useEffect } from "react";

export default function Header() {
  const Toogle = () => {
    let navbar = document.querySelector(".header .navbar");

    let menu = document.querySelector("#menu-btn");
    menu.onclick = () => {
      navbar.classList.toggle("active");
    };
    window.onscroll = () => {
      navbar.classList.remove("active");
    };
  };
  useEffect(() => {
    Toogle();
    return () => {
      Toogle();
    };
  }, []);
  return (
    <header className="header">
      <div id="menu-btn" className="fas fa-bars"></div>

      <a href="#home" className="logo">
        {" "}
        <i className="fas fa-paper-plane"></i>travel
      </a>
      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#destination">destination</a>
        <a href="#services">services</a>
        <a href="#gallery">gallery</a>
        <a href="#blogs">blogs</a>
      </nav>
      <a href="#book-form" className="btn">
        book now
      </a>
    </header>
  );
}
