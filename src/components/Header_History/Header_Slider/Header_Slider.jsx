import React, { useState } from 'react';
import styles from './Header_Slider.module.scss';
import photo from '../../../assets/img/header_slide.png';
import photo2 from '../../../assets/img/header_slide.png';

const Header_Slider = () => {
    const slides = [photo, photo2]; // Array of slide images
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={styles.Header_Slider}>
            <button className={styles.prevButton} onClick={prevSlide}>
                &#10094; {/* Left arrow */}
            </button>
            <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className={styles.nextButton} onClick={nextSlide}>
                &#10095; {/* Right arrow */}
            </button>
        </div>
    );
};

export default Header_Slider;