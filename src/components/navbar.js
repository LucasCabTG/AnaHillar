import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/navbar.css';
import { It } from "react-flags-select";

export function Nav() {
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <h1 className="logo">Ana Hillar</h1>
        <nav ref={navRef}>
          <Link to="/" className={location.pathname === '/' ? 'inactive' : ''}>HOME</Link>
          <Link to="/projects" className={location.pathname === '/projects' ? 'inactive' : ''}>PROJECTS</Link>
          <Link to="/ArtWorks" className={location.pathname === '/ArtWorks' ? 'inactive' : ''}>ART WORKS</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'inactive' : ''}>ABOUT</Link>
          <Link to="/ita" > <It/> </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}
