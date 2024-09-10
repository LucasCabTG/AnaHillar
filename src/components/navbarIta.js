import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/navbar.css';
import { Gb } from "react-flags-select";

export function NavIta() {
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
          <Link to="/ita" className={location.pathname === '/ita' ? 'inactive' : ''}>HOME</Link>
          <Link to="/ita/proyects" className={location.pathname === '/ita/proyects' ? 'inactive' : ''}>PROGETTI</Link>
          <Link to="/ita/ArtWorks" className={location.pathname === '/ita/ArtWorks' ? 'inactive' : ''}>OPERE</Link>
          <Link to="/ita/about" className={location.pathname === '/ita/about' ? 'inactive' : ''}>INFORMAZIONI</Link>
          <Link to="/" ><Gb /></Link>
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


