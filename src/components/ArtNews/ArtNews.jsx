import React, { useState } from 'react';
import styles from './ArtNews.module.scss';
import cardsData from '../../data/cardsData'; // Import the data file

const ArtNews = () => {
    const [currentPage, setCurrentPage] = useState(1); // State to track the current page
    const cardsPerPage = 6; // Number of cards per page

    // Calculate the cards to display on the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

    // Calculate the total number of pages
    const totalPages = Math.ceil(cardsData.length / cardsPerPage);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={styles.ArtNews}>
            <h1>Art News</h1>
            <div className={styles.cardsContainer}>
                {currentCards.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <img src={card.image} alt={card.title} />
                        <span>{card.title}</span>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={currentPage === index + 1 ? styles.active : ''}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ArtNews;