import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "../layout/layout.module.scss";
import logo from '../assets/logos/logo-black.svg';

const Header = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <header className={`${styles.Header} ${isScrollingUp ? styles.show : styles.hide}`}>
      <Link to="/">
        <img src={logo} alt="Logo" /> {/* Wrap the logo in a Link */}
      </Link>
      <button className={styles.hamburger} onClick={toggleMenu}>
        {/* Hamburger menu icon */}
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${isMenuOpen ? styles.open : ''}`}>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;