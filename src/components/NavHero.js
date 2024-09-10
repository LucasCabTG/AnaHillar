import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/navbar.css';

export function NavbarHero() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header className="header-nav">
        <h1 className="logo">Ana Hillar</h1>
        <nav ref={navRef}>
          <Link to="/">HOME</Link>
          <Link to="/proyects">PROYECTS</Link>
          <Link to="/categoriab">ART WORKS</Link>
          <Link to="/about">ABOUT</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div className="hero-container">
        <img src="https://i.postimg.cc/k5HcyGwp/2-1-jpg.jpg" alt="Hero" className="hero-image" />
      </div>
    </>
  );
}
